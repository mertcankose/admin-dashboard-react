import React from 'react';

import TextTitle from "../components/textTitle/text-title";

export default {
  title: 'Typography',

};

export const Typography = () => (
    <div>
        <TextTitle>Merhaba Dünya</TextTitle>
        <TextTitle bold={false}>Merhaba Dünya</TextTitle>
    </div>
);
