const quizData = [
  {
    question: "What is the capital of India?",
    a: "Mumbai",
    b: "Delhi",
    c: "Kolkata",
    d: "Chennai",
    correct: "b"
  },
  {
    question: "HTML stands for?",
    a: "Hyper Trainer Marking Language",
    b: "Hyper Text Markup Language",
    c: "Hyper Text Marketing Language",
    d: "None",
    correct: "b"
  },
  {
  question: "Which language is used for web apps?",
  a: "PHP",
  b: "Python",
  c: "JavaScript",
  d: "All of the above",
  correct: "d"
},
{
  question: "Which tag is used to define a hyperlink in HTML?",
  a: "<link>",
  b: "<a>",
  c: "<href>",
  d: "<hyperlink>",
  correct: "b"
},
{
  question: "CSS stands for?",
  a: "Cascading Style Sheets",
  b: "Creative Style System",
  c: "Computer Style Sheet",
  d: "Colorful Style Sheet",
  correct: "a"
}
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll("input[name='answer']");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentData = quizData[currentQuiz];
  questionEl.textContent = currentData.question;
  a_text.textContent = currentData.a;
  b_text.textContent = currentData.b;
  c_text.textContent = currentData.c;
  d_text.textContent = currentData.d;
}

function getSelected() {
  let answer = undefined;
  answersEls.forEach((el) => {
    if (el.checked) {
      answer = el.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answersEls.forEach((el) => (el.checked = false));
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} correctly!</h2>
        <button onclick="location.reload()">Restart</button>`;
    }
  }
});
