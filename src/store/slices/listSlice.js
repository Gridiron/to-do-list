import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return defaultState;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return defaultState;
  }
}

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

const defaultState = {
  list: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState: loadFromLocalStorage(),
  reducers: {
    addItem(state, action) {
      let newState = {
        ...state,
        list: [
          ...state.list,
          { id: uuid(), title: action.payload.title, isCompleted: action.payload.isCompleted },
        ],
      };
      saveToLocalStorage(newState);

      return newState;
    },
    checkItem(state, action) {
      let newState = {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload.id
            ? { ...item, isCompleted: action.payload.isCompleted }
            : item,
        ),
      };
      saveToLocalStorage(newState);

      return newState;
    },
    removeItem(state, action) {
      let newState = {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };
      saveToLocalStorage(newState);

      return newState;
    },
    removeCompleted(state, action) {
      let newState = {
        ...state,
        list: state.list.filter((item) => !item.isCompleted),
      };
      saveToLocalStorage(newState);

      return newState;
    },
    setItems(state, action) {
      let newState = {
        ...state,
        list: action.payload.list,
      };
      saveToLocalStorage(newState);

      return newState;
    },
  },
});

export default listSlice.reducer;
