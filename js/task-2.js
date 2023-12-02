console.log('---------- Task 2 ----------');

function calcAverageCalories(days) {
  return days.length === 0
    ? 0
    : days.reduce((acc, item) => acc + item.calories, 0) / days.length;
}

/////////////////////////////////////////////////////////////////////////////////////////////

// function calcAverageCalories(days) {
//   if (days.length === 0) {
//     return 0;
//   }

//   let total = [];

//   for (const day of days) {
//     total.push(day.calories);
//   }
//   const avgCalories = total.reduce((acc, item) => acc + item, 0) / days.length;

//   return avgCalories;
// }

/////////////////////////////////////////////////////////////////////////////////////////////

// function calcAverageCalories(days) {
//   if (days.length === 0) {
//     return 0;
//   }

//   let arrOfValues = [];

//   for (const day of days) {
//     arrOfValues.push(Object.values(day));
//   }

//   const arrCalories = arrOfValues.map(element => element[element.length - 1]);
//   const avgCalories =
//     arrCalories.reduce((acc, element) => acc + element, 0) / arrCalories.length;
//   // console.log(total);
//   // console.log(arrCalories);
//   return avgCalories;
// }

/////////////////////////////////////////////////////////////////////////////////////////////

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ]),
); // 3180

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: 2610 },
  ]),
); // 2270

console.log(calcAverageCalories([])); // 0
