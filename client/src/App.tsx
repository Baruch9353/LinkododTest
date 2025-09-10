import { Routes, Route } from "react-router";
import Header from "./components/application-layout/Header";
import PostList from "./components/application-layout/PostList";
import SinglePost from "./components/application-layout/SinglePost";
import CreatePost from "./components/application-layout/CreatePost";
import Signup from "./components/application-layout/Signup";
import Login from "./components/application-layout/Login";
import './App.css'
export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/:id" element={<SinglePost />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<PostList />} />
      </Routes>
    </>
  );
}

