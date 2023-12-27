
# Create a html vanilla scss project with gulp compile 




## 1. Create your directory

```bash
  mkdir your-directory
```

## 2. Create your HTML file

```bash
  touch index.html
```


## 3. Fill your HTML file

HTML
```bash
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
    <script src="./script.js"></script>
</head>
<body>
    <h1>html vanilla scss project</h1>
</body>
</html>
```

Make sure to check if everything is working, you can check with live server extension (on vs code : https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## 4. Install gulp and init your project
Inside your directory
```bash
  npm install gulp-cli -g 
  npm init -y
```
If you get some permissions problems 
```bash
  sudo npm install gulp-cli -g 
```

## 5. Create a gulpfile.js

```bash
  function defaultTask(cb) {
    console.log("Gulp is working!");
    cb();
  }
  exports.default = defaultTask;
```

## 6. Verify if it’s working

```bash
  gulp
```
It should return "Gulp is working!" in your terminal

## 7. Install the SASS package with the following command

```bash
  npm install sass
```

## 8. Create a src folder with the following instructions
/src

--->/scss

------>style.scss
```bash
  // style.scss
  @import "_global.scss";
```

------>_global.scss
```bash
  // global.scss
  body {
    color: red;
  }
```

## 9.  Update your gulpfile.js
```bash
  const { src, dest, watch } = require("gulp");
  const sass = require("gulp-sass");
  function css() {
    return src("./src/css/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(dest("./dist/assets/"));
  }
  exports.css = css;
```

## 10.  Then launch gulp command, it should create you a dist folder with some files inside
```bash
  gulp
```


## 11.  If you want to set a watcher 
```bash
  npm install gulp-watch --save-dev
```

Change your gulpfie.js
```bash
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');

// Define a task to compile Sass to CSS
gulp.task('css', function () {
    return gulp.src('src/scss/**/*.scss') // Adjust the source path accordingly
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css')); // Adjust the destination path accordingly
});

// Define a default task
gulp.task('default', gulp.series('css'));

// Define a watch task
gulp.task('watch', function () {
    gulp.watch("./src/scss/**/*.scss", gulp.series('css'));
    // Add additional watch tasks for other source files if needed
});
```

## 11.  Then you can change your scss and it will automatically refresh your dist/css