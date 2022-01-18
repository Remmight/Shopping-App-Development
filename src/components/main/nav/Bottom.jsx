import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Home,
  ShoppingCart,
  AccountCircle,
  ListSharp,
} from '@mui/icons-material';

export default function Bottom() {
  const [value, setValue] = React.useState(0);

  return (
    <div style={{ position: 'absolute', bottom: 0, top: '94%', zIndex: '4' }}>
      <Box
        sx={{ width: '100%', position: 'fixed' }}
        className="shadow-lg text-center"
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction icon={<Home />} as={Link} to="/" />
          <BottomNavigationAction
            icon={<ListSharp />}
            as={Link}
            to="/category"
          />
          <BottomNavigationAction
            icon={<AccountCircle />}
            as={Link}
            to="/account"
          />
          <BottomNavigationAction
            icon={<ShoppingCart />}
            as={Link}
            to="/cart"
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
