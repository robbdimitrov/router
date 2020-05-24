import { resolve, createTree } from './tree';
import { normalize } from './utils';

class Router {
  constructor(routes) {
    this.routes = routes;
    this.tree = createTree(routes.map((item) => item.path));
    window.onpopstate = this.render.bind(this);
  }

  getComponent() {
    const path = window.location.pathname;
    const route = this.routes.find((item) => item.path === path);
    return route ? route.component : null;
  }

  resolve() {
    const path = normalize(window.location.pathname);
    const result = resolve(this.tree, path);
    // TODO: handle redirectTo
    // TODO: find wildcard
    const component = this.routes.find((route) => route.path === result.path);
    return { ...result, component };
  }

  render() {
    // TODO: update router context from here
  }

  navigate(url) {
    window.history.pushState(null, '', url);
    this.render();
  }

  back() {
    window.history.back();
  }
}

export default Router;
