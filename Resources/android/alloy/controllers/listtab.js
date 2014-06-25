function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listtab";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId7 = [];
    var __alloyId8 = {
        type: "Ti.UI.Label",
        bindId: "heading",
        properties: {
            left: 10,
            color: "black",
            top: 5,
            font: {
                fontWeight: "bold"
            },
            bindId: "heading"
        }
    };
    __alloyId7.push(__alloyId8);
    var __alloyId9 = {
        type: "Ti.UI.Label",
        bindId: "subheading",
        properties: {
            left: 10,
            color: "black",
            top: 25,
            bindId: "subheading"
        }
    };
    __alloyId7.push(__alloyId9);
    $.__views.listtab = {
        properties: {
            name: "odd",
            height: "60",
            id: "listtab"
        },
        childTemplates: __alloyId7
    };
    __itemTemplate["odd"] = $.__views.listtab;
    $.__views.listtab && $.addTopLevelView($.__views.listtab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;