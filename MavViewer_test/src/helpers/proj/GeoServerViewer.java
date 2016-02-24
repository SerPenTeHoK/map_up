package helpers.proj;

import oracle.sdovis.*;
import oracle.sdovis.Proj;

import java.awt.*;
import java.awt.geom.Point2D;
import java.io.Serializable;

/**
 * Created by SerP on 24.02.2016.
 */
public class GeoServerViewer implements Serializable {
    MapResponse mResponse = null;

    double[] mbr = null;
    Dimension deviceSize = new Dimension(500, 375);
    protected static int mDPI = 96;

    public Point2D getUserPoint(int var1, int var2) {
        java.awt.geom.Point2D.Double var3 = new java.awt.geom.Point2D.Double((double)var1, (double)var2);
        java.awt.geom.Point2D.Double var4 = new java.awt.geom.Point2D.Double();
        this.mResponse.getAffineTransform().transform(var3, var4);
        double[] var5;
        if(this.mResponse.getRotation() != 0.0D) {
            var5 = this.mResponse.getMBR();
            java.awt.geom.Point2D.Double var6 = new java.awt.geom.Point2D.Double((var5[0] + var5[2]) / 2.0D, (var5[1] + var5[3]) / 2.0D);
            Point2D var7 = rotatePoint(var4, var6, this.mResponse.getRotation() * -1.0D);
            if(var7 != null) {
                var4 = new java.awt.geom.Point2D.Double();
                var4.setLocation(var7);
            }
        }

        var5 = this.mResponse.getMapProjectionParams();
        if(var5 != null) {
            oracle.sdovis.ProjAzEd var8 = oracle.sdovis.ProjAzEd.restore(var5);
            Proj.P2 var9 = new Proj.P2();
            var8.inverse(var4.getX(), var4.getY(), var9);
            var4.setLocation(var9.x, var9.y);
        }

        return var4;
    }

    public static Point2D rotatePoint(Point2D var0, Point2D var1, double var2) {
        if(var0 != null && var1 != null && var2 >= -360.0D && var2 <= 360.0D) {
            double var4 = 3.141592653589793D;
            double var6 = var2 * var4 / 180.0D;
            double var8 = var1.getX();
            double var10 = var1.getY();
            double var12 = var0.getX() - var8;
            double var14 = var0.getY() - var10;
            double var16 = var12 * Math.cos(var6) - var14 * Math.sin(var6) + var8;
            double var18 = var12 * Math.sin(var6) + var14 * Math.cos(var6) + var10;
            return new java.awt.geom.Point2D.Double(var16, var18);
        } else {
            return null;
        }
    }

    public Dimension getDeviceSize() {
        return this.deviceSize;
    }


    public double getMapScale() {
        if(this.mResponse != null && this.mbr != null) {
            double var1 = this.getDeviceSize().getHeight() / (double)mDPI;
            double var3 = (this.mbr[3] - this.mbr[1]) / var1;
            return var3;
        } else {
            return 0.0D / 0.0;
        }
    }
    static {
        try {
            mDPI = Toolkit.getDefaultToolkit().getScreenResolution();
        } catch (Throwable var1) {
            System.err.println("Cannot determine native display resolution: " + var1.getMessage());
            System.err.println("Using 96 as default DPI.");
        }
    }
}
