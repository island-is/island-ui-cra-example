import cn from 'classnames';

import * as styles from './RemoveButton.treat';

type RemoveButtonProps = {
  onClick: () => void;
};

export const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick }) => (
  <button className={cn(styles.root)}>
    <span className={styles.icon} />
  </button>
);
