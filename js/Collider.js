AFRAME.registerComponent("ObjectsInWay",{
 init:function(){
    for(i =1;i<=20;i++){
        var id = `hurdle${i}`;
        var posx = (Math.random()*3000+ -1000)  
        var posz = (Math.random()*3000+ -1000)  
        var position = {x:posx,y:0.5,z:posz}
        
        this.BushesInWay(id,position)
      } 
 },
 BushesInWay:(id,position)=>{
    var map1 = document.querySelector("#map");    
    var bush1 = document.createElement("a-entity");
    bush1.setAttribute("id",id);
    bush1.setAttribute("position",position);
    bush1.setAttribute("scale",{x:1,y:1,z:1});
    bush1.setAttribute("static-body",{shape:"sphere",sphereRadius:3.75})

    bush1.setAttribute(
     "gltf-model",
     "./assets/bush/scene.gltf"
    );  

    bush1.setAttribute("animation-mixer",{});
    bush1.setAttribute("game-play",{elementId:`#${id}`})

    map1.appendChild(bush1);
}     
})