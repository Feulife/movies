function Footer() {
  return (
    <footer className="page-footer deep-purple darken-1">
      <div className="footer-copyright">
        <div className="container center" >
          © {new Date().getFullYear()} Built using{" "}
          <a style={{ fontWeight: "600" }}
            href="https://omdbapi.com/"
            target="_blank"
            rel="noreferrer"
          >
            OmdbApi
          </a>
          ,{" "}
          <a style={{ fontWeight: "600" }}
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            React
          </a>{" "}
          and{" "}
          <a style={{ fontWeight: "600" }}
            href="https://materializecss.com/"
            target="_blank"
            rel="noreferrer"
          >
            Material Design
          </a>
          .
        </div>
      </div>
    </footer>
  );
}

export { Footer };
