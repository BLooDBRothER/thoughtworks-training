package powerpackage;

public class PowerFinder {
    public static int power(int base, int power) {
        int result = base;
        if (base == 1 || power == 0)
            return 1;
        for (int i = 1; i < power; i++) {
            result *= base;
        }
        return result;
    }
}
