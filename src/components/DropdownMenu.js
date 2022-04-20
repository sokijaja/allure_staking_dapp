import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

DropdownMenu.propTypes = {
  summary: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
}

export default function DropdownMenu({ summary, children, className, }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`relative`}>
      <div className={`flex items-center justify-between gap-2 ${className}`} onClick={() => setToggle(!toggle)}>
        {summary}
        <Icon icon='fluent:chevron-down-12-filled'  width={16} height={16} rotate={toggle ? 2 : 0} />
      </div>
      {toggle &&
        <div className='absolute top-full right-0 z-50' onClick={() => setToggle(!toggle)}>
          {children}
        </div>
      }
    </div>
  )
}