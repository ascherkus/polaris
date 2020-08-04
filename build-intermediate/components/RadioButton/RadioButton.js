import React, { useRef, useState } from 'react';
import { useUniqueId } from '../../utilities/unique-id';
import { useFeatures } from '../../utilities/features';
import { useToggle } from '../../utilities/use-toggle';
import { classNames } from '../../utilities/css';
import { Choice, helpTextID } from '../Choice';
import styles from './RadioButton.scss';
export function RadioButton({ ariaDescribedBy: ariaDescribedByProp, label, labelHidden, helpText, checked, disabled, onChange, onFocus, onBlur, id: idProp, name: nameProp, value, }) {
    const id = useUniqueId('RadioButton', idProp);
    const name = nameProp || id;
    const inputNode = useRef(null);
    const [keyFocused, setKeyFocused] = useState(false);
    const { newDesignLanguage } = useFeatures();
    const { value: mouseOver, setTrue: handleMouseOver, setFalse: handleMouseOut, } = useToggle(false);
    const handleKeyUp = () => {
        !keyFocused && setKeyFocused(true);
    };
    const handleBlur = () => {
        onBlur && onBlur();
        setKeyFocused(false);
    };
    function handleChange({ currentTarget }) {
        onChange && onChange(currentTarget.checked, id);
    }
    const describedBy = [];
    if (helpText) {
        describedBy.push(helpTextID(id));
    }
    if (ariaDescribedByProp) {
        describedBy.push(ariaDescribedByProp);
    }
    const ariaDescribedBy = describedBy.length
        ? describedBy.join(' ')
        : undefined;
    const inputClassName = classNames(styles.Input, newDesignLanguage && keyFocused && styles.keyFocused);
    const wrapperClassName = classNames(styles.RadioButton, newDesignLanguage && styles.newDesignLanguage);
    const iconMarkup = !newDesignLanguage && <span className={styles.Icon}/>;
    const backdropClassName = classNames(styles.Backdrop, mouseOver && styles.hover);
    return (<Choice label={label} labelHidden={labelHidden} disabled={disabled} id={id} helpText={helpText} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <span className={wrapperClassName}>
        <input id={id} name={name} value={value} type="radio" checked={checked} disabled={disabled} className={inputClassName} onChange={handleChange} onFocus={onFocus} onKeyUp={handleKeyUp} onBlur={handleBlur} aria-describedby={ariaDescribedBy} ref={inputNode}/>
        <span className={backdropClassName}/>
        {iconMarkup}
      </span>
    </Choice>);
}