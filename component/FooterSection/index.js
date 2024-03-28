import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './footer.module.scss'
import Link from 'next/link'
import { FooterLinks, WhiteBrandLogo, headerUrl } from '../../utils/static'
import ButtonStyle from '../ButtonStyle/ButtonStyle';
import Image from 'next/image'
import AdventureStarts from '../AdventureStarts/AdventureStarts'
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router'


const FooterSection = ({ title }) => {
  const router = useRouter()

  return (
    <footer className={`${styles.FooterBlock} ${router.asPath !== '/' && styles.FooterOther}`}>

      {router.asPath === '/' && <AdventureStarts
        Title={"The Adventure starts today!"}
        SubTitle={"We are trusted around the World!"}
        BtnTitle={"Book Now"}
      />}


      <Container className={styles.ContBody}>
        <Row>
          <Col xs={12} xl={3} className={styles.FooterLogoCol}>

            <div className={styles.FooterLogoLeft}>
              <Link href={WhiteBrandLogo.url}>
                <a className={'mainLogoArea'}>
                  <Image
                    src={WhiteBrandLogo.imgPath}
                    alt={WhiteBrandLogo.imgAlt}
                    width={146}
                    height={30}
                  />
                </a>
              </Link>

              <p className={styles.FooterLogoCont}>Lorem ipsum dolor sit amet consectetur. Imperdiet morbi arcu condimentum aliquam. Lorem ipsum dolor sit amet consectetur.</p>


              <ul className={styles.FooterSocial}>
                <li><Link href={'#'}><a target='_blank'><Image src={'/images/facebook-footer.webp'} alt="copyright" width={20} height={20} /></a></Link></li>
                <li><Link href={'#'}><a target='_blank'><Image src={'/images/instagram-footer.webp'} alt="copyright" width={20} height={20} /></a></Link></li>
                <li><Link href={'#'}><a target='_blank'><Image src={'/images/twitter-footer.webp'} alt="copyright" width={20} height={20} /></a></Link></li>
                <li><Link href={'#'}><a target='_blank'><Image src={'/images/linkedin-footer.webp'} alt="copyright" width={20} height={20} /></a></Link></li>
              </ul>
            </div>

          </Col>

          {FooterLinks?.length > 0 && <>
            {FooterLinks.map((item, index) => {
              return (
                <Col xs={12} sm={6} md={3} xl key={index}>
                  <div className={styles.QuickLinks}>
                    <h5>{item.heading}</h5>
                    <ul>
                      {item.Urls.map((navitem, index) => {
                        return (
                          <li key={index}>
                            <Link href={navitem.url}>
                              <a className='d-flex align-items-center'>
                                <span className={styles.QuickLinksArw}><Image src={'/images/angle-double.webp'} alt="angle" width={32} height={26} /></span>
                                <span className='flex-grow-1'>{navitem.title}</span>
                              </a>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Col>
              )
            })}
          </>}

          <Col xs={12} sm={6} md={4} xl={3}>
            <hr className={`d-sm-none ${styles.ContactLinksHr}`}></hr>
            <div className={`${styles.QuickLinks}`}>
              <h5>Contact</h5>

              <ul className={`${styles.GetConnectUl}`}>
              {headerUrl.social.map((item, index) =>(
                <li key={index}>
                  <a href={item.url} className='d-flex align-items-center'>
                    <div className={styles.QuickCIcon}>
                      <Icon icon={item.icon} color='#eabe6c' />
                    </div>
                    <div className={`flex-grow-1 ${styles.ConnectPhone}`}>
                      <span>{item.heading}</span>
                      <strong>{item.title}</strong>
                    </div>
                  </a>
                </li>
              ))}
                
                
              </ul>

            </div>
          </Col>

          <Col xs={12}  md={5} xl={3}>
            <hr className={`d-md-none ${styles.ContactLinksHr}`}></hr>
            <div className={`${styles.QuickLinks}`}>
              <h5 className={`${styles.NewsltrTitle}`}>Newsletter</h5>
              <p className={`${styles.NewsltrSub}`}>Subscribe our newsletter to get our latest update & news.</p>

              <div className={`${styles.animateLabel}`}>
                <span className={styles.EmailIcon}><Image src={'/images/subs-mail.png'} alt="mail-icon" width={16} height={16} /> </span>
                <input type="text" id="username" className={`form-control ${styles.FormControl}`} required />
                <label htmlFor="username"> Email or phone </label>
              </div>

              <ButtonStyle
                content={<><span className='me-1'>Submit</span> <Icon icon="fa:send" width="16" height="16" /></>}
                outline={false}
                fullwidth={true}
                onClick={() => { console.log("Click Event") }}
                SubsCrbBtn={true}
              />

              <div className="text-center">
                <div className={styles.QuickMaster}>
                  <Image src={'/images/cards-visa-mastercard.webp'} alt="cards-visa-mastercard" width={250} height={22} />
                </div>

                <Image src={'/images/rating-google.webp'} alt="rating-google" width={228} height={46} />
              </div>

            </div>
          </Col>

         
        </Row>
      </Container>


      <div className={styles.ContFooter}>
        <Container>
          <Row className={`${styles.CRowFooter} align-items-center`}>
            <Col xs={12} sm={6}>
              <span className={styles.ContFtCopyrt}>
                <Image src={'/images/icoutline-copyright.webp'} alt="copyright" width={18} height={18} />
              </span>
              {new Date().getFullYear()}. All Rights Reserved.
            </Col>
            <Col xs={12} sm={6} className='text-sm-end'>
              (DBA of SNVA Traveltech Pvt. Ltd.)
            </Col>
          </Row>
        </Container>
      </div>

    </footer>
  )
}

export default FooterSection