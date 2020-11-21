import React from "react";
import "./AsideFilter.css";

export default function AsideFilter() {
  return (
    <aside>
      <div className="filter">
        <h2 className="filter__title">Количество пересадок</h2>
        <form>
          <div className="filter__item checkbox">
            <input type="checkbox" className="checkbox__input" id="checkbox1" />
            <label className="checkbox__label" htmlFor="checkbox1">
              Все
            </label>
          </div>
          <div className="filter__item checkbox">
            <input type="checkbox" className="checkbox__input" id="checkbox2" />
            <label className="checkbox__label" htmlFor="checkbox2">
              Без пересадок
            </label>
          </div>
          <div className="filter__item checkbox">
            <input type="checkbox" className="checkbox__input" id="checkbox3" />
            <label className="checkbox__label" htmlFor="checkbox3">
              1 пересадка
            </label>
          </div>
          <div className="filter__item checkbox">
            <input type="checkbox" className="checkbox__input" id="checkbox4" />
            <label className="checkbox__label" htmlFor="checkbox4">
              2 пересадка
            </label>
          </div>
          <div className="filter__item checkbox">
            <input type="checkbox" className="checkbox__input" id="checkbox5" />
            <label className="checkbox__label" htmlFor="checkbox5">
              3 пересадка
            </label>
          </div>
        </form>
      </div>
    </aside>
  );
}
