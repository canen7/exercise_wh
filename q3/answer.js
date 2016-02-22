// Q3
// Write a program that, when given two months, outputs the number of months in between that contain five Sundays.
// This is inclusive, for example given an input of “September 2013 December 2013”, your program should consider September, October, November and December 2013.
// The dates will be provided as two pairs of months and years separated by spaces, per line, and the input may contain multiple lines.
// Example input:
// September 2013 December 2013
// Example output:
// 2

var fs = require('fs');
var input_file = process.argv[2];

// array with 12 month names
var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// define function to calculate number of months
function num_months(date1, date2) {
    var num_months;
    num_months= (date2.getFullYear() - date1.getFullYear()) * 12;
    num_months-= date1.getMonth() + 1;
    num_months+= date2.getMonth();
    return num_months;	
};

// MAIN
fs.readFile(input_file,'utf8', function(err, data) {
	if (err) throw err;
	var arr_1 = data.split('\n');
	var arr_2 = [];
	for(var i=0; i<arr_1.length; i++){
  		arr_2[i] = arr_1[i].split(" ");
  	}

  	// produce oputput fosr each line of input file
	for (var i=0; i<arr_2.length; i++){
		var initial_month = arr_2[i][0];
		var initial_year = arr_2[i][1];
		var final_month = arr_2[i][2];
		var final_year = arr_2[i][3];

		// month number of input month
		var initial_month_number = month_names.indexOf(initial_month);
		var final_month_number = (month_names.indexOf(final_month) + 2)%12;
		if (final_month_number == 1 ){
			final_year = parseInt(final_year) + 1;
			final_year = final_year.toString();
		}

		//date1: last day of initial input month
		//date2: last day of final input month
		var date1 = new Date(initial_year, initial_month_number, 0);
		var date2 = new Date(final_year, final_month_number, 0);

		// Sundays object contain MonthYear with its number of Sundays
		var Sundays = {};
		var num_months_w_5_Sundays = 0;

		// we loop through every day to check if it's a Sunday
		// outer loop: month
		for (var j = 0; j < num_months(date1, date2); j++) {
			//get first day of the month
			var myDate = new Date(initial_year, initial_month_number+j);
			//add property MonthYear to Sundays object and initialize to zero
			var myMonth = month_names[myDate.getMonth()];
			var myYear = myDate.getFullYear();
			Sundays[myMonth.concat(myYear)] = 0;
			//inner loop: day
			for (var k = 0; k<32; k++) {
				var date_to_check = new Date(initial_year, initial_month_number+j, k+1)
				if (date_to_check.getDay() == 0 && date_to_check.getMonth() == myDate.getMonth()){
					//we increase the count of the MonthYear property for each Sunday found
					Sundays[myMonth.concat(myYear)] += 1;
				};	
			}
			// if there are 5 Sundays for that MonthYear we increase the count of months with 5 Sundays
			if (Sundays[myMonth.concat(myYear)] == 5){
				//console.log('hey bro, found a month with 5 Sundays: ', myMonth.concat(myYear));
				num_months_w_5_Sundays += 1;
			}
		}
		console.log(num_months_w_5_Sundays);
	}
});




