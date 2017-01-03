"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var step_writer_1 = require('./step-writer');
var CsvInputWriter = (function (_super) {
    __extends(CsvInputWriter, _super);
    function CsvInputWriter() {
        _super.apply(this, arguments);
    }
    CsvInputWriter.prototype.write = function (csvInputStep) {
        return _super.prototype.write.call(this, csvInputStep);
    };
    return CsvInputWriter;
}(step_writer_1.StepWriter));
exports.CsvInputWriter = CsvInputWriter;
//# sourceMappingURL=csv-input-writer.js.map