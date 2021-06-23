//Use of switch
//Switch can be use instead of leadder of if/else and else if

var x = 5   //try any number between (0-6 for days)

switch(x){
	case 0:
	console.log("Mon");
	break;
	case 1:
	console.log("Tue");
	break;
	case 2:
	console.log("Wed");
	break;
	case 3:
	console.log("Thur");
	break;
	case 4:
	console.log("Fri");
	break;
	case 5:
	console.log("Sat");
	break;
	case 6:
	console.log("Sun");
	break;
	default:
	console.log("Please enter a valid number");
	break;
} 


var day = "Mon"

switch(day){
	case "Mon":
	case "Tue":
	case "Wed":
	case "Thur":
	case "Fri":
	console.log("131 lake JS");
	break;

	case "Sat":
	case "Sun":
	console.log("Lincoln Park cricket");
	break;

	default:
	console.log("Please enter a valid day");
	break;
}