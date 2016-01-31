Package.describe({
	name: 'bshamblen:autoform-ace',
	summary: 'Ace editor for autoform.',
	git: 'https://github.com/bshamblen/autoform-ace.git',
	version: '0.0.1'
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@1.0');
	api.use('templating@1.0.0');
	api.use('blaze@2.0.0');
	api.use('aldeed:autoform@4.0.0 || 5.0.0');
	api.use('arch:ace-editor@1.2.1', 'client');
	api.addFiles('autoform-ace.html', 'client');
	api.addFiles('autoform-ace.js', 'client');
});
