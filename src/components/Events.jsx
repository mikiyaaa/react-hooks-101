import React from 'react';
import Event from './Event';

const Events = ({ state, dispatch }) => {
  return (
    <>
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
    </>
  )
}

export default Events;