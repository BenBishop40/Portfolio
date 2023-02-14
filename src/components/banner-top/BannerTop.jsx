import React, { Component } from 'react';
import './_banner_top.scss'
import banner_img from '../../img/banner_top.jpg'

class BannerTop extends Component {
    render() {
        return (
            <>
                <img src={banner_img} alt="banner-laptop" className="banner_img" />
            </>
        )
    }
}

export default BannerTop