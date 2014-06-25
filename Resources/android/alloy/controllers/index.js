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
    $.__views.__alloyId0 = Ti.UI.Android.createSearchView({
        ns: Ti.UI.Android,
        id: "__alloyId0"
    });
    var __alloyId2 = {};
    Alloy.createController("listtab", {
        __itemTemplate: __alloyId2
    });
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    var __alloyId6 = [];
    __alloyId6.push($.__views.section);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId6,
        templates: __alloyId2,
        searchView: $.__views.__alloyId0,
        id: "list",
        defaultItemTemplate: "odd"
    });
    $.__views.index.add($.__views.list);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    for (var i = 0; 20 > i; i++) data.push({
        temlate: "odd",
        heading: {
            text: "iam a head " + i
        },
        subheading: {
            text: "i am a subhead " + i
        },
        searchableText: "am a head " + i
    });
    $.section.setItems(data);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;