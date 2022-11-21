import displayCSS from './display.module.scss'
import InfoComponent from '../../components/infoComponent/info_component/info.component';
import FormComponent from '../../components/formComponent/form.component';

interface DisplayPageProps {
    any: {
        answers: string[];
        distractors: string[];
    }
  }

const DisplayPage = ({data,setData}:any): JSX.Element=>{
    return(
        <div className={displayCSS.container}>
            <div className={displayCSS.wrapper}>
                {Object.keys(data).map((key:string, index:number) => {
                    console.log(key)
                    return(
                        <>
                        <InfoComponent title={key} data={data[key]} key={index}/>
                        {index ==0 ? <hr className={displayCSS.hr}/> :null}
                        </>
                    )
                })}
            
            <hr/>
            <FormComponent setData={setData}/>
            </div>
        </div>
    )
}

export default DisplayPage