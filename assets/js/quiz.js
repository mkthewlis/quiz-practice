let oneA = document.getElementById('one-a');

var correct = document.getElementsByClassName('true');
var incorrect = document.getElementsByClassName('false');

incorrect.onclick = function(){
    console.log('Incorrect');
};

correct.addEventListener = function(){
    console.log('Correct');
};

oneA.onclick = function(){
    console.log('Hello');
};

/*let quizSection = document.getElementById('quiz-practice');
let resultsSection = document.getElementById('results');
let submitButton = document.getElementById('submit-button');*/