class Biomass extends Entity {
    constructor(options) {
        super(this.id, this.x, this.y)

        this.nutritionalValue = options.nutritionalValue 
        this.decayTime = options.decayTime 
        this.age = options.age
    }

    update() {}
    draw() {}
    decompose() {}
}