HTMLCollection is an interface in the DOM that represents a collection of HTML document elements. 
It is commonly used when you want to access a group of elements with a specific tag name or class name,
such as all <div> elements or all <p>elements, or when you want to access elements within a specific container, such as all elements within a <ul> element.

`HTMLCollectionis live, meaning that it is automatically updated when the underlying document is modified.
This means that if elements are added, removed, or modified in the document, the HTMLCollection object will reflect those changes immediately.
HTMLCollection can be accessed via methods such as getElementByTagName(), and getElementByClassName().
An example of the JavaScript DOM method using the getElementByTagName().

Code example:

<p class="para">First Paragraph</p>
<p class="para">Second Paragraph</p>
<p class="para">Third Paragraph</p>
In the code example above, we have three HTML <p> tags each with the class name para. Now, let's select them using the JavaScript getElementByClassName() method.

let paraEl = document.getElementsByTagName('p');
console.log(paraEl);
The JavaScript code above retrieves all the HTML <p> elements in the document using getElementsByTagName() and stores them in a variable namedparaEl. 
The getElementsByClassName() method returns an HTMLCollection and then the result is printed to the console using console.log.
A screenshot of the result is below.
What is a NodeList?
A NodeList is another interface in the DOM that represents a collection of document nodes (element nodes, attribute nodes, text nodes, comments, essentially any type of node in the DOM tree), typically used in the context of web development with JavaScript.

A NodeList is most often a static collection. NodeList objects are commonly returned by methods like querySelectorAll() and properties like childNodes() and children when accessing elements in the DOM. They can be iterated over using methods like forEach() or by accessing them by index, like an array.

An example of the JavaScript DOM method using the querySelectorAll().

Code example:

<p class="para">First Paragraph</p>
<p class="para">Second Paragraph</p>
<p class="para">Third Paragraph</p>
