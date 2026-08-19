const ANNOUNCEMENT = 'FREE STICKERS WITH EVERY ORDER';

function AnnouncementItem() {
  return (
    <span className="announcement-item">
      <span>{ANNOUNCEMENT}</span>
      <span className="announcement-sparkle" aria-hidden="true">
        ✨
      </span>
      <span className="announcement-divider" aria-hidden="true">
        •
      </span>
      <span className="announcement-note">A little extra joy in every package</span>
    </span>
  );
}

export function FreeStickerBanner() {
  return (
    <aside className="announcement-banner" aria-label="Free stickers with every order">
      <span className="sr-only">Free stickers are included with every order.</span>
      <div className="announcement-viewport" aria-hidden="true">
        <div className="announcement-track">
          <AnnouncementItem />
          <AnnouncementItem />
        </div>
      </div>
    </aside>
  );
}