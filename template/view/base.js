
var View = require('cloak/view');

var {{ name.class }}View = module.exports = View.extend({

	template: '<h1>Hello World</h1>',

	initialize: function() {
		// 
		// 
		// 
	},

	events: {
		// 
		// 
		// 
	},

	draw: function() {
		this.$elem.html(this.render());
	}

});
