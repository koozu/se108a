const _ = module.exports = {}

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

