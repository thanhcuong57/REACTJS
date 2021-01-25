// var array = [1, 2, 3, 4, 5, 6];
// var mapArray = array.reduce((a,b) => a + b, 10);
// console.log(mapArray);
// var objs =  function(name, age) {
//     this.name = name;
//     this.age = age;
//     this.info = function(){
//         return this.name + ' ' + this.age;
//     }
// }
// var cuong = new obj('cuong', 23);
// console.log(cuong.info())

// var objs = {
//     name: 'cuong',
//     age: 23,
// }
// objs.height = 170;
// objs.prototype.height = 170;
// var obj = new objs('cuong', 27)
// var obj01 = new objs('cuong', 27)
// console.log(typeof obj01)
// function myFunction() {
//     console.log('start callback')
// }
// function callback(a){
//     if(a == 'mefunction') {
//         myFunction();
//     }
// }
// callback('mefunction')
function test(anonymys){
    anonymys();
    console.log('start')
}
test(function(){
    console.log('1')
})