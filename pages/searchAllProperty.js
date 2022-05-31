import { useState } from 'react'
import { useRouter } from 'next/router'
import { BsFilter } from 'react-icons/bs'
import Listings from '../components/Listings'
import { baseUrl, fetchApi } from '../utils/api'
import SearchFilter from '../components/SearchFilter'

const SearchAllProperty = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState('false')

  const router = useRouter()

  const page = Number(router.query.page) || 0

  return (
    <div className="w-full overflow-hidden bg-gray-100 pt-12 md:pt-24">
      <div
        className="flex cursor-pointer items-center justify-center space-x-2 border-b border-gray-200 bg-gray-900 p-2 text-lg font-bold "
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <h3 className="text-gray-100">Filter Properties</h3>
        <BsFilter className="pt-1 text-2xl text-blue-600" />
      </div>
      {searchFilters && <SearchFilter />}

      <h3 className="p-4 text-2xl font-bold uppercase text-gray-900">
        {router.query.type === 'for-sale'
          ? 'properties for sale'
          : 'properties for rent'}
      </h3>
      <div className="flex w-full justify-center">
        <div className="mx-48 grid h-full grid-cols-1 justify-items-center gap-y-4 md:gap-y-8 md:py-8 lg:mx-0 lg:w-8/12 lg:grid-cols-3 lg:gap-x-2">
          {properties?.map((property) => (
            <div className="" key={property.id}>
              <Listings
                title={property.title}
                baths={property.baths}
                area={property.area}
                isVerified={property.isVerified}
                externalID={property.externalID}
                coverPhoto={property.coverPhoto}
                price={property.price}
                rentFrequency={property.rentFrequency}
                rooms={property.rooms}
                purpose={
                  router.query.type === 'for-sale' ? 'for sale' : 'for rent'
                }
              />
            </div>
          ))}
        </div>
      </div>
      {properties.length === 0 && (
        <div className="flex items-center justify-center ">
          <h1 className="text-2xl">No Results found</h1>
        </div>
      )}
      <div className="flex w-full items-center justify-center space-x-8 py-4 text-gray-100 lg:py-0 lg:pb-8">
        <button
          className="rounded-lg bg-blue-600 px-2 py-0.5 text-xs uppercase disabled:bg-blue-400"
          onClick={() =>
            router.push(`/property/searchAllProperty?page=${page - 1}`)
          }
          disabled={page < 1}
        >
          prev
        </button>
        <button
          className="rounded-lg bg-blue-600 px-2 py-0.5 text-xs uppercase disabled:bg-blue-400"
          onClick={() =>
            router.push(`/property/searchAllProperty?page=${page + 1}`)
          }
        >
          next
        </button>
        <button
          className="rounded-lg bg-blue-600 px-2 py-0.5 text-xs uppercase disabled:bg-blue-400"
          onClick={() => router.push(`/property/searchAllProperty?page=0`)}
          disabled={page < 1}
        >
          first page
        </button>
      </div>
    </div>
  )
}

export default SearchAllProperty

export async function getServerSideProps({ query }) {
  const purpose = query.type || 'for-rent'
  const rentFrequency = query.rentFrequency || 'yearly'
  const minPrice = query.minPrice || '0'
  const maxPrice = query.maxPrice || '1000000'
  const roomsMin = query.roomsMin || '0'
  const bathsMin = query.bathsMin || '0'
  const sort = query.sort || 'price-desc'
  const areaMax = query.areaMax || '35000'
  const locationExternalIDs = query.locationExternalIDs || '5002'
  const categoryExternalID = query.categoryExternalID || '4'
  const page = query.page || '0'
  const hitsPerPage = '9'

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&hitsPerPage=${hitsPerPage}&page=${page}`
  )

  return {
    props: {
      properties: data?.hits,
    },
  }
}
