import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("token", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //ms
    httpOnly: true, //XSS protection
    sameSite: true, //CSRF protection
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
