class Slider{
  constructor( value, name, label, element ){

    let child = new Array();

    child.push( this.slider( "p", "label", {
          id: name + "Label",
          style: "font-family: Arial",
          style: "padding: 10px",
          color: "#fff"
      } )
    );

    child.push( this.slider( "input", name, {
        class: "strategySlider",
        id: name,
        type: "range",
        min: 0,
        max: 1000,
        value: 500
      } )
    );
    
    let container = this.slider( "div", "contaniner", {
      style: "display: flex"
    }, child );

    element.appendChild( container );
    
    document.getElementById( name + "Label" ).innerText = label;

    document.getElementById( name ).addEventListener( "input", function() {
      var min = this.min;
      var max = this.max;
      var val = this.value;

      this.style.backgroundSize = ( val - min ) * 100 / ( max - min ) + '% 100%';

      if ( this.value == 0 ) {
        this.setAttribute( "class", "zero-input" );
      } else {
        this.setAttribute( "class", "" );
      };

    }, false );

  };  

  /**
	* create slider
	*/
  slider( obj, name, attrs, children ) {
    const elem = document.createElement( obj );
    for( const attrName in attrs ) {
      elem.setAttribute( attrName, attrs[ attrName ] );
    };

    if( children ) {
      children.forEach( function( c ) {
        elem.appendChild( c );
      } );
    };

    return elem;
  };

};

