import posts from "./tuits.js"
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime();
    // newTuit.likes = 0;
    // newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
};

const findTuits = (req, res) => {
    res.json(tuits);
};

const updateTuit = (req, res) => {
    const userId = req.params.tid;
    const updatedTuit = req.body;
    const tuitIndex = tuits.findIndex(t =>
        t._id.toString() === userId);
    tuits[tuitIndex] = {
        ...tuits[tuitIndex],
        ...updatedTuit
    };
    res.sendStatus(200);
};

const deleteTuit = (req, res) => {
    const userId = req.params['tid'];
    tuits = tuits.filter(t =>
        t._id.toString() !== userId);
    res.sendStatus(200);
};

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
};