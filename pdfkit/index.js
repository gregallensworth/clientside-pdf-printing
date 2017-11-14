PDF_DOWNLOAD_FILENAME = 'out.pdf';

window.printPdf = function () {


// create a document and pipe to a blob
var doc = new PDFDocument();
var stream = doc.pipe(blobStream());


// draw some text
doc.fontSize(25)
   .text('Here is some vector graphics...', 100, 80);
   
// some vector graphics
doc.save()
   .moveTo(100, 150)
   .lineTo(100, 250)
   .lineTo(200, 250)
   .fill("#FF3300");
   
doc.circle(280, 200, 50)
   .fill("#6600FF");
   
// an SVG path
doc.scale(0.6)
   .translate(470, 130)
   .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
   .fill('red', 'even-odd')
   .restore();
   
// and some justified text wrapped into columns
doc.text('And here is some wrapped text...', 100, 300)
   .font('Times-Roman', 13)
   .moveDown()
   .text("lorem ipsum more content here", {
     width: 412,
     align: 'justify',
     indent: 30,
     columns: 2,
     height: 300,
     ellipsis: true
   });
   
// end the document
doc.end();

// update a hyperlink so as to create a clickable thing to trigger the download
// note that popup blockers and some in-browser behaviors may block automatic downloads not triggered by a click,
// or download so silently that it's not clear to the user that a download is happening
stream.on('finish', function() {
    // show the download link
    // and update its HREF to point at the virtual file
    $('#download').show();
    var $link = $('#download a');



        let blob = new Blob([stream], {type: "application/pdf"});
        let url = window.URL.createObjectURL(blob);
        $link.prop('href', url);


});


};
