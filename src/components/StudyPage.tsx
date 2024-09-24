import React, { useContext } from 'react'
import { Studies } from '../types'
import { StudyContext } from '../context/StudyContext'

const StudyPage = () => {
  const { studies } = useContext(StudyContext)

  return (<div className="study title-text">
    <div className='about-tabs'>
      {studies.map((s: Studies) => {
        return (
          <div className="study-card">
            <span>{s.institution}:</span>
            <span> {s.study}</span>
            <div className='fs-small mt-3'>{s.year}</div>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default StudyPage