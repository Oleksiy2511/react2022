
function Simpson(props) {
    const {simpson} = props;
    return (
        <div className="simpson">
            <h3>{simpson.name}  {simpson.surname} = {simpson.age}</h3>
            <img src={simpson.photo} alt={simpson.name}/>
            <p>{simpson.info}</p>

        </div>
    );
}


export default Simpson;