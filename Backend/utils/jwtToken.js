//login after signup when we enter your details and it automatically
// generates a token which will help you to login automatically

export const sendToken = (user, statusCode, res, message) => {
    const token = user.geJWTToken();
    const options = {
        expires : new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly : true,
    };
    res.status(statusCode).cookie("token", token, options).json({
        success : true,
        user,
        message,
        token,
    });
};