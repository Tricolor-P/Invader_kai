//タイトル画面のシーン

Title = function(tp){
	scene = new Scene();
	scene.backgroundColor = "#000080";
	
	//タイトルについての記述ここから	
	titleLabel = new Label('インベーダー改（仮）');
	titleLabel.x = core.width/2 - 14*2;
	titleLabel.y = core.height/2 - titleLabel.height/2;
	titleLabel.color = '#00FF00';
	titleLabel.font = '14px sens-serif';
	titleLabel.startIs = tp;
	titleLabel.endIs = false;
	titleLabel.addEventListener('enterframe', function(e){
		if(titleLabel.startIs){
			titleLabel.tl.fadeIn(32).delay(16).then(function(){ titleLabel.endIs = true; }).fadeOut(32);
			titleLabel.startIs = false;
		}
		
	});
	scene.addChild(titleLabel);
	//タイトルについての記述ここまで
	
	scene.addEventListener('enterframe', function(e){
		console.log(titleLabel.endIs);
		if(core.input.right && titleLabel.endIs) {
			core.popScene();
		}
	});
	return scene;
};
