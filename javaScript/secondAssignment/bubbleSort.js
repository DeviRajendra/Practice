let bubbleSort = (a)=>{
	console.log(`The given array for bubble sort is :${a}`)
	let swapp
	let n= a.length-1
	let x=a
	do{
		swapp=false
		for(let i=0;i<n;i++){

			if(x[i] < x[i+1]){
				let temp = x[i]
				x[i]=x[i+1]
				x[i+1]=temp
				swapp=true
			}
		}
		n--
	}while(swapp) //checks if Swapp is true and enters the do loop
	return x
}//end of function

let arr1 = [1,10]
const arr2 = [...arr1,6,3,9,2,4,8,5,7]//concatenating two arrays with spreas operator
console.log(`The array after bubble sort is ${bubbleSort(arr2)}`)