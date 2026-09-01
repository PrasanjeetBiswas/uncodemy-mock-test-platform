const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "mock-test-01",
    "question": "Which SQL clause is used to filter rows before grouping them?",
    "options": ["HAVING", "WHERE", "GROUP BY", "ORDER BY"],
    "correctOption": 1,
    "explanation": "The WHERE clause filters individual rows before grouping. HAVING filters groups after aggregation."
  },
  {
    "testId": "mock-test-01",
    "question": "What is the difference between Nominal and Ordinal data?",
    "options": [
      "Nominal has no order; Ordinal has a meaningful order",
      "Nominal is numerical; Ordinal is categorical",
      "Nominal has order; Ordinal has no order",
      "Both have no order"
    ],
    "correctOption": 0,
    "explanation": "Nominal data are categories without a natural order (e.g., colors). Ordinal data have a clear ranking or order (e.g., education level)."
  },
  {
    "testId": "mock-test-01",
    "question": "Which Excel function is used to add up a range of cells?",
    "options": ["AVERAGE", "SUM", "COUNT", "MAX"],
    "correctOption": 1,
    "explanation": "The SUM function adds all numerical values in a specified range of cells."
  },
  {
    "testId": "mock-test-01",
    "question": "What is the median of the dataset [4, 8, 15, 16, 23, 42]?",
    "options": ["15", "15.5", "16", "23"],
    "correctOption": 1,
    "explanation": "With an even number of values, the median is the average of the two middle numbers: (15+16)/2 = 15.5."
  },
  {
    "testId": "mock-test-01",
    "question": "Which data type is best for storing the age of a person in Python?",
    "options": ["str", "int", "float", "bool"],
    "correctOption": 1,
    "explanation": "Age is typically a whole number, making the integer (int) data type the most appropriate."
  },
  {
    "testId": "mock-test-01",
    "question": "What is the primary purpose of a database index?",
    "options": [
      "To speed up data retrieval operations",
      "To enforce data uniqueness",
      "To delete duplicate data",
      "To store data more securely"
    ],
    "correctOption": 0,
    "explanation": "An index is a data structure that improves the speed of data retrieval (SELECT queries) at the cost of additional storage and slower writes."
  },
  {
    "testId": "mock-test-01",
    "question": "In a boxplot, what does the box represent?",
    "options": [
      "The range between the minimum and maximum values",
      "The interquartile range (IQR) from Q1 to Q3",
      "The standard deviation",
      "The mean value"
    ],
    "correctOption": 1,
    "explanation": "In a boxplot, the box represents the interquartile range (IQR), spanning from the 1st quartile (Q1) to the 3rd quartile (Q3)."
  },
  {
    "testId": "mock-test-01",
    "question": "Which of the following is NOT a valid Excel data type?",
    "options": ["Number", "Text", "DateTime", "Boolean"],
    "correctOption": 3,
    "explanation": "Excel primarily handles Numbers, Text, and DateTime. While True/False can exist, 'Boolean' is not a recognized primary cell data type like in programming."
  },
  {
    "testId": "mock-test-01",
    "question": "What is a primary key in a relational database?",
    "options": [
      "A column that uniquely identifies each row",
      "A column that stores foreign keys",
      "A column that can have duplicate values",
      "A column that is used for sorting"
    ],
    "correctOption": 0,
    "explanation": "A primary key is a column (or a set of columns) that uniquely identifies each record in a table. It must contain unique, non-NULL values."
  },
  {
    "testId": "mock-test-01",
    "question": "Which measure of central tendency is most affected by outliers?",
    "options": ["Median", "Mode", "Mean", "Range"],
    "correctOption": 2,
    "explanation": "The mean (average) is highly sensitive to extreme outliers because it includes every value in the calculation."
  },
  {
    "testId": "mock-test-01",
    "question": "In SQL, which statement is used to add a new record to a table?",
    "options": ["INSERT INTO", "ADD RECORD", "INSERT", "CREATE"],
    "correctOption": 0,
    "explanation": "The INSERT INTO statement is used to insert new rows into an existing table."
  },
  {
    "testId": "mock-test-01",
    "question": "What is the purpose of data profiling in data analytics?",
    "options": [
      "To analyze and understand the structure, content, and quality of data",
      "To visualize data in charts",
      "To build predictive models",
      "To delete redundant data"
    ],
    "correctOption": 0,
    "explanation": "Data profiling examines the structure, content, and relationships within data to assess quality and discover metadata."
  },
  {
    "testId": "mock-test-01",
    "question": "Which of the following is an example of descriptive analytics?",
    "options": [
      "Predicting next month's sales",
      "Calculating total sales for last quarter",
      "Recommending product bundles",
      "Testing if a marketing campaign was effective"
    ],
    "correctOption": 1,
    "explanation": "Calculating historical total sales is descriptive analytics (describing what happened)."
  },
  {
    "testId": "mock-test-01",
    "question": "What does the acronym SQL stand for?",
    "options": ["Structured Query Language", "Simple Query Logic", "Standard Question Language", "System Query Locator"],
    "correctOption": 0,
    "explanation": "SQL stands for Structured Query Language, used to manage and query relational databases."
  },
  {
    "testId": "mock-test-01",
    "question": "What is the range of the dataset [2, 5, 7, 12, 18]?",
    "options": ["7", "16", "18", "15"],
    "correctOption": 1,
    "explanation": "The range is the difference between the maximum and minimum values: 18 - 2 = 16."
  },
  {
    "testId": "mock-test-01",
    "question": "Which Excel feature automatically fills a series of values based on a pattern?",
    "options": ["AutoFill", "Flash Fill", "AutoSum", "Quick Analysis"],
    "correctOption": 0,
    "explanation": "AutoFill recognizes patterns (like days of the week, numbers) and extends the series when dragging the fill handle."
  },
  {
    "testId": "mock-test-01",
    "question": "What type of variable is the temperature measured in Celsius?",
    "options": ["Nominal", "Ordinal", "Interval", "Ratio"],
    "correctOption": 2,
    "explanation": "Temperature in Celsius is an interval variable because it has equal intervals but no true zero point (0°C doesn't mean no temperature)."
  },
  {
    "testId": "mock-test-01",
    "question": "In Python, which keyword is used to define a function?",
    "options": ["function", "def", "define", "func"],
    "correctOption": 1,
    "explanation": "The 'def' keyword is used to define a function in Python."
  },
  {
    "testId": "mock-test-01",
    "question": "What is the main advantage of using a star schema in data warehousing?",
    "options": [
      "It simplifies query performance and user understanding",
      "It reduces data redundancy to zero",
      "It allows unlimited nesting of hierarchies",
      "It stores data in a single table"
    ],
    "correctOption": 0,
    "explanation": "The star schema uses a central fact table and surrounding dimension tables, optimizing performance and simplifying navigation for business users."
  },
  {
    "testId": "mock-test-01",
    "question": "Which SQL operator is used to search for a pattern in a string?",
    "options": ["LIKE", "BETWEEN", "IN", "EXISTS"],
    "correctOption": 0,
    "explanation": "The LIKE operator is used in a WHERE clause to search for a specified pattern using wildcards (% and _)."
  },
  {
    "testId": "mock-test-01",
    "question": "What is the mode of the dataset [3, 7, 3, 9, 7, 7, 2]?",
    "options": ["3", "7", "9", "2"],
    "correctOption": 1,
    "explanation": "The mode is the most frequently occurring value. '7' appears three times, more than any other."
  },
  {
    "testId": "mock-test-01",
    "question": "Which of the following is a valid Python list comprehension?",
    "options": ["[x*2 for x in range(5)]", "{x*2 for x in range(5)}", "(x*2 for x in range(5))", "x*2 for x in range(5)"],
    "correctOption": 0,
    "explanation": "List comprehensions use square brackets [ ] with the expression followed by the for clause."
  },
  {
    "testId": "mock-test-01",
    "question": "In Excel, what does a red triangle in the top-right corner of a cell indicate?",
    "options": ["An error in formula", "A comment", "A conditional formatting rule", "A date value"],
    "correctOption": 1,
    "explanation": "A red triangle indicates that a comment has been added to the cell."
  },
  {
    "testId": "mock-test-01",
    "question": "What is the purpose of the SELECT DISTINCT statement in SQL?",
    "options": [
      "To return only unique rows from the result set",
      "To sort the results",
      "To filter rows based on a condition",
      "To join two tables"
    ],
    "correctOption": 0,
    "explanation": "SELECT DISTINCT removes duplicate rows from the result set, returning only unique combinations of selected columns."
  },
  {
    "testId": "mock-test-01",
    "question": "Which of the following is a continuous variable?",
    "options": ["Number of children", "Height in cm", "Number of cars", "Shirt size (S, M, L)"],
    "correctOption": 1,
    "explanation": "Height in cm is continuous because it can take any value within a range (e.g., 170.5 cm). The others are discrete or categorical."
  },
  {
    "testId": "mock-test-01",
    "question": "What does ETL stand for in data integration?",
    "options": [
      "Extract, Transform, Load",
      "Extract, Translate, Load",
      "Execute, Transfer, Load",
      "Export, Transform, Link"
    ],
    "correctOption": 0,
    "explanation": "ETL is the process of Extracting data from sources, Transforming it to fit operational needs, and Loading it into the target database."
  },
  {
    "testId": "mock-test-01",
    "question": "In Python, which method is used to read a CSV file using the Pandas library?",
    "options": ["pd.read_csv()", "pd.import_csv()", "csv.read()", "pd.load_csv()"],
    "correctOption": 0,
    "explanation": "The standard Pandas method to read CSV files is `pd.read_csv()`."
  },
  {
    "testId": "mock-test-01",
    "question": "What is the primary purpose of a data dictionary?",
    "options": [
      "To store the actual data values",
      "To provide metadata about the database structure and fields",
      "To index the database for faster queries",
      "To backup the database"
    ],
    "correctOption": 1,
    "explanation": "A data dictionary contains metadata describing the database objects (tables, columns, data types, constraints)."
  },
  {
    "testId": "mock-test-01",
    "question": "Which chart type is best for comparing parts of a whole?",
    "options": ["Bar chart", "Line chart", "Pie chart", "Scatter plot"],
    "correctOption": 2,
    "explanation": "Pie charts are used to show the proportional composition of a whole, effectively comparing parts to the total."
  },
  {
    "testId": "mock-test-01",
    "question": "What is the difference between a correlated and a non-correlated subquery in SQL?",
    "options": [
      "A correlated subquery references the outer query; a non-correlated subquery does not",
      "A non-correlated subquery references the outer query; a correlated subquery does not",
      "Both reference the outer query",
      "Neither references the outer query"
    ],
    "correctOption": 0,
    "explanation": "A correlated subquery depends on the outer query for its values and executes for each row processed. A non-correlated subquery is independent."
  },
  {
    "testId": "mock-test-02",
    "question": "In a Star Schema, which type of table contains the business metrics and foreign keys?",
    "options": ["Dimension Table", "Fact Table", "Bridge Table", "Lookup Table"],
    "correctOption": 1,
    "explanation": "The Fact Table stores quantitative metrics (e.g., sales amount, quantity) and foreign keys linking to dimension tables."
  },
  {
    "testId": "mock-test-02",
    "question": "Which SQL join returns all rows from the left table and matching rows from the right table?",
    "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    "correctOption": 1,
    "explanation": "LEFT JOIN returns all rows from the left (first) table. If there is no match in the right table, NULLs are returned for the right side."
  },
  {
    "testId": "mock-test-02",
    "question": "What is the purpose of the GROUP BY clause in SQL?",
    "options": [
      "To sort the result set",
      "To group rows that have the same values in specified columns for aggregation",
      "To filter rows",
      "To join tables"
    ],
    "correctOption": 1,
    "explanation": "GROUP BY arranges identical data into groups. It is used with aggregate functions like SUM, COUNT, and AVG."
  },
  {
    "testId": "mock-test-02",
    "question": "In Excel, what does the VLOOKUP function return if it does not find a matching value?",
    "options": ["#N/A", "#VALUE!", "#REF!", "0"],
    "correctOption": 0,
    "explanation": "VLOOKUP returns #N/A if the lookup value is not found (when range_lookup is FALSE)."
  },
  {
    "testId": "mock-test-02",
    "question": "What is the standard deviation measuring in a dataset?",
    "options": [
      "The average distance of each data point from the mean",
      "The middle value of the dataset",
      "The most frequent value",
      "The difference between min and max"
    ],
    "correctOption": 0,
    "explanation": "Standard deviation is a measure of dispersion, indicating the average distance of each data point from the mean."
  },
  {
    "testId": "mock-test-02",
    "question": "Which Python Pandas function is used to remove duplicates from a DataFrame?",
    "options": ["drop_duplicates()", "remove_duplicates()", "delete_duplicates()", "distinct()"],
    "correctOption": 0,
    "explanation": "The `drop_duplicates()` method is used in Pandas to remove duplicate rows from a DataFrame."
  },
  {
    "testId": "mock-test-02",
    "question": "What is the concept of 'cardinality' in a database relationship?",
    "options": [
      "The number of rows in a table",
      "The uniqueness of data values in a column",
      "The type of relationship (1:1, 1:Many, Many:Many) between tables",
      "The number of columns in a table"
    ],
    "correctOption": 2,
    "explanation": "In the context of relationships, cardinality defines the numerical relationship between entities: one-to-one, one-to-many, or many-to-many."
  },
  {
    "testId": "mock-test-02",
    "question": "What does a pivot table in Excel allow you to do?",
    "options": [
      "To dynamically summarize and reorganize large datasets",
      "To create charts automatically",
      "To write VBA code",
      "To connect to external databases"
    ],
    "correctOption": 0,
    "explanation": "A pivot table is an interactive tool that dynamically summarizes, analyzes, and reorganizes data by dragging fields."
  },
  {
    "testId": "mock-test-02",
    "question": "What is the probability of getting a head on a fair coin toss?",
    "options": ["0.25", "0.5", "0.75", "1"],
    "correctOption": 1,
    "explanation": "A fair coin has two equally likely outcomes. The probability of heads is 1/2 = 0.5."
  },
  {
    "testId": "mock-test-02",
    "question": "Which data visualization principle states that the visual representation of data should be proportional to the numerical value?",
    "options": ["Data-Ink Ratio", "Lie Factor", "Gestalt Principle", "Cleveland's Rule"],
    "correctOption": 1,
    "explanation": "The Lie Factor measures the ratio of the size of the visual effect to the actual data difference. A value of 1.0 indicates no distortion."
  },
  {
    "testId": "mock-test-02",
    "question": "In SQL, which function returns the number of rows in a result set?",
    "options": ["SUM", "COUNT", "AVG", "MAX"],
    "correctOption": 1,
    "explanation": "COUNT() is the aggregate function that returns the number of rows (or non-null values) in a result set."
  },
  {
    "testId": "mock-test-02",
    "question": "What is the difference between RANK() and DENSE_RANK() in SQL window functions?",
    "options": [
      "RANK() skips ranks after ties; DENSE_RANK() does not skip",
      "DENSE_RANK() skips ranks; RANK() does not skip",
      "Both skip ranks",
      "Neither skips ranks"
    ],
    "correctOption": 0,
    "explanation": "If there is a tie, RANK() leaves gaps (1, 2, 2, 4). DENSE_RANK() does not leave gaps (1, 2, 2, 3)."
  },
  {
    "testId": "mock-test-02",
    "question": "In Excel, which formula correctly calculates the average of values in cells A1 to A10?",
    "options": ["=AVG(A1:A10)", "=AVERAGE(A1:A10)", "=MEAN(A1:A10)", "=SUM(A1:A10)/10"],
    "correctOption": 1,
    "explanation": "The Excel function for average is AVERAGE(). SUM(A1:A10)/10 works but is less efficient."
  },
  {
    "testId": "mock-test-02",
    "question": "What is a common method for handling missing values in a dataset?",
    "options": [
      "Deleting rows with missing values",
      "Imputing with mean or median",
      "Predicting missing values",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "All three methods—deleting, imputation (mean/median), and prediction—are common strategies depending on the context."
  },
  {
    "testId": "mock-test-02",
    "question": "Which SQL clause is used to filter aggregated data after GROUP BY?",
    "options": ["WHERE", "HAVING", "FILTER", "CONDITION"],
    "correctOption": 1,
    "explanation": "HAVING is used to filter groups created by GROUP BY (e.g., HAVING COUNT(*) > 5). WHERE filters individual rows before grouping."
  },
  {
    "testId": "mock-test-02",
    "question": "What is the primary purpose of using a log transformation on skewed data?",
    "options": [
      "To make the data more normally distributed",
      "To increase the variance",
      "To create outliers",
      "To sum the values easily"
    ],
    "correctOption": 0,
    "explanation": "Log transformations are often applied to right-skewed data to make the distribution more symmetric (normal-like) for modeling."
  },
  {
    "testId": "mock-test-02",
    "question": "Which DAX function in Power BI is used to filter data and change the evaluation context?",
    "options": ["FILTER", "CALCULATE", "SUMX", "ALL"],
    "correctOption": 1,
    "explanation": "The CALCULATE function modifies the filter context of an expression, making it one of the most powerful DAX functions."
  },
  {
    "testId": "mock-test-02",
    "question": "What is the role of a Data Analyst in the data lifecycle?",
    "options": [
      "To collect raw data only",
      "To transform raw data into actionable insights and visualizations",
      "To build and maintain database servers",
      "To design network infrastructure"
    ],
    "correctOption": 1,
    "explanation": "A Data Analyst interprets data, creates dashboards, and communicates findings to stakeholders to drive business actions."
  },
  {
    "testId": "mock-test-02",
    "question": "What is the difference between a bar chart and a histogram?",
    "options": [
      "Bar charts have gaps; histograms do not",
      "Bar charts are for continuous data; histograms are for categorical data",
      "Bar charts show trends; histograms show comparisons",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "Bar charts have gaps between bars to separate categories. Histograms (for continuous data) have no gaps between bins."
  },
  {
    "testId": "mock-test-02",
    "question": "Which Excel function would you use to concatenate text strings?",
    "options": ["CONCATENATE", "CONCAT", "TEXTJOIN", "All of the above"],
    "correctOption": 3,
    "explanation": "CONCATENATE, CONCAT, and TEXTJOIN are all valid Excel functions for joining text strings."
  },
  {
    "testId": "mock-test-02",
    "question": "What is the median of the following numbers: 10, 20, 30, 40, 50?",
    "options": ["20", "30", "40", "35"],
    "correctOption": 1,
    "explanation": "The median is the middle value when data is sorted. 30 is the third value in this list of 5 numbers."
  },
  {
    "testId": "mock-test-02",
    "question": "Which of the following is NOT a typical step in the CRISP-DM framework?",
    "options": ["Business Understanding", "Data Understanding", "Data Encoding", "Modeling"],
    "correctOption": 2,
    "explanation": "CRISP-DM phases include Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, and Deployment. 'Data Encoding' is a specific task, not a phase."
  },
  {
    "testId": "mock-test-02",
    "question": "What is the purpose of a foreign key in a database table?",
    "options": [
      "To uniquely identify a row in the same table",
      "To link to the primary key of another table",
      "To store large text data",
      "To speed up sorting"
    ],
    "correctOption": 1,
    "explanation": "A foreign key is a column that creates a relationship to the primary key in another table, enforcing referential integrity."
  },
  {
    "testId": "mock-test-03",
    "question": "Which Python library is commonly used for advanced statistical modeling and hypothesis testing?",
    "options": ["NumPy", "Pandas", "SciPy", "Matplotlib"],
    "correctOption": 2,
    "explanation": "SciPy provides a wide range of statistical functions, including t-tests, ANOVA, and distributions, built on top of NumPy."
  },
  {
    "testId": "mock-test-03",
    "question": "In linear regression, what does the coefficient (slope) represent?",
    "options": [
      "The predicted value when all independent variables are zero",
      "The change in dependent variable for a one-unit change in the independent variable",
      "The correlation between variables",
      "The standard deviation of the residuals"
    ],
    "correctOption": 1,
    "explanation": "The slope (coefficient) measures the average change in the dependent variable for each 1-unit change in the independent variable."
  },
  {
    "testId": "mock-test-03",
    "question": "What does a p-value < 0.05 typically indicate in hypothesis testing?",
    "options": [
      "Strong evidence against the null hypothesis",
      "Strong evidence for the null hypothesis",
      "The data is not significant",
      "The sample size is too small"
    ],
    "correctOption": 0,
    "explanation": "A p-value less than 0.05 suggests that the observed data is unlikely under the null hypothesis, leading to its rejection (statistically significant)."
  },
  {
    "testId": "mock-test-03",
    "question": "In Python, which method is used to create a correlation matrix in Pandas?",
    "options": ["corr()", "correlation()", "cov()", "correlate()"],
    "correctOption": 0,
    "explanation": "The `df.corr()` method computes the pairwise correlation coefficients (Pearson) for numeric columns in a DataFrame."
  },
  {
    "testId": "mock-test-03",
    "question": "What is the concept of 'overfitting' in machine learning models?",
    "options": [
      "The model performs well on training data but poorly on new data",
      "The model performs poorly on training data",
      "The model has too few parameters",
      "The model ignores the training data"
    ],
    "correctOption": 0,
    "explanation": "Overfitting occurs when a model learns the noise in the training data too well, failing to generalize to unseen data."
  },
  {
    "testId": "mock-test-03",
    "question": "Which window function in SQL is used to assign a unique sequential number to each row within a partition?",
    "options": ["RANK()", "DENSE_RANK()", "ROW_NUMBER()", "NTILE()"],
    "correctOption": 2,
    "explanation": "ROW_NUMBER() assigns a unique incremental integer to each row starting from 1 for each partition."
  },
  {
    "testId": "mock-test-03",
    "question": "What is the purpose of 'Regularization' (like Lasso or Ridge) in regression models?",
    "options": [
      "To reduce overfitting by penalizing large coefficients",
      "To increase the R-squared value",
      "To remove outliers",
      "To speed up computation"
    ],
    "correctOption": 0,
    "explanation": "Regularization adds a penalty term to the loss function to constrain the coefficient size, reducing overfitting and improving generalization."
  },
  {
    "testId": "mock-test-03",
    "question": "In SQL, what is the difference between a stored procedure and a view?",
    "options": [
      "A view is virtual and read-only; a procedure can contain logic and accept parameters",
      "A view contains data; a procedure does not",
      "A procedure is virtual; a view contains logic",
      "Both are identical"
    ],
    "correctOption": 0,
    "explanation": "A view is a stored query that acts like a virtual table (usually read-only). A stored procedure is a compiled block of code that can contain complex logic, transactions, and parameters."
  },
  {
    "testId": "mock-test-03",
    "question": "What is the assumption of 'homoscedasticity' in linear regression?",
    "options": [
      "The variance of the residuals is constant across all levels of the independent variable",
      "The residuals are normally distributed",
      "The independent variables are not correlated",
      "The data has no outliers"
    ],
    "correctOption": 0,
    "explanation": "Homoscedasticity means that the variance of the error terms is constant across all values of the independent variable(s)."
  },
  {
    "testId": "mock-test-03",
    "question": "Which Python function is used to split a string into a list of substrings?",
    "options": ["split()", "divide()", "partition()", "separate()"],
    "correctOption": 0,
    "explanation": "The `split()` method divides a string into a list based on a specified delimiter."
  },
  {
    "testId": "mock-test-03",
    "question": "What is the primary purpose of 'Feature Engineering'?",
    "options": [
      "To create new variables from raw data to improve model performance",
      "To delete unnecessary data",
      "To visualize the data",
      "To normalize all values"
    ],
    "correctOption": 0,
    "explanation": "Feature engineering involves transforming raw data into meaningful features that better represent the underlying problem, improving model accuracy."
  },
  {
    "testId": "mock-test-03",
    "question": "In SQL, which statement is used to modify existing records in a table?",
    "options": ["MODIFY", "ALTER", "UPDATE", "CHANGE"],
    "correctOption": 2,
    "explanation": "The UPDATE statement is used to modify existing records in a table."
  },
  {
    "testId": "mock-test-03",
    "question": "What is the purpose of the 'ALL' operator in a SQL subquery?",
    "options": [
      "To compare a value to every value returned by the subquery",
      "To compare a value to any value returned by the subquery",
      "To select all columns",
      "To remove duplicates"
    ],
    "correctOption": 0,
    "explanation": "The ALL operator returns TRUE if the comparison is true for ALL values in the subquery result set."
  },
  {
    "testId": "mock-test-03",
    "question": "Which of the following is a non-parametric test used to compare two independent groups?",
    "options": ["T-test", "Mann-Whitney U Test", "ANOVA", "F-test"],
    "correctOption": 1,
    "explanation": "The Mann-Whitney U test is a non-parametric alternative to the independent t-test, used when normality assumptions are violated."
  },
  {
    "testId": "mock-test-03",
    "question": "What is the purpose of a confusion matrix in classification?",
    "options": [
      "To evaluate model performance by comparing predicted vs actual classes",
      "To cluster data points",
      "To reduce dimensionality",
      "To calculate regression coefficients"
    ],
    "correctOption": 0,
    "explanation": "A confusion matrix provides a breakdown of true positives, false positives, true negatives, and false negatives to assess classification model performance."
  },
  {
    "testId": "mock-test-03",
    "question": "What is the 'Durbin-Watson' statistic used for?",
    "options": [
      "To test for autocorrelation in residuals",
      "To test for normality",
      "To test for multicollinearity",
      "To test for heteroscedasticity"
    ],
    "correctOption": 0,
    "explanation": "The Durbin-Watson statistic tests for the presence of first-order autocorrelation in regression residuals, common in time series."
  },
  {
    "testId": "mock-test-03",
    "question": "In Python, how do you handle missing values in a Pandas DataFrame?",
    "options": ["df.dropna()", "df.fillna()", "df.isnull()", "All of the above"],
    "correctOption": 3,
    "explanation": "dropna() removes missing values, fillna() fills them with a value, and isnull() detects them. All are valid handling techniques."
  },
  {
    "testId": "mock-test-03",
    "question": "What is the primary purpose of a decision tree algorithm?",
    "options": [
      "To split data based on feature values to predict a target",
      "To group similar data points",
      "To find associations between items",
      "To reduce dimensionality"
    ],
    "correctOption": 0,
    "explanation": "A decision tree uses a tree-like model of decisions (splits) to predict the target variable, useful for both classification and regression."
  },
  {
    "testId": "mock-test-03",
    "question": "What does 'Normalization' refer to in database design?",
    "options": [
      "Organizing columns and tables to reduce data redundancy and improve integrity",
      "Scaling numeric data to a range of 0 to 1",
      "Creating indexes on columns",
      "Adding primary keys"
    ],
    "correctOption": 0,
    "explanation": "Database normalization is the process of structuring a relational database to minimize redundancy and dependency anomalies."
  },
  {
    "testId": "mock-test-03",
    "question": "What is the standard error of the mean (SEM)?",
    "options": [
      "σ / √n",
      "σ * √n",
      "σ^2 / n",
      "n / σ"
    ],
    "correctOption": 0,
    "explanation": "The standard error of the mean is the population standard deviation divided by the square root of the sample size."
  },
  {
    "testId": "mock-test-03",
    "question": "Which SQL function extracts the year from a date column in SQL Server?",
    "options": ["YEAR()", "EXTRACT(YEAR FROM date)", "DATEPART(yy, date)", "All of the above are valid in different DBMS"],
    "correctOption": 3,
    "explanation": "SQL Server uses YEAR() and DATEPART(). PostgreSQL uses EXTRACT(). All are valid depending on the DBMS."
  },
  {
    "testId": "mock-test-03",
    "question": "What is a 'hash join' in SQL execution plans?",
    "options": [
      "A join algorithm that builds a hash table from one input",
      "A join that encrypts the result",
      "A join that only works on text",
      "A join that sorts both tables first"
    ],
    "correctOption": 0,
    "explanation": "A hash join builds a hash table from the smaller input and probes it with the larger input. It is efficient for equi-joins on large tables."
  },
  {
    "testId": "mock-test-04",
    "question": "Which Gestalt principle states that elements that look similar are perceived as related?",
    "options": ["Proximity", "Similarity", "Continuity", "Closure"],
    "correctOption": 1,
    "explanation": "The Gestalt principle of Similarity suggests that people group objects that share similar visual characteristics (color, shape)."
  },
  {
    "testId": "mock-test-04",
    "question": "In Power BI, which feature is used to filter data across multiple visuals on a report page?",
    "options": ["Slicer", "Filters pane", "Visual level filter", "Bookmark"],
    "correctOption": 0,
    "explanation": "Slicers are interactive visual filters that allow users to filter data across all visuals on a page (when synced)."
  },
  {
    "testId": "mock-test-04",
    "question": "What is the 'data-ink ratio' concept in data visualization?",
    "options": [
      "The proportion of ink used for actual data vs. non-data elements",
      "The color intensity of the graph",
      "The percentage of the page covered by the chart",
      "The resolution of the image"
    ],
    "correctOption": 0,
    "explanation": "A higher data-ink ratio means more ink is used to represent data, reducing clutter and improving clarity (minimizing chartjunk)."
  },
  {
    "testId": "mock-test-04",
    "question": "Which visual is best for showing the relationship between two continuous numerical variables in Tableau?",
    "options": ["Bar Chart", "Scatter Plot", "Pie Chart", "Line Chart"],
    "correctOption": 1,
    "explanation": "Scatter plots are ideal for visualizing the relationship and correlation between two continuous numerical variables."
  },
  {
    "testId": "mock-test-04",
    "question": "In Power BI, what is a 'calculated column'?",
    "options": [
      "A column created by writing a DAX formula to add data to a table",
      "A measure created in the report view",
      "A column imported from the data source",
      "A visual filter"
    ],
    "correctOption": 0,
    "explanation": "A calculated column is a new column added to a table using DAX that is computed row by row during data refresh."
  },
  {
    "testId": "mock-test-04",
    "question": "What is the primary benefit of using a dashboard over a static report?",
    "options": [
      "Dashboards are always more colorful",
      "Dashboards provide interactive and up-to-date data visualizations for monitoring",
      "Dashboards are faster to create",
      "Dashboards require less data"
    ],
    "correctOption": 1,
    "explanation": "Dashboards combine multiple visualizations into a single, interactive view, allowing for real-time monitoring and dynamic filtering."
  },
  {
    "testId": "mock-test-04",
    "question": "What does the term 'pre-attentive attribute' mean in visualization?",
    "options": [
      "Visual properties processed subconsciously (color, size, shape)",
      "Elements that require conscious thought to process",
      "Attributes added after the chart is built",
      "The title of the chart"
    ],
    "correctOption": 0,
    "explanation": "Pre-attentive attributes (like color hue, size, and orientation) are perceived almost instantly without conscious effort, useful for highlighting."
  },
  {
    "testId": "mock-test-04",
    "question": "In Tableau, what is the function of 'Groups'?",
    "options": [
      "To combine data sources",
      "To combine dimension members into higher-level categories",
      "To create calculated fields",
      "To write SQL queries"
    ],
    "correctOption": 1,
    "explanation": "Groups in Tableau allow you to combine multiple related dimension members (e.g., combining 'NY' and 'New York' into 'NY')."
  },
  {
    "testId": "mock-test-04",
    "question": "Which color palette is most suitable for visualizing data with a natural midpoint (e.g., deviation from zero)?",
    "options": ["Sequential", "Diverging", "Qualitative", "Monochromatic"],
    "correctOption": 1,
    "explanation": "Diverging palettes use two contrasting colors with a neutral midpoint, ideal for showing positive vs. negative deviations."
  },
  {
    "testId": "mock-test-04",
    "question": "What is the purpose of a 'drill-through' feature in Power BI?",
    "options": [
      "To navigate from a high-level summary to detailed data on a separate page",
      "To delete data from the report",
      "To change the chart type",
      "To export data to Excel"
    ],
    "correctOption": 0,
    "explanation": "Drill-through allows users to right-click a data point and navigate to a detailed page filtered to that specific context."
  },
  {
    "testId": "mock-test-04",
    "question": "Which of the following is a key principle of effective dashboard design?",
    "options": [
      "Include as many visuals as possible",
      "Use consistent layout and color coding",
      "Hide all titles and labels",
      "Use random colors for each visual"
    ],
    "correctOption": 1,
    "explanation": "Consistency in layout, fonts, and color coding reduces cognitive load and helps users navigate the dashboard easily."
  },
  {
    "testId": "mock-test-04",
    "question": "What is a 'sparkline' in data visualization?",
    "options": [
      "A small, word-sized chart embedded in a text or table cell",
      "A complex 3D chart",
      "A full-page dashboard",
      "A type of scatter plot"
    ],
    "correctOption": 0,
    "explanation": "Sparklines are miniature line charts placed in a single cell to show trends for a specific row, often used in tables."
  },
  {
    "testId": "mock-test-04",
    "question": "In Tableau, which operator is used for logical OR?",
    "options": ["||", "OR", "|", "&"],
    "correctOption": 1,
    "explanation": "Tableau uses the keyword 'OR' for logical OR operations, unlike some programming languages."
  },
  {
    "testId": "mock-test-04",
    "question": "What is the purpose of 'Row-Level Security' (RLS) in Power BI?",
    "options": [
      "To restrict data access at the row level based on user roles",
      "To encrypt the entire dataset",
      "To hide specific columns",
      "To lock the report layout"
    ],
    "correctOption": 0,
    "explanation": "RLS allows you to filter data for specific users so they can only see rows relevant to their role (e.g., salesperson sees only their region)."
  },
  {
    "testId": "mock-test-04",
    "question": "Which chart type is best for displaying the frequency distribution of a continuous variable?",
    "options": ["Pie Chart", "Histogram", "Bar Chart", "Scatter Plot"],
    "correctOption": 1,
    "explanation": "Histograms group continuous data into bins and show the frequency in each bin, making them ideal for distribution analysis."
  },
  {
    "testId": "mock-test-04",
    "question": "What is the 'Lie Factor' in data visualization?",
    "options": [
      "The ratio of the size of the graphic effect to the actual data difference",
      "The number of errors in the data",
      "The number of colors used",
      "The complexity of the chart"
    ],
    "correctOption": 0,
    "explanation": "A lie factor of 1.0 is ideal, meaning the visual representation is proportional to the data. A higher value indicates distortion."
  },
  {
    "testId": "mock-test-04",
    "question": "In Power BI, what does the 'Field Parameters' feature allow you to do?",
    "options": [
      "To dynamically change the fields used in a visual",
      "To create new calculated columns",
      "To set security permissions",
      "To schedule data refresh"
    ],
    "correctOption": 0,
    "explanation": "Field parameters let users dynamically switch measures or dimensions in a visual using a slicer, making reports more interactive."
  },
  {
    "testId": "mock-test-04",
    "question": "What is the primary goal of data storytelling?",
    "options": [
      "To show random data points",
      "To communicate actionable insights using a narrative structure",
      "To hide data complexity",
      "To replace all charts with text"
    ],
    "correctOption": 1,
    "explanation": "Data storytelling combines data visualizations with a compelling narrative to help audiences understand insights and drive decisions."
  },
  {
    "testId": "mock-test-04",
    "question": "Which Gestalt principle is applied when using a continuous line to connect data points in a line chart?",
    "options": ["Proximity", "Similarity", "Continuity", "Closure"],
    "correctOption": 2,
    "explanation": "The principle of Continuity suggests that lines are perceived as following the smoothest path, making line charts easy to follow."
  },
  {
    "testId": "mock-test-04",
    "question": "In Tableau, what is a 'Dashboard' action?",
    "options": [
      "An interactive element like a filter or highlight triggered by user interaction",
      "A button that saves the dashboard",
      "A background process",
      "A type of chart"
    ],
    "correctOption": 0,
    "explanation": "Dashboard actions (Filter, Highlight, URL, etc.) define how interactivity works, allowing users to click on visuals to filter or navigate."
  },
  {
    "testId": "mock-test-04",
    "question": "What should you avoid when designing a pie chart?",
    "options": [
      "Using percentages that sum to 100%",
      "Having too many slices (more than 5-6)",
      "Using labels",
      "Using different colors"
    ],
    "correctOption": 1,
    "explanation": "Too many slices make a pie chart cluttered and hard to read. Group small slices into an 'Other' category."
  },
  {
    "testId": "mock-test-04",
    "question": "What is the benefit of using 'Bookmarks' in Power BI?",
    "options": [
      "To save a specific state of a report page for navigation",
      "To save the data source",
      "To save the DAX formula",
      "To save the CSV export"
    ],
    "correctOption": 0,
    "explanation": "Bookmarks capture the current filter, slicer, and visual state of a report page, allowing for guided storytelling."
  },
  {
    "testId": "mock-test-05",
    "question": "A company has sales data for 5 years. They want to predict next year's sales. Which algorithm is most suitable?",
    "options": [
      "K-Means Clustering",
      "Logistic Regression",
      "Time Series Forecasting (e.g., ARIMA)",
      "Apriori Algorithm"
    ],
    "correctOption": 2,
    "explanation": "Time series forecasting models (like ARIMA, Exponential Smoothing) are specifically designed for predicting future values based on historical time-ordered data."
  },
  {
    "testId": "mock-test-05",
    "question": "What is the primary ethical concern when using data analytics in healthcare?",
    "options": [
      "Data visualization colors",
      "Patient privacy and data protection",
      "High cost of tools",
      "Slow internet speed"
    ],
    "correctOption": 1,
    "explanation": "Patient data (PHI) is highly sensitive. Maintaining confidentiality, privacy, and complying with regulations like HIPAA is critical."
  },
  {
    "testId": "mock-test-05",
    "question": "In SQL, you need to find employees who earn more than the average salary of their department. Which approach is best?",
    "options": [
      "Using a correlated subquery",
      "Using a simple WHERE clause",
      "Using a non-correlated subquery with GROUP BY",
      "Using a JOIN"
    ],
    "correctOption": 0,
    "explanation": "A correlated subquery can compute the average salary for each department and compare each employee's salary to that department average."
  },
  {
    "testId": "mock-test-05",
    "question": "Which technique is used to reduce the dimensionality of a dataset while preserving variance?",
    "options": ["PCA (Principal Component Analysis)", "Linear Regression", "Decision Trees", "K-Means"],
    "correctOption": 0,
    "explanation": "PCA is a dimensionality reduction technique that transforms the data into a new set of variables (principal components) that capture the maximum variance."
  },
  {
    "testId": "mock-test-05",
    "question": "What is the difference between a 'Batch' and a 'Real-time' data processing pipeline?",
    "options": [
      "Batch processes data at scheduled intervals; real-time processes data instantly as it arrives",
      "Real-time processes data at intervals; batch processes instantly",
      "Both process instantly",
      "Both process at intervals"
    ],
    "correctOption": 0,
    "explanation": "Batch processing handles large volumes of historical data at fixed times. Real-time (streaming) processing handles data continuously with low latency."
  },
  {
    "testId": "mock-test-05",
    "question": "In Excel, you have text in 'First Last' format. How do you extract the last name?",
    "options": [
      "=RIGHT(A1, LEN(A1) - FIND(' ', A1))",
      "=LEFT(A1, FIND(' ', A1))",
      "=MID(A1, FIND(' ', A1), LEN(A1))",
      "=SEPARATE(A1, ' ', 2)"
    ],
    "correctOption": 0,
    "explanation": "This formula finds the position of the space, subtracts it from the total length, and extracts the rightmost characters (last name)."
  },
  {
    "testId": "mock-test-05",
    "question": "Which BI tool feature allows you to combine data from multiple sources without ETL in a centralized repository?",
    "options": ["Dataflows", "Datasets", "Data Gateways", "Composite Models"],
    "correctOption": 3,
    "explanation": "Composite models allow mixing DirectQuery and Import data sources in a single model, providing flexibility without a full ETL."
  },
  {
    "testId": "mock-test-05",
    "question": "What does the 'Apriori' algorithm help discover in transactional data?",
    "options": [
      "Association rules (e.g., people who buy X also buy Y)",
      "Clusters of customers",
      "Future sales values",
      "Anomalies"
    ],
    "correctOption": 0,
    "explanation": "Apriori is a classic algorithm for market basket analysis, discovering frequent itemsets and association rules."
  },
  {
    "testId": "mock-test-05",
    "question": "In Python, you have a list of numbers. How do you find the second largest number?",
    "options": [
      "sorted(list)[-2]",
      "max(list)",
      "list.index(max(list))",
      "sorted(list, reverse=True)[1]"
    ],
    "correctOption": 3,
    "explanation": "Sorting in descending order and taking the second element (index 1) gives the second largest value."
  },
  {
    "testId": "mock-test-05",
    "question": "What is the purpose of using 'Cross-Validation' over a simple train-test split?",
    "options": [
      "To use more data for training while still validating performance across multiple folds",
      "To make the model run faster",
      "To simplify the code",
      "To ignore the test data"
    ],
    "correctOption": 0,
    "explanation": "Cross-validation (like k-fold) uses multiple splits, ensuring the model is evaluated on different subsets of data, reducing variance in performance estimates."
  },
  {
    "testId": "mock-test-05",
    "question": "What is the first step in the Data Mining process (CRISP-DM)?",
    "options": ["Data Preparation", "Modeling", "Business Understanding", "Evaluation"],
    "correctOption": 2,
    "explanation": "CRISP-DM begins with Business Understanding to define the objectives and requirements before touching the data."
  },
  {
    "testId": "mock-test-05",
    "question": "Which of the following is a common metric for evaluating classification models that handles imbalanced data well?",
    "options": ["Accuracy", "Precision", "F1-Score", "R-squared"],
    "correctOption": 2,
    "explanation": "F1-Score is the harmonic mean of Precision and Recall, making it robust for imbalanced datasets where Accuracy can be misleading."
  },
  {
    "testId": "mock-test-05",
    "question": "In Power BI, what is the purpose of the 'CALCULATE' function?",
    "options": [
      "To change the filter context during a calculation",
      "To create a new table",
      "To format a visual",
      "To import data"
    ],
    "correctOption": 0,
    "explanation": "CALCULATE evaluates an expression with modified filter context, making it essential for dynamic measures like 'Sales in Current Year'."
  },
  {
    "testId": "mock-test-05",
    "question": "What is the 'Occam's Razor' principle in the context of predictive modeling?",
    "options": [
      "The simplest model that explains the data well is often the best",
      "The most complex model is always superior",
      "Use all variables available",
      "Ignore validation data"
    ],
    "correctOption": 0,
    "explanation": "Occam's Razor suggests that among competing models with similar predictive power, the simplest one (fewer parameters) is preferable to avoid overfitting."
  },
  {
    "testId": "mock-test-05",
    "question": "In SQL, what is the difference between `DELETE` and `TRUNCATE`?",
    "options": [
      "DELETE can be rolled back (in a transaction) and has WHERE; TRUNCATE cannot have WHERE and is minimally logged",
      "DELETE removes the table structure; TRUNCATE keeps it",
      "TRUNCATE is slower than DELETE",
      "Both are identical"
    ],
    "correctOption": 0,
    "explanation": "DELETE is DML and can have conditions. TRUNCATE is DDL, removes all rows, resets identity, and is often faster but cannot be rolled back in some contexts."
  },
  {
    "testId": "mock-test-05",
    "question": "What is the purpose of using a 'Window Function' in SQL over a standard GROUP BY?",
    "options": [
      "Window functions allow you to perform aggregations without collapsing rows",
      "Window functions are faster for all operations",
      "GROUP BY can do everything window functions can",
      "Window functions are only for sorting"
    ],
    "correctOption": 0,
    "explanation": "Window functions calculate aggregations (like running totals, moving averages) while preserving individual rows, unlike GROUP BY which collapses them."
  },
  {
    "testId": "mock-test-05",
    "question": "Which chart type would you use to show the correlation between two variables while also showing a third variable via color in Tableau?",
    "options": ["Scatter Plot with color encoding", "Stacked Bar Chart", "Line Chart", "Pie Chart"],
    "correctOption": 0,
    "explanation": "A scatter plot can use color encoding (or size) to represent a third dimension (e.g., region, category) effectively."
  },
  {
    "testId": "mock-test-05",
    "question": "What is the concept of 'Information Bias' in data analytics?",
    "options": [
      "Bias introduced by using too much data",
      "Bias introduced by using a subset of information that is not representative",
      "Bias introduced by the analysis tool",
      "Bias introduced by colorful charts"
    ],
    "correctOption": 1,
    "explanation": "Information bias (or selection bias) occurs when the data collected does not represent the target population, leading to skewed conclusions."
  },
  {
    "testId": "mock-test-05",
    "question": "In data warehousing, what is the 'Data Mart'?",
    "options": [
      "A subset of a data warehouse focused on a specific business unit or department",
      "A tool for data cleaning",
      "A type of database server",
      "A backup of the data warehouse"
    ],
    "correctOption": 0,
    "explanation": "A Data Mart is a curated, focused repository for a specific functional area (e.g., sales, finance) derived from the main data warehouse."
  },
  {
    "testId": "mock-test-05",
    "question": "What is the primary advantage of using a 'Cloud Data Warehouse' like Snowflake or Redshift?",
    "options": [
      "It requires no maintenance and can scale compute/storage independently",
      "It is always cheaper",
      "It stores data exclusively in memory",
      "It does not require SQL"
    ],
    "correctOption": 0,
    "explanation": "Cloud data warehouses offer elasticity, separating storage and compute to scale resources on-demand and reduce management overhead."
  },
  {
    "testId": "mock-test-05",
    "question": "In Python, what is the purpose of the `__init__` method in a class?",
    "options": [
      "To initialize the object's attributes when the object is created",
      "To delete the object",
      "To compare two objects",
      "To print the object"
    ],
    "correctOption": 0,
    "explanation": "`__init__` is the constructor method called when an instance of a class is created, used to set initial state."
  },
  {
    "testId": "mock-test-05",
    "question": "What is the 'Kolmogorov-Smirnov' test commonly used for?",
    "options": [
      "To compare a sample distribution to a reference distribution (goodness-of-fit)",
      "To test for equal variances",
      "To test for multicollinearity",
      "To test for independence"
    ],
    "correctOption": 0,
    "explanation": "The K-S test is a non-parametric test that compares the cumulative distributions of two samples or a sample against a theoretical distribution."
  },
  {
    "testId": "mock-test-05",
    "question": "Which of the following is a valid method to handle imbalanced datasets?",
    "options": [
      "Oversampling the minority class (SMOTE)",
      "Undersampling the majority class",
      "Using class weights in the model",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "All three techniques (SMOTE, undersampling, and class weights) are commonly used to mitigate class imbalance and improve model performance on the minority class."
  },
  {
    "testId": "mock-test-05",
    "question": "In Tableau, what is a 'Parameter'?",
    "options": [
      "A dynamic variable that allows user input to modify calculations or filters",
      "A type of chart",
      "A data source connection",
      "A saved state of the dashboard"
    ],
    "correctOption": 0,
    "explanation": "Parameters accept user input (like a numeric threshold or a selected dimension) and can be used in calculations or filters to make views dynamic."
  },
  {
    "testId": "mock-test-05",
    "question": "What is the primary purpose of using a 'Factless Fact Table' in a data warehouse?",
    "options": [
      "To track events or coverage that do not have numeric measures (e.g., attendance)",
      "To store only numeric measures",
      "To combine multiple fact tables",
      "To replace dimension tables"
    ],
    "correctOption": 0,
    "explanation": "Factless fact tables capture relationships between dimensions for events like attendance, where the value is merely the presence of the relationship."
  },
  {
    "testId": "mock-test-05",
    "question": "What is the difference between 'Data Governance' and 'Data Management'?",
    "options": [
      "Data Governance is the strategy (policies/rules); Data Management is the execution (implementation)",
      "Data Management is the strategy; Data Governance is the execution",
      "Both are the same",
      "Data Governance is only for security"
    ],
    "correctOption": 0,
    "explanation": "Data Governance establishes the overarching policies, standards, and decision rights. Data Management implements these policies in day-to-day operations."
  },
  {
    "testId": "mock-test-05",
    "question": "You are analyzing sales data and notice a strong correlation between ice cream sales and shark attacks. What should you conclude?",
    "options": [
      "Ice cream causes shark attacks",
      "Sharks are attracted to ice cream",
      "There is likely a confounding variable (e.g., hot weather increases both)",
      "The data is flawed and cannot be used"
    ],
    "correctOption": 2,
    "explanation": "Correlation does not imply causation. A third variable (like summer weather) commonly drives both ice cream consumption and shark activity."
  },
  {
    "testId": "mock-test-05",
    "question": "In Power Query (M language), what does the 'Table.Group' function do?",
    "options": [
      "It groups rows based on specified columns and applies aggregations",
      "It merges two tables",
      "It deletes duplicate rows",
      "It sorts the table"
    ],
    "correctOption": 0,
    "explanation": "Table.Group is the M language equivalent of SQL GROUP BY, allowing you to group rows and perform aggregations like Sum, Count, or Average."
  },
  {
    "testId": "mock-test-05",
    "question": "What is the 'Box-Cox' transformation used for in statistics?",
    "options": [
      "To transform non-normal data into a normal distribution",
      "To detect outliers",
      "To standardize data to mean 0 and std 1",
      "To create boxplots"
    ],
    "correctOption": 0,
    "explanation": "The Box-Cox transformation is a power transformation used to stabilize variance and make data more normally distributed, improving model performance."
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
console.log('Added ' + newQuestions.length + ' mock tests questions to questions.js');
