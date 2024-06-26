import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './recent.module.scss';
import Image from 'next/image';

const RecentSearch = ({ Title, Routes }) => {
    return (
        <section className={styles.TopRecentBlock}>
            <Container className={`position-relative ${styles.TopRecentContn}`}>
                <SectionTitle title={Title} />
            </Container>

            <Container className={`position-relative ${styles.TopRecentCoBody}`}>
                {Routes?.length > 0 && <Row className={styles.TopRecentRow}>
                    {Routes.map((item, index) => {
                        return (
                            <Col xs={12} md={4} key={index} className={`${styles.TopRecentCol} ${index == 0 && styles.TopReColFirst } ${index == Routes?.length - 1 && styles.TopReColLast }`}>
                                <div className={`d-flex align-items-center flex-row ${styles.TopRecentCard}`}>
                                    <div className={`flex-grow-1 ${styles.TopRecentGrow}`}>
                                        <div className={`d-flex flex-row align-items-center justifyc-content-center ${styles.TopRecentPlane}`}>
                                            {item.from}
                                            <div className={`flex-grow-1 text-center px-1 ${styles.TopRecentDashed}`}>
                                                <span>
                                                    <Image src="/images/plane-dashed-route.png" width={90} height={24} alt={`${item.from}-${item.to}`} />
                                                </span>
                                            </div>
                                            <span className='text-end'>{item.to}</span>
                                        </div>

                                        <div className={`d-flex flex-column flex-xl-row ${styles.TopRecentTrv}`}>
                                            <div className={`${styles.TopRTravelDate}`}>
                                                {item.date}
                                            </div>

                                            <div className="flex-grow-1 text-xl-end ps-xl-2 mt-2 mt-xl-0">
                                                {item.traveller}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.TopRecentThumb}>
                                        <Image src={`/images/${item.thumbnail}`} width={80} height={80} className={styles.TopRecentImg} quality={50}
                                            alt={`${item.from}-${item.to}`}
                                        />
                                    </div>
                                </div>
                            </Col>
                        )
                    })}

                </Row>}

                <div className={`d-lg-none popularRtsUl-spt ${styles.PopularRtsUlOp}`}>
                    <ul className={`PopularRtsUl`}>
                        <li className={'PopularRtsLi'}></li>
                        <li className={`PopularRtsLi PopularRtsLiAct`}></li>
                        <li className={'PopularRtsLi'}></li>
                    </ul>
                </div>
            </Container>

        </section>
    )
}

export default RecentSearch