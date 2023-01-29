# proxy design pattern

## use case:

### let's suppose that you want before any operation on a specific class to to do some validation before changing data of the instance of this class in this case we should adopte proxy pattern

### `example`: middleware is a type of proxy.when you send a request for example and the sent function accept the middleware the middleware it will be executed before the body of the function to assure some validation that user want to have! 