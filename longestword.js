var sentence = "The quick brown fox jumped over the lazy dog";
var arraySentence = sentence.split(" ");
console.log(arraySentence);
var longestWord = "";

var counter = 0;

for (var i = 0; i < arraySentence.length; i++ ){
    do
    if (arraySentence[i].length < arraySentence[i].length){
        counter++;
        longestWord++;
        
    } while (arraySentence[i].length == longestWord);
    
}
console.log(longestWord);


//     if (arraySentence[i].length <= arraySentence[i] )
//     arraySentence[i] == longestWord;
//     console.log(longestWord[i]);
// }













// function find_longest_word(str)
// {
//   var array = str.match(/\w[a-z]{0,}/gi);
//   var result = array[0];

//   for(var i = 1 ; i < array.length ; i++)
//   {
//     if(result.length < array[i].length)
//     {
//     result = array[i];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('The quick brown fox jumped over the lazy dog'));