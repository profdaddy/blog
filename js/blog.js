$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("OMykm4qc3kgdhZO1oqYdRcyk0ZXtlNb2A7R4KaBA", "jI3bhTf8rEuZXTc3ckifmaxzUJQSmvnGWNpE1nYE");
    
    var BlogsView = Parse.View.extend({
    	template: Handlebars.compile($('#blogs-tpl').html()),
    	render: function() {
    		var collection = {blog: this.collection.toJSON() };
    		this.$el.html(this.template(collection));
    	}
    });
 
    var Blog = Parse.Object.extend("Blog");
    var Blogs = Parse.Collection.extend({
    	model: Blog
    });
    
    var blogs = new Blogs();
    
    blogs.fetch({
    	success: function(blogs) {
    		var blogsView = new BlogsView({ collection: blogs });
    		blogsView.render();
    		$('.main-container').html(blogsView.el);
    	},
    	error: function(blogs, error) {
    		console.log(error);
    	}
    }); 
    

});