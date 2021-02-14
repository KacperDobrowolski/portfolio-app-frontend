import OfferItem from '../OfferItem/OfferItem';
import styles from './Offer.module.scss';

export default function Offer() {
    return (
        <section className={styles.offer}>
            <h2 className={styles.offer_headline}>Co oferujemy ?</h2>
            <p className={styles.offer_underline}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat, mauris vitae imperdiet porta, ante nibh rutrum nisl, nec aliquam metus ante eget augue.</p>
            <div className={styles.offerItems}>
                <OfferItem title="Tworzenie aplikacji internetowych" icon="bi bi-globe"/>
                <OfferItem title="Naprawa i modernizacja aplikacji internetowych" icon="bi bi-gear-fill"/>
                <OfferItem title="Pomoc techniczna 24/7" icon="bi bi-telephone-fill"/>
            </div>
        </section>
    )
}