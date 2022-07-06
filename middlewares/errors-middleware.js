const ApiError = require('../exceptions/api-errors');

module.exports = function (err, req, res, next) {
  const { status, errors, message} = err; 
  console.log(err);
  if(err instanceof ApiError) {
    return res.status(status).json({message, errors, });
  }
  return res.status(500).json({message: 'Unhandled server exception'});
} 