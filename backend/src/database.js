import mongoose from 'mongoose';

mongoose.connect('#', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => { console.log('database is connected') })
    .catch(err => { console.log('database is not connected') });;