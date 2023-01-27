const ids = new Set([1, 2, 3, 4, 'Fun', 'HI']);
ids.add(7);

if (ids.has('HI')) {
  ids.delete('HI');
};

console.log(ids.has(2));

for (const entry of ids.entries()) {
  console.log(entry);
};

for (const entry of ids.values()) {
  console.log(entry);
};

// MAPS
const person1 = {oruko: 'Pato'};
const person2 = {oruko: 'Goodness'};

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

personData.set(person2, [{date: 'two weeks ago', price: 100}]);
console.log(personData);
console.log(personData.get(person1));

for (const entry of personData.entries()) {
  console.log(entry);
};

for (const [key, value] of personData.entries()) {
  console.log(key, value);
};

for (const key of personData.keys()) {
  console.log(key);
};

for (const value of personData.values()) {
  console.log(value);
};

console.log(personData.size);