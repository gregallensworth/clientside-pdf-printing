// the PDF configuration
// see also https://github.com/eKoopmans/html2pdf
// see also https://html2canvas.hertzen.com/documentation.html#available-options
// see also http://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
var PDF_EXPORT_CONFIG = {
    filename: 'myfile.pdf',  // the file will be saved as this filename
    jsPDF: { // jsPDF options such as page size
        unit: 'in',
        format: 'letter',
        orientation: 'portrait'
    },
    margin: [ 0.5, 0.5, 0.5, 0.5 ], // page margin, in same units as above
    enableLinks: true,  // make hyperlinks work in the PDF? yes!
    image: { type: 'jpeg', quality: 1 },  // PDF image rendering settings; just keep these
    html2canvas: { dpi: 192, letterRendering: false },  // / html2canvas options, usually fine as-given
};



// PDF printing only works on things that are visible in the DOM
// so, all DPF templates have a CSS class of .print_template and this has CSS making it non-visible
// trick: remove that class, html2pdf() it, then re-add the class
// it's so fast that the eye can't see it flicker onto the screen, but it does print!
window.printPdf = function () {
    var element = document.getElementById('thepdf');
    $(element).removeClass('print_template');
    html2pdf(element, PDF_EXPORT_CONFIG);
    $(element).addClass('print_template');
};
