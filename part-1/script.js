let arr1 = [2,5,6]
let arr2 = [1,3,4,8]
let temp = new Array(arr1.length + arr2.length)
let i=j=k=0;

while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        temp[k] = arr1[i]
        k++;
        i++;
    }
    else{
        temp[k++] = arr2[j++]
    }
}
while(i<arr1.length){
    temp[k++]= arr1[i++]
}
while(j<arr2.length){
    temp[k++] = arr2[j++]
}

console.log(temp);