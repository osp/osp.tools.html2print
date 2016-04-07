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

Add these lines of code inside the `<head></head>` part of your HTML document:

    <link rel="stylesheet" type="text/css" href="main.css"/>
    <script src="assets/js/jquery.min.js" type="text/javascript"></script>
    <script src="assets/js/css-regions-polyfill.js" type="text/javascript"></script>
    <script src="assets/js/html2print.js" type="text/javascript"></script>

    <style>
         /* -------------------------------------------- FLOW ----------------------------------------- */
         .h2p-recipient {
             flow-from: myArticle;
         }

         #h2p-content {
             flow-into: myArticle;
         }
    </style>




* * *

First launch
------------

### Local micro-server

You can't use less.js on a local file (URL starting with "file:///").
To bypass this limitation, you can run a simple webserver with python.
To do so, open the file `start` and go to <http://localhost:8000/> with a compatible web browser (see in section `Print` of the README).


### Setup

- Edit `assets/css/setup.less` to change the format, margins, header or footer content.
- Then compile the file `main.less` with:

    lessc main.less main.css


### Print

To make a PDF, print the page within the browser, and choose «Print to file».
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


