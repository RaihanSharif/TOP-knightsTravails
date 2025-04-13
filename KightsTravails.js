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
  const visited = new Set(); // use JSON stringify to store coords as unique strings
  const path = [];
  const queue = []; // breadth-first search queue
  let parent = {};
  // store the parent of each node as a dictionary
  // where the node is the key, and the value is the parent
  parent[JSON.stringify(start)] = null;

  queue.push(start);
  while (queue.length != 0) {
    // make the first item of the queue the current node
    // check if this node is the target node. If it is,
    // add it to the path and return the path.
    // else, add current node to visited.
    // get the adjacency list for the node.

    let currentNode = queue.shift(); // removes first elem from queue
    // if coordinate is found, put it in the path array.
    // then go through the parent dict, and fetch parent of the current node
    // make parent the current node, then put the parent into the path
    // repeat until all nodes in path.
    if (isCoordsEqual(currentNode, target)) {
      while (currentNode !== null) {
        path.unshift(currentNode);
        currentNode = parent[JSON.stringify(currentNode)];
      }
      console.log(`You mnade it in ${path.length - 1} moves`);
      path.forEach((node) => console.log(node));
    }

    // if the current Node is the target node
    // then push it to the front of the path array
    // get its parent from the parent dict, make the parent the current node
    // keep doing this until all nodes are added
    // output the path string

    // get all the valid adjacent nodes for a given node
    // if a node is not visited already, then push it to the BFS queue
    // set current node as its parent
  }
}

console.log(a);
console.log(b);
