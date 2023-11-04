import About from "./pages/about";
import Login from "./pages/login";
import Signup from "./pages/signup";
import NotFound from "./pages/notFound";
import Dashboard from "./pages/dashboard";
import Transaction from "./pages/transaction";
import Invoices from "./pages/invoices";
import Wallets from "./pages/wallets";
import Settings from "./pages/settings";
import Helps from "./components/helps";
import NewInvoices from "./pages/newinvoices";
const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  };
};

const routes = {
  login: routeItem(1, 'login', "/", Login),
  signup: routeItem(2, 'signup', "/signup", Signup),
  about: routeItem(3, 'about', "/about", About),
  notFound: routeItem(4, 'notFound', "*", NotFound),
  dashboard:routeItem(5,'dashboard','/dashboard',Dashboard),
  transaction:routeItem(5,'transaction','/transaction',Transaction),
  invoices:routeItem(5,'invoices','/invoices',Invoices),
  wallets:routeItem(5,'wallets','/wallets',Wallets),
  settings:routeItem(5,'settings','/settings',Settings),
  helps:routeItem(5,'helps','/helps',Helps),
  newinvoices:routeItem(5,'newinvoices','/newinvoices',NewInvoices),
 
};

const routeArr = Object.values(routes);

export { routes, routeArr };
