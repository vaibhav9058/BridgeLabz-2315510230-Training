package Programing_elements.Level_1;

import java.util.Scanner;

public class quest10 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Enter height in centimeters: ");
        double heightCm = input.nextDouble();
        
        double totalInches = heightCm / 2.54;
        int feet = (int) (totalInches / 12);
        double remainingInches = totalInches % 12;
        
        System.out.println("Your Height in cm is " + heightCm + " while in feet is " + feet + " and inches is " + remainingInches);
        input.close();
    }
}
