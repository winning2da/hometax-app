import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [queue, setQueue] = useState([]);
  const [inputName, setInputName] = useState('');
  const [startTime, setStartTime] = useState(null);

  const handleStart = () => {
    if (!inputName) return;
    if (currentUser) {
      if (!queue.includes(inputName)) {
        setQueue([...queue, inputName]);
      }
    } else {
      setCurrentUser(inputName);
      setStartTime(new Date().toLocaleString());
    }
    setInputName('');
  };

  const handleEnd = () => {
    if (!currentUser) return;
    if (queue.length > 0) {
      setCurrentUser(queue[0]);
      setStartTime(new Date().toLocaleString());
      setQueue(queue.slice(1));
    } else {
      setCurrentUser('');
      setStartTime(null);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>홈택스 사용 현황</h2>
      {currentUser ? (
        <div>
          <p>📌 현재 사용 중: <strong>{currentUser}</strong></p>
          <p>⏱ 사용 시작 시각: {startTime}</p>
          <button onClick={handleEnd}>사용 종료</button>
        </div>
      ) : (
        <p>현재 사용자는 없습니다.</p>
      )}

      <hr />
      <input
        placeholder="이름 입력"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button onClick={handleStart}>사용 시작</button>

      <hr />
      <h3>대기 중인 사용자</h3>
      <ul>
        {queue.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
