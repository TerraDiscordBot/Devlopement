module.exports =[{
	name: "js2-1",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #1 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱Control Flow**:
>>> Control flow is the order in which statements are executed in a program. The default control flow is for statements to be read and executed in order from left-to-right, top-to-bottom in a program file.
Control structures such as conditionals (**\`if\`** statements and the like) alter control flow by only executing blocks of code if certain conditions are met. These structures essentially allow a program to make decisions about which code is executed as the program runs.}

{field:$customEmoji[tr_git] **TR︱Kontrol akışı**:
>>> Kontrol akışı, bir programda deyimlerin yürütüldüğü sıradır. Varsayılan kontrol akışı, bir program dosyasında soldan sağa, yukarıdan aşağıya sırayla deyimlerin okunması ve yürütülmesi içindir.
Koşullar (**\`if\`** ifadeleri ve benzerleri) gibi denetim yapıları, yalnızca belirli koşullar karşılanırsa kod bloklarını yürüterek denetim akışını değiştirir. Bu yapılar esasen bir programın, program çalışırken hangi kodun yürütüleceği konusunda karar vermesine izin verir.}}]
`
}, {
	name: "js2-2",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #2 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱Comparison Operators**:
\`\`\`js
1 > 3             // false
3 > 1             // true
250 >= 250        // true
1 === 1           // true
1 === 2           // false
1 === '1'         // false
1 == 1            // true
1 != 1            // false\`\`\`
Comparison operators are used to comparing two values and return **\`true\`** or **\`false\`** depending on the validity of the comparison#COLON#

$customEmoji[circle_git] \`===\`strict equal
$customEmoji[circle_git] \`!==\` strict not equal
$customEmoji[circle_git] \`==\` equal
$customEmoji[circle_git] \`!=\` not equal
$customEmoji[circle_git] \`>\` greater than
$customEmoji[circle_git] \`>=\` greater than or equal
$customEmoji[circle_git] \`<\` less than
$customEmoji[circle_git] \`<=\` less than or equal}

{field:$customEmoji[tr_git] **TR︱Karşılaştırma Operatörleri**:
\`\`\`js
1 > 3             // yanlış
3 > 1             // doğru
250 >= 250        // doğru
1 === 1           // doğru
1 === 2           // yanlış
1 === '1'         // yanlış
1 == 1            // doğru
1 != 1            // yanlış\`\`\`
Karşılaştırma operatörleri, iki değeri karşılaştırmak ve karşılaştırmanın geçerliliğine bağlı olarak **\`true\`** veya **\`false\`** döndürmek için kullanılır#COLON#

>>> $customEmoji[circle_git] \`===\`kesinlikle eşit
$customEmoji[circle_git] \`!==\` kesinlikle eşit değil
$customEmoji[circle_git] \`==\` eşittir
$customEmoji[circle_git] \`!=\` eşit değil
$customEmoji[circle_git] \`>\` şundan büyük
$customEmoji[circle_git] \`>=\` büyük veya eşit
$customEmoji[circle_git] \`<\` şundan küçük
$customEmoji[circle_git] \`<=\` küçük veya eşit}}]
`
}, {
	name: "js2-3",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #3 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱\`if\` Statement**:
\`\`\`js
const isMailSent = true#SEMI#

if (isMailSent) { 
	console.log('Mail sent to recipient')#SEMI#
#LEFT_BRACKET#\`\`\`
An **\`if\`** statement accepts an expression with a set of parentheses#COLON#
>>> $customEmoji[circle_git] If the expression evaluates to a truthy value, then the code within its code body executes.
$customEmoji[circle_git] If the expression evaluates to a falsy value, its code body will not execute.}

{field:$customEmoji[tr_git] **TR︱\`if\` İfadesi**:
\`\`\`js
const postaGonderildimi = true#SEMI#

if (postaGonderildimi) {
	console.log('Posta alıcıya gönderildi')#SEMI#
#LEFT_BRACKET#\`\`\`
Bir **\`if\`** ifadesi, bir dizi parantez içeren bir ifadeyi kabul eder#COLON#
>>> $customEmoji[circle_git] İfade gerçeğe uygun bir değer olarak değerlendirilirse, kod gövdesi içindeki kod yürütülür.
$customEmoji[circle_git] İfade sahte bir değer olarak değerlendirilirse, kod gövdesi yürütülmez.}}]
`
}, {
	name: "js2-4",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #4 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱\`else\` Statement**:
\`\`\`js
const isTaskCompleted = false#SEMI#
if (isTaskCompleted) {
	console.log('Task completed')#SEMI#
#LEFT_BRACKET# else {
	console.log('Task incomplete')#SEMI#
#LEFT_BRACKET#\`\`\`
An **\`else\`** block can be added to an **\`if\`** block or series of **\`if-else if blocks\`**. The else block will be executed only if the **\`if\`** condition fails.}

{field:$customEmoji[tr_git] **TR︱\`else\` İfadesi**:
\`\`\`js
const gorevTamamlandimi = false#SEMI#
if (gorevTamamlandimi) {
	console.log('Görev tamamlandı')#SEMI#
#LEFT_BRACKET# else {
	console.log('Görev tamamlanmadı')#SEMI#
#LEFT_BRACKET#\`\`\`
Bir **\`if\`** bloğuna veya **\`if-else if blokları dizisine\`** bir **\`else\`** bloğu eklenebilir.  else bloğu yalnızca **\`if\`** koşulu başarısız olursa yürütülür.}}]
`
}, {
	name: "js2-5",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #5 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱\`else if\` Clause**:
\`\`\`js
const size = 10#SEMI#

if (size > 100) {
	console.log('Big ')#SEMI#
#LEFT_BRACKET# else if (size > 20) { 
	console.log('Medium')#SEMI#
#LEFT_BRACKET# else if (size > 4) { 
	console.log('Small')#SEMI#
#LEFT_BRACKET# else {
	console.log('Tiny')#SEMI#
#LEFT_BRACKET#
// Print: Small\`\`\`
After an initial **\`if\`** block,** \`else if\`** blocks can each check an additional condition. An optional **\`else\`** block can be added after the **\`else if\`** block(s) to run by default if none of the conditionals evaluated to truthy.}

{field:$customEmoji[tr_git] **TR︱\`else if\` Maddesi**:
\`\`\`js
const boyut = 10#SEMI#

if (boyut > 100) {
	console.log('Büyük')#SEMI#
#LEFT_BRACKET# else if (boyut > 20) { 
	console.log('Orta')#SEMI#
#LEFT_BRACKET# else if (boyut > 4) { 
	console.log('Küçük')#SEMI#
#LEFT_BRACKET# else {
	console.log('Çok Küçük')#SEMI#
#LEFT_BRACKET#
// Yazılan: Küçük\`\`\`
İlk **\`if\`** bloğundan sonra,** \`else if\`** bloklarının her biri ek bir koşulu kontrol edebilir.  İsteğe bağlı bir **\`else\`** bloğu, **\`else if\`** blok(lar)ından sonra varsayılan olarak çalışacak şekilde eklenebilir.}}]
`
}, {
	name: "js2-6",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #6 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱\`switch\` Statement**:
\`\`\`js
const food = 'salad'#SEMI#

switch (food) { 
	case 'oyster':
		console.log('The taste of the sea')#SEMI#
		break#SEMI#
	case 'pizza':
		console.log('A delicious pie')#SEMI#
		break#SEMI#
	default:
		console.log('Enjoy your meal')#SEMI#
#LEFT_BRACKET#
// Prints: Enjoy your meal\`\`\`
The **\`switch\`** statements provide a means of checking an expression against multiple **\`case\`** clauses. If a case matches, the code inside that clause is executed.

The **\`case\`** clause should finish with a **\`break\`** keyword. If no case matches but a **\`default\`** clause is included, the code inside **\`default\`** will be executed.

Note: If **\`break\`** is omitted from the block of a case, the **\`switch\`** statement will continue to check against **\`case\`** values until a break is encountered or the flow is broken.}

{field:$customEmoji[tr_git] **TR︱\`switch\` İfadesi**:
\`\`\`js
const yemek = 'salata'#SEMI#

switch (gıda) {
	case 'istiridye':
		console.log('Denizin tadı')#SEMI#
		break#SEMI#
	case 'pizza':
		console.log('Lezzetli bir parça')#SEMI#
		break#SEMI#
	default:
		console.log('Yemeğinizin tadını çıkarın')#SEMI#
#LEFT_BRACKET#
// Yazılan: Yemeğinizin tadını çıkarın\`\`\`
**\`switch\`** ifadeleri, bir ifadeyi birden çok **\`case\`** yan tümcesine karşı kontrol etmenin bir yolunu sağlar. Bir durum eşleşirse, o yan tümcenin içindeki kod yürütülür.

**\`case\`** yan tümcesi bir **\`break\`** anahtar kelimesiyle bitmelidir.  Hiçbir durum eşleşmezse ancak bir **\`default\`** yan tümcesi dahil edilirse, **\`default\`** içindeki kod yürütülür.

**__Not#COLON#__** Bir atlanmış bloğunda **\`break\`** atlanırsa, **\`switch\`** ifadesi bir ara verilene kadar **\`case\`** değerleriyle kontrol etmeye devam eder#SEMI# karşılaşılır veya akış kesilir.}}]
`
}, {
	name: "js2-7",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #7 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱Logical Operator \`||\`**:
\`\`\`js
true || false#SEMI#           // true
10 > 5 || 10 > 20#SEMI#       // true
false || false#SEMI#          // false
10 > 100 || 10 > 20#SEMI#     // false\`\`\`
The logical OR operator \`||\` checks two values and returns a boolean. If one or both values are truthy, it returns **\`true\`**. If both values are falsy, it returns **\`false\`**.}

{field:$customEmoji[tr_git] **TR︱Mantıksal Operatör \`||\`**:
\`\`\`js
true || false#SEMI#           // doğru
10 > 5 || 10 > 20#SEMI#       // doğru
false || false#SEMI#          // yanlış
10 > 100 || 10 > 20#SEMI#     // yanlış\`\`\`
Mantıksal VEYA operatörü \`||\` iki değeri kontrol eder ve bir boolean değeri döndürür.  Değerlerden biri veya her ikisi doğruysa, **\`true\`** döndürür.  Her iki değer de yanlışsa, **\`false\`** döndürür.}{image:https://media.discordapp.net/attachments/882536981211529216/951357916605194280/IMG_20220308_234925.jpg}}]
`
}, {
	name: "js2-8",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #8 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱Logical Operator \`&&\`**:
\`\`\`js
true && true        // true
1 > 2 && 2 > 1      // false
true && false       // false
4 === 4 && 3 > 1    // true\`\`\`
The logical AND operator **\`&&\`** checks two values and returns a boolean. If both values are truthy, then it returns **\`true\`**. If one, or both, of the values is falsy, then it returns **\`false\`**.}

{field:$customEmoji[tr_git] **TR︱Mantıksal Operatör \`&&\`**:
\`\`\`js
true && true        // doğru
1 > 2 && 2 > 1      // doğru
true && false       // doğru
4 === 4 && 3 > 1    // doğru\`\`\`
Mantıksal VE operatörü **\`&&\`** iki değeri kontrol eder ve bir boolean değeri döndürür. Her iki değer de doğruysa, **\`true\`** değerini döndürür. Değerlerden biri veya her ikisi de yanlışsa, **\`false\`** döndürür.}}]
`
}, {
	name: "js2-9",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #9 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱Logical Operator \`!\`**:
\`\`\`js
let lateToWork = true#SEMI#
let oppositeValue = !lateToWork#SEMI#
console.log(oppositeValue)#SEMI#
// Prints: false\`\`\`
The logical NOT operator **\`!\`** can be used to do one of the following#COLON#
>>> $customEmoji[circle_git] Invert a Boolean value.

$customEmoji[circle_git] Invert the truthiness of non-Boolean values.}

{field:$customEmoji[tr_git] **TR︱Mantıksal Operatör \`!\`**:
\`\`\`js
let iseGecKaldi = true#SEMI#
let karsitDeger = !iseGecKaldi#SEMI#
console.log(karsitDeger)#SEMI#
// Yazılan: false\`\`\`
Mantıksal TERSİNE operatörü **\`!\`** aşağıdakilerden birini yapmak için kullanılabilir#COLON#
>>> $customEmoji[circle_git] Bir Boolean değerini ters çevirmek için.

$customEmoji[circle_git] Boolean olmayan değerlerin doğruluğunu tersine çevirmek için.}}]
`
}, {
	name: "js2-10",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #10 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱Ternary Operator**:
\`\`\`js
let price = 10.5#SEMI#
let day = "Monday"#SEMI#
day === "Monday" ? price -= 1.5 : price += 1.5#SEMI#\`\`\`
The ternary operator allows for a compact syntax in the case of binary (choosing between two choices) decisions. It accepts a condition followed by a **\`?\`** operator, and then two expressions separated by a **\`#COLON#\`**. If the condition evaluates to truthy, the first expression is executed, otherwise, the second expression is executed.}

{field:$customEmoji[tr_git] **TR︱Üçlü operatör**:
\`\`\`js
let fiyat = 10.5#SEMI#
let gun = "Pazartesi"#SEMI#
gun === "Pazartesi" ?  fiyat -= 1.5 : fiyat += 1.5#SEMI#\`\`\`
Üçlü operatör, ikili (iki seçenek arasında seçim yapma) kararları durumunda kompakt bir sözdizimine izin verir.  **\`?\`** operatörünün takip ettiği bir koşulu ve ardından bir **\`#COLON#\`** ile ayrılmış iki ifadeyi kabul eder. Koşul doğru olarak değerlendirilirse, ilk ifade yürütülür, aksi takdirde ikinci ifade yürütülür.}}]
`
}, {
	name: "js2-11",
	code: `
	$sendMessage[{newEmbed:
	
{footer:JavaScript Conditionals #11 𖠵 Made by﹫$userTag[285118390031351809]}

{color:#F0DB4F}

{field:$customEmoji[en_git] **EN︱Truthy and Falsy**:
>>> In JavaScript, values evaluate to **\`true\`** or **\`false\`** when evaluated as Booleans.

$customEmoji[circle_git] Values that evaluate to **\`true\`** are known as truthy

$customEmoji[circle_git] Values that evaluate to **\`false\`** are known as falsy

Falsy values include **\`false\`**, **\`0\`**, empty strings, **\`null\`**, **\`undefined\`**, and **\`NaN\`**. All other values are truthy.}

{field:$customEmoji[tr_git] **TR︱Doğru ve Yanlış**:
>>> JavaScript'te değerler, Boolean olarak değerlendirildiğinde **\`true\`** veya **\`false\`** olarak değerlendirilir.

$customEmoji[circle_git] **\`true\`** olarak değerlendirilen değerler doğru olarak bilinir

$customEmoji[circle_git] **\`false\`** olarak değerlendirilen değerler sahte  olarak bilinir

Sahte değerler **\`false\`**, **\`0\`**, boş dizeler, **\`null\`**, **\`undefined\`** ve **\`NaN\`** iken, diğer tüm değerler gerçeğe uygundur.}}]
`
}]