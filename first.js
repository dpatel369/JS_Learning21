function myFunction() {
        var z = document.getElementById("format").value;
        if(z ==""){
            alert("Please fill the Format field")
            return false
        }
        // if(isNaN("z") ){
        //     alert("Please fill the Format filed with correct value")
        //     return false
        // }
        var bat = document.getElementById("BAT").value;
        if(bat ==""){
            alert("Please Enter the batting information")
            return falses
        }
        var x = document.getElementById("in").value;
        if(x ==""){
            alert("Please fill the Runs field")
            return false
        }
        var b = document.getElementById("ball").value;
        if(b ==""){
            alert("Please fill the BF field")
            return false
        }
        var notout = document.getElementById("NOTOUT").value;
        if(notout ==""){
            alert("Please Enter if got out or not")
            return false
        }
        switch(z){
            case "odi" || "ODI" || "Odi":
                if(bat == "no" || bat == "NO" || bat == "No"){
                    alert("Can't update the stats did not Bat")
                    break
                }
                if(notout == "yes"){
                    var notouts = document.getElementById("odino").innerHTML;  
                    document.getElementById("odino").innerHTML = (parseFloat(notouts)+1);
                }
                if(x%1 !== 0 || x<0){
                    alert("Enter a valid number of runs")
                    return false
                }
                if(b%1 !== 0 || b<1){
                    alert("Enter a valid number of BF # ")
                    return false
                }else{
                var y = document.getElementById("odi").innerHTML;
                var a = document.getElementById("odim").innerHTML;
                var c = document.getElementById("odiball").innerHTML;
                var q = document.getElementById("odiinn").innerHTML;
                document.getElementById("odi").innerHTML = (parseFloat(x)+parseFloat(y));
                document.getElementById("odim").innerHTML = (parseFloat(a)+1);
                document.getElementById("odiball").innerHTML = (parseFloat(c)+parseFloat(b));
                document.getElementById("odiinn").innerHTML = (parseFloat(q)+1);
                }
                break;
            case "t20" || "T20" || "T20":
                if(bat == "no" || bat == "NO" || bat == "No"){
                    alert("Can't update the stats did not Bat")
                    break
                }
                if(notout == "yes"){
                    var notouts = document.getElementById("t20no").innerHTML;  
                    document.getElementById("t20no").innerHTML = (parseFloat(notouts)+1);
                }
                if(x%1 !== 0 || x<0){
                    alert("Enter a valid number of runs")
                    return false
                }
                if(b%1 !== 0 || b<1){
                    alert("Enter a valid number of BF # ")
                    return false
                }else{

                var y = document.getElementById("t20").innerHTML;
                var a = document.getElementById("t20m").innerHTML;
                var c = document.getElementById("t20ball").innerHTML;
                var q = document.getElementById("t20inn").innerHTML;
                document.getElementById("t20").innerHTML = (parseFloat(x)+parseFloat(y));
                document.getElementById("t20m").innerHTML = (parseFloat(a)+1);
                document.getElementById("t20ball").innerHTML = (parseFloat(c)+parseFloat(b));
                document.getElementById("t20inn").innerHTML = (parseFloat(q)+1);
                }
                break;
            case "ipl" || "IPL" || "Ipl":
                if(bat == "no" || bat == "NO" || bat == "No"){
                    alert("Can't update the stats did not Bat")
                    break
                }
                if(notout == "yes"){
                    var notouts = document.getElementById("iplno").innerHTML;  
                    document.getElementById("iplno").innerHTML = (parseFloat(notouts)+1);
                }
                if(x%1 !== 0 || x<0){
                    alert("Enter a valid number of runs")
                    return false
                }
                if(b%1 !== 0 || b<1){
                    alert("Enter a valid number of BF # ")
                    return false
                }else{
                var y = document.getElementById("ipl").innerHTML;
                var a = document.getElementById("iplm").innerHTML;
                var c = document.getElementById("iplball").innerHTML;
                var q = document.getElementById("iplinn").innerHTML;
                document.getElementById("ipl").innerHTML = (parseFloat(x)+parseFloat(y));
                document.getElementById("iplm").innerHTML = (parseFloat(a)+1);
                document.getElementById("iplball").innerHTML = (parseFloat(c)+parseFloat(b));
                document.getElementById("iplinn").innerHTML = (parseFloat(q)+1);
                }
                break;
            case "test" || "TEST" || "Test":
                if(bat == "no" || bat == "NO" || bat == "No"){
                    alert("Can't update the stats did not Bat")
                    break
                }
                if(notout == "yes"){
                    var notouts = document.getElementById("testno").innerHTML;  
                    document.getElementById("testno").innerHTML = (parseFloat(notouts)+1);
                }
                if(x%1 !== 0 || x<0){
                    alert("Enter a valid number of runs")
                    return false
                }
                if(b%1 !== 0 || b<1){
                    alert("Enter a valid number of BF # ")
                    return false
                }else{
                var y = document.getElementById("test").innerHTML;
                var a = document.getElementById("testm").innerHTML;
                var c = document.getElementById("testball").innerHTML;
                var q = document.getElementById("testinn").innerHTML;
                document.getElementById("test").innerHTML = (parseFloat(x)+parseFloat(y));
                document.getElementById("testm").innerHTML = (parseFloat(a)+1);
                document.getElementById("testball").innerHTML = (parseFloat(c)+parseFloat(b));
                document.getElementById("testinn").innerHTML = (parseFloat(q)+1);
                }
                break;
        }
    }

function bioInfo() {
    document.getElementById("bio").contentEditable = "true";
}

function pageload() {
    aboutDhoni()
    card()
    achiev()
    images()
    images1()
    images2()
    images3()
    playername()
}

function aboutDhoni() {
    let about = document.getElementById("bio")
    let header = document.createElement("p")
    header.innerText = "Mahendra Singh Dhoni, is a former Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. Dhoni is the only captain to have won all three ICC trophies. Under his captaincy, India won the T20 World Cup in 2007, the World Cup in 2011, and the ICC Champions Trophy in 2013"
    bio.appendChild(header)
}

function card() {
    let card = document.getElementById("card")
    let cardHeader = document.createElement("h3")
    cardHeader.innerText = "Indian cricketer"
    card.appendChild(cardHeader)
    let cardinfo = document.createElement("p")
    cardinfo.innerText = "Born - July 7, 1981"
    card.appendChild(cardinfo)
    let cardinfo1 = document.createElement("p")
    cardinfo1.innerText = "Right-Handed Batsman" 
    card.appendChild(cardinfo1)
    let cardinfo2 = document.createElement("p")
    cardinfo2.innerText = "Wicketkeeper"  
    card.appendChild(cardinfo2)
    let cardinfo3 = document.createElement("p")
    cardinfo3.innerText = "Captain COOL" 
    card.appendChild(cardinfo3)
}

function achiev() {
    let achie = document.getElementById("achievement")
    let achieheader = document.createElement("h2")
    achieheader.innerText = "Achievement's"
    achie.appendChild(achieheader)
}

function images() {
    let ach1 = document.getElementById("achievement3")
    let ach1text = document.createElement("p")
    ach1text.innerText = "2013 ICC Champions Trophy!"
    ach1.appendChild(ach1text)
    let ach1images = document.createElement("img")
    ach1images.src = "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/06/23/910420-twitter-3.jpg"
    ach1images.width = "400"
    ach1images.height = "233"
    ach1.appendChild(ach1images)
}

function images1() {
    let ach2 = document.getElementById("achievement1")
    let ach2text = document.createElement("p")
    ach2text.innerText = "2007 ICC World T20!"
    ach2.appendChild(ach2text)
    let ach2images = document.createElement("img")
    ach2images.src = "https://www.espncricinfo.com/db/PICTURES/CMS/80000/80084.jpg"
    ach2images.width = "400"
    ach2images.height = "233"
    ach2.appendChild(ach2images)
}

function images2() {
    let ach3 = document.getElementById("achievement2")
    let ach3text = document.createElement("p")
    ach3text.innerText = "2011 ICC Cricket World Cup!"
    ach3.appendChild(ach3text)
    let ach3images = document.createElement("img")
    ach3images.src = "https://static.toiimg.com/thumb/msid-74942075,width-1200,height-900,resizemode-4/.jpg"
    ach3images.width = "400"
    ach3images.height = "233"
    ach3.appendChild(ach3images)
}

function images3() {
    let bioimage = document.getElementById("biopic")
    let biopic = document.createElement('img')
    biopic.src = "https://static.toiimg.com/thumb/msid-82106773,width-1200,height-900,resizemode-4/.jpg"
    biopic.height = "333"
    biopic.width = "500"
    bioimage.append(biopic)
}

function playername() {
    let name = document.getElementById("coolmsd")
    let playername = document.createElement("h1")
    playername.innerText="Mahendra Singh Dhoni"
    name.appendChild(playername)
}

function inputform() {
    let nameofformat = document.getElementById("infotab")
    let inputofformat = document.createElement("input")
    input.type="number"
    inputofformat.placeholder = "Enter the Format"
    nameofformat.appendChild(inputofformat)
}
