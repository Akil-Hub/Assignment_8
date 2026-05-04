"use client"
import { useSpring, animated, useTrail } from "@react-spring/web"
import { useEffect, useState } from "react"
import Link from "next/link"

const BannerHeading = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  const headingSpring = useSpring({
    from: { opacity: 0, transform: "translateY(60px)" },
    to: { opacity: show ? 1 : 0, transform: show ? "translateY(0px)" : "translateY(60px)" },
    config: { tension: 80, friction: 20 },
    delay: 200,
  })

  const subtitleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: show ? 1 : 0, transform: show ? "translateY(0px)" : "translateY(40px)" },
    config: { tension: 80, friction: 20 },
    delay: 450,
  })

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: show ? 1 : 0, transform: show ? "translateY(0px)" : "translateY(20px)" },
    config: { tension: 80, friction: 20 },
    delay: 650,
  })

  const words = ["Premium", "Cattle", "Marketplace"]
  const trail = useTrail(words.length, {
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: show ? 1 : 0, transform: show ? "translateY(0px)" : "translateY(30px)" },
    config: { tension: 120, friction: 18 },
    delay: 300,
  })

  return (
    <div className="text-center space-y-6 px-4">


      <animated.div style={headingSpring}>
        <span className="inline-block bg-white/10 text-emerald-400   text-md md:text-xl  font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm">
           Eid Special Collection
        </span>
      </animated.div>

      {/* Word trail */}
      <div className="flex flex-wrap justify-center gap-x-4 text-5xl md:text-7xl font-bold">
        {trail.map((style, i) => (
          <animated.span
            key={i}
            style={style}
            className="text-emerald-400"
          >
            {words[i]}
          </animated.span>
        ))}
      </div>

      {/* Subtitle */}
      <animated.p
        style={subtitleSpring}
        className="text-white/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
      >
        Find the finest cattle for Qurbani. Browse hundreds of verified animals
        from trusted sellers across Bangladesh.
      </animated.p>

      {/* Buttons */}
      <animated.div
        style={buttonSpring}
        className="flex items-center justify-center gap-4 pt-4 flex-wrap"
      >
        <Link
          href="/allAnimal"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1"
        >
          Browse Animals
        </Link>
        <Link
          href="/register"
          className="border border-white/50 text-white hover:bg-white hover:text-stone-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
        >
          Sell Your Cattle
        </Link>
      </animated.div>

    </div>
  )
}

export default BannerHeading