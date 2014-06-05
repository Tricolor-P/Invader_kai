//Resultシーンの追加

Result = function(){
	var result = new Scene();
	//タイトルシーンの削除
	result.backgroundColor = "#000000";
	
	//タイトルについての記述ここから	
	resultLabel = new Label('ここは戦果ページです');
	resultLabel.x = core.width/2 - 20*5;
	resultLabel.y = core.height/2 - 20/2;
	resultLabel.color = '#FF00FF';
	resultLabel.font = '20px sens-serif';
	resultLabel.addEventListener('enterframe', function(e){
	});
	result.addChild(resultLabel);
	//タイトルについての記述ここまで
	
	result.addEventListener('enterframe', function(e){
		if(core.input.left) {
			core.popScene();
		}
	});
	return result;
};