function Controller() {
    function doClick() {
        alert($.label.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId0 = [];
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "DienstApp",
        id: "__alloyId2"
    });
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, Change",
        id: "label"
    });
    $.__views.__alloyId2.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "DienstApp",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.__alloyId4 = Ti.UI.createWindow({
        title: "DienstApp 2",
        id: "__alloyId4"
    });
    $.__views.__alloyId7 = Ti.UI.createView({
        backgroundColor: "#a00",
        height: "50dp",
        id: "__alloyId7"
    });
    $.__views.__alloyId9 = Ti.UI.createView({
        backgroundColor: "#0a0",
        height: "50dp",
        id: "__alloyId9"
    });
    var __alloyId10 = [];
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        id: "__alloyId11"
    });
    __alloyId10.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Row 1",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        id: "__alloyId13"
    });
    __alloyId10.push($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Row 2",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        id: "__alloyId15"
    });
    __alloyId10.push($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Row 3",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createTableViewRow({
        id: "__alloyId17"
    });
    __alloyId10.push($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Row 4",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        id: "__alloyId19"
    });
    __alloyId10.push($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Row 5",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId5 = Ti.UI.createTableView({
        data: __alloyId10,
        headerView: $.__views.__alloyId7,
        footerView: $.__views.__alloyId9,
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId3 = Ti.UI.createTab({
        window: $.__views.__alloyId4,
        title: "D2",
        id: "__alloyId3"
    });
    __alloyId0.push($.__views.__alloyId3);
    $.__views.__alloyId22 = Ti.UI.createWindow({
        title: "Sections & Rows",
        id: "__alloyId22"
    });
    var __alloyId24 = [];
    $.__views.__alloyId27 = Ti.UI.createView({
        backgroundColor: "#a00",
        height: "50dp",
        id: "__alloyId27"
    });
    $.__views.__alloyId29 = Ti.UI.createView({
        backgroundColor: "#0a0",
        height: "50dp",
        id: "__alloyId29"
    });
    $.__views.__alloyId25 = Ti.UI.createTableViewSection({
        headerView: $.__views.__alloyId27,
        footerView: $.__views.__alloyId29,
        id: "__alloyId25"
    });
    __alloyId24.push($.__views.__alloyId25);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        title: "Row 1",
        id: "__alloyId30"
    });
    $.__views.__alloyId25.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createTableViewRow({
        title: "Row 2",
        id: "__alloyId31"
    });
    $.__views.__alloyId25.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        title: "Row 3",
        id: "__alloyId32"
    });
    $.__views.__alloyId25.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createTableViewSection({
        headerTitle: "Section 2",
        id: "__alloyId33"
    });
    __alloyId24.push($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        title: "Row 1",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        title: "Row 2",
        id: "__alloyId35"
    });
    $.__views.__alloyId33.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        title: "Row 3",
        id: "__alloyId36"
    });
    $.__views.__alloyId33.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createTableViewSection({
        headerTitle: "Section 3",
        id: "__alloyId37"
    });
    __alloyId24.push($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        title: "Row 1",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        title: "Row 2",
        id: "__alloyId39"
    });
    $.__views.__alloyId37.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        title: "Row 3",
        id: "__alloyId40"
    });
    $.__views.__alloyId37.add($.__views.__alloyId40);
    $.__views.__alloyId23 = Ti.UI.createTableView({
        data: __alloyId24,
        filterAttribute: "title",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId21 = Ti.UI.createTab({
        window: $.__views.__alloyId22,
        title: "Sections & Rows",
        id: "__alloyId21"
    });
    __alloyId0.push($.__views.__alloyId21);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;