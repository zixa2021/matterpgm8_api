class Ground{
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        this.width = width ;
        this.height = height;
     }

     display(){
         var position = this.body.position
         rectMode(CENTER);
         fill("lightgreen");
         rect(position.x,position.y,this.width,this.height);
     }
}