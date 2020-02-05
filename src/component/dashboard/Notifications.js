import React from "react";

const Notifications = ({ notificationArray }) => {
  return (
    <div className="secction">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className='card-title'>Notifications</span>
          <ul className='notifications'>
            {notificationArray && notificationArray.map(noti => {
              return (
                <li key={noti.time.seconds}>
                  <span className="pink-text">
                    {noti.user}
                  </span><br />
                  <span>{noti.content}</span><br />
                  <div className="grey-text note-date">{noti.time.seconds}</div>
                  <hr />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div >
  );
};
export default Notifications;
