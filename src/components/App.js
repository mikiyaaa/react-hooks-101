import { useReducer } from 'react';
import Event from './Event';
import EventForm from './EventForm';
import reducer from '../reducers/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './Events';

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
    console.log(state, 'in App.js');

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <br />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
