const jwt = require("jsonwebtoken");
const JWT_SECRET = "dont tell anyone about this one";

function auth(req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_SECRET);
  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    res.send(403).json({
      message: "Invalid Credentials",
    });
  }
}
module.exports = {
    auth,
    JWT_SECRET
}