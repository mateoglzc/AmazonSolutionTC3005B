import React from 'react'
import ShowVideoCard from './ShowVideoCard.js'
import * as video from '../../ScreenRecorder/components/VideoAPI'
import * as agent from "../../ScreenRecorder/components/AgentAPI"
import VideoPreview from './VideoPreview.js'
import { UserContext } from '../../../App.js'

function ShowVideos() {

  const [videoCards, setVideoCards] = React.useState()
  const [recList, setRecList] = React.useState([]);
  const {user, setUser} = React.useContext(UserContext)

  React.useEffect(() => {

    async function getData() {
      if (user.ConnectData.User.SecurityProfileIds[0] === process.env.REACT_APP_ADMIN_ID){
        await video.listRec().then((result) => {
          console.log(result)
          if (result.status === 'Succesfull') {
            setRecList(result.data)
          } 
        })
      } else {
        let currAgentId;

        await agent.get(user.agentId).then((result) => {
          if (result.status === 'Succesfull') {
            currAgentId = result.data.asgnRec
          }
        })

        await video.listRecording(currAgentId).then((result) => {
          if (result.status === 'Succesfulll') {
            setRecList(result.data)
          }
        })
      }
    }

    getData()
    console.log(recList)

  }, [])

  React.useEffect(() => {
    setVideoCards(recList.map(vid => (
      <ShowVideoCard
        videoTitle={vid.title}
        vidDuration={vid.duration}
        videoPath={vid.videoPath}
      />
    )))

  }, [])


  const handleFilteredData = (event) => {
    const searchWord = event.target.value

    const newFilter = recList.filter((item) => {
      return item.title.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === '') {
      setVideoCards(recList.map(vid => (
        <ShowVideoCard
          videoTitle={vid.title}
          vidDuration={vid.duration}
          videoPath={vid.videoPath}
        />
      )))
    } else {
      setVideoCards(newFilter.map(vid => (
        <ShowVideoCard
          videoTitle={vid.title}
          vidDuration={vid.duration}
          videoPath={vid.videoPath}
        />
      )))
    }
  }

  return (
    <div className='show-pop-up'>
      <button className='assign-close'></button>
      <div className='assign-container'>
        <div className='assign-list-title'>All Videos</div>
        <div className='search'>
          <div className='searchInputs'>
            <input type='text' onChange={handleFilteredData} />
          </div>

        </div>
          <div className='assign-sub-container'>
            {videoCards}
        </div>
      </div>
    </div>
  )
}

export default ShowVideos
