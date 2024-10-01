const adminDB = require("../models/adminDB.js")
const jwt = require('jsonwebtoken');

module.exports.logIn = async (req, res) => {

    console.log(req.body, 'login controller')
    const { id, password } = req.body;

    const foundUser = adminDB.findOne({ id, password })
        .then((saved) => {

            // console.log('line 127',saved)
            if (saved) {

                // console.log(saved)
                //create JWT
                const accessToken = jwt.sign(
                    { "username": saved.id, "role": saved.role },

                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '600s' }
                );
                const refreshToken = jwt.sign(
                    { "username": saved.id, "role": saved.role },
                    process.env.REFRESH_TOKEN_SECRET,
                    { expiresIn: '1d' }
                );

                // saved.refreshToken=refreshToken;

                try {
                    adminDB.findOneAndUpdate({ id: id }, { refreshToken: refreshToken }, { returnDocument: 'after' })
                        .then((saved) => {
                            //  console.log('updated users',saved)
                            // res.send(saved.serviceType)
                            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
                            res.json({ accessToken });
                        })
                        .catch((e) => { console.log(e) })
                }
                catch (e) { console.log('line 157', e) }
                // console.log(saved)
                // res.send(true);


            }
            else res.send(false);
        })
        .catch(err => {
            console.error('line 166', err)
            res.send(false)
        })








}

module.exports.signUp = async (req, res) => {

    console.log(req.body)
    const { id, password } = req.body;
    const refreshToken = '';
    role = 'ADMIN';
    try {

        const newAdmin = new adminDB({ id, password, role, refreshToken });
        await newAdmin.save();

        console.log(newAdmin)

    } catch (error) {
        console.log(error)
    }
    // res.send("GET Request Called")

}