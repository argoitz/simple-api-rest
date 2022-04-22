function errorHandler(error, req, res, next) {
  return res.status(500).json({ error: "Something unexpected happened" });
}

module.exports = errorHandler;
