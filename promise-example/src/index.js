(function () {
    // test code
    var testCode = function () {
        var parame = {
            m_gubun1: "1",
            shr_yymmdd: (function () {
                var date = new Date(), tmp = [];
                tmp.push(date.getFullYear());
                tmp.push((function () {
                    var month = date.getMonth() * 1;
                    return parseInt(month / 10, 10) > 0 ? (month + "") : ("0" + (month + ""));
                })());
                tmp.push(date.getDate());
                return tmp.join("-");
            })()
        };
        
        console.log(testCode);

        lSoft.p5Api.getSupport(parame).then(function (err, result) {
            console.log(err, result);
        });
    };

    // testCode();
    // test code

    rivets.formatters.itemat = function (value, index) {
        return Array.isArray(value) ? value[index] : "";
    };

    var scope = {};
    scope.newUser = {};
    scope.tempData = window.tempData.data;
    
    scope.newUserFieldClear = function () {
        var _newUser = scope.newUser, keys = Object.keys(_newUser);
        for (var iCnt = 0, len = keys.length; iCnt < len; iCnt++) {
            _newUser[keys[iCnt]] = "";
        }
    };

    scope.userAdd = function () {
        console.log("userAdd");
        $("#userAdd").removeAttr("style");
    };

    scope.userCancel = function () {
        console.log("userCancel");
        $("#userAdd").attr("style", "display: none");
    };

    scope.userSave = function () {
        console.log("userSave", "scope.newUser: ", scope.newUser);
        var _newUser = scope.newUser,
            status = (function () { 
                var keys = Object.keys(_newUser), _status = false;
                for (var iCnt = 0, len = keys.length; iCnt < len; iCnt++) {
                    if (lSoft.p5Utils.isBlank(_newUser[keys[iCnt]])) {
                        console.log(keys[iCnt]);
                        _status = true;
                        break;
                    }
                }
                return _status;
            })();

        if (status) {
            return;
        }

        var array = (function () {
            var keys = Object.keys(_newUser), _array = [];
            for (var iCnt = 0, len = keys.length; iCnt < len; iCnt++) {
                _array.push(_newUser[keys[iCnt]]);
            }
            return _array;
        })();

        scope.tempData.push(array);
        scope.newUserFieldClear();
        $("#userAdd").attr("style", "display: none");
    };

    rivets.bind(document.body, scope);
    // rivets.bind(document.querySelector('#view'), scope);
    // F5, Ctrl + F5, 키 대해서 막아야함.
})();