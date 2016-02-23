/**
 * Created by SerP on 23.02.16.
 */


import org.jdom.Element;
import sun.misc.IOUtils;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.event.*;
import java.awt.geom.Point2D;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class MapControlGeoServer {

    //private static final Logger logger = LoggerFactory getLogger(MapControl.class);

    private ImagePanel mapPanel;
    private Image mapImage;
    //public MapViewer mv;
    private String mapServerName;
    private String mapDataSorce;
    private String baseMapName;
    private String mapTitle;
    private static Dimension dimensionOutputSize = new Dimension(200, 200);

    // что нам понадобится
    // 1) Подложка - основная карта
    // 2) Выборка по критериям и тут объединение слоев
    // 3) Разные способы задания запрос URL и XML
    // 4) Потом надо сделать проверку на невозможность запроса слоев которых нет

    // для начальной карты
    private String queryBaseTable; // таблица из которой берутся данные
    private String queryBaseColumn; // столбец с геоданными из базовой таблицы
    private StringBuilder queryFromBasicData; //
    private String BaseSRID; // SRID

    Point startMousePoint;
                            //"http://localhost:8080/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&layers=tiger:poly_landmarks,tiger:tiger_roads&styles=,&bbox=-74.05,40.68,-73.91,40.88&width=344&height=500&srs=EPSG:4326&x=1&y=1";
    private String getMap = "http://192.168.1.80:8180/geoserver/wms?request=GetMap&layers=tiger:poly_landmarks,tiger:tiger_roads&styles=,&bbox=-74.05,40.68,-73.91,40.88&Format=image/png&width=344&height=500&srs=EPSG:4326";
                          //"http://192.168.1.80:8180/geoserver/wms?request=GetMap&layers=tiger:poly_landmarks&styles=,&bbox=-74.05,40.68,-73.91,40.88&Format=image/png&width=344&height=500&srs=EPSG:4326&FILTER=%3CFilter%3E%3CPropertyIsBetween%3E%3CPropertyName%3Etiger:LAND%3C/PropertyName%3E%3CLowerBoundary%3E%3CLiteral%3E10%3C/Literal%3E%3C/LowerBoundary%3E%3CUpperBoundary%3E%3CLiteral%3E150%3C/Literal%3E%3C/UpperBoundary%3E%3C/PropertyIsBetween%3E%3C/Filter%3E";
    private String getFeature = "http://192.168.1.80:8180/geoserver/wms?request=GetMap&layers=tiger:poly_landmarks&styles=,&bbox=-74.05,40.68,-73.91,40.88&Format=image/png&width=344&height=500&srs=EPSG:4326&FILTER=%3CFilter%3E%3CPropertyIsBetween%3E%3CPropertyName%3Etiger:LAND%3C/PropertyName%3E%3CLowerBoundary%3E%3CLiteral%3E10%3C/Literal%3E%3C/LowerBoundary%3E%3CUpperBoundary%3E%3CLiteral%3E150%3C/Literal%3E%3C/UpperBoundary%3E%3C/PropertyIsBetween%3E%3C/Filter%3E";

    MapControlGeoServer(ImagePanel inMapPanel) {
        mapPanel = inMapPanel;
        // базовые настройки
        mapServerName = "http://airsm-test-app.grfc.rf:9001/mapviewer/omserver";
        mapDataSorce = "GEO";
        baseMapName = "EMPTY_MAP";
        mapTitle = "mapControl";
        queryBaseTable = "MAP_DISTRICT";
        queryBaseColumn = "geometry";
        queryFromBasicData = new StringBuilder();
        BaseSRID = "4200";


        setupBaseMapParametrs();
        setOutputSize(500, 500);
        setDefColorStyleModel();
        setMapImageControl();
    }

    private void setMapImageControl()
    {
        mapPanel.addMouseListener(new MouseListener() {
            @Override
            public void mouseClicked(MouseEvent e) {

                //getMap = "http://localhost:8080/geoserver/wms?request=GetMap&layers=tiger:poly_landmarks,tiger:tiger_roads&styles=,&bbox=-74.05,40.68,-73.91,40.88&Format=image/png&width=344&height=500&srs=EPSG:4326";;
                getMap = getFeature;
                work();
                /*
                //String urlStr = getFeature;
                String urlStr = "http://localhost:8080/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&layers=tiger:poly_landmarks,tiger:tiger_roads&styles=,&bbox=-74.05,40.68,-73.91,40.88&width=344&height=500&srs=EPSG:4326&x=1&y=1";
                URL url = null;
                HttpURLConnection conn = null;
                try {
                    url = new URL(urlStr);
                    conn = null;

                    conn = (HttpURLConnection) url.openConnection();


                    if (conn.getResponseCode() != 200) {
                        throw new IOException(conn.getResponseMessage());
                    }

                    Element pb = JDOMBuilder.buildElement(conn.toString());
                    InputStream is = conn.getInputStream();
                    System.out.printf(is.toString());
                } catch (IOException e1) {
                    e1.printStackTrace();
                } finally {
                    conn.disconnect();

                }
                */


            }

            @Override
            public void mousePressed(MouseEvent e) {
                startMousePoint = e.getPoint();
            }

            @Override
            public void mouseReleased(MouseEvent e) {
                Point endMousePoint = startMousePoint;

                //Point2D point2d = mv.getUserPoint(endMousePoint.x, endMousePoint.y);
                //setCenter(point2d.getX(), point2d.getY());
                run();
            }

            @Override
            public void mouseEntered(MouseEvent e) {
            }

            @Override
            public void mouseExited(MouseEvent e) {

            }
        });
        mapPanel.addMouseWheelListener(new MouseWheelListener() {
            @Override
            public void mouseWheelMoved(MouseWheelEvent e) {
                if (e.isShiftDown()) {
                    int mouserot = e.getWheelRotation();
                    // количество вращений колёсико на себя это + от себя - zoom
                    /*
                    Double mapScale = mv.getMapScale();
                    double scaleMap = mapScale + (mouserot / mapScale);
                    double zoom = mouserot / mapScale;
                    if (mouserot < 0) {
                        try {
                            mv.zoomIn(zoom * -1 + 0.5);
                            //setCenterAndSize(, mapScale);
                        } catch (Exception e1) {
                            e1.printStackTrace();
                        }
                    } else {
                        try {
                            mv.zoomOut(zoom + 1 + 0.5);
                        } catch (Exception e1) {
                            e1.printStackTrace();
                        }
                    }
                    */
                    run();
                }
                else
                {
                    int mouserot = e.getWheelRotation();
                    // количество вращений колёсико на себя это + от себя - zoom
                    /*
                    Double mapScale = mv.getMapScale();
                    double scaleMap = mapScale + (mouserot / mapScale);
                    double zoom = mouserot / mapScale;
                    if (mouserot < 0) {
                        try {
                            mv.zoomIn((zoom * -1)+0.2);
                        } catch (Exception e1) {
                            e1.printStackTrace();
                        }
                    } else {
                        try {
                            mv.zoomOut(zoom);
                        } catch (Exception e1) {
                            e1.printStackTrace();
                        }
                    }
                    */
                    run();
                }
            }
        });
        mapPanel.addComponentListener(new ComponentAdapter() {
            @Override
            public void componentResized(ComponentEvent e) {
                super.componentResized(e);
                if(mapPanel != null) {
                    //mv.setDeviceSize(new Dimension(mapPanel.getWidth(), mapPanel.getHeight()));
                    if(setOutputSize(mapPanel.getWidth(), mapPanel.getHeight()))
                        run();
                    else
                    {
                        ;
                        //logger.error("Exception: ", ex);
                    }
                }
            }

            @Override
            public void componentMoved(ComponentEvent e) {

            }

            @Override
            public void componentShown(ComponentEvent e) {

            }

            @Override
            public void componentHidden(ComponentEvent e) {

            }
        });
    }


    public boolean setupBaseMapParametrs() {
        try {
            /*
            mv = new MapViewer(mapServerName); // Сервер куда подключаемся
            mv.setDataSourceName(mapDataSorce); // Источник данных для карты. Настраивается через серверное приложение MapViewer в настройках DataSource
            mv.setBaseMapName(baseMapName); // Базовая карта. Настраивается через MapBuilder (подложка)
            if (mapTitle.isEmpty())
                mv.setMapTitle(mapTitle); // Заголовок прямо на карте
            mv.setAntiAliasing(true);
            queryFromBasicData.delete(0, queryFromBasicData.length());
            queryFromBasicData.append("select ").append(queryBaseColumn).append(" from ").append(queryBaseTable); // Базовый запроса
            //mv.addJDBCTheme(mapDataSorce, queryBaseTable, queryFromBasicData.toString(), queryBaseColumn, BaseSRID, "C.RED", null, null, false); // установка доступа
            mv.setImageFormat(MapViewer.FORMAT_RAW_COMPRESSED); // формат нужен для передачи изображения в Image
            */

            // test
            //mv.setBaseMapName("GEO_OBJECT");
            //mv.addJDBCTheme("GEO", "geo_object",  "select geometry from geo_object where g.id$ between 1291949 and 1291977", "geometry", "4200", "M.STAR", null, null, false);

            //mv.addJDBCTheme("GEO", "MAP_DISTRICT", "select geometry from MAP_DISTRICT", "geometry", "8307", "C.RED", null, null, false);
            //mv.addJDBCTheme("GEO", "geo_object",  "select geometry from geo_object where id$ between 1241949 and 1291977", "geometry", "4200", "M.B_ST", null, null, false);
            //mv.addJDBCTheme("GEO", "geo_object1",  "select geometry from geo_object where id$ between 1291949 and 1291977", "geometry", "4200", "M.NEW_MARKER_STYLE", null, null, false);


            StringBuilder sb = new StringBuilder();
//            sb.append("select geometry from MAP_DISTRICT where upper(name) Like");
//            sb.append("\'%ДМИТРО%\'");
//            sb.append("and OKATO <> \'54212\'");

            // для точки соседние регионы
            /* // РАБОТАЕТ
            sb.append("select geometry from MAP_DISTRICT md ");
            sb.append("where SDO_WITHIN_DISTANCE(md.geometry, ");
            sb.append("sdo_geometry(2001, 4200, ");
            sb.append("sdo_point_type(");
            sb.append(35);
            sb.append(", ");
            sb.append(50);
            sb.append(", NULL), ");
            sb.append(" null, NUll ), ");
            sb.append(" \'DISTANCE=");
            sb.append(100);
            sb.append(" UNIT=KM\') = \'TRUE\' ");
            */

            /*
            sb.append("select geometry from MAP_DISTRICT md ");
            sb.append("where SDO_WITHIN_DISTANCE(md.geometry, ");
            sb.append("(select geometry from geo_object where id$ between 1241949 and 1291977)");
            sb.append(" , ");
            sb.append(" \'DISTANCE=");
            sb.append(100);
            sb.append(" UNIT=KM\') = \'TRUE\' ");
*/

            /* // фигово
            sb.append(      "select md.geometry from geo_object geo, map_district md " +
                            "       where geo.id$ between 1291949 and 1291977 " +
                            "       and " +
                            "       (SDO_WITHIN_DISTANCE(md.geometry, " +
                            "                     geo.geometry, " +
                            "                     'DISTANCE=70 UNIT=KM') = 'TRUE')"

            );
            */

            /*
            // Нормально
            sb.append("select map_d.geometry from  map_district map_d ");
            sb.append("where  ");
            sb.append("map_d.id in ( ");
            sb.append(" select distinct md.id from geo_object geo, map_district md ");
            //sb.append(        "select md.geometry from geo_object geo, map_district md " +
            //sb.append(" where geo.id$ between 1291949 and 1291977 ");
            sb.append("  where geo.id$ = ").append(1291977);
            sb.append(" and ");
            sb.append(" (SDO_WITHIN_DISTANCE(md.geometry, ");
            sb.append(" geo.geometry, ");
            sb.append(" 'DISTANCE=70 UNIT=KM') = 'TRUE')");
            sb.append(" )");

            mv.addJDBCTheme("GEO", "Test_short", sb.toString(), "geometry", "8307", "C.RED", null, null, false);
            mv.addJDBCTheme("GEO", "geo_object1", "select geometry from geo_object where id$ between 1291949 and 1291977", "geometry", "4200", "M.NEW_MARKER_STYLE", null, null, false);
            mv.addJDBCTheme("GEO", "geo_object2", "select geometry from geo_object where id$ = 1291977", "geometry", "4200", "M.B_ST", null, null, false);
*/

        } catch (Exception ex) {
            //logger.error("Exception: ", ex);
            return false;
        }
        return true;
    }

    private void setDefColorStyleModel() {
        /*
        ColorStyleModel csm = new ColorStyleModel();
        csm.setFillColor(new Color(255, 0, 0, 100));
        csm.setStrokeColor(new Color(0, 0, 255, 100));
        mv.addStyle("my_color", csm);
        */
    }

    private boolean work() {
        try {
            //String urlStr = "http://localhost:8080/geoserver/wms?request=GetMap&layers=tiger:poly_landmarks,tiger:tiger_roads&styles=,&bbox=-74.05,40.68,-73.91,40.88&Format=image/png&width=500&height=500&srs=EPSG:4326";
            //String urlStr = "http://localhost:8080/geoserver/wms?request=GetMap&layers=tiger:poly_landmarks,tiger:tiger_roads&styles=,&bbox=-74.05,40.68,-73.91,40.88&Format=image/png&width=344&height=500&srs=EPSG:4326";
            String urlStr = getMap;
            URL url = new URL(urlStr);
            HttpURLConnection conn =
                    (HttpURLConnection) url.openConnection();

            if (conn.getResponseCode() != 200) {
                throw new IOException(conn.getResponseMessage());
            }

            mapImage = ImageIO.read(conn.getInputStream());
            mapPanel.setImage(mapImage);

            conn.disconnect();

        } catch (Exception e) {
            //logger.error("Exception: ", ex);
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public boolean run() {
        if (work()) {
            mapPanel.setImage(mapImage);
            mapPanel.repaint();
            return true;
        } else
            return false;
    }


    public boolean setCenterAndSize(double latitude, double longitude, double zoom) {
        if (longitude > 180)
            longitude -= 180;
        else if (longitude < -180)
            longitude += 180;
        if (latitude > 90)
            latitude -= 90;
        else if (latitude < -90) {
            latitude += 90;
        }

        if (latitude > 90 || latitude < -90 || longitude < -180 || longitude > 180)
            return false;
        else
            ;//mv.setCenterAndSize(latitude, longitude, zoom);
        return true;
    }

    public boolean setCenter(double latitude, double longitude) {
        if (longitude > 180)
            longitude -= 180;
        else if (longitude < -180)
            longitude += 180;
        if (latitude > 90)
            latitude -= 90;
        else if (latitude < -90) {
            latitude += 90;
        }

        if (latitude > 90 || latitude < -90 || longitude < -180 || longitude > 180)
            return false;
        else
            ;//mv.setCenter(latitude, longitude);
        return true;
    }

    public boolean setOutputSize(Integer width, Integer height) {
        if (width <= 5 || height <= 5)
            return false;
        else {
            dimensionOutputSize.setSize(width, height);
            //mv.setDeviceSize(dimensionOutputSize);
        }
        return true;
    }

    public ImagePanel getMapPanel() {
        return mapPanel;
    }

    public void setMapPanel(ImagePanel mapPanel) {
        this.mapPanel = mapPanel;
    }

    public String getMapDataSorce() {
        return mapDataSorce;
    }

    public void setMapDataSorce(String mapDataSorce) {
        this.mapDataSorce = mapDataSorce;
    }

    public String getBaseMapName() {
        return baseMapName;
    }

    public void setBaseMapName(String baseMapName) {
        this.baseMapName = baseMapName;
    }

    public String getMapServerName() {
        return mapServerName;
    }

    public void setMapServerName(String mapServerName) {
        this.mapServerName = mapServerName;
    }

    public String getMapTitle() {
        return mapTitle;
    }

    public void setMapTitle(String mapTitle) {
        this.mapTitle = mapTitle;
    }

    public String getQueryBaseTable() {
        return queryBaseTable;
    }

    public void setQueryBaseTable(String queryBaseTable) {
        this.queryBaseTable = queryBaseTable;
    }

    public String getQueryBaseColumn() {
        return queryBaseColumn;
    }

    public void setQueryBaseColumn(String queryBaseColumn) {
        this.queryBaseColumn = queryBaseColumn;
    }

    public String getBaseSRID() {
        return BaseSRID;
    }

    public void setBaseSRID(String baseSRID) {
        BaseSRID = baseSRID;
    }


}
