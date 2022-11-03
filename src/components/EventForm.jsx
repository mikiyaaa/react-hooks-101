import React, { useContext, useState } from 'react';
import { CREATE_EVENT } from '../actions';
import AppContext from '../contexts/AppContext';

const EventForm = () => {
    const { state, dispatch } = useContext(AppContext);
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addEvent = (e) => {
      e.preventDefault();

      dispatch({
        type: CREATE_EVENT,
        title: title,
        body: body,
      });
      setTitle('');
      setBody('');
    }
  
    const deleteEventsAll = (e) => {
      e.preventDefault();
      const result = window.confirm('全てのイベントを削除します。\r\nよろしいですか？');
  
      if (result) dispatch( {type: 'DELETE_ALL_EVENT'} );
    }
  
    const unCreatable = title === '' || body === '' ? true : false;
    const unDeletable = state.length === 0 ? true : false;

    return (
        <>
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
            <button className="btn btn-primary" type="button" onClick={addEvent} disabled={unCreatable}>イベント作成</button>
            <button className="btn btn-danger" type="button" onClick={deleteEventsAll} disabled={unDeletable}>全てのイベントを削除</button>
            </div>
        </form>
        </>
    )
}

export default EventForm