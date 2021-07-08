var a = [1,3,2,4]

var mid = (a.length)/2

left = a.slice(0, mid)
right = a.slice(mid, a.length)
left[0] = 10
console.log(left)
console.log(right)
console.log(a)
