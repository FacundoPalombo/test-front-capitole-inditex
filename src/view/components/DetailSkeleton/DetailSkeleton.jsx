import React from 'react';
import styles from './styles.module.scss';
import { bool } from 'prop-types';

const DetailSkeleton = () => {
  return (
    <section
      data-testid="detail-skeleton"
      className={styles.skeleton__container}
    >
      <div className={styles.skeleton__detail}>
        <div
          className={styles.skeleton__animation}
          style={{ height: '250px', width: '100%' }}
        />
        <div
          className={styles.skeleton__animation}
          style={{ height: '120px', width: '100%' }}
        />
        <div className={styles.skeleton__detail_text}>
          {[123, 234, 345, 456, 567, 678, 789, 160].map((i, index) => (
            <div
              key={index}
              className={styles.skeleton__animation}
              style={{
                height: '24px',
                width: `calc(100% - ${Math.random() * 30}%)`,
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.skeleton__content}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i, index) => (
          <div
            key={index}
            className={styles.skeleton__animation}
            style={{
              height: '36px',
              width: `calc(100% - ${Math.random() * 10 + 10}vw)`,
            }}
          />
        ))}
      </div>
    </section>
  );
};
DetailSkeleton.propTypes = {
  simple: bool,
};

export default DetailSkeleton;
