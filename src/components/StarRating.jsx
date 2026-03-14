import {forwardRef} from "react";

const StarRating = forwardRef( (props, ref) => {
    const {rating} = props;

    return (
        <div ref={ref}>
            ⭐ {rating}
        </div>
    )
})

StarRating.displayName = 'StarRating';

export default StarRating;