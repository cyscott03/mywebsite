$(document).ready(function() {
  
//OBJECT Magic 8-Ball
var magic8ball = {};

//PROPERTY list of answers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'Yes', 'Reply hazy try again', 'Ask again later', 'Cannot predict not', 'Don't count on it', 'No', 'My reply is no', 'Very doubtful']
magic8ball.listofAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "Yes", "Reply hazy try again", "Ask again later", "Cannot predict not", "Don't count on it", "No", "My reply is no", "Very doubtful"];

//hide image when page loads
$("#answer").hide();  
  
//FUNCTION ask question
//INPUT question
//shake 8-ball
//8-ball picks from list of answers
//OUTPUT answer

magic8ball.askQuestion = function ()
{
	//random number between 0 and 1
	var randomNumber = Math.random();
	//random number based on length of array
	var randomNumberAnswers = randomNumber * this.listofAnswers.length;
	//round number down
	var randomIndex = Math.floor(randomNumberAnswers);     
	var answer = this.listofAnswers[randomIndex];
  
  //Answer Area
  $("#answer").text( answer );
  //fade answer in after hiding
  $("#answer").fadeIn(4000);
  //Swap 8Ball images
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
	
	console.log("What does the future hold?");
	console.log(answer);
  
   
	
};
  
  //hide image when button clicked
  $("#answer").hide();
  
  //Ask Me Anything Button
  var onClick = function() {
    
    var question = prompt ("Ask me anything!");
    magic8ball.askQuestion(question);
     //Delay between image swap
     setTimeout(function() {
    //Swap 8Ball images
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    }, 500);
    $("8ball").effect("shake");
    
    
  };
  
  $("#questionButton").click( onClick);
	
});		
	