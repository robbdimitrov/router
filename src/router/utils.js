export function pathToComponent(routes, path) {
  const route = routes.find((item) => item.path === path);
  return route ? route.component : null;
}

export function navigate(url) {
  window.history.pushState(null, '', url);
}

export function back() {
  window.history.back();
}

export function combine(str1, str2) {
  return (str1 + ' ' + str2).trim();
}

// function getRoute(routes, url) {
  // const path = url.split('/');
  // const parts = path.filter((item) => item.length > 0);
  // let params = {};



  // return { path, params };
// }
