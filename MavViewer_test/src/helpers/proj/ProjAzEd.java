package helpers.proj;

/**
 * Created by SerP on 24.02.2016.
 */
import java.awt.geom.Rectangle2D;
import java.awt.geom.Rectangle2D.Double;
import oracle.sdovis.CoordArray;
import oracle.sdovis.Proj;
import oracle.sdovis.Proj.P2;
import oracle.sdovis.Proj.util;

public class ProjAzEd implements Proj {
    private static final int SOUTH_POLE = 1;
    private static final int NORTH_POLE = 2;
    private double R;
    private double clon;
    private double clat;
    private double dlon;
    private double dlat;
    private double easting;
    private double northing;
    private double _cos_clat;
    private double _sin_clat;
    private double o_clon;
    private double o_clat;
    private int pole_pos;
    private Rectangle2D virtualQW;
    private static double[] bg;

    public ProjAzEd(double var1, double var3) {
        this(6378206.4D, var1, var3);
    }

    public ProjAzEd(double var1, double var3, double var5) {
        this.pole_pos = 0;
        this.R = var1;
        if(var5 == 90.0D) {
            this.pole_pos = 2;
        } else if(var5 == -90.0D) {
            this.pole_pos = 1;
        }

        this.dlon = util.Clip(var3, -360.0D, 360.0D);
        this.dlat = util.Clip(var5, -90.0D, 90.0D);
        this.o_clon = this.dlon <= 0.0D?this.dlon + 180.0D:this.dlon - 180.0D;
        this.o_clat = this.dlat == 0.0D?0.0D:-this.dlat;
        this.clon = util.Clip(var3 * 0.017453292519943295D, -6.283185307179586D, 6.283185307179586D);
        this.clat = util.Clip(var5 * 0.017453292519943295D, -1.5707963267948966D, 1.5707963267948966D);
        this.init();
    }

    public double[] save() {
        return new double[]{(double)this.getProjId(), this.R, this.dlon, this.dlat};
    }

    public static ProjAzEd restore(double[] var0) {
        if(var0[0] != 1.0D) {
            System.err.println("Error: Projection ID does not match!");
        }

        return new ProjAzEd(var0[1], var0[2], var0[3]);
    }

    public double getR() {
        return this.R;
    }

    public P2 getCenter() {
        return new P2(this.clon * 57.29577951308232D, this.clat * 57.29577951308232D);
    }

    public int getProjId() {
        return 1;
    }

    public final boolean forward(double var1, double var3, P2 var5) {
        double var6 = 0.0D;
        double var8 = 0.0D;
        var1 *= 0.017453292519943295D;
        boolean var10 = var3 >= 90.0D || var3 <= -90.0D;
        if(var3 == 90.0D) {
            var3 = 1.5707963267948966D;
        } else if(var3 == -90.0D) {
            var3 = -1.5707963267948966D;
        } else {
            var3 *= 0.017453292519943295D;
        }

        double var11 = util.adjustLon(var1 - this.clon);
        double var13 = 0.0D;
        double var15 = this._sin_clat * Math.sin(var3) + this._cos_clat * Math.cos(var3) * Math.cos(var11);
        if(Math.abs(1.0D - var15) < 1.0E-15D) {
            var5.set(0.0D + this.easting, 0.0D + this.northing);
            return true;
        } else if(Math.abs(-1.0D - var15) < 1.0E-10D) {
            return false;
        } else {
            double var17 = Math.acos(var15);
            var13 = var17 / Math.sin(var17);
            var6 = var10?0.0D:this.R * var13 * Math.cos(var3) * Math.sin(var11);
            if(var10) {
                var8 = this.R * var13 * this._cos_clat * Math.sin(var3);
            } else {
                var8 = this.R * var13 * (this._cos_clat * Math.sin(var3) - this._sin_clat * Math.cos(var3) * Math.cos(var11));
            }

            var5.set(var6 + this.easting, var8 + this.northing);
            return true;
        }
    }

    public final boolean inverse(double var1, double var3, P2 var5) {
        double var6 = 0.0D;
        double var8 = 0.0D;
        var1 -= this.easting;
        var3 -= this.northing;
        if(var1 == 0.0D && var3 == 0.0D) {
            var8 = this.clon * 57.29577951308232D;
            var6 = this.clat * 57.29577951308232D;
            var5.set(var8, var6);
            return true;
        } else {
            double var10 = Math.sqrt(var1 * var1 + var3 * var3);
            double var12 = var10 / this.R;
            var6 = Math.asin(Math.cos(var12) * this._sin_clat + var3 * Math.sin(var12) * this._cos_clat / var10);
            if(this.pole_pos == 2) {
                var8 = this.clon + Math.atan2(var1, -var3);
            } else if(this.pole_pos == 1) {
                var8 = this.clon + Math.atan2(var1, var3);
            } else {
                double var14 = Math.atan2(var1 * Math.sin(var12), var10 * this._cos_clat * Math.cos(var12) - var3 * this._sin_clat * Math.sin(var12));
                var8 = this.clon + var14;
            }

            var6 *= 57.29577951308232D;
            var8 *= 57.29577951308232D;
            var6 = util.Clip(var6, -90.0D, 90.0D);
            if(var8 > 180.0D) {
                var8 -= 360.0D;
            } else if(var8 < -180.0D) {
                var8 += 360.0D;
            }

            var5.set(var8, var6);
            return true;
        }
    }

    public void setOffset(double var1, double var3) {
        this.easting = var1;
        this.northing = var3;
    }

    public P2 getOffset() {
        return new P2(this.easting, this.northing);
    }

    public boolean isOddPoint(double var1, double var3) {
        return Math.abs(var3) > this.northing + 3.141592653589793D * this.R || Math.abs(var1) > this.easting + 3.141592653589793D * this.R;
    }

    public P2 getOpposite() {
        return new P2(this.o_clon, this.o_clat);
    }

    public double[] getBoundingGeom() {
        return bg;
    }

    public double[] getParallel(double var1, double var3) {
        if(var1 < 90.0D && var1 > -90.0D) {
            if(Math.abs(var1) > 55.0D) {
                var3 *= (double)((int)Math.max(1.0D, Math.abs(var1) / 20.0D));
            }

            CoordArray var5 = new CoordArray(720);

            for(float var6 = -240.0F; var6 <= 240.0F; var6 = (float)((double)var6 + var3)) {
                var5.add((double)var6, var1);
            }

            return var5.getAll();
        } else {
            return null;
        }
    }

    public static Rectangle2D getQueryWindow(double var0, double var2, double var4, Rectangle2D var6, Proj[] var7) {
        var4 = Math.abs(var4);
        Double var8 = null;
        double var9 = var6.getWidth() / var6.getHeight();
        double var13 = var4 * var9;
        Double var15 = new Double(var0 - var13 / 2.0D, var2 - var4 / 2.0D, var13, var4);
        if(var2 > 90.0D) {
            var2 = 90.0D;
        } else if(var2 < -90.0D) {
            var2 = -90.0D;
        } else if(Math.abs(90.0D - var2) < var4 * 0.05D) {
            var2 = 90.0D;
        } else if(Math.abs(-90.0D - var2) < var4 * 0.05D) {
            var2 = -90.0D;
        }

        double var16 = 0.0D;
        double var18 = 0.0D;
        double var20;
        if(var2 == -90.0D) {
            var16 = -90.0D;
            var18 = util.Clip(-90.0D + var4, -90.0D, 90.0D);
        } else if(var2 == 90.0D) {
            var16 = util.Clip(90.0D - var4, -90.0D, 90.0D);
            var18 = 90.0D;
        } else {
            var16 = var2 - var4 / 2.0D;
            var18 = var2 + var4 / 2.0D;
            if(var18 > 90.0D) {
                var20 = var18 - 90.0D;
                var16 = util.Clip(var16 - var20, -90.0D, 90.0D);
            }

            if(var16 < -90.0D) {
                var20 = Math.abs(var16 + 90.0D);
                var18 = util.Clip(var18 + var20, -90.0D, 90.0D);
            }

            var16 = util.Clip(var16, -90.0D, 90.0D);
            var18 = util.Clip(var18, -90.0D, 90.0D);
        }

        if(var0 > 180.0D) {
            var0 -= 360.0D;
        } else if(var0 < -180.0D) {
            var0 += 360.0D;
        }

        var20 = 0.0D;
        double var22 = 0.0D;
        if(var13 >= 360.0D) {
            var13 = 360.0D;
            var20 = util.Clip(var0 - var13 / 2.0D, -360.0D, 360.0D);
            var22 = util.Clip(var0 + var13 / 2.0D, -360.0D, 360.0D);
        } else {
            var13 = Math.abs(var18 - var16) * var9;
            var20 = util.Clip(var0 - var13 / 2.0D, -360.0D, 360.0D);
            var22 = util.Clip(var0 + var13 / 2.0D, -360.0D, 360.0D);
        }

        var8 = new Double(var20, var16, var22 - var20, var18 - var16);
        ProjAzEd var24 = new ProjAzEd(var0, var2);
        var24.virtualQW = var15;
        var7[0] = var24;
        return var8;
    }

    public Rectangle2D getBoundingBox(Rectangle2D var1, Rectangle2D var2) {
        double var3 = this.R * 3.141592653589793D;
        double var5 = var3;
        double var7 = var1.getHeight();
        double var9 = var1.getWidth();
        double var11 = var9 / var7;
        double var13;
        double var15;
        if(this.pole_pos == 2 || this.pole_pos == 1) {
            var13 = this.dlon;
            var15 = this.pole_pos == 2?this.dlat - var7 / 2.0D:this.dlat + var7 / 2.0D;
            P2 var17 = new P2();
            if(this.forward(var13, var15, var17)) {
                var5 = Math.abs(var17.y - this.northing) * 2.0D;
                var3 = var5 * var11;
                if(this.virtualQW != null) {
                    double var18 = this.virtualQW.getHeight();
                    if(var18 >= 180.0D) {
                        var5 *= var18 / 180.0D;
                        var3 *= var18 / 180.0D;
                    }
                }

                return new Double(-var3 / 2.0D, -var5 / 2.0D, var3, var5);
            }

            System.err.println("ProjAzEd: cannot do forward transformation on " + var13 + "," + var15);
        }

        var13 = Math.abs(this.dlat) > 40.0D?810.0D:(Math.abs(this.dlat) > 20.0D?630.0D:540.0D);
        var15 = var9 / var13;
        var3 *= var15;
        var5 *= var15;
        if(this.virtualQW != null) {
            double var20 = this.virtualQW.getHeight();
            if(var20 > 180.0D) {
                var3 *= var20 / 180.0D;
                var5 *= var20 / 180.0D;
            }
        }

        return new Double(-var3 / 2.0D, -var5 / 2.0D, var3, var5);
    }

    private void init() {
        this._cos_clat = Math.cos(this.clat);
        this._sin_clat = Math.sin(this.clat);
    }

    private static void createBG() {
        double var0 = 6378206.4D;
        CoordArray var2 = new CoordArray(750);
        double var3 = 3.141592653589793D * var0;

        for(int var5 = 0; var5 <= 360; ++var5) {
            double var6 = var3 * Math.cos((double)var5 * 0.017453292519943295D);
            double var8 = var3 * Math.sin((double)var5 * 0.017453292519943295D);
            var2.add(var6, var8);
        }

        bg = var2.getAll();
    }

    static {
        createBG();
    }
}