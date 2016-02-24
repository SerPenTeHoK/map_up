package helpers.proj;

/**
 * Created by SerP on 24.02.2016.
 */
//

public class CoordArray {
    int dim = 2;
    int count = 0;
    int capacity = 0;
    double[] coords = null;
    boolean sorted = false;

    public CoordArray(int var1) {
        this.ensure(var1);
    }

    public CoordArray(int var1, int var2) {
        this.dim = var1;
        this.ensure(var2);
    }

    public CoordArray(int var1, int var2, boolean var3) {
        this.dim = var1;
        this.ensure(var2);
        this.sorted = var3;
    }

    public void reset() {
        this.count = 0;
        this.sorted = false;
    }

    public int getNumCoords() {
        return this.count;
    }

    public int getCapacity() {
        return this.capacity;
    }

    public void close() {
        if(this.count != 0) {
            this.add(this.coords[0], this.coords[1]);
        }
    }

    public void remove(int var1) {
        System.arraycopy(this.coords, (var1 + 1) * this.dim, this.coords, var1 * this.dim, (this.count - 1 - var1) * this.dim);
        --this.count;
    }

    public int find(double var1, double var3) {
        for(int var5 = 0; var5 < this.count; ++var5) {
            double var6 = this.coords[var5 * this.dim];
            double var8 = this.coords[var5 * this.dim + 1];
            if(var1 == var6 && var3 == var8) {
                return var5;
            }
        }

        return -1;
    }

    public boolean getSorted() {
        return this.sorted;
    }

    public void setSorted(boolean var1) {
        this.sorted = var1;
    }

    public void add(double var1, double var3) {
        if(this.capacity <= this.count) {
            this.ensure((int)((double)this.capacity * 1.2D));
        }

        this.coords[this.dim * this.count] = var1;
        this.coords[this.dim * this.count + 1] = var3;
        ++this.count;
    }

    public void addSortY(double var1, double var3) {
        int var5 = -1;

        double var6;
        do {
            ++var5;
            if(var5 >= this.count) {
                break;
            }

            var6 = this.coords[var5 * this.dim + 1];
        } while(var6 <= var3);

        this.addAt(var1, var3, var5);
    }

    public void addAt(double var1, double var3, int var5) {
        if(this.capacity <= this.count) {
            this.ensure(this.capacity * 2);
        }

        int var6 = this.dim * var5;
        double var7 = this.coords[var6];
        double var9 = this.coords[var6 + 1];
        this.coords[var6] = var1;
        this.coords[var6 + 1] = var3;
        System.arraycopy(this.coords, (var5 + 1) * this.dim, this.coords, (var5 + 2) * this.dim, (this.count - var5) * this.dim);
        this.coords[(var5 + 1) * this.dim] = var7;
        this.coords[(var5 + 1) * this.dim + 1] = var9;
        ++this.count;
    }

    public void replaceAt(double var1, double var3, int var5) {
        this.coords[this.dim * var5] = var1;
        this.coords[this.dim * var5 + 1] = var3;
    }

    public double getX(int var1) {
        return this.coords[var1 * this.dim];
    }

    public double getY(int var1) {
        return this.coords[var1 * this.dim + 1];
    }

    public double getLastX() {
        return this.coords[(this.count - 1) * this.dim];
    }

    public double getLastY() {
        return this.coords[(this.count - 1) * this.dim + 1];
    }

    public double[] getAll() {
        double[] var1 = new double[this.count * this.dim];
        System.arraycopy(this.coords, 0, var1, 0, this.count * this.dim);
        return var1;
    }

    public float[] getAllFloat() {
        float[] var1 = new float[this.count * this.dim];

        for(int var2 = 0; var2 < this.count * this.dim; ++var2) {
            var1[var2] = (float)this.coords[var2];
        }

        return var1;
    }

    private void ensure(int var1) {
        if(this.capacity < var1) {
            double[] var2 = new double[var1 * this.dim];
            if(this.coords != null && this.count > 0) {
                System.arraycopy(this.coords, 0, var2, 0, this.count * this.dim);
            }

            this.coords = var2;
            this.capacity = var1;
        }
    }
}
