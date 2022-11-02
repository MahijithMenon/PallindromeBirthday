let dateOfBirth=document.getElementById('DOB');
let output=document.getElementById('output');
let check=document.getElementById('check');
check.addEventListener('click',function(){
    dob=dateOfBirth.value;
    if (dob !== "") {
        // console.log(dob);
        var date1 = dob.split("-");
        // console.log(date);
        var yyyy = date1[0];
        var mm = date1[1];
        var dd = date1[2];
    
        var date = {
          day: Number(dd),
          month: Number(mm),
          year: Number(yyyy),
        };
        var dateStr = convertDateToStr(date);

        // console.log(dateStr);
    var list = checkPalindromeForAllDateFormats(dateStr);
    console.log(list);
    
    var isPalindrome = false;

    if(list){
        isPalindrome=true;
    }

    if (!isPalindrome) {
      const [ctr1, nextDate] = getNextPalindromeDate(date);
        output.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${ctr1} days.`;
    } 
    else {
      output.style.color="blue"  
      output.innerText = "Yay! Your birthday is palindrome!🎂🎂";
    }
  }
  else{
    output.style.color="white";
    output.innerText="Enter Your Date of Birth"
  }
});

function reverseStr(str){
    // console.log(str);
 var listOfChars = str.split("");
  var reversedListOfChar = listOfChars.reverse();
  var reversedString = reversedListOfChar.join("");
  return reversedString;
}
function isPalindrome(str){
    var reverse = reverseStr(str);
    return str===reverse;
}
function convertDateToStr(date){
    var dateInStr = { day: "", month: "", year: "" };

    if (date.day < 10) {
      dateInStr.day = "0" + date.day;
    } else {
      dateInStr.day = date.day.toString();
    }
  
    if (date.month < 10) {
      dateInStr.month = "0" + date.month;
    } else {
      dateInStr.month = date.month.toString();
    }
  
    dateInStr.year = date.year.toString();
    return dateInStr;
}
function getAllDateFormat(date){
    // var date=convertDateToStr(date);
    // console.log(date);
  var ddmmyyyy = date.day + date.month + date.year;
  var mmddyyyy = date.month + date.day + date.year;
  var yyyymmdd = date.year + date.month + date.day;
  var ddmmyy = date.day + date.month + date.year.slice(-2);
  var mmddyy = date.month + date.day + date.year.slice(-2);
  var yyddmm = date.year.slice(-2) + date.day + date.month;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
}
function checkPalindromeForAllDateFormats(date) {
    var dateFormatList = getAllDateFormat(date);
    // console.log(dateFormatList);
    var flag=false;
    for(var i=0; i<dateFormatList.length;i++){
        if(isPalindrome(dateFormatList[i])){
            console.log(dateFormatList[i])
            flag=true;
            break;
        }
    }
    return flag;
  }
  function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
  
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (month === 2) {
      if (isLeapYear(year)) {
        if (day > 29) {
          day = 1;
          month = 3;
        }
      } else {
        if (day > 28) {
          day = 1;
          month = 3;
        }
      }
    } else {
      if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
      }
    }
  
    if (month > 12) {
      month = 1;
      year++;
    }
  
    return {
      day: day,
      month: month,
      year: year,
    };
  }
  function isLeapYear(year) {
    if (year % 400 === 0) return true;
  
    if (year % 100 === 0) return false;
  
    if (year % 4 === 0) return true;
  
    return false;
  }  
  function getNextPalindromeDate(date) {
    var nextDate = getNextDate(date);
    var ctr = 0;
    var resultList=false;
  
    while (!resultList) {
      ctr++;
      var dateStr = convertDateToStr(nextDate);
      resultList = checkPalindromeForAllDateFormats(dateStr);
      if(resultList){
        break;
      }

      nextDate = getNextDate(nextDate);
}
var arr=[ctr,nextDate]
return arr;
  }

