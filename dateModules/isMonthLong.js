import { firstWeeDayMonth } from './firstWeekDayMonth.js';

export function isMonthLong(date) {
    const inputValue = firstWeeDayMonth(date);
    const month = inputValue.month;
    const longMonths = [1, 3, 5, 7, 8, 10, 12];
    console.log(month);
    if (longMonths.includes(month)) {
        return true;
    }
    return false;
}
