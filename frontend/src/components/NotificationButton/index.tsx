import notification_icon from "../../assets/img/notification-icon.svg";
import "./styles.css";

export default function NotificationButton() {
  return (
    <div className="red-btn">
      <img src={notification_icon} alt="Notificar" />
    </div>
  );
}

// export default NotificationButton
