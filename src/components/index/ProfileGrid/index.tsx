import { clsx } from 'clsx';
import React from 'react';

import Card from '@/components/common/Card';
import { playlistEmbedUrl, profile } from '@/constants/profile';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';

import ProfileDialog from './ProfileDialog';
import * as styles from './ProfileGrid.css';

const ProfileGrid = () => {
  const { author } = useSiteMetadata();

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h3 className={styles.title}>Profile</h3>
        <Card.Root style={{ backgroundColor: profile.cardBackgroundColor }}>
          <Card.Content>
            <div className={styles.cardProfileContainer}>
              <img
                className={styles.cardProfileImage}
                src={profile.profileImageUrl}
                alt="profile"
                style={{ boxShadow: `0px 10px 39px ${profile.profileImageShadowColor}` }}
              />
              <p className={styles.cardProfileAuthor} style={{ color: profile.authorTextColor }}>
                {author}
              </p>
            </div>
            <div className={styles.cardProfileContainer}>
              {profile.userDetails.map(item => (
                <div key={item.title}>
                  <h3 className={styles.cardProfileTitle} style={{ color: profile.titleTextColor }}>
                    {item.title}
                  </h3>
                  <p
                    className={styles.cardProfileContent}
                    style={{ color: profile.contentTextColor }}
                  >
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </Card.Content>
          <ProfileDialog>
            <button className={styles.profileModalButton} type="button">
              <span
                className={clsx('material-symbols-outlined', styles.profileModalButtonIcon)}
                style={{ color: profile.modalButtonColor }}
              >
                add
              </span>
            </button>
          </ProfileDialog>
        </Card.Root>
      </div>

      <div className={styles.container}>
        <h3 className={styles.title}>Playlist</h3>
        <Card.Root style={{ backgroundColor: '#F8F8FA' }}>
          <iframe
            title="playlist"
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="182"
            style={{ width: '100%', overflow: 'hidden', borderRadius: '14px' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src={playlistEmbedUrl}
          />
        </Card.Root>
      </div>
    </section>
  );
};

export default ProfileGrid;
