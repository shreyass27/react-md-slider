import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const thumbWidth = 12;

const Slider = function ({
  id,
  onChange,
  value,
  min,
  max,
  step,
  disabled,
  label,
  accent,
  classes,
  highlighted,
  tabIndex
}) {

  // To drive width of selectedArea to highlight if "highlighted" prop is true 
  function getHighLightWidth() {
    if (highlighted) {
      let highLightWidth = ((value - min) / (max - min));

      if (highLightWidth > 0.30) {
        return `calc(${highLightWidth * 100}% - ${thumbWidth * highLightWidth}px)`
      } else {
        return `${(highLightWidth * 100)}%`;
      }
    }

    return 0;
  };

  const containerClasses = [
    styles.slidecontainer,
    accent ? styles[accent] : '',
    disabled ? styles.disabled : '',
    classes.container
  ].join(' ');

  return <div className={classes.root}>
    {label && <label className={classes.label} htmlFor={id}>{label}</label>}
    <div className={containerClasses}>
      {highlighted && <div className={styles.selectedArea} style={{ width: getHighLightWidth() }}></div>}
      <input type="range"
        disabled={disabled}
        onChange={e => onChange(+e.target.value)}
        value={value}
        min={min}
        max={max}
        step={step}
        className={styles.slider}
        tabIndex={tabIndex}
        id={id} />
    </div>
  </div>;
}

export default Slider;

Slider.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  highlighted: PropTypes.bool,
  id: PropTypes.string,
  accent: PropTypes.oneOf(['red', 'green', 'amber']),
  label: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
    container: PropTypes.string,
    label: PropTypes.string
  }),
  tabIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

Slider.defaultProps = {
  classes: {},
  disabled: false,
  step: 1,
  highlighted: false
}