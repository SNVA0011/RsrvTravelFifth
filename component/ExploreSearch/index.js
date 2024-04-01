import React, { useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './explore.module.scss';
import Image from 'next/image';
import ButtonStyle from '../ButtonStyle/ButtonStyle';

const ExploreSearch = ({ Title, Routes }) => {
    const [route, setRoute] = useState("Domestic");

    return (
        <section className={styles.ExploreSrcBlock}>
            <Container className='position-relative'>
                <Row>
                    <Col xs>
                        <SectionTitle title={`${route} Route`}
                            className={`${styles.RouteTitle}`}
                        />
                    </Col>
                    <Col xs={4} className={`text-right ps-0 ${styles.ExploreDombtn}`}>
                        <ButtonStyle
                            content={<>
                                Dom<span className='d-none d-md-inline-block'>estic</span>
                            </>}
                            outline={route === 'Domestic' ? false : true}
                            fullwidth={false}
                            onClick={() => { setRoute("Domestic") }}
                            className={`${styles.RoutBtn} ${styles.RoutBtnDom} ${route === 'Domestic' && styles.RoutAct}`}
                        />
                        <ButtonStyle
                            content={<>
                                Int<span className='d-none d-md-inline-block'>ernational</span>
                            </>}
                            outline={route === 'International' ? false : true}
                            fullwidth={false}
                            onClick={() => { setRoute("International") }}
                            className={`${styles.RoutBtn} ${styles.RoutBtnInt} ${route === 'International' && styles.RoutAct}`}
                        />
                    </Col>
                </Row>
            </Container>

            <Container className={`position-relative ${styles.ExploreSrcCont}`}>

                {route === 'Domestic' && <>
                    {Routes?.length > 0 && <Row className={styles.ExploreSrcRow}>
                        {Routes.map((item, index) => {
                            return (
                                <Col xs={12} md={4} key={index} className={styles.ExploreSrcCol} style={{ animationDelay: index * 100 + "ms" }}>
                                    <div className={`d-flex flex-column flex-lg-row ${styles.ExploreSrcCard}`}>
                                        <div className={styles.ExploreSrcThumb}>
                                            <Image src={`/images/${item.thumbnail}`} width={80} height={80} className={styles.ExploreSrcImg} alt={item.code} quality={50}/>
                                        </div>
                                        <div className={`flex-grow-1 ${styles.ExploreSrcGrow}`}>
                                            <div className={`${styles.ExploreSrcDate}`}>
                                                {item.date}
                                            </div>
                                            <div className={`${styles.ExploreSrcDes}`}>
                                                {item.from}
                                                <img src='/images/route-lineplane-ico.png' alt={'route-icon'} width={34} height={16.39} />
                                                {item.to}
                                            </div>
                                            <div className={`${styles.ExploreSrcCode}`}>
                                                {item.code}
                                            </div>
                                            <span className={`mx-2 ${styles.ExploreSepor}`}>|</span>
                                            <div className={`${styles.ExploreSrcPrice}`}>
                                                {item.price}
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>}
                </>}

                {route === 'International' && <>
                    {Routes?.length > 0 && <Row className={styles.ExploreSrcRow}>
                        {Routes.map((item, index) => {
                            return (
                                <Col xs={12} md={4} key={index} className={styles.ExploreSrcCol} style={{ animationDelay: index * 100 + "ms" }}>
                                    <div className={`d-flex flex-column flex-lg-row ${styles.ExploreSrcCard}`}>
                                        <div className={styles.ExploreSrcThumb}>
                                            <Image src={`/images/${item.thumbnail}`} width={80} height={80} className={styles.ExploreSrcImg} alt={item.code}  quality={40} />
                                        </div>
                                        <div className={`flex-grow-1 ${styles.ExploreSrcGrow}`}>
                                            <div className={`${styles.ExploreSrcDate}`}>
                                                {item.date}
                                            </div>
                                            <div className={`${styles.ExploreSrcDes}`}>
                                                {item.from}
                                                <img src='/images/route-lineplane-ico.png' alt={'route-icon'} width={34} height={16.39} />
                                                {item.to}
                                            </div>
                                            <div className={`${styles.ExploreSrcCode}`}>
                                                {item.code}
                                            </div>
                                            <span className={`mx-2 ${styles.ExploreSepor}`}>|</span>
                                            <div className={`${styles.ExploreSrcPrice}`}>
                                                {item.price}
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>}
                </>}




                <div className='d-lg-none popularRtsUl-spt'>
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

export default ExploreSearch