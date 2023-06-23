const quizData = [
  {
    question:
      "Which programming language is known for its use in web development?",
    options: ["Java", "Python", "JavaScript", "C++"],
    answer: 2,
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyper Text Model Language",
    ],
    answer: 2,
  },
  {
    question: "What is the CSS box model used for?",
    options: [
      "Styling web forms",
      "Creating animations",
      "Layout and design",
      "Handling server-side operations",
    ],
    answer: 2,
  },
  {
    question: "What tag is used to define an unordered list in HTML?",
    options: ["<ul>", "<ol>", "<li>", "<div>"],
    answer: 0,
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["background-color", "color", "font-size", "text-align"],
    answer: 1,
  },
  {
    question: "What is the purpose of the JavaScript 'typeof' operator?",
    options: [
      "To check if a variable is null",
      "To determine the type of a variable",
      "To convert a value to a string",
      "To assign a value to a variable",
    ],
    answer: 1,
  },
  {
    question: "What is the correct syntax for a JavaScript 'for' loop?",
    options: [
      "for (i = 0; i < 5; i++)",
      "for (var i = 0; i < 5; i++)",
      "for i = 0 to 5",
      "for (i = 0; i <= 5)",
    ],
    answer: 1,
  },
  {
    question: "Which event is triggered when a user clicks on an HTML element?",
    options: ["onload", "onmouseclick", "onchange", "onclick"],
    answer: 3,
  },
  {
    question:
      "What is the correct way to comment out a line of code in JavaScript?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "# This is a comment",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of the 'class' attribute in HTML?",
    options: [
      "To specify an inline style for an element",
      "To define a CSS class for styling elements",
      "To link an external JavaScript file",
      "To add a unique identifier to an element",
    ],
    answer: 1,
  },
  {
    question:
      "Which method is used to add a new element to the end of an array in JavaScript?",
    options: [".push()", ".pop()", ".shift()", ".unshift()"],
    answer: 0,
  },
  {
    question:
      "What is the correct CSS syntax for selecting an element with the class 'example'?",
    options: [".example", "#example", "example", "*example"],
    answer: 0,
  },
  {
    question: "Which HTML tag is used to define a hyperlink?",
    options: ["<a>", "<h1>", "<p>", "<div>"],
    answer: 0,
  },
  {
    question: "What is the purpose of the CSS 'float' property?",
    options: [
      "To create a horizontal rule",
      "To position an element to the left or right",
      "To underline text",
      "To change the font style",
    ],
    answer: 1,
  },
  {
    question:
      "What is the result of the following JavaScript expression: '5' + 2?",
    options: ["52", "7", "5 + 2", "NaN"],
    answer: 0,
  },
  {
    question: "What is the purpose of the HTML 'form' element?",
    options: [
      "To display a table of data",
      "To group related form elements",
      "To add a background image",
      "To create a hyperlink",
    ],
    answer: 1,
  },
  {
    question:
      "Which JavaScript function is used to convert a string to an integer?",
    options: ["parseInt()", "parseFloat()", "toString()", "toFixed()"],
    answer: 0,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
      "Creative Style Sheets",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of the JavaScript 'splice' method?",
    options: [
      "To remove elements from an array",
      "To add elements to an array",
      "To sort the elements of an array",
      "To reverse the elements of an array",
    ],
    answer: 0,
  },
  {
    question: "What does the HTML 'doctype' declaration do?",
    options: [
      "Defines the HTML version in use",
      "Specifies the character encoding for the document",
      "Links an external CSS file",
      "Defines a comment within the HTML code",
    ],
    answer: 0,
  },
  {
    question:
      "Which CSS property is used to control the spacing between lines of text?",
    options: ["font-size", "text-decoration", "text-align", "line-height"],
    answer: 3,
  },
  {
    question: "What is the purpose of the JavaScript 'setTimeout' function?",
    options: [
      "To create a delay before executing a function",
      "To convert a value to a string",
      "To loop through an array",
      "To assign a value to a variable",
    ],
    answer: 0,
  },
  {
    question: "What is the correct way to include an external JavaScript file?",
    options: [
      "<script src='script.js'>",
      "<javascript src='script.js'>",
      "<link rel='script' href='script.js'>",
      "<js src='script.js'>",
    ],
    answer: 0,
  },
  {
    question: "Which HTML tag is used to define a table header?",
    options: ["<th>", "<tr>", "<td>", "<table>"],
    answer: 0,
  },
  {
    question: "What is the purpose of the CSS 'margin' property?",
    options: [
      "To control the background color of an element",
      "To add space inside an element",
      "To position an element relative to its container",
      "To add space around an element",
    ],
    answer: 3,
  },
  {
    question:
      "What is the result of the following JavaScript expression: 10 % 3?",
    options: ["1", "3", "0.1", "4"],
    answer: 0,
  },
  {
    question: "What is the purpose of the HTML 'img' tag?",
    options: [
      "To create a hyperlink",
      "To define a paragraph",
      "To display an image",
      "To add a line break",
    ],
    answer: 2,
  },
  {
    question:
      "Which JavaScript method is used to remove the last element from an array?",
    options: [".push()", ".pop()", ".shift()", ".unshift()"],
    answer: 1,
  },
  {
    question:
      "What is the correct CSS syntax for selecting an element with the ID 'example'?",
    options: ["example", "#example", ".example", "*example"],
    answer: 1,
  },
  {
    question: "What is the purpose of the HTML 'head' element?",
    options: [
      "To define the main content of a document",
      "To define a section of navigation links",
      "To contain metadata about the document",
      "To specify a footer for the document",
    ],
    answer: 2,
  },
  {
    question:
      "Which CSS property is used to change the font style of an element?",
    options: ["color", "font-weight", "font-size", "font-style"],
    answer: 3,
  },
  {
    question:
      "What is the result of the following JavaScript expression: '5' - 2?",
    options: ["3", "7", "5 - 2", "NaN"],
    answer: 0,
  },
  {
    question: "What is the purpose of the CSS 'position' property?",
    options: [
      "To add a background image",
      "To position an element relative to its container",
      "To change the font style",
      "To control the visibility of an element",
    ],
    answer: 1,
  },
  {
    question: "What is the correct way to declare a JavaScript variable?",
    options: [
      "variable name = value;",
      "var name = value;",
      "name = value;",
      "value = name;",
    ],
    answer: 1,
  },
  {
    question: "What does the HTML 'meta' tag provide information about?",
    options: [
      "The main content of the document",
      "The page layout and design",
      "The document's character encoding",
      "The document's footer",
    ],
    answer: 2,
  },
  {
    question:
      "Which JavaScript method is used to add a new element to the beginning of an array?",
    options: [".push()", ".pop()", ".shift()", ".unshift()"],
    answer: 3,
  },
  {
    question: "What is the purpose of the CSS 'background-color' property?",
    options: [
      "To change the text color",
      "To specify a background image",
      "To set the width of an element",
      "To change the background color of an element",
    ],
    answer: 3,
  },
  {
    question:
      "What is the result of the following JavaScript expression: '5' === 5?",
    options: ["true", "false", "NaN", "undefined"],
    answer: 1,
  },
  {
    question: "What is the purpose of the HTML 'div' element?",
    options: [
      "To create a hyperlink",
      "To define a paragraph",
      "To group content for styling",
      "To add a line break",
    ],
    answer: 2,
  },
  {
    question:
      "Which CSS property is used to control the appearance of a border?",
    options: ["border-width", "border-color", "border-style", "border-radius"],
    answer: 2,
  },
  {
    question: "What is the purpose of the JavaScript 'length' property?",
    options: [
      "To return the number of characters in a string",
      "To return the number of elements in an array",
      "To loop through an array",
      "To remove elements from an array",
    ],
    answer: 1,
  },
  {
    question:
      "What is the correct HTML syntax for creating a hyperlink that opens in a new tab?",
    options: [
      "<a href='url' target='_blank'>",
      "<a href='url' target='_new'>",
      "<a href='url' newtab>",
      "<a href='url' tab='new'>",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of the CSS 'display' property?",
    options: [
      "To add a background image",
      "To control the visibility of an element",
      "To change the font style",
      "To position an element relative to its container",
    ],
    answer: 1,
  },
  {
    question:
      "What is the result of the following JavaScript expression: 5 > 3 && 2 < 4?",
    options: ["true", "false", "NaN", "undefined"],
    answer: 0,
  },
  {
    question: "What is the purpose of the HTML 'ul' element?",
    options: [
      "To define an ordered list",
      "To define an unordered list",
      "To create a table",
      "To add a line break",
    ],
    answer: 1,
  },
  {
    question:
      "Which CSS property is used to change the font size of an element?",
    options: ["color", "font-weight", "font-size", "font-style"],
    answer: 2,
  },
  {
    question:
      "What is the result of the following JavaScript expression: 5 + '2'?",
    options: ["7", "52", "5 + 2", "NaN"],
    answer: 1,
  },
  {
    question: "What is the purpose of the CSS 'opacity' property?",
    options: [
      "To control the visibility of an element",
      "To change the background color of an element",
      "To position an element relative to its container",
      "To add a shadow to an element",
    ],
    answer: 0,
  },
  {
    question: "What is the correct JavaScript syntax for creating a function?",
    options: [
      "function = myFunction() {}",
      "function myFunction() {}",
      "myFunction() = function() {}",
      "myFunction() {}",
    ],
    answer: 1,
  },
  {
    question: "What is the purpose of the HTML 'p' tag?",
    options: [
      "To create a hyperlink",
      "To define a paragraph",
      "To group content for styling",
      "To add a line break",
    ],
    answer: 1,
  },
  {
    question:
      "Which CSS property is used to change the background color of an element?",
    options: ["background-color", "color", "font-size", "text-align"],
    answer: 0,
  },
  {
    question:
      "What is the result of the following JavaScript expression: '5' * 2?",
    options: ["7", "52", "10", "NaN"],
    answer: 2,
  },
  {
    question: "What is the purpose of the CSS 'text-decoration' property?",
    options: [
      "To change the text color",
      "To control the spacing between lines of text",
      "To underline or strike through text",
      "To change the font style",
    ],
    answer: 2,
  },
  {
    question:
      "What is the result of the following JavaScript expression: 10 / 3?",
    options: ["3.33", "3", "0.3", "4"],
    answer: 0,
  },
  {
    question: "What is the purpose of the HTML 'span' tag?",
    options: [
      "To create a hyperlink",
      "To define a paragraph",
      "To group content for styling",
      "To add inline styling",
    ],
    answer: 3,
  },
  {
    question:
      "Which CSS property is used to control the size of an element's font?",
    options: ["font-size", "color", "text-align", "font-weight"],
    answer: 0,
  },
  {
    question:
      "What is the result of the following JavaScript expression: '5' == 5?",
    options: ["true", "false", "NaN", "undefined"],
    answer: 0,
  },
  {
    question: "What is the purpose of the HTML 'br' tag?",
    options: [
      "To create a hyperlink",
      "To define a paragraph",
      "To group content for styling",
      "To add a line break",
    ],
    answer: 3,
  },
  {
    question:
      "Which CSS property is used to control the alignment of text within an element?",
    options: ["font-size", "color", "text-align", "font-weight"],
    answer: 2,
  },
  {
    question:
      "What is the result of the following JavaScript expression: 5 >= 3 || 2 <= 4?",
    options: ["true", "false", "NaN", "undefined"],
    answer: 0,
  },
  {
    question: "What is the purpose of the HTML 'ol' element?",
    options: [
      "To define an ordered list",
      "To define an unordered list",
      "To create a table",
      "To add a line break",
    ],
    answer: 0,
  },
  {
    question:
      "Which CSS property is used to control the visibility of an element?",
    options: ["display", "background-color", "opacity", "position"],
    answer: 0,
  },
  {
    question:
      "What is the correct JavaScript syntax for adding an element to the beginning of an array?",
    options: [
      "array.unshift(element)",
      "array.push(element)",
      "array.shift(element)",
      "array.pop(element)",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of the CSS 'border-radius' property?",
    options: [
      "To add a border to an element",
      "To control the spacing between lines of text",
      "To change the font style",
      "To round the corners of an element",
    ],
    answer: 3,
  },
];

function startQuiz() {
  const popup = document.getElementById("popup");
  const quizContainer = document.getElementById("quiz-container");
  popup.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  loadQuestion();
}

let currentQuestion = 0;
let score = 0;
let timer;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const resultElement = document.getElementById("result");

  const question = quizData[currentQuestion].question;
  const options = quizData[currentQuestion].options;

  questionElement.textContent = question;

  optionsContainer.innerHTML = "";
  resultElement.textContent = "";

  for (let i = 0; i < options.length; i++) {
    const optionButton = document.createElement("button");
    optionButton.classList.add("option");
    optionButton.textContent = options[i];
    optionButton.setAttribute("onclick", "checkAnswer(this)");
    optionsContainer.appendChild(optionButton);
  }

  startTimer();
  updateProgress();
}

function checkAnswer(selectedOption) {
  clearTimeout(timer);

  const answer = quizData[currentQuestion].answer;
  const selectedAnswer = Array.from(selectedOption.parentNode.children).indexOf(
    selectedOption
  );

  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");

  if (selectedAnswer === answer) {
    selectedOption.classList.add("correct");
    resultElement.textContent = "Correct!";
    score++;
    scoreElement.textContent = score;
  } else {
    selectedOption.classList.add("wrong");
    resultElement.textContent = "Wrong!";
  }

  const options = document.getElementsByClassName("option");
  for (let option of options) {
    option.disabled = true;
    if (Array.from(option.parentNode.children).indexOf(option) === answer) {
      option.classList.add("correct");
    }
  }

  document.getElementById("next-btn").disabled = false;
}

function skipQuestion() {
  clearTimeout(timer);
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2 class="result">Quiz Completed</h2>
                               <p class="final-score">Your Final Score: ${score}</p>`;
  }
}

function nextQuestion() {
  clearTimeout(timer);
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2 class="result">Quiz Completed</h2>
                               <p class="final-score">Your Final Score: ${score}</p>`;
  }
}

function updateProgress() {
  const progressElement = document.getElementById("progress-bar");
  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  progressElement.style.width = `${progress}%`;

  const progressText = document.getElementById("progress");
  progressText.textContent = `Question ${currentQuestion + 1} of ${
    quizData.length
  }`;

  const completedText = document.getElementById("completed");
  completedText.textContent = `Completed: ${currentQuestion} / ${quizData.length}`;
}

function startTimer() {
  const timerElement = document.getElementById("timer");
  let width = 100;
  let timeLeft = 30;

  timer = setInterval(() => {
    if (timeLeft === 0) {
      clearTimeout(timer);
      checkAnswer(null);
      return;
    }

    timeLeft--;
    width = (timeLeft / 30) * 100;
    timerElement.style.width = `${width}%`;
  }, 1000);
}

loadQuestion();
updateProgress();
