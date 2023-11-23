const Blogs = () => {
  return (
    <div className="flex justify-center rounded-lg">
    
     <div>
     <div className="lg:w-[1000px] rounded-xl mb-10 ">
        <h2 className="bg-sky-500 text-white lg:text-xl p-5">
        1.  What is an access token and refresh token? How do they work and
          where should we store them on the client-side?

        </h2>
        <p className="bg-yellow-400 text-white p-5">Access tokens and refresh tokens are components of the OAuth 2.0 authentication and authorization framework, commonly used to secure web APIs and authenticate users. Let's break down their roles and how they work:

Access Token:

An access token is a credential that represents the authorization granted to a client (e.g., a user or an application) to access a protected resource.
It is a string that typically contains information about the user and the permissions granted (scopes).
Access tokens have a limited lifespan, and their duration is determined by the authorization server.
Refresh Token:

A refresh token is also a credential but is used to obtain a new access token. It is typically long-lived compared to access tokens.
While access tokens have a short lifespan, refresh tokens can be used to request a new access token without requiring the user to reauthenticate.
Refresh tokens are valuable because they can be stored securely and used to obtain new access tokens when the current one expires or becomes invalid.
How They Work:

Initial Authentication:

The client (e.g., a web or mobile application) initiates the authentication process by sending a request to the authorization server.
The user is then prompted to log in and grant permission to the client.
Token Request:

Upon successful authentication and authorization, the authorization server issues an access token and a refresh token to the client.
Access Token Usage:

The client includes the access token in the header of its HTTP requests when accessing protected resources on the resource server (API).
Token Expiration:

Access tokens have a limited lifespan. When an access token expires, the client needs to obtain a new one.
Refresh Token Usage:

Instead of requiring the user to reauthenticate, the client can use the refresh token to request a new access token from the authorization server.
Storage on the Client-side:

Access Tokens:

Access tokens should be stored securely to prevent unauthorized access.
Commonly stored in memory or secure storage mechanisms provided by the platform (e.g., session storage or localStorage in a web browser).
Avoid storing access tokens in places prone to XSS attacks.
Refresh Tokens:

Refresh tokens should be stored more securely than access tokens since they have a longer lifespan.
It's often recommended to store refresh tokens on the server-side.
If storing on the client-side, use secure mechanisms, and consider options like HTTP-only cookies for added security.
Remember, the exact implementation might vary based on the specifics of the authentication system and the security requirements of your application. Always follow best practices and security guidelines provided by the authentication service or framework you are using.





</p>
      </div>
     <div className="lg:w-[1000px] rounded-xl mb-10">
        <h2 className="bg-sky-500 text-white lg:text-xl p-5">
        3. Explain my code.

        </h2>
        <p className="bg-yellow-400 text-white p-5">
       
</p>
      </div>
     <div className="lg:w-[1000px] rounded-xl mb-10">
        <h2 className="bg-sky-500 text-white lg:text-xl p-5">
        2. What is express js? What is Nest JS ?

        </h2>
        <p className="bg-yellow-400 text-white p-5">
        Express.js:
Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It is designed to make it easier to build web applications and APIs with Node.js. Express is widely used and has a large and active community.

Key features of Express.js include:

Routing: Express provides a simple yet powerful routing mechanism to define routes based on HTTP methods and URL patterns.

Middleware: Middleware functions in Express have access to the request and response objects and can perform actions before reaching the final request handler.

Template Engines: While not a requirement, Express can be used with various template engines (like EJS, Pug, or Handlebars) to generate HTML on the server.

HTTP Utility Methods: It simplifies the process of handling HTTP requests and responses with utility methods.

Static File Serving: Express can serve static files, making it convenient for handling client-side assets.

Express.js is often used as the foundation for building web applications, APIs, and even more complex server-side applications. It's known for its simplicity and flexibility, allowing developers to choose the components they need for their specific projects.

Nest.js:
Nest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and takes advantage of features such as decorators, dependency injection, and modules. Nest.js is designed to resemble the architecture of Angular on the server side, providing a familiar structure for developers who have experience with Angular.

Key features of Nest.js include:

Modularity: Nest.js encourages a modular and scalable project structure through the use of modules. Each module encapsulates a feature or a set of related features.

Decorators and TypeScript: Nest.js leverages TypeScript and decorators to simplify the process of creating controllers, providers, and other components.

Dependency Injection: Nest.js uses a dependency injection system that makes it easier to manage and inject dependencies into various components.

Middleware: Similar to Express.js, Nest.js supports middleware functions that can process requests before they reach the route handler.

WebSockets: Nest.js has built-in support for WebSockets, making it suitable for real-time applications.

Integrated Testing: Nest.js provides tools for testing components of your application, making it easier to ensure the reliability of your code.

Nest.js is often chosen for building scalable and maintainable server-side applications, especially when the development team is familiar with TypeScript and desires a structured and modular architecture.
</p>
      </div>
     </div>
    </div>
  );
};

export default Blogs;
