var correct = document.getElementsByClassName("true");
var incorrect = document.getElementsByClassName("false");
var result = document.getElementById("submit-button");

let results = 0;

//Prints 'Correct' to the console when clicked
$('.true').click(function() {
    console.log('Correct!');
    this.append(' Correct!');
    results ++;
});

//Prints alternative message to the console when clicked
$('.false').click(function(){
    console.log('Sorry, that is not correct!');
    this.append(' Sorry, that is not correct!');
});

$('.true.bonus').click(function(){
    console.log('Bonus point, well done!');
    results ++
});

$('#submit-button').click(function(){
    console.log('Your score is: ' + results);
});

// Source for guidance: https://stackoverflow.com/questions/29022829/increment-score-using-javascript