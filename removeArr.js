//移除数组中与指定item相同的元素，并且返回新的数组
//push()方法
//本题出错的关键在于return出错
//return需要跳出循环
function remove(arr, item) {
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]!=item){
            newArr.push(arr[i]);
        }
        // return newArr;
    }
    return newArr;
}


//splice()方法
//splice() 方法通过删除或替换现有元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
//splice(start,deleteCount,item1,item2)
//start是指开始修改的位置，如果是负值，则表示从末尾开始（最开始是-1),比如删除数组最后一个元素，就是arr.splice(-1)
//deleteCount是指要移除元素的个数，如果是0则表示不需要修改，只需要增加；如果deleteCount个数大于从start开始的元素的个数或者省略，那么开始后面所有的元素都要移除
//item表示要添加进数组的元素，如果不指定，那么splice将只删除元素
//使用splice时切记要处理数组长度 比如i的自增自减
function remove1(arr,item){
    var newarr = arr.slice(0);//使用slice（0）来复制数组
    console.log(newarr);
    for(var i=0;i<newarr.length;i++){
        if(newarr[i] == item){
            newarr.splice(i,1);
            i--;
        }
    }
    return newarr;
}
//slice() 方法返回一个新的数组对象，这一对象是一个由 begin和 end（不包括end）决定的原数组的浅拷贝。原始数组不会被改变。
//slice(begin,end)如果end省略，那么会一直拷贝到结尾；如果end是负值，表示在倒数的位置结束拷贝；
//JS拷贝数组，不能直接用var newArr = oldArr来赋值，用oldArr.slice(0)来进行浅拷贝；
//深拷贝浅拷贝


//直接修改原数组
//重点在于要将i自减！！！！因为数组长度发生了变化
function removeWithoutCopy(arr, item) {
    for(var i=0;i<arr.length;i++){
        if(arr[i]==item){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}


//删除数组第一个元素
function curtail(arr) {
    var newArr = arr.slice(0);
    newArr.splice(0,1);
    return newArr;
}

