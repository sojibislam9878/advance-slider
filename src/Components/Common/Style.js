import { getBackgroundCSS, getBoxCSS, getMultiShadowCSS} from "../../../../bpl-tools/utils/getCSS";

const Style = ({attributes, id }) => {
 const {layout}= attributes
 
  
  const bg = {
    color: "rgba(0, 0, 255, 1)",
    gradient: "linear-gradient(135deg, #4527a4, #8344c5)",
    image: {
      url: "https://i.ibb.co.com/4fck8Cv/8.jpg",
    },
    type: "image",
    repeat: "no-repeat",
    size: "cover",
    position: "center",
    overlayColor:"",
    attachment: "scroll",
  };
  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .slider`;
  const sliderBodySl = `${blockSl} .mySwiper`;
  const slideSl = `${sliderBodySl}  .swiper-slide`;
  const contentSl = `${slideSl} .content`;
  
  // border-top-left-radius:${layout.borderRadius.top} ;
  // border-top-right-radius:${layout.borderRadius.right}  ;
  // border-bottom-right-radius:${layout.borderRadius.bottom}  ;
  // border-bottom-left-radius: ${layout.borderRadius.left} ;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		
		${sliderBodySl} {
			${getBackgroundCSS(bg)}
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
