function makeid(l) {
  // write your code here
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
  
    for (let i = 0; i < l; i++) {
      const randomIndex = Math.floor(Math.random( ) * characters.length); 
                        // math.floor( 0.50         *     62          )
                        //math.floor ( 31.0)
                        // 31 
      result = result +  characters[randomIndex];
               // " " +   characters[31]
               //" "  +    f =  " f "
    }
  
    return result;
  }
	


// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
