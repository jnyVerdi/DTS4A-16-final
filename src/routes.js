import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from './App';
import Home from './containers/Home';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import Search from './containers/Search';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='sign_up' element={<SignUp />} />
      <Route path='sign_in' element={<SignIn />} />
      <Route path='search/:query' element={<Search />} />
      {/* <Route path="/" element={<MovieList />} />
    <Route path="about" element={<About />}>
      <Route path="description" element={<Box sx={{ mt: 10 }}>Provides movies in your hand</Box>} />
      <Route path="services" element={<Box sx={{ mt: 10 }}>Streaming movies, Indonesian film, and film review.</Box>} />
    </Route>
    <Route path="indonesian" element={<Box sx={{ mt: 10 }}>Halaman indonesian</Box>} />
    <Route path="pricing" element={
      <PrivateComponent>
        <Pricing />
      </PrivateComponent>
    } />
    <Route path="subscribed/:plan" element={<Subscribed />} />
    <Route path="login" element={
      <PrivateComponent loginOnly={false}>
        <Login />
      </PrivateComponent>
    } />
    <Route path="register" element={
      <PrivateComponent loginOnly={false}>
        <Register />
      </PrivateComponent>
    } />
    <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

export default router;
