document.addEventListener('DOMContentLoaded', function () {
  const gjs = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      width: 'auto',
     storageManager: false,
     allowScripts: 1,
     /* {type:'local'} */
     
       
      plugins: ['grapesjs-preset-webpage','grapesjs-navbar','grapesjs-custom-code','grapesjs-plugin-forms','gjs-blocks-basic','grapesjs-tabs'],
      pluginsOpts: {
          'grapesjs-preset-webpage': {

            modalImportTitle: 'Import Template',
            modalImportButton: 'Import',
            modalImportLabel: '',
            modalImportContent: '',
            importViewerOptions: {},

           },
       
  },
  
})
gjs.Pages.add([
  {name:'page1',id: 'page1'},
  {name:'page2',id: 'page2'},
  {name:'page3',id: 'page3'}
]);

gjs.Pages.setActive('page1');
editor.DomComponents.addComponent({
  tagName: 'button',
  content: 'Go to Page 2',
  style: { margin: '10px', padding: '5px 10px' },
  attributes: { onclick: 'goToPage2()' },
});

// Define the JavaScript function to go to the second page
window.goToPage2 = function () {
  editor.Pages.setActive('page2');
  function exportHTML() {
    var htmlCode = editor.getHtml();
    // For demonstration purposes, you can log the HTML to the console
    console.log(htmlCode);
  
};


}});