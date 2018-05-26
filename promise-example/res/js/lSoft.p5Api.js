// https://github.com/stackp/promisejs/blob/master/README.md
// http://rivetsjs.com/
// http://www.generatedata.com/

var lSoft = (function (lSoft, promise) {
    if (promise === null || promise === undefined) {
        alert("시스템 오류");
        return;
    }

    var HTTP = {
        GET:  0,
        POST: 1,
        PUT:  2,
        DEL:  3
    }, url = {
       test: "http://www.skhystec.com/support/supportCafeteriaIc.asp"
    }, isCheck = function (error, text, xhr) {
        var p = new promise.Promise();
        p.done(xhr.status === 200 ? text : error);
        return p;
    }, http = function (type, url, data) {
        switch (type) {
            case HTTP.GET:  { return promise.get(url, data).then(isCheck);  }
            case HTTP.POST: { return promise.post(url, data).then(isCheck); }
            case HTTP.PUT:  { return promise.put(url, data).then(isCheck);  }
            case HTTP.DEL:  { return promise.del(url, data).then(isCheck);  }
        }
    }, getParameter = function (parame) {
        if (lSoft.p5Utils.isBlank(parame)) {
            return "";
        }

        var keys = Object.keys(parame), result = [];
        for (var iCnt = 0, len = keys.length; iCnt < len; iCnt++) {
            result.push(keys[iCnt] + "=" + parame[keys[iCnt]]);
        }
        return "?" + result.join("&");
    };

    if (lSoft.p5Utils.isBlank(lSoft.p5Api)) {
        lSoft.p5Api = {};
    }

    lSoft.p5Api.getSupport = function (parameter, data) {
        console.log(url.test);
        return http(HTTP.GET, url.test + getParameter(parameter), data || {});
    };

    return lSoft;
})(window.lSoft || {}, window.promise);
