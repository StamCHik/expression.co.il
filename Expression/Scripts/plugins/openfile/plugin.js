CKEDITOR.plugins.add('openfile', {
    icons: 'openfile',
    init: function (editor) {
        var files;
        var prepareUpload = function (event) {            
            files = event.target.files;            
            event.stopPropagation(); // Stop stuff happening
            event.preventDefault(); // Totally stop stuff happening

            // START A LOADING SPINNER HERE

            // Create a formdata object and add the files
            var data = new FormData();
            $.each(files, function (key, value) {
                data.append(key, value);
            });

            $.ajax({
                url: '/OpenCKEditor',
                type: 'POST',
                data: data,
                cache: false,
                dataType: 'json',
                processData: false, // Don't process the files
                contentType: false, // Set content type to false as jQuery will tell the server its a query string request
                success: function (data, textStatus, jqXHR) {
                    if (data.result != undefined && data.result != '') {                       
                        //var html = $(data.result);
                        //html.html(prettyPrintOne(data.result, $(data.result).attr("data-pbcklang"), true)); 
                        editor.updateElement();
                        editor.setData('');
                        editor.document.getBody().appendHtml(data.result);                       
                    }
                    $("#yourinputname" ).val("");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // Handle errors here
                    console.log('ERRORS: ' + textStatus);
                    // STOP LOADING SPINNER
                }
            });
        };
        CKEDITOR.document.getBody().appendHtml("<input id='yourinputname' type='file' name='yourinputname' style='display: none;' />");       
        $('input[type=file]').on('change', prepareUpload);
        editor.ui.addButton('openfile', {
            label: 'לפתוח מסמך שמור',
            command: 'openfile',
            toolbar: 'document,0'
        });
        editor.addCommand('openfile', {
            exec: function (editor) {
                $('#yourinputname').trigger('click');
            }
        });

        var prepareUpload = function (event) {           
            files = event.target.files;

            event.stopPropagation(); // Stop stuff happening
            event.preventDefault(); // Totally stop stuff happening

            // START A LOADING SPINNER HERE

            // Create a formdata object and add the files
            var data = new FormData();
            $.each(files, function (key, value) {
                data.append(key, value);
            });

            $.ajax({
                url: '/OpenCKEditor',
                type: 'POST',
                data: data,
                cache: false,
                dataType: 'json',
                processData: false, // Don't process the files
                contentType: false, // Set content type to false as jQuery will tell the server its a query string request
                success: function (data, textStatus, jqXHR) {                   
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // Handle errors here
                    console.log('ERRORS: ' + textStatus);
                    // STOP LOADING SPINNER
                }
            });
        };
        
    }

   
});