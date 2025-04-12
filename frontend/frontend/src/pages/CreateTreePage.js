import React, { useState } from 'react';
import axios from 'axios';

export default function CreateTreePage() {
  const [numbers, setNumbers] = useState('');
  const [tree, setTree] = useState(null);

  const createTree = async () => {
    const nums = numbers.split(',').map(n => parseInt(n.trim()));
    const res = await axios.post('http://localhost:8081/api/process-numbers', nums);
    setTree(res.data);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>🌲 Create a New Binary Search Tree</h2>
        <input
          value={numbers}
          onChange={e => setNumbers(e.target.value)}
          placeholder="e.g. 5, 3, 7"
        />
        <button onClick={createTree}>Create Tree</button>

        {tree && (
          <div style={styles.treeBox}>
            <h3>Generated Tree:</h3>
            <pre>{JSON.stringify(tree, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '40px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
  },
  treeBox: {
    marginTop: '20px',
    textAlign: 'left',
    background: '#f0f4f8',
    padding: '15px',
    borderRadius: '8px',
  },
};

