function adjListBuilder(x, y, visited) {
  let ls = [];
  moves = [
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
  ];

  moves.forEach((coord) => {
    if (coord[0] > 0 && coord[0] < 8) {
      if (coord[1] > 0 && coord[1] < 8) {
        ls.push(coord);
      }
    }
  });

  ls = ls.filter((elem) => !visited.includes(elem));
  return ls;
}

let a = adjList(0, 0, [1, 1]);
let b = adjList(6, 5, [1, 1]);

console.log(a);
console.log(b);
