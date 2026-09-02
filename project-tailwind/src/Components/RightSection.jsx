import Card from "./Card"
const RightSection = () => {
  return (
    <div className="flex gap-8 ml-15 overflow-x-scroll  scrollbar-none [&::-webkit-scrollbar]:hidden">
        <Card/>
        <Card/>
        <Card/>
         <Card/> <Card/> <Card/> <Card/> <Card/> <Card/>
        
    </div>
  )
}

export default RightSection
