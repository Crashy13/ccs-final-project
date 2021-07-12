import React from 'react'

export default function Dropdown() {
  const [items] = React.useState([
    {label: "UNSTARTED", value: "UNSTARTED"},
    {label: "PLAYING", value: "PLAYING"},
    {label: "COMPLETED", value: "COMPLETED"},
  ]);
  return(
    <select>
      {items.map(item => (
      <option key={item.value} value={item.value}>{item.label}</option>
      ))}
    </select>
  )
}
