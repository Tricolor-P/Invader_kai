//タイトル画面のシーン

Title = function(){
	var scene = new Scene();
	
	var titleLabel = new Label('タイトル');
	titleLabel.x = core.width/2 - 14*2;
	titleLabel.y = core.height/2 - titleLabel.height/2;
	titleLabel.color = '#00FF00';
	titleLabel.font = '14px sens-serif';
	
	scene.addChild(titleLabel);
	scene.addEventListener('enterframe', function(e){
		if(core.input.right) core.popScene();
	});
	
	return scene;
};
