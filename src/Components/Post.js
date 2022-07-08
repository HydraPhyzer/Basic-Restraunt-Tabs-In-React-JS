import React from 'react'
import './Post.css'

const Post = () => {
  return (
    <div className='Post'>
        <div className="Post-Body">
            <div className="Head">
                <span className='Num'>1</span>
                <span className='Name'>Name</span>
                <span className='Cat'>Category</span>
            </div>
            <div className="Image">
                <img src="/Images/maggi.jpg" alt="" />
            </div>
            <div className="Desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem sapiente facilis, tempore ea id delectus voluptatibus nulla ab aspernatur.</p>
            </div>
        </div>
    </div>
  )
}

export default Post