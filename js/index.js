'use strict';

(function(){

	let sectionItems = new Array();
	sectionItems.push( document.getElementsByClassName('mainContainer') );
	sectionItems.push( document.getElementsByClassName('playerStatsContainer') );
	sectionItems.push( document.getElementsByClassName('teamStatsContainer') );
	sectionItems.push( document.getElementsByClassName('playerComparisonContainer') );
	sectionItems.push( document.getElementsByClassName('gameStatsContainer') );
	sectionItems.push( document.getElementsByClassName('gameTacticsContainer') );
	sectionItems.push( document.getElementsByClassName('gameStrategyContainer') );

	let menuItems = new Array();
	let contentItems = new Array();


	for( let j = 0; j < sectionItems.length; j++ ){
	
		menuItems.push( sectionItems[j][0].getElementsByClassName('tab') );
		menuItems[j][0].style.background = menuItems[j][0].dataset.color;
		menuItems[j][0].style.color = "#fff";

		if ( j > 0 ) {
			contentItems.push( sectionItems[j][0].getElementsByClassName('content') );
		} else {
			contentItems.push( document.getElementsByClassName('tab_content') );
		};

		for( let i = 0; i < menuItems[j].length; i++ ){

			menuItems[j][i].addEventListener( 'click',function( e ){
				e.preventDefault();

				for( let i = 0; i < menuItems[j].length; i++ ){
			  		menuItems[j][i].className = 'menu_item tab';
			  		menuItems[j][i].style.background = "#fff";
			  		menuItems[j][i].style.color = "#333";
				};
				this.style.background = this.dataset.color;
				this.style.color = "#fff";
				
				for( let i = 0; i < contentItems[j].length; i++ ){
			  		contentItems[j][i].style.display = "none";
				};

				document.getElementById( this.dataset.id ).style.display = "flex";

			});
		};
	};

})();