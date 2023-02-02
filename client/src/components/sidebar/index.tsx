import {
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Logo from '../logo';
import { Link, NavLink } from 'react-router-dom';
import {
  GridView,
  ShoppingBasketRounded,
  FormatListBulletedRounded,
} from '@mui/icons-material';
import { styles } from './styles';

const Sidebar = () => {
  const menuItems = [
    { to: '/', title: 'Home', icon: GridView },
    { to: '/products', title: 'Products', icon: ShoppingBasketRounded },
    { to: '/recipes', title: 'Recipes', icon: FormatListBulletedRounded },
  ];

  return (
    <Stack sx={styles.sidebarWrapper}>
      <Link to="/">
        <Logo />
      </Link>
      <List sx={styles.list}>
        {menuItems.map(({ to, title, icon: Icon }) => {
          return (
            <ListItem sx={styles.listItem} key={to} disablePadding>
              <NavLink to={to}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};

export default Sidebar;
