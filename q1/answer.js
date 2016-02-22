// Q1
// Write a program that, when given a list of words separated by spaces, outputs the words in reverse order.
// The input may contain multiple lines, consider each line of the input to be a separate set of words, and output each set of words on a new line.
// Example input:
// Welcome to William Hill
// Enjoy the test
// Example output:
// Hill William to Welcome test the Enjoy

var fs = require('fs');
var input_file = process.argv[2];

fs.readFile(input_file,'utf8', function(err, data) {
  if (err) throw err;
  //arr_1 - each element is a line of the input
  var arr_1 = data.split('\n');
  //arr_2 - array of arrays of strings/words
  var arr_2 = []
  for(var i=0; i<arr_1.length; i++){
  	arr_2[i] = arr_1[i].split(" ");
  }
  // stdout each arr_2(j) reversed and joined into a string
  for(var j = 0; j< arr_2.length ; j++){
  	var str_reversed = arr_2[j].reverse().join().replace(/,/g," ");
  	console.log(str_reversed)
  }

});


