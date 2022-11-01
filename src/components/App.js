import { useState, useReducer } from 'react';
import Events from '../reducers/Events'
import Event from './Event';
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
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [state, dispatch] = useReducer(Events, []);

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_EVENT',
      title: title,
      body: body,
    });
    setTitle('');
    setBody('');
  }

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          {/* Enter時、リロード防止用inputタグ */}
          <input type="text" name="dummy" style={{'display': 'none'}} />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Text Body</label>
          <textarea className="form-control" id="body" rows="3" value={body} onChange={e => setBody(e.target.value)}></textarea>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button" onClick={addEvent}>イベント作成</button>
          <button className="btn btn-danger" type="button">全てのイベントを削除</button>
        </div>
      </form>
      <br />
      <h4>イベント一覧</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">タイトル</th>
            <th scope="col">本文</th>
          </tr>
        </thead>
        {/* イベント一覧表示 */}
        <tbody>
          { 
            state.map((event, index) => (
              <Event key={index.toString()} event={event} dispatch={dispatch} />
            ))
          }

        </tbody>
      </table>
    </div>
  );
}

export default App;
