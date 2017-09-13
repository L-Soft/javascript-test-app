function parseText (sValue) {
    if (/^\s*$/.test(sValue)) { return null; }
    if (/^(?:true|false)$/i.test(sValue)) { return sValue.toLowerCase() === "true"; }
    if (isFinite(sValue)) { return parseFloat(sValue); }
    if (isFinite(Date.parse(sValue))) { return new Date(sValue); }
    return sValue;
}

function JXONTree(oXMLParent) {
    var nAttrLen = 0,
        nLength = 0,
        sCollectedTxt = "";

    if (oXMLParent.hasChildNodes()) {
        for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
            oNode = oXMLParent.childNodes.item(nItem);
            if ((oNode.nodeType - 1 || 1 === 3)) {

            } else if (oNode.nodeType === 1 && !oNode.prefix) {

            }
        }
    } else {
        this.keyValue =
    }
}