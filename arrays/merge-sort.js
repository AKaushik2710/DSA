import template from './template.js';

function mergeSort(arr){
	const n = arr.length;
	if(n===1||n===0) return arr;
	const mid = Math.floor(n/2);
	const left = mergeSort(arr.slice(0,mid));
	const right = mergeSort(arr.slice(mid));

	return merge(left,right);
}

function merge(l,r){
	let result=[], i=0, j=0;

	while(i<l.length && j<r.length){
		if(l[i]<r[j]){
			result.push(l[i]);
			i++;
		}
		else{
			result.push(r[j]);
			j++
		}
	}
	return result.concat(l.slice(i)).concat(r.slice(j));
}

template(mergeSort,1, "Enter the array you want to be sorted in the given format e.g. 2,1,5,4");
