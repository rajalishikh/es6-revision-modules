import './Watch.css';

const Watch = ({item}) => {
    const {name,price}=item
 return (
        <div className='border_name'>
            <h1>Watches</h1>
            <p>{name}</p>
            <p>{price}</p>
         </div>
    );
};

export default Watch;