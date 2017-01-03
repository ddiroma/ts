"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var step_writer_1 = require('./step-writer');
var DummyWriter = (function (_super) {
    __extends(DummyWriter, _super);
    function DummyWriter() {
        _super.apply(this, arguments);
    }
    DummyWriter.prototype.write = function (dummyStep) {
        return _super.prototype.write.call(this, dummyStep);
    };
    return DummyWriter;
}(step_writer_1.StepWriter));
exports.DummyWriter = DummyWriter;
//# sourceMappingURL=dummy-writer.js.map