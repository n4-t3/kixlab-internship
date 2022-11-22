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
                return(
                    <div className={infoCSS.content} key={String(index)+element}>{element}</div>
                )
            })}
        </>
    )
}

export default InfoComponent