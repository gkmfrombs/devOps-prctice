let allQuestions = [];
let questions = [];
let current = 0;
let score = 0;
let timer;
let timeLeft = 30;
let userAnswers = [];

// Load JSON
fetch('./questions.json')
    .then(res => res.json())
    .then(data => {
        allQuestions = data;
    });

function startQuiz(){
    let difficulty = document.getElementById("difficulty").value;

    if(difficulty === "all"){
        questions = allQuestions;
    } else {
        questions = allQuestions.filter(q => q.difficulty === difficulty);
    }

    if(questions.length === 0){
        alert("No questions found!");
        return;
    }

    document.querySelector(".controls").classList.add("hidden");
    document.getElementById("quizBox").classList.remove("hidden");

    loadQuestion();
}

function shuffle(arr){
    return arr.sort(()=>Math.random()-0.5);
}

function generateOptions(correct){
    let wrong = [];

    while(wrong.length < 3){
        let rand = allQuestions[Math.floor(Math.random()*allQuestions.length)].answer;
        if(rand !== correct && !wrong.includes(rand)){
            wrong.push(rand);
        }
    }

    return shuffle([correct, ...wrong]);
}

function loadQuestion(){
    clearInterval(timer);
    timeLeft = 30;

    timer = setInterval(()=>{
        timeLeft--;
        document.getElementById("timer").innerText = "⏱️ " + timeLeft;
        if(timeLeft <= 0){
            nextQuestion();
        }
    },1000);

    let q = questions[current];
    document.getElementById("question").innerText = q.question;

    let options = generateOptions(q.answer);

    let html="";
    options.forEach(opt=>{
        html += `<button class="option-btn" onclick="checkAnswer(this, '${opt}')">${opt}</button>`;
    });

    document.getElementById("options").innerHTML = html;
    document.getElementById("result").innerText = "";

    // Restore previous answer
    if(userAnswers[current]){
        showAnswer(userAnswers[current], true);
    }
}

function checkAnswer(button, selected){
    if(userAnswers[current]) return; // prevent re-answer

    userAnswers[current] = selected;
    showAnswer(selected, false);
}

function showAnswer(selected, isReview){
    let correct = questions[current].answer;
    let buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(btn=>{
        btn.classList.add("disabled");

        if(btn.innerText === correct){
            btn.classList.add("correct");
        }

        if(btn.innerText === selected && selected !== correct){
            btn.classList.add("wrong");
        }
    });

    // Only count score first time
    if(!isReview){
        if(selected === correct){
            score++;
            document.getElementById("result").innerText = "✅ Correct";
        } else {
            document.getElementById("result").innerText = "❌ Correct: " + correct;
        }
        document.getElementById("score").innerText = "Score: " + score;
    }
}

function nextQuestion(){
    current++;
    if(current >= questions.length){
        endQuiz();
        return;
    }
    loadQuestion();
}

function prevQuestion(){
    if(current > 0){
        current--;
        loadQuestion();
    }
}

function endQuiz(){
    clearInterval(timer);
    document.getElementById("quizBox").classList.add("hidden");
    document.getElementById("endScreen").classList.remove("hidden");
    document.getElementById("finalScore").innerText =
        "Final Score: " + score + "/" + questions.length;
}