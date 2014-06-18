//ホームシーンの描画


Home = function(){
	var home = new Scene();
	home.backgroundColor = "#000000";
	
	//ホームラベルについての記述ここから	
	var homeLabel = new Label('ここはホームシーンです');
	homeLabel.x = core.width/2 - 20*5;
	homeLabel.y = core.height/2 - 20/2;
	homeLabel.color = '#FF0000';
	homeLabel.font = '20px sens-serif';
	homeLabel.addEventListener('enterframe', function(e){
	});
	home.addChild(homeLabel);
	//ホームラベルについての記述ここまで
	
	//出撃ボタンについてここから
	var enterBattleBtn = new Sprite(90, 90);
	enterBattleBtn.image = core.assets['img/home_enterBattleBtn.png'];
	enterBattleBtn.x = core.width/3  - enterBattleBtn.width/2;
	enterBattleBtn.y = core.height/2 - enterBattleBtn.height/2;
	enterBattleBtn.touchFlg = false;
	home.addChild(enterBattleBtn);
	enterBattleBtn.addEventListener('touchend', function(e){
		console.log('touch enterBattleBtn');
		if(!enterEquipBtn.touchFlg){
			this.touchFlg = true;
			core.seEnterBattle.play();
		}
		//core.pushScene(core.battleScene());
	});
	//出撃ボタンついてここまで
	
	//enterEqipボタンについて
	var enterEquipBtn = new Sprite(90, 90);
	enterEquipBtn.image = core.assets['img/home_enterEquipBtn.png'];
	enterEquipBtn.x = core.width* 2/3 - enterEquipBtn.width/2;
	enterEquipBtn.y = core.height/2 - enterEquipBtn.height/2;
	enterEquipBtn.touchFlg = false;
	home.addChild(enterEquipBtn);
	enterEquipBtn.addEventListener('touchend', function(e){
		console.log('touch enterEquiBtn');
		if(!enterBattleBtn.touchFlg){
			core.seTrueBtn.play();
			this.touchFlg = true;
		}
	});
	//enterEquipボタンについてここまで


	home.addEventListener('enterframe', function(e){
		//console.log(core.seTrueBtn.currentTime);
		if(core.seEnterBattle.currentTime==core.seEnterBattle.mp3Duration && enterBattleBtn.touchFlg){
			enterBattleBtn.touchFlg = false;
			core.pushScene(core.battleScene());
		}
		if(core.seTrueBtn.currentTime==core.seTrueBtn.mp3Duration && enterEquipBtn.touchFlg){
			enterEquipBtn.touchFlg = false;
			core.pushScene(core.equipScene());
		}
		if(core.input.b) {
			core.popScene();
		}
	});
	return home;
};