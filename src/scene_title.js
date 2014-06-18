//タイトル画面のシーン

Title = function(tp){
	var title = new Scene();
	title.backgroundColor = "#000000";
	
	//タイトルについての記述ここから	
	var titleLabel = new Label('インベーダー改（仮）');
	titleLabel.x = core.width/2 - 20*8/2;
	titleLabel.y = core.height/2 - 20/2;
	titleLabel.color = '#2222FF';
	titleLabel.font = '20px sens-serif';
	titleLabel.startIs = tp;
	titleLabel.endIs = false;
	titleLabel.addEventListener('enterframe', function(e){
		if(titleLabel.startIs){
			titleLabel.tl.fadeIn(32).delay(16).then(function(){ titleLabel.endIs = true; }).fadeOut(32);
			titleLabel.startIs = false;
		}
		
	});
	title.addChild(titleLabel);
	
	//タイトルについての記述ここまで
	
	title.addEventListener('enterframe', function(e){
		if(core.input.b && titleLabel.endIs) {
			core.popScene();
		}
		if(core.input.a && titleLabel.endIs){
			core.replaceScene(core.homeScene());
		}
	});
	return title;
};
