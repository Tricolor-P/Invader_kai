//魔法クラスとテーブル
magicTable = {
	Fireball: {image: 'img/fireBall.png', at:1, de:1, castTime:2.0, effectTime:2.0, btnFrame:0},
	Waterball: {image: 'img/fireBall.png', at:1, de:1, castTime:2.0, effectTime:4.0, btnFrame:1}
};

Magic = enchant.Class.create(enchant.Sprite, {
	initialize: function(x, y, magicName){
		enchant.Sprite.call(this, 120, 120);
		this.image = core.assets['img/'+magicName+'.png'];
		this.frame = 0;
		this.x = x;
		this.y = y;
		//フレーム数をカウントするプロパティの追加
		this.tick = 0;
		//プレイヤーステータスの追加
		this.at = 100;
		this.df = 100;
		this.castTime = 2.0; //秒
		this.effectTime = 2.0; //秒
		this.endIs = false;
		
		//プレイヤーのポジション変更
		this.setPos = function(x, y){
			this.x = x;
			this.y = y;
		};
		
		//「enterframe」のイベントリスナーの追加
		this.addEventListener('enterframe', function(e){
			this.frame = this.tick ;
			this.tick ++;
			if(this.tick==10) this.endIs = true;
		});
	}
});

FireBall = function(){
	
	
};
