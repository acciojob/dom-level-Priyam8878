//your JS code here. If required.
const lt = document.getElementsByTagName("li");
//console.log(lt[2])
for(let i=0 ;i<lt.length;i++){
    if(lt[i].id == "level"){
        alert("The level of the element is: "+i);
        break;
    }
}
