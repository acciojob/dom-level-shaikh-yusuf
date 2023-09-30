//your JS code here. If required.

const ul=document.getElementsByTagName('ul')[0];
let displayText;

for(let i=0;i<ul.children.length;i++){
	let node=ul.children[i]
	if(node.id=='level'){
		displayText="The level of the element is:"+ (i);
	}
}

alert(displayText);