import { Outlet, useNavigation } from 'react-router-dom';
import Loading from '../components/1_global/Loading';
import Header from '../components/2_navigation/Header';
import Navbar from '../components/2_navigation/Navbar';
import Footer from '../components/2_navigation/Footer';

const HomeLayout = ({ outlet }) => {
  const navigation = useNavigation();
  const isNavigationLoading = navigation.state === 'loading';

  // width of navbar set in layout
  // used in inline-styles for navbar width and margin-left for header, footer and main content
  const navBarWidth = '8rem';

  return (
    <>
      <Navbar navBarWidth={navBarWidth} />
      <nav>
        <Header navBarWidth={navBarWidth} />
      </nav>

      {isNavigationLoading ? (
        <Loading />
      ) : (
        <main
          style={{ marginLeft: navBarWidth }}
          className={`p-20 min-h-screen bg-background`}
        >
          {outlet ? outlet : <Outlet />}
        </main>
      )}
      <Footer navBarWidth={navBarWidth} />
    </>
  );
};
export default HomeLayout;
