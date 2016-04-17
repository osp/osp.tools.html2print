HTML 2 print minified
=====================

This little tool wraps an HTML page into pages in order to print it.


Features
--------
- Crop marks
- Pagination in pure CSS
- Mixing flowable content and absolute positioned content

Usage
-----

Place your HTML document in the `document` folder, name it `index.html`

Add these lines of code inside the `<head></head>` part of your HTML document:

    <link href="/assets/css/main.less" type="text/css" rel="stylesheet/less" />
    <script src="/assets/js/less.min.js" type="text/javascript"></script>

    <script src="/assets/js/jquery.min.js" type="text/javascript"></script>
    <script src="layout.js" type="text/javascript"></script>
    <script src="/assets/js/html2print.js" type="text/javascript"></script>
    <script src="/assets/js/css-regions-polyfill.js" type="text/javascript"></script>


Click on the `start` file and visit the URL <http://localhost:8000/> in your favorite web browser.


* * *

### Document preferences

- Edit `document/setup.less` to change the format, margins, header or footer content.
- Edit `document/layout.js` to change the HTML page structure (zones of text).
- Edit `document/layout.less` to change the layout of the page structure.



### Print

To make a PDF, use the PRINT button at the right of the menu and choose «Print to file».
Important: choose the right page format (only Chromium's print preview can take the format specified by the CSS).
In order to know your paper format (with the crop marks), inspect one ".h2p-paper" element with you web inspector, and look at its dimensions in mm. Be sure to remove all margins when creating the custom format!





Dependencies
------------

### Less

> «Less is a CSS pre-processor, meaning that it extends the CSS language, adding
features that allow variables, mixins, functions and many other techniques
that allow you to make CSS that is more maintainable, themable and
extendable.»
> <footer>— <http://lesscss.org/></footer>

We use Less to harness the power of variables to easily change page dimensions, crop marks & sizes generally.
It is also generally a good idea to use a CSS preprocessor for your authoring experience. We use Less, but any of the SASS SCSS would work too.



### Javascript/Jquery

We use them for the interface actions like:
- zoom
- jump to a page
- view as spread
- toggle hi- and lo-res images




Resources
---------
- CSS Regions polyfill by François Rémy (more recent than Adobe's one): <https://github.com/FremyCompany/css-regions-polyfill>


