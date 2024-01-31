// p70 - climbing stairs
var climbStairs = function (n) {
  let dp = [0, 1, 2];

  let currentStep = 3;

  while (currentStep <= n) {
    dp[currentStep] = dp[currentStep - 1] + dp[currentStep - 2];
    currentStep++;
  }

  return dp[n];
};
