import displayCSS from './display.module.scss'
import InfoComponent from '../../components/infoComponent/info_component/info.component';
import FormComponent from '../../components/formComponent/form.component';

interface DisplayPageProps {
    data: any,
    setData: React.Dispatch<React.SetStateAction<Object>>; 
}

const DisplayPage = ({data,setData}:DisplayPageProps): JSX.Element=>{
    return(
        <div className={displayCSS.container}>
            <div className={displayCSS.wrapper}>
                {Object.keys(data).map((key:string, index:number) => {
                    return(
                        <div key={index.toString()}>
                            <InfoComponent title={key} data={data[key]} />
                            {index ===0 ? <hr className={displayCSS.hr}/> :null}
                        </div>
                    )
                })}
            
            <hr/>
            <FormComponent setData={setData}/>
            </div>
        </div>
    )
}

export default DisplayPage