import template from './template.js';

function selectionSort(arr){
	let length = arr.length;
	
	for(let i=0; i<length-1; i++){
		let minIndex = i;
		
		for(let j=i+1; j<length; j++){
			if(arr[j] < arr[minIndex]){
				minIndex=j;
			}
		}
		if(minIndex!==i){
		let temp=arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex]=temp;
		}
	}
	return arr;
}

template(selectionSort,1,'Enter the array you want to be sorted in this format e.g. 3,1,7,5\n');
