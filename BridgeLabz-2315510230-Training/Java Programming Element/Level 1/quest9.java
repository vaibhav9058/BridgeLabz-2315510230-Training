package Programing_elements.Level_1;

import java.util.Scanner;

public class quest9 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Enter student fee: ");
        double fee = input.nextDouble();
        
        System.out.print("Enter discount percentage: ");
        double discountPercent = input.nextDouble();
        
        double discount = (fee * discountPercent) / 100.0;
        double finalFee = fee - discount;
        
        System.out.println("The discount amount is INR " + discount + " and final discounted fee is INR " + finalFee);
        input.close();
    }
}
