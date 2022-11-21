import infoCSS from './info.module.scss'

interface InfoComponentProps {
    title: string;
    data: string[]
}

const InfoComponent = ({title, data}:InfoComponentProps) =>{
    return(
        <>
        <h1 className={infoCSS.header}>{ title }</h1>
            {data.map((element:string,index:number)=>{
                console.log(element)
                return(
                    <div className={infoCSS.content} key={index}>{element}</div>
                )
            })}
        </>
    )
}

export default InfoComponent