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
      class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a
              id="Benchmark"
              class="nav-link active"
              aria-current="page"
              href="#"
              onClick={() => {
                changePage("Benchmark");
                setActiveNavLink("Benchmark")
              }}
            >
              <span data-feather="home" class="align-text-bottom"></span>
              Benchmark
            </a>
          </li>
          <li class="nav-item">
            <a
              id="MyResults"
              class="nav-link"
              href="#"
              onClick={() => {
                changePage("MyResults");
                setActiveNavLink("MyResults")
              }}
            >
              <span data-feather="file" class="align-text-bottom"></span>
              My Results
            </a>
          </li>
          <li class="nav-item">
            <a
              id="GlobalResults"
              class="nav-link"
              href="#"
              onClick={() => {
                changePage("GlobalResults");
                setActiveNavLink("GlobalResults")
              }}
            >
              <span
                data-feather="shopping-cart"
                class="align-text-bottom"
              ></span>
              Global Results
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
