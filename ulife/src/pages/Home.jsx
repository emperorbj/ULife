
import { Button } from '@chakra-ui/react/button'
import { Link } from "react-router-dom";
import { Input } from "@chakra-ui/react"
import Lottie from 'lottie-react'
import Data from '../assets/lottie2.json'
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect,useContext } from 'react';
import { UserContext } from '../UserContext';

const Home = () => {
  const { setHeight,setWeight,height,weight} = useContext(UserContext)

  const handleHeight = (e)=>setHeight(e.target.value)
  const handleWeight = (e)=>setWeight(e.target.value)
  useEffect(()=>{
    console.log(height);
    console.log(weight);
    
  },[height,weight
  ])
  return (
    <section className='min-h-screen'>
      <div className="flex flex-col md:flex-col lg:flex-row-reverse w-full">
        <div className='md:h-1/4 lg:h-screen w-full lg:w-1/2'>
          <img className='h-full object-cover' src="/hero.png" alt="" />
        </div>
        <div className="flex md:w-full lg:w-1/2 items-center 
        gap-5 justify-center flex-col">
          <div className="h-56 w-60">
            <Lottie loop={true} animationData={Data} />
          </div>
          <h1 className="text-lg font-bold text-center md:text-xl lg:text-3xl">
            Welcome to the <span className="text-sky-500">best Health</span> Tracking App
            <br />
            <p className="text-center font-medium mt-2 text-[16px] md:text-[20px]">we are dedicated to your well being</p>
          </h1>
          <DialogRoot>
            <DialogTrigger asChild>
              <Button variant='outline' className='px-2 lg:px-4 text-white font-bold 
              hover:bg-sky-700 py-3 bg-sky-400'>
                Get started here
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <h1 className='text-lg font-semibold'>Welcome valued Customer 😘!</h1></DialogTitle>
              </DialogHeader>
              <DialogBody className='px-10 flex flex-col gap-5'>
                <Input type='number' onChange={handleWeight} className='bg-slate-100 px-2' placeholder='Enter weight'/>
                <Input type='number' onChange={handleHeight} className='bg-slate-100 px-2' placeholder='Enter height'/>
              </DialogBody>
              <DialogFooter>
                <DialogActionTrigger asChild>
                <Link to={"/"}>
                  <Button variant="outline" className='border hover:bg-sky-700 px-4'>Cancel</Button>
                </Link>
                </DialogActionTrigger>
                <Link to={"/dashboard"}>
                <Button className='bg-sky-300 hover:bg-sky-700 px-4'>Proceed</Button>
                </Link>
              </DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>
        </div>
      </div>
    </section>
  )
}

export default Home
