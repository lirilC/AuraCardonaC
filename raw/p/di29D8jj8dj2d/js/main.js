var curve; 
var z; 
var evet; 
var ouT= true; 

var set_curve= function (a, b, c, d, e, f, g, h){ 
	curve= "M " + a + " " + b + " C " + c + " " + d +", " + e + " " + f + ", " + g + " " + h; 
} 

var update_curve= function(){ 
	a= document.querySelector("body > aside").clientWidth - 127 /*127*/; 
	b= document.querySelector("body > aside").clientHeight / 2; 
	c= 127 + parseInt(Math.random() * document.querySelector("body > aside").clientWidth / 2 - 127); 
	d= parseInt(Math.random() * document.querySelector("body > aside").clientHeight); 
	e= c + parseInt(Math.random() * (document.querySelector("body > aside").clientWidth - c)); 
	f= parseInt(Math.random() * document.querySelector("body > aside").clientHeight); 
	g= 0 /*document.querySelector("body > aside").clientWidth*/; 
	h= parseInt(Math.random() * document.querySelector("body > aside").clientHeight); 

    curve = new Bezier( [ {x: a,y: b},{x: c,y: d},{x: e,y: f},{x: g,y: h} ] ); 

    curve.failed= false; 

    //set_curve(a, b, c, d, e, f, g, h);  

	document.querySelector("path").setAttribute("d", curve.toSVG()); 
	document.querySelector("svg path").style.stroke= "rgba(" + (parseInt(curve.project({x: evet.clientX, y: evet.clientY}).d)  <= dif? 255/dif * parseInt(curve.project({x: evet.clientX, y: evet.clientY}).d): (function(){curve.failed= true; return parseInt(curve.project({x: evet.clientX, y: evet.clientY}).d) / 7 == Math.floor(parseInt(curve.project({x: evet.clientX, y: evet.clientY}).d) / 7)? 255: 0})()? 0: 255) + ", 0, 0, 1)"; 
} 


var tutorial= {}; 

tutorial.display= function(){ 
	alert("⚠️"); 
	alert("⚠️"); 
	alert("Presiona Inicio + r"); 
	alert("⚠️"); 
	alert("⚠️"); 
	alert("Presiona Inicio + r\n\n\n\n\n\n\nℹ Puedes usar la Rueda De En Medio Del Mouse para desplazarte por las instrucciones\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nEscribe mspaint y presiona enter\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n⚠️\n\n⚠️⚠️.\n\n\nVe a la pestaña Ver\n\n\n\n⚠️\n⚠️\n⚠️\n⚠️\n⚠️\n\n\n\n\n⚠️\n\n\n\n⚠️\n\n꒷꒦\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nDeschulea las opciones Reglas y Barra De Estado\n\n\n\n\n\n\n\n\n\nEn Microsoft Paint, presiona el Botón De Minimizar (el que está a la izquierda del Botón De Cerrar), arriba a la derecha de ms Paint sólo si parece ❐ y no ▭ y luego arrastra la ventana hacia la mitad de la pantalla desde donde dice Sin título - Paint y cámbialo de ancho hasta que sólo se vea [Sin t...] arrastrando mspaint desde alguna de las esquinas inferiores; y de alto hazlo lo más pequeño que se pueda; por completo\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n⚠️\n\n\n⚠️\n\n\n\n꒷꒦\n\nMemoriza el resto de las instrucciones y cierra este diálogo antes de continuar\n\nCuando cierres este diálogo, tu navegador pasará a estar al frente de mspaint; tendrás que recuperar mspaint. Deja presionada la tecla Alt, presiona, pero suelta de una, la tecla ↹ y luego suelta la tecla Alt para recuperar mspaint\n\n\n\nArrastra mspaint desde donde dice [Sin t...] hasta que la esquina inferior izquierda de mspaint esté en la esquina superior derecha del cuadrado con el borde punteado\n\nPresiona cualquiera de las flechas del teclado cuando quieras empezar una nueva curva."); 
} 

document.addEventListener("DOMContentLoaded", function(){ 
    document.querySelector("#dificulTad").addEventListener("input", function(e){
        dif= 100 - this.value
    })
    dif= 100 - document.querySelector("#dificulTad").value
	//window.addEventListener("resize", function(er){Confirm(); }); 
	tutorial.display(); 
	document.querySelector("svg").addEventListener("mousemove", function(ev){ 
		document.querySelector("#Start").style.rotate= Math.atan2((ev.movementY),(ev.movementX))*(180/Math.PI) >= 0? Math.atan2((ev.movementY),(ev.movementX))*(180/Math.PI) + "deg": 180 + (180 + Math.atan2((ev.movementY),(ev.movementX))*(180/Math.PI)) + "deg"; 
		document.querySelector("#Start").style.left= ev.clientX - 10 + "px"; 
		document.querySelector("#Start").style.top= ev.clientY - 10 + "px"; 
		//console.log(document.querySelector("#Start").style.left)
		
	}); 
	document.addEventListener("mousemove", function(r){
		evet= r; 
		fantStartLeft= parseInt(window.getComputedStyle(document.querySelector("#fantasma_de_Start")).getPropertyValue('left'));
	    StartLeft= parseInt(window.getComputedStyle(document.querySelector("#Start")).getPropertyValue('left'));
	    if((r.clientX + 10) < fantStartLeft){ 
    		ouT= true; 
    	}else if(ouT && ((r.clientX - 10) > fantStartLeft)){ 
    		update_curve(); 
    		ouT= false; 
    	} 
		StartLeft <= -1 && !curve.failed? (function(){document.querySelector("svg path").style.stroke= "#d8eE8d"; curve.failed= "Not failed, completed";  console.log("Not Failed")})(): StartLeft <= -1 && curve.failed != "Not failed, completed"? (function(){document.querySelector("svg path").style.stroke= "#d8888d"; curve.failed= "Completed, failed"; console.log("Failed");})(): 1; 
		//console.log(parseInt(curve.project({x: r.clientX, y: r.clientY}).d));
		if(typeof curve != "undefined" && ["Not failed, completed", "Completed, failed"].indexOf(curve.failed) == -1){ 
			document.querySelector("svg path").style.stroke= "rgba(" + (parseInt(curve.project({x: r.clientX, y: r.clientY}).d)  <= dif? 255/dif * parseInt(curve.project({x: r.clientX, y: r.clientY}).d): (function(){curve.failed= true; return parseInt(curve.project({x: r.clientX, y: r.clientY}).d) / 7 == Math.floor(parseInt(curve.project({x: r.clientX, y: r.clientY}).d) / 7)? 255: 0})()? 0: 255) + ", 0, 0, 1)"; 
		} 
	}); 
}); 