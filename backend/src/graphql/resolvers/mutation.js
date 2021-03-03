import Message from '../../models/messages';
const mutation = {
    createMessage: async(_,{title,content,author}) => {
        const newMessage =  new Message({title,content,author});
        return await newMessage.save();
    }
};

export default mutation;