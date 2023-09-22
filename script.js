//your JS code here. If required.

const ul=document.getElementsByTagName('ul');
let displayText;

for(let i=0;i<ul.children.length;i++){
	let node=ul.children[i]
	if(node.id=='level'){
		displayText="The level of the element is:"+ (i+1);
	}
}

alert(displayText);