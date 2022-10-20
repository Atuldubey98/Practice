import java.util.HashMap;
import java.util.Map;
class Tester{
    class Solution {
        public int addDigits(int num, Map<Integer, Integer> hash) {
            if (hash.containsKey(num)) {
                return hash.get(num);
            }
            if (num<10) {
                return num;
            }
            int sum  = 0;
            while (num > 0) {
                int r = num%10;
                sum+=r;
                num/=10;
            }
            hash.put(num, sum);
            return addDigits(sum, hash);
        }
    }
    public static void main(String[] args) {
        Solution solution=new Tester().new Solution();
        Map<Integer, Integer> hash = new HashMap<>();
        int sum = solution.addDigits(38, hash);
        System.out.println(sum);
    }
}
