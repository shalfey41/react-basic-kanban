import React from 'react';
import { useSelector } from "react-redux";
import { Div } from "@vkontakte/vkui";
import marked from 'marked';

import './style.css';
import { getText } from "../../selectors";

const CardContent = () => {
  const text = useSelector(getText);

  if (!text) {
    return null;
  }

  const content = text.replace(/\\n/g, '\n');

  return (
    <Div className="CardContent">
      <span dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Div>
  )
};

export default CardContent;
