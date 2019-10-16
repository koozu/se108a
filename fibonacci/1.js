function f (n) {
  if (n < 0) throw Error('fibonacci:n < 0')
  if (n === 0) return 0
  if (n === 1) return 1
  return 3*f(n-1) + 2*f(n-2)
}

var startTime = Date.now()
console.log('fibonacci(30)=', f(30))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)