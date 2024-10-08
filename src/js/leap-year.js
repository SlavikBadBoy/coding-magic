export const calculatorYearInit = () => {
  const main = document.querySelector('main');
  const mainTitle = document.createElement('h2');
  mainTitle.classList.add('main-title');
  main.prepend(mainTitle);
  mainTitle.textContent = 'Популярні інетрактивні ігри';

  const title = document.querySelector('.calculator-year__container');
  const createTitle = document.createElement('h2');

  createTitle.classList.add('title__leap-year');
  createTitle.classList.add('title');
  createTitle.textContent = 'Перевір в який рік ти народився';
  title.prepend(createTitle);
  const leapYear = document.querySelector('.calculator-year');
  leapYear.innerHTML = `  <form action="#" class="form__check-year">      <input
class="input__check-year"
type="number"
id="year"
placeholder="Введіть рік народження"
/>
<button class="button__check-year" id="checkYearButton"></button>
</form>

<p class="result__check-year" id="result">Щоб почати, введи свій рік народження!</p>
`;
  const calculatorYear = document.querySelector('#year');
  const result = document.querySelector('#result');
  const button = document.querySelector('#checkYearButton');

  const checkCalculatorYear = event => {
    event.preventDefault();

    const yearValue = calculatorYear.value.trim();

    if (yearValue.length === 0) {
      result.innerHTML = 'Введіть ваш рік!';
      result.style.color = 'red';
    }
    const year = parseInt(calculatorYear.value);
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      result.innerHTML = 'Ви народилися у високосний рік!';
      result.style.color = `green`;
    } else {
      result.innerHTML = 'Ви народилися не в високосний рік.';
      result.style.color = 'red';
    }
  };
  button.addEventListener('click', checkCalculatorYear);
};
