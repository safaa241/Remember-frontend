import React from 'react';

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/Home">Home </a>
                        </li>
      <li class="nav-item">
        <a class="nav-link" href="/calendar">Calendrier</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/profil">Profil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
    )
}
export default Navbar;