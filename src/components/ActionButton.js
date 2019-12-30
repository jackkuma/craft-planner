import React from 'react';

const variants = {
  remove: 'ghost-danger',
  add: 'ghost-info',
  confirm: 'primary',
  revert: 'danger',
};

const labels = {
  remove: '×',
  add: '+',
  confirm: 'Confirm',
  revert: 'Revert',
};

export default ({ type, className = '', variant, label, ...props }) => (
  <button
    className={`
      btn
      btn-square
      btn-sm
      btn-${variant || variants[type]}
      ${className}
    `}
    {...props}
  >
    {label || labels[type]}
  </button>
);
