module.exports = (req, res) => {
    let email = "";
    let password = "";
    let data = req.flash('data')[0];

    if (data) {
        email = data.email || "";
        password = data.password || "";
    }

    res.render('register', {
        successMessage: req.flash('success'), // Flash Message สำหรับสำเร็จ
        errorMessage: req.flash('error'), // Flash Message สำหรับข้อผิดพลาด
        email: email,
        password: password
    });
};
