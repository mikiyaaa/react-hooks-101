import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button">イベント作成</button>
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
      </table>
    </div>
  );
}

export default App;
