import React from 'react';

import Input from './Input';
import ActionButton from './ActionButton';

export default ({
  material = {},
  setMaterial = () => {},
  removeMaterial = () => {},
}) => (
  <div className="mb-2">
    <div className="form-inline">
      <Input
        value={material.name}
        onChange={e => setMaterial({ name: e.target.value })}
        list="materials"
      />
      <Input
        type="number"
        value={material.count}
        onChange={e => setMaterial({ count: parseInt(e.target.value, 10) })}
      />
      <ActionButton type="remove" onClick={removeMaterial} />
    </div>
  </div>
);
