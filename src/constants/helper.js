const drawer_menu = [
  {title: 'محاضراتي', icon: 'home', route: 'home'},
  {title: 'حساب تعريفي', icon: 'user', route: 'profile'},
  {title: 'جدول أعمال', icon: 'agenda', route: 'agenda'},
  // {title: 'إشعار', icon: 'bell', route: 'notifications'},
];

const admin_drawer_menu = [
  {title: 'Home', icon: 'home', route: 'home'},
  {title: 'Orders', icon: 'cart', route: 'orders'},
  {title: 'Request', icon: 'request', route: 'request'},
];

const getImage = img =>
  img
    ? img?.includes('http')
      ? img
      : img?.includes('base64')
      ? img
      : URL + img
    : null;

const getFullName = user => {
  if (!user) return;
  return user.first_name + ' ' + user.last_name;
};

export default {
  drawer_menu,
  admin_drawer_menu,
  getFullName,
  getImage,
};
