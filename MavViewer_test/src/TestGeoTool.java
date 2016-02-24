/**
 * Created by SerP on 24.02.2016.
 */
/**
 * Created by SerP on 23.02.16.
 */
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

/**
 * Created by gsv on 23.10.2015.
 */
public class TestGeoTool {
    private JPanel GL_panel;
    private JButton button1;
    private JButton button2;
    private JButton button3;
    private JButton button4;
    private JButton button5;

    ImagePanel imagePanel;
    MapControlGeoServer mapControl;

    private JPanel panel_menu;
    private JPanel panel_Work;

    private static JFrame frame;



    public static void main(String[] args) {
        frame = new JFrame("TestMapGeoServer");
        frame.setContentPane(new TestGeoTool().GL_panel);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setVisible(true);
    }

    private void createUIComponents() {
        // TODO: place custom component creation code here
    }

    public TestGeoTool() {
        // установим у главной панели по краям
        GL_panel.setLayout(new BorderLayout());
        panel_menu = new JPanel();
        GL_panel.add(panel_menu, BorderLayout.NORTH);

        panel_menu.setLayout(new FlowLayout(FlowLayout.LEFT));
        button1 = new JButton();
        button1.setText("Load map");
        panel_menu.add(button1);
        button2 = new JButton("Resize");
        panel_menu.add(button2);
        button3 = new JButton("Disable");
        panel_menu.add(button3);
        button4 = new JButton("Точка далеко");
        panel_menu.add(button4);
        button5 = new JButton("Полигонище");
        panel_menu.add(button5);



        panel_Work = new JPanel();
        panel_Work.setSize(GL_panel.getWidth(), GL_panel.getHeight());
        GL_panel.add(panel_Work, BorderLayout.CENTER);
        panel_Work.setLayout(new GridLayout(1, 1));

        frame.setSize(600, 600);
        frame.resize(600, 600);
        frame.repaint();

        imagePanel = new ImagePanel();
        panel_Work.add(imagePanel);
        panel_Work.setSize(350, 500);
        imagePanel.setSize(350, 500);

        button1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                mapControl = new MapControlGeoServer(imagePanel);
                mapControl.run();

                /*
                ImageObserver observer = new ImageObserver() {
                    @Override
                    public boolean imageUpdate(Image img, int infoflags, int x, int y, int width, int height) {
                        return false;
                    }
                };
                int width = imagePanel.getImage().getWidth(observer);
                int height = imagePanel.getImage().getHeight(observer);
                frame.resize(width, height);
                */
                frame.repaint();

            }
        });
        button2.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                /*
                mapControl.mv.setDeviceSize(new Dimension(frame.getWidth(), frame.getHeight()));
                mapControl.run();
                panel_Work.repaint();

                ImageObserver observer = new ImageObserver() {
                    @Override
                    public boolean imageUpdate(Image img, int infoflags, int x, int y, int width, int height) {
                        return false;
                    }
                };

                int width = imagePanel.getImage().getWidth(observer);
                int height = imagePanel.getImage().getHeight(observer);
                //frame.setSize(width+frame.getWidth(), height+frame.getHeight());
                frame.resize(width, height);
                frame.repaint();
                */
            }
        });
        button3.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(button3.getText().equalsIgnoreCase("disable")) {
                    //mapControl.mv.setThemeEnabled(false, "geo_object2");
                    button3.setText("Enable");
                }
                else
                {
                    //mapControl.mv.setThemeEnabled(true, "geo_object2");
                    button3.setText("Disable");
                }
                //mapControl.run();
            }
        });
        button4.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                double[] mask = new double[]{36.0, 53.0, 36.0, 53.0, 36.0, 53.0};

                //mapControl.mv.addPointFeature(45.0, 56.0, 4200, "M.B_ST", "Точка", null, null, null, true);
                //mapControl.mv.addPointFeature(36.0, 53.0, 4200, "M.B_ST", "Точка", null, mask, null, true);
                //mapControl.run();
            }
        });

        button5.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                double[][] polly = new double[][]{{36.0,53.0},{36.5,53.0}, {37.0,54.0}, {36.0,53.0}};
                //mapControl.mv.addPolygonFeature("pol name", polly, 4200, "M.B_ST", "Полигонище", null, true);
                //mapControl.run();
            }
        });
    }
}
