import { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import useFetchGitUser from '../../utils/useFetchGitUser'


const Body = () => {
    const [resList, setList] = useState([])
    const gitUser = useFetchGitUser()
    console.log('mygitUser')
    console.log(gitUser)
    useEffect(()=>{
       fetchData()},[]);

    const fetchData = async()=>{
        setList([{
            resName: "Meghana Foods"
        },
        {
            resName: "KFC"
        },
        {
            resName: "McDonald's"
        },
        {
            resName: "Dominos"
        }])
    }
    return (
        <div>
            <button onClick={() => {
                setList(resList.filter(elem => { return elem.resName == 'KFC' }))
                // console.log(resList)
            }}>Click Me</button>
            <div>
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.resName} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body