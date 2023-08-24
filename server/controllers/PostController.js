import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
    try {
        // const post = new PostModel({
        //     title: 'test',
        //     content: 'test',
        //     author: 'test',
        // });

        // post.save();

        const posts = await PostModel.find();
        // console.log('posts', posts);
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const createPost = async (req, res) => {
    try {
        const newPost = req.body;

        const post = new PostModel(newPost);
        await post.save();

        res.status(200).json(post);        
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;

        const post = await PostModel.findByIdAndUpdate(
            { _id: updatePost._id }, 
            updatePost, 
            { new: true },
        );

        res.status(200).json(post);        
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
