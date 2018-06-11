interface SidenavItem {
  title?: string;
  icon?: string;
  routerLink?: string;
  children?: Array<SidenavItem>;
  divider?: boolean;
  opened?: boolean;
}

export {
  SidenavItem
};
