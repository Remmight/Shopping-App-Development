import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';

export default function TopNav(props) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(#feae3ed7, #fa7a3fd9, #f86d3ed7)`,
        borderEndStartRadius: '10px',
        borderEndEndRadius: '10px',
      }}
      className="mb-3 px-2 py-4 w-100"
    >
      <div className="d-flex flex-column align-items-start justify-content-start w-70">
        <div className="d-flex flex-row align-items-center justify-content-between">
          <ArrowBackIcon style={{ fontSize: '35px', color: '#fff' }} />
          <span className="text-md mx-3 text-light">{props.routeName}</span>
        </div>
      </div>
    </div>
  );
}
