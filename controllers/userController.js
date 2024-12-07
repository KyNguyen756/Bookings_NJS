const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userController = {
    addUser: async (req, res) => {
        try{
            const newUser = new User(req.body);
            const saveUser = await newUser.save();
            res.status(200).json(saveUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    login: async (req, res) => {
        try{
            const { username, password } = req.body;

            const user = users.find((u) => u.username === username);
            if (!user) {
                return res.status(401).json({ message: 'Sai tài khoản hoặc mật khẩu' });
            }
        
            const isPasswordValid = bcrypt.compareSync(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Sai tài khoản hoặc mật khẩu' });
            }
        
            const token = jwt.sign(
                { id: user.id, username: user.username },
                SECRET_KEY,
            );
        
            res.json({ token });
            } catch (err) {
            res.status(500).json(err);
        } 
    },
}
module.exports = userController