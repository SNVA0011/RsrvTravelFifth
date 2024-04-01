import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './airlinedl.module.scss';
import Image from 'next/image';

const TopAirlineDeal = ({ Title, Routes, ViewALLBtn }) => {
    return (
        <>
            <div className={styles.TopAirlineWave}></div>
            <section className={styles.TopAirlineBlock}>
                <Container className={styles.TopAirlineCont}>
                    <SectionTitle
                        title={Title}
                        ViewALLBtn={ViewALLBtn}
                    />
                </Container>


                <Container className={styles.TopAirlineContBody}>
                    {Routes?.length > 0 && <Row className={styles.TopAirlineRow}>
                        {Routes.map((item, index) => {
                            return (
                                <Col xs={12} md={2} key={index} className={styles.TopAirlineCol}>
                                    <div className={`${styles.TopAirlineCard}`}>

                                    <Image src={'/images/airline-round-wv.png'}
                                                fill={true}
                                                layout={'fill'}
                                                objectFit={'fill'}
                                                quality={40}
                                                  />

                                        <div className={styles.AirlineCode}>
                                       
                                        <div className={styles.TopAirlineThumb}>
                                            <Image src={`/images/airline-logo/${item.thumbnail}.png`}
                                                className={styles.TopAirlineImg}
                                                quality={50}
                                                alt={`airline-image`}
                                                width={65}
                                                height={65}
                                            />
                                        </div>
                                        <div className={styles.AirlineCdp}>{item.thumbnail}</div> 
                                        </div>

                                    </div>
                                </Col>
                            )
                        })}

                    </Row>}


                    <div className='d-xl-none popularRtsUl-spt'>
                        <ul className={`PopularRtsUl`}>
                            <li className={'PopularRtsLi'}></li>
                            <li className={`PopularRtsLi PopularRtsLiAct`}></li>
                            <li className={'PopularRtsLi'}></li>
                        </ul>
                    </div>
                </Container>


            </section>
        </>
    )
}

export default TopAirlineDeal