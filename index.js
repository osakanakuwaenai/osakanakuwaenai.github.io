function isIe() {
  var ua = navigator.userAgent;
  return ua.indexOf('MSIE ')  > -1 || ua.indexOf('Trident/')> -1;
};
function isPhone() {
  var ua = navigator.userAgent;
  return ua.indexOf("iPhone") > 0  || ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0;
}

function isHamburger() {
  const select_element = document.querySelector(":root");
  const select_style = getComputedStyle(select_element , ':root');
  const is_hamburger = Number(select_style.getPropertyValue("--is-hamburger"));
  alert(!!is_hamburger)
  return !!is_hamburger;
};
function isOpera() {
  var ua = navigator.userAgent;
  return ua.indexOf("OPR")    > -1 || ua.indexOf("Opera")   > -1;
}

if (isIe()) {
  let yst = document.getElementById("yes-script-text");
  yst.innerHTML = `
<div class="alert">厳重警告:<br>
&emsp;あなたは<u>InternetExplorer</u>(以下IE)を使っています。<br>
&emsp;これがどんなに罪なことか、あなたにはきっと分からないでしょう。<br>
&emsp;日本の刑法には載っている<u>訳ではありません</u>が、<u>IEの存在により<b><span style="font-size:large">多く</b></span>のwebエンジニアが<b><span style="font-size:large">頭を抱えて</b></span></u>います。<br>
&emsp;<i>アップデートに期待しないでください</i>。<u>IEは<b><span style="font-size:large">既に全てのバージョンで</b></span>サポートが終了しています</u>。<br>
&emsp;もしかしたら、上のヘッダーもバグを引き起こしているでしょう。<br>
&emsp;それは、IEの特徴、「大量かつ重大なバグの存在」です。特にIE10以下。<br>
&emsp;ハッキングを行い、IEでページを見ようとしないでください。<br>
&emsp;この警告は、「あなたのために」行っているのです。<br>
&emsp;IEの世界はおしまいです。edgeと言う、IEの代替ブラウザも(個人的には)オススメしません。<br>
&emsp;このサイトはChromeでデバッグを行いながら製作したものですので、<b><span style="font-size:large"><i><u>IEはゴミ箱に入れて、Chromeという神に縋りましょう。</u></i></b></span><br><br>
&emsp;Chromeはこちら。<br>
&emsp;<a href="https://www.google.com/intl/ja_jp/chrome/">https://www.google.com/intl/ja_jp/chrome/</a><br><br>
&emsp;まさかとは思いますが、<b><span style="font-size:large"><u>一応</u></b></span>Edgeも。<br>
&emsp;<a href="https://www.microsoft.com/ja-jp/edge/">https://www.microsoft.com/ja-jp/edge/</a></div>
<div class="sober center">もはや洗脳でしょこれ...</div>`;
};/**/
if (isOpera()) {
  let yst = document.getElementById("yes-script-text");
  yst.innerHTML = ` 
<div class="warn">警告:<br>
&emsp;あなたは<u>Opera</u>を使っています。<br>
&emsp;<u>実はOperaは現在、<b><span style="font-size:large">中国</b></span>の会社が<b><span style="font-size:large">管理しています</b></span></u>。<br>
&emsp;<i>別に他のサイトを見る際に使ってもらっても構いません。</i><u>しかし、<b><span style="font-size:large">Chromeと比べると圧倒的に使いにくい</span></b>でしょう</u>。<br>
&emsp;もしかしたら、上のヘッダーもバグを引き起こしているでしょう。<br>
&emsp;それは、先ほども話しましたが、Operaの特徴、「基本機能未実装」です。<br>
&emsp;このサイトはChromeでデバッグを行いながら製作したものですので、<b><span style="font-size:large"><i><u>Operaはゴミ箱に入れて、Chromeという神に縋りましょう。</u></i></b></span><br><br>
&emsp;Chromeはこちら。<br>
&emsp;<a href="https://www.google.com/intl/ja_jp/chrome/">https://www.google.com/intl/ja_jp/chrome/</a><br><br>
&emsp;まさかとは思いますが、<b><span style="font-size:large"><u>一応</u></b></span>Edgeも。<br>
&emsp;<a href="https://www.microsoft.com/ja-jp/edge/">https://www.microsoft.com/ja-jp/edge/</a></div>
<div class="sober center">もはや洗脳でしょこれ...</div><br><br><br><br><br><br><br>`;
};/**/
let hdr = document.querySelector("header");
hdr.innerHTML = `
  <nav>
    <input type="checkbox" id="^hamburger-io">
    <label for="^hamburger-io" id="^hamburger"><span></span></label>
    <ul>
      <li><a href="//osakanakuwaenai.github.io">&emsp;HOME&emsp;</a></li>
      <li><a href="//osakanakuwaenai.github.io/programing">&emsp;プログラミング&emsp;</a>
        <ul>
          <li><a href="//osakanakuwaenai.github.io/programing/js">Java Script</a></li>
          <li><a href="//osakanakuwaenai.github.io/programing/scratch">Scratch</a></li>
        </ul>
      </li>
      <li><a href="//osakanakuwaenai.github.io/minecraft">&emsp;&emsp;マイクラ&emsp;&emsp;</a>
        <ul>
          <li><a href="//osakanakuwaenai.github.io/minecraft/building">建築</a></li>
          <li><a href="//osakanakuwaenai.github.io/minecraft/redstone">赤石</a></li>
          <li><a href="//osakanakuwaenai.github.io/minecraft/rtm">RealTrainMod</a></li>
          <li><a href="//osakanakuwaenai.github.io/minecraft/others">その他のMOD</a></li>
        </ul>
      </li>
      <li><a href="//osakanakuwaenai.github.io/music">&emsp;&emsp;&emsp;作曲&emsp;&emsp;&emsp;</a>
        <ul>
        <li><a href="//osakanakuwaenai.github.io/music/original">オリジナル曲・BGM</a></li>
          <li><a href="//osakanakuwaenai.github.io/music/second">二次創作</a></li>
          <li><a href="//osakanakuwaenai.github.io/music/others">その他</a></li>
        </ul>
      </li>
      <li><a href="//osakanakuwaenai.github.io/pictures">&emsp;&emsp;&emsp;&emsp;絵&emsp;&emsp;&emsp;</a>
        <ul>
          <li><a href="//osakanakuwaenai.github.io/pictures/dots">ドット絵</a></li>
          <li><a href="//osakanakuwaenai.github.io/pictures/others">その他の絵</a></li>
        </ul>
      </li>
      <li><a href="https://forms.gle/VAdJjueZNdRPJi9aA">&emsp;&emsp;制作依頼&emsp;&emsp;</a></li>
    </ul>
  </nav>
`;


window.onload = function() {
  let hthref = window.location.href;
  hthref = hthref.split("/");
  let roothref = hthref.slice(0, hthref.length - 1).join("/");
  let htname = hthref.pop().split(".")[0];
  let pnghref = `${roothref}/pngs/${htname}.title.png`;
  let h1 = document.querySelectorAll("h1")[0];
  h1.style.BackgroundImage = `url(${pnghref})`;
}


let wdt = window.innerWidth;
window.onresize = function() {
  let oldwdt = wdt;
  wdt = window.innerWidth;
  if (wdt > 780) {

  } else if (wdt <= 780) {

  }
}
