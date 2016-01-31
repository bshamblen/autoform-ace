# bshamblen:autoform-ace

A custom field type for the [aldeed:autoform](https://github.com/aldeed/meteor-autoform) Meteor package that renders the [Ace code editor](https://ace.c9.io).

## Prerequisites

You may use this package with or without the Bootstrap library. The only prerequisite is the `aldeed:autoform` package, which can add at your Meteor app`s root directory with the following command:

```cli
meteor add aldeed:autoform
``` 

## Installation

In the root directory of your Meteor app, enter:

```cli
meteor add bshamblen:autoform-ace
```

## Usage

This input type is intended to be used with `type: String` schema keys.

**Example SimpleSchema**

```javascript
var schema = new SimpleSchema({
	title: {
		type: String
	},
	codeBlock: {
		type: String,
		autoform: {
			type: 'ace'
		}
	}
});
```

## Options

By default the height of the Ace editor field will be set to `300px`, with the `xcode` theme, in `javascript` mode. You may adjust these settings by using any of the following options:

| Attribute       | Description | Default |
|:----------------|:------------|:--------|
| data-ace-height | Allows you to adjust the height of the editor window. Use any standard CSS height measument string ('300px', '10em'...) | `300px` |
| data-ace-theme  | The name of the theme you want to use to style the editor window. There are about 30 themes to pick from. For a full list of themes, please consult the [Ace editor Github repository](https://github.com/ajaxorg/ace/tree/master/lib/ace/theme). | `xcode` |
| data-ace-mode   | The name of the mode you want to use to lint your code. The Ace editor will display syntax errors and highlight code based on the mode you select. For a complete list of modes, please consult the [Ace editor Github repository](https://github.com/ajaxorg/ace/tree/master/lib/ace/mode) | `javascript` |

**Example HTML attributes**

If you prefer to set the attributes on a case-by-case basis, you may apply the options in your HTML, like so:

```html
{{> afQuickField
		name='codeBlock'
		data-ace-height="500px"
		data-ace-theme="clouds"
		data-ace-mode="html"
}}
```

**Example SimpleSchema attributes**

If you prefer to set the attributes at a global level, for the schema, you may apply the options in your SimpleSchema definition, like so:

```javascript
var schema = new SimpleSchema({
	...
	codeBlock: {
		type: String,
		autoform: {
			type: 'ace',
			'data-ace-height': '500px',
			'data-ace-theme': 'clouds',
			'data-ace-mode': 'html'
		}
	}
	...
});
```

## Contributing

Please feel free to contribute to this package. Before you fork, please open an issue to check to see if anyone else is already working on your proposed changes.