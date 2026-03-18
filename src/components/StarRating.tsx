import {forwardRef} from "react";

interface StarRatingProps {
    rating: string;
}

const StarRating = forwardRef<HTMLDivElement, StarRatingProps>( (props, ref) => {
    const {rating} = props;

    return (
        <div ref={ref}>
            ⭐ {rating}
        </div>
    )
})

StarRating.displayName = 'StarRating';

export default StarRating;