const Footer = () => {
    return (
      <footer>
          
          <img loading = 'lazy' src = {banner} alt = 'banner' style = {{width: '100%'}}></img>
          <div id = 'footer'>
              {/* <img loading = 'lazy' src = {gear3} alt = 'gear3' id = 'gear7'></img> */}
              
              <div id = 'copyright'>
                  <h1>
                      <img loading = 'lazy' src = {logo} alt = 'footerlogo' id = 'footerlogo'></img>
                      <gradient loading = 'lazy'>ClockHacks</gradient>
                  </h1>
                  <p>Copyright © 2022 ClockHacks</p>
                  <p id='footersocials'>
                      <a href = 'https://discord.gg/UKjQBdy26S' target = '_blank'><i class = 'bi bi-discord'></i></a>
                      <a href = 'https://github.com/ClockHacks' target = '_blank'><i class = 'bi bi-github'></i></a>
                      <a href = 'https://www.linkedin.com/company/clockhacks/' target = '_blank'><i class = 'bi bi-linkedin'></i></a>
                      <a href = 'https://www.instagram.com/clockhacks/' target = '_blank'><i class = 'bi bi-instagram'></i> </a>
                      <a href = 'https://www.twitch.tv/clockhacks/' target = '_blank'><i class = 'bi bi-twitch'></i> </a>
                      <a href = 'https://www.youtube.com/channel/UCTXw20G-JSnQE80tZmwUbwg' target = '_blank'><i class = 'bi bi-youtube'></i> </a>
                      <a href = 'https://clockhacks.devpost.com/' target = '_blank' class='flex items-center justify-center '><SiDevpost id = 'devposticonf'/></a>
                  </p>
              </div>
  
              <div>
                  <h2>NAVIGATION</h2>
                  <a href = '#about'>About</a>
                  <a href = '#clock'>Countdown</a>
                  <a href = '#schedule'>Schedule</a>
                  <a href = '#sponsors'>Sponsors</a>
                  <a href = '#team'>Team</a>
                  <a href = '#contact'>Contact</a>
              </div>
  
              <div>
                  <h2>LEGAL</h2>
                  <a target = '_blank' rel = 'noreferrer' onClick = {
                      () => {
                          window.scrollTo(0,0)
                      }
                  }>Back to Top</a>
                  <a href = 'https://github.com/ClockHacks/clockhacks-website/blob/main/LICENSE' target = '_blank' rel = 'noreferrer'>License</a>
                  <a href = 'https://mlh.io/' target = '_blank' rel = 'noreferrer'>Major League Hacking</a>
                  <a href = 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf' target = '_blank' rel = 'noreferrer'>MLH Code of Conduct</a>
                  <a href = 'https://drive.google.com/file/d/1yl3QcwDGCNNPabv4qlJwmaHEyJbUhIhg/view' target = '_blank' rel = 'noreferrer'>Sponsorship Package</a>
              </div>
  
  
          </div>
  
      </footer>
    )
  }
  
  export default Footer
  