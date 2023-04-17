export function Sidebar({ changePage }) {
  return (
    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              onClick={changePage("Benchmark")}
            >
              <span data-feather="home" class="align-text-bottom"></span>
              Benchmark
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={changePage("MyResults")}>
              <span data-feather="file" class="align-text-bottom"></span>
              My Results
            </a>
          </li>
          <li class="nav-item">
          <a class="nav-link" onClick={changePage("GlobalResults")}>
              <span
                data-feather="shopping-cart"
                class="align-text-bottom"
              ></span>
              All Results
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
