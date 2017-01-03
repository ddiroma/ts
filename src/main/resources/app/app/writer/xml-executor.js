"use strict";
var xml_writer_1 = require('./xml-writer');
var transformation_writer_1 = require('./transformation-writer');
var default_writer_1 = require('./default-writer');
var step_writer_1 = require('./steps/step-writer');
var data_grid_writer_1 = require('./steps/data-grid-writer');
var csv_input_writer_1 = require('./steps/csv-input-writer');
var XmlExecutor = (function () {
    function XmlExecutor() {
        this.writers = [];
        this.xmlWriter = new xml_writer_1.XmlWriter(this);
        this.t = new transformation_writer_1.TransformationWriter(this);
        //Register step writers here
        this.register(this.t);
        this.register(new data_grid_writer_1.DataGridWriter(this));
        this.register(new csv_input_writer_1.CsvInputWriter(this));
        var stepWriter = new step_writer_1.StepWriter(this);
        stepWriter.register();
    }
    XmlExecutor.prototype.execute = function (object) {
        return this.t.write(object);
    };
    XmlExecutor.prototype.register = function (writer) {
        this.writers.push(writer);
    };
    XmlExecutor.prototype.getOutput = function (object) {
        var output = "";
        for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
            var key = _a[_i];
            if (Array.isArray(object[key])) {
                var writer = this.getWriter(object);
                var includeTags = true;
                if (writer != null) {
                    includeTags = writer.getIncludeTags(key);
                }
                output += (includeTags ? this.xmlWriter.openTag(key) : "");
                output += this.getOutput(object[key]);
                output += (includeTags ? this.xmlWriter.closeTag(key) : "");
            }
            else {
                var writer = this.getWriter(object[key]);
                if (writer != null) {
                    output += writer.write(object[key]);
                }
                else {
                    output += this.xmlWriter.element(key, object[key]);
                }
            }
        }
        return output;
    };
    XmlExecutor.prototype.getWriter = function (object) {
        for (var _i = 0, _a = this.writers; _i < _a.length; _i++) {
            var writer = _a[_i];
            if (object instanceof writer.getObject()) {
                return writer;
            }
        }
        if ((typeof object === "object") && (object !== null)) {
            return new default_writer_1.DefaultWriter(this);
        }
        return null;
    };
    return XmlExecutor;
}());
exports.XmlExecutor = XmlExecutor;
//# sourceMappingURL=xml-executor.js.map