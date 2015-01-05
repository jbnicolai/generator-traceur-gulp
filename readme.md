# Getting Started

Assuming you've got Node and NPM installed and ready to go, the first step is to install 
`generator-traceur-gulp` globally, making it available to Yeoman.

```
$ npm install -g generator-traceur-gulp
```

The generator should be run from inside the directory that will house the project. Create the directory
and make it the current directory.

```
$ mkdir <my-project>
$ cd <my-project>
```

You can then run the generator.

```
$ yo traceur-gulp
```

The project will be created, and the NPM packages will be installed, making it ready to go. If you don't
already have gulp installed, you should do that next:

```
$ npm install -g gulp
```

## What you get

Check out the `gulpfile.js` to see what's going on. Any JS in the `./app` directory will be processed
by traceur. Output goes to the `./build` directory. Source maps are also generated, they'll be found
in `./build/static/maps`.

The `./build/index.html` will include the script tags to bootstrap the ES6 module system. You're good to go!

## License

MIT
