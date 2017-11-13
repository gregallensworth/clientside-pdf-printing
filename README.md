# clientside-pdf-printing

Experiments in PDF generation purely client-side using JavaScript, Canvas, etc.

At work, we're looking into ways to use less-expensive technologies for simpler sites. And one of the "small details" that ends up being a breaker, is PDF generation. Our current technique is WkHTMLtoPDF to generate very customized PDFs (statistics, charts, maps) of content not necessarily like that on the web page. This means a server so we can use command-line tools (e.g. pdfkit for Python).

But if we can generate PDFs wholly client-side using static files, we could make strides in our quest to host at Github pages and other lower-cost and no-cost providers.


## Goals for a Complete Success

- [x] Export of an element of HTML
  - [ ] Basic header, some content block and footer
  - [ ] Images
  - [ ] Hyperlinks
  - [ ] Bootstrap responsive table
  - [ ] Multi-page content
- [x] PDF export of an element not visible on the page
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


## Credits

This is simply tests and documentation of our usage of someone else's work, [https://github.com/eKoopmans/html2pdf the *html2pdf* system by eKoopmans] Donations and kudos should be directed to that author, and to those of the underlying libraries *html2canvas* and *jsPDF*.

