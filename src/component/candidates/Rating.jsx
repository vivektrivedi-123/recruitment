import React from 'react'
import BeautyStars from 'beauty-stars';
function Rating(props) {
    
    return (
        <>
             <div className="d-md-block"> 
              <BeautyStars
                                             maxStars={5}
                                             size={10}
                                             activeColor="orange"
                                             inactiveColor="grey"
                                             value={props.rating}
                                          // onChange={value => this.setState({ value })}
                                          /> | Below Average</div>
                        {/* <div className="d-md-block small">New to this stage</div> */}
        </>
    )
}

export default Rating
