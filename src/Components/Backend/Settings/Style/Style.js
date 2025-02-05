import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { ColorsControl } from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const { colors } = attributes;
  const [values, setValues] = useState({
    top: "50px",
    left: "10px",
    right: "10px",
    bottom: "50px",
  });



  return (
    <>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Purpose styles title", "b-blocks")}
        initialOpen={false}
      >
        <ColorsControl
          value={colors}
          onChange={(val) => setAttributes({ colors: val })}
          defaults={{ color: "black", bg: "#B1C5A4" }}
        />
        <BoxControl values={values} onChange={setValues} />
      </PanelBody>
    </>
  );
};

export default Style;
