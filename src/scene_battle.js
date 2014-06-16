//ホームシーンの描画

Battle = function(){
	var battle = new Scene();
	//タイトルシーンの削除
	battle.backgroundColor = "#000000";
	
	//タイトルについての記述ここから	
	var battleLabel = new Label('ここはバトルシーンです');
	battleLabel.x = core.width/2 - 20*5;
	battleLabel.y = core.height/2 - 20/2;
	battleLabel.color = '#FFFF00';
	battleLabel.font = '20px sens-serif';
	battleLabel.addEventListener('enterframe', function(e){
	});
	battle.addChild(battleLabel);
	//タイトルについての記述ここまで
	
	//テストボタン配置
	var testBtns = [];
	for(var i = 0; i<15; i++){
		var testBtn = new Sprite(32, 32);
		testBtn.image = core.assets['img/battle_testBtn.png'];
		testBtn.x = i*testBtn.width;
		testBtn.y = 238;
		battle.addChild(testBtn);
		testBtns[i] = testBtn;
	}
	
	
	battle.addEventListener('enterframe', function(e){
		if(core.input.left) {
			core.popScene();
		}
		if(core.input.right){
			core.replaceScene(core.resultScene());
		}
	});
	return battle;
};