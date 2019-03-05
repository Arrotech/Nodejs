
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


**Read the Query String**

The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).This object has a property called "url" which holds the part of the url that comes after the domain name:

`demo_http_url.js`

	`var http = require('http');
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write(req.url);
	  res.end();
	}).listen(8080);`

**Initiate demo_http_url.js:**

C:\Users\Your Name>node demo_http_url.js
We should see two different results when opening these two addresses:

http://localhost:8080/summer

Will produce this result: `/summer`

http://localhost:8080/winter

Will produce this result: `/winter`


**Split the Query String**

There are built-in modules to easily split the query string into readable parts, such as the URL module.

**Example**

Split the query string into readable parts:

	`var http = require('http');
	var url = require('url');`

	`http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  var q = url.parse(req.url, true).query;
	  var txt = q.year + " " + q.month;
	  res.end(txt);
	}).listen(8080);`

We Save the code above in a file called "demo_querystring.js" and initiate the file:

**Initiate demo_querystring.js:**

Type on the terminal `node demo_querystring.js`

The address:

http://localhost:8080/?year=2017&month=July

Will produce this result: `2017 July`


**Node.js File System Module**

Node.js as a File Server. The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the `require()` method:

	`var fs = require('fs');`

Common use for the File System module:

	1.Read files
	2.Create files
	3.Update files
	4.Delete files
	5.Rename files
	6.Read Files

The `fs.readFile()` method is used to read files on your computer.

Assume we have the following HTML file (located in the same folder as Node.js):

`demofile1.html`

	`<html>
		<body>
			<h1>Node</h1>
			<p>Read file using Node.js.</p>
		</body>
	</html>`

Create a Node.js file that reads the HTML file, and return the content:

**Example**

	`var http = require('http');
	var fs = require('fs');
	http.createServer(function (req, res) {
	  fs.readFile('readFile.html', function(err, data) {
	    res.writeHead(200, {'Content-Type': 'text/html'});
	    res.write(data);
	    res.end();
	  });
	}).listen(8080);`

**Initiate readFile.js:**

On the terminal `node readFile.js`. We will see the same result as the example: http://localhost:8080


**Create Files**

The File System module has methods for creating new files:

	1.fs.appendFile()
	2.fs.open()
	3.fs.writeFile()

The `fs.appendFile()` method appends specified content to a file. If the file does not exist, the file will be created:

**Example**

Create a new file using the appendFile() method:

	`var fs = require('fs');`

	`fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});`

The `fs.open()` method takes a `"flag"` as the second argument, if the flag is `"w"` for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

**Example**

We Create a new, empty file using the `open()` method:

	`var fs = require('fs');`

	`fs.open('mynewfile2.txt', 'w', function (err, file) {
	  if (err) throw err;
	  console.log('Saved!');
	});`

