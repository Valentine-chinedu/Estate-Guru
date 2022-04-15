import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { filterData, getFilterValues } from '../utils/filterData'

const SearchFilter = () => {
  const [filters, setFilters] = useState(filterData)

  const router = useRouter()

  const searchProperties = (filterValues) => {
    const path = router.pathname
    const { query } = router

    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })

    router.push({ pathName: path, query })
  }

  return (
    <div className="flex w-full flex-wrap justify-center bg-gray-900 p-4">
      {filters.map((filter) => (
        <div key={filter.queryName}>
          <h3 className="pr-2 pb-1 text-sm text-gray-100">
            {filter.placeholder}
          </h3>
          <select
            className="mr-2 rounded-md text-sm text-gray-900"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  )
}

export default SearchFilter
