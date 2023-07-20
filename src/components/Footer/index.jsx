// Styles
import styles from "./styles.js";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.p}>
                Built with ❤️ by{" "}
                <a
                    href="https://www.blakeyeboah.com/"
                    className={styles.link}
                    rel="noreferrer"
                    target="_blank"
                >
                    Lewis Muthaura
                </a>
            </p>
            <p className={`${styles.p} mt-8`}>
                &copy; 2023 Gather Network. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
