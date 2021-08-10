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
                if(notout == "yes" || notout == "Yes" || notout == "YES"){
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
                if(notout == "yes" || notout == "Yes" || notout == "YES"){
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
                if(notout == "yes" || notout == "Yes" || notout == "YES"){
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
                if(notout == "yes" || notout == "Yes" || notout == "YES"){
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
    inputform()
    inputform1()
    inputform2()
    inputform3()
    inputform4()
    formButton()
    scoreTable()
    odiScore()
    t20Score()
    iplScore()
    testScore()
}

function aboutDhoni() {
    let about = document.getElementById("bio")
    let header = document.createElement("p")
    header.innerText = "Mahendra Singh Dhoni, is a former Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. Dhoni is the only captain to have won all three ICC trophies. Under his captaincy, India won the T20 World Cup in 2007, the World Cup in 2011, and the ICC Champions Trophy in 2013."
    header.setAttribute("ondblclick", "bioInfo()")
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
    let nameofformat = document.getElementById("forms")
    let inputofformat = document.createElement("input")
    inputofformat.setAttribute("id", "format")
    inputofformat.setAttribute("type", "text")
    inputofformat.setAttribute("placeholder", "Enter the Format")
    nameofformat.appendChild(inputofformat)
}

function inputform1() {
    let BAT = document.getElementById("forms")
    let batinfo = document.createElement("input")
    batinfo.id = "BAT"
    batinfo.type = "text"
    batinfo.placeholder = "Did He Bat? Y/N"
    BAT.appendChild(batinfo)
}

function inputform2() {
    let inning = document.getElementById("forms")
    let inningInfo = document.createElement("input")
    inningInfo.id = "in" 
    inningInfo.type = "number"
    inningInfo.placeholder = "Enter number of Runs"
    inning.appendChild(inningInfo)
}

function inputform3() {
    let BALL = document.getElementById("forms")
    let Ballinfo = document.createElement("input")
    Ballinfo.setAttribute("id", "ball")
    Ballinfo.setAttribute("type", "number")
    Ballinfo.setAttribute("placeholder", "BF #")
    BALL.appendChild(Ballinfo)
}

function inputform4() {
    let NOTOUT = document.getElementById("forms")
    let notoutInfo = document.createElement("input")
    notoutInfo.setAttribute("id", "NOTOUT")
    notoutInfo.setAttribute("type", "text")
    notoutInfo.setAttribute("placeholder", "NOT OUT? YES/NO")
    NOTOUT.appendChild(notoutInfo)
}

function formButton() {
    let Button = document.getElementById("forms")
    let formButtons = document.createElement("button")
    formButtons.innerHTML ="SUBMIT"
    formButtons.setAttribute("onclick", "myFunction()")
    Button.appendChild(formButtons)
}

function scoreTable() {
    let table = document.getElementById("statTable")
    let tableHeader = document.createElement("tr")
    let tableHeader1 = document.createElement("th")
    tableHeader1.innerHTML = "Format"
    table.appendChild(tableHeader1)
    let tableHeader2 = document.createElement("th")
    tableHeader2.innerHTML = "Match"
    table.appendChild(tableHeader2)
    let tableHeader3 = document.createElement("th")
    tableHeader3.innerHTML = "Inn"
    table.appendChild(tableHeader3)
    let tableHeader4 = document.createElement("th")
    tableHeader4.innerHTML = "NO"
    table.appendChild(tableHeader4)
    let tableHeader5 = document.createElement("th")
    tableHeader5.innerHTML = "Runs"
    table.appendChild(tableHeader5)
    let tableHeader6 = document.createElement("th")
    tableHeader6.innerHTML = "Avg"
    table.appendChild(tableHeader6)
    let tableHeader7 = document.createElement("th")
    tableHeader7.innerHTML = "BF"
    table.appendChild(tableHeader7)
    let tableHeader8 = document.createElement("th")
    tableHeader8.innerHTML = "SR"
    table.appendChild(tableHeader8)
}

function odiScore() {
    let table1 = document.getElementById("statTable")
    let odiHeader = document.createElement("tr")
    table1.appendChild(odiHeader)
    let odiHeader1 = document.createElement("td")
    odiHeader1.innerHTML = "ODI"
    table1.appendChild(odiHeader1)
    let odiHeader2 = document.createElement("td")
    odiHeader2.innerHTML = "350"
    odiHeader2.setAttribute("id", "odim")
    table1.appendChild(odiHeader2)
    let odiHeader3 = document.createElement("td")
    odiHeader3.innerHTML = "297"
    odiHeader3.setAttribute("id", "odiinn")
    table1.appendChild(odiHeader3)
    let odiHeader4 = document.createElement("td")
    odiHeader4.innerHTML = "84"
    odiHeader4.setAttribute("id", "odino")
    table1.appendChild(odiHeader4)
    let odiHeader5 = document.createElement("td")
    odiHeader5.innerHTML = "10773"
    odiHeader5.setAttribute("id", "odi")
    table1.appendChild(odiHeader5)
    let odiHeader6 = document.createElement("td")
    odiHeader6.innerHTML = "50.6"
    table1.appendChild(odiHeader6)
    let odiHeader7 = document.createElement("td")
    odiHeader7.innerHTML = "12303"
    odiHeader7.setAttribute("id", "odiball")
    table1.appendChild(odiHeader7)
    let odiHeader8 = document.createElement("td")
    odiHeader8.innerHTML = "87.6"
    table1.appendChild(odiHeader8)
}

function t20Score() {
    let table2 = document.getElementById("statTable")
    let t20Header = document.createElement("tr")
    table2.appendChild(t20Header)
    let t20Header1 = document.createElement("td")
    t20Header1.innerHTML = "T20I"
    table2.appendChild(t20Header1)
    let t20Header2 = document.createElement("td")
    t20Header2.innerHTML = "98"
    t20Header2.setAttribute("id", "t20m")
    table2.appendChild(t20Header2)
    let t20Header3 = document.createElement("td")
    t20Header3.innerHTML = "85"
    t20Header3.setAttribute("id", "t20inn")
    table2.appendChild(t20Header3)
    let t20Header4 = document.createElement("td")
    t20Header4.innerHTML = "42"
    t20Header4.setAttribute("id", "t20no")
    table2.appendChild(t20Header4)
    let t20Header5 = document.createElement("td")
    t20Header5.innerHTML = "1617"
    t20Header5.setAttribute("id", "t20")
    table2.appendChild(t20Header5)
    let t20Header6 = document.createElement("td")
    t20Header6.innerHTML = "37.6"
    table2.appendChild(t20Header6)
    let t20Header7 = document.createElement("td")
    t20Header7.innerHTML = "1282"
    t20Header7.setAttribute("id", "t20ball")
    table2.appendChild(t20Header7)
    let t20Header8 = document.createElement("td")
    t20Header8.innerHTML = "126.1"
    table2.appendChild(t20Header8)
}

function iplScore() {
    let table3 = document.getElementById("statTable")
    let iplHeader = document.createElement("tr")
    table3.appendChild(iplHeader)
    let iplHeader1 = document.createElement("td")
    iplHeader1.innerHTML = "T20I"
    table3.appendChild(iplHeader1)
    let iplHeader2 = document.createElement("td")
    iplHeader2.innerHTML = "211"
    iplHeader2.setAttribute("id", "iplm")
    table3.appendChild(iplHeader2)
    let iplHeader3 = document.createElement("td")
    iplHeader3.innerHTML = "186"
    iplHeader3.setAttribute("id", "t20inn")
    table3.appendChild(iplHeader3)
    let iplHeader4 = document.createElement("td")
    iplHeader4.innerHTML = "70"
    iplHeader4.setAttribute("id", "iplno")
    table3.appendChild(iplHeader4)
    let iplHeader5 = document.createElement("td")
    iplHeader5.innerHTML = "4669"
    iplHeader5.setAttribute("id", "ipl")
    table3.appendChild(iplHeader5)
    let iplHeader6 = document.createElement("td")
    iplHeader6.innerHTML = "40.2"
    table3.appendChild(iplHeader6)
    let iplHeader7 = document.createElement("td")
    iplHeader7.innerHTML = "3417"
    iplHeader7.setAttribute("id", "iplball")
    table3.appendChild(iplHeader7)
    let iplHeader8 = document.createElement("td")
    iplHeader8.innerHTML = "136.6"
    table3.appendChild(iplHeader8)
}

function testScore() {
    let table4 = document.getElementById("statTable")
    let testHeader = document.createElement("tr")
    table4.appendChild(testHeader)
    let testHeader1 = document.createElement("td")
    testHeader1.innerHTML = "Test"
    table4.appendChild(testHeader1)
    let testHeader2 = document.createElement("td")
    testHeader2.innerHTML = "90"
    testHeader2.setAttribute("id", "testm")
    table4.appendChild(testHeader2)
    let testHeader3 = document.createElement("td")
    testHeader3.innerHTML = "144"
    testHeader3.setAttribute("id", "testinn")
    table4.appendChild(testHeader3)
    let testHeader4 = document.createElement("td")
    testHeader4.innerHTML = "16"
    testHeader4.setAttribute("id", "testno")
    table4.appendChild(testHeader4)
    let testHeader5 = document.createElement("td")
    testHeader5.innerHTML = "4876"
    testHeader5.setAttribute("id", "test")
    table4.appendChild(testHeader5)
    let testHeader6 = document.createElement("td")
    testHeader6.innerHTML = "38.1"
    table4.appendChild(testHeader6)
    let testHeader7 = document.createElement("td")
    testHeader7.innerHTML = "8249"
    testHeader7.setAttribute("id", "testball")
    table4.appendChild(testHeader7)
    let testHeader8 = document.createElement("td")
    testHeader8.innerHTML = "59.1"
    table4.appendChild(testHeader8)
}