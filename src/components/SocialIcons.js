import React from 'react'
import "../styles/SocialIcons.css"

const SocialIcons = () => {
  return (
    <div>
      <div class="main">
        <a href="https://www.instagram.com/washington_firearm_training/" target="_blank" class="nav-item">
          <div class="nav-links transition-all">
            <i class="fab fa-instagram"></i>
          </div>
          <span class="nav-link-text">Instagram</span>
        </a>
        <a href="https://mobile.twitter.com/wdftraining/" target="_blank" class="nav-item">
          <div class="nav-links transition-all">
            <i class="fab fa-twitter"></i>
          </div>
          <span class="nav-link-text">Twitter</span>
        </a>
        <a href="https://facebook.com/" target="_blank" class="nav-item">
          <div class="nav-links transition-all">
            <i class="fab fa-facebook"></i>
          </div>
          <span class="nav-link-text">Facebook</span>
        </a>
      </div>
    </div>
  )
}

export default SocialIcons