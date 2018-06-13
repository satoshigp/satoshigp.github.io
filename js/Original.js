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
 //var dumyImgSrc=this.Item();
//console.log(dumyImgSrc);
 ImgSrc.src=img;
 ImgSrc.style.opacity=1;
}

var cnt=0;

function  PlusScr()
{
 var min=0;
 var max=document.getElementsByName('Items').length;
 var wall=document.getElementById("FrameWall").style;
 if(cnt==max-1)
 {
   cnt=0;
   wall.transform="translateX(0px)";
 }
 else
 {
   cnt++;
   wall.transform+="translateX(-120px)";
 }

}
function MinusScr()
{
  var wall=document.getElementById("FrameWall").style;

if(cnt==0)
  {
    cnt=4;
    wall.transform="translateX(-480px)";
  }
  else
  {
    wall.transform+="translateX(120px)";
    cnt--;
  }


}
