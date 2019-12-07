// создать разметку фильтров и проверка на Checked
const createFilterMarkup = (filter, isChecked) => {
  // filter принимает имена из моков
  const {nameFilter, countFilter} = filter;
  return (
    `<input
      type="radio"
      id="filter__${nameFilter}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
    />
      <label for="filter__${nameFilter}" class="filter__label">
        ${nameFilter} <span class="filter__${nameFilter}-count">${countFilter}</span>
      </label>`
  );
};


//  передаю массив фильтров из моков
export const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((item, i) => createFilterMarkup(item, i === 0)).join(` `);
  return (
    // вставляется генерируемая разметка
    `<section class="main__filter filter container">
      ${filtersMarkup}
    </section>`
  );
};

