import React from 'react'

const Input = ({style, onChange, ...otherProps}) => (
  <input
    {...otherProps}
    style={{
      width: '100%',
      display: 'block',
      border: '1px solid #ddd',
      borderRadius: 3,
      padding: '4px 6px',
      fontSize: '1em',
      ...style,
    }}
    onChange={e => onChange(e.target.value)}
  />
)

export default Input