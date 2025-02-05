import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  // SelectControl,
  __experimentalInputControl as InputControl,
  __experimentalUnitControl as UnitControl,
  TextareaControl,
  Flex,
  PanelRow,
  __experimentalBorderControl as  BorderControl,
  __experimentalBoxControl as  BoxC,
} from "@wordpress/components";
// import { purposeTypeOptions } from '../../../../utils/options';
// import { updateData } from '../../../../utils/functions';
import {
  Background,
  BoxControl,
  Device,
  Label,
  ShadowControl,
} from "../../../../../../bpl-tools/Components";
// import Sortable from "../../../../../../bpl-tools/Components/ItemsPanel/Sortable";
import { updateData } from "../../../../utils/functions";
import { deleteIcon, duplicateIcon } from "../../../../utils/icons";

const General = ({ attributes, setAttributes, device }) => {
  const { sliders, layout } = attributes;

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

  const handleDelete = (index) => {
    const updatedSliders = sliders.filter((_, indx) => indx !== index);
    setAttributes({ sliders: updatedSliders });
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Layout Setting", "b-blocks")}
        initialOpen={false}
      >
        <PanelRow>
          <Label>Height</Label>
          <Device />
        </PanelRow>
        <UnitControl
          value={layout.height[device]}
          onChange={(value) =>
            setAttributes({
              layout: updateData(layout, value, "height", device),
            })
          }
        />
        <PanelRow>
        <Label>Height</Label>
        <Device/>
      </PanelRow>
        <UnitControl
          value={layout.width[device]}
          onChange={(value) =>
            setAttributes({
              layout: updateData(layout, value, "width", device),
            })
          }
        />
          <PanelRow>
          <Label>Padding</Label>
          <Device />
        </PanelRow>
        <BoxControl
          // className="mt5"
          // label={__("Padding", "b-blocks")}
          values={layout.padding[device]}
          onChange={(value) =>
            setAttributes({ layout: updateData(layout, value, "padding", device)  })
          }
        />
        <PanelRow>
          <Label>Margin</Label>
          <Device />
        </PanelRow>
        <BoxControl
          // className="mt5"
          // label={__("Margin", "b-blocks")}
          values={layout.margin[device]}
          onChange={(value) =>
            setAttributes({ layout: updateData(layout, value, "margin", device) })
          }
        />
        <BoxC
          className="mt5"
          label={__("Border Radius", "b-blocks")}
          values={layout.borderRadius}
          onChange={(value) =>
            setAttributes({ layout: updateData(layout, value, "borderRadius") })
          }
        />

        <BorderControl
        className="mt5"
          label={__("Border")}
          onChange={(value)=>console.log(value)}
          value={layout.border}
        />

        <ShadowControl
        value={layout.shadow}
        onChange={(value)=>setAttributes({layout:updateData(layout, value, "shadow")})}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Slides", "b-blocks")}
        initialOpen={false}
      >
        {sliders.map((slider, index) => {
          const { background, heading, description, button } = slider;

          return (
            <PanelBody
              key={index}
              title={__(`slide ${index + 1}`, "b-blocks")}
              initialOpen={false}
            >
              <InputControl
                label={__("Heading", "b-blocks")}
                value={heading}
                onChange={(value) =>
                  setAttributes({
                    sliders: updateData(sliders, value, index, "heading"),
                  })
                }
              />

              <TextareaControl
                className="mt5"
                label={__("Description", "b-blocks")}
                value={description}
                onChange={(value) =>
                  setAttributes({
                    sliders: updateData(sliders, value, index, "description"),
                  })
                }
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
                onChange={(value) => {
                  setAttributes({
                    sliders: updateData(
                      sliders,
                      value,
                      index,
                      "button",
                      "label"
                    ),
                  });
                }}
              />
              <InputControl
                className="mt5"
                label={__("Button URL", "b-blocks")}
                value={button.url}
                onChange={(value) => {
                  setAttributes({
                    sliders: updateData(sliders, value, index, "button", "url"),
                  });
                }}
              />
              <Flex>
                <button
                  className="btn duplicate"
                  onClick={() => handleDuplicate(index)}
                >
                  {duplicateIcon} Duplicate
                </button>
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                  className="btn delete"
                >
                  {deleteIcon} Delete
                </button>
              </Flex>
            </PanelBody>
          );
        })}
        <button onClick={handleAdd} className="btn add">
          Add
        </button>
      </PanelBody>
    </>
  );
};

export default General;
