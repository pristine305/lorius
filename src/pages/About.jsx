import { Link } from 'react-router-dom'
import { asset } from '../config'

export default function About() {
  return (
    <>
      <div className="abt-hero"><img src={asset('video/aqua_hero_poster.jpg')} alt="LORIUS Aqua on white sand" /></div>
      <section className="sec">
        <div className="narrow">
          <h1 className="h1">Happiness. Confidence. Success.</h1>
          <p className="lede">
            LORIUS is a house of six eaux de parfum. Each one is made to be worn for how it makes you feel,
            whether that is the lift of an ordinary morning or the confidence of an evening that matters.
          </p>
        </div>
      </section>
      <section className="sec mist">
        <div className="wrap split">
          <div className="media"><img src={asset('collections/tile_her.webp')} alt="LORIUS Aura and Sensual" loading="lazy" /></div>
          <div>
            <h2 className="h2">Six fragrances, three ways to wear them</h2>
            <p className="lede">
              Aura and Sensual for her. Noir and Aqua for him. Oud and Lush for everyone. Every fragrance comes
              in 20, 50 and 100 ml, at the same price across the collection.
            </p>
            <Link className="btn" to="/shop">Shop the collection</Link>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split rev">
          <div className="media"><img src={asset('products/noir_100.webp')} alt="The LORIUS medallion on a Noir bottle" loading="lazy" /></div>
          <div>
            <h2 className="h2">The medallion</h2>
            <p className="lede">
              Every bottle carries the L medallion, drawn from gothic tracery and finished in gold or silver foil.
              It is the one detail you will find on all six.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
