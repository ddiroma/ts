"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var writer_1 = require('./writer');
var XmlWriter = (function (_super) {
    __extends(XmlWriter, _super);
    function XmlWriter(executor) {
        _super.call(this);
        this.executor = executor;
    }
    XmlWriter.prototype.element = function (tag, value) {
        if (value.toString() == "true" || value.toString() == "false") {
            value = (value.toString() == "true" ? "Y" : "N");
        }
        tag = this.convertTag(tag, "_");
        return this.openTag(tag) + value.toString() + this.closeTag(tag);
    };
    XmlWriter.prototype.openTag = function (tag) {
        return "<" + tag + ">";
    };
    XmlWriter.prototype.closeTag = function (tag) {
        return "</" + tag + ">\n";
    };
    XmlWriter.prototype.convertTag = function (tag, delimiter) {
        tag = tag.substr(0, 1).toLowerCase() + tag.substr(1, tag.length);
        var re = /([A-Z]{1})/g;
        tag = tag.replace(re, delimiter + "$1").toLowerCase();
        return tag;
    };
    XmlWriter.prototype.getOutput = function (object) {
        return this.executor.getOutput(object);
    };
    return XmlWriter;
}(writer_1.Writer));
exports.XmlWriter = XmlWriter;
//# sourceMappingURL=xml-writer.js.map