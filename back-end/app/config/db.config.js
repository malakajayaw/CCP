//connect mongodb database 
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    url: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.ikudi.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
}
