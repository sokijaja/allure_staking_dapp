import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// ----------------------------------------------------------------------

Image.propTypes = {
  disabledEffect: PropTypes.bool,
  effect: PropTypes.string,
  ratio: PropTypes.number,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default function Image({ ratio, effect = 'blur', alt = 'lazy-image', className, ...other }) {
  if (ratio) {
    return (

      <span className={`relative overflow-hidden block w-full  leading-0 border border-transparent ${className}`}
        style={{ paddingTop: `${ratio * 100}%` }} >
        <LazyLoadImage
          wrapperClassName='absolute inset-0 bg-cover'
          className='object-cover w-full h-full'
          {...other}
          alt={alt}
          effect={effect}
          placeholderSrc="/images/common/img_placeholder.svg"
        />
      </span>
    );
  }
  return (
    <span className={`overflow-hidden block  h-auto leading-0 border border-transparent ${className}`} >
      <LazyLoadImage
        wrapperClassName='bg-cover w-full h-full'
        className='object-cover w-full h-full'
        {...other}
        effect={effect}
        placeholderSrc="/images/common/img_placeholder.svg"
      />
    </span>

  );
}
