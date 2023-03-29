import './_legal-notice.scss'
import gsap from 'gsap'
import { useEffect } from 'react'

const LegalNotice = () => {

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
        <div className="legal-notice">
            <h3 className="title">Mentions Légales</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illum corrupti tenetur itaque quas odit fugit eius corporis odio, ipsa sequi fuga minus! Facilis ratione excepturi numquam totam. Sequi officiis, laborum ad sed fuga porro. Ipsam atque ipsa, aliquam, accusantium at corporis aperiam illum est corrupti nemo, dolor obcaecati consequuntur?</p>
        </div>
    )
}
export default LegalNotice
