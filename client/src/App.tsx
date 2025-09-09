import { Routes, Route } from "react-router";
import Header from "./components/application-layout/Header";
import PostList from "./components/application-layout/PostList";
import SinglePost from "./components/application-layout/SinglePost";
import CreatePost from "./components/application-layout/CreatePost";
import LoginSignup from "./components/application-layout/LoginSignup";
import './App.css'
export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/:id" element={<SinglePost />} />
        <Route path="/CreatePost" element={<CreatePost/>} />
        <Route path="/LoginSignup" element={<LoginSignup/>} />
        <Route path="/logout" element={<>todo</>} />
      </Routes>
    </>
  );
}

  