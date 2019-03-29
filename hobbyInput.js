//第一阶段

function writeHobby(){
    var hobby=[];
    console.log(hobby.length);
    var input=document.getElementById("hobby1").value;
    var error=document.getElementById("addbtn");
    text = input.split(' ');
    for(var i=0;i<text.length;i++){
        hobby.push(text[i]);
    }
    console.log(hobby);
    if(hobby[0]===''){
        error.innerHTML="请输入至少一个爱好!"
    }else if(hobby.length>10){
        error.innerHTML="用户爱好只能输入十个"
    }else{
        error.innerHTML="addbtn";
        arr=[];
        for(var j=0;j<hobby.length;j++){
            if(hobby.indexOf(hobby[j])===j){
                arr.push(hobby[j]);
            }
        }
        var show=document.createElement('div');
        show.className='show';
        var h=document.createElement('h3');
        h.innerHTML='爱好：';
        show.appendChild(h);
        for(var m=0;m<arr.length;m++){
            var checkbox=document.createElement('input');
            checkbox.type='checkbox';
            show.appendChild(checkbox);
            var node=document.createTextNode(arr[m]+' ');
            show.appendChild(node)
        }
        document.getElementsByTagName('body')[0].appendChild(show);
    }

}










