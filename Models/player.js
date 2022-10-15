const videos=[
  {
    id:'1',
    category:'movie',
    video:[
      {src:"../Assets/videos/1. How To Succeed In This Course.mp4",ep:"1ep1"},
      {src:"../Assets/videos/2. Javascript Engine.mp4",ep:"1ep2"}
    ]
  },
  {
     id:'2',
     category:'movie', 
     video:[
      {src:"../Assets/videos/1. How To Succeed In This Course.mp4",ep:'2ep1'},
      {src:"../Assets/videos/2. Javascript Engine.mp4",ep:'2ep2'}
    ]
  },
  {
     id:'3',
     category:'movie',
     video:[
      {src:"../Assets/videos/1. How To Succeed In This Course.mp4",ep:'3ep1'},
      {src:"../Assets/videos/2. Javascript Engine.mp4",ep:'3ep2'}
    ]  },
  {
     id:'4',
     category:'season',
     video:[
      {src:"../Assets/videos/1. How To Succeed In This Course.mp4",ep:'4ep1'},
      {src:"../Assets/videos/2. Javascript Engine.mp4",ep:'4ep2'}
    ]  },
  {
     id:'5',
     category:'season',
     video:[
      {src:"../Assets/videos/1. How To Succeed In This Course.mp4",ep:"5ep1"},
      {src:"../Assets/videos/2. Javascript Engine.mp4",ep:"5ep2"}
    ]  },
  {
     id:'6',
     category:'season',
     video:[
      {src:"../Assets/videos/1. How To Succeed In This Course.mp4",ep:"6ep1"},
      {src:"../Assets/videos/2. Javascript Engine.mp4",ep:"6ep2"}
    ]  },
  {
    id:'7',
    category:'season',
    video:[
      {src:"../Assets/videos/1. How To Succeed In This Course.mp4",ep:"7ep1"},
      {src:"../Assets/videos/2. Javascript Engine.mp4",ep:"7ep2"}
    ]  },
  {
    id:'8',
    category:'season',
    video:[
      {src:"../Assets/videos/1. How To Succeed In This Course.mp4",ep:"8ep1"},
      {src:"../Assets/videos/2. Javascript Engine.mp4",ep:"8ep2"}
    ]  },
  {
    id:'9',
    category:'season',
    video:[
      {src:"../Assets/videos/1. How To Succeed In This Course.mp4",ep:"9p1"},
      {src:"../Assets/videos/2. Javascript Engine.mp4",ep:"9ep2"}

    ]  },
  {
    id:'10',
    category:'season',
    video:[
      {src:"../Assets/videos/1. How To Succeed In This Course.mp4",ep:"10ep1"},
      {src:"../Assets/videos/2. Javascript Engine.mp4",ep:"10ep2"}
    ]  },
]
const video=document.querySelector("#video")
const video_id=location.href.split('=');
const [,v_id]=video_id;
const next_epi=document.querySelector("#next_epi")
let ep=0;
next_epi.addEventListener('click',(e)=>{
  e.preventDefault()
  videos.find((vid)=>{
    const videoTime=JSON.parse(localStorage.time)
    videoTime.find((current_v_Time)=>{
      if(current_v_Time.id===video.id){
        video.currentTime=current_v_Time.time
        video.id=current_v_Time.id
      }   
})
  
    if(vid.id===v_id){
      if(ep===vid.video.length-1){
        next_epi.style.display="none"
      }
      else{
        ep++
        console.log(ep,vid.video.length)
      }
      video.src= vid.video[ep].src
      video.id=vid.video[ep].ep
   
    }
  })
})
videos.find((vid)=>{
  if(vid.id===video_id[1]){
    video.src= vid.video[ep].src
    video.id=vid.video[ep].ep
    if(vid.category==="movie"){
      console.log(vid.category)
      next_epi.style.visibility="hidden"
    }
    else{
      next_epi.style.visibility="visible"
    }
  }
})
const videoTime=JSON.parse(localStorage.time)
videoTime.find((current_v_Time)=>{
    if(current_v_Time.id===video.id){
        video.currentTime=current_v_Time.time
    }   
})


const data=JSON.parse(localStorage.getItem('time'))
video.addEventListener('timeupdate',()=>{
  let a=data.find((storageData)=>storageData.id===video.id)
  a||data.push({id:video.id,time:video.currentTime})
  // console.log(a)
  data.find((id)=>{
    if(id.id===video.id){
      id.time=video.currentTime
    }
})
localStorage.setItem('time',JSON.stringify(data)) 
})

// localStorage.setItem('time',data)

// const t=()=>{
// let Time=JSON.parse(window.localStorage.getItem('time'))
// if(Time==null)Time=[];
// const videoData={
//   id:video.id,
//   time:video.currentTime
// }
// localStorage.setItem('videoData',JSON.stringify(videoData))
// Time.push(videoData)
// localStorage.setItem('alldata',JSON.stringify(videoData))
// }
// video.addEventListener("timeupdate",t)

// const videoTime=[

// ]
// videoTime.push({id:video.id,time:video.currentTime})
// video.addEventListener('timeupdate',()=>{
//    videoTime.filter((item)=>{
//      if(item.id===video.id){
//        item.time=video.currentTime
//       }
//     })
//     window.localStorage.setItem('obj', JSON.stringify(videoTime))
//   })
  
//   const t=JSON.parse(localStorage.obj)
//   const fil=t.find((ti)=>{
//     if(ti.id==video.id){
//       video.currentTime=ti.time
 
//     }
//   })



video.addEventListener('loadedmetadata', function() {
  // console.log(parseInt(video.duration/(60*60)))
//   const duration=document.querySelector("#duration")
    let hours=parseInt(video.duration/(60*60))
    let minutes = parseInt(video.duration / 60);
		let seconds = video.duration % 60;
    duration.innerHTML=hours+":"+minutes+":"+(Math.floor(seconds))
  
});

// for videoplayer
const back=document.querySelector("#back")
back.addEventListener('click',(e)=>{
  e.preventDefault();
  window.location.replace('../layout/main.html')
})
const play_pause=document.querySelector("#play-pause")
const play_and_pause=()=>{
  if(play_pause.classList.contains("fa-play")){
    play_pause.classList.remove('fa-play')
    play_pause.classList.add('fa-pause')
    video.play()
  }
  else{
    play_pause.classList.remove('fa-pause')
    play_pause.classList.add('fa-play')
    video.pause()
  }  
}

const track=document.querySelector("#track")
const range=document.querySelector("#range")
range.addEventListener('click',(e)=>{
  video.currentTime=e.offsetX/range.offsetWidth*video.duration
})
const updateTrack=()=>{
  let currentTime=video.currentTime/video.duration*100
  track.style.width=currentTime+"%"
  if(video.currentTime==video.duration){
    video.currentTime=0;
    play_pause.classList.remove('fa-pause')
    play_pause.classList.add('fa-play')
    video.pause()
  }
}
// const t=window.localStorage.getItem('videoTime')
// console.log(window.localStorage)
const revind=()=>{
  video.currentTime-=5;
}
const forward=()=>{
  video.currentTime+=5;
}
const controls=document.querySelector("#controls")
const revin=document.querySelector("#revind")
const forwar=document.querySelector("#forward")
revin.addEventListener('click',revind)
forwar.addEventListener('click',forward)
play_pause.addEventListener('click',play_and_pause)
video.addEventListener('timeupdate',updateTrack)
const volume_indicator=document.querySelector("#volume_indicator")
const range_volume=document.querySelector("#range_volume")
const volume_modification=()=>{
  if(volume_indicator.classList.contains("volume_indicator1")){
    range.style.visibility='hidden'
    volume_indicator.classList.remove("volume_indicator1")
  }
  else{
    volume_indicator.classList.add("volume_indicator1")
    range.style.visibility='visible'
  }
}
volume_indicator.addEventListener('change',()=>{
  video.volume=1/100*range_volume.value
  console.log(video.volume)
})
document.addEventListener('keypress',(event)=>{
  const top_navigation=document.querySelector("#top-navigation")
 if(event.code=='Space' && video.paused){
   play_pause.classList.add('fa-pause')
   play_pause.classList.remove('fa-play')
   controls.classList.add("controls1")
   top_navigation.classList.add("back_hide")
   next_epi.classList.remove("next_epi1")
   video.play()
  }
  else{
    play_pause.classList.add('fa-play')
    play_pause.classList.remove('fa-pause')
    controls.classList.remove("controls1")
    top_navigation.classList.remove("back_hide")
    next_epi.classList.add("next_epi1")
    video.pause()
    
  }
})
const full_screen=document.querySelector("#full_screen")
full_screen.addEventListener('click',()=>{
  video.requestFullscreen()
})
video.addEventListener("mousemove",()=>{
  const top_navigation=document.querySelector("#top-navigation")

setTimeout(()=>{
  controls.classList.add("controls1")
  top_navigation.classList.add("back_hide")
},3000)

controls.classList.remove("controls1")

top_navigation.classList.remove("back_hide")
})
video.addEventListener('click',play_and_pause)
const playSpeedNavi=()=>{
  if(play_back.classList.contains('play_back1')){
    play_back.classList.remove('play_back1')
    play_back.classList.add('play_back')
  
  }
  else{
    play_back.classList.remove('play_back')
    play_back.classList.add('play_back1')
  }
}
const video_parent=document.querySelector("#video_parent")
const play_back=document.querySelector("#play_back")
video_parent.addEventListener('click',(e)=>{
   if(e.target.id=='volume'){
    volume_modification()
   }
   else{
    volume_indicator.classList.add("volume_indicator1")
    range.style.visibility='visible'
   }
   if(e.target.id=="speed"){
    playSpeedNavi()
   }
   else{
    play_back.classList.remove("play_back")
    play_back.classList.add("play_back1")
   }
})
play_back.addEventListener("click",(event)=>{
  video.playbackRate=event.target.getAttribute("data-value")
 
})
