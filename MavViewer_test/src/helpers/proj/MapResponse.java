package helpers.proj;


import java.awt.*;
import java.awt.geom.AffineTransform;
import java.io.Serializable;

/**
 * Created by SerP on 24.02.2016.
 */
public class MapResponse implements Serializable, oracle.mapviewer.share.MapFormats {
    static final long serialVersionUID = -3854084457594740563L;
    protected Object imageData = null;
    protected Throwable exception = null;
    protected AffineTransform transform = null;
    protected double rotation = 0.0D;
    protected double[] mbr = null;
    protected String status = "SUCCESS";
    protected Dimension deviceSize = null;
    protected double currentScale = 0.0D;
    protected String[] themeNames = null;
    protected int imageFormat = 9;
    protected int imageSize = 0;
    //protected LiveFeature[] liveFeatures = new LiveFeature[0];
    protected double[] proj;
    protected int srid = 0;
    private static Component sComponent = null;
    private static MediaTracker sTracker = null;
    private static int sID = 0;

    public MapResponse() {
    }

    public double[] getMapProjectionParams() {
        return this.proj;
    }

    public AffineTransform getAffineTransform() {
        return this.transform;
    }

    public double getRotation() {
        return this.rotation;
    }

    public double[] getMBR() {
        return this.mbr;
    }
}