import React from 'react'
import styled from 'styled-components'
import Container from '../Container/Container'

const ui = {
  Div: styled.div`
    width: 100%;
  `,
  ContactWrapper: styled.section`
    padding: 60px 0;
    border-bottom: 1px solid #353C46;
    background: #151D3B;
    color: #868c96;
    text-align: center;
  `,
  Container: styled(Container)``,
  ContactRow: styled.div`
  `,
  ContactContent: styled.div`
    display: flex;
    justify-content: space-between;
    p {
      font-size: 15px;
      margin: 10px 0 0px;
      position: relative;

      ::after{
        background: #353C46;
        bottom: -30px;
        content: "";
        height: 1px;
        left: 50%;
        position: absolute;
        transform: translate(-50%);
        width: 80%;
      }
    }

    h6 {
      color: #8b9199;
      font-size: 15px;
      font-weight: 400;
      margin-bottom: 10px;

      span {
        color: #353c47;
        margin: 0 10px;
      }
    }

    .contact-social {
      margin-top: 30px;

      li {
        a {
          border: 1px solid #8b9199;
          color: #8b9199;
          display: inline-block;
          height: 40px;
          margin: 0 10px;
          padding-top: 7px;
          transition: all 0.4s ease 0s;
          width: 40px;

          :hover {
            border: 1px solid #FAB702;
            color: #FAB702;
          }
        }
      }
    }

    .contact-social > ul {
      display: inline-flex;
    }
  `,
  ContactLogo: styled.a`
    img {
      max-width: 100%;
      height: auto;
    }
  `,
  Footer: styled.footer`
    background: #1A1E25;
    color: #868c96;
    p {
      padding: 10px 0;
      text-align: center;
      font-size: 12px;
    }
  `
}
const Footer = () => {
  return (
    <>
    <ui.Div>
      
      <ui.ContactWrapper>
        <ui.Container>
          <ui.ContactRow>
            <ui.ContactContent>
              <div>
                <ui.ContactLogo>
                  <h6>Kevin Valdivia</h6>
                </ui.ContactLogo>
                <p>Frontend Developer</p>
                <div></div>
                <h6>+01 2345 6789 12<span>|</span>+012345 6789 12</h6>
              </div>
              <div className="contact-social">
                <ul>
                  <li><a className="hover-target" href="a"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a className="hover-target" href="a"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a className="hover-target" href="a"><i className="fab fa-github"></i></a></li>
                  <li><a className="hover-target" href="a"><i className="fab fa-behance"></i></a></li>
                  <li><a className="hover-target" href="a"><i className="fab fa-pinterest-p"></i></a></li>
                </ul>
              </div>
            </ui.ContactContent>
          </ui.ContactRow>
        </ui.Container>
      </ui.ContactWrapper>
      <ui.Footer>
        <p>Copyright &copy; 2019 <span>KV</span> All Rights Reserved.</p>
      </ui.Footer>
    </ui.Div>

    </>
  )
}

export default Footer