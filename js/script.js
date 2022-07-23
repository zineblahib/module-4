


var names =["zineb" , "amine" ,"Jasmin" ,"fatima" ,"john" ,"jamila"];



function firstlettre(mot){  
return mot[0].toLowerCase();
};

// firstlettre("zineb");



function good() {

  for(var i =0 ;i<names.length;i++){
        if(firstlettre(names[i]) === "j" ){
             console.log("Hello " +names[i]);
        }
        else{
            console.log("Goodbye " +names[i]);
        }  
  }  
};

good();









