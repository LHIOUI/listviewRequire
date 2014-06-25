function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listtab";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId11 = [];
    var __alloyId12 = {
        type: "Ti.UI.Label",
        bindId: "heading",
        properties: {
            left: 60,
            color: "black",
            top: 5,
            font: {
                fontWeight: "bold"
            },
            bindId: "heading"
        }
    };
    __alloyId11.push(__alloyId12);
    var __alloyId13 = {
        type: "Ti.UI.Label",
        bindId: "subheading",
        properties: {
            left: 60,
            color: "black",
            top: 25,
            bindId: "subheading"
        }
    };
    __alloyId11.push(__alloyId13);
    $.__views.oddrows = {
        properties: {
            height: "60",
            name: "odd",
            id: "oddrows",
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK
        },
        childTemplates: __alloyId11
    };
    __itemTemplate["odd"] = $.__views.oddrows;
    $.__views.oddrows && $.addTopLevelView($.__views.oddrows);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;