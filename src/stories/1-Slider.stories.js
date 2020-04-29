/* eslint-disable no-alert */
import * as React from "react";
import styles from './slider.module.css';

import Slider from "../index";
import { useState } from "react";

export default {
  title: 'react-md-slider',
  component: Slider,
  parameters: {
    info: { inline: true },
  }
};

export const Installation = () => <div>
  Installation
</div>

Installation.story = {
  parameters: {
    info: { inline: false },
  }
};


export const Default = () => {
  const [value, setValue] = useState(10);

  return (
    <div className={styles.sliderBlock}>
      <Slider
        onChange={setValue}
        value={value}
        max={200}
        min={10}
        step={10}
      />
    </div >
  );
};


export const WithHighlight = () => {
  const [value, setValue] = useState(10);

  return (
    <div className={styles.sliderBlock}>
      <Slider
        onChange={setValue}
        value={value}
        max={200}
        min={10}
        step={10}
        highlighted
      />
    </div >
  );
};

const accentOptions = ['red', 'green', 'amber'];
export const AccentOptions = () => {
  const [value, setValue] = useState({
    red: 120,
    green: 170,
    amber: 50
  });

  const onSetValue = color => val => {
    setValue(state => ({
      ...state,
      [color]: val
    }));
  };

  return <div>
    {accentOptions.map(color =>
      <div className={styles.sliderBlock}>
        <Slider
          onChange={onSetValue(color)}
          value={value[color]}
          max={200}
          min={10}
          step={10}
          highlighted
          accent={color}
        />
      </div >)}
  </div>
};


export const Disabled = () => {
  const [value, setValue] = useState(50);

  return (
    <div className={styles.sliderBlock}>
      <Slider
        onChange={setValue}
        value={value}
        max={200}
        min={10}
        step={10}
        highlighted
        disabled
      />
    </div >
  );
};


export const CustomStyled = () => {
  const [value, setValue] = useState(50);

  return (
    <div className={styles.sliderBlock}>
      <Slider
        onChange={setValue}
        value={value}
        max={200}
        min={10}
        step={10}
        highlighted
        classes={{
          container: styles.container,
          selectedArea: styles.selectedArea,
          slider: styles.slider
        }}
      />
    </div>);
};

export const Labeled = () => {
  const [value, setValue] = useState(50);

  return (
    <div className={styles.sliderBlock}>
      <Slider
        onChange={setValue}
        value={value}
        max={200}
        min={10}
        step={10}
        highlighted
        label="React Slider"
      />
    </div>);
};