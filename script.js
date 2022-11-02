let dateOfBirth=document.getElementById('DOB');
let output=document.getElementById('output');
let check=document.getElementById('check');
check.addEventListener('click',checkPallindrome);
function print(dob){
    console.log(dob);
}
function checkPallindrome(){
    let dob=dateOfBirth.value;
    if(dob===""){
        alert("Please Enter Date Of Birth");
    }
    else{
        // const d = new Date();
        // let a=dob.getDay()
        // print(d.getDay());
        dob=dob.split('').reverse().join('');
        print(dob);
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
            output.innerText="Your BirthDay is Pallindrome";
        }
        else{
            output.innerText="Your BirthDay is Not Pallindrome";
        }
    }

}
