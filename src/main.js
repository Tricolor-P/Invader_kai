enchant();

window.onload = function(){
	core = new Core(480, 270);
	//ゲームの初期化処理
	
	core.fps = 16;
	
	core.onload = function(){
		//ゲーム開始
		
		var rootSceneLabel = new Label('ここはルートシーンです');
		rootSceneLabel.x = core.width/2 - 14*10/2;
		rootSceneLabel.y = core.height/2 - rootSceneLabel.height/2;
		rootSceneLabel.color = '#0000FF';
		rootSceneLabel.font = '14px sens-serif';
		core.rootScene.addChild(rootSceneLabel);
		
		core.rootScene.addEventListener('enterframe', function(e){
			if(core.input.up) core.pushScene(core.title);
			if(core.input.down) core.end();
		});
	};
	
	core.title = new Title;

	
	core.start();
};
