const logger = (req, res, next) => {
    // console.log(req.url)
    // console.log(req.method) 
    // console.log(req.hostname)   
    // console.log(req.ip)    
    console.log(`${req.method} ${req.originalUrl}`)   
    next()
}

export default logger