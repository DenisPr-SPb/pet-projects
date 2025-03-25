import './style.css'
import createElement from './utils/genetare-html-element.ts';

const menuItems = [
  { name: "Главная", href: "#" },
  { name: "О нас", href: "#about" },
  { name: "Контакты", href: "#contact" },
];

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const header = createElement({
    tag: 'header',
    classNames: ['header'],
  });
  const title = createElement({
    tag: 'h1',
    text: 'New HEADER',
    classNames: ['header__title', 'title'],
  })

  const menu = createMenu(menuItems);

  header.appendChild(title);
  body.append(header);
  body.append(menu);

})

function createMenu(menuItems) {
  const navEl = createElement({
    tag: 'nav',
    classNames: ['nav', 'menu__container'],
  })

  const menuList = createElement({
    tag: 'ul',
    classNames: ['menu__list'],
  })

  menuList.append(...menuItems.map(item => {
    const menuItem = createElement({
      tag: 'li',
      classNames: ['menu__item'],
    });
    const menuItemLink = createElement({
      tag: 'a',
      text: item.name,
      href: item.href,
      classNames: ['menu__link'],
    })
    menuItem.append(menuItemLink);
    return menuItem;
  }));

  navEl.append(menuList);
  return navEl;
}