
const Card = (props) => {
     console.log(props.age);
    return(
        <div className="Card">
            <h1>My name is {props.user}, and age is {props.age} from {props.city}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio suscipit qui fugiat dicta modi recusandae non pariatur aspernatur, unde sed commodi. Asperiores et libero sit voluptate quidem numquam quos id?</p>
        </div>
    )

}

export default Card;