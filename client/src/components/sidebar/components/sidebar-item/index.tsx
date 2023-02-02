import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styles } from './styles';

type SidebarItemProps = {
  path: string;
  icon: React.ReactNode;
  label: string;
};

const SidebarItem = ({ path, icon, label }: SidebarItemProps) => {
  return (
    <ListItem sx={styles.listItem} disablePadding>
      <NavLink to={path}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </NavLink>
    </ListItem>
  );
};

export default SidebarItem;
