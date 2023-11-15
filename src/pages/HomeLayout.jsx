import { Outlet, useNavigation } from 'react-router-dom';
import Loading from '../components/1_global/Loading';
import Header from '../components/2_navigation/Header';
import Navbar from '../components/2_navigation/Navbar';
import Footer from '../components/2_navigation/Footer';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isNavigationLoading = navigation.state === 'loading';
  console.log(navigation.state);
  return (
    <>
      <nav>
        <Header />
        <Navbar />
      </nav>
      {isNavigationLoading ? (
        <Loading />
      ) : (
        <section className="p-20 min-h-screen bg-background">
          <Outlet />
        </section>
      )}
      <Footer />
    </>
  );
};
export default HomeLayout;
