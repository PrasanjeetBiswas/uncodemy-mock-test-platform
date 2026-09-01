const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "frontend-test-01",
    "question": "Which HTML tag is used to define a hyperlink?",
    "options": ["<a>", "<link>", "<href>", "<url>"],
    "correctOption": 0,
    "explanation": "The <a> (anchor) tag is used to define hyperlinks. The href attribute specifies the destination URL."
  },
  {
    "testId": "frontend-test-01",
    "question": "What does the <article> tag represent in HTML5?",
    "options": [
      "A section of content that is independent and self-contained",
      "A navigation menu",
      "A footer section",
      "A list of items"
    ],
    "correctOption": 0,
    "explanation": "<article> represents a self-contained composition in a document, page, or site, such as a blog post or news story."
  },
  {
    "testId": "frontend-test-01",
    "question": "Which tag is used to create a checkbox input in HTML?",
    "options": ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<check>"],
    "correctOption": 0,
    "explanation": "The <input> tag with type='checkbox' creates a checkbox input element."
  },
  {
    "testId": "frontend-test-01",
    "question": "What is the correct HTML tag for the largest heading?",
    "options": ["<h1>", "<heading>", "<h6>", "<head>"],
    "correctOption": 0,
    "explanation": "<h1> represents the most important heading. <h6> is the least important."
  },
  {
    "testId": "frontend-test-01",
    "question": "What is the purpose of the 'alt' attribute in the <img> tag?",
    "options": [
      "To provide alternative text for the image if it cannot be displayed",
      "To specify the image source",
      "To define the image dimensions",
      "To style the image"
    ],
    "correctOption": 0,
    "explanation": "The 'alt' attribute provides alternative text that is displayed if the image fails to load and is also used for accessibility."
  },
  {
    "testId": "frontend-test-01",
    "question": "Which HTML element is used to define an unordered list?",
    "options": ["<ul>", "<ol>", "<li>", "<list>"],
    "correctOption": 0,
    "explanation": "<ul> defines an unordered (bulleted) list. <ol> is for ordered lists, and <li> is a list item."
  },
  {
    "testId": "frontend-test-01",
    "question": "What does the <nav> tag represent in HTML?",
    "options": [
      "A section containing navigation links",
      "A section for the main content",
      "A footer section",
      "An article section"
    ],
    "correctOption": 0,
    "explanation": "<nav> represents a section of a page whose purpose is to provide navigation links."
  },
  {
    "testId": "frontend-test-01",
    "question": "Which attribute is used to specify the destination URL in an <a> tag?",
    "options": ["href", "src", "link", "target"],
    "correctOption": 0,
    "explanation": "The 'href' attribute specifies the URL of the page the link goes to."
  },
  {
    "testId": "frontend-test-01",
    "question": "What is the correct HTML for creating a text input field?",
    "options": ["<input type='text'>", "<input type='textfield'>", "<textinput>", "<text>"],
    "correctOption": 0,
    "explanation": "<input type='text'> creates a single-line text input field."
  },
  {
    "testId": "frontend-test-01",
    "question": "Which HTML element is used to define a footer for a document or section?",
    "options": ["<footer>", "<bottom>", "<end>", "<foot>"],
    "correctOption": 0,
    "explanation": "<footer> represents the footer of a document or a section, typically containing authorship, copyright, etc."
  },
  {
    "testId": "frontend-test-01",
    "question": "What is the purpose of the 'for' attribute in a <label> tag?",
    "options": [
      "To associate the label with a specific form input by its id",
      "To specify the tab order",
      "To apply CSS styles",
      "To define a default value"
    ],
    "correctOption": 0,
    "explanation": "The 'for' attribute links the label to an input element with the matching id, improving accessibility and UX."
  },
  {
    "testId": "frontend-test-01",
    "question": "Which HTML tag is used to define a table row?",
    "options": ["<tr>", "<td>", "<th>", "<table>"],
    "correctOption": 0,
    "explanation": "<tr> defines a table row. <td> is table data, <th> is table header."
  },
  {
    "testId": "frontend-test-01",
    "question": "What is the correct DOCTYPE declaration for HTML5?",
    "options": ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<DOCTYPE html>", "<!-- DOCTYPE html -->"],
    "correctOption": 0,
    "explanation": "The correct HTML5 doctype is `<!DOCTYPE html>`."
  },
  {
    "testId": "frontend-test-01",
    "question": "Which HTML element is used to embed external content like another webpage?",
    "options": ["<iframe>", "<embed>", "<object>", "<frame>"],
    "correctOption": 0,
    "explanation": "<iframe> (inline frame) is used to embed another HTML document within the current page."
  },
  {
    "testId": "frontend-test-01",
    "question": "What is the difference between <div> and <span>?",
    "options": [
      "<div> is block-level; <span> is inline",
      "<span> is block-level; <div> is inline",
      "Both are block-level",
      "Both are inline"
    ],
    "correctOption": 0,
    "explanation": "<div> is a block-level container, while <span> is an inline container."
  },
  {
    "testId": "frontend-test-01",
    "question": "Which attribute is used to open a link in a new tab/window?",
    "options": ["target='_blank'", "target='_new'", "target='_self'", "target='_top'"],
    "correctOption": 0,
    "explanation": "Adding `target='_blank'` to an <a> tag opens the link in a new tab or window."
  },
  {
    "testId": "frontend-test-01",
    "question": "What does the <section> tag represent?",
    "options": [
      "A thematic grouping of content, typically with a heading",
      "A self-contained content piece",
      "A navigation menu",
      "An aside content"
    ],
    "correctOption": 0,
    "explanation": "<section> represents a standalone section of content with a thematic grouping, often with a heading."
  },
  {
    "testId": "frontend-test-01",
    "question": "Which tag is used to define a drop-down list in HTML?",
    "options": ["<select>", "<dropdown>", "<list>", "<input type='dropdown'>"],
    "correctOption": 0,
    "explanation": "<select> creates a drop-down list. It contains <option> elements for each choice."
  },
  {
    "testId": "frontend-test-01",
    "question": "What is the purpose of the 'required' attribute on input elements?",
    "options": [
      "To make the field mandatory before form submission",
      "To pre-fill the field",
      "To set the field as read-only",
      "To disable the field"
    ],
    "correctOption": 0,
    "explanation": "The 'required' attribute specifies that an input field must be filled out before submitting the form."
  },
  {
    "testId": "frontend-test-01",
    "question": "Which HTML element is used to define a definition list?",
    "options": ["<dl>", "<dt>", "<dd>", "<list>"],
    "correctOption": 0,
    "explanation": "<dl> (definition list) is used to describe terms and their definitions, using <dt> (term) and <dd> (definition)."
  },
  {
    "testId": "frontend-test-01",
    "question": "What is the purpose of the 'placeholder' attribute in an input field?",
    "options": [
      "To display a hint or example text inside the field",
      "To set a default value",
      "To make the field read-only",
      "To disable the field"
    ],
    "correctOption": 0,
    "explanation": "The 'placeholder' attribute shows a short hint that describes the expected input value."
  },
  {
    "testId": "frontend-test-01",
    "question": "Which element is used to provide metadata about an HTML document?",
    "options": ["<meta>", "<link>", "<style>", "<script>"],
    "correctOption": 0,
    "explanation": "<meta> provides metadata such as character set, description, keywords, and viewport settings."
  },
  {
    "testId": "frontend-test-01",
    "question": "What is the difference between <strong> and <b> tags?",
    "options": [
      "<strong> indicates strong importance (semantic); <b> is for stylistic bold (non-semantic)",
      "<b> indicates importance; <strong> is stylistic",
      "Both are semantic",
      "Both are non-semantic"
    ],
    "correctOption": 0,
    "explanation": "<strong> has semantic meaning (importance), while <b> is purely presentational (bold)."
  },
  {
    "testId": "frontend-test-01",
    "question": "Which HTML attribute is used to group form elements together?",
    "options": ["<fieldset>", "<group>", "<form-group>", "<set>"],
    "correctOption": 0,
    "explanation": "<fieldset> groups related form controls, often with a <legend> for a caption."
  },
  {
    "testId": "frontend-test-01",
    "question": "What does the <aside> tag represent?",
    "options": [
      "Content tangentially related to the main content, often a sidebar",
      "The main content of the page",
      "A footer section",
      "A navigation menu"
    ],
    "correctOption": 0,
    "explanation": "<aside> represents a section that is tangentially related to the main content, like sidebars, pull quotes, or advertising."
  },
  {
    "testId": "frontend-test-01",
    "question": "Which element is used to define a video in HTML?",
    "options": ["<video>", "<media>", "<movie>", "<vid>"],
    "correctOption": 0,
    "explanation": "<video> is used to embed video content, with attributes like src, controls, and autoplay."
  },
  {
    "testId": "frontend-test-01",
    "question": "What is the purpose of the 'title' attribute on HTML elements?",
    "options": [
      "To provide additional tooltip information",
      "To set the element's title",
      "To specify the element's name",
      "To style the element"
    ],
    "correctOption": 0,
    "explanation": "The 'title' attribute provides advisory information about the element, often displayed as a tooltip."
  },
  {
    "testId": "frontend-test-01",
    "question": "Which HTML tag is used to create a line break?",
    "options": ["<br>", "<lb>", "<break>", "<newline>"],
    "correctOption": 0,
    "explanation": "<br> inserts a single line break. It is a void element and does not have a closing tag."
  },
  {
    "testId": "frontend-test-01",
    "question": "What is the correct way to specify the character encoding in HTML5?",
    "options": ["<meta charset='UTF-8'>", "<meta charset='utf-8'>", "<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>", "All of the above"],
    "correctOption": 3,
    "explanation": "All of these methods are valid, but the simplest is `<meta charset='UTF-8'>`."
  },
  {
    "testId": "frontend-test-02",
    "question": "Which CSS selector selects all elements with a specific class?",
    "options": [".classname", "#id", "element", "*"],
    "correctOption": 0,
    "explanation": "Class selectors start with a dot (.) followed by the class name."
  },
  {
    "testId": "frontend-test-02",
    "question": "What is the box model in CSS?",
    "options": [
      "The combination of margin, border, padding, and content",
      "A type of layout mode",
      "A method for styling text",
      "A CSS framework"
    ],
    "correctOption": 0,
    "explanation": "The CSS box model consists of content, padding, border, and margin, which together form the rectangular box around each element."
  },
  {
    "testId": "frontend-test-02",
    "question": "Which CSS property controls the space between the border and the content?",
    "options": ["padding", "margin", "border-spacing", "gap"],
    "correctOption": 0,
    "explanation": "padding is the space between the element's content and its border."
  },
  {
    "testId": "frontend-test-02",
    "question": "What is the specificity order of CSS selectors from highest to lowest?",
    "options": [
      "id > class > element",
      "element > class > id",
      "class > id > element",
      "id > element > class"
    ],
    "correctOption": 0,
    "explanation": "ID selectors have the highest specificity, followed by class/attribute/pseudo-class selectors, then element/pseudo-element selectors."
  },
  {
    "testId": "frontend-test-02",
    "question": "Which CSS property is used to change the background color?",
    "options": ["background-color", "bg-color", "color", "background"],
    "correctOption": 0,
    "explanation": "`background-color` sets the background color of an element."
  },
  {
    "testId": "frontend-test-02",
    "question": "What is the difference between `display: none` and `visibility: hidden`?",
    "options": [
      "`display: none` removes the element from the layout; `visibility: hidden` hides it but preserves its space",
      "`visibility: hidden` removes the element; `display: none` preserves space",
      "Both remove the element",
      "Both preserve space"
    ],
    "correctOption": 0,
    "explanation": "`display: none` completely removes the element from the document flow, while `visibility: hidden` makes it invisible but still occupies space."
  },
  {
    "testId": "frontend-test-02",
    "question": "Which CSS unit is relative to the viewport height?",
    "options": ["vh", "vw", "em", "rem"],
    "correctOption": 0,
    "explanation": "`vh` is a relative unit equal to 1% of the viewport height. `vw` is for width."
  },
  {
    "testId": "frontend-test-02",
    "question": "How do you apply a CSS rule to all direct children of an element?",
    "options": ["parent > child", "parent child", "parent + child", "parent ~ child"],
    "correctOption": 0,
    "explanation": "The child combinator `>` selects only the direct children of the parent element."
  },
  {
    "testId": "frontend-test-02",
    "question": "What is the purpose of the `z-index` property?",
    "options": [
      "To control the stacking order of positioned elements",
      "To set the zoom level",
      "To define the element's tab order",
      "To control text direction"
    ],
    "correctOption": 0,
    "explanation": "`z-index` determines the vertical stacking order of elements that overlap, with higher values appearing on top."
  },
  {
    "testId": "frontend-test-02",
    "question": "Which CSS property is used to create rounded corners?",
    "options": ["border-radius", "corner-radius", "rounded", "border-curve"],
    "correctOption": 0,
    "explanation": "`border-radius` defines the radius of the corners of an element's border."
  },
  {
    "testId": "frontend-test-02",
    "question": "What is the default value of the `position` property?",
    "options": ["static", "relative", "absolute", "fixed"],
    "correctOption": 0,
    "explanation": "`position: static` is the default, meaning the element follows the normal document flow."
  },
  {
    "testId": "frontend-test-02",
    "question": "How do you apply a gradient background in CSS?",
    "options": ["background: linear-gradient();", "background-image: gradient();", "gradient: linear();", "background-gradient: linear();"],
    "correctOption": 0,
    "explanation": "`linear-gradient()` is a function used with `background` or `background-image` to create a gradient."
  },
  {
    "testId": "frontend-test-02",
    "question": "What is the `em` unit based on?",
    "options": [
      "Relative to the font-size of the parent element",
      "Relative to the root element's font-size",
      "Relative to the viewport width",
      "Relative to the element's height"
    ],
    "correctOption": 0,
    "explanation": "`em` is relative to the font-size of the nearest parent (or the element itself). `rem` is relative to the root."
  },
  {
    "testId": "frontend-test-02",
    "question": "Which CSS property is used to set the spacing between lines of text?",
    "options": ["line-height", "letter-spacing", "word-spacing", "text-spacing"],
    "correctOption": 0,
    "explanation": "`line-height` controls the vertical spacing between lines of text."
  },
  {
    "testId": "frontend-test-02",
    "question": "What is the purpose of the `@media` rule?",
    "options": [
      "To apply styles based on device characteristics like screen size",
      "To import external stylesheets",
      "To define custom fonts",
      "To animate elements"
    ],
    "correctOption": 0,
    "explanation": "`@media` is used for responsive design, applying styles only when certain conditions (like min-width) are met."
  },
  {
    "testId": "frontend-test-02",
    "question": "Which property is used to change the font color?",
    "options": ["color", "font-color", "text-color", "foreground"],
    "correctOption": 0,
    "explanation": "`color` sets the foreground color of text."
  },
  {
    "testId": "frontend-test-02",
    "question": "What does the `:hover` pseudo-class do?",
    "options": [
      "Styles an element when the user hovers over it",
      "Styles the element when it is focused",
      "Styles the element when it is active",
      "Styles the element when it is visited"
    ],
    "correctOption": 0,
    "explanation": "`:hover` applies styles when the mouse pointer is over the element."
  },
  {
    "testId": "frontend-test-02",
    "question": "How do you center a block-level element horizontally?",
    "options": ["margin: 0 auto;", "text-align: center;", "display: center;", "align: center;"],
    "correctOption": 0,
    "explanation": "`margin: 0 auto;` on a block element with a fixed width centers it horizontally."
  },
  {
    "testId": "frontend-test-02",
    "question": "What is the `box-sizing` property used for?",
    "options": [
      "To change the way box dimensions are calculated (content-box vs border-box)",
      "To set the box size",
      "To create a box shadow",
      "To set the box's display type"
    ],
    "correctOption": 0,
    "explanation": "`box-sizing: border-box` includes padding and border in the element's total width/height, simplifying layout."
  },
  {
    "testId": "frontend-test-02",
    "question": "Which CSS selector selects the first child of a parent?",
    "options": [":first-child", ":first-of-type", "first-child", ":first"],
    "correctOption": 0,
    "explanation": "`:first-child` matches an element that is the first child of its parent."
  },
  {
    "testId": "frontend-test-02",
    "question": "What is the `opacity` property used for?",
    "options": [
      "To set the transparency level of an element",
      "To set the brightness",
      "To set the contrast",
      "To set the sharpness"
    ],
    "correctOption": 0,
    "explanation": "`opacity` specifies the transparency, ranging from 0 (fully transparent) to 1 (fully opaque)."
  },
  {
    "testId": "frontend-test-02",
    "question": "Which CSS property is used to add a shadow to the text?",
    "options": ["text-shadow", "box-shadow", "font-shadow", "shadow"],
    "correctOption": 0,
    "explanation": "`text-shadow` adds shadow effects to text."
  },
  {
    "testId": "frontend-test-02",
    "question": "How do you create a CSS transition?",
    "options": [
      "Using the `transition` property on the element",
      "Using `animation` property",
      "Using `@keyframes`",
      "Using `transform`"
    ],
    "correctOption": 0,
    "explanation": "`transition` allows the smooth change of property values over a duration."
  },
  {
    "testId": "frontend-test-02",
    "question": "What is the default display value for a `<div>` element?",
    "options": ["block", "inline", "inline-block", "flex"],
    "correctOption": 0,
    "explanation": "`<div>` is a block-level element by default, taking the full width of its parent."
  },
  {
    "testId": "frontend-test-03",
    "question": "What is the result of `typeof null` in JavaScript?",
    "options": ["'object'", "'null'", "'undefined'", "'number'"],
    "correctOption": 0,
    "explanation": "Due to a historical bug, `typeof null` returns `'object'`, although null is a primitive value."
  },
  {
    "testId": "frontend-test-03",
    "question": "What is the output of `3 + '3'` in JavaScript?",
    "options": ["6", "'33'", "33", "Error"],
    "correctOption": 1,
    "explanation": "When adding a number and a string, JavaScript converts the number to a string and concatenates."
  },
  {
    "testId": "frontend-test-03",
    "question": "Which method is used to add an element at the end of an array?",
    "options": ["push()", "pop()", "unshift()", "shift()"],
    "correctOption": 0,
    "explanation": "`push()` adds one or more elements to the end of an array and returns the new length."
  },
  {
    "testId": "frontend-test-03",
    "question": "What is the difference between `null` and `undefined`?",
    "options": [
      "null is an intentionally assigned value; undefined means a variable has been declared but not assigned",
      "undefined is intentionally assigned; null means not assigned",
      "Both mean the same",
      "null is a primitive; undefined is an object"
    ],
    "correctOption": 0,
    "explanation": "null is an assignment value indicating no value; undefined is the default value for uninitialized variables."
  },
  {
    "testId": "frontend-test-03",
    "question": "How do you create a function in JavaScript?",
    "options": ["function myFunc() {}", "myFunc = function() {}", "() => {}", "All of the above"],
    "correctOption": 3,
    "explanation": "All these are valid ways to define functions in JavaScript."
  },
  {
    "testId": "frontend-test-03",
    "question": "Which loop will always execute its code block at least once?",
    "options": ["do...while", "while", "for", "for...in"],
    "correctOption": 0,
    "explanation": "`do...while` executes the block first, then checks the condition, so it runs at least once."
  },
  {
    "testId": "frontend-test-03",
    "question": "What is the `this` keyword in JavaScript?",
    "options": [
      "It refers to the object that is executing the current function",
      "It refers to the global object always",
      "It refers to the function itself",
      "It refers to the parent function"
    ],
    "correctOption": 0,
    "explanation": "`this` refers to the execution context; its value depends on how and where the function is called."
  },
  {
    "testId": "frontend-test-03",
    "question": "Which method converts a JSON string into a JavaScript object?",
    "options": ["JSON.parse()", "JSON.stringify()", "eval()", "JSON.convert()"],
    "correctOption": 0,
    "explanation": "`JSON.parse()` parses a JSON string and returns a JavaScript object."
  },
  {
    "testId": "frontend-test-03",
    "question": "What is a closure in JavaScript?",
    "options": [
      "A function that remembers its lexical scope even when executed outside that scope",
      "A function that returns another function",
      "A function that has no name",
      "A function that is used only once"
    ],
    "correctOption": 0,
    "explanation": "A closure is a function that retains access to its outer (enclosing) scope's variables after the outer function has returned."
  },
  {
    "testId": "frontend-test-03",
    "question": "Which array method returns a new array with elements that pass a test?",
    "options": ["filter()", "map()", "forEach()", "reduce()"],
    "correctOption": 0,
    "explanation": "`filter()` creates a new array with all elements that satisfy the condition in the callback."
  },
  {
    "testId": "frontend-test-03",
    "question": "What is the output of `console.log(2 ** 3)`?",
    "options": ["8", "6", "9", "5"],
    "correctOption": 0,
    "explanation": "`**` is the exponentiation operator. 2 raised to the power of 3 is 8."
  },
  {
    "testId": "frontend-test-03",
    "question": "Which method is used to remove the last element of an array?",
    "options": ["pop()", "push()", "shift()", "unshift()"],
    "correctOption": 0,
    "explanation": "`pop()` removes the last element from an array and returns that element."
  },
  {
    "testId": "frontend-test-03",
    "question": "What is the purpose of `Promise` in JavaScript?",
    "options": [
      "To handle asynchronous operations and their eventual success or failure",
      "To create synchronous functions",
      "To block the main thread",
      "To manage memory"
    ],
    "correctOption": 0,
    "explanation": "Promises represent the eventual completion (or failure) of an asynchronous operation, with methods like `.then()` and `.catch()`."
  },
  {
    "testId": "frontend-test-03",
    "question": "Which keyword is used to declare a constant variable in ES6?",
    "options": ["const", "let", "var", "constant"],
    "correctOption": 0,
    "explanation": "`const` creates a read-only variable that cannot be reassigned (though object properties can still be modified)."
  },
  {
    "testId": "frontend-test-03",
    "question": "What is the difference between `==` and `===`?",
    "options": [
      "`===` checks value and type equality; `==` only checks value (with type coercion)",
      "`==` checks value and type; `===` checks only value",
      "Both check value and type",
      "Both check only value"
    ],
    "correctOption": 0,
    "explanation": "`===` (strict equality) does not coerce types, while `==` (loose equality) coerces types before comparison."
  },
  {
    "testId": "frontend-test-03",
    "question": "Which event occurs when a user clicks on an element?",
    "options": ["click", "onclick", "mousedown", "mouseup"],
    "correctOption": 0,
    "explanation": "The `click` event is fired when the mouse button is pressed and released on an element."
  },
  {
    "testId": "frontend-test-03",
    "question": "What is the purpose of `document.getElementById()`?",
    "options": [
      "To retrieve an element by its ID attribute",
      "To retrieve all elements with a given class",
      "To retrieve all elements with a given tag name",
      "To retrieve the first element matching a CSS selector"
    ],
    "correctOption": 0,
    "explanation": "`document.getElementById()` returns the element with the specified ID, or null if not found."
  },
  {
    "testId": "frontend-test-03",
    "question": "Which method is used to add an event listener to an element?",
    "options": ["addEventListener()", "attachEvent()", "on()", "bind()"],
    "correctOption": 0,
    "explanation": "`addEventListener()` is the standard method to attach an event handler to a DOM element."
  },
  {
    "testId": "frontend-test-03",
    "question": "What is the `async` keyword used for?",
    "options": [
      "To declare an asynchronous function that returns a Promise",
      "To declare a synchronous function",
      "To import modules",
      "To export functions"
    ],
    "correctOption": 0,
    "explanation": "`async` functions always return a Promise and allow the use of the `await` keyword inside."
  },
  {
    "testId": "frontend-test-03",
    "question": "What does `Array.isArray([])` return?",
    "options": ["true", "false", "undefined", "null"],
    "correctOption": 0,
    "explanation": "`Array.isArray()` checks if the argument is an array, returns true."
  },
  {
    "testId": "frontend-test-03",
    "question": "Which statement is used to exit a loop early?",
    "options": ["break", "continue", "exit", "return"],
    "correctOption": 0,
    "explanation": "`break` terminates the current loop immediately."
  },
  {
    "testId": "frontend-test-03",
    "question": "What is the output of `console.log('Hello' + 'World')`?",
    "options": ["HelloWorld", "Hello World", "Hello+World", "Error"],
    "correctOption": 0,
    "explanation": "Concatenating two strings with `+` joins them without adding a space."
  },
  {
    "testId": "frontend-test-03",
    "question": "Which method creates a shallow copy of an array?",
    "options": ["slice()", "splice()", "concat()", "All of the above"],
    "correctOption": 3,
    "explanation": "`slice()`, `concat()`, and the spread operator `[...arr]` all create shallow copies of arrays."
  },
  {
    "testId": "frontend-test-03",
    "question": "What is the purpose of the `finally` block in a try/catch?",
    "options": [
      "To execute code regardless of whether an error occurred",
      "To catch errors",
      "To throw errors",
      "To ignore errors"
    ],
    "correctOption": 0,
    "explanation": "The `finally` block always runs after try/catch, regardless of an error, often for cleanup."
  },
  {
    "testId": "frontend-test-04",
    "question": "What is React?",
    "options": [
      "A JavaScript library for building user interfaces",
      "A full-stack framework",
      "A database management system",
      "A CSS preprocessor"
    ],
    "correctOption": 0,
    "explanation": "React is a declarative, component-based UI library for building interactive interfaces."
  },
  {
    "testId": "frontend-test-04",
    "question": "Which function is used to create a functional component in React?",
    "options": [
      "function MyComponent() { return <div>Hello</div>; }",
      "const MyComponent = () => <div>Hello</div>;",
      "Both A and B",
      "None"
    ],
    "correctOption": 2,
    "explanation": "Both function declarations and arrow functions can define functional components."
  },
  {
    "testId": "frontend-test-04",
    "question": "What is JSX in React?",
    "options": [
      "A syntax extension that allows writing HTML-like code in JavaScript",
      "A JavaScript framework",
      "A CSS library",
      "A testing tool"
    ],
    "correctOption": 0,
    "explanation": "JSX is a syntax extension that enables you to write HTML-like code in JavaScript, which is transpiled to React.createElement calls."
  },
  {
    "testId": "frontend-test-04",
    "question": "How do you pass data from a parent component to a child component?",
    "options": ["Via props", "Via state", "Via context", "Via refs"],
    "correctOption": 0,
    "explanation": "Props (short for properties) are the primary way to pass data down from parent to child components."
  },
  {
    "testId": "frontend-test-04",
    "question": "Which hook is used to add state to a functional component?",
    "options": ["useState", "useEffect", "useContext", "useReducer"],
    "correctOption": 0,
    "explanation": "`useState` is the hook that adds local state to functional components."
  },
  {
    "testId": "frontend-test-04",
    "question": "What is the purpose of `key` prop in React lists?",
    "options": [
      "To help React identify which items have changed, are added, or are removed",
      "To style list items",
      "To set the list order",
      "To bind event handlers"
    ],
    "correctOption": 0,
    "explanation": "Keys give elements a stable identity, helping React optimize re-rendering when the list changes."
  },
  {
    "testId": "frontend-test-04",
    "question": "What is the default behavior of state updates in React?",
    "options": [
      "They are batched and asynchronous",
      "They are synchronous",
      "They happen immediately",
      "They block the UI"
    ],
    "correctOption": 0,
    "explanation": "React batches state updates for performance, and they are asynchronous within event handlers."
  },
  {
    "testId": "frontend-test-04",
    "question": "Which method is used to update state in a class component?",
    "options": ["this.setState()", "this.state =", "useState()", "updateState()"],
    "correctOption": 0,
    "explanation": "`this.setState()` is the method to update state in class components, which triggers a re-render."
  },
  {
    "testId": "frontend-test-04",
    "question": "What is a React component?",
    "options": [
      "A reusable piece of UI that can have its own state and props",
      "A function that returns HTML",
      "A class that extends React.Component",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Components are the building blocks of React UIs, and can be functional or class-based."
  },
  {
    "testId": "frontend-test-04",
    "question": "Which hook is used to perform side effects in functional components?",
    "options": ["useEffect", "useState", "useRef", "useLayoutEffect"],
    "correctOption": 0,
    "explanation": "`useEffect` handles side effects like data fetching, subscriptions, and DOM manipulation."
  },
  {
    "testId": "frontend-test-04",
    "question": "What does `React.Fragment` do?",
    "options": [
      "It groups a list of children without adding extra DOM nodes",
      "It creates a new DOM element",
      "It applies styles to children",
      "It handles routing"
    ],
    "correctOption": 0,
    "explanation": "React.Fragment allows you to return multiple elements without wrapping them in an additional container element."
  },
  {
    "testId": "frontend-test-04",
    "question": "How do you define props in a functional component?",
    "options": [
      "They are passed as an argument to the component function",
      "They are defined inside the component",
      "They are set using useProps",
      "They are declared globally"
    ],
    "correctOption": 0,
    "explanation": "Props are received as the first argument in the component function."
  },
  {
    "testId": "frontend-test-04",
    "question": "What is the virtual DOM in React?",
    "options": [
      "A lightweight representation of the actual DOM that React uses to optimize updates",
      "The real DOM",
      "A React component",
      "A state management library"
    ],
    "correctOption": 0,
    "explanation": "React's virtual DOM is a copy of the actual DOM that allows efficient updates by calculating differences (diffing)."
  },
  {
    "testId": "frontend-test-04",
    "question": "Which lifecycle method is invoked after a component is rendered for the first time?",
    "options": ["componentDidMount", "componentWillMount", "render", "componentDidUpdate"],
    "correctOption": 0,
    "explanation": "`componentDidMount` runs after the component is first mounted to the DOM."
  },
  {
    "testId": "frontend-test-04",
    "question": "How do you handle events in React?",
    "options": [
      "Using camelCase event names and passing functions as event handlers",
      "Using lowercase event names",
      "Using inline HTML attributes",
      "Using jQuery"
    ],
    "correctOption": 0,
    "explanation": "React uses camelCase event names (e.g., onClick) and expects a function as the handler."
  },
  {
    "testId": "frontend-test-04",
    "question": "What is the purpose of `React.createElement`?",
    "options": [
      "To create a React element object representing a DOM node or component",
      "To create a new component",
      "To render a component to the DOM",
      "To set up the React environment"
    ],
    "correctOption": 0,
    "explanation": "`React.createElement` creates an object describing the UI element, used behind the scenes in JSX."
  },
  {
    "testId": "frontend-test-04",
    "question": "What is the difference between a controlled and uncontrolled component?",
    "options": [
      "Controlled components have their value controlled by React state; uncontrolled components keep their own internal state",
      "Uncontrolled components are controlled by React; controlled ones are not",
      "Both are controlled by React",
      "Both keep their own state"
    ],
    "correctOption": 0,
    "explanation": "In controlled components, the input value is driven by React state; in uncontrolled components, the DOM itself manages the state."
  },
  {
    "testId": "frontend-test-04",
    "question": "Which method is used to prevent default behavior in React event handlers?",
    "options": ["event.preventDefault()", "return false", "event.stopPropagation()", "event.cancelBubble()"],
    "correctOption": 0,
    "explanation": "`event.preventDefault()` stops the default action (e.g., form submission, link navigation)."
  },
  {
    "testId": "frontend-test-04",
    "question": "What is the role of `ReactDOM.render()`?",
    "options": [
      "To render a React component into the DOM",
      "To render a component on the server",
      "To create a new React application",
      "To update the state"
    ],
    "correctOption": 0,
    "explanation": "`ReactDOM.render()` is used to mount a React component into a DOM container."
  },
  {
    "testId": "frontend-test-04",
    "question": "What is a pure component in React?",
    "options": [
      "A component that implements `shouldComponentUpdate` with a shallow prop/state comparison",
      "A component without state",
      "A component that uses hooks",
      "A component that never re-renders"
    ],
    "correctOption": 0,
    "explanation": "`React.PureComponent` automatically does a shallow comparison of props and state, preventing unnecessary updates."
  },
  {
    "testId": "frontend-test-05",
    "question": "Which method is called to update state in a React class component?",
    "options": ["setState()", "forceUpdate()", "updateState()", "this.state ="],
    "correctOption": 0,
    "explanation": "`this.setState()` is the proper method to request state updates and trigger re-rendering."
  },
  {
    "testId": "frontend-test-05",
    "question": "What is the purpose of `componentDidMount()`?",
    "options": [
      "To perform actions after the component has been inserted into the DOM",
      "To update state",
      "To render the component",
      "To handle errors"
    ],
    "correctOption": 0,
    "explanation": "`componentDidMount` is ideal for initiating API calls or subscriptions."
  },
  {
    "testId": "frontend-test-05",
    "question": "When is `componentDidUpdate()` invoked?",
    "options": [
      "After the component's props or state have changed and the component re-rendered",
      "Before the component mounts",
      "When the component is unmounting",
      "Only on the first render"
    ],
    "correctOption": 0,
    "explanation": "`componentDidUpdate` is called after every update except the initial render, and is useful for side effects based on prop/state changes."
  },
  {
    "testId": "frontend-test-05",
    "question": "What is the role of `shouldComponentUpdate()`?",
    "options": [
      "To optimize performance by allowing the component to decide whether to re-render",
      "To force an update",
      "To handle errors",
      "To initialize state"
    ],
    "correctOption": 0,
    "explanation": "`shouldComponentUpdate` returns a boolean to control re-rendering; it helps prevent unnecessary renders."
  },
  {
    "testId": "frontend-test-05",
    "question": "How do you lift state up in React?",
    "options": [
      "Move the state to the closest common ancestor and pass it down via props",
      "Use global state directly",
      "Use React context",
      "Use a state management library"
    ],
    "correctOption": 0,
    "explanation": "Lifting state up involves moving shared state to the nearest parent component, then passing it down with callbacks."
  },
  {
    "testId": "frontend-test-05",
    "question": "Which method is called just before a component is unmounted?",
    "options": ["componentWillUnmount", "componentDidUnmount", "componentWillMount", "componentUnmount"],
    "correctOption": 0,
    "explanation": "`componentWillUnmount` is used for cleanup, like canceling network requests or removing event listeners."
  },
  {
    "testId": "frontend-test-05",
    "question": "What is the purpose of `getDerivedStateFromProps()`?",
    "options": [
      "To update state based on changes in props before the render",
      "To fetch data from an API",
      "To handle errors",
      "To force an update"
    ],
    "correctOption": 0,
    "explanation": "`getDerivedStateFromProps` is a static method used to update state in response to prop changes."
  },
  {
    "testId": "frontend-test-05",
    "question": "How do you pass a callback to a child component to update parent state?",
    "options": [
      "Pass the callback as a prop, and call it in the child",
      "Use context",
      "Use Redux",
      "Directly modify parent state"
    ],
    "correctOption": 0,
    "explanation": "The parent defines a function that updates its state and passes that function down to the child as a prop."
  },
  {
    "testId": "frontend-test-05",
    "question": "What is the output of `this.setState({ count: this.state.count + 1 })` when called twice in a row?",
    "options": [
      "It might not update correctly because setState is asynchronous and may batch",
      "It always works correctly",
      "It will cause an error",
      "It will update twice"
    ],
    "correctOption": 0,
    "explanation": "Since setState is asynchronous, consecutive calls may be batched. To ensure correct update, use the functional form: `setState(prevState => ({ count: prevState.count + 1 }))`."
  },
  {
    "testId": "frontend-test-05",
    "question": "Which lifecycle method is deprecated in React 17?",
    "options": ["componentWillMount", "componentDidMount", "render", "componentDidUpdate"],
    "correctOption": 0,
    "explanation": "`componentWillMount` was deprecated in favor of using the constructor or `componentDidMount` for side effects."
  },
  {
    "testId": "frontend-test-05",
    "question": "What is the purpose of `forceUpdate()`?",
    "options": [
      "To force a component to re-render without changing props or state",
      "To force an update to state",
      "To force a child component to update",
      "To force an error"
    ],
    "correctOption": 0,
    "explanation": "`forceUpdate()` triggers a re-render bypassing `shouldComponentUpdate`, rarely used."
  },
  {
    "testId": "frontend-test-05",
    "question": "How do you handle errors in React components?",
    "options": [
      "Using Error Boundaries (componentDidCatch) for class components",
      "Using try/catch",
      "Using error hooks",
      "All of the above"
    ],
    "correctOption": 0,
    "explanation": "React provides Error Boundaries via `componentDidCatch` and `static getDerivedStateFromError` for class components. Functional components rely on other methods."
  },
  {
    "testId": "frontend-test-06",
    "question": "Which hook is used to manage side effects in React functional components?",
    "options": ["useEffect", "useState", "useRef", "useCallback"],
    "correctOption": 0,
    "explanation": "`useEffect` is the hook for handling side effects, such as data fetching, subscriptions, and DOM updates."
  },
  {
    "testId": "frontend-test-06",
    "question": "How do you implement componentDidMount behavior with hooks?",
    "options": [
      "useEffect(() => {}, [])",
      "useEffect(() => {}, [deps])",
      "useEffect(() => {})",
      "useMount(() => {})"
    ],
    "correctOption": 0,
    "explanation": "Passing an empty dependency array to `useEffect` makes it run only once after mount."
  },
  {
    "testId": "frontend-test-06",
    "question": "What is the purpose of `useContext`?",
    "options": [
      "To access the value of a React context",
      "To create a new context",
      "To manage state globally",
      "To pass props deeply"
    ],
    "correctOption": 0,
    "explanation": "`useContext` is used to read and subscribe to a context value created by `React.createContext()`."
  },
  {
    "testId": "frontend-test-06",
    "question": "When should you use `useReducer` instead of `useState`?",
    "options": [
      "When the state logic is complex and involves multiple sub-values or next state depends on previous state",
      "When you need global state",
      "When you need to fetch data",
      "Never, useState is always better"
    ],
    "correctOption": 0,
    "explanation": "`useReducer` is preferred for complex state logic, similar to Redux, and is more predictable for large state updates."
  },
  {
    "testId": "frontend-test-06",
    "question": "What is the purpose of `useCallback`?",
    "options": [
      "To memoize a function so it doesn't get recreated on every render",
      "To memoize a value",
      "To create a new function",
      "To handle side effects"
    ],
    "correctOption": 0,
    "explanation": "`useCallback` returns a memoized version of the function that only changes if its dependencies change."
  },
  {
    "testId": "frontend-test-06",
    "question": "What is the difference between `useMemo` and `useCallback`?",
    "options": [
      "useMemo memoizes a value; useCallback memoizes a function",
      "useCallback memoizes a value; useMemo memoizes a function",
      "Both memoize values",
      "Both memoize functions"
    ],
    "correctOption": 0,
    "explanation": "`useMemo` caches the result of a computation; `useCallback` caches the function itself."
  },
  {
    "testId": "frontend-test-06",
    "question": "What is a custom hook?",
    "options": [
      "A function that starts with 'use' and can call other hooks",
      "A built-in hook",
      "A class component",
      "A component that returns JSX"
    ],
    "correctOption": 0,
    "explanation": "Custom hooks are reusable functions that encapsulate stateful logic and can use built-in hooks."
  },
  {
    "testId": "frontend-test-06",
    "question": "Which hook is used to get a mutable reference to a DOM element?",
    "options": ["useRef", "useState", "useEffect", "useMemo"],
    "correctOption": 0,
    "explanation": "`useRef` returns a mutable object whose `.current` property persists across renders and can hold a DOM element reference."
  },
  {
    "testId": "frontend-test-06",
    "question": "How do you simulate componentWillUnmount with hooks?",
    "options": [
      "Return a cleanup function from useEffect",
      "Use useUnmount",
      "Use componentWillUnmount",
      "Use useCleanup"
    ],
    "correctOption": 0,
    "explanation": "The function returned from `useEffect` runs on unmount, serving as cleanup."
  },
  {
    "testId": "frontend-test-06",
    "question": "What is the purpose of `useLayoutEffect`?",
    "options": [
      "To run after DOM mutations but before the browser repaint, for measuring DOM changes",
      "To run after the browser repaint",
      "To run only once",
      "To run on server"
    ],
    "correctOption": 0,
    "explanation": "`useLayoutEffect` fires synchronously after DOM mutations, useful for reading layout and DOM updates."
  },
  {
    "testId": "frontend-test-06",
    "question": "Which hook allows sharing state logic between components without prop drilling?",
    "options": ["useContext", "useReducer", "useState", "useMemo"],
    "correctOption": 0,
    "explanation": "`useContext` provides a way to pass data through the component tree without manually passing props down."
  },
  {
    "testId": "frontend-test-06",
    "question": "What is the rule about calling hooks?",
    "options": [
      "Hooks must be called at the top level of a functional component or custom hook, not inside loops or conditions",
      "Hooks can be called anywhere",
      "Hooks must be called in order",
      "Hooks can only be called in class components"
    ],
    "correctOption": 0,
    "explanation": "React relies on the order of hooks, so they must be called unconditionally at the top level to ensure consistent behavior."
  },
  {
    "testId": "frontend-test-06",
    "question": "Which hook is used to improve performance by skipping expensive calculations?",
    "options": ["useMemo", "useCallback", "useEffect", "useState"],
    "correctOption": 0,
    "explanation": "`useMemo` caches the result of an expensive computation so it only runs when dependencies change."
  },
  {
    "testId": "frontend-test-07",
    "question": "What is Flexbox in CSS?",
    "options": [
      "A one-dimensional layout model for arranging items in rows or columns",
      "A two-dimensional layout model",
      "A grid layout system",
      "A positioning model"
    ],
    "correctOption": 0,
    "explanation": "Flexbox (Flexible Box Layout) is designed for one-dimensional layouts, distributing space along a single axis."
  },
  {
    "testId": "frontend-test-07",
    "question": "What is the default flex direction in Flexbox?",
    "options": ["row", "column", "row-reverse", "column-reverse"],
    "correctOption": 0,
    "explanation": "The default `flex-direction` is `row`, placing items horizontally from left to right."
  },
  {
    "testId": "frontend-test-07",
    "question": "Which Flexbox property is used to center items along the cross axis?",
    "options": ["align-items", "justify-content", "align-content", "align-self"],
    "correctOption": 0,
    "explanation": "`align-items` controls alignment along the cross axis (perpendicular to the main axis)."
  },
  {
    "testId": "frontend-test-07",
    "question": "What is the difference between `justify-content` and `align-items` in Flexbox?",
    "options": [
      "justify-content aligns along the main axis; align-items aligns along the cross axis",
      "align-items aligns along the main axis; justify-content aligns along the cross axis",
      "Both align along the main axis",
      "Both align along the cross axis"
    ],
    "correctOption": 0,
    "explanation": "`justify-content` works on the main axis, while `align-items` works on the cross axis."
  },
  {
    "testId": "frontend-test-07",
    "question": "Which CSS Grid property defines the number and size of columns?",
    "options": ["grid-template-columns", "grid-template-rows", "grid-column", "grid-area"],
    "correctOption": 0,
    "explanation": "`grid-template-columns` specifies the columns of the grid, their sizes, and count."
  },
  {
    "testId": "frontend-test-07",
    "question": "What is the purpose of `grid-area`?",
    "options": [
      "To assign an item to a specific grid cell or area",
      "To define the grid container",
      "To define grid gaps",
      "To set grid alignment"
    ],
    "correctOption": 0,
    "explanation": "`grid-area` can be used to place an item in a specific grid area defined by `grid-template-areas`."
  },
  {
    "testId": "frontend-test-07",
    "question": "Which CSS property is used to create space between grid items?",
    "options": ["gap", "grid-gap", "row-gap", "All of the above"],
    "correctOption": 3,
    "explanation": "`gap`, `grid-gap`, `row-gap`, and `column-gap` all control spacing between grid (or flex) items."
  },
  {
    "testId": "frontend-test-07",
    "question": "What does `position: relative` do?",
    "options": [
      "Positions the element relative to its normal position in the flow",
      "Positions the element relative to the nearest positioned ancestor",
      "Removes the element from the flow",
      "Keeps the element fixed on the screen"
    ],
    "correctOption": 0,
    "explanation": "`position: relative` offsets the element from its normal position without affecting other elements."
  },
  {
    "testId": "frontend-test-07",
    "question": "What is the difference between `position: absolute` and `position: relative`?",
    "options": [
      "absolute removes the element from the flow and positions it relative to the nearest positioned ancestor; relative keeps it in the flow",
      "relative removes it from flow; absolute keeps it in flow",
      "Both are removed from flow",
      "Both are kept in flow"
    ],
    "correctOption": 0,
    "explanation": "`absolute` takes the element out of the normal document flow, while `relative` retains its space."
  },
  {
    "testId": "frontend-test-07",
    "question": "Which flex property allows a flex item to grow to fill available space?",
    "options": ["flex-grow", "flex-shrink", "flex-basis", "flex"],
    "correctOption": 0,
    "explanation": "`flex-grow` defines the ability of an item to grow relative to others in the flex container."
  },
  {
    "testId": "frontend-test-07",
    "question": "What is the default value of `flex-grow`?",
    "options": ["0", "1", "auto", "initial"],
    "correctOption": 0,
    "explanation": "The default `flex-grow` is 0, meaning items do not grow to fill the container."
  },
  {
    "testId": "frontend-test-07",
    "question": "Which property is used to change the order of flex items?",
    "options": ["order", "flex-order", "sort", "z-index"],
    "correctOption": 0,
    "explanation": "The `order` property controls the visual order of flex items, default is 0."
  },
  {
    "testId": "frontend-test-07",
    "question": "What is `display: grid` used for?",
    "options": [
      "To create a two-dimensional grid-based layout",
      "To create a flexible box layout",
      "To make inline elements block-level",
      "To hide elements"
    ],
    "correctOption": 0,
    "explanation": "`display: grid` establishes a grid container for two-dimensional layouts."
  },
  {
    "testId": "frontend-test-07",
    "question": "What is the difference between `grid-template-areas` and `grid-area`?",
    "options": [
      "grid-template-areas defines the layout grid; grid-area is used on items to place them",
      "grid-area defines the grid; grid-template-areas places items",
      "Both define the grid",
      "Both place items"
    ],
    "correctOption": 0,
    "explanation": "`grid-template-areas` defines the named grid areas; `grid-area` is used on items to assign them to an area."
  },
  {
    "testId": "frontend-test-07",
    "question": "What is the purpose of `align-content` in Flexbox?",
    "options": [
      "To align multiple lines of flex items along the cross axis",
      "To align a single line along the cross axis",
      "To align along the main axis",
      "To set the spacing between items"
    ],
    "correctOption": 0,
    "explanation": "`align-content` aligns the lines of items when there is extra space on the cross axis (only works if flex-wrap is wrap)."
  },
  {
    "testId": "frontend-test-07",
    "question": "Which CSS unit is best for responsive typography?",
    "options": ["rem", "px", "pt", "em"],
    "correctOption": 0,
    "explanation": "`rem` is relative to the root font size, making it consistent and responsive for typography."
  },
  {
    "testId": "frontend-test-07",
    "question": "What does `position: sticky` do?",
    "options": [
      "Toggles between relative and fixed based on the user's scroll position",
      "Always stays fixed",
      "Is relative to the viewport",
      "Is absolute positioning"
    ],
    "correctOption": 0,
    "explanation": "`position: sticky` behaves like relative until the element reaches a threshold, then becomes fixed."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is First Contentful Paint (FCP)?",
    "options": [
      "The time when the browser renders the first bit of content from the DOM",
      "The time when the page becomes fully interactive",
      "The time when the largest image loads",
      "The time when the page finishes loading"
    ],
    "correctOption": 0,
    "explanation": "FCP measures the time from navigation to when the first text or image is painted."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is Cumulative Layout Shift (CLS)?",
    "options": [
      "The amount of unexpected layout shift that occurs during the page loading",
      "The time to load the largest content",
      "The total page load time",
      "The number of JavaScript errors"
    ],
    "correctOption": 0,
    "explanation": "CLS is a Core Web Vital measuring visual stability; lower is better."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is Largest Contentful Paint (LCP)?",
    "options": [
      "The time when the largest visible content element is rendered",
      "The time when the page becomes interactive",
      "The time when the first byte is received",
      "The time when all resources are loaded"
    ],
    "correctOption": 0,
    "explanation": "LCP measures the render time of the largest image or text block in the viewport."
  },
  {
    "testId": "frontend-test-08",
    "question": "What does lazy loading do?",
    "options": [
      "Defers loading of images and other assets until they are needed",
      "Loads everything upfront",
      "Only loads content on the first page",
      "Delays all JavaScript execution"
    ],
    "correctOption": 0,
    "explanation": "Lazy loading improves initial page load by loading resources only when they enter the viewport."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is the benefit of code splitting?",
    "options": [
      "It splits the code into smaller chunks that can be loaded on demand, reducing initial bundle size",
      "It makes the code easier to write",
      "It combines all code into one file",
      "It prevents JavaScript errors"
    ],
    "correctOption": 0,
    "explanation": "Code splitting is a technique that improves performance by loading only the necessary code for the current page."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is the purpose of `React.memo`?",
    "options": [
      "To memoize a component, preventing re-renders unless props change",
      "To memoize a function",
      "To create a new component",
      "To handle side effects"
    ],
    "correctOption": 0,
    "explanation": "`React.memo` is a higher-order component that skips rendering if the props haven't changed."
  },
  {
    "testId": "frontend-test-08",
    "question": "When should you use `useCallback` vs `useMemo`?",
    "options": [
      "useCallback for functions; useMemo for values/calculations",
      "useMemo for functions; useCallback for values",
      "Both are interchangeable",
      "Neither is used for performance"
    ],
    "correctOption": 0,
    "explanation": "`useCallback` returns a memoized function; `useMemo` returns a memoized value."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is the impact of large bundle size on performance?",
    "options": [
      "It increases initial page load time",
      "It decreases page load time",
      "It has no impact",
      "It only affects mobile devices"
    ],
    "correctOption": 0,
    "explanation": "Larger bundles take longer to download, parse, and execute, delaying the time to interactive."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is the purpose of the `loading='lazy'` attribute on images?",
    "options": [
      "To defer image loading until the image is about to enter the viewport",
      "To load the image immediately",
      "To load the image after everything else",
      "To load the image only on hover"
    ],
    "correctOption": 0,
    "explanation": "This native HTML attribute enables lazy loading of images without JavaScript."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is tree shaking?",
    "options": [
      "A technique to remove dead code from the final bundle",
      "A way to organize code into a tree",
      "A method for shaking the DOM",
      "A performance monitoring tool"
    ],
    "correctOption": 0,
    "explanation": "Tree shaking eliminates unused code from the bundle, reducing file size, often done by bundlers like Webpack."
  },
  {
    "testId": "frontend-test-08",
    "question": "Which tool is commonly used for measuring web performance?",
    "options": ["Lighthouse", "Chrome DevTools", "WebPageTest", "All of the above"],
    "correctOption": 3,
    "explanation": "All these tools provide performance metrics and recommendations."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is the `async` attribute on `<script>` tags used for?",
    "options": [
      "To download the script asynchronously and execute it as soon as it's ready",
      "To defer script execution until after HTML parsing",
      "To load the script synchronously",
      "To prevent the script from running"
    ],
    "correctOption": 0,
    "explanation": "`async` allows the script to be downloaded in parallel with HTML parsing and executed when ready, not blocking rendering."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is the difference between `async` and `defer` for script loading?",
    "options": [
      "async executes as soon as downloaded; defer executes after HTML parsing",
      "defer executes as soon as downloaded; async executes after parsing",
      "Both execute after HTML parsing",
      "Both execute as soon as downloaded"
    ],
    "correctOption": 0,
    "explanation": "`async` does not guarantee execution order; `defer` maintains order and executes after parsing."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is the purpose of the `rel='preconnect'` attribute?",
    "options": [
      "To establish an early connection to an origin to improve loading time",
      "To preload an asset",
      "To specify a preconnect relationship",
      "To connect to a server later"
    ],
    "correctOption": 0,
    "explanation": "`preconnect` hints to the browser to initiate a connection to a third-party server early, improving resource load time."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is the purpose of service workers in performance?",
    "options": [
      "To intercept network requests and enable offline caching",
      "To run JavaScript in the background",
      "To handle push notifications",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Service workers can cache assets for offline use, improving performance for repeat visits."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is the typical goal of performance budgets?",
    "options": [
      "To set limits on page weight, load time, and other metrics to keep performance in check",
      "To limit the number of lines of code",
      "To cap the number of images",
      "To restrict the use of animations"
    ],
    "correctOption": 0,
    "explanation": "Performance budgets ensure that the team maintains a focus on speed and size limits."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is the benefit of using a Content Delivery Network (CDN)?",
    "options": [
      "It reduces latency by serving assets from geographically closer servers",
      "It reduces the size of assets",
      "It increases the number of assets",
      "It automatically compresses images"
    ],
    "correctOption": 0,
    "explanation": "CDNs distribute content across many global servers, speeding up delivery."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is a common cause of render-blocking resources?",
    "options": [
      "CSS and JavaScript loaded in the head without `async` or `defer`",
      "Images loaded with lazy loading",
      "Using inline styles",
      "Using `rel='preload'`"
    ],
    "correctOption": 0,
    "explanation": "Synchronous external CSS and JS in the head block HTML parsing and rendering."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is the `rel='preload'` attribute used for?",
    "options": [
      "To instruct the browser to start fetching resources early",
      "To preconnect to an origin",
      "To prefetch a resource for future navigation",
      "To load a resource immediately"
    ],
    "correctOption": 0,
    "explanation": "`preload` is used to load critical resources (fonts, images, scripts) early in the page load."
  },
  {
    "testId": "frontend-test-08",
    "question": "What is the difference between `preload` and `prefetch`?",
    "options": [
      "preload is for resources needed for the current page; prefetch is for resources likely needed for the next navigation",
      "prefetch is for current page; preload is for next page",
      "Both are for current page",
      "Both are for next page"
    ],
    "correctOption": 0,
    "explanation": "`preload` prioritizes resources for the current navigation; `prefetch` is for future navigations."
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
console.log('Added ' + newQuestions.length + ' frontend questions to questions.js');
