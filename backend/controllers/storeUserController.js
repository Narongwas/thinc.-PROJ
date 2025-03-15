const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res) => {
    const { email, password } = req.body;

    // ✅ เช็คว่าอีเมลซ้ำหรือไม่
    User.findOne({ email }).then(existingUser => {
        if (existingUser) {
            req.flash('error', ['This email has been used']);  // ใช้ Flash Message
            req.flash('data', req.body);  // ส่งข้อมูลฟอร์มที่กรอกกลับไป
            return res.redirect('/register');
        }

        // ✅ เข้ารหัสรหัสผ่าน
        bcrypt.hash(password, 10).then(hashedPassword => {
            // ✅ บันทึกลงฐานข้อมูล
            User.create({ email, password: hashedPassword }).then(() => {
                req.flash('success', 'Registration successful! Please log in.');
                console.log("User registered successfully!");
                return res.redirect('/login');
            }).catch(error => {
                console.log(error);
                req.flash('error', 'เกิดข้อผิดพลาด กรุณาลองใหม่');  // ใช้ Flash Message
                req.flash('data', req.body);  // ส่งข้อมูลฟอร์มที่กรอกกลับไป
                return res.redirect('/register');
            });
        }).catch(error => {
            console.log(error);
            req.flash('error', 'เกิดข้อผิดพลาด กรุณาลองใหม่');  // ใช้ Flash Message
            req.flash('data', req.body);  // ส่งข้อมูลฟอร์มที่กรอกกลับไป
            return res.redirect('/register');
        });
    }).catch(error => {
        console.log(error);
        req.flash('error', 'เกิดข้อผิดพลาด กรุณาลองใหม่');  // ใช้ Flash Message
        req.flash('data', req.body);  // ส่งข้อมูลฟอร์มที่กรอกกลับไป
        return res.redirect('/register');
    });
};
