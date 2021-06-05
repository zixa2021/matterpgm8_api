class Bird extends Baseclass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.image = loadImage("img/bird.png");
        this.smokeImage = loadImage("img/smoke.png");
        this.trail =[];
     }
     display() {
        super.display();
        
        var pos = this.body.position;
       if( pos.x>150 && this.body.velocity.x>9){
        var array1 = [pos.x, pos.y];
        this.trail.push(array1);
      }
    
        for(var i=0; i<this.trail.length; i++){
          image(this.smokeImage, this.trail[i][0], this.trail[i][1],15,15);
        }
     }
}