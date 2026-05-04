import styles from "./ProfileCard.module.css";

function ProfileCard() {
  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src="https://images.pexels.com/photos/11426649/pexels-photo-11426649.jpeg"
        alt="Ảnh đại diện"
      />

      <h2 className={styles.name}>Trần Đại Quang Minh</h2>

      <p className={styles.info}>
        <strong>Tuổi:</strong> 21
      </p>

      <p className={styles.info}>
        <strong>Vị trí:</strong> Frontend Developer
      </p>

      <p className={styles.description}>
        Mình thích lập trình web, đặc biệt là React và thiết kế giao diện đẹp,
        dễ sử dụng.
      </p>
    </div>
  );
}

export default ProfileCard;
