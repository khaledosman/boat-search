import React, { useState, useEffect, memo } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import Boat from './Boat'
import Filters from './Filters'
const GET_BOATS = gql`
query getBoats($active: Boolean!) {
  getBoats(input:{
    active:$active
  }) {
    id
    name
    type
    year
    reviews {
      total
      score
    }
    marina
    locality
    country
    skipper
    active
    cabins
    guests
    length
    price
    imageUrl
  }
}
`;



const Search = memo(props => {
  
  const filters = [{
    id:"length",
    inputType: "radio",
    title: "boat length",
    handleChange: e => {
      console.log(e.target.id)
      setActiveFilters({...activeFilters, [e.target.id]: e.target.value})
    },
    options: [{
      title: "<15",
      checked: false,
      match: boat => {
        return boat.length < 15
      }
    }, {
      title: ">=15",
      checked: false,
      match: boat => {
        return boat.length >= 15
      }
    }]
  },
  {
    id:"year",
    inputType: "radio",
    title: "boat year",
    handleChange: e => {
      console.log(e.target.id)
      setActiveFilters({...activeFilters, [e.target.id]: e.target.value})
    },
    options: [{
      title: "<2010",
      checked: false,
      match: boat => {
        return boat.year < 2010
      }
    }, {
      title: ">=2010",
      checked: false,
      match: boat => {
        return boat.year >= 2010
      }
    }]
  }]
  const [activeFilters, setActiveFilters] = useState({
    length: null,
    year: null
  })
  const { loading, error, data } = useQuery(GET_BOATS, {
    variables: { active: true },
  });

  function handleReset() {
    setActiveFilters({length: null, year:null})
  }

  function applyFilters(boats, activeFilters, filters) {
    return boats.filter(boat => {
      return Object.keys(activeFilters).every(activeFilter => {
        const filter = filters.find(filter => filter.id === activeFilter)
        const filterOption = filter && filter.options.find(option => option.title === activeFilters[activeFilter])
        return activeFilters[activeFilter] === null || (filterOption && filterOption.match(boat))
      })
  
    })
  }

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;
  return (
    <>
      <Filters filters={filters} activeFilters={activeFilters} onReset={handleReset}/>
      <div>
        {applyFilters(data.getBoats, activeFilters, filters).map(boat =>
          <Boat boat={boat} key={boat.id} />
        )}
      </div>
    </>
  )
})


export default Search
