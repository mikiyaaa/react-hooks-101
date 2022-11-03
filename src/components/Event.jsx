import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { DELETE_EVENT } from '../actions';

const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext);

    const id = event.id;
    const handleClickDeleteButton = () => {
        const result = window.confirm(`イベント（id=${id}）を削除します。\r\nよろしいですか？`)

        if (result) {
            dispatch({
            type: DELETE_EVENT,
            id: id,
            });
        }
    }

    return (
        <tr>
        <td>{id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td><button className='btn btn-danger' type='button' onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}

export default Event