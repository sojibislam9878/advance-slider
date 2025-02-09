import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  // __experimentalBoxControl as BoxControl,
  __experimentalBorderControl as BorderControl,
  __experimentalUnitControl as UnitControl
} from "@wordpress/components";
import { BButtonGroup, ColorControl, ColorsControl, Typography} from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes }) => {
  const { styles } = attributes;
  const {textAlign, header, description, button}=styles
  

  return (
    <>
      
      <PanelBody
        className="bPlPanelBody"
        title={__("Slider Styles", "b-blocks")}
        initialOpen={true}
      >
        {/* <ColorsControl
          value={colors}
          onChange={(val) => setAttributes({ colors: val })}
          defaults={{ color: "black", bg: "#B1C5A4" }}
        />
        <BoxControl values={values} onChange={setValues} /> */}
        <BButtonGroup
        options={[
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
          { label: "Right", value: "right" },
        ]}
        value={textAlign}
        onChange={(value) => {
          setAttributes({ styles:updateData(styles, value, "textAlign") });
        }}
        label="Text Align"
      />
      <PanelBody
      className="bPlPanelBody"
      title={__("Header", "b-blocks")}
      initialOpen={false}
      >
        <ColorControl value={header.color} onChange={(value)=>setAttributes({styles:updateData(styles, value, "header", "color")})}/>

        <Typography value={header.typo} onChange={(value)=>setAttributes({styles:updateData(styles, value, "header", "typo")})}/>

      </PanelBody>
      <PanelBody
      className="bPlPanelBody"
      title={__("Description", "b-blocks")}
      initialOpen={false}
      >
        <ColorControl value={description.color} onChange={(value)=>setAttributes({styles:updateData(styles, value, "description", "color")})}/>

        <Typography value={description.typo} onChange={(value)=>setAttributes({styles:updateData(styles, value, "description", "typo")})}/>

      </PanelBody>
      <PanelBody
      className="bPlPanelBody"
      title={__("Button", "b-blocks")}
      initialOpen={false}
      >
        <ColorsControl value={button.colors} onChange={(value)=>setAttributes({styles:updateData(styles, value, "button", "colors")})}/>

        <BorderControl
        value={button.border}
        onChange={(value)=>setAttributes({styles:updateData(styles, value, "button", "border")})}
        />

        <UnitControl label={__("Border Radius", "b-blocks")} value={button.border.radius} onChange={(value)=>setAttributes({styles:updateData(styles, value, "button", "border", "radius")})}/>

      </PanelBody>
      </PanelBody>
    </>
  );
};

export default Style;
