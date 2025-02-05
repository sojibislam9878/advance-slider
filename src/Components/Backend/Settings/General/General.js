import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  // SelectControl,
  __experimentalInputControl as InputControl,
  TextareaControl,
  Flex,
} from "@wordpress/components";
// import { purposeTypeOptions } from '../../../../utils/options';
// import { updateData } from '../../../../utils/functions';
import { Background, OverlayControl } from "../../../../../../bpl-tools/Components";
// import Sortable from "../../../../../../bpl-tools/Components/ItemsPanel/Sortable";
import { updateData } from "../../../../utils/functions";
import { deleteIcon, duplicateIcon } from "../../../../utils/icons";


const General = ({ attributes, setAttributes }) => {
  const { sliders } = attributes;

  const handleAdd = () => {
    const defaultSlide = {
      heading: "Hello World",
      description:
        "Holisticly reconceptualize long-term high-impact technologies after reliable information. Synergistically reintermediate.",
      background: {
        color: "rgba(0, 0, 255, 1)",
        gradient: "linear-gradient(135deg, #4527a4, #8344c5)",
        image: {
          url: "https://i.ibb.co.com/4fck8Cv/8.jpg",
        },
        type: "solid",
        repeat: "no-repeat",
        size: "cover",
        position: "center",
        attachment: "scroll",
      },
      button: {
        label: "visit",
        url: "#",
      },
      overlay: "",
    };
    const newSildes = [...sliders, defaultSlide];
    setAttributes({ sliders: newSildes });
  };

  const handleDuplicate = (index) => {

    const slideToDuplicate = { ...sliders[index] };
    const updatedSlides = [...sliders];
    updatedSlides.splice(index + 1, 0, slideToDuplicate);
    setAttributes({ sliders: updatedSlides });
  };

  const handleDelete =(index)=>{
    const updatedSliders = sliders.filter((_, indx) => indx !== index);
    setAttributes({ sliders: updatedSliders });
  }

  // const over= {
  //   isEnabled:true,
  // }
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Slides", "b-blocks")}
        initialOpen={false}
      >
        {sliders.map((slider, index) => {
          const { background, heading, description, button } = slider;
          console.log(background);

          return (
            <PanelBody
              key={index}
              title={__(`slide ${index + 1}`, "b-blocks")}
              initialOpen={false}
            >
              <InputControl
                label={__("Heading", "b-blocks")}
                value={heading}
                onChange={(value)=>setAttributes({sliders:updateData(sliders, value, index, "heading")})}
              />

              <TextareaControl
                className="mt5"
                label={__("Description", "b-blocks")}
                value={description}
                onChange={(value)=>setAttributes({sliders:updateData(sliders, value, index, "description")})}
              />
              <Background
                value={background}
                onChange={(value) => {
                  setAttributes({
                    sliders: updateData(sliders, value, index, "background"),
                  });
                }}
              />
              {/* <OverlayControl value={over} onChange={(value)=>console.log(value)
              }/> */}

              <InputControl
                className="mt5"
                label={__("Button Label", "b-blocks")}
                value={button.label}
                onChange={(val) => {
                  const newSliders = [...sliders];
                  const updatedSlider = { ...newSliders[index], heading: val };
                  newSliders[index] = updatedSlider;
                  setAttributes({ sliders: newSliders });
                }}
              />
              <InputControl
                className="mt5"
                label={__("Button URL", "b-blocks")}
                value={button.url}
                onChange={(val) => {
                  const newSliders = [...sliders];
                  const updatedSlider = { ...newSliders[index], heading: val };
                  newSliders[index] = updatedSlider;
                  setAttributes({ sliders: newSliders });
                }}
              />
              <Flex>
                <button className="btn duplicate" onClick={()=>handleDuplicate(index)}>
                  {duplicateIcon} Duplicate
                </button>
                <button onClick={()=>{handleDelete(index)}} className="btn delete">{deleteIcon} Delete</button>
              </Flex>
            </PanelBody>
          );
        })}
      </PanelBody>
      <button onClick={handleAdd} className="btn add">Add</button>
    </>
  );
};

export default General;
