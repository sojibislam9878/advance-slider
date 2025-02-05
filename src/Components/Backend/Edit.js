import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Slider from "../Common/Slider";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  // const { } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <Slider attributes={attributes} setAttributes={setAttributes}/>
      </div>
    </>
  );
};
export default Edit;
