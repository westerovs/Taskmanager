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
import {generateTasks} from './mock/task.js';


const TASK_COUNT = 30;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

//  ---------------------------- ф-ция рендер
const render = (container, template, place = `beforeend`) => {
  if (container instanceof Element) {
    container.insertAdjacentHTML(place, template);
  }
};


//  ---------------------------- containers in HTML
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.main__control`);

render(siteHeaderElement, createBtnHeaderTemplate());

const filtersBtn = generateFilters();
render(siteMainElement, createFilterTemplate(filtersBtn));
render(siteMainElement, createBoardTemplate()); // доска

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const tasks = generateTasks(TASK_COUNT); // карточки

render(taskListElement, createCardFormTemplate(tasks[0])); // форма
let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(1, showingTasksCount).forEach((task) => render(taskListElement, createCardTaskTemplate(task)));


// кнопка LoadMore
const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createBtnLoadMoreTemplate());
const loadMoreButton = boardElement.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => render(taskListElement, createCardTaskTemplate(task), `beforeend`));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
