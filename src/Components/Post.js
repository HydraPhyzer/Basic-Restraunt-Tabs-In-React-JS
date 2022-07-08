import React from 'react'
import './Post.css'

const Post = (Props) => {
    return (
        <div className='Post'>
            {
                Props.Posts.map((element,key) => {
                    return(
                        <div className="Post-Body" key={key}>
                            <div className="Head">
                                <span className='Num'>{element.id}</span>
                                <span className='Name'>{element.name}</span>
                                <span className='Cat'>{element.category}</span>
                            </div>
                            <div className="Image">
                                <img src={element.image} alt=""/>
                            </div>
                            
                            <div className="Desc">
                                <p>{element.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Post