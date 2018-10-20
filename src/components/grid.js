import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Zoom from 'react-reveal/Zoom'
import withReveal from 'react-reveal'
import Card from './card'
import ServiceBrandDesign from '../images/Service-BrandDesign.svg'
import ServiceWebDesign from '../images/Service-WebDesign2.svg'
import ServiceUIDesign from '../images/Service-UIDesign2.svg'

class Grid extends React.Component {
    render () {
        const Wrapper = withReveal(styled.div`
            grid-gap: 20px;
        `, <Zoom top cascade/>);

        return (
            <Wrapper class="Grid33">
                <Card icon={ServiceWebDesign} title="Web Design" content="From conception to production, I’m experienced in executing design for digital service website and web app." />
                <Card icon={ServiceUIDesign} title="UI/UX Design" content="I also work on mobile app project, crafting low-fi wireframes, interactive prototypes and production-ready assets." />
                <Card icon={ServiceBrandDesign} title="Brand Design" content="I help new brands launching their distinct and compelling key visual idendities to kickstart their start-up journey." />
            </Wrapper>
        )
    }
}

Grid.propTypes = {
    name: PropTypes.string
  };

export default Grid