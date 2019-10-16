function f(n){
    if (n < 0) throw Error('fibonacci:n < 0')
    if (n === 0) return 0
    if (n === 1) return 1
    var a = 0
    var b = 1
    var c = 0
    for(var i = 2; i <= n; i++)
    {
        c = 3 * b + 2 * a
        a = b
        b = c
    }
    return c;
}

var startTime = Date.now()
console.log('fibonacci(30)=', f(30))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)