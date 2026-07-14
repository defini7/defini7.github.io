document.addEventListener('DOMContentLoaded', function(){

	var subset = 'one';
	var assetBase = '../assets/';
	var viewer = document.getElementById('viewer');
	var title = document.getElementById('viewertitle');
	
	function setViewerImage(imageName) {
		viewer.style.backgroundImage = 'url(' + assetBase + imageName + ')';
	}

	function setThumbs(groupId) {
		subset = groupId;
		['a', 'b', 'c', 'd'].forEach(function(id){
			var el = document.getElementById(id);
			if (el) {
				el.innerHTML = '<img src="' + assetBase + groupId + id + '.jpg" alt="" />';
			}
		});
	}

	function changeCaption(groupId) {
		switch(groupId) {
			case 'one':
				title.innerHTML = 'Smooth Talker. Smooth Walker.';
				break;
			case 'two':
				title.innerHTML = 'Mellow Yellow meets Feisty Leopard.';
				break;
			case 'three':
				title.innerHTML = "Velour. It isn't just for rappers.";
				break;
			case 'four':
				title.innerHTML = 'Saul&#39;s "Listen to me, jury" Suit.';
				break;
			default:
				title.innerHTML = 'Smooth Talker. Smooth Walker.';
		}
	}

	function loadOutfit(groupId) {
		setViewerImage(groupId + '_t.jpg');
		setThumbs(groupId);
		changeCaption(groupId);
	}

	Array.prototype.forEach.call(document.querySelectorAll('.mainthumb'), function(item){
		item.addEventListener('click', function(){
			loadOutfit(this.id);
		});
	});

	Array.prototype.forEach.call(document.querySelectorAll('.subthumb'), function(item){
		item.addEventListener('click', function(){
			var thumbId = this.id;
			setViewerImage(subset + thumbId + '.jpg');
		});
	});

	loadOutfit('one');
});