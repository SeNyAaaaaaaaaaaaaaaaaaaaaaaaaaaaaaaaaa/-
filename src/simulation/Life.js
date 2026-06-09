class Life extends Entity {
    constructor(options) {
        super(this.id, this.x, this,y)

        this.genom = options.genom

        this.age = options.age
        this.maxAge = options.maxAge

        this.energy = options.energy
        this.maxEnergy = options.maxEnergy

        this.alive = options.alive

        this.moveDirectionX = options.moveDirectionX
        this.moveDirectionY = options.moveDirectionY

        this.state = options.state
    }

    update() {}
    draw() {}
    move() {}
    searchFood() {}
    eat() {}
    reproduce() {}
    die() {}
}