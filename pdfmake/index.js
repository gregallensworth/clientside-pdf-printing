var PDF_DOWNLOAD_NAME = "made_by_pdfmake.pdf";



window.printPdf = function () {
    var docDefinition = {
        styles: {
            'default': {
                fontSize: 12,
            },
            'bigger': {
                fontSize: 15,
            },
            'emphasis': {
                italic: true,
            },
        },
        content: [
            { text: 'This is an sample PDF printed with pdfMake', style: 'default' },
            { text: 'This paragraph will have a bigger font', style: 'bigger' },

            {
                text: [
                    { text: 'This paragraph is defined as an array of elements to make it possible to ', style: 'default' },
                    { text: 'restyle part of it differently', style: [ 'bigger', 'emphasis' ] },
                    { text: ' than the rest.', style: 'default' },
                ]
            },
        ]
    };

    pdfMake.createPdf(docDefinition).download(PDF_DOWNLOAD_NAME);
};


