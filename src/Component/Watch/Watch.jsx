import './Watch.css';

const Watch = ({watch_info}) => {
    const {name,price}=watch_info
 return (
        <div className='border_name'>
            <h1>Watches</h1>
            <p>{name}</p>
            <p>{price}</p>
         </div>
    );
};

export default Watch;