import { fetchReview } from "api/fetchApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewsError } from './Review.styled';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

      useEffect(() => {
    fetchReview(Number(movieId)).then(({ results }) => setReviews(results));
  }, [movieId]);

  if (reviews < 1) {
    return <ReviewsError>Дуже сумно, але ще не має відгуків(</ReviewsError>;
  }

  return (
    <div>
      {reviews.map(({id, author, content}) => (
        <div key={id}>
          <p>
            <b>Author:</b> {author}
          </p>
          <p>
            <b>Content:</b> {content}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Reviews;