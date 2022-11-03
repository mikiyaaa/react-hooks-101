import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENT } from "../actions";

// state = [
//     {id: 1, title: 'タイトル1', body: '本文1'},
//     {id: 2, title: 'タイトル2', body: '本文2'},
//     {id: 3, title: 'タイトル3', body: '本文3'},
// ]

// action = {
//     type: 'CREATE_EVENT',
//     title: 'イベント作成する',
//     body: '本文です。'
// }

const reducer = (state = [], action) => {

    switch(action.type) {
        case CREATE_EVENT:
            const event = { title: action.title, body: action.body };
            const len = state.length;

            const id = len === 0 ? 1 : state[len - 1].id + 1;
            return [...state, { id: id, ...event }];

        case DELETE_EVENT:
            return state.filter(event => event.id !== action.id);

        case DELETE_ALL_EVENT:
            return [];

        default:
                return state;
    }

}

export default reducer;