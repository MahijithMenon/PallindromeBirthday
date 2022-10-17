let dateOfBirth=document.getElementById('DOB');
let output=document.getElementById('output');
let check=document.getElementById('check');
let dob=dateOfBirth.value;
console.log(dob);
dob=dob.split('').reverse().join('');
console.log(dob);
check.addEventListener('click',checkPallindrome);
function checkPallindrome(){
dob=dob-0;
let temp=dob;
let sum=0;
while(temp>0){
a=temp%10;
// console.log(a);
sum=sum*10+a;
temp= Math.floor(temp/10);
// console.log(temp);
// console.log(sum);
}
console.log( temp+" " + dob+" "+sum)
if(dob===sum){
    output.innerText="Your BirthDate is Pallindrome";
}
else{
    output.innerText="Your BirthDate is Not Pallindrome";

}
}
