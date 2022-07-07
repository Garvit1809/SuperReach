const PostMessage = require('../Models/postMessages');

const getAllPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        // console.log(postMessages);
        res.status(200).json(postMessages)

    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json({newPost})
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

const updatePost = async (req, res, next) => {
    const { likesArr, id } = req.body;

    try {
        const postData = await PostMessage.findByIdAndUpdate(id, {
            likes: likesArr
        })
        return res.json({
            status: true, postData
        })
    } catch (error) {
        next(error);
    }
}

module.exports = { getAllPosts, createPost, updatePost };