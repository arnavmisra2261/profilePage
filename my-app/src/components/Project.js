
const Project = (props) => {

    const dispCard = {
        border: "1px solid black",
        padding: "2%",
        margin: "2%",
        borderRadius: "5px"
    }

    return (
        <div style = {dispCard}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <a href = {props.gitlink} >Check out code</a>
        </div>
    )

    
}

export default Project
