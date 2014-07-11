//ホームシーンの描画


Battle = function(){
	var scene = new Scene();
	//タイトルシーンの削除
	scene.backgroundColor = "#000000";
	
	//タイトルについての記述ここから	
	var battleLabel = new Label('ここはバトルシーンです');
	battleLabel.x = core.width/2 - 20*5;
	battleLabel.y = core.height/2 - 20/2;
	battleLabel.color = '#FFFF00';
	battleLabel.font = '20px sens-serif';
	battleLabel.addEventListener('enterframe', function(e){
	});
	scene.addChild(battleLabel);
	//タイトルについての記述ここまで
	
	//キャラクターの表示
	//x座標、y座標、statusを渡す
	var players = [];
	for(var i=0; i<3; i++){
		if(core.characterList[i]!=null){
			players[i] = new Player(30, 50*(i+1), core.characterList[i].status, core.characterList[i].slots);
		}
	}
	for(var i in players){
		scene.addChild(players[i]);	
	}
	
	//魔法ボタンの配置
	var magicBtns = [];
	for(var i in players){
		for(var j in players[i].slots){
			if(players[i].slots[j]!=null){
				var magicBtn = new Sprite(32, 32);
				magicBtn.image = core.assets['img/battle_magicBtn.png'];
				magicBtn.frame = core.magicList[players[i].slots[j]].status.btnFrame;
				magicBtn.x = (i*5.0+j*1+1)*magicBtn.width;
				console.log("ボタンのx座標" + (i*5.0));
				magicBtn.y = 238;
				scene.addChild(magicBtn);
				magicBtns.push(magicBtn);
			}
			console.log("jループの添字を表示" + j);
		}
		console.log("iループの添字を表示" + i);
	}
	console.log("magicBtnsの中身" + magicBtns);
	/*
	for(var i = 0; i<15; i++){
		var magicBtn = new Sprite(32, 32);
		magicBtn.image = core.assets['img/battle_magicBtn.png'];
		for(var j = 0; j<3; j++){
			magicBtn.frame = magicList[players[j].slots[k]];
		}
		magicBtn.x = i*magicBtn.width;
		magicBtn.y = 238;
		scene.addChild(magicBtn);
		magicBtns[i] = magicBtn;
	}*/
	
	
	
	
	//発動中の魔法の格納配列
	var magics = [];
	
	scene.addEventListener('enterframe', function(e){
		if(core.input.b) {
			//core.popScene();
		}
		if(core.input.a){
			core.replaceScene(core.resultScene());
		}
		if(core.input.right){
			var magic = new Magic(100,100, 'fireBall');
			scene.addChild(magic);
			magics.push(magic); 
		}
		for(var i in magics){
			if(magics[i].endIs){
				scene.removeChild(magics[i]);
				magics.splice(i,1);
			}
		}
		console.log('発動中の魔法 : '+magics.length);
	});
	return scene;
};