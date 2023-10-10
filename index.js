// 1. import json server

const jsonserver=require('json-server')

// 2. create json server

const server=jsonserver.create()

// 3. create router ((path)) the db.json file will get value

const router=jsonserver.router('db.json')

//4. create a middleware

const middleware=jsonserver.defaults()

// 5. create a port tha port will call the data will display

const port=process.env.PORT || 3002;

// 6. use the servers to be created

server.use(middleware)
server.use(router)

// 7. run the port in log

server.listen(port,()=>{
    console.log('running ruccessfull');
})