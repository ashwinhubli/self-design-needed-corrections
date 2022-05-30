AFRAME.registerComponent("game-play",{
schema:{
 elementId:{type:"string",default:"#coin1"}   
},
update:function(){
 this.isCollided(this.data.elementId)   
},
init:function(){
 
},
 gameOver:function(){
  var carE1 = document.querySelector("#car_model")
  var element = document.querySelector("#game_over_text")
  element.setAttribute("visible",false)
  carE1.setAttribute("dynamic-body",{
   mass: 1   
  })  
 },
 isCollided:function(elementId){
  const element = document.querySelector(elementId);
  element.addEventListener("collide",(e)=>{
  if(elementId.includes("#coin1")){
      element.setAttribute("visible",false);
      this.updateScore();
      this.updateCoins();
    }
  else{this.gameOver();};  
  });
 },
 updateScore:function(){
   const element=document.querySelector("#score");
   var count=element.getAttribute("text").value;
   let currentScore = parseInt(count);
   currentScore+=50;
   element.setAttribute("text",{value:currentScore});
 },
 updateCoins:function(){
  const element=document.querySelector("#coin1");
  var count=element.getAttribute("text").value;
  let currentCoins = parseInt(count);
  currentCoins+=1;
  element.setAttribute("text",{value:currentCoins});
},
})