import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>🌳 Binary Search Tree Builder 🌳</h1>
        <p>Welcome! Create a new tree or view your previously saved ones.</p>
        <div style={styles.buttonGroup}>
          <Link to="/create">
            <button className="create-btn">Create Tree</button>
          </Link>
          <Link to="/history">
            <button className="previous-btn">View Trees</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '80px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
  },
  buttonGroup: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
};
