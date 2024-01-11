import HighValueServices from './components/HighValueServices/index.jsx';
import HireTheBestIT from './components/HireTHeBestIT/index.jsx';
import ITViecDifferent from './components/ITViecDifferent/index.jsx';
import TopEmPloyers from './components/TopEmPloyers/index.jsx';
import Contact from './components/Contact/index.jsx';
import './styles.scss';

const Employers = () => {
  return (
    <main>
      <div className='flex-grow-1'>
        <section className='employer-landing-container'>
          <HireTheBestIT />
          <ITViecDifferent />
          <HighValueServices />
          <TopEmPloyers />
          <Contact />
        </section>
      </div>
    </main>
  );
};

export default Employers;
