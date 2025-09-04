package Level_2_Strings_Practice_Problems;

import java.util.Scanner;

public class RockPaperScissors {

    static String getComputerChoice() {
        String[] choices = {"rock", "paper", "scissors"};
        return choices[(int)(Math.random() * 3)];
    }

    static String getWinner(String user, String computer) {
        if (user.equals(computer)) return "draw";
        if ((user.equals("rock") && computer.equals("scissors")) ||
            (user.equals("scissors") && computer.equals("paper")) ||
            (user.equals("paper") && computer.equals("rock"))) {
            return "user";
        } else {
            return "computer";
        }
    }

    static String[][] calculateStats(int userWins, int compWins, int games) {
        String[][] stats = new String[2][3];
        stats[0][0] = "User";
        stats[0][1] = String.valueOf(userWins);
        stats[0][2] = String.format("%.2f", (userWins * 100.0 / games)) + "%";

        stats[1][0] = "Computer";
        stats[1][1] = String.valueOf(compWins);
        stats[1][2] = String.format("%.2f", (compWins * 100.0 / games)) + "%";

        return stats;
    }

    static void displayGameResults(String[][] rounds, String[][] stats) {
        System.out.printf("%-10s %-12s %-12s %-10s%n", "Round", "User", "Computer", "Winner");
        for (String[] round : rounds) {
            System.out.printf("%-10s %-12s %-12s %-10s%n", round[0], round[1], round[2], round[3]);
        }
        System.out.println("\nStats:");
        System.out.printf("%-10s %-10s %-10s%n", "Player", "Wins", "Win %");
        for (String[] stat : stats) {
            System.out.printf("%-10s %-10s %-10s%n", stat[0], stat[1], stat[2]);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of games: ");
        int games = sc.nextInt();
        sc.nextLine();

        int userWins = 0, compWins = 0;
        String[][] rounds = new String[games][4];

        for (int i = 0; i < games; i++) {
            System.out.print("Round " + (i + 1) + " - Enter choice (rock/paper/scissors): ");
            String user = sc.nextLine().toLowerCase();
            String computer = getComputerChoice();
            String winner = getWinner(user, computer);

            if (winner.equals("user")) userWins++;
            else if (winner.equals("computer")) compWins++;

            rounds[i][0] = "Round " + (i + 1);
            rounds[i][1] = user;
            rounds[i][2] = computer;
            rounds[i][3] = winner;
        }

        String[][] stats = calculateStats(userWins, compWins, games);
        displayGameResults(rounds, stats);
    }
}

