import loadingCSS from './loadingPage.module.scss'

const LoadingPage = () =>{
    return(
        <div className={loadingCSS.overlay}>
            <div className={loadingCSS.overlayDoor}></div>
            <div className={loadingCSS.overlayContent}>
                <div className={loadingCSS.loader}>
                    <div className={loadingCSS.inner}></div>
                </div>
        </div>
        </div>
    )
}

export default LoadingPage