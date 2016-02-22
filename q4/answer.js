// Given two integers x and y, we can calculate all combinations of x and y when given an upper and lower bound for their values. For example, using 2 and 4 as the lower and upper bounds for x and y gives us the following pairs of x and y: {2,2} {2,3} {2,4} {3,2} {3,3} {3,4} {4,2} {4,3} {4,4} .
// 𝑦 For each of these pairs, we can calculate 𝑥 .
// 22 =4,23 =8,24 =16,32 =9,33 =27, 34 =81,42 =16,43 =64,44 =1024 Removing duplicate values, we get:
// 4, 8, 9, 16, 27, 64, 81, 1024
// This is 8 distinct terms.
// Write a program that, when given two integer bounds as input, outputs the number of distinct values of 𝑥𝑦.
// You may expect each pair of bounds on a single line, separated by a space. The input may contain multiple lines.
// Example input:
// 24
// Example output
// 8

var fs = require('fs');
var input_file = process.argv[2];

function generateSet(low_bound,up_bound){
	var set = [];
	for (var i=low_bound; i<up_bound+1; i++){
		set.push(i);
	}

	return set;
}
function permutations(arr){
	var perms = [];
	for (var i=0; i<arr.length; i++){
		for (var j=0; j<arr.length; j++){
			perms.push(arr[i].toString() + arr[j].toString());
		}
	}
	return perms
}
function perms_to_power(arr){
	var powers = [];
	for (var i = 0; i<arr.length; i++ ){
		powers.push( Math.pow( parseInt(arr[i][0]) , parseInt(arr[i][1]) ) ) ;
	}
	return powers;
}
function uniqueValues(arr){
	return arr.filter(function(m, n){
		return arr.indexOf(m) === n;
	})

};

// MAIN
fs.readFile(input_file,'utf8', function(err, data) {
	if (err) throw err;

	var arr_1 = data.split('\n');
	var arr_2 = [];

  	// for each line of input file calculate lower and upper bound
  	for(var i=0; i<arr_1.length; i++){
  		arr_2[i]={
  			low_bound: Math.min( arr_1[i][0] , arr_1[i][1] ),
  			up_bound: Math.max( arr_1[i][0] , arr_1[i][1] )
  		};
  	}

  	// for each pair of values (or line) calculate and log the number of distinct powers
	for (var i = 0; i<arr_2.length; i++){
		var set = generateSet( arr_2[i].low_bound , arr_2[i].up_bound );
		var perms = permutations(set);
		var powers = perms_to_power(perms);
		var unique_powers = uniqueValues(powers);
		console.log(unique_powers.length);
	}
});	

