//Set results at zero at the beginning of the quiz
let results = 0;

//Only runs function when page is ready
$(document).ready(function(){

//Ammends 'Correct!' to the answer and adds a point to results score
$('.true').one('click', function() {
    this.append(' (Correct!)');
    results ++;
});

//Prints alternative message when incorrect answer is selected
$('.false').click(function(){
    this.append(' (Sorry, that is not correct!)');
});

//Fades out other possible quiz answers when one has been selected 
$('li').click(function(){
    $(this).siblings().fadeOut('500');
});

//Adds an extra point for the bonus question
$('.true.bonus').click(function(){
    this.append(' (Bonus point, well done!)');
    results ++
});

// Prints the results under the submit button
$('#submit-button').one('click', function(){
    console.log('Your score is: ' + results);
    $('#results').append('Your score is: ' + results + '/7 points');
});


//Refreshes the page so the user can start again
$('#refresh-button').click(function(){
    location.href=location.href;
});

});

// Source for guidance: https://stackoverflow.com/questions/29022829/increment-score-using-javascript