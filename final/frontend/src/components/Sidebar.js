export function Sidebar({ changePage }) {
  function setActiveNavLink(id) {
    const navLinkElements = document.getElementsByClassName("nav-link");
    for (const navLinkElement of navLinkElements)
        navLinkElement.classList.remove("active");
    const activeNavLink = document.getElementById(id);
    activeNavLink.classList.add("active");
  }
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              id="Benchmark"
              className="nav-link active"
              aria-current="page"
              href="#"
              onClick={() => {
                changePage("Benchmark");
                setActiveNavLink("Benchmark")
              }}
            >
              <span data-feather="home" className="align-text-bottom"></span>
              Benchmark
            </a>
          </li>
          <li className="nav-item">
            <a
              id="MyResults"
              className="nav-link"
              href="#"
              onClick={() => {
                changePage("MyResults");
                setActiveNavLink("MyResults")
              }}
            >
              <span data-feather="file" className="align-text-bottom"></span>
              My Results
            </a>
          </li>
          <li className="nav-item">
            <a
              id="GlobalResults"
              className="nav-link"
              href="#"
              onClick={() => {
                changePage("GlobalResults");
                setActiveNavLink("GlobalResults")
              }}
            >
              <span
                data-feather="shopping-cart"
                className="align-text-bottom"
              ></span>
              Global Results
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
