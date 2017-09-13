// var address = "http://openapi.animal.go.kr:80/openapi/service/rest/abandonmentPublicSrvc?_wadl&type=json";

var lSoft = ((lSoft) => {
    const HTTP = {GET : 0, POST : 1, PUT: 2, DEL : 3};

    lSoft.api = {};

    let Url = {};
    Url.catUrl = `http://thecatapi.com/api/images/get?`;

    let isCheck = (error, text, xhr) => {
        var p = new promise.Promise();
        p.done( !(xhr.status === 200), !(xhr.status === 200) ? error : text );
        return p;
    };

    let http = (type, url, data) => {
        switch(type) {
            case HTTP.GET: {
                return promise.get(url, data).then(isCheck);
            }
            case HTTP.POST: {
                return promise.post(url, data).then(isCheck);
            }
            case HTTP.PUT: {
                return promise.put(url, data).then(isCheck);
            }
            case HTTP.DEL: {
                return promise.del(url, data).then(isCheck);
            }
            default: {

            }
        }
    };

    lSoft.api.getCatImage = (pageSize) => {
        pageSize = pageSize || 20;
        var tmpUrl = `${querystring.stringify({
            format: 'xml', 
            results_per_page: pageSize}
        )}`;
        return http(HTTP.GET, Url.catUrl.concat(tmpUrl), {});
    };

    return lSoft;
})(window.lSoft || {});
