"use strict";

var _this$age;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; return value; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver).value; }

var Person =
/*#__PURE__*/
function () {
  function Person() {
    _classCallCheck(this, Person);

    _age.set(this, {
      writable: true,
      value: 19
    });

    _increaseAge.add(this);
  }

  _createClass(Person, [{
    key: "birthday",
    value: function birthday() {
      _classPrivateMethodGet(this, _increaseAge, _increaseAge2).call(this);

      console.log("Happy Birthday! You are " + _classPrivateFieldGet(this, _age));
    }
  }]);

  return Person;
}();

var _age = new WeakMap();

var _increaseAge = new WeakSet();

var _increaseAge2 = function _increaseAge2() {
  _classPrivateFieldSet(this, _age, (_this$age = +_classPrivateFieldGet(this, _age)) + 1), _this$age;
};

var person = new Person();
person.birthday();