// NOTE: The allowed methods inside controllers for API services are: INDEX, SHOW, STORE, UPDATE, DELETE
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        console.log(req.io, req.connectedUsers);

        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) {
            return res.status(400).json({ error: 'Dev does not exists' });
        }

        if (targetDev.likes.includes(loggedDev._id)) {
            console.log('It`s a match!');
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};