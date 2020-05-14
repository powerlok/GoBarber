import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const handleLogout = useCallback(() => {
    localStorage.clear();
    history.go(0);
  }, [history]);

  return (
    <>
      <h1>Dashboard</h1>
      <button type="button" onClick={handleLogout}>
        <FiPower size={18} color="#E02041" />
      </button>
    </>
  );
};

export default Dashboard;
