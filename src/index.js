import _ from 'lodash';
import './style.css';
import home from './home.svg';
import important from './important.svg';
import due from './duedate.svg';

function createHeader() {
    const header = document.createElement('header');
    header.textContent = 'Odin Todo List';
    header.setAttribute('id', 'header');

    return header;
}

function createNavBar() {
    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'nav-bar');

    return navBar;
}

function createNavigation() {
    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'navigation');
    const allNav = [
        {
            id: "home",
            text: "Home",
            img: home,
        },
        {
            id: "important",
            text: "Important",
            img: important,
        },
        {
            id: "dueDate",
            text: "Due Date",
            img: due,
        },

    ];

    const makeNavigation = function (id, text, img) {
        const nav = document.createElement('div');
        nav.setAttribute('id', `${id}`);
        nav.classList.add('nav')
        const icon = new Image();
        icon.setAttribute('src', `${img}`);
        const label = document.createElement('div');
        label.textContent = text;

        nav.append(icon, label);
        navBar.append(nav);
    }

    for (let i = 0; i < allNav.length; i++) {
        makeNavigation(allNav[i].id, allNav[i].text, allNav[i].img);
    }

    return navBar;
}

document.body.append(createHeader(), createNavBar(),);
document.querySelector('#nav-bar').appendChild(createNavigation());

