
export default {
  id: 'sourceCode',
  type: 'peritext-contextualizer',
  name: 'Embed source code contextualizer',
  acceptedResourceTypes: [
  {
    type: 'embed',
  }
  ],
  profile: {
    block: {
      mutable: false,
      assetPickingRules: {
        element: {
          screened: [ 'html' ],
          paged: [ 'html' ]
        }
      }
    }
  }
};
