enchant();

window.onload = function(){
	core = new Core(480, 270);
	//ゲームの初期化処理
	core.fps = 16;
	core.keybind(88, 'a');
	core.keybind(90, 'b');
	
	core.characterList= {
		0: {name:'Actor10', lv:1, status:characterTable['Actor10'], slots:{0:0, 1:null, 2:null}},
		1: {name:'Actor10', lv:1, status:characterTable['Actor10'], slots:{0:1, 1:2   , 2:null}}
	};
	core.magicList = {
		0: {name:'FireBall', lv:1, status:magicTable['Fireball']},
		1: {name:'FireBall', lv:1, status:magicTable['Fireball']},
		2: {name:'Waterball', lv:1, status:magicTable['Waterball']}
	};
	
	/*
	//セーブデータ設定
	enchant.nineleap.memory.LocalStorage.DEBUG_MODE = true;
	enchant.nineleap.memory.LocalStorage.GAME_ID = 'magic_shoot';
	core.memory.magic.preload();
	core.memory.character.preload();
	*/
	//画像のプリロード
	core.preload('img/home_enterBattleBtn.png');
	core.preload('img/home_enterEquipBtn.png');
	core.preload('img/battle_magicBtn.png');
	core.preload('img/Actor10.png');
	core.preload('img/fireBall.png');
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
		//メモリの初期化
		/*
		if(core.memory.character.data == NULL){
			core.memory.character.data = core.character.data;
		}
		if(core.memory.magic.data == NULL){
			core.memory.magic.data = core.magic.data;
		}
		*/
		
		
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
