import template from './template.js';

const myFunction=template;
function reverseArray(arr){
	let temp=0;
	let right=arr.length-1;
	let itr=Math.floor(arr.length/2);
	
	for(let i=0; i<itr; i++){
		temp=arr[i];
		arr[i]=arr[right];
		arr[right]=temp;
		right--;
	}
	return arr;
}

myFunction(reverseArray,1,'Enter the array you want to be reversed');
