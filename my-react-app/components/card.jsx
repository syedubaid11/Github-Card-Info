export default function Card(props){
    return(
        <>
        <div className="card-container">
            <div className="card-content">
                <h1>
                    {props.cardname}
                </h1>
            </div>
        </div>
        </>

    )
}