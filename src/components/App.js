import { useReducer } from 'react';
import EventForm from './EventForm';
import Events from './Events';
import reducer from '../reducers/reducer';
import AppContext from '../contexts/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const App = () => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="container-fluid">
            <EventForm />
            <br />
            <Events />
        </div>
      </AppContext.Provider>
    );
}

export default App;
