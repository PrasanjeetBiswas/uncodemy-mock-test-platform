const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "db-test-01",
    "question": "What does ACID stand for in database transactions?",
    "options": [
      "Atomicity, Consistency, Isolation, Durability",
      "Accuracy, Consistency, Integrity, Durability",
      "Atomicity, Completeness, Isolation, Dependability",
      "Awareness, Correctness, Isolation, Durability"
    ],
    "correctOption": 0,
    "explanation": "ACID is a set of properties that guarantee database transactions are processed reliably. It stands for Atomicity, Consistency, Isolation, and Durability."
  },
  {
    "testId": "db-test-01",
    "question": "Which of the following is a valid primary key characteristic?",
    "options": [
      "It can be NULL",
      "It must be unique and non-NULL",
      "It can have duplicate values",
      "It must be a single column"
    ],
    "correctOption": 1,
    "explanation": "A primary key must uniquely identify each record, so it must be unique and cannot contain NULL values."
  },
  {
    "testId": "db-test-01",
    "question": "What is normalization in database design?",
    "options": [
      "The process of organizing data to reduce redundancy and dependency",
      "The process of adding redundant data for faster queries",
      "The process of encrypting data",
      "The process of indexing data"
    ],
    "correctOption": 0,
    "explanation": "Normalization is a systematic approach to minimizing redundancy and dependency in relational databases, improving data integrity."
  },
  {
    "testId": "db-test-01",
    "question": "What is the first normal form (1NF) condition?",
    "options": [
      "Each column must have atomic (indivisible) values",
      "All non-key columns must depend on the entire primary key",
      "No transitive dependencies",
      "It must have a composite key"
    ],
    "correctOption": 0,
    "explanation": "1NF requires that each column contains only atomic (single) values and each row is unique."
  },
  {
    "testId": "db-test-01",
    "question": "Which type of relationship is represented by a foreign key?",
    "options": [
      "One-to-one",
      "One-to-many",
      "Many-to-many",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Foreign keys can represent any relationship, but they are primarily used to implement one-to-many and many-to-many (via junction tables)."
  },
  {
    "testId": "db-test-01",
    "question": "What is the difference between a primary key and a unique key?",
    "options": [
      "Primary key cannot be NULL; unique key can be NULL",
      "Primary key allows duplicates; unique key does not",
      "Unique key cannot be NULL; primary key can be NULL",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "A primary key cannot be NULL and there is only one per table. A unique key can have NULL values and multiple unique keys can exist."
  },
  {
    "testId": "db-test-01",
    "question": "Which of the following is NOT a valid SQL data type?",
    "options": ["VARCHAR", "INTEGER", "BOOLEAN", "ARRAY"],
    "correctOption": 3,
    "explanation": "ARRAY is not a standard SQL data type in most relational DBs (though some like PostgreSQL support it as a special type). In standard SQL, common types are VARCHAR, INTEGER, BOOLEAN."
  },
  {
    "testId": "db-test-01",
    "question": "What is an entity relationship diagram (ERD) used for?",
    "options": [
      "To visualize the database schema and relationships between entities",
      "To write SQL queries",
      "To index the database",
      "To backup the data"
    ],
    "correctOption": 0,
    "explanation": "ERDs are graphical representations of entities and their relationships, used in database design."
  },
  {
    "testId": "db-test-01",
    "question": "Which of the following is a type of database key?",
    "options": ["Foreign key", "Super key", "Candidate key", "All of the above"],
    "correctOption": 3,
    "explanation": "All are valid key types. Super key is a set of attributes that uniquely identify a row; candidate key is a minimal super key."
  },
  {
    "testId": "db-test-01",
    "question": "What is denormalization?",
    "options": [
      "The process of adding redundancy to improve query performance",
      "The process of removing redundancy",
      "The process of splitting tables",
      "The process of normalizing data"
    ],
    "correctOption": 0,
    "explanation": "Denormalization is the opposite of normalization, where redundant data is added intentionally to speed up read operations at the cost of write performance."
  },
  {
    "testId": "db-test-01",
    "question": "Which command is used to remove a table from a database?",
    "options": ["DELETE TABLE", "DROP TABLE", "TRUNCATE TABLE", "REMOVE TABLE"],
    "correctOption": 1,
    "explanation": "`DROP TABLE` deletes the table structure and its data permanently."
  },
  {
    "testId": "db-test-01",
    "question": "What is a composite key?",
    "options": [
      "A key that consists of two or more columns",
      "A key that is a foreign key",
      "A key that is automatically generated",
      "A key that is unique"
    ],
    "correctOption": 0,
    "explanation": "A composite key (or compound key) is a primary key made up of multiple columns to uniquely identify a record."
  },
  {
    "testId": "db-test-01",
    "question": "What does the `REFERENCES` keyword do in SQL?",
    "options": [
      "It defines a foreign key constraint",
      "It creates an index",
      "It defines a primary key",
      "It creates a view"
    ],
    "correctOption": 0,
    "explanation": "`REFERENCES` is used in a foreign key definition to refer to the primary key of another table."
  },
  {
    "testId": "db-test-01",
    "question": "Which of the following is a property of a well-structured database?",
    "options": [
      "Minimal redundancy",
      "Data integrity",
      "Ease of maintenance",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "A good database design minimizes redundancy, ensures data integrity, and is easy to maintain."
  },
  {
    "testId": "db-test-01",
    "question": "What is the purpose of a database index?",
    "options": [
      "To speed up data retrieval",
      "To enforce uniqueness",
      "To define relationships",
      "All of the above"
    ],
    "correctOption": 0,
    "explanation": "Indexes primarily speed up query performance, though unique indexes also enforce uniqueness."
  },
  {
    "testId": "db-test-01",
    "question": "Which of the following is an example of a DDL (Data Definition Language) command?",
    "options": ["SELECT", "INSERT", "CREATE", "UPDATE"],
    "correctOption": 2,
    "explanation": "DDL commands define the database structure: CREATE, ALTER, DROP, TRUNCATE."
  },
  {
    "testId": "db-test-01",
    "question": "Which of the following is an example of a DML (Data Manipulation Language) command?",
    "options": ["CREATE", "ALTER", "SELECT", "DROP"],
    "correctOption": 2,
    "explanation": "SELECT, INSERT, UPDATE, DELETE are DML commands used to query and modify data."
  },
  {
    "testId": "db-test-01",
    "question": "What is the difference between a database and a database management system (DBMS)?",
    "options": [
      "A database is the data itself; DBMS is the software to manage it",
      "DBMS is the data; database is the software",
      "They are the same",
      "Database is for storage; DBMS is for networking"
    ],
    "correctOption": 0,
    "explanation": "A database is a structured collection of data, while a DBMS is the software that interacts with end users, applications, and the database to manage and manipulate data."
  },
  {
    "testId": "db-test-01",
    "question": "Which of the following is a relational database management system (RDBMS)?",
    "options": ["MongoDB", "MySQL", "Cassandra", "Redis"],
    "correctOption": 1,
    "explanation": "MySQL is a relational database. MongoDB, Cassandra, and Redis are NoSQL databases."
  },
  {
    "testId": "db-test-01",
    "question": "What is a view in SQL?",
    "options": [
      "A virtual table based on the result of a SELECT query",
      "A physical table that stores data",
      "A temporary table",
      "An index"
    ],
    "correctOption": 0,
    "explanation": "A view is a virtual table that does not store data physically; it presents the result of a saved query."
  },
  {
    "testId": "db-test-01",
    "question": "What does the `CHECK` constraint do?",
    "options": [
      "Validates that values in a column meet a specific condition",
      "Checks for duplicates",
      "Checks for NULL values",
      "Creates an index"
    ],
    "correctOption": 0,
    "explanation": "The CHECK constraint ensures that values in a column satisfy a Boolean expression (e.g., age >= 18)."
  },
  {
    "testId": "db-test-01",
    "question": "Which of the following is a characteristic of a NoSQL database?",
    "options": [
      "Schema-less (flexible schema)",
      "Strict ACID transactions",
      "Fixed table schema",
      "Only supports SQL"
    ],
    "correctOption": 0,
    "explanation": "NoSQL databases typically have a flexible schema, allowing dynamic fields."
  },
  {
    "testId": "db-test-01",
    "question": "What is the purpose of the `GRANT` statement in SQL?",
    "options": [
      "To give users permissions to access database objects",
      "To grant a primary key",
      "To grant an index",
      "To grant a view"
    ],
    "correctOption": 0,
    "explanation": "`GRANT` is a DCL (Data Control Language) command used to assign privileges to users."
  },
  {
    "testId": "db-test-01",
    "question": "What is a transaction in a database?",
    "options": [
      "A sequence of operations performed as a single logical unit of work",
      "A single SQL query",
      "A backup operation",
      "A data export"
    ],
    "correctOption": 0,
    "explanation": "A transaction groups multiple database operations so they are all committed or rolled back together."
  },
  {
    "testId": "db-test-01",
    "question": "Which of the following is NOT a property of a transaction (ACID)?",
    "options": ["Atomicity", "Consistency", "Integrity", "Durability"],
    "correctOption": 2,
    "explanation": "ACID stands for Atomicity, Consistency, Isolation, and Durability. Integrity is not a property; it is a general goal."
  },
  {
    "testId": "db-test-01",
    "question": "What is the difference between `DELETE` and `TRUNCATE`?",
    "options": [
      "DELETE removes rows one by one; TRUNCATE removes all rows in one operation",
      "DELETE is faster than TRUNCATE",
      "TRUNCATE can have a WHERE clause",
      "DELETE cannot be rolled back"
    ],
    "correctOption": 0,
    "explanation": "DELETE is a DML command that can have a WHERE clause and is logged row by row; TRUNCATE is a DDL command that removes all rows and resets storage."
  },
  {
    "testId": "db-test-01",
    "question": "What is a stored procedure?",
    "options": [
      "A set of precompiled SQL statements stored on the server",
      "A database table",
      "A data type",
      "A view"
    ],
    "correctOption": 0,
    "explanation": "Stored procedures are reusable SQL code that is stored and executed on the database server."
  },
  {
    "testId": "db-test-01",
    "question": "Which of the following is a type of relationship in an ER diagram?",
    "options": ["One-to-one", "One-to-many", "Many-to-many", "All of the above"],
    "correctOption": 3,
    "explanation": "ER diagrams represent all three types of relationships."
  },
  {
    "testId": "db-test-01",
    "question": "What does the `UNION` operator do in SQL?",
    "options": [
      "Combines the results of two SELECT statements, removing duplicates",
      "Combines the results of two SELECT statements, including duplicates",
      "Joins two tables",
      "Creates a union of two databases"
    ],
    "correctOption": 0,
    "explanation": "`UNION` concatenates result sets from two queries and removes duplicate rows. `UNION ALL` keeps duplicates."
  },
  {
    "testId": "db-test-01",
    "question": "What is the purpose of the `DISTINCT` keyword?",
    "options": [
      "To return only unique rows in the result set",
      "To sort the result",
      "To filter rows",
      "To group rows"
    ],
    "correctOption": 0,
    "explanation": "`SELECT DISTINCT` removes duplicate rows from the query result."
  },
  {
    "testId": "db-test-02",
    "question": "Which SQL clause is used to filter rows based on a condition?",
    "options": ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    "correctOption": 0,
    "explanation": "The `WHERE` clause filters individual rows before grouping."
  },
  {
    "testId": "db-test-02",
    "question": "What is the correct order of execution of SQL clauses?",
    "options": [
      "FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY",
      "SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY",
      "FROM, SELECT, WHERE, GROUP BY, ORDER BY, HAVING",
      "WHERE, FROM, GROUP BY, SELECT, HAVING, ORDER BY"
    ],
    "correctOption": 0,
    "explanation": "The logical order is FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY."
  },
  {
    "testId": "db-test-02",
    "question": "Which type of join returns all rows from the left table and matching rows from the right?",
    "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    "correctOption": 1,
    "explanation": "LEFT JOIN returns all rows from the left table, and matched rows from the right; unmatched right rows are NULL."
  },
  {
    "testId": "db-test-02",
    "question": "Which aggregate function counts the number of rows?",
    "options": ["COUNT(*)", "SUM", "AVG", "MAX"],
    "correctOption": 0,
    "explanation": "COUNT(*) returns the total number of rows in the result set."
  },
  {
    "testId": "db-test-02",
    "question": "How do you filter groups after GROUP BY?",
    "options": ["WHERE", "HAVING", "FILTER", "CONDITION"],
    "correctOption": 1,
    "explanation": "HAVING is used to filter groups created by GROUP BY (e.g., HAVING COUNT(*) > 5)."
  },
  {
    "testId": "db-test-02",
    "question": "Which SQL statement is used to retrieve data from a database?",
    "options": ["SELECT", "INSERT", "UPDATE", "DELETE"],
    "correctOption": 0,
    "explanation": "SELECT is the primary command for querying data."
  },
  {
    "testId": "db-test-02",
    "question": "What is a subquery?",
    "options": [
      "A query nested inside another query",
      "A query that is executed after the main query",
      "A query that creates a table",
      "A query without a SELECT statement"
    ],
    "correctOption": 0,
    "explanation": "A subquery is a query inside another SQL query, enclosed in parentheses."
  },
  {
    "testId": "db-test-02",
    "question": "Which operator is used to compare a value with a list of values from a subquery?",
    "options": ["IN", "EXISTS", "ANY", "ALL"],
    "correctOption": 0,
    "explanation": "The IN operator checks if a value matches any value in a list or subquery result."
  },
  {
    "testId": "db-test-02",
    "question": "What is the difference between `INNER JOIN` and `LEFT JOIN`?",
    "options": [
      "INNER JOIN returns only matching rows; LEFT JOIN returns all from left and matches from right",
      "LEFT JOIN returns only matching; INNER JOIN returns all from left",
      "Both return all rows",
      "Both return only matching rows"
    ],
    "correctOption": 0,
    "explanation": "INNER JOIN only includes rows that match in both tables. LEFT JOIN includes all rows from the left table even if there is no match."
  },
  {
    "testId": "db-test-02",
    "question": "Which function returns the highest value in a column?",
    "options": ["MAX", "MIN", "SUM", "AVG"],
    "correctOption": 0,
    "explanation": "MAX() returns the maximum value."
  },
  {
    "testId": "db-test-02",
    "question": "Which clause is used to sort the result set?",
    "options": ["ORDER BY", "GROUP BY", "HAVING", "WHERE"],
    "correctOption": 0,
    "explanation": "ORDER BY sorts the result based on one or more columns."
  },
  {
    "testId": "db-test-02",
    "question": "What does the `LIKE` operator do?",
    "options": [
      "Performs pattern matching using wildcards",
      "Checks for equality",
      "Checks for NULL",
      "Checks for range"
    ],
    "correctOption": 0,
    "explanation": "LIKE is used with wildcards (% and _) to search for patterns in strings."
  },
  {
    "testId": "db-test-02",
    "question": "Which keyword is used to rename a column in the output?",
    "options": ["AS", "ALIAS", "RENAME", "COLUMN"],
    "correctOption": 0,
    "explanation": "The AS keyword is used to create an alias for a column or table."
  },
  {
    "testId": "db-test-02",
    "question": "What is the correct syntax for a subquery in a WHERE clause?",
    "options": [
      "WHERE column = (SELECT ...)",
      "WHERE column = SELECT ...",
      "WHERE column IN SELECT ...",
      "WHERE column = (SELECT ...) AS alias"
    ],
    "correctOption": 0,
    "explanation": "A subquery in WHERE must be enclosed in parentheses."
  },
  {
    "testId": "db-test-02",
    "question": "Which of the following is a valid JOIN condition syntax?",
    "options": [
      "ON table1.column = table2.column",
      "JOIN table1.column = table2.column",
      "WHERE table1.column = table2.column",
      "USING (table1.column, table2.column)"
    ],
    "correctOption": 0,
    "explanation": "The ON clause specifies the join condition in the JOIN syntax."
  },
  {
    "testId": "db-test-02",
    "question": "What is the result of `SELECT COUNT(DISTINCT column)`?",
    "options": [
      "Number of distinct non-NULL values in the column",
      "Number of all rows",
      "Number of NULL values",
      "Total number of columns"
    ],
    "correctOption": 0,
    "explanation": "COUNT(DISTINCT column) counts unique non-NULL values in the column."
  },
  {
    "testId": "db-test-02",
    "question": "Which of the following is used to combine rows from two tables without a matching condition?",
    "options": ["CROSS JOIN", "INNER JOIN", "LEFT JOIN", "FULL JOIN"],
    "correctOption": 0,
    "explanation": "CROSS JOIN returns the Cartesian product (every combination) of rows from both tables."
  },
  {
    "testId": "db-test-02",
    "question": "What is the purpose of the `GROUP BY` clause?",
    "options": [
      "To group rows with the same values in specified columns for aggregation",
      "To sort rows",
      "To filter rows",
      "To join tables"
    ],
    "correctOption": 0,
    "explanation": "GROUP BY groups rows that have the same values in the specified columns, allowing aggregate functions to be applied."
  },
  {
    "testId": "db-test-02",
    "question": "Which of the following is a valid join?",
    "options": ["INNER JOIN", "OUTER JOIN", "SELF JOIN", "All of the above"],
    "correctOption": 3,
    "explanation": "INNER JOIN, OUTER JOIN (LEFT/RIGHT/FULL), and SELF JOIN are all valid SQL joins."
  },
  {
    "testId": "db-test-02",
    "question": "What does the `EXISTS` operator do?",
    "options": [
      "Returns TRUE if a subquery returns any rows",
      "Returns TRUE if a value exists in a list",
      "Checks for NULL",
      "Checks for duplicates"
    ],
    "correctOption": 0,
    "explanation": "EXISTS is used to test the existence of rows in a subquery."
  },
  {
    "testId": "db-test-02",
    "question": "Which of the following is used to concatenate strings in SQL?",
    "options": ["+", "||", "CONCAT()", "All of the above depending on DBMS"],
    "correctOption": 3,
    "explanation": "Different DBMS use different concatenation: SQL Server uses +, Oracle and PostgreSQL use ||, and MySQL uses CONCAT()."
  },
  {
    "testId": "db-test-02",
    "question": "What is the default sorting order in ORDER BY?",
    "options": ["ASC", "DESC", "None", "It depends on the column"],
    "correctOption": 0,
    "explanation": "The default is ascending (ASC) if not specified."
  },
  {
    "testId": "db-test-03",
    "question": "What is a Common Table Expression (CTE)?",
    "options": [
      "A temporary named result set defined using the WITH clause",
      "A stored procedure",
      "A view",
      "A temporary table"
    ],
    "correctOption": 0,
    "explanation": "A CTE is a temporary result set that is defined using WITH and can be referenced within the same query."
  },
  {
    "testId": "db-test-03",
    "question": "Which window function assigns a unique sequential number within a partition?",
    "options": ["ROW_NUMBER()", "RANK()", "DENSE_RANK()", "NTILE()"],
    "correctOption": 0,
    "explanation": "ROW_NUMBER() assigns a unique sequential integer to each row within a partition."
  },
  {
    "testId": "db-test-03",
    "question": "What is the difference between RANK() and DENSE_RANK()?",
    "options": [
      "RANK() skips numbers after ties; DENSE_RANK() does not skip",
      "DENSE_RANK() skips; RANK() does not skip",
      "Both skip",
      "Both do not skip"
    ],
    "correctOption": 0,
    "explanation": "RANK leaves gaps (1,2,2,4), DENSE_RANK gives (1,2,2,3) without gaps."
  },
  {
    "testId": "db-test-03",
    "question": "Which window function accesses data from a previous row?",
    "options": ["LAG()", "LEAD()", "FIRST_VALUE()", "LAST_VALUE()"],
    "correctOption": 0,
    "explanation": "LAG() returns a value from a previous row in the same result set."
  },
  {
    "testId": "db-test-03",
    "question": "What is the purpose of an index in a database?",
    "options": [
      "To improve query performance",
      "To enforce constraints",
      "To define relationships",
      "All of the above"
    ],
    "correctOption": 0,
    "explanation": "Indexes primarily speed up data retrieval, though unique indexes also enforce uniqueness."
  },
  {
    "testId": "db-test-03",
    "question": "Which type of index is commonly used for equality searches?",
    "options": ["Hash index", "B-tree index", "Bitmap index", "Full-text index"],
    "correctOption": 0,
    "explanation": "Hash indexes are optimized for equality (=) comparisons, but they are not as common as B-tree."
  },
  {
    "testId": "db-test-03",
    "question": "What is a transaction isolation level?",
    "options": [
      "Defines how transaction modifications are visible to other transactions",
      "Defines the speed of transactions",
      "Defines the backup strategy",
      "Defines the indexing method"
    ],
    "correctOption": 0,
    "explanation": "Isolation levels control concurrency and visibility of uncommitted changes to other transactions."
  },
  {
    "testId": "db-test-03",
    "question": "Which isolation level prevents dirty reads?",
    "options": [
      "READ COMMITTED",
      "READ UNCOMMITTED",
      "REPEATABLE READ",
      "SERIALIZABLE"
    ],
    "correctOption": 0,
    "explanation": "READ COMMITTED prevents dirty reads by not allowing reading uncommitted data."
  },
  {
    "testId": "db-test-03",
    "question": "What does `COMMIT` do in SQL?",
    "options": [
      "Permanently saves all changes made in the current transaction",
      "Undoes all changes",
      "Saves a point to rollback to",
      "Closes the connection"
    ],
    "correctOption": 0,
    "explanation": "COMMIT makes transaction changes permanent in the database."
  },
  {
    "testId": "db-test-03",
    "question": "What does `ROLLBACK` do?",
    "options": [
      "Undoes all changes in the current transaction",
      "Saves changes",
      "Creates a savepoint",
      "Closes the transaction"
    ],
    "correctOption": 0,
    "explanation": "ROLLBACK reverts all changes made in the transaction."
  },
  {
    "testId": "db-test-03",
    "question": "Which statement is used to create a stored procedure?",
    "options": [
      "CREATE PROCEDURE",
      "CREATE FUNCTION",
      "CREATE TRIGGER",
      "CREATE VIEW"
    ],
    "correctOption": 0,
    "explanation": "`CREATE PROCEDURE` is used to define a stored procedure."
  },
  {
    "testId": "db-test-03",
    "question": "What is a trigger in SQL?",
    "options": [
      "A stored procedure that automatically executes in response to certain events",
      "A type of index",
      "A view",
      "A table constraint"
    ],
    "correctOption": 0,
    "explanation": "Triggers run automatically on INSERT, UPDATE, or DELETE operations on a table."
  },
  {
    "testId": "db-test-03",
    "question": "What is the purpose of `EXPLAIN` (or `EXPLAIN PLAN`)?",
    "options": [
      "To show the execution plan of a query",
      "To execute the query",
      "To explain the table schema",
      "To create an index"
    ],
    "correctOption": 0,
    "explanation": "EXPLAIN provides insight into how the database executes a query, useful for optimization."
  },
  {
    "testId": "db-test-03",
    "question": "Which of the following is a valid window function?",
    "options": ["SUM() OVER()", "AVG()", "COUNT()", "MAX()"],
    "correctOption": 0,
    "explanation": "Window functions use the OVER() clause, e.g., SUM() OVER(PARTITION BY ...)."
  },
  {
    "testId": "db-test-03",
    "question": "What does the `PARTITION BY` clause in a window function do?",
    "options": [
      "Divides the rows into groups to apply the window function separately",
      "Sorts the rows",
      "Filters the rows",
      "Groups by the columns"
    ],
    "correctOption": 0,
    "explanation": "PARTITION BY splits the result set into partitions, and the function is applied within each partition."
  },
  {
    "testId": "db-test-03",
    "question": "What is a correlated subquery?",
    "options": [
      "A subquery that references columns from the outer query",
      "A subquery that is independent",
      "A subquery that returns multiple rows",
      "A subquery that is executed once"
    ],
    "correctOption": 0,
    "explanation": "A correlated subquery depends on the outer query and is evaluated for each row of the outer query."
  },
  {
    "testId": "db-test-03",
    "question": "Which of the following is a valid constraint type?",
    "options": ["UNIQUE", "CHECK", "FOREIGN KEY", "All of the above"],
    "correctOption": 3,
    "explanation": "All are valid constraints: UNIQUE, CHECK, and FOREIGN KEY."
  },
  {
    "testId": "db-test-03",
    "question": "What is a recursive CTE?",
    "options": [
      "A CTE that references itself",
      "A CTE that returns multiple columns",
      "A CTE that is defined recursively",
      "A CTE that is used in a loop"
    ],
    "correctOption": 0,
    "explanation": "Recursive CTEs are used to traverse hierarchical data like organizational structures."
  },
  {
    "testId": "db-test-03",
    "question": "Which statement is used to create an index?",
    "options": ["CREATE INDEX", "ADD INDEX", "ALTER INDEX", "CREATE UNIQUE INDEX"],
    "correctOption": 0,
    "explanation": "`CREATE INDEX` is the standard command."
  },
  {
    "testId": "db-test-03",
    "question": "What is a deadlock in a database?",
    "options": [
      "A situation where two or more transactions wait indefinitely for each other to release locks",
      "A situation where a transaction times out",
      "A situation where data is corrupted",
      "A situation where the database crashes"
    ],
    "correctOption": 0,
    "explanation": "Deadlock occurs when transactions hold locks and each waits for the other to release a lock."
  },
  {
    "testId": "db-test-03",
    "question": "Which of the following is a benefit of using stored procedures?",
    "options": [
      "Reduced network traffic",
      "Enforced business logic",
      "Security",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Stored procedures reduce network traffic, centralize logic, and provide security."
  },
  {
    "testId": "db-test-03",
    "question": "What is a materialized view?",
    "options": [
      "A view that stores the query result physically",
      "A view that is read-only",
      "A view that is updated automatically",
      "A view that is indexed"
    ],
    "correctOption": 0,
    "explanation": "A materialized view is a physical copy of the query result, often used for performance."
  },
  {
    "testId": "db-test-04",
    "question": "Which of the following is a NoSQL database?",
    "options": ["MongoDB", "PostgreSQL", "MySQL", "Oracle"],
    "correctOption": 0,
    "explanation": "MongoDB is a document-oriented NoSQL database. The others are relational databases."
  },
  {
    "testId": "db-test-04",
    "question": "What is the main advantage of a document store like MongoDB?",
    "options": [
      "Flexible schema and horizontal scaling",
      "Strict schema enforcement",
      "SQL support",
      "Complex joins"
    ],
    "correctOption": 0,
    "explanation": "Document stores allow flexible, evolving schemas and easy horizontal scaling."
  },
  {
    "testId": "db-test-04",
    "question": "What is a collection in MongoDB?",
    "options": [
      "A group of documents, analogous to a table in SQL",
      "A database",
      "A single document",
      "An index"
    ],
    "correctOption": 0,
    "explanation": "Collections are groups of documents, similar to tables in relational databases."
  },
  {
    "testId": "db-test-04",
    "question": "Which command is used to insert a document in MongoDB?",
    "options": ["insertOne()", "insert()", "add()", "save()"],
    "correctOption": 0,
    "explanation": "insertOne() inserts a single document. insert() and save() are also available in some versions."
  },
  {
    "testId": "db-test-04",
    "question": "How do you query for all documents in MongoDB?",
    "options": ["db.collection.find()", "db.collection.find({})", "Both A and B", "db.collection.getAll()"],
    "correctOption": 2,
    "explanation": "Both `find()` and `find({})` return all documents."
  },
  {
    "testId": "db-test-04",
    "question": "Which operator is used for equality in MongoDB queries?",
    "options": ["$eq", "$eq", "=", "=="],
    "correctOption": 0,
    "explanation": "`$eq` is the equality operator in MongoDB query language."
  },
  {
    "testId": "db-test-04",
    "question": "What does the aggregation pipeline in MongoDB do?",
    "options": [
      "Processes data in stages to transform and aggregate documents",
      "Creates a backup",
      "Indexes the data",
      "Shards the data"
    ],
    "correctOption": 0,
    "explanation": "The aggregation pipeline consists of stages like `$match`, `$group`, `$project` to process data."
  },
  {
    "testId": "db-test-04",
    "question": "What is the purpose of `$group` in MongoDB aggregation?",
    "options": [
      "Groups documents by a specified key and performs accumulation",
      "Filters documents",
      "Projects fields",
      "Sorts documents"
    ],
    "correctOption": 0,
    "explanation": "`$group` is used for grouping and aggregating (e.g., sum, count)."
  },
  {
    "testId": "db-test-04",
    "question": "Which of the following is a NoSQL data model?",
    "options": ["Key-value", "Document", "Column-family", "All of the above"],
    "correctOption": 3,
    "explanation": "NoSQL encompasses key-value, document, column-family, and graph databases."
  },
  {
    "testId": "db-test-04",
    "question": "What is the CAP theorem?",
    "options": [
      "Consistency, Availability, Partition tolerance",
      "Consistency, Atomicity, Partition tolerance",
      "Concurrency, Availability, Partition tolerance",
      "Consistency, Availability, Performance"
    ],
    "correctOption": 0,
    "explanation": "CAP theorem states that a distributed system can only guarantee two of three: Consistency, Availability, and Partition tolerance."
  },
  {
    "testId": "db-test-04",
    "question": "Which of the following is a characteristic of NoSQL databases?",
    "options": [
      "Schema-less",
      "ACID transactions are always supported",
      "Relational model",
      "SQL is the only query language"
    ],
    "correctOption": 0,
    "explanation": "NoSQL databases typically have flexible schemas (schema-less)."
  },
  {
    "testId": "db-test-04",
    "question": "What is a replica set in MongoDB?",
    "options": [
      "A group of MongoDB nodes that replicate data for high availability",
      "A cluster of sharded nodes",
      "A backup system",
      "A collection of databases"
    ],
    "correctOption": 0,
    "explanation": "A replica set maintains multiple copies of data for redundancy and fault tolerance."
  },
  {
    "testId": "db-test-04",
    "question": "What is the purpose of sharding in MongoDB?",
    "options": [
      "To distribute data across multiple servers to scale horizontally",
      "To replicate data for availability",
      "To index the data",
      "To compress data"
    ],
    "correctOption": 0,
    "explanation": "Sharding partitions data across multiple servers to handle large datasets and high throughput."
  },
  {
    "testId": "db-test-04",
    "question": "Which of the following is a MongoDB query operator for comparisons?",
    "options": ["$gt", "$gte", "$lt", "All of the above"],
    "correctOption": 3,
    "explanation": "$gt (greater than), $gte, $lt, $lte are all comparison operators in MongoDB."
  },
  {
    "testId": "db-test-04",
    "question": "What is the use of the `$lookup` stage in MongoDB aggregation?",
    "options": [
      "To perform a left outer join with another collection",
      "To group documents",
      "To filter documents",
      "To sort documents"
    ],
    "correctOption": 0,
    "explanation": "$lookup allows combining documents from two collections, similar to a SQL JOIN."
  },
  {
    "testId": "db-test-04",
    "question": "Which of the following is a benefit of using NoSQL over SQL?",
    "options": [
      "Flexible schema",
      "Horizontal scaling",
      "High performance for certain workloads",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "NoSQL databases provide schema flexibility, horizontal scaling, and often better performance for specific use cases."
  },
  {
    "testId": "db-test-04",
    "question": "What does `db.collection.updateOne()` do?",
    "options": [
      "Updates a single document that matches the filter",
      "Updates all documents",
      "Inserts a new document",
      "Deletes a document"
    ],
    "correctOption": 0,
    "explanation": "updateOne() updates at most one document that matches the query filter."
  },
  {
    "testId": "db-test-04",
    "question": "What is an index in MongoDB?",
    "options": [
      "A data structure that improves query performance",
      "A constraint enforcing uniqueness",
      "A replica set",
      "A backup"
    ],
    "correctOption": 0,
    "explanation": "Indexes in MongoDB work similarly to relational databases to speed up queries."
  },
  {
    "testId": "db-test-04",
    "question": "Which command is used to create an index in MongoDB?",
    "options": [
      "db.collection.createIndex()",
      "db.collection.index()",
      "db.collection.addIndex()",
      "db.collection.buildIndex()"
    ],
    "correctOption": 0,
    "explanation": "`createIndex()` is the MongoDB method to create indexes."
  },
  {
    "testId": "db-test-04",
    "question": "What is the default write concern in MongoDB?",
    "options": [
      "Writes are acknowledged by the primary only",
      "Writes are acknowledged by all replicas",
      "Writes are unacknowledged",
      "Writes are acknowledged by the majority"
    ],
    "correctOption": 0,
    "explanation": "The default write concern acknowledges writes from the primary node only."
  },
  {
    "testId": "db-test-04",
    "question": "Which of the following is a type of NoSQL database?",
    "options": ["Graph database", "Document store", "Key-value store", "All of the above"],
    "correctOption": 3,
    "explanation": "All are categories of NoSQL databases."
  },
  {
    "testId": "db-test-04",
    "question": "What is the use of the `$project` stage in MongoDB aggregation?",
    "options": [
      "To select which fields to include or exclude in the output",
      "To group documents",
      "To filter documents",
      "To sort documents"
    ],
    "correctOption": 0,
    "explanation": "$project allows inclusion/exclusion and reshaping of fields."
  },
  {
    "testId": "db-test-04",
    "question": "What is a document ID in MongoDB?",
    "options": [
      "A unique identifier for each document, usually `_id`",
      "The collection name",
      "The database name",
      "The index name"
    ],
    "correctOption": 0,
    "explanation": "MongoDB automatically generates a unique `_id` field for each document."
  },
  {
    "testId": "db-test-05",
    "question": "What is the difference between replication and sharding?",
    "options": [
      "Replication creates copies of data for availability; sharding distributes data across multiple nodes",
      "Sharding creates copies; replication distributes data",
      "Both replicate data",
      "Both distribute data"
    ],
    "correctOption": 0,
    "explanation": "Replication provides redundancy; sharding provides horizontal scaling."
  },
  {
    "testId": "db-test-05",
    "question": "Which consistency level in Cassandra provides strong consistency?",
    "options": ["QUORUM", "ONE", "ALL", "LOCAL_QUORUM"],
    "correctOption": 2,
    "explanation": "Consistency level `ALL` requires all replicas to acknowledge the write, providing strong consistency."
  },
  {
    "testId": "db-test-05",
    "question": "What is eventual consistency?",
    "options": [
      "A consistency model where updates are propagated asynchronously and all replicas eventually converge",
      "A model with instant consistency",
      "A model that ensures ACID",
      "A model that never resolves conflicts"
    ],
    "correctOption": 0,
    "explanation": "Eventual consistency means that after an update, all replicas will eventually become consistent."
  },
  {
    "testId": "db-test-05",
    "question": "Which of the following is a distributed NoSQL database?",
    "options": ["Cassandra", "MongoDB", "Redis", "All of the above"],
    "correctOption": 3,
    "explanation": "All can be distributed; Cassandra and MongoDB support distributed architectures."
  },
  {
    "testId": "db-test-05",
    "question": "What is a graph database?",
    "options": [
      "A database that uses graph structures (nodes and edges) to represent and store data",
      "A relational database",
      "A document store",
      "A key-value store"
    ],
    "correctOption": 0,
    "explanation": "Graph databases are designed for highly connected data, like social networks."
  },
  {
    "testId": "db-test-05",
    "question": "Which of the following is an example of a graph database?",
    "options": ["Neo4j", "MongoDB", "Cassandra", "Redis"],
    "correctOption": 0,
    "explanation": "Neo4j is a popular graph database."
  },
  {
    "testId": "db-test-05",
    "question": "What is the primary use case for key-value stores like Redis?",
    "options": [
      "Caching and session storage",
      "Complex queries with joins",
      "Full-text search",
      "Analytics"
    ],
    "correctOption": 0,
    "explanation": "Key-value stores are often used for caching, session management, and real-time messaging."
  },
  {
    "testId": "db-test-05",
    "question": "What is a document-oriented database?",
    "options": [
      "A database that stores data as documents (e.g., JSON)",
      "A relational database",
      "A database that stores data in tables",
      "A graph database"
    ],
    "correctOption": 0,
    "explanation": "Document-oriented databases like MongoDB store data in flexible, semi-structured documents."
  },
  {
    "testId": "db-test-05",
    "question": "What is the main advantage of using a column-family store like HBase?",
    "options": [
      "High write throughput and horizontal scalability",
      "ACID transactions",
      "Complex joins",
      "Full-text search"
    ],
    "correctOption": 0,
    "explanation": "Column-family stores are optimized for large-scale, write-heavy workloads."
  },
  {
    "testId": "db-test-05",
    "question": "What is a distributed database?",
    "options": [
      "A database that is spread across multiple machines",
      "A single-machine database",
      "A database that is duplicated",
      "A database that is sharded"
    ],
    "correctOption": 0,
    "explanation": "A distributed database has data stored on multiple nodes, providing scalability and fault tolerance."
  },
  {
    "testId": "db-test-05",
    "question": "Which of the following is a difference between SQL and NoSQL?",
    "options": [
      "SQL databases are relational and use structured schema; NoSQL are non-relational with flexible schema",
      "NoSQL databases always support ACID",
      "SQL databases cannot scale horizontally",
      "Both are the same"
    ],
    "correctOption": 0,
    "explanation": "SQL databases use fixed schemas and are relational; NoSQL databases offer flexibility and scale horizontally."
  },
  {
    "testId": "db-test-05",
    "question": "What is a use case for MongoDB over PostgreSQL?",
    "options": [
      "When data has a flexible schema and requires frequent updates",
      "When you need strict ACID compliance",
      "When you need complex joins",
      "When you need enterprise-level support"
    ],
    "correctOption": 0,
    "explanation": "MongoDB is well-suited for applications with evolving schemas and rapid iteration."
  },
  {
    "testId": "db-test-05",
    "question": "Which of the following is true about Redis?",
    "options": [
      "It is an in-memory data structure store",
      "It is a relational database",
      "It supports only strings",
      "It is document-oriented"
    ],
    "correctOption": 0,
    "explanation": "Redis is an in-memory key-value store often used for caching and real-time data."
  },
  {
    "testId": "db-test-05",
    "question": "What is the ACID vs BASE comparison?",
    "options": [
      "ACID guarantees strong consistency; BASE (Basically Available, Soft state, Eventual consistency) prioritizes availability",
      "BASE guarantees strong consistency; ACID prioritizes availability",
      "Both provide the same guarantees",
      "Neither is used in modern databases"
    ],
    "correctOption": 0,
    "explanation": "ACID is traditional for relational databases; BASE is associated with NoSQL systems prioritizing availability and eventual consistency."
  },
  {
    "testId": "db-test-05",
    "question": "Which of the following is a NoSQL database that uses the columnar data model?",
    "options": ["Cassandra", "MongoDB", "Redis", "Neo4j"],
    "correctOption": 0,
    "explanation": "Cassandra is a column-family (columnar) NoSQL database."
  },
  {
    "testId": "db-test-05",
    "question": "What is the purpose of a distributed consensus algorithm like Paxos or Raft?",
    "options": [
      "To achieve consensus among distributed nodes for consistency",
      "To compress data",
      "To encrypt data",
      "To index data"
    ],
    "correctOption": 0,
    "explanation": "Consensus algorithms ensure that distributed systems agree on a single value, crucial for consistency."
  },
  {
    "testId": "db-test-05",
    "question": "What is a partition in distributed databases?",
    "options": [
      "A subset of the data stored on one node",
      "A backup of the data",
      "A copy of the data",
      "A data model"
    ],
    "correctOption": 0,
    "explanation": "Partitioning splits data across nodes, also known as sharding."
  },
  {
    "testId": "db-test-05",
    "question": "Which of the following is a challenge in distributed databases?",
    "options": [
      "Network latency",
      "Data consistency",
      "Fault tolerance",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Distributed systems face challenges like latency, consistency, and handling node failures."
  },
  {
    "testId": "db-test-05",
    "question": "What is the purpose of write-ahead logging (WAL)?",
    "options": [
      "To ensure durability by logging changes before applying them",
      "To speed up queries",
      "To compress data",
      "To shard data"
    ],
    "correctOption": 0,
    "explanation": "WAL is used to guarantee durability by recording modifications before they are committed."
  },
  {
    "testId": "db-test-05",
    "question": "Which NoSQL database is known for its use in real-time analytics and caching?",
    "options": ["Redis", "MongoDB", "Cassandra", "Elasticsearch"],
    "correctOption": 0,
    "explanation": "Redis is often used for caching and real-time analytics due to its in-memory speed."
  },
  {
    "testId": "db-test-05",
    "question": "What is the difference between horizontal and vertical scaling?",
    "options": [
      "Horizontal scaling adds more nodes; vertical scaling adds more resources to a single node",
      "Vertical scaling adds more nodes; horizontal adds more resources",
      "Both add nodes",
      "Both add resources"
    ],
    "correctOption": 0,
    "explanation": "Horizontal scaling distributes load across multiple nodes; vertical scaling upgrades a single machine."
  },
  {
    "testId": "db-test-05",
    "question": "Which of the following is a use case for SQL over NoSQL?",
    "options": [
      "Applications requiring complex transactions and strong consistency",
      "Applications with rapidly changing schema",
      "Big data analytics",
      "Caching"
    ],
    "correctOption": 0,
    "explanation": "SQL databases are preferred for applications that need ACID transactions and complex queries."
  },
  {
    "testId": "db-test-05",
    "question": "What is a shard key?",
    "options": [
      "A key used to distribute data across shards",
      "A primary key",
      "A foreign key",
      "An index"
    ],
    "correctOption": 0,
    "explanation": "The shard key determines which shard a document is stored on."
  },
  {
    "testId": "db-test-05",
    "question": "What is eventual consistency in the context of NoSQL?",
    "options": [
      "After an update, all replicas will eventually become consistent",
      "Updates are immediately visible on all replicas",
      "Updates are never visible on some replicas",
      "Consistency is guaranteed only for primary nodes"
    ],
    "correctOption": 0,
    "explanation": "Eventual consistency ensures that given enough time, all copies will converge to the same state."
  },
  {
    "testId": "db-test-05",
    "question": "Which of the following is a popular NoSQL database for large-scale web applications?",
    "options": ["MongoDB", "Cassandra", "DynamoDB", "All of the above"],
    "correctOption": 3,
    "explanation": "MongoDB, Cassandra, and DynamoDB are all widely used in web-scale applications."
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
console.log('Added ' + newQuestions.length + ' db questions to questions.js');
