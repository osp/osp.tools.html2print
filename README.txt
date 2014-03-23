HTML 2 print
============

This little tool is a boilerplate, a minimal example to start a print project using HTML, less/CSS and Javascript/Jquery to design it.

Example is based on an A5 format.


How
---


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

In Chrome, you can have a print preview within the browser, which can save
some time as the system print dialogue is not optimal (you need to change the
filename everytime otherwise it doesn't export the PDF; if not A4, you have to
change the paper format every time). On Linux, you can use chromium by adding
an option; type in a terminal:

    chromium --enable-print-preview

If you have the error «pdf viewer is not available», you need to install
chromium-libpdf (tested on Arch Linux).



First launch
------------

### Experimental Webkit features

We use CSS regions to make text flow into different divs (just like a print
layout software). As it is not fully implemented yet, you need to use a
webkit-based browser and activate the «experimental web platform features». 
To do so, you can visit the URL:

    chrome://flags/#enable-experimental-web-platform-features


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



