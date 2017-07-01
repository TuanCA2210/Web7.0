class BulletType1Controller extends BulletController{
  constructor(x, y, configs){
    super(x, y, 'BulletType1.png', Object.assign(configs, {speed: 1500}));
  }
}
