function electronsAroundCores (array) {

	let length = array.length;
	let ergebnis=0;

	if(length==5){
		ergebnis = (array[0]+array[1]+array[2]);
		
	}
	if(length==4){
		ergebnis = (array[0]+array[1]);
	}
	

	return ergebnis;
}