"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airmelon = exports.Firemelon = exports.Earthmelon = exports.Watermelon = exports.Melon = void 0;
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.elementIndex = this.getIndex();
    }
    Melon.prototype.getIndex = function () {
        return this.weight * this.melonSort.length;
    };
    return Melon;
}());
exports.Melon = Melon;
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Watermelon.prototype.toString = function () {
        console.log('Element: Water');
        console.log("Sort: ".concat(this.melonSort));
        console.log("Element Index: ".concat(this.elementIndex));
    };
    return Watermelon;
}(Melon));
exports.Watermelon = Watermelon;
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Earthmelon.prototype.toString = function () {
        console.log('Element: Earth');
        console.log("Sort: ".concat(this.melonSort));
        console.log("Element Index: ".concat(this.elementIndex));
    };
    return Earthmelon;
}(Melon));
exports.Earthmelon = Earthmelon;
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Firemelon.prototype.toString = function () {
        console.log('Element: Fire');
        console.log("Sort: ".concat(this.melonSort));
        console.log("Element Index: ".concat(this.elementIndex));
    };
    return Firemelon;
}(Melon));
exports.Firemelon = Firemelon;
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Airmelon.prototype.toString = function () {
        console.log('Element: Air');
        console.log("Sort: ".concat(this.melonSort));
        console.log("Element Index: ".concat(this.elementIndex));
    };
    return Airmelon;
}(Melon));
exports.Airmelon = Airmelon;
var airmelon = new Airmelon(77, 'Unknown');
airmelon.toString();
//# sourceMappingURL=Elemelons.js.map