function responsiv()
 {
   var widthsize=document.body.clientWidth;//現在のウィンドウサイズの取得
   var main= document.getElementById('main');//idの取得
   var side= document.getElementById("side");
   var  maincont= document.getElementById('maincont');//グローバル変数
   var MenuWid=document.getElementById('upmenu').style;
   main.clientWidth=widthsize;//現在のウィンドウサイズを最大ウィンドウ幅に代入
    var haba=widthsize*0.2;
    side.style.width=haba+"px";
    maincont.style.left=side.style.width;
    maincont.style.width=widthsize-haba+"px";

 }

 //TOPの画像表示範囲の設定。



//マウスを枠の中に入れたらTOP画像が変わる仕組み。
function FUNCIMG (img)
{
 var ImgSrc=document.getElementById('TopFrame');
 //現在の画像を取得しておく
 var dumyImgSrc=this.Item();
//console.log(dumyImgSrc);
 ImgSrc.src=img;
 ImgSrc.style.opacity=1;
}

function  PlusScr()
{
  var wall=document.getElementById("FrameWall").style;
  wall.transform+="translateX(-120px)";
}
