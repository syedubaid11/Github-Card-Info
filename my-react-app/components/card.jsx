export default function Card(props){
    return(
        <>
        <div className="card-container">
            <div className="card-content">
                <img className="card-image" src={props.cardimage}/>
                    <div className="card-written">
                        <h1>
                            {props.cardname}
                        </h1>
                    </div>
                    
            </div>
        </div>
        </>

    )
}