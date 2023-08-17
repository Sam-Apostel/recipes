import { dishes } from '~/app/dishes';
import Link from 'next/link';
import Scroller from '~/app/dishes/scroller';
import CircleType from '~/components/circleType/CircleType';

export default function Home() {
	const colors = [
		'bg-red-900',
		'bg-orange-900',
		'bg-yellow-900',
		'bg-green-900',
		'bg-teal-900',
		'bg-blue-900',
		'bg-cyan-900',
		'bg-indigo-900',
		'bg-amber-900',
		'bg-lime-900',
		'bg-purple-900',
		'bg-pink-900'
	];

    return (
	    <main className="h-screen overflow-y-scroll grid grid-rows-[repeat(47,100vh)]">
		    <Scroller>
			    {dishes.map((dish, i) => (
					<section
						id={dish.slug}
						key={dish.slug}
						className={colors[i%colors.length]}
						data-index={i}
					>

					</section>
			    ))}
		    </Scroller>
		    {dishes.map((dish, i) => (
			    <article
				    className="
                        col-start-1 row-start-1 sticky top-0
                        grid justify-center items-center
                        grid-rows-[20rem,1fr]
                        "
				    key={dish.slug}
				    data-index={i}
			    >
				    {/*<h2 className="text-amber-50 text-4xl font-extralight tracking-wider self-end text-center text-balance">{dish.name}</h2>*/}
				    <p className="font-extralight leading-loose text-lg text-center">{'lorem ipsum dolor sim amet'}</p>
				    <img
					    alt={dish.name}
					    className="object-contain self-end"
					    src={`/dishes/${dish.image}`}
				    />
			    </article>
		    ))}
		    <nav className="list-none col-start-1 row-start-1 text-center justify-center grid">
			    {dishes.map((dish, i) => (
				    <li
					    key={dish.slug}
					    className="
							col-start-1 row-end-1
							font-extralight text-4xl
						"
					    style={{ '--index': i }}
					    data-index={i}
				    >
					    <Link href={`#${dish.slug}`}>
						    <CircleType
							    forceHeight
						    >
							    {dish.name}
						    </CircleType>
						</Link>
				    </li>
			    ))}
		    </nav>

	    </main>
    );
}
