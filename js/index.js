// console.log chỉ in kết quả ra tab console ở devtool chứ không in ra giao diện, giúp debug code.
// sau khi kiếm tra code xong phải xóa console.log đi.
console.log('Hello World');

// Biến - variable: được khai báo bằng từ khóa var gồm tên biến và giá trị được gán bằng dấu =
var person = 'Abc';
var number = 2;
var test = false;

/*
các kiểu dữ liệu trong js: 
1. string: chứa trong cặp ''
2. number
3. boolean: true/false
4. null: giá trị rỗng. 
5. undefined: không xác định
*/
var age = '10';
// parseInt, variable*1: cách ép kiểu dữ liệu từ string về number
// typeof: kiểm tra kiểu dữ liệu của biến
console.log(typeof age);
// var plus = number + age * 1;
var plus = number + parseInt(age);
console.log('plus: ', plus);

// var a = 13;
// var b = 2;
// var result;
// result = a % b;
// console.log('result: ', result);

// var c = 1;
// var d = 3;

// c++;
// console.log('c :', c);

// d--;
// console.log('d :', d);

// var result2 = c++ + --d; // 1 + 2 = 3
// console.log('result2: ', result2);

// c++ => c = c+1 => c+=1;
// const: khai báo hằng số, không được thay đổi hay gán lại giá trị
const PI = 3.14;
const DOMAIN = 'abc.com';

// Bài 1:
// B1:
var edge1 = 3;
var edge2 = 4;
var edge3;

// B2:căn bậc 2 của tổng bình phương 2 cạnh góc vuông.
// Math.sqrt: hàm tính căn bậc 2
edge3 = Math.sqrt(edge1 * edge1 + edge2 * edge2);

// B3:đầu ra:  cạnh huyền.
console.log('edge3 : ', edge3);

// Bài 2:
/*
B1: xác định đầu vào:
- n : 123
- unit: biến chứa giá trị hàng đơn vị
- ten: biến chứa giá trị hàng chục
- hundred: biến chứa giá trị hàng trăm 
- sum 
*/

var n = 123;
var unit, ten, hundred, sum;

/*
B2: xác định công thức tách các ký số:
Math.floor hàm làm tròn xuống
- hàng đơn vị: n % 10 
- hàng chục: Math.floor(n % 100 / 10)
- hàng trăm: Math.floor(n / 100);
- tính tổng: hàng đơn vị + hàng chục + hàng trăm.
*/

unit = n % 10;
ten = Math.floor((n % 100) / 10);
hundred = Math.floor(n / 100);
sum = unit + ten + hundred;

// B3: in kết quả ra console.
console.log('unit: ', unit);
console.log('ten: ', ten);
console.log('hundred: ', hundred);
console.log('sum: ', sum);

//------------------------------------------------
var so1, so2;
so1 = 4;
so2 = 7;
so2 = so1++ + --so2;
// 4   + 6
console.log('so1:', so1); // 5
console.log('so2:', so2); //10

//------------------------------------
var a, b, c;
a = 10;
a += a; //a = a + a = 10 + 10  = 20
console.log('a: ', a); // = 20

b = ++a + 5;
// 21 + 5 = 26
c = a++ + 5;
// 21 + 5 = 26
console.log('a :', a); // 22

a = 0;
console.log('b: ', b);
console.log('c: ', c);

// a,b,c sau khi kết thúc đoạn code có giá trị là bao nhiêu?

// Bài tập tính tiền vé
/*
B1: xác định đầu vào - input 
- tenPhim
- giaVeNguoiLon
- giaVeTreEm
- soVeNguoiLon
- soVeTreEm 
- phanTram = 0.1
- doanhThu
- soTienTuThien
- soTienConLai
*/
var nameMovie = 'hero';
var adultPrice = '75000';
var childPrice = '50000';
var adultTicked = 50;
var childTicked = 30;
var percent = 0.1;
var money, moneyGoAway, moneyLeft;

/*
B2: các bước xử lý
- tính được doanh thu: doanhThu = (soVeNguoiLon * giaVeNguoiLon) + (soVeTreEm * giaVeTreEm)
- tính số tiền trích từ thiện: soTienTuThien = doanhThu * phanTram;
- tính số tiền còn lại: soTienConLai = doanhThu - soTienTuThien;
*/
money = adultTicked * 1 * adultPrice * 1 + (childTicked * 1 + childPrice * 1);
moneyGoAway = money * percent;
moneyLeft = money - moneyGoAway;
console.log('moneyLeft: ', moneyLeft);

// B3: in kết quả đầu ra
console.log('money:', money);
console.log('moneyGoAway:', moneyGoAway);
console.log('moneyLeft:', moneyLeft);
