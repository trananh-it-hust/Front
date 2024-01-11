import Header from './Header';
import PropTypes from 'prop-types';
import './styles.scss';

const HeaderOnly = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};
HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderOnly;
