import { Route } from './components/Route/Route';
import { routes } from './components/Route/routes';
import { SideBar } from './components/Sidebar/SideBar';
import { AccordionPage } from './pages/AccordionPage/AccordionPage';
import { ButtonPage } from './pages/ButtonPage/ButtonPage';
import { CounterPage } from './pages/CounterPage/CounterPage';
import { DropdownPage } from './pages/DropdownPage/DropdownPage';
import { ModalPage } from './pages/ModalPage/ModalPage';
import { TablePage } from './pages/TablePage/TablePage';

function App() {
  return (
    <div className='container mx-5 grid grid-cols-6 gap-4 mt-4'>
      <SideBar />
      <div className='col-span-5 '>
        <Route path={routes.accordion}>
          <AccordionPage />
        </Route>
        <Route path={routes.home}>
          <DropdownPage />
        </Route>
        <Route path={routes.buttons}>
          <ButtonPage />
        </Route>
        <Route path={routes.modal}>
          <ModalPage />
        </Route>
        <Route path={routes.table}>
          <TablePage />
        </Route>
        <Route path={routes.counter}>
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
  );
}

export default App;
