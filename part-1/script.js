//Toggle each character
let s = "MaDam";
let toggle="";

for (let i=0; i<=s.length; i++){
    let ch = s.charCodeAt(i);
    if(ch>=65 && ch<=90){
toggle = toggle + String.fromCharCode(ch+32);
    }
    else if(ch>=97 && ch<=122){
        toggle = toggle + String.fromCharCode(ch - 32);
    }
}
console.log(toggle);

//String - Pallindrome or not
let st = "madam";
let i = 0;
let j = st.length-1;
let isPalindrome = true;

while(i<j){
    if(st.charAt(i) !== st.charAt(j)){
        isPalindrome = false;
        break;
    }
    i++;
    j--;
}
if(isPalindrome){
    console.log("Palindrome")
}
else{
    console.log("not a palindrome")
}

// Print in reverse order
let str = "pari";
let rev = "";
for(let k=str.length-1; k>=0; k--){
    rev = rev + str.charAt(k)
}
console.log(rev)

//Frequency of each character
let stri = "hAppy";
stri = stri.toLowerCase();
let freq = {}

for(let k=0; k<stri.length; k++){
    let char = stri[i];
    freq[char] = (freq[char] || 0) + 1;
}
console.log(freq);