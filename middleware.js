import routes from "./routes";

//Express response -> rs.locals 참고
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  next();
};