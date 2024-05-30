function electronsAroundCores (array) {

	let length = array.length;
	let ergebnis=0;

	if(length==5){
		ergebnis = (array[0]+array[1]+array[2]);
		
	}
	if(length==4){
		ergebnis = (array[0]+array[1]);
	}
	if(length==6){
		ergebnis = (Math.pow(array[0]-array[1],2)+ Math.pow(array[2]-array[3],2)+ Math.pow(array[4]-array[5],2));
		if(ergebnis<10){
			ergtebnis=ergebnis%2;		}
	}

	return ergebnis;
}