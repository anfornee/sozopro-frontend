import React, { useState } from 'react'

const ContainerTitle = () => {
  const [classList, setClassList] = useState('title-design-element')

  const handleAddClass = () => {
    if (classList === 'title-design-element' || classList === 'title-design-element title-design-element-right') {
      setClassList('title-design-element title-design-element-left')
    } else {
      setClassList('title-design-element title-design-element-right')
    }
  }

  return (
    <div className='container-title'>
      <h1>Share the process</h1>
      <div className={classList} onClick={handleAddClass} />
    </div>
  )
}

export default ContainerTitle
