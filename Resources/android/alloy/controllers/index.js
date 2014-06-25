function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "ListView",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    var __alloyId0 = {};
    Alloy.createController("listtab", {
        __itemTemplate: __alloyId0
    });
    var __alloyId5 = [];
    var __alloyId6 = {
        type: "Ti.UI.ImageView",
        bindId: "leftimage",
        properties: {
            bindId: "leftimage"
        }
    };
    __alloyId5.push(__alloyId6);
    var __alloyId7 = {
        type: "Ti.UI.Label",
        bindId: "heading",
        properties: {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            color: "#000",
            font: {
                fontSize: 20,
                fontFamily: "Helvetica Neue"
            },
            textAlign: "center",
            bindId: "heading"
        }
    };
    __alloyId5.push(__alloyId7);
    var __alloyId8 = {
        type: "Ti.UI.Label",
        bindId: "subheading",
        properties: {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            color: "#000",
            font: {
                fontSize: 20,
                fontFamily: "Helvetica Neue"
            },
            textAlign: "center",
            bindId: "subheading"
        }
    };
    __alloyId5.push(__alloyId8);
    var __alloyId4 = {
        properties: {
            name: "even",
            height: "60"
        },
        childTemplates: __alloyId5
    };
    __alloyId0["even"] = __alloyId4;
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    var __alloyId10 = [];
    __alloyId10.push($.__views.section);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId10,
        templates: __alloyId0,
        id: "list",
        defaultItemTemplate: "odd"
    });
    $.__views.index.add($.__views.list);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    for (var i = 0; 7 > i; i++) data.push({
        temlate: "odd",
        heading: {
            text: "iam a head"
        },
        subheading: {
            text: "i am a subhead"
        }
    });
    $.section.setItems(data);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;