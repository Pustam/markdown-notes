var AppConfig = {
	basePath: __dirname + '/',
	htmlPath: __dirname + '/html/',	
	rendererPath: __dirname + '/src/renderer/',
	browserSrcPath: __dirname + '/src/browser/',
	helperPath : __dirname + '/src/helpers/',
	srcPath : __dirname + '/src/',
	isDevelopment: true,
	database: {
		path: '/home/abijeet/Projects/markdown-notes/markdown-notes/db/',
		notes: 'notes.db',
		notebooks: 'notebooks.db'
	},
	i18nConfiguration: {
		locales: ['en'],
		directory: __dirname + '/locales',
		defaultLocale: 'en',
	},
	defaultNotebook : {
		'name' : 'Daily',
		'type' : 'task',		
		'shrinkNotes' : false,
		'createdOn' : null,
		'modifiedOn' : null	
	},
	getNotebookContentID : function(notebookDbID) {
		return 'notebook_' + notebookDbID;
	},
	getNotebookHeaderID : function(notebookDbID) {		
		return 'notebookHeader_' + notebookDbID;
	}
};

AppConfig.partialsPath = AppConfig.htmlPath + 'partials/';
AppConfig.dialogsPath = AppConfig.htmlPath + 'dialogs/';

module.exports = AppConfig;