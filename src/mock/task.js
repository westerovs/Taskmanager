// 1 структура данных которая описывает задачи
import {Colors} from '../const.js';


// description: постановка задачи. Случайная строка из трёх на выбор:
const DescriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на 100%`,
  `Вызубрить массивы`,
  `Выучить объекты`,
  `Выучить set/map`,
  `Выучить функции`,
  `Выучить javascript`,
];


// RepeatingDays: объект с фиксированными ключами mo, tu, we, th, fr, sa, su и boolean в качестве значения. Повторяется ли задача будем узнавать именно из него.
const DefaultRepeatingDays = {
  'mo': false,
  'tu': false,
  'we': false,
  'th': false,
  'fr': false,
  'sa': false,
  'su': false,
};


// tags: список хештегов.
// Список типа Set случайных значений из набора homework, theory, practice, intensive, keks. Можете добавить своих вариантов для разнообразия. Всего в списке может быть от 0 до 3 тегов.
const Tags = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`
];


const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

// дата
const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 7);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

// дни
const generateRepeatingDays = () => {
  return Object.assign({}, DefaultRepeatingDays, {
    'mo': Math.random() > 0.5,
    'tu': Math.random() > 0.5,
    'we': Math.random() > 0.5,
    'th': Math.random() > 0.5,
    'fr': Math.random() > 0.5,
    'sa': Math.random() > 0.5,
    'su': Math.random() > 0.5,
  });
};

// теги
const generateTags = (tags) => {
  return tags
    .filter(() => Math.random() > 0.5)
    .slice(0, 3);
};


// dueDate: дата запланированного выполнения.
// Объект типа Date или null (если срок исполнения не установлен). Просрочена ли задача будем узнавать из этого поля. Ограничение: плюс-минус неделя от текущей даты
// RepeatingDays

// cуть generateTask создать объект с описанием одной задачи
const generateTask = () => {
  const dueDate = Math.random() > 0.5 ? null : getRandomDate();
  // задача:
  return {
    description: getRandomArrayItem(DescriptionItems),
    dueDate,
    repeatingDays: dueDate ? DefaultRepeatingDays : generateRepeatingDays(),
    tags: new Set(generateTags(Tags)),
    color: getRandomArrayItem(Colors),
    isFavorite: Math.random() > 0.5,
    isArchive: Math.random() > 0.5,
  };
};
  // isFavorite: булево значение, сообщающее, добавлена ли задача в избранное.
  // isArchive: булево значение сообщающее, помещена ли задача в архив.


// это функция которая генерирует массив задач из generateTask
const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};

export {generateTask, generateTasks};
