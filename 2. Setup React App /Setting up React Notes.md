# 1. Setup React App
**Note:** This is a manual step-by-step setup of react application(`not using create-react-app command`) assuming we have only index.html file in our repo right now, which contains following code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```
- Before setting up react, we need to know few details, which are mentioned below:
  
## NPM
NPM is like a magic toolbox for JavaScript programmers. It is a kind of repository of packages(pre-written code) which helps developers to achieve some functionality without building from scratch.

### How to install/add NPM in the solution?
- NPM is required in the solution to manage the packages for us. It makes list or maintain the list of packages along with it's version and several details which helps other tools and developers.
- While we do `npx create-react-app`, it automatically add npm configuration in it.
- To add npm manually in the solution, use `npm init` command in the repository terminal.
- It will ask several inputs, which are:
  1. **name**: Name of the application
  2. **version**: Initial version of the application
  3. **description**: Detailed information of the application
  4. **main**: Name of the file in your repository which is starting of your application.
  5. **test**: Command that need to execute for unit testing in the application.
  6. **git** repository: Github link of the application repository.
  7. **keywords**: Array of keywords related to application.
  8. **author**: Owner name of the application.
  9. **license**: Licensing of the application (Default: ISC)
- After entering these details, it will create `package.json` file in the application, which contains the configuration that mentioned above.
- NPM created package.json file because it helps to manage all the packages of our solution, it dependencies along with the version in the json file.
- After having package.json file, we can now able to install any package from npm in our solution.

### Types of packages/dependencies:
  There are two different types of dependency require in react application:
  1. `devDependencies`: Require for only development phase. To install any package as devDependency, use this command: `npm install -D <PACKAGE_NAME>`
  2. `dependencies`: This are normal dependencies which will use in both development and production phase. This are necessary for the core functionality of your application.
 
## Bundlers
  - Bundlers are tool in our web development to combine multiple types of files such as JS, CSS, images etc. into smaller number of optimized files.
  - This optimized files are knowns as `bundles`.
  - This bundle files are optimized, easy to load to browser file.
  - Bundlers also offers several other feature apart from bundling, which are minification(remove unnecessary characters/tokens to make file smaller), transpiling(converting newer code syntax to older versions for wider compatibility), code-spilliting(breaking code into smaller chunks to load only what's needed for each page).
  - Some common used bundlers are:
    1. Webpack
    2. Parcel
    3. Vite (used by create-react-app)
   
    ### b. Parcel:
    Bundlers are super-powerful tool, one of it's is `Parcel` which provides many features apart from common bundlers features, the following features are:
    - Zero config: No need of seperate config file for Parcel, it will automatically install all of the necessary plugins and dev dependencies for you.
    - Dev server
    - Hot reloding (Hot Module Replacement): Parcel automatically updates your code in the browser – no page reload necessary! It uses File watcher algorithm written in C++.
    - Diagnostics: If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.
    - Native performance: It compile JS code, CSS transformer, source maps implementation which is written in Rust for maximum performance.
    - Multi core
    - Reliable caching: Parcel caches code all the time. Parcel gives faster build by caching, and improves everytime to provide build when changes happen in code bcoz of caching. On the very first build, it create `.parcel-cache` folder in the solution.
    - Lazy dev builds
    - Tree shaking: Parcel supports tree-shaking both ES modules and CommonJS out of the box! It statically analyzes the imports and exports of each module, and removes everything that isn't used.
    - Minification
    - Image optimization
    - Compression
    - Code splitting
    - Content hashing
    - Transpilition etc....
   
    ### c. Vite:
    Another bundlers which is currently used by create-react-app is `Vite`. It creates a vite config file in our solution which helps to manage features or function of vite that we need to use in our solution. Some feature of Vite is:
    - Instant server start
    - Lightning Fast HMR
    - Optimized build
    - First class SSR(Server side rendering) support.
   
  - Given examples use Parcel bundlers to setup React.

## Babel:
  - Babel is widely used JavaScript library.
  - Its primary purpose is to transform modern JavaScript code, which might use the latest language features and syntax (ES6+, ES7, etc.), into an older version that is compatible with older browsers and environments that don't support those newer features.
  - Bundlers doesn't directly convert code for various browsers, but it works with tools like Babel

## npx:
  - npx is command line tool that comes with npm, to execute node packages.
  - The primary purpose of npx is to make it easier to run packages without having to install them globally or clutter your project's dependencies.

## Transitive Dependencies:
  - Dependencies that we installed in our solution is also dependent on other dependencies. For example, Bundlers like Parcel, Vite uses Babel library to transform the JavaScript code. Such thing is called Transitive dependencies.
    ![image](https://github.com/user-attachments/assets/8988ec62-9809-4d19-bc43-2111d0ca10cb)

## Steps to setup react:
- After initialize NPM in the solution as mentioned above, we can now able to install any package in our solution.
- We need to make our app production ready, for which will do several things, Minify -> Optimization -> Clean console -> Bundle.
- First we need bundler in our application, which provide us dev server and helps us to bundle our solution, we use Parcel in this example. To install parcel, execute this command:
  `npm install -D parcel` or `npm i -D parcel`
- Parcel is a devDependency package which we only need for development purpose only. Therefore, we added `-D` in the command.
- Once parcel installed in the solution, it updates package.json file. It add parcel inside `devDependencies` section with its version.<br />
  ![image](https://github.com/user-attachments/assets/ae152f4f-8dd1-4aa6-b447-99aa61a547f9)
- It also creates several folder/files in the solution, which are:<br />
  a. **node_modules**: It is like database of npm. This folder contains all the packages, sub-packages or dependencies that is require to run the package in our solution. Like, Parcel, Babel, React. node-modules is a high size directory in our solution, so make sure to keep the node_modules name in `.gitignore` file <br />
  b. **package-lock.json**: This file keeps track of all the packages and its exact details of the package that is installedd, such details are version, resolved, integrity, requires etc.

  ### Difference b/w package.json & package-lock.json:
  In package. json we have information about generic version of installed packages whereas in package.lock.json we have information about the specific or exact version of installed packages.
- Now we need to install React & ReactDOM in the solution, for that, execute this commands:
  `npm install react`
  `npm install react-dom`
- After this, we can now use react in our solution, create an `index.js` file and link it with index.html file, by using `<script>` tag just below the `<div></div>` container.
- Make sure to add `type="module"` attribute in script tag, which indicates that the given file is JavaScript module and helps us to use import and export to organize code into reusable codes.
`<script type="module" src="./app.js"></script>`
- Inside index.js file, we can import React and ReactDOM now and create React element in our solution. For example, check the coding section.

  ### Read about: ^ - caret and ~ - tilde:
  - We saw that after installing packages from node, there is caret or tilde sign as prefix in package versions. Like ^18.0.3
  - Caret `(^)`: When you use the caret symbol (^) in front of a version number, it indicates that you want to allow updates to the package as long as the major version remains the same. In semantic versioning (semver), versions are represented as MAJOR.MINOR.PATCH.
  - Tilde `(~)`: The tilde symbol (~) is used to specify a version range that allows updates to a package as long as the most recent version is within the same minor version range. In other words, it permits updates as long as the patch version is incremented.
- Now to execute the application, run this command in terminal: `npx parcel index.html`
- This will create a faster development version of our project and serves it on the server.
- To create production build using parcel, run this command in terminal: `npx parcel build index.html`, It will create all the production files to `dist` folder.
  ### Another way to execute the application:
  - We can create scripts instead of using `npx parcel index.html`. We can also create different scripts for starting our project in Development and Production.
  - In `package.json`, in the scripts section write the following command:
    ![image](https://github.com/user-attachments/assets/ab5dbf00-b3f6-4937-91bf-03603f74407b)
  - Now to run the solution, execute the following commands in the terminal:
  - To Start: `npm run start`
  - For Production: `npm run build`


## Interesting Package details:
### Browserslist:
- Browserslist is a tool that specifies which browsers should be supported/compatible in your frontend app.
- It makes our code compatible for a lot of browsers.
- In package.json file do:
  ![image](https://github.com/user-attachments/assets/1867c048-036b-4b69-b8a9-63c4cbeb107f)
