const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "python-test-01",
    "question": "Which of the following is the correct way to create a list in Python?",
    "options": ["list = (1, 2, 3)", "list = [1, 2, 3]", "list = {1, 2, 3}", "list = <1, 2, 3>"],
    "correctOption": 1,
    "explanation": "In Python, lists are created by placing comma-separated values inside square brackets []."
  },
  {
    "testId": "python-test-01",
    "question": "What is the output of `print(2 ** 3)` in Python?",
    "options": ["6", "5", "8", "9"],
    "correctOption": 2,
    "explanation": "The `**` operator in Python is used for exponentiation, so 2 raised to the power of 3 is 8."
  },
  {
    "testId": "python-test-01",
    "question": "Which of the following is NOT a valid Python data type?",
    "options": ["int", "float", "char", "bool"],
    "correctOption": 2,
    "explanation": "Python does not have a separate 'char' data type. Characters are represented as strings of length 1 in Python."
  },
  {
    "testId": "python-test-01",
    "question": "How do you create a variable with the floating-point number 3.14 in Python?",
    "options": ["var = 3.14", "float var = 3.14", "var float = 3.14", "var = '3.14'"],
    "correctOption": 0,
    "explanation": "Python is dynamically typed. You simply assign a value to a variable using the assignment operator '='. The data type is inferred."
  },
  {
    "testId": "python-test-01",
    "question": "Which of the following is the correct way to comment a single line in Python?",
    "options": ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
    "correctOption": 2,
    "explanation": "In Python, the hash character (#) is used to denote a single-line comment. Everything after # on that line is ignored."
  },
  {
    "testId": "python-test-01",
    "question": "What will be the output of `print(type(10))`?",
    "options": ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
    "correctOption": 0,
    "explanation": "The type() function returns the data type of the argument. 10 is an integer, so it returns <class 'int'>."
  },
  {
    "testId": "python-test-01",
    "question": "Which operator is used to compare two values for equality in Python?",
    "options": ["=", "==", "===", "!="],
    "correctOption": 1,
    "explanation": "The double equals '==' operator is used to check if two values are equal. The single '=' is used for assignment."
  },
  {
    "testId": "python-test-01",
    "question": "What is the result of `10 // 3` in Python?",
    "options": ["3.33", "3", "4", "3.0"],
    "correctOption": 1,
    "explanation": "The '//' operator is floor division. It divides and rounds down to the nearest integer. 10 // 3 = 3."
  },
  {
    "testId": "python-test-01",
    "question": "Which of the following is a valid variable name in Python?",
    "options": ["2var", "var-2", "_var2", "var 2"],
    "correctOption": 2,
    "explanation": "Variable names can start with a letter or underscore (_). They cannot start with a number or contain spaces or hyphens."
  },
  {
    "testId": "python-test-01",
    "question": "What is the output of `print('Hello' + 'World')`?",
    "options": ["Hello World", "HelloWorld", "Hello+World", "Error"],
    "correctOption": 1,
    "explanation": "The '+' operator concatenates strings. 'Hello' + 'World' results in 'HelloWorld' without any space."
  },
  {
    "testId": "python-test-01",
    "question": "Which function is used to convert a string to an integer in Python?",
    "options": ["str()", "int()", "float()", "char()"],
    "correctOption": 1,
    "explanation": "int() is used to convert a string or number to an integer. For example, int('10') returns 10."
  },
  {
    "testId": "python-test-01",
    "question": "What will be the output of `bool(0)`?",
    "options": ["True", "False", "0", "Error"],
    "correctOption": 1,
    "explanation": "In Python, any non-zero number, non-empty sequence, or non-None object evaluates to True. Zero evaluates to False."
  },
  {
    "testId": "python-test-01",
    "question": "Which of the following is the correct syntax to output a string in Python?",
    "options": ["print('Hello')", "output('Hello')", "echo 'Hello'", "console.log('Hello')"],
    "correctOption": 0,
    "explanation": "The print() function is used to output text or variables to the console in Python."
  },
  {
    "testId": "python-test-01",
    "question": "What is the result of `5 % 2` in Python?",
    "options": ["2", "2.5", "1", "0"],
    "correctOption": 2,
    "explanation": "The '%' operator is the modulus operator. It returns the remainder of the division. 5 divided by 2 leaves a remainder of 1."
  },
  {
    "testId": "python-test-01",
    "question": "Which of the following is NOT a valid Python data type for storing text?",
    "options": ["str", "string", "unicode", "All are valid"],
    "correctOption": 1,
    "explanation": "In Python, the text data type is 'str'. 'string' is not a valid Python data type name. Unicode is a type of text representation but not a Python type."
  },
  {
    "testId": "python-test-01",
    "question": "What is the output of `print(2 + 3 * 4)`?",
    "options": ["20", "14", "24", "18"],
    "correctOption": 1,
    "explanation": "Python follows operator precedence. Multiplication is performed before addition. 3 * 4 = 12, then 2 + 12 = 14."
  },
  {
    "testId": "python-test-01",
    "question": "How do you check the data type of a variable 'x' in Python?",
    "options": ["type(x)", "typeof(x)", "x.type()", "data_type(x)"],
    "correctOption": 0,
    "explanation": "The built-in type() function returns the data type of the argument."
  },
  {
    "testId": "python-test-01",
    "question": "Which of the following is a correct way to create a tuple in Python?",
    "options": ["tup = [1, 2, 3]", "tup = (1, 2, 3)", "tup = {1, 2, 3}", "tup = <1, 2, 3>"],
    "correctOption": 1,
    "explanation": "Tuples are created by placing comma-separated values inside parentheses (). They are immutable."
  },
  {
    "testId": "python-test-01",
    "question": "What does the `len()` function do in Python?",
    "options": ["Returns the length of a sequence", "Returns the largest element in a sequence", "Returns the smallest element", "Prints the sequence"],
    "correctOption": 0,
    "explanation": "len() returns the number of items in a sequence (string, list, tuple, dictionary, etc.)."
  },
  {
    "testId": "python-test-01",
    "question": "Which of the following is NOT a valid Python operator?",
    "options": ["+", "-", "*", "//"],
    "correctOption": 3,
    "explanation": "All of these are valid Python operators. + (addition), - (subtraction), * (multiplication), // (floor division)."
  },
  {
    "testId": "python-test-01",
    "question": "What is the output of `print(10.5 + 5)`?",
    "options": ["15", "15.5", "15.0", "Error"],
    "correctOption": 1,
    "explanation": "Python automatically handles type mixing. 10.5 (float) + 5 (int) results in a float, 15.5."
  },
  {
    "testId": "python-test-01",
    "question": "Which Python keyword is used to define a function?",
    "options": ["function", "def", "define", "func"],
    "correctOption": 1,
    "explanation": "The 'def' keyword is used to define a function in Python. Example: def my_function(): ..."
  },
  {
    "testId": "python-test-01",
    "question": "What is the result of `print(int(3.9))`?",
    "options": ["3", "4", "3.9", "Error"],
    "correctOption": 0,
    "explanation": "int() truncates the decimal part, converting a float to an integer. int(3.9) returns 3."
  },
  {
    "testId": "python-test-01",
    "question": "Which of the following is a correct way to create a dictionary in Python?",
    "options": ["dict = [1, 2, 3]", "dict = (1, 2, 3)", "dict = {'name': 'John', 'age': 30}", "dict = {1, 2, 3}"],
    "correctOption": 2,
    "explanation": "Dictionaries are created using curly braces {} with key-value pairs separated by colons."
  },
  {
    "testId": "python-test-01",
    "question": "What is the difference between `==` and `is` in Python?",
    "options": ["== compares values; is compares memory addresses", "== compares memory addresses; is compares values", "Both are the same", "is is used only for numbers"],
    "correctOption": 0,
    "explanation": "== compares the values of two objects for equality. 'is' checks if two variables refer to the same object in memory."
  },
  {
    "testId": "python-test-01",
    "question": "Which of the following is used to handle string formatting with variables in Python 3?",
    "options": ["%s", "format()", "f-strings", "All of the above"],
    "correctOption": 3,
    "explanation": "Python supports multiple string formatting methods: %-formatting, str.format(), and f-strings (f'Hello {name}')."
  },
  {
    "testId": "python-test-01",
    "question": "What is the output of `print(10 % 3)`?",
    "options": ["3", "1", "0", "3.33"],
    "correctOption": 1,
    "explanation": "The modulus operator returns the remainder. 10 % 3 = 1 because 3*3 = 9, remainder 1."
  },
  {
    "testId": "python-test-01",
    "question": "Which of the following is a mutable data type in Python?",
    "options": ["str", "tuple", "list", "int"],
    "correctOption": 2,
    "explanation": "Lists are mutable (can be modified after creation). Strings, tuples, and integers are immutable."
  },
  {
    "testId": "python-test-01",
    "question": "What is the output of `print(bool('False'))`?",
    "options": ["False", "True", "Error", "0"],
    "correctOption": 1,
    "explanation": "bool() converts a value to boolean. Any non-empty string evaluates to True, including 'False'."
  },
  {
    "testId": "python-test-01",
    "question": "How do you exit a Python script in the interactive shell?",
    "options": ["exit()", "quit()", "Ctrl + Z then Enter", "All of the above"],
    "correctOption": 3,
    "explanation": "All of these methods can be used to exit a Python interactive session."
  },
  {
    "testId": "python-test-02",
    "question": "What is the output of this code?\n\n```python\nx = 5\nif x > 3:\n    print('A')\nelse:\n    print('B')\n```",
    "options": ["A", "B", "Error", "None"],
    "correctOption": 0,
    "explanation": "Since 5 > 3 is True, the code enters the if block and prints 'A'."
  },
  {
    "testId": "python-test-02",
    "question": "Which loop in Python is used to iterate over a sequence?",
    "options": ["for loop", "while loop", "do-while loop", "All of the above"],
    "correctOption": 0,
    "explanation": "The 'for' loop in Python is designed for iterating over sequences (like lists, strings, tuples). The 'while' loop is condition-based."
  },
  {
    "testId": "python-test-02",
    "question": "What is the output of this code?\n\n```python\nfor i in range(3):\n    print(i, end=' ')\n```",
    "options": ["0 1 2", "1 2 3", "0 1 2 3", "0 0 0"],
    "correctOption": 0,
    "explanation": "range(3) generates numbers from 0 to 2. The loop prints each number separated by a space."
  },
  {
    "testId": "python-test-02",
    "question": "What is the purpose of the `break` statement in Python loops?",
    "options": ["Skips the current iteration", "Exits the loop entirely", "Restarts the loop", "Ends the program"],
    "correctOption": 1,
    "explanation": "The break statement immediately terminates the loop and transfers execution to the next statement after the loop."
  },
  {
    "testId": "python-test-02",
    "question": "Which of the following is NOT a Python keyword?",
    "options": ["elif", "then", "else", "if"],
    "correctOption": 1,
    "explanation": "Python uses 'elif' (short for else if), 'else', and 'if' as keywords. 'then' is not a Python keyword."
  },
  {
    "testId": "python-test-02",
    "question": "What is the output of this code?\n\n```python\ncount = 0\nwhile count < 3:\n    print(count, end=' ')\n    count += 1\n```",
    "options": ["1 2 3", "0 1 2", "0 1 2 3", "1 2"],
    "correctOption": 1,
    "explanation": "The while loop runs as long as count < 3. It prints 0, then 1, then 2. When count becomes 3, the condition is false and the loop stops."
  },
  {
    "testId": "python-test-02",
    "question": "What does the `continue` statement do?",
    "options": ["Exits the loop", "Skips to the next iteration", "Restarts the loop", "Exits the program"],
    "correctOption": 1,
    "explanation": "The continue statement skips the rest of the code in the current iteration and moves to the next iteration of the loop."
  },
  {
    "testId": "python-test-02",
    "question": "Which of the following is the correct syntax for an `if` statement in Python?",
    "options": ["if (x > 5) { }", "if x > 5:", "if x > 5 then", "if x > 5:"],
    "correctOption": 3,
    "explanation": "The correct syntax is 'if condition:' followed by an indented block of code. The colon is required."
  },
  {
    "testId": "python-test-02",
    "question": "What is the output of this code?\n\n```python\nx = 10\nif x > 5:\n    print('A')\nelif x > 7:\n    print('B')\nelse:\n    print('C')\n```",
    "options": ["A", "B", "C", "Error"],
    "correctOption": 0,
    "explanation": "The first condition (x > 5) is True, so it prints 'A'. The elif and else blocks are ignored."
  },
  {
    "testId": "python-test-02",
    "question": "Which loop is used when the number of iterations is known in advance?",
    "options": ["for loop", "while loop", "do-while loop", "infinite loop"],
    "correctOption": 0,
    "explanation": "The for loop is typically used when you know how many times you want to iterate (e.g., over a range or sequence)."
  },
  {
    "testId": "python-test-02",
    "question": "What is the output of this code?\n\n```python\nfor i in range(1, 4):\n    if i == 2:\n        continue\n    print(i, end=' ')\n```",
    "options": ["1 2 3", "1 3", "2", "1 2"],
    "correctOption": 1,
    "explanation": "When i == 2, the continue statement skips the rest of the iteration, so only 1 and 3 are printed."
  },
  {
    "testId": "python-test-02",
    "question": "Which of the following correctly uses the `else` clause with a loop in Python?",
    "options": [
      "for i in range(3): print(i) else: print('Done')",
      "for i in range(3): print(i); else: print('Done')",
      "Both are valid",
      "None are valid"
    ],
    "correctOption": 2,
    "explanation": "In Python, loops can have an else clause that executes when the loop completes normally (without a break statement). Both formats are syntactically valid."
  },
  {
    "testId": "python-test-02",
    "question": "What is the output of this code?\n\n```python\nx = 0\nwhile x < 3:\n    x += 1\nelse:\n    print('Done', x)\n```",
    "options": ["Done 3", "Done 0", "Done 1", "3"],
    "correctOption": 0,
    "explanation": "The while loop runs until x becomes 3. When the condition becomes false, the else block executes, printing 'Done 3'."
  },
  {
    "testId": "python-test-02",
    "question": "Which of the following statements is used to perform a case-insensitive comparison?",
    "options": ["Using the lower() method", "Using the upper() method", "Using the casefold() method", "All of the above"],
    "correctOption": 3,
    "explanation": "You can use lower(), upper(), or casefold() to normalize strings for case-insensitive comparison. casefold() is the most aggressive for Unicode."
  },
  {
    "testId": "python-test-02",
    "question": "What is the output of this code?\n\n```python\nnum = 3\nif num % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')\n```",
    "options": ["Even", "Odd", "Error", "None"],
    "correctOption": 1,
    "explanation": "3 % 2 = 1, which is not equal to 0, so the condition is False and the else block prints 'Odd'."
  },
  {
    "testId": "python-test-02",
    "question": "What does the `range(5)` function generate?",
    "options": ["0, 1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3", "0, 2, 4, 6, 8"],
    "correctOption": 0,
    "explanation": "range(n) generates numbers from 0 to n-1. So range(5) generates 0, 1, 2, 3, 4."
  },
  {
    "testId": "python-test-02",
    "question": "In Python, what is the correct syntax for a `for` loop to iterate over a list?",
    "options": ["for i in list:", "for i in list", "for i in range(list):", "for (i in list)"],
    "correctOption": 0,
    "explanation": "The correct syntax is 'for element in iterable:' followed by an indented block."
  },
  {
    "testId": "python-test-02",
    "question": "What is the output of this code?\n\n```python\nfor i in range(3):\n    if i == 1:\n        break\n    print(i, end=' ')\n```",
    "options": ["0", "0 1", "0 1 2", "1 2"],
    "correctOption": 0,
    "explanation": "The break statement exits the loop when i equals 1, so only 0 is printed."
  },
  {
    "testId": "python-test-02",
    "question": "How do you create an infinite loop in Python?",
    "options": ["for i in range():", "while True:", "while 1:", "Both B and C"],
    "correctOption": 3,
    "explanation": "Both 'while True:' and 'while 1:' create infinite loops because the condition is always True. You must use a break statement to exit."
  },
  {
    "testId": "python-test-02",
    "question": "Which keyword is used to check if a condition is false?",
    "options": ["not", "else", "elif", "unless"],
    "correctOption": 0,
    "explanation": "The 'not' keyword is used to negate a condition. 'unless' is not a Python keyword."
  },
  {
    "testId": "python-test-02",
    "question": "What is the output of this code?\n\n```python\nfor i in range(2):\n    for j in range(2):\n        print(i, j, end=' ')\n```",
    "options": ["0 0 0 1 1 0 1 1", "0 0 0 1 0 2", "0 1 0 1", "Error"],
    "correctOption": 0,
    "explanation": "Nested loops: i=0 runs j=0 and j=1; i=1 runs j=0 and j=1. Output: 0 0, 0 1, 1 0, 1 1."
  },
  {
    "testId": "python-test-02",
    "question": "Which statement is used to skip the rest of the code in a loop iteration?",
    "options": ["break", "continue", "pass", "skip"],
    "correctOption": 1,
    "explanation": "The continue statement skips the rest of the loop body and moves to the next iteration."
  },
  {
    "testId": "python-test-02",
    "question": "What is the output of this code?\n\n```python\nx = 5\nif x == 5:\n    pass\nelse:\n    print('Not 5')\n```",
    "options": ["Error", "Not 5", "None", "Nothing"],
    "correctOption": 3,
    "explanation": "The pass statement does nothing. Since the condition is True, the if block executes, but pass does nothing, so no output is printed."
  },
  {
    "testId": "python-test-02",
    "question": "What is the difference between `for` loop and `while` loop in Python?",
    "options": [
      "for loop iterates over a sequence; while loop continues until a condition is false",
      "for loop is condition-based; while loop is sequence-based",
      "Both are identical",
      "for loop is faster than while loop"
    ],
    "correctOption": 0,
    "explanation": "The for loop is used for iterating over a sequence (list, tuple, string, etc.). The while loop continues executing as long as a condition is true."
  },
  {
    "testId": "python-test-02",
    "question": "What is the output of this code?\n\n```python\ni = 0\nwhile i < 3:\n    i += 1\n    if i == 2:\n        continue\n    print(i, end=' ')\n```",
    "options": ["1 3", "1 2 3", "2 3", "1"],
    "correctOption": 0,
    "explanation": "The loop runs i = 1, prints 1; i = 2, continue skips print; i = 3, prints 3. Output: 1 3."
  },
  {
    "testId": "python-test-02",
    "question": "Which of the following is a valid Python comparison operator?",
    "options": ["<>", "!=", "><", "all of the above"],
    "correctOption": 1,
    "explanation": "'!=' is the valid not-equal operator in Python. '<>' was used in older Python versions but is deprecated."
  },
  {
    "testId": "python-test-02",
    "question": "What is the output of this code?\n\n```python\nfor i in range(1, 3):\n    print(i, end=' ')\nelse:\n    print('Done')\n```",
    "options": ["1 2", "1 2 Done", "Done", "1 2 Done Error"],
    "correctOption": 1,
    "explanation": "The for loop prints 1 and 2. Since there's no break, the else block executes and prints 'Done'."
  },
  {
    "testId": "python-test-03",
    "question": "How do you define a function in Python?",
    "options": ["def function_name():", "function function_name():", "func function_name():", "define function_name():"],
    "correctOption": 0,
    "explanation": "The 'def' keyword is used to define a function in Python, followed by the function name and parentheses."
  },
  {
    "testId": "python-test-03",
    "question": "Which keyword is used to return a value from a function?",
    "options": ["return", "send", "yield", "print"],
    "correctOption": 0,
    "explanation": "The 'return' keyword is used to exit a function and optionally pass a value back to the caller."
  },
  {
    "testId": "python-test-03",
    "question": "What is the output of this code?\n\n```python\ndef add(a, b):\n    return a + b\nprint(add(3, 5))\n```",
    "options": ["35", "8", "3+5", "Error"],
    "correctOption": 1,
    "explanation": "The add function takes two arguments and returns their sum. 3 + 5 = 8."
  },
  {
    "testId": "python-test-03",
    "question": "What is a lambda function in Python?",
    "options": ["A small anonymous function", "A function with many parameters", "A function inside a class", "A recursive function"],
    "correctOption": 0,
    "explanation": "Lambda functions are small anonymous functions defined using the 'lambda' keyword. They can have any number of arguments but only one expression."
  },
  {
    "testId": "python-test-03",
    "question": "What is the output of this code?\n\n```python\nx = 10\ndef my_function():\n    x = 5\n    return x\nprint(my_function())\nprint(x)\n```",
    "options": ["5 10", "10 5", "5 5", "10 10"],
    "correctOption": 0,
    "explanation": "Inside the function, x is a local variable, so it returns 5. Outside the function, the global x remains 10."
  },
  {
    "testId": "python-test-03",
    "question": "What does the `global` keyword do in Python?",
    "options": [
      "It allows a function to modify a global variable",
      "It creates a global variable",
      "It deletes a global variable",
      "It imports global functions"
    ],
    "correctOption": 0,
    "explanation": "The 'global' keyword is used inside a function to declare that a variable is global, allowing you to modify it."
  },
  {
    "testId": "python-test-03",
    "question": "What is the output of this code?\n\n```python\ndef square(x):\n    return x * x\nresult = square(4)\nprint(result)\n```",
    "options": ["16", "8", "4", "Error"],
    "correctOption": 0,
    "explanation": "square(4) returns 4 * 4 = 16. The result is stored in 'result' and printed."
  },
  {
    "testId": "python-test-03",
    "question": "Which of the following is NOT a valid way to pass arguments to a function?",
    "options": ["Positional arguments", "Keyword arguments", "Default arguments", "Pointer arguments"],
    "correctOption": 3,
    "explanation": "Python does not have pointers like C/C++. Arguments can be passed positionally, as keywords, or using defaults."
  },
  {
    "testId": "python-test-03",
    "question": "What is the output of this code?\n\n```python\ndef greet(name='World'):\n    print('Hello', name)\ngreet()\ngreet('John')\n```",
    "options": ["Hello World Hello John", "Hello John Hello World", "World John", "Error"],
    "correctOption": 0,
    "explanation": "The default parameter 'name' is 'World'. greet() uses the default, greet('John') overrides it."
  },
  {
    "testId": "python-test-03",
    "question": "What is the purpose of `*args` in a function definition?",
    "options": [
      "To pass a variable number of positional arguments",
      "To pass a variable number of keyword arguments",
      "To pass a single argument",
      "To pass arguments as a list"
    ],
    "correctOption": 0,
    "explanation": "'*args' allows a function to accept any number of positional arguments. The arguments are collected into a tuple."
  },
  {
    "testId": "python-test-03",
    "question": "What is the output of this code?\n\n```python\ndef multiply(a, b=2):\n    return a * b\nprint(multiply(3))\nprint(multiply(3, 4))\n```",
    "options": ["6 12", "6 6", "3 12", "Error"],
    "correctOption": 0,
    "explanation": "multiply(3) uses default b=2, returns 6. multiply(3, 4) overrides b, returns 12."
  },
  {
    "testId": "python-test-03",
    "question": "What is a recursive function?",
    "options": [
      "A function that calls itself",
      "A function that calls another function",
      "A function that returns a function",
      "A function that never returns"
    ],
    "correctOption": 0,
    "explanation": "Recursive functions are functions that call themselves, usually with a base case to avoid infinite recursion."
  },
  {
    "testId": "python-test-03",
    "question": "What is the output of this code?\n\n```python\ndef outer():\n    x = 'local'\n    def inner():\n        return x\n    return inner\nmy_func = outer()\nprint(my_func())\n```",
    "options": ["local", "outer", "inner", "Error"],
    "correctOption": 0,
    "explanation": "This is a closure. inner() returns the value of x from the enclosing function. my_func() returns 'local'."
  },
  {
    "testId": "python-test-03",
    "question": "What does the `nonlocal` keyword do in Python?",
    "options": [
      "It declares a variable as nonlocal to the inner function",
      "It declares a variable as global",
      "It creates a new variable",
      "It deletes a variable"
    ],
    "correctOption": 0,
    "explanation": "The nonlocal keyword is used in nested functions to modify variables in the outer (non-global) scope."
  },
  {
    "testId": "python-test-03",
    "question": "What is the output of this code?\n\n```python\ndef my_func():\n    return 1, 2, 3\na, b, c = my_func()\nprint(a, b, c)\n```",
    "options": ["1 2 3", "(1, 2, 3)", "1", "Error"],
    "correctOption": 0,
    "explanation": "my_func() returns a tuple (1, 2, 3). Tuple unpacking assigns these values to a, b, and c."
  },
  {
    "testId": "python-test-03",
    "question": "What is the use of `**kwargs` in a function definition?",
    "options": [
      "To accept a variable number of keyword arguments",
      "To accept a variable number of positional arguments",
      "To accept a dictionary as an argument",
      "To accept a list of arguments"
    ],
    "correctOption": 0,
    "explanation": "'**kwargs' allows a function to accept any number of keyword arguments as a dictionary."
  },
  {
    "testId": "python-test-03",
    "question": "What is the output of this code?\n\n```python\ndef my_func(*args):\n    return sum(args)\nprint(my_func(1, 2, 3, 4))\n```",
    "options": ["10", "4", "Error", "1 2 3 4"],
    "correctOption": 0,
    "explanation": "*args collects all positional arguments into a tuple. sum() adds them up: 1+2+3+4 = 10."
  },
  {
    "testId": "python-test-03",
    "question": "What is the scope of a variable defined inside a function in Python?",
    "options": ["Local scope", "Global scope", "Enclosing scope", "Built-in scope"],
    "correctOption": 0,
    "explanation": "Variables defined inside a function are in the local scope and are not accessible outside the function."
  },
  {
    "testId": "python-test-03",
    "question": "What is the output of this code?\n\n```python\ndef func(x, y):\n    return x / y\ntry:\n    print(func(4, 0))\nexcept:\n    print('Error')\n```",
    "options": ["Error", "0", "None", "4"],
    "correctOption": 0,
    "explanation": "Division by zero raises a ZeroDivisionError. The except block catches it and prints 'Error'."
  },
  {
    "testId": "python-test-03",
    "question": "Which of the following is true about Python functions?",
    "options": [
      "Functions are first-class objects",
      "Functions cannot be passed as arguments",
      "Functions cannot return other functions",
      "Functions cannot be assigned to variables"
    ],
    "correctOption": 0,
    "explanation": "Python functions are first-class objects, meaning they can be assigned to variables, passed as arguments, and returned from other functions."
  },
  {
    "testId": "python-test-03",
    "question": "What is the output of this code?\n\n```python\ndef outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x += 1\n        return x\n    return inner\nmy_func = outer()\nprint(my_func())\nprint(my_func())\n```",
    "options": ["11 12", "10 10", "Error", "11 11"],
    "correctOption": 0,
    "explanation": "nonlocal x allows inner() to modify x in outer(). Each call increments x, so output is 11 and 12."
  },
  {
    "testId": "python-test-03",
    "question": "What is a default argument in Python?",
    "options": [
      "An argument that has a default value if not provided",
      "An argument that is required",
      "An argument that is optional",
      "An argument that can be of any type"
    ],
    "correctOption": 0,
    "explanation": "Default arguments have a predefined value that is used if the caller does not provide a value for that parameter."
  },
  {
    "testId": "python-test-03",
    "question": "What is the output of this code?\n\n```python\nx = 5\ndef change():\n    global x\n    x = 10\n    print(x, end=' ')\nchange()\nprint(x)\n```",
    "options": ["10 10", "5 10", "10 5", "5 5"],
    "correctOption": 0,
    "explanation": "The global keyword allows the function to modify the global x. It prints 10, and the global x is now 10."
  },
  {
    "testId": "python-test-03",
    "question": "What is the output of this code?\n\n```python\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\nprint(factorial(4))\n```",
    "options": ["24", "4", "6", "12"],
    "correctOption": 0,
    "explanation": "This is a recursive factorial function. 4! = 4 * 3 * 2 * 1 = 24."
  },
  {
    "testId": "python-test-03",
    "question": "What is the purpose of the `yield` keyword in Python?",
    "options": [
      "To return a value and pause the function, making it a generator",
      "To return multiple values",
      "To exit a function",
      "To raise an exception"
    ],
    "correctOption": 0,
    "explanation": "The 'yield' keyword is used in generator functions. It returns a value and pauses the function's state, to be resumed later."
  },
  {
    "testId": "python-test-03",
    "question": "What is the output of this code?\n\n```python\ndef my_gen():\n    yield 1\n    yield 2\ng = my_gen()\nprint(next(g))\nprint(next(g))\n```",
    "options": ["1 2", "1 1", "2 2", "Error"],
    "correctOption": 0,
    "explanation": "my_gen() is a generator. next(g) returns the next yielded value. First call returns 1, second returns 2."
  },
  {
    "testId": "python-test-03",
    "question": "What is a function annotation in Python?",
    "options": [
      "A way to add metadata about the types of arguments and return value",
      "A way to comment code",
      "A way to rename a function",
      "A way to overload a function"
    ],
    "correctOption": 0,
    "explanation": "Function annotations provide optional metadata about the expected types of arguments and return values. They are not enforced by Python."
  },
  {
    "testId": "python-test-03",
    "question": "What is the output of this code?\n\n```python\ndef func(a, b, c=5):\n    return a + b + c\nprint(func(1, 2))\nprint(func(1, 2, 3))\n```",
    "options": ["8 6", "6 8", "8 8", "Error"],
    "correctOption": 0,
    "explanation": "First call: 1 + 2 + 5 = 8. Second call: 1 + 2 + 3 = 6."
  },
  {
    "testId": "python-test-04",
    "question": "Which of the following is the correct way to append an element to a list?",
    "options": ["list.append(5)", "list.add(5)", "list.insert(5)", "list.push(5)"],
    "correctOption": 0,
    "explanation": "The append() method adds an element to the end of a list."
  },
  {
    "testId": "python-test-04",
    "question": "What is the difference between a tuple and a list in Python?",
    "options": [
      "Tuples are immutable; lists are mutable",
      "Tuples are mutable; lists are immutable",
      "Both are mutable",
      "Both are immutable"
    ],
    "correctOption": 0,
    "explanation": "Tuples cannot be modified after creation (immutable). Lists can be modified (mutable)."
  },
  {
    "testId": "python-test-04",
    "question": "How do you access the first element of a list named 'my_list'?",
    "options": ["my_list[0]", "my_list[1]", "my_list.first()", "my_list[0:]"],
    "correctOption": 0,
    "explanation": "In Python, lists are zero-indexed. The first element is at index 0."
  },
  {
    "testId": "python-test-04",
    "question": "Which data structure stores key-value pairs in Python?",
    "options": ["List", "Tuple", "Dictionary", "Set"],
    "correctOption": 2,
    "explanation": "Dictionaries store data in key-value pairs. Keys must be unique and immutable."
  },
  {
    "testId": "python-test-04",
    "question": "What is the output of this code?\n\n```python\nmy_list = [1, 2, 3]\nmy_list.remove(2)\nprint(my_list)\n```",
    "options": ["[1, 3]", "[1, 2, 3]", "[1, 2]", "[2, 3]"],
    "correctOption": 0,
    "explanation": "remove(2) removes the first occurrence of the value 2 from the list, leaving [1, 3]."
  },
  {
    "testId": "python-test-04",
    "question": "What is a set in Python?",
    "options": [
      "An unordered collection of unique items",
      "An ordered collection of items",
      "A collection of key-value pairs",
      "A mutable list"
    ],
    "correctOption": 0,
    "explanation": "Sets are unordered collections of unique elements. They do not allow duplicates and are mutable."
  },
  {
    "testId": "python-test-04",
    "question": "How do you create an empty dictionary in Python?",
    "options": ["{}", "[]", "()", "set()"],
    "correctOption": 0,
    "explanation": "Empty curly braces {} create an empty dictionary. [] creates an empty list, () creates an empty tuple."
  },
  {
    "testId": "python-test-04",
    "question": "What is the output of this code?\n\n```python\nmy_list = [1, 2, 3, 4]\nprint(my_list[1:3])\n```",
    "options": ["[2, 3]", "[1, 2]", "[3, 4]", "[2, 3, 4]"],
    "correctOption": 0,
    "explanation": "Slicing my_list[1:3] returns elements from index 1 to index 2 (3 is exclusive). So [2, 3]."
  },
  {
    "testId": "python-test-04",
    "question": "How do you add a key-value pair to an existing dictionary 'my_dict'?",
    "options": ["my_dict['key'] = 'value'", "my_dict.add('key', 'value')", "my_dict.insert('key', 'value')", "my_dict.push('key', 'value')"],
    "correctOption": 0,
    "explanation": "You can add a new key-value pair to a dictionary using bracket notation: my_dict['key'] = 'value'."
  },
  {
    "testId": "python-test-04",
    "question": "Which of the following is NOT a valid operation on a tuple?",
    "options": ["Indexing", "Slicing", "Appending", "Length"],
    "correctOption": 2,
    "explanation": "Tuples are immutable, so you cannot append elements. You can index, slice, and get the length."
  },
  {
    "testId": "python-test-04",
    "question": "What is the output of this code?\n\n```python\nmy_list = [1, 2, 3]\nmy_list.extend([4, 5])\nprint(my_list)\n```",
    "options": ["[1, 2, 3, 4, 5]", "[1, 2, 3, [4, 5]]", "[4, 5, 1, 2, 3]", "Error"],
    "correctOption": 0,
    "explanation": "extend() iterates over the argument and adds each element to the list. So [1, 2, 3] is extended with [4, 5]."
  },
  {
    "testId": "python-test-04",
    "question": "Which method removes and returns the last element of a list?",
    "options": ["pop()", "remove()", "delete()", "discard()"],
    "correctOption": 0,
    "explanation": "pop() removes and returns the last element of the list (or a specified index)."
  },
  {
    "testId": "python-test-04",
    "question": "What is the output of this code?\n\n```python\nd = {'a': 1, 'b': 2, 'c': 3}\nprint(len(d))\n```",
    "options": ["3", "2", "1", "Error"],
    "correctOption": 0,
    "explanation": "len() returns the number of key-value pairs in the dictionary. Here, there are 3 pairs."
  },
  {
    "testId": "python-test-04",
    "question": "How do you check if a key exists in a dictionary?",
    "options": ["'key' in my_dict", "my_dict.has_key('key')", "my_dict.contains('key')", "my_dict.exists('key')"],
    "correctOption": 0,
    "explanation": "The 'in' operator is used to check if a key exists in a dictionary: 'key' in my_dict."
  },
  {
    "testId": "python-test-04",
    "question": "What is the output of this code?\n\n```python\nmy_set = {1, 2, 3, 3, 4}\nprint(len(my_set))\n```",
    "options": ["4", "5", "3", "Error"],
    "correctOption": 0,
    "explanation": "Sets only contain unique elements. The duplicate 3 is ignored, so the set has {1, 2, 3, 4}, length 4."
  },
  {
    "testId": "python-test-04",
    "question": "What is the difference between `list.append()` and `list.extend()`?",
    "options": [
      "append() adds the entire object as a single element; extend() adds each element individually",
      "append() adds each element individually; extend() adds the entire object",
      "Both add elements the same way",
      "append() is for numbers; extend() is for strings"
    ],
    "correctOption": 0,
    "explanation": "append() adds the object as a single element. extend() iterates over the object and adds each element separately."
  },
  {
    "testId": "python-test-04",
    "question": "How do you create a list comprehension that generates squares of numbers from 1 to 5?",
    "options": ["[x**2 for x in range(1, 6)]", "[x*2 for x in range(1, 5)]", "[x**2 for x in range(1, 5)]", "[x^2 for x in range(1, 6)]"],
    "correctOption": 0,
    "explanation": "List comprehension syntax: [expression for item in iterable]. range(1, 6) gives 1 to 5, and x**2 squares each number."
  },
  {
    "testId": "python-test-04",
    "question": "What is the output of this code?\n\n```python\nt1 = (1, 2, 3)\nt2 = (4, 5)\nprint(t1 + t2)\n```",
    "options": ["(1, 2, 3, 4, 5)", "[1, 2, 3, 4, 5]", "Error", "(1, 2, 3)"],
    "correctOption": 0,
    "explanation": "Tuples can be concatenated using the + operator, creating a new tuple with all elements."
  },
  {
    "testId": "python-test-04",
    "question": "Which of the following is a valid way to iterate over both keys and values of a dictionary?",
    "options": ["for key, value in my_dict.items():", "for key in my_dict: for value in my_dict:", "for key, value in my_dict:", "for key, value in my_dict.keys():"],
    "correctOption": 0,
    "explanation": "items() returns a view of key-value pairs. You can unpack them in the loop: for key, value in my_dict.items():."
  },
  {
    "testId": "python-test-04",
    "question": "What is the purpose of the `copy()` method for lists?",
    "options": [
      "To create a shallow copy of the list",
      "To duplicate the list by reference",
      "To copy the list to a file",
      "To remove elements from the list"
    ],
    "correctOption": 0,
    "explanation": "copy() creates a shallow copy of the list (a new list with references to the same elements)."
  },
  {
    "testId": "python-test-04",
    "question": "What is the output of this code?\n\n```python\nmy_dict = {'a': 1, 'b': 2}\nprint(my_dict.get('c', 0))\n```",
    "options": ["0", "None", "Error", "2"],
    "correctOption": 0,
    "explanation": "get() returns the value for the key if it exists, otherwise returns the default value (0 in this case)."
  },
  {
    "testId": "python-test-04",
    "question": "How do you remove a specific key from a dictionary?",
    "options": ["del my_dict['key']", "my_dict.remove('key')", "my_dict.pop('key')", "Both A and C"],
    "correctOption": 3,
    "explanation": "You can use del to remove a key-value pair, or pop() to remove and return the value."
  },
  {
    "testId": "python-test-04",
    "question": "What is the output of this code?\n\n```python\na = [1, 2, 3]\nb = a[:]\nb.append(4)\nprint(a)\n```",
    "options": ["[1, 2, 3]", "[1, 2, 3, 4]", "[1, 2, 3, 4]", "Error"],
    "correctOption": 0,
    "explanation": "a[:] creates a shallow copy of a. Modifying b does not affect the original list a."
  },
  {
    "testId": "python-test-04",
    "question": "Which method is used to sort a list in place?",
    "options": ["list.sort()", "sorted(list)", "list.sorted()", "sort(list)"],
    "correctOption": 0,
    "explanation": "sort() sorts the list in place and modifies the original list. sorted() returns a new sorted list."
  },
  {
    "testId": "python-test-04",
    "question": "What is the output of this code?\n\n```python\nt = (1, 2, 3)\nprint(t.index(2))\n```",
    "options": ["1", "0", "2", "Error"],
    "correctOption": 0,
    "explanation": "index() returns the first index of the specified value. 2 is at index 1."
  },
  {
    "testId": "python-test-04",
    "question": "What is the difference between a set and a frozenset?",
    "options": [
      "sets are mutable; frozensets are immutable",
      "frozensets are mutable; sets are immutable",
      "Both are mutable",
      "Both are immutable"
    ],
    "correctOption": 0,
    "explanation": "Sets are mutable (can be changed after creation). Frozensets are immutable and hashable."
  },
  {
    "testId": "python-test-04",
    "question": "What is the output of this code?\n\n```python\nmy_list = [1, 2, 3, 4]\nprint(my_list[::-1])\n```",
    "options": ["[4, 3, 2, 1]", "[1, 2, 3, 4]", "[2, 3, 4]", "Error"],
    "correctOption": 0,
    "explanation": "[::-1] uses slicing with a step of -1 to reverse the list. It returns a new list in reverse order."
  },
  {
    "testId": "python-test-04",
    "question": "Which Python data structure is most suitable for implementing a queue?",
    "options": ["List", "Tuple", "Set", "Dictionary"],
    "correctOption": 0,
    "explanation": "Lists can be used as queues using append() and pop(0), but collections.deque is more efficient for queue operations."
  },
  {
    "testId": "python-test-04",
    "question": "How do you convert a list to a tuple in Python?",
    "options": ["tuple(my_list)", "list(my_tuple)", "my_list.tuple()", "convert(my_list, tuple)"],
    "correctOption": 0,
    "explanation": "The tuple() constructor can be used to convert a list to a tuple: tuple(my_list)."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of `print('Hello'[0])`?",
    "options": ["H", "e", "l", "Error"],
    "correctOption": 0,
    "explanation": "Strings are sequences of characters. Index 0 returns the first character 'H'."
  },
  {
    "testId": "python-test-05",
    "question": "Which method is used to convert a string to uppercase in Python?",
    "options": ["upper()", "toUpper()", "uppercase()", "to_upper()"],
    "correctOption": 0,
    "explanation": "upper() is the string method that converts all characters to uppercase."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of `print('Hello World'.split())`?",
    "options": ["['Hello', 'World']", "['Hello World']", "['H', 'e', 'l', 'l', 'o']", "Error"],
    "correctOption": 0,
    "explanation": "split() without arguments splits the string by whitespace and returns a list of words."
  },
  {
    "testId": "python-test-05",
    "question": "How do you open a file for reading in Python?",
    "options": ["open('file.txt', 'r')", "open('file.txt', 'w')", "open('file.txt', 'a')", "open('file.txt', 'read')"],
    "correctOption": 0,
    "explanation": "'r' mode opens the file for reading. If the file does not exist, it raises an error."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of this code?\n\n```python\ns = 'Python'\nprint(s[-1])\n```",
    "options": ["n", "P", "o", "Error"],
    "correctOption": 0,
    "explanation": "Negative indexing starts from the end. -1 returns the last character 'n'."
  },
  {
    "testId": "python-test-05",
    "question": "Which method is used to read the entire content of a file?",
    "options": ["read()", "readline()", "readlines()", "scan()"],
    "correctOption": 0,
    "explanation": "read() reads the entire content of the file as a single string."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of `'Hello'.replace('l', 'p')`?",
    "options": ["Heppo", "Heplo", "Hello", "Peppo"],
    "correctOption": 0,
    "explanation": "replace('l', 'p') replaces all occurrences of 'l' with 'p', resulting in 'Heppo'."
  },
  {
    "testId": "python-test-05",
    "question": "What does the `with` statement do when working with files?",
    "options": [
      "It automatically closes the file when the block ends",
      "It opens the file in write mode",
      "It reads the file content",
      "It deletes the file"
    ],
    "correctOption": 0,
    "explanation": "The with statement creates a context manager. When the block ends, the file is automatically closed, even if an error occurs."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of this code?\n\n```python\ns = 'Hello'\nprint(s.find('e'))\n```",
    "options": ["1", "0", "2", "-1"],
    "correctOption": 0,
    "explanation": "find() returns the first index where the substring is found. 'e' is at index 1."
  },
  {
    "testId": "python-test-05",
    "question": "Which method is used to remove whitespace from the left side of a string?",
    "options": ["lstrip()", "rstrip()", "strip()", "trim()"],
    "correctOption": 0,
    "explanation": "lstrip() removes leading whitespace from the left side of the string."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of this code?\n\n```python\nprint(f'Hello {2 + 3}')\n```",
    "options": ["Hello 5", "Hello 23", "Hello {2 + 3}", "Error"],
    "correctOption": 0,
    "explanation": "f-strings evaluate expressions inside curly braces. 2 + 3 = 5, so output is 'Hello 5'."
  },
  {
    "testId": "python-test-05",
    "question": "What mode is used to append data to a file in Python?",
    "options": ["'a'", "'w'", "'r'", "'x'"],
    "correctOption": 0,
    "explanation": "'a' mode opens the file for appending. Data is written at the end of the file."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of `'python'.capitalize()`?",
    "options": ["Python", "python", "PYTHON", "PythoN"],
    "correctOption": 0,
    "explanation": "capitalize() converts the first character to uppercase and the rest to lowercase, giving 'Python'."
  },
  {
    "testId": "python-test-05",
    "question": "How do you read all lines of a file into a list?",
    "options": ["readlines()", "read()", "readline()", "readAll()"],
    "correctOption": 0,
    "explanation": "readlines() reads all lines and returns them as a list of strings, each ending with a newline character."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of this code?\n\n```python\ns = 'Hello World'\nprint(s[6:])\n```",
    "options": ["World", "World!", "Hello", "lo World"],
    "correctOption": 0,
    "explanation": "s[6:] returns the substring from index 6 to the end. 'World' is at positions 6-10."
  },
  {
    "testId": "python-test-05",
    "question": "Which method is used to join a list of strings into a single string?",
    "options": ["join()", "concatenate()", "append()", "merge()"],
    "correctOption": 0,
    "explanation": "join() is called on a separator string and joins the list elements: ' '.join(['Hello', 'World']) → 'Hello World'."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of this code?\n\n```python\ntry:\n    f = open('missing.txt', 'r')\nexcept FileNotFoundError:\n    print('File not found')\n```",
    "options": ["File not found", "Error", "None", "missing.txt"],
    "correctOption": 0,
    "explanation": "If 'missing.txt' does not exist, a FileNotFoundError is raised and caught by the except block."
  },
  {
    "testId": "python-test-05",
    "question": "Which string method checks if a string ends with a specific suffix?",
    "options": ["endswith()", "startswith()", "ends()", "check_suffix()"],
    "correctOption": 0,
    "explanation": "endswith() returns True if the string ends with the specified suffix."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of `'a' in 'banana'`?",
    "options": ["True", "False", "Error", "None"],
    "correctOption": 0,
    "explanation": "The 'in' operator checks if a substring is present. 'a' is present in 'banana', so it returns True."
  },
  {
    "testId": "python-test-05",
    "question": "How do you write a string to a file in Python?",
    "options": ["write()", "writelines()", "print()", "Both A and B"],
    "correctOption": 3,
    "explanation": "write() writes a single string. writelines() writes a list of strings. Both are valid file write methods."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of this code?\n\n```python\ns = 'Python Programming'\nprint(s.count('P'))\n```",
    "options": ["2", "1", "0", "Error"],
    "correctOption": 0,
    "explanation": "count() returns the number of occurrences of 'P'. It appears twice: at the start of 'Python' and 'Programming'."
  },
  {
    "testId": "python-test-05",
    "question": "Which method is used to check if a string contains only digits?",
    "options": ["isdigit()", "isnumeric()", "isdecimal()", "All of the above"],
    "correctOption": 3,
    "explanation": "All three methods check if characters are numeric. isdigit() is the most common, but isnumeric() and isdecimal() have subtle differences."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of this code?\n\n```python\ns = 'Hello'\nprint(s * 3)\n```",
    "options": ["HelloHelloHello", "Hello Hello Hello", "Hello3", "Error"],
    "correctOption": 0,
    "explanation": "The * operator repeats the string. 'Hello' * 3 = 'HelloHelloHello'."
  },
  {
    "testId": "python-test-05",
    "question": "How do you get the length of a string in Python?",
    "options": ["len(s)", "s.len()", "size(s)", "s.size()"],
    "correctOption": 0,
    "explanation": "len() is the built-in function to get the length of any sequence, including strings."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of this code?\n\n```python\nwith open('test.txt', 'w') as f:\n    f.write('Hello')\n```\nWhat will happen if 'test.txt' already exists?",
    "options": ["It will overwrite the file", "It will append to the file", "It will raise an error", "It will read the file"],
    "correctOption": 0,
    "explanation": "'w' mode opens the file for writing. If the file exists, it is overwritten. If it doesn't exist, it is created."
  },
  {
    "testId": "python-test-05",
    "question": "Which of the following is NOT a valid string method in Python?",
    "options": ["upper()", "lower()", "capitalize()", "uppercase()"],
    "correctOption": 3,
    "explanation": "upper(), lower(), and capitalize() are valid Python string methods. uppercase() does not exist."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of this code?\n\n```python\ns = 'Hello'\nprint(s.center(9, '-'))\n```",
    "options": ["--Hello---", "---Hello--", "Hello----", "----Hello"],
    "correctOption": 0,
    "explanation": "center() centers the string in a field of width 9, filling with '-'. 'Hello' has 5 characters, so 4 fills total (2 on each side): '--Hello---'."
  },
  {
    "testId": "python-test-05",
    "question": "Which method is used to check if a file exists before opening it?",
    "options": ["os.path.exists()", "file.exists()", "exists()", "os.exists()"],
    "correctOption": 0,
    "explanation": "os.path.exists() from the os module is the common way to check if a file or directory exists."
  },
  {
    "testId": "python-test-05",
    "question": "What is the output of `'1,2,3'.split(',')`?",
    "options": ["['1', '2', '3']", "['1,2,3']", "[1, 2, 3]", "Error"],
    "correctOption": 0,
    "explanation": "split(',') splits the string at each comma, returning a list of substrings."
  },
  {
    "testId": "python-test-06",
    "question": "What is a class in Python?",
    "options": ["A blueprint for creating objects", "A function", "A module", "A data type"],
    "correctOption": 0,
    "explanation": "A class is a blueprint or template that defines the properties and behaviors of objects."
  },
  {
    "testId": "python-test-06",
    "question": "Which keyword is used to create a class in Python?",
    "options": ["class", "object", "def", "struct"],
    "correctOption": 0,
    "explanation": "The 'class' keyword is used to define a new class: class MyClass: ..."
  },
  {
    "testId": "python-test-06",
    "question": "What is a constructor in Python?",
    "options": ["A special method called when an object is created", "A method that destroys an object", "A method that prints the object", "A method that updates the object"],
    "correctOption": 0,
    "explanation": "The constructor is the __init__ method that is automatically called when an instance of a class is created."
  },
  {
    "testId": "python-test-06",
    "question": "What is the output of this code?\n\n```python\nclass Dog:\n    def __init__(self, name):\n        self.name = name\nd = Dog('Buddy')\nprint(d.name)\n```",
    "options": ["Buddy", "Dog", "Name", "Error"],
    "correctOption": 0,
    "explanation": "The __init__ method assigns the name attribute. d.name returns 'Buddy'."
  },
  {
    "testId": "python-test-06",
    "question": "Which of the following is NOT a feature of Object-Oriented Programming?",
    "options": ["Encapsulation", "Inheritance", "Polymorphism", "Globalization"],
    "correctOption": 3,
    "explanation": "Encapsulation, Inheritance, and Polymorphism are the three main pillars of OOP. Globalization is not an OOP concept."
  },
  {
    "testId": "python-test-06",
    "question": "What is inheritance in Python?",
    "options": [
      "A way to create a new class from an existing class",
      "A way to create multiple objects",
      "A way to hide data",
      "A way to override methods"
    ],
    "correctOption": 0,
    "explanation": "Inheritance allows a new class (child) to derive properties and methods from an existing class (parent)."
  },
  {
    "testId": "python-test-06",
    "question": "What is the output of this code?\n\n```python\nclass A:\n    def greet(self):\n        return 'Hello from A'\nclass B(A):\n    pass\nb = B()\nprint(b.greet())\n```",
    "options": ["Hello from A", "Hello from B", "Error", "None"],
    "correctOption": 0,
    "explanation": "Class B inherits from A. Since B has no greet() method, it uses A's greet() method."
  },
  {
    "testId": "python-test-06",
    "question": "What is method overriding in Python?",
    "options": [
      "Redefining a method in a child class with the same name as a parent class method",
      "Creating a new method in a class",
      "Deleting a method from a class",
      "Calling a parent method from a child"
    ],
    "correctOption": 0,
    "explanation": "Method overriding occurs when a child class provides its own implementation of a method that already exists in the parent class."
  },
  {
    "testId": "python-test-06",
    "question": "What is the output of this code?\n\n```python\nclass A:\n    def __init__(self):\n        self.x = 1\nclass B(A):\n    def __init__(self):\n        self.x = 2\nb = B()\nprint(b.x)\n```",
    "options": ["2", "1", "Error", "None"],
    "correctOption": 0,
    "explanation": "B overrides the __init__ method, setting x = 2. b.x returns 2."
  },
  {
    "testId": "python-test-06",
    "question": "What is encapsulation in Python?",
    "options": [
      "Hiding the internal state of an object and only exposing necessary methods",
      "Creating multiple objects from a class",
      "Inheriting from a parent class",
      "Overriding methods"
    ],
    "correctOption": 0,
    "explanation": "Encapsulation is the concept of bundling data and methods and restricting direct access to the object's internal state."
  },
  {
    "testId": "python-test-06",
    "question": "What is the purpose of the `__str__` method in Python?",
    "options": [
      "To return a human-readable string representation of an object",
      "To compare two objects",
      "To add two objects",
      "To convert an object to an integer"
    ],
    "correctOption": 0,
    "explanation": "__str__ is called by str() and print(). It should return a readable string representation of the object."
  },
  {
    "testId": "python-test-06",
    "question": "What is the output of this code?\n\n```python\nclass A:\n    pass\nprint(isinstance(A(), A))\n```",
    "options": ["True", "False", "Error", "None"],
    "correctOption": 0,
    "explanation": "isinstance() checks if an object is an instance of a class. A() creates an instance of A, so it returns True."
  },
  {
    "testId": "python-test-06",
    "question": "How do you create a class that uses multiple inheritance?",
    "options": [
      "class MyClass(Parent1, Parent2):",
      "class MyClass(Parent1, Parent2)",
      "class MyClass : Parent1, Parent2",
      "Multiple inheritance is not supported in Python"
    ],
    "correctOption": 0,
    "explanation": "In Python, multiple inheritance is defined by listing parent classes separated by commas in parentheses."
  },
  {
    "testId": "python-test-06",
    "question": "What is the difference between a class method and a static method?",
    "options": [
      "Class methods take cls as first param; static methods don't take self or cls",
      "Static methods take cls; class methods don't",
      "Both take self",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "Class methods are bound to the class and receive the class (cls) as the first argument. Static methods do not receive any special first argument."
  },
  {
    "testId": "python-test-06",
    "question": "What is the output of this code?\n\n```python\nclass A:\n    @staticmethod\n    def greet():\n        return 'Hello'\nprint(A.greet())\n```",
    "options": ["Hello", "Error", "None", "Static method"],
    "correctOption": 0,
    "explanation": "Static methods can be called on the class without creating an instance. A.greet() returns 'Hello'."
  },
  {
    "testId": "python-test-06",
    "question": "What is polymorphism in Python?",
    "options": [
      "The ability of different classes to respond to the same method call in their own way",
      "The ability to create multiple objects",
      "The ability to hide data",
      "The ability to inherit from multiple parents"
    ],
    "correctOption": 0,
    "explanation": "Polymorphism allows objects of different classes to be treated as objects of a common base class, responding to the same method call in different ways."
  },
  {
    "testId": "python-test-06",
    "question": "What is the output of this code?\n\n```python\nclass A:\n    def __init__(self, x):\n        self.x = x\nclass B:\n    def __init__(self, x):\n        self.x = x * 2\nobj = B(3)\nprint(obj.x)\n```",
    "options": ["6", "3", "Error", "None"],
    "correctOption": 0,
    "explanation": "B's constructor sets x to 3 * 2 = 6. obj.x returns 6."
  },
  {
    "testId": "python-test-06",
    "question": "How do you call a parent class method from a child class in Python?",
    "options": ["super().method_name()", "parent.method_name()", "Parent.method_name(self)", "Both A and C"],
    "correctOption": 3,
    "explanation": "super() is the recommended way. Alternatively, you can call ParentClass.method_name(self)."
  },
  {
    "testId": "python-test-06",
    "question": "What is the output of this code?\n\n```python\nclass A:\n    x = 10\nclass B(A):\n    x = 20\nb = B()\nprint(b.x)\n```",
    "options": ["20", "10", "Error", "None"],
    "correctOption": 0,
    "explanation": "B overrides the class variable x. b.x returns 20 from B, not the inherited 10 from A."
  },
  {
    "testId": "python-test-06",
    "question": "What is the purpose of the `__init__` method in a Python class?",
    "options": [
      "It initializes the object's attributes when the object is created",
      "It deletes the object",
      "It returns a string representation",
      "It compares two objects"
    ],
    "correctOption": 0,
    "explanation": "__init__ is the constructor. It is called automatically when a new instance of the class is created, allowing you to set initial values."
  },
  {
    "testId": "python-test-06",
    "question": "What is the output of this code?\n\n```python\nclass A:\n    def greet(self):\n        return 'A'\nclass B(A):\n    def greet(self):\n        return 'B'\nb = B()\nprint(b.greet())\n```",
    "options": ["B", "A", "Error", "None"],
    "correctOption": 0,
    "explanation": "B overrides the greet method. b.greet() returns 'B' from the child class."
  },
  {
    "testId": "python-test-06",
    "question": "Which method is used to get the string representation of an object for debugging?",
    "options": ["__repr__", "__str__", "__init__", "__call__"],
    "correctOption": 0,
    "explanation": "__repr__ is used to return a string representation that is often unambiguous and useful for debugging. It is called by repr()."
  },
  {
    "testId": "python-test-06",
    "question": "What is the output of this code?\n\n```python\nclass A:\n    def __init__(self, x):\n        self.__x = x\n    def get_x(self):\n        return self.__x\na = A(5)\nprint(a.get_x())\nprint(a.__x)\n```",
    "options": ["5, Error", "5, 5", "Error, 5", "Error, Error"],
    "correctOption": 0,
    "explanation": "__x is a private attribute (name mangling). a.get_x() returns 5, but a.__x raises an AttributeError because the name is mangled."
  },
  {
    "testId": "python-test-06",
    "question": "What is a property decorator in Python?",
    "options": [
      "A decorator that allows you to define getters, setters, and deleters for attributes",
      "A decorator that creates a class method",
      "A decorator that defines a static method",
      "A decorator that overrides a method"
    ],
    "correctOption": 0,
    "explanation": "The @property decorator allows you to define methods that can be accessed like attributes, with optional setters and deleters."
  },
  {
    "testId": "python-test-06",
    "question": "What is the output of this code?\n\n```python\nclass A:\n    def __call__(self):\n        return 'Called'\na = A()\nprint(a())\n```",
    "options": ["Called", "Error", "None", "A"],
    "correctOption": 0,
    "explanation": "__call__ makes the object callable like a function. a() calls __call__ and returns 'Called'."
  },
  {
    "testId": "python-test-06",
    "question": "How do you create an abstract class in Python?",
    "options": [
      "Using the ABC module and @abstractmethod decorator",
      "Using the abstract keyword",
      "Using the interface keyword",
      "By creating an empty class"
    ],
    "correctOption": 0,
    "explanation": "Abstract classes are created by inheriting from ABC (Abstract Base Class) and using @abstractmethod for abstract methods."
  },
  {
    "testId": "python-test-07",
    "question": "What is the purpose of the `import` statement in Python?",
    "options": ["To include external modules or packages", "To define a function", "To create a loop", "To print to the console"],
    "correctOption": 0,
    "explanation": "The import statement allows you to bring external modules, packages, or specific objects into your current script."
  },
  {
    "testId": "python-test-07",
    "question": "Which of the following is a correct way to import a module?",
    "options": ["import math", "include math", "using math", "require math"],
    "correctOption": 0,
    "explanation": "'import math' is the correct way to import the math module. The module can then be accessed as math.sqrt() etc."
  },
  {
    "testId": "python-test-07",
    "question": "What is the output of this code?\n\n```python\nimport math\nprint(math.sqrt(16))\n```",
    "options": ["4.0", "4", "16", "Error"],
    "correctOption": 0,
    "explanation": "math.sqrt() returns the square root as a float. sqrt(16) = 4.0."
  },
  {
    "testId": "python-test-07",
    "question": "What does `try...except` do in Python?",
    "options": [
      "It handles runtime errors gracefully by catching exceptions",
      "It creates a new variable",
      "It defines a function",
      "It imports a module"
    ],
    "correctOption": 0,
    "explanation": "try...except blocks are used to handle exceptions (errors) that occur during runtime, preventing the program from crashing."
  },
  {
    "testId": "python-test-07",
    "question": "What is the difference between `except` and `finally` in Python?",
    "options": [
      "except handles errors; finally always executes whether an error occurs or not",
      "finally handles errors; except always executes",
      "Both handle errors",
      "Both always execute"
    ],
    "correctOption": 0,
    "explanation": "except blocks catch and handle specific exceptions. finally blocks are executed regardless of whether an exception occurred, often used for cleanup."
  },
  {
    "testId": "python-test-07",
    "question": "What is the output of this code?\n\n```python\ntry:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print('Error caught')\n```",
    "options": ["Error caught", "Error", "None", "10"],
    "correctOption": 0,
    "explanation": "Division by zero raises ZeroDivisionError. The except block catches it and prints 'Error caught'."
  },
  {
    "testId": "python-test-07",
    "question": "What is a Python module?",
    "options": [
      "A file containing Python code that can be imported and reused",
      "A function that returns a value",
      "A loop that iterates over a sequence",
      "A class that defines an object"
    ],
    "correctOption": 0,
    "explanation": "A module is a single .py file that contains definitions and statements. It can be imported into other scripts."
  },
  {
    "testId": "python-test-07",
    "question": "What does the `raise` keyword do in Python?",
    "options": [
      "It manually raises an exception",
      "It prints an error message",
      "It defines a function",
      "It imports a module"
    ],
    "correctOption": 0,
    "explanation": "The 'raise' keyword is used to explicitly raise an exception, either built-in or custom."
  },
  {
    "testId": "python-test-07",
    "question": "What is the output of this code?\n\n```python\ntry:\n    x = int('abc')\nexcept ValueError:\n    print('Invalid input')\n```",
    "options": ["Invalid input", "Error", "None", "abc"],
    "correctOption": 0,
    "explanation": "int('abc') raises ValueError because 'abc' is not a valid integer. The except block catches it and prints 'Invalid input'."
  },
  {
    "testId": "python-test-07",
    "question": "How do you create a custom exception in Python?",
    "options": [
      "By defining a class that inherits from Exception",
      "By using the 'exception' keyword",
      "By defining a function",
      "By using the 'raise' keyword"
    ],
    "correctOption": 0,
    "explanation": "You create a custom exception by defining a new class that inherits from Exception (or any of its subclasses)."
  },
  {
    "testId": "python-test-07",
    "question": "What is the `__name__` variable in Python?",
    "options": [
      "It holds the name of the current module",
      "It holds the name of a function",
      "It holds the name of a class",
      "It holds the name of a variable"
    ],
    "correctOption": 0,
    "explanation": "__name__ is a built-in variable that is set to the name of the current module. If the module is run directly, __name__ is set to '__main__'."
  },
  {
    "testId": "python-test-07",
    "question": "What is the use of the `if __name__ == '__main__':` construct?",
    "options": [
      "To prevent code from running when the module is imported",
      "To run code only when the file is executed directly",
      "Both A and B",
      "To define a function"
    ],
    "correctOption": 2,
    "explanation": "This construct allows code to be executed only when the script is run directly, and prevents it from running when the module is imported elsewhere."
  },
  {
    "testId": "python-test-07",
    "question": "Which of the following is NOT a built-in exception in Python?",
    "options": ["TypeError", "ValueError", "StringError", "IndexError"],
    "correctOption": 2,
    "explanation": "StringError is not a built-in exception. TypeError, ValueError, and IndexError are all built-in exceptions."
  },
  {
    "testId": "python-test-07",
    "question": "What is the difference between a package and a module?",
    "options": [
      "A package is a collection of modules organized in a directory",
      "A module is a collection of packages",
      "Both are the same",
      "A package is a single file"
    ],
    "correctOption": 0,
    "explanation": "A module is a single Python file. A package is a directory that contains multiple modules and an __init__.py file."
  },
  {
    "testId": "python-test-07",
    "question": "What is the output of this code?\n\n```python\ntry:\n    print(1 / 0)\nexcept ZeroDivisionError:\n    print('A')\nexcept Exception:\n    print('B')\n```",
    "options": ["A", "B", "Error", "None"],
    "correctOption": 0,
    "explanation": "ZeroDivisionError is caught by the first except block because it is more specific and occurs first."
  },
  {
    "testId": "python-test-07",
    "question": "Which keyword is used to define an alias when importing a module?",
    "options": ["as", "alias", "import", "from"],
    "correctOption": 0,
    "explanation": "The 'as' keyword is used to create an alias: import math as m."
  },
  {
    "testId": "python-test-07",
    "question": "What is the purpose of the `else` clause in a `try...except` block?",
    "options": [
      "It runs if no exception occurs in the try block",
      "It runs if an exception occurs",
      "It always runs",
      "It is used for cleanup"
    ],
    "correctOption": 0,
    "explanation": "The else block in a try...except structure executes only if no exception was raised in the try block."
  },
  {
    "testId": "python-test-07",
    "question": "What is the output of this code?\n\n```python\ntry:\n    x = 10\nexcept:\n    print('Error')\nelse:\n    print('Success')\nfinally:\n    print('Done')\n```",
    "options": ["Success Done", "Error Success Done", "Error Done", "Done"],
    "correctOption": 0,
    "explanation": "No exception occurs, so else runs and prints 'Success'. finally always runs, printing 'Done'."
  },
  {
    "testId": "python-test-07",
    "question": "Which built-in module is used for regular expressions in Python?",
    "options": ["regex", "re", "regexp", "regular"],
    "correctOption": 1,
    "explanation": "The 're' module provides support for regular expressions in Python."
  },
  {
    "testId": "python-test-07",
    "question": "What is the purpose of the `sys` module?",
    "options": [
      "It provides access to system-specific parameters and functions",
      "It provides math functions",
      "It provides file operations",
      "It provides regular expressions"
    ],
    "correctOption": 0,
    "explanation": "The sys module contains system-related information like command-line arguments, standard input/output, and path configuration."
  },
  {
    "testId": "python-test-07",
    "question": "How do you handle multiple exceptions in a single except block?",
    "options": [
      "except (TypeError, ValueError) as e:",
      "except TypeError, ValueError:",
      "except [TypeError, ValueError]:",
      "except TypeError and ValueError:"
    ],
    "correctOption": 0,
    "explanation": "You can handle multiple exceptions by putting them in a tuple: except (TypeError, ValueError) as e:"
  },
  {
    "testId": "python-test-07",
    "question": "What is a virtual environment in Python?",
    "options": [
      "An isolated environment with its own Python interpreter and packages",
      "A virtual machine",
      "A cloud environment",
      "A virtual reality application"
    ],
    "correctOption": 0,
    "explanation": "A virtual environment is an isolated Python environment that allows you to manage dependencies for different projects without conflicts."
  },
  {
    "testId": "python-test-07",
    "question": "Which command is used to create a virtual environment in Python?",
    "options": ["python -m venv myenv", "virtualenv myenv", "pyvenv myenv", "All of the above"],
    "correctOption": 3,
    "explanation": "Multiple methods exist: python -m venv (built-in), virtualenv, and pyvenv (older). They all create virtual environments."
  },
  {
    "testId": "python-test-07",
    "question": "What is the purpose of `pip` in Python?",
    "options": [
      "To install and manage Python packages",
      "To run Python scripts",
      "To create virtual environments",
      "To debug Python code"
    ],
    "correctOption": 0,
    "explanation": "pip is the package installer for Python. It is used to install, upgrade, and remove Python packages from the Python Package Index (PyPI)."
  },
  {
    "testId": "python-test-07",
    "question": "What is the output of this code?\n\n```python\nimport sys\nprint(sys.version[:3])\n```",
    "options": ["The first 3 characters of the Python version", "The Python version number", "Error", "None"],
    "correctOption": 0,
    "explanation": "sys.version returns a string containing the version info. [:3] slices to get the first 3 characters (e.g., '3.9')."
  },
  {
    "testId": "python-test-07",
    "question": "What is the `finally` clause used for in exception handling?",
    "options": [
      "It always executes regardless of whether an exception occurs",
      "It executes only if no exception occurs",
      "It executes only if an exception occurs",
      "It is used to raise an exception"
    ],
    "correctOption": 0,
    "explanation": "The finally block is always executed, whether an exception occurred or not. It is typically used for cleanup actions like closing files."
  },
  {
    "testId": "python-test-08",
    "question": "What is the output of this list comprehension?\n\n```python\n[x**2 for x in range(5)]\n```",
    "options": ["[0, 1, 4, 9, 16]", "[1, 4, 9, 16, 25]", "[0, 1, 2, 3, 4]", "[0, 2, 4, 6, 8]"],
    "correctOption": 0,
    "explanation": "range(5) gives [0, 1, 2, 3, 4]. Squaring each gives [0, 1, 4, 9, 16]."
  },
  {
    "testId": "python-test-08",
    "question": "What is a decorator in Python?",
    "options": [
      "A function that modifies another function's behavior",
      "A function that defines a class",
      "A function that imports a module",
      "A function that handles exceptions"
    ],
    "correctOption": 0,
    "explanation": "A decorator is a function that takes another function as an argument and extends or modifies its behavior without changing its code."
  },
  {
    "testId": "python-test-08",
    "question": "What is the output of this code?\n\n```python\ndef decorator(func):\n    def wrapper():\n        return 'Hi ' + func()\n    return wrapper\n\n@decorator\ndef greet():\n    return 'John'\nprint(greet())\n```",
    "options": ["Hi John", "John", "Error", "Hi"],
    "correctOption": 0,
    "explanation": "The decorator wraps greet(), adding 'Hi ' to the return value. Output is 'Hi John'."
  },
  {
    "testId": "python-test-08",
    "question": "What is a generator in Python?",
    "options": [
      "A function that uses yield to produce a sequence of values lazily",
      "A function that uses return to produce values",
      "A list of values",
      "A class that generates values"
    ],
    "correctOption": 0,
    "explanation": "A generator is a function that yields values one at a time, maintaining state between calls. It is memory efficient for large datasets."
  },
  {
    "testId": "python-test-08",
    "question": "What is the output of this generator code?\n\n```python\ndef gen():\n    yield 1\n    yield 2\n    yield 3\ng = gen()\nprint(next(g))\nprint(next(g))\n```",
    "options": ["1 2", "1 1", "1 2 3", "Error"],
    "correctOption": 0,
    "explanation": "next(g) returns 1, next(g) returns 2. The generator retains state between calls."
  },
  {
    "testId": "python-test-08",
    "question": "What is the purpose of the `zip()` function in Python?",
    "options": [
      "To combine multiple iterables into tuples",
      "To compress files",
      "To zip data into a file",
      "To sort data"
    ],
    "correctOption": 0,
    "explanation": "zip() takes multiple iterables and returns an iterator of tuples, pairing elements from each iterable."
  },
  {
    "testId": "python-test-08",
    "question": "What is the output of this code?\n\n```python\nlist(zip([1, 2], ['a', 'b']))\n```",
    "options": ["[(1, 'a'), (2, 'b')]", "[(1, 2), ('a', 'b')]", "[1, 2, 'a', 'b']", "Error"],
    "correctOption": 0,
    "explanation": "zip() pairs elements from each list: (1, 'a') and (2, 'b')."
  },
  {
    "testId": "python-test-08",
    "question": "What is the use of the `filter()` function in Python?",
    "options": [
      "To filter elements from an iterable based on a function that returns True/False",
      "To sort elements",
      "To map elements to a new value",
      "To reduce elements to a single value"
    ],
    "correctOption": 0,
    "explanation": "filter() returns an iterator with elements from the iterable for which the function returns True."
  },
  {
    "testId": "python-test-08",
    "question": "What is the output of this code?\n\n```python\nlist(filter(lambda x: x % 2 == 0, [1, 2, 3, 4, 5]))\n```",
    "options": ["[2, 4]", "[1, 3, 5]", "[1, 2, 3, 4, 5]", "Error"],
    "correctOption": 0,
    "explanation": "The lambda filters even numbers. [2, 4] are the even numbers in the list."
  },
  {
    "testId": "python-test-08",
    "question": "What is the `map()` function used for?",
    "options": [
      "To apply a function to every element of an iterable",
      "To map keys to values in a dictionary",
      "To plot data",
      "To sort data"
    ],
    "correctOption": 0,
    "explanation": "map() applies a given function to each item of an iterable and returns an iterator of the results."
  },
  {
    "testId": "python-test-08",
    "question": "What is the output of this code?\n\n```python\nlist(map(lambda x: x * 2, [1, 2, 3]))\n```",
    "options": ["[2, 4, 6]", "[1, 2, 3]", "[2, 4, 6]", "Error"],
    "correctOption": 0,
    "explanation": "map() multiplies each element by 2: [2, 4, 6]."
  },
  {
    "testId": "python-test-08",
    "question": "What is the `reduce()` function used for?",
    "options": [
      "To apply a function cumulatively to items of an iterable, reducing it to a single value",
      "To reduce the size of a list",
      "To delete elements from an iterable",
      "To sort elements"
    ],
    "correctOption": 0,
    "explanation": "reduce() from the functools module applies a function of two arguments cumulatively, reducing the iterable to a single value."
  },
  {
    "testId": "python-test-08",
    "question": "What is the output of this code?\n\n```python\nfrom functools import reduce\nreduce(lambda x, y: x + y, [1, 2, 3, 4])\n```",
    "options": ["10", "24", "1+2+3+4", "Error"],
    "correctOption": 0,
    "explanation": "reduce() cumulatively adds: ((1+2)+3)+4 = 10."
  },
  {
    "testId": "python-test-08",
    "question": "What is a context manager in Python?",
    "options": [
      "An object that controls the context of a with statement, handling setup and teardown",
      "A manager of contexts",
      "A function that manages data",
      "A class that inherits from Context"
    ],
    "correctOption": 0,
    "explanation": "Context managers are objects that define what happens when entering and exiting a with block, commonly used for resource management like file operations."
  },
  {
    "testId": "python-test-08",
    "question": "What is the output of this code?\n\n```python\nwith open('test.txt', 'w') as f:\n    f.write('Hello')\n```\nWhat does the `with` statement ensure?",
    "options": [
      "The file is automatically closed after the block",
      "The file is deleted after the block",
      "The file is read",
      "The file is opened in read mode"
    ],
    "correctOption": 0,
    "explanation": "The with statement ensures that the file is properly closed after the block, even if an exception occurs."
  },
  {
    "testId": "python-test-08",
    "question": "Which library is commonly used for numerical computing in Python?",
    "options": ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    "correctOption": 0,
    "explanation": "NumPy is the fundamental library for numerical computing in Python, providing support for large, multi-dimensional arrays and matrices."
  },
  {
    "testId": "python-test-08",
    "question": "What is the purpose of the Pandas library in Python?",
    "options": [
      "To provide data structures and tools for data manipulation and analysis",
      "To create charts and visualizations",
      "To perform machine learning",
      "To handle web requests"
    ],
    "correctOption": 0,
    "explanation": "Pandas is used for data manipulation and analysis, providing DataFrames and Series for handling structured data."
  },
  {
    "testId": "python-test-08",
    "question": "What is the `__future__` module used for?",
    "options": [
      "To enable future Python features in older versions",
      "To predict the future of the code",
      "To import future modules",
      "To define future functions"
    ],
    "correctOption": 0,
    "explanation": "__future__ allows you to use features that will become default in future Python versions, e.g., from __future__ import annotations."
  },
  {
    "testId": "python-test-08",
    "question": "What is the output of this code?\n\n```python\nimport numpy as np\narr = np.array([1, 2, 3])\nprint(arr.shape)\n```",
    "options": ["(3,)", "(3,1)", "(1,3)", "Error"],
    "correctOption": 0,
    "explanation": "shape returns the dimensions of the array. A 1D array of length 3 has shape (3,)."
  },
  {
    "testId": "python-test-08",
    "question": "What is a `dataclass` in Python?",
    "options": [
      "A decorator that automatically adds special methods like __init__ and __repr__ to a class",
      "A class for data analysis",
      "A class that stores data in a database",
      "A class that handles data types"
    ],
    "correctOption": 0,
    "explanation": "The @dataclass decorator reduces boilerplate by automatically generating __init__, __repr__, __eq__, and other special methods for classes."
  },
  {
    "testId": "python-test-08",
    "question": "What is the purpose of the `typing` module in Python?",
    "options": [
      "To provide type hints and type checking support",
      "To type text in the console",
      "To create data types",
      "To convert types"
    ],
    "correctOption": 0,
    "explanation": "The typing module provides support for type hints, allowing you to specify the expected types of function arguments and return values."
  },
  {
    "testId": "python-test-08",
    "question": "What is the output of this code?\n\n```python\nfrom typing import List\ndef greet(names: List[str]) -> str:\n    return ' '.join(names)\nprint(greet(['Alice', 'Bob']))\n```",
    "options": ["Alice Bob", "AliceBob", "['Alice', 'Bob']", "Error"],
    "correctOption": 0,
    "explanation": "The function joins the list elements with a space. ' '.join(['Alice', 'Bob']) = 'Alice Bob'."
  },
  {
    "testId": "python-test-08",
    "question": "What is the `asyncio` library used for?",
    "options": [
      "To write concurrent code using async/await syntax",
      "To perform synchronous operations",
      "To handle file operations",
      "To create classes"
    ],
    "correctOption": 0,
    "explanation": "asyncio is used for asynchronous programming, allowing you to write concurrent code that runs multiple tasks without blocking."
  },
  {
    "testId": "python-test-08",
    "question": "Which keyword is used to define an asynchronous function in Python?",
    "options": ["async", "await", "asyncio", "def async"],
    "correctOption": 0,
    "explanation": "The 'async def' syntax defines an asynchronous function. 'await' is used to wait for the result of an asynchronous operation."
  },
  {
    "testId": "python-test-08",
    "question": "What is the output of this code?\n\n```python\nimport math\nprint(math.factorial(5))\n```",
    "options": ["120", "25", "5", "Error"],
    "correctOption": 0,
    "explanation": "math.factorial(5) calculates 5! = 5 * 4 * 3 * 2 * 1 = 120."
  },
  {
    "testId": "python-test-08",
    "question": "What is the difference between `==` and `is` in Python?",
    "options": ["== compares values; is compares identity (memory address)", "is compares values; == compares identity", "Both compare values", "Both compare identity"],
    "correctOption": 0,
    "explanation": "'==' compares the values of objects for equality. 'is' checks if two variables refer to the same object in memory."
  },
  {
    "testId": "python-test-08",
    "question": "What is the purpose of the `__slots__` attribute in a class?",
    "options": [
      "To limit the attributes that can be assigned to an object, saving memory",
      "To create slots for methods",
      "To define the class size",
      "To list all methods"
    ],
    "correctOption": 0,
    "explanation": "__slots__ is used to prevent dynamic attribute creation and save memory by not using a __dict__ for each instance."
  },
  {
    "testId": "python-test-08",
    "question": "What is the output of this code?\n\n```python\nclass A:\n    __slots__ = ['x']\n    def __init__(self, x):\n        self.x = x\na = A(5)\na.y = 10\n```",
    "options": ["Error", "10", "5", "None"],
    "correctOption": 0,
    "explanation": "__slots__ restricts the allowed attributes. Assigning a.y raises AttributeError because 'y' is not in __slots__."
  },
  {
    "testId": "python-test-08",
    "question": "What is a closure in Python?",
    "options": [
      "A nested function that captures variables from its enclosing scope",
      "A function that closes a file",
      "A class that closes over methods",
      "A decorator"
    ],
    "correctOption": 0,
    "explanation": "A closure is a function object that remembers values in enclosing scopes even when the outer function has finished executing."
  },
  {
    "testId": "python-test-08",
    "question": "What is the purpose of the `functools` module?",
    "options": [
      "To provide higher-order functions like reduce, partial, and cache",
      "To handle file operations",
      "To create classes",
      "To import modules"
    ],
    "correctOption": 0,
    "explanation": "functools provides useful higher-order functions and utilities for functional programming, including partial, reduce, lru_cache, and wraps."
  },
  {
    "testId": "python-test-08",
    "question": "What is the output of this code?\n\n```python\nfrom functools import partial\ndef power(base, exp):\n    return base ** exp\nsquare = partial(power, exp=2)\nprint(square(5))\n```",
    "options": ["25", "10", "5", "Error"],
    "correctOption": 0,
    "explanation": "partial fixes the exp parameter to 2. square(5) calls power(5, 2) = 25."
  },
  {
    "testId": "python-test-08",
    "question": "Which Matplotlib function is used to create a simple plot?",
    "options": ["plt.plot()", "plt.bar()", "plt.scatter()", "plt.hist()"],
    "correctOption": 0,
    "explanation": "plt.plot() is the most basic function for creating line plots in Matplotlib."
  },
  {
    "testId": "python-test-08",
    "question": "What is the use of the `dir()` function in Python?",
    "options": [
      "To list all attributes and methods of an object",
      "To create a directory",
      "To delete a directory",
      "To navigate directories"
    ],
    "correctOption": 0,
    "explanation": "dir() returns a list of names in the current local scope or a list of attributes of a specified object."
  },
  {
    "testId": "python-test-08",
    "question": "What is the output of this code?\n\n```python\nimport datetime\nprint(datetime.date.today())\n```",
    "options": ["The current date", "The current time", "Error", "None"],
    "correctOption": 0,
    "explanation": "datetime.date.today() returns the current local date in YYYY-MM-DD format."
  },
  {
    "testId": "python-test-08",
    "question": "What is the purpose of the `logging` module?",
    "options": [
      "To record log messages from applications for debugging and monitoring",
      "To print to the console",
      "To write to files",
      "To log errors only"
    ],
    "correctOption": 0,
    "explanation": "The logging module provides a flexible framework for logging messages with different severity levels (DEBUG, INFO, WARNING, ERROR, CRITICAL)."
  },
  {
    "testId": "python-test-08",
    "question": "What is the purpose of the `pickle` module?",
    "options": [
      "To serialize and deserialize Python objects",
      "To pickle vegetables",
      "To compress data",
      "To encrypt data"
    ],
    "correctOption": 0,
    "explanation": "pickle is used for object serialization, converting Python objects into a byte stream that can be saved to disk or sent over a network."
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
console.log('Added ' + newQuestions.length + ' python questions to questions.js');
