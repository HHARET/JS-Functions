function isPasswordValid(input){
  hasUppercase(input);
  if(!hasUppercase(input)){
    console.log("Please log an upperCase letter ");
  };
   hasUppercase(input);
  if(!hasLowercase(input)){
    console.log("Please log a lower Case letter ");
  };
  isLongEnough(input);
  if(!isLongEnough(input)){
    console.log("Password must be at least 8 characters");
  }
  specialCharacter(input);
  if(!specialCharacter(input)){
    console.log("the password must contain at least one special character");
  }
}

function hasUppercase(input){
  for(var i=0;i<input.length;i++){
    if (input[i]===input[i].toUpperCase()){
      return true;
      
    };
  };
  
};

function hasLowercase(input){
  for(var i=0;i<input.length;i++){
    if (input[i]===input[i].toLowerCase()){
      return true;
      
    };
  };
  
};

function isLongEnough(input){
  if(input.length>8){
    return true;
  };
};

function specialCharacter(input){
  var specialCharacter =[".",",","!","$","%","&"];
  for(var i=0;i<input.length;i++){
    for(var j=0;j<specialCharacter.length;j++){
      if(input[i]===specialCharacter[j]){
        return true;
      }
    }
  }
}

isPasswordValid("TTTa123455.");
