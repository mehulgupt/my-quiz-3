class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

   async  start(){
    if(gameState === 0)
      contestant = new Contestant();
      var contestantCountref= await database.ref('contestantCount').once("value");
       if(contestantCountref.exist()){
      contestantCount = contestantCountRef.val();
      contestant.getCount();
       }
      question = new Question()
      question.display();
    
  }

  play(){
    question.hide();
    background("Yellow");
    fill(brown);
    textSize(30);
    text("Result of the Quiz",340, 50);
    text("----------------------------",320, 65);
    Contestant.getPlayerInfo();
    
    if( allContestants !== undefined ){
      debugger;
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("Note:Contestant who answered correct are highlighte in green colour",130,230)
      for(var prl in allContestants){
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");

        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
    } 
  }  
}