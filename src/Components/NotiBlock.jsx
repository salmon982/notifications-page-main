import React from "react"

function NotiBlock(props) {
  const styles = {
    backgroundColor: props.item.read ? "hsl(0, 0%, 100%)" : "hsl(210, 60%, 98%)"
  }

  return (
    <div className="notification" style={styles}>
      <img src={`avatar-${props.item.img}.webp`} alt="Profile Picture" className="profile-pic" />
      <div className="text">
        <div className="context">
          <span className="name">{props.item.name}</span><span className="action">{props.item.action}</span>{props.item.object && <span className="object">{props.item.object}</span>}{props.item.club && <span className="club">{props.item.club}</span>}{!props.item.read && <span className="red-dot"></span>}
        </div>
        <div className="time">{props.item.time}</div>
        {props.item.message && <div id="message">{props.item.message}</div>}
      </div>
      {props.item.objectImg && <img src={props.item.objectImg} alt="Picture with girl and chess" id="chess-img" />}
    </div>
  )
}

export default NotiBlock