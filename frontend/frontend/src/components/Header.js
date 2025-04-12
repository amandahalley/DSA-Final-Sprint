import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>🌳 BST App</h2>
      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/create" style={styles.link}>Create Tree</Link>
        <Link to="/history" style={styles.link}>View Trees</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#2d3748',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  logo: {
    margin: 0,
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    marginLeft: '20px',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'opacity 0.2s ease',
  }
};
