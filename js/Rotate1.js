AFRAME.registerComponent("map-rotation-reader",{
    schema:{
     speedOfRotation : {type: "number",default: 0}
    } ,
    init:function(){
      window.addEventListener("keydown",(e)=>{
         if(e.key === "ArrowRight"){
            if(this.data.speedOfRotation<0.1){
                this.data.speedOfRotation += 0.01 
            }
        }
        if(e.key === "ArrowLeft"){
            if(this.data.speedOfRotation>-0.1){
                this.data.speedOfRotation -= 0.01
            }
        }  
      })  
    },
    tick:function(){
      var mapRotation = this.el.getAttribute("rotation")
      
      mapRotation.y += this.data.speedOfRotation
      this.el.setAttribute("rotation",{x:mapRotation.x,y:mapRotation.y,z:mapRotation.z})  
    }
 })
 
 AFRAME.registerComponent("car-rotation-reader",{
     schema:{
         speedOfRotation:{type: "number",default:0},
     },
     init:function(){
      window.addEventListener("keydown",(e)=>{
          this.data.speedOfRotation = this.el.getAttribute("rotation")
          this.data.carMovesInZ = this.el.getAttribute("position")  

          var carRotation  = this.data.speedOfRotation
          var carPosition  = this.data.carMovesInZ  
          var cameraPosition = document.querySelector("#camera")
          cameraPosition.setAttribute("position") 

          if(e.key === "ArrowRight"){
             if(carRotation.x<10){
               carRotation.x += 0.5
               this.el.setAttribute("rotation",carRotation)
             }
          }
          if(e.key === "ArrowLeft"){
             if(carRotation.x<-10){
               carRotation.x -= -0.5
               this.el.setAttribute("rotation",carRotation)
             }
          }
          if(e.key === "ArrowUp"){
             if(carPosition.z<20 ){
               carPosition.z -= 0.5
               cameraPosition.z -= 0.5
               this.el.setAttribute("position",carPosition)
             }
          }
          if(e.key === "ArrowDown"){
              if(carPosition.z>-10 ){
               carPosition.z += 0.5
               cameraPosition.z += -0.5
               this.el.setAttribute("position",carPosition)
         }
      }
     })   
     }
 })