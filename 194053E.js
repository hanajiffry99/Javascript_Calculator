//function for displaying values
function display(val)
{
  document.getElementById("values").value+=val; 
}


//function for evaluation
function Result()
{
let x = document.getElementById("values").value;
let y = eval(x);
if(isNaN(y)==false)
document.getElementById("values").value = y;
else
alert("Error!Try Again...")
}


//function for clearing the display
function Clear()
{
document.getElementById("values").value = " ";
}


//function for deleting the previous value
function Delete()
{
    document.getElementById("values").value = document.getElementById("values").value.slice(0,-1);  
}

