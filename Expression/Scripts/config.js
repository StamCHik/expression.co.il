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
	 
    config.extraPlugins = 'chart,find,notification,autosave,mathedit,panelbutton,quicktable,tableresize,pbckcode';
	 config.pbckcode = {
	     highlighter: 'PRETTIFY',
	     theme: 'tomorrow_night',
	     js: "/Scripts/ace/",
         lang:'he'
	 };
};
