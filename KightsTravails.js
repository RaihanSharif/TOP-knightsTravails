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
        visited.forEach((elem) => {
          if (coord[0] == elem[0] && coord[1] == elem[1]) {
            console.log("already visited");
          } else {
            ls.push(coord);
          }
        });
      }
    }
  });

  return ls;
}

let a = adjListBuilder(0, 0, [[1, 1]]);
let b = adjListBuilder(6, 5, [[7, 3]]);

// TODO: need a function to check equality between coordinates
function isCoordsEqual(first, second) {
  return first[0] === second[0] && first[1] == second[1];
}

function knightMOves(start, target) {
  const visited = [];
  let parent = null;
  const path = [];
  const queue = [];

  while (queue.length != 0) {}
}

console.log(a);
console.log(b);
