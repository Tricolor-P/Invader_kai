//プライヤーークラスの作成
Player = enchant.Class.create(enchant.Sprite, {
	initialize: function(x, y, charaName){
		enchant.Sprite.call(this, 32, 32);
		this.image = core.assets['img/'+charaName];
		this.frame = 6;
		this.x = x;
		this.y = y;
		//フレーム数をカウントするプロパティの追加
		this.tick = 0;
		//プレイヤーステータスの追加
		this.hp = 100;
		this.mp = 100;
		this.at = 10;
		this.df = 10;
		this.numSlots = 2;

		//プレイヤーのポジション変更
		this.setPos = function(x, y){
			this.x = x;
			this.y = y;
		};
		
		//「enterframe」のイベントリスナーの追加
		this.addEventListener('enterframe', function(e){
			if(this.y < 48 - this.height/2) this.y = 48 - this.height/2;
			if(this.y > core.height - 48 - this.height/2) this.y = core.height - 48 - this.height/2;
			if(core.input.left){
				this.x -= 4;
				//スプライトのフレーム番号を切り替えて、アニメーションを表示する
				this.frame = this.tick % 4 + 1*4;
				//フレーム数をインクリメント
				this.tick++;
			}
			if(core.input.right){
				this.x += 4;
				this.frame = this.tick % 4 + 2*4;
				this.tick++;
			} 
			if(core.input.up){
				this.y -= 4;
				this.frame = this.tick % 4 + 3*4;
				this.tick++;	
			}
			if(core.input.down){
				this.y += 4;
				this.frame = this.tick % 4 + 0*4;
				this.tick++;
			}
		});
		//「touchmove」のイベントリスナーの追加
		this.addEventListener('touchmove', function(e){
			//this.x = e.x - this.width/2;
			this.y = e.y - this.height/2;
		});
	}
});