const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "excel-test-01",
    "question": "What is the name of the intersection point of a row and a column in Excel?",
    "options": ["Cell", "Sheet", "Workbook", "Range"],
    "correctOption": 0,
    "explanation": "A cell is the intersection of a row and a column. It is the basic unit of storage in Excel."
  },
  {
    "testId": "excel-test-01",
    "question": "What is the default file extension of an Excel workbook in newer versions (Excel 2007+)?",
    "options": [".xls", ".xlsx", ".csv", ".xlsm"],
    "correctOption": 1,
    "explanation": ".xlsx is the default file extension for Excel workbooks that do not contain macros. .xls is for older versions, and .xlsm is for macro-enabled workbooks."
  },
  {
    "testId": "excel-test-01",
    "question": "Which of the following is NOT a valid way to start a formula in Excel?",
    "options": ["=", "+", "-", "#"],
    "correctOption": 3,
    "explanation": "All formulas in Excel must begin with an equals sign (=). However, Excel also accepts + or - as a legacy shorthand (which it converts to =). The '#' symbol is used for spilled array references, not to start a formula."
  },
  {
    "testId": "excel-test-01",
    "question": "What is the keyboard shortcut to save an Excel workbook?",
    "options": ["Ctrl + S", "Ctrl + P", "Ctrl + C", "Alt + S"],
    "correctOption": 0,
    "explanation": "Ctrl + S is the universal shortcut to save a file. Ctrl + P opens the print menu, and Ctrl + C copies."
  },
  {
    "testId": "excel-test-01",
    "question": "Which ribbon tab contains the options for changing cell colors and fonts?",
    "options": ["Home", "Insert", "Page Layout", "Data"],
    "correctOption": 0,
    "explanation": "The Home tab contains the most commonly used formatting options like font, alignment, number format, and styles."
  },
  {
    "testId": "excel-test-01",
    "question": "How do you select an entire row in Excel?",
    "options": ["Click on the row number", "Click on the column letter", "Press Ctrl + A", "Double-click the row header"],
    "correctOption": 0,
    "explanation": "Clicking on the row number (e.g., 1, 2, 3) on the left side of the worksheet selects the entire row."
  },
  {
    "testId": "excel-test-01",
    "question": "What happens when you double-click the border of a cell in Excel?",
    "options": ["It formats the cell", "It moves to the edge of the data region in that direction", "It deletes the cell", "It opens a formula"],
    "correctOption": 1,
    "explanation": "Double-clicking the border of a cell acts like a fast navigation shortcut, moving the active cell to the end of the continuous data range in the direction of the border."
  },
  {
    "testId": "excel-test-01",
    "question": "Which Excel feature automatically fills a series of values (e.g., Jan, Feb, Mar) when you drag the fill handle?",
    "options": ["AutoFill", "Flash Fill", "AutoCorrect", "Quick Analysis"],
    "correctOption": 0,
    "explanation": "AutoFill recognizes patterns (like dates, months, numbers) and extends the series when you drag the fill handle. Flash Fill extracts/combines data based on examples."
  },
  {
    "testId": "excel-test-01",
    "question": "What is the name of the bar located at the top of the Excel window that displays the contents of the active cell?",
    "options": ["Toolbar", "Formula Bar", "Status Bar", "Title Bar"],
    "correctOption": 1,
    "explanation": "The Formula Bar shows the actual data or formula contained in the active cell, while the cell itself shows the result."
  },
  {
    "testId": "excel-test-01",
    "question": "How can you insert a new worksheet in a workbook?",
    "options": ["Right-click a sheet tab and select Insert", "Press Ctrl + N", "Click File > New", "Double-click a sheet tab"],
    "correctOption": 0,
    "explanation": "Right-clicking a sheet tab and selecting 'Insert' opens a dialog to add a new worksheet. Ctrl + N opens a new workbook, not a new sheet within the current one."
  },
  {
    "testId": "excel-test-01",
    "question": "Which number format would you use to display a value as '45.00%'?",
    "options": ["General", "Number", "Percentage", "Currency"],
    "correctOption": 2,
    "explanation": "The Percentage format multiplies the cell value by 100 and displays it with a percent (%) symbol. For 0.45, it would display as 45.00%."
  },
  {
    "testId": "excel-test-01",
    "question": "What does the 'Wrap Text' feature do in Excel?",
    "options": ["Merges multiple cells", "Displays the entire contents of a cell on multiple lines within the cell", "Creates a border around the cell", "Rotates text 90 degrees"],
    "correctOption": 1,
    "explanation": "Wrap Text displays the cell content on multiple lines within the same cell, adjusting the row height to fit the content."
  },
  {
    "testId": "excel-test-01",
    "question": "Which shortcut key is used to apply bold formatting to selected cells?",
    "options": ["Ctrl + 1", "Ctrl + B", "Alt + B", "Ctrl + F"],
    "correctOption": 1,
    "explanation": "Ctrl + B (or Ctrl + 2) toggles bold formatting on selected cells. Ctrl + 1 opens the Format Cells dialog box."
  },
  {
    "testId": "excel-test-01",
    "question": "What is the purpose of the 'Merge & Center' button?",
    "options": ["To delete multiple cells", "To combine multiple cells into one and center the text", "To copy data to multiple cells", "To align text to the right"],
    "correctOption": 1,
    "explanation": "Merge & Center combines selected cells into a single cell and centers the content horizontally within it."
  },
  {
    "testId": "excel-test-01",
    "question": "How do you add a border to a selected range of cells?",
    "options": ["Home > Font > Borders", "Home > Alignment > Borders", "Insert > Borders", "Data > Borders"],
    "correctOption": 0,
    "explanation": "The Borders dropdown is located in the Font group under the Home tab. It provides various border styles and options."
  },
  {
    "testId": "excel-test-01",
    "question": "What does 'Freeze Panes' allow you to do?",
    "options": ["Lock rows and columns so they remain visible while scrolling", "Delete panes from the workbook", "Split the screen into four resizable quadrants", "Protect the workbook with a password"],
    "correctOption": 0,
    "explanation": "Freeze Panes keeps selected rows and/or columns visible on the screen while the rest of the sheet scrolls, which is useful for large datasets."
  },
  {
    "testId": "excel-test-01",
    "question": "What is the correct way to reference a cell in Excel?",
    "options": ["A1", "1A", "A-1", "Col1"],
    "correctOption": 0,
    "explanation": "Excel uses a column-letter and row-number syntax, like A1 for the top-left cell, B3, etc."
  },
  {
    "testId": "excel-test-01",
    "question": "Which of the following is a type of conditional formatting?",
    "options": ["Cell Styles", "Data Bars", "Merge Cells", "Freeze Panes"],
    "correctOption": 1,
    "explanation": "Data Bars are a type of conditional formatting that adds a colored bar inside cells to visually represent values. Cell Styles are a formatting preset, not conditional."
  },
  {
    "testId": "excel-test-01",
    "question": "What happens when you press 'Ctrl + Z' in Excel?",
    "options": ["Redo the last action", "Undo the last action", "Save the workbook", "Close the workbook"],
    "correctOption": 1,
    "explanation": "Ctrl + Z is the standard shortcut for Undo, allowing you to reverse your last action(s)."
  },
  {
    "testId": "excel-test-01",
    "question": "Where do you go to adjust the zoom level of the worksheet?",
    "options": ["View tab > Zoom", "Home tab > Zoom", "Data tab > Zoom", "Formula tab > Zoom"],
    "correctOption": 0,
    "explanation": "The Zoom slider is located in the bottom-right corner of the Excel window, but the official command is in the View tab."
  },
  {
    "testId": "excel-test-01",
    "question": "Which data type is entered as '=TODAY()'?",
    "options": ["String", "Date/Time", "Formula", "Logical"],
    "correctOption": 2,
    "explanation": "=TODAY() is a formula that returns the current date. It is not a static value but a dynamic function."
  },
  {
    "testId": "excel-test-01",
    "question": "What is the function of the 'Format Painter' tool?",
    "options": ["To change the font color", "To copy formatting from one cell/range and apply it to another", "To create charts", "To paste values only"],
    "correctOption": 1,
    "explanation": "Format Painter copies the formatting (font, color, border, number format) from a selected cell and applies it to the next range you select."
  },
  {
    "testId": "excel-test-01",
    "question": "How do you move to the beginning of a row (Column A) in a worksheet?",
    "options": ["Home key", "End key", "Ctrl + Home", "Alt + Home"],
    "correctOption": 0,
    "explanation": "Pressing the Home key on the keyboard moves the active cell to column A of the current row."
  },
  {
    "testId": "excel-test-01",
    "question": "What is the maximum number of worksheets you can have in a single Excel workbook?",
    "options": ["3", "255", "Limited by available memory", "Unlimited"],
    "correctOption": 2,
    "explanation": "The number of worksheets is limited only by the available memory of your system, though earlier versions had a limit of 255."
  },
  {
    "testId": "excel-test-01",
    "question": "To change the text color, you use the 'Font Color' button. Which color does it default to if you click the dropdown arrow?",
    "options": ["Black", "White", "Red", "Blue"],
    "correctOption": 0,
    "explanation": "The default font color in Excel is Black (Automatic). The dropdown arrow shows the theme color palette."
  },
  {
    "testId": "excel-test-01",
    "question": "What does the 'Clear' button (in the Home tab > Editing group) do?",
    "options": ["Deletes the cell contents, formats, or both", "Deletes the entire row", "Removes conditional formatting only", "Resets the ribbon"],
    "correctOption": 0,
    "explanation": "The Clear dropdown gives you options to clear All, Formats, Contents, or Comments, giving granular control over deletion."
  },
  {
    "testId": "excel-test-01",
    "question": "Which view shows the page breaks and margins for printing?",
    "options": ["Normal View", "Page Layout View", "Page Break Preview", "Full Screen View"],
    "correctOption": 2,
    "explanation": "Page Break Preview displays the worksheet with blue dashed lines indicating manual and automatic page breaks, perfect for adjusting print layout."
  },
  {
    "testId": "excel-test-01",
    "question": "If you type '3/15' in a cell, what will Excel automatically convert it to?",
    "options": ["Text", "Date (15-Mar)", "Fraction (3/15)", "Number 0.2"],
    "correctOption": 1,
    "explanation": "Excel interprets numbers with slashes as dates and automatically formats them as a date (e.g., 15-Mar), using the current year."
  },
  {
    "testId": "excel-test-01",
    "question": "Which of the following is an Excel 'Theme'?",
    "options": ["A set of colors, fonts, and effects", "A type of macro", "A data validation rule", "A chart style"],
    "correctOption": 0,
    "explanation": "A Theme is a predefined set of colors, fonts, and effects that can be applied to an entire workbook for consistent styling."
  },
  {
    "testId": "excel-test-01",
    "question": "What shortcut key opens the 'Find and Replace' dialog box?",
    "options": ["Ctrl + F", "Ctrl + H", "Alt + F", "Both Ctrl + F and Ctrl + H"],
    "correctOption": 3,
    "explanation": "Ctrl + F opens 'Find', and Ctrl + H opens 'Replace' directly. Both are part of the same dialog box."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the result of the formula =SUM(1,2,3)?",
    "options": ["123", "6", "0", "Error"],
    "correctOption": 1,
    "explanation": "The SUM function adds all the numbers provided as arguments. 1+2+3 = 6."
  },
  {
    "testId": "excel-test-02",
    "question": "Which formula calculates the average of values in cells A1 to A10?",
    "options": ["=AVG(A1:A10)", "=MEAN(A1:A10)", "=AVERAGE(A1:A10)", "=SUM(A1:A10)/10"],
    "correctOption": 2,
    "explanation": "AVERAGE is the standard Excel function for calculating the arithmetic mean of a range."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the difference between a relative and an absolute cell reference?",
    "options": [
      "Relative changes when copied, absolute stays fixed",
      "Absolute changes when copied, relative stays fixed",
      "Both change when copied",
      "Neither changes when copied"
    ],
    "correctOption": 0,
    "explanation": "Relative references (A1) adjust based on the new location when copied. Absolute references ($A$1) remain fixed, regardless of where they are copied."
  },
  {
    "testId": "excel-test-02",
    "question": "What does the formula =COUNT(A1:A10) do?",
    "options": [
      "Counts all cells containing numbers in the range",
      "Counts all non-empty cells in the range",
      "Counts all cells in the range",
      "Counts only empty cells"
    ],
    "correctOption": 0,
    "explanation": "COUNT only counts cells that contain numeric values. COUNTA counts all non-empty cells regardless of type."
  },
  {
    "testId": "excel-test-02",
    "question": "How do you create an absolute reference for column A but a relative reference for row 1?",
    "options": ["$A$1", "A$1", "$A1", "A1"],
    "correctOption": 2,
    "explanation": "$A1 makes the column absolute (fixed) and the row relative (changes when copied down)."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the syntax of the IF function?",
    "options": [
      "IF(condition, action_if_true, action_if_false)",
      "IF(condition, value_if_true, value_if_false)",
      "IF(condition, then_value, else_value)",
      "IF(condition, true, false)"
    ],
    "correctOption": 1,
    "explanation": "The IF function has three arguments: a logical test, the value to return if true, and the value to return if false."
  },
  {
    "testId": "excel-test-02",
    "question": "What does the VLOOKUP function do?",
    "options": [
      "Looks up a value in the first column of a table and returns a value in the same row from another column",
      "Looks up a value in the row and returns a column",
      "Vertically aligns text",
      "Validates data entry"
    ],
    "correctOption": 0,
    "explanation": "VLOOKUP stands for Vertical Lookup. It searches for a value in the leftmost column of a table and returns a corresponding value from a specified column."
  },
  {
    "testId": "excel-test-02",
    "question": "In VLOOKUP, what does the fourth argument (range_lookup) do when set to FALSE?",
    "options": [
      "Finds an approximate match",
      "Finds an exact match only",
      "Finds the largest value less than the lookup value",
      "Returns an error if no match is found"
    ],
    "correctOption": 1,
    "explanation": "Setting range_lookup to FALSE forces VLOOKUP to look for an exact match. If not found, it returns #N/A."
  },
  {
    "testId": "excel-test-02",
    "question": "Which function would you use to find the largest number in a range?",
    "options": ["LARGE", "MAX", "TOP", "HIGHEST"],
    "correctOption": 1,
    "explanation": "MAX is the standard function to find the highest value. LARGE returns the nth largest value (e.g., LARGE(range,2) for the second largest)."
  },
  {
    "testId": "excel-test-02",
    "question": "What does the formula =A1+B1*C1 calculate?",
    "options": [
      "First adds A1 and B1, then multiplies by C1",
      "First multiplies B1 and C1, then adds A1",
      "First adds A1 and C1, then multiplies by B1",
      "Multiplies all three and adds them"
    ],
    "correctOption": 1,
    "explanation": "Excel follows operator precedence (PEMDAS). Multiplication (*) happens before addition (+), so B1*C1 is calculated first, then A1 is added."
  },
  {
    "testId": "excel-test-02",
    "question": "Which function is used to count the number of characters in a cell?",
    "options": ["LEN", "COUNT", "LENGTH", "CHAR"],
    "correctOption": 0,
    "explanation": "The LEN function returns the number of characters in a text string, including spaces."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the result of =IF(5>3, 'Yes', 'No')?",
    "options": ["Yes", "No", "TRUE", "FALSE"],
    "correctOption": 0,
    "explanation": "The condition 5>3 is TRUE, so the function returns the value_if_true, which is 'Yes'."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the purpose of the XLOOKUP function compared to VLOOKUP?",
    "options": [
      "XLOOKUP can look both vertically and horizontally and returns exact matches by default",
      "XLOOKUP is slower but more secure",
      "XLOOKUP only works with tables",
      "XLOOKUP is the same as VLOOKUP"
    ],
    "correctOption": 0,
    "explanation": "XLOOKUP is the modern replacement for VLOOKUP/HLOOKUP. It can search vertically or horizontally, defaults to exact match, and can return an array."
  },
  {
    "testId": "excel-test-02",
    "question": "If you copy the formula =$A$1 + B1 from row 1 to row 2, what does it become?",
    "options": ["=$A$1 + B2", "=$A$1 + B1", "=A$1 + B2", "=$A$2 + B2"],
    "correctOption": 0,
    "explanation": "$A$1 is fully absolute, so it stays $A$1. B1 is relative (no $), so when copied down one row, it changes to B2."
  },
  {
    "testId": "excel-test-02",
    "question": "Which function is used to combine multiple text strings into one?",
    "options": ["CONCAT", "MERGE", "JOIN", "COMBINE"],
    "correctOption": 0,
    "explanation": "CONCAT (or CONCATENATE in older versions) joins multiple text strings into a single string. The newer CONCAT function is more flexible."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the purpose of the IFERROR function?",
    "options": [
      "To catch and handle errors by returning a specified value instead of an error",
      "To check if a cell is empty",
      "To validate data types",
      "To find errors in formulas"
    ],
    "correctOption": 0,
    "explanation": "IFERROR(value, value_if_error) checks the first argument for an error. If an error is found, it returns the second argument instead of the error message."
  },
  {
    "testId": "excel-test-02",
    "question": "Which lookup function is designed to look up values in a horizontal table (across rows)?",
    "options": ["VLOOKUP", "HLOOKUP", "XLOOKUP", "Both HLOOKUP and XLOOKUP"],
    "correctOption": 3,
    "explanation": "HLOOKUP searches for a value in the top row and returns a value from the same column. XLOOKUP can also handle horizontal lookups."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the use of the AND function in Excel?",
    "options": [
      "It returns TRUE if all conditions are true",
      "It returns TRUE if any condition is true",
      "It returns FALSE if all conditions are true",
      "It performs a logical OR"
    ],
    "correctOption": 0,
    "explanation": "The AND function evaluates multiple logical conditions and returns TRUE only if every condition is TRUE."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the difference between SUM and SUMIF?",
    "options": [
      "SUMIF adds cells based on a single condition, SUM adds all cells in a range",
      "SUMIF adds all cells, SUM adds based on criteria",
      "They are exactly the same",
      "SUMIF ignores text, SUM ignores numbers"
    ],
    "correctOption": 0,
    "explanation": "SUM adds all numeric values in a range. SUMIF adds only the cells that meet a specific condition or criteria."
  },
  {
    "testId": "excel-test-02",
    "question": "What does the formula =COUNTIF(A1:A10, '>50') do?",
    "options": [
      "Counts cells greater than 50 in the range",
      "Sums cells greater than 50",
      "Counts all cells in A1:A10",
      "Finds the average of values greater than 50"
    ],
    "correctOption": 0,
    "explanation": "COUNTIF counts the number of cells within a range that satisfy a given condition. Here, it counts cells with a value greater than 50."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the result of =LEFT('Excel Test', 5)?",
    "options": ["Excel", "Test", "Excel Test", "Excel "],
    "correctOption": 0,
    "explanation": "LEFT(text, num_chars) returns the specified number of characters from the beginning of the string. The first 5 characters of 'Excel Test' are 'Excel'."
  },
  {
    "testId": "excel-test-02",
    "question": "Which function allows you to choose a value from a list based on an index number?",
    "options": ["CHOOSE", "INDEX", "MATCH", "LOOKUP"],
    "correctOption": 0,
    "explanation": "CHOOSE(index_num, value1, value2, ...) returns a value from a list based on the position specified by index_num."
  },
  {
    "testId": "excel-test-02",
    "question": "If you use =VLOOKUP(101, A2:D100, 4, FALSE) and 101 is not found, what is the result?",
    "options": ["#N/A", "#VALUE!", "#REF!", "0"],
    "correctOption": 0,
    "explanation": "When range_lookup is FALSE (exact match) and the lookup value is not found, VLOOKUP returns the #N/A error."
  },
  {
    "testId": "excel-test-02",
    "question": "What does the dollar sign ($) do in a cell reference?",
    "options": [
      "It makes the reference absolute (does not change when copied)",
      "It makes the reference relative",
      "It indicates a named range",
      "It formats the cell as currency"
    ],
    "correctOption": 0,
    "explanation": "The $ sign locks either the column, the row, or both. $A1 locks the column, A$1 locks the row, $A$1 locks both."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the maximum number of arguments that the SUM function can accept in Excel?",
    "options": ["30", "255", "Unlimited", "Only 2"],
    "correctOption": 1,
    "explanation": "Excel functions can accept up to 255 arguments in modern versions, though you can also pass large ranges."
  },
  {
    "testId": "excel-test-02",
    "question": "Which formula would correctly calculate the total of values in B1:B10 that are not empty?",
    "options": ["=SUM(B1:B10)", "=SUMIF(B1:B10, '<>')", "=SUBTOTAL(9,B1:B10)", "All of the above"],
    "correctOption": 3,
    "explanation": "SUM sums all numbers (ignores text/empty). SUMIF with '<>' sums non-empty cells. SUBTOTAL 9 sums visible rows. All are valid in different contexts."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the purpose of the ROUND function?",
    "options": [
      "To round a number to a specified number of digits",
      "To round down to the nearest integer",
      "To round up to the nearest integer",
      "To format a number as text"
    ],
    "correctOption": 0,
    "explanation": "ROUND(number, num_digits) rounds a number to the specified number of decimal places."
  },
  {
    "testId": "excel-test-02",
    "question": "In the formula =INDEX(A1:C10, 3, 2), which cell is referenced?",
    "options": ["B3", "C2", "A2", "B4"],
    "correctOption": 0,
    "explanation": "INDEX returns a cell within a range. The row number is 3, and the column number is 2. Column 2 in A:C is B, so it references B3."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the use of the MATCH function?",
    "options": [
      "It returns the relative position of an item in a range that matches a specified value",
      "It compares two cells and returns a logical value",
      "It finds the largest value in a range",
      "It returns the address of a cell"
    ],
    "correctOption": 0,
    "explanation": "MATCH(lookup_value, lookup_array, match_type) returns the position (index) of the lookup value within the array."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the result of =UPPER('excel')?",
    "options": ["excel", "EXCEL", "Excel", "Ecxel"],
    "correctOption": 1,
    "explanation": "UPPER converts all letters in a text string to uppercase."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the 'order' parameter in the SORT function used for?",
    "options": [
      "To specify ascending (1) or descending (-1) order",
      "To specify which column to sort by",
      "To exclude duplicates",
      "To sort by color"
    ],
    "correctOption": 0,
    "explanation": "The SORT function has an optional 'sort_order' argument where 1 = ascending (default) and -1 = descending."
  },
  {
    "testId": "excel-test-02",
    "question": "Which function returns the current date and time?",
    "options": ["NOW()", "TODAY()", "DATE()", "TIME()"],
    "correctOption": 0,
    "explanation": "NOW() returns the current date and time. TODAY() returns only the current date."
  },
  {
    "testId": "excel-test-02",
    "question": "What will =10/0 return?",
    "options": ["#DIV/0!", "0", "10", "Error"],
    "correctOption": 0,
    "explanation": "Dividing by zero is mathematically impossible, so Excel returns the #DIV/0! error."
  },
  {
    "testId": "excel-test-02",
    "question": "In a nested IF function, =IF(A1>10, 'High', IF(A1>5, 'Medium', 'Low')), what is returned if A1=7?",
    "options": ["High", "Medium", "Low", "Error"],
    "correctOption": 1,
    "explanation": "7 is not > 10, so the first IF goes to the second IF. 7 > 5 is TRUE, so it returns 'Medium'."
  },
  {
    "testId": "excel-test-02",
    "question": "What is the purpose of the ISERROR function?",
    "options": [
      "It returns TRUE if the cell contains any error value",
      "It corrects errors automatically",
      "It returns the type of error",
      "It logs errors to a file"
    ],
    "correctOption": 0,
    "explanation": "ISERROR(value) checks if the value is an error (e.g., #N/A, #VALUE!, #REF!) and returns TRUE if it is, otherwise FALSE."
  },
  {
    "testId": "excel-test-02",
    "question": "Which function is used to get the minimum value from a range?",
    "options": ["MIN", "SMALL", "LOWEST", "BOTTOM"],
    "correctOption": 0,
    "explanation": "MIN is the standard function for finding the smallest number. SMALL returns the nth smallest."
  },
  {
    "testId": "excel-test-03",
    "question": "What is the purpose of the 'Sort' feature in Excel?",
    "options": [
      "To arrange data in ascending or descending order based on one or more columns",
      "To delete duplicate data",
      "To filter data based on criteria",
      "To merge cells"
    ],
    "correctOption": 0,
    "explanation": "Sorting rearranges the order of rows based on the values in one or more columns."
  },
  {
    "testId": "excel-test-03",
    "question": "How does the 'Filter' feature work?",
    "options": [
      "It hides rows that do not meet specific criteria",
      "It deletes rows that do not meet criteria",
      "It sorts the data",
      "It groups rows by category"
    ],
    "correctOption": 0,
    "explanation": "Filtering temporarily hides rows that do not match the criteria you set, allowing you to focus on a subset of your data."
  },
  {
    "testId": "excel-test-03",
    "question": "What is Data Validation used for?",
    "options": [
      "To restrict the type of data that can be entered in a cell (e.g., dropdown lists, number ranges)",
      "To check for spelling mistakes",
      "To validate formulas",
      "To protect the worksheet"
    ],
    "correctOption": 0,
    "explanation": "Data Validation controls what users can enter into cells, ensuring data accuracy and consistency (e.g., only dates, or values from a list)."
  },
  {
    "testId": "excel-test-03",
    "question": "How do you remove duplicate records from a dataset?",
    "options": [
      "Data tab > Remove Duplicates",
      "Home tab > Delete Duplicates",
      "Formulas tab > Unique Values",
      "View tab > Remove Duplicates"
    ],
    "correctOption": 0,
    "explanation": "The 'Remove Duplicates' feature is located in the Data Tools group under the Data tab."
  },
  {
    "testId": "excel-test-03",
    "question": "What does the TRIM function do?",
    "options": [
      "Removes all spaces from text except single spaces between words",
      "Removes all spaces completely",
      "Adds spaces to text",
      "Converts text to uppercase"
    ],
    "correctOption": 0,
    "explanation": "TRIM removes leading and trailing spaces and reduces multiple spaces between words to a single space."
  },
  {
    "testId": "excel-test-03",
    "question": "What is the result of =LEFT('Excel Data', 3)?",
    "options": ["Exc", "Ece", "El", "Exe"],
    "correctOption": 0,
    "explanation": "LEFT returns the specified number of characters from the start of the string. The first 3 characters are 'Exc'."
  },
  {
    "testId": "excel-test-03",
    "question": "Which function returns the number of characters in a string, including spaces?",
    "options": ["LEN", "COUNT", "LENGTH", "CHAR"],
    "correctOption": 0,
    "explanation": "LEN is the function that returns the character count of a text string."
  },
  {
    "testId": "excel-test-03",
    "question": "What is the output of =FIND('e', 'Excel')?",
    "options": ["1", "2", "0", "Error"],
    "correctOption": 0,
    "explanation": "FIND is case-sensitive. 'e' is the first character in 'Excel', so it returns 1. (Note: FIND is case-sensitive, SEARCH is not)."
  },
  {
    "testId": "excel-test-03",
    "question": "What is the difference between FIND and SEARCH functions?",
    "options": [
      "FIND is case-sensitive, SEARCH is not",
      "SEARCH is case-sensitive, FIND is not",
      "FIND is for numbers, SEARCH for text",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "FIND is case-sensitive and does not allow wildcards. SEARCH is not case-sensitive and allows wildcards."
  },
  {
    "testId": "excel-test-03",
    "question": "Which function returns the current date?",
    "options": ["DATE()", "TODAY()", "NOW()", "CURRENT_DATE()"],
    "correctOption": 1,
    "explanation": "TODAY() returns the current date without the time. It is volatile and updates each time the worksheet recalculates."
  },
  {
    "testId": "excel-test-03",
    "question": "What is the formula to concatenate the text 'Hello' and 'World' with a space in between?",
    "options": ["=CONCAT('Hello', ' ', 'World')", "='Hello' & ' ' & 'World'", "=TEXTJOIN(' ', TRUE, 'Hello', 'World')", "All of the above"],
    "correctOption": 3,
    "explanation": "All three methods can concatenate strings: CONCAT, the ampersand (&), and TEXTJOIN."
  },
  {
    "testId": "excel-test-03",
    "question": "What does the 'Advanced Filter' allow you to do that regular Filter does not?",
    "options": [
      "Filter using complex criteria and copy results to another location",
      "Remove duplicates",
      "Sort data automatically",
      "Create charts"
    ],
    "correctOption": 0,
    "explanation": "Advanced Filter allows for complex logical criteria (OR/AND across columns) and can extract results to a different location on the sheet."
  },
  {
    "testId": "excel-test-03",
    "question": "What is the result of =MID('Microsoft', 6, 3)?",
    "options": ["oso", "cro", "sof", "ft"],
    "correctOption": 2,
    "explanation": "MID extracts characters from a specified start position. 'Microsoft' has letters: M(1), i(2), c(3), r(4), o(5), s(6), o(7), f(8), t(9). Starting at 6 (s), taking 3 chars gives 'sof'."
  },
  {
    "testId": "excel-test-03",
    "question": "Which function is used to find the day of the week for a date?",
    "options": ["WEEKDAY", "DAY", "DATE", "WEEK"],
    "correctOption": 0,
    "explanation": "WEEKDAY(serial_number, [return_type]) returns a number representing the day of the week."
  },
  {
    "testId": "excel-test-03",
    "question": "What is the purpose of the 'Text to Columns' wizard?",
    "options": [
      "To split a single column of data into multiple columns based on a delimiter or fixed width",
      "To merge multiple columns into one",
      "To format text as numbers",
      "To remove duplicates"
    ],
    "correctOption": 0,
    "explanation": "Text to Columns splits data in one column into multiple columns, useful for parsing CSV data or names into first and last names."
  },
  {
    "testId": "excel-test-03",
    "question": "What will =DATEDIF('2023-01-01', '2024-01-01', 'Y') return?",
    "options": ["365", "1", "12", "0"],
    "correctOption": 1,
    "explanation": "DATEDIF with 'Y' returns the complete number of years between the two dates. From Jan 1, 2023 to Jan 1, 2024 is exactly 1 year."
  },
  {
    "testId": "excel-test-03",
    "question": "Which of the following is a valid date format in Excel?",
    "options": ["mm/dd/yyyy", "dd-mm-yyyy", "yyyy/mm/dd", "All of the above"],
    "correctOption": 3,
    "explanation": "Excel recognizes multiple date formats depending on your regional settings, including the ones listed."
  },
  {
    "testId": "excel-test-03",
    "question": "How can you add a dropdown list to a cell?",
    "options": ["Data tab > Data Validation > List", "Insert > Dropdown", "Formulas > Dropdown", "Review > Dropdown"],
    "correctOption": 0,
    "explanation": "Data Validation allows you to create a dropdown list of values that users can select from, restricting input to those values."
  },
  {
    "testId": "excel-test-03",
    "question": "What is the purpose of the 'Subtotal' feature in Excel?",
    "options": [
      "To calculate subtotals for groups of data (e.g., sum, average) and collapse/expand groups",
      "To calculate the total of all rows",
      "To remove duplicates",
      "To filter data"
    ],
    "correctOption": 0,
    "explanation": "Subtotal groups your data based on a column and calculates summaries (like sum or average) for each group, plus a grand total."
  },
  {
    "testId": "excel-test-03",
    "question": "What does the function =RIGHT('Excel', 2) return?",
    "options": ["ex", "el", "Excel", "xl"],
    "correctOption": 1,
    "explanation": "RIGHT returns the specified number of characters from the end of the string. The last 2 characters of 'Excel' are 'el'."
  },
  {
    "testId": "excel-test-03",
    "question": "Which text function converts a text string to proper case (first letter of each word capitalized)?",
    "options": ["PROPER", "UPPER", "LOWER", "TITLE"],
    "correctOption": 0,
    "explanation": "PROPER capitalizes the first letter of each word in a text string."
  },
  {
    "testId": "excel-test-03",
    "question": "How do you quickly select all cells with hard-coded numbers (constants) in a worksheet?",
    "options": [
      "Go To Special > Constants > Numbers",
      "Home > Find & Select > Formulas",
      "Data > Filter",
      "Ctrl + A"
    ],
    "correctOption": 0,
    "explanation": "Go To Special (Ctrl+G > Special) lets you select cells based on their content type, including Constants (numbers, text, logicals)."
  },
  {
    "testId": "excel-test-03",
    "question": "What is the purpose of the 'Flash Fill' feature?",
    "options": [
      "To automatically fill values based on a pattern you establish by example",
      "To fill cells with a series of numbers",
      "To copy formatting",
      "To fill blank cells with the value above"
    ],
    "correctOption": 0,
    "explanation": "Flash Fill detects a pattern in your data entry and automatically fills the remaining cells accordingly. It's a time-saver for splitting or combining columns."
  },
  {
    "testId": "excel-test-03",
    "question": "What will =LEN('Hello World') return?",
    "options": ["10", "11", "5", "9"],
    "correctOption": 1,
    "explanation": "LEN counts all characters, including the space between 'Hello' and 'World'. 'Hello' (5) + space (1) + 'World' (5) = 11."
  },
  {
    "testId": "excel-test-03",
    "question": "Which function extracts the month from a date?",
    "options": ["MONTH", "DAY", "YEAR", "DATE"],
    "correctOption": 0,
    "explanation": "MONTH(serial_number) returns the month as a number (1-12)."
  },
  {
    "testId": "excel-test-03",
    "question": "What is the 'Consolidate' feature used for?",
    "options": [
      "To combine data from multiple ranges or worksheets into one summary report",
      "To remove duplicates",
      "To sort data",
      "To create a chart"
    ],
    "correctOption": 0,
    "explanation": "Consolidate allows you to summarize data from different sources (ranges, sheets) using functions like SUM, AVERAGE, etc."
  },
  {
    "testId": "excel-test-03",
    "question": "How do you add a comment to a cell?",
    "options": ["Review tab > New Comment", "Home tab > New Comment", "Insert tab > Comment", "Data tab > Comment"],
    "correctOption": 0,
    "explanation": "The New Comment button is in the Comments group under the Review tab in newer versions (or right-click > Insert Comment)."
  },
  {
    "testId": "excel-test-03",
    "question": "What does the 'Watch Window' do?",
    "options": [
      "It lets you monitor the values of selected cells even when working in other parts of the workbook",
      "It records macros",
      "It shows the time",
      "It protects cells"
    ],
    "correctOption": 0,
    "explanation": "The Watch Window is a docked window that lets you keep an eye on the values and formulas of specific cells as you make changes elsewhere."
  },
  {
    "testId": "excel-test-03",
    "question": "What is the purpose of the 'Trace Precedents' feature?",
    "options": [
      "It shows arrows indicating which cells affect the active cell's formula",
      "It shows which cells are affected by the active cell",
      "It removes cell dependencies",
      "It adds comments to cells"
    ],
    "correctOption": 0,
    "explanation": "Trace Precedents displays arrows from the cells that supply data to the active formula, helping debug complex formulas."
  },
  {
    "testId": "excel-test-03",
    "question": "What is the result of =TEXT(12345.67, '$#,##0.00')?",
    "options": ["$12,345.67", "$12345.67", "$12345,67", "12345.67"],
    "correctOption": 0,
    "explanation": "TEXT converts a number to text using a specified format. $#,##0.00 formats the number with a dollar sign, thousands separator, and two decimal places."
  },
  {
    "testId": "excel-test-03",
    "question": "What does the 'Clear Outline' button do?",
    "options": [
      "Removes grouping and outlining from the worksheet",
      "Clears all formatting",
      "Removes data validation",
      "Deletes all borders"
    ],
    "correctOption": 0,
    "explanation": "Clear Outline removes the group/outline structure that was created using the Subtotal or Group features."
  },
  {
    "testId": "excel-test-04",
    "question": "Which chart type is best for showing trends over time?",
    "options": ["Pie Chart", "Bar Chart", "Line Chart", "Doughnut Chart"],
    "correctOption": 2,
    "explanation": "Line charts are ideal for displaying continuous data over time (trends), as they emphasize the flow and direction of values."
  },
  {
    "testId": "excel-test-04",
    "question": "What type of chart is used to compare parts to a whole?",
    "options": ["Column Chart", "Pie Chart", "Scatter Plot", "Area Chart"],
    "correctOption": 1,
    "explanation": "Pie charts are used to show proportions and percentages, effectively comparing each part to the total whole."
  },
  {
    "testId": "excel-test-04",
    "question": "What are Sparklines in Excel?",
    "options": [
      "Miniature charts that fit inside a single cell",
      "Large full-page charts",
      "3D charts",
      "Chart templates"
    ],
    "correctOption": 0,
    "explanation": "Sparklines are small, simple charts placed within a single cell to provide a visual summary of data trends without taking up much space."
  },
  {
    "testId": "excel-test-04",
    "question": "What is a PivotTable used for?",
    "options": [
      "To summarize, analyze, and present large datasets by grouping and aggregating data",
      "To create charts",
      "To sort data alphabetically",
      "To protect data"
    ],
    "correctOption": 0,
    "explanation": "PivotTables are one of Excel's most powerful features for interactively summarizing and analyzing large amounts of data."
  },
  {
    "testId": "excel-test-04",
    "question": "Which fields go into a PivotTable to define the structure?",
    "options": [
      "Rows, Columns, Values, Filters",
      "Headers, Footers, Margins",
      "X-axis, Y-axis, Legend",
      "Group, Sort, Filter"
    ],
    "correctOption": 0,
    "explanation": "The PivotTable Fields pane has four areas: Filters, Columns, Rows, and Values. Drag fields into these areas to build the table."
  },
  {
    "testId": "excel-test-04",
    "question": "How do you refresh a PivotTable after the source data changes?",
    "options": [
      "Right-click the PivotTable and select Refresh",
      "Press Ctrl + R",
      "Recreate the PivotTable",
      "Save the workbook"
    ],
    "correctOption": 0,
    "explanation": "Right-clicking the PivotTable and selecting Refresh (or using the Refresh button in the PivotTable Analyze tab) updates it with the latest source data."
  },
  {
    "testId": "excel-test-04",
    "question": "What is a Slicer in the context of PivotTables?",
    "options": [
      "A visual filter that allows you to quickly filter data in a PivotTable or PivotChart",
      "A tool that slices data into columns",
      "A type of chart",
      "A data validation list"
    ],
    "correctOption": 0,
    "explanation": "Slicers are interactive buttons that make it easy to filter PivotTables and PivotCharts, providing a clear visual indicator of what filters are applied."
  },
  {
    "testId": "excel-test-04",
    "question": "What is a 'calculated field' in a PivotTable?",
    "options": [
      "A field that performs a calculation on other fields within the PivotTable",
      "A field that is automatically created by Excel",
      "A field that is copied from the source data",
      "A field that sorts data"
    ],
    "correctOption": 0,
    "explanation": "A calculated field creates a new field in the PivotTable using a formula that operates on other fields (e.g., Profit = Sales - Cost)."
  },
  {
    "testId": "excel-test-04",
    "question": "Which chart is best for comparing categorical data across different groups?",
    "options": ["Line Chart", "Pie Chart", "Column/Bar Chart", "Scatter Chart"],
    "correctOption": 2,
    "explanation": "Column and Bar charts are excellent for comparing categories (e.g., sales by product, sales by region)."
  },
  {
    "testId": "excel-test-04",
    "question": "What is the difference between a chart and a PivotChart?",
    "options": [
      "A PivotChart is interactive and can be filtered/sliced, while a regular chart is static",
      "A PivotChart does not use PivotTables",
      "There is no difference",
      "A regular chart is always 3D"
    ],
    "correctOption": 0,
    "explanation": "A PivotChart is a graphical representation of PivotTable data. It inherits the interactivity (filtering, drilling down) of the PivotTable."
  },
  {
    "testId": "excel-test-04",
    "question": "Which chart element is used to identify the data series in a chart?",
    "options": ["Legend", "Axis", "Title", "Gridline"],
    "correctOption": 0,
    "explanation": "The Legend identifies the different data series in the chart (e.g., Sales 2023, Sales 2024)."
  },
  {
    "testId": "excel-test-04",
    "question": "What does the 'Group' feature in a PivotTable allow you to do?",
    "options": [
      "To combine dates, numbers, or text into groups (e.g., months, quarters, age ranges)",
      "To merge cells in the PivotTable",
      "To sort data alphabetically",
      "To hide rows"
    ],
    "correctOption": 0,
    "explanation": "Grouping in PivotTables allows you to organize data into logical categories, like grouping dates by month or year, which makes analysis easier."
  },
  {
    "testId": "excel-test-04",
    "question": "What is a 'Trendline' in a chart?",
    "options": [
      "A line that shows the general direction of data over time",
      "A line that separates data into groups",
      "A line that connects data points",
      "A line that indicates the average"
    ],
    "correctOption": 0,
    "explanation": "A trendline is a regression line that shows the overall trend or pattern in the data, often used for forecasting."
  },
  {
    "testId": "excel-test-04",
    "question": "Which type of conditional formatting shows a colored bar proportional to the cell's value?",
    "options": ["Color Scales", "Data Bars", "Icon Sets", "Highlight Cells Rules"],
    "correctOption": 1,
    "explanation": "Data Bars add a gradient or solid bar inside the cell. The longer the bar, the higher the value, making comparisons very visual."
  },
  {
    "testId": "excel-test-04",
    "question": "What is a PivotTable's 'Show Details' feature (or 'Drill Down')?",
    "options": [
      "It displays the underlying source data for a specific aggregated value in a new sheet",
      "It hides the source data",
      "It deletes the source data",
      "It shows the PivotTable formula"
    ],
    "correctOption": 0,
    "explanation": "Double-clicking a value in a PivotTable (or using Show Details) creates a new worksheet showing the detail records that make up that aggregated number."
  },
  {
    "testId": "excel-test-04",
    "question": "What is the purpose of a 'Secondary Axis' in a chart?",
    "options": [
      "To plot two different data series with different scales on the same chart",
      "To add a second title",
      "To rotate the chart",
      "To add a second legend"
    ],
    "correctOption": 0,
    "explanation": "A secondary axis allows you to combine two datasets with vastly different value ranges (e.g., units and percentages) on the same chart."
  },
  {
    "testId": "excel-test-04",
    "question": "How can you change the chart type of an existing chart?",
    "options": [
      "Right-click on the chart > Change Chart Type",
      "Select the chart and press Ctrl + T",
      "Insert tab > Change Chart",
      "It cannot be changed"
    ],
    "correctOption": 0,
    "explanation": "Right-clicking the chart area and selecting 'Change Chart Type' opens the dialog to pick a different chart type."
  },
  {
    "testId": "excel-test-04",
    "question": "What is the use of the 'Value Field Settings' in a PivotTable?",
    "options": [
      "To change how a field is summarized (e.g., Sum, Count, Average) and customize number formatting",
      "To change the field name",
      "To filter the field",
      "To move the field"
    ],
    "correctOption": 0,
    "explanation": "Value Field Settings lets you choose the aggregation function (Sum, Count, Average, Min, Max, etc.) and adjust the number format for that field."
  },
  {
    "testId": "excel-test-04",
    "question": "What type of chart displays data as a set of points not connected by lines, often used for scientific data?",
    "options": ["Scatter Plot", "Line Chart", "Area Chart", "Bar Chart"],
    "correctOption": 0,
    "explanation": "Scatter (XY) plots show the relationship between two numerical variables using points, often used to find correlations."
  },
  {
    "testId": "excel-test-04",
    "question": "What is a 'PivotChart' field list?",
    "options": [
      "The side panel that allows you to add/remove fields and adjust the layout of the PivotChart",
      "A list of all available charts",
      "A list of all data sources",
      "A list of field names in the source table"
    ],
    "correctOption": 0,
    "explanation": "The PivotChart Field List works similarly to the PivotTable field list, letting you control which data is shown in the chart."
  },
  {
    "testId": "excel-test-04",
    "question": "What are 'Color Scales' in conditional formatting?",
    "options": [
      "A conditional formatting option that applies a gradient of colors (e.g., green to red) based on cell values",
      "A chart color palette",
      "A theme color set",
      "A type of cell border"
    ],
    "correctOption": 0,
    "explanation": "Color Scales apply a heat-map style gradient to cells, visually representing the distribution of values (e.g., highest in green, lowest in red)."
  },
  {
    "testId": "excel-test-04",
    "question": "What is the use of a 'Gauge Chart'?",
    "options": [
      "To display a single value on a dial or speedometer, indicating performance against a target",
      "To compare multiple categories",
      "To show trends over time",
      "To show parts of a whole"
    ],
    "correctOption": 0,
    "explanation": "Gauge charts (speedometers) are used in dashboards to visualize progress towards a goal (e.g., sales vs. target) in a single metric."
  },
  {
    "testId": "excel-test-04",
    "question": "How do you create a PivotTable from a table or range?",
    "options": [
      "Insert tab > PivotTable",
      "Data tab > PivotTable",
      "Formulas tab > PivotTable",
      "View tab > PivotTable"
    ],
    "correctOption": 0,
    "explanation": "The PivotTable button is located in the Tables group under the Insert tab."
  },
  {
    "testId": "excel-test-04",
    "question": "Which chart type is best for showing the distribution of data (e.g., histogram)?",
    "options": ["Bar Chart", "Pie Chart", "Column Chart", "Scatter Chart"],
    "correctOption": 0,
    "explanation": "Bar/Column charts can be used for histograms to show frequency distribution, but Excel also has a dedicated Histogram chart type."
  },
  {
    "testId": "excel-test-04",
    "question": "What does the 'Show Values As' option in a PivotTable do?",
    "options": [
      "It allows you to display the values as percentages, running totals, or differences instead of raw numbers",
      "It changes the source data",
      "It hides the values",
      "It sorts the values"
    ],
    "correctOption": 0,
    "explanation": "'Show Values As' is a powerful PivotTable feature to display data in different ways like % of Column, % of Grand Total, Running Total, etc."
  },
  {
    "testId": "excel-test-04",
    "question": "What is the main advantage of using a PivotTable over a formula-based summary?",
    "options": [
      "PivotTables are interactive and can be reorganized easily without rewriting formulas",
      "PivotTables are faster to calculate",
      "PivotTables have better formatting",
      "PivotTables can handle more rows"
    ],
    "correctOption": 0,
    "explanation": "The key benefit of PivotTables is their interactivity and flexibility. You can drag fields, add filters, and change aggregation on the fly."
  },
  {
    "testId": "excel-test-04",
    "question": "Which element in a chart typically displays the categories or labels for the horizontal axis?",
    "options": ["X-axis", "Y-axis", "Legend", "Title"],
    "correctOption": 0,
    "explanation": "The X-axis (horizontal axis) typically displays the category labels (like months, product names)."
  },
  {
    "testId": "excel-test-04",
    "question": "What is the purpose of 'Slicer Connections'?",
    "options": [
      "To connect a single slicer to multiple PivotTables, allowing you to filter them all at once",
      "To connect a PivotTable to a chart",
      "To connect to an external database",
      "To connect two workbooks"
    ],
    "correctOption": 0,
    "explanation": "Slicer Connections allow one slicer to control multiple PivotTables (or PivotCharts), ensuring consistent filtering across your dashboard."
  },
  {
    "testId": "excel-test-04",
    "question": "What is a 'Treemap' chart?",
    "options": [
      "A chart that displays hierarchical data as nested rectangles, sized and colored by value",
      "A chart that shows geographic data",
      "A chart that shows market share",
      "A chart that shows stock prices"
    ],
    "correctOption": 0,
    "explanation": "Treemap charts are used to display hierarchical data in a compact, space-efficient way, with rectangles representing different categories and sub-categories."
  },
  {
    "testId": "excel-test-04",
    "question": "What happens to a PivotTable when you delete the source data?",
    "options": [
      "The PivotTable will show #REF! errors or lose data",
      "The PivotTable is automatically deleted",
      "The PivotTable remains unchanged",
      "The PivotTable saves a copy of the data"
    ],
    "correctOption": 0,
    "explanation": "PivotTables are linked to the source data. If the source data is deleted or moved, the PivotTable will lose its reference and show errors."
  },
  {
    "testId": "excel-test-04",
    "question": "What is the function of 'Gridlines' in a chart?",
    "options": [
      "They are lines that extend from the axes across the plot area to improve readability",
      "They create a grid in the background",
      "They format the data points",
      "They add borders to the chart"
    ],
    "correctOption": 0,
    "explanation": "Gridlines help users read and compare values on a chart by providing visual reference lines."
  },
  {
    "testId": "excel-test-05",
    "question": "What does VBA stand for?",
    "options": ["Visual Basic for Applications", "Variable Binary Access", "Visual Base Algorithm", "Very Basic Application"],
    "correctOption": 0,
    "explanation": "VBA stands for Visual Basic for Applications. It is the programming language used in Excel and other Office applications to automate tasks."
  },
  {
    "testId": "excel-test-05",
    "question": "How do you open the Visual Basic for Applications (VBA) editor in Excel?",
    "options": ["Alt + F11", "Ctrl + F11", "Alt + F12", "Ctrl + Shift + V"],
    "correctOption": 0,
    "explanation": "Alt + F11 is the keyboard shortcut that opens the VBA editor where you can write, edit, and debug VBA code."
  },
  {
    "testId": "excel-test-05",
    "question": "What is a Macro in Excel?",
    "options": [
      "A sequence of recorded actions that can be played back to automate repetitive tasks",
      "A type of chart",
      "A complex formula",
      "A data validation rule"
    ],
    "correctOption": 0,
    "explanation": "A macro is a set of instructions (recorded or written in VBA) that automates tasks. Recording macros is a great way to start automating without coding."
  },
  {
    "testId": "excel-test-05",
    "question": "How do you record a macro in Excel?",
    "options": ["Developer tab > Record Macro", "View tab > Macros > Record Macro", "Home tab > Record Macro", "Both A and B"],
    "correctOption": 3,
    "explanation": "The Record Macro button is available on both the Developer tab and the View tab (in the Macros dropdown)."
  },
  {
    "testId": "excel-test-05",
    "question": "What is the extension of an Excel file that contains VBA macros?",
    "options": [".xlsx", ".xlsm", ".xlsb", ".xltx"],
    "correctOption": 1,
    "explanation": ".xlsm is the Macro-Enabled Workbook format. It is required to store VBA code. .xlsx does not support macros."
  },
  {
    "testId": "excel-test-05",
    "question": "Which VBA keyword is used to declare a variable?",
    "options": ["Dim", "Var", "Declare", "Let"],
    "correctOption": 0,
    "explanation": "The 'Dim' statement (Dimension) is used to declare a variable and optionally its data type (e.g., Dim x As Integer)."
  },
  {
    "testId": "excel-test-05",
    "question": "In VBA, how do you assign a value to a variable named 'total'?",
    "options": ["total = 100", "Dim total = 100", "Set total = 100", "total := 100"],
    "correctOption": 0,
    "explanation": "In VBA, assignment is done using the equals sign (=). For objects, you use 'Set', but for basic variables, just 'total = 100'."
  },
  {
    "testId": "excel-test-05",
    "question": "What is the purpose of the 'MsgBox' function in VBA?",
    "options": [
      "To display a pop-up message box to the user",
      "To get input from the user",
      "To write to the immediate window",
      "To log errors"
    ],
    "correctOption": 0,
    "explanation": "MsgBox displays a modal dialog box with a message and optional buttons (e.g., OK, Yes/No) to interact with the user."
  },
  {
    "testId": "excel-test-05",
    "question": "Which VBA function is used to get input from a user in a dialog box?",
    "options": ["InputBox", "MsgBox", "GetInput", "UserForm"],
    "correctOption": 0,
    "explanation": "InputBox prompts the user to enter a value (text or number) and returns the entered string."
  },
  {
    "testId": "excel-test-05",
    "question": "What is the default data type for an undeclared variable in VBA?",
    "options": ["Integer", "String", "Variant", "Double"],
    "correctOption": 2,
    "explanation": "If you don't specify a data type, VBA assigns the 'Variant' data type, which can hold any type of data. It's best practice to declare specific types."
  },
  {
    "testId": "excel-test-05",
    "question": "How do you write a comment in VBA code?",
    "options": ["// This is a comment", "' This is a comment", "/* This is a comment */", "# This is a comment"],
    "correctOption": 1,
    "explanation": "In VBA, an apostrophe (') at the start of a line (or after a code statement) indicates a comment. The compiler ignores comments."
  },
  {
    "testId": "excel-test-05",
    "question": "Which VBA statement is used to repeat a block of code a specific number of times?",
    "options": ["For...Next", "While...Wend", "Do...Loop", "If...Then"],
    "correctOption": 0,
    "explanation": "For...Next is a counted loop that iterates a block of code a defined number of times. Do...Loop and While...Wend are conditional loops."
  },
  {
    "testId": "excel-test-05",
    "question": "What does the 'If...Then...Else' statement do in VBA?",
    "options": [
      "It executes a block of code based on a specified condition",
      "It repeats a block of code",
      "It declares a variable",
      "It displays a message"
    ],
    "correctOption": 0,
    "explanation": "If...Then...Else is a conditional branching structure that allows your code to make decisions and execute different paths based on logical tests."
  },
  {
    "testId": "excel-test-05",
    "question": "What is a 'UserForm' in VBA?",
    "options": [
      "A customizable dialog box that you can build with buttons, text boxes, and other controls",
      "A built-in Excel function",
      "A type of module",
      "A worksheet"
    ],
    "correctOption": 0,
    "explanation": "UserForms allow you to create professional custom interfaces for data entry and interaction, providing more flexibility than InputBox."
  },
  {
    "testId": "excel-test-05",
    "question": "How do you run a macro in Excel?",
    "options": [
      "Press Alt + F8 and select the macro",
      "Click the Run button in the VBA editor",
      "Assign it to a button or shape and click it",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "You can run macros via the Macro dialog (Alt+F8), from the VBA editor (F5), or by clicking a button/shape that has the macro assigned to it."
  },
  {
    "testId": "excel-test-05",
    "question": "What is the 'Do While' loop in VBA?",
    "options": [
      "A loop that repeats a block of code while a condition is true",
      "A loop that repeats a block of code a specific number of times",
      "A loop that repeats forever",
      "A loop that executes at least once"
    ],
    "correctOption": 0,
    "explanation": "Do While...Loop executes a block of code as long as the specified condition remains TRUE. It checks the condition before entering the loop."
  },
  {
    "testId": "excel-test-05",
    "question": "What is the difference between 'Do While' and 'Do Until'?",
    "options": [
      "Do While runs while condition is true; Do Until runs until condition becomes true (i.e., while it is false)",
      "They are exactly the same",
      "Do Until is used for counting",
      "Do While is used for arrays"
    ],
    "correctOption": 0,
    "explanation": "Do While continues while the condition is true. Do Until continues until the condition becomes true (i.e., it runs while the condition is false)."
  },
  {
    "testId": "excel-test-05",
    "question": "How do you reference a cell value in VBA (e.g., cell A1)?",
    "options": [
      "Range('A1').Value",
      "Cells(1, 1).Value",
      "Sheets('Sheet1').Range('A1').Value",
      "All of the above are valid"
    ],
    "correctOption": 3,
    "explanation": "You can reference cells using Range('A1'), Cells(row, col), or fully qualified with the worksheet object to avoid errors."
  },
  {
    "testId": "excel-test-05",
    "question": "What does 'Option Explicit' do at the top of a VBA module?",
    "options": [
      "It forces you to declare all variables using Dim, preventing errors from typos",
      "It makes variables optional",
      "It speeds up execution",
      "It exposes all variables"
    ],
    "correctOption": 0,
    "explanation": "Option Explicit requires that all variables be explicitly declared. This helps catch typos and reduces bugs."
  },
  {
    "testId": "excel-test-05",
    "question": "What is a 'Sub' in VBA?",
    "options": [
      "A procedure that performs actions but does not return a value",
      "A function that returns a value",
      "A type of variable",
      "An error handler"
    ],
    "correctOption": 0,
    "explanation": "A Sub (Subroutine) contains code that executes a series of statements. It can take parameters but does not return a value."
  },
  {
    "testId": "excel-test-05",
    "question": "What is a 'Function' in VBA (as opposed to a Sub)?",
    "options": [
      "A procedure that returns a value",
      "A procedure that does not return a value",
      "A built-in Excel formula",
      "A type of module"
    ],
    "correctOption": 0,
    "explanation": "A Function is a procedure that performs a calculation and returns a single value. It can be used in formulas or called from other procedures."
  },
  {
    "testId": "excel-test-05",
    "question": "What does the 'On Error Resume Next' statement do in VBA?",
    "options": [
      "It ignores errors and continues executing the next line of code",
      "It stops execution on an error",
      "It displays an error message",
      "It logs the error"
    ],
    "correctOption": 0,
    "explanation": "'On Error Resume Next' is an error-handling statement that tells VBA to ignore runtime errors and continue with the next line. It should be used carefully."
  },
  {
    "testId": "excel-test-05",
    "question": "What is the purpose of the 'With' statement in VBA?",
    "options": [
      "To perform multiple operations on a single object without repeating the object reference",
      "To declare a variable",
      "To define a loop",
      "To set a condition"
    ],
    "correctOption": 0,
    "explanation": "'With...End With' allows you to execute a series of statements on a specific object without re-qualifying the object name each time, making code cleaner."
  },
  {
    "testId": "excel-test-05",
    "question": "What is a 'breakpoint' in VBA?",
    "options": [
      "A point in the code where execution pauses for debugging",
      "A point where the code breaks permanently",
      "A point where code is deleted",
      "A point that saves the workbook"
    ],
    "correctOption": 0,
    "explanation": "A breakpoint is a marker you set on a line of code (by clicking in the margin or pressing F9) that causes the code to pause when executed, allowing you to inspect variables and step through code."
  },
  {
    "testId": "excel-test-05",
    "question": "How can you assign a macro to a button on a worksheet?",
    "options": [
      "Right-click the button > Assign Macro",
      "Developer tab > Insert > Button (Form Control) and then assign in the dialog",
      "Both A and B",
      "It cannot be done"
    ],
    "correctOption": 2,
    "explanation": "You can add a Form Control button from the Developer tab, and when placed, it automatically prompts you to assign a macro. Later, you can right-click to change the assigned macro."
  },
  {
    "testId": "excel-test-05",
    "question": "What is Power Query in Excel?",
    "options": [
      "A tool for data transformation and import from external sources",
      "A VBA coding environment",
      "A charting tool",
      "A protection tool"
    ],
    "correctOption": 0,
    "explanation": "Power Query (Get & Transform) is a powerful ETL (Extract, Transform, Load) tool used to connect to, combine, and refine data from various sources before loading it into Excel."
  },
  {
    "testId": "excel-test-05",
    "question": "How do you protect a VBA project with a password?",
    "options": [
      "VBA Editor > Tools > VBAProject Properties > Protection > Lock project for viewing > set password",
      "File > Protect Workbook",
      "Review > Protect Sheet",
      "Data > Protect"
    ],
    "correctOption": 0,
    "explanation": "To prevent others from viewing or editing your VBA code, you go to the VBA editor, right-click the project, select 'VBAProject Properties', go to Protection, and set a password."
  },
  {
    "testId": "excel-test-05",
    "question": "What is the 'Immediate Window' used for in VBA?",
    "options": [
      "To execute VBA statements on the fly and to view Debug.Print outputs",
      "To write and save macros",
      "To design UserForms",
      "To view the Excel grid"
    ],
    "correctOption": 0,
    "explanation": "The Immediate Window (Ctrl+G) is a debugging tool where you can type VBA commands to execute immediately, or use Debug.Print to output variable values for testing."
  },
  {
    "testId": "excel-test-05",
    "question": "What is a 'Named Range' in VBA and why use it?",
    "options": [
      "A named range is a meaningful name for a cell or range that makes code more readable and dynamic",
      "A named range is a type of chart",
      "A named range is a VBA function",
      "A named range is a macro"
    ],
    "correctOption": 0,
    "explanation": "Using named ranges in VBA (e.g., Range('SalesTotal')) makes your code easier to read and maintain. It also makes references more robust if rows are inserted/deleted."
  },
  {
    "testId": "excel-test-05",
    "question": "What does the 'Count' property of a collection (like Worksheets) return?",
    "options": [
      "The number of items in the collection",
      "The count of cells in the first worksheet",
      "A random number",
      "The total rows in the workbook"
    ],
    "correctOption": 0,
    "explanation": "Worksheets.Count returns the number of worksheets in the workbook. It's commonly used in loops to iterate through all sheets."
  },
  {
    "testId": "excel-test-05",
    "question": "What is the purpose of 'Application.ScreenUpdating = False' in VBA?",
    "options": [
      "To prevent the screen from flickering and speed up macro execution",
      "To hide the Excel application",
      "To disable the mouse",
      "To lock the screen"
    ],
    "correctOption": 0,
    "explanation": "Setting ScreenUpdating to False prevents Excel from redrawing the screen while your macro runs, which significantly speeds up performance and makes the user experience cleaner."
  },
  {
    "testId": "excel-test-05",
    "question": "Which VBA method is used to save a workbook?",
    "options": ["Workbook.Save", "Workbook.SaveAs", "Workbook.Close", "Both .Save and .SaveAs"],
    "correctOption": 3,
    "explanation": "If the workbook has a path, .Save saves changes. .SaveAs allows you to specify a new file name/path."
  },
  {
    "testId": "excel-test-05",
    "question": "What is 'Error Handling' in VBA?",
    "options": [
      "The process of writing code to manage runtime errors gracefully (e.g., using On Error statements)",
      "The process of deleting errors",
      "The process of ignoring errors",
      "The process of formatting errors"
    ],
    "correctOption": 0,
    "explanation": "Error handling involves anticipating potential errors and writing code to handle them instead of crashing, often using On Error GoTo labels or Resume Next."
  },
  {
    "testId": "excel-test-05",
    "question": "How do you reference a specific sheet in VBA?",
    "options": [
      "Sheets('Sheet1')",
      "Worksheets('MySheet')",
      "Sheet1 (if codename is used)",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "You can reference sheets by their tab name (Sheets()), by their index (Sheets(1)), or by their VBA codename (Sheet1) which is more stable."
  },
  {
    "testId": "excel-test-05",
    "question": "What is the purpose of the 'ActiveCell' property?",
    "options": [
      "It refers to the currently selected cell in the active worksheet",
      "It refers to the last cell with data",
      "It refers to the top-left cell of the range",
      "It refers to a hidden cell"
    ],
    "correctOption": 0,
    "explanation": "ActiveCell returns the cell that is currently highlighted or selected. It is often used when working with user selections."
  },
  {
    "testId": "excel-test-05",
    "question": "What does the 'Selection' object represent in VBA?",
    "options": [
      "The currently selected range, chart, or object in Excel",
      "A fixed range",
      "The entire worksheet",
      "The active workbook"
    ],
    "correctOption": 0,
    "explanation": "The Selection property returns the currently selected object (which could be a range, shape, chart, etc.). It's dynamic and depends on what the user has selected."
  },
  {
    "testId": "excel-test-05",
    "question": "What is the 'Workbook_Open' event?",
    "options": [
      "A VBA procedure that runs automatically when a workbook is opened",
      "A procedure that runs when a workbook is closed",
      "A procedure that runs when a cell is changed",
      "A procedure that runs on a timer"
    ],
    "correctOption": 0,
    "explanation": "Workbook_Open is an event procedure placed in the ThisWorkbook module. It executes automatically as soon as the workbook is opened."
  },
  {
    "testId": "excel-test-05",
    "question": "What is the purpose of the 'Array' function in VBA?",
    "options": [
      "To create a list/array of values that can be stored in a single variable",
      "To delete an array",
      "To sort an array",
      "To display an array"
    ],
    "correctOption": 0,
    "explanation": "The Array function returns a Variant containing an array of values, allowing you to store multiple values in one variable."
  },
  {
    "testId": "excel-test-05",
    "question": "How can you run a macro when a specific cell value changes?",
    "options": [
      "Use the Worksheet_Change event in the worksheet's code module",
      "Use a timer",
      "Use a button",
      "Use a formula"
    ],
    "correctOption": 0,
    "explanation": "The Worksheet_Change event fires automatically whenever any cell is changed on that specific worksheet. You can write VBA code inside this event to check for specific changes."
  },
  {
    "testId": "excel-test-05",
    "question": "What does the 'Loop' function in VBA do?",
    "options": [
      "It repeats a block of code until a condition is met",
      "It ends a program",
      "It declares a variable",
      "It saves a file"
    ],
    "correctOption": 0,
    "explanation": "Loops (For, Do While, Do Until) are fundamental for automating repetitive tasks, allowing a block of code to be executed multiple times."
  },
  {
    "testId": "excel-test-05",
    "question": "What is a 'Class Module' in VBA?",
    "options": [
      "A module that allows you to create your own objects with properties and methods",
      "A standard module for subs and functions",
      "A module for UserForms",
      "A module that stores sheet code"
    ],
    "correctOption": 0,
    "explanation": "Class Modules in VBA let you define custom objects, encapsulating data and code into reusable components."
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

// Generate IDs for new questions
newQuestions.forEach((q, idx) => {
  q.id = `ex-q-${idx+1}`;
});

content += ',\n' + newQuestions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];\n';

fs.writeFileSync(filepath, content, 'utf8');
console.log('Added ' + newQuestions.length + ' excel questions to questions.js');
