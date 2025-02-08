import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  // __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { BButtonGroup, ColorControl, Typography} from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes }) => {
  const { styles } = attributes;
  const {textAlign, header, description}=styles
  

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
      </PanelBody>
    </>
  );
};

export default Style;
