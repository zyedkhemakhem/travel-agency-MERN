const { Blog, User } = require("../models/Blogs");

const createBlog = async (req, res) => {
    for (const key of Object.keys(req.body)) {
        if (req.body[key] === "") {
            return res.status(400).json({ message: "Verify blog content; one or more elements are empty." });
        }
    }
    try {
        console.log(req.body);
        let newBlog = await Blog.create(req.body);
        res.status(201).json(newBlog);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Error while creating blog.", error: e.message });
    }
};

const getBlogById = async (req, res) => {
    let blogId = req.params.id;
    try {
        let blog = await Blog.findById(blogId);
        res.json(blog);
    } catch (e) {
        return res.status(400).json({ message: "No blog with id " + blogId });
    }
};

const getAllBlogs = async (req, res) => {
    try {
        let blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (e) {
        res.status(500).json({ message: "error retrieving blogs" });
    }
};


const deleteBlogById = async (req, res) => {
    const blogId = req.params.id;
    console.log('Attempting to delete blog with ID:', blogId);

    try {
        const deletedBlog = await Blog.findByIdAndDelete(blogId);
        if (!deletedBlog) {
            return res.status(404).json({ message: "No blog with id: " + blogId });
        }
        res.json({ message: "Deleted element with id: " + blogId });
    } catch (e) {
        res.status(500).json({ message: "Error deleting blog with id: " + blogId });
    }
};


const createUser = async (req, res) => {
    for (const key of Object.keys(req.body)) {
        if (req.body[key] === "") {
            return res.status(400).json({ message: "Verify user content; one or more elements are empty." });
        }
    }
    try {
        console.log(req.body);
        let newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "ya latiffffffff", error: e.message });
    }
};
const Login = async(req,res) =>{
    const { email , password } =req.body ;
    try{
        const user = await user.FindOne({email});
         if(!user){
            res.status(404).json({ message : " khsara mafamech user "})
         }
         const ya5taf = await compare(user.password,password);
           if(!ya5taf){
            res.status(401).json({ message : "password incorrect"})
           } 
           const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

           res.json({
             message: "Login successful",
             token
           });
        }
          catch (err) {
           console.error(err);
           res.status(500).json({ message: "Server error" });
         }
       }

module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    deleteBlogById,
    createUser,
    Login
};
