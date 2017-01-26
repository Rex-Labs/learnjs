# LearnJS

##### Ok, so what is this ?

> `LearnJs` is an attempt to portray the best parts of Javasript that are
pretty tough and hard to find. It is to be noted that this is not a book/guide
in any form, but a congregation of best practices, language constructs, and other
simple yet effective snippets that gives us an essence of how we can harness
the best out of the language.

------------------

##### So what are all covered in the cheatsheet ?

- [Intro]()
- [Arrays]()
- [Strings]()
- [Objects]()
- [Functions]()
- [Conventions]()
- [Closures]()
- [Currying]()
- [Tails Calls]()

------------------

##### 1. Intro:

`1.1 Declarations`:

```javascript

// bad
var arr = new Array();
var str = new String();
var num = new Number();
var boo = new Boolean();
var obj = new Object();
var reg = new RegExp();
var fun = new function();

// good
var arr = [],
    str = "",
    num = 0,
    boo = false,
    obj = {},
    reg = /()/,
    fun = function(){};
```

We have to understand the fact that in Javascript everything is an object,
so for suppose if we declare a string using the `String` object and compare
it with `var a = ""` then the outcome of the comparision would be false. This
is simply because if we declare a string using the `bad` way and compare it
with a string declared using the `good` way then fundamentally we are comparing
a string with an Object(String).

`Semicolons`:

```javascript

// Snippet one
var foo = {}

foo.code = "this is javascript empire"
foo.engine = "node 0.12.7"
foo.author = "akhil pandey"
foo.version = 0.1

// Snippet two
var bar = {};

bar.name = "akhil pandey";
bar.url = "www.akhilhector.com";
bar.github = "AkhilHector";
bar.age = 20;

if(typeof(bar) == typeof(foo)) {
        console.log("Semicolons donot matter at all")
}

```

Code Snippet one and two are the same. but the fundamental difference
between both the code samples is that one uses semicolons in the lang-
-uage semantics but whereas the other doesnot. Basically we are taught
to use semicolons in languages such as C, C++, Java etc since lines of
code are terminated using ';' but in Javascript the entire scenario is
different. There is absolutely no difference in execution of code with
or without semicolons.

------------------

##### 2. Arrays:

Methods part of Javascript **Array** Object:

- **Array**.push(),
- **Array**.pop(),
- **Array**.indexOf(),
- **Array**.lastindexOf(),
- **Array**.concat(),
- **Array**.splice(),
- **Array**.shift(),
- **Array**.unshift(),
- **Array**.reverse(),
- **Array**.sort(),
- **Array**.map(),
- **Array**.filter(),
- **Array**.some(),
- **Array**.reduce(),
- **Array**.reduceRight(),
- **Array**.join(),
- **Array**.toString()

------------------
**2.1 Array**.push() :
```javascript
var arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
console.log(arr1); // it prints [1,2,3,4,5,6]
```
**Array**.push() is just a mutator function for adding elements to the array. So
  we can simply mention the element as an argument to the function Array.push()
  and the mentioned element would be added as the last element in the array.

------------------
**2.2 Array**.pop()
```javascript
var arr1 = [1, 2, 3, 4, 5];
arr1.pop();         // removes last element from the array
arr1.pop(23);       // removes last element despite giving the number as argument
arr1.pop("lol");    // removes last element despite giving the string as argument
console.log(arr1);  // it prints [1,2,3,4]
```
  **Array**.pop() is just a simple mutator function for removing the last element
  of the array. So the method doesnot take arguments, Although if we try to
  pass arguments it would not take them. It performs only the basic operation
  of removing the last element of the Array.

------------------
**2.6 Array**.splice() :
```javascript
// case 1 :
var arr1 = [1, 2, 3, 4, 5];
nums = [6, 7, 8, 9, 10]
arr1.splice(5,0,nums)
console.log(arr1); // it prints [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]

// case 2 :
var arr2 = ['one'];
arr2.splice(1,0, 'two', 'three', 'four', 'five');
console.log(arr2); // it prints ['one', 'two', 'three', 'four', 'five']

// case 3 :
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr3.splice(5,5);
console.log(arr3); // it prints [1, 2, 3, 4, 5]
```
  **Array**.splice() has a varied set of operations that which could be
  performed. If we observe case 1 we are adding elements to the array
  arr1 from the fifth index. Also if we observe in case 2, we can see
  that without assigning a variable the elements that which are to be
  added are passed as continuous arguments.
  It is to be noted that splice can not only perform the action of
  adding elements but it also does perform the action of removing
  elements. In the function splice(), if we choose the value of the
  second argument to be '0' then elements would only be added from
  the specified index, although if the value is not '0' then number
  specified would be the number of elements that will be removed.

------------------
**2.7 Array**.shift() :
```javascript
var arr1 = [1, 2, 3, 4, 5, "akhil", "chandu", "varma", "kp", "adheeth"];
arr1.shift();
arr1.shift(123);
arr1.shift("lolagain");
console.log(arr1); // it prints [4,5,6,"akhil","chandu","varma","kp","adheeth"]
```
  **Array**.shift() is no different from the above mentioned method Array.pop(),
  although the major difference comes regarding the index of the element
  that which is to be removed. It removes the first element of the array.
  Similar to Array.pop() this method also desnot take arguments and even
  though an argument is passed it continues to perform its operation.

------------------
**2.8 Array**.unshift() :
```javascript
var arr1 = [1, 2, 3, 4, 5];
str = "akhil pandey";
arr1.unshift(str);
console.log(arr1); // it prints ["akhil pandey", 1, 2, 3, 4, 5];
```
  **Array**.unshift() falls into the same category as that of Array.push(), Since
  both of them are used as mutator functions for adding elements into an array.
  The only difference between both the methods is that if we pass an argument
  to Array.unshift() then the element would be added as the first element of
  the array.
  If we observe the above snippet we can see that the index of the element
  '1' is shifted to the next place and "akhil pandey" is added as the first
  element of the array. So unlike Array.push() this method should not be
  misunderstood only for adding elements since it adds elements to the start
  of the Array.

------------------
**2.9 Array**.reverse() :
```javascript
var arr1 = [1, 'akhil', 'varma', 'chandu', 'adheeth'];
arr1.reverse();
console.log(arr1); // it prints ['adheeth', 'chandu', 'varma', 'akhil', 1]
```
  **Array**.reverse() is just a mutator function that which is used to
  reverse the order of elements in the array.

------------------
**2.10 Array**.sort() :
```javascript
var arr1 = ['varma', 'chandu', 'akhil', 'adheeth'];
var arr2 = [5, 6, 2, 9, 23];
arr1.sort();
arr2.sort();
console.log(arr1); // it prints ['adheeth', 'akhil', 'chandu', 'varma']
console.log(arr2); // it prints [2, 5, 6, 9, 23]
```
  **Array**.sort() is also another mutator function that which is used to
  put the elements in order. Both strings and numbers can be sorted
  using the Array.sort() method. The sorting takes place in ascending
  order, so if strings or characters are elements then depending on
  the alphabetical scale, the sorting takes place.

------------------
**2.11 Array**.map() :
```javascript
function add(arr) {
        return arr = "My name is " + arr;
}

var arr1 = ["akhil", "varma", "chandu", "adheeth", "kp"];
var combine = arr1.map(add);
console.log(combine);
/* it prints
[   'My name is akhil',
    'My name is varma',
    'My name is chandu',
    'My name is adheeth',
    'My name is kp' ]
*/
```
  **Array**.map() is a method which is more like an iterator function, but
  the fundamental difference between this and Array.forEach() is that
  Array.map() returns a new array with the result, whereas Array.forEach()
  doesn't return a new array with the function result.

  NOTE : Array.map() is a very powerful method and it can be applied to
  diverse applications. Although since this method iterates over each
  element using Array.map() must be carefully looked upon and should
  not be put to use if the purpose is iterating over some elements.

------------------
**2.14 Array**.reduce() :
```javascript
function combine(prev, curr) {
        return prev + curr;
}

var arr1 = [1, 2, 3, 4, 5];
var arr2 = ["one ", "two ", "three ", "four ", "five "];
var numsum = arr1.reduce(combine);
var worsum = arr2.reduce(combine);

console.log(numsum); // it prints 15
console.log(worsum); // it prints "one two three four five "
```
  **Array**.reduce() is a method which can be used with arrays by taking
  a function as an argument, thereby making the function to iterate
  over the array elements. Array.reduce() iterates over the array elements
  and thus upon reaching the end of the Array yields a single value.

  NOTE : Array.reduceRight() is more of similar to Array.reduce(), but
  it iterates over the array elements from the rightmost element to the
  leftmost element, instead of going  the usual way.

------------------

`TIPS[Arrays] :`

- With the available list of the Array methods we can generally perform most of the operations, but if we require special methods or custom methods that must be part of the already existing Array Object then we define the method with by taking the concept of **Object.prototype**.

------------------

`MISC[Arrays] :`

**Manipulating the Array Object by writing your own methods** :
```javascript
var boo = []

Array.prototype.foo = function() {
        console.log("We write our method inside this block")
}

boo.foo() // returns whatever is included inside the above mentioned code block
```

 Adding methods to Array.prototype essentially means that we are adding methods
 to the global array object. So an Array.prototype would actually mean that adding
 a new prototype to the existing Array object. So a better analogy can be explained
 with the below code snippet.

```javascript
Array.prototype.union = function(bar) {
        var l = this.length;
        var n = bar.length;
        for(i=0; i<n; ++i) {
                this[l] = bar[i];
                l++;
        }
        console.log(this);
}

var a = ["one", "two"];
var b = ["three", "four", "five", "six", "seven"];
var c = [1, 2];
var d = [3, 4, 5, 6, 7];

a.union(b);
c.union(d);
```
 Observing the Above array prototype if we can carefully observe it is nothing
 but a working replica of how the Array Method Array.prototype.concat() works. So
 in concat() method another array is passed as an argument to the method and the
 primary array concats and extends the array.

 Things to lookup in the above example are how custom methods can be written in
 order to suit the specific purpose to not only the Array prototype but also all
 the Javscript recognized objects such as the String, Number, Regexp or the Object
 itself.

**Associative Arrays** :

 Preferably this is somewhat a great part of the language although this has
 been an integral part of many programming languages like PHP and Python, there
 is a slight change to what it offers in other programming languages to this.

 [NOTE]: In Python it is not called or referred to as Associative arrays but it
 comes with the name Dictionaries.

```javascript
var a = [];
var b = [];

a["one"] = "boo this is my first item";
a["two"] = "foo this is my second item";
a["three"] = "alas this is final item";

b[0] = "oh not again the first item";
b[1] = "cant help with the second item";
b[3] = "finally got rid with the third item";


console.log(a); // would display the contents of the array 'a'
console.log(b); // would display the contents of the array 'b'

var len1 = a.length;
var len2 = b.length;
var len3 = Object.keys(a).length;

console.log(len1); // would display undefined
console.log(len2); // would display 3
console.log(len3); // would display 3
```
 The above snippet is a classic case implementation of arrays with named
 indexes or the associative arrays. Implementation can be done as mentioned
 above and almost all array opertions except some can be performed very
 smoothly with named indexes. The problem arises when an array with named
 indexes is asked for its length. When 'Array.prototype.length()' method is
 referred it returns only the length of the array which has numberd index,
 if we use named indexes then it is no good because the indexes are strings
 but no longer numbers.

 In such a case if we need to return the length of the named indexed array
 then Object.keys(Arrayname).length would give the length of the array.The
 same is explained by taking three variables 'len1', 'len2', 'len3' where
 both 'len1', 'len3' store the lengths of a but 'len1' returns undefined
 and 'len3' returns 3 as the length of the array.

------------------


##### 3. Strings:

Methods which are part of Javascript **String** Object:

- **String**.charAt(index);
- **String**.concat(string1, string2, ...stringN);
- **String**.indexOf("stringname");
- **String**.lastIndexOf("stringname");
- **String**.link(url);
- **String**.search(regExp);
- **String**.slice(begin, end);
- **String**.substring(begin, end);
- **String**.substr(begin, end);
- **String**.repeat(count);
- **String**.replace(begin, end);
- **String**.endsWith(string, position);
- **String**.startsWith(string, position);
- **String**.includes(string, position);
- **String**.trim(begin, end);
- **String**.toLowerCase();
- **String**.toUpperCase();

`TIPS[Strings]:`

- **string.slice()** : The method **string.slice()** essentially extracts part of a string and returns the new string which is sliced. The general notation for using the string.slice method is string.slice(pos1, pos2) where in pos1 is the position of the starting index and pos2 is the position of ending index. The point to be noted here is if we use the string.slice() method by passing negative parameters then it ends up counting and extracting the string from the end to the start. And if we donot pass the second parameter the method extracts the rest of the string.

- **string.substring()** : The method **string.slice()** and **string.substring()** fall into the same category of methods that can be used for extracting part or parts of string from the source string. The difference in both is that we cannot use negative indexes when using the method string.substring(). For example if we pass on a negative index to the method like string.substring(-7,-1) then it essentially doesnot pipe out any error indicating the mistake made for using negative index but displays the string as a whole

------------------

##### 4. Objects:

In Javascript:

| Types                          | Can be Objects | Are Always Objects|
|--------------------------------|:--------------:|:-----------------:|
| **Booleans** | ✔ |  |
| **Numbers** | ✔ |  |
| **Strings** | ✔ |  |
| **Dates** | | ✔ |
| **Maths** | | ✔ |
| **Regular Expressions** | | ✔ |
| **Arrays** | | ✔ |
| **Functions** | | ✔ |

So basically except the primitive values all are objects in Javascript

**4.1** `Objects can be created using three methods`:

- **4.1.1** : "Define and create an object using an Object literal."
```javascript
// creating an oject using an Object literal
var staff = {
	name : "somename",
	branch : "somebranch",
	salary : "somesalary",
	age : 20
};
```
- **4.1.2** : "Define and create an object using an keyword new."
```javascript
// creating an object using new keyword
var admin = new Object();
admin.name = "somename";
admin.department = "somedept";
admin.userid = 123;
admin.age = 20;
```
- **4.1.3** : "Define an object constructor and then create objects of its type."
```javascript
// creating an object using the object constructor
function student(name, github_nick, url, age) {
	this.name = name;
	this.github = "https://github.com/" + github_nick;
	this.url = url;
	this.age = age;
}
```

**4.2** `Using the constructor for the above defined Object` :
```javascript
var akhil = new student("Akhil Pandey", "AkhilHector", "https://www.akhilhector.com", "20");
```

**4.3** `Accessing object methods` :
```javascript
console.log(akhil.github);
console.log(akhil.url);
```

**4.4** `Using the prototype property` :
```javascript
student.prototype.show = function() {
	return this.name + " " + this.github + " " + this.age;
}
```

**4.5** `Adding methods to the prototype` :
```javascript
function student(name, github_nick, url, age) {
	this.name = name;
	this.github = "https://github.com/" + github_nick;
	this.url = url;
	this.age = age;
	this.show = function() {
		return this.name + " " + this.github + " " + this.age;
	}
}
```

`NOTE`: Javasctipt objects are mutable which means that they are referenced by address and not value. For instance if 'master' is an object and 'master-backup' is also another object then if we pass the objects then changing one might result in changing the other object also.
```javascript
{
 var master = {foo : "foo"};
 var master-backup = master;
 master.backup.bar = "bar"; // this changes master.bar and master-backup.bar
}

Object.access.property = {
"Option1" : "we can use objectName.propertyName",
"Option2" : "Either we can write objectName[propertyName]"
}
```

------------------


##### 5. Functions:



------------------

##### 6. Conventions:



------------------


##### 7. Closures:

Function Closures in Javascript is all about how are the variables being treated and referred to in the local or global scope. In Js variables can be given :

- 'local scope'
- 'global scope'

There is no inbuilt concept for something called private variables, so when there is a requirement for such a scenario Closures are written in Js in order to make scope for variables that are private in scope.

------------------

##### 8. Currying :

Currying is a process of building a function by taking multiple arguments and partially applying
them through a series of functions. So to be specific, you can break down the given function that
takes multiple arguments into series of functions that take part of the arguments.

Let us take a common example :

```javascript

```

------------------


##### 9. Tail Calls:

Tail calls are nothing but essentially replacing the concept of recursive
functions with loop. In a way this can not only save time but also saves
space i.e better time complexity and space complexity.

```javascript
// snippet one
function f(n) {
	if(n == 0) {
		return 1;
	}
	else {
		return n * f(n-1);
	}
}

// snippet two
function f1(n) {
	function r(n, m) {
		if(n == 0) {
			return m;
		}
		else {
			return r(n-1, n*m);
		}
	}
	return r(n, 1);
}
```

Observing both the algorithms above written for factorial we can understand
that f() is the traditional recursive method used for finding the factorial,
but f1() is the tail call optimized algorithm which is better and fast.

------------------

##### Oh snoop, that piece of code isn't right !

Although the best of efforts have been put in to make sure the
entire documentation is error free there might be small instances where mistakes
might have occurred. In such cases please raise an issue and help me make this
cheat sheet better.

------------------

##### [Akhil Pandey](https://github.com/AkhilHector)
