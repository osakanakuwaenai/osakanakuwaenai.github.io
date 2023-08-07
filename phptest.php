<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="./resources/index.css">
    <link rel="icon" href="./resources/icon.svg">
    <title>webサイトテスト</title>
    <noscript><link rel="stylesheet" href="./resources/noscript.css"></noscript>
  </head>
  <body>
    <article id="yes-script-text">
      <h1>猫のように、自由気ままに。</h1>
      <p>本文</p>
      <?php 
        echo "<p>aaa</p>";
      ?>
    </article>
    <script src="./index.js"></script>
  </body>
</html>