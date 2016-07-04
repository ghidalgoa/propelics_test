/*
1. Write a function that receives 2 Date parameters and returns the time difference in minutes
for testing change date or type
*/

var dateA = new Date("asdads");
var dateB = new Date("2016-11-25T21:34:00");

// a and b are javascript Date objects for this to work
function dateDiffInMinutes(a, b) {
    var diff;
    var ms_minute = 1000 * 60;
	if(a instanceof Date && b instanceof Date)
	{
//using UTC to discard time-zone information.
        var date1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds());
        var date2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate(), b.getUTCHours(), b.getUTCMinutes(), b.getUTCSeconds());
	diff = Math.abs(Math.floor((date2 - date1) / ms_minute));
//checking NaN value
		if (!diff){
			diff = "format error";
		}
	} else {
        diff = "wrong, not a date type";        
	}
return diff;
}

alert(dateDiffInMinutes(dateA,dateB));