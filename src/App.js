import { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 0,
      title: "How to craft weapons",
      user: "Batriz",
      avatar: "../img/user1.jpg",
      date: "22 June 2021, 10:33",
      isPinned: true,
    },
    {
      id: 1,
      title: "Join our gang!",
      user: "Dereck",
      avatar: "../img/user2.jpg",
      date: "25 May 2021, 12:50",
      isPinned: false,
    },
    {
      id: 2,
      title: "Please unban me!!!!",
      user: "Gregier",
      avatar: "../img/user3.jpg",
      date: "29 April 2020, 22:15",
      isPinned: false,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
