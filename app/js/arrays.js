
var x = 0;
var array = Array();


function add_element_to_array()
{var product = {id:document.getElementById("text1").value
            , label:document.getElementById("text2").value
            , price:document.getElementById("text3").value};
    array.push( product);
     alert("Element added at index " + x);
     x++;
    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";
    document.getElementById("text3").value = "";
}

function display_array()
{
   var e = "<hr/>";

   for (var y=0; y<array.length; y++)
   {
     e += "Index " + y + " : " + array[y].id
          +" "+array[y].label+" "+array[y].price  + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}


function remove_array_element(){
   var ind=document.getElementById("text4").value
   if (ind>=0&&ind<array.length){
          array.splice(ind,1)
         alert("Element removed");
        }
        else {
          alert("OutOfBounds :) ");
        }
    document.getElementById("text4").value = "";
    display_array();
}
