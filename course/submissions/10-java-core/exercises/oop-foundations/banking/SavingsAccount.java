public class SavingsAccount extends Account {
    public SavingsAccount(String holderName, double balance) {
        super(holderName, balance);
    }

    public double calculateInterest() {
        return balance * 0.04;
    }
}
