Redux App with ducks
-----------------------
https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be


Redux will be structured with ducks (A proposal for bundling reducers, action types and actions when using Redux)


## The Proposal

### Example

See also: [Common JS Example](CommonJs.md).

```javascript
// widgets.js

// Actions
const LOAD   = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getWidget () {
  return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
}

```
### Rules

A module...

1. MUST `export default` a function called `reducer()`
2. MUST `export` its action creators as functions
3. MUST have action types in the form `npm-module-or-app/reducer/ACTION_TYPE`
3. MAY export its action types as `UPPER_SNAKE_CASE`, if an external reducer needs to listen for them, or if it is a published reusable library

These same guidelines are recommended for `{actionType, action, reducer}` bundles that are shared as reusable Redux libraries.

### Name

Java has jars and beans. Ruby has gems. I suggest we call these reducer bundles "ducks", as in the last syllable of "redux".

### Usage

You can still do:

```javascript
import { combineReducers } from 'redux';
import * as reducers from './ducks/index';

const rootReducer = combineReducers(reducers);
export default rootReducer;
```

You can still do:

```javascript
import * as widgetActions from './ducks/widgets';
```
...and it will only import the action creators, ready to be passed to `bindActionCreators()`.

> Actually, it'll also import `default`, which will be the reducer function. It'll add an action creator named `default` that won't work. If that's a problem for you, you should enumerate each action creator when importing.

There will be some times when you want to `export` something other than an action creator. That's okay, too. The rules don't say that you can *only* `export` action creators. When that happens, you'll just have to enumerate the action creators that you want. Not a big deal.

```javascript
import {loadWidgets, createWidget, updateWidget, removeWidget} from './ducks/widgets';
// ...
bindActionCreators({loadWidgets, createWidget, updateWidget, removeWidget}, dispatch);
```
