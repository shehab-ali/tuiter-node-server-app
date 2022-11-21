import tuitsModel from "./tuits-model.js";

export const findTuits = async () => {
    return await tuitsModel.find();
}

export const createTuit = async (tuit) => {
    return await tuitsModel.create(tuit);
}

export const deleteTuit = async (tid) => {
    return await tuitsModel.deleteOne({_id: tid});
}

export const updateTuit = async (tid, tuit) => {
    return await tuitsModel.updateOne({_id: tid}, {$set: tuit});
}