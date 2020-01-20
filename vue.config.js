if(process.env.NODE_ENV==='production'){
    var publicPath = '/ts/'
}else{
    var publicPath = ''
}
module.exports = {
    publicPath:publicPath
}