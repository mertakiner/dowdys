import React from "react";

export default function Header() {
  return (
    <div className="container">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          Dowdy's Kitchen
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/about">
                Hakkımızda <span class="sr-only">(current)</span>
              </a>
            </li>
            {/* <li class="nav-item active">
              <a class="nav-link" href="/">
                İşlerimiz
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
