import {createBoardTemplate} from './components/board.js';
import {createLoadMoreTemplate} from './components/load-more-button.js';
import {createHeaderMainFilterTemplate} from './components/filter.js';
import {createHeaderBtnWrapTemplate} from './components/site-menu.js';
import {createTaskTemplate} from './components/task-edit.js';
import {createTaskEditTemplate} from './components/form-task-edit.js';
//  ------------------- CТРУКТУРА ДАННЫХ ------------------------------
import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filter-mock.js';


const TASK_COUNT = 3;


//  ---------------------- ф-ция рендер --------------------------------
const render = (container, template, place = `beforeend`) => {
  if (container instanceof Element) {
    container.insertAdjacentHTML(place, template);
  }
};


//  ----------------------- containers -----------------------------------
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.main__control`);


// --------------------- рендер на страницу --------------------------
const filters = generateFilters();
render(siteMainElement, createHeaderMainFilterTemplate(filters));
render(siteHeaderElement, createHeaderBtnWrapTemplate());
render(siteMainElement, createBoardTemplate());


// карточка редактирование
const taskListElement = siteMainElement.querySelector(`.board__tasks`);
render(taskListElement, createTaskEditTemplate());


// счетчик на 3 карточки
new Array(TASK_COUNT).fill(``).forEach(() => render(taskListElement, createTaskTemplate()));


// кнопка LoadMore
const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createLoadMoreTemplate());
