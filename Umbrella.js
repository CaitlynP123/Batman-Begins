class Umbrella{
    constructor(x,y,r){
        var option = {
            isStatic : true,
            density : 1.2,
       }

        this.umbrella = Bodies.circle(x,y,r,option)
        this.r = r
        World.add(world, this.umbrella)

        this.boyImg = loadAnimation("proc41images/images/Walking Frame/walking_1.png",
        "proc41images/images/Walking Frame/walking_2.png","proc41images/images/Walking Frame/walking_3.png",
        "proc41images/images/Walking Frame/walking_4.png","proc41images/images/Walking Frame/walking_5.png",
        "proc41images/images/Walking Frame/walking_6.png","proc41images/images/Walking Frame/walking_7.png")
}

    display(){
        var pos = this.umbrella.position

        var boy = createSprite(400,500)
        boy.addAnimation("walking", this.boyImg)
        boy.scale = 0.5

        fill("black")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.r,this.r)
   
    }

}