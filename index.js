//bài 1
//ý 1 không làm được dù code đúng :D? hoặc là thế
const arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
for (let i = 0; i < arrayNumber.length; i++ ) {
    if (i % 2 == 0){
        for ( let j = 0; j < arrayNumber[i].length; i++){
            if (j % 2 != 0){
                console.log(sum[arrayNumber[i][j]])
            }
        }
    }
}

//ý 2 Max
const arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
const max = Math.max(...arrayNumber);
console.log(max);

//ý 3 Min
const arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
const min = Math.min(...arrayNumber);
console.log(min);

//ý 4 Số chính phương
const arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
function timSo(){
    for (let i = 0; i == [...arrayNumber]; i++){
        if ( Math.sqrt()){}
    }
}

//ý 5 Số nguyên tố
const arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
const nguyenTo = arrayNumber.filter(myFunction);
function myFunction(value) {
    console.log(value % 2 != 0);
}

//ý 6 Thay số âm = 0
const arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
var thaySo = arrayNumber.filter(function(value){
    return value < 0;
});
console.log(thaySo);

//ý 7
const arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
var thaySo = arrayNumber.filter(function(value){
    return value > 0;
});
console.log(thaySo);


//bài 2
//tăng
let mang = [1,34,45,647,5,25,87,59,90,10];
mang.sort(function(a, b) {
    return a - b;
  });
  console.log(mang);
//giảm
let mang = [1,34,45,647,5,25,87,59,90,10];
mang.sort(function(a, b) {
    return b - a;
});
console.log(mang);


//bài 3
let a = prompt("Nhập số");
for (let i = 2; i < a; i+=2){

}


//bài 4



//bài 5
let mang = [,1,2,3,4,5,,6,7,8,9,1,2,3,4,5,6,7,8,9];
var thaySo = mang.filter(function(value){
    return value % 3 == 0
});
console.log(mang);


//bài 6



//bài 7
