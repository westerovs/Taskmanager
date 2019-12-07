// имена фильтров
const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`
];


// функция которая на основе имён фильтров будет создавать нужную структуру, которую передаю в шаблон
// из функции generateFilters я  возвращаю массив объектов
const generateFilters = () => {
  return filterNames.map((item) => {
    return {
      // название фильтра
      nameFilter: item,
      // счётчик
      countFilter: Math.floor(Math.random() * 10),
    };
  });
};


export {generateFilters};
