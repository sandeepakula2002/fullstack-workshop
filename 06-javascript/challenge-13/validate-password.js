const validatePassword = (password) => {
  const errors = [];
  const suggestions = [];
  let score = 0;

  const commonPasswords = ["password", "123456", "qwerty", "admin", "letmein"];

  const rules = [
    {
      test: pwd => pwd.length >= 8,
      error: "Too short",
      suggestion: "Use at least 8 characters",
      score: 20
    },
    {
      test: pwd => /[A-Z]/.test(pwd),
      error: "Missing uppercase letter",
      suggestion: "Add an uppercase letter",
      score: 15
    },
    {
      test: pwd => /[a-z]/.test(pwd),
      error: "Missing lowercase letter",
      suggestion: "Add a lowercase letter",
      score: 15
    },
    {
      test: pwd => /\d/.test(pwd),
      error: "Missing number",
      suggestion: "Add a number",
      score: 15
    },
    {
      test: pwd => /[!@#$%^&*()_+\-=]/.test(pwd),
      error: "Missing special character",
      suggestion: "Add a special character",
      score: 20
    }
  ];

  rules.forEach(({ test, error, suggestion, score: ruleScore }) => {
    if (test(password)) {
      score += ruleScore;
    } else {
      errors.push(error);
      suggestions.push(suggestion);
    }
  });

  if (commonPasswords.includes(password.toLowerCase())) {
    errors.push("Common password");
    suggestions.push("Avoid common passwords");
    score = Math.min(score, 30);
  }

  return {
    isValid: errors.length === 0,
    score: Math.min(score, 100),
    errors,
    suggestions
  };
};
