class Statistic {
    constructor(options) {
        this.population = options.population

        this.averageSpeed = options.averageSpeed
        this.averageSize = options.averageSize

        this.averageAge = options.averageAge

        this.births = options.births
        this.deaths = options.deaths
    }
    update(world) {} // Получать актуальную ифнормацию о мире
}