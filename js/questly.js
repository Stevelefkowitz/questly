// var name = prompt('What is your name?');
//
// if (name  && name !== 'null') {
//   document.writeln('<p>Hi there, ' + name  +'!</p>');
// }
//
// else {
//   document.writeln('<p>Fine. Be that way.</p>');
//
// }


//questions
var knightName = prompt("What is your name?");
if (!knightName || knightName === 'null' ) {
  knightName = 'Stupidhead';
}

var questName = prompt("What is your quest?");
if (!quest || quest === 'null') {

  questName = 'to become more cooperative';
}


var colorName = prompt("What is your favorite color?");
if (!colorName || colorName=== 'null'){

  colorName = 'clear';
}

document.writeln('<p>There once was a warrior named ' + knightName +
' on a mighty quest indeed: ' + questName + '. Luckily, ' + knightName +
' was wearing lucky socks&mdash;colored ' + colorName + '</p>');



//output

if (knightName && knightName !== 'null') {
  knightName = "stupidhead";
}
document.writeln('<p>None Shall Pass, '+ knightName +'!</p>.');
document.writeln('<p>Not on my watch you don\'t' + questName +'!</p>' );
document.writeln('<p>No it isnt, ' + colorName + '. Oh wait, yes it is!</p>');
