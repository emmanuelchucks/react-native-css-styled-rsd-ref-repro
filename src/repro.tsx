import { html } from "react-strict-dom";
import { styled } from "react-native-css";

export const StyledDiv = styled(html.div, { className: "style" });

export const element = <StyledDiv className="p-4" />;
