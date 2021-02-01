class Ground {
    constructor(x,y,width,height){
        var option  = {
            density : 1.2,
            isStatic : true
        }

        this.ground = Bodies.rectangle(x,y,width,height,option)
        this.w = width
        this.h = height
        World.add(world, this.ground)
    }

    display(){
        var pos = this.ground.position
        rectMode(CENTER)
        fill("grey")
        rect(pos.x,pos.y,this.w,this.h)
    }
}