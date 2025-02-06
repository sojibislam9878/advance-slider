import { getBackgroundCSS, getBoxCSS, getMultiShadowCSS} from "../../../../bpl-tools/utils/getCSS";

const Style = ({attributes, id }) => {
 const {sliders, layout}= attributes

 
  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .slider`;
  const sliderBodySl = `${blockSl} .mySwiper`;
  const slideSl = `${sliderBodySl}  .swiper-slide`;
  const contentSl = `${slideSl} .content`;
  
  // border-top-left-radius:${layout.borderRadius.top} ;
  // border-top-right-radius:${layout.borderRadius.right}  ;
  // border-bottom-right-radius:${layout.borderRadius.bottom}  ;
  // border-bottom-left-radius: ${layout.borderRadius.left} ;

  const slidesBg =sliders?.map((slider, index)=>{
    const {background}=slider;
    console.log(index);
    
    return`
     ${sliderBodySl} .swiper-slide-${index}{
      ${getBackgroundCSS(background)}
     }
    `
  }).join("\n");

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${slidesBg}
		
		${sliderBodySl} {
			
       border: ${layout.border.width} ${layout.border.style} ${layout.border.color};
       min-height: ${layout.height.desktop};
       max-width: ${layout.width.desktop};
       border-radius:${getBoxCSS(layout.borderRadius)};
       margin:${getBoxCSS(layout.margin.desktop)};
       box-shadow: ${getMultiShadowCSS(layout.shadow)};
       
		}

    ${contentSl}{
    margin:${getBoxCSS(layout.padding.desktop)}
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




	`,
      }}
    />
  );
};
export default Style;
