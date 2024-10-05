import React from 'react'
import { Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import bloodTest from "../utils/img/blood.jpg"

const Mission = () => {
    const navigate = useNavigate()
  return (
    <div className='container-fluid w-100 p-4'>
        {/* <h3 className="h5 text-center fw-bold p-2" style={{color: "#07CC7F"}}>What We Are Doing</h3>
        <h3 className="text-center fw-bold" style={{color:"#082366", fontSize:"3rem"}}>We Are In a Mission To<br/> Help The Helpless</h3> */}

        <div className="row">
            <div className="col py-4 my-auto" style={{paddingLeft: "2rem"}}>
                <div className="h1 fw-bold" style={{color:"#082366", fontSize:"2.6rem"}}>Be Part of the Change!</div>
                <Text py={4}>Join the Learning Huts Foundation, powered by passionate volunteers, and be a catalyst for change—empowering minds, shaping a brighter future, and transforming lives through the gift of education!</Text>
                <div className="mt-4">
        <Button colorScheme="green" color="white" size="lg" onClick={()=> navigate("/donar")}>
                        Join Campaign
        </Button>
        </div>
            </div>
            <div className="col p-4">
            <img src={bloodTest} className="img-fluid" alt="banner"/>
            </div>
        </div>
        <hr/>
    </div>
  )
}

export default Mission