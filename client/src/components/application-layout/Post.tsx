import '../style/Post.css';

export type Posti = {
    id: string;
    name: string;
    likes: string;
    description: string;
    time: string;
};

// Renders a single post
export default function Post({ post }: { post: Posti }) {
    return (
        <li className="post">
            <img src={`http://localhost:3000/${post.id}.png`} className="imgi" alt={post.name} />
            <p>{post.name}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p>{post.likes} 👍</p>
            <p>{post.time}</p>
            <button>Like</button>
        </li>
    );
}