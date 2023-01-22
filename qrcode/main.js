"use strict";

var app = new (function () {
    function initialize() {
        var elems = document.querySelectorAll("input");
        for (var i = 0; i < elems.length; i++) {
            if (elems[i].id.indexOf("version-") != 0)
                elems[i].oninput = redrawQrCode;
        }
        redrawQrCode();
    }

    function redrawQrCode() {
        // Get form inputs and compute QR Code
        var text = $("input")[0].value;
        var segs = qrcodegen.QrSegment.makeSegments(text);
        var qr = qrcodegen.QrCode.encodeSegments(
            segs,
            qrcodegen.QrCode.Ecc.LOW,
            1,
            40,
            -1,
            true
        );
        var canvas = $("canvas")[0];
        qr.drawCanvas(10, 2, canvas);

        var a = $("a")[0];
        a.download = "QRCODE.png";
        a.href = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");

        // var code = qr.toSvgString(0);
        // $("svg")[0].setAttribute("viewBox", / viewBox="([^"]*)"/.exec(code)[1]);
        // $("svg")[0]
        //     .querySelector("path")
        //     .setAttribute("d", / d="([^"]*)"/.exec(code)[1]);
    }

    initialize();
})();
