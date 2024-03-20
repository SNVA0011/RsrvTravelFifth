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
                    <p className={styles.TopAirlineSub}>Book cheap flights on your favourite airlines</p>

                    {Routes?.length > 0 && <Row className={styles.TopAirlineRow}>
                        {Routes.map((item, index) => {
                            return (
                                <Col xs={12} md={2} key={index} className={styles.TopAirlineCol}>
                                    <div className={`${styles.TopAirlineCard}`}>

                                        <div className={styles.TopAirlineThumb}>
                                            <img src={`/images/${item.thumbnail}`} 
                                                className={styles.TopAirlineImg}
                                                alt={`${item.from}-${item.to}`} />
                                        </div> 

                                    </div>
                                </Col>
                            )
                        })}

                    </Row>}

                    <ul className={`d-xl-none PopularRtsUl`}>
                        <li className={'PopularRtsLi'}></li>
                        <li className={`PopularRtsLi PopularRtsLiAct`}></li>
                        <li className={'PopularRtsLi'}></li>
                    </ul>

                </Container>
            </section>
        </>
    )
}

export default TopAirlineDeal