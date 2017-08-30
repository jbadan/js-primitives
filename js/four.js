var foods = [
  'Popcorn',
  'Potato chips',
  'Shrimp',
  'Chicken rice',
  'Poutine',
  'Tacos',
  'Toast',
  'French Toast',
  'Crab',
  'Pho',
  'Lasagna',
  'Brownie',
  'Lobster',
  'Donuts',
  'Ice cream',
  'Hamburger',
  'Sushi',
  'Chocolate',
  'Pizza'
];

console.log("Pho is my "+(foods.indexOf('Pho')+1)+"th favorite food."); //Pho is my 10th favorite food.

//var donutLocation = foods.indexOf('Donuts'); //13

foods.splice(foods.indexOf('Donuts'), 1);
console.log(foods); //deletes 'Donuts'

console.log("These are my 5th-10th favorite foods: "+foods.slice(4, 10)); //lists 5-10
