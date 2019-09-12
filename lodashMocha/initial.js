const _ = module.exports = {}

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