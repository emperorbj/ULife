import ChartData from "../components/ChartData"
import Navbar from "../components/Navbar"
import UserProfile from "../components/UserProfile"
import { Card } from "@chakra-ui/react"
import { userData } from "../db/users"
import { BsLungsFill } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import { GiBurningDot } from "react-icons/gi";
import CircularProgress from "../components/CircularProgress"
import { UserContext} from "../UserContext"
import { useContext, useEffect, useState } from "react"

const Dashboard = () => {
    const { height,weight } = useContext(UserContext)
    const[bmi,setBmi] = useState(null)


    useEffect(()=>{
        if(height && weight) {
            const heightToMeters = height/100;
            const bmiValue = (weight/(heightToMeters*heightToMeters)).toFixed(0)
            setBmi(bmiValue)
        }
    },[height,weight])


    const user = userData[0]
    return (
        <section className="bg-slate-100 h-screen flex flex-col">
            <Navbar />
            <div className="flex bg-slate-100 flex-col md:flex-row md:p-0">
                <aside className="bg-white mt-2 md:mt-0 w-full md:h-screen md:w-64 lg:w-1/4">
                    <UserProfile weight={weight} />
                </aside>
                <main className="bg-slate-100 h-screen md:w-[580px] lg:flex-1">
                    <div className="flex flex-col">
                        <div className="mx-3 mt-3 rounded-lg shadow-md bg-white">
                            <ChartData />
                        </div>
                        {/* cards */}
                        <div className="mx-6 mt-5 md:mt-8 sm:mx-2 md:mx-2 lg:mx-3 
                        gap-6 sm:gap-4 md:gap-1 
                        grid grid-cols-2 
                        md:grid-cols-3 lg:grid-cols-4">
                            {/* first */}
                            <Card.Root className="bg-green-100 shadow-md h-40 sm:h-48 
                            sm:w-[280px] md:h-48 lg:h-56 w-[140px] 
                            md:w-[155px] lg:w-[180px] xl:w-[200px]">
                                <Card.Body className="mt-6" gap="1">
                                    <CircularProgress bmi={bmi}/>
                                    <Card.Title mt="1">
                                        <h1 className="font-semibold">
                                            BMI
                                        </h1>
                                        {bmi &&
                                            <h1 className="text-[12px] md:text-[13px] lg:text-2xl font-bold">
                                            {bmi}
                                            </h1>
                                        }
                                    </Card.Title>
                                </Card.Body>
                            </Card.Root>
                            {/* second */}
                            <Card.Root className="shadow-md h-40 sm:h-48 sm:w-[280px] 
                            bg-red-100 md:h-48 lg:h-56 w-[140px] 
                            md:w-[155px] lg:w-[180px] xl:w-[200px]">
                                <Card.Body gap="1">
                                    <div className="flex items-center justify-center w-[50px] h-[50px] md:h-[90px] 
                                    bg-white 
                                    md:w-[90px] rounded-full">
                                        <FaHeartbeat className="text-red-500 h-[40px] w-[40px] md:h-[56px] md:w-[56px]"/>
                                    </div>
                                    <Card.Title mt="1">
                                        <h1 className="text-[12px] md:text-[13px] lg:text-xl font-semibold">
                                            Heart Beat Rate
                                        </h1>
                                        <h1 className="text-[12px] md:text-[13px] lg:text-2xl font-bold">
                                            {user.summary.heartRate} BPM
                                        </h1>
                                    </Card.Title>
                                </Card.Body>
                            </Card.Root>
                            {/* third*/}
                            <Card.Root className="shadow-md h-40 sm:h-48 sm:w-[280px] 
                            bg-sky-100  md:h-48 lg:h-56 w-[140px] 
                            md:w-[155px] lg:w-[180px] xl:w-[200px]">
                                <Card.Body gap="1">
                                <div className="flex items-center justify-center w-[50px] h-[50px] md:h-[90px] bg-white 
                                    md:w-[90px] rounded-full">
                                        <BsLungsFill className="text-sky-300 h-[40px] w-[40px] md:h-[56px] md:w-[56px]"/>
                                    </div>
                                    <Card.Title mt="1">
                                    <   h1 className="text-[12px] md:text-[13px] lg:text-xl font-semibold">
                                            Respiratory Rate
                                        </h1>
                                        <h1 className="text-[12px] md:text-[13px] lg:text-2xl font-bold">
                                            {user.summary.respiratoryRate} BPM
                                        </h1>
                                    </Card.Title>
                                </Card.Body>
                            </Card.Root>
                            {/* fourth*/}
                            <Card.Root className="shadow-md h-40 sm:h-48 sm:w-[280px] bg-yellow-100 
                            md:h-48 
                            lg:h-56 w-[140px] md:w-[155px] lg:w-[180px] xl:w-[200px]">
                                <Card.Body gap="1">
                                    <div className="flex items-center justify-center w-[50px] h-[50px] md:h-[90px] 
                                    bg-white 
                                    md:w-[90px] rounded-full">
                                        <GiBurningDot className="text-orange-300 h-[40px] w-[40px] md:h-[56px] md:w-[56px]"/>
                                    </div>
                                    <Card.Title mt="1">
                                        <h1 className="text-[12px] md:text-[13px] lg:text-xl font-semibold">
                                            Calories Burnt
                                        </h1>
                                        <h1 className="text-[12px] md:text-[13px] lg:text-2xl font-bold">
                                            {user.summary.caloriesBurned} cal
                                        </h1>
                                    </Card.Title>
                                </Card.Body>
                            </Card.Root>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Dashboard
