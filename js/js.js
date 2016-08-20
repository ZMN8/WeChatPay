/**
 * Created by Administrator on 13-6-7.
 */
/*index_js_code*/
var liNodes=document.querySelectorAll(".nav li");
var iNode=document.querySelector(".cur");

for(var i in liNodes){
    liNodes[i].index=i;
    liNodes[i].onmouseover=function(){
        var dist=this.offsetLeft;
        iNode.style.left=dist+"px";
    }
    liNodes[i].onmouseleave=function(){
        iNode.style.left=0+"px";
    }
}

//点击播放flash
var flash01,flash02;
$(".flash_bt span").click(function(){
    var nowPos=$(this).index();
    var oldPos=$(".curpage").index();
    if(nowPos==oldPos) return;
    $(this).addClass("curpage").siblings("span").removeClass("curpage");
    $(".flash_bg li").eq(nowPos).fadeIn(2000);         //更改flash背景图
    $(".flash_bg li").eq(oldPos).fadeOut(2000);
    if(nowPos>oldPos)                               //右移
    {
        clearTimeout(flash01);
        clearTimeout(flash02);
        flash01=setTimeout('flashLeftOut'+oldPos+'()',10);
        flash02=setTimeout('flashLeftIn'+nowPos+'()',1500);

    }else{                                      //左移
        clearTimeout(flash01);
        clearTimeout(flash02);
        flash01=setTimeout('flashRightOut'+oldPos+'()',10);
        flash02=setTimeout('flashLeftIn'+nowPos+'()',800);
    }
});
function flashLeftOut0(){
    $(".flash_con1_text1").stop(false, true).animate({left:"200px"},200,function(){
             $(".flash_con1_text1").stop(false,true).animate({left:"-200px",opacity:0},300,function(){
                 $(".flash_con1_nav").stop(false,true).fadeOut("slow");
                 $(".flash_con1_text2").stop(false,true).animate({left:"200px"},200,function(){
                     $(".flash_con1_text2").stop(false,true).animate({left:"-200px",opacity:0},300,function(){
                        $(".flash_con1_phone").stop(false,true).animate({right:"-100px"},200, function () {
                            $(".flash_con1_phone").stop(false,true).animate({right:"1500px"},600)
                        })
                     })
                 })
             })
    })
}

function flashRightOut1(){
    $(".flash_con2_tel").stop(false,true).animate({right:"60px"},200,function(){
        $(".flash_con2_tel").stop(false,true).animate({right:"-1000px",opacity:0},300);

        $(".flash_con2_cloud").stop(false,true).animate({left:"60px"},200,function(){
            $(".flash_con2_cloud").stop(false,true).animate({left:"2000px",opacity:0},300);
                $(".flash_con2_text3").stop(false,true).animate({left:"90px"},200,function(){
                    $(".flash_con2_text3").stop(false,true).animate({left:"2000px",opacity:0},600)
                })

        })
    })
}
function flashLeftOut1(){
    $(".flash_con2_text3").stop(false,true).animate({left:"270px"},200,function(){
        $(".flash_con2_text3").stop(false,true).animate({left:"-1200px",opacity:0},300);

        $(".flash_con2_cloud").stop(false,true).animate({left:"270px"},200,function(){
                $(".flash_con2_cloud").stop(false,true).animate({left:"-1200px",opacity:0},300,function(){
                    $(".flash_con2_tel").stop(false,true).animate({right:"-100px"},200,function(){
                        $(".flash_con2_tel").stop(false,true).animate({right:"3500px",opacity:0},600)
                    })
                });



        })
    })
}
function flashRightOut2(){
    $(".flash_con3_permit").stop(false,true).animate({right:"6px"},200,function(){
        $(".flash_con3_permit").stop(false,true).animate({right:"-1000px",opacity:0},300);

        $(".flash_con3_text2").stop(false,true).animate({left:"80px"},200,function(){
            $(".flash_con3_text2").stop(false,true).animate({left:"1000px",opacity:0},300)
        });
        $(".flash_con3_text").stop(false,true).animate({left:"60px"},200,function(){
            $(".flash_con3_text").stop(false,true).animate({left:"1000px",opacity:0},300)
        })
    })
}
//淡入
function flashLeftIn0(){
    $(".flash_con1_text1").stop(false,true).animate({left:"121px",opacity:1},200);
    $(".flash_con1_text2").stop(false,true).animate({left:"118px",opacity:1},300);
    $(".flash_con1_phone").stop(false,true).animate({right:"16px",opacity:1},400);
    $(".flash_con1_nav").stop(false,true).fadeIn("slow");
}

function flashLeftIn1(){
    $(".flash_con2_text3").stop(false,true).animate({left:"168px",opacity:1},300);
    $(".flash_con2_cloud").stop(false,true).animate({left:"162px",opacity:1},300);
    $(".flash_con2_tel").stop(false,true).animate({right:"12px",opacity:1},400);
}

function flashLeftIn2(){
    $(".flash_con3_text").stop(false,true).animate({left:"168px",opacity:1},100);
    $(".flash_con3_text2").stop(false,true).animate({left:"162px",opacity:1},200);
    $(".flash_con3_permit").stop(false,true).animate({right:"18px",opacity:1},300);
}

//自动播放flash
function flashAuto(){
    var newPos;
    var lastPos=$(".flash_bt span:last").index();
    var oldPos=$(".curpage").index();
    if(lastPos==oldPos)
        newPos=0;
    else
        newPos=oldPos+1;
    $(".flash_bt span").eq(newPos).addClass("curpage").siblings("span").removeClass("curpage");
    $(".flash_bg li").eq(oldPos).fadeOut(2000);
    $(".flash_bg li").eq(newPos).fadeIn(2000);
    if(newPos>oldPos)                               //右移
    {
        clearTimeout(flash01);
        clearTimeout(flash02);
        flash01=setTimeout('flashLeftOut'+oldPos+'()',10);
        flash02=setTimeout('flashLeftIn'+newPos+'()',1500);

    }else{                                      //左移
        clearTimeout(flash01);
        clearTimeout(flash02);
        flash01=setTimeout('flashRightOut'+oldPos+'()',10);
        flash02=setTimeout('flashLeftIn'+newPos+'()',800);
    }
}
var  flashDo=setInterval(flashAuto,3000);
$(".flash").mouseleave(function(){      //鼠标离开时自动播放
    flashDo=setInterval(flashAuto,3000);
});
$(".flash").mouseenter(function(){      //鼠标进入停止播放
    clearInterval(flashDo);
});

/*about_js_code*/
var isopen=false;
var w=200;
var h=200;
var newImg;
$(".about_img img").click(function(){
    newImg=this;
    if(!isopen)
    {
        isopen=true;
        $(this).width($(this).width()+w);
        $(this).height($(this).height()+h);
        moveImg(-100,-100);
    }else{
        isopen=false;
        $(this).width($(this).width()-w);
        $(this).height($(this).height()-h);
        moveImg(100,100);

    }
    console.log(isopen);
});
function moveImg(left ,top){
    var offset=$(newImg).offset();
    $(newImg).offset({top:offset.top+top,left:offset.left+left});

}