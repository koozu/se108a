const _ = module.exports = {}

/*
_.dropRight([1, 2, 3]);
 => [1, 2]
 
_.dropRight([1, 2, 3], 2);
 => [1]
 
_.dropRight([1, 2, 3], 5);
 => []
 
_.dropRight([1, 2, 3], 0);
 => [1, 2, 3]
*/

_.dropRight = function (list, n=1) {
    const rlist = []
    for (let i=0; i<list.length-n; i++) {
      rlist.push(list[i])
    }
    return rlist
  }

/*
_.difference([2, 1], [2, 3]);
 => [1]
*/

_.difference = function(list1,list2){
    const olist = []
    let count
    for(let i=0;i<list1.length;i++){
        count = 0
        for(let j=0;j<list2.length;j++){
            if(list1[i]==list2[j]) break
            count++
        }
        if(count==list2.length) olist.push(list1[i])
    }
    return olist
}

/*
_.initial([1, 2, 3]);
 => [1, 2]
*/

_.initial = function(list){
    const olist = []
    for(let i=0;i<list.length-1;i++)
    {
        olist.push(list[i])
    }
    return olist;
}