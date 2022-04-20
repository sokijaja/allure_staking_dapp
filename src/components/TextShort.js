import PropTypes from 'prop-types'

TextShort.propTypes = {
  text: PropTypes.string,
  className:PropTypes.string
}

export default function TextShort({ text, className }) {
  return (
    <span className='flex'>
      <span className={` w-24 overflow-hidden text-ellipsis ${className}`}>
        {text}
      </span>
      <span className=''>{text?.slice(-2)}</span>
    </span>
  )
}