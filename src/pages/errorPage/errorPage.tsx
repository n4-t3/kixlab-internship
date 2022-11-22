import errorCSS from './error.module.scss'
import image1 from './images/1.png'
import image2 from './images/2.png'

const ErrorPage = () =>{
    return(
        <div className={errorCSS.container}>
            <div className={errorCSS.wrapper}>
            <h2 >If you are facing an error loading this page it is because of the browser's security settings</h2>
            <p>It happens because request over http was done while being hosted on https site.</p>
            <p>Follow the following steps to resolve the issue if you are using google chrome</p>
            <div className={errorCSS.imgWrapper}>
                <img src={image1} alt="head to site security settings" className={errorCSS.img}/>
                <img src={image2} alt="allow insecure connection" className={errorCSS.img}/>
            </div>
            <div>
                <h3>Reference</h3>
                <a href="https://stackoverflow.com/questions/37387711/page-loaded-over-https-but-requested-an-insecure-xmlhttprequest-endpoint"  target="_blank" rel="noreferrer">Stack Overflow</a>
            </div>
            </div>
        </div>
    )
}

export default ErrorPage