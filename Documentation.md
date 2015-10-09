Advanced documentation
======================

To know basic information and how to first start the project, please read the README.md.



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

Concrete examples from which you can copy/paste specific features. Please note that there might be changes in the boilerplate but that you can copy/paste the isolated feature into the newest version of the boilerplate.

- 2columns.html: Multi-column layout.
- flatplan.html: Displays the document as a flatplan.
- imposition.html (to come): Makes an imposition plan to print your booklet at home.
- load-external-webpage.html: Loads as content a part of an existing webpage (i.e. from a newspaper website, a blogpost, a wiki…).
- master-pages.html: Applying different master pages.
- moveable.html: Move and resize elements with the mouse to make your layout and then report the properties back into the code.
- one-layout-per-page.html: when page number set to 0, then you can specify each page structure individually.
- pagination_region-breaks.html: column-breaks examples + pagination starting at page 20.
- polyfill.html: A javascript mimicking the CSS Regions in non-webkit browsers.
- polyfill.html: Loading an external webpage and using the polyfill at the same time (be careful of order of scripts loading).

#### /iceberg/
	Snapshots of the project, for OSP website previews!





Collaborative design
--------------------
Because everything is text-based, you can work on the HTML and/or on the CSS files from an Etherpad, a collaborative text editor. To do so, open a pad, go to Export options and copy the link of the "plain text" export button. Then paste the url in `setup/setup.js` in from of `var content = `.





Region-breaks
-------------

Built into html2print.less is a little class `.region-break` that you can apply to an element to put it on a new region.
    <h1 class="region-break">My Title</h1>

Hint:
You can also use an empty `<div class="region-break"></div>` 
if you want to put manual page breaks without attaching it to an HTML element

other properties available to you with CSS regions:

    -webkit-region-break-after:
    -webkit-region-break-before:
    -webkit-region-break-inside:

with assignable values of: `always;` or `avoid;`





Pagination
----------

Applying a 'counter-reset: page-counter -3;'
then hiding the footer with visibility:none on pages where one would not want the counter to display.





Changing the visual structure of the document
---------------------------------------------

If you want to have another type of layout than header/body/footer, you might want to edit the pages `index.html` and `/assets/less/layout.less`. Look at the code in the `examples` folder for more help.





Opening several projects
------------------------

By default, the `start` script uses the port 8000. If you want to launch another project at the same time, you need to launch the mini-server by yourself on another port (i.e. 8888).

- Open a terminal.
- Run these:

   - `cd /path/to/this/directory/`
   - `python -m SimpleHTTPServer 8888`

- Go to <http://localhost:8888/> !





Troubleshooting
===============

### When I launch the server (by opening the `start` file or through the terminal, I got the following error: "socket.error: [Errno 98] Address already in use"

Run the mini-server on another port (see section "Opening several projects).





PDFutils
========
See the repository PDFutils <http://osp.kitchen/tools/PDFutils/> for
pre-press tools such as:

- PDF conversion from RGB to CMYK via Ghostscript
- Check color separation

See <http://stdin.fr/Bazar/Ghostscript> for Ghostscript tips (PDF manipulation software).

