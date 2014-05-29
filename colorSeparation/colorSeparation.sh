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

echo "MOVE TIF FILES INTO 'TIFFSEP' FOLDER"
mkdir tiffsep
mv ${bn}*.tif tiffsep
cd tiffsep

echo "CONVERT TIF TO JPG"
for TIF in *.tif; do convert $TIF $(basename $TIF .tif).jpg; done

echo "REMOVE TIF FILES"
rm *tif

echo "GENERATE HTML PREVIEW PAGE"
cat ../colorSeparation_header.html > ${bn}-checkcolors.html

start=1
end=$(( $(ls | wc -l) /5))

size=$(identify ${bn}-page001.jpg |  cut  -d " " -f 3)
width=$(echo ${size} | cut -d "x" -f 1)
height=$(echo ${size} | cut -d "x" -f 2)

for i in $(eval echo "{$start..$end}")
do
    page=$(printf "%03u" ${i})
    echo "<div id='page${page}' class='page' style='height: ${height}px; width: ${width}px;'>" >> ${bn}-checkcolors.html
    echo "    <img class='all' style='height: ${height}px; width: ${width}px;' data-original='${bn}-page${page}.jpg' />" >> ${bn}-checkcolors.html
    echo "    <img class='cyan' style='height: ${height}px; width: ${width}px;' data-original='${bn}-page${page}(Cyan).jpg' />" >> ${bn}-checkcolors.html
    echo "    <img class='magenta' style='height: ${height}px; width: ${width}px;' data-original='${bn}-page${page}(Magenta).jpg' />" >> ${bn}-checkcolors.html
    echo "    <img class='yellow' style='height: ${height}px; width: ${width}px;' data-original='${bn}-page${page}(Yellow).jpg' />" >> ${bn}-checkcolors.html
    echo "    <img class='black' style='height: ${height}px; width: ${width}px;' data-original='${bn}-page${page}(Black).jpg' />" >> ${bn}-checkcolors.html
    echo "</div>" >> ${bn}-checkcolors.html
done

cat ../colorSeparation_footer.html  >> ${bn}-checkcolors.html
