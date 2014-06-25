function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tablerow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: 60,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.leftimage = Ti.UI.createImageView({
        left: 6,
        top: 6,
        width: 48,
        height: 48,
        id: "leftimage"
    });
    $.__views.row.add($.__views.leftimage);
    $.__views.heading = Ti.UI.createLabel({
        left: 60,
        color: "black",
        top: 5,
        font: {
            fontWeight: "bold"
        },
        id: "heading"
    });
    $.__views.row.add($.__views.heading);
    $.__views.subheading = Ti.UI.createLabel({
        left: 60,
        color: "black",
        top: 25,
        id: "subheading"
    });
    $.__views.row.add($.__views.subheading);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.leftimage.image = args.i % 2 ? "/dark_heart.png" : "/dark_skull.png";
    $.heading.text = args.heading;
    $.subheading.text = args.subheading;
    $.row.i = args.i;
    $.row.hasCheck = args.i % 2 ? true : false;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;