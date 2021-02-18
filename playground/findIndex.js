const arr = [
  { ep: 1, se: 1, title: "A" },
  { ep: 2, se: 2, title: "B" },
  { ep: 3, se: 3, title: "d" },
  { ep: 4, se: 4, title: "e" },
  { ep: 5, se: 5, title: "3" },
  { ep: 6, se: 6, title: "r" },
  { ep: 7, se: 7, title: "g" },
  { ep: 8, se: 8, title: "h" },
  { ep: 9, se: 9, title: "i" },
];

const index = arr.find((e) => e.ep === 4 && e.se === 4);
console.log(index);
