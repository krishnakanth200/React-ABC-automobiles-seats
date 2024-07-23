import { useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';




function UpdateVechile(){
    const navigate=useNavigate();
    const [vechile,setVechile]=useState(null);
    const {id}=useParams();


    useEffect(()=>{
        axios.get(`http://localhost:5000/vechiles/${id}`)
        .then(response => {
            setVechile(response.data);
        })
        .catch(error=>{
            console.log("Error occured when fetching the vehicles",error);
        })
    },[id]);


    const formik = useFormik(
        {
            enableReinitialize: true,
            initialValues: {
                image: vechile?.image || '',
                name: vehicle?.name || '',
             price: vehicle?.price || '',
      mileage: vehicle?.mileage || '',
      color: vehicle?.color || '',
      seats: vehicle?.seats || '',
      fuel: vehicle?.fuel || '',
      gear: vehicle?.gear || '',
      description: vehicle?.description || ''
    },
