const verifySignup = require('../middleware/verifySignUp.js');
const controller = require("../controllers/auth.controller");

// sets up routes for authentication

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignup.checkDuplicateUsernameOrEmail,
      verifySignup.checkRolesExisted
    ],
    controller.signup
  );
  
app.get("/api/user/getPreferences",controller.getPref);

  app.delete("/api/user/delete",controller.delete);
  
  app.put("/api/user/update",controller.update);

  app.post("/api/auth/signin", controller.signin);
};
