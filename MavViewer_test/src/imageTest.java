/**
 * Created by gsv on 22.10.2015.
 */

import oracle.lbs.mapclient.MapViewer;
import oracle.mapviewer.share.style.ColorStyleModel;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.io.File;
import java.io.IOException;


public class imageTest {
    private static MapViewer mv;
    private static JButton button1;
    private static JFrame f;
    private static ImagePanel pp;

    public imageTest() {
        button1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                mv.setCenterAndSize(40, 59, 50.0);
                try {
                    mv.run();
                } catch (Exception e1) {
                    e1.printStackTrace();
                }
                pp.setImage(mv.getGeneratedMapImage());
                pp.repaint();
            }
        });
        f.addMouseListener(new MouseListener() {
            @Override
            public void mouseClicked(MouseEvent e) {

            }

            @Override
            public void mousePressed(MouseEvent e) {

            }

            @Override
            public void mouseReleased(MouseEvent e) {

            }

            @Override
            public void mouseEntered(MouseEvent e) {

            }

            @Override
            public void mouseExited(MouseEvent e) {

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
        //mv.addJDBCTheme("GEO", "MAP_DISTRICT", "select geometry from MAP_DISTRICT", "geometry", "8307", "C.RED", null, null, false);

        // test
        mv.setCenterAndSize(35.599167, 51.7075, 12.0); // +
        //mv.setBaseMapName("MAPNAME");
        //mv.addJDBCTheme("GEO", "geo_object",  "select geometry from geo_object where g.id$ between 1291949 and 1291977", "geometry", "4200", "M.STAR", null, null, false);
        mv.addJDBCTheme("GEO", "MAP_DISTRICT", "select geometry from MAP_DISTRICT", "geometry", "8307", "C.RED", null, null, false);
        mv.addJDBCTheme("GEO", "geo_object",  "select geometry from geo_object where id$ between 1241949 and 1291977", "geometry", "4200", "M.B_ST", null, null, false);
        mv.addJDBCTheme("GEO", "geo_object1",  "select geometry from geo_object where id$ between 1291949 and 1291977", "geometry", "4200", "M.NEW_MARKER_STYLE", null, null, false);

        ColorStyleModel csm = new ColorStyleModel();
        csm.setFillColor(new Color(255, 0, 0, 100));
        csm.setStrokeColor(new Color(0, 0, 255, 100));
        mv.addStyle("my_color", csm);//mv.addPredefinedTheme("Them"); // ????
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

    public static void main(String[] args) {
        //JFrame
        f = new JFrame();
        f.setTitle("My Panel");
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        pp = new ImagePanel();
        pp.setLayout(new BorderLayout());
        try {
            pp.setImage(ImageIO.read(new File("C:\\1\\pict.jpg")));
        } catch (IOException e) {
            e.printStackTrace();
        }
        JPanel panel = new JPanel();
        panel.setLayout(new java.awt.GridLayout());
        panel.setOpaque(false);
        pp.add(panel, java.awt.BorderLayout.NORTH);
        pp.setPreferredSize(new Dimension(100, 100));

        /*
        JLabel label = new JLabel();
        label.setFont(new java.awt.Font("Tahoma", 0, 24));
        label.setForeground(new java.awt.Color(255, 0, 0));
        label.setText("\u042d\u0442\u043e JLabel");
        panel.add(label);
        */
        button1 = new JButton();
        button1.setText("Go!");
        panel.add(button1);

        f.add(new JScrollPane(pp));
        f.pack();
        f.setSize(800, 600);
        f.setLocationRelativeTo(null);
        f.setVisible(true);
        CreateMap();
        pp.setImage(mv.getGeneratedMapImage());
    }

    public static JButton getButton1() {
        return button1;
    }

    public static void setButton1(JButton button1) {
        imageTest.button1 = button1;
    }
}
