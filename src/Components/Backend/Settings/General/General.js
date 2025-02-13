import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
  // TextareaControl,
  Flex,
  PanelRow,
  __experimentalBorderControl as BorderControl,
  __experimentalBoxControl as BoxC,
  FormToggle,
  __experimentalNumberControl as NumberControl,
  SelectControl,
} from "@wordpress/components";
import {
  BButtonGroup,
  BoxControl,
  ColorControl,
  Device,
  IconLibrary,
  ItemsPanel,
  Label,
  ShadowControl,
} from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";
import {
  animationDurationOptions,
  animationType,
  paginationTypeOptions,
  slideEffectsOptions,
} from "../../../../utils/options";
import Items from "../../Panel/Items";
import { emUnit, pxUnit, remUnit, vwUnit } from "../../../../../../bpl-tools/utils/options";

const General = ({ attributes, setAttributes, device }) => {
  const { layout, options } = attributes;

  const {
    autoPlay,
    navigationBtn,
    loop,
    simulateTouch,
    keyboardControl,
    mouseWheel,
    textAnimation,
    animationDuration,
    isAnimation,
    pagination,
    slideEffects,
    slideDirection,
    grabCursor,
  } = options || {};

  console.log(isAnimation);
  return (
    <>
      {/* Layout Setting Section */}
      <PanelBody className="bPlPanelBody" title={__("Slides", "b-blocks")}>
        <ItemsPanel
          {...{ attributes, setAttributes }}
          arrKey="sliders"
          newItem={{
            heading: "new slider",
            description:
              "Holisticly reconceptualize long-term high-impact technologies after reliable information. Synergistically reintermediate.",
            background: {
              color: "rgba(0, 0, 255, 1)",
              gradient: "linear-gradient(135deg, #4527a4, #8344c5)",
              image: {
                url: "https://i.ibb.co.com/0jDXVmFJ/23227107-f847-4a25-ac32-74562e88cf0f.jpg",
              },
              type: "image",
              repeat: "no-repeat",
              size: "cover",
              position: "center",
              overlayColor: "#00000061",
              attachment: "scroll",
            },
            button: {
              isButton: false,
              label: "visit",
              url: "#",
            },
          }}
          ItemSettings={Items}
          itemLabel="Slide"
          design="sortable"
        />
      </PanelBody>

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
          units={[pxUnit(), emUnit(), remUnit(),vwUnit()]}
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
          max={100}
          step={1}
          min={1}
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

      {/* Option section  */}

      <PanelBody
        className="bPlPanelBody"
        title={__("Slide Options", "b-blocks")}
        initialOpen={false}
      >
        <BButtonGroup
          options={[
            { label: "Horizontal", value: "horizontal" },
            { label: "Vertical", value: "vertical" },
          ]}
          value={slideDirection}
          onChange={(value) => {
            setAttributes({
              options: updateData(options, value, "slideDirection"),
            });
          }}
          label="Slide Direction"
        />
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
              label={__("Select navigation icon", "b-blocks")}
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
        <Flex justify="start" align="center" gap={2}>
          <FormToggle
            checked={simulateTouch}
            onChange={() =>
              setAttributes({
                options: updateData(options, !simulateTouch, "simulateTouch"),
              })
            }
          />
          <p className="mt10">Simulate on touch</p>
        </Flex>
        {simulateTouch && (
          <Flex justify="start" align="center" gap={2}>
            <FormToggle
              checked={grabCursor}
              onChange={() =>
                setAttributes({
                  options: updateData(options, !grabCursor, "grabCursor"),
                })
              }
            />
            <p className="mt10">Grab Curson</p>
          </Flex>
        )}
        <small>Maybe Simulate touch not work properly on backend</small>
        <Flex justify="start" align="center" gap={2}>
          <FormToggle
            checked={keyboardControl}
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
                options: updateData(
                  options,
                  !pagination.status,
                  "pagination",
                  "status"
                ),
              })
            }
          />
          <p className="mt10">Pagination</p>
        </Flex>
        {pagination.status && (
          <>
            <Flex justify="start" align="center" gap={2}>
              <FormToggle
                checked={pagination.dynamicBullets}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !pagination.dynamicBullets,
                      "pagination",
                      "dynamicBullets"
                    ),
                  })
                }
              />
              <p className="mt10">Dynamic Bullets Pagination</p>
            </Flex>
            <Flex justify="start" align="center" gap={2}>
              <FormToggle
                checked={pagination.clickable}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !pagination.clickable,
                      "pagination",
                      "clickable"
                    ),
                  })
                }
              />
              <p className="mt10">Clickable Pagination</p>
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
          </>
        )}

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
