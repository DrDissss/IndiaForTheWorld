const quiz = [
    {
        question: "Which Indian athlete is known as the Flying Sikh?",
        ans1text: "Milkha Singh",
        ans2text: " P. T. Usha",
        ans3text: "Neeraj Chopra",
        ans4text: "Abhinav Bindra",
        answer: "Milkha Singh",
    },
    {
        question: "In which year did India win its first Cricket World Cup",
        ans1text: "1979",
        ans2text: "1983",
        ans3text: "1987",
        ans4text: "1996",
        answer: "1983",
    },
    {
        question: "Who became the first Indian woman to win an Olympic silver medal?",
        ans1text: " P. V. Sindhu",
        ans2text: "Saina Nehwal",
        ans3text: "Mary Kom",
        ans4text: " Karnam Malleswari",
        answer: " P. V. Sindhu",
    },
    {
        question: "Who holds the record for the most gold medals in Olympic history??",
        ans1text: "Usain Bolt",
        ans2text: " Carl Lewis",
        ans3text: "Michael Phelps",
        ans4text: "Mark Spitz",
        answer: "Michael Phelps",

    }
]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option-a");
const option_b = document.getElementById("text_option-b");
const option_c = document.getElementById("text_option-c");
const option_d = document.getElementById("text_option-d");
const answerElement = document.querySelectorAll(".answer")

console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

console.log("answer element", answerElement);

submit.addEventListener("click" , () => {
   const checkedAns = document.querySelector('input[type="radio"]:checked')
   console.log(checkedAns);

   if( checkedAns == null ){
      alert("Please select an option");
   }else{
      if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
        score++;
      }
      
      currentQuestion++;
      if( currentQuestion < quiz.length){
        question.textContent = quiz[currentQuestion].question;
        question.textContent = quiz[currentQuestion].question;
        option_a.textContent = quiz[currentQuestion].ans1text;
        option_b.textContent = quiz[currentQuestion].ans2text;
        option_c.textContent = quiz[currentQuestion].ans3text;
        option_d.textContent = quiz[currentQuestion].ans4text;
        checkedAns.checked = false;
      }else{
        alert("Your score is " + score + "out of " + quiz.length);
        location.reload();
      }
   }

});







