import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './ourhighlight.module.scss'; 
import Image from 'next/image';

const OurHighlights = ({ Title, Content }) => {
    return (
        <section className={styles.HighlightsBlock}>
            <Container className='position-relative'>
                <SectionTitle title={Title} />
                {Content?.length > 0 && <Row className={`${styles.HighlightsRow}`}>
                    {Content.map((item, index) => {
                        return (
                            <Col xs={6} lg={3} key={index} className={styles.HighlightsCol}>
                                <div className={`${styles.HighlightsCard}`}>
                                    <div className={styles.HighlightsThumb}>
                                        <Image src={`/images/${item.icon}`} alt={item.title} width={50} height={50} quality={40}/>
                                    </div>

                                    <div className={`${styles.HighlightsGrow}`}>
                                        <div className={`${styles.HighlightsTitle}`}>
                                            {item.title}
                                        </div>
                                        <div className={`${styles.HighlightsDes}`}>
                                            {item.description}
                                        </div>

                                    </div>

                                </div>
                            </Col>
                        )
                    })}

                </Row>}

                <div className='d-sm-none popularRtsUl-spt'>
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

export default OurHighlights