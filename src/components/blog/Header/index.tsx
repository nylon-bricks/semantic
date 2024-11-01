import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { Fragment } from 'react';

import { formatDate } from '@/utils/date';

import * as styles from './styles.css';

type HeaderProps = {
  coverImage?: IGatsbyImageData;
  title: string;
  date: string;
  category?: string | null;
};

const Header = ({ coverImage, title, date, category }: HeaderProps) => {
  return (
    <header className={styles.root}>
      <div className={styles.cover}>
        {coverImage && (
          <GatsbyImage alt={title || 'Cover Image'} image={coverImage} draggable={false} />
        )}
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>
        {formatDate(date)}
        {category && (
          <Fragment>
            <span className={styles.descriptionDot}>&nbsp;&middot;&nbsp;</span>
            {category}
          </Fragment>
        )}
      </p>
    </header>
  );
};

export default Header;