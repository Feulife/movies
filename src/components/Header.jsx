function Header() {
  return (
    <nav className="deep-purple darken-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo " style={{ fontWeight: "600" }}>
        MOVIES
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/Feulife/movies"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
