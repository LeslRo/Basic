//求平方，Math.pow(x,y) 方法可返回 x 的 y 次幂的值。
function square(arr) {
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        newArr.push(Math.pow(arr[i],2));
    }
    return newArr;
}
