import React from 'react'

export default function Header() {
  return (
    <div class="header">
    <div class="log-container">
        <i class="ri-menu-line"></i>
        <div class="logo">
            <div class="logo-img">
                {/* <img src="../assets/images/logo.png" alt="youtube-logo"> */}
                <img src= {require("../assets/images/logo.png")} alt="" />
            </div>
            <h1 id="logo-txt">YouTube</h1>    
        </div>
    </div>
    <div class="search-container">
        <form action="">
            {/* <input type="text" placeholder="Search"> */}
            <input type="text" placeholder='Search' />
        </form>
        <button class="search"><i class="ri-search-line"></i>
        </button>
        <button class="mic"><i class="ri-mic-fill"></i></button>
    </div>
    <div class="profile-container">
        <i class="ri-video-add-line"></i>
        <i class="ri-grid-fill"></i>
        <i class="ri-notification-4-line"></i>
        <div class="profile-box">
           
            <img src= {require("../assets/images/my.jpg")} alt="" />

        </div>
    </div> 

</div>
  )
}
