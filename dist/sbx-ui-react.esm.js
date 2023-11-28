import React from 'react';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

//import ISbxNavbar from './ISbxNavbar';
/**
 *
 */
var SbxNavbar = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SbxNavbar, _React$Component);
  function SbxNavbar() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = SbxNavbar.prototype;
  /**
   *
   * /
  constructor (props: ISbxNavbar) {
    super(props);
  }
  */
  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("nav", null, "teste");
  };
  return SbxNavbar;
}(React.Component);

export { SbxNavbar };
//# sourceMappingURL=sbx-ui-react.esm.js.map
