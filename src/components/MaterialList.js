import React from 'react';

import MaterialItem from '../containers/MaterialItem';
import ActionButton from './ActionButton';

export default ({ materials = [], addMaterial = () => {} }) => (
  <div>
    {materials.map((material, idx) => (
      <MaterialItem key={idx} material={material} />
    ))}
    <div>
      <ActionButton type="add" onClick={addMaterial} />
    </div>
  </div>
);
