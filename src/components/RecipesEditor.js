import React from 'react';

import RecipeList from '../containers/RecipeList';
import ActionButton from './ActionButton';

export default ({ isDirty, commitDraft, discardDraft }) => (
  <div className="app footer-fixed pb-4">
    <RecipeList />
    <div className="app-footer container bg-dark">
      <div className="text-center w-100">
        <ActionButton
          type="confirm"
          className="mr-2"
          onClick={commitDraft}
          disabled={!isDirty}
        />
        <ActionButton
          type="revert"
          className="mr-2"
          onClick={discardDraft}
          disabled={!isDirty}
        />
      </div>
    </div>
  </div>
);
