// раздел taskmanager
import {createBtnHeaderTemplate} from './components/site-menu.js';
// фильтры
import {createFilterTemplate} from './components/filter.js';
// главная доска
import {createBoardTemplate} from './components/board.js';
// карточки заданий
import {createCardTaskTemplate} from './components/card-task.js';
// форма карточки
import {createCardFormTemplate} from './components/card-form.js';
// кнопка LoadMore
import {createBtnLoadMoreTemplate} from './components/btn-load-more.js';

//  ---------------------------- моки
import {generateFilters} from './mock/filter-mock.js';
// import {generateTasks} from './mock/task.js';


const TASK_COUNT = 3;


//  ---------------------------- ф-ция рендер
const render = (container, template, place = `beforeend`) => {
  if (container instanceof Element) {
    container.insertAdjacentHTML(place, template);
  }
};


//  ---------------------------- containers in HTML
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.main__control`);


// ---------------------------- рендер на страницу
const filtersBtn = generateFilters(); // моки фильтр
render(siteMainElement, createFilterTemplate(filtersBtn));
render(siteHeaderElement, createBtnHeaderTemplate());
render(siteMainElement, createBoardTemplate()); // доска


// карточка редактирование
const taskListElement = siteMainElement.querySelector(`.board__tasks`);
render(taskListElement, createCardFormTemplate());


// счетчик на 3 карточки
new Array(TASK_COUNT).fill(``).forEach(() => render(taskListElement, createCardTaskTemplate()));


// кнопка LoadMore и доска
const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createBtnLoadMoreTemplate()); // кнопка LoadMore
