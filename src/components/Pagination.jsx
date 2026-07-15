import React from 'react'

export default function Pagination({handlePageChange, page, totalPages}) {
  return (
    <div className='mt-10 space-x-4 text-center flex justify-center'>
 <button className={`bg-red-500 ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-600'} text-white px-4 py-2 rounded-md`} onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
  
  <h4 className='text-lg font-semibold'>{page} of {totalPages}</h4>

 <button className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={() => handlePageChange(page + 1)}  disabled={page === totalPages}>Next</button>

    </div>
  )
}
