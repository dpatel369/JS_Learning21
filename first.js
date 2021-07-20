function myFunction() {
        var x = document.getElementById("in").value;
        var z = document.getElementById("format").value;
        var b = document.getElementById("ball").value;
        switch(z){
            case "odi":
                if(x%1 !== 0 || b%1 !== 0){
                    alert("Enter valid a valid number")
                }else{
                var y = document.getElementById("odi").innerHTML;
                var a = document.getElementById("odim").innerHTML;
                var c = document.getElementById("odiball").innerHTML;
                document.getElementById("odi").innerHTML = (parseFloat(x)+parseFloat(y));
                document.getElementById("odim").innerHTML = (parseFloat(a)+1);
                document.getElementById("odiball").innerHTML = (parseFloat(c)+parseFloat(b));
                }
                break;
            case "t20":
                if(x%1 !== 0 ||b%1 !== 0){
                    alert("Enter valid a valid number")
                }else{
                var y = document.getElementById("t20").innerHTML;
                var a = document.getElementById("t20m").innerHTML;
                var c = document.getElementById("t20ball").innerHTML;
                document.getElementById("t20").innerHTML = (parseFloat(x)+parseFloat(y));
                document.getElementById("t20m").innerHTML = (parseFloat(a)+1);
                document.getElementById("t20ball").innerHTML = (parseFloat(c)+parseFloat(b));

                }
                break;
            case "ipl":
                if(x%1 !== 0 ||b%1 !== 0){
                    alert("Enter valid a valid number")
                }else{
                var y = document.getElementById("ipl").innerHTML;
                var a = document.getElementById("iplm").innerHTML;
                var c = document.getElementById("iplball").innerHTML;
                document.getElementById("ipl").innerHTML = (parseFloat(x)+parseFloat(y));
                document.getElementById("iplm").innerHTML = (parseFloat(a)+1);
                document.getElementById("iplball").innerHTML = (parseFloat(c)+parseFloat(b));

                }
                break;
            case "test":
                if(x%1 !== 0 ||b%1 !== 0){
                    alert("Enter valid a valid number")
                }else{
                var y = document.getElementById("test").innerHTML;
                var a = document.getElementById("testm").innerHTML;
                var c = document.getElementById("testball").innerHTML;
                document.getElementById("test").innerHTML = (parseFloat(x)+parseFloat(y));
                document.getElementById("testm").innerHTML = (parseFloat(a)+1);
                document.getElementById("testball").innerHTML = (parseFloat(c)+parseFloat(b));
                }
                break;
        }
    }

function bioInfo() {
    document.getElementById("description").contentEditable = "true";
}