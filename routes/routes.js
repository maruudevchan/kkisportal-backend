const path = require('path');

class Routes {
    initRoutes(app = express.application) {
        app.get('/', (req, res) => {
            const filePath = path.join(__dirname, 'restricted.html');
            res.status(404).sendFile(filePath);
        });
    }
}

module.exports = Routes;
