function json(req, res, next) {
    const buffers = [];
  
    req.on('data', (chunk) => {
      buffers.push(chunk);
    });
  
    req.on('end', () => {
      try {
        req.body = JSON.parse(Buffer.concat(buffers).toString());
      } catch {
        req.body = null;
      }
      next();
    });
  }
  
  module.exports = {
    json,
  };
  