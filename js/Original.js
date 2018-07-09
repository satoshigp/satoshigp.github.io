/*
ウィンドウサイズを変更した際に画面幅を変更する関数
*/
function responsiv()
 {
   var widthsize=document.body.clientWidth;//現在のウィンドウサイズの取得
   var main= document.getElementById('main');//idの取得
   var side= document.getElementById("side");
   var  maincont= document.getElementById('maincont');//グローバル変数
   main.clientWidth=widthsize;//現在のウィンドウサイズを最大ウィンドウ幅に代入
    var haba=widthsize*0.2;
    side.style.width=haba+"px";
    maincont.style.left=side.style.width;
    maincont.style.width=widthsize-haba+"px";
 }

 //TOPの画像表示範囲の設定。



//マウスを枠の中に入れたらTOP画像が変わる仕組み。
 function FUNCIMG (img,url)
{

  var ancurl=document.getElementById('AncerUrl');
  var imgsrc=document.getElementById('TopFrame');


if(imgsrc.src!=img)
  {
    imgsrc.style.opacity=0;
    //無名関数にアロー関数（ラムダ式）を使うことで関数内ををreturnで返すことができる。
    setTimeout(()=>{imgsrc.style.opacity=1;imgsrc.src=img;ancurl.href=url;},500);
  }
  else
  {
      return;
  }
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
