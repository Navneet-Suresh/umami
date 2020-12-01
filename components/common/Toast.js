import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import styles from './Toast.module.css';
import Icon from 'components/common/Icon';
import Close from 'assets/times.svg';

export default function Toast({ message, timeout = 3000, onClose }) {
  const props = useSpring({
    opacity: 1,
    transform: 'translate3d(0,0px,0)',
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
  });

  useEffect(() => {
    setTimeout(onClose, timeout);
  }, []);

  return ReactDOM.createPortal(
    <animated.div className={styles.toast} style={props} onClick={onClose}>
      <div className={styles.message}>{message}</div>
      <Icon className={styles.close} icon={<Close />} size="small" />
    </animated.div>,
    document.getElementById('__modals'),
  );
}
