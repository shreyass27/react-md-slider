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
    {/* Label displayed if 'label' is passed. */}
    {label && <label className={`${styles.label} ${classes.label}`} htmlFor={id}>{label}</label>}

    <div className={containerClasses}>

      {/* Section to highlight select range */}
      {highlighted && <div className={`${styles.selectedArea} ${classes.selectedArea}`} style={{ width: getHighLightWidth() }}></div>}

      <input type="range"
        disabled={disabled}
        onChange={e => onChange(+e.target.value)}
        value={value}
        min={min}
        max={max}
        step={step}
        className={`${styles.slider} ${classes.slider}`}
        tabIndex={tabIndex}
        id={id} />

    </div>
  </div>;
}

export default Slider;

Slider.propTypes = {
  /**
    * The function that will be executed when the slider value is changed.
    * Returns current integer value. 
    */
  onChange: PropTypes.func.isRequired,

  /**
    * Integer value to display current position or state of slider.
    */
  value: PropTypes.number.isRequired,

  /**
    * Min range value of slider.
    */
  min: PropTypes.number.isRequired,

  /**
    * Max range value of slider.
    */
  max: PropTypes.number.isRequired,

  /**
    * Size of each step value of slider.
    */
  step: PropTypes.number,

  /**
    * To disable slider actions.
    * Passing "true" will disable the slider.
    */
  disabled: PropTypes.bool,

  /**
    * Passing "true" will highlight selected range.
    */
  highlighted: PropTypes.bool,

  /**
    * ID applied to slider.
    */
  id: PropTypes.string,

  /**
    * Accent options provided by slider. Default set to 'indigo'.
    * Only one of 'red' | 'green' | 'amber' values can be passed
    */
  accent: PropTypes.oneOf(['red', 'green', 'amber']),

  /**
    * Label to be displayed above slider.
    */
  label: PropTypes.string,

  /**
   * A Jss Object used to override or extend the styles applied.
   */
  classes: PropTypes.shape({
    /**
     * Style applied to the root.
     */
    root: PropTypes.string,

    /**
     * Style applied to the slider container.
     */
    container: PropTypes.string,

    /**
     * Style applied to the slider label.
     */
    label: PropTypes.string,

    /**
     * Style applied to the highlighted/selected range of slider.
     */
    selectedArea: PropTypes.string,

    /**
      * Style applied to the main slider.
      */
    slider: PropTypes.string
  }),

  /**
    * Tab Index applied to slider.
    */
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