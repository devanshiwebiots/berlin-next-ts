import React, { useState } from "react";

const EmojiRangeRating = () => {
  const [rating, setRating] = useState<number>(2.5);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseFloat(event.target.value));
  };

  const getEmojiFace = () => {
    if (rating <= 1) return "😠";  
    if (rating <= 2) return "😞";  
    if (rating <= 3) return "😐";  
    if (rating <= 4) return "😊";  
    return "😁";  
  };

  return (
    <div className='col-xxl-4 col-md-6'>
      <div className='card height-equal'>
        <div className='card-header pb-0'>
          <h4>Range Rating</h4>
          <p className='f-m-light mt-1'>
            Use <code>emoji__face</code> class to set all expressions of emoji.
          </p>
        </div>
        <div className='card-body rating_expression'>
          <form className='emoji'>
            <label className='emoji__label' htmlFor='face-rating'>
              Rate your experience?
            </label>
            <div className='emoji__face' role='img' aria-label='Emoji face'>
              <div className='emoji__face-eye' />
              <div className='emoji__face-eye' />
              <div className='emoji__face-mouth' />
              <div className='emoji__face-mouth' />
              <span className='emoji__face-expression h1'>{getEmojiFace()}</span>
            </div>
            <input className='emoji__input emoji_slider' id='face-rating' type='range' value={rating} min='0' max='5' step='0.1' onChange={handleChange} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmojiRangeRating;
