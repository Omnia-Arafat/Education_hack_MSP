import React from 'react'

import SmartToyIcon from '@mui/icons-material/SmartToy';

const Courses = () => {

  return (
    <div>
  <div className='chat-bot'><SmartToyIcon/></div>






<div class="courses-section">
    <h3 class="courses-title">Courses</h3>
      <div class="courses-cards">
        <div class="coding-card">
            <img src="img/coding.jfif" class="coding-img"/>
            <p class="coding-description">coding</p>
            <p class="coding-paragraph">learn from zero to professional</p>
            <a href="coding/index.html" class="codding-button">Go</a>
        </div>
        <div class="graphic-card">
            <img src="img/what-is-graphic-design-header-1200.png" class="graphic-img"/>
            <p class="graphic-description">graphic design</p>
            <p class="coding-paragraph">learn from zero to professional</p>
            <a href="graphic/index.html" class="graphic-button">Go</a>
        </div>

        <div class="video-card">
            <img src="img/video.jfif" class="video-img"/>
            <p class="video-description">video editing</p>
            <p class="coding-paragraph">learn from zero to professional</p>
            <a href="video/index.html" class="video-button">Go</a>
        </div>
      </div>












      {/* <div class="courses-cards">
        <div class="coding-card">
            <img src={sec_course} class="coding-img"/>
            <p class="coding-description">coding</p>
            <p class="coding-paragraph">learn from zero to professional</p>
            <a href="coding/index.html" class="codding-button">Go</a>
        </div>
        <div class="graphic-card">
            <img src="image/w" class="graphic-img" alt='ttt'/>
            <p class="graphic-description">graphic design</p>
            <p class="coding-paragraph">learn from zero to professional</p>
            <a href="graphic/index.html" class="graphic-button">Go</a>
        </div>

        <div class="video-card">
            <img src="image/video.jfif" class="video-img"/>
            <p class="video-description">video editing</p>
            <p class="coding-paragraph">learn from zero to professional</p>
            <a href="video/index.html" class="video-button">Go</a>
        </div>
      </div> */}
</div>
    </div>

  )
}

export default Courses
