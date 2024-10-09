
const loveLetterDB = require("../models/loveLettersDB.js")
// Export the function
module.exports.postLoveLetter = async (req, res) => {
    // loveLetterPost
    console.log("Reached this controller");

    const { name, message } = req.body;
    console.log(name, message);

  
        let loveLetter = new loveLetterDB({ name, message });
         
        loveLetter.save().then(savedletter => {
            console.log(savedletter);
            res.send('Love letter posted');


         })
         .catch ((error)=> {
            console.log(error);
        res.status(500).json({ error: "Failed to post love letter" });
    })
    
    // let newBlog = new blogsDB({ blogTitle, blogText, blogTime, imageURL });

    // newBlog.save()
    //     .then((saved) => {
    //         console.log('blog added success');
    //         res.send(saved);

    //     })
    //     .catch(err => { console.log(err); });




};


module.exports.getLoveLetter = async (req, res) => {

    loveLetterDB.find({})
        .then((loveLetters) => {
            console.log(loveLetters);
            res.send(loveLetters);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Failed to get love letters" });
        });

}