const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.body.userId);

    // Check if user is admin
    if (!user || user.role !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Auth Failed",
      });
    }

    // Proceed to the next middleware or route handler
    next();
    
  } catch (error) {
    console.error(error);
    return res.status(401).send({
      success: false,
      message: "Auth Failed, ADMIN API",
      error,
    });
  }
};
