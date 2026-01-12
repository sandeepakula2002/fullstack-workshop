public class FixedDepositAccount extends Account {
    public FixedDepositAccount(String holderName, double balance) {
        super(holderName, balance);
    }

    public void withdraw(double amount) {
        throw new RuntimeException("Withdrawals not allowed");
    }

    public double calculateInterest() {
        return balance * 0.07;
    }
}
