//移除数组中与指定item相同的元素，并且返回新的数组
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
//本题出错的关键在于return出错
//return需要跳出循环