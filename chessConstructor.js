
function Tile( f, r){ //Constructor
    this.file = f;
    this.row = r;
    if(this.corrupted()){
        this.file = "a", this.row =1
    }
}
Tile.prototype.print = function() {
    console.log("file:"+this.file)
    console.log("row:"+this.row)
}
Tile.prototype.corrupted = function() {
   var corrupt = false
   if(this.row<0 || this.row>8 || this.file<'a' || this.file>'h'){
    corrupt = true
   }
   return corrupt
}

var t1 = new Tile('a',1) //Object 
var t2 = new Tile('b',2)
var t3 = new Tile('m',3)

t1.print()
t2.print()
t3.print()
console.log(t3.corrupted())
console.log(t1.corrupted())

function pieces(c , t, l) {
    this.color = c
    this.type = t
    this.location = l
}
pieces.prototype.print = function() {
    console.log("color:"+this.color)
    console.log("type:"+this.type)
    console.log("location:"+this.location)
}

var p1 = new pieces(true, 'King', t1)
var p2 = new pieces(false, 'Queen', t2)

p1.print()
p2.print()