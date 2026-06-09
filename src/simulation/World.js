class World {
    constructor(options) {
        this.width = options.width
        this.height = options.height

        this.creatures = options.creatures
        this.biomass = options.biomass

        this.tick = options.tick
    }
    update() {}
    
    spawnBiomass() {}

    addCreature() {}
    removeCreature() {}

    addBiomass() {}
    removeBiomass() {}
}