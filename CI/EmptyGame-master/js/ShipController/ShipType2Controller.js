class ShipType2Controller extends ShipController{
  constructor(x, y, configs){
    super(x, y, `Spaceship2${configs.spriteSuffix}.png`, Object.assign(
      configs, {
        cooldown : 0.5,
        speed    : 300
      }
    ));
    this.isShootingLeft = true;
    this.bullets = [];
  }

  update(){
    super.update();
    for(var bullet of this.bullets){
      if(bullet.sprite.alive){
        bullet.update();
      }
    }
  }

  fire(){
    // var direction = this.isShootingLeft ? -1 : 1;
    //
    // if(this.isShootingLeft){
    //   var direction = -1;
    // }
    // else{
    //   var direction = 1;
    // }

    this.bullets.push(
      this.createBullet(new Phaser.Point(this.isShootingLeft ? -1 : 1, 0))
    );
    this.isShootingLeft = !this.isShootingLeft;
  }

  createBullet(direction){
    return new BulletType2Controller(
      this.sprite.position.x,
      this.sprite.position.y,
      {
        direction: direction
      }
    );
  }
}
