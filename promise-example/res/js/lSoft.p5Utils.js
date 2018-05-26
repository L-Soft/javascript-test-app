var lSoft = (function (lSoft, promise) {
    if (promise === null || promise === undefined) {
        alert("시스템 오류");
        return;
    }

    lSoft.p5Utils = {};
    lSoft.p5Utils.isBlank = function (obj) {
        return obj === null || obj === undefined;
    };

    lSoft.p5Utils.debug = function (msg) {
        return msg;
    }

    return lSoft;
})(window.lSoft || {}, promise);