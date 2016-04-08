/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
    // Define changes to default configuration here. For example:

    // CKEDITOR TOOLBAR CUSTOMIZATION
    // I only set the needed buttons, so feel frey to add those you want in the array
    //config.toolbarGroups = [
    //    { name: 'pbckcode' },
    //    // your other buttons here
    //    // get information about available buttons here: bhttp://docs.ckeditor.com/?mobile=/guide/dev_toolbar
    //];
    config.removeButtons = 'Save';
    // Toolbar groups configuration.
    config.toolbarGroups = [
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
        { name: 'forms' },
        '/',
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
        { name: 'pbckcode' },
        { name: 'links' },
        { name: 'insert' },
        '/',
        { name: 'styles' },
        { name: 'colors' },
        { name: 'tools' },
        { name: 'others' },
        { name: 'about' }
    ];

    config.language = 'he';
    config.language_list = ['he:Hebrew:rtl', 'pt:Portuguese', 'de:German', 'ar:Arabic:rtl', 'fr:French', 'es:Spanish', 'en:English'];
    config.skin = 'office2013';
    // config.uiColor = '#AADC6E';
	 
    config.extraPlugins = 'inlinesave,chart,find,notification,autosave,mathedit,panelbutton,quicktable,tableresize,pbckcode,wordcount,openfile';
	 config.pbckcode = {
	     highlighter: 'PRETTIFY',
	     theme: 'tomorrow_night',
	     js: "/Scripts/ace/",
         lang:'he'
	 };

	
	 var docName = { DocumentName: 'savedDoc' };
	 config.inlinesave = {
	     postUrl: '/SaveCKEditor',
	     postData: docName,
	     onSave: function (editor) {
	         var userInput = prompt("Please enter file name", "expression");
	         if (userInput) {
	             docName.DocumentName = userInput;
	            console.log('clicked save', editor); return true;
	         }
	         return false;
	     },
	     onSuccess: function (editor, data) {
	         var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
	         saveAs(blob, docName.DocumentName + '.txt');	        
	         console.log('save successful', editor, data);
	     },
	     onFailure: function (editor, status, request) { console.log('save failed', editor, status, request); },
	     useJSON: true,
	     useColorIcon: false
	 };
};
