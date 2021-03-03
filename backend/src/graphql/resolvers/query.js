import Message from '../../models/messages';
const Query = { 
    ping(){
        return "pong!"
    },
    messages:async()=>{
        return await Message.find();
    }
};

export default Query;