import { FeaturedCard } from '../components/FeaturedCard';
import { Carousel } from '../components/Carousel';
import { RecommendationCard } from '../components/RecommendationCard';
import { mockData } from '../data/mockData';

export function SearchResultsPage({ selectedItem, onBack, onSelectItem }) {
    // Logic for recommendations
    const sameCategory = mockData.filter(
        item => item.category === selectedItem.category && item.id !== selectedItem.id
    );

    const pairings = mockData.filter(
        item => item.category !== selectedItem.category
    );

    return (
        <div className="pt-24 pb-20 container mx-auto px-4 animate-fade-in">
            {/* Selected Item Detail */}
            <div className="mb-12">
                <FeaturedCard item={selectedItem} onClose={onBack} />
            </div>

            {/* Cross-Category Recommendations (Pairings) */}
            <Carousel title="Perfect Pairings">
                {pairings.map(item => (
                    <div key={item.id} onClick={() => onSelectItem(item)}>
                        <RecommendationCard item={item} />
                    </div>
                ))}
            </Carousel>

            {/* Same Category Recommendations */}
            <Carousel title="You May Also Like">
                {sameCategory.map(item => (
                    <div key={item.id} onClick={() => onSelectItem(item)}>
                        <RecommendationCard item={item} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
