#! /usr/bin/env bash
#
# USAGE
# ./colorSepatation.sh input.pdf
#
# OUTPUT
# a directory called `tiffsep` where you have a jpg image per color channel per page

bn=$(basename ${1} .pdf)

# Change resolution here, -r150x150 = 150dpi
gs -sDEVICE=tiffsep -dNOPAUSE -dBATCH -r150x150 -sOutputFile=${bn}-page%03d.tif ${1}
mkdir tiffsep
mv ${bn}*.tif tiffsep
cd tiffsep
for TIF in *.tif; do convert $TIF $(basename $TIF .tif).jpg; done
rm *tif
