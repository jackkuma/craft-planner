import { createAction } from 'redux-actions';

export const setRecipe = createAction('setRecipe');
export const addRecipe = createAction('addRecipe');
export const removeRecipe = createAction('removeRecipe');

export const setMaterial = createAction('setMaterial');
export const addMaterial = createAction('addMaterial');
export const removeMaterial = createAction('removeMaterial');

export const commitDraft = createAction('commitDraft');
export const discardDraft = createAction('discardDraft');

export const setPlan = createAction('setPlan');
export const removePlan = createAction('removePlan');
export const addPlan = createAction('addPlan');
