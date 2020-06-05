class Log{
    constructor(x, y, width, height)
    {
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png");
        World.add(world, this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
};


/*class Bin{
    constructor(x, y, width, height)
    {
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png");
        World.add(world, this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
};*/
