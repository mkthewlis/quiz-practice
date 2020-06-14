//Set results at zero at the beginning of the quiz
let results = 0;

//Only runs function when page is ready
$(document).ready(function(){

//Prints 'Correct' to the console when clicked
$('.true').click(function() {
    console.log('Correct!');
    this.append(' (Correct!)');
    results ++;
});

//Prints alternative message to the console when clicked
$('.false').click(function(){
    console.log('Sorry, that is not correct!');
    this.append(' (Sorry, that is not correct!)');
});

//Adds an extra point for the bonus question
$('.true.bonus').click(function(){
    console.log('Bonus point, well done!');
    this.append(' (Bonus point, well done!)');
    results ++
});

// Prints the results under the submit button
$('#submit-button').click(function(){
    console.log('Your score is: ' + results);
    $('#results').append('Your score is: ' + results + '/7 points');
});

});

// Source for guidance: https://stackoverflow.com/questions/29022829/increment-score-using-javascript