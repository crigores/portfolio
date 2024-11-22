import Cards from './Cards'

export default function Products() {
  return (
    <div className='py-10 bg-gray-700 text-white px-16'>
      <div className="text-center">
        <h2 className='text-5xl font-semibold mb-10'>Productos</h2>

      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 py-3  ">
        <div className="rounded-xl"><Cards /></div>
        <div className="rounded-xl"><Cards /></div>
        <div className="rounded-xl"><Cards /></div>
        <div className="rounded-xl"><Cards /></div>

        <div className="flex justify-center w-full">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="animate-bounce size-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
        </div>

        <svg className=" w-6 h-6 ...">

        </svg>
      </div>
    </div>
  )
}
