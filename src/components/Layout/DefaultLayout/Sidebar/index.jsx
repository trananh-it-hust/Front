import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLocationDot,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Spin } from "antd"; //Loading..
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [listPost, setListPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3001");
        setListPost(res.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      }
    };

    getPosts();
  }, []);

  const handlePostClick = (id) => {
    navigate(`posts/${id}`);
  };

  return (
    <>
      <div className="sidebar-container">
        {isLoading ? (
          <Spin />
        ) : (
          listPost.map((post) => {
            return (
              <div
                onClick={() => handlePostClick(post._id)}
                key={post._id}
                className="post-items"
              >
                <div className="post-item">
                  <div className="layout-post-item">
                    <div className="time-posted text-flex">
                      <span>{post.createdAt}</span>
                    </div>
                    <h3 className="titlePost">
                      <a href="">{post.title}</a>
                    </h3>
                    <div className="companyName">
                      <a href="">{post.userName}</a>
                    </div>
                    <div className="rangeSalary text-flex">
                      <FontAwesomeIcon icon={faSackDollar} />
                      <div className="text">{post.rangeSalary}</div>
                    </div>
                    <div className="border-top-dashed"></div>
                    <div className="workPlace text-flex">
                      <FontAwesomeIcon className="icon" icon={faBriefcase} />
                      <div className="text">{post.workPlace}</div>
                    </div>
                    <div className="workLocation text-flex">
                      <FontAwesomeIcon className="icon" icon={faLocationDot} />
                      <div className="text">{post.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Sidebar;

{
  /* <div key={index} className='layout-post-item'>
                  <div className='time-posted text-flex'>
                    <span>{post.title}</span>
                  </div>
                  <h3 className='titlePost'>
                    <a href=''>{post.title}</a>
                  </h3>
                  <div className='companyName'>
                    <a href=''>{post.userName}</a>
                  </div>
                  <div className='rangeSalary text-flex'>
                    <FontAwesomeIcon icon={faSackDollar} />
                    <div className='text'>{post.rangeSalary}</div>
                  </div>
                  <div className='border-top-dashed'></div>
                  <div className='workPlace text-flex'>
                    <FontAwesomeIcon className='icon' icon={faBriefcase} />
                    <div className='text'>{post.workPlace}</div>
                  </div>
                  <div className='workLocation text-flex'>
                    <FontAwesomeIcon className='icon' icon={faLocationDot} />
                    <div className='text'>{post.location}</div>
                  </div>
                </div>; */
}
