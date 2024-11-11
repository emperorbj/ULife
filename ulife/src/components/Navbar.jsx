import {Button} from '@chakra-ui/react/button'
import { Input } from "@chakra-ui/react"
import {MdSearch} from 'react-icons/md'
import {LuHeartHandshake} from 'react-icons/lu'

const Navbar = () => {
    return (
        <div className="px-2 md:px-6 bg-white shadow-md py-[7px] flex 
        items-center justify-between">
        <div className='flex gap-2 items-center'>
            <div className='shadow-md h-[35px] w-[35px] rounded-md flex items-center justify-center bg-sky-400'>
                <LuHeartHandshake className='text-white h-[26px] w-[26px]'/>
            </div>
            <h1 className='text-sky-400 font-bold text-xl'><span className='text-green-500'>U</span>Life</h1>
        </div>
        <div className='hidden md:flex items-center justify-center gap-3 bg-slate-100 
        px-4 pr-10 
        rounded-md shadow-sm'>
            <MdSearch className='h-6 w-8'/>
            <Input className='border-none outline-none' placeholder="Enter your email" />
        </div>
        <div className="flex items-center gap-3">
            <Button variant='outline' className='px-3 md:px-6 py-3 text-white font-semibold bg-sky-400'>Sign up</Button>
        </div>
    </div>
    )
}

export default Navbar
