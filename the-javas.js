function buttonfc() {
const theyeardate = (new Date()).getFullYear() ;
const themonthdate = (new Date()).getMonth() + 1 ;
const thedaydate = (new Date()).getDate() ;

let theday = document.getElementById("day-input").value ;
let themonth = document.getElementById("month-input").value ;
let theyear = document.getElementById("year-input").value ;
let theday1 = Number(theday) ;
let themonth1 = Number(themonth) ;
let theyear1 = Number(theyear) ;

let newmothdays = new Date(theyeardate, themonthdate , 0).getDate();
let oldmonthdays = new Date(theyeardate, themonthdate - 1 , 0).getDate();

if( theday == "" ){ document.getElementById("day-input").style.borderColor = '#ff5757' , document.getElementById('1').style.color = '#ff5757' , document.getElementById('1.2').innerHTML = "This field is required" } else { if ( theday1 !== NaN && theday1 <= 31 ) {dayresult = true ,  document.getElementById("day-input").style.borderColor = 'black' , document.getElementById('1').style.color = 'black' , document.getElementById('1.2').innerHTML = ''  } else { document.getElementById("day-input").style.borderColor = '#ff5757' , document.getElementById('1').style.color = '#ff5757' , document.getElementById('1.2').innerHTML = 'Must be a valid date' , dayresult = false } }


if( themonth == "" ){ document.getElementById("month-input").style.borderColor = '#ff5757' , document.getElementById('2').style.color = '#ff5757' , document.getElementById('2.2').innerHTML = "This field is required" } else { if (themonth1 !== NaN && themonth1 <= 12 ) { monthresult = true , document.getElementById("month-input").style.borderColor = 'black' , document.getElementById('2').style.color = 'black' , document.getElementById('2.2').innerHTML = ''} else { document.getElementById("month-input").style.borderColor = '#ff5757' , document.getElementById('2').style.color = '#ff5757' , document.getElementById('2.2').innerHTML = 'Must be a valid date' , monthresult = false } }


if( theyear == "" ){ document.getElementById("year-input").style.borderColor = '#ff5757' , document.getElementById('3').style.color = '#ff5757' , document.getElementById('3.2').innerHTML = "This field is required" } else { if (theyear1 !== NaN && theyear1 <= theyeardate ) { yearresult = true , document.getElementById("year-input").style.borderColor = 'black' , document.getElementById('3').style.color = 'black' , document.getElementById('3.2').innerHTML = '' } else { document.getElementById("year-input").style.borderColor = '#ff5757' , document.getElementById('3').style.color = '#ff5757' , document.getElementById('3.2').innerHTML = 'Must be a valid date' , yearresult = false } }

let birthdate = new Date ( theyear , ( themonth - 1 ) , theday ) ;

let m = themonthdate - themonth ;
let ageyear = theyeardate - theyear ;

if ( m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
  ageyear--;
}

if ( dayresult && monthresult && yearresult ){
document.getElementById('result-year').innerHTML = ageyear 
}

if ( dayresult && monthresult && yearresult ){
if  (theday == thedaydate){ 
document.getElementById('result-day').innerHTML = 0 } else {
 if ( theday > thedaydate){ document.getElementById('result-day').innerHTML = oldmonthdays - (theday - thedaydate)  }   else {
document.getElementById('result-day').innerHTML =  thedaydate - theday }
}

if (theday > thedaydate ){document.getElementById('result-month').innerHTML = themonthdate - 1}else{
document.getElementById('result-month').innerHTML = themonthdate }

}
}