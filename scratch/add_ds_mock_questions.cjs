const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "ds-mock-test-01",
    "question": "What is the correct way to read a CSV file in Python using Pandas?",
    "options": ["pd.read_csv()", "csv.read_csv()", "pd.import_csv()", "pd.load_csv()"],
    "correctOption": 0,
    "explanation": "The correct Pandas function to read a CSV file is `pd.read_csv()`."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "Which method is used to handle missing values in a Pandas DataFrame?",
    "options": ["dropna()", "fillna()", "isnull()", "All of the above"],
    "correctOption": 3,
    "explanation": "dropna() removes rows with missing values, fillna() fills them, and isnull() identifies them. All are commonly used."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What does the NumPy function `np.array([1, 2, 3])` create?",
    "options": ["A list", "A tuple", "A NumPy array", "A dictionary"],
    "correctOption": 2,
    "explanation": "NumPy's `array()` function creates a NumPy array, which is the fundamental data structure for numerical computations in Python."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the difference between `np.mean()` and `np.average()`?",
    "options": [
      "np.average() can take weights; np.mean() cannot",
      "np.mean() can take weights; np.average() cannot",
      "Both are identical",
      "np.mean() is faster"
    ],
    "correctOption": 0,
    "explanation": "np.average() allows you to specify weights for averaging, while np.mean() computes the unweighted arithmetic mean."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "Which SQL command is used to retrieve data from a database?",
    "options": ["SELECT", "INSERT", "UPDATE", "DELETE"],
    "correctOption": 0,
    "explanation": "The SELECT statement is used to query and retrieve data from a database table."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the purpose of feature scaling in data preprocessing?",
    "options": [
      "To bring features to a similar scale for better model performance",
      "To remove outliers",
      "To handle missing values",
      "To increase the number of features"
    ],
    "correctOption": 0,
    "explanation": "Feature scaling (standardization or normalization) brings features to a similar scale, preventing features with larger scales from dominating the model."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "Which technique is used to handle imbalanced datasets?",
    "options": ["SMOTE", "Random Undersampling", "Class Weights", "All of the above"],
    "correctOption": 3,
    "explanation": "SMOTE (oversampling), random undersampling, and class weights are all common techniques to handle class imbalance."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the purpose of one-hot encoding?",
    "options": [
      "To convert categorical variables into binary columns for machine learning models",
      "To normalize numerical data",
      "To remove outliers",
      "To handle missing values"
    ],
    "correctOption": 0,
    "explanation": "One-hot encoding converts categorical variables into a form that machine learning models can understand, creating binary columns for each category."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "Which Python library is most commonly used for data manipulation?",
    "options": ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    "correctOption": 1,
    "explanation": "Pandas is the most widely used library for data manipulation and analysis, providing DataFrames and Series structures."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is data leakage in machine learning?",
    "options": [
      "Using information from outside the training dataset to train the model",
      "Losing data during transfer",
      "Data being stored insecurely",
      "Data being corrupted"
    ],
    "correctOption": 0,
    "explanation": "Data leakage occurs when information from the test set or future data is used during training, leading to overly optimistic performance estimates."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the purpose of the SQL JOIN operation?",
    "options": [
      "To combine rows from two or more tables based on a related column",
      "To filter data from a single table",
      "To sort data",
      "To delete data"
    ],
    "correctOption": 0,
    "explanation": "JOIN combines rows from different tables based on a common key or related column."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the difference between `loc` and `iloc` in Pandas?",
    "options": [
      "loc uses labels; iloc uses integer positions",
      "iloc uses labels; loc uses integer positions",
      "Both use labels",
      "Both use integer positions"
    ],
    "correctOption": 0,
    "explanation": "loc is label-based indexing, while iloc is integer position-based indexing in Pandas."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the purpose of train-test split in data science?",
    "options": [
      "To evaluate model performance on unseen data",
      "To increase the dataset size",
      "To handle missing values",
      "To remove outliers"
    ],
    "correctOption": 0,
    "explanation": "Train-test split divides the data into training and testing sets to evaluate how well the model generalizes to new, unseen data."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "Which function is used to find the shape of a NumPy array?",
    "options": ["arr.size", "arr.shape", "arr.dim", "arr.length"],
    "correctOption": 1,
    "explanation": "arr.shape returns the dimensions of a NumPy array as a tuple (rows, columns)."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the purpose of the Pandas `groupby()` function?",
    "options": [
      "To group data based on one or more columns and perform aggregations",
      "To remove duplicates",
      "To sort the data",
      "To merge two DataFrames"
    ],
    "correctOption": 0,
    "explanation": "groupby() is used to group rows by a column and apply aggregation functions like sum, mean, count on the groups."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is an outlier in a dataset?",
    "options": [
      "A data point significantly different from others",
      "A missing data point",
      "A duplicate data point",
      "The most frequent data point"
    ],
    "correctOption": 0,
    "explanation": "An outlier is a data point that lies an abnormal distance from other values, potentially indicating errors or unique cases."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "Which method is used to remove duplicate rows in Pandas?",
    "options": ["drop_duplicates()", "remove_duplicates()", "delete_duplicates()", "distinct()"],
    "correctOption": 0,
    "explanation": "`drop_duplicates()` removes duplicate rows from a DataFrame based on specified columns."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the difference between a list and a tuple in Python?",
    "options": [
      "Lists are mutable; tuples are immutable",
      "Tuples are mutable; lists are immutable",
      "Both are mutable",
      "Both are immutable"
    ],
    "correctOption": 0,
    "explanation": "Lists are mutable (can be changed after creation), while tuples are immutable (cannot be changed)."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "Which SQL clause is used to filter records?",
    "options": ["WHERE", "HAVING", "ORDER BY", "GROUP BY"],
    "correctOption": 0,
    "explanation": "The WHERE clause is used to filter records based on specified conditions."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the purpose of data normalization?",
    "options": [
      "To scale data to a specific range (e.g., 0 to 1) for better model performance",
      "To handle missing values",
      "To remove outliers",
      "To create new features"
    ],
    "correctOption": 0,
    "explanation": "Normalization scales data to a specific range, often [0, 1], to ensure features contribute equally to the model."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the purpose of `df.describe()` in Pandas?",
    "options": [
      "To generate descriptive statistics of numerical columns",
      "To describe the DataFrame structure",
      "To describe the data types",
      "To describe the memory usage"
    ],
    "correctOption": 0,
    "explanation": "`df.describe()` provides a summary of descriptive statistics (mean, std, quartiles) for numerical columns."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the difference between `apply()` and `applymap()` in Pandas?",
    "options": [
      "apply() operates on columns/rows; applymap() operates element-wise",
      "applymap() operates on columns/rows; apply() operates element-wise",
      "Both operate on columns",
      "Both operate element-wise"
    ],
    "correctOption": 0,
    "explanation": "apply() applies a function to a column or row, while applymap() applies a function to every element in the DataFrame."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the purpose of using `as` keyword in SQL?",
    "options": [
      "To create an alias for a column or table",
      "To join tables",
      "To filter data",
      "To insert data"
    ],
    "correctOption": 0,
    "explanation": "The `AS` keyword is used to assign a temporary alias to a column or table in a query."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the difference between `std()` and `var()` in Python statistics?",
    "options": [
      "std() returns standard deviation; var() returns variance",
      "var() returns standard deviation; std() returns variance",
      "Both return the same value",
      "std() returns the square root of variance"
    ],
    "correctOption": 0,
    "explanation": "std() calculates the standard deviation (square root of variance), while var() calculates the variance directly."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "Which function is used to combine two DataFrames vertically (stack rows) in Pandas?",
    "options": ["pd.concat() with axis=0", "pd.concat() with axis=1", "pd.merge()", "pd.join()"],
    "correctOption": 0,
    "explanation": "pd.concat() with axis=0 concatenates DataFrames vertically, stacking rows from both DataFrames."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the purpose of feature engineering?",
    "options": [
      "To create new features from raw data to improve model performance",
      "To remove features",
      "To scale features",
      "To handle missing values"
    ],
    "correctOption": 0,
    "explanation": "Feature engineering involves creating new, informative features from raw data to help the model learn better."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the concept of the CRISP-DM framework?",
    "options": [
      "A standard methodology for data mining and data science projects",
      "A programming language",
      "A visualization tool",
      "A database management system"
    ],
    "correctOption": 0,
    "explanation": "CRISP-DM (Cross-Industry Standard Process for Data Mining) is a widely used methodology for planning and executing data science projects."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the purpose of the `view()` function in NumPy?",
    "options": [
      "To create a new view of the array without copying data",
      "To copy the array",
      "To reshape the array",
      "To delete the array"
    ],
    "correctOption": 0,
    "explanation": "`view()` creates a new array object that shares data with the original array, avoiding a full copy."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the difference between `len()` and `shape` on a Pandas DataFrame?",
    "options": [
      "len() returns the number of rows; shape returns (rows, columns)",
      "len() returns the number of columns; shape returns (rows, columns)",
      "Both return rows",
      "Both return columns"
    ],
    "correctOption": 0,
    "explanation": "len(df) returns the number of rows, while df.shape returns a tuple with (rows, columns)."
  },
  {
    "testId": "ds-mock-test-01",
    "question": "What is the purpose of the `drop()` method in Pandas?",
    "options": [
      "To remove rows or columns from a DataFrame",
      "To drop missing values",
      "To drop duplicates",
      "To drop the index"
    ],
    "correctOption": 0,
    "explanation": "`drop()` removes specified rows or columns from a DataFrame."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the median of the dataset [3, 7, 9, 12, 15, 20]?",
    "options": ["9", "10.5", "12", "13.5"],
    "correctOption": 1,
    "explanation": "With an even number of values, the median is the average of the two middle values: (9+12)/2 = 10.5."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the standard deviation measuring in a dataset?",
    "options": [
      "The average distance of data points from the mean",
      "The central tendency of the data",
      "The most frequent value",
      "The range of the data"
    ],
    "correctOption": 0,
    "explanation": "Standard deviation measures how spread out the data is around the mean."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the purpose of a Q-Q plot in statistics?",
    "options": [
      "To assess the normality of a dataset",
      "To visualize the distribution of categorical data",
      "To show the relationship between two variables",
      "To calculate the correlation"
    ],
    "correctOption": 0,
    "explanation": "A Q-Q plot compares the quantiles of a dataset to a theoretical distribution (usually normal) to check for normality."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the difference between Pearson and Spearman correlation?",
    "options": [
      "Pearson measures linear correlation; Spearman measures monotonic correlation",
      "Spearman measures linear correlation; Pearson measures monotonic correlation",
      "Both measure linear correlation",
      "Both measure monotonic correlation"
    ],
    "correctOption": 0,
    "explanation": "Pearson correlation measures linear relationships, while Spearman correlation measures monotonic relationships (rank-based)."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is a p-value in hypothesis testing?",
    "options": [
      "The probability of observing the test statistic or more extreme, assuming the null hypothesis is true",
      "The probability that the null hypothesis is true",
      "The probability of a Type II error",
      "The significance level"
    ],
    "correctOption": 0,
    "explanation": "The p-value is the probability of obtaining results as extreme as observed, assuming the null hypothesis is true."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the purpose of the Central Limit Theorem?",
    "options": [
      "The distribution of sample means approaches a normal distribution as sample size increases",
      "The distribution of sample data is always normal",
      "The sample mean equals the population mean",
      "The sample variance equals the population variance"
    ],
    "correctOption": 0,
    "explanation": "The Central Limit Theorem states that the sampling distribution of the mean approaches a normal distribution as sample size increases, regardless of the population distribution."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is a Type I error in hypothesis testing?",
    "options": [
      "Rejecting a true null hypothesis",
      "Failing to reject a false null hypothesis",
      "Accepting the alternative hypothesis",
      "Rejecting the alternative hypothesis"
    ],
    "correctOption": 0,
    "explanation": "A Type I error occurs when we reject the null hypothesis when it is actually true (false positive)."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is a confidence interval?",
    "options": [
      "A range of values that likely contains the population parameter",
      "The range of the data",
      "The standard deviation of the sample",
      "The p-value"
    ],
    "correctOption": 0,
    "explanation": "A confidence interval provides a range of plausible values for a population parameter, based on sample data and a specified confidence level."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the purpose of a boxplot?",
    "options": [
      "To visualize the distribution of a dataset and identify outliers",
      "To show the relationship between two variables",
      "To plot categorical data",
      "To display the correlation"
    ],
    "correctOption": 0,
    "explanation": "A boxplot displays the median, quartiles, and outliers of a dataset, providing a visual summary of its distribution."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the null hypothesis (H0) typically stated as?",
    "options": [
      "No effect or no difference",
      "An effect exists",
      "A difference exists",
      "The alternative hypothesis"
    ],
    "correctOption": 0,
    "explanation": "The null hypothesis typically represents a statement of no effect, no difference, or no relationship."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the purpose of a histogram?",
    "options": [
      "To display the frequency distribution of continuous data",
      "To compare categorical data",
      "To show trends over time",
      "To display correlation"
    ],
    "correctOption": 0,
    "explanation": "A histogram groups continuous data into bins and shows the frequency in each bin, visualizing the data distribution."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the difference between a bar chart and a histogram?",
    "options": [
      "Bar charts have gaps; histograms do not",
      "Bar charts are for continuous data; histograms are for categorical",
      "Bar charts show trends; histograms show distributions",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "Bar charts have gaps between bars to separate categories, while histograms have no gaps as they represent continuous data bins."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the purpose of the Shapiro-Wilk test?",
    "options": [
      "To test for normality of a dataset",
      "To test for equal variances",
      "To test for correlation",
      "To test for outliers"
    ],
    "correctOption": 0,
    "explanation": "The Shapiro-Wilk test is a statistical test used to assess if a dataset comes from a normal distribution."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the coefficient of variation (CV)?",
    "options": [
      "Standard deviation divided by mean",
      "Mean divided by standard deviation",
      "Variance divided by mean",
      "Mean divided by variance"
    ],
    "correctOption": 0,
    "explanation": "The coefficient of variation is a measure of relative variability, calculated as standard deviation divided by the mean."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the purpose of the Levene's test?",
    "options": [
      "To test for equality of variances across groups",
      "To test for normality",
      "To test for correlation",
      "To test for outliers"
    ],
    "correctOption": 0,
    "explanation": "Levene's test is used to assess whether groups have equal variances, a common assumption in many statistical tests."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the Spearman's rank correlation coefficient used for?",
    "options": [
      "To measure the strength of a monotonic relationship between two variables",
      "To measure linear correlation",
      "To measure causation",
      "To measure variance"
    ],
    "correctOption": 0,
    "explanation": "Spearman's correlation measures the strength of a monotonic (non-linear) relationship between two variables."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the purpose of the chi-square test?",
    "options": [
      "To test for independence between categorical variables",
      "To test for normality",
      "To test for equality of means",
      "To test for correlation"
    ],
    "correctOption": 0,
    "explanation": "The chi-square test is used to determine if there is a significant association between two categorical variables."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the difference between a population parameter and a sample statistic?",
    "options": [
      "A parameter describes the whole population; a statistic describes the sample",
      "A statistic describes the whole population; a parameter describes the sample",
      "Both describe the population",
      "Both describe the sample"
    ],
    "correctOption": 0,
    "explanation": "A population parameter is a numerical characteristic of the entire population, while a sample statistic is an estimate of that parameter from a sample."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is the purpose of the ANOVA test?",
    "options": [
      "To compare means among three or more groups",
      "To compare means between two groups",
      "To test for correlation",
      "To test for normality"
    ],
    "correctOption": 0,
    "explanation": "ANOVA (Analysis of Variance) is used to determine if there are significant differences between the means of three or more groups."
  },
  {
    "testId": "ds-mock-test-02",
    "question": "What is a confounding variable in statistics?",
    "options": [
      "A variable that is related to both the independent and dependent variables, potentially distorting the relationship",
      "A variable that is not measured",
      "A variable that is constant",
      "A variable that causes the dependent variable"
    ],
    "correctOption": 0,
    "explanation": "A confounding variable is an extraneous variable that is correlated with both the independent and dependent variables, leading to a spurious association."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "Which algorithm is used for both classification and regression tasks?",
    "options": ["K-Means", "Decision Tree", "PCA", "Apriori"],
    "correctOption": 1,
    "explanation": "Decision Trees can be used for both classification and regression tasks."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the purpose of cross-validation?",
    "options": [
      "To evaluate model performance and prevent overfitting",
      "To train the model on more data",
      "To select the best features",
      "To increase the dataset size"
    ],
    "correctOption": 0,
    "explanation": "Cross-validation evaluates model performance and helps detect overfitting by testing the model on multiple folds of data."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the F1-Score?",
    "options": [
      "The harmonic mean of precision and recall",
      "The arithmetic mean of precision and recall",
      "The geometric mean of precision and recall",
      "The product of precision and recall"
    ],
    "correctOption": 0,
    "explanation": "The F1-Score is the harmonic mean of precision and recall, providing a balanced metric for classification models."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What does the ROC curve plot?",
    "options": [
      "True Positive Rate against False Positive Rate",
      "Precision against Recall",
      "Accuracy against Error Rate",
      "Training Error against Test Error"
    ],
    "correctOption": 0,
    "explanation": "The ROC curve plots the True Positive Rate against the False Positive Rate, showing model performance across thresholds."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the purpose of regularization in machine learning?",
    "options": [
      "To prevent overfitting by penalizing large coefficients",
      "To increase model complexity",
      "To speed up training",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Regularization adds a penalty to the loss function to discourage large weights, reducing overfitting."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the difference between L1 and L2 regularization?",
    "options": [
      "L1 adds absolute value penalty; L2 adds squared penalty",
      "L2 adds absolute value penalty; L1 adds squared penalty",
      "Both add the same penalty",
      "Neither adds penalty"
    ],
    "correctOption": 0,
    "explanation": "L1 (Lasso) adds the absolute value of weights, encouraging sparsity. L2 (Ridge) adds the square of weights."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "Which algorithm is commonly used for anomaly detection?",
    "options": ["Isolation Forest", "K-Means", "Linear Regression", "Decision Tree"],
    "correctOption": 0,
    "explanation": "Isolation Forest is a popular algorithm specifically designed for anomaly detection."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the purpose of grid search in hyperparameter tuning?",
    "options": [
      "To exhaustively search over a specified parameter grid",
      "To randomly search hyperparameters",
      "To select the best features",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Grid Search performs an exhaustive search over a predefined set of hyperparameter values to find the optimal combination."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the difference between bagging and boosting?",
    "options": [
      "Bagging trains models in parallel; boosting trains models sequentially",
      "Boosting trains models in parallel; bagging trains models sequentially",
      "Both train models in parallel",
      "Both train models sequentially"
    ],
    "correctOption": 0,
    "explanation": "Bagging (e.g., Random Forest) trains models independently in parallel. Boosting (e.g., AdaBoost) trains models sequentially, each correcting previous errors."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "Which metric measures the proportion of correctly classified instances?",
    "options": ["Accuracy", "Precision", "Recall", "F1-Score"],
    "correctOption": 0,
    "explanation": "Accuracy is the ratio of correctly predicted instances to total instances."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the purpose of feature selection?",
    "options": [
      "To choose the most relevant features for the model",
      "To create new features",
      "To scale features",
      "To handle missing values"
    ],
    "correctOption": 0,
    "explanation": "Feature selection aims to identify and select the most important features for the model, reducing overfitting and improving performance."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the bias-variance tradeoff?",
    "options": [
      "The balance between model complexity and generalization ability",
      "The tradeoff between accuracy and speed",
      "The balance between training time and test time",
      "The tradeoff between data size and model size"
    ],
    "correctOption": 0,
    "explanation": "The bias-variance tradeoff describes the balance between a model's ability to fit the training data (low bias) and generalize to new data (low variance)."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the purpose of the confusion matrix?",
    "options": [
      "To evaluate classification model performance",
      "To visualize data distribution",
      "To cluster data",
      "To reduce dimensionality"
    ],
    "correctOption": 0,
    "explanation": "A confusion matrix provides a breakdown of correct and incorrect predictions for each class, evaluating classification performance."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the purpose of the elbow method in K-Means clustering?",
    "options": [
      "To determine the optimal number of clusters",
      "To initialize centroids",
      "To evaluate cluster quality",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "The elbow method plots within-cluster sum of squares against the number of clusters to identify the optimal K."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the Silhouette Score used for?",
    "options": [
      "To evaluate the quality of clusters",
      "To evaluate classification performance",
      "To evaluate regression performance",
      "To evaluate data distribution"
    ],
    "correctOption": 0,
    "explanation": "The Silhouette Score measures how similar a point is to its own cluster compared to others, evaluating clustering quality."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the purpose of the Support Vector Machine (SVM) algorithm?",
    "options": [
      "To find the hyperplane that maximizes the margin between classes",
      "To cluster data",
      "To reduce dimensionality",
      "To find associations"
    ],
    "correctOption": 0,
    "explanation": "SVM aims to find the optimal hyperplane that separates different classes with maximum margin."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the 'kernel trick' in SVM?",
    "options": [
      "A technique to transform data into higher-dimensional space for linear separation",
      "A method to reduce features",
      "A technique to handle missing data",
      "A method to speed up training"
    ],
    "correctOption": 0,
    "explanation": "The kernel trick allows SVM to operate in high-dimensional feature space without explicitly computing the transformation."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "Which of the following is an ensemble learning method?",
    "options": ["Decision Tree", "Random Forest", "K-Means", "Linear Regression"],
    "correctOption": 1,
    "explanation": "Random Forest is an ensemble method that combines multiple decision trees for improved accuracy."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the purpose of the learning curve in model evaluation?",
    "options": [
      "To diagnose bias and variance issues",
      "To measure model accuracy",
      "To select the best features",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "A learning curve plots training and validation performance against training set size, helping diagnose overfitting and underfitting."
  },
  {
    "testId": "ds-mock-test-03",
    "question": "What is the difference between precision and recall?",
    "options": [
      "Precision measures false positives; recall measures false negatives",
      "Precision measures false negatives; recall measures false positives",
      "Both measure false positives",
      "Both measure false negatives"
    ],
    "correctOption": 0,
    "explanation": "Precision = TP/(TP+FP) focusing on false positives; Recall = TP/(TP+FN) focusing on false negatives."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is a Convolutional Neural Network (CNN) primarily used for?",
    "options": [
      "Image and spatial data processing",
      "Time series forecasting",
      "Natural language processing",
      "Reinforcement learning"
    ],
    "correctOption": 0,
    "explanation": "CNNs are designed for processing grid-like data such as images, leveraging convolutional layers."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the purpose of a pooling layer in a CNN?",
    "options": [
      "To downsample feature maps, reducing computational load",
      "To increase the number of features",
      "To introduce non-linearity",
      "To classify the image"
    ],
    "correctOption": 0,
    "explanation": "Pooling layers reduce spatial dimensions, decreasing parameters and providing translation invariance."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is a Recurrent Neural Network (RNN) primarily used for?",
    "options": [
      "Sequential data and time-series",
      "Image classification",
      "Dimensionality reduction",
      "Clustering"
    ],
    "correctOption": 0,
    "explanation": "RNNs are designed for sequential data, maintaining a hidden state that captures information from previous steps."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the main advantage of LSTM over vanilla RNN?",
    "options": [
      "LSTM alleviates the vanishing gradient problem and captures long-term dependencies",
      "LSTM is faster to train",
      "LSTM requires less data",
      "LSTM has fewer parameters"
    ],
    "correctOption": 0,
    "explanation": "LSTM introduces gating mechanisms that allow it to better capture long-range dependencies and mitigate vanishing gradients."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the purpose of the attention mechanism in deep learning?",
    "options": [
      "To focus on relevant parts of the input sequence",
      "To reduce the number of parameters",
      "To speed up training",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Attention allows the model to dynamically weigh the importance of different input elements, improving performance on tasks like translation."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is a Generative Adversarial Network (GAN) composed of?",
    "options": [
      "A generator and a discriminator",
      "An encoder and a decoder",
      "A CNN and an RNN",
      "A Transformer and a classifier"
    ],
    "correctOption": 0,
    "explanation": "GANs consist of a generator that creates fake data and a discriminator that tries to distinguish real from fake."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the primary application of GANs?",
    "options": [
      "Generating realistic synthetic data",
      "Classifying images",
      "Clustering data",
      "Dimensionality reduction"
    ],
    "correctOption": 0,
    "explanation": "GANs are widely used for generating high-quality synthetic data, including realistic images and deepfakes."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the Transformer architecture primarily used for?",
    "options": [
      "Natural language processing and sequence-to-sequence tasks",
      "Image classification",
      "Reinforcement learning",
      "Clustering"
    ],
    "correctOption": 0,
    "explanation": "Transformers, based on self-attention, have become the dominant architecture for NLP tasks like translation and language modeling."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the purpose of positional encoding in Transformers?",
    "options": [
      "To inject information about the position of tokens in the sequence",
      "To reduce the sequence length",
      "To add noise to the input",
      "To encode the model position"
    ],
    "correctOption": 0,
    "explanation": "Positional encodings are added to input embeddings to provide sequential order information since Transformers are permutation-invariant."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the purpose of transfer learning?",
    "options": [
      "To use a pre-trained model on a new, similar task",
      "To transfer data from one model to another",
      "To learn multiple tasks simultaneously",
      "To transfer weights from one layer to another"
    ],
    "correctOption": 0,
    "explanation": "Transfer learning leverages a model pre-trained on a large dataset and fine-tunes it for a new, related task."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the concept of self-supervised learning?",
    "options": [
      "The model creates its own labels from the data itself",
      "Learning without any data",
      "Learning with human-provided labels",
      "Learning with reinforcement"
    ],
    "correctOption": 0,
    "explanation": "Self-supervised learning uses pretext tasks (e.g., predicting missing parts) to generate supervisory signals from unlabeled data."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the purpose of dropout in neural networks?",
    "options": [
      "To randomly drop neurons during training to prevent overfitting",
      "To drop layers from the network",
      "To drop training data",
      "To drop the learning rate"
    ],
    "correctOption": 0,
    "explanation": "Dropout randomly sets a fraction of neurons to zero during training, forcing the network to learn redundant representations."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the role of batch normalization?",
    "options": [
      "To normalize inputs to each layer, improving training stability",
      "To normalize the output of the network",
      "To reduce the number of parameters",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Batch normalization normalizes the inputs to each layer, reducing internal covariate shift and allowing higher learning rates."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the vanishing gradient problem?",
    "options": [
      "When gradients become very small, making it difficult to update early layers",
      "When gradients become very large, causing instability",
      "When gradients are perfectly balanced",
      "When gradients are constant"
    ],
    "correctOption": 0,
    "explanation": "The vanishing gradient problem occurs when gradients become extremely small in deep networks, hindering learning in early layers."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the purpose of the softmax activation function?",
    "options": [
      "To convert logits to probabilities for multi-class classification",
      "To introduce non-linearity",
      "To reduce dimensionality",
      "To handle binary classification"
    ],
    "correctOption": 0,
    "explanation": "Softmax converts raw output scores (logits) into probabilities that sum to 1, suitable for multi-class classification."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the concept of neural style transfer?",
    "options": [
      "Combining the content of one image with the style of another using CNNs",
      "Transferring weights between models",
      "Converting images to cartoon style",
      "Replacing colors in an image"
    ],
    "correctOption": 0,
    "explanation": "Neural style transfer uses a pre-trained CNN to separate and recombine content and style representations from two images."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the role of the discriminator in a GAN?",
    "options": [
      "To distinguish between real and generated data",
      "To generate fake data",
      "To classify the data",
      "To reduce the dimensionality"
    ],
    "correctOption": 0,
    "explanation": "The discriminator's goal is to correctly classify whether an input is real or generated by the generator."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the 'mode collapse' problem in GANs?",
    "options": [
      "The generator produces a limited variety of outputs",
      "The discriminator becomes too powerful",
      "The training diverges",
      "The loss function becomes zero"
    ],
    "correctOption": 0,
    "explanation": "Mode collapse occurs when the generator only produces samples from a few modes of the target distribution, missing diversity."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the purpose of model quantization?",
    "options": [
      "To reduce model size and inference time using lower-precision numbers",
      "To increase model accuracy",
      "To simplify training",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Quantization reduces the bit-width of model parameters, decreasing memory footprint and speeding up inference."
  },
  {
    "testId": "ds-mock-test-04",
    "question": "What is the concept of 'one-shot learning'?",
    "options": [
      "Learning to recognize new classes from very few examples",
      "Learning with only one training epoch",
      "Learning without any data",
      "Learning with reinforcement only"
    ],
    "correctOption": 0,
    "explanation": "One-shot learning aims to classify new categories using a single or very limited number of training examples."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the first step in the data science process?",
    "options": [
      "Business/Problem Understanding",
      "Data Collection",
      "Data Cleaning",
      "Model Building"
    ],
    "correctOption": 0,
    "explanation": "The data science process begins with understanding the business problem and defining objectives before touching the data."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the purpose of exploratory data analysis (EDA)?",
    "options": [
      "To discover patterns, trends, and insights in the data",
      "To build predictive models",
      "To deploy the model",
      "To collect more data"
    ],
    "correctOption": 0,
    "explanation": "EDA involves analyzing and visualizing data to discover patterns, anomalies, and insights that guide further analysis."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is feature engineering?",
    "options": [
      "Creating new features from raw data to improve model performance",
      "Removing irrelevant features",
      "Scaling features",
      "Handling missing values"
    ],
    "correctOption": 0,
    "explanation": "Feature engineering involves creating new, informative features from raw data to help the model learn better."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the purpose of model interpretability?",
    "options": [
      "To understand and explain the model's decisions",
      "To increase model accuracy",
      "To speed up training",
      "To reduce model size"
    ],
    "correctOption": 0,
    "explanation": "Model interpretability helps users understand why a model made certain predictions, crucial for trust and debugging."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the concept of MLOps?",
    "options": [
      "The practice of deploying, monitoring, and maintaining machine learning models in production",
      "A machine learning algorithm",
      "A data visualization tool",
      "A programming language"
    ],
    "correctOption": 0,
    "explanation": "MLOps is a set of practices for managing the entire lifecycle of machine learning models, from development to deployment and monitoring."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the purpose of A/B testing in data science?",
    "options": [
      "To compare two versions of a product or process to determine which performs better",
      "To test model accuracy",
      "To select the best features",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "A/B testing is a controlled experiment that compares two versions to determine which performs better on a specific metric."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the concept of 'data storytelling' in data science?",
    "options": [
      "Communicating insights and findings using narrative and visualizations",
      "Creating fictional stories about data",
      "Storing data in story format",
      "Deleting data after analysis"
    ],
    "correctOption": 0,
    "explanation": "Data storytelling combines data visualizations with narrative techniques to communicate insights effectively."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the purpose of a dashboard in data science?",
    "options": [
      "To provide a visual summary of key metrics and insights",
      "To store data",
      "To build models",
      "To clean data"
    ],
    "correctOption": 0,
    "explanation": "Dashboards provide a visual, interactive summary of key metrics and insights for monitoring and decision-making."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the concept of 'reinforcement learning' in data science?",
    "options": [
      "Learning optimal actions through trial and error with rewards",
      "Learning with labeled data",
      "Learning without labeled data",
      "Learning by imitation"
    ],
    "correctOption": 0,
    "explanation": "Reinforcement learning involves an agent learning optimal actions through interactions with an environment and receiving rewards."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the purpose of feature importance analysis?",
    "options": [
      "To identify which features are most important for the model's predictions",
      "To remove all features",
      "To create new features",
      "To scale features"
    ],
    "correctOption": 0,
    "explanation": "Feature importance analysis ranks features by their contribution to the model's predictions, helping interpret and improve the model."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the concept of 'explainable AI' (XAI)?",
    "options": [
      "The field of making AI systems interpretable and understandable to humans",
      "Making AI systems faster",
      "Making AI systems more accurate",
      "Making AI systems cheaper"
    ],
    "correctOption": 0,
    "explanation": "Explainable AI is an emerging field focused on developing methods to make AI systems' decisions transparent and understandable."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the purpose of a validation set in model training?",
    "options": [
      "To tune hyperparameters and evaluate model performance during training",
      "To train the model weights",
      "To increase the dataset size",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "A validation set is used to tune hyperparameters and evaluate model performance during training, helping prevent overfitting."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the difference between a metric and a KPI?",
    "options": [
      "Metrics are raw measurements; KPIs are metrics tied to strategic objectives",
      "KPIs are raw measurements; Metrics are tied to strategic objectives",
      "Both are the same",
      "Metrics are for finance; KPIs are for marketing"
    ],
    "correctOption": 0,
    "explanation": "Metrics are quantifiable measures, while KPIs (Key Performance Indicators) are metrics that are directly tied to strategic business objectives."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the purpose of correlation analysis in data science?",
    "options": [
      "To measure the strength and direction of relationships between variables",
      "To determine causation",
      "To handle missing data",
      "To scale features"
    ],
    "correctOption": 0,
    "explanation": "Correlation analysis quantifies the strength and direction of relationships between variables, helping understand feature dependencies."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the concept of 'overfitting' in machine learning?",
    "options": [
      "A model that performs well on training data but poorly on new data",
      "A model that performs poorly on training data",
      "A model with low variance",
      "A model that ignores training data"
    ],
    "correctOption": 0,
    "explanation": "Overfitting occurs when a model learns the training data too well, capturing noise and failing to generalize to unseen data."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the purpose of hyperparameter tuning?",
    "options": [
      "To find the optimal set of hyperparameters for the model",
      "To train the model weights",
      "To select the best features",
      "To handle missing data"
    ],
    "correctOption": 0,
    "explanation": "Hyperparameter tuning involves searching for the optimal combination of hyperparameters to improve model performance."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the difference between supervised and unsupervised learning?",
    "options": [
      "Supervised learning uses labeled data; unsupervised learning uses unlabeled data",
      "Supervised learning uses unlabeled data; unsupervised learning uses labeled data",
      "Both use labeled data",
      "Both use unlabeled data"
    ],
    "correctOption": 0,
    "explanation": "Supervised learning uses labeled data with known outcomes, while unsupervised learning finds patterns in unlabeled data."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the purpose of data cleaning in data science?",
    "options": [
      "To identify and correct errors, inconsistencies, and missing values in data",
      "To build models",
      "To visualize data",
      "To deploy models"
    ],
    "correctOption": 0,
    "explanation": "Data cleaning is the process of identifying and fixing errors, inconsistencies, and missing values to ensure data quality."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the concept of 'bias' in machine learning models?",
    "options": [
      "Systematic errors that lead to inaccurate predictions",
      "The variance of the model",
      "The complexity of the model",
      "The speed of training"
    ],
    "correctOption": 0,
    "explanation": "Bias refers to systematic errors in a model's predictions that can lead to inaccurate outcomes, often due to assumptions or data issues."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the purpose of model deployment?",
    "options": [
      "To make the model available for use in production systems",
      "To train the model",
      "To evaluate the model",
      "To clean the data"
    ],
    "correctOption": 0,
    "explanation": "Model deployment involves integrating the trained model into production systems for making predictions on new data."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the concept of 'fairness' in machine learning?",
    "options": [
      "Ensuring the model does not discriminate against specific groups",
      "Making the model faster",
      "Making the model more accurate",
      "Making the model larger"
    ],
    "correctOption": 0,
    "explanation": "Fairness in ML is about ensuring models make decisions that are equitable and do not discriminate against individuals or groups based on protected characteristics."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the purpose of an API in data science projects?",
    "options": [
      "To allow different applications and systems to communicate and share data",
      "To build models",
      "To clean data",
      "To visualize data"
    ],
    "correctOption": 0,
    "explanation": "APIs (Application Programming Interfaces) enable different systems to communicate, allowing models to be accessed and integrated with other applications."
  },
  {
    "testId": "ds-mock-test-05",
    "question": "What is the concept of 'data privacy' in data science?",
    "options": [
      "Protecting sensitive and personal information from unauthorized access",
      "Making data public",
      "Deleting data",
      "Sharing data with everyone"
    ],
    "correctOption": 0,
    "explanation": "Data privacy involves protecting sensitive and personal information to ensure individuals' rights and comply with regulations like GDPR."
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
console.log('Added ' + newQuestions.length + ' ds-full-mock questions to questions.js');
