AutoForm.addInputType('ace', {
	template: 'afAce',
	valueOut: function() {
		var editor = AceEditor.instance(this.attr('id'));
		return editor.getValue();
	}
});

Template.afAce.onRendered(function() {
	var template = this;
	var theme = template.data.atts['data-ace-theme'] || 'xcode';
	var mode = template.data.atts['data-ace-mode'] || 'javascript';
	var height = template.data.atts['data-ace-height'] || '300px';
	var initialValue;

	if (template.data && template.data.value && template.data.value.length > 0) {
		initialValue = template.data.value;
	}

	template.editorId = template.$('pre').first().attr('id');
	template.$('#' + template.editorId).css('min-height', height);

	Tracker.autorun(function(e) {
		template.editor = AceEditor.instance(template.editorId, {
			theme: theme,
			mode:  mode
		});

		if (!_.isUndefined(template.editor.loaded) && template.editor.loaded) {
			e.stop();
			template.editor.$blockScrolling = Infinity;

			if (initialValue) {
				template.editor.insert(initialValue);
			}
		}
	});
});
