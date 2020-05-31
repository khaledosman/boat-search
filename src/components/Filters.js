import React, { memo } from 'react'
import './Filters.css'
/*
{
  inputType: "radio",
  title: "boat length",
  onChange: e => {

  },
  options: [{
    title: "<15"
  }, {
    title: ">=15"
  }, */
export default memo(function Filters (props) {
  const { filters, activeFilters, onReset } = props
  console.log({ activeFilters })
  return (
    <div className='filters-container'>
      <div className='filters'>
        {filters.map(filter => (
          <div key={filter.id} className='filter'>
            <label className='filter-label'>{filter.title}</label>
            {filter.options.map(option => (
              <div key={option.title}>
                <input type={filter.inputType} onChange={filter.handleChange} id={filter.id} name={filter.title} value={option.title} checked={activeFilters[filter.id] === option.title} />
                <label htmlFor={option.title}>{option.title}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='reset-btn'>
        <button className='filter-reset-btn' style={{ float: 'right' }} type='button' onClick={onReset}> Reset</button>
      </div>
    </div>
  )
})
