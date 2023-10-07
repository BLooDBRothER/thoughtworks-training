import org.junit.Test;
import powerpackage.PowerFinder;

public class PowerFinderTest {
    @Test
    public void oneRaised_to_one_is_one() {
        assert PowerFinder.power(1, 1) == 1;
    }

    @Test
    public void twoRaised_to_one_is_two() {
        assert PowerFinder.power(2, 1) == 2;
    }

    @Test
    public void twoRaised_to_two_is_four() {
        assert PowerFinder.power(2, 2) == 4;
    }

    @Test
    public void threeRaised_to_two_is_nine() {
        assert PowerFinder.power(3, 2) == 9;
    }

    @Test
    public void twoRaised_to_zero_is_1() {
        assert PowerFinder.power(2, 0) == 1;
    }
}
