import React from 'react'
import styles from './expl.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import EngineFields from '../EngineFields'


const ExploreTravel = ({ Title, SubTitle, ImgAlt }) => {
  return (
    <section className={styles.ExploreTravel}>
      <Container className={styles.ExploreTravelCont}>
        <div className={styles.TrvWrpFlex}>
          <div className={styles.TrvWrp}>
            <h1>
              Book your <span>flight</span> in minutes !
            </h1>
            <p>Find your flighte and explore the world with us. We will take care of the rest.</p>
          </div>
        </div>

        <div className={styles.TrvEngWrp}>
          <EngineFields MobRadioCenter={true} />
        </div>
      </Container>
    </section>
  )
}

export default ExploreTravel