putstr("Enter a day - Saturday = 0: ");
var day = readline();
var dayName;

switch(dayName){
    case "1":
        dayName = "Saturday";
        break;
    case "2":
        dayName = "Sunday";
        break;
    case "3":
        dayName = "Monday";
        break;
    case "4":
        dayName = "Tuesday";
        break;
    case "5":
        dayName = "Wednesday";
        break;
    case "6":
        dayName = "Thrusday";
        break;
    case "7":
        dayName = "Friday";
        break;
    default:
        console.log("Bad input");

    
}

console.log(dayName);