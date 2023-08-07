'use strict';
function isIe() {
  var ua = navigator.userAgent;
  return ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
};
function isPhone() {
  var ua = navigator.userAgent;
  return ua.indexOf("iPhone") > 0 || ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0
};
if (window == window.parent) {
  if (isPhone()) {
    document.write(`
      <header>
        <nav>
        <div id="hamburger"><span></span></div>
          <ul>
            <li><a href="//osakanakuwaenai.github.io"><nobr>&emsp;HOME&emsp;</nobr></a></li>
            <li><a href="//osakanakuwaenai.github.io/programing"><nobr>&emsp;プログラミング&emsp;</nobr></a>
              <ul>
                <li><a href="//osakanakuwaenai.github.io/programing/js">Java Script</a></li>
                <li><a href="//osakanakuwaenai.github.io/programing/scratch">Scratch</a></li>
              </ul>
            </li>
            <li><a href="//osakanakuwaenai.github.io/minecraft"><nobr>&emsp;&emsp;マイクラ&emsp;&emsp;</nobr></a>
              <ul>
                <li><a href="//osakanakuwaenai.github.io/minecraft/building">建築</a></li>
                <li><a href="//osakanakuwaenai.github.io/minecraft/redstone">赤石</a></li>
                <li><a href="//osakanakuwaenai.github.io/minecraft/rtm">RealTrainMod</a></li>
                <li><a href="//osakanakuwaenai.github.io/minecraft/others">その他のMOD</a></li>
              </ul>
            </li>
            <li><a href="//osakanakuwaenai.github.io/music"><nobr>&emsp;&emsp;&emsp;作曲&emsp;&emsp;&emsp;</nobr></a>
              <ul>
                <li><a href="//osakanakuwaenai.github.io/music/original">オリジナル曲・BGM</a></li>
                <li><a href="//osakanakuwaenai.github.io/music/secound">二次創作</a></li>
                <li><a href="//osakanakuwaenai.github.io/music/others">その他</a></li>
              </ul>
            </li>
            <li><a href="//osakanakuwaenai.github.io/pictures"><nobr>&emsp;&emsp;&emsp;&emsp;絵&emsp;&emsp;&emsp;</nobr></a>
              <ul>
                <li><a href="//osakanakuwaenai.github.io/pictures/dots">ドット絵</a></li>
                <li><a href="//osakanakuwaenai.github.io/pictures/others">その他の絵</a></li>
              </ul>
            </li>
            <li><a href="https://forms.gle/VAdJjueZNdRPJi9aA"><nobr>&emsp;&emsp;制作依頼&emsp;&emsp;</nobr></a></li>
          </ul>
        </nav>
      </header>
    `);
  }
  else {
    document.write(`
    <header>
      <nav>
        <ul>
          <li><a href="//osakanakuwaenai.github.io"><nobr>&emsp;HOME&emsp;</nobr></a></li>
          <li><a href="//osakanakuwaenai.github.io/programing"><nobr>&emsp;プログラミング&emsp;</nobr></a>
            <ul>
              <li><a href="//osakanakuwaenai.github.io/programing/js">Java Script</a></li>
              <li><a href="//osakanakuwaenai.github.io/programing/scratch">Scratch</a></li>
            </ul>
          </li>
          <li><a href="//osakanakuwaenai.github.io/minecraft"><nobr>&emsp;&emsp;マイクラ&emsp;&emsp;</nobr></a>
            <ul>
              <li><a href="//osakanakuwaenai.github.io/minecraft/building">建築</a></li>
              <li><a href="//osakanakuwaenai.github.io/minecraft/redstone">赤石</a></li>
              <li><a href="//osakanakuwaenai.github.io/minecraft/rtm">RealTrainMod</a></li>
              <li><a href="//osakanakuwaenai.github.io/minecraft/others">その他のMOD</a></li>
            </ul>
          </li>
          <li><a href="//osakanakuwaenai.github.io/music"><nobr>&emsp;&emsp;&emsp;作曲&emsp;&emsp;&emsp;</nobr></a>
            <ul>
              <li><a href="//osakanakuwaenai.github.io/music/original">オリジナル曲・BGM</a></li>
              <li><a href="//osakanakuwaenai.github.io/music/secound">二次創作</a></li>
              <li><a href="//osakanakuwaenai.github.io/music/others">その他</a></li>
            </ul>
          </li>
          <li><a href="//osakanakuwaenai.github.io/pictures"><nobr>&emsp;&emsp;&emsp;&emsp;絵&emsp;&emsp;&emsp;</nobr></a>
            <ul>
              <li><a href="//osakanakuwaenai.github.io/pictures/dots">ドット絵</a></li>
              <li><a href="//osakanakuwaenai.github.io/pictures/others">その他の絵</a></li>
            </ul>
          </li>
          <li><a href="https://forms.gle/VAdJjueZNdRPJi9aA"><nobr>&emsp;&emsp;制作依頼&emsp;&emsp;</nobr></a></li>
        </ul>
      </nav>
    </header>
    `);
  }
  const localUrl = "file:///Users/osakana/googen/googen/dandan/osakanakuwaenai.github.io/minecraft/others/withermod.html";
  console.log("process 1");

  fetch(localUrl)
    .then((response) => {
      if (response.ok) {
        throw new Error("Error");
      }
      console.log(`got data from "${localUrl}"`);
      return response.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) =>{
      console.error(error.message);
    });

  console.log("sync process 2");
}
