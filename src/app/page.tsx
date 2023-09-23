"use client"

import { PostPovider } from "./Contexts/PostContext";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PostList } from "./components/PostList";

const Page = () => {
 
  return (
    <PostPovider>
      <div className="container mx-auto">
        <Header/>
        <PostList/>
        <Footer/>  
      </div> 
    </PostPovider>
            
  );
}
export default Page;