function calcular(){
	var num1= parseFloat(document.getElementById("num1").value);
	var num2= parseFloat(document.getElementById("num2").value);
	var num3= parseFloat(document.getElementById("num3").value);
	
	if(num1 != 0 && num2 != 0){
		var delta = Math.pow(num2 , 2) - ((4 * num1)*num3);	
	}
	if( delta >= 0){
		var deltaR = Math.sqrt(delta);
		var  x1 = ((-num2 +  deltaR)  /(2 * num1));
		var  x2 = ((-num2 -  deltaR)  /(2 * num1));
	}else{
		x1 = ("Sem raiz");
		x2 = ("Sem raiz");
		alert("Delta é negativo, operação encerrada!")
		return false;
	}
	document.getElementById("resultado1").value = x1.toFixed(2);
	document.getElementById("resultado2").value = x2.toFixed(2);		
	
	
}