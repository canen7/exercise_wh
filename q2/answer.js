
// In the UK there are coins with the following denominations: 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), £2 (200p)
// We can make 3p using the following two distinct combinations: 1p + 1p + 1p
// 1p + 2p
// Write a program that, when given an input Xp, outputs the number of distinct ways Xp can be produced 
// using UK coins. You may expect the input to contain a single number for X on each line. 
// Each type of coin may be used an arbitrary number of times.
// Example input:
// 3
// 1
// Example output:
// 2 1

var fs = require('fs');
var input_file = process.argv[2];

coin_set = [1,2,5,10,20,50,100,200];

fs.readFile(input_file,'utf8', function(err, data) {
  if (err) throw err;
  var arr = data.split('\n');
  
  for(var j = 0; j< arr.length ; j++) {
  	console.log(combinations(arr[j]));
  }

});

function combinations(Xp){
	var target  = Xp;
	var number_of_combinations = 0;

	for (var i = target; i >= 0; i -= 200) {
	    for (var j = i; j >= 0; j -= 100) {
	        for (var k = j; k >= 0; k -= 50) {
	            for (var l = k; l >= 0; l -= 20) {
	                for (var m = l; m >= 0; m -= 10) {
	                    for (var n = m; n >= 0; n -= 5) {
	                        for (var o = n; o >= 0; o -= 2) {
	                            number_of_combinations++;
	                        }
	                    }
	                }
	            }
	        }
	    }
	}
	return number_of_combinations;
}
