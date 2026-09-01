const fs = require('fs');

const data = [
  // Test 8
  {
    "testId": "sql-test-08",
    "question": "What does CTE stand for?",
    "options": ["Common Table Expression", "Complex Table Entity", "Core Table Extension", "Central Transaction Engine"],
    "correctOption": 0,
    "explanation": "CTE stands for Common Table Expression. It is a temporary named result set defined using the WITH clause."
  },
  {
    "testId": "sql-test-08",
    "question": "Which clause is used to define a Common Table Expression (CTE)?",
    "options": ["WITH", "AS", "CTE", "TEMPORARY"],
    "correctOption": 0,
    "explanation": "The WITH clause is used to define one or more CTEs before the main query."
  },
  {
    "testId": "sql-test-08",
    "question": "What is a recursive CTE?",
    "options": [
      "A CTE that calls itself repeatedly until a condition is met",
      "A CTE that creates a recursive function",
      "A CTE that uses the RECURSIVE keyword",
      "Both A and C are correct"
    ],
    "correctOption": 3,
    "explanation": "A recursive CTE is a CTE that references itself. It requires the RECURSIVE keyword (in PostgreSQL/MySQL) and consists of an anchor and a recursive member."
  },
  {
    "testId": "sql-test-08",
    "question": "Which window function assigns a unique sequential number to each row within a partition starting from 1?",
    "options": ["RANK()", "DENSE_RANK()", "ROW_NUMBER()", "NTILE()"],
    "correctOption": 2,
    "explanation": "ROW_NUMBER() assigns a unique sequential integer to rows within a partition, starting at 1 for the first row."
  },
  {
    "testId": "sql-test-08",
    "question": "What is the difference between RANK() and DENSE_RANK()?",
    "options": [
      "RANK() skips numbers after ties, DENSE_RANK() does not",
      "DENSE_RANK() skips numbers, RANK() does not",
      "Both are identical",
      "RANK() works only on numbers"
    ],
    "correctOption": 0,
    "explanation": "RANK() assigns the same rank to ties but leaves gaps (e.g., 1,2,2,4). DENSE_RANK() assigns the same rank without gaps (e.g., 1,2,2,3)."
  },
  {
    "testId": "sql-test-08",
    "question": "Which window function is used to access data from a previous row in the same result set?",
    "options": ["LEAD()", "LAG()", "FIRST_VALUE()", "LAST_VALUE()"],
    "correctOption": 1,
    "explanation": "LAG() accesses data from a previous row in the same result set. LEAD() accesses data from a subsequent row."
  },
  {
    "testId": "sql-test-08",
    "question": "What does the NTILE() function do?",
    "options": [
      "Divides rows into a specified number of approximately equal groups",
      "Returns the nth row",
      "Returns the title of the row",
      "Groups rows by a column"
    ],
    "correctOption": 0,
    "explanation": "NTILE(n) distributes rows into n buckets as equally as possible, assigning a bucket number to each row."
  },
  {
    "testId": "sql-test-08",
    "question": "What is a stored procedure?",
    "options": [
      "A group of SQL statements saved and compiled on the server",
      "A type of view",
      "A table that stores data",
      "A backup of SQL code"
    ],
    "correctOption": 0,
    "explanation": "A stored procedure is a pre-compiled collection of SQL statements and optional logic stored on the database server, which can be executed as a single unit."
  },
  {
    "testId": "sql-test-08",
    "question": "What is a trigger in SQL?",
    "options": [
      "A stored procedure that automatically executes in response to certain events (INSERT, UPDATE, DELETE)",
      "A button in the GUI",
      "A type of index",
      "A constraint"
    ],
    "correctOption": 0,
    "explanation": "A trigger is a special type of stored procedure that automatically runs when a specified event (like INSERT, UPDATE, or DELETE) occurs on a table."
  },
  {
    "testId": "sql-test-08",
    "question": "What is the main difference between a stored procedure and a function in SQL?",
    "options": [
      "A procedure can have output parameters, a function returns a single value",
      "A function can have output parameters, a procedure returns a single value",
      "There is no difference",
      "Functions cannot be called from SELECT"
    ],
    "correctOption": 0,
    "explanation": "Functions must return a single value and are called within expressions. Procedures can have input/output parameters and do not necessarily return a value, but can modify data."
  },
  {
    "testId": "sql-test-08",
    "question": "Which of the following is NOT a window function?",
    "options": ["ROW_NUMBER", "RANK", "SUM (with OVER clause)", "GROUP BY"],
    "correctOption": 3,
    "explanation": "GROUP BY is not a window function. Window functions operate on a set of rows (window) without collapsing them into a single result."
  },
  {
    "testId": "sql-test-08",
    "question": "What does the OVER() clause define in a window function?",
    "options": [
      "The partition and ordering of the window (set of rows) for the function",
      "The database name",
      "The table to query",
      "The group by condition"
    ],
    "correctOption": 0,
    "explanation": "OVER() defines the window of rows the function operates on, including partitioning and ordering. Example: ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary)."
  },
  {
    "testId": "sql-test-08",
    "question": "What is a recursive query used for?",
    "options": [
      "To traverse hierarchical or graph-like data (e.g., org charts, tree structures)",
      "To recursively delete data",
      "To create recursive functions",
      "To nest subqueries"
    ],
    "correctOption": 0,
    "explanation": "Recursive queries (CTEs) are used to query hierarchical data like organizational charts, bill of materials, or graph traversals."
  },
  {
    "testId": "sql-test-08",
    "question": "In a window function, what does PARTITION BY do?",
    "options": [
      "It splits the result set into partitions where the function is applied independently",
      "It groups the final output",
      "It orders the rows",
      "It filters the rows"
    ],
    "correctOption": 0,
    "explanation": "PARTITION BY divides the rows into partitions (similar to GROUP BY) but the window function is applied to each partition separately without collapsing rows."
  },
  {
    "testId": "sql-test-08",
    "question": "What is a scalar-valued function?",
    "options": [
      "A function that returns a single value (like a number or string)",
      "A function that returns a table",
      "A function that returns multiple rows",
      "A function that returns NULL"
    ],
    "correctOption": 0,
    "explanation": "A scalar-valued function returns a single value (e.g., INT, VARCHAR) and can be used in SELECT lists or WHERE clauses."
  },
  {
    "testId": "sql-test-08",
    "question": "What is a table-valued function?",
    "options": [
      "A function that returns a table (result set)",
      "A function that modifies a table",
      "A function that deletes a table",
      "A function that returns a single value"
    ],
    "correctOption": 0,
    "explanation": "A table-valued function returns a table variable or result set, which can be used in FROM clauses like a table."
  },
  {
    "testId": "sql-test-08",
    "question": "In SQL, what is the use of the 'PIVOT' operator?",
    "options": [
      "To rotate rows into columns (cross-tabulation)",
      "To rotate columns into rows",
      "To combine two columns",
      "To sort data"
    ],
    "correctOption": 0,
    "explanation": "PIVOT is used to rotate table-valued expressions by turning unique values from one column into multiple columns in the output."
  },
  {
    "testId": "sql-test-08",
    "question": "What is the purpose of the 'OUTPUT' clause in SQL Server?",
    "options": [
      "To return information from modified rows (INSERTED/DELETED) after DML operations",
      "To output the execution plan",
      "To print a message",
      "To export data to a file"
    ],
    "correctOption": 0,
    "explanation": "In SQL Server, the OUTPUT clause returns information from rows affected by INSERT, UPDATE, DELETE, or MERGE."
  },
  {
    "testId": "sql-test-08",
    "question": "What is the difference between a deterministic and non-deterministic function?",
    "options": [
      "Deterministic returns same output for same inputs; non-deterministic may vary (e.g., GETDATE())",
      "Deterministic is faster",
      "Non-deterministic cannot be used in indexes",
      "Both A and C are correct"
    ],
    "correctOption": 3,
    "explanation": "Deterministic functions (like UPPER) always return the same result for given inputs. Non-deterministic functions (like GETDATE, RAND) can return different values, affecting index usage."
  },
  {
    "testId": "sql-test-08",
    "question": "What is a window frame?",
    "options": [
      "A subset of rows within a partition defined by ORDER BY in the OVER clause",
      "The entire table",
      "A group of columns",
      "A type of index"
    ],
    "correctOption": 0,
    "explanation": "A window frame defines the set of rows within a partition that the window function uses, determined by the ORDER BY clause in OVER() (e.g., ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)."
  },
  {
    "testId": "sql-test-08",
    "question": "Which function is used to get the value from the first row of a partition?",
    "options": ["FIRST_VALUE()", "LAST_VALUE()", "LAG()", "LEAD()"],
    "correctOption": 0,
    "explanation": "FIRST_VALUE() returns the value of the specified column from the first row in the window frame."
  },
  {
    "testId": "sql-test-08",
    "question": "What is the purpose of the 'OPTION' clause in a query?",
    "options": [
      "To provide hints to the query optimizer (like OPTION (RECOMPILE))",
      "To set query options",
      "To add comments",
      "To define variables"
    ],
    "correctOption": 0,
    "explanation": "The OPTION clause is used to specify query hints that influence the execution plan, such as OPTION (RECOMPILE) or OPTION (MAXDOP n)."
  },
  {
    "testId": "sql-test-08",
    "question": "Can a stored procedure call another stored procedure?",
    "options": ["Yes", "No", "Only if they are in the same database", "Only in SQL Server"],
    "correctOption": 0,
    "explanation": "Stored procedures can call other stored procedures (nested calls), allowing for modular programming and code reuse."
  },
  {
    "testId": "sql-test-08",
    "question": "What is the purpose of a database cursor?",
    "options": [
      "To process rows in a result set one at a time",
      "To speed up bulk operations",
      "To create indexes",
      "To join tables"
    ],
    "correctOption": 0,
    "explanation": "Cursors allow you to fetch and iterate over rows in a result set sequentially, performing operations on each row. They are generally slower than set-based operations."
  },
  {
    "testId": "sql-test-08",
    "question": "What is a 'deadlock' in SQL?",
    "options": [
      "A situation where two or more transactions wait indefinitely for each other to release locks",
      "A situation where a query takes too long",
      "A situation where data is corrupted",
      "A situation where the database crashes"
    ],
    "correctOption": 0,
    "explanation": "A deadlock occurs when two or more transactions each hold locks on resources that the others need, causing a cyclic dependency and indefinite wait."
  },
  {
    "testId": "sql-test-08",
    "question": "What is the 'NOLOCK' hint in SQL Server?",
    "options": [
      "It allows dirty reads (reads data without issuing locks), improving performance at the cost of consistency",
      "It locks the entire table",
      "It prevents any reads",
      "It is used for writing data"
    ],
    "correctOption": 0,
    "explanation": "NOLOCK (or READ UNCOMMITTED isolation level) allows reading data that may be modified by other transactions, avoiding locks but risking dirty reads."
  },
  {
    "testId": "sql-test-08",
    "question": "What is an isolation level in SQL?",
    "options": [
      "A level that defines the degree of transaction isolation (e.g., READ COMMITTED, SERIALIZABLE)",
      "A level of index fragmentation",
      "A level of backup compression",
      "A level of user permissions"
    ],
    "correctOption": 0,
    "explanation": "Isolation levels define how transaction changes are visible to other transactions, balancing consistency and concurrency. Examples: READ COMMITTED, REPEATABLE READ, SERIALIZABLE."
  },
  {
    "testId": "sql-test-08",
    "question": "Which isolation level provides the highest level of consistency (but lowest concurrency)?",
    "options": ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
    "correctOption": 3,
    "explanation": "SERIALIZABLE provides the highest isolation by locking ranges, preventing phantom reads, but it significantly reduces concurrency."
  },
  {
    "testId": "sql-test-08",
    "question": "What does a 'RANGE' window frame specify?",
    "options": [
      "It includes rows based on a range of values relative to the current row, using the ORDER BY column",
      "It includes a fixed number of rows",
      "It includes all rows in the partition",
      "It includes rows based on a range of dates"
    ],
    "correctOption": 0,
    "explanation": "RANGE frame calculates the set of rows based on a logical range of values (e.g., all rows with salary within 1000 of current salary), using the ORDER BY column."
  },
  {
    "testId": "sql-test-08",
    "question": "What is the purpose of 'PERCENT_RANK()'?",
    "options": [
      "To calculate the relative rank of a row as a percentage (0 to 1)",
      "To rank rows in percentile groups",
      "To find the top 10%",
      "To calculate average percentage"
    ],
    "correctOption": 0,
    "explanation": "PERCENT_RANK() calculates the relative rank of a row within a partition, ranging from 0 to 1. It is calculated as (RANK - 1) / (Total Rows - 1)."
  },
  {
    "testId": "sql-test-08",
    "question": "What is the 'CUME_DIST()' function?",
    "options": [
      "It calculates the cumulative distribution of a value (position / total rows)",
      "It calculates cumulative sum",
      "It calculates the mode",
      "It calculates median"
    ],
    "correctOption": 0,
    "explanation": "CUME_DIST() (Cumulative Distribution) calculates the relative position of a row within a partition as (number of rows before or equal to the row) / (total rows in partition)."
  },
  {
    "testId": "sql-test-08",
    "question": "Can you use aggregate functions as window functions with the OVER clause?",
    "options": ["Yes", "No", "Only SUM and COUNT", "Only AVG"],
    "correctOption": 0,
    "explanation": "Yes, aggregate functions like SUM, AVG, MIN, MAX, COUNT can be used as window functions with the OVER clause to compute running totals, moving averages, etc."
  },
  {
    "testId": "sql-test-08",
    "question": "What is the difference between a deterministic function and a nondeterministic function regarding indexing?",
    "options": [
      "Nondeterministic functions cannot be used in computed columns that are persisted or indexed",
      "Deterministic functions cannot be indexed",
      "There is no difference",
      "Both can be indexed equally"
    ],
    "correctOption": 0,
    "explanation": "Indexed views and persisted computed columns require deterministic functions. Nondeterministic functions (like GETDATE()) cannot be used in these scenarios."
  },
  {
    "testId": "sql-test-08",
    "question": "What is the primary purpose of a trigger?",
    "options": [
      "To enforce business rules, audit changes, or automate actions automatically",
      "To index a table",
      "To create a view",
      "To drop a table"
    ],
    "correctOption": 0,
    "explanation": "Triggers automate actions (like logging or validation) when data changes, helping enforce business logic at the database level."
  },
  {
    "testId": "sql-test-08",
    "question": "What is a 'plan cache' in SQL Server?",
    "options": [
      "A cache that stores execution plans to avoid recompilation",
      "A cache that stores data rows",
      "A cache for indexes",
      "A backup plan"
    ],
    "correctOption": 0,
    "explanation": "The plan cache stores compiled query execution plans, allowing subsequent executions of the same query to skip the compilation step, improving performance."
  },
  {
    "testId": "sql-test-08",
    "question": "Which type of join is typically more efficient when using window functions?",
    "options": [
      "Joins are not related to window functions",
      "Window functions are generally applied after joins",
      "Window functions replace joins",
      "Window functions are only for single tables"
    ],
    "correctOption": 1,
    "explanation": "Window functions are evaluated after joins, so they can be used in combination with joins. The efficiency depends on the join type, but they don't inherently prefer one join over another."
  },
  {
    "testId": "sql-test-08",
    "question": "What is a 'common table expression' (CTE) mainly used for in complex queries?",
    "options": [
      "To break down complex logic into simpler, readable pieces and avoid repeated subqueries",
      "To create indexes",
      "To update data",
      "To delete data"
    ],
    "correctOption": 0,
    "explanation": "CTEs improve readability and maintainability of complex queries by defining temporary result sets that can be referenced multiple times in the main query."
  },
  {
    "testId": "sql-test-08",
    "question": "What does the 'RECURSIVE' keyword do in a CTE?",
    "options": [
      "It allows the CTE to reference itself",
      "It makes the CTE run faster",
      "It makes the CTE deterministic",
      "It creates a loop"
    ],
    "correctOption": 0,
    "explanation": "In some databases like PostgreSQL, the RECURSIVE keyword is placed before the CTE name to permit self-referencing in the CTE."
  },
  {
    "testId": "sql-test-08",
    "question": "What is the advantage of using 'MERGE' over separate INSERT/UPDATE statements?",
    "options": [
      "It reduces round trips to the database by performing all operations in one statement",
      "It is always faster",
      "It has better syntax",
      "It requires less memory"
    ],
    "correctOption": 0,
    "explanation": "MERGE combines INSERT, UPDATE, and DELETE in a single statement, reducing code complexity and network round trips, especially in data synchronization scenarios."
  },
  {
    "testId": "sql-test-08",
    "question": "What is a 'covering index' in terms of query performance?",
    "options": [
      "An index that includes all columns needed by the query, eliminating the need to access the table",
      "An index that covers the entire table",
      "An index that is hidden",
      "An index that is never used"
    ],
    "correctOption": 0,
    "explanation": "A covering index includes every column referenced in the query (SELECT, WHERE, JOIN). The query can be satisfied entirely from the index, greatly improving performance."
  },
  {
    "testId": "sql-test-08",
    "question": "Can you create a trigger that fires after a SELECT statement?",
    "options": ["Yes", "No", "Only in Oracle", "Only in PostgreSQL"],
    "correctOption": 1,
    "explanation": "Triggers are only defined for DML operations (INSERT, UPDATE, DELETE) or DDL events. They cannot be fired on SELECT statements."
  },
  {
    "testId": "sql-test-08",
    "question": "What does the 'FOR XML' clause do in SQL Server?",
    "options": [
      "It returns query results as an XML format",
      "It creates an XML index",
      "It exports data to an XML file",
      "It parses XML"
    ],
    "correctOption": 0,
    "explanation": "In SQL Server, the FOR XML clause returns the query results as an XML document, useful for data exchange."
  },
  {
    "testId": "sql-test-08",
    "question": "What is a 'JSON_AGG' function used for in PostgreSQL?",
    "options": [
      "To aggregate rows into a JSON array",
      "To parse JSON",
      "To validate JSON",
      "To create a JSON column"
    ],
    "correctOption": 0,
    "explanation": "JSON_AGG (and JSONB_AGG) aggregates rows into a JSON array, commonly used to format data for APIs."
  },
  {
    "testId": "sql-test-08",
    "question": "What is the main difference between a primary key and a unique key when considering clustered indexes?",
    "options": [
      "Primary key defaults to clustered index in SQL Server; unique key defaults to non-clustered",
      "They are exactly the same",
      "Unique key cannot be used as a foreign key",
      "Primary key allows NULL, unique key does not"
    ],
    "correctOption": 0,
    "explanation": "In SQL Server, by default, the PRIMARY KEY creates a clustered index (if not specified otherwise), while a UNIQUE constraint creates a non-clustered index."
  },
  {
    "testId": "sql-test-08",
    "question": "Which of the following is an advanced technique to improve query performance in large data warehouses?",
    "options": [
      "Using columnar storage and partitioning",
      "Using more indexes",
      "Using triggers",
      "Using views"
    ],
    "correctOption": 0,
    "explanation": "In data warehouses, columnar storage, partitioning, and bitmap indexes are advanced techniques used to handle massive datasets efficiently."
  },
  {
    "testId": "sql-test-08",
    "question": "What is the concept of 'SQL injection' and how does parameterization help?",
    "options": [
      "SQL injection is an attack where malicious SQL is inserted; parameterized queries prevent it by separating code from data",
      "SQL injection is a performance issue; parameterization fixes it",
      "SQL injection is a backup method",
      "SQL injection is a type of join"
    ],
    "correctOption": 0,
    "explanation": "SQL injection is a security vulnerability. Parameterized queries (or prepared statements) ensure that input is treated as data, not executable code, preventing injection attacks."
  },
  {
    "testId": "sql-test-08",
    "question": "What does the 'GREATEST' function do?",
    "options": [
      "Returns the largest value from a list of expressions",
      "Returns the smallest value",
      "Returns the average",
      "Returns the mode"
    ],
    "correctOption": 0,
    "explanation": "GREATEST (and LEAST) are functions that return the maximum (or minimum) value from a list of arguments. They are supported in PostgreSQL and MySQL."
  },
  
  // Test 7
  {
    "testId": "sql-test-07",
    "question": "What is a view in SQL?",
    "options": [
      "A physical copy of a table",
      "A virtual table based on the result of a SELECT query",
      "A stored procedure",
      "A type of index"
    ],
    "correctOption": 1,
    "explanation": "A view is a virtual table that does not store data itself. It presents data from one or more tables based on a SELECT statement."
  },
  {
    "testId": "sql-test-07",
    "question": "Which command is used to create a view?",
    "options": ["CREATE VIEW", "MAKE VIEW", "NEW VIEW", "CREATE TABLE AS"],
    "correctOption": 0,
    "explanation": "CREATE VIEW view_name AS SELECT ... is the standard syntax for creating a view."
  },
  {
    "testId": "sql-test-07",
    "question": "What is the purpose of an index in a database?",
    "options": [
      "To enforce referential integrity",
      "To speed up data retrieval (SELECT queries)",
      "To store large objects",
      "To back up data"
    ],
    "correctOption": 1,
    "explanation": "An index is a data structure that improves the speed of data retrieval operations on a table at the cost of additional storage and slower writes."
  },
  {
    "testId": "sql-test-07",
    "question": "Which command is used to create an index on a table?",
    "options": ["CREATE INDEX", "MAKE INDEX", "ADD INDEX", "ALTER INDEX"],
    "correctOption": 0,
    "explanation": "CREATE INDEX index_name ON table(column) is the standard SQL syntax for creating an index."
  },
  {
    "testId": "sql-test-07",
    "question": "Can you update data through a view?",
    "options": [
      "Yes, always",
      "No, never",
      "Yes, but only if the view is updatable (no aggregations, joins, etc.)",
      "Only in MySQL"
    ],
    "correctOption": 2,
    "explanation": "A view is updatable if it maps directly to a single base table without aggregates, joins, or DISTINCT. Not all views are updatable."
  },
  {
    "testId": "sql-test-07",
    "question": "What is a materialized view?",
    "options": [
      "A view that stores the query result physically on disk",
      "A view that exists only in memory",
      "A view that cannot be indexed",
      "A view that is automatically deleted"
    ],
    "correctOption": 0,
    "explanation": "A materialized view physically stores the result of the query. It can be refreshed periodically, improving read performance for complex queries."
  },
  {
    "testId": "sql-test-07",
    "question": "Which type of index is most commonly used and stores data in a balanced tree structure?",
    "options": ["Bitmap index", "Hash index", "B-Tree index", "Full-text index"],
    "correctOption": 2,
    "explanation": "B-Tree (balanced tree) indexes are the default and most common index type in databases like PostgreSQL, MySQL, and SQL Server."
  },
  {
    "testId": "sql-test-07",
    "question": "What is a composite index?",
    "options": [
      "An index on multiple columns",
      "An index on a single column",
      "An index that combines two tables",
      "An index that is compressed"
    ],
    "correctOption": 0,
    "explanation": "A composite index (or multi-column index) is an index defined on two or more columns of a table."
  },
  {
    "testId": "sql-test-07",
    "question": "What is the downside of creating too many indexes on a table?",
    "options": [
      "SELECT queries become slower",
      "INSERT, UPDATE, and DELETE operations become slower",
      "They consume no space",
      "There is no downside"
    ],
    "correctOption": 1,
    "explanation": "Indexes improve read performance but slow down write operations (INSERT, UPDATE, DELETE) because the index must be updated alongside the data."
  },
  {
    "testId": "sql-test-07",
    "question": "What does the EXPLAIN command do?",
    "options": [
      "It executes the query",
      "It shows the execution plan of a query (how indexes are used)",
      "It explains the table structure",
      "It creates a view"
    ],
    "correctOption": 1,
    "explanation": "EXPLAIN (or EXPLAIN ANALYZE) displays the execution plan that the query optimizer uses, helping identify performance bottlenecks."
  },
  {
    "testId": "sql-test-07",
    "question": "What is the advantage of using a view instead of writing the same query repeatedly?",
    "options": [
      "Views improve performance automatically",
      "Views simplify complex queries and provide security by restricting columns",
      "Views create indexes automatically",
      "Views are faster than tables"
    ],
    "correctOption": 1,
    "explanation": "Views abstract complexity and can restrict access to sensitive columns, enhancing security and simplifying application development."
  },
  {
    "testId": "sql-test-07",
    "question": "Can you create an index on a view?",
    "options": ["Yes", "No", "Only on materialized views", "Only on simple views"],
    "correctOption": 2,
    "explanation": "You can create indexes on materialized views (called indexed views in SQL Server) to improve performance. Regular views are virtual and cannot be indexed."
  },
  {
    "testId": "sql-test-07",
    "question": "Which of the following queries would benefit most from an index on 'last_name'?",
    "options": [
      "SELECT * FROM users WHERE last_name = 'Smith'",
      "SELECT * FROM users WHERE age > 30",
      "SELECT * FROM users ORDER BY signup_date",
      "SELECT COUNT(*) FROM users"
    ],
    "correctOption": 0,
    "explanation": "An index on last_name would significantly speed up equality lookups (WHERE last_name = 'Smith')."
  },
  {
    "testId": "sql-test-07",
    "question": "What is a bitmap index best suited for?",
    "options": [
      "Columns with high cardinality (many unique values)",
      "Columns with low cardinality (few unique values, e.g., gender)",
      "Text columns",
      "Primary key columns"
    ],
    "correctOption": 1,
    "explanation": "Bitmap indexes are efficient for columns with low cardinality (e.g., gender, status) and are commonly used in data warehousing."
  },
  {
    "testId": "sql-test-07",
    "question": "What does the 'WITH CHECK OPTION' clause do in a view?",
    "options": [
      "It prevents updates that would exclude the row from the view",
      "It checks syntax errors",
      "It creates a check constraint on the base table",
      "It allows updates without restrictions"
    ],
    "correctOption": 0,
    "explanation": "WITH CHECK OPTION ensures that any rows updated or inserted through the view satisfy the view's WHERE condition, preventing the row from disappearing from the view."
  },
  {
    "testId": "sql-test-07",
    "question": "What is query optimization?",
    "options": [
      "The process of writing shorter queries",
      "The process of improving query performance by choosing efficient execution plans",
      "The process of encrypting queries",
      "The process of deleting old data"
    ],
    "correctOption": 1,
    "explanation": "Query optimization involves analyzing and rewriting queries or indexing strategies to reduce execution time and resource usage."
  },
  {
    "testId": "sql-test-07",
    "question": "When you drop a table, what happens to its indexes?",
    "options": [
      "They are dropped automatically",
      "They remain in the database",
      "They are moved to another table",
      "They become invalid but remain"
    ],
    "correctOption": 0,
    "explanation": "When a table is dropped, all associated indexes, constraints, and triggers are also automatically dropped."
  },
  {
    "testId": "sql-test-07",
    "question": "What is a covering index?",
    "options": [
      "An index that covers all columns needed by a query, avoiding table access",
      "An index that covers the entire table",
      "An index that is hidden from the user",
      "An index that is used only for sorting"
    ],
    "correctOption": 0,
    "explanation": "A covering index includes all the columns required by a query. The database can satisfy the query entirely from the index without reading the table data."
  },
  {
    "testId": "sql-test-07",
    "question": "Which statement is true about views and security?",
    "options": [
      "Views can be used to restrict access to sensitive columns or rows",
      "Views provide no security benefits",
      "Views are slower than direct table access",
      "Views cannot be granted permissions"
    ],
    "correctOption": 0,
    "explanation": "Views can grant users access to specific subsets of data (e.g., employees can see their own records only) without granting table-level permissions."
  },
  {
    "testId": "sql-test-07",
    "question": "What is a full table scan?",
    "options": [
      "Reading the entire table row by row to find data (slow)",
      "Scanning only the first page of the table",
      "Using an index to find data",
      "Reading only the metadata"
    ],
    "correctOption": 0,
    "explanation": "A full table scan occurs when the database reads every row in a table to satisfy a query. This is usually inefficient for large tables."
  },
  {
    "testId": "sql-test-07",
    "question": "When should you avoid creating an index on a column?",
    "options": [
      "When the column is frequently used in WHERE clauses",
      "When the table is very small (few rows)",
      "When the column is used in JOINs",
      "Always create an index"
    ],
    "correctOption": 1,
    "explanation": "Indexes on very small tables or tables with frequent bulk inserts/updates may not be worth the overhead. For small tables, full scans are fast enough."
  },
  {
    "testId": "sql-test-07",
    "question": "What is the difference between a clustered and a non-clustered index?",
    "options": [
      "Clustered index defines the physical order of data; non-clustered does not",
      "Non-clustered index defines the physical order",
      "Both define physical order",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "A clustered index determines the physical order of rows in the table. A non-clustered index is a separate structure that points to the data rows."
  },
  {
    "testId": "sql-test-07",
    "question": "In SQL Server, how many clustered indexes can a table have?",
    "options": ["0", "1", "2", "Multiple"],
    "correctOption": 1,
    "explanation": "A table can have only one clustered index because the data rows themselves can only be sorted in one physical order."
  },
  {
    "testId": "sql-test-07",
    "question": "What is the main benefit of partitioning a table?",
    "options": [
      "To improve query performance by splitting data into smaller pieces",
      "To enforce foreign keys",
      "To create views",
      "To store data in different databases"
    ],
    "correctOption": 0,
    "explanation": "Partitioning divides a large table into smaller, manageable pieces (partitions) which can improve query performance and maintenance."
  },
  {
    "testId": "sql-test-07",
    "question": "Can you rename a view?",
    "options": ["Yes, using ALTER VIEW", "Yes, using RENAME or sp_rename", "No", "Only by dropping and recreating"],
    "correctOption": 1,
    "explanation": "You can rename a view using specific syntax (e.g., ALTER VIEW ... RENAME in PostgreSQL, or sp_rename in SQL Server)."
  },
  {
    "testId": "sql-test-07",
    "question": "What is a unique index?",
    "options": [
      "An index that allows duplicate values",
      "An index that ensures all values in the indexed column are unique",
      "An index that is created automatically with a primary key",
      "Both B and C are true"
    ],
    "correctOption": 3,
    "explanation": "A unique index ensures no duplicate values. It is automatically created for PRIMARY KEY and UNIQUE constraints."
  },
  {
    "testId": "sql-test-07",
    "question": "Which of the following is NOT a benefit of using indexes?",
    "options": [
      "Faster SELECT queries",
      "Faster INSERT operations",
      "Improved data retrieval performance",
      "Enforcing uniqueness"
    ],
    "correctOption": 1,
    "explanation": "Indexes slow down INSERT, UPDATE, and DELETE operations because the index must be maintained. They benefit SELECT queries, not writes."
  },
  {
    "testId": "sql-test-07",
    "question": "What does the ANALYZE command do?",
    "options": [
      "It collects statistics about table data for the query optimizer",
      "It executes the query",
      "It creates an index",
      "It deletes old data"
    ],
    "correctOption": 0,
    "explanation": "ANALYZE (or similar commands) updates statistics about the distribution of data in tables, helping the optimizer make better decisions."
  },
  {
    "testId": "sql-test-07",
    "question": "What is the purpose of a hash index?",
    "options": [
      "For equality comparisons (=), very fast, but not for range queries",
      "For range queries (<, >)",
      "For text searching",
      "For sorting data"
    ],
    "correctOption": 0,
    "explanation": "Hash indexes use a hash table to map keys to values. They are extremely fast for exact match lookups but cannot be used for range queries."
  },
  {
    "testId": "sql-test-07",
    "question": "Can a view be based on another view?",
    "options": ["Yes", "No", "Only if it is materialized", "Only in Oracle"],
    "correctOption": 0,
    "explanation": "You can create views on top of other views (nested views), though performance may degrade if nesting is excessive."
  },
  {
    "testId": "sql-test-07",
    "question": "What is the advantage of using a stored procedure over a view?",
    "options": [
      "A procedure can accept parameters and contain complex logic",
      "A procedure can be indexed",
      "A procedure is always faster",
      "A procedure does not require permissions"
    ],
    "correctOption": 0,
    "explanation": "Stored procedures are more powerful than views; they can accept parameters, perform complex logic, and control transactions."
  },
  {
    "testId": "sql-test-07",
    "question": "What is a function-based index?",
    "options": [
      "An index on the result of a function or expression",
      "An index that calls a function",
      "An index that is only used by functions",
      "An index on a function name"
    ],
    "correctOption": 0,
    "explanation": "A function-based index uses an expression or function (e.g., UPPER(column)) to create the index, useful for queries that transform columns."
  },
  {
    "testId": "sql-test-07",
    "question": "What should you do if a query is running slowly on a large table?",
    "options": [
      "Add indexes on columns used in WHERE/JOIN",
      "Rewrite the query to avoid functions on indexed columns",
      "Update statistics",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Tuning a slow query involves checking execution plans, adding appropriate indexes, rewriting inefficient parts, and ensuring statistics are up to date."
  },
  {
    "testId": "sql-test-07",
    "question": "What is the 'INCLUDE' clause in a non-clustered index (SQL Server)?",
    "options": [
      "It includes additional columns at the leaf level to make it a covering index",
      "It includes the primary key",
      "It includes a WHERE clause",
      "It includes a foreign key"
    ],
    "correctOption": 0,
    "explanation": "In SQL Server, the INCLUDE clause adds non-key columns to the leaf level of a non-clustered index, making it a covering index for more queries."
  },
  {
    "testId": "sql-test-07",
    "question": "Can an index be created on a temporary table?",
    "options": ["Yes", "No", "Only in SQL Server", "Only in PostgreSQL"],
    "correctOption": 0,
    "explanation": "Yes, you can create indexes on temporary tables to improve performance during complex operations."
  },
  {
    "testId": "sql-test-07",
    "question": "What is a partial index (or filtered index)?",
    "options": [
      "An index on a subset of rows that satisfy a WHERE condition",
      "An index on only one column",
      "An index that is partially built",
      "An index that is never used"
    ],
    "correctOption": 0,
    "explanation": "A partial index (filtered index in SQL Server) is an index defined on a subset of rows, specified by a WHERE clause, saving space and improving performance for specific queries."
  },
  {
    "testId": "sql-test-07",
    "question": "When you create a view with 'SELECT *', what happens if the underlying table schema changes?",
    "options": [
      "The view automatically reflects the new schema",
      "The view becomes invalid until recompiled, and may need to be recreated",
      "The view drops",
      "The view keeps the old structure"
    ],
    "correctOption": 1,
    "explanation": "Using SELECT * in a view is risky. If columns are added, the view may not include them (depending on DB). If columns are dropped, the view may become invalid."
  },
  {
    "testId": "sql-test-07",
    "question": "What does an 'EXPLAIN ANALYZE' command do that 'EXPLAIN' does not?",
    "options": [
      "It actually executes the query and shows actual runtime statistics",
      "It creates an index",
      "It modifies the query",
      "It shows only the syntax tree"
    ],
    "correctOption": 0,
    "explanation": "EXPLAIN ANALYZE (in PostgreSQL) executes the query and returns actual execution times and row counts alongside the plan, providing more accurate tuning data."
  },
  {
    "testId": "sql-test-07",
    "question": "What is the main difference between a view and a table?",
    "options": [
      "A view does not store data physically, a table does",
      "A table does not store data, a view does",
      "Both store data",
      "Views are always faster"
    ],
    "correctOption": 0,
    "explanation": "A table is a physical structure that stores data persistently. A view is a virtual table derived from a query, storing only the definition."
  },
  
  // Test 6
  {
    "testId": "sql-test-06",
    "question": "Which SQL statement is used to add a new row to a table?",
    "options": ["ADD", "INSERT", "UPDATE", "CREATE"],
    "correctOption": 1,
    "explanation": "INSERT INTO is used to add new rows (records) to a table."
  },
  {
    "testId": "sql-test-06",
    "question": "What does the UPDATE statement do?",
    "options": [
      "It deletes rows from a table",
      "It modifies existing data in a table",
      "It creates a new table",
      "It adds a new column"
    ],
    "correctOption": 1,
    "explanation": "UPDATE is a DML command used to modify existing records in a table based on a condition."
  },
  {
    "testId": "sql-test-06",
    "question": "Which constraint ensures that all values in a column are different?",
    "options": ["PRIMARY KEY", "UNIQUE", "NOT NULL", "FOREIGN KEY"],
    "correctOption": 1,
    "explanation": "The UNIQUE constraint ensures that all values in a column are distinct (no duplicates). PRIMARY KEY also ensures uniqueness but allows only one per table."
  },
  {
    "testId": "sql-test-06",
    "question": "What is the difference between DELETE and TRUNCATE?",
    "options": [
      "DELETE can rollback, TRUNCATE cannot in some databases",
      "DELETE removes rows based on conditions, TRUNCATE removes all rows",
      "TRUNCATE resets identity columns, DELETE does not",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "DELETE is DML (can have WHERE, can be rolled back). TRUNCATE is DDL (removes all rows, resets auto-increment, and often cannot be rolled back in some DBs)."
  },
  {
    "testId": "sql-test-06",
    "question": "What is a foreign key constraint used for?",
    "options": [
      "To automatically increment a column",
      "To enforce referential integrity between two tables",
      "To ensure a column has unique values",
      "To delete a column"
    ],
    "correctOption": 1,
    "explanation": "A FOREIGN KEY constraint ensures that values in a column match values in the primary key of another table, maintaining referential integrity."
  },
  {
    "testId": "sql-test-06",
    "question": "Which statement is used to change the structure of an existing table (e.g., add a column)?",
    "options": ["MODIFY", "ALTER", "CHANGE", "UPDATE"],
    "correctOption": 1,
    "explanation": "ALTER TABLE is used to modify the table structure, such as adding, dropping, or modifying columns and constraints."
  },
  {
    "testId": "sql-test-06",
    "question": "What does the ON DELETE CASCADE option do?",
    "options": [
      "Deletes the foreign key column",
      "Automatically deletes referencing rows in the child table when a parent row is deleted",
      "Prevents deletion of parent rows",
      "Cascades the update to child rows"
    ],
    "correctOption": 1,
    "explanation": "ON DELETE CASCADE ensures that when a row in the parent table is deleted, all related rows in the child table are automatically deleted."
  },
  {
    "testId": "sql-test-06",
    "question": "Which constraint is used to ensure a column contains only values that meet a specific condition?",
    "options": ["CHECK", "UNIQUE", "NOT NULL", "DEFAULT"],
    "correctOption": 0,
    "explanation": "CHECK constraint is used to validate data. Example: CHECK (age >= 18) ensures age is not less than 18."
  },
  {
    "testId": "sql-test-06",
    "question": "What is the purpose of the DEFAULT constraint?",
    "options": [
      "To set a default value for a column when no value is provided",
      "To make a column mandatory",
      "To index the column",
      "To rename the column"
    ],
    "correctOption": 0,
    "explanation": "DEFAULT provides a default value for a column if the INSERT statement does not specify a value."
  },
  {
    "testId": "sql-test-06",
    "question": "What will happen if you try to insert a NULL into a column defined with NOT NULL?",
    "options": ["The NULL is inserted", "An error occurs", "The default value is used", "The row is skipped"],
    "correctOption": 1,
    "explanation": "A NOT NULL constraint prevents NULL values. Attempting to insert NULL will raise a constraint violation error."
  },
  {
    "testId": "sql-test-06",
    "question": "Which SQL command is used to permanently save all transactions to the database?",
    "options": ["SAVE", "COMMIT", "ROLLBACK", "CHECKPOINT"],
    "correctOption": 1,
    "explanation": "COMMIT is used to end a transaction and make all changes permanent in the database."
  },
  {
    "testId": "sql-test-06",
    "question": "What is a transaction in SQL?",
    "options": [
      "A single SELECT statement",
      "A sequence of SQL operations treated as a single logical unit of work",
      "A table that stores transaction logs",
      "A type of join"
    ],
    "correctOption": 1,
    "explanation": "A transaction is a sequence of one or more SQL operations executed as a single unit. It follows ACID properties."
  },
  {
    "testId": "sql-test-06",
    "question": "Which command reverses all changes made in the current transaction?",
    "options": ["COMMIT", "UNDO", "ROLLBACK", "REVERT"],
    "correctOption": 2,
    "explanation": "ROLLBACK undoes all changes made in the current transaction, returning to the previous state."
  },
  {
    "testId": "sql-test-06",
    "question": "Can you DELETE a row that is referenced by a FOREIGN KEY in another table without CASCADE?",
    "options": ["Yes", "No, it will violate referential integrity", "Only if the foreign key is NULL", "Only in MySQL"],
    "correctOption": 1,
    "explanation": "If a row is referenced by a foreign key and no CASCADE is defined, the DELETE will fail to maintain referential integrity."
  },
  {
    "testId": "sql-test-06",
    "question": "What is the function of the SAVEPOINT command?",
    "options": [
      "To commit a transaction",
      "To set a point within a transaction to which you can later roll back",
      "To save the entire database",
      "To create a backup"
    ],
    "correctOption": 1,
    "explanation": "SAVEPOINT defines a marker within a transaction, allowing you to roll back only to that specific point instead of the entire transaction."
  },
  {
    "testId": "sql-test-06",
    "question": "What will 'TRUNCATE TABLE employees' do to the table's auto-increment counter?",
    "options": ["Resets it to the starting value", "Keeps the current value", "Sets it to NULL", "Drops the identity column"],
    "correctOption": 0,
    "explanation": "In most databases (MySQL, SQL Server), TRUNCATE resets the auto-increment counter. DELETE does not reset it."
  },
  {
    "testId": "sql-test-06",
    "question": "Which statement is used to add a PRIMARY KEY to an existing table?",
    "options": [
      "ALTER TABLE ADD PRIMARY KEY",
      "CREATE INDEX",
      "MODIFY PRIMARY KEY",
      "ADD CONSTRAINT PRIMARY KEY"
    ],
    "correctOption": 0,
    "explanation": "You can add a primary key to an existing table using ALTER TABLE ADD PRIMARY KEY (or ADD CONSTRAINT ... PRIMARY KEY)."
  },
  {
    "testId": "sql-test-06",
    "question": "What is the result of DROP TABLE?",
    "options": [
      "It removes the table structure and data",
      "It removes only the data, keeping the structure",
      "It truncates the table",
      "It removes the indexes but keeps the data"
    ],
    "correctOption": 0,
    "explanation": "DROP TABLE permanently removes the table definition, all rows, and indexes from the database. It cannot be rolled back easily."
  },
  {
    "testId": "sql-test-06",
    "question": "What is a composite key?",
    "options": [
      "A key that contains two or more columns",
      "A key that references two tables",
      "A key that contains unique values",
      "A key that is automatically generated"
    ],
    "correctOption": 0,
    "explanation": "A composite key (or composite primary key) is a primary key that consists of multiple columns to uniquely identify a row."
  },
  {
    "testId": "sql-test-06",
    "question": "Can you have multiple UNIQUE constraints on a single table?",
    "options": ["Yes", "No", "Only one per table", "Only if they are indexed"],
    "correctOption": 0,
    "explanation": "You can have multiple UNIQUE constraints on different columns or combinations of columns in a single table."
  },
  {
    "testId": "sql-test-06",
    "question": "What is the purpose of the 'INSERT INTO ... SELECT' statement?",
    "options": [
      "To insert data from one table into another",
      "To update data from one table to another",
      "To select data only",
      "To create a new table"
    ],
    "correctOption": 0,
    "explanation": "INSERT INTO ... SELECT copies data from one table (or subquery) and inserts it into another table."
  },
  {
    "testId": "sql-test-06",
    "question": "What does the 'REPLACE' statement do in MySQL?",
    "options": [
      "It is a synonym for UPDATE",
      "It inserts a new row, or updates/deletes and re-inserts if a duplicate key is found",
      "It replaces the table name",
      "It replaces a column's data type"
    ],
    "correctOption": 1,
    "explanation": "In MySQL, REPLACE works like INSERT, but if a duplicate unique key is found, it deletes the old row and inserts the new one."
  },
  {
    "testId": "sql-test-06",
    "question": "Which command can be used to rename a column in an existing table?",
    "options": ["ALTER TABLE RENAME COLUMN", "RENAME COLUMN", "MODIFY", "Both ALTER TABLE RENAME and specific syntax depending on DB"],
    "correctOption": 3,
    "explanation": "Standard SQL supports ALTER TABLE RENAME COLUMN, but syntax varies. SQL Server uses SP_RENAME, PostgreSQL/MySQL use ALTER TABLE ... RENAME COLUMN."
  },
  {
    "testId": "sql-test-06",
    "question": "What is a surrogate key?",
    "options": [
      "A key generated by the system (e.g., auto-increment) that has no business meaning",
      "A foreign key referencing another table",
      "A natural key like SSN",
      "A composite key"
    ],
    "correctOption": 0,
    "explanation": "A surrogate key is an artificially generated unique identifier (like an auto-increment ID) with no intrinsic business meaning, used for database convenience."
  },
  {
    "testId": "sql-test-06",
    "question": "What happens during a ROLLBACK after an UPDATE?",
    "options": [
      "The update is made permanent",
      "The update is undone, and data reverts to the state before the transaction",
      "The table is locked",
      "The update is delayed"
    ],
    "correctOption": 1,
    "explanation": "ROLLBACK reverses all changes made in the current transaction, restoring the data to its previous state."
  },
  {
    "testId": "sql-test-06",
    "question": "Which constraint ensures that a column does not contain duplicate values, but allows multiple NULLs?",
    "options": ["PRIMARY KEY", "UNIQUE", "NOT NULL", "FOREIGN KEY"],
    "correctOption": 1,
    "explanation": "The UNIQUE constraint allows multiple NULL values (in most DBs) but prevents duplicates for non-NULL values. PRIMARY KEY does not allow NULLs."
  },
  {
    "testId": "sql-test-06",
    "question": "What is the difference between 'DROP' and 'TRUNCATE'?",
    "options": [
      "DROP deletes the table structure, TRUNCATE keeps it",
      "DROP keeps the structure, TRUNCATE deletes it",
      "Both delete the structure",
      "Both keep the structure"
    ],
    "correctOption": 0,
    "explanation": "DROP removes the entire table (structure + data). TRUNCATE removes all data but keeps the table structure (and usually resets auto-increment)."
  },
  {
    "testId": "sql-test-06",
    "question": "In SQL Server, which command is used to change a column's data type?",
    "options": ["ALTER COLUMN", "MODIFY COLUMN", "CHANGE COLUMN", "RENAME COLUMN"],
    "correctOption": 0,
    "explanation": "In SQL Server, you use ALTER TABLE ... ALTER COLUMN to change the data type. MySQL uses MODIFY, PostgreSQL uses ALTER COLUMN ... TYPE."
  },
  {
    "testId": "sql-test-06",
    "question": "What does the 'WITH CHECK' option do when adding a foreign key?",
    "options": [
      "It checks existing data for violations before adding the constraint",
      "It ignores existing data",
      "It creates an index automatically",
      "It checks for duplicates only"
    ],
    "correctOption": 0,
    "explanation": "WITH CHECK ensures that existing data in the table satisfies the foreign key constraint before it is added, preventing errors."
  },
  {
    "testId": "sql-test-06",
    "question": "Can an UPDATE statement modify multiple tables at once?",
    "options": [
      "No",
      "Yes, using joins in the UPDATE syntax (e.g., UPDATE t1 JOIN t2 ...)",
      "Only in Oracle",
      "Only for scalar subqueries"
    ],
    "correctOption": 1,
    "explanation": "Many databases (MySQL, PostgreSQL, SQL Server) support updating multiple tables using JOIN syntax in the UPDATE statement."
  },
  {
    "testId": "sql-test-06",
    "question": "What is the purpose of an 'AUTO_INCREMENT' attribute?",
    "options": [
      "To automatically generate unique numeric values for a column when a new row is inserted",
      "To increment the version of the table",
      "To automatically update the timestamp",
      "To add 1 to all existing values"
    ],
    "correctOption": 0,
    "explanation": "AUTO_INCREMENT (or IDENTITY in SQL Server) automatically generates a unique sequential number for each new row, commonly used for primary keys."
  },
  {
    "testId": "sql-test-06",
    "question": "What is the 'MERGE' statement used for?",
    "options": [
      "To combine two tables into one",
      "To perform UPSERT (INSERT or UPDATE) based on a condition",
      "To delete duplicate rows",
      "To create a view"
    ],
    "correctOption": 1,
    "explanation": "The MERGE statement (also called UPSERT) allows you to perform INSERT, UPDATE, or DELETE operations in a single statement based on a source and target table."
  },
  {
    "testId": "sql-test-06",
    "question": "If you have a foreign key constraint with ON DELETE SET NULL, what happens when the parent row is deleted?",
    "options": [
      "The child rows are also deleted",
      "The foreign key column in child rows is set to NULL",
      "An error occurs",
      "The child rows are moved to another table"
    ],
    "correctOption": 1,
    "explanation": "ON DELETE SET NULL sets the foreign key column to NULL in the child table when the referenced parent row is deleted."
  },
  {
    "testId": "sql-test-06",
    "question": "What is the main reason to use constraints in a database?",
    "options": [
      "To ensure data integrity and enforce business rules",
      "To make queries run faster",
      "To reduce storage space",
      "To encrypt data"
    ],
    "correctOption": 0,
    "explanation": "Constraints enforce rules at the database level to maintain data integrity, accuracy, and reliability."
  },
  {
    "testId": "sql-test-06",
    "question": "Which statement is used to remove a constraint from a table?",
    "options": ["DROP CONSTRAINT", "ALTER TABLE DROP", "DELETE CONSTRAINT", "REMOVE CONSTRAINT"],
    "correctOption": 0,
    "explanation": "You use ALTER TABLE ... DROP CONSTRAINT to remove a constraint (e.g., DROP PRIMARY KEY, DROP FOREIGN KEY)."
  },
  
  // Test 5
  {
    "testId": "sql-test-05",
    "question": "What is a subquery?",
    "options": ["A query inside another query", "A query that runs after the main query", "A query without a FROM clause", "A query that creates a table"],
    "correctOption": 0,
    "explanation": "A subquery (or inner query) is a query nested within another SQL query (SELECT, INSERT, UPDATE, DELETE)."
  },
  {
    "testId": "sql-test-05",
    "question": "In which part of a SELECT statement can a subquery be placed?",
    "options": ["SELECT list", "FROM clause", "WHERE clause", "All of the above"],
    "correctOption": 3,
    "explanation": "Subqueries can be used in SELECT (as a column), FROM (as a derived table), WHERE, HAVING, and even JOIN conditions."
  },
  {
    "testId": "sql-test-05",
    "question": "What is a correlated subquery?",
    "options": [
      "A subquery that references columns from the outer query",
      "A subquery that returns multiple rows",
      "A subquery that is executed once",
      "A subquery that uses the UNION operator"
    ],
    "correctOption": 0,
    "explanation": "In a correlated subquery, the inner query depends on the outer query for its values. It is executed repeatedly for each row of the outer query."
  },
  {
    "testId": "sql-test-05",
    "question": "Which operator is used to check if a subquery returns any rows?",
    "options": ["IN", "EXISTS", "ANY", "ALL"],
    "correctOption": 1,
    "explanation": "EXISTS returns TRUE if the subquery returns at least one row. It is a boolean operator."
  },
  {
    "testId": "sql-test-05",
    "question": "What will 'WHERE salary > (SELECT AVG(salary) FROM employees)' return?",
    "options": [
      "Employees with salary greater than average",
      "Employees with salary less than average",
      "All employees",
      "No employees"
    ],
    "correctOption": 0,
    "explanation": "The subquery calculates the average salary. The outer query compares each salary against this average and returns those greater than it."
  },
  {
    "testId": "sql-test-05",
    "question": "If a subquery returns multiple rows, which operator can be used with it?",
    "options": ["=", ">", "IN", "ALL OF THE ABOVE"],
    "correctOption": 2,
    "explanation": "The '=' operator expects a single value. If the subquery returns multiple rows, you must use IN, ANY, ALL, or EXISTS."
  },
  {
    "testId": "sql-test-05",
    "question": "What is the difference between IN and EXISTS?",
    "options": [
      "IN checks for values, EXISTS checks for existence; performance may differ",
      "Both are exactly the same",
      "IN is faster in all cases",
      "EXISTS cannot be used with subqueries"
    ],
    "correctOption": 0,
    "explanation": "IN checks if a value matches any value in a list/subquery. EXISTS checks if any rows exist. Performance varies by DB and data size."
  },
  {
    "testId": "sql-test-05",
    "question": "What is a scalar subquery?",
    "options": [
      "A subquery that returns exactly one row and one column",
      "A subquery that returns multiple rows",
      "A subquery that returns multiple columns",
      "A subquery that returns no rows"
    ],
    "correctOption": 0,
    "explanation": "A scalar subquery returns a single value (one row, one column). It can be used anywhere a single value is expected, like in the SELECT list or WHERE clause with =."
  },
  {
    "testId": "sql-test-05",
    "question": "Which keyword is used to test if a value is greater than every value in a subquery result?",
    "options": ["ANY", "SOME", "ALL", "EXISTS"],
    "correctOption": 2,
    "explanation": "The ALL operator compares a value to every value returned by the subquery. The condition must be true for all values."
  },
  {
    "testId": "sql-test-05",
    "question": "What happens if a scalar subquery returns no rows?",
    "options": ["It returns NULL", "It throws an error", "It returns 0", "It returns an empty string"],
    "correctOption": 0,
    "explanation": "If a scalar subquery returns no rows, the result is NULL. This can affect comparisons, making the outer condition unknown."
  },
  {
    "testId": "sql-test-05",
    "question": "How can you use a subquery in the FROM clause?",
    "options": [
      "By wrapping it in parentheses and giving it an alias",
      "By using the AS keyword only",
      "It is not possible",
      "By using the WITH clause"
    ],
    "correctOption": 0,
    "explanation": "A subquery in FROM is called a derived table. It must be enclosed in parentheses and given an alias (e.g., FROM (SELECT ...) AS t)."
  },
  {
    "testId": "sql-test-05",
    "question": "Which of the following is a non-correlated subquery?",
    "options": [
      "SELECT * FROM t1 WHERE id IN (SELECT id FROM t2)",
      "SELECT * FROM t1 WHERE EXISTS (SELECT 1 FROM t2 WHERE t1.id = t2.id)",
      "SELECT (SELECT name FROM t2 WHERE t2.id = t1.id) FROM t1",
      "None of the above"
    ],
    "correctOption": 0,
    "explanation": "Option A is non-correlated because the inner query (SELECT id FROM t2) does not depend on the outer t1. The others are correlated."
  },
  {
    "testId": "sql-test-05",
    "question": "What does the ANY operator do?",
    "options": [
      "Returns TRUE if the condition is true for any value in the subquery result",
      "Returns TRUE if the condition is true for all values",
      "Returns TRUE if the subquery is empty",
      "Returns the minimum value"
    ],
    "correctOption": 0,
    "explanation": "The ANY operator returns TRUE if the comparison is true for at least one value returned by the subquery. (SOME is a synonym for ANY)."
  },
  {
    "testId": "sql-test-05",
    "question": "Which clause is used to define a Common Table Expression (CTE) which is like a named subquery?",
    "options": ["WITH", "AS", "CTE", "SUBQUERY"],
    "correctOption": 0,
    "explanation": "The WITH clause is used to define CTEs. Example: WITH cte AS (SELECT ...) SELECT * FROM cte;"
  },
  {
    "testId": "sql-test-05",
    "question": "Can you perform a JOIN between a table and a subquery?",
    "options": ["Yes, by using the subquery in the FROM clause with an alias", "No", "Only if it is a scalar subquery", "Only in MySQL"],
    "correctOption": 0,
    "explanation": "You can join a table with a derived table (subquery in FROM) by giving it an alias and using it in the JOIN condition."
  },
  {
    "testId": "sql-test-05",
    "question": "Which is faster: IN with a large subquery or EXISTS with a correlated subquery?",
    "options": [
      "IN is always faster",
      "EXISTS is often faster for large datasets because it stops at the first match",
      "Both are exactly the same performance",
      "It depends solely on the database"
    ],
    "correctOption": 1,
    "explanation": "EXISTS often performs better in correlated scenarios because it can stop scanning the subquery as soon as a match is found, whereas IN may process all results."
  },
  {
    "testId": "sql-test-05",
    "question": "What will 'WHERE salary = (SELECT MAX(salary) FROM employees)' return?",
    "options": ["The highest paid employee(s)", "The lowest paid employee", "All employees", "No employees"],
    "correctOption": 0,
    "explanation": "The subquery returns the maximum salary. The outer query returns employees with that exact salary, giving you the highest paid employees."
  },
  {
    "testId": "sql-test-05",
    "question": "If you want to delete rows that exist in another table, what subquery approach is best?",
    "options": ["DELETE FROM t1 WHERE id IN (SELECT id FROM t2)", "DELETE FROM t1 WHERE EXISTS (SELECT 1 FROM t2 WHERE t1.id = t2.id)", "Both are valid", "Neither is valid"],
    "correctOption": 2,
    "explanation": "Both IN and EXISTS can be used with DELETE. EXISTS is often preferred for performance when deleting large sets."
  },
  {
    "testId": "sql-test-05",
    "question": "What is a nested subquery?",
    "options": [
      "A subquery inside another subquery",
      "A subquery that uses the NOT operator",
      "A subquery that is executed first",
      "A subquery without parentheses"
    ],
    "correctOption": 0,
    "explanation": "Nested subqueries are subqueries within subqueries. They are evaluated from the innermost to the outermost."
  },
  {
    "testId": "sql-test-05",
    "question": "Which of these cannot be used with a subquery?",
    "options": ["SELECT", "INSERT", "UPDATE", "None of the above (they all can use subqueries)"],
    "correctOption": 3,
    "explanation": "Subqueries can be used in SELECT, INSERT, UPDATE, and DELETE statements. They are very versatile."
  },
  {
    "testId": "sql-test-05",
    "question": "What is the output of a subquery that uses 'SELECT 1' in an EXISTS clause?",
    "options": ["Returns 1", "Returns TRUE if there are rows", "Returns FALSE if there are rows", "It will throw an error"],
    "correctOption": 1,
    "explanation": "EXISTS only cares about the presence of rows, not the actual values selected. SELECT 1 is a common dummy value."
  },
  {
    "testId": "sql-test-05",
    "question": "In a correlated subquery, the inner query is executed:",
    "options": ["Once for the entire outer query", "Once for each row of the outer query", "Never", "Only if the outer query returns rows"],
    "correctOption": 1,
    "explanation": "Correlated subqueries are evaluated row-by-row for the outer query, which is why they can be slower."
  },
  {
    "testId": "sql-test-05",
    "question": "What will the following query do? SELECT * FROM employees WHERE department_id NOT IN (SELECT department_id FROM departments);",
    "options": [
      "Find employees in departments that do not exist",
      "Find employees in existing departments",
      "Find all employees",
      "Return an error if subquery returns NULL"
    ],
    "correctOption": 0,
    "explanation": "It finds employees whose department_id is not present in the departments table (orphan records)."
  },
  {
    "testId": "sql-test-05",
    "question": "If the subquery in a NOT IN clause returns a NULL value, what happens?",
    "options": [
      "It works fine",
      "The NOT IN condition becomes UNKNOWN, and the query returns no rows",
      "It returns all rows",
      "It throws a syntax error"
    ],
    "correctOption": 1,
    "explanation": "In SQL, NULL comparisons with NOT IN can be tricky. If the subquery returns NULL, NOT IN evaluates to UNKNOWN, resulting in no rows returned."
  },
  {
    "testId": "sql-test-05",
    "question": "Which of the following is a valid use of a subquery in an UPDATE statement?",
    "options": [
      "UPDATE t1 SET col = (SELECT col FROM t2 WHERE t2.id = t1.id)",
      "UPDATE t1 SET col = (SELECT MAX(col) FROM t2)",
      "Both are valid",
      "Neither is valid"
    ],
    "correctOption": 2,
    "explanation": "You can set a column to a scalar subquery (correlated or non-correlated) in UPDATE statements."
  },
  {
    "testId": "sql-test-05",
    "question": "What is a 'derived table'?",
    "options": [
      "A table created by the CREATE TABLE statement",
      "A subquery used in the FROM clause",
      "A view",
      "A temporary table"
    ],
    "correctOption": 1,
    "explanation": "A derived table is an inline view, which is essentially a subquery in the FROM clause that acts as a table for the outer query."
  },
  {
    "testId": "sql-test-05",
    "question": "Which of these operators is used to compare a value to a list of values returned by a subquery?",
    "options": ["=", "LIKE", "IN", "BETWEEN"],
    "correctOption": 2,
    "explanation": "The IN operator checks if a value matches any value in the result set of a subquery."
  },
  {
    "testId": "sql-test-05",
    "question": "Can a subquery reference a column from a subquery at the same nesting level?",
    "options": ["Yes", "No", "Only in PostgreSQL", "Only if using aliases"],
    "correctOption": 1,
    "explanation": "A subquery can only reference columns from its immediate outer query (or higher). It cannot reference sibling subqueries."
  },
  {
    "testId": "sql-test-05",
    "question": "What is the primary use case for a correlated subquery?",
    "options": [
      "To return a static value",
      "To filter rows based on aggregated values from the same table or related table",
      "To join two unrelated tables",
      "To create a new table"
    ],
    "correctOption": 1,
    "explanation": "Correlated subqueries are often used to compare each row against aggregated data from the same table (e.g., find employees earning above dept average)."
  },
  {
    "testId": "sql-test-05",
    "question": "What does the LATERAL join (in PostgreSQL) allow?",
    "options": [
      "It allows a subquery in FROM to reference columns from preceding tables",
      "It allows joining with a lateral movement",
      "It is used for horizontal partitioning",
      "It is the same as a CROSS JOIN"
    ],
    "correctOption": 0,
    "explanation": "LATERAL allows a subquery to reference columns from tables that appear before it in the FROM clause, making it very powerful for row-dependent subqueries."
  },
  {
    "testId": "sql-test-05",
    "question": "What is the result of 'WHERE EXISTS (SELECT 1 FROM employees WHERE salary > 100000)'?",
    "options": [
      "Returns all rows if any employee has salary > 100000",
      "Returns only employees with salary > 100000",
      "Returns an error",
      "Returns no rows"
    ],
    "correctOption": 0,
    "explanation": "This subquery is not correlated. It returns TRUE if the table has at least one employee with salary > 100000. If TRUE, it returns all rows from the outer table."
  },
  {
    "testId": "sql-test-05",
    "question": "In SQL, how do you handle a subquery that returns multiple columns in the WHERE clause?",
    "options": [
      "By using IN with a tuple (col1, col2) IN (SELECT ...)",
      "It is not possible",
      "By using multiple WHERE conditions",
      "By using JOIN instead"
    ],
    "correctOption": 0,
    "explanation": "You can use row constructors: (col1, col2) IN (SELECT col1, col2 FROM ...). This is supported by PostgreSQL, MySQL, and others."
  },
  {
    "testId": "sql-test-05",
    "question": "What is the difference between a subquery and a CTE (Common Table Expression)?",
    "options": [
      "A CTE can be referenced multiple times and is defined before the main query using WITH",
      "A subquery is always faster",
      "There is no difference",
      "A CTE cannot be used in WHERE clause"
    ],
    "correctOption": 0,
    "explanation": "CTEs are defined using WITH and can be referenced multiple times in the main query. Subqueries are defined inline and cannot be reused easily."
  },
  {
    "testId": "sql-test-05",
    "question": "Which of the following subqueries will execute without an error?",
    "options": [
      "SELECT (SELECT COUNT(*) FROM departments) FROM employees",
      "SELECT (SELECT department_id FROM departments) FROM employees",
      "Both A and B will execute",
      "Neither will execute"
    ],
    "correctOption": 0,
    "explanation": "Option A is a scalar subquery returning one value (count), so it runs. Option B may return multiple department_ids, causing a 'subquery returns more than one row' error."
  },
  {
    "testId": "sql-test-05",
    "question": "What is the purpose of the 'WITH TIES' option in some databases?",
    "options": [
      "It is used with ORDER BY and FETCH to include rows that tie with the last row",
      "It is used to join tables",
      "It is used to create views",
      "It is a synonym for UNION"
    ],
    "correctOption": 0,
    "explanation": "WITH TIES (e.g., in SQL Server) is used with ORDER BY and FETCH to include additional rows that match the value of the last row fetched."
  },
  {
    "testId": "sql-test-05",
    "question": "If you use a subquery in the SELECT list, what must it return?",
    "options": ["A single value (scalar)", "Multiple rows", "Multiple columns", "Nothing"],
    "correctOption": 0,
    "explanation": "A subquery in the SELECT list must return exactly one column and at most one row (scalar), otherwise it will raise an error."
  },
  {
    "testId": "sql-test-05",
    "question": "Which of the following is true about using 'NOT EXISTS'?",
    "options": [
      "It returns TRUE if the subquery returns no rows",
      "It returns TRUE if the subquery returns rows",
      "It is used to negate the EXISTS condition",
      "Both A and C are true"
    ],
    "correctOption": 3,
    "explanation": "NOT EXISTS is the negation of EXISTS. It returns TRUE if the subquery returns zero rows."
  },
  {
    "testId": "sql-test-05",
    "question": "Can you use aggregate functions inside a subquery that is inside a WHERE clause?",
    "options": ["Yes", "No", "Only if the subquery is correlated", "Only if you use HAVING"],
    "correctOption": 0,
    "explanation": "Yes, you can use aggregates (e.g., MAX, AVG) in a subquery in the WHERE clause. This is very common."
  },
  {
    "testId": "sql-test-05",
    "question": "What is the output of 'SELECT * FROM employees WHERE EXISTS (SELECT 1 FROM employees WHERE 1=0)'?",
    "options": ["All employees", "No employees", "Error", "First employee"],
    "correctOption": 1,
    "explanation": "The subquery has 1=0 which is always false, so it returns no rows. EXISTS returns FALSE, so the outer query returns no rows."
  },
  
  // Test 4
  {
    "testId": "sql-test-04",
    "question": "Which clause is used to group rows that have the same values into summary rows?",
    "options": ["ORDER BY", "GROUP BY", "HAVING", "PARTITION BY"],
    "correctOption": 1,
    "explanation": "GROUP BY is used to arrange identical data into groups. Aggregate functions (COUNT, SUM, etc.) are used on these groups."
  },
  {
    "testId": "sql-test-04",
    "question": "What is the difference between WHERE and HAVING?",
    "options": [
      "WHERE filters rows, HAVING filters groups",
      "WHERE filters groups, HAVING filters rows",
      "Both do the same thing",
      "HAVING is used before GROUP BY"
    ],
    "correctOption": 0,
    "explanation": "WHERE filters individual rows before grouping. HAVING filters groups (rows produced by GROUP BY) using aggregate conditions."
  },
  {
    "testId": "sql-test-04",
    "question": "Which aggregate function returns the total sum of a numeric column?",
    "options": ["AVG", "COUNT", "SUM", "TOTAL"],
    "correctOption": 2,
    "explanation": "SUM() adds up all the values in a numeric column."
  },
  {
    "testId": "sql-test-04",
    "question": "How can you count the number of distinct values in a column?",
    "options": ["COUNT(column)", "COUNT(DISTINCT column)", "DISTINCT(column)", "UNIQUE(column)"],
    "correctOption": 1,
    "explanation": "COUNT(DISTINCT column_name) returns the number of unique non-NULL values in that column."
  },
  {
    "testId": "sql-test-04",
    "question": "What will AVG() return if all values in a column are NULL?",
    "options": ["0", "NULL", "Error", "1"],
    "correctOption": 1,
    "explanation": "Aggregate functions like AVG ignore NULL values. If there are no non-NULL values, AVG returns NULL."
  },
  {
    "testId": "sql-test-04",
    "question": "You want to find departments where the average salary is greater than 50000. Which clause should you use?",
    "options": ["WHERE AVG(salary) > 50000", "HAVING AVG(salary) > 50000", "GROUP BY AVG(salary) > 50000", "ORDER BY AVG(salary) > 50000"],
    "correctOption": 1,
    "explanation": "Since AVG(salary) is an aggregate, you cannot use it in WHERE. You must use HAVING after GROUP BY."
  },
  {
    "testId": "sql-test-04",
    "question": "What is the result of SELECT COUNT(*) FROM table_with_100_rows where 10 rows have NULL in one column?",
    "options": ["90", "100", "10", "NULL"],
    "correctOption": 1,
    "explanation": "COUNT(*) counts all rows regardless of NULLs. It will return 100."
  },
  {
    "testId": "sql-test-04",
    "question": "In a GROUP BY query, which columns can be placed in the SELECT clause?",
    "options": [
      "Only aggregate functions",
      "Only the columns used in GROUP BY and aggregate functions",
      "Any column from the table",
      "Only columns with unique values"
    ],
    "correctOption": 1,
    "explanation": "In standard SQL, any column in the SELECT list must either appear in the GROUP BY clause or be used inside an aggregate function."
  },
  {
    "testId": "sql-test-04",
    "question": "Which aggregate function gives the difference between the highest and lowest value in a column?",
    "options": ["RANGE()", "MAX() - MIN()", "VARIANCE()", "STDDEV()"],
    "correctOption": 1,
    "explanation": "The range is not a built-in aggregate function, but you can calculate it using MAX(column) - MIN(column)."
  },
  {
    "testId": "sql-test-04",
    "question": "What is the purpose of the GROUP BY clause with multiple columns?",
    "options": [
      "To filter data before grouping",
      "To group by a combination of columns (e.g., year and month)",
      "To sort data within groups",
      "To delete duplicate groups"
    ],
    "correctOption": 1,
    "explanation": "Grouping by multiple columns creates nested groups (e.g., GROUP BY year, month creates separate groups for each year-month combination)."
  },
  {
    "testId": "sql-test-04",
    "question": "If you use HAVING without GROUP BY, what happens?",
    "options": [
      "Syntax error",
      "It treats the whole table as a single group",
      "It applies to each row individually",
      "It ignores the HAVING clause"
    ],
    "correctOption": 1,
    "explanation": "If you omit GROUP BY, HAVING applies to the entire result set as a single group. This is valid but rarely used."
  },
  {
    "testId": "sql-test-04",
    "question": "Which SQL function is used to find the total number of rows in a result set?",
    "options": ["SUM()", "TOTAL()", "COUNT()", "ROWS()"],
    "correctOption": 2,
    "explanation": "COUNT() is the standard function to count rows."
  },
  {
    "testId": "sql-test-04",
    "question": "What is the output of SELECT COUNT(DISTINCT NULL) ?",
    "options": ["0", "1", "NULL", "Error"],
    "correctOption": 0,
    "explanation": "DISTINCT NULL is still NULL, but COUNT ignores NULLs. So COUNT(DISTINCT NULL) returns 0."
  },
  {
    "testId": "sql-test-04",
    "question": "Can you use a column alias defined in SELECT inside a GROUP BY clause in standard SQL?",
    "options": ["Yes", "No", "Only in MySQL", "Only in PostgreSQL"],
    "correctOption": 1,
    "explanation": "Standard SQL does not allow column aliases in GROUP BY. You must use the original expression or column name. (Some DBs like MySQL allow it due to extensions)."
  },
  {
    "testId": "sql-test-04",
    "question": "Which clause is evaluated first in a query containing WHERE, GROUP BY, HAVING, ORDER BY?",
    "options": ["ORDER BY", "HAVING", "GROUP BY", "WHERE"],
    "correctOption": 3,
    "explanation": "Logical order: WHERE filters rows, then GROUP BY groups them, then HAVING filters groups, then SELECT, then ORDER BY."
  },
  {
    "testId": "sql-test-04",
    "question": "Which aggregate function can be used on non-numeric data types?",
    "options": ["SUM", "AVG", "MAX", "All of them"],
    "correctOption": 2,
    "explanation": "MAX and MIN work on any data type (including strings and dates) based on the sort order. SUM and AVG are numeric only."
  },
  {
    "testId": "sql-test-04",
    "question": "What does GROUP BY NULL do?",
    "options": ["Groups all rows into one group", "Throws an error", "Groups rows where the column is NULL", "Splits rows into multiple groups"],
    "correctOption": 0,
    "explanation": "GROUP BY NULL is not standard, but conceptually it treats all rows as a single group (or is ignored). Usually you'd use a literal, but it's not practical."
  },
  {
    "testId": "sql-test-04",
    "question": "You want to find the second highest salary. Which approach uses grouping?",
    "options": [
      "Using MAX with subqueries",
      "Using GROUP BY and ORDER BY with LIMIT",
      "Using DENSE_RANK",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "All these methods can be used to find the nth highest salary. Grouping is involved in subquery approaches (e.g., MAX(salary) WHERE salary < (SELECT MAX(salary)))."
  },
  {
    "testId": "sql-test-04",
    "question": "In a GROUP BY query, how do you sort the groups by the aggregate result?",
    "options": ["Using ORDER BY with the aggregate function", "Using HAVING", "Using GROUP BY with ASC", "It cannot be done"],
    "correctOption": 0,
    "explanation": "You can use ORDER BY with aggregate functions (e.g., ORDER BY COUNT(*) DESC) to sort the groups."
  },
  {
    "testId": "sql-test-04",
    "question": "Which function calculates the standard deviation of a column in SQL?",
    "options": ["STDDEV()", "VAR()", "STDEV()", "Both STDDEV and STDEV depending on DBMS"],
    "correctOption": 3,
    "explanation": "Oracle and PostgreSQL use STDDEV(). SQL Server uses STDEV(). They are statistical aggregate functions."
  },
  {
    "testId": "sql-test-04",
    "question": "If you group by a date column, how do you group by month specifically?",
    "options": ["GROUP BY MONTH(date)", "GROUP BY EXTRACT(MONTH FROM date)", "GROUP BY DATEPART(mm, date)", "All of the above are valid in different databases"],
    "correctOption": 3,
    "explanation": "Depending on the DBMS (MySQL uses MONTH(), PostgreSQL uses EXTRACT(), SQL Server uses DATEPART()), you use the appropriate date function to extract the month."
  },
  {
    "testId": "sql-test-04",
    "question": "What is the correct order of clauses in a SQL statement with GROUP BY?",
    "options": [
      "SELECT, WHERE, GROUP BY, HAVING, ORDER BY",
      "SELECT, GROUP BY, WHERE, HAVING, ORDER BY",
      "SELECT, HAVING, WHERE, GROUP BY, ORDER BY",
      "SELECT, WHERE, HAVING, GROUP BY, ORDER BY"
    ],
    "correctOption": 0,
    "explanation": "The correct syntactic order is SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY."
  },
  {
    "testId": "sql-test-04",
    "question": "Which aggregate function ignores NULL values?",
    "options": ["All aggregate functions ignore NULLs", "COUNT ignores NULLs only when using *", "SUM ignores NULLs", "All of the above"],
    "correctOption": 3,
    "explanation": "SUM, AVG, MIN, MAX, and COUNT(column) all ignore NULL values. COUNT(*) does not ignore NULLs because it counts rows."
  },
  {
    "testId": "sql-test-04",
    "question": "Can you use HAVING with non-aggregated columns?",
    "options": [
      "No, HAVING requires aggregate conditions",
      "Yes, but the column must also be in GROUP BY",
      "Yes, it works like WHERE",
      "Only in PostgreSQL"
    ],
    "correctOption": 1,
    "explanation": "In standard SQL, columns in HAVING must either be part of an aggregate function or appear in the GROUP BY clause."
  },
  {
    "testId": "sql-test-04",
    "question": "What is the output of SELECT COUNT(*) FROM (SELECT 1 UNION SELECT NULL) t?",
    "options": ["1", "2", "0", "NULL"],
    "correctOption": 1,
    "explanation": "The subquery returns two rows (1 and NULL). COUNT(*) counts rows, so it returns 2."
  },
  {
    "testId": "sql-test-04",
    "question": "In MySQL, what is the default behavior if you select a column that is not in GROUP BY?",
    "options": [
      "Error",
      "It picks a random value from the group (non-deterministic)",
      "It returns the first value",
      "It returns NULL"
    ],
    "correctOption": 1,
    "explanation": "MySQL permits this but returns an arbitrary (non-deterministic) value from the group. This can lead to unexpected results."
  },
  {
    "testId": "sql-test-04",
    "question": "You have a table with 100 rows. How many rows does SELECT DISTINCT column return if the column has 80 distinct values?",
    "options": ["80", "100", "20", "Cannot be determined"],
    "correctOption": 0,
    "explanation": "DISTINCT eliminates duplicates, so it returns the number of unique values, which is 80."
  },
  {
    "testId": "sql-test-04",
    "question": "Which function returns the number of non-NULL values in a column?",
    "options": ["COUNT(column)", "COUNT(*)", "COUNT(NULL)", "TOTAL(column)"],
    "correctOption": 0,
    "explanation": "COUNT(column_name) counts only the non-NULL values in that specific column."
  },
  {
    "testId": "sql-test-04",
    "question": "What is the purpose of the ROLLUP extension in GROUP BY?",
    "options": [
      "To sort the groups",
      "To generate subtotals and grand totals in a single query",
      "To filter groups",
      "To join tables"
    ],
    "correctOption": 1,
    "explanation": "GROUP BY ROLLUP creates subtotals for each group and a grand total summary, commonly used in reporting."
  },
  {
    "testId": "sql-test-04",
    "question": "Can you use aggregate functions in the WHERE clause?",
    "options": ["No", "Yes, if you use a subquery", "Yes, directly", "Only in Oracle"],
    "correctOption": 1,
    "explanation": "You cannot use aggregates directly in WHERE. You must use them in a subquery or HAVING clause."
  },
  {
    "testId": "sql-test-04",
    "question": "What is the result of SELECT AVG(DISTINCT salary) FROM employees?",
    "options": [
      "Average of all salaries",
      "Average of unique salary values",
      "Average excluding NULLs",
      "Both B and C"
    ],
    "correctOption": 3,
    "explanation": "AVG(DISTINCT salary) calculates the average of the unique non-NULL salary values."
  },
  {
    "testId": "sql-test-04",
    "question": "Which of the following is an example of a group function?",
    "options": ["LOWER", "UPPER", "ROUND", "MAX"],
    "correctOption": 3,
    "explanation": "MAX is an aggregate (group) function that operates on a set of rows. LOWER, UPPER, and ROUND are scalar functions."
  },
  {
    "testId": "sql-test-04",
    "question": "If a GROUP BY query returns 5 rows, and you apply HAVING COUNT(*) > 1, what happens?",
    "options": [
      "It returns only groups with count > 1",
      "It returns all 5 rows",
      "It returns an error",
      "It returns groups with count < 1"
    ],
    "correctOption": 0,
    "explanation": "HAVING filters the groups. Only those groups that satisfy the condition (count > 1) are returned."
  },
  {
    "testId": "sql-test-04",
    "question": "What is the main advantage of using GROUP BY with aggregate functions?",
    "options": [
      "To sort data faster",
      "To summarize large datasets into meaningful insights",
      "To delete duplicate data",
      "To create indexes"
    ],
    "correctOption": 1,
    "explanation": "GROUP BY with aggregates is used for data summarization and generating reports (e.g., total sales per region)."
  },
  {
    "testId": "sql-test-04",
    "question": "Which of the following is NOT a valid SQL aggregate function?",
    "options": ["COUNT", "SUM", "AVG", "CALCULATE"],
    "correctOption": 3,
    "explanation": "CALCULATE is not a standard SQL aggregate function. It is a DAX function used in Power BI/Excel."
  },
  
  // Test 3
  {
    "testId": "sql-test-03",
    "question": "Which type of join returns only rows that have matching values in both tables?",
    "options": ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL OUTER JOIN"],
    "correctOption": 2,
    "explanation": "INNER JOIN returns only the rows where the join condition matches in both tables."
  },
  {
    "testId": "sql-test-03",
    "question": "A LEFT JOIN returns all rows from which table?",
    "options": ["The right table", "Both tables", "The left table", "Neither table"],
    "correctOption": 2,
    "explanation": "LEFT JOIN returns all rows from the left table (first table mentioned), and matching rows from the right table. If no match, NULLs are returned from the right side."
  },
  {
    "testId": "sql-test-03",
    "question": "What is the result of a CROSS JOIN between two tables without a WHERE clause?",
    "options": ["Only matching rows", "Cartesian product of both tables", "Union of both tables", "No rows"],
    "correctOption": 1,
    "explanation": "CROSS JOIN produces a Cartesian product, meaning every row from the first table is combined with every row from the second table."
  },
  {
    "testId": "sql-test-03",
    "question": "Which SQL keyword is used to combine the results of two or more SELECT statements, removing duplicates?",
    "options": ["UNION ALL", "UNION", "JOIN", "MERGE"],
    "correctOption": 1,
    "explanation": "UNION combines result sets and removes duplicate rows. UNION ALL keeps duplicates."
  },
  {
    "testId": "sql-test-03",
    "question": "If you want to combine two SELECT statements and keep all duplicates, which operator should you use?",
    "options": ["UNION", "UNION ALL", "INTERSECT", "EXCEPT"],
    "correctOption": 1,
    "explanation": "UNION ALL combines result sets without removing duplicates, making it faster than UNION when duplicates are acceptable."
  },
  {
    "testId": "sql-test-03",
    "question": "What is a self-join?",
    "options": ["Joining a table with itself", "Joining two different databases", "Joining a table with a view", "Joining without a condition"],
    "correctOption": 0,
    "explanation": "A self-join is when a table is joined with itself. This is common for hierarchical data (e.g., employees and their managers)."
  },
  {
    "testId": "sql-test-03",
    "question": "Which join returns all rows from both tables, filling NULLs where matches are missing?",
    "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    "correctOption": 3,
    "explanation": "FULL OUTER JOIN returns all rows from both tables. If there is no match, the missing side has NULL values."
  },
  {
    "testId": "sql-test-03",
    "question": "In a JOIN, what is the purpose of the 'ON' clause?",
    "options": ["To specify the columns to select", "To specify the condition for joining tables", "To group the results", "To order the results"],
    "correctOption": 1,
    "explanation": "The ON clause defines the condition that determines how two tables are related (e.g., ON table1.id = table2.foreign_id)."
  },
  {
    "testId": "sql-test-03",
    "question": "Which of the following will result in an error if the number of columns in the SELECT statements differ?",
    "options": ["UNION", "UNION ALL", "Both UNION and UNION ALL", "JOIN"],
    "correctOption": 2,
    "explanation": "Both UNION and UNION ALL require the same number of columns in the SELECT statements, and the data types must be compatible."
  },
  {
    "testId": "sql-test-03",
    "question": "To find employees who are also managers, you would likely use a:",
    "options": ["SELF JOIN", "RIGHT JOIN", "FULL JOIN", "CROSS JOIN"],
    "correctOption": 0,
    "explanation": "A self-join on the employee table (joining manager_id to employee_id) is used to find employees who are managers."
  },
  {
    "testId": "sql-test-03",
    "question": "What does the INTERSECT operator do?",
    "options": ["Returns all rows from both queries", "Returns common rows between two queries", "Returns rows from the first query not in the second", "Returns the Cartesian product"],
    "correctOption": 1,
    "explanation": "INTERSECT returns only the rows that are present in both result sets."
  },
  {
    "testId": "sql-test-03",
    "question": "Which join is best described as: 'All records from the right table, plus matched records from the left'?",
    "options": ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    "correctOption": 1,
    "explanation": "RIGHT JOIN returns all rows from the right (second) table. If no match in the left table, NULLs are returned."
  },
  {
    "testId": "sql-test-03",
    "question": "If you JOIN two tables without an ON condition, what happens in most SQL databases?",
    "options": ["Syntax error", "It performs a CROSS JOIN", "It performs an INNER JOIN", "It performs a LEFT JOIN"],
    "correctOption": 1,
    "explanation": "If you omit the ON clause but use the JOIN keyword, it often defaults to a CROSS JOIN (Cartesian product) depending on the DB, or throws an error. Strictly, it's a CROSS JOIN."
  },
  {
    "testId": "sql-test-03",
    "question": "What is an equi-join?",
    "options": ["A join using the = operator", "A join using the LIKE operator", "A join on three tables", "A join without conditions"],
    "correctOption": 0,
    "explanation": "An equi-join is a join where the ON clause uses the equality operator (=) to match columns."
  },
  {
    "testId": "sql-test-03",
    "question": "In a LEFT JOIN, if there are multiple matching rows in the right table, what happens?",
    "options": ["Only the first match is returned", "An error is thrown", "All matches are returned, duplicating the left row", "Only the last match is returned"],
    "correctOption": 2,
    "explanation": "If the right table has multiple matches for a single left row, the left row is duplicated for each matching right row."
  },
  {
    "testId": "sql-test-03",
    "question": "Which of the following is a non-ANSI join syntax (older style)?",
    "options": ["JOIN ... ON", "INNER JOIN ... ON", "SELECT * FROM a, b WHERE a.id = b.id", "CROSS JOIN"],
    "correctOption": 2,
    "explanation": "Using commas in the FROM clause and conditions in WHERE is an older (non-ANSI) syntax. The ANSI standard uses JOIN ... ON."
  },
  {
    "testId": "sql-test-03",
    "question": "What is the EXCEPT operator used for?",
    "options": ["To combine two queries", "To return rows from the first query that are not in the second", "To return common rows", "To multiply rows"],
    "correctOption": 1,
    "explanation": "EXCEPT returns distinct rows from the left query that are not present in the right query results."
  },
  {
    "testId": "sql-test-03",
    "question": "Which join would you use to find all customers, even if they have no orders?",
    "options": ["INNER JOIN orders", "LEFT JOIN orders", "RIGHT JOIN orders", "FULL JOIN orders"],
    "correctOption": 1,
    "explanation": "A LEFT JOIN from Customers to Orders will return all customers, and orders data will be NULL for customers with no orders."
  },
  {
    "testId": "sql-test-03",
    "question": "What is a natural join?",
    "options": ["A join without any condition", "A join that automatically matches columns with the same name", "A join on date columns", "A join that uses the BETWEEN operator"],
    "correctOption": 1,
    "explanation": "A NATURAL JOIN automatically joins tables based on columns with the same name and data types. It is not recommended because it's implicit."
  },
  {
    "testId": "sql-test-03",
    "question": "You have two tables with 5 rows each. What is the maximum possible rows returned by a CROSS JOIN?",
    "options": ["5", "10", "25", "It cannot be determined"],
    "correctOption": 2,
    "explanation": "CROSS JOIN multiplies rows. 5 rows * 5 rows = 25 rows maximum."
  },
  {
    "testId": "sql-test-03",
    "question": "In SQL Server, which of these is valid to join a table to itself?",
    "options": ["Using different aliases for the same table", "Using the AS keyword only", "Using parentheses", "It is not possible"],
    "correctOption": 0,
    "explanation": "To perform a self-join, you must use different aliases (e.g., e1 and e2) for the same table to distinguish them."
  },
  {
    "testId": "sql-test-03",
    "question": "Which operator is used in a JOIN condition to match a column to a range in another table (non-equi join)?",
    "options": ["=", "BETWEEN", "LIKE", "All of the above can be used in ON clause"],
    "correctOption": 3,
    "explanation": "JOIN conditions are not limited to '='. You can use <, >, BETWEEN, LIKE, etc., for non-equi joins."
  },
  {
    "testId": "sql-test-03",
    "question": "What will happen if you use UNION ALL with two queries that return different data types for the same column?",
    "options": ["It works automatically", "It throws a type mismatch error", "It converts to a common type automatically in some DBs", "It only works in MySQL"],
    "correctOption": 2,
    "explanation": "Most DBs try to implicitly cast data types for UNION/UNION ALL, but it's safer to explicitly cast to avoid errors or unexpected results."
  },
  {
    "testId": "sql-test-03",
    "question": "Which join will return rows that have no matching records in the other table?",
    "options": ["INNER JOIN", "LEFT JOIN (with NULL check)", "CROSS JOIN", "NATURAL JOIN"],
    "correctOption": 1,
    "explanation": "To find rows with no match, you use LEFT JOIN and then check for NULL in the right table's key in the WHERE clause."
  },
  {
    "testId": "sql-test-03",
    "question": "What is the difference between UNION and JOIN?",
    "options": [
      "UNION combines columns, JOIN combines rows",
      "UNION combines rows vertically, JOIN combines columns horizontally",
      "Both are the same",
      "UNION is only for two tables, JOIN is for more"
    ],
    "correctOption": 1,
    "explanation": "UNION stacks result sets vertically (increases rows), while JOIN combines tables horizontally (increases columns)."
  },
  {
    "testId": "sql-test-03",
    "question": "If you want to remove duplicates from a JOIN result, what should you use?",
    "options": ["DISTINCT", "UNION", "DEDUP", "No need, JOIN never duplicates"],
    "correctOption": 0,
    "explanation": "You can use SELECT DISTINCT on the joined columns to remove duplicate rows if the join creates them."
  },
  {
    "testId": "sql-test-03",
    "question": "Which type of join is most commonly used in reporting to combine fact tables with dimension tables?",
    "options": ["CROSS JOIN", "INNER JOIN", "SELF JOIN", "FULL JOIN"],
    "correctOption": 1,
    "explanation": "INNER JOIN is the most common because it ensures only related records are combined, which is standard in star schemas."
  },
  {
    "testId": "sql-test-03",
    "question": "In PostgreSQL, which keyword is used to perform a FULL OUTER JOIN?",
    "options": ["FULL JOIN", "FULL OUTER JOIN", "Both are valid", "OUTER JOIN"],
    "correctOption": 2,
    "explanation": "In PostgreSQL and many DBs, FULL JOIN and FULL OUTER JOIN are synonyms and both are valid."
  },
  {
    "testId": "sql-test-03",
    "question": "How can you join a table with a subquery?",
    "options": ["By using the subquery in the FROM clause with an alias", "It is not possible", "By using the subquery in the ON clause only", "By using WHERE with ="],
    "correctOption": 0,
    "explanation": "You can join a table to the result of a subquery by placing the subquery in the FROM clause and giving it an alias (derived table)."
  },
  {
    "testId": "sql-test-03",
    "question": "What is the impact of using 'LEFT JOIN' vs 'INNER JOIN' on query performance?",
    "options": [
      "LEFT JOIN is always faster",
      "INNER JOIN is always faster",
      "Performance depends on indexes and data, but LEFT JOIN may be slower if large unmatched sets exist",
      "There is no performance difference"
    ],
    "correctOption": 2,
    "explanation": "Performance depends on data and indexes. If a LEFT JOIN returns many NULLs (large unmatched data), it can be slower than INNER JOIN."
  },
  {
    "testId": "sql-test-03",
    "question": "Which of the following is true about a RIGHT JOIN?",
    "options": [
      "It is the same as LEFT JOIN if you swap the tables",
      "It is rarely used because it can be replaced by LEFT JOIN",
      "It returns all rows from the second table",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "RIGHT JOIN can always be written as a LEFT JOIN by swapping the table order. Many developers prefer LEFT JOIN for readability."
  },
  {
    "testId": "sql-test-03",
    "question": "What does a 'Theta Join' refer to?",
    "options": ["A join using any comparison operator (>, <, >=, etc.)", "A join using only the '=' operator", "A join on three tables", "A join with a condition on aggregated columns"],
    "correctOption": 0,
    "explanation": "A Theta join is a general join that uses any comparison operator in the join condition, not just equality."
  },
  {
    "testId": "sql-test-03",
    "question": "You have Table A (100 rows) and Table B (100 rows). LEFT JOIN returns 100 rows. What can you infer?",
    "options": [
      "Every row in A matched at least one row in B",
      "Only 100 rows matched in B",
      "No rows matched in B",
      "It's a CROSS JOIN"
    ],
    "correctOption": 0,
    "explanation": "Since LEFT JOIN returns all rows from A, and it returned 100 rows (equal to A's row count), it means each row in A had at least one match in B, or it returned exactly one match per row."
  },
  {
    "testId": "sql-test-03",
    "question": "Which SQL standard introduced the explicit JOIN syntax?",
    "options": ["SQL-86", "SQL-92", "SQL-99", "SQL-2003"],
    "correctOption": 1,
    "explanation": "The ANSI SQL-92 standard introduced the explicit JOIN syntax (INNER JOIN, LEFT JOIN, etc.) which is now universally used."
  },
  {
    "testId": "sql-test-03",
    "question": "What is a 'composite join'?",
    "options": [
      "A join involving more than two tables",
      "A join where the ON condition uses multiple columns from both tables",
      "A join on columns with composite data types",
      "A join inside a subquery"
    ],
    "correctOption": 1,
    "explanation": "A composite join is when you join tables on multiple columns (e.g., ON A.col1 = B.col1 AND A.col2 = B.col2)."
  },
  {
    "testId": "sql-test-03",
    "question": "Which join is used to get all products and their categories, including products with no category?",
    "options": ["INNER JOIN categories", "LEFT JOIN categories", "RIGHT JOIN categories", "FULL JOIN categories"],
    "correctOption": 1,
    "explanation": "LEFT JOIN from Products to Categories ensures all products are shown. Products without a category will show NULL for category columns."
  },
  {
    "testId": "sql-test-03",
    "question": "How does SQL Server differ from MySQL regarding FULL OUTER JOIN?",
    "options": [
      "Both support it identically",
      "MySQL does not support FULL OUTER JOIN, SQL Server does",
      "SQL Server does not support it, MySQL does",
      "Both do not support it"
    ],
    "correctOption": 1,
    "explanation": "MySQL does not have FULL OUTER JOIN syntax; it must be emulated using LEFT JOIN + UNION + RIGHT JOIN. SQL Server natively supports FULL OUTER JOIN."
  },
  {
    "testId": "sql-test-03",
    "question": "If you accidentally omit the ON clause in a LEFT JOIN, what is the likely result?",
    "options": ["Syntax error", "It becomes an INNER JOIN", "It becomes a CROSS JOIN", "It returns only the left table"],
    "correctOption": 0,
    "explanation": "In most modern SQL databases, omitting the ON clause in a LEFT JOIN results in a syntax error. The ON clause is mandatory for LEFT/RIGHT/INNER joins."
  },
  {
    "testId": "sql-test-03",
    "question": "What is the purpose of using table aliases in joins?",
    "options": [
      "To make queries shorter and resolve ambiguous column names",
      "To rename the table permanently",
      "To hide sensitive data",
      "To increase performance"
    ],
    "correctOption": 0,
    "explanation": "Aliases shorten table names and are essential when joining the same table (self-join) or when columns have the same name across tables to avoid ambiguity."
  },
  {
    "testId": "sql-test-03",
    "question": "In a LEFT JOIN, WHERE condition on the right table (e.g., RIGHT_TABLE.COL = 1) will:",
    "options": [
      "Convert the LEFT JOIN into an INNER JOIN",
      "Filter the result, removing rows that don't match the condition, effectively overriding the LEFT JOIN behavior",
      "Cause an error",
      "Add a new column"
    ],
    "correctOption": 1,
    "explanation": "If you put a condition on the right table in the WHERE clause (not ON), it filters out NULLs from the right side, effectively turning the LEFT JOIN into an INNER JOIN for those conditions."
  }
];

// Append to questions.js
const qjs = fs.readFileSync('src/data/questions.js', 'utf8');
const lines = qjs.split('\\n');
// We want to insert these new questions before the last bracket
// Let's just parse the old array, combine, and rewrite
// Oh wait, the old file exports const questions = [...]
let oldContent = qjs.replace('export const questions = ', '').replace(';\\n', '').trim();
if (oldContent.endsWith(';')) oldContent = oldContent.slice(0, -1);
const oldArray = eval(oldContent);

// Add unique IDs to the new data
data.forEach((q, i) => {
  q.id = 'qnew-' + i;
});

const merged = oldArray.concat(data);

const newFileContent = 'export const questions = ' + JSON.stringify(merged, null, 2) + ';\\n';
fs.writeFileSync('src/data/questions.js', newFileContent, 'utf8');
console.log('Merged successfully. Total questions:', merged.length);
