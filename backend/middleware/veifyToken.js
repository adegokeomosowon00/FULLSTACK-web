const jwt = require("jsonwebtoken");

const vertifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  console.log("token:", token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json("Invalid or expired Token");
  }
};

const vertifyUser = (req, res, next) => {
  console.log(req.user);
  try {
    if (req.user.role !== "admin") returnres.status(400).json("Unauthorized");
    if (req.user.role === "admin") return next();
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Sever Error");
  }
};
module.exports = { vertifyToken, vertifyUser };
