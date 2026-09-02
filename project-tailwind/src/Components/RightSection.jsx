import Card from "./Card"
const RightSection = (props) => {
  return (
    <div className="flex gap-8 ml-15 overflow-x-scroll  scrollbar-none [&::-webkit-scrollbar]:hidden">
        {props.cards.map(function(elem,idx){
          return(
            <Card key={idx} 
            id={idx}
            image={elem.image}
            description={elem.description}
            status={elem.status}/>
          )
        })}
    </div>
  )
}

export default RightSection
