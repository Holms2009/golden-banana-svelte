import guildBanner from '../../assets/img/guild.png';
import goldPiggyBank from '../../assets/img/piggy_bank_gold.png';
import houseIcon from '../../assets/img/city.png';
import moon from '../../assets/img/fullmoon.png';

const mainMenu: MenuItem[] = [
  { text: 'Главная', image: guildBanner, link: '/' },
  { text: 'Вклады', image: goldPiggyBank, link: '/contributions' },
  { text: 'Здания', image: houseIcon, link: '/buildings' },
  { text: 'Галерея', image: moon, link: '/gallery' }
]

export default mainMenu;