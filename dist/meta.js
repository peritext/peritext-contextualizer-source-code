"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  id: 'sourceCode',
  type: 'peritext-contextualizer',
  name: 'Embed source code contextualizer',
  acceptedResourceTypes: [{
    type: 'embed'
  }],
  profile: {
    block: {
      mutable: false,
      assetPickingRules: {
        element: {
          screened: ['html'],
          paged: ['html']
        }
      }
    }
  }
};
exports.default = _default;