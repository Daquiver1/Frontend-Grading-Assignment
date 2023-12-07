import { StarIcon } from "@heroicons/react/20/solid"
import { classNames } from "../../utils/classNames" 
import reviewImage from '../../assets/review.png'

const reviews = [
	{
		name: "Mr. Samuel",
		role: "Career Expert",
		rating: 4,
		image: reviewImage,
	},
    {
		name: "Mr. Samuel",
		role: "Career Expert",
		rating: 4,
		image: reviewImage,
	},
    {
		name: "Mr. Samuel",
		role: "Career Expert",
		rating: 4,
		image: reviewImage,
	},
    {
		name: "Mr. Samuel",
		role: "Career Expert",
		rating: 4,
		image: reviewImage,
	},
    {
		name: "Mr. Samuel",
		role: "Career Expert",
		rating: 4,
		image: reviewImage,
	},
    {
		name: "Mr. Samuel",
		role: "Career Expert",
		rating: 4,
		image: reviewImage,
	},
]

const Reviews = () => {
	return (
		<div className="bg-white w-fit px-4 py-4 space-y-6 rounded-lg">
			<h3 className="text-center">Student Reviews</h3>
			<div className="space-y-4">
				{reviews.map((review, i) => (
					<div key={i} className="flex gap-x-3 items-center bg-blue-200/20 px-2 rounded-lg ring-1 ring-gray-200 py-1">
						<img
							src={review.image}
							alt=''
						/>
						<div>
							<h3 className="text-blue-400/50">{review.name}</h3>
							<p className="text-black/70">{review.role}</p>
						</div>
						<div className="flex">
							{[0, 1, 2, 3, 4].map((rating) => (
								<StarIcon
									key={rating}
									className={classNames(
										review.rating > rating ? "text-gray-900" : "text-gray-200",
										"h-5 w-5 flex-shrink-0"
									)}
									aria-hidden='true'
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Reviews
