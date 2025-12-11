import Wrapper from '@/assets/wrappers/midterm/Shop_00';

const P1_StaticPage_xx = () => {
  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h3>P1_StaticPage_00,</h3>
          <h4 style={{ textAlign: 'center' }}>max920612, 213410300</h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>Mens</h1>
          <div className='items'>
            <div className='collection-item'>
              <img className='image' src='/images/midterm/mens/camo-vest.png' />
              <div className='collection-footer'>
                <span className='name'>Camo Down Vest</span>
                <span className='price'>325</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img className='image' src='/images/midterm/mens/floral-shirt.png' />
              <div className='collection-footer'>
                <span className='name'>Floral T-shirt</span>
                <span className='price'>20</span>
              </div>
              <button className='custom-button'>Add to Card</button>
            </div>
            <div className='collection-item'>
              <img className='image' src='/images/midterm/mens/long-sleeve.png' />
              <div className='collection-footer'>
                <span className='name'>Black & White Longsleeve</span>
                <span className='price'>25</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img className='image' src='/images/midterm/mens/pink-shirt.png' />
              <div className='collection-footer'>
                <span className='name'>Pink T-shirt </span>
                <span className='price'>25</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/mens/roll-up-jean-shirt.png'
              />
              <div className='collection-footer'>
                <span className='name'>Jean Long Sleeve</span>
                <span className='price'>40</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/mens/polka-dot-shirt.png'
              />
              <div className='collection-footer'>
                <span className='name'>Burgundy T-shirt</span>
                <span className='price'>25</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P1_StaticPage_xx;
