import React from 'react';

const Block = ( {
  resource,
} ) => {
  return (
    <pre>
      <code>
        {resource.data.html}
      </code>
    </pre>
  );
};

Block.contextTypes = {
};

export default Block;
