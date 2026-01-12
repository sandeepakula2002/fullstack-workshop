public class CheckingAccount extends Account {
    private final double overdraft = 500;

    public CheckingAccount(String holderName, double balance) {
        super(holderName, balance);
    }

    public void withdraw(double amount) {
        if (balance + overdraft >= amount) {
            balance -= amount;
        }
    }

    public double calculateInterest() {
        return 0;
    }
}
