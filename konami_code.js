const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  // Write your JavaScript code inside the init() function
var konami = parseInt(e.detail || e.which);
for(var i=0; i < code.length; i++){
  if(konami === code[i]){
    i++;
    if(konami === code.length){
      alert("Congratulation!")
      i = 0;
    }
  }else{
    i = 0;
  }
}
}
