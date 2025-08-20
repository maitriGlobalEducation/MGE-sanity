import React from 'react'
import { set, unset } from 'sanity'

export default function CommaKeywordsInput(props) {
  const { value = [], onChange } = props

  const handleChange = (e) => {
    const keywords = e.target.value
      .split(',')
      .map(k => k.trim())
      .filter(Boolean)

    if (keywords.length > 0) {
      onChange(set(keywords)) // save array
    } else {
      onChange(unset()) // clear field
    }
  }

  return (
    <input
      type="text"
      placeholder="Enter comma separated keywords"
      defaultValue={value.join(', ')}
      onBlur={handleChange}
      style={{
        padding: '8px',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '6px'
      }}
    />
  )
}
