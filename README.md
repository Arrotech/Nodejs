
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