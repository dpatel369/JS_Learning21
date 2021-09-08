var b = document.getElementById("body"); //array
var t = document.createElement("table");
b.appendChild(t);
t.border = 1;

function page(){
  createTable()
  createRow()
}

function createTable(){
    var color = "white"
    var pieces = [["&#9820","&#9822","&#9821","&#9819", "&#9818","&#9821","&#9822", "&#9820"], ["&#9823","&#9823","&#9823","&#9823","&#9823","&#9823","&#9823","&#9823"],["&#9817","&#9817","&#9817","&#9817","&#9817","&#9817","&#9817","&#9817"],["&#9814","&#9816","&#9815","&#9813","&#9812","&#9815","&#9816","&#9814"]]
    for(let i=0; i<8; i++) {
        t.appendChild(createRow(color, pieces, i))
        if(color== "grey"){
            color = "white"
        }else if(color=="white"){
            color = "grey"
        }
    }
}

function createRow(color, pieces, x){
    var tr = document.createElement("tr");
    var id = ["a","b","c","d","e","f","g","h"]
    for(let i=0; i<8; i++){
        let td = document.createElement("td");
        td.width = 65
        td.height = 75
        td.id = id[i] + x
        td.setAttribute("onclick", "tileSelect(id)")
        td.style = "font-size:70px"
        td.bgColor = color
        if (color === "grey") {
            color = "white";
        } else if (color === "white") {
            color = "grey"
        }
        if(x==0){
        td.innerHTML = pieces[0][i]
        }else if(x==1){
            td.innerHTML = pieces[1][i]
        } 
        if(x==6){
            td.innerHTML = pieces[2][i]
        }else if(x==7){
            td.innerHTML = pieces[3][i]
        }
        tr.appendChild(td)
    }
    return tr
}

function tileSelect(id){
    var x = document.getElementById(id)
    var nextTileID = (x.id[0]+(parseFloat(x.id[1])-1))
    var previousId = ((x.id[0]+(parseFloat(x.id[1]))))
    console.log(previousId)
    var currentPiece = (x.innerHTML)
    console.log(document.getElementById(x.id))
    if(document.getElementById(nextTileID).innerHTML == ""){
        document.getElementById(nextTileID).bgColor = "orange"
    }
    if(document.getElementById(nextTileID).bgColor == "orange"){
        document.getElementById(nextTileID).innerHTML = currentPiece
        document.getElementById(previousId).innerHTML = ""
        document.getElementById(previousId).bgColor = ""
    }
}

// function tr8(){
//     var tr8 = document.createElement("tr");
//     t.appendChild(tr8)
//     var pieces = ["&#9820","&#9822","&#9821","&#9819", "&#9818","&#9821","&#9822", "&#9820"]
//     var alpha = ["a8","b8","c8","d8","e8","f8","g8","h8"]
//     for(var i=0; i<8; i++){
//         alpha[i] = document.createElement("td");
//         alpha[i].width = 65
//         alpha[i].height = 75
//         if(i%2==0){
//             alpha[i].bgColor = "white"
//         }else{
//             alpha[i].bgColor = "grey"
//         }
//         alpha[i].innerHTML = pieces[i]
//         alpha[i].style = "font-size:70px"
//         tr8.appendChild(alpha[i])
//     }
// }

// function tr7(){
//     var tr7 = document.createElement("tr");
//     t.appendChild(tr7)
//     var pieces = ["&#9823","&#9823","&#9823","&#9823","&#9823","&#9823","&#9823","&#9823"]
//     for(var i=0; i<8; i++){
//         var t7 = document.createElement("td");
//         t7.width = 65
//         t7.height = 75
//         if(i%2==0){
//             t7.bgColor = "grey"
//         }else{
//             t7.bgColor = "white"
//         }
//         t7.innerHTML = pieces[i]
//         t7.style = "font-size:70px"
//         tr7.appendChild(t7)
//     }
// }

// function tr6(){
//     var tr6 = document.createElement("tr");
//     t.appendChild(tr6)
//     for(var i=0; i<8; i++){
//         var t6 = document.createElement("td");
//         t6.width = 65
//         t6.height = 75
//         if(i%2==0){
//             t6.bgColor = "white"
//         }else{
//             t6.bgColor = "grey"
//         }
//         t6.style = "font-size:70px"
//         tr6.appendChild(t6)
//     }
// }

// function tr5(){
//     var tr5 = document.createElement("tr");
//     t.appendChild(tr5)
//     for(var i=0; i<8; i++){
//         var t5 = document.createElement("td");
//         t5.width = 65
//         t5.height = 75
//         if(i%2==0){
//             t5.bgColor = "grey"
//         }else{
//             t5.bgColor = "white"
//         }
//         t5.style = "font-size:70px"
//         tr5.appendChild(t5)
//     }
// }

// function tr4(){
//     var tr4 = document.createElement("tr");
//     t.appendChild(tr4)
//     for(var i=0; i<8; i++){
//         var t4 = document.createElement("td");
//         t4.width = 65
//         t4.height = 75
//         if(i%2==0){
//             t4.bgColor = "white"
//         }else{
//             t4.bgColor = "grey"
//         }
//         t4.style = "font-size:70px"
//         tr4.appendChild(t4)
//     }
// }

// function tr3(){
//     var tr3 = document.createElement("tr");
//     t.appendChild(tr3)
//     for(var i=0; i<8; i++){
//         var t3 = document.createElement("td");
//         t3.width = 65
//         t3.height = 75
//         if(i%2==0){
//             t3.bgColor = "grey"
//         }else{
//             t3.bgColor = "white"
//         }
//         t3.style = "font-size:70px"
//         tr3.appendChild(t3)
//     }
// }

// function tr2(){
//     var tr2 = document.createElement("tr");
//     t.appendChild(tr2)
//     var pieces = ["&#9817","&#9817","&#9817","&#9817","&#9817","&#9817","&#9817","&#9817"]
//     for(var i=0; i<8; i++){
//         var t2 = document.createElement("td");
//         t2.width = 65
//         t2.height = 75
//         if(i%2==0){
//             t2.bgColor = "white"
//         }else{
//             t2.bgColor = "grey"
//         }
//         t2.style = "font-size:70px"
//         t2.innerHTML=pieces[i]
//         tr2.appendChild(t2)
//     }
// }

// function tr1(){
//     var tr1 = document.createElement("tr");
//     t.appendChild(tr1)
//     var pieces = ["&#9814","&#9816","&#9815","&#9813","&#9812","&#9815","&#9816","&#9814"]
//     for(var i=0; i<8; i++){
//         var t1 = document.createElement("td");
//         t1.width = 65
//         t1.height = 75
//         if(i%2==0){
//             t1.bgColor = "grey"
//         }else{
//             t1.bgColor = "white"
//         }
//         t1.style = "font-size:70px"
//         t1.innerHTML=pieces[i]
//         tr1.appendChild(t1)
//     }
// }



// function tileSelect(id){
//     var x = document.getElementById(id)
//     var nextTileID = (x.id[0]+(parseFloat(x.id[1])-1))
//     var currentPiece = (x.innerHTML)
//     console.log(document.getElementById(x.id))
//     if(document.getElementById(nextTileID).innerHTML == ""){
//         document.getElementById(nextTileID).bgColor = "orange"
//     }
//     if(document.getElementById(nextTileID).bgColor == "orange"){
//         document.getElementById(nextTileID).innerHTML = currentPiece
//         document.getElementById(currentPiece).innerHTML = ""
//     }
// }