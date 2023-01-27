import { createCampaign, dashboard, logout } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
    bio: 'DashBoard'
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
    bio: 'Create Foundation'
  },
  

];