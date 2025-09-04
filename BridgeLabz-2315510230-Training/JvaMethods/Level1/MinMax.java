import java.util.Scanner;

public class MinMax {

    public static int[] findSmallestAndLargest(int number1, int number2, int number3) {
        int smallest = Math.min(number1, Math.min(number2, number3));
        int largest = Math.max(number1, Math.max(number2, number3));
        return new int[]{smallest, largest};
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        int num1 = scanner.nextInt();

        System.out.print("Enter the second number: ");
        int num2 = scanner.nextInt();

        System.out.print("Enter the third number: ");
        int num3 = scanner.nextInt();

        int[] result = findSmallestAndLargest(num1, num2, num3);

        System.out.println("The smallest number is: " + result[0]);
        System.out.println("The largest number is: " + result[1]);

        scanner.close();
    }
}
