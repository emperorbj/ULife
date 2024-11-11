import { Card } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import { userData } from "../db/users"
import { useEffect } from "react"
import { BsGenderAmbiguous } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci"

const user = userData[0]
const UserProfile = ({weight}) => {
    useEffect(() => {
        console.log(user);

    }, [])
    return (
        <div className="m-4 md:m-0 md:p-4">
            <Card.Root className="bg-sky-200 w-full">
                <Card.Body gap="2" className="flex md:flex-row lg:flex-row sm:flex-col">
                    <Avatar
                        src={user.user.image}
                        name="Nue Camp"
                    className='w-16 h-16 md:h-24 md:w-24 rounded-full'
                    />
                    <Card.Title mt="2">{user.user.name}</Card.Title>
                    <Card.Description>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-sky-100 w-6 h-6 md:h-8 md:w-8 rounded-full 
                                justify-center 
                                items-center flex">
                                    <CiMail className="h-[18px] w-[18px] md:h-[22px] md:w-[22px]"/>
                                </div>
                                <h2 className="font-semibold text-sm md:text-[15px]">{user.user.mail}</h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-sky-100 w-6 h-6 md:h-8 md:w-8 rounded-full 
                                justify-center 
                                items-center flex">
                                    <MdOutlinePhoneInTalk className="h-[18px] w-[18px] md:h-[22px] 
                                    md:w-[22px]"/>
                                </div>
                                <h2 className="font-semibold text-sm md:text-lg">{user.user.phone}</h2>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-sky-100 w-6 h-6 md:h-8 md:w-8 rounded-full 
                                justify-center 
                                items-center flex">
                                    <BsGenderAmbiguous className="h-[18px] w-[18px] md:h-[22px] md:w-[22px]"/>
                                </div>
                                <h2 className="font-semibold text-sm md:text-lg">{user.user.gender}</h2>
                            </div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-sky-600 font-bold">Weight</h1>
                                <h2 className="font-semibold text-sm md:text-lg">{weight}</h2>
                            </div>
                        </div>
                    </Card.Description>
                </Card.Body>
                <Card.Footer>
                    
                </Card.Footer>
            </Card.Root>
        </div>
    )
}

export default UserProfile
