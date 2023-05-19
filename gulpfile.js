
//بعد ما الكورس ما يخلص بعمل ملف بحط فىيه كل الاضافات

var gulp = require('gulp');//استدعاء الحزمة
var concat = require('gulp-concat');//دمج ملفات السى اس اس والجافا اسكربت فى ملف واحد ماين

const pug = require('gulp-pug');//convert pug gulp
var gulp = require('gulp');

livereload = require('gulp-livereload');

/* ----------------------------------------- */
//corsec pug
/* convert pug to html  */
gulp.task('converpugtohtml',function(){

  return gulp.src("editsrc/*.pug")
  .pipe(pug({pretty:true}))
  .pipe(gulp.dest("uplodeserver"))



})

/* ------------------------------------------- */







/* التاسك ده اى ملف سى اس اس بيعملة الفلكسر بتاعو بعد كدا بعملو فى ملف واحد كلو  */
//css
const autoprefixer = require('gulp-autoprefixer');//كتابة الاكستينشن بتاع عناصر السى اسا
var uglifycss = require('gulp-uglifycss');//ضغط عناصر السى اس اس
gulp.task('taskcss',function()
{
return gulp.src('editsrc/style/*.css')
.pipe(autoprefixer('last 2 versions'))
.pipe(uglifycss({
    "maxLineLen": 80,
    "uglyComments": true
  }))
  
.pipe(gulp.dest('uplodeserver/style'))
 
}
)
/* ---------------- */







/* task thml */

const htmlmin = require('gulp-htmlmin');
gulp.task('taskhtmlcompaonds',function()
{
return gulp.src('editsrc/compaonds/*.pug')
/*.pipe(htmlmin({ collapseWhitespace: true }))*/
.pipe(gulp.dest('uplodeserver/compaonds'))

}
)
/* ----------------- */



// java script
var uglify = require('gulp-uglify');//اضفاة ضغط ملفات الجافا
gulp.task("taskjavascript",function(){
    return gulp.src("editsrc/js/*.js")
   
    .pipe(uglify())
    .pipe(gulp.dest('uplodeserver/js'))
    
   .pipe(livereload())
    
 
   })



// watch

gulp.task("watch", function() {
    require("./server.js");
    livereload.listen();
    gulp.watch("editsrc/*.pug", gulp.series("converpugtohtml"));
   gulp.watch("editsrc/style/*.css" , gulp.series("taskcss"));
   gulp.watch("editsrc/js/*.js" , gulp.series("taskjavascript"));
   gulp.watch("editsrc/compaonds/*.pug" , gulp.series("taskhtmlcompaonds"));
  })
/*

ازاى بيتم تنفيز الاورامر
اولا لزمنفتح المتصفح على الهوستنج ال هوا السيرفر
نفتح الترمنال
gulp taskcss

اما لتشغيل السيرفر نكتب gulp watch
طبعا هنعمل ريفرش للمتصفح او ممكن نضيف اضافة تعمل ريفرش للمتصفح


*/
