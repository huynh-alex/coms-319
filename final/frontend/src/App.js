import "./App.css";

import { Benchmark } from "./pages/Benchmark";
import { Orders } from "./pages/Orders.js";
import { Sidebar } from "./Sidebar";
import { Products } from "./pages/Products.js";
import { Customers } from "./pages/Customers.js";
import { Reports } from "./pages/Reports.js";
import { Integrations } from "./pages/Integrations.js";
import { CurrentMonth } from "./pages/Current-month.js";
import { LastQuarter } from "./pages/Last-quarter.js";
import { Social } from "./pages/Social-engagement.js";
import { Sale } from "./pages/Year-end-sale.js";
import { Testing } from "./pages/Testing.js";
import { GlobalResults } from "./pages/GlobalResults";

function App() {

  let Component
  switch  (window.location.pathname) {
    case "/":
      Component = Benchmark
    break
    case "/Orders":
      Component = Orders
      break
    case "/Products":
      Component = Products
      break
    case "/Customers":
      Component = Customers
      break
    case "/Reports":
      Component = Reports
      break
    case "/Integrations":
      Component = Integrations
      break
    case "/Current-month":
      Component = CurrentMonth
      break
    case "/Last-quarter":
      Component = LastQuarter
      break
    case "/Social":
      Component = Social
      break
    case "/Sale":
      Component = Sale
      break
    case "/Testing":
      Component = Testing
      break
    case "/GlobalResults":
      Component = GlobalResults
      break

  }
  return (
    <div className="container-fluid">
      <div className="row">
          <Sidebar/>
          <Component />
      </div>
    </div>
  )
}

export default App;
