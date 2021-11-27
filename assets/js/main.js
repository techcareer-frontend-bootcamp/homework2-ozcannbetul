/*==================== SHOW MENU MOBILE ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav    = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'menun')

/*==================== REMOVE MOBILE MENU ====================*/
const navLink = document.querySelectorAll('.a_link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('menun')
    // When we click on each nav__link, we remove the show class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== Play song ====================*/
const playSong = (icon, song) => {
    
    const mySongIcon = document.getElementById(icon),
          mySong = document.getElementById(song)
  
    if(mySong && mySongIcon) {
        mySongIcon.addEventListener('click', () => {
            if(mySong.paused) {
                mySong.play()
                mySongIcon.classList.remove('bx-play-circle') 
                mySongIcon.classList.add('bx-pause-circle') 
            } else {
                mySong.pause()
                mySongIcon.classList.remove('bx-pause-circle') 
                mySongIcon.classList.add('bx-play-circle') 
            }
        })
    }
}

playSong('song-icon', 'mySong')
