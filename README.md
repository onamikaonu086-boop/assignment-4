1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: When we work with the DOM in JavaScript, we often need to select elements from the page. There are multiple ways to do that, and the main difference among getElementById, getElementsByClassName, and querySelector/querySelectorAll is how they select elements and what they return.

First, getElementById is used to select a single element based on its id. Since an id should be unique in a webpage, this method always returns only one element. It’s very straightforward and also very fast because the browser can directly find the element by its unique id. If I know the element’s id, this is usually the simplest and most efficient choice.

Second, getElementsByClassName is used to select elements by their class name. Unlike id, multiple elements can share the same class, so this method returns a collection of elements. Specifically, it returns an HTMLCollection, which is a live collection. “Live” means that if the DOM changes, the collection automatically updates. That can be useful, but sometimes it can also be confusing if we are not expecting it to change dynamically.

Now, querySelector and querySelectorAll are more modern and flexible. They allow us to use any valid CSS selector. For example, we can select by id (#id), class (.class), tag name, attribute, or even complex selectors like div > p.

querySelector returns only the first matching element.

querySelectorAll returns all matching elements as a NodeList.

The NodeList returned by querySelectorAll is usually static, meaning it does not automatically update if the DOM changes (unlike the live HTMLCollection from getElementsByClassName).

2. How do you create and insert a new element into the DOM?
ans: To create and insert a new element into the DOM, we usually follow three main steps:
Create the element
Add content or attributes
Insert it into the DOM
First, we create a new element using document.createElement(). This method takes the tag name as a string
Second, we can add content, classes, attributes, or styles to that element.
Finally, we insert the element into the DOM. To do that, we first select the parent element where we want to place it, and then use methods like append, appendChild, or prepend.

3. What is Event Bubbling? And how does it work?
ans: Event bubbling is a behavior in JavaScript where an event starts from the element that was actually clicked (or triggered) and then moves upward through its parent elements in the DOM tree.
In simple words, when you click on a child element, the event doesn’t just stay there. After running the event handler on that element, it “bubbles up” to its parent, then to the parent’s parent, and continues until it reaches the document.

4. What is Event Delegation in JavaScript? Why is it useful?
ans: Event Delegation is a technique in JavaScript where, instead of adding event listeners to multiple child elements, we add a single event listener to their parent element and handle the events there.
This works because of event bubbling. When we click on a child element, the event first happens on that child and then bubbles up to its parent. So the parent can “catch” the event and determine which child triggered it.
For example, imagine we have a list with many <li> items. Instead of adding a click event to every single <li>, we can add one click event to the <ul> (the parent). Then inside the event handler, we check which <li> was clicked using event.target.
The main reason Event Delegation is useful is performance. If we have 100 elements and attach 100 event listeners, that consumes more memory and can make the code harder to manage. With delegation, we only attach one listener.

5. What is the difference between preventDefault() and stopPropagation() methods?
ans: First, preventDefault() is used to stop the browser’s default behavior for an element. Many HTML elements have built-in actions. For example:
A link (<a>) automatically navigates to another page when clicked.
A form automatically submits when you click the submit button.
A checkbox automatically toggles when clicked.

On the other hand, stopPropagation() is about event flow, not default behavior. It stops the event from moving up or down the DOM tree.
Normally, because of event bubbling, when you click a child element, the event also triggers handlers on its parent elements. If we use an event.stopPropagation(), the event will not bubble up to the parent.
# assignment-4
