let full_total=0;
function update()
{
    let action=document.getElementById("phys").value.split(",")
    document.getElementById("physImage").src=action[1]
    document.getElementById("result").innerHTML=""
    document.getElementById("count").value=""
}
function calories()
{

 let count=parseInt(document.getElementById("count").value)
 let calories_one=document.getElementById("phys").value.split(",")
 if(count<1)
 {
 document.getElementById("result").innerHTML="Введіть додатнє число"
 }
 let total=count*calories_one[0]
 document.getElementById("result").innerHTML=total+"Ккал за "+count+"повторень"
 document.getElementById("count").value=""
 let name=calories_one[2]
 let list=document.getElementById("vprava")
 let item=document.createElement("li")
 item.textContent=name+" "+total+"Ккал"
 list.appendChild(item)
full_total=full_total+total;
 document.getElementById("total_ccal").innerHTML=full_total+"Ккал"
}