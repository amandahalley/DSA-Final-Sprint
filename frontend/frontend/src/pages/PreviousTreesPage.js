import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PreviousTreesPage() {
  const [prevTrees, setPrevTrees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/previous-trees')
      .then(res => setPrevTrees(res.data));
  }, []);

  return (
    <div>
      <h2>📖 Previously Created Trees</h2>
      {prevTrees.map(tree => (
        <div key={tree.id} style={{ marginBottom: '10px' }}>
          <strong>Numbers:</strong> {tree.numbers}<br />
          <strong>Tree:</strong> {tree.treeJson}
        </div>
      ))}
    </div>
  );
}
