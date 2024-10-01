
const adminDB = require("../models/adminDB.js")
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.handleRefreshToken = async (req, res) => {
    // console.log('reached refresh')
    const cookies = req.cookies;
    console.log(cookies);

    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    // console.log(refreshToken);

    const foundUser = adminDB.findOne({ refreshToken })
        .then((saved) => {


            if (saved) {
                // console.log('user found in db', saved)
                jwt.verify(
                    refreshToken,
                    process.env.REFRESH_TOKEN_SECRET,
                    (err, decoded) => {
                        console.log(decoded)
                        if (err || saved.id !== decoded.username) return res.sendStatus(403);
                        // console.log('saved username is same as decoded username')
                        const accessToken = jwt.sign(
                            { "username": decoded.username, "role": decoded.role },
                            process.env.ACCESS_TOKEN_SECRET,
                            { expiresIn: '600s' }
                        );

                        res.json({ accessToken })
                    }
                );



            }
            else res.send(false);
        })
        .catch(err => {
            console.error(err)
            res.sendStaus(403)
        })






}