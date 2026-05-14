# bus

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A collection of JavaScript applications and a library for accessing real-time bus data in Fukui, Japan. This project provides a wrapper for the Keifuku Bus API and includes several demo applications visualizing bus routes and locations.

## Demos

*   **[Keifuku Bus API Demo](keifukubusapidemo.html)**: An interactive demo that lists all Keifuku bus lines. Click a line to see its stops and the real-time location of buses on that route.
*   **[Yesterday's Tsutsuji Bus Tracks](bustrace.html)**: A visualization of the previous day's complete routes for all Tsutsuji community buses in Sabae City.
*   **[Tsutsuji Bus Monitor](http://fukuno.jig.jp/2014/busmonitor4)**: A live map tracking the current positions of Tsutsuji community buses.

## `keifukubus.js` API Wrapper

This repository includes `keifukubus.js`, a simple JavaScript wrapper for the Keifuku Bus API.

### Usage

1.  Include the library in your HTML file:
    ```html
    <script src='keifukubus.js'></script>
    ```

2.  Use the provided functions to fetch data:
    ```javascript
    // Get a list of all bus lines
    getKeifukuBusLine(function(data) {
      // data.rosen contains an array of lines
      console.log(data);
    });

    // Get the list of bus stops for a specific route
    // Arg 1: rosenid (route number), Arg 2: keitoid (system number)
    getKeifukuBusStop(1, 1, function(data) {
      // data.list contains an array of stops
      console.log(data);
    });

    // Get the real-time position of buses on a specific route
    // Arg 1: rosenid (route number), Arg 2: keitoid (system number)
    getKeifukuBusPosition(1, 1, function(data) {
      // data.realtime contains an array of active buses
      console.log(data);
    });
    ```

## Data Sources & API

This project utilizes the following data sources:

*   **Keifuku Bus Navi WEB API**: Used for Keifuku Bus data.
    *   Homepage: [http://busnavi.keifuku.co.jp/webapi/index.html](http://busnavi.keifuku.co.jp/webapi/index.html)
    *   License: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.ja)
*   **Tsutsuji Bus API**: Used for Sabae City's Tsutsuji Bus data in the `bustrace.html` demo.

## License

The source code for this library (`keifukubus.js`) is available under the [MIT License](LICENSE).

The demo applications are provided by [fukuno.jig.jp](http://fukuno.jig.jp/) under the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.ja) license.