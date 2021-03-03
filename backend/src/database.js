import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://root:root@cluster0.pnst7.mongodb.net/GRAPHQL?retryWrites=true&w=majority', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => { console.log('database is connected') })
    .catch(err => { console.log('database is not connected') });;