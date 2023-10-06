import React from 'react'

export const Th = ({title , className}) => {
  return (
    <th className={`th py-2 ${className}`}>{title}</th>
  )
}
