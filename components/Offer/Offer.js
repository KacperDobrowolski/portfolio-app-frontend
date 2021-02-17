import OfferItem from '../OfferItem/OfferItem';
import styles from './Offer.module.scss';

const Offer = () => {
    return (
        <section className={styles.offer}>
            <h2 className={styles.offer_headline}>Co oferuje?</h2>
            <p className={styles.offer_underline}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat, mauris vitae imperdiet porta, ante nibh rutrum nisl, nec aliquam metus ante eget augue.</p>
            <div className={styles.offerItems}>
                <OfferItem title="Tworzenie aplikacji internetowych" icon="bi bi-globe"/>
                <OfferItem title="Naprawa i modernizacja aplikacji internetowych" icon="bi bi-gear"/>
                <OfferItem title="Pomoc techniczna 24/7" icon="bi bi-telephone"/>
            </div>
        </section>
    )
}

export default Offer;