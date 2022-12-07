class Level {

    enemies;
    endboss;
    clouds;
    backgroundObjects; 
    coins;
    bottles;
    hearts;
    level_end_x = 3000;

    constructor(enemies, endboss, clouds, bottles, backgroundObjects, coins, bottles, hearts) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
        this.hearts = hearts;
    }


    // enemies;
    // clouds;
    // backgroundObjects; 
    // coins;
    // bottles;
    // // hearts;
    // level_end_x = 3000;

    // constructor(enemies, clouds, bottles, backgroundObjects, coins,) {
    //     this.enemies = enemies;
    //     this.clouds = clouds;
    //     this.backgroundObjects = backgroundObjects;
    //     this.coins = coins;
    //     this.bottles = bottles;
    //     // this.hearts = hearts;
    // }
}