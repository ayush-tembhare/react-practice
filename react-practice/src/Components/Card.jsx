import {Bookmark} from 'lucide-react';
import Amazon from "../assets/company logos/Amazon.jpg";
const Card = (props) => {
    return(
        <div className="Card">
            <div className="Top">
                <img src={props.brandLogo} alt='Logo' />
                <button>Save<Bookmark /></button> 
            </div>
            <div className="Job_info">
                <h3>{props.companyName}</h3>
                <p>{props.datePosted}</p>
                 <h2>{props.post}</h2>
                <div className='tag1'>
                    <p>{props.tag1}</p>
                    <p>{props.tag2}</p>
                </div>
                
            </div>
            <div className="Bottom">
                <div className='tag2'>
                    <h2>{props.pay}</h2>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )

}

export default Card;
