import { useState, useEffect } from 'https://esm.sh';

export default function App() {
  const [weeks, setWeeks] = useState([]);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

  useEffect(() => {
    // 1ヶ月分（4週間）のデータを初期化
    const initialWeeks = Array.from({ length: 4 }, (_, w) => ({
      id: w + 1,
      days: ['月', '火', '水', '木', '金'].map(d => ({ day: d, start: '09:00', end: '18:00', breakTime: '01:00', note: '' }))
    }));
    setWeeks(initialWeeks);
  }, []);

  if (weeks.length === 0) return <div style={{ padding: '20px', color: '#fff' }}>読み込み中...</div>;

  return (
    <div style={{ padding: '20px', background: '#1e1e1e', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>📅 週次勤務時間集計ツール</h2>
      <div style={{ margin: '20px 0' }}>
        {weeks.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => setCurrentWeekIndex(idx)}
            style={{ 
              padding: '10px 20px', 
              marginRight: '10px', 
              background: currentWeekIndex === idx ? '#007acc' : '#333', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            第 {idx + 1} 週
          </button>
        ))}
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ background: '#333' }}>
            <th style={{ padding: '10px', border: '1px solid #444' }}>曜日</th>
            <th style={{ padding: '10px', border: '1px solid #444' }}>開始時間</th>
            <th style={{ padding: '10px', border: '1px solid #444' }}>終了時間</th>
            <th style={{ padding: '10px', border: '1px solid #444' }}>休憩時間</th>
            <th style={{ padding: '10px', border: '1px solid #444' }}>業務内容メモ</th>
          </tr>
        </thead>
        <tbody>
          {weeks[currentWeekIndex].days.map((d, idx) => (
            <tr key={idx} style={{ textAlign: 'center' }}>
              <td style={{ padding: '10px', border: '1px solid #444', fontWeight: 'bold' }}>{d.day}</td>
              <td style={{ padding: '10px', border: '1px solid #444' }}>
                <input type="time" defaultValue={d.start} style={{ background: '#252526', color: '#fff', border: '1px solid #555', padding: '5px', borderRadius: '4px' }} />
              </td>
              <td style={{ padding: '10px', border: '1px solid #444' }}>
                <input type="time" defaultValue={d.end} style={{ background: '#252526', color: '#fff', border: '1px solid #555', padding: '5px', borderRadius: '4px' }} />
              </td>
              <td style={{ padding: '10px', border: '1px solid #444' }}>
                <input type="time" defaultValue={d.breakTime} style={{ background: '#252526', color: '#fff', border: '1px solid #555', padding: '5px', borderRadius: '4px' }} />
              </td>
              <td style={{ padding: '10px', border: '1px solid #444' }}>
                <input type="text" placeholder="例: 開発作業、ミーティング" style={{ width: '90%', background: '#252526', color: '#fff', border: '1px solid #555', padding: '5px', borderRadius: '4px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <button style={{ padding: '10px 30px', background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          💾 データを保存・集計する
        </button>
      </div>
    </div>
  );
}
