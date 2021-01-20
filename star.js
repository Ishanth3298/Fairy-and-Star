class Star {
    constructer(x,y,width,height) {
        this.body = Bodies.rectangle(x,y,width,height);
        this.height = height;
        this.width = width;
        this.image.addImage("star.png");
        World.add(world, this.body);
    }
    display() {
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    }
}