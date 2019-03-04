
**Node.js**

Node.js is an open source server environment. Node.js allows you to run JavaScript on the server.

**What is Node.js?**

	1.Node.js is an open source server environment
	2.Node.js is free
	3.Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
	4.Node.js uses JavaScript on the server

**Why Node.js?**

Node.js uses asynchronous programming!
A common task for a web server can be to open a file on the server and return the content to the client.

Here is how PHP or ASP handles a file request:

	1.Sends the task to the computer's file system.
	2.Waits while the file system opens and reads the file.
	3.Returns the content to the client.
	4.Ready to handle the next request.

Here is how Node.js handles a file request:

	1.Sends the task to the computer's file system.
	2.Ready to handle the next request.
	3.When the file system has opened and read the file, the server returns the content to the client.

Node.js eliminates the waiting, and simply continues with the next request. Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.

**What Can Node.js Do?**

	1.Node.js can generate dynamic page content
	2.Node.js can create, open, read, write, delete, and close files on the server
	3.Node.js can collect form data
	4.Node.js can add, delete, modify data in your database

**What is a Node.js File?**

	1.Node.js files contain tasks that will be executed on certain events
	2.A typical event is someone trying to access a port on the server
	3.Node.js files must be initiated on the server before having any effect
	4.Node.js files have extension ".js"

**Getting Started**

We Create a Node.js file named "server.js", and add the following code:

`server.js`

	var http = require('http');

	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.end('Hello World!');
	}).listen(8080);

The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 8080.

	Run the server on the terminal `node server.js`

Now, the computer works as a server!

If anyone tries to access your computer on port 8080, they will get a "Hello World!" message in return!
We start the internet browser, and type in the address: `http://localhost:8080` to test the it actually works.


**What is a Module in Node.js?**
Consider modules to be the same as JavaScript libraries. A set of functions you want to include in your application.

**Built-in Modules**
Node.js has a set of built-in modules which you can use without any further installation.


**Include Modules**
To include a module, use the `require()` function with the name of the module:

var http = require('http');

Now the application has access to the `HTTP` module, and is able to create a server:

**Create Your Own Modules**
We can create our own modules, and easily include them in our applications. The following example creates a module that returns a date and time object:

**Example**
Creates a module that returns the current date and time:

`exports.myDateTime = function () {
  return Date();
};`

We use the exports keyword to make properties and methods available outside the module file.
We save the code above in a file called "date_module.js"


**Include Your Own Module**
Now we can include and use the module in any of our Node.js files.

**Example**
We use the module "date_module" in a Node.js file:

`var http = require('http');
var dt = require('./date_module');`

`http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);`

We use ./ to locate the module, that means that the module is located in the same folder as the Node.js file.
We save the code above in a file called "demo_module.js", and initiate the file:

**Initiate demo_module.js:**
Type on the terminal `node demo_module.js`
