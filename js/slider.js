class Slider{
  constructor( min, max, value, name, label, element ){

    let child = new Array();
    let ns = this;

    child.push( this.slider( "div", "label", {
          id: name + "Label",
          style: "width:120px; height:30px;"
      } )
    );

    child.push( this.slider( "input", name, {
        style: "margin: 8px 10px 0 10px ; width:150px;",
        id: name,
        type: "range",
        min: min,
        max: max,
        value: value
      } )
    );
    
    child.push( this.slider( "div", name, {
        id: name + "Value", 
        style: "font-family: Arial, color: #fff; width:100px; height:30px;"
      } )
    );

    let container = this.slider( "div", "contaniner", {
      style: "display: flex; align-items: flex-start; width: 400px;"
    }, child );

    element.appendChild( container );
    
    document.getElementById( name + "Label" ).innerText = label;
    document.getElementById( name + "Value" ).innerText = this.percent ( min, max, value );

    document.getElementById( name ).addEventListener( "input", function() {

      let percent = ns.percent ( this.min, this.max, this.value );

      this.style.backgroundSize = percent + '% 100%';

      document.getElementById( name + "Value" ).innerText = percent;

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

  percent( min, max, value ){
    return ( value - min ) * 100 / ( max - min );
  };

};
