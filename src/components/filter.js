//  фильтры с рандомными значениями из filter-mock
const createFilterMarkup = (filter, isChecked) => {
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


//  массив фильтров
export const createHeaderMainFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((item, i) => createFilterMarkup(item, i === 0)).join(` `);

  return (
    // вставляется мок фильтр
    `<section class="main__filter filter container">
      ${filtersMarkup}
    </section>`
  );
};

