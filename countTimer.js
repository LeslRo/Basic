// 实现一个打点计时器，要求
// 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
// 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
// 3、第一个数需要立即输出

//setInterval() 方法会按照指定周期不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
//由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。注意第一个数需要立即输出即可。
//setInterval(code,delay)或者setInterval(function,delay),function是可以在此处重复调用的函数，delay是延迟时间，比如此处就是延迟100ms


//count1这种做法不能通过测试，对比如下count()函数，不需要start实际自增？
function count1(start, end) {
    console.log(start);
    var time = setInterval(
        function(){
            if(start<=end)
            {start++;
                console.log(start++);}
            else{
                clearInterval(time);
            }
        },100);
    return {cancel:function(){clearInterval(time)}};
}

function count(start, end) {
    //立即输出第一个值
//如果start没有自加，会导致后面计时出现两个相同值的start
    console.log(start++);
    var timer = setInterval(function(){
        if(start <=end){
            console.log(start++);
        }else{
            clearInterval(timer);
        }
    },100);
    //返回一个对象
    return {
        cancel : function(){
            clearInterval(timer);
        }
    };
}
// count(1,10);
count1(1,10);