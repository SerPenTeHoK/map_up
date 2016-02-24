package helpers.proj;

/**
 * Created by SerP on 24.02.2016.
 */
import java.awt.geom.Rectangle2D;

public interface Proj {
    double DEG_TO_RAD = 0.017453292519943295D;
    double RAD_TO_DEG = 57.29577951308232D;
    double HALF_PI = 1.5707963267948966D;
    double TWO_PI = 6.283185307179586D;

    boolean forward(double var1, double var3, Proj.P2 var5);

    boolean inverse(double var1, double var3, Proj.P2 var5);

    void setOffset(double var1, double var3);

    Proj.P2 getOffset();

    int getProjId();

    double[] save();

    double[] getBoundingGeom();

    Rectangle2D getBoundingBox(Rectangle2D var1, Rectangle2D var2);

    double[] getParallel(double var1, double var3);

    Proj.P2 getCenter();

    Proj.P2 getOpposite();

    public static final class util {
        private static final int MAX_VAL = 4;
        private static final long MDT_MAXLONG = 2147483647L;
        private static final long DBLLONG = 4611686010000000000L;
        public static final double DEF_ER = 6378206.4D;

        public util() {
        }

        public static final double Clip(double var0, double var2, double var4) {
            return var0 < var2?var2:(var0 > var4?var4:var0);
        }

        public static final Proj restore(double[] var0) {
            return null;
        }

        public static final double adjustLon(double var0) {
            int var2 = var0 < 0.0D?-1:1;
            int var3 = 0;

            while(Math.abs(var0) > 3.141592653589793D) {
                if(Math.abs(var0 / 3.141592653589793D) < 2.0D) {
                    var0 -= (double)var2 * 6.283185307179586D;
                } else if(Math.abs(var0 / 6.283185307179586D) < 2.147483647E9D) {
                    var0 -= var0 / 6.283185307179586D * 6.283185307179586D;
                } else if(Math.abs(var0 / 1.3493037698238832E10D) < 2.147483647E9D) {
                    var0 -= var0 / 1.3493037698238832E10D * 1.3493037698238832E10D;
                } else if(Math.abs(var0 / 2.897607777935765E19D) < 2.147483647E9D) {
                    var0 -= var0 / 2.897607777935765E19D * 2.897607777935765E19D;
                } else {
                    var0 -= (double)var2 * 6.283185307179586D;
                }

                ++var3;
                if(var3 > 4) {
                    break;
                }
            }

            return var0;
        }
    }

    public static final class P2 {
        public double x;
        public double y;

        public P2() {
            this.x = 0.0D;
            this.y = 0.0D;
        }

        public P2(double var1, double var3) {
            this.set(var1, var3);
        }

        public void set(double var1, double var3) {
            this.x = var1;
            this.y = var3;
        }
    }
}
