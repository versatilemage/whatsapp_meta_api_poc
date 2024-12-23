const VerifyToken = (req, res) => {
    try {
        const verificationToken = process.env.VERIFY_TOKEN;
        const token = req.query["hub.verify_token"];
        const challenge = req.body["hub.challenge"];

        if (challenge != null && token != null && token === verificationToken) {
            res.send(challenge);
        }else {
            res.status(400).send({data: {
                challenge,
                token,
                verificationToken,
            }});
        }

    } catch (err) {
        res.status(500).send();
    }
}

const ReceiveMessage = (req, res) => {
    res.send("Message received");
}

module.exports = {
    VerifyToken,
    ReceiveMessage,
}
