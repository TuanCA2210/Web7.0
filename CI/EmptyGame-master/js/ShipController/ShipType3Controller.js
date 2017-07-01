class ShipType3Controller extends ShipController {
  constructor(x, y, configs) {
    configs.cooldown = 0.2;
    configs.speed = 500;
    super(x, y, 'Spaceship1-Player.png', configs);
  }
  fire(){
    this.createBullet(new Phaser.Point(0,0));
    this.createBullet(new Phaser.Point(0,0));
  }

  createBullet(direction){
    new BulletController(
      this.sprite.position.x,
      this.sprite.position.y,
      'BulletType3.png',
      {
        direction: direction
      }
    );
  }
}
