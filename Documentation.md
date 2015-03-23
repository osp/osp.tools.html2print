Advanced documentation
======================

To know basic information and how to first start the project, please read the README.md.


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




PDFutils
========
See the repository PDFutils <http://osp.kitchen/tools/PDFutils/> for
pre-press tools such as:

- PDF conversion from RGB to CMYK via Ghostscript
- Check color separation
