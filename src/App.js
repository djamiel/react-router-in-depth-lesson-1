import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Careers, { careersLoader } from './pages/careers/Careers'
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';

// layouts
import Rootlayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import NotFound from './pages/NotFound';
import CareersLayout from './layouts/CareersLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact></Contact>} />
        </Route>

        <Route path="careers" element={<CareersLayout />}>
          <Route 
            index 
            element={<Careers />} 
            loader={careersLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App
