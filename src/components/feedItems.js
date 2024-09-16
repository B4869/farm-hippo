import './feedItem.css';

function FeedItem(props) {
    const {food, onClickFood} = props
    return (
        <div className='feedItem'>
            <img src={food.imageFood} onClick={() => {onClickFood(food.title)}}/>
            <p>{food.title}</p>
        </div>
    );
}

export default FeedItem;