module.exports =[{
	name: "js3-1",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Functions #1 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{title:$customEmoji[en_git] **EN︱Arrow Functions (ES6)**}
{description:\`\`\`js
// Arrow function with two arguments
const sum = (firstParam, secondParam) => {
	return firstParam + secondParam#SEMI#
#LEFT_BRACKET##SEMI# 
console.log(sum(2,5))#SEMI# // Prints: 7

// Arrow function with no arguments 
const printHello = () => { 
	console.log('hello')#SEMI#
#LEFT_BRACKET##SEMI#
printHello()#SEMI# // Prints: hello 

// Arrow functions with a single argument
const checkWeight = weight => { 
	console.log(\`Baggage weight #COLON# $\\{weight#LEFT_BRACKET# kilograms.\`)#SEMI#
#LEFT_BRACKET##SEMI#
checkWeight(25)#SEMI# // Prints: Baggage weight: 25 kilograms.

// Concise arrow functions
const multiply = (a, b) => a * b#SEMI#
console.log(multiply(2, 30))#SEMI# // Prints: 60\`\`\`
Arrow function expressions were introduced in ES6. These expressions are clean and concise. The syntax for an arrow function expression does not require the **\`function\`** keyword and uses a fat arrow **\`=>\`** to separate the parameter(s) from the body.

> There are several variations of arrow functions#COLON#
> 
> $customEmoji[circle_git] Arrow functions with a single parameter do not require **\`()\`** around the parameter list.
> 
> $customEmoji[circle_git] Arrow functions with a single expression can use the concise function body which returns the result of the expression without the **\`return\`** keyword.}}

{newEmbed:{footer:JavaScript Fonksiyonlar #1 𖠵 ﹫$userTag[285118390031351809] tarafından yapıldı}

{color:#F0DB4F}
{title: $customEmoji[tr_git] **TR︱Ok İşlevleri (ES6)**}
{description:\`\`\`js
// İki bağımsız değişkenli ok işlevi
const toplamı = (ilkParam, ikinciParam) => {
	return ilkParam + ikinciParam#SEMI#
#LEFT_BRACKET##SEMI#
console.log(sum(2,5))#SEMI# // Yazılan: 7

// Argümansız ok işlevi
const merhabaYazdir = () => {
	console.log('merhaba')#SEMI#
#LEFT_BRACKET##SEMI#
merhabaYazdir()#SEMI# // Baskılar: merhaba

// Tek argümanlı ok fonksiyonları
const agirlikKontrolu = agırlık => {
	console.log(\`Bagaj ağırlığı #COLON# $\\{ağırlık#LEFT_BRACKET# kilogram.\`)#SEMI#
#LEFT_BRACKET##SEMI#
agirlikKontrolu(25)#SEMI# // Yazılan: Bagaj ağırlığı: 25 kilogram.

// Kısa ok fonksiyonları
const carpma = (a, b) => a * b#SEMI#
	console.log(carpma(2, 30))#SEMI# // Yazılan: 60\`\`\`
Ok işlevi ifadeleri ES6'da tanıtıldı.  Bu ifadeler temiz ve özlüdür. Bir ok işlevi ifadesinin sözdizimi **\`function\`** anahtar sözcüğünü gerektirmez ve parametreleri gövdeden ayırmak için kalın ok **\`=>\`** kullanır.

>>> Ok işlevlerinin çeşitli varyasyonları vardır#COLON#

$customEmoji[circle_git] Tek parametreli ok işlevleri, parametre listesi çevresinde **\`()\`** gerektirmez.

$customEmoji[circle_git] Tek bir ifadeye sahip ok işlevleri, **\`return\`** anahtar sözcüğü olmadan ifadenin sonucunu döndüren kısa işlev gövdesini kullanabilir.
}}]`
}, {
	name: "js3-2",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #2 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱Functions**:
\`\`\`js
// Defining the function: 
function sum(num1, num2) {
	return num1 + num2#SEMI#
#LEFT_BRACKET#

// Calling the function:
sum(3, 6)#SEMI# // 9\`\`\`
Functions are one of the fundamental building blocks in JavaScript. A \`function\` is a reusable set of statements to perform a task or calculate a value. Functions can be passed one or more values and can return a value at the end of their execution. In order to use a function, you must define it somewhere in the scope where you wish to call it.

The example code provided contains a function that takes in 2 values and returns the sum of those numbers.}

{field:$customEmoji[tr_git] **TR︱Fonksiyonlar**:
\`\`\`js
// Fonksiyonu tanımlama:
function toplami(sayi1, sayi2) {
	return sayi1 + sayi2#SEMI#
#LEFT_BRACKET#

// Fonksiyonu çağırma: 
sum(3, 6)#SEMI# // 9\`\`\`
İşlevler, JavaScript'teki temel yapı taşlarından biridir. Bir \`function\`, bir görevi gerçekleştirmek veya bir değeri hesaplamak için yeniden kullanılabilir bir ifadeler kümesidir. Fonksiyonlara bir veya daha fazla değer iletilebilir ve yürütmelerinin sonunda bir değer döndürebilir. Bir işlevi kullanmak için, onu kapsam içinde çağırmak istediğiniz bir yerde tanımlamanız gerekir.

Sağlanan örnek kod, 2 değer alan ve bu sayıların toplamını döndüren bir işlev içerir.}}]
`
}, {
	name: "js3-3",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #3 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱Anonymous Functions**:
\`\`\`js
// Named function
function rocketToMars() {
    return 'BOOM!'#SEMI#
#LEFT_BRACKET#
// Anonymous function
const rocketToMars = function() {
    return 'BOOM!'#SEMI#
#LEFT_BRACKET#\`\`\`
Anonymous functions in JavaScript do not have a name
property. They can be defined using the **\`function\`**
keyword, or as an arrow function. See the code example
for the difference between a named function and an
anonymous function.}

{field:$customEmoji[tr_git] **TR︱İsimsiz Fonksiyonlar**:
\`\`\`js
// Adlandırılmış fonksiyon
function marsaRoket() {
    return 'BOOM!'#SEMI#
#LEFT_BRACKET#
// Anonim fonksiyon
const marsaRoket = function() {
    return 'BOOM!'#SEMI#
#LEFT_BRACKET#\`\`\`
JavaScript'teki anonim işlevlerin name özelliği yoktur. **\`function\`** anahtar sözcüğü kullanılarak veya bir ok işlevi olarak tanımlanabilirler. Adlandırılmış bir işlev ile anonim bir işlev arasındaki fark için kod örneğine bakın.}}]
`
}, {
	name: "js3-4",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #4 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱Function Expressions**:
\`\`\`js
const dog = function() {
    return 'Woof!'#SEMI#
#LEFT_BRACKET#\`\`\`
Function expressions create functions inside an expression instead of as a function declaration. They can be anonymous and/or assigned to a variable.}

{field:$customEmoji[tr_git] **TR︱Fonksiyon İfadeleri**:
\`\`\`js
const kopek = function() {
return 'Hav!'#SEMI#
#LEFT_BRACKET#\`\`\`
Fonksiyon ifadeleri, fonksiyon bildirimi yerine bir ifade içinde fonksiyonlar oluşturur. Anonim olabilirler ve/veya bir değişkene atanabilirler.}}]
`
}, {
	name: "js3-5",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #5 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱Function Parameters**:
\`\`\`js
// The parameter is name 
function sayHello(name) {
    return \`Hello, $\\{name!#LEFT_BRACKET#\`#SEMI#
#LEFT_BRACKET#\`\`\`
Inputs to functions are known as parameters when a function is declared or defined. Parameters are used as variables inside the function body. When the function is called, these parameters will have the value of whatever is passed in as arguments. It is possible to define a function without parameters.}

{field:$customEmoji[tr_git] **TR︱Fonksiyon Parametreleri**:
\`\`\`js
// Parametre isimdir
function merhabaDe(isim) {
    return \`Merhaba, $\\{isim!#LEFT_BRACKET#\`#SEMI#
#LEFT_BRACKET#\`\`\`
Fonksiyonlara girişler, bir fonksiyon bildirildiğinde veya tanımlandığında parametreler olarak bilinir. Parametreler, fonksiyon gövdesi içinde değişkenler olarak kullanılır. İşlev çağrıldığında, bu parametreler, argüman olarak iletilen her şeyin değerine sahip olacaktır. Parametresiz bir fonksiyon tanımlamak mümkündür.}}]
`
}, {
	name: "js3-6",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #6 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱\`return\` Keyword**:
\`\`\`js
// With return 
function sum(num1, num2) {
    return num1 + num2#SEMI#
#LEFT_BRACKET#

// Without return, so the function doesn't output the sum 
function sum(numi, num2) {
    num1 + num2#SEMI#
#LEFT_BRACKET#\`\`\`
Functions return (pass back) values using the **\`return\`** keyword. **\`return\`**  ends function execution and returns the specified value to the location where it was called. A common mistake is to forget the **\`return\`**  keyword, in which case the function will return **\`undefined\`**  by default.}

{field:$customEmoji[tr_git] **TR︱\`return\` Anahtar Kelime**:
\`\`\`js
// return ile
function sum(sayi, sayi2) {
    return sayi1 + sayi2#SEMI#
#LEFT_BRACKET#

// return olmadığı için fonksiyon toplamı vermez
fonksiyon sum(sayi, sayi2) {
    sayi1 + sayi2#SEMI#
#LEFT_BRACKET#\`\`\`
İşlevler, **\`return\`** anahtar sözcüğünü kullanarak değerleri döndürür (geri verir). **\`return\`** işlevin yürütülmesini sonlandırır ve belirtilen değeri çağrıldığı konuma döndürür. Yaygın bir hata, **\`return\`** anahtar sözcüğünü unutmaktır, bu durumda işlev varsayılan olarak **\`undefined\`** değerini döndürür.}}]
`
}, {
	name: "js3-7",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #7 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱Function Declaration**:
\`\`\`js
function add(num1, num2) {
    return num1 + num2#SEMI#
#LEFT_BRACKET#\`\`\`
    
>>> Function declarations are used to create named functions. These functions can be called using their declared name, Function declarations are built from #COLON#
$customEmoji[circle_git] The **\`function\`** keyword.
$customEmoji[circle_git] The function name.
An optional list of parameters separated by commas enclosed by a set of parentheses **\`()\`**.
A function body enclosed in a set of curly braces **\`{#LEFT_BRACKET#\`**.}

{field:$customEmoji[tr_git] **TR︱Fonksiyon Bildirimi**:
\`\`\`js
function add(sayi, sayi2) {
    sayi1 + sayi2#SEMI#
#LEFT_BRACKET#\`\`\`
    
>>> Fonksiyon bildirimleri, adlandırılmış fonksiyonlar oluşturmak için kullanılır. Bu fonksiyonlar, belirtilen adları kullanılarak çağrılabilir, fonksiyon bildirimleri şunlardan oluşturulur#COLON#
$customEmoji[circle_git] **\`function\`** anahtar sözcüğü.
$customEmoji[circle_git] fonksiyon adı.
Bir dizi parantez **\`()\`** içine alınmış, virgülle ayrılmış isteğe bağlı bir parametre listesi.
Bir küme parantez **\`{#LEFT_BRACKET#\`** içine alınmış bir işlev gövdesi.}}]
`
}]
