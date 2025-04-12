<<<<<<< HEAD
function adjListBuilder(node) {
  let ls = [];
  const moves = [
    [node[0] + 1, node[1] + 2],
    [node[0] + 1, node[1] - 2],
    [node[0] - 1, node[1] + 2],
    [node[0] - 1, node[1] - 2],
    [node[0] + 2, node[1] + 1],
    [node[0] + 2, node[1] - 1],
    [node[0] - 2, node[1] + 1],
    [node[0] - 2, node[1] - 1],
=======
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
>>>>>>> 0eff5d2 (creating a set of valid moves from a given position on the board. does not exclude visited nodes.)
  ];

  moves.forEach((coord) => {
    if (coord[0] > 0 && coord[0] < 8) {
      if (coord[1] > 0 && coord[1] < 8) {
<<<<<<< HEAD
        ls.push(coord);
      }
    }
  });
  return ls;
}

function isCoordsEqual(first, second) {
  return first[0] === second[0] && first[1] == second[1];
}

function knightMoves(start, target) {
  const visited = new Set(); // use JSON stringify to store coords as unique strings
  const path = [];
  const queue = []; // breadth-first search queue
  let parent = {};
  parent[JSON.stringify(start)] = null;
  queue.push(start);

  while (queue.length != 0) {
    let currentNode = queue.shift();

    if (isCoordsEqual(currentNode, target)) {
      while (currentNode !== null) {
        path.unshift(currentNode);
        currentNode = parent[JSON.stringify(currentNode)];
      }
      console.log(`You made it in ${path.length - 1} moves`);
      path.forEach((node) => console.log(node));
      return;
    }

    let potentialMoves = [];
    if (currentNode !== null) {
      potentialMoves = adjListBuilder(currentNode);
      visited.add(JSON.stringify(currentNode));
    }

    potentialMoves.forEach((move) => {
      let mvStr = JSON.stringify(move);
      if (!visited.has(mvStr)) {
        queue.push(move);
        parent[mvStr] = currentNode;
      }
    });
  }
  return null;
}

// console.log(b);
knightMoves([3, 3], [4, 3]);
knightMoves([6, 5], [4, 3]);
=======
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

console.log(a);
console.log(b);
>>>>>>> 0eff5d2 (creating a set of valid moves from a given position on the board. does not exclude visited nodes.)
