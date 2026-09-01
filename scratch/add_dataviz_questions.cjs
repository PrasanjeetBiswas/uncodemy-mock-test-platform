const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "dataviz-test-01",
    "question": "What is the primary purpose of data visualization?",
    "options": [
      "To make data look aesthetically pleasing",
      "To present data in a visual format for easier understanding and insight discovery",
      "To replace statistical analysis completely",
      "To store large amounts of data"
    ],
    "correctOption": 1,
    "explanation": "Data visualization transforms complex data into visual formats (charts, graphs, maps) to help people understand patterns, trends, and insights more easily[reference:7]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "Which chart type is most appropriate for comparing different categories of data?",
    "options": ["Line chart", "Pie chart", "Bar chart", "Scatter plot"],
    "correctOption": 2,
    "explanation": "Bar charts are ideal for comparing different categories by representing them as bars of different lengths[reference:8]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "Which chart type is best suited for showing trends over time?",
    "options": ["Bar chart", "Pie chart", "Line chart", "Histogram"],
    "correctOption": 2,
    "explanation": "Line charts are ideal for showing trends and changes over a continuous time period, such as sales over months or years[reference:9]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What is the main difference between a bar graph and a line graph?",
    "options": [
      "Bar graphs use lines to represent data; line graphs use bars",
      "Bar graphs use bars to represent data; line graphs use lines to connect data points",
      "Bar graphs are for numbers; line graphs are for text",
      "There is no difference"
    ],
    "correctOption": 1,
    "explanation": "Bar graphs use rectangular bars to represent data values, while line graphs use lines to connect data points, showing trends over time[reference:10]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "Which type of visualization is best for showing the composition of values within a categorical variable?",
    "options": ["Histogram", "Scatter plot", "Pie chart", "Line chart"],
    "correctOption": 2,
    "explanation": "Pie charts are commonly used to display qualitative data as percentages or proportions of a whole[reference:11]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What is the main lesson from Anscombe's Quartet?",
    "options": [
      "All data sets look the same",
      "Statistical properties can be identical, but visual representations can differ dramatically",
      "Statistics are always reliable",
      "Visual representations are unnecessary"
    ],
    "correctOption": 1,
    "explanation": "Anscombe's Quartet demonstrates that four datasets with nearly identical statistical properties (mean, variance, correlation) can have very different visual appearances when plotted[reference:12]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "Which visualization is most appropriate for displaying the distribution of a numerical variable?",
    "options": ["Bar chart", "Pie chart", "Histogram", "Scatter plot"],
    "correctOption": 2,
    "explanation": "Histograms are used to visualize the distribution of numerical (quantitative) data by grouping values into intervals or bins[reference:13]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What type of graph is commonly used to display qualitative data as percentages of a whole?",
    "options": ["Bar chart", "Pie chart", "Histogram", "Line chart"],
    "correctOption": 1,
    "explanation": "Pie charts are commonly used to display qualitative data as percentages of a whole[reference:14]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What is typically represented on the horizontal axis of a bar graph?",
    "options": [
      "The numerical values being measured",
      "The categories being compared",
      "The frequency of occurrence",
      "The time periods"
    ],
    "correctOption": 1,
    "explanation": "In a bar graph, the horizontal axis (x-axis) typically represents the categories being compared, while the vertical axis represents the values[reference:15]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What is the difference between a table and a chart for data representation?",
    "options": [
      "Tables are for words; charts are for numbers",
      "Tables are 3D; charts are 2D",
      "Tables use rows and columns; charts use visual elements",
      "Tables are only used in Excel; charts are used everywhere"
    ],
    "correctOption": 2,
    "explanation": "The main difference is the way data is presented: tables use rows and columns to display data in a structured format, while charts use visual elements like bars, lines, and points[reference:16]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "How did Dr. Jon Snow use graphics to solve a health crisis?",
    "options": [
      "By creating complex equations",
      "By mapping deaths and water pumps to identify the source of a cholera outbreak",
      "By ignoring visual data",
      "By using a computer to analyze data"
    ],
    "correctOption": 1,
    "explanation": "Dr. Jon Snow used mapping to identify the source of a cholera outbreak in London by plotting deaths and water pump locations[reference:17]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "Which chart type is best for showing the relationship between two numerical variables?",
    "options": ["Bar chart", "Pie chart", "Scatter plot", "Histogram"],
    "correctOption": 2,
    "explanation": "Scatter plots are used to show the relationship or correlation between two numerical variables by plotting points on an x-y axis."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What does a Pareto chart display?",
    "options": [
      "Data sorted in alphabetical order",
      "Bars ordered from largest to smallest with a cumulative percentage line",
      "Data distributed across time",
      "Random data points"
    ],
    "correctOption": 1,
    "explanation": "A Pareto chart displays bars in descending order (largest to smallest) with a cumulative percentage line, following the 80/20 principle[reference:18]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "Which of the following is a true statement about a boxplot?",
    "options": [
      "It shows the mean of the data",
      "It displays the median, quartiles, and potential outliers",
      "It is used only for categorical data",
      "It shows trends over time"
    ],
    "correctOption": 1,
    "explanation": "A boxplot (or box-and-whisker plot) displays the median, quartiles (Q1 and Q3), and potential outliers, providing a visual summary of the data distribution[reference:19]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "Why should statistics not be used blindly?",
    "options": [
      "They are easy to understand",
      "They can be misleading without proper context and visualization",
      "They do not require graphics",
      "They are always accurate"
    ],
    "correctOption": 1,
    "explanation": "Statistics can be misleading without proper context. Visualizing data helps reveal patterns, outliers, and relationships that numbers alone may hide[reference:20]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "Which type of data is most suitable for visualizing using a line chart?",
    "options": [
      "Categorical data",
      "Time-series data showing trends over time",
      "Geographical data",
      "Binary data"
    ],
    "correctOption": 1,
    "explanation": "Line charts are most suitable for time-series data where the goal is to show trends and changes over a continuous time period[reference:21]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What is the purpose of a histogram?",
    "options": [
      "To compare categories",
      "To show the distribution of numerical data by grouping values into bins",
      "To show relationships between variables",
      "To display parts of a whole"
    ],
    "correctOption": 1,
    "explanation": "A histogram displays the distribution of numerical data by grouping values into intervals (bins) and showing the frequency of values in each bin[reference:22]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "Which chart type would you use to display data over time with multiple categories?",
    "options": ["Pie chart", "Stacked bar chart", "Scatter plot", "Histogram"],
    "correctOption": 1,
    "explanation": "Stacked bar charts or stacked area charts can display data over time while also showing the contribution of multiple categories."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What is the key difference between a bar chart and a histogram?",
    "options": [
      "Bar charts are for numerical data; histograms are for categorical data",
      "Bar charts have gaps between bars; histograms have no gaps",
      "Bar charts show trends; histograms show relationships",
      "There is no difference"
    ],
    "correctOption": 1,
    "explanation": "Bar charts typically have gaps between bars to separate categories, while histograms have no gaps because they represent continuous numerical data grouped into intervals."
  },
  {
    "testId": "dataviz-test-01",
    "question": "Which visualization is best for showing geographical patterns in data?",
    "options": ["Pie chart", "Map visualization", "Bar chart", "Line chart"],
    "correctOption": 1,
    "explanation": "Map visualizations (like choropleth or bubble maps) are specifically designed to display geographical patterns and spatial distributions of data."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What does a scatter plot help you identify?",
    "options": [
      "The distribution of a single variable",
      "The relationship or correlation between two numerical variables",
      "Parts of a whole",
      "Trends over time"
    ],
    "correctOption": 1,
    "explanation": "Scatter plots help identify relationships, correlations, and patterns between two numerical variables by plotting points on an x-y plane."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What type of graph should you use to display the frequency distribution of categorical data?",
    "options": ["Histogram", "Bar chart", "Line chart", "Boxplot"],
    "correctOption": 1,
    "explanation": "Bar charts are used to display the frequency distribution of categorical data, with each bar representing a category and its height showing the frequency."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What is the main advantage of using visualizations over raw data tables?",
    "options": [
      "Visualizations take less storage space",
      "Visualizations make patterns and trends more apparent and easier to understand",
      "Visualizations are always more accurate",
      "Visualizations require less data"
    ],
    "correctOption": 1,
    "explanation": "Visualizations transform raw data into visual formats that make patterns, trends, and outliers more apparent and easier to understand[reference:23]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "Which of the following is NOT a valid type of data visualization?",
    "options": ["Bar chart", "Pie chart", "Scatter plot", "Text table only"],
    "correctOption": 3,
    "explanation": "While text tables are a form of data presentation, they are not considered data visualizations in the traditional sense. Visualizations use graphical elements to represent data."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What is the main challenge of using color in data visualization?",
    "options": [
      "Colors are universally understood",
      "There is no natural order for colors, making interpretation difficult",
      "Colors are better than shades of grey",
      "Colors are always clear and effective"
    ],
    "correctOption": 1,
    "explanation": "Color can be challenging because there is no natural order for colors, making it difficult for viewers to interpret which colors represent higher or lower values[reference:24]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "Which of the following provides a useful means for displaying data over time?",
    "options": ["Scatter plot", "Line chart", "Pie chart", "Bar chart without time on the axis"],
    "correctOption": 1,
    "explanation": "Line charts provide a useful means for displaying data over time, showing trends and changes across a continuous timeline[reference:25]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "In data visualization, what is a 'bin width'?",
    "options": [
      "The width of a bar in a bar chart",
      "The intervals into which the range of values is divided in a histogram",
      "The spacing between categories",
      "The size of the chart"
    ],
    "correctOption": 1,
    "explanation": "Bin widths refer to the intervals into which the range of values of the data is divided when creating a histogram[reference:26]."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What type of data is most suitable for visualizing using a pie chart?",
    "options": [
      "Numerical data with many values",
      "Categorical data showing parts of a whole",
      "Time-series data",
      "Geographical data"
    ],
    "correctOption": 1,
    "explanation": "Pie charts are most suitable for categorical data where the goal is to show how each category contributes to the whole (percentage or proportion)."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What is the key difference between a stacked bar chart and a grouped bar chart?",
    "options": [
      "Stacked bars show parts of a whole; grouped bars show comparisons across categories",
      "Stacked bars are for numerical data; grouped bars are for categorical data",
      "There is no difference",
      "Stacked bars show trends; grouped bars show distributions"
    ],
    "correctOption": 0,
    "explanation": "Stacked bar charts show how different parts contribute to a total within each category, while grouped bar charts allow direct comparison of sub-categories across main categories."
  },
  {
    "testId": "dataviz-test-01",
    "question": "What should you consider when choosing a chart type for your data?",
    "options": [
      "The type of data and the message you want to convey",
      "Only the aesthetics",
      "The size of the dataset",
      "The color of the chart"
    ],
    "correctOption": 0,
    "explanation": "When choosing a chart type, you should consider the nature of your data (categorical, numerical, time-series) and the story or insight you want to communicate[reference:27]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "What does the 'data-ink ratio' refer to in data visualization?",
    "options": [
      "The proportion of ink used for decorative elements",
      "The amount of ink devoted to data representation versus non-data elements",
      "The ratio of color to grayscale in a chart",
      "The percentage of chart area occupied by legends"
    ],
    "correctOption": 1,
    "explanation": "A high data-ink ratio means most of the ink is used to display data, minimizing unnecessary decorative elements (chartjunk)[reference:28][reference:29]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "Which Gestalt principle helps viewers perceive bars that are close together as a group?",
    "options": ["Continuity", "Proximity", "Similarity", "Closure"],
    "correctOption": 1,
    "explanation": "The Gestalt principle of proximity groups elements that are physically near each other, making adjacent bars appear related[reference:30]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "Which pre-attentive attribute is most effective for highlighting a single outlier in a scatter plot?",
    "options": ["Shape", "Size", "Orientation", "Texture"],
    "correctOption": 1,
    "explanation": "Larger size draws the eye instantly, making an outlier stand out from the rest of the data points[reference:31]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "Which color palette is best for representing ordered numerical values like low-medium-high temperature ranges?",
    "options": ["Categorical", "Sequential", "Diverging", "Qualitative"],
    "correctOption": 1,
    "explanation": "Sequential palettes vary light-to-dark, making them suitable for ordered numeric scales like temperature or income[reference:32]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "What is a key consideration for color-blind accessibility in data visualization?",
    "options": [
      "Use only red and green",
      "Avoid using any colors",
      "Use high-contrast palettes with color-blind safe hues",
      "Rely on gradients only"
    ],
    "correctOption": 2,
    "explanation": "High-contrast, color-blind safe palettes ensure all viewers can differentiate data points, regardless of color vision deficiencies[reference:33]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "Which factor most contributes to cognitive load in a dashboard?",
    "options": [
      "Use of tooltips",
      "Overcrowding with many charts and visual elements",
      "Consistent font size",
      "Clear titles"
    ],
    "correctOption": 1,
    "explanation": "Too many visual elements overwhelm the viewer's processing capacity, increasing cognitive load and reducing comprehension[reference:34]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "What is Tableau primarily used for?",
    "options": [
      "Database management",
      "Data visualization and analytics",
      "Programming",
      "Cloud storage"
    ],
    "correctOption": 1,
    "explanation": "Tableau is a leading data visualization tool that helps users create interactive and shareable dashboards, simplifying raw data into an understandable format[reference:35][reference:36]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "Which file extension is used for Tableau Workbooks?",
    "options": [".csv", ".xls", ".twbx", ".tde"],
    "correctOption": 2,
    "explanation": "Tableau Workbooks use the .twbx extension, which are packaged files that include both the workbook and the data source[reference:37]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "What is a Tableau dashboard?",
    "options": [
      "A collection of multiple visualizations in a single view",
      "A data extraction tool",
      "A single chart",
      "A database schema"
    ],
    "correctOption": 0,
    "explanation": "A Tableau dashboard is a workspace where multiple visualizations (charts, graphs, and other data displays) are brought together in a single view for comparison[reference:38]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "Which Tableau feature is used to create dynamic filters that allow user input?",
    "options": ["Groups", "Calculated fields", "Sets", "Parameters"],
    "correctOption": 3,
    "explanation": "Parameters in Tableau enable the creation of dynamic filters that allow user input during analysis, making dashboards interactive[reference:39]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "What does a calculated field in Tableau do?",
    "options": [
      "Visualizes geographic data",
      "Exports data",
      "Filters the data",
      "Performs custom computations on existing data"
    ],
    "correctOption": 3,
    "explanation": "Calculated fields are used to perform custom computations and create new data fields based on existing data in Tableau[reference:40]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "What is the role of Tableau Reader?",
    "options": [
      "Extracting data",
      "Viewing and interacting with Tableau reports offline",
      "Managing permissions",
      "Creating dashboards"
    ],
    "correctOption": 1,
    "explanation": "Tableau Reader is used to view and interact with Tableau reports that have been shared offline[reference:41]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "Which of the following is NOT a Tableau product?",
    "options": ["Tableau Server", "Tableau Desktop", "Tableau DBMS", "Tableau Cloud"],
    "correctOption": 2,
    "explanation": "Tableau offers products like Desktop, Server, and Cloud for data visualization. It does not provide a database management system (DBMS)[reference:42]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "In Tableau, which operator is used for string concatenation?",
    "options": ["CONCAT()", "||", "+", "&"],
    "correctOption": 1,
    "explanation": "The || operator is used in Tableau to concatenate strings[reference:43]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "What is the primary benefit of using visualizations such as line charts, bar charts, and column charts?",
    "options": [
      "They are easier to create than other visualizations",
      "They require fewer resources than more complex visualizations",
      "They make data patterns and comparisons easier to understand",
      "They are free to use"
    ],
    "correctOption": 2,
    "explanation": "The primary benefit of these common chart types is that they make data patterns, trends, and comparisons easier to understand at a glance[reference:44]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "What is the first step when starting with Tableau?",
    "options": [
      "Writing SQL queries",
      "Installing drivers",
      "Importing or connecting to data",
      "Coding in Python"
    ],
    "correctOption": 2,
    "explanation": "The first step in Tableau is to connect to a data source or import data for analysis[reference:45]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "What does a high data-ink ratio indicate about a visualization?",
    "options": [
      "It has many decorative elements",
      "It is visually cluttered",
      "Most of the visual elements are used to represent data",
      "It uses many colors"
    ],
    "correctOption": 2,
    "explanation": "A high data-ink ratio indicates that most of the visual elements are used to represent data, minimizing chartjunk and maximizing clarity[reference:46]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "Which Gestalt principle suggests that elements that look similar are perceived as related?",
    "options": ["Proximity", "Similarity", "Continuity", "Closure"],
    "correctOption": 1,
    "explanation": "The Gestalt principle of similarity suggests that elements that share visual characteristics (color, shape, size) are perceived as related or grouped together."
  },
  {
    "testId": "dataviz-test-02",
    "question": "What is the concept of 'chartjunk' in data visualization?",
    "options": [
      "Elements that enhance data representation",
      "Unnecessary decorative elements that do not convey data",
      "Elements that make charts easier to read",
      "The data points themselves"
    ],
    "correctOption": 1,
    "explanation": "Chartjunk refers to unnecessary decorative elements that do not convey data, reducing the data-ink ratio and making visualizations less effective[reference:47]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "What is the purpose of using pre-attentive attributes in data visualization?",
    "options": [
      "To make visualizations more colorful",
      "To draw attention to specific data points before conscious processing",
      "To add more data to the chart",
      "To remove all data from the chart"
    ],
    "correctOption": 1,
    "explanation": "Pre-attentive attributes (like color, size, and shape) are processed subconsciously and can be used to draw attention to specific data points instantly[reference:48]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "What should you consider when designing for color-blind users?",
    "options": [
      "Use only grayscale",
      "Avoid using red and green together and use high-contrast palettes",
      "Use as many colors as possible",
      "Color is not important for accessibility"
    ],
    "correctOption": 1,
    "explanation": "For color-blind accessibility, avoid problematic color combinations like red-green, and use high-contrast, color-blind safe palettes[reference:49]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "What is cognitive load in the context of dashboards?",
    "options": [
      "The amount of data in the dashboard",
      "The mental effort required to process information from the dashboard",
      "The number of colors used",
      "The size of the dashboard"
    ],
    "correctOption": 1,
    "explanation": "Cognitive load refers to the mental effort required to process and understand information. Overcrowded dashboards increase cognitive load and reduce comprehension[reference:50]."
  },
  {
    "testId": "dataviz-test-02",
    "question": "What type of color palette is best for categorical data where colors need to be distinct?",
    "options": ["Sequential", "Diverging", "Qualitative (Categorical)", "Monochromatic"],
    "correctOption": 2,
    "explanation": "Qualitative (categorical) palettes use distinct colors that are not ordered, making them suitable for categorical data where categories are not inherently ordered."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What are the key components of a data dashboard?",
    "options": [
      "Social media, email, and messaging apps",
      "Data analysis, programming, and coding",
      "Data visualization, charts, graphs, tables, and key performance indicators (KPIs)",
      "Cooking recipes, travel photos, and weather updates"
    ],
    "correctOption": 2,
    "explanation": "A data dashboard typically includes data visualizations (charts, graphs), tables, and key performance indicators (KPIs) to provide an overview of business performance[reference:51]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "How can data dashboards be customized to display specific data?",
    "options": [
      "By not arranging the layout of the dashboard",
      "By using a single data source and fixed visualization type",
      "By selecting specific data sources, choosing the type of visualization, and arranging the layout",
      "By randomly selecting data sources and visualization types"
    ],
    "correctOption": 2,
    "explanation": "Dashboards can be customized by selecting specific data sources, choosing appropriate visualization types, and arranging the layout to highlight key information[reference:52]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is the difference between explanatory and exploratory dashboards?",
    "options": [
      "Explanatory dashboards tell a story; exploratory dashboards allow users to discover patterns",
      "Explanatory dashboards are for experts; exploratory dashboards are for beginners",
      "There is no difference",
      "Explanatory dashboards are interactive; exploratory dashboards are static"
    ],
    "correctOption": 0,
    "explanation": "Explanatory dashboards are story-based and guide users through a narrative, while exploratory dashboards allow users to interactively discover patterns and insights[reference:53]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is data storytelling?",
    "options": [
      "Creating fictional stories about data",
      "Using narrative techniques alongside data visualizations to communicate insights",
      "Storing data in story format",
      "Deleting data after telling a story"
    ],
    "correctOption": 1,
    "explanation": "Data storytelling combines data visualizations with narrative techniques to communicate insights and engage audiences effectively[reference:54]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "Which of the following is an example of a misleading visualization?",
    "options": [
      "A bar chart starting the y-axis at zero",
      "A bar chart with a truncated y-axis that exaggerates differences",
      "A pie chart with percentages that add to 100%",
      "A line chart showing trends over time"
    ],
    "correctOption": 1,
    "explanation": "Truncating the y-axis (not starting at zero) can exaggerate differences between values, creating a misleading impression[reference:55][reference:56]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is the purpose of interactivity in data dashboards?",
    "options": [
      "To make dashboards look more complex",
      "To allow users to explore data, apply filters, and gain deeper insights",
      "To reduce the amount of data displayed",
      "To make dashboards load faster"
    ],
    "correctOption": 1,
    "explanation": "Interactivity allows users to explore data dynamically, apply filters, drill down into details, and discover insights that static visualizations cannot provide[reference:57]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is a common ethical concern in data visualization?",
    "options": [
      "Using too many colors",
      "Misrepresenting data to support a specific narrative",
      "Using too many charts",
      "Making visualizations too interactive"
    ],
    "correctOption": 1,
    "explanation": "Ethical concerns include misrepresenting data through selective data presentation, misleading scales, or cherry-picking data to support a specific narrative[reference:58]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What does a 'drill-down' feature allow users to do in a dashboard?",
    "options": [
      "To navigate from summary data to more detailed data",
      "To delete data from the dashboard",
      "To change the color scheme",
      "To export data to Excel"
    ],
    "correctOption": 0,
    "explanation": "Drill-down allows users to click on a data point and navigate from a high-level summary to more detailed, granular data."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is the purpose of tooltips in data visualizations?",
    "options": [
      "To display additional information when a user hovers over a data point",
      "To provide instructions on how to use the dashboard",
      "To change the chart type",
      "To delete data points"
    ],
    "correctOption": 0,
    "explanation": "Tooltips provide contextual information about data points when users hover over them, enhancing understanding without cluttering the visualization."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is the 'lie factor' in data visualization?",
    "options": [
      "The number of lies in the data",
      "The ratio of the size of the visual effect to the actual data difference",
      "The number of data points",
      "The color intensity"
    ],
    "correctOption": 1,
    "explanation": "The lie factor measures the ratio of the size of the visual effect to the actual data difference. A lie factor of 1.0 indicates no distortion[reference:59]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is a key principle for creating effective dashboards?",
    "options": [
      "Include as much data as possible",
      "Focus on clarity, simplicity, and the user's needs",
      "Use as many colors as possible",
      "Make everything interactive"
    ],
    "correctOption": 1,
    "explanation": "Effective dashboards prioritize clarity and simplicity, focusing on the user's needs and the key questions the dashboard should answer[reference:60]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What does 'Publish to Web' in Power BI allow you to do?",
    "options": [
      "To embed visualizations in blog posts, websites, and emails",
      "To publish only to internal users",
      "To publish data to a database",
      "To publish to mobile apps only"
    ],
    "correctOption": 0,
    "explanation": "Power BI's Publish to Web option allows you to embed visualizations in blog posts, websites, and emails for public sharing[reference:61]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is the role of a KPI (Key Performance Indicator) on a dashboard?",
    "options": [
      "To show historical data only",
      "To measure progress toward business objectives",
      "To display raw data",
      "To replace all other visualizations"
    ],
    "correctOption": 1,
    "explanation": "KPIs are metrics that measure performance and progress toward specific business objectives, providing a quick overview of success[reference:62]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is the benefit of using dynamic titles in dashboards?",
    "options": [
      "They make dashboards look better",
      "They update based on filters and selections to provide context",
      "They are easier to create",
      "They take less space"
    ],
    "correctOption": 1,
    "explanation": "Dynamic titles update based on user selections and filters, providing context and reinforcing the narrative of the dashboard[reference:63]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is a common mistake when designing pie charts?",
    "options": [
      "Using too many slices",
      "Using percentages that add to 100%",
      "Using different colors",
      "Adding labels"
    ],
    "correctOption": 0,
    "explanation": "Using too many slices makes pie charts difficult to read. Best practice is to limit pie charts to 5-7 categories[reference:64]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What does 'small multiples' refer to in data visualization?",
    "options": [
      "A series of small charts showing the same variables across different subsets",
      "Multiple small data points in one chart",
      "A chart with small text",
      "A mobile-optimized chart"
    ],
    "correctOption": 0,
    "explanation": "Small multiples use a series of small charts with the same scale and axes to compare the same variable across different subsets or categories[reference:65]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is the importance of context in data storytelling?",
    "options": [
      "Context is not important",
      "Context helps viewers understand the significance of the data and insights",
      "Context makes visualizations more complex",
      "Context is only for expert users"
    ],
    "correctOption": 1,
    "explanation": "Context provides the background and meaning behind the data, helping viewers understand why the insights matter and how they relate to broader business or research questions."
  },
  {
    "testId": "dataviz-test-03",
    "question": "How can you reduce cognitive load in a dashboard?",
    "options": [
      "By adding more charts",
      "By using consistent layouts, clear titles, and limiting the number of visualizations",
      "By using more colors",
      "By removing all labels"
    ],
    "correctOption": 1,
    "explanation": "Reducing cognitive load involves using consistent layouts, clear titles, limiting the number of visualizations, and organizing information logically[reference:66]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is the purpose of a 'slicer' in Power BI?",
    "options": [
      "To slice data into pieces",
      "To provide an interactive filter for visuals on a report page",
      "To create new data",
      "To delete data"
    ],
    "correctOption": 1,
    "explanation": "Slicers in Power BI are interactive visual filters that allow users to filter data across multiple visuals on a report page."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is the difference between a dashboard and a report?",
    "options": [
      "Dashboards are single-page summaries; reports are multi-page detailed analyses",
      "Dashboards are for experts; reports are for beginners",
      "There is no difference",
      "Dashboards contain raw data; reports contain visualizations"
    ],
    "correctOption": 0,
    "explanation": "Dashboards typically provide a single-page, high-level summary of key metrics, while reports offer multi-page, detailed analyses with interactive elements."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is the purpose of annotations in data visualizations?",
    "options": [
      "To add decorative elements",
      "To provide explanatory notes and highlight key insights",
      "To remove data from the chart",
      "To change the chart type"
    ],
    "correctOption": 1,
    "explanation": "Annotations add explanatory notes, highlight key insights, and provide context that helps viewers understand the significance of specific data points."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is the value of storytelling in data visualization?",
    "options": [
      "It makes data more entertaining",
      "It helps audiences understand and remember insights by providing narrative context",
      "It replaces the need for data",
      "It makes visualizations more complex"
    ],
    "correctOption": 1,
    "explanation": "Storytelling helps audiences understand and remember insights by providing narrative context, making the data more meaningful and actionable[reference:67]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What should you avoid when designing a dashboard?",
    "options": [
      "Using clear titles",
      "Using consistent colors",
      "Overcrowding with too many visuals",
      "Using appropriate chart types"
    ],
    "correctOption": 2,
    "explanation": "Overcrowding with too many visuals increases cognitive load and makes it difficult for users to find and understand key insights[reference:68]."
  },
  {
    "testId": "dataviz-test-03",
    "question": "What is the benefit of using a story-based dashboard over a traditional data-based dashboard?",
    "options": [
      "It contains more data",
      "It significantly improves data interpretation and reduces misinterpretations",
      "It is easier to build",
      "It requires less data"
    ],
    "correctOption": 1,
    "explanation": "Storytelling dashboards significantly improve data interpretation, reduce misinterpretations, and enhance the overall user experience compared to traditional dashboards[reference:69]."
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
console.log('Added ' + newQuestions.length + ' dataviz questions to questions.js');
