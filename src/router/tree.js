class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

export class Tree {
  constructor() {
    this.root = new Node('');
  }

  insert(values) {
    let node = this.root;

    while (values.length) {
      const value = values.pop();
      const match = node.children.find((item) => item.value === value);
      if (match) {
        node = match;
      } else {
        const child = new Node(value);
        node.children.push(child);
        node = child;
      }
    }
  }

  search(values) {
    let node = this.root;
    let path = [];
    let params = {};

    while (values.length) {
      const value = values.pop();



      match = node.children.filter((item) => item.value[0] === ':');



      // if concrete string is not found, but there is a
      // parameter, build parameters object with key: value
      // return route.path and parameters
    }

    return {
      path: path.join('/'),
      params: params
    };
  }
}

export function createTree(paths) {
  const tree = new Tree();
  for (const path of paths) {
    const values = path.split('/');
    tree.insert(values.reverse());
  }
  return tree;
}

export function resolve(tree, path) {
  const values = path.split('/');
  return tree.search(values.reverse());
}
