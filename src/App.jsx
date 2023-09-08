import React from 'react'
import './index.css'
import data from './data.js'
import TopBar from './Components/TopBar'
import NotiBlock from './Components/NotiBlock'

function App() {
  const [notifications, setRead] = React.useState(data);

  function getUnreadCount(notifications) {
    return notifications.filter(notification => !notification.read).length;
  }

  function markRead() {
    setRead(prevNoti => {
      return prevNoti.map((notiElement) => ({
        ...notiElement, read: true,
      }))
    })
  }

  let unreadCount = getUnreadCount(notifications);

  const notificationElements = notifications.map(notiElement => (
    <NotiBlock
      key={notiElement.id}
      item={notiElement}
    />
  ))

  return (
    <div className='container'>
      <TopBar read={markRead} unreadCount={unreadCount} />
      <div className="all-notifications">
        {notificationElements}
      </div>
    </div>
  )
}

export default App
