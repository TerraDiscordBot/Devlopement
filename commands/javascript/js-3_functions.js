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
	
{footer:JavaScript Conditionals #1 𖠵 Made by﹫$userTag[285118390031351809]}

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
İşlevler, JavaScript'teki temel yapı taşlarından biridir. Bir \`function\', bir görevi gerçekleştirmek veya bir değeri hesaplamak için yeniden kullanılabilir bir ifadeler kümesidir. Fonksiyonlara bir veya daha fazla değer iletilebilir ve yürütmelerinin sonunda bir değer döndürebilir. Bir işlevi kullanmak için, onu kapsam içinde çağırmak istediğiniz bir yerde tanımlamanız gerekir.

Sağlanan örnek kod, 2 değer alan ve bu sayıların toplamını döndüren bir işlev içerir.}}]
`
}]