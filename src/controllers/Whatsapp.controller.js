const VerifyToken = (req, res) => {
    res.send("To verify token");
}

const ReceiveMessage = (req, res) => {
    res.send("Message received");
}

module.exports = {
    VerifyToken,
    ReceiveMessage,
}
