import { formatRelative } from 'date-fns';
import styles from './Message.module.css';

function Message({ createdAt = null, text = '', displayName = '' }) {
  return (
    <div className={styles.messageItem}>
      <div className={styles.ab}>
        {displayName ? (
          <p className={styles.displayName}>{displayName}</p>
        ) : null}
        {createdAt?.seconds ? (
          <span>
            {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
          </span>
        ) : null}
      </div>
      <h3><p>{text}</p></h3>
    </div>
  );
}

export default Message;
