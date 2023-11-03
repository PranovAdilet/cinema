import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = ({cards}: { cards: number}) => {
    const skeletonCards = new Array(cards).fill(0).map((_, idx) => (
        <div className="films__skeleton" key={idx}>
            <Skeleton className="films__skeleton-card" height={300} />
            <Skeleton count={1} />
        </div>
    ));

    return <div>{skeletonCards}</div>;
}

export default SkeletonCard;