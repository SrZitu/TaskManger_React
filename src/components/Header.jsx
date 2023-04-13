import PropTypes from 'prop-types';
import Buttons from './Buttons';
const Header = ({title}) => {
  return (
    <header className='header'>
      <h2>{title}</h2>
     <Buttons color="green" text="add"></Buttons>
    </header>
  )
}
Header.defaultProps={
    title:"Task Tracker"
}
//prop type can be fixed and validate like this
Header.propTypes={
  title:PropTypes.string.isRequired,
}

// const headingStyle={
//   color:'red',
//   background:'yellow'
// }

export default Header
