import React, { useState } from 'react'
import uniqueId from 'lodash/uniqueId'
import styles from './Input.module.scss'

export const Input = (props) => {
  const [id] = useState(uniqueId('input-id-'))
  const [focus, setFocus] = useState(false)

  const getClasses = () => {
    let resut = styles.default
    resut = props.error ? resut + ` ${styles.error}` : resut
    resut = props.disabled ? resut + ` ${styles.disabled}` : resut
    resut = focus ? resut + ` ${styles.focus}` : resut
    resut = props.size === 'sm' ? resut + ` ${styles.sizeSm}` : resut
    resut = props.fullWidth ? resut + ` ${styles.fullWidth}` : resut

    return resut
  }

  const getLabelText = () => (
    props.labelText ? props.labelText : 'Label'
  )

  const getPlaceholder = () => (
    props.placeholder ? props.placeholder : 'Placeholder'
  )

  const renderHelperText = () => (
    props.helperText && <span>{props.helperText}</span>
  )

  const renderStartIcon = () => (
    props.startIcon && <i className={`material-icons ${styles.startIcon}`}>{props.startIcon}</i>
  )
  const renderEndIcon = () => (
    props.endIcon && <i className={`material-icons ${styles.endIcon}`}>{props.endIcon}</i>
  )
  return (
    <div className={getClasses()} >
      <div className={styles.input}>
        {renderStartIcon()}
        {!props.multiline
          ? <input
            id={id}
            type='text'
            disabled={props.disabled}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={getPlaceholder()}
            defaultValue={props.value}
          />
          : <textarea
            id={id}
            disabled={props.disabled}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={getPlaceholder()}
            defaultValue={props.value}
            rows={props.row}
          >
          </textarea>
        }
        {renderEndIcon()}
      </div>
      <label
        htmlFor={id}
      >
        {getLabelText()}
      </label>
      {renderHelperText()}
    </div>
  )
}