import formCSS from './form.module.scss'
import {useState} from 'react'
import axios, { AxiosResponse } from "axios";

const FormComponent = ({setData}:any) =>{
    const [optionLabel, setOptionLabel] = useState()
    const [isAnswer, setIsAnswer] = useState(true)

    const handleChange = (e:any) =>{
        if(e.target.name==="input"){
            setOptionLabel(e.target.value)
        }else{
            if(e.target.value==="Answer"){
                setIsAnswer(true)
            }else{
                setIsAnswer(false)
            }
        }
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault()

        axios.post('http://kuiz.kixlab.org:8080/submitOption', {
            optionLabel,isAnswer
        }).then((response:AxiosResponse)=> {
            if(response.status===200){
                isAnswer ? setData((prevData:any)=> ({...prevData,answers:[...prevData["answers"],optionLabel]})) : setData((prevData:any)=> ({...prevData,distractors:[...prevData["distractors"],optionLabel]}))
            }
            console.log(response);
        }).catch((error:Error)=>{
            console.log(error);
        });
    }

    return(
        <form className={formCSS.form}>
            <h2>Create a New Option</h2>
            <div className={formCSS.row}>
                <input className={formCSS.inputField} placeholder='Type to create option...' name="input" onChange={handleChange}/>
                <div className={formCSS.radioContainer} onChange={handleChange}>
                    <div>
                        <label htmlFor="Answer">Answer</label>
                        <input className={formCSS.radioButton} type="radio" id="Answer" name="radio" value="Answer" defaultChecked />
                    </div>
                    <div>
                        <label htmlFor="Distractor">Distractor</label>
                        <input className={formCSS.radioButton} type="radio" id="Distractor" name="radio" value="Distractor" />
                    </div>
                </div>
            </div>
            <input type="button" onClick={handleSubmit} className={formCSS.btn} value="Submit" />
        </form>
    )
}

export default FormComponent