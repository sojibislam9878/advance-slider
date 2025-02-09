import { getBackgroundCSS, getBorderCSS, getBoxCSS, getColorsCSS, getMultiShadowCSS, getTypoCSS} from "../../../../bpl-tools/utils/getCSS";

const Style = ({attributes, id }) => {
 const {sliders, layout, options, styles}= attributes
const {header, description, button}=styles

const {colors, border}=button


  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .slider`;
  const sliderBodySl = `${blockSl} .mySwiper`;
  const prevBtnSl = `${sliderBodySl} .swiper-button-prev`;
  const nextBtnSl = `${sliderBodySl} .swiper-button-next`;
  const slideSl = `${sliderBodySl}  .swiper-slide`;
  const headerSl = `${slideSl} .header`
  const descriptionSl = `${slideSl} .description`
  const contentSl = `${slideSl} .content`;
  const buttonSl = `${contentSl} .button`;

  const slidesBg =sliders?.map((slider, index)=>{
    const {background}=slider;
    
    return`
     ${sliderBodySl} .swiper-slide-${index}{
      ${getBackgroundCSS(background)}
     }
    `
  }).join("\n");

  const verticalBtnPosition = () => {
    if (options.slideDirection === "vertical") {
      return `
        ${prevBtnSl}, ${nextBtnSl} {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
        }
  
        ${prevBtnSl} {
          top: 20px;
          transform: translateX(-50%) rotate(-90deg);
        }
  
        ${nextBtnSl} {
          bottom: 0px;
          margin-top: 120px;
          transform: translateX(-50%) rotate(90deg);
        }
      `;
    }
    return ""; 
  };
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${getTypoCSS('', header.typo)?.googleFontLink}
        ${getTypoCSS('', description.typo)?.googleFontLink}
        ${getTypoCSS(headerSl, header.typo)?.styles}
        ${getTypoCSS(descriptionSl, description.typo)?.styles}
		
        ${slidesBg}
        ${sliderBodySl}{
        box-shadow: ${getMultiShadowCSS(layout.shadow)};
        }
		
		${sliderBodySl} {
       border: ${layout.border.width} ${layout.border.style} ${layout.border.color};
       height: ${layout.height.desktop};
       max-width: ${layout.width.desktop};
       border-radius:${getBoxCSS(layout.borderRadius)};
       margin:${getBoxCSS(layout.margin.desktop)};
       
		}

    ${contentSl}{
    margin:${getBoxCSS(layout.padding.desktop)};
    text-align:${styles.textAlign};
    }


    ${prevBtnSl}, ${nextBtnSl}{
    fill: ${options.navigationBtn.color};
    }

    ${headerSl}{
    color:${header.color};
    }
    ${descriptionSl}{
    color:${description.color};
    }

    ${buttonSl} {
      ${getColorsCSS(colors)}
      border: ${getBorderCSS(border)};
      border-radius: ${border.radius};
      padding: 12px 20px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
  
      &:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      }
  
      &:active {
          transform: translateY(0);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
  }
    @media  (min-width:641px) and (max-width: 1024px){
        ${sliderBodySl}{
        min-height: ${layout.height.tablet};
        max-width: ${layout.width.tablet};
        margin:${getBoxCSS(layout.margin.tablet)}
        }

        ${contentSl}{
          margin:${getBoxCSS(layout.padding.tablet)}
          }
    }

    @media (max-width: 480px){
      ${sliderBodySl}{
        min-height: ${layout.height.mobile};
        max-width: ${layout.width.mobile};
        margin:${getBoxCSS(layout.margin.mobile)}
        }

        ${contentSl}{
          margin:${getBoxCSS(layout.padding.mobile)}
          }
    }

    ${verticalBtnPosition()} 




	`,
      }}
    />
  );
};
export default Style;
