var correct = document.getElementsByClassName("true");
var incorrect = document.getElementsByClassName("false");

//Prints 'Correct' to the console when clicked
$('.true').click(function() {
    console.log('Correct!');
});

//Prints alternative message to the console when clicked
$('.false').click(function(){
    console.log('Sorry, that is not correct!');
});

$('.true.bonus').click(function(){
    console.log('Bonus point, well done!');
});