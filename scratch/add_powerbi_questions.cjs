const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "powerbi-test-01",
    "question": "What is Power BI Desktop primarily used for?",
    "options": ["Creating dashboards in the cloud", "Authoring reports and connecting to data sources", "Sharing reports with external users", "Managing workspace permissions"],
    "correctOption": 1,
    "explanation": "Power BI Desktop is a free, on-premises tool used to connect to data, clean and transform it, build data models, and create interactive reports."
  },
  {
    "testId": "powerbi-test-01",
    "question": "Which component of Power BI is responsible for refreshing data from on-premises sources like SQL Server?",
    "options": ["Power BI Gateway", "Power BI Service", "Power Query Editor", "DAX Studio"],
    "correctOption": 0,
    "explanation": "The Power BI Gateway acts as a bridge between on-premises data sources (SQL Server, Oracle, etc.) and the Power BI Service, enabling secure data refresh."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is the default connection mode when importing data from an Excel file in Power BI?",
    "options": ["DirectQuery", "Live Connection", "Import Mode", "Composite Mode"],
    "correctOption": 2,
    "explanation": "By default, Power BI uses 'Import Mode', which copies data into the model's internal storage (VertiPaq), providing the fastest performance."
  },
  {
    "testId": "powerbi-test-01",
    "question": "Which tool in Power BI is used to clean, transform, and merge data before loading it into the model?",
    "options": ["DAX Studio", "Power Query Editor", "Model View", "Report View"],
    "correctOption": 1,
    "explanation": "The Power Query Editor (or Query Editor) is the ETL (Extract, Transform, Load) interface where you use the Power Query M language to shape and clean data."
  },
  {
    "testId": "powerbi-test-01",
    "question": "Which of the following is NOT a valid data source connection in Power BI Desktop?",
    "options": ["Microsoft SQL Server", "Microsoft Excel", "PDF File (direct reading of tables)", "Adobe Photoshop File"],
    "correctOption": 3,
    "explanation": "Power BI cannot read native Adobe Photoshop (.psd) files. It supports a vast range of data sources including databases, flat files, OData, and web sources, but not graphic design files."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is the difference between 'Import' mode and 'DirectQuery' mode?",
    "options": [
      "Import loads data into the model; DirectQuery leaves data in the source and queries it on the fly",
      "DirectQuery loads data; Import queries on the fly",
      "Both load data into the model",
      "Import is slower than DirectQuery"
    ],
    "correctOption": 0,
    "explanation": "Import mode copies data into Power BI's in-memory cache for high performance. DirectQuery does not store data in Power BI; it sends queries to the source database each time you interact with a report."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is the 'Power BI Service'?",
    "options": [
      "The cloud-hosted platform for sharing, collaborating, and managing Power BI content",
      "The desktop application used to build reports",
      "A mobile application for viewing reports",
      "A command-line tool for data transformation"
    ],
    "correctOption": 0,
    "explanation": "Power BI Service is a Software as a Service (SaaS) platform in Microsoft Azure where you publish, share, schedule refreshes, and set up row-level security for your reports."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What does the 'App Source' in Power Query allow you to do?",
    "options": [
      "To install custom connectors and extensions created by Microsoft or the community",
      "To publish your report to the Power BI Service",
      "To create new data types",
      "To update the visualizations"
    ],
    "correctOption": 0,
    "explanation": "The Power Query 'App Source' allows you to find and install custom data connectors (like from GitHub, etc.) that aren't included in the default list."
  },
  {
    "testId": "powerbi-test-01",
    "question": "When connecting to a SQL Server database, what authentication method is often preferred in on-premises corporate environments?",
    "options": ["Anonymous", "Windows Authentication", "Azure AD OAuth2", "API Key"],
    "correctOption": 1,
    "explanation": "Windows Authentication (SSO - Single Sign-On) is commonly preferred for on-premises SQL Server connections as it uses the user's domain credentials."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is a 'Dataflow' in the Power BI Service?",
    "options": [
      "A scheduled data refresh",
      "A cloud-based ETL process that prepares data centrally for reuse",
      "A type of visualization",
      "A security role"
    ],
    "correctOption": 1,
    "explanation": "Dataflows are cloud-based ETL tools that allow users to extract, transform, and load data directly in the Power BI Service, making it reusable across multiple reports."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What does the 'Profiling' feature in the Power Query Editor show you?",
    "options": [
      "The performance speed of your data load",
      "Statistics about your columns such as duplicates, empty values, and data distribution",
      "The security settings of the data source",
      "The relationships between tables"
    ],
    "correctOption": 1,
    "explanation": "The profiling feature gives you column statistics and visual distributions to help you understand the quality and shape of your data before cleaning it."
  },
  {
    "testId": "powerbi-test-01",
    "question": "Which file format is specifically designed to save a Power BI project that uses Power Query transformations?",
    "options": [".pbix", ".pbit", ".pbip", ".pptx"],
    "correctOption": 2,
    "explanation": ".pbip (Power BI Project) is a new open-source file format that stores the project structure and Power Query transformations in a text format, making it easier for developers to collaborate."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is the 'Data Gateway' refresh schedule used for?",
    "options": [
      "To update the visualizations automatically",
      "To schedule when the data in the Power BI Service gets refreshed from on-premises sources",
      "To back up the Power BI reports",
      "To update the user permissions"
    ],
    "correctOption": 1,
    "explanation": "The Data Gateway refresh schedule allows you to define specific times and frequencies for Power BI Service to query the on-premises data source and refresh your dataset."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is the role of the 'Relationships' pane in Power BI Desktop?",
    "options": [
      "To view and manage the connections between tables in your data model",
      "To sort data",
      "To apply filters to visuals",
      "To write DAX formulas"
    ],
    "correctOption": 0,
    "explanation": "The Relationships pane (in Model View) is where you view, create, and manage relationships between different tables in your data model."
  },
  {
    "testId": "powerbi-test-01",
    "question": "When using 'Import' mode, where is your data physically stored?",
    "options": ["In the original source database", "In an Azure SQL database", "In Power BI's in-memory columnar database (VertiPaq)", "In a text file"],
    "correctOption": 2,
    "explanation": "In 'Import' mode, Power BI loads all data into its in-memory, columnar storage engine known as VertiPaq, which is compressed and indexed for fast analysis."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is the function of the 'Append Queries' feature in Power Query?",
    "options": [
      "To combine rows from two or more tables into a single table",
      "To combine columns from two or more tables",
      "To join tables based on a common key",
      "To delete duplicate rows"
    ],
    "correctOption": 0,
    "explanation": "Append Queries is used to stack tables vertically (i.e., adding rows from one table to the bottom of another). This is useful for consolidating data from multiple files."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What does the 'Current File' data source in Power Query refer to?",
    "options": [
      "The external file path",
      "The current open Excel or Power BI file itself",
      "The current database connection",
      "The SharePoint folder"
    ],
    "correctOption": 1,
    "explanation": "The 'Current File' connector allows you to reference content (like Excel tables) within the same file you're working on, often used in Excel for Power Query."
  },
  {
    "testId": "powerbi-test-01",
    "question": "Which security feature restricts access to specific rows or columns of data based on a user's identity?",
    "options": ["Row-Level Security (RLS)", "Column-Level Security", "Data Gateway", "Admin Settings"],
    "correctOption": 0,
    "explanation": "Row-Level Security (RLS) allows you to filter data for specific users, ensuring that a user can only see data relevant to them (e.g., salesperson sees only their own region)."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is a 'Parameter' in the Power Query Editor used for?",
    "options": [
      "To make reports dynamic by changing filter values or data sources based on user input",
      "To define a calculation in DAX",
      "To format visuals",
      "To create a new table"
    ],
    "correctOption": 0,
    "explanation": "Power Query Parameters allow you to make your queries dynamic. For example, you can prompt the user for a date range or change the database environment (Dev/Prod) without editing the query steps."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What does the 'Split Column' feature in Power Query do?",
    "options": [
      "Splits a column into multiple columns based on a delimiter or character count",
      "Splits the entire table into two tables",
      "Splits the data into different worksheets",
      "Splits the Power Query steps"
    ],
    "correctOption": 0,
    "explanation": "The Split Column feature is used to parse data within a column (e.g., separating 'First Name' and 'Last Name' from a 'Full Name' column) based on a delimiter like a comma or space."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is the 'Column distribution' in Power Query profiling?",
    "options": [
      "It shows a histogram of the values in the column",
      "It shows the number of unique and distinct values, and empty percentages",
      "It shows the data type of the column",
      "It shows the sorting order"
    ],
    "correctOption": 1,
    "explanation": "Column distribution shows key statistics like value count, unique values, distinct values, and empty/error percentages, helping you identify data quality issues."
  },
  {
    "testId": "powerbi-test-01",
    "question": "In Power BI Desktop, which view is used to add calculated columns and manage table schemas?",
    "options": ["Report View", "Data View", "Model View", "Power Query"],
    "correctOption": 1,
    "explanation": "The Data View displays the actual data in your tables in a grid format. It is used to inspect data and create calculated columns using DAX."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is the function of 'Apply' and 'Close' in the Power Query Editor?",
    "options": [
      "It saves the transformations and loads the data into the Power BI data model",
      "It applies the transformations without saving",
      "It closes Power BI",
      "It discards all transformations"
    ],
    "correctOption": 0,
    "explanation": "Clicking 'Close & Apply' in the Query Editor will save all your transformation steps and load the transformed data into the Power BI dataset for use in reports."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What does 'Drill Down' allow in the Query Editor?",
    "options": [
      "To navigate into the details of a specific column",
      "To view the raw data behind an aggregated value in a PivotTable",
      "To expand a complex value (like a Record or Table) to see its components",
      "To sort data"
    ],
    "correctOption": 2,
    "explanation": "In Power Query, 'Drill Down' is used on a column that contains structured values (like nested tables or records) to expand or drill into that specific item to extract inner values."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is the 'Personal Gateway' used for?",
    "options": [
      "For enterprise-wide data refresh",
      "For a single user to refresh data from on-premises sources without needing administrator rights",
      "For connecting to cloud sources",
      "For securing DAX calculations"
    ],
    "correctOption": 1,
    "explanation": "The Personal Gateway (now deprecated in favor of the standard Gateway) was a lightweight version that allowed individual users to refresh data sources without specialized enterprise configuration."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is the main advantage of using Dataflows in the Power BI Service?",
    "options": [
      "They allow you to build complex charts",
      "They enable reusability of data transformations by multiple reports and users",
      "They provide faster visual rendering",
      "They act as a replacement for DAX"
    ],
    "correctOption": 1,
    "explanation": "Dataflows are a shared, server-side ETL layer. Once a dataflow is created and refreshed, any report or user in the organization can build on that same clean data, ensuring consistency."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is the function of the 'Shape' feature in Power Query?",
    "options": [
      "To visually transform data using buttons and commands",
      "To create shapes in reports",
      "To format chart axes",
      "To add visual indicators to rows"
    ],
    "correctOption": 0,
    "explanation": "In Power Query, 'Shaping' refers to the visual drag-and-drop or click-based transformations you perform using the interface, such as removing columns, renaming, splitting, etc."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is 'M' language used for in Power BI?",
    "options": [
      "It is the Power Query formula language used for data transformations",
      "It is used to build visuals",
      "It is used to create measures",
      "It is the service administration language"
    ],
    "correctOption": 0,
    "explanation": "The M language (also known as Power Query Formula Language) is the functional language used behind the scenes in Power Query to perform data transformation and mashup operations."
  },
  {
    "testId": "powerbi-test-01",
    "question": "Which connector would you use in Power Query to combine data from multiple Excel files stored in a local folder?",
    "options": ["Web", "Folder", "SharePoint List", "OData Feed"],
    "correctOption": 1,
    "explanation": "The 'Folder' connector allows you to point to a folder path. Power Query will create a list of files in that folder, and you can then apply transformations and combine them (using 'Combine Files')."
  },
  {
    "testId": "powerbi-test-01",
    "question": "What is the purpose of 'Data Reduction' in the Power BI Service?",
    "options": [
      "It reduces the size of the dataset by removing redundant columns",
      "It limits the data that is imported based on user filters to improve performance",
      "It reduces the number of reports in a workspace",
      "It reduces the number of users"
    ],
    "correctOption": 1,
    "explanation": "Data Reduction features (like RLS and data partitioning) help in filtering data at the dataset level to ensure that only necessary data is loaded or visible, improving both performance and security."
  },
  {
    "testId": "powerbi-test-01",
    "question": "How do you access the Power Query Editor from Power BI Desktop?",
    "options": [
      "File > Transform Data",
      "Home > Transform Data",
      "View > Transform Data",
      "Model > Edit Queries"
    ],
    "correctOption": 1,
    "explanation": "The 'Transform Data' button is located on the Home ribbon under the 'External Data' group (or 'Queries' group depending on version)."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is a Star Schema in data modeling?",
    "options": [
      "A model with a central fact table connected to multiple dimension tables",
      "A model with all tables connected in a circle",
      "A single table containing all data",
      "A model using only DirectQuery"
    ],
    "correctOption": 0,
    "explanation": "A Star Schema is a design pattern where a central fact table (containing measurements/metrics) is joined via foreign keys to multiple surrounding dimension tables (containing descriptive attributes)."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is the default cardinality of a relationship created between two tables in Power BI?",
    "options": ["One-to-One", "One-to-Many (1:*)", "Many-to-Many", "Many-to-One"],
    "correctOption": 1,
    "explanation": "Power BI defaults to a 'One-to-Many (1:*)' relationship because this is the most common relationship between dimension tables (on the '1' side) and fact tables (on the '*' side)."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is a calculated column in Power BI?",
    "options": [
      "A new column added to a table using a DAX formula that is computed during data refresh",
      "A measure that changes based on filter context",
      "A column created in Power Query",
      "A column that is hidden in the report"
    ],
    "correctOption": 0,
    "explanation": "A calculated column is a column you add to a table using DAX. The calculation is performed row-by-row and its values are stored in the model, computed at refresh time."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is the main difference between a calculated column and a measure?",
    "options": [
      "Calculated columns are evaluated row by row; measures are evaluated in filter context",
      "Measures are evaluated row by row; calculated columns are evaluated in filter context",
      "Calculated columns use M language; measures use DAX",
      "Measures are stored in the model; calculated columns are not"
    ],
    "correctOption": 0,
    "explanation": "Calculated columns are evaluated row-by-row during data refresh and physically stored. Measures are DAX formulas evaluated on the fly based on the current filter context provided by the report (slicers, rows, columns)."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is the purpose of a dimension table in a data model?",
    "options": [
      "To store numeric measurements and aggregations",
      "To store descriptive attributes that categorize data in a fact table",
      "To store the relationships between tables",
      "To store raw data before transformation"
    ],
    "correctOption": 1,
    "explanation": "Dimension tables contain descriptive information (e.g., Customer Name, Product Category, Date). They are the 'filtering' side in relationships, providing context to the numeric facts."
  },
  {
    "testId": "powerbi-test-02",
    "question": "Which direction does the filter flow in a one-to-many relationship?",
    "options": [
      "From the 'one' side to the 'many' side",
      "From the 'many' side to the 'one' side",
      "Both directions",
      "No direction"
    ],
    "correctOption": 0,
    "explanation": "In a typical one-to-many relationship, filters automatically flow from the 'one' side (dimension) to the 'many' side (fact). This allows you to slice and dice fact metrics by dimension attributes."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What does 'Cross Filter Direction' set to 'Single' mean in a relationship?",
    "options": [
      "Filters only flow from one table to the other",
      "Filters flow in both directions",
      "No filters flow",
      "It sets the relationship to inactive"
    ],
    "correctOption": 0,
    "explanation": "'Single' cross-filter direction means that filters flow in only one direction (usually from the 'one' side to the 'many' side). 'Both' allows filtering to flow in both directions, enabling many-to-many analysis."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is a 'hierarchy' in Power BI modeling?",
    "options": [
      "A drill-down path of attributes (e.g., Year > Quarter > Month)",
      "A relationship type",
      "A ranking function",
      "A security role"
    ],
    "correctOption": 0,
    "explanation": "Hierarchies allow users to drill down from a high-level category to a lower level. For example, a date hierarchy allows drilling from Year to Quarter to Month."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What does the 'Mark as Date Table' function do in Power BI?",
    "options": [
      "It identifies the table as a date dimension and enables advanced time intelligence functions",
      "It sorts the table by date",
      "It creates a date hierarchy",
      "It hides the date table from the report"
    ],
    "correctOption": 0,
    "explanation": "Marking a table as a date table tells Power BI that this table contains continuous dates and enables built-in time intelligence functions like YEAR, QTD, and YTD to work correctly."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is a 'Snowflake Schema'?",
    "options": [
      "A schema where dimension tables are normalized into multiple related sub-dimensions",
      "A schema with no fact table",
      "A schema with only one table",
      "A schema used only for DirectQuery"
    ],
    "correctOption": 0,
    "explanation": "A Snowflake Schema is an extension of the Star Schema where dimension tables are further broken down (normalized) into sub-dimensions (e.g., Product -> ProductCategory -> ProductSubCategory)."
  },
  {
    "testId": "powerbi-test-02",
    "question": "How can you create a relationship between two tables that have different data types in the key columns?",
    "options": [
      "You cannot create a relationship with different data types",
      "You must first change the data types to match in the Query Editor",
      "Power BI automatically converts them",
      "You can use the 'Force Relationship' option"
    ],
    "correctOption": 1,
    "explanation": "Power BI requires the key columns in a relationship to have the same data type (or compatible types like text to text, integer to integer). You must ensure data types match in Power Query before creating the relationship."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is the purpose of a 'measure' in Power BI?",
    "options": [
      "To perform calculations dynamically based on the current filter context",
      "To create a new column in a table",
      "To join two tables",
      "To format a visual"
    ],
    "correctOption": 0,
    "explanation": "Measures are DAX formulas used in reports that dynamically aggregate data based on the filters and slicers applied by the user. They are not physically stored in the model."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What happens when you delete a table in the Model View?",
    "options": [
      "The table is permanently deleted from the data source",
      "The table is removed from the Power BI model but the data source is unchanged",
      "The table is hidden from the report",
      "The relationships are automatically re-created"
    ],
    "correctOption": 1,
    "explanation": "Deleting a table in the Model View removes it from the Power BI dataset but does not affect the original source database or file. All relationships and measures referencing it will break."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is a 'many-to-many' relationship in Power BI?",
    "options": [
      "A relationship where both columns contain duplicate values",
      "A relationship where each row in Table A matches many rows in Table B, and vice versa",
      "A relationship where one table connects to another via a bridge table",
      "All of the above can describe many-to-many scenarios"
    ],
    "correctOption": 3,
    "explanation": "Many-to-many relationships exist when both columns have duplicate values. Power BI handles this by either using a bridging table (star schema) or by enabling the many-to-many cardinality feature (especially in Composite models)."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What does the 'Auto-Detect' feature do for relationships?",
    "options": [
      "It automatically creates relationships based on matching column names and data types",
      "It automatically deletes existing relationships",
      "It creates measures automatically",
      "It determines the data types automatically"
    ],
    "correctOption": 0,
    "explanation": "The 'Auto-Detect' feature in the Manage Relationships dialog scans your tables and suggests or creates relationships based on columns that have the same name and data type."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is the 'Cardinality' of a relationship?",
    "options": [
      "The number of rows in the table",
      "The mathematical definition of the join (1:1, 1:*, *:*)",
      "The filter direction",
      "The security level"
    ],
    "correctOption": 1,
    "explanation": "Cardinality defines the type of relationship: One-to-One, One-to-Many, or Many-to-Many. It dictates how data relates and how filters apply."
  },
  {
    "testId": "powerbi-test-02",
    "question": "Where should you typically place a calculated column to categorize data into groups (e.g., 'Low', 'Medium', 'High')?",
    "options": ["In the fact table", "In the dimension table", "In a separate table", "In the visual"],
    "correctOption": 1,
    "explanation": "Calculated columns that create descriptive categories (like salary bands or age groups) belong in the dimension table so they can be used to categorize many rows in the fact table."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is the 'Model Diagram' in Power BI Desktop?",
    "options": [
      "A visual representation of your tables, columns, and the relationships between them",
      "A visualization in a report",
      "A code editor for DAX",
      "A data import wizard"
    ],
    "correctOption": 0,
    "explanation": "The Model View (or Diagram View) provides a canvas where you can see your tables, their columns, and the relationship lines connecting them. It's the primary interface for managing the data model."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is a 'role-playing dimension'?",
    "options": [
      "A dimension table that is used multiple times in a model with different relationships (e.g., OrderDate, ShipDate)",
      "A dimension table with security roles",
      "A dimension table that is a role in a hierarchy",
      "A measure that acts like a dimension"
    ],
    "correctOption": 0,
    "explanation": "A role-playing dimension is a single dimension table (like a Date table) that has multiple active relationships to different foreign keys in a fact table (Order Date, Ship Date, etc.)."
  },
  {
    "testId": "powerbi-test-02",
    "question": "Why is it important to mark a Date table in Power BI?",
    "options": [
      "To enable time-intelligence DAX functions like TOTALYTD and SAMEPERIODLASTYEAR",
      "To sort dates correctly",
      "To format dates",
      "To hide the date table from the report",
      "Both A and B"
    ],
    "correctOption": 0,
    "explanation": "Marking a date table is essential for time-intelligence functions to work correctly, as they rely on a continuous, well-defined date range."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is a 'calculated table' in Power BI?",
    "options": [
      "A table created using a DAX expression to produce a new table in the model",
      "A table imported from a data source",
      "A table that summarizes another table",
      "A temporary table used in visuals"
    ],
    "correctOption": 0,
    "explanation": "A calculated table is a table that you create using a DAX formula (e.g., SUMMARIZE, FILTER, UNION). It is computed during refresh and stored in the model, useful for creating lookup tables or bridging tables."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is the purpose of the 'Manage Relationships' dialog?",
    "options": [
      "To view, create, edit, and delete relationships between tables",
      "To manage users",
      "To manage data refresh schedules",
      "To manage report pages"
    ],
    "correctOption": 0,
    "explanation": "The 'Manage Relationships' dialog provides a centralized list view of all relationships in your model, allowing you to easily modify cardinality, cross-filter direction, or delete relationships."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What does the 'Filter Context' refer to in Power BI?",
    "options": [
      "The set of filters applied from slicers, visuals, and rows/columns on a measure",
      "The data source filters",
      "The security filters",
      "The report page filter"
    ],
    "correctOption": 0,
    "explanation": "Filter context is the combination of all filters applied to a measure when it is evaluated. This includes filters from slicers, visual-level filters, and the row/column axis of the visual."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is a 'SQL View' equivalent in Power BI modeling?",
    "options": [
      "A Power Query query",
      "A calculated table",
      "A DirectQuery table",
      "A relationship"
    ],
    "correctOption": 1,
    "explanation": "A calculated table in Power BI is analogous to a SQL View: it's a virtual table defined by a query (DAX) that doesn't change the source but exposes a new dataset structure."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What does the 'Include in Report Refresh' option do for a table?",
    "options": [
      "It determines if the data from this table will be reloaded during a scheduled refresh",
      "It determines if the table appears in the report",
      "It determines if the table is indexed",
      "It determines the sort order"
    ],
    "correctOption": 0,
    "explanation": "You can exclude a specific table from the data refresh if it is static or if you want to save time during refresh, by unchecking 'Include in Report Refresh'."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is the role of a 'Bridge Table' in a many-to-many relationship?",
    "options": [
      "It connects two fact tables that share no direct relationship",
      "It connects a fact table to a dimension table when the relationship is indirect",
      "It connects two dimension tables",
      "It stores the measure values"
    ],
    "correctOption": 1,
    "explanation": "A bridge table is an intermediate table used to resolve many-to-many relationships. For example, a 'Sales by Category' bridge might connect a 'Product' dimension to a 'Sales' fact through a 'Category' lookup."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is the 'Data Category' property used for in Power BI?",
    "options": [
      "To specify that a column contains geographic data (like city, country) for mapping visualizations",
      "To specify the data type",
      "To specify the sort order",
      "To specify the default aggregation"
    ],
    "correctOption": 0,
    "explanation": "Setting the Data Category (e.g., City, Postal Code, Country) allows Power BI to automatically associate that column with map locations so that map visuals can render them accurately."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What happens if you change the data type of a column after relationships are created?",
    "options": [
      "The relationships automatically update",
      "The relationships may break if the data types are incompatible",
      "The model view crashes",
      "The data source changes"
    ],
    "correctOption": 1,
    "explanation": "If you change a key column's data type to something incompatible with its related table's key column, the relationship might become invalid or show an error."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is a 'fact table' in a data model?",
    "options": [
      "A table that contains quantitative measures and foreign keys",
      "A table that contains descriptive attributes",
      "A table that defines relationships",
      "A table that stores security roles"
    ],
    "correctOption": 0,
    "explanation": "A fact table contains numerical metrics (sales amount, quantity) and foreign keys that link to dimension tables. It is the heart of the Star Schema."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is the purpose of a 'Dimension' table?",
    "options": [
      "To store attributes that provide context (like product name, color, category)",
      "To store transactions",
      "To store aggregated values",
      "To store relationships"
    ],
    "correctOption": 0,
    "explanation": "Dimension tables store the descriptive attributes that give context to the numerical facts in a fact table."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is the recommended practice for handling dates in Power BI modeling?",
    "options": [
      "Use multiple date columns from the fact table",
      "Create a separate dedicated Date table and connect it to date columns in other tables",
      "Use the built-in automatic date hierarchy",
      "Ignore dates"
    ],
    "correctOption": 1,
    "explanation": "Creating a separate, dedicated date table is the best practice. This allows you to use all the date dimensions (year, month, quarter, etc.) consistently across multiple date columns in fact tables."
  },
  {
    "testId": "powerbi-test-02",
    "question": "What is the purpose of an 'Inactive Relationship' in Power BI?",
    "options": [
      "It exists in the model but does not propagate filters by default; it can be activated using DAX functions like USERELATIONSHIP",
      "It is a broken relationship",
      "It is a relationship that cannot be used",
      "It is a relationship between two fact tables only"
    ],
    "correctOption": 0,
    "explanation": "An inactive relationship is represented by a dashed line. It doesn't automatically pass filters, but you can activate it in specific DAX calculations using the USERELATIONSHIP function to create role-playing dimensions."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What does DAX stand for in Power BI?",
    "options": ["Data Analysis Expressions", "Data Application Xpert", "Direct Analysis Xpress", "Dynamic Array Xtension"],
    "correctOption": 0,
    "explanation": "DAX stands for Data Analysis Expressions. It is a library of functions and operators used in Power BI, Analysis Services, and Power Pivot to build formulas."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the result of the DAX formula =SUM(Sales[Amount])?",
    "options": ["The sum of all values in the Amount column", "The count of rows in the Amount column", "The average of the Amount column", "The maximum of the Amount column"],
    "correctOption": 0,
    "explanation": "The SUM function in DAX adds all numeric values in the specified column and returns the total."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the purpose of the CALCULATE function in DAX?",
    "options": [
      "To evaluate an expression with modified filter context",
      "To create a calculated column",
      "To calculate the average",
      "To filter a single row"
    ],
    "correctOption": 0,
    "explanation": "CALCULATE is one of the most powerful DAX functions. It evaluates a given expression (e.g., SUM) by applying a new filter context to it, overriding the existing context."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the difference between a measure and a calculated column regarding storage?",
    "options": [
      "Measures are not stored; they are calculated on the fly. Calculated columns are stored in the model.",
      "Calculated columns are not stored; measures are stored.",
      "Both are stored physically",
      "Neither is stored"
    ],
    "correctOption": 0,
    "explanation": "Measures are dynamic formulas stored in the model metadata, but their results are computed during query execution. Calculated columns physically consume memory as they are stored values."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What does the FILTER function do in DAX?",
    "options": [
      "It returns a table that is a subset of the original table based on a condition",
      "It filters a single value",
      "It removes duplicates",
      "It sorts the data"
    ],
    "correctOption": 0,
    "explanation": "FILTER takes a table and a Boolean condition and returns a table with only the rows that satisfy the condition. It is commonly used as an argument in CALCULATE."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the syntax of the CALCULATE function?",
    "options": [
      "CALCULATE(expression, filter1, filter2, ...)",
      "CALCULATE(expression, table_name)",
      "CALCULATE(table, expression)",
      "CALCULATE(expression, group_by)"
    ],
    "correctOption": 0,
    "explanation": "CALCULATE requires an expression to evaluate, followed by zero or more filter arguments (e.g., FILTER, ALL, or simple column = value)."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the SUMX function used for?",
    "options": [
      "To sum values row by row over a table after applying a row-wise calculation",
      "To simply sum all values in a column",
      "To sum values after grouping",
      "To sum distinct values"
    ],
    "correctOption": 0,
    "explanation": "SUMX is an iterator. It iterates through a specified table, evaluates an expression for each row, and then sums the results. (e.g., SUMX(Sales, Sales[Qty] * Sales[Price]))."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the purpose of the ALL function in DAX?",
    "options": [
      "It removes all filters from a table or column for the evaluation of a measure",
      "It retrieves all rows from a table",
      "It adds all filters to a table",
      "It sums all values"
    ],
    "correctOption": 0,
    "explanation": "ALL is a powerful function that ignores any filters that may have been applied to a table or column, returning the entire set of values. It is often used in CALCULATE to modify context."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What does 'Evaluation Context' refer to in DAX?",
    "options": [
      "The combination of row context and filter context used to calculate a DAX expression",
      "The execution speed of the measure",
      "The syntax of the formula",
      "The data type of the result"
    ],
    "correctOption": 0,
    "explanation": "Evaluation context is fundamental to DAX. It is the environment in which a DAX expression is evaluated, consisting of Row Context (for calculated columns/iterators) and Filter Context (from visuals/slicers)."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is a 'Row Context' in DAX?",
    "options": [
      "The context that allows you to refer to the current row's values in a calculated column or iterator",
      "The context of the entire table",
      "The context of the visual",
      "The context of the measure"
    ],
    "correctOption": 0,
    "explanation": "Row context exists only in calculated columns and inside iterating functions (like SUMX). It refers to the ability to access the individual column values of the current row being processed."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the difference between COUNTROWS and COUNT?",
    "options": [
      "COUNTROWS counts rows in a table; COUNT counts non-blank values in a column",
      "COUNTROWS counts non-blank values; COUNT counts rows",
      "Both are identical",
      "COUNTROWS is used for measures; COUNT is used for calculated columns"
    ],
    "correctOption": 0,
    "explanation": "COUNTROWS(<table>) counts the number of rows in a table, regardless of blanks. COUNT(<column>) counts only the non-blank values in a specific column."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What will the DAX formula =CALCULATE(SUM(Sales[Amount]), Sales[Region] = 'North') do?",
    "options": [
      "It sums the Amount for rows where Region is 'North'",
      "It sums all Amounts regardless of filter",
      "It filters the table to 'North' and returns the table",
      "It sums the Amount after removing the Region filter"
    ],
    "correctOption": 0,
    "explanation": "CALCULATE modifies the filter context. Here, it sums the Sales[Amount] column only for rows where Region = 'North'. This is a standard way to create a region-specific measure."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the purpose of the VALUES function in DAX?",
    "options": [
      "It returns a one-column table that contains the unique values from a column",
      "It returns the sum of all values",
      "It returns a table with duplicates",
      "It returns the data type of a value"
    ],
    "correctOption": 0,
    "explanation": "VALUES returns a single-column table containing the distinct values from a specified column. It is often used inside iterators or to get a list of unique categories."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the use of the IF statement in DAX?",
    "options": [
      "To implement conditional logic (e.g., IF(condition, value_if_true, value_if_false))",
      "To filter data",
      "To sum data",
      "To rank data"
    ],
    "correctOption": 0,
    "explanation": "IF is a logical function in DAX used for branching and conditional logic in measures and calculated columns."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the result of =DIVIDE(5, 0, 0) in DAX?",
    "options": ["Error", "0", "Infinity", "5"],
    "correctOption": 1,
    "explanation": "DIVIDE handles division by zero gracefully. The third argument is the alternate result. Since 5/0 is infinite, it returns the alternate result, which is 0."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the CALCULATE function primarily used for?",
    "options": [
      "To change the filter context for an expression",
      "To create a new table",
      "To format a number",
      "To write a string"
    ],
    "correctOption": 0,
    "explanation": "CALCULATE is the only DAX function that can change the filter context. It is essential for creating measures like 'Total Sales North' or 'Total Sales Last Year'."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the purpose of the EARLIER function in DAX?",
    "options": [
      "It refers to an earlier row context in a nested iteration",
      "It refers to an earlier date",
      "It refers to a previous version of the model",
      "It calculates earlier rows"
    ],
    "correctOption": 0,
    "explanation": "EARLIER is a complex function used primarily in calculated columns when you need to access a value from an outer row context while iterating through rows in a nested context (e.g., running total calculations)."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What does the DAX formula =DISTINCTCOUNT(Sales[CustomerID]) return?",
    "options": [
      "The number of unique customers who made a purchase",
      "The total number of sales transactions",
      "The total number of customers in the database",
      "The count of all rows"
    ],
    "correctOption": 0,
    "explanation": "DISTINCTCOUNT counts the number of distinct (unique) values in a column, excluding duplicates. It is commonly used to count unique customers, products, etc."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the function of the 'RELATED' function in DAX?",
    "options": [
      "To return the value from a related column in another table (from the 'one' side to the 'many' side)",
      "To create a relationship",
      "To sum related values",
      "To filter related tables"
    ],
    "correctOption": 0,
    "explanation": "RELATED is used in calculated columns to fetch a value from a table that is on the 'one' side of a relationship. For example, getting Product Category from the Product table for a Sales row."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the difference between VAR and a direct expression in DAX?",
    "options": [
      "VAR allows you to store a value or table as a variable to reuse it, improving performance and readability",
      "VAR is mandatory for all calculations",
      "VAR returns a table, expressions return a scalar",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "The VAR...RETURN syntax allows you to define variables that store results of intermediate calculations. This makes code cleaner and avoids repeated calculations, often improving performance."
  },
  {
    "testId": "powerbi-test-03",
    "question": "Which DAX function would you use to calculate the year-over-year growth for a measure?",
    "options": [
      "CALCULATE with SAMEPERIODLASTYEAR",
      "SUMX",
      "FILTER",
      "COUNTROWS"
    ],
    "correctOption": 0,
    "explanation": "SAMEPERIODLASTYEAR returns a table of dates shifted one year back. You wrap your measure in CALCULATE with SAMEPERIODLASTYEAR to get last year's value, then calculate growth."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What does the 'TOTALYTD' function do in DAX?",
    "options": [
      "It calculates the year-to-date total for a measure",
      "It calculates the total for the last year",
      "It calculates a running total from the beginning of the month",
      "It calculates the total sales for all years"
    ],
    "correctOption": 0,
    "explanation": "TOTALYTD evaluates a measure (e.g., Sales) over the period from the start of the year to the current date context, respecting the provided date column."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the result of =SELECTEDVALUE(Product[Color]) in a measure?",
    "options": [
      "Returns the color value if the product column has a single filter applied; otherwise blank",
      "Returns a table of all colors",
      "Returns the count of colors",
      "Returns the first color alphabetically"
    ],
    "correctOption": 0,
    "explanation": "SELECTEDVALUE is a convenient function that returns the value of a column when there is exactly one distinct value in the current filter context. It's used to create dynamic text labels based on selections."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is a 'filter argument' in the CALCULATE function?",
    "options": [
      "A condition that modifies the evaluation context of the expression",
      "A column name that is always used in the expression",
      "A table name",
      "A measure name"
    ],
    "correctOption": 0,
    "explanation": "Filter arguments in CALCULATE can be Boolean expressions (like Table[Column] = 'X') or filter modifiers (like ALL, FILTER) that add to or override the existing filter context."
  },
  {
    "testId": "powerbi-test-03",
    "question": "Which DAX function is used to return a table of all rows except those filtered?",
    "options": ["ALL", "ALLSELECTED", "ALLEXCEPT", "FILTER"],
    "correctOption": 0,
    "explanation": "ALL returns all rows in a table or all distinct values in a column, ignoring any filters that have been applied. ALLEXCEPT returns all rows except those filtered by certain columns."
  },
  {
    "testId": "powerbi-test-03",
    "question": "In DAX, what is the purpose of the 'MAXX' function?",
    "options": [
      "To iterate over a table and return the maximum value of an expression evaluated for each row",
      "To return the maximum value in a column",
      "To count rows with a max value",
      "To return the maximum row"
    ],
    "correctOption": 0,
    "explanation": "MAXX is an iterator. It evaluates an expression for each row of a table and returns the maximum value among those results. Example: MAXX(Sales, Sales[Qty] * Sales[Price])."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What does the 'ISBLANK' function check for?",
    "options": [
      "Whether a value is NULL or empty",
      "Whether a value is numeric",
      "Whether a value is text",
      "Whether a value is an error"
    ],
    "correctOption": 0,
    "explanation": "ISBLANK returns TRUE if the value is a blank (equivalent to NULL in databases). It is frequently used in measures to handle missing data."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the best practice for naming DAX measures?",
    "options": [
      "Use descriptive names without spaces (e.g., TotalSalesAmount)",
      "Use short names (e.g., Tot)",
      "Use the same name as columns",
      "Use dates in the name"
    ],
    "correctOption": 0,
    "explanation": "Best practice is to use descriptive, clear names that describe what the measure calculates, often avoiding spaces for easier referencing in code, though Power BI supports spaces in measure names."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the difference between 'RELATED' and 'RELATEDTABLE'?",
    "options": [
      "RELATED returns a single value from a related table; RELATEDTABLE returns a table",
      "RELATEDTABLE returns a single value; RELATED returns a table",
      "Both return tables",
      "Both return single values"
    ],
    "correctOption": 0,
    "explanation": "RELATED is for the 'many-to-one' direction (returns a scalar from the dimension). RELATEDTABLE is for the 'one-to-many' direction (returns a table of all rows from the fact table related to the current dimension row)."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the function of the 'ADDMONTHS' DAX function?",
    "options": [
      "It returns a date shifted by the specified number of months",
      "It adds months to a table",
      "It adds a column to a table",
      "It sums monthly data"
    ],
    "correctOption": 0,
    "explanation": "ADDMONTHS(date, number_of_months) shifts a given date forward or backward by the specified number of months, returning a new date."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the 'Measure Table' used for?",
    "options": [
      "A dedicated table created to store all measures for better organization and discoverability",
      "A table imported from the data source",
      "A table created automatically by Power BI",
      "A table used for visual formatting"
    ],
    "correctOption": 0,
    "explanation": "Creating a dedicated 'Measures' table (or any name) helps organize your model. You create a new calculated table (with no columns) and store all your measures there, making them easier for report authors to find."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What does the DAX function =FORMAT(12345.67, 'Currency') do?",
    "options": [
      "It converts the number to text with a currency format",
      "It sums the currency",
      "It converts the currency to a number",
      "It creates a currency column"
    ],
    "correctOption": 0,
    "explanation": "FORMAT converts a value to text using the specified format string. It is useful for displaying numbers in reports as text with specific formatting (like currency symbols)."
  },
  {
    "testId": "powerbi-test-03",
    "question": "Which type of function is 'RELATED' classified as in DAX?",
    "options": ["Filter function", "Aggregation function", "Time intelligence function", "Information function"],
    "correctOption": 0,
    "explanation": "RELATED is categorized under filter functions because it relates to the filter context of relationships to fetch values from related tables."
  },
  {
    "testId": "powerbi-test-03",
    "question": "In a measure, what does the 'KEEPFILTERS' function do?",
    "options": [
      "It preserves existing filter context when adding a new filter in CALCULATE, instead of overwriting it",
      "It removes all filters",
      "It adds all filters",
      "It keeps only numeric filters"
    ],
    "correctOption": 0,
    "explanation": "KEEPFILTERS modifies the behavior of CALCULATE filters. Instead of replacing existing filters on a column, it adds to them (intersection), preserving the original context."
  },
  {
    "testId": "powerbi-test-03",
    "question": "What is the purpose of the 'SWITCH' function in DAX?",
    "options": [
      "To evaluate a list of conditions and return a corresponding value, like a multi-way IF",
      "To switch between tables",
      "To switch data sources",
      "To switch between pages"
    ],
    "correctOption": 0,
    "explanation": "SWITCH is a logical function that replaces nested IF statements for multiple conditions. Syntax: SWITCH(expression, value1, result1, value2, result2, ...)."
  },
  {
    "testId": "powerbi-test-04",
    "question": "Which chart type is most appropriate to display sales trends over multiple months in Power BI?",
    "options": ["Line chart", "Pie chart", "Treemap", "Gauge chart"],
    "correctOption": 0,
    "explanation": "Line charts are the best choice for showing trends over time because they visually demonstrate increases and decreases across a continuous axis."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What does a 'Slicer' visual do in a Power BI report?",
    "options": [
      "It filters other visuals on the page based on a user's selection",
      "It displays a single numeric value",
      "It shows a proportion of a total",
      "It creates a new calculated column"
    ],
    "correctOption": 0,
    "explanation": "Slicers are a powerful filtering control that allows users to interactively filter the entire report page. They are placed on the canvas like any other visual."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is a 'Bookmark' in Power BI?",
    "options": [
      "A saved state of a report page (including filters, slicers, and visual states)",
      "A saved PDF of the report",
      "A type of visual",
      "A security feature"
    ],
    "correctOption": 0,
    "explanation": "Bookmarks capture the current configuration of a report page, including selected slicers, filters, visible visuals, and drill-through states. They allow you to create story-like navigation experiences."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is the difference between a dashboard and a report in Power BI?",
    "options": [
      "A dashboard is a single-page, aggregated view of key metrics (tiles), often pinned from reports; a report is a multi-page, interactive data exploration tool",
      "A report is a single page; a dashboard is multi-page",
      "Dashboards are built in Power BI Desktop; reports are built in Service",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "A report is a multi-page canvas with fully interactive visualizations built from a dataset. A dashboard is a single page, often containing pinned tiles from multiple reports, that provides a high-level summary."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is the purpose of a 'Drill-through' action in Power BI?",
    "options": [
      "To allow users to click on a data point and see a detailed report page filtered to that specific context",
      "To sort data in a visual",
      "To export data to Excel",
      "To refresh the data"
    ],
    "correctOption": 0,
    "explanation": "Drill-through enables users to right-click a data point and navigate to a designated detail page that is filtered to the context of that specific selection (e.g., clicking 'Product A' shows a page filtered only for 'Product A')."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is a 'Tile' on a Power BI dashboard?",
    "options": [
      "A single visual, chart, or report page pinned to the dashboard canvas",
      "A type of background pattern",
      "A data source connection",
      "A user permission"
    ],
    "correctOption": 0,
    "explanation": "Tiles are individual building blocks of a dashboard. They can be pinned visuals from reports, quick insights, or even images and text boxes."
  },
  {
    "testId": "powerbi-test-04",
    "question": "Which visual would you use to display geographical data on a map?",
    "options": ["Pie Chart", "Scatter Plot", "Filled Map or Map visual", "Gauge Chart"],
    "correctOption": 2,
    "explanation": "The Map visual (or Filled Map) is specifically designed to plot data based on geographic fields (like country, state, city, or latitude/longitude)."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is 'conditional formatting' in Power BI?",
    "options": [
      "The ability to dynamically change the color or appearance of a visual based on the data values (e.g., color by rules)",
      "The ability to format the layout of the page",
      "The ability to change the data source",
      "The ability to set a password"
    ],
    "correctOption": 0,
    "explanation": "Conditional formatting lets you apply formatting rules (like changing the background color, font color, or data bar color) based on the values in the visual or the selected field."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is the function of the 'Filters' pane in Power BI Desktop?",
    "options": [
      "To apply filters at the visual, page, and report levels",
      "To sort the data source",
      "To create calculated columns",
      "To format the page size"
    ],
    "correctOption": 0,
    "explanation": "The Filters pane is the central location for managing filter context on a report page. You can filter individual visuals, the entire page, or the entire report."
  },
  {
    "testId": "powerbi-test-04",
    "question": "Which visual is best suited for displaying the top 10 products by sales?",
    "options": ["Pie Chart", "Bar Chart (sorted descending)", "Line Chart", "Treemap"],
    "correctOption": 1,
    "explanation": "A sorted Bar Chart is the most effective way to show a ranking or 'top N' list because it clearly displays the hierarchy of values."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is the 'Treemap' visual primarily used for?",
    "options": [
      "To display hierarchical data as nested rectangles (proportional to values)",
      "To display time-series data",
      "To display correlation",
      "To display a single number"
    ],
    "correctOption": 0,
    "explanation": "Treemaps show hierarchical data as a set of nested rectangles. Each branch of the tree is given a rectangle, which is then tiled with smaller rectangles for sub-branches, with size often proportional to a metric."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What does the 'Sync Slicers' feature do in Power BI?",
    "options": [
      "It ensures that a slicer selection on one page applies to the same slicer on other pages in the report",
      "It synchronizes the report with the data source",
      "It synchronizes the visual colors",
      "It syncs the page layout"
    ],
    "correctOption": 0,
    "explanation": "The 'Sync Slicers' pane allows you to connect a slicer across multiple pages of a report, so that when a user filters on one page, the filter is applied to that same slicer on other specified pages."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is a 'Button' in Power BI used for (aside from slicers)?",
    "options": [
      "To perform actions like navigating to a page, using bookmarks, or resetting filters",
      "To calculate data",
      "To import data",
      "To format text"
    ],
    "correctOption": 0,
    "explanation": "Buttons (in the Insert tab) are used for interactivity. You can assign actions to them such as 'Page navigation', 'Bookmark', 'Drill through', or 'Reset filters'."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is the 'Z-order' of visuals in a report?",
    "options": [
      "The layering order of visuals on the canvas (which visual is on top)",
      "The alphabetical order of the visuals",
      "The order of data refresh",
      "The sorting order"
    ],
    "correctOption": 0,
    "explanation": "Z-order determines the stacking sequence of overlapping visuals. You can use the 'Bring forward' and 'Send backward' options to control this layering."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is the advantage of using a 'Composite Model' in Power BI for visualization?",
    "options": [
      "It allows you to combine Import and DirectQuery sources in a single model for greater flexibility",
      "It allows you to format visuals better",
      "It allows faster refresh times",
      "It allows only one data source"
    ],
    "correctOption": 0,
    "explanation": "Composite models enable you to mix data from different storage modes (Import and DirectQuery) within the same dataset. This is useful for combining fast in-memory calculations with live, real-time data."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is a 'Mobile Layout' in Power BI Desktop?",
    "options": [
      "A special view that allows you to design a layout optimized for phones and tablets",
      "A layout for desktop monitors",
      "A layout for printing",
      "A layout for large TV screens"
    ],
    "correctOption": 0,
    "explanation": "Power BI Desktop has a Mobile layout view where you can rearrange, resize, and hide visuals to create a tailored experience for mobile users."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is the function of a 'Text Box' in a Power BI report?",
    "options": [
      "To add static text, titles, or annotations to the report canvas",
      "To enter data",
      "To create dynamic calculations",
      "To display a map"
    ],
    "correctOption": 0,
    "explanation": "Text boxes are used to add descriptive titles, instructions, or annotations on the report canvas to make the report more user-friendly."
  },
  {
    "testId": "powerbi-test-04",
    "question": "Which visual would you use to show the correlation between two numeric variables?",
    "options": ["Scatter Chart", "Pie Chart", "Stacked Column Chart", "Area Chart"],
    "correctOption": 0,
    "explanation": "Scatter charts plot two numeric variables against each other, making them the ideal choice to visualize relationships or correlations (e.g., Sales vs. Profit)."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is the purpose of 'Drill Up' and 'Drill Down' in a hierarchy visual?",
    "options": [
      "To navigate between different levels of a hierarchy (e.g., Year > Quarter > Month)",
      "To refresh the visual",
      "To sort the data",
      "To export the data"
    ],
    "correctOption": 0,
    "explanation": "Drill Up/Down allows users to expand or collapse a hierarchy in a visual, like a matrix or bar chart, to see data at a more granular or more aggregated level."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is the 'Format pane' in Power BI used for?",
    "options": [
      "To customize the appearance of a visual (colors, borders, font, title, etc.)",
      "To change the data source",
      "To write DAX formulas",
      "To manage relationships"
    ],
    "correctOption": 0,
    "explanation": "The Format pane (paint roller icon) provides a wide range of formatting options for visuals and the canvas, including visual properties like borders, shadows, colors, and text sizes."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What does the 'Show as a Table' option do in a visual?",
    "options": [
      "It temporarily displays the underlying data of the visual as a table grid",
      "It permanently converts the visual to a table",
      "It exports the data",
      "It sorts the visual"
    ],
    "correctOption": 0,
    "explanation": "You can right-click a visual and select 'Show as a table' to view the raw data that the visual is currently displaying. This is useful for debugging or verifying the underlying figures."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is the purpose of the 'Analytics' pane in Power BI visualizations?",
    "options": [
      "To add reference lines, trend lines, and forecast lines to a visual",
      "To analyze the data model",
      "To build relationships",
      "To write DAX"
    ],
    "correctOption": 0,
    "explanation": "The Analytics pane provides features like constant lines, trend lines, percentile lines, and forecasts to add analytical context to your visuals."
  },
  {
    "testId": "powerbi-test-04",
    "question": "Which Power BI visualization is best for displaying the percentage of a total using slices?",
    "options": ["Donut Chart", "Bar Chart", "Line Chart", "Scatter Plot"],
    "correctOption": 0,
    "explanation": "Donut charts (a variation of pie charts) are specifically designed to show proportions or percentages of a total, with the center used to display the total value."
  },
  {
    "testId": "powerbi-test-04",
    "question": "How does 'Visual-level filtering' differ from 'Page-level filtering'?",
    "options": [
      "Visual-level filters apply only to a single visual; page-level filters apply to all visuals on that page",
      "Visual-level filters apply to the entire report",
      "There is no difference",
      "Page-level filters apply to one visual"
    ],
    "correctOption": 0,
    "explanation": "Visual-level filters (located in the Filter pane under 'Filters on this visual') only affect the selected visual. Page-level filters affect all visuals on that report page."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is a 'Decomposition Tree' visual in Power BI?",
    "options": [
      "A visual that allows you to break down a measure across dimensions interactively, finding key drivers",
      "A type of tree map",
      "A visual for time-series data",
      "A visual for security roles"
    ],
    "correctOption": 0,
    "explanation": "The Decomposition Tree is an AI-powered visual that enables users to drill down into a measure (like Profit) and see the contribution of different dimensions (like Region, Product) to find the root causes of performance."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What does the 'Page Navigation' option in a Button do?",
    "options": [
      "It navigates the user to a different page within the same report",
      "It navigates to a different report",
      "It navigates to a website",
      "It refreshes the page"
    ],
    "correctOption": 0,
    "explanation": "The 'Page navigation' action for buttons allows you to create a clickable element that instantly takes the user to another page in the current report."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is the purpose of a 'Tooltip' in Power BI?",
    "options": [
      "To display additional information when a user hovers over a data point in a visual",
      "To create a new visual",
      "To apply a filter",
      "To export data"
    ],
    "correctOption": 0,
    "explanation": "Tooltips provide context and detail. You can customize them to show specific metric values, descriptions, or even a full report page as a drill-through popup."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is the 'Matrix' visual used for?",
    "options": [
      "To display data in a grid with rows and columns, enabling cross-tabulation and drill-down into hierarchies",
      "To display a single number",
      "To show a pie chart",
      "To create a scatter plot"
    ],
    "correctOption": 0,
    "explanation": "The Matrix visual is a flexible table that can handle multiple dimensions on rows and columns, with the ability to expand and collapse hierarchical data (e.g., Year > Quarter > Month)."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What does the 'Filled Map' visual require to plot data correctly?",
    "options": [
      "Geographic data like Country, State, or City, or latitude/longitude fields",
      "Only numerical data",
      "Date and time data",
      "Text data only"
    ],
    "correctOption": 0,
    "explanation": "A Filled Map relies on geographic identifiers (e.g., 'United States', 'California') to shade regions based on a measure value. It does not work with arbitrary text."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is the 'Visualizations' pane used for?",
    "options": [
      "To select and configure visuals (adding fields, changing chart types)",
      "To manage data sources",
      "To set security roles",
      "To refresh data"
    ],
    "correctOption": 0,
    "explanation": "The Visualizations pane is the central hub for building visuals: choosing a chart type, dragging fields to different buckets (Axis, Values, Legend), and enabling data labels."
  },
  {
    "testId": "powerbi-test-04",
    "question": "What is the difference between a 'Standard' visual and a 'Custom' visual in Power BI?",
    "options": [
      "Standard visuals are built-in by Microsoft; Custom visuals are created by developers and can be imported from the marketplace",
      "Standard visuals are paid; Custom visuals are free",
      "Custom visuals are always better",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "Microsoft provides a core library of standard visuals. Custom visuals are community or vendor-created visuals that you can download and import into Power BI to extend functionality."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What does the 'VAR' keyword in DAX allow you to do that improves performance?",
    "options": [
      "It stores the result of an expression to avoid repeated calculation, reducing query execution time",
      "It defines a variable for the entire report",
      "It changes the data type of a column",
      "It creates a new calculated column"
    ],
    "correctOption": 0,
    "explanation": "Using VAR allows you to store intermediate results. Since DAX recalculates expressions in different contexts, using VAR ensures that a specific part of the formula is calculated only once, significantly improving performance."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is 'Row-Level Security' (RLS) in Power BI?",
    "options": [
      "A feature that restricts data access at the row level based on user roles and DAX filters",
      "A feature that hides columns",
      "A feature that encrypts the entire dataset",
      "A feature that restricts report viewing based on IP addresses"
    ],
    "correctOption": 0,
    "explanation": "RLS allows you to filter data at the row level for specific user groups. For example, a salesperson can only see sales records for their own region. This is enforced by the Power BI Service."
  },
  {
    "testId": "powerbi-test-05",
    "question": "Which DAX function is commonly used to implement Row-Level Security (RLS) when a user logs in?",
    "options": ["USERNAME()", "USERPRINCIPALNAME()", "LOGIN()", "USER()"],
    "correctOption": 1,
    "explanation": "USERPRINCIPALNAME() returns the user's email address (User Principal Name) in the Power BI Service. It is the standard function used in RLS DAX rules to filter data based on the logged-in user."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is the advantage of using 'Composite Models' in Power BI?",
    "options": [
      "It allows mixing DirectQuery and Import data sources to optimize performance and handle large datasets",
      "It allows combining visuals from different reports",
      "It allows writing advanced VBA",
      "It allows embedding Power BI in PowerPoint"
    ],
    "correctOption": 0,
    "explanation": "Composite models give you the best of both worlds: high-speed Import mode for aggregated data and real-time DirectQuery for transactional data, optimizing both performance and data freshness."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is a 'Dataset' in the Power BI Service?",
    "options": [
      "A collection of data tables, relationships, and measures that a report is based on",
      "A visual on a report",
      "A single table in Excel",
      "A user permission"
    ],
    "correctOption": 0,
    "explanation": "In the Service, a Dataset represents the data model (including imported data, transformations, and DAX formulas) that has been published to the workspace and is used to build reports."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What does the 'Incremental Refresh' feature do in Power BI?",
    "options": [
      "It refreshes only new or changed data since the last refresh, rather than the entire dataset, to save time and resources",
      "It refreshes data every minute",
      "It refreshes data in batches",
      "It refreshes only the first 1000 rows"
    ],
    "correctOption": 0,
    "explanation": "Incremental Refresh is a performance optimization for large datasets. Instead of reloading all historical data, it only loads new or modified data from the source, significantly reducing refresh time."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is the purpose of the 'Performance Analyzer' in Power BI Desktop?",
    "options": [
      "To record and measure the time taken to load and render visuals and DAX queries for debugging optimization",
      "To analyze the data source",
      "To analyze security roles",
      "To analyze the file size"
    ],
    "correctOption": 0,
    "explanation": "Performance Analyzer logs the time it takes for each visual to execute DAX queries and render, helping developers identify bottlenecks in their reports."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is 'DirectQuery' best suited for in terms of data refresh?",
    "options": [
      "When data changes frequently and you need real-time/up-to-the-minute information",
      "When data never changes",
      "When the data source is a PDF file",
      "When you want to minimize storage costs"
    ],
    "correctOption": 0,
    "explanation": "DirectQuery is ideal for large or frequently changing data sources (like operational databases) where you need to see the latest data without waiting for a scheduled import refresh."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is a 'Workspace' in the Power BI Service?",
    "options": [
      "A shared environment where users collaborate to create, manage, and distribute Power BI content (dashboards, reports, datasets)",
      "A single folder on a user's desktop",
      "A type of visual",
      "A data source"
    ],
    "correctOption": 0,
    "explanation": "Workspaces are collaborative containers in the Power BI Service. They replace 'Groups' and serve as the main hub for publishing reports, sharing dashboards, and managing access."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is the purpose of 'Power BI Report Server'?",
    "options": [
      "An on-premises server solution for hosting Power BI reports, paginated reports, and mobile reports behind a corporate firewall",
      "A cloud-only service",
      "A server for Excel files",
      "A server for SharePoint data"
    ],
    "correctOption": 0,
    "explanation": "Power BI Report Server is an on-premises version of the Power BI Service that allows you to host reports internally without requiring cloud connectivity, often used for compliance reasons."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What does the 'Schedule Refresh' setting do in the Power BI Service?",
    "options": [
      "It allows you to define a frequency and time for the dataset to automatically re-import data from the source",
      "It schedules a backup of the report",
      "It schedules an email report distribution",
      "It schedules a data export"
    ],
    "correctOption": 0,
    "explanation": "Schedule Refresh automates the process of updating your Power BI dataset with the latest data from your data sources, ensuring your reports display current information."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is the function of the 'Data Gateway' cluster?",
    "options": [
      "To ensure high availability and load balancing for data refresh from on-premises sources",
      "To cluster data sources",
      "To cluster reports",
      "To cluster users"
    ],
    "correctOption": 0,
    "explanation": "A gateway cluster allows you to install multiple gateway servers to avoid single points of failure. If one gateway goes down, another can handle the refresh requests."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is a 'Paginated Report' in the Power BI Service?",
    "options": [
      "A report designed for printing, with a fixed layout, optimized for pixel-perfect representation and formatted PDF exports",
      "An interactive visual report",
      "A dashboard",
      "A dataflow"
    ],
    "correctOption": 0,
    "explanation": "Paginated reports (formerly SSRS reports) are designed for printing or PDF generation. They have a fixed table/column layout that repeats across pages and can handle complex, multi-page documents."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What does the 'External Sharing' feature in Power BI Service allow?",
    "options": [
      "To share reports and dashboards with users outside your organization (guest users) using Azure AD B2B",
      "To share reports with everyone on the internet",
      "To share data sources",
      "To share workspaces"
    ],
    "correctOption": 0,
    "explanation": "External Sharing uses Azure AD Business-to-Business (B2B) integration to securely share Power BI content with external partners or customers who have a company email address."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is the 'Audit Log' in Power BI used for?",
    "options": [
      "To track user activities (viewing reports, refreshing data, sharing dashboards) for compliance and security monitoring",
      "To log DAX errors",
      "To log data source connection strings",
      "To log refresh time"
    ],
    "correctOption": 0,
    "explanation": "The Power BI Audit Log (available in Microsoft 365 compliance center) records user activity events, helping administrators monitor usage, investigate security incidents, and meet regulatory requirements."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is the purpose of 'DAX Studio' for advanced Power BI developers?",
    "options": [
      "An external tool for writing, debugging, and optimizing DAX queries with advanced performance metrics",
      "A tool for building visuals",
      "A tool for data import",
      "A tool for administering workspaces"
    ],
    "correctOption": 0,
    "explanation": "DAX Studio is a popular third-party tool that offers advanced features like syntax highlighting, query execution plans, and detailed performance analysis, which are crucial for complex DAX optimization."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is a 'Deployment Pipeline' in Power BI?",
    "options": [
      "A way to move content (datasets, reports) from a development workspace, to a test workspace, to a production workspace",
      "A pipeline for data refresh",
      "A pipeline for visual development",
      "A pipeline for user management"
    ],
    "correctOption": 0,
    "explanation": "Deployment Pipelines automate the process of promoting Power BI content through different stages of the development lifecycle, ensuring that only tested and approved content goes to production."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is the function of the 'CROSSFILTER' function in DAX?",
    "options": [
      "It modifies the cross-filtering direction of a relationship in a specific DAX calculation",
      "It creates a cross-filter relationship",
      "It removes a relationship",
      "It ignores all filters"
    ],
    "correctOption": 0,
    "explanation": "CROSSFILTER is used within a CALCULATE expression to temporarily change the filter direction of a relationship (e.g., make it 'Both' instead of 'Single' for a specific calculation), without changing the model."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What does the 'Tabular Editor' tool allow you to do?",
    "options": [
      "To edit the Power BI model metadata, tables, and DAX measures in a more efficient, scriptable environment",
      "To edit Power Query",
      "To format visuals",
      "To manage service permissions"
    ],
    "correctOption": 0,
    "explanation": "Tabular Editor is an external tool that provides a powerful interface for editing the underlying tabular model of a Power BI file (.pbix). It allows for bulk modifications, C# scripting, and advanced model management."
  },
  {
    "testId": "powerbi-test-05",
    "question": "In the context of DAX, what does 'Materialization' refer to?",
    "options": [
      "The physical storage and caching of intermediate calculation results in memory",
      "The process of exporting data to a file",
      "The process of creating visuals",
      "The process of refreshing data"
    ],
    "correctOption": 0,
    "explanation": "In DAX, materialization occurs when the formula engine creates an in-memory copy of a result table (e.g., from a FILTER or SUMMARIZE) to perform further calculations. Understanding materialization is key to optimizing performance."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is the purpose of setting a 'default' visual for a field in the Data View?",
    "options": [
      "To define which visual type (like card, bar chart) should be used when a user adds that field to a blank report",
      "To format the data type",
      "To create a relationship",
      "To hide the field"
    ],
    "correctOption": 0,
    "explanation": "You can set a default visual for a field (numeric, date, text) so that when a user double-clicks it or adds it, Power BI chooses a sensible default visualization, improving the user experience for self-service."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is a 'Data Source' in Power Query, and what type of data sources are supported?",
    "options": [
      "A connection to a storage location; supports over 100 sources including Databases, Web APIs, Excel, Hadoop, etc.",
      "Only Microsoft SQL Server",
      "Only Excel files",
      "Only cloud sources"
    ],
    "correctOption": 0,
    "explanation": "Power BI supports a vast ecosystem of data sources, including all major relational databases, cloud services (Azure, Salesforce), flat files, web endpoints, and many more."
  },
  {
    "testId": "powerbi-test-05",
    "question": "Which visualization is ideal for comparing values across multiple categories with strict horizontal space constraints?",
    "options": ["Bar chart (Horizontal)", "Column chart (Vertical)", "Pie chart", "Scatter chart"],
    "correctOption": 0,
    "explanation": "Horizontal Bar charts are ideal when you have long category names or many categories, as they allow the labels to be read more easily."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is the purpose of using the 'AI Visuals' like 'Key Influencers'?",
    "options": [
      "To automatically analyze data and identify the factors that are driving a specific metric (e.g., why sales are high)",
      "To create machine learning models",
      "To replace DAX",
      "To import data from AI sources"
    ],
    "correctOption": 0,
    "explanation": "AI Visuals in Power BI (like Key Influencers, Decomposition Tree, and Q&A) use built-in machine learning algorithms to help users explore data and find patterns without writing complex DAX or Python code."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is the functionality of 'Q&A' in Power BI?",
    "options": [
      "It allows users to ask questions in natural language and displays the answer as a visual",
      "It is a coding language",
      "It is a data source",
      "It is a security feature"
    ],
    "correctOption": 0,
    "explanation": "Q&A enables users to type a question in plain English (e.g., 'Total sales by region') and Power BI analyzes the dataset to generate an appropriate visual, making BI accessible to non-technical users."
  },
  {
    "testId": "powerbi-test-05",
    "question": "Which feature helps with optimizing Power BI reports for mobile viewing?",
    "options": ["Mobile Layout view", "Desktop View", "Table View", "Model View"],
    "correctOption": 0,
    "explanation": "The Mobile Layout view in Power BI Desktop allows you to create a distinct, optimized version of your report page specifically for phones and tablets, controlling which visuals are visible and their size/position."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What does the 'Export to PDF' feature in Power BI Service primarily support?",
    "options": [
      "Exporting the current report page (or all pages) to a static PDF document for printing or sharing",
      "Exporting the data only",
      "Exporting the visual code",
      "Exporting the data model"
    ],
    "correctOption": 0,
    "explanation": "The 'Export' button in the Service allows users to export the report to PDF, PowerPoint, and other formats for offline viewing or distribution."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is a 'Subscription' in the Power BI Service?",
    "options": [
      "A scheduled email sent to users containing a snapshot of a dashboard or report page",
      "A payment plan",
      "A type of license",
      "A data refresh setting"
    ],
    "correctOption": 0,
    "explanation": "Subscriptions automatically email report pages or dashboards to recipients on a scheduled basis (daily, weekly, monthly), keeping stakeholders updated without them having to log in."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is the 'All' filter in a visual context?",
    "options": [
      "It means no filters are applied; showing all available data",
      "It means applying a specific filter",
      "It means sorting the data",
      "It means grouping the data"
    ],
    "correctOption": 0,
    "explanation": "When you select 'All' in a slicer or filter, it clears the filter and displays the complete, unfiltered dataset in that context."
  },
  {
    "testId": "powerbi-test-05",
    "question": "Which DAX function is used to get the current date and time of the database server?",
    "options": ["NOW()", "TODAY()", "UTCNOW()", "DATE()"],
    "correctOption": 0,
    "explanation": "NOW() returns the current date and time at the moment the query is executed (based on the system clock of the server running the calculation)."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is the primary advantage of creating and using a 'Custom Visual' for a specific business need?",
    "options": [
      "It allows visualization of data in a unique format that is not available in the built-in standard visuals",
      "It is always faster",
      "It requires no DAX",
      "It is automatically shared with everyone"
    ],
    "correctOption": 0,
    "explanation": "Custom Visuals (from the marketplace or custom-developed) fill the gap when standard visuals (like gauge, tree, etc.) don't meet specific reporting requirements, enabling highly tailored data representation."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What does the 'Viewer' role in a Power BI workspace allow a user to do?",
    "options": [
      "To only view and interact with published reports and dashboards, without editing permissions",
      "To edit reports",
      "To create new reports",
      "To manage user permissions"
    ],
    "correctOption": 0,
    "explanation": "The Viewer role (or Read-only) grants permission to view content in a workspace. They cannot create or publish new content, but they can interact with filters, slicers, and export data."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is the purpose of the 'Favorites' feature in the Power BI Service?",
    "options": [
      "To bookmark specific reports or dashboards for quick access in the navigation pane",
      "To favorite specific data rows",
      "To favorite a visual",
      "To favorite a color palette"
    ],
    "correctOption": 0,
    "explanation": "Marking a dashboard or report as a 'Favorite' adds a star and places it in the Favorites list in the navigation pane, making it easily accessible."
  },
  {
    "testId": "powerbi-test-05",
    "question": "What is the function of the 'Publish to Power BI Service' button in Power BI Desktop?",
    "options": [
      "To upload your report, dataset, and model to a workspace in the Power BI Service",
      "To save a local file",
      "To export to Excel",
      "To print the report"
    ],
    "correctOption": 0,
    "explanation": "The 'Publish' button allows you to deploy your Power BI Desktop file (.pbix) to the cloud service, making it accessible to your team members and enabling sharing."
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
console.log('Added ' + newQuestions.length + ' power bi questions to questions.js');
