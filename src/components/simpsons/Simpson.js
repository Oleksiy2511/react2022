
function Simpson(props) {
    const {simpson} = props;
    return (
        <div className="simpsons">
            <h3>{simpson.name}  {simpson.surname} = {simpson.age}</h3>
            <p>{simpson.info}</p>
            <img src={simpson.photo} alt={simpson.name}/>
        </div>
    );
}


export default Simpson;