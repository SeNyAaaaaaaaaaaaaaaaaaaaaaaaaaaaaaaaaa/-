class Simulation {
    constructor(options) {
        this.world = options.world

        this.isRunning = options.isRunning
        this.speedMultiplier = options.speedMultiplier
    }

    start() {}
    stop() {}

    update() {} // Текущие параметры симуляции
}