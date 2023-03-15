import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'

const Home = () => {
    const [allPets, setAllPets] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allPets')
        .then((res)=>{setAllPets(res.data)})
        .catch((err)=>{console.log(err)})
    }, [])
  return (
    <div>
        <div className='d-flex  justify-content-center'>
            <p className=''>These pets are looking for Furrever Homes!</p>
            <Link to={'/AddPet'} className='btn btn-secondary shadow mx-4'>Add A Pet</Link>
        </div>
        <div className='container'>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Type/Breed</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {allPets.map((pet, index)=>{
                    return(
                    <tr>
                        <td>{pet.name}</td>
                        <td>{pet.type}</td>
                        <td>
                            <Link to={`/view/${pet._id}`} className='btn btn-success shadow'>View {pet.name}'s profile</Link>
                            <Link to={`/edit/${pet._id}`} className='btn btn-warning shadow mx-4'>Edit</Link>
                            
                        </td>
                    </tr>
                    )
                })}
                
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home