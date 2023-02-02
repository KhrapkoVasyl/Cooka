import { Stack, List } from '@mui/material';
import Logo from '../logo';
import { Link } from 'react-router-dom';
import {
  GridView,
  ShoppingBasketRounded,
  FormatListBulletedRounded,
} from '@mui/icons-material';
import SidebarItem from './components/sidebar-item';
import { styles } from './styles';

const Sidebar = () => {
  const menuItems = [
    { path: '/', title: 'Home', icon: GridView },
    { path: '/products', title: 'Products', icon: ShoppingBasketRounded },
    { path: '/recipes', title: 'Recipes', icon: FormatListBulletedRounded },
  ];

  return (
    <Stack sx={styles.sidebarWrapper}>
      <Link to="/">
        <Logo />
      </Link>
      <List sx={styles.list}>
        {menuItems.map(({ path, title, icon: Icon }) => {
          return (
            <SidebarItem key={path} path={path} label={title} icon={<Icon />} />
          );
        })}
      </List>
    </Stack>
  );
};

export default Sidebar;
