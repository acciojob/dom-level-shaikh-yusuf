//your JS code here. If required.

const levelofElement=document.getElementsById('level');
let level=1;
while(true){
	if(levelofElement.tagName==='HTML'){
		break;
	}
	levelofElement=levelofElement.parentNode;
	level++
}


alert(`The level of the element is: ${level}`);