import * as Accordion from '@radix-ui/react-accordion';
import dayjs from 'dayjs';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import React, { useState } from 'react';

import { siteMetadata } from '@/constants/siteMetadata';

import * as styles from './Header.css';
import Divider from '../Divider';
import NavigateMenu from '../NavigateMenu';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <>
      <Accordion.Root type="single" value={accordionOpen ? 'menu' : ''} collapsible>
        <AnimatePresence>
          {accordionOpen && (
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setAccordionOpen(false)}
            />
          )}
        </AnimatePresence>

        <header className={styles.root}>
          <div className={styles.inner}>
            <Link to="/" className={styles.branding}>
              {siteMetadata.title}
            </Link>

            <Accordion.Item className={styles.menuContainer} value="menu">
              <button className={styles.menu} onClick={() => setAccordionOpen(!accordionOpen)}>
                {accordionOpen ? '-' : 'menu'}
              </button>
              <Accordion.Content className={styles.menuContent}>
                <div className={styles.menuContentInner}>
                  <div className={styles.menuContentNavigation}>
                    <NavigateMenu />
                    <ThemeToggle />
                  </div>
                  <p className={styles.license}>
                    Copyright © {dayjs().year()} {siteMetadata.username}, All rights reserved.
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </div>
        </header>
      </Accordion.Root>

      <div className={styles.dividerContainer}>
        <Divider />
      </div>
    </>
  );
};

export default Header;