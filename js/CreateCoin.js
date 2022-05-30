AFRAME.registerComponent("target-coins",{
    init:function(){
      for(i =1;i<=20;i++){
        var id = `coin${i}`;
        var posx = (Math.random()*3000+(-1000))  
        var posz = (Math.random()*3000+ -1000)  
        var position = {x:posx,y:0.5,z:posz}
        
        this.createCoins(id,position)
      }
    },
    createCoins:function(id,position){
      var map1 = document.querySelector("#map"); 
  
      var coin1 = document.createElement("a-entity");
      coin1.setAttribute("id",id);
      coin1.setAttribute("position",position);
      coin1.setAttribute(
        "gltf-model",
        "./assets/coin/scene.gltf"
       );  
      coin1.setAttribute("animation-mixer",{});
      coin1.setAttribute("game-play",{elementId:`#${id}`})
      coin1.setAttribute("static-body",{shape:"sphere",sphereRadius:2})
  
      map1.appendChild(coin1);
  }
  
  })