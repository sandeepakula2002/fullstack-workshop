public abstract class Account {
    protected static int counter = 1000;
    protected int accountNumber;
    protected String holderName;
    protected double balance;

    public Account(String holderName, double balance) {
        this.holderName = holderName;
        this.balance = balance;
        this.accountNumber = ++counter;
    }

    public abstract double calculateInterest();

    public void deposit(double amount) {
        balance += amount;
    }

    public void withdraw(double amount) {
        balance -= amount;
    }

    public double getBalance() {
        return balance;
    }

    public String getHolderName() {
        return holderName;
    }
}
