import React from "react"

function TopBar(props) {
  return (
    <header>
      <div className="title">
        <h1>Notifications</h1>
        <div className="notread-count">{props.unreadCount}</div>
      </div>
      <p className="read-button" onClick={props.read}>Mark all as read</p>
    </header>
  )
};

export default TopBar