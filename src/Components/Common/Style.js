import { getBackgroundCSS } from "../../../../bpl-tools/utils/getCSS";

const Style = ({ id }) => {
  // console.log(attributes);
  
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

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		
		${sliderBodySl} {
			${getBackgroundCSS(bg)}
				border: 1px solid red;
		}

	`,
      }}
    />
  );
};
export default Style;
