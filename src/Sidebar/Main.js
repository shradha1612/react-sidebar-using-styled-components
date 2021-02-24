import React from 'react'
import './Main.css'
// import './Style.scss'
export const Main = () => {
    return (
        <div>
           <div class="l-navbar" id="navbar">
           <nav class="nav">
               <div>
               <a href="#" class="nav__logo">
                        <img src="assets/icons/logo.svg" alt="" class="nav__logo-icon"/>
                        <span class="nav__logo-text">Bedimcode</span>
                </a>
                <div class="nav__toggle" id="nav-toggle">
                        <i class='bx bx-chevron-right'></i>
                    </div>
    
                    <ul class="nav__list">
                        <a href="#" class="nav__link active">
                            <i class='bx bx-grid-alt nav__icon'></i>
                            <span class="nav__text">Home</span>
                        </a>
                        <a href="#" class="nav__link">
                            <i class='bx bx-user nav__icon' ></i>
                            <span class="nav__text">User</span>
                        </a>
                        <a href="#" class="nav__link">
                            <i class='bx bx-bell nav__icon' ></i>
                            <span class="nav__text">Notification</span>
                        </a>
                        <a href="#" class="nav__link">
                            <i class='bx bx-heart nav__icon'></i>
                            <span class="nav__text">Favorites</span>
                        </a>
                        <a href="#" class="nav__link">
                            <i class='bx bx-bookmark nav__icon'></i>
                            <span class="nav__text">Saved</span>
                        </a>
                        <a href="#" class="nav__link">
                            <i class='bx bx-message-rounded nav__icon' ></i>
                            <span class="nav__text">Chat</span>
                        </a>                 
                    </ul>
               </div>
               <a href="#" class="nav__link">           
                    <i class='bx bx-log-out-circle nav__icon'></i>
                    <span class="nav__text">Close</span>
                </a>
           </nav>
            </div> 
        </div>
    )
};