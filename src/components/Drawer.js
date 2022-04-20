import PropTypes from 'prop-types';

Drawer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  side: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  children: PropTypes.node,
  className: PropTypes.string,
}



export default function Drawer({ open, onClose, side = 'left', children, className }) {

  const classes = getClasses(side);
  return (
    <div className={` overflow-x-hidden overflow-y-auto fixed inset-0 z-40 min-w-0 ${open ? 'min-w-[280px]' : 'hidden'} `}>
      <div className="opacity-80 fixed inset-0 bg-black" onClick={onClose} />
      <div className={` absolute transition-all z-50  ${classes} ${className}`} onClick={()=>setTimeout(onClose,300) }>
        {children}
      </div>
    </div>
  )
}

const getClasses = (side) => {
  let classNames = "";
  if (side === 'left')
    classNames = `left-0 top-0 bottom-0 `
  else if (side === 'right')
    classNames = `right-0 top-0 bottom-0`
  else if (side === 'top')
    classNames = `left-0 top-0 right-0`
  else if (side === 'bottom')
    classNames = `left-0 right-0 bottom-0`
  return classNames
}