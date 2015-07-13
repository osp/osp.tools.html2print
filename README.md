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
To do so:

- Open a terminal.
- Run these:

   - `cd /path/to/this/directory/`
   - `python -m SimpleHTTPServer`

- Go to <http://localhost:8000/> !



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
- With polyfill:
  - Chromium 43
  - Firefox 39



Anatomy of the repo
-------------------

The folder tries to present you with the minimum files at first: a couple of html files, a stylesheet, assets folder and this readme.
That is all you need to get started. Refer to the "Development" section to get your environment up and running.

#### /content.html
This is where you place your marked up content. The main index file contains all the lib calls and interface elements so clearing the content to this specific folder helps ease of use.

#### /setup

- `/setup.js/` Set the number of pages for your document and the source of your content. By default this is set to pull in the content from 'content.html' but you could also set this to the export address of a pad for collaborative editing.
- `/setup.less/` Sets the basic rules of your document. Page width, page height, inside, outside, top and bottom margins and the running title content, injected in CSS.

#### /main.less
The main stylesheet. In fact, it only reroutes to other `.less` partial files. It pulls different stylesheets which have different functions. This structure is up to you, but in our experience, fragmenting into several small stylesheets really helps the authoring experience.

#### /main.css
Compiled .less files into a .css file, used for the polyfill. To generate it, do in the terminal: `lessc main.less main.css`. (You need to install the software `npm` first, and install `lessc` with the command `sudo npm install -g less`.

#### /index.html
This is where it all comes together. We pull together all the requirements, all the library elements, the content, and the stylesheets. This is the file you'll be looking at when you run your development environment.

#### /assets

- `/lib/` → all that we need for interface elements, less processing, resetting browser attitudes, etc→
- `/js/` → interface element actions & attitudes, as well as general variable settings, namely, the amount of pages for your document.
- `/less/` → .less partials

#### /examples/

Concrete examples from which you can copy/paste specific features like:
- 2columns.html: Multi-column layout.
- imposition.html (to come): Makes an imposition plan to print your booklet at home.
- load-external-webpage.html: Loads as content a part of an existing webpage (i.e. from a newspaper website, a blogpost, a wiki…).
- master-pages.html: Applying different master pages.
- moveable.html: Move and resize elements with the mouse to make your layout and then report the properties back into the code.
- one-layout-per-page.html: when page number set to 0, then you can specify each page structure individually.
- pagination_region-breaks.html: Page-breaks examples + pagination starting at page 3.
- polyfill.html: A javascript mimicking the CSS Regions in non-webkit browsers.
- polyfill.html: Loading an external webpage and using the polyfill at the same time (be careful of order of scripts loading).

#### /iceberg/
	Snapshots of the project, for OSP website previews!





How to?
-------

Example is based on an A5 format.

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
