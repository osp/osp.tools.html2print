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

PDFutils
--------
See the repository PDFutils <http://osp.kitchen/tools/PDFutils/> for
pre-press tools such as:

- PDF conversion from RGB to CMYK via Ghostscript
- Check color separation


* * *

Anatomy of this repo
--------------------

The folder tries to present you with the minimum files at first: a couple of html files, a stylesheet, assets folder and this readme.
That is all you need to get started. Refer to the "Development" section to get your environment up and running.

#### /setup

- `/setup.js/` Set the number of pages for your document and the source of your content. By default this is set to pull in the content from 'content.html' but you could also set this to the export address of a pad for collaborative editing.
- `/setup.less/` Sets the basic rules of your document. Page width, page height, inside, outside, top and bottom margins and the running title content, injected in CSS.

#### content.html
This is where you place your marked up content. The main index file contains all the lib calls and interface elements so clearing the content to this specific folder helps ease of use.

#### main.less
The main stylesheet. In fact, it only reroutes to other `.less` partial files. It pulls different stylesheets which have different functions. This structure is up to you, but in our experience, fragmenting into several small stylesheets really helps the authoring experience.

#### index.html
This is where it all comes together. We pull toghether all the requirements, all the library elements, the content, and the stylesheets. This is the file you'll be looking at when you run your development environment.

#### /assets

- `/lib/` → all that we need for interface elements, less processing, resetting browser attitudes, etc→
- `/js/` → interface element actions & attitudes, as well as general variable settings, namely, the amount of pages for your document.
- `/css/` → .less partials

#### • /iceberg/
	Snapshots of the project, for OSP website previews!





How to?
---

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

We use them in order to:
- add a running title
- add crop marks
- paginate


### Print

To make a PDF, just open the webpage in the browser, print the page within the browser, and
choose «Print to file».

Currently, and idealy, Chromium version 33 seems the best version to use. Chrome does a handy print preview when 'exporting'. We investigate to document this question more deeply.
Tested browsers:
- [Midori](http://midori-browser.org/)
- Arora
- Safari > 7.0
- Chrome from versions 29 to 33

For Chrome only
---------------

### Experimental Webkit features

We use CSS regions to make text flow into different divs (just like a print
layout software). As it is not fully implemented yet, you need to use a
webkit-based browser and activate the «experimental web platform features».
To do so, you can visit the URL:

    chrome://flags/#enable-experimental-web-platform-features

And search in the long list for «experimental web platform features» to enable.
(or the equivalent in the language of your browser)


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

About region-break
------------------

Built into html2print.less is a little class that you can apply to an element to put it on a new region.
Hint:
You can also use an empty <div class="page-break"></div>
if you want to put manual page breaks without attaching it to an HTML element

other values available to you with CSS regions:

-webkit-region-break-after:
-webkit-region-break-before:
-webkit-region-break-inside:

with assignable values of: always; or avoid;

Pagination
----------

applying a 'counter-reset: page-counter -3;'
then hiding the footer with visibility:none on pages where one would not want the counter to display.

Resources
---------

- <http://alistapart.com/article/building-books-with-css3>

### Still need to document
- the running title
- pagination styling (and offset?)


