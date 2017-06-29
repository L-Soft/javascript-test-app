var address = "http://openapi.animal.go.kr:80/openapi/service/rest/abandonmentPublicSrvc?_wadl&type=json";
var catAPIAddress = `http://thecatapi.com/api/images/get?${querystring.stringify({format: 'xml', results_per_page: 20})}`;

var lSoft = (() => {

})(window.lSoft || {});

promise.get(catAPIAddress).then((error, text, xhr) => {
    switch (xhr.status) {
        case 200: {
            break;
        }
        default: {
            break;
        }
    }

    let parser = new DOMParser(),
        xmlDoc = parser.parseFromString(text, "text/xml"),
        images = xmlDoc.getElementsByTagName("response")[0]
            .getElementsByTagName("data")[0]
            .getElementsByTagName("images")[0]
            .getElementsByTagName("image"),
        parserImg = [];

    for (let iCnt = 0, len = images.length, _url = "", _index; iCnt < len; iCnt++) {
        _url = images[iCnt].getElementsByTagName("url")[0].innerHTML;
        _index = _url.match(/\_[0-9]+/i) ? _url.match(/\_[0-9]+/i)[0].slice(1) * 1 : 0;
        parserImg.push({url : _url, index : _index});
    }
    parserImg.sort(aImg, bImg => aImg.index - bImg.index);

});