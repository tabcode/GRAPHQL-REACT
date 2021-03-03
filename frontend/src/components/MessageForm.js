import { useState } from 'react'
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks'

const CREATE_MESSAGE = gql`
    mutation CreateMessage($title:String!,$content:String!,$author:String!){
        createMessage(title:$title,content:$content,author:$author){
            _id
        }
    }
`;
const MessageForm = () => {
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [createMessage] = useMutation(CREATE_MESSAGE)

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h2>New Message</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={
                            async (e) => {
                                e.preventDefault();
                                await createMessage({ variables: { title, content, author } });
                                window.location.href = "/";
                            }
                        }>
                            <div className="form-group">
                                <input type="text" placeholder="Author" className="form-control form-control-sm" value={author} onChange={(e) => setAuthor(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Titulo" className="form-control form-control-sm" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <textarea type="text" placeholder="Message" className="form-control form-control-sm" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                            </div>
                            <button className="btn btn-dark text-white btn-block">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageForm;