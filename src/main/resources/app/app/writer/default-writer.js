"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var xml_writer_1 = require('./xml-writer');
var DefaultWriter = (function (_super) {
    __extends(DefaultWriter, _super);
    function DefaultWriter() {
        _super.apply(this, arguments);
    }
    DefaultWriter.prototype.write = function (object) {
        var output = this.openTag(this.getTagName(object));
        output += this.getOutput(object);
        output += this.closeTag(this.getTagName(object));
        return output;
    };
    DefaultWriter.prototype.getTagName = function (object) {
        return this.convertTag(object.constructor.name, "_");
    };
    return DefaultWriter;
}(xml_writer_1.XmlWriter));
exports.DefaultWriter = DefaultWriter;
var DefaultWriter2 = (function (_super) {
    __extends(DefaultWriter2, _super);
    function DefaultWriter2(executor, type, includeTags) {
        _super.call(this, executor);
        this.type = type;
        this.includeTags = includeTags;
    }
    DefaultWriter2.prototype.write = function (object) {
        var output = this.openTag(this.getTagName(object));
        output += this.getOutput(object);
        output += this.closeTag(this.getTagName(object));
        return output;
    };
    DefaultWriter2.prototype.getTagName = function (object) {
        return this.convertTag(object.constructor.name, "_");
    };
    DefaultWriter2.prototype.getIncludeTags = function (tag) {
        return this.includeTags;
    };
    DefaultWriter2.prototype.getObject = function () {
        return this.type;
    };
    return DefaultWriter2;
}(xml_writer_1.XmlWriter));
exports.DefaultWriter2 = DefaultWriter2;
//# sourceMappingURL=default-writer.js.map