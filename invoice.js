function myFunction(){
    var x = document.getElementById("selection").value
    var y = document.getElementById("txtfield").value
    
    

    if(x==="coffee"){
        document.getElementById("table").innerHTML+= "<tr><td>"+x+"</td><td>"+y+"</td><td class='total'>"+100*y+"</td></tr>"
    }

    else if(x==="shake"){
        document.getElementById("table").innerHTML+= "<tr><td>"+x+"</td><td>"+y+"</td><td class='total'>"+70*y+"</td></tr>"
    }
    else if(x==="icecream"){
        document.getElementById("table").innerHTML+= "<tr><td>"+x+"</td><td>"+y+"</td><td class='total'>"+150*y+"</td></tr>"
    }

    var a = document.getElementsByClassName("total")
    var result = 0

    for(i=0; i<a.length; i++){
        result = result + parseInt(a[i].innerText)
    }

    document.getElementById("gfield").innerText = result
}






