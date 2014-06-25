function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tabletab";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabletab = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "TableView",
        id: "tabletab"
    });
    $.__views.tabletab && $.addTopLevelView($.__views.tabletab);
    $.__views.table = Ti.UI.createTableView({
        separatorColor: "transparent",
        color: "black",
        id: "table"
    });
    $.__views.tabletab.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    for (var i = 0; 500 > i; i++) {
        var row = Alloy.createController("tablerow", {
            heading: "Row " + i,
            subheading: "This is a subtitle",
            i: i
        });
        data.push(row.getView());
    }
    $.table.data = data;
    $.table.addEventListener("click", function(e) {
        Ti.API.info("Row " + e.row.i + " was clicked");
        if (e.source == e.row.children[0]) {
            Ti.API.info("you clicked the image");
            e.source.image = "/dark_star.png";
        }
    });
    $.table.addEventListener("swipe", function(e) {
        alert(JSON.stringify(e));
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;