let level1;

function initLevel1() {
    level1 = new Level(

        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new SmallChicken(),
            new SmallChicken(),
            new SmallChicken(),
        ],
        [
            new Endboss()  
        ],
        [
            new Cloud('img/5_background/layers/4_clouds/1.png', 100),
            new Cloud('img/5_background/layers/4_clouds/2.png', 500),
            new Cloud('img/5_background/layers/4_clouds/1.png', 900),
            new Cloud('img/5_background/layers/4_clouds/2.png', 1300),
            new Cloud('img/5_background/layers/4_clouds/1.png', 1700),
            new Cloud('img/5_background/layers/4_clouds/2.png', 2100),
            new Cloud('img/5_background/layers/4_clouds/1.png', 2500),
            new Cloud('img/5_background/layers/4_clouds/2.png', 2900),
            new Cloud('img/5_background/layers/4_clouds/1.png', 3400),
            new Cloud('img/5_background/layers/4_clouds/2.png', 3800)
        ],
        [
            new BackgroundObject('img/5_background/layers/air.png', -719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

            new BackgroundObject('img/5_background/layers/air.png', 719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),
            
            new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 4),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 5),
        ],
        [
            new Coin('img/8_coin/coin_1.png'),
            new Coin('img/8_coin/coin_1.png'),
            new Coin('img/8_coin/coin_1.png'),
            new Coin('img/8_coin/coin_1.png'),
            new Coin('img/8_coin/coin_1.png'),
            new Coin('img/8_coin/coin_1.png')
        ],
        [
            new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
            new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
            new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
            new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
            new Bottle('img/6_salsa_bottle/salsa_bottle.png'),
            new Bottle('img/6_salsa_bottle/salsa_bottle.png')
        ],
        [
            new Heart('img/7_statusbars/3_icons/icon_health.png'),
            new Heart('img/7_statusbars/3_icons/icon_health.png'),
            new Heart('img/7_statusbars/3_icons/icon_health.png')
        ],
    );
}