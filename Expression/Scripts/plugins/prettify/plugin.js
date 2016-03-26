(function() {
    'use strict';

    CKEDITOR.plugins.add( 'prettify', {
        icons: 'prettify',
        init: function( editor ) {
            editor.on( 'mode', function( event ) {
                if( editor.mode == 'wysiwyg' )
                    insertResources( editor );
            });

            editor.addCommand( 'prettify', {
                exec: function( editor ) {
                    var selection = editor.getSelection(),
                        startElement = selection.getStartElement();

                    if ( startElement.hasClass( 'prettyprint' ) )
                        return;

                    var contents = startElement.getText();

                    // Naive pre-processing.
                    contents = contents.replace( /\n/g ,'<br>' );
                    contents = contents.replace( /\t/g ,'&nbsp;&nbsp;&nbsp;&nbsp;' );
                    contents = contents.replace( / /g ,'&nbsp;' );

                    startElement.setHtml( prettyPrintOne( contents, 'js', 0 ) );
                    startElement.addClass( 'prettyprint' );
                }
            });

            editor.ui.addButton( 'Prettify', {
                label: 'Prettify',
                command: 'prettify',
                toolbar: 'insert'
            });
        }
    });

    function insertResources( editor ) {
        var outerHead = CKEDITOR.document.getHead(),
           // innerHead = editor.document.getHead(),
            path = CKEDITOR.plugins.getPath('pbckcode');

        outerHead.append( CKEDITOR.document.createElement( 'script', {
            attributes: {
                type: 'text/javascript',
                async: 'true',
                src: path + 'lib/prettify.js'
            }
        }));

        outerHead.append(CKEDITOR.document.createElement('link', {
            attributes: {
                rel: 'stylesheet',
                href: path + 'lib/prettify.css'
            }
        }));
    }
})();