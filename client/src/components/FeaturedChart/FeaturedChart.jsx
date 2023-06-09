/* eslint-disable react/prop-types */
import './featured.scss'
import 'react-circular-progressbar/dist/styles.css';

const FeaturedChart = ({ candidate }) => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Lider de votações</h1>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <img src={candidate.avatar} alt="" />
        </div>
        <p className="title">{candidate.name}</p>
        <p className="amount">{candidate.total}</p>
      </div>
    </div>
  )
}

export default FeaturedChart