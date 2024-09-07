var flag=0


function buttonClick(val)
{
    if(flag==1){
      console.log("working");
      if (document.getElementById("screen").value=="Hey"){
          clearScreen();

      }
      document.getElementById("screen").value+=val;
    }else{
        alert(" Plz Switch ON button:")
    }
}

function  clearScreen()
{
    document.getElementById("screen").value=""
}
function equalClick(){
    var text1=document.getElementById("screen").value
    var result=eval(text1)
    document.getElementById("screen").value=result
}
function Onbtn(){
    flag=1
    document.getElementById("screen").value="Hey";
    
    
    
}
function offbtn(){  
    flag=0;
    clearScreen();
    document.getElementById("screen").value="Thank you "
}
