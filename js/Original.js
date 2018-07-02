/*
ウィンドウサイズを変更した際に画面幅を変更する関数
*/
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
var flag=false;
var x=1;
 function FUNCIMG (img,url)
{
<<<<<<< HEAD
  var ancurl=document.getElementById('AncerUrl');
  var imgsrc=document.getElementById('TopFrame');
   var a= a =>( x * x);
if(imgsrc.src!=img)
  {
    x++;
    alert(a());
    imgsrc.style.opacity=0;
    //無名関数にアロー演算子を使うことで中身を書きreturnで返すことができる。
    setTimeout(()=>{imgsrc.style.opacity=1;imgsrc.src=img;},500);
  }
  else
  {
      return;
  }
=======
  var ImgSrc=document.getElementById('TopFrame');
  var a=document.getElementById('777');

  a.style.opacity=0.5;
  ImgSrc.style.opacity=1;


 ImgSrc.src=img;
>>>>>>> d129485ec24e060e92203b90a6f12477e6f07515

    //不透明度の処理
  ancurl.href=url;
}



/*
画像をスライドさせる為の関数
*/

var cnt=0;

function PlusScr()
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
