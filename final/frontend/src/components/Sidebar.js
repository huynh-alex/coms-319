export function Sidebar({ changePage, sidebarClickable }) {
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
          <h2>
              Speede.com
          </h2>
          <hr></hr>
          <li className="nav-item">
            <a
              id="Benchmark"
              className="nav-link active"
              aria-current="page"
              href="#"
              onClick={() => {
                if (sidebarClickable) {
                  changePage("Benchmark");
                  setActiveNavLink("Benchmark");
                }
              }}
            >
              <span data-feather="home" className="align-text-bottom"></span>
              Benchmark
            </a>
          </li>
          <hr></hr>
          <li className="nav-item">
            <a
              id="MyResults"
              className="nav-link"
              href="#"
              onClick={() => {
                if (sidebarClickable) {
                  changePage("MyResults");
                  setActiveNavLink("MyResults");
                }
              }}
            >
              <span data-feather="file" className="align-text-bottom"></span>
              My Results
            </a>
          </li>
          <hr></hr>
          <li className="nav-item">
            <a
              id="GlobalResults"
              className="nav-link"
              href="#"
              onClick={() => {
                if (sidebarClickable) {
                  changePage("GlobalResults");
                  setActiveNavLink("GlobalResults");
                }
              }}
            >
              <span
                data-feather="shopping-cart"
                className="align-text-bottom"
              ></span>
              Global Results
            </a>
          </li>
          <hr></hr>
          <li className="nav-item">
            <a
              id="AboutUs"
              className="nav-link"
              href="#"
              onClick={() => {
                if (sidebarClickable) {
                  changePage("AboutUs");
                  setActiveNavLink("AboutUs");
                }
              }}
            >
              <span
                data-feather="about"
                className="align-text-bottom"
              ></span>
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
