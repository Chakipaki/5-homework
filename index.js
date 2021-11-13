import { getMondaysOfMonth } from './dateModules/getMondaysOfMonth.js';
import { isMonthLong } from './dateModules/isMonthLong.js';
import { shortestWeekDaysNumber } from './dateModules/shortestWeekDaysNumber.js';
import { fullWeeksNumberInMonth } from './dateModules/fullWeeksNumberInMonth.js';

const inputDate = document.querySelector('[data-input-date]');

const mondaysBtn = document.querySelector('[data-mondays]');
const isLongBtn = document.querySelector('[data-is-long]');
const shortestWeekBtn = document.querySelector('[data-shortest-week]');
const fullWeeksBtn = document.querySelector('[data-full-weeks]');

const mondaysBtnResult = document.querySelector('[data-mondays-result]');
const isLongBtnResult = document.querySelector('[data-is-long-result]');
const shortestWeekBtnResult = document.querySelector('[data-shortest-week-result]');
const fullWeeksBtnResult = document.querySelector('[data-full-weeks-result]');

inputDate.addEventListener('input', () => {
    console.log('input');
    mondaysBtnResult.innerText = '';
    mondaysBtnResult.style.display = 'none';
    isLongBtnResult.innerText = '';
    isLongBtnResult.style.display = 'none';
    shortestWeekBtnResult.innerText = '';
    shortestWeekBtnResult.style.display = 'none';
    fullWeeksBtnResult.innerText = '';
    fullWeeksBtnResult.style.display = 'none';
});

mondaysBtn.addEventListener('click', () => {
    const result = getMondaysOfMonth(inputDate.value);
    mondaysBtnResult.innerText = result;
    mondaysBtnResult.style.display = 'block';
});
isLongBtn.addEventListener('click', () => {
    const result = isMonthLong(inputDate.value);
    isLongBtnResult.innerText = result;
    isLongBtnResult.style.display = 'block';
});
shortestWeekBtn.addEventListener('click', () => {
    const result = shortestWeekDaysNumber(inputDate.value);
    shortestWeekBtnResult.innerText = result;
    shortestWeekBtnResult.style.display = 'block';
});
fullWeeksBtn.addEventListener('click', () => {
    const result = fullWeeksNumberInMonth(inputDate.value);
    fullWeeksBtnResult.innerText = result;
    fullWeeksBtnResult.style.display = 'block';
});
