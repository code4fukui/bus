# bus

福井県のリアルタイムバスデータにアクセスするためのJavaScriptアプリケーションとライブラリのコレクションです。本プロジェクトは、京福バスAPIのラッパーを提供し、バスの路線や位置を可視化するいくつかのデモアプリケーションを含んでいます。

## デモ

*   **[京福バスAPIデモ](keifukubusapidemo.html)**: 京福バスのすべての路線を一覧表示するインタラクティブなデモ。路線をクリックすると、その路線のバス停とバスのリアルタイムな現在位置を確認できます。
*   **[昨日のつつじバスの軌跡](bustrace.html)**: 福井県鯖江市のつつじバス（コミュニティバス）の前日の全走行軌跡を可視化したデモ。
*   **[つつじバスモニター](http://fukuno.jig.jp/2014/busmonitor4)**: つつじバスの現在位置をリアルタイムの地図上で追跡するデモ。

## `keifukubus.js` APIラッパー

このリポジトリには、京福バスAPIのシンプルなJavaScriptラッパーである `keifukubus.js` が含まれています。

### 使い方

1.  HTMLファイルにライブラリを読み込みます:
    ```html
    <script src='keifukubus.js'></script>
    ```

2.  提供されている関数を使用してデータを取得します:
    ```javascript
    // すべてのバス路線の一覧を取得
    getKeifukuBusLine(function(data) {
      // data.rosen に路線の配列が含まれます
      console.log(data);
    });

    // 特定の路線のバス停一覧を取得
    // 引数1: rosenid (路線番号), 引数2: keitoid (系統番号)
    getKeifukuBusStop(1, 1, function(data) {
      // data.list にバス停の配列が含まれます
      console.log(data);
    });

    // 特定の路線のバスのリアルタイム位置を取得
    // 引数1: rosenid (路線番号), 引数2: keitoid (系統番号)
    getKeifukuBusPosition(1, 1, function(data) {
      // data.realtime に稼働中のバスの配列が含まれます
      console.log(data);
    });
    ```

## データソースとAPI

本プロジェクトでは以下のデータソースを使用しています:

*   **京福バスナビWEB API**: 京福バスのデータに使用。
    *   ホームページ: [http://busnavi.keifuku.co.jp/webapi/index.html](http://busnavi.keifuku.co.jp/webapi/index.html)
    *   ライセンス: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.ja)
*   **つつじバスAPI**: `bustrace.html` デモにおける鯖江市のつつじバスデータに使用。

## ライセンス

このライブラリ (`keifukubus.js`) のソースコードは、[MIT License](LICENSE)の下で利用可能です。

デモアプリケーションは、[fukuno.jig.jp](http://fukuno.jig.jp/) によって [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.ja) ライセンスの下で提供されています。
