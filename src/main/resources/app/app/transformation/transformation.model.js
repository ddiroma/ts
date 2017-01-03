"use strict";
var log_1 = require('./log/log');
var MaxDate = (function () {
    function MaxDate() {
    }
    return MaxDate;
}());
exports.MaxDate = MaxDate;
var Parameter = (function () {
    function Parameter() {
    }
    return Parameter;
}());
exports.Parameter = Parameter;
var Info = (function () {
    function Info() {
        this.transType = "Normal";
        this.transStatus = 0;
        this.log = new log_1.Log();
        this.sizeRowset = 10000;
        this.sleepTimeEmpty = 50;
        this.sleepTimeFull = 50;
        this.uniqueConnections = false;
        this.feedbackShown = true;
        this.feedbackSize = 50000;
        this.usingThreadPriorities = true;
        this.captureStepPerformance = false;
        this.stepPerformanceCapturingDelay = 1000;
        this.stepPerformanceCapturingSizeLimit = 100;
        this.dependencies = [];
        this.partitionschemas = [];
        this.slaveservers = [];
        this.clusterschemas = [];
        this.createdUser = "-";
        this.createdDate = "2016&#x2f;11&#x2f;04 10&#x3a;56&#x3a;25.973";
        this.modifiedUser = "admin";
        this.modifiedDate = "2016&#x2f;11&#x2f;14 13&#x3a;20&#x3a;31.341";
        this.keyForSessionKey = "";
        this.isKeyPrivate = false;
    }
    return Info;
}());
exports.Info = Info;
var Hop = (function () {
    function Hop() {
        this.enabled = true;
    }
    return Hop;
}());
exports.Hop = Hop;
var Order = (function () {
    function Order() {
        this.hops = [];
    }
    return Order;
}());
exports.Order = Order;
var TransformationModel = (function () {
    function TransformationModel() {
        this.info = new Info();
        this.notePads = [];
        this.steps = [];
        this.order = new Order();
        this.stepErrorHandling = [];
        this.slaveStepCopyPartitionDistribution = [];
        this.slaveTransformation = false;
    }
    return TransformationModel;
}());
exports.TransformationModel = TransformationModel;
//# sourceMappingURL=transformation.model.js.map