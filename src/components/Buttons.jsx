import PropTypes from 'prop-types'

const Buttons = ({color,text}) => {
  return (
    <div>
      <button className="btn" style={{backgroundColor:color}}>{text}</button>
    </div>
  )
}
Buttons.defaultProps={
    color:'steelblue'
}
Buttons.propTypes={
    color:PropTypes.string,
    text:PropTypes.string
}

export default Buttons

