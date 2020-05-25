# Router

Simple router for react without external dependencies.

## Example usage:

### Create routes:

```js
const routes = [
  { path: '/home', component: Home },
  { path: '/users/:userId', component: Profile },
  { path: '/settings', component: Settings },
  { path: '/404', component: NotFound },
  { path: '/', redirectTo: '/home' },
  { path: '*', redirectTo: '/404' }
];
```

### Init Router:

```js
import Router from './router';

function App() {
  return (
    <Router routes={routes}>
      <Navbar />
    </Router>
  );
}
```

### Use the `useRouter` hook to navigate and get path params

```js
function Profile(props) {
  const router = useRouter();

  const handleClick = () => {
    router.navigate('/settings');
  };

  return (
    <div className="container">
      <h1>Profile {router.params.userId}</h1>
      <button type='button' onClick={handleClick}>
        Open Settings
      </button>
    </div>
  );
}
```

## License

Licensed under the [MIT](LICENSE) License.
