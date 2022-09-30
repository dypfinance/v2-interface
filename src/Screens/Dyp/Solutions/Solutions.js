import React from 'react'
import SolutionsCard from '../../../components/SolutionsCard/SolutionsCard'
import Title from '../../../components/Title/Title'
import './_solutions.scss'

const Solutions = () => {
  return (
    <div className="container-fluid position-relative">
        <img className='rings' src={require(`../assets/solutionRings.svg`).default} alt="" />
        <div className="row px-5" style={{marginTop: '150px'}}>
        <Title top="Our" bottom="Solutions" />
        </div>
        <div className="row d-grid px-5 solutions-card-container">
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
        </div>
        <img className='bluehero-solutions' src={require(`../../../assets/metaverse-blueHero.svg`).default} alt="" />
    </div>
  )
}

export default Solutions