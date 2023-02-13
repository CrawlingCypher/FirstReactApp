import PropTypes from 'prop-types'

function Button({color, text, onAdd}) {
    
    // function onClick() {
    //     console.log('click')
    // }

    return (
        <div>
            <button onClick={onAdd} style={{backgroundColor: color}} className="btn">{text}</button>
        </div>

  )
}
Button.defaultProps = {
    color: 'steelblue'
}
Button.propTypes = {
    text: PropTypes.string,
}

export default Button