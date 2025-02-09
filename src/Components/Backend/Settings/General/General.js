import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  // SelectControl,
  __experimentalInputControl as InputControl,
  __experimentalUnitControl as UnitControl,
  TextareaControl,
  Flex,
  PanelRow,
  __experimentalBorderControl as BorderControl,
  __experimentalBoxControl as BoxC,
  FormToggle,
  __experimentalNumberControl as NumberControl,
  SelectControl,
} from "@wordpress/components";
// import { purposeTypeOptions } from '../../../../utils/options';
// import { updateData } from '../../../../utils/functions';
import {
  Background,
  BoxControl,
  ColorControl,
  Device,
  IconLibrary,
  Label,
  ShadowControl,
} from "../../../../../../bpl-tools/Components";
// import Sortable from "../../../../../../bpl-tools/Components/ItemsPanel/Sortable";
import { updateData } from "../../../../utils/functions";
import { deleteIcon, duplicateIcon } from "../../../../utils/icons";
import {
  animationDurationOptions,
  animationType,
  paginationTypeOptions,
  slideEffectsOptions,
} from "../../../../utils/options";

const General = ({ attributes, setAttributes, device }) => {
  const { sliders, layout, options } = attributes;

  const {
    autoPlay,
    navigationBtn,
    loop,
    // scrollBar,
    simulateTouch,
    keyboardControl,
    mouseWheel,
    textAnimation,
    animationDuration,
    isAnimation,
    pagination,
    slideEffects
  } = options || {};

  console.log(isAnimation);
  

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
  console.log(navigationBtn.icon);

  return (
    <>
      {/* Layout Setting Section */}

      <PanelBody
        className="bPlPanelBody"
        title={__("Layout Setting", "b-blocks")}
        initialOpen={false}
      >
        <PanelRow>
          <Label className="">Height</Label>
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
          <Label className="">Width</Label>
          <Device />
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
          <Label className="">Padding</Label>
          <Device />
        </PanelRow>
        <BoxControl
          // className="mt5"
          // label={__("Padding", "b-blocks")}
          values={layout.padding[device]}
          onChange={(value) =>
            setAttributes({
              layout: updateData(layout, value, "padding", device),
            })
          }
        />
        <PanelRow>
          <Label className="">Margin</Label>
          <Device />
        </PanelRow>
        <BoxControl
          // className="mt5"
          // label={__("Margin", "b-blocks")}
          values={layout.margin[device]}
          onChange={(value) =>
            setAttributes({
              layout: updateData(layout, value, "margin", device),
            })
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
          onChange={(value) =>
            setAttributes({ layout: updateData(layout, value, "border") })
          }
          value={layout.border}
        />

        <ShadowControl
          value={layout.shadow}
          onChange={(value) =>
            setAttributes({ layout: updateData(layout, value, "shadow") })
          }
        />
      </PanelBody>

      {/* Slides Section */}

      <PanelBody
        className="bPlPanelBody"
        title={__("Slides", "b-blocks")}
        initialOpen={false}
      >
        {sliders?.map((slider, index) => {
          const { background, heading, description, button = {} } = slider;

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
              <Flex justify="start" align="center" gap={2}>
                <FormToggle
                  checked={button?.isButton}
                  onChange={
                    () =>
                      setAttributes({
                        sliders: updateData(
                          sliders,
                          !button.isButton,
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

              {button.isButton && (
                <>
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
                        sliders: updateData(
                          sliders,
                          value,
                          index,
                          "button",
                          "url"
                        ),
                      });
                    }}
                  />
                </>
              )}
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

      {/* Option section  */}

      <PanelBody
        className="bPlPanelBody"
        title={__("Slide Options", "b-blocks")}
        initialOpen={false}
      >
        <Flex justify="start" align="center" gap={2}>
          <FormToggle
            checked={navigationBtn.status}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !navigationBtn.status,
                  "navigationBtn",
                  "status"
                ),
              })
            }
          />
          <p className="mt10">Navigation Button</p>
        </Flex>
        {navigationBtn.status && (
          <>
            <IconLibrary
              label={__("Select an icon", "b-blocks")}
              onChange={(value) => {
                setAttributes({
                  options: updateData(options, value, "navigationBtn", "icon"),
                });
              }}
            />

            <ColorControl
              label={__("Button Color", "b-blocks")}
              value={navigationBtn.color}
              onChange={(value) =>
                setAttributes({
                  options: updateData(options, value, "navigationBtn", "color"),
                })
              }
            />
          </>
        )}
        <Flex justify="start" align="center" gap={2}>
          <FormToggle
            checked={autoPlay.isAutoPlay}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !autoPlay.isAutoPlay,
                  "autoPlay",
                  "isAutoPlay"
                ),
              })
            }
          />
          <p className="mt10">Auto Play</p>
        </Flex>
        {autoPlay?.isAutoPlay && (
          <>
            <NumberControl
              label={__("Auto Play Delay (ms)", "b-blocks")}
              isShiftStepEnabled={true}
              onChange={(value) => {
                setAttributes({
                  options: updateData(options, value, "autoPlay", "delay"),
                });
              }}
              shiftStep={2}
              step={500}
              value={autoPlay.delay}
            />

            <Flex justify="start" align="center" gap={2}>
              <FormToggle
                checked={autoPlay.disableOnInteraction}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !autoPlay.disableOnInteraction,
                      "autoPlay",
                      "disableOnInteraction"
                    ),
                  })
                }
              />
              <p className="mt10">Disable Auto Play On Interaction</p>
            </Flex>
          </>
        )}
        {!autoPlay.isAutoPlay && (
          <Flex justify="start" align="center" gap={2}>
            <FormToggle
              checked={loop}
              onChange={() =>
                setAttributes({
                  options: updateData(options, !loop, "loop"),
                })
              }
            />
            <p className="mt10">Slide Loop</p>
          </Flex>
        )}
        {/* <Flex justify="start" align="center" gap={2}>
          <FormToggle
            checked={scrollBar}
            onChange={() =>
              setAttributes({
                options: updateData(options, !scrollBar, "scrollBar"),
              })
            }
          />
          <p className="mt10">Hide Scrollbar</p>
        </Flex> */}
        <Flex justify="start" align="center" gap={2}>
          <FormToggle
            checked={simulateTouch}
            help
            onChange={() =>
              setAttributes({
                options: updateData(options, !simulateTouch, "simulateTouch"),
              })
            }
          />
          <p className="mt10">Simulate on touch</p>
        </Flex>
        <small>Maybe Simulate touch not work properly on backend</small>
        <Flex justify="start" align="center" gap={2}>
          <FormToggle
            checked={keyboardControl}
            help
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !keyboardControl,
                  "keyboardControl"
                ),
              })
            }
          />
          <p className="mt10">Keyboard Control</p>
        </Flex>
        <Flex justify="start" align="center" gap={2}>
          <FormToggle
            checked={mouseWheel}
            help
            onChange={() =>
              setAttributes({
                options: updateData(options, !mouseWheel, "mouseWheel"),
              })
            }
          />
          <p className="mt10">Mouse Wheel Control</p>
        </Flex>
        <Flex justify="start" align="center" gap={2}>
          <FormToggle
            checked={pagination.status}
            onChange={() =>
              setAttributes({
                options: updateData(options, !pagination.status, "pagination", "status"),
              })
            }
          />
          <p className="mt10">Pagination</p>
        </Flex>
        {
          pagination.status && (<>
              <Flex justify="start" align="center" gap={2}>
          <FormToggle
            checked={pagination.dynamicBullets}
            onChange={() =>
              setAttributes({
                options: updateData(options, !pagination.dynamicBullets, "pagination", "dynamicBullets"),
              })
            }
          />
          <p className="mt10">Dynamic Bullets</p>
        </Flex>
        <Flex justify="start" align="center" gap={2}>
          <FormToggle
            checked={pagination.clickable}
            onChange={() =>
              setAttributes({
                options: updateData(options, !pagination.clickable, "pagination", "clickable"),
              })
            }
          />
          <p className="mt10">Clickable</p>
        </Flex>
        <SelectControl
        label={__("Pagination Type", "b-blocks")}
        value={pagination.type}
        onChange={(value) =>
          setAttributes({
            options: updateData(options, value, "pagination", "type"),
          })
        }
        options={paginationTypeOptions}
        />
          </>)
        }

<SelectControl
        label={__("Slide Effects", "b-blocks")}
        value={slideEffects}
        onChange={(value) =>
          setAttributes({
            options: updateData(options, value, "slideEffects"),
          })
        }
        options={slideEffectsOptions}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Animation Options", "b-blocks")}
        initialOpen={false}
      >
        <Flex justify="start" align="center" gap={2}>
          <FormToggle
            checked={isAnimation}
            help
            onChange={() =>
              setAttributes({
                options: updateData(options, !isAnimation, "isAnimation"),
              })
            }
          />
          <p className="mt10">Text Animation</p>
        </Flex>
        {isAnimation && (
          <>
            <SelectControl
              label={__("Select Animation Type", "b-blocks")}
              value={textAnimation}
              onChange={(value) => {
                setAttributes({
                  options: updateData(options, value, "textAnimation"),
                });
              }}
              options={animationType}
            />
            <SelectControl
              label={__("Animation Duration", "b-blocks")}
              value={animationDuration}
              onChange={(value) => {
                setAttributes({
                  options: updateData(options, value, "animationDuration"),
                });
              }}
              options={animationDurationOptions}
            />
          </>
        )}
      </PanelBody>
    </>
  );
};

export default General;
