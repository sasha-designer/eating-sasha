import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './reducers';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('favorites');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('favorites', serializedState);
    } catch (err) {
        // Ignore write errors
    }
};

const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
    },
    preloadedState: loadState(),
});

store.subscribe(() => {
    saveState({
        favorites: store.getState().favorites,
    });
});

export default store;