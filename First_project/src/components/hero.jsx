import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.title}>Build Modern Web Apps Faster</div>
            <div className={styles.subtitle}>Create stunning web experiences with clean design,powerful components,
                 and modern architecture.</div>
            <button className={styles.btn}>Start Free</button>
            <button className={styles.btn1}>Learn More</button>
        </div>
    );    
}

export default Hero;

    