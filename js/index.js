'use strict';

(function(){

	let menuItems = document.getElementsByClassName('tab');
	let contents = document.getElementsByClassName('content');

	for( let i = 0; i < menuItems.length; i++ ){
		menuItems[i].addEventListener( 'click',function( e ){
			e.preventDefault();

			for( let i = 0; i < menuItems.length; i++ ){
		  		menuItems[i].className = 'menu_item tab';
		  		menuItems[i].style.background = "#fff";
		  		menuItems[i].style.color = "#333";
			};
			this.style.background = this.dataset.color;
			this.style.color = "#fff";
		
			for( let i = 0; i < contents.length; i++ ){
		  		contents[i].className = 'content';
			};			
			document.getElementById( this.dataset.id ).className = 'content active';

		});
	};

})();