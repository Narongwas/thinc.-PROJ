module.exports = (req,res) => {
    req.session.destroy(() => {
        res.redirect(`${import.meta.env.REACT_APP_FRONTEND_BASEURL}/`)
    })
}