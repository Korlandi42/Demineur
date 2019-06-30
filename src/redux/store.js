import { createStore, combineReducers } from 'redux'

const initialState = {
    score: 0,
    win: undefined,
}

const app = (state = initialState, action) => {
    if (action.type === 'INCREASE_SCORE') {
        return { ...state, score: state.score + action.value }
    }
    else if (action.type === 'END') {
        return { ...state, win: action.value }
    }
    else {
        return state
    }
}

export const increaseScoreAction = value => {
    return {
        type: 'INCREASE_SCORE',
        value: value
    }
}

export const endGame = value => {
    return {
        type: 'END',
        value: value
    }
}

export const store = createStore(combineReducers({app: app}))