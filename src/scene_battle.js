//ホームシーンの描画

Battle = function(){
	var battle = new Scene();
	//タイトルシーンの削除
	battle.backgroundColor = "#000000";
	
	//タイトルについての記述ここから	
	battleLabel = new Label('ここはバトルシーンです');
	battleLabel.x = core.width/2 - 20*5;
	battleLabel.y = core.height/2 - 20/2;
	battleLabel.color = '#FFFF00';
	battleLabel.font = '20px sens-serif';
	battleLabel.addEventListener('enterframe', function(e){
	});
	battle.addChild(battleLabel);
	//タイトルについての記述ここまで
	
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