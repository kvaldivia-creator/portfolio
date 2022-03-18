import React, { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ReactComponent as FlechaIzquierda } from '../../assets/iconmonstr-angel-left-thin.svg'
import { ReactComponent as FlechaDerecha } from '../../assets/iconmonstr-angel-right-thin.svg'

const ui = {
  SlideShowWrapper: styled.div`
    max-width: 1000px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  `,
  SlideShow: styled.div`
    display: flex;
    flex-wrap: nowrap;
  `,
  SlideButtons: styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
  `,
  Button: styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    &:hover {
      background: rgba(0,0,0,.2);
      path {
        fill: #fff;
      }
    }
    path {
      filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
    }
    ${props => props.derecho ? 'right: 0' : 'left: 0'}
  `
}

const SlideShow = ({
  children,
  controles = false,
  autoplay = false,
  velocidad="500",
  intervalo="5000"
}) => {
  const slideshow = useRef(null)
	const intervaloSlideshow = useRef(null)


	const handleNext = useCallback(() => {
    if(!slideshow.current){
      return null
    }
		if(slideshow.current.children.length > 0){
			const primerElemento = slideshow.current.children[0]
			slideshow.current.style.transition = `${velocidad}ms ease-out all`

			const tamañoSlide = slideshow.current.children[0].offsetWidth
			slideshow.current.style.transform = `translateX(-${tamañoSlide + 20}px)`

			const transicion = () => {
				slideshow.current.style.transition = 'none'
				slideshow.current.style.transform = `translateX(0)`
				slideshow.current.appendChild(primerElemento)

				slideshow.current.removeEventListener('transitionend', transicion)
			}
			slideshow.current.addEventListener('transitionend', transicion)

		}
	}, [velocidad])
	
	const handlePrevious = () => {
		if(slideshow.current.children.length > 0){
			const index = slideshow.current.children.length - 1
			const ultimoElemento = slideshow.current.children[index]
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild)
			
			slideshow.current.style.transition = 'none'
			const tamañoSlide = slideshow.current.children[0].offsetWidth
			slideshow.current.style.transform = `translateX(-${tamañoSlide + 20}px)`
		
			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-out all`
				slideshow.current.style.transform = `translateX(0)`
			}, 30)
		}
	}

	useEffect(() => {
		if(autoplay){
			intervaloSlideshow.current = setInterval(() => {
				handleNext()
			}, intervalo)
	
			slideshow.current.addEventListener('mouseenter', () => {
				clearInterval(intervaloSlideshow.current)
			})

			slideshow.current.addEventListener('mouseleave', () => {
				intervaloSlideshow.current = setInterval(() => {
					handleNext()
				}, intervalo)
			})
		}
	}, [autoplay, intervalo, handleNext])

  return (
    <>
      <ui.SlideShowWrapper>
        <ui.SlideShow ref={slideshow}>
          {children}
        </ui.SlideShow>

        {
          controles && <ui.SlideButtons>
                        <ui.Button onClick={handlePrevious}>
                          <FlechaIzquierda />
                        </ui.Button>
                        <ui.Button derecho onClick={handleNext}>
                          <FlechaDerecha />
                        </ui.Button>
                      </ui.SlideButtons>
        }
      </ui.SlideShowWrapper>
    </>
  )
}

export default SlideShow