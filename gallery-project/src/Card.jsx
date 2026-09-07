const Card = (props) => {
  return (
    <div>
          <div className="w-full aspect-square overflow-hidden rounded-xl">

      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="h-full w-full object-cover"
          src={props.download_url}
          alt=""
        />
      </a>
      

    </div>
 <h2 className='font-bold text-lg'>{props.author}</h2>
    </div>
  
  )
}

export default Card