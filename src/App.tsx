import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [rst, setRst] = useState();
  const btnSendRequest = async () => {
    const { data } = await axios.get('/amount/detail/1?test=hi');
    setRst(data);
  };

  const btnSendRequest2 = async () => {
    const { data } = await axios.post('http://localhost:9999/amount/insert/', {
      amount: 10,
    });
    setRst(data);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={btnSendRequest}
      >
        test
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={btnSendRequest2}
      >
        test2
      </button>
      {JSON.stringify(rst)}
    </div>
  );
}

export default App;
