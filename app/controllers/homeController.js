const homeController = {};

homeController.getHelloWorld = (req, res) => {
    res.status(200).send('Hello World!')
}

module.exports = homeController;