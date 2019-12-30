import { createStore, applyMiddleware } from 'redux';
import { handleActions, combineActions } from 'redux-actions';

import defaultRecipes from './defaultRecipes';
import { get, set } from './localStorage';
import {
  setRecipe,
  addRecipe,
  removeRecipe,
  setMaterial,
  addMaterial,
  removeMaterial,
  setPlan,
  removePlan,
  addPlan,
  commitDraft,
  discardDraft,
} from './actions';

export const clone = source => JSON.parse(JSON.stringify(source));

const plans = handleActions(
  {
    [setPlan]: (state, { payload: { plan, value } }) =>
      state.map(p => (p !== plan ? p : { ...p, ...value })),
    [removePlan]: (state, { payload: { plan } }) =>
      state.filter(p => p !== plan),
    [addPlan]: state => [...state, { name: '', count: 1 }],
  },
  [],
);

const materials = handleActions(
  {
    [setMaterial]: (state, { payload: { material, value } }) =>
      state.map(m => (m !== material ? m : { ...m, ...value })),

    [removeMaterial]: (state, { payload: { material } }) =>
      state.filter(m => m !== material),

    [addMaterial]: (state, { payload: { materials } }) =>
      state !== materials ? state : [...state, { name: '', count: 1 }],
  },
  [],
);

const recipes = handleActions(
  {
    [setRecipe]: (state, { payload: { recipe, value } }) =>
      state.map(r => (r !== recipe ? r : { ...r, ...value })),

    [removeRecipe]: (state, { payload: { recipe } }) =>
      state.filter(r => r !== recipe),

    [addRecipe]: state => [
      ...state,
      {
        name: '',
        materials: [{ name: '', count: 1 }],
      },
    ],

    [combineActions(setMaterial, addMaterial, removeMaterial)]: (
      state,
      action,
    ) =>
      state.map(r => ({
        ...r,
        materials: materials(r.materials, action),
      })),
  },
  [],
);

const getInitState = () =>
  get('state') || {
    recipes: defaultRecipes,
    draft: defaultRecipes,
    plans: [{ name: '', count: 1 }],
  };

const cache = store => next => action => {
  const rs = next(action);
  set('state', store.getState());
  return rs;
};

export default createStore(
  handleActions(
    {
      [commitDraft]: state => ({
        ...state,
        recipes: clone(state.draft),
      }),
      [discardDraft]: state => ({
        ...state,
        draft: clone(state.recipes),
      }),

      [combineActions(
        setRecipe,
        addRecipe,
        removeRecipe,
        setMaterial,
        addMaterial,
        removeMaterial,
      )]: (state, action) => ({
        ...state,
        draft: recipes(state.draft, action),
      }),

      [combineActions(setPlan, addPlan, removePlan)]: (state, action) => ({
        ...state,
        plans: plans(state.plans, action),
      }),
    },
    getInitState(),
  ),
  applyMiddleware(cache),
);
