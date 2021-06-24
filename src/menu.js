import chesse from './images/chicken.jpg';
import food from './images/food.jpeg';
import jollof from './images/jollof.jpeg';
import veg from './images/veg.jpeg';

function MenuItem(name, src) {
  this.name = name;
  this.src = src;
}

const menu = [
  new MenuItem('Simple Cheese', chesse),
  new MenuItem('Mixed Foods', food),
  new MenuItem('Nigerian Jollof Rice', jollof),
  new MenuItem('Vegetable Meal', veg),
];