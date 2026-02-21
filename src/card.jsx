import profilePic from'./assets/sannan.jpeg'
function List(props){
    
    return (<div>
        <h>Hello{props.name}</h>
            <img className='pic' src={profilePic } alt="🍌"></img>
            <h2 className='title'>You are :{props.Age}yers old</h2>
            <p className='text'>relation {props.Id}</p> </div>)
}

export default List