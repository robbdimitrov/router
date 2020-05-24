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
    values = values.reverse();
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
    values = values.reverse();
    let node = this.root;
    let params = {};

    while (values.length) {
      const value = values.pop();
      let match = node.children.find((item) => item.value === value);

      if (match) {
        node = match;
        continue;
      }

      match = node.children.filter((item) => item.value[0] === ':');



      // if concrete string is not found, but there is a
      // parameter, build parameters object with key: value
      // return route.path and parameters
    }

    let parts = [];
    return {
      path: parts.join('/'),
      params: params
    };
  }
}

export function createTree(routes) {
  const tree = new Tree();
  for (const route of routes) {
    const values = route.path.split('/');
    tree.insert(values);
  }
  return tree;
}

export function resolve(tree, path) {
  const values = url.split('/');
  return tree.search(path);
}
