var hello = " hello 10 times!";
var names = ["Arnell", "David", "Lisette", "Waldo", "Joseph", "Stephanie", "Nicole", "Waldo"];
var counter = 0;

for ( var i = 0; i <= names.length; i++){
    if(names[i] == "Waldo"){
        counter++;
        if(counter == 1){
        console.log("Found", names[i], "in position", i);
        }
        
    }
}


