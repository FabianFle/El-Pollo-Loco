class Level {

    enemies;
    // smallEnemies;
    clouds;
    // coins;
    // bottles;
    // hearts;
    backgroundObjects; 
    level_end_x = 2200;

    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        // this.smallEnemies = smallEnemies;
        this.clouds = clouds;
        // this.coins = coins;
        // this.bottles = bottles;
        // this.hearts = hearts;
        this.backgroundObjects = backgroundObjects;
    }
}