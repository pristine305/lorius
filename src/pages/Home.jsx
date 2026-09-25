import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { asset, inr, PRICE } from '../config'
import { PRODUCTS } from '../data/products'
import Rail from '../components/Rail'
import AutoVideo from '../components/AutoVideo'
import { useCountdown, useReducedMotion } from '../hooks'
import { usePreorderOpen } from '../context/CartContext'

const WORDS = ['happiness.', 'confidence.', 'success.']

function RotatingWord() {
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2800)
    return () => clearInterval(t)
  }, [reduce])
  return (
    <span className="word" aria-hidden="true">
      {WORDS.map((w, n) => (
        <span key={w} className={n === i ? 'on' : n === (i - 1 + WORDS.length) % WORDS.length ? 'gone' : ''}>{w}</span>
      ))}
    </span>
  )
}

export default function Home() {
  const left = useCountdown()
  const open = usePreorderOpen()
  const lineup = useRef(null)

  return (
    <>
      <section className="hero" aria-labelledby="heroTitle">
        <div className="hero-copy">
          <h1 className="h1" id="heroTitle">
            Wear your <RotatingWord />
            <span className="vh">happiness, confidence and success.</span>
          </h1>
          <p className="lede">Six eaux de parfum, for her, for him and for everyone. In 20, 50 and 100 ml, from {inr(PRICE['20'])}.</p>
          <div className="cta-row">
            <Link to="/shop" className="btn">{open ? 'Pre-order now' : 'Shop the collection'}</Link>
            <Link to="/about" className="btn btn-line">Our story</Link>
          </div>
          <div className="launch">
            {left ? (
              <div className="count">
                <div><b>{String(left.h).padStart(2, '0')}</b><small>hours</small></div>
                <div><b>{String(left.m).padStart(2, '0')}</b><small>minutes</small></div>
                <div><b>{String(left.s).padStart(2, '0')}</b><small>seconds</small></div>
              </div>
            ) : null}
            <p>
              {left ? <>Pre-orders open today at 12 noon.<br /></> : <>Pre-orders are open now.<br /></>}
              First deliveries from 23 October 2026.
            </p>
          </div>
        </div>
        <div className="hero-media">
          <AutoVideo src={asset('video/aqua_hero.mp4')} poster={asset('video/aqua_hero_poster.jpg')}
            label="LORIUS Aqua on sand and rocks by the sea" />
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 24 }} aria-labelledby="lineupTitle">
        <div className="wrap">
          <div className="head-row">
            <div>
              <h2 className="h2" id="lineupTitle">Six fragrances</h2>
              <p className="muted">Two for her, two for him, two for everyone.</p>
            </div>
            <Link className="tlink" to="/shop">View all</Link>
          </div>
          <div className="lineup" ref={lineup}>
            {PRODUCTS.map((p) => (
              <Link key={p.id} to={`/fragrance/${p.id}`}>
                <img src={asset(`products/${p.id}_100.webp`)} alt={`LORIUS ${p.name}`} loading="lazy" />
                <b>{p.name}</b><small>{p.who}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec mist" aria-label="What LORIUS stands for">
        <div className="wrap words">
          <div><h3>Happiness</h3><p>For the everyday lift of wearing something you love.</p></div>
          <div><h3>Confidence</h3><p>For the room you walk into, and the impression you leave in it.</p></div>
          <div><h3>Success</h3><p>For the days that count, and the ones worth celebrating.</p></div>
        </div>
      </section>

      <section className="sec" aria-labelledby="railTitle">
        <div className="wrap">
          <Rail id="railTitle" title="Shop the collection"
            subtitle="Every fragrance, in every size, at the same price." products={PRODUCTS} />
        </div>
      </section>

      <section className="sec mist" style={{ paddingTop: 72 }}>
        <div className="wrap">
          <div className="tiles">
            <Link className="tile" to="/shop?cat=her">
              <img src={asset('collections/tile_her.webp')} alt="LORIUS Aura and Sensual" loading="lazy" />
              <div><h3>For her</h3><span>Aura, Sensual</span></div>
            </Link>
            <Link className="tile" to="/shop?cat=him">
              <img src={asset('collections/tile_him.webp')} alt="LORIUS Noir and Aqua" loading="lazy" />
              <div><h3>For him</h3><span>Noir, Aqua</span></div>
            </Link>
            <Link className="tile" to="/shop?cat=unisex">
              <img src={asset('collections/tile_unisex.webp')} alt="LORIUS Oud and Lush" loading="lazy" />
              <div><h3>Unisex</h3><span>Oud, Lush</span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="film" aria-labelledby="filmTitle">
        <AutoVideo src={asset('video/noir_film.mp4')} poster={asset('video/noir_film_poster.jpg')}
          label="LORIUS Noir bursting through festive colour powder" />
        <div className="film-copy">
          <h2 className="h1" id="filmTitle">Own the moment.</h2>
          <p>Noir, for him. Woody, spicy and warm.</p>
          <Link className="btn" to="/fragrance/noir">Discover Noir</Link>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="media"><img src={asset('collections/promo_trial.webp')} alt="LORIUS Lush, Aura and Noir" loading="lazy" /></div>
          <div>
            <h2 className="h2">Try any fragrance in 20 ml</h2>
            <p className="lede">{inr(PRICE['20'])} for 20 ml, so you can live with a fragrance before choosing the 50 or 100 ml bottle.</p>
            <Link className="btn" to="/shop?size=20">Shop 20 ml</Link>
          </div>
        </div>
      </section>
    </>
  )
}
