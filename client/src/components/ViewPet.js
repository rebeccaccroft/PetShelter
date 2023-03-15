import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate, Navigate} from 'react-router-dom'

const ViewPet = (props) => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skillOne, setSkillOne] = useState('')
    const [skillTwo, setSkillTwo] = useState('')
    const [skillThree, setSkillThree] = useState('')
    const [likes, setLikes] = useState(0)
    const navigate = useNavigate('')
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then((res)=>{
            setName(res.data.name)
            setType(res.data.type)
            setDescription(res.data.description)
            setSkillOne(res.data.skillOne)
            setSkillTwo(res.data.skillTwo)
            setSkillThree(res.data.skillThree)
            
        })
        .catch((err)=>{console.log(err)})
    }, [])
    const adoptHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res)=>{
            console.log('Delete successful')
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const likeHandler = (e) =>{
        setLikes(likes+1)
    }
    
    
    return (
        <div>
            <div className='container col-6'>
                
                <h2 className='text-bg-secondary p-3 mb-4 rounded shadow'>{name}'s Profile</h2>

                <div>
                    <button className='btn btn-danger shadow' onClick={(e)=>adoptHandler(id)}>Adopt {name}</button>
                    <button className='btn btn-success mx-3 shadow' onClick={(e)=>likeHandler()}>Like {name}</button>
                    <Link to='/' className='btn btn-primary shadow mx-1'>Home</Link>
                </div>
                <h3 className='text-bg-secondary shadow rounded mt-4 mb-4 p-2'>Type/Breed: {type}</h3>
                <div className='mb-5'>
                    <h4>Description:</h4> <p>{description}</p>
                    <h4>Skills:</h4>
                    <p>{skillOne}</p>
                    <p>{skillTwo}</p>
                    <p>{skillThree}</p>
                </div>
                <span class="border border-5 bg-success mx-3 rounded shadow fs-2 p-2">
                    Like(s): {likes}
                </span>
            </div>
            
        </div>
    )
}

export default ViewPet