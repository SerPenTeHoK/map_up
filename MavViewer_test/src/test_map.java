import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by gsv on 23.10.2015.
 */
public class test_map {
    private JPanel mainPanel;
    private JButton button1;
    private JPanel Map_panel;
    private MapControl mapControl;
    private ImagePanel imagePanel;

    public test_map() {
        button1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                createUIComponents();
                imagePanel = new ImagePanel();
                mainPanel.add(imagePanel);

                mapControl = new MapControl(imagePanel);
            }
        });
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("test_map");
        frame.setContentPane(new test_map().mainPanel);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setVisible(true);
    }

    private void createUIComponents() {
        // TODO: place custom component creation code here
    }
}
