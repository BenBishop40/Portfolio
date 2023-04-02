import { useEffect } from 'react';
import { gsap } from 'gsap';
import './_sitemap.scss';

const Sitemap = () => {

    useEffect(() => {
        gsap.fromTo(
            ".popup",
            {opacity:0,
        },
        {
            opacity:1,
            duration: 1,
        }
        )
    }, [])

    return (
        <div className="sitemap">
            <h3 className="title">Plan du site</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illum corrupti tenetur itaque quas odit fugit eius corporis odio, ipsa sequi fuga minus! Facilis ratione excepturi numquam totam. Sequi officiis, laborum ad sed fuga porro. Ipsam atque ipsa, aliquam, accusantium at corporis aperiam illum est corrupti nemo, dolor obcaecati consequuntur?</p>
        </div>
    )
}
export default Sitemap;