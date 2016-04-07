HTML 2 print
============

This little tool is a boilerplate, a minimal example to start a print project
using HTML, less/CSS and Javascript/Jquery to design it.



### Why use html to make printed matters?

The most exciting reason to use HTML/CSS is the fact that you can go back
and forth between code and visual manipulation thanks to the element inspector
of browsers. With Javascript on top of it, you can access every object in the
DOM and its properties or do programmatic manipulations. This back-and-forth
between hand and code manipulations is new to print production.

The second strong reason why we set this up is that because the design is made
with code/text, it means we can use collaborative text editors such as
Etherpad to design with several people at the same time.



### Why use this instead of libraries such as the PHP library tcpdf which transforms html to a PDF for print?

Because CSS specifications for print are all settled, we are just waiting for
browsers vendors to implement them *well*. Meanwhile, it's already
possible to send to an offset printer a file generated from a webpage. So why
use a third party engine if you want to print HTML?



Features
--------
- Crop marks made with CSS gradients
- Pagination in pure CSS
- Mixing flowable content and absolute positioned content
- Image fitting in frame
- View as spread, and possibly as flatplan, and possibly building imposition
  plans
- Preflight packages is built-in: use the "Save Complete Webpage" function of
  your browser






* * *

First launch
------------

### Local micro-server

You can't use less.js on a local file (URL starting with "file:///").
To bypass this limitation, you can run a simple webserver with python.
To do so, open the file `start` and go to <http://localhost:8000/> with a compatible web browser (see in section `Print` of the README).


### Setup

Example is based on an A5 format. 
Edit:
    - `/content.html`: To put your own HTML content;
    - `/setup/setup.js`: To change the number of pages and the content file (if different from `content.html`);
    - `/setup/setup.less`: To change the format, margins, header or footer content;
    - `/setup/styles.less`: To add your own styles.


### Print

To make a PDF, print the page within the browser, and choose «Print to file».
Important: choose the right page format (only Chromium's print preview can take the format specified by the CSS).
In order to know your paper format (with the crop marks), inspect one ".paper" element with you web inspector, and look at its dimensions in mm. Be sure to remove all margins when creating the custom format!

Tested browsers:
- Arora 0.11.0
- [Midori](http://midori-browser.org/)
- Epiphany 3.16 (3.6.1 doesn't work)
- Safari > 7.0
- Chromium from versions 29 to 33
- With polyfill (loaded automatically on Chrome):
  - Chromium 43
  - Firefox 39





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



For Chrome only (from version 29 to 33)
---------------------------------------

### Experimental Webkit features

We use CSS regions to make text flow into different divs (just like a print
layout software). As it is not fully implemented yet, you need to use a
webkit-based browser and activate the «experimental web platform features».
To do so, you can visit the URL:

    chrome://flags/#enable-experimental-web-platform-features

And search in the long list for «experimental web platform features» to enable.
(or the equivalent in the language of your browser)



Resources
---------
- CSS Regions polyfill by François Rémy (more recent than Adobe's one): <https://github.com/FremyCompany/css-regions-polyfill>


<!--

Still need to document
----------------------

- the running title
- pagination styling (and offset?)

-->
