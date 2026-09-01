const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "statistics-test-01",
    "question": "What is the mean of the dataset [2, 4, 6, 8, 10]?",
    "options": ["4", "5", "6", "8"],
    "correctOption": 2,
    "explanation": "The mean is calculated as the sum of values divided by the number of values. Sum = 30, n = 5, so mean = 30/5 = 6."
  },
  {
    "testId": "statistics-test-01",
    "question": "Which of the following is a measure of dispersion?",
    "options": ["Mean", "Median", "Mode", "Standard Deviation"],
    "correctOption": 3,
    "explanation": "Standard deviation measures the amount of variation or dispersion in a set of values. Mean, median, and mode are measures of central tendency."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the median of the dataset [3, 7, 9, 12, 15]?",
    "options": ["7", "9", "12", "10"],
    "correctOption": 1,
    "explanation": "The median is the middle value when the data is ordered. The middle value is 9."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the mode of the dataset [2, 3, 3, 5, 7, 7, 7, 9]?",
    "options": ["3", "5", "7", "9"],
    "correctOption": 2,
    "explanation": "The mode is the value that appears most frequently. 7 appears three times, which is more than any other value."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the range of the dataset [4, 8, 12, 16, 20]?",
    "options": ["4", "12", "16", "20"],
    "correctOption": 2,
    "explanation": "The range is calculated as the difference between the maximum and minimum values. 20 - 4 = 16."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the variance of the dataset [2, 4, 6, 8, 10]?",
    "options": ["4", "6", "8", "10"],
    "correctOption": 0,
    "explanation": "Variance is the average of the squared differences from the mean. Mean = 6, squared differences: (16+4+0+4+16)/5 = 8, so variance is 8. (Population variance)"
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the probability of rolling a 6 on a fair six-sided die?",
    "options": ["1/2", "1/3", "1/6", "1/4"],
    "correctOption": 2,
    "explanation": "A fair die has 6 equally likely outcomes. The probability of rolling a 6 is 1/6."
  },
  {
    "testId": "statistics-test-01",
    "question": "If two events are mutually exclusive, what is P(A ∩ B)?",
    "options": ["P(A) + P(B)", "P(A) * P(B)", "0", "1"],
    "correctOption": 2,
    "explanation": "Mutually exclusive events cannot occur at the same time. Therefore, the probability of their intersection (A ∩ B) is 0."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the probability of getting a head when tossing a fair coin?",
    "options": ["0.25", "0.5", "1", "0.75"],
    "correctOption": 1,
    "explanation": "A fair coin has two equally likely outcomes: heads and tails. The probability of heads is 1/2 = 0.5."
  },
  {
    "testId": "statistics-test-01",
    "question": "Which of the following is NOT a measure of central tendency?",
    "options": ["Mean", "Median", "Mode", "Standard Deviation"],
    "correctOption": 3,
    "explanation": "Standard deviation is a measure of dispersion, not central tendency. Mean, median, and mode are measures of central tendency."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the interquartile range (IQR)?",
    "options": ["Q3 - Q1", "Q1 - Q3", "Q3 + Q1", "Q2 - Q1"],
    "correctOption": 0,
    "explanation": "The interquartile range (IQR) is the difference between the third quartile (Q3) and the first quartile (Q1). It represents the spread of the middle 50% of the data."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the probability of drawing a king from a standard deck of 52 cards?",
    "options": ["1/52", "4/52", "1/13", "Both B and C"],
    "correctOption": 3,
    "explanation": "There are 4 kings in a standard deck. The probability is 4/52 = 1/13. Both 4/52 and 1/13 are correct representations."
  },
  {
    "testId": "statistics-test-01",
    "question": "If P(A) = 0.6 and P(B) = 0.4, and A and B are independent, what is P(A ∩ B)?",
    "options": ["0.24", "1.0", "0.6", "0.4"],
    "correctOption": 0,
    "explanation": "For independent events, P(A ∩ B) = P(A) * P(B) = 0.6 * 0.4 = 0.24."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the standard deviation of the dataset [1, 2, 3, 4, 5]?",
    "options": ["1.41", "1.58", "2.0", "2.24"],
    "correctOption": 0,
    "explanation": "Population standard deviation = sqrt(variance). Variance = 2, so standard deviation ≈ 1.414."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the 75th percentile also known as?",
    "options": ["Q1", "Q2", "Q3", "Median"],
    "correctOption": 2,
    "explanation": "The 75th percentile is also known as the third quartile (Q3). It represents the value below which 75% of the data falls."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the sum of all probabilities in a probability distribution?",
    "options": ["0", "0.5", "1", "2"],
    "correctOption": 2,
    "explanation": "The sum of all probabilities in any valid probability distribution must equal 1."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the conditional probability formula?",
    "options": ["P(A|B) = P(A ∩ B) / P(B)", "P(A|B) = P(A) + P(B)", "P(A|B) = P(A) * P(B)", "P(A|B) = P(B) / P(A)"],
    "correctOption": 0,
    "explanation": "Conditional probability is defined as P(A|B) = P(A ∩ B) / P(B), provided P(B) > 0."
  },
  {
    "testId": "statistics-test-01",
    "question": "Which of the following is an example of a discrete random variable?",
    "options": ["Height of students", "Number of cars in a parking lot", "Temperature in Celsius", "Weight of a package"],
    "correctOption": 1,
    "explanation": "The number of cars is a countable value (0, 1, 2, 3...), making it a discrete random variable. The others are continuous."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the probability of getting exactly two heads in three coin tosses?",
    "options": ["1/8", "3/8", "1/2", "5/8"],
    "correctOption": 1,
    "explanation": "There are 3 ways to get exactly 2 heads in 3 tosses (HHT, HTH, THH). Total outcomes = 8. Probability = 3/8."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the mean of a standard normal distribution?",
    "options": ["0", "1", "0.5", "100"],
    "correctOption": 0,
    "explanation": "The standard normal distribution has a mean of 0 and a standard deviation of 1."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the standard deviation of a standard normal distribution?",
    "options": ["0", "1", "0.5", "2"],
    "correctOption": 1,
    "explanation": "The standard normal distribution has a mean of 0 and a standard deviation of 1."
  },
  {
    "testId": "statistics-test-01",
    "question": "Which of the following is a characteristic of a normal distribution?",
    "options": ["It is symmetric", "It is skewed", "It has two modes", "It is always positive"],
    "correctOption": 0,
    "explanation": "A normal distribution is symmetric and bell-shaped. It has one mode and can take negative values (though theoretically bounded)."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the probability of an event that is certain to occur?",
    "options": ["0", "0.5", "1", "0.99"],
    "correctOption": 2,
    "explanation": "A certain event has a probability of 1 (or 100%)."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the empirical rule for a normal distribution?",
    "options": ["68-95-99.7 rule", "50-75-100 rule", "1-2-3 rule", "10-20-30 rule"],
    "correctOption": 0,
    "explanation": "The empirical rule states that approximately 68% of data falls within 1 standard deviation, 95% within 2, and 99.7% within 3 standard deviations of the mean."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the coefficient of variation?",
    "options": ["Standard deviation / Mean", "Mean / Standard deviation", "Variance / Mean", "Mean / Variance"],
    "correctOption": 0,
    "explanation": "The coefficient of variation (CV) is a measure of relative variability, calculated as Standard Deviation / Mean (often expressed as a percentage)."
  },
  {
    "testId": "statistics-test-01",
    "question": "If P(A) = 0.3 and P(B) = 0.5, and A and B are mutually exclusive, what is P(A ∪ B)?",
    "options": ["0.15", "0.8", "0.5", "0.3"],
    "correctOption": 1,
    "explanation": "For mutually exclusive events, P(A ∪ B) = P(A) + P(B) = 0.3 + 0.5 = 0.8."
  },
  {
    "testId": "statistics-test-01",
    "question": "What type of distribution is used to model the number of successes in a fixed number of independent trials with two possible outcomes?",
    "options": ["Normal distribution", "Binomial distribution", "Poisson distribution", "Exponential distribution"],
    "correctOption": 1,
    "explanation": "The binomial distribution models the number of successes in n independent Bernoulli trials (two possible outcomes: success/failure)."
  },
  {
    "testId": "statistics-test-01",
    "question": "What does the skewness of a distribution measure?",
    "options": ["The symmetry of the distribution", "The spread of the distribution", "The peak of the distribution", "The center of the distribution"],
    "correctOption": 0,
    "explanation": "Skewness measures the asymmetry of a distribution. Positive skew means the right tail is longer, negative skew means the left tail is longer."
  },
  {
    "testId": "statistics-test-01",
    "question": "What is the formula for the variance of a random variable X?",
    "options": ["E[(X - μ)^2]", "E[X^2] - μ^2", "Both A and B", "Neither"],
    "correctOption": 2,
    "explanation": "Variance can be calculated as E[(X - μ)^2] or equivalently as E[X^2] - μ^2. Both formulas are correct."
  },
  {
    "testId": "statistics-test-01",
    "question": "If the variance of a dataset is 25, what is the standard deviation?",
    "options": ["5", "10", "25", "625"],
    "correctOption": 0,
    "explanation": "Standard deviation is the square root of variance. sqrt(25) = 5."
  },
  {
    "testId": "statistics-test-02",
    "question": "What does the Central Limit Theorem state?",
    "options": [
      "The sample mean approaches a normal distribution as sample size increases",
      "The sample mean equals the population mean",
      "The population is normal",
      "The sample size must be at least 30"
    ],
    "correctOption": 0,
    "explanation": "The Central Limit Theorem states that the distribution of sample means approaches a normal distribution as the sample size increases, regardless of the underlying population distribution."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is a p-value in hypothesis testing?",
    "options": [
      "The probability of observing the test statistic or more extreme, assuming the null hypothesis is true",
      "The probability that the null hypothesis is true",
      "The probability that the alternative hypothesis is true",
      "The significance level"
    ],
    "correctOption": 0,
    "explanation": "The p-value is the probability of obtaining results as extreme as the observed data, assuming the null hypothesis is true. It helps determine whether to reject the null hypothesis."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is a Type I error in hypothesis testing?",
    "options": [
      "Rejecting a true null hypothesis",
      "Failing to reject a false null hypothesis",
      "Rejecting a false null hypothesis",
      "Failing to reject a true null hypothesis"
    ],
    "correctOption": 0,
    "explanation": "A Type I error occurs when the null hypothesis is true but we incorrectly reject it. This is also known as a 'false positive'."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is a Type II error in hypothesis testing?",
    "options": [
      "Rejecting a true null hypothesis",
      "Failing to reject a false null hypothesis",
      "Rejecting a false null hypothesis",
      "Failing to reject a true null hypothesis"
    ],
    "correctOption": 1,
    "explanation": "A Type II error occurs when the null hypothesis is false but we fail to reject it. This is also known as a 'false negative'."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is the significance level (α) in hypothesis testing?",
    "options": [
      "The probability of a Type I error",
      "The probability of a Type II error",
      "1 - probability of Type II error",
      "The sample size"
    ],
    "correctOption": 0,
    "explanation": "The significance level (α) is the probability of making a Type I error. It is set by the researcher before conducting the test (commonly 0.05)."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is a confidence interval?",
    "options": [
      "A range of values that likely contains the population parameter",
      "A range of values that contains the sample mean",
      "The probability that the null hypothesis is true",
      "The standard deviation of the sample"
    ],
    "correctOption": 0,
    "explanation": "A confidence interval provides a range of plausible values for a population parameter (like the population mean) based on sample data."
  },
  {
    "testId": "statistics-test-02",
    "question": "What does a 95% confidence interval mean?",
    "options": [
      "If repeated samples are taken, 95% of the confidence intervals will contain the true population parameter",
      "There is a 95% chance the population parameter is in the interval",
      "95% of the data falls within the interval",
      "The sample mean is 95% accurate"
    ],
    "correctOption": 0,
    "explanation": "A 95% confidence interval means that if the same sampling procedure is repeated many times, approximately 95% of the calculated intervals will contain the true population parameter."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is a one-tailed test?",
    "options": [
      "A test that considers deviations in only one direction",
      "A test that considers deviations in both directions",
      "A test with only one sample",
      "A test with only one variable"
    ],
    "correctOption": 0,
    "explanation": "A one-tailed test tests for the possibility of an effect in one specific direction (e.g., greater than or less than)."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is a two-tailed test?",
    "options": [
      "A test that considers deviations in both directions",
      "A test that considers deviations in only one direction",
      "A test with two samples",
      "A test with two variables"
    ],
    "correctOption": 0,
    "explanation": "A two-tailed test tests for the possibility of an effect in either direction (e.g., not equal to a value)."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is the t-distribution used for?",
    "options": [
      "When the population standard deviation is unknown and sample size is small",
      "When the population standard deviation is known",
      "When the sample is large",
      "When the data is categorical"
    ],
    "correctOption": 0,
    "explanation": "The t-distribution is used instead of the normal distribution when the population standard deviation is unknown and the sample size is small (typically n < 30)."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is the degrees of freedom for a one-sample t-test?",
    "options": ["n", "n - 1", "n - 2", "n + 1"],
    "correctOption": 1,
    "explanation": "For a one-sample t-test, the degrees of freedom are n - 1 (where n is the sample size)."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is a paired t-test used for?",
    "options": [
      "To compare two related groups (e.g., before and after measurements)",
      "To compare two independent groups",
      "To compare more than two groups",
      "To test the variance"
    ],
    "correctOption": 0,
    "explanation": "A paired t-test is used when the data are paired (e.g., same subjects measured before and after a treatment) or matched."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is a chi-square test used for?",
    "options": [
      "To test for independence between categorical variables",
      "To compare means",
      "To test for normality",
      "To calculate correlation"
    ],
    "correctOption": 0,
    "explanation": "The chi-square test is used to determine if there is a significant association between two categorical variables (test of independence)."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is a z-test?",
    "options": [
      "A hypothesis test that uses the standard normal distribution",
      "A hypothesis test that uses the t-distribution",
      "A test for categorical data",
      "A non-parametric test"
    ],
    "correctOption": 0,
    "explanation": "A z-test is used when the population variance is known and the sample size is large (or the data is normally distributed), and the test statistic follows a standard normal distribution."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is the formula for the z-score?",
    "options": ["(x - μ) / σ", "(x - μ) / (σ / √n)", "(x̄ - μ) / (σ / √n)", "Both A and C depending on context"],
    "correctOption": 3,
    "explanation": "For an individual data point, z = (x - μ) / σ. For a sample mean, z = (x̄ - μ) / (σ / √n). Both are valid z-score formulas."
  },
  {
    "testId": "statistics-test-02",
    "question": "What does statistical power refer to?",
    "options": [
      "The probability of correctly rejecting a false null hypothesis (1 - Type II error)",
      "The probability of a Type I error",
      "The sample size",
      "The effect size"
    ],
    "correctOption": 0,
    "explanation": "Statistical power is the probability that a test will correctly reject a false null hypothesis. It is calculated as 1 - β (where β is the probability of a Type II error)."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is the null hypothesis (H0) typically stated as?",
    "options": [
      "No effect or no difference",
      "An effect or difference exists",
      "The alternative hypothesis",
      "The research hypothesis"
    ],
    "correctOption": 0,
    "explanation": "The null hypothesis (H0) is a statement of no effect, no difference, or no relationship. It is what we try to disprove or reject."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is the alternative hypothesis (H1) typically stated as?",
    "options": [
      "There is an effect or difference",
      "No effect or no difference",
      "The null hypothesis",
      "The default hypothesis"
    ],
    "correctOption": 0,
    "explanation": "The alternative hypothesis (H1) is the statement that there is an effect, difference, or relationship. It is what the researcher aims to support."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is the effect size?",
    "options": [
      "A measure of the magnitude of a phenomenon or difference",
      "The p-value",
      "The sample size",
      "The confidence level"
    ],
    "correctOption": 0,
    "explanation": "Effect size measures the magnitude of a difference or relationship, independent of sample size. Common measures include Cohen's d and Pearson's r."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is the sampling distribution?",
    "options": [
      "The distribution of a statistic (like the mean) from multiple samples",
      "The distribution of the population data",
      "The distribution of the sample data",
      "The distribution of errors"
    ],
    "correctOption": 0,
    "explanation": "The sampling distribution is the probability distribution of a statistic (such as the sample mean) over all possible samples of a given size from the same population."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is the standard error of the mean?",
    "options": [
      "σ / √n",
      "σ * √n",
      "σ^2 / n",
      "n / σ"
    ],
    "correctOption": 0,
    "explanation": "The standard error of the mean is the standard deviation of the sampling distribution of the mean, calculated as σ / √n (population standard deviation divided by square root of sample size)."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is the difference between a z-test and a t-test?",
    "options": [
      "z-test uses population standard deviation (known), t-test uses sample standard deviation (unknown)",
      "z-test is for small samples, t-test is for large samples",
      "z-test is for categorical data, t-test is for continuous data",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "A z-test is used when the population standard deviation is known (or sample size is very large). A t-test is used when the population standard deviation is unknown and must be estimated from the sample."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is a confidence level?",
    "options": [
      "The probability that the confidence interval contains the population parameter",
      "The probability of a Type I error",
      "The p-value",
      "The significance level"
    ],
    "correctOption": 0,
    "explanation": "The confidence level (e.g., 95%) is the probability that the confidence interval will contain the true population parameter."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is the relationship between confidence level and confidence interval width?",
    "options": [
      "Higher confidence level → wider interval",
      "Higher confidence level → narrower interval",
      "No relationship",
      "Inverse relationship"
    ],
    "correctOption": 0,
    "explanation": "A higher confidence level (e.g., 99% vs 95%) requires a wider confidence interval to capture the population parameter with greater certainty."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is a statistically significant result?",
    "options": [
      "A result where the p-value is less than the significance level (α)",
      "A result where the p-value is greater than the significance level",
      "A result with a large effect size",
      "A result with a large sample"
    ],
    "correctOption": 0,
    "explanation": "A result is considered statistically significant if the p-value is less than the chosen significance level (α), typically 0.05."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is a chi-square goodness-of-fit test used for?",
    "options": [
      "To test whether observed frequencies match expected frequencies",
      "To test for independence between two variables",
      "To compare means",
      "To measure correlation"
    ],
    "correctOption": 0,
    "explanation": "A chi-square goodness-of-fit test determines if a sample of data matches a specified distribution (categorical data)."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is an F-test commonly used for?",
    "options": [
      "To compare two variances",
      "To compare two means",
      "To test for normality",
      "To test for independence"
    ],
    "correctOption": 0,
    "explanation": "An F-test is commonly used to compare the variances of two populations or to test the overall significance of a regression model (ANOVA)."
  },
  {
    "testId": "statistics-test-02",
    "question": "What is the bootstrap method used for?",
    "options": [
      "To estimate the sampling distribution of a statistic by resampling with replacement",
      "To bootstrap a computer",
      "To test for normality",
      "To calculate p-values"
    ],
    "correctOption": 0,
    "explanation": "Bootstrapping is a resampling technique where samples are drawn with replacement from the original data to estimate the sampling distribution of a statistic."
  },
  {
    "testId": "statistics-test-03",
    "question": "What does the correlation coefficient (r) measure?",
    "options": [
      "The strength and direction of a linear relationship between two variables",
      "The cause-and-effect relationship between two variables",
      "The difference between two means",
      "The variance of a single variable"
    ],
    "correctOption": 0,
    "explanation": "The correlation coefficient (r) measures the strength (between -1 and 1) and direction (positive or negative) of a linear relationship between two variables."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the coefficient of determination (R-squared)?",
    "options": [
      "The proportion of variance in the dependent variable explained by the independent variable(s)",
      "The correlation coefficient",
      "The slope of the regression line",
      "The intercept of the regression line"
    ],
    "correctOption": 0,
    "explanation": "R-squared is the proportion of the variance in the dependent variable that is predictable from the independent variable(s). It ranges from 0 to 1."
  },
  {
    "testId": "statistics-test-03",
    "question": "What does the slope of a regression line represent?",
    "options": [
      "The change in the dependent variable for a 1-unit change in the independent variable",
      "The change in the independent variable for a 1-unit change in the dependent variable",
      "The intercept of the line",
      "The correlation coefficient"
    ],
    "correctOption": 0,
    "explanation": "The slope (b) in a regression equation y = a + bx represents the average change in the dependent variable (y) for a one-unit change in the independent variable (x)."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the difference between correlation and causation?",
    "options": [
      "Correlation does not imply causation",
      "Correlation implies causation",
      "They are the same",
      "Causation does not imply correlation"
    ],
    "correctOption": 0,
    "explanation": "A correlation between two variables does not necessarily mean that one causes the other. There could be a third variable causing both, or it could be coincidental."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is ANOVA used for?",
    "options": [
      "To compare means among three or more groups",
      "To compare means between two groups",
      "To test for correlation",
      "To test for normality"
    ],
    "correctOption": 0,
    "explanation": "ANOVA (Analysis of Variance) is used to determine if there are statistically significant differences between the means of three or more independent groups."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the F-statistic in ANOVA?",
    "options": [
      "The ratio of between-group variance to within-group variance",
      "The ratio of within-group variance to between-group variance",
      "The p-value",
      "The sum of squares"
    ],
    "correctOption": 0,
    "explanation": "The F-statistic in ANOVA is the ratio of the variance between groups to the variance within groups. A larger F-statistic indicates greater differences between groups."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is a residual in regression analysis?",
    "options": [
      "The difference between observed and predicted values",
      "The predicted value",
      "The mean of the dependent variable",
      "The slope of the regression line"
    ],
    "correctOption": 0,
    "explanation": "A residual is the difference between the observed value and the predicted value from the regression model. Residuals are used to assess model fit."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is multicollinearity in multiple regression?",
    "options": [
      "High correlation between independent variables",
      "High correlation between dependent variables",
      "The correlation between predicted and observed values",
      "The absence of correlation"
    ],
    "correctOption": 0,
    "explanation": "Multicollinearity occurs when two or more independent variables are highly correlated, which can inflate standard errors and make it difficult to assess individual predictors."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the purpose of a Q-Q plot?",
    "options": [
      "To assess the normality of a dataset",
      "To show the relationship between two variables",
      "To display the frequency distribution",
      "To calculate the correlation"
    ],
    "correctOption": 0,
    "explanation": "A Q-Q (Quantile-Quantile) plot is used to visually assess if a dataset follows a specific distribution (most commonly the normal distribution)."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the difference between one-way ANOVA and two-way ANOVA?",
    "options": [
      "One-way has one independent variable; two-way has two independent variables",
      "One-way has two independent variables; two-way has one",
      "One-way is for means; two-way is for variances",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "One-way ANOVA examines the effect of one categorical independent variable on a dependent variable. Two-way ANOVA examines the effect of two categorical independent variables and their interaction."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the purpose of a post-hoc test after ANOVA?",
    "options": [
      "To determine which specific groups differ significantly",
      "To calculate the overall significance",
      "To check assumptions",
      "To calculate effect size"
    ],
    "correctOption": 0,
    "explanation": "After finding a significant ANOVA result, post-hoc tests (like Tukey's HSD) are used to identify which specific group means are significantly different from each other."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the standard error of the estimate in regression?",
    "options": [
      "The standard deviation of the residuals",
      "The standard deviation of the independent variable",
      "The standard deviation of the dependent variable",
      "The standard error of the slope"
    ],
    "correctOption": 0,
    "explanation": "The standard error of the estimate (or residual standard error) is the standard deviation of the residuals, measuring the average distance that observed values fall from the regression line."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is a non-parametric test?",
    "options": [
      "A test that does not assume a specific distribution for the data",
      "A test that assumes a normal distribution",
      "A test that only works with parametric data",
      "A test that cannot be used with categorical data"
    ],
    "correctOption": 0,
    "explanation": "Non-parametric tests (or distribution-free tests) do not rely on assumptions about the underlying distribution of the data. They are useful when data is ordinal or skewed."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the Mann-Whitney U test used for?",
    "options": [
      "To compare two independent groups (non-parametric alternative to independent t-test)",
      "To compare paired samples (non-parametric alternative to paired t-test)",
      "To compare multiple groups (non-parametric alternative to ANOVA)",
      "To test for correlation"
    ],
    "correctOption": 0,
    "explanation": "The Mann-Whitney U test is a non-parametric test used to compare two independent groups when the assumptions of the t-test are violated."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the Kruskal-Wallis test used for?",
    "options": [
      "To compare multiple independent groups (non-parametric alternative to one-way ANOVA)",
      "To compare two independent groups",
      "To test for normality",
      "To test for correlation"
    ],
    "correctOption": 0,
    "explanation": "The Kruskal-Wallis test is a non-parametric alternative to one-way ANOVA for comparing three or more independent groups."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is a time series?",
    "options": [
      "A sequence of data points collected at regular time intervals",
      "A sequence of data points in random order",
      "A sequence of categorical data",
      "A sequence of binary data"
    ],
    "correctOption": 0,
    "explanation": "A time series is a series of data points indexed in time order, typically measured at equally spaced intervals (e.g., daily, monthly)."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is autocorrelation in time series analysis?",
    "options": [
      "The correlation between a time series and a lagged version of itself",
      "The correlation between two different time series",
      "The correlation between the mean and variance",
      "The correlation between the independent variables"
    ],
    "correctOption": 0,
    "explanation": "Autocorrelation (or serial correlation) measures the correlation between a time series and its own values at previous time steps (lags)."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the difference between simple linear regression and multiple linear regression?",
    "options": [
      "Simple regression has one independent variable; multiple has more than one",
      "Simple regression has more than one independent variable; multiple has one",
      "Simple regression is for categorical data; multiple is for continuous",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "Simple linear regression involves one independent variable and one dependent variable. Multiple linear regression involves two or more independent variables."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the adjusted R-squared?",
    "options": [
      "R-squared adjusted for the number of predictors in the model",
      "The unadjusted R-squared",
      "The standard error of the estimate",
      "The correlation coefficient"
    ],
    "correctOption": 0,
    "explanation": "Adjusted R-squared modifies the R-squared value to account for the number of predictors in the model, penalizing unnecessary variables. It helps prevent overfitting."
  },
  {
    "testId": "statistics-test-03",
    "question": "What does it mean if the residuals in a regression are not normally distributed?",
    "options": [
      "The normality assumption may be violated, affecting the validity of significance tests",
      "The model cannot be used at all",
      "The correlation is zero",
      "The slope is zero"
    ],
    "correctOption": 0,
    "explanation": "Normality of residuals is one of the assumptions of linear regression. If residuals are not normally distributed, the reliability of confidence intervals and p-values may be affected."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is a confounder variable?",
    "options": [
      "A variable that influences both the independent and dependent variables, potentially distorting their relationship",
      "A variable that is not related to the study",
      "The dependent variable",
      "The independent variable"
    ],
    "correctOption": 0,
    "explanation": "A confounder is an extraneous variable that is correlated with both the independent and dependent variables, potentially creating a spurious association."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the Durbin-Watson test used for?",
    "options": [
      "To test for autocorrelation in residuals from regression analysis",
      "To test for normality",
      "To test for multicollinearity",
      "To test for heteroscedasticity"
    ],
    "correctOption": 0,
    "explanation": "The Durbin-Watson test is used to detect the presence of autocorrelation (serial correlation) in the residuals of a regression model, particularly in time series data."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is a random variable?",
    "options": [
      "A variable whose possible values are outcomes of a random phenomenon",
      "A variable that is constant",
      "A variable that is known in advance",
      "A variable that cannot be measured"
    ],
    "correctOption": 0,
    "explanation": "A random variable is a variable whose possible values are numerical outcomes of a random phenomenon. It can be discrete or continuous."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is Bayes' theorem used for?",
    "options": [
      "To update the probability of a hypothesis based on new evidence",
      "To calculate the mean",
      "To calculate the variance",
      "To test for normality"
    ],
    "correctOption": 0,
    "explanation": "Bayes' theorem describes the probability of an event based on prior knowledge of conditions that might be related to the event. It is fundamental to Bayesian statistics."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the prior probability in Bayesian statistics?",
    "options": [
      "The initial belief about a hypothesis before seeing the data",
      "The probability after seeing the data",
      "The true probability",
      "The null hypothesis"
    ],
    "correctOption": 0,
    "explanation": "In Bayesian statistics, prior probability is the initial belief about a hypothesis before any new evidence or data is considered."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the posterior probability in Bayesian statistics?",
    "options": [
      "The updated probability after seeing the data",
      "The initial belief before seeing the data",
      "The true probability",
      "The alternative hypothesis"
    ],
    "correctOption": 0,
    "explanation": "Posterior probability is the revised probability of a hypothesis after considering new evidence (data), calculated using Bayes' theorem."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the purpose of conducting a power analysis?",
    "options": [
      "To determine the sample size needed to detect an effect of a given size",
      "To calculate the p-value",
      "To determine the significance level",
      "To calculate the effect size"
    ],
    "correctOption": 0,
    "explanation": "Power analysis is used to determine the minimum sample size required to detect an effect of a given size with a specified level of confidence and power (typically 80%)."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the difference between parametric and non-parametric tests?",
    "options": [
      "Parametric tests assume a specific distribution (usually normal); non-parametric tests do not",
      "Non-parametric tests assume a normal distribution; parametric tests do not",
      "Parametric tests are always better",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "Parametric tests rely on assumptions about the underlying distribution (normality, equal variances). Non-parametric tests do not require these assumptions and are used with ordinal data or when assumptions are violated."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is heteroscedasticity in regression analysis?",
    "options": [
      "When the variance of the residuals is not constant across values of the independent variable",
      "When the variance of the residuals is constant",
      "When the residuals are normally distributed",
      "When the residuals are independent"
    ],
    "correctOption": 0,
    "explanation": "Heteroscedasticity refers to the situation where the variability of the residuals (error terms) is not constant across all levels of the independent variable, which violates the assumption of homoscedasticity."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the purpose of the Breusch-Pagan test?",
    "options": [
      "To test for heteroscedasticity in regression residuals",
      "To test for normality",
      "To test for multicollinearity",
      "To test for autocorrelation"
    ],
    "correctOption": 0,
    "explanation": "The Breusch-Pagan test is used to detect heteroscedasticity (non-constant variance) in the residuals of a regression model."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is a dummy variable in regression?",
    "options": [
      "A binary variable (0 or 1) used to represent categorical data in regression",
      "A variable that is not important",
      "A variable that is always zero",
      "A variable that is always one"
    ],
    "correctOption": 0,
    "explanation": "Dummy variables (or indicator variables) are binary variables that represent categorical variables in regression analysis (e.g., gender: 0=male, 1=female)."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the interaction effect in regression?",
    "options": [
      "When the effect of one independent variable depends on the level of another independent variable",
      "When the effect of one variable is independent of another",
      "When there is no relationship between variables",
      "When the variables are perfectly correlated"
    ],
    "correctOption": 0,
    "explanation": "An interaction effect occurs when the relationship between an independent variable and the dependent variable changes depending on the value of another independent variable."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the purpose of AIC (Akaike Information Criterion) in model selection?",
    "options": [
      "To compare models and select the one with the best balance of fit and complexity (lower AIC is better)",
      "To calculate the p-value",
      "To test for normality",
      "To measure the effect size"
    ],
    "correctOption": 0,
    "explanation": "AIC is used for model selection, balancing model fit (likelihood) with model complexity (number of parameters). Lower AIC values indicate better models."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is a likelihood function?",
    "options": [
      "The probability of the observed data given a set of parameters",
      "The probability of the parameters given the data",
      "The mean of the data",
      "The variance of the data"
    ],
    "correctOption": 0,
    "explanation": "The likelihood function measures how likely the observed data is given a particular set of parameters in a statistical model. It is fundamental to maximum likelihood estimation."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is maximum likelihood estimation (MLE)?",
    "options": [
      "A method of estimating the parameters of a model by finding the parameter values that maximize the likelihood function",
      "A method of estimating the variance",
      "A method of testing hypotheses",
      "A method of calculating the mean"
    ],
    "correctOption": 0,
    "explanation": "Maximum likelihood estimation (MLE) is a statistical method used to estimate the parameters of a model by finding values that make the observed data most likely (maximize the likelihood function)."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is the purpose of cross-validation in statistical modeling?",
    "options": [
      "To assess how well a model generalizes to new data by splitting data into training and validation sets",
      "To calculate the p-value",
      "To test for normality",
      "To calculate the correlation"
    ],
    "correctOption": 0,
    "explanation": "Cross-validation is a technique to evaluate model performance and prevent overfitting by training the model on a subset of the data and testing it on a different subset, typically using k-fold cross-validation."
  },
  {
    "testId": "statistics-test-03",
    "question": "What is a doubly robust estimator?",
    "options": [
      "An estimator that remains consistent if either the outcome model or the treatment model is correctly specified",
      "An estimator that requires both models to be correct",
      "An estimator that is always correct",
      "An estimator that never works"
    ],
    "correctOption": 0,
    "explanation": "A doubly robust estimator combines two models (e.g., outcome and treatment models). It gives consistent estimates if at least one of the models is correctly specified, providing some protection against model misspecification."
  }
];

const filepath = path.join(__dirname, '../src/data/questions.js');
let content = fs.readFileSync(filepath, 'utf8');

content = content.trim();
if (content.endsWith('];')) {
  content = content.slice(0, -2);
} else if (content.endsWith(']')) {
  content = content.slice(0, -1);
}

content += ',\n' + newQuestions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];\n';

fs.writeFileSync(filepath, content, 'utf8');
console.log('Added ' + newQuestions.length + ' statistics questions to questions.js');
