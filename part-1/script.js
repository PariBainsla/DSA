//--------------STRINGS -----------

//------Toggle each character
// let s = "MaDam";
// let toggle="";
// for (let i=0; i<=s.length; i++){
//     let ch = s.charCodeAt(i);
//     if(ch>=65 && ch<=90){
// toggle = toggle + String.fromCharCode(ch+32);
//     }
//     else if(ch>=97 && ch<=122){
//         toggle = toggle + String.fromCharCode(ch - 32);
//     }
// }
// console.log(toggle);

//-----String - Pallindrome or not
// let st = "madam";
// let i = 0;
// let j = st.length-1;
// let isPalindrome = true;
// while(i<j){
//     if(st.charAt(i) !== st.charAt(j)){
//         isPalindrome = false;
//         break;
//     }
//     i++;
//     j--;
// }
// if(isPalindrome){
//     console.log("Palindrome")
// }
// else{
//     console.log("not a palindrome")
// }

//----- Print in reverse order
// let str = "pari";
// let rev = "";
// for(let k=str.length-1; k>=0; k--){
//     rev = rev + str.charAt(k)
// }
// console.log(rev)

//----Frequency of each character
// let s = "hAppy";
// s = s.toLowerCase();
// let freq = {}

// for(let k=0; k<s.length; k++){
//     let char = s[i];
//   freq[char] = (freq[char] || 0) + 1;
// }
// console.log(freq);


//----------------- SORTING -----------------

//-----Bubble Sort
// let arr = [10, 5, 1, 12, 3]
// let n = arr.length;
// for (let i = 0; i <= n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);

//-----Selection Sort
// let arr = [10, 5,1,12,3];
// let n = arr.length;
// for(let i=0; i<n-1; i++){
//     let min = i;
//     for(let j=i+1; j<n; j++){
//         if(arr[min] > arr[j]){
//             min = j;
//         }
//     }
//     if(min != i){
//         let temp = arr[min];
//         arr[min] = arr[i];
//         arr[i] = temp;
//     }
// }
// console.log(arr);

//-----Insertion Sort
let arr = [10,5,1,12,3]
let n = arr.length;
for(let i=1; i<n; i++){
    let key = arr[i];
    let j = i-1;
    while(arr[j]>key && j>=0){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = key;
}
console.log(arr);