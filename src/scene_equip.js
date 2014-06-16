//Equipシーンの追加

Equip = function(){
	var equip = new Scene();
	//タイトルシーンの削除
	equip.backgroundColor = "#000000";
	
	//タイトルについての記述ここから	
	var equipLabel = new Label('ここは装備選択ページです');
	equipLabel.x = core.width/2 - 20*5;
	equipLabel.y = core.height/2 - 20/2;
	equipLabel.color = '#00FFFF';
	equipLabel.font = '20px sens-serif';
	equipLabel.addEventListener('enterframe', function(e){
	});
	equip.addChild(equipLabel);
	//タイトルについての記述ここまで
	
	equip.addEventListener('enterframe', function(e){
		if(core.input.left) {
			core.popScene();
		}
	});
	return equip;
};