import React, { useEffect } from 'react'

function CurrenWeather() {
    const backgroundStyle = {
        backgroundImage:
          "url(https://c.pxhere.com/photos/6f/47/sky_cloud_blue_blue_sky_cloud_cloud_sky_sky_clouds_sun_day-599259.jpg!d)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        display:"flex",
        justifyContent:"flex-start"
      };
      const time = new Date();
      useEffect(()=>{
      
      },[])
      
  return (
    <div style={backgroundStyle}>

    <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
        <div style={{ height: "92%",width:"60%", background:"rgb(32,76,140,0.5)",opacity:1,padding:"20px" }}>
        <strong style={{color:"white",opacity:1,display:"flex",fontSize:"20px",marginTop:"14px",marginLeft:"14px"}}>
        Thời tiết hiện tại
      </strong>
      <p style={{color:"white",display:"flex",marginLeft:"14px",marginTop:"5px"}}>
        {time.toLocaleTimeString()}
      </p>
        </div>

    </div>
  </div>
  )
}

export default CurrenWeather