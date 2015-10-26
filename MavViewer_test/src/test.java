/**
 * Created by gsv on 19.10.2015.
 */

import javax.imageio.ImageIO;
import javax.swing.*;
import oracle.lbs.mapclient.MapViewer;
import oracle.lbs.mapclient.*;
import oracle.mapviewer.share.*;
import oracle.mapviewer.share.style.ColorStyleModel;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;


public class test {

    private JPanel p1;
    private JButton button1;
    private static ImagePanel pp;
    private JTextArea textArea1;

    private static MapViewer mv;
    java.awt.Image getGeneratedMapImage;
    String getGeneratedMapImageURL;

    public test() {
        button1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                mv.setCenterAndSize(45, 59, 50.0);
            }
        });
    }

    private static void CreateMap() {
        mv = new MapViewer("http://airsm-test-app.grfc.rf:9001/mapviewer/omserver");
        mv.setDataSourceName("GEO");
        mv.setBaseMapName("DISTRICT"); // +
        mv.setMapTitle("Test java");
        mv.setAntiAliasing(true);
        //mv.setBackgroundColor(new Color(1, 200, 100,100)); // +
        //mv.setImageFormat(MapViewer.FORMAT_PNG_URL);
        mv.setCenterAndSize(45, 59, 30.0); // +
        mv.setDeviceSize(new Dimension(600, 475));
        mv.addJDBCTheme("GEO", "MAP_DISTRICT", "select geometry from MAP_DISTRICT where  name = 'Анапский район'", "geometry", "8307", "C.RED", null, null, false);
        //mv.addJDBCTheme("mvdemo", "MAP_DISTRICT",  "select geometry from MAP_DISTRICT", "geometry", "8307", "C.RED", null, null, false);

        ColorStyleModel csm = new ColorStyleModel();
        csm.setFillColor(new Color(255, 0, 0, 100));
        csm.setStrokeColor(new Color(0, 0, 255, 100));
        mv.addStyle("my_color", csm);//mv.addPredefinedTheme("Them"); // ����
        try {
            mv.run();
        } catch (Exception e) {
            e.printStackTrace();
        }
        //mv.pan(20,20);
        //mv.zoomIn(100);
        mv.setImageFormat(MapViewer.FORMAT_RAW_COMPRESSED);
        //java.awt.Image getGeneratedMapImage = mv.getGeneratedMapImage();
        //String mapstr = mv.getGeneratedMapImageURL();
    }

    public static void main(String[] args) throws Exception {
        JFrame frame = new JFrame("test");
        frame.setContentPane(new test().p1);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        pp = new ImagePanel();
        pp.setLayout(new BorderLayout());
        JPanel panel = new JPanel();
        panel.setLayout(new java.awt.GridLayout());
        panel.setOpaque(false);
        pp.add(panel, java.awt.BorderLayout.NORTH);
        pp.setPreferredSize(new Dimension(100, 100));

        frame.pack();
        frame.setVisible(true);

        mv = new MapViewer("http://airsm-test-app.grfc.rf:9001/mapviewer/omserver");
        mv.setDataSourceName("GEO");
        //mv.setBaseMapName("DISTRICT"); // +
        mv.setMapTitle("Test java");
        mv.setAntiAliasing(true);
        //mv.setBackgroundColor(new Color(1, 200, 100,100)); // +
        //mv.setImageFormat(MapViewer.FORMAT_PNG_URL);
        mv.setCenterAndSize(45, 59, 30.0); // +
        mv.setDeviceSize(new Dimension(600, 475));
        //mv.addJDBCTheme("GEO", "MAP_DISTRICT",  "select geometry from MAP_DISTRICT", "geometry", "8307", "C.RED", null, null, false);
        //mv.addJDBCTheme("mvdemo", "MAP_DISTRICT",  "select geometry from MAP_DISTRICT", "geometry", "8307", "C.RED", null, null, false);
        mv.setBaseMapName("GEO_OBJECT"); // +
        mv.addJDBCTheme("GEO", "geo_object",  "select geometry from geo_object where g.id$ between 1291949 and 1291977", "geometry", "4200", "M.STAR", null, null, false);

        ColorStyleModel csm = new ColorStyleModel();
        csm.setFillColor(new Color(255, 0, 0, 100));
        csm.setStrokeColor(new Color(0, 0, 255, 100));
        mv.addStyle("my_color", csm);//mv.addPredefinedTheme("Them"); // ����
        try {
            mv.run();
        } catch (Exception e) {
            e.printStackTrace();
        }
        //mv.pan(20,20);
        //mv.zoomIn(100);
        mv.setImageFormat(MapViewer.FORMAT_RAW_COMPRESSED);
        java.awt.Image getGeneratedMapImage = mv.getGeneratedMapImage();
        String mapstr = mv.getGeneratedMapImageURL();

        pp.setImage(getGeneratedMapImage);
        pp.repaint();

        frame.setTitle(mapstr);
        //frame.imageUpdate( getGeneratedMapImage,1, 1, 1, 600, 475);
        frame.setIconImage(getGeneratedMapImage);
    }
}
