import { createStore } from 'redux';

// Action generations - functions that return action object
// Refactoring and Organizing
// const add = ({ a, b }, c) => {
//     return a + b + c;
// }

// console.log(add({ a: 1, b: 12 }, 6));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy,
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + (typeof action.incrementBy === 'number' ? action.incrementBy : 1)
            };
        case 'DECREMENT':
            return {
                count: state.count - (typeof action.decrementBy === 'number' ? action.decrementBy : 1)
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});
// ทำงานหลังจาก state มีการเปลี่ยนแปลง
store.subscribe(() => {
    console.log(store.getState())
});

// Action - than ad object the gets sent to store

// I'd like to increment the count
// dispatch คือตัวกำหนด action ใน store 
// อย่างน้อยต้องประกาศ key ที่ชื่อ type 
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));