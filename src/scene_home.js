//ホームシーンの描画


Home = function(){
	var home = new Scene();
	home.backgroundColor = "#000000";
	
	//ホームラベルについての記述ここから	
	homeLabel = new Label('ここはホームシーンです');
	homeLabel.x = core.width/2 - 20*5;
	homeLabel.y = core.height/2 - 20/2;
	homeLabel.color = '#FF0000';
	homeLabel.font = '20px sens-serif';
	homeLabel.addEventListener('enterframe', function(e){
	});
	home.addChild(homeLabel);
	//ホームラベルについての記述ここまで
	
	//出撃ボタンについてここから
	var battleButton = new Sprite(90, 90);
	battleButton.image = core.assets['img/home_battleButton.png'];
	battleButton.x = core.width/3  - battleButton.width/2;
	battleButton.y = core.height/2 - battleButton.height/2;
	home.addChild(battleButton);
	//出撃ボタンついてここまで
	
	home.addEventListener('enterframe', function(e){
		if(core.input.right){
			core.pushScene(core.battleScene());
		}
		if(core.input.left) {
			core.popScene();
		}
	});
	return home;
};