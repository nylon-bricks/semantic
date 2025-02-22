import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { Fragment } from 'react';

import { slugify } from '@/utils/slugify';

import * as styles from './styles.css';

type HeaderProps = {
  coverImage?: IGatsbyImageData;
  title: string;
  subtitle: string;
  createdAt: string;
  category?: string | null;
};

const Header = ({ coverImage, title, subtitle, createdAt, category }: HeaderProps) => {
  return (
    <header className={styles.root}>
      <div className={styles.cover}>
        {coverImage && (
          <GatsbyImage alt={title || 'Cover Image'} image={coverImage} draggable={false} />
        )}
      </div>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <p className={styles.description}>
        {createdAt}
        {category && (
          <Fragment>
            <span className={styles.middot}>&nbsp;&middot;&nbsp;</span>
            <Link to={slugify(`/categories/${category}`)}>{category}</Link>
          </Fragment>
        )}
      </p>
    </header>
  );
};

export default Header;
