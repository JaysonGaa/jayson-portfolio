import './MyLife.css'
import Lift from '../../assets/Lift.jpg'
import Shine from '../../assets/shine.jpg'
import Fish from '../../assets/Fish.jpeg'

/**
 * MyLife Component
 * 
 * Personal interests section showcasing hobbies and activities outside of tech.
 * Features a description and image grid highlighting powerlifting, fishing, and hiking.
 */
const MyLife = () => {
  return (
    <div className='my-life'>

        {/* Personal interests description */}
        <div className='my-life-desc'>
            <h2>Outside of tech, I enjoy challenging myself both 
                physically and mentally. Powerlifting has taught 
                me discipline, consistency, and goal setting, while 
                basketball reinforces teamwork and focus. I also enjoy 
                fishing as a way to reset and stay patient outside of 
                fast-paced technical work.</h2>
        </div>

        {/* Image grid showcasing hobbies */}
        <div className='my-life-grid'>
            {/* Powerlifting image */}
            <div className='my-life-image'>
                <img src={Lift} alt="Lift" />
                <div className="caption">
                    <p>Powerlifting: Oregon Open 2025</p>
                </div>
            </div>

            {/* Basketball image */}
            <div className='my-life-image'>
                <img src={Shine} alt="Shine" />
                <div className="caption">
                    <p>Shine Basketball: 2019-2022</p>
                </div>
            </div>

            {/* Fishing image */}
            <div className='my-life-image'>
                <img src={Fish} alt="Fish" />
                <div className="caption">
                    <p>Fishing: Hometown Bass Pond</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MyLife