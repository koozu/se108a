var fib = [0, 1]

function f (n) {
    if (n < 0) throw Error('fibonacci:n < 0')
    if (fib[n] != null) return fib[n]
    fib[n] = 3*f(n-1) + 2*f(n-2)
    return fib[n]
  }
  
  var startTime = Date.now()
  console.log('fibonacci(30)=', f(30))
  var endTime = Date.now()
  var milliSeconds = endTime - startTime
  console.log('time:%dms', milliSeconds)