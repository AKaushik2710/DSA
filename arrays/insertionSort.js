import template from './template.js';

const temp = template;
function insertionSort(arr){
	const n = arr.length;
	
	for(let i=1; i<n; i++){
	let current = arr[i];
	let j = i-1;
	
		while(j>=0 && arr[j] > current){
			arr[j+1] = arr[j];
			j--;
		}
	arr[j+1] = current;
	}
	return arr;
}

temp(insertionSort,1,'Enter The array you want to be sorted in the format e.g.4,3,7,2\n');
