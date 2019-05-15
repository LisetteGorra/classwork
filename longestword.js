







function find_longest_word(str)
{
  var array = str.match(/\w[a-z]{0,}/gi);
  var result = array[0];

  for(var i = 1 ; i < array.length ; i++)
  {
    if(result.length < array[i].length)
    {
    result = array[i];
    } 
  }
  return result;
}
console.log(find_longest_word('The quick brown fox jumped over the lazy dog'));