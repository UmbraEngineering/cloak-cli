
var Model = require('cloak/model');

// 
// Define the {{ name.class }} model
// 
var {{ name.class }} = module.exports = new Model({
	
	name: {{ name.hyphen }},
	url: '/{{ name.hyphen }}{/#}',

	attributes: {
		{{#each fields }}{{ this.name }}: { type: {{ this.type }} },
{{/each}}	}

});
