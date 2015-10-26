/**
 * Created by gsv on 22.10.2015.
 */
import javax.swing.*;
import java.awt.*;

public class ImagePanel extends JPanel {
    private Image image;
    public Image getImage() {
        return image;
    }
    public void setImage(Image image) {
        this.image = image;
        this.repaint();
    }
    public void paintComponent(Graphics g) {
        super.paintComponent(g);

        // надо контролировать вывод и размеры самой карты
        if(image != null){
            g.drawImage(image, 0, 0, getWidth(), getHeight(), null);
        }
    }
}