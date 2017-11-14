# clientside-pdf-printing

Experiments in PDF generation purely client-side using JavaScript, Canvas, etc.

At work, we're looking into ways to use less-expensive technologies for simpler sites. And one of the "small details" that ends up being a breaker, is PDF generation. Our current technique is WkHTMLtoPDF to generate very customized PDFs (statistics, charts, maps) of content not necessarily like that on the web page. This means a server so we can use command-line tools (e.g. pdfkit for Python).

But if we can generate PDFs wholly client-side using static files, we could make strides in our quest to host at Github pages and other lower-cost and no-cost providers.


## Sample URLs

https://gregallensworth.github.io/clientside-pdf-printing/rasterized/

https://gregallensworth.github.io/clientside-pdf-printing/pdfmake/

https://gregallensworth.github.io/clientside-pdf-printing/pdfkit/


## Goals for a Complete Success

- [ ] Export of an element of HTML
  - [ ] Basic header, some content block and footer
  - [ ] Images
  - [ ] Hyperlinks
  - [ ] Bootstrap responsive table + real table
  - [ ] Multi-page content
  - [ ] Font usage
  - [ ] Ability to select text in the output PDF (copy-paste *non-rasterized* text)
- [ ] PDF export of an element not visible on the page
  - [ ] Some statistical readout, even if in HTML
  - [ ] Alternative header simulating letterhead
- [ ] PDF export of a Leaflet map
  - [ ] Basic map with tiles
  - [ ] Marker using SVG icon
  - [ ] GeoJSON overlay
- [ ] PDF export of charts
  - [ ] D3
  - [ ] Highcharts
- [ ] Testing of page break behavior e.g. lengthy lists that would run off the bottom, so we know what workarounds or caveats are required


## Summary of Discoveries So Far

Generally speaking, there are two techniques:
* Those based on *html2canvas* essentially render a visual representation of the HTML elements onto a Canvas, then save that Canvas as an image.
  * Examples: html2pdf, jsPDF, canvg
  * Some libraries can parse HTML effectively, making for more rapid development.
  * Leaflet maps still TBD, no good outcomes yet.
  * Resulting PDF is basically a static picture in a PDF container. It cannot have text selected (copy-paste), nor contain PDF metadata such as author info, page links and table of contents, and contains no text. *For real PDF purposes this is effectively worthless.*
* Those based on composing a true PDF binary structure, using lower-level API such as `addPage()`, `setXY()`, `drawPath()`.
  * Examples: PDFkit, and pdfmake (a higher-level wrapper for common HTML structures)
  * Resulting PDFs are true PDFs with text, PDF metadata, etc.
  * Low-level approach denies embedding of maps and charts without additional significant work, e.g. using Canvas techniques to save the chart or map to an image, then embedding that image. *Significantly more work, taking a few hours for even simple pretty layouts, and requiring effectively-infiniite labor for pixel-perfect maps, charts, etc.*
    * Example: Using pdfmake, adding new fonts means rebuilding the entire distribution from scratch. https://github.com/bpampuch/pdfmake/wiki/Custom-Fonts---client-side
  * Kits lacks other fundamental features, e.g. triggering download or fetching content as a Blob for use with a hyperlink.


## Credits

This is simply tests and documentation of our usage of someone else's work, [https://github.com/eKoopmans/html2pdf the *html2pdf* system by eKoopmans] Donations and kudos should be directed to that author, and to those of the underlying libraries *html2canvas* and *jsPDF*.

