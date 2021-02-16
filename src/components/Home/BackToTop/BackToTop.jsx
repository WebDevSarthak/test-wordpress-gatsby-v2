import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import '../BackToTop/BackToTop.css'

function BackToTop(){
    return(
            <a href="#" className="back-to-top">
                <i class="fal fa-angle-up"></i>
            </a>
    )
}

export default BackToTop