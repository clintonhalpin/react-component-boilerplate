# react-component-boilerplate 
A nice setup for creating react components that can be consumed as NPM modules. [example](http://clintonhalpin.github.io/react-component-boilerplate/example/)

### creating a component
1. `git clone git@github.com:clintonhalpin/react-component-boilerplate.git YOUR_COMPONENT_NAME`
2. Change the folder name for `lib/MyComponent` eg. Slider
3. Change the exported component in `lib/MyComponent/index.js` eg. `export default Slider`
4. Change the file `examples/index.js` to that it pulls in your updates component
5. Work on your component!
6. When complete Publish to NPM! `npm publish`

Users will be able to consume your component by running `npm install YOUR_COMPONENT_NAME --save` and importing it! 

### development
Run's webpack and starts a tiny express server for testing

```shell
npm i 
npm run start
```

### testing

```shell
npm run test
```

### build-scripts

| Script  | Action |
| ------------- | ------------- |
| `start`  | Run Dev Server  |
| `build`  | compile `example`  |
| `test`  | run unit tests |
| `test:watch`  | run unit tests with watch |

### examples
[tbd]

=

built by [@clintonhalpin](http://twitter.com/clintonhalpin)
