import PropTypes from 'prop-types';

Dialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
}



export default function Dialog({ open, onClose, children, className }) {

  return (
    <div className={` overflow-x-hidden overflow-y-auto flex items-center justify-center inset-0 z-40 ${open ? 'fixed' : 'hidden'} `}>
      <div className=" fixed inset-0 bg-black/80" onClick={onClose} />
      <div className={`transition-all z-50  ${className}`} >
        {children}
      </div>
    </div>
  )
}