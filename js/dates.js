var today = new Date()
today = today.getDay()
checkWeekend(today)
console.log(today)

function checkWeekend()
{
	if(today == 0 || today == 6){
		return "Today is a Weekend!!"
	} 
	else{
		return "Today is a Weekday :("
	}
}
 console.log(checkWeekend(today))
 document.write(checkWeekend(today))