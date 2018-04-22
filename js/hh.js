function byId(id){
    return typeof(id)==="string"?document.getElementById(id):id;
}
var main=byId("banner"),
    index=0,
    pics=byId("ad").getElementsByTagName("div"),
    dots=byId("dots").getElementsByTagName("span"),
    len=pics.length,
    timer=null;
function slideImg(){
    
    main.onmouseover=function(){
        if(timer) clearInterval(timer);
    }
    main.onmouseout=function(){
        timer=setInterval(function(){
            index++;
            if(index>=len) index=0;
            changeImg();
        },2000)
    }
    main.onmouseout();
    for(var d=0;d<len;d++){
        dots[d].id=d;
        dots[d].onclick=function(){

             index=this.id;
             changeImg();   
            }
    }
    next1.onclick=function(){
        index++;
        if(index>=len) index=0;
        changeImg();
    }
    prev1.onclick=function(){
        index--;
        if(index<0) index=len-1;
        changeImg();
    }
    
}

function changeImg(){
    for(var i=0;i<len;i++){
        pics[i].style.display='none';
        dots[i].className='';
    }
    pics[index].style.display='block';
    dots[index].className='active';
}
slideImg();
// 搜索
     $.fn.uiSearch = function(){
    var ui = $(this);
    $('.a',ui).on('click',function(){
        $('.b',ui).show();
        return false;
    });
    $('.b li',ui).on('click',function(){
        $('.a',ui).text($(this).text());
        $('.b',ui).hide();
        return false;
    });
    $('body').on('click',function(){
        $('.b').hide();
    });
    $('.b').hide();
};   
    
$(function () {

    $('.sort').uiSearch();
    });



