// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of a new array
function appendCat(name) {
  let newCats = cats.slice(); // Create a copy of the cats array
  newCats.push(name); // Add the new cat to the end of the copy
  return newCats; // Return the new array
}

// Function to prepend a cat to the start of a new array
function prependCat(name) {
  let newCats = cats.slice(); // Create a copy of the cats array
  newCats.unshift(name); // Add the new cat to the start of the copy
  return newCats; // Return the new array
}
function removeLastCat(){
    let newCats =cats.slice();
    newCats.pop()
    return newCats
}
function removeFirstCat(){
    let newCats =cats.slice();
    newCats.shift();
    return newCats;
}





