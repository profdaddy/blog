$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("OMykm4qc3kgdhZO1oqYdRcyk0ZXtlNb2A7R4KaBA", "jI3bhTf8rEuZXTc3ckifmaxzUJQSmvnGWNpE1nYE");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});