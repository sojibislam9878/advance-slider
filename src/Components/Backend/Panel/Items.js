import { __ } from "@wordpress/i18n";
// import { produce } from "immer";
import { updateData } from "../../../../../bpl-tools/utils/functions";
import { Background } from "../../../../../bpl-tools/Components";
import {
  __experimentalInputControl as InputControl,
  Flex,
  TextareaControl,
  FormToggle,
} from "@wordpress/components";
const Items = ({
  attributes,
  setAttributes,
  // arrKey,
  index,
  // setActiveIndex = false
}) => {
  const { sliders } = attributes;

  // const updateSlides = (property, val, childProperty = null) => {
  // 	const newItems = produce(attributes[arrKey], draft => {
  // 		if (null !== childProperty) {
  // 			draft[index][property][childProperty] = val;
  // 		} else {
  // 			draft[index][property] = val;
  // 		}
  // 	});

  // 	setAttributes({ [arrKey]: newItems });
  // 	setActiveIndex && setActiveIndex(index);
  // }

  return (
    <div>
      <InputControl
        value={sliders[index]?.heading}
        //   onChange={v => updateSlides("heading",v)}
        onChange={(value) =>
          setAttributes({
            sliders: updateData(sliders, value, index, "heading"),
          })
        }
      />

      <TextareaControl
        className="mt5"
        label={__("Description", "b-blocks")}
        value={sliders[index]?.description}
        onChange={(value) =>
          setAttributes({
            sliders: updateData(sliders, value, index, "description"),
          })
        }
      />

      <Background
        value={sliders[index]?.background}
        onChange={(value) => {
          setAttributes({
            sliders: updateData(sliders, value, index, "background"),
          });
        }}
      />

      <Flex justify="start" align="center" gap={2}>
        <FormToggle
          checked={sliders[index]?.button?.isButton}
          onChange={
            () =>
              setAttributes({
                sliders: updateData(
                  sliders,
                  !sliders[index]?.button.isButton,
                  index,
                  "button",
                  "isButton"
                ),
              })
            // console.log(button.isBtn)
          }
        />
        <p className="mt10">Show Button</p>
      </Flex>
      {sliders[index]?.button.isButton && (
        <>
          <InputControl
            className="mt5"
            label={__("Button Label", "b-blocks")}
            value={sliders[index]?.button.label}
            onChange={(value) => {
              setAttributes({
                sliders: updateData(sliders, value, index, "button", "label"),
              });
            }}
          />
          <InputControl
            className="mt5"
            label={__("Button URL", "b-blocks")}
            value={sliders[index]?.button.url}
            onChange={(value) => {
              setAttributes({
                sliders: updateData(sliders, value, index, "button", "url"),
              });
            }}
          />
        </>
      )}
    </div>
  );
};

export default Items;
