import dayjs from 'dayjs';
import Link from 'next/link';

import { METADATA } from '@semantic/constants';

import * as styles from './styles.css';
import { Divider } from '../divider';
import { NavigateMenu } from '../navigate-menu';
import { ThemeToggle } from '../theme-toggle';

export const Sidebar = () => {
  return (
    <aside className={styles.root}>
      <div className={styles.topContainer}>
        <Link href="/public" className={styles.branding}>
          {METADATA.SITE.NAME}
        </Link>
        <Divider />
        <NavigateMenu />
      </div>

      <div className={styles.bottomContainer}>
        <ThemeToggle />
        <p className={styles.license}>
          Copyright © {dayjs().year()} {METADATA.AUTHOR.NAME}, All rights reserved.
        </p>
      </div>
    </aside>
  );
};
