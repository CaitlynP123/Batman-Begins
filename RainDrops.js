class RainDrops{
    constructor(x,y){
        var option = {
            restitution : 1,
            friction : 0.01,
            isStatic : false
        }

        this.drops = Bodies.circle(x,y,5,option)
        this.r = 5
        World.add(world, this.drops)
    }    
    
    display(){
    var pos = this.drops.position
    fill("blue")
    ellipseMode(CENTER)
    ellipse(pos.x,pos.y,this.r,this.r)
}
    update(){
        if(this.drops.position.y>660){
            Matter.Body.setPosition(this.drops,{x:Math.round(random(0,800)), y:0})
        }
    }
}