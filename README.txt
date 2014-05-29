HTML 2 print
============

This little tool is a boilerplate, a minimal example to start a print project using HTML, less/CSS and Javascript/Jquery to design it.
Why using this instead of libraries such as the PHP library tcpdf which
transforms html to a PDF for print? 

Because CSS specifications for print are all settled, we are just waiting for browsers vendors to
implement them in browsers. Meanwhile, it's already possible to send to an
offset printer a file generated from a webpage. So why use a third party
engine if you want to print HTML?

But the most exciting reason to use HTML/CSS is the fact that you
can go back and forth between code and visual manipulation thanks to the
element inspector of browsers. With Javascript on top of it, you can
access every object in the DOM and its properties or do
programmatic manipulations.


Features
--------

- Crop marks made in Javascript
- Pagination in CSS
- Mixing flowable content and absolute positioned content
- Image fitting in frame
- View as spread (quite buggy still, see TODO)
- Preflight packages is built-in: use the "Save Complete Webpage" function of
  your browser
- PDF conversion from RGB to CMYK
- Check color separation


* * *


How
---

Example is based on an A5 format.


### Less

«Less is a CSS pre-processor, meaning that it extends the CSS language, adding
features that allow variables, mixins, functions and many other techniques
that allow you to make CSS that is more maintainable, themable and
extendable.»
— http://lesscss.org/

We use Less to easily change page dimensions, crop marks size.


### Javascript/Jquery

We use them in order to:
    - add a running title
    - add crop marks
    - paginate


### Print

To make a PDF, just open the webpage in the browser, print the page within the browser, and
choose «Print to file».

Currently, and idealy, Chromium version 33 seems the best version to use. We investigate to document this question more deeply.

In Chrome, you can have a print preview within the browser, which can save
some time as the system print dialogue is not optimal (you need to change the
filename everytime otherwise it doesn't export the PDF; if not A4, you have to
change the paper format every time). On Linux, you can use chromium by adding
an option; type in a terminal:

    chromium --enable-print-preview

If you have the error «pdf viewer is not available», you need to install
chromium-libpdf (tested on Arch Linux).

On some install, you need
    chromium-browser --enable-print-preview


First launch
------------

### Experimental Webkit features

We use CSS regions to make text flow into different divs (just like a print
layout software). As it is not fully implemented yet, you need to use a
webkit-based browser and activate the «experimental web platform features». 
To do so, you can visit the URL:

    chrome://flags/#enable-experimental-web-platform-features

And search in the long list for «experimental web platform features» to enable.
(or the equivalent in the language of your browser)


Development
-----------

### Local micro-server

You can't use less.js on a local file (URL starting with "file:///"). 
To bypass this limitation, you can run a simple webserver with python. 
To do so:

- Open a terminal.
- Run those sommands:

    cd /path/to/this/directory/
    python -m SimpleHTTPServer

- Visit the URL "http://localhost:8000/"!


Needed files
------------

- lib directory
- index.html 
	- change title to change pdf name
	- section for crops
	- sections header, page, footer
	- interface : preview to switch between hi and low res, toc to go to a specific page
	- container : where jquery will put content.html 
- content.html : filled from etherpad with a curl in a terminal like 
	curl http://osp.kitchen:9999/p/variable_publication/export/txt >| content.html
- print.js
- print.less

### others :
- check : to test/compare
- iceberg : internal use
- img : for test
