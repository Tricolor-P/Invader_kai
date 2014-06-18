enchant();

window.onload = function(){
	core = new Core(480, 270);
	//ゲームの初期化処理
	
	core.fps = 16;
	
	//画像のプリロード
	core.preload('img/home_enterBattleBtn.png');
	core.preload('img/home_enterEquipBtn.png');
	core.preload('img/battle_testBtn.png');
	core.preload('img/Actor10.png');
	//SEのプリロード
	core.preload('se/enterBattle.mp3');
	core.preload('se/trueBtn.mp3');
	
	//SEのロード
	//mp3の場合はmp3Durationを再生してみて手動設定のこと
	core.seEnterBattle = Sound.load('se/enterBattle.mp3');
	core.seEnterBattle.mp3Duration = 1.224;
	core.seTrueBtn = Sound.load('se/trueBtn.mp3');
	core.seTrueBtn.mp3Duration = 1.22775;
	
	core.onload = function(){
		//ゲーム開始
		
		var rootSceneLabel = new Label('ここはルートシーンです');
		rootSceneLabel.x = core.width/2 - 20*10/2;
		rootSceneLabel.y = core.height/2 - 20/2;
		rootSceneLabel.color = '#FFFFFF';
		rootSceneLabel.font = '20px sens-serif';
		core.rootScene.addChild(rootSceneLabel);
		
		core.rootScene.backgroundColor = "#000000";
		
		core.rootScene.addEventListener('enterframe', function(e){
			//if(core.input.right) core.pushScene(core.titleScene(true));
			if(core.input.right) core.pushScene(core.homeScene());
			if(core.input.down) core.end();
		});
	};
	
	//タイトルシーンの追加
	core.titleScene = function(titlePlayingIs){ return Title(titlePlayingIs); };
	//ホームシーンの追加
	core.homeScene = function(){ return Home(); };
	//バトルシーンの追加
	core.battleScene = function(){ return Battle(); };
	//戦果シーンの追加
	core.resultScene = function(){ return Result(); };
	//装備選択シーンの追加
	core.equipScene = function(){ return Equip();};

	
	core.start();
};
