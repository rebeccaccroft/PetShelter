import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate} from 'react-router-dom'

const EditPet = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skillOne, setSkillOne] = useState('')
    const [skillTwo, setSkillTwo] = useState('')
    const [skillThree, setSkillThree] = useState('')
    const [errors, setErrors] = useState({})
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

    const editHandle = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${id}`, {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree,
        })
        .then((res)=>{
            console.log(res)
            navigate('/')})
            .catch((err)=>{
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='d-flex'>
                <h3 className='text-bg-info p-3 shadow rounded'>Update {name}'s Details</h3> 
            </div>
            <div className='mt-5 col-3' >
                <form className='form-control' onSubmit={editHandle}>
                    <label className='form-label text-align-center'>Name</label>
                    <input type='text' className='form-control' value={name}onChange={(e)=>setName(e.target.value)}/>
                    { errors.name ? <span className='text-danger'>{errors.name.message}</span> : null} <br></br>
                    <label className='form-label text-align-center'>Type/Breed</label>
                    <input type='text' className='form-control'value={type}onChange={(e)=>setType(e.target.value)}/>
                    { errors.type ? <span className='text-danger'>{errors.type.message}</span> : null} <br></br>
                    <label className='form-label text-align-center'>Description</label>
                    <input type='text'className='form-control'value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    { errors.description ? <span className='text-danger'>{errors.description.message}</span> : null} <br></br>
                    <label className='form-label text-align-center'>Skill #1 - optional</label>
                    <input type='text'className='form-control'value={skillOne} onChange={(e)=>setSkillOne(e.target.value)}/>
                    { errors.skillOne ? <span className='text-danger'>{errors.skillOne.message}</span> : null} <br></br>
                    <label className='form-label text-align-center'>Skill #2 - optional</label>
                    <input type='text'className='form-control'value={skillTwo} onChange={(e)=>setSkillTwo(e.target.value)}/>
                    { errors.skillTwo ? <span className='text-danger'>{errors.skillTwo.message}</span> : null} <br></br>
                    <label className='form-label text-align-center'>Skill #3 - optional</label>
                    <input type='text'className='form-control'value={skillThree} onChange={(e)=>setSkillThree(e.target.value)}/>
                    { errors.skillThree ? <span className='text-danger'>{errors.skillThree.message}</span> : null} <br></br>

                    <button className='btn btn-info mt-3 mb-3'type='submit'>Update {name}</button>
                    <Link to='/' className='btn btn-secondary shadow mx-2'>Return to Home</Link>
                    
                </form> 
            </div>
        </div>
    )
}

export default EditPet