import logo from '../../assets/צילום מסך 2025-08-05 170603.png';
import '../style/Post.css';

export type Posti = {
    id: string;
    name: string;
    likes: string;
    description: string;
    time: string;
};

export default function Post ( { post }: { post: Posti } ) {
    return (
        <div className="post" key={post.id}>
            <li>
                <img src={logo} className="imgi" alt="logo" />
                {post.name}
                <hr />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ipsa repudiandae aspernatur sed necessitatibus
                <hr />{post.likes}👍
                <hr />{new Date().toLocaleString()}
                <hr /><button>Like</button>
            </li>
        </div>
    );
};
