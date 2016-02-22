/**
 * Created by SerP on 22.02.16.
 */
/**
 * Created by gsv on 22.10.2015.
 */


import javax.imageio.ImageIO;
import javax.imageio.stream.ImageInputStream;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.image.BufferedImage;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;


public class TestGeoServer {

    private static JButton button1;
    private static JFrame f;
    private static ImagePanel pp;
    private static Image image;

    public TestGeoServer() {
        button1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                try {
                    CreateMap();
                } catch (Exception e1) {
                    e1.printStackTrace();
                }
                pp.setImage(image);
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

    private static void CreateMap() throws IOException {
        String urlStr = "http://localhost:8080/geoserver/wms?request=GetMap&layers=tiger:poly_landmarks,tiger:tiger_roads&styles=,&bbox=-74.05,40.68,-73.91,40.88&Format=image/png&width=344&height=500&srs=EPSG:4326";
        URL url = new URL(urlStr);
        HttpURLConnection conn =
                (HttpURLConnection) url.openConnection();

        if (conn.getResponseCode() != 200) {
            throw new IOException(conn.getResponseMessage());
        }

        image = ImageIO.read(conn.getInputStream());
        pp.setImage(image);

        conn.disconnect();
    }

    public static void main(String[] args) throws IOException {
        //JFrame
        f = new JFrame();
        f.setTitle("TEST_PANEL");
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        pp = new ImagePanel();
        pp.setLayout(new BorderLayout());

        JPanel panel = new JPanel();
        panel.setLayout(new java.awt.GridLayout());
        panel.setOpaque(false);
        pp.add(panel, java.awt.BorderLayout.NORTH);
        pp.setPreferredSize(new Dimension(100, 100));

        button1 = new JButton();
        button1.setText("Go!");
        panel.add(button1);

        f.add(new JScrollPane(pp));
        f.pack();
        f.setSize(800, 600);
        f.setLocationRelativeTo(null);
        f.setVisible(true);
        CreateMap();
        //pp.setImage(mv.getGeneratedMapImage());

    }

    public static JButton getButton1() {
        return button1;
    }


    public static void setButton1(JButton button1) {
        imageTest.button1 = button1;
    }

}

