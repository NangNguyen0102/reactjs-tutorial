import React from "react";
import { Helmet } from "react-helmet";

const HtmlHeader = () => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
    </div>
  );
};

export default HtmlHeader;
