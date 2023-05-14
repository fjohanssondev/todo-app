import { useId } from 'react'

const Form = () => {

  const label = useId()

  return (
    <form>
      <label className='block text-sm font-medium leading-6 text-gray-900' htmlFor={label} >Add todo</label>
      <input className='flex w-full py-2 px-4 flex-1 border mt-2 mb-8 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' placeholder='Get the bread' id={label} type="text" />
      <button className='flex w-full justify-center bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded' type="submit">Add todo</button>
    </form>
  )
}

export default Form