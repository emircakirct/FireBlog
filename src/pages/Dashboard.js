import React from 'react'
import BlogCard from '../components/BlogCard'
import { useContext } from "react"
import styles from './Dashboard.module.css'
import { BlogContext } from '../context/BlogContext';
import loadingGif from "../assets/loading.gif"
import Footer from './Footer'

const Dashboard = () => {
  const { BlogFetch } = useContext(BlogContext);
  const { isLoading, blogList } = BlogFetch();


  return (
    <div className={styles.firstOne}>
      <h1 className={styles.dashboard}>──── Dashboard ────</h1>
      <div className={styles.dashboard1}>
        {isLoading ? <img src={loadingGif} alt="loading" /> : <>
          {
            blogList?.map((item) => (
              <BlogCard item={item} key={item.id} />
            ))
          }
        </>}
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard