const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "business-analytics-test-01",
    "question": "What is Business Analytics?",
    "options": [
      "The process of storing data in databases",
      "The use of data, statistical analysis, and quantitative methods to make informed business decisions",
      "The process of creating software applications",
      "The management of IT infrastructure"
    ],
    "correctOption": 1,
    "explanation": "Business Analytics (BA) involves using data, statistical analysis, and quantitative methods to gain insights and support data-driven business decision-making.[reference:4][reference:5]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "Which of the following is NOT a type of Business Analytics?",
    "options": ["Descriptive Analytics", "Predictive Analytics", "Prescriptive Analytics", "Decorative Analytics"],
    "correctOption": 3,
    "explanation": "The three main types of Business Analytics are Descriptive (what happened), Predictive (what will happen), and Prescriptive (what should be done). Decorative Analytics is not a recognized category.[reference:6]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What does Descriptive Analytics primarily focus on?",
    "options": [
      "Predicting future outcomes",
      "Understanding what has happened in the past",
      "Recommending the best course of action",
      "Visualizing data in real-time"
    ],
    "correctOption": 1,
    "explanation": "Descriptive Analytics answers the question 'What happened?' by summarizing historical data using measures like mean, median, and visualizations.[reference:7]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is the primary goal of Predictive Analytics?",
    "options": [
      "To describe past events",
      "To forecast future outcomes and trends",
      "To optimize decision-making",
      "To clean and prepare data"
    ],
    "correctOption": 1,
    "explanation": "Predictive Analytics uses historical data and statistical models to forecast what is likely to happen in the future.[reference:8]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "Which type of analytics recommends the best action to take?",
    "options": ["Descriptive Analytics", "Predictive Analytics", "Prescriptive Analytics", "Diagnostic Analytics"],
    "correctOption": 2,
    "explanation": "Prescriptive Analytics answers 'What should we do?' by using optimization and simulation to recommend the best course of action.[reference:9]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is the difference between Business Analytics and Business Intelligence (BI)?",
    "options": [
      "BA focuses on historical reporting; BI focuses on future predictions",
      "BI focuses on descriptive reporting and dashboards; BA encompasses predictive and prescriptive analytics",
      "There is no difference",
      "BA is only for large companies; BI is for small companies"
    ],
    "correctOption": 1,
    "explanation": "BI typically focuses on descriptive analytics, reporting, and dashboards. BA is broader, including predictive and prescriptive analytics for forward-looking decisions.[reference:10]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "Which of the following is an example of a data source for Business Analytics?",
    "options": [
      "Customer transaction records",
      "Social media data",
      "Sales reports",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Business Analytics can use various data sources including internal records (transactions, sales) and external sources (social media, market data).[reference:11]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is data quality in the context of Business Analytics?",
    "options": [
      "The amount of data available",
      "The accuracy, completeness, and reliability of data",
      "The speed at which data is processed",
      "The visual appeal of data"
    ],
    "correctOption": 1,
    "explanation": "Data quality refers to how well data meets the requirements for accuracy, completeness, consistency, and reliability for analysis.[reference:12]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is a common challenge when dealing with data in Business Analytics?",
    "options": [
      "Too much data",
      "Missing or incomplete data",
      "Data in different formats",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Common data challenges include missing/incomplete data, data in inconsistent formats, and managing large volumes of data.[reference:13]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What does CRISP-DM stand for in the context of analytics?",
    "options": [
      "Cross-Industry Standard Process for Data Mining",
      "Comprehensive Research and Innovation Strategy for Data Management",
      "Critical Review of Information Systems and Predictive Data Modeling",
      "Central Repository for Integrated Statistical Processing and Data Mining"
    ],
    "correctOption": 0,
    "explanation": "CRISP-DM is the Cross-Industry Standard Process for Data Mining, a widely used framework for data analytics projects.[reference:14]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "Which phase is the first step in the CRISP-DM framework?",
    "options": ["Data Preparation", "Modeling", "Business Understanding", "Evaluation"],
    "correctOption": 2,
    "explanation": "The CRISP-DM framework begins with Business Understanding, where the project objectives and requirements are defined.[reference:15]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is the primary purpose of data visualization in Business Analytics?",
    "options": [
      "To make data look attractive",
      "To communicate insights and patterns effectively",
      "To replace statistical analysis",
      "To store data securely"
    ],
    "correctOption": 1,
    "explanation": "Data visualization helps communicate complex data insights clearly and effectively, making patterns and trends easier to understand.[reference:16]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "Which tool is commonly used for data visualization in Business Analytics?",
    "options": ["Power BI", "Tableau", "Excel", "All of the above"],
    "correctOption": 3,
    "explanation": "Power BI, Tableau, and Excel are all widely used for data visualization and business reporting.[reference:17]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is a pivot table used for in Business Analytics?",
    "options": [
      "To summarize and analyze large datasets dynamically",
      "To create charts and graphs",
      "To write SQL queries",
      "To clean missing data"
    ],
    "correctOption": 0,
    "explanation": "A pivot table is an interactive tool that summarizes and analyzes large datasets, allowing users to dynamically rearrange and aggregate data.[reference:18]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What type of data is represented by categories like 'Male' and 'Female'?",
    "options": ["Numerical Data", "Categorical Data", "Time-Series Data", "Text Data"],
    "correctOption": 1,
    "explanation": "Categorical (or qualitative) data represents categories or groups, such as gender, product type, or region.[reference:19]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "Which measure is used to describe the 'average' of a dataset?",
    "options": ["Median", "Mode", "Mean", "Standard Deviation"],
    "correctOption": 2,
    "explanation": "The mean is the arithmetic average of a dataset, calculated by summing all values and dividing by the count.[reference:20]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What does standard deviation measure in descriptive statistics?",
    "options": [
      "The central tendency of data",
      "The spread or dispersion of data around the mean",
      "The most frequent value",
      "The difference between maximum and minimum"
    ],
    "correctOption": 1,
    "explanation": "Standard deviation measures the amount of variation or dispersion in a dataset, indicating how spread out the values are from the mean.[reference:21]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is the median of the dataset [3, 7, 9, 12, 15]?",
    "options": ["7", "9", "12", "10"],
    "correctOption": 1,
    "explanation": "The median is the middle value when data is ordered. For this dataset, the middle value is 9."
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is the mode of the dataset [2, 3, 3, 5, 7, 7, 7, 9]?",
    "options": ["3", "5", "7", "9"],
    "correctOption": 2,
    "explanation": "The mode is the value that appears most frequently. 7 appears three times, which is more than any other value."
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What does a boxplot display in descriptive analytics?",
    "options": [
      "The mean and standard deviation",
      "The median, quartiles, and outliers",
      "The frequency distribution",
      "The correlation between variables"
    ],
    "correctOption": 1,
    "explanation": "A boxplot (or box-and-whisker plot) displays the median, quartiles (Q1 and Q3), and potential outliers in a dataset."
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is the range of the dataset [4, 8, 12, 16, 20]?",
    "options": ["4", "12", "16", "20"],
    "correctOption": 2,
    "explanation": "The range is calculated as the difference between the maximum and minimum values: 20 - 4 = 16."
  },
  {
    "testId": "business-analytics-test-01",
    "question": "Which type of chart is best for showing the distribution of a numerical variable?",
    "options": ["Pie chart", "Bar chart", "Histogram", "Line chart"],
    "correctOption": 2,
    "explanation": "Histograms are used to visualize the distribution of numerical data by grouping values into intervals or bins."
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is a key difference between a bar chart and a histogram?",
    "options": [
      "Bar charts have gaps between bars; histograms do not",
      "Bar charts are for numerical data; histograms are for categorical data",
      "Histograms show trends; bar charts show distributions",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "Bar charts typically have gaps between bars to separate categories, while histograms have no gaps because they represent continuous numerical data."
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is the purpose of data wrangling in Business Analytics?",
    "options": [
      "To create visualizations",
      "To clean, transform, and prepare data for analysis",
      "To store data in databases",
      "To predict future outcomes"
    ],
    "correctOption": 1,
    "explanation": "Data wrangling (or data munging) involves cleaning, transforming, and preparing raw data for analysis, ensuring data quality.[reference:22]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "Which SQL command is used to retrieve data from a database?",
    "options": ["INSERT", "UPDATE", "SELECT", "DELETE"],
    "correctOption": 2,
    "explanation": "The SELECT statement is used to query and retrieve data from a database table.[reference:23]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is the role of a Decision Support System (DSS) in Business Analytics?",
    "options": [
      "To replace human decision-making",
      "To support and enhance business decision-making through data analysis",
      "To store data securely",
      "To create visualizations"
    ],
    "correctOption": 1,
    "explanation": "A Decision Support System (DSS) helps decision-makers by providing data analysis, models, and insights to support business decisions.[reference:24]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is a Data Warehouse?",
    "options": [
      "A storage system for raw, unprocessed data",
      "A centralized repository for storing and managing large volumes of structured data for analysis",
      "A tool for data visualization",
      "A type of database for transaction processing"
    ],
    "correctOption": 1,
    "explanation": "A Data Warehouse is a centralized repository that stores large volumes of structured data from multiple sources, optimized for analysis and reporting.[reference:25][reference:26]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is the difference between structured and unstructured data?",
    "options": [
      "Structured data is organized in rows and columns; unstructured data is not",
      "Structured data is always numerical; unstructured data is always text",
      "Structured data comes from social media; unstructured data comes from databases",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "Structured data is organized in a predefined format (like tables with rows and columns). Unstructured data (like text, images, videos) does not have a predefined format.[reference:27]"
  },
  {
    "testId": "business-analytics-test-01",
    "question": "What is exploratory data analysis (EDA)?",
    "options": [
      "A process of testing hypotheses with statistical tests",
      "A process of analyzing data to summarize main characteristics and discover patterns",
      "A process of cleaning and preparing data",
      "A process of building predictive models"
    ],
    "correctOption": 1,
    "explanation": "Exploratory Data Analysis (EDA) involves analyzing data to discover patterns, trends, and relationships, often using visualizations and summary statistics.[reference:28]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is the main objective of Predictive Analytics?",
    "options": [
      "To describe what happened in the past",
      "To forecast future events and trends",
      "To recommend optimal actions",
      "To clean and prepare data"
    ],
    "correctOption": 1,
    "explanation": "Predictive Analytics uses historical data and statistical models to forecast what is likely to happen in the future.[reference:29]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "Which of the following is a predictive analytics technique?",
    "options": ["Linear Regression", "Data Visualization", "Pivot Tables", "Descriptive Statistics"],
    "correctOption": 0,
    "explanation": "Linear regression is a predictive modeling technique used to forecast outcomes based on historical relationships between variables.[reference:30]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What does the R-squared value indicate in a regression model?",
    "options": [
      "The proportion of variance in the dependent variable explained by the independent variables",
      "The correlation between two variables",
      "The significance of the model",
      "The standard error of the estimate"
    ],
    "correctOption": 0,
    "explanation": "R-squared measures how well the independent variables explain the variation in the dependent variable, ranging from 0 to 1."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is the purpose of time series analysis in Business Analytics?",
    "options": [
      "To analyze data points collected at regular time intervals",
      "To analyze categorical data",
      "To clean missing data",
      "To visualize data in charts"
    ],
    "correctOption": 0,
    "explanation": "Time series analysis involves analyzing data points collected over time to identify patterns, trends, and forecast future values.[reference:31]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is a common technique for time series forecasting?",
    "options": ["Exponential Smoothing", "Logistic Regression", "K-Means Clustering", "Decision Trees"],
    "correctOption": 0,
    "explanation": "Exponential smoothing is a popular time series forecasting technique that uses weighted averages of past observations."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is the null hypothesis (H0) in hypothesis testing?",
    "options": [
      "The hypothesis that there is an effect or difference",
      "The hypothesis that there is no effect or difference",
      "The alternative hypothesis",
      "The research hypothesis"
    ],
    "correctOption": 1,
    "explanation": "The null hypothesis (H0) is a statement of no effect, no difference, or no relationship. It is what researchers try to disprove.[reference:32]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is a p-value in hypothesis testing?",
    "options": [
      "The probability of observing the test statistic or more extreme, assuming the null hypothesis is true",
      "The probability that the null hypothesis is true",
      "The probability that the alternative hypothesis is true",
      "The significance level"
    ],
    "correctOption": 0,
    "explanation": "The p-value is the probability of obtaining results as extreme as the observed data, assuming the null hypothesis is true."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is a Type I error in hypothesis testing?",
    "options": [
      "Rejecting a true null hypothesis",
      "Failing to reject a false null hypothesis",
      "Rejecting a false null hypothesis",
      "Failing to reject a true null hypothesis"
    ],
    "correctOption": 0,
    "explanation": "A Type I error occurs when the null hypothesis is true but we incorrectly reject it (a 'false positive')."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is a Type II error in hypothesis testing?",
    "options": [
      "Rejecting a true null hypothesis",
      "Failing to reject a false null hypothesis",
      "Rejecting a false null hypothesis",
      "Failing to reject a true null hypothesis"
    ],
    "correctOption": 1,
    "explanation": "A Type II error occurs when the null hypothesis is false but we fail to reject it (a 'false negative')."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is the significance level (α) commonly set to in hypothesis testing?",
    "options": ["0.01", "0.05", "0.10", "0.50"],
    "correctOption": 1,
    "explanation": "The significance level (α) is commonly set to 0.05 (5%), representing the probability of making a Type I error."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is the purpose of Prescriptive Analytics?",
    "options": [
      "To describe what happened in the past",
      "To predict what will happen in the future",
      "To recommend the best course of action",
      "To clean and prepare data"
    ],
    "correctOption": 2,
    "explanation": "Prescriptive Analytics uses optimization and simulation techniques to recommend the best action to achieve desired outcomes.[reference:33]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "Which of the following is a prescriptive analytics technique?",
    "options": ["Linear Regression", "Time Series Forecasting", "Linear Optimization", "Clustering"],
    "correctOption": 2,
    "explanation": "Linear optimization is a prescriptive analytics technique used to find the best solution given constraints and objectives.[reference:34]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is simulation used for in Business Analytics?",
    "options": [
      "To model and analyze complex systems under uncertainty",
      "To clean and prepare data",
      "To create data visualizations",
      "To store data securely"
    ],
    "correctOption": 0,
    "explanation": "Simulation models complex systems to analyze performance under different scenarios and uncertainty, supporting decision-making.[reference:35]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is linear programming (optimization) used for?",
    "options": [
      "To find the optimal solution given constraints and objectives",
      "To predict future outcomes",
      "To visualize data",
      "To clean missing data"
    ],
    "correctOption": 0,
    "explanation": "Linear programming is an optimization technique used to find the best outcome (maximize or minimize) given a set of constraints.[reference:36]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is data mining in the context of Business Analytics?",
    "options": [
      "The process of discovering patterns and insights from large datasets",
      "The process of storing data in databases",
      "The process of creating visualizations",
      "The process of cleaning data"
    ],
    "correctOption": 0,
    "explanation": "Data mining involves discovering patterns, relationships, and insights from large datasets using statistical and machine learning techniques.[reference:37]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "Which technique is used for association rule mining?",
    "options": ["Apriori Algorithm", "Linear Regression", "K-Means Clustering", "Decision Trees"],
    "correctOption": 0,
    "explanation": "The Apriori algorithm is commonly used for association rule mining to discover relationships between items in transactional data.[reference:38]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is clustering in data mining?",
    "options": [
      "A technique to group similar data points together",
      "A technique to predict future outcomes",
      "A technique to optimize decisions",
      "A technique to visualize data"
    ],
    "correctOption": 0,
    "explanation": "Clustering is an unsupervised learning technique that groups similar data points together based on their characteristics.[reference:39]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is the K-Means algorithm used for?",
    "options": ["Classification", "Clustering", "Regression", "Association Rules"],
    "correctOption": 1,
    "explanation": "K-Means is a popular clustering algorithm that partitions data into K distinct, non-overlapping groups.[reference:40]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is a decision tree used for in Business Analytics?",
    "options": [
      "To make predictions by splitting data based on decision rules",
      "To group similar data points",
      "To find associations between items",
      "To optimize resource allocation"
    ],
    "correctOption": 0,
    "explanation": "Decision trees are predictive models that use a tree-like structure of decisions to classify or predict outcomes.[reference:41]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is the difference between classification and regression?",
    "options": [
      "Classification predicts categorical outcomes; regression predicts continuous outcomes",
      "Classification predicts continuous outcomes; regression predicts categorical outcomes",
      "Both predict categorical outcomes",
      "Both predict continuous outcomes"
    ],
    "correctOption": 0,
    "explanation": "Classification predicts discrete categories (e.g., Yes/No), while regression predicts continuous numerical values (e.g., sales amount).[reference:42]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is overfitting in predictive modeling?",
    "options": [
      "When a model performs well on training data but poorly on new data",
      "When a model performs well on all data",
      "When a model has too few variables",
      "When a model is too simple"
    ],
    "correctOption": 0,
    "explanation": "Overfitting occurs when a model learns the training data too well, capturing noise, and fails to generalize to new data."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is cross-validation used for in model evaluation?",
    "options": [
      "To assess model performance and prevent overfitting",
      "To clean and prepare data",
      "To visualize model results",
      "To optimize model parameters"
    ],
    "correctOption": 0,
    "explanation": "Cross-validation is a technique to evaluate model performance by splitting data into training and validation sets, helping detect overfitting."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is a confusion matrix used for in classification?",
    "options": [
      "To evaluate the performance of a classification model",
      "To cluster data points",
      "To find associations between items",
      "To optimize resource allocation"
    ],
    "correctOption": 0,
    "explanation": "A confusion matrix is a table used to evaluate the performance of a classification model by comparing predicted and actual outcomes."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What does the term 'Big Data' refer to in Business Analytics?",
    "options": [
      "Large and complex datasets that cannot be processed by traditional methods",
      "A small dataset that is easy to analyze",
      "Data that is always structured",
      "Data that comes only from social media"
    ],
    "correctOption": 0,
    "explanation": "Big Data refers to large, complex datasets that require advanced tools and techniques to store, process, and analyze.[reference:43][reference:44]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What are the three Vs of Big Data?",
    "options": [
      "Volume, Velocity, Variety",
      "Value, Variability, Variance",
      "Volume, Value, Verification",
      "Velocity, Variability, Visualization"
    ],
    "correctOption": 0,
    "explanation": "The three Vs of Big Data are Volume (scale of data), Velocity (speed of data generation), and Variety (different types of data)."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is diagnostic analytics?",
    "options": [
      "Analyzing data to understand why something happened",
      "Predicting what will happen in the future",
      "Recommending the best course of action",
      "Describing what happened in the past"
    ],
    "correctOption": 0,
    "explanation": "Diagnostic analytics goes beyond descriptive analytics to understand the root causes and reasons behind past outcomes.[reference:45]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is the role of a Business Analyst in an organization?",
    "options": [
      "To bridge the gap between business needs and data-driven solutions",
      "To write code exclusively",
      "To manage IT infrastructure",
      "To create marketing campaigns"
    ],
    "correctOption": 0,
    "explanation": "A Business Analyst translates business problems into data-driven solutions, working with stakeholders and data teams to drive informed decisions."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is the difference between correlation and causation?",
    "options": [
      "Correlation implies a relationship; causation implies that one variable causes the other",
      "Correlation is always causation",
      "Causation implies correlation but not vice versa",
      "Both A and C are correct"
    ],
    "correctOption": 3,
    "explanation": "Correlation indicates a relationship between variables, but causation means that one variable directly causes changes in another. Correlation does not always imply causation."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is a lift chart used for in predictive analytics?",
    "options": [
      "To evaluate the performance of a predictive model",
      "To visualize data distribution",
      "To clean missing data",
      "To cluster data points"
    ],
    "correctOption": 0,
    "explanation": "A lift chart is used to evaluate and compare the performance of predictive models, showing how much better the model performs compared to random selection."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is an outlier in a dataset?",
    "options": [
      "A data point that is significantly different from others",
      "A data point that is missing",
      "A data point that is repeated",
      "A data point that is average"
    ],
    "correctOption": 0,
    "explanation": "An outlier is an observation that lies an abnormal distance from other values in a dataset, potentially indicating errors or unique cases."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is the purpose of sensitivity analysis in prescriptive analytics?",
    "options": [
      "To assess how changes in inputs affect model outputs",
      "To predict future outcomes",
      "To group similar data points",
      "To clean and prepare data"
    ],
    "correctOption": 0,
    "explanation": "Sensitivity analysis examines how variations in input parameters affect the output of a model, helping understand uncertainty and risk."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is the difference between supervised and unsupervised learning?",
    "options": [
      "Supervised learning uses labeled data; unsupervised learning uses unlabeled data",
      "Supervised learning uses unlabeled data; unsupervised learning uses labeled data",
      "Both use labeled data",
      "Both use unlabeled data"
    ],
    "correctOption": 0,
    "explanation": "Supervised learning uses labeled data with known outcomes to train models. Unsupervised learning finds patterns in unlabeled data without predefined outcomes.[reference:46]"
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is the ROC curve used for in predictive analytics?",
    "options": [
      "To evaluate the performance of classification models",
      "To cluster data points",
      "To find associations between items",
      "To optimize resource allocation"
    ],
    "correctOption": 0,
    "explanation": "The Receiver Operating Characteristic (ROC) curve is used to evaluate the performance of binary classification models by plotting true positive rate against false positive rate."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is the purpose of using A/B testing in Business Analytics?",
    "options": [
      "To compare two versions of a product or process to determine which performs better",
      "To clean and prepare data",
      "To create data visualizations",
      "To store data securely"
    ],
    "correctOption": 0,
    "explanation": "A/B testing is a controlled experiment that compares two versions (A and B) to determine which one performs better for a specific metric."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is the difference between a metric and a KPI?",
    "options": [
      "Metrics are raw numbers; KPIs are metrics tied to strategic objectives",
      "KPIs are raw numbers; Metrics are tied to strategic objectives",
      "Both are the same",
      "Metrics are for finance; KPIs are for marketing"
    ],
    "correctOption": 0,
    "explanation": "Metrics are quantifiable measures (e.g., sales volume). KPIs (Key Performance Indicators) are metrics that are directly tied to strategic business objectives."
  },
  {
    "testId": "business-analytics-test-02",
    "question": "What is ethical consideration in Business Analytics?",
    "options": [
      "Ensuring data privacy and avoiding bias in models",
      "Making data look good visually",
      "Storing data securely only",
      "Using as much data as possible"
    ],
    "correctOption": 0,
    "explanation": "Ethical considerations in Business Analytics include protecting data privacy, avoiding algorithmic bias, and ensuring transparency in data-driven decisions."
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
console.log('Added ' + newQuestions.length + ' ba questions to questions.js');
