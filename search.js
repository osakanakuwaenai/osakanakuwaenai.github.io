function searchFiles() {
  CR = String.fromCharCode(13); //改行コードを設定します
  folderRef = new Folder ("../osakanakuwaenai.github.io"); //一覧を取得するフォルダを指定します
  fileList = folderRef.getFiles(); //ファイルリスト（フォルダ含む全て）を取得します
  alert(fileList)
}