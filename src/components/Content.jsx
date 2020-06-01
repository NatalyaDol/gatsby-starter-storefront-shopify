import React from 'react';
import { injectIntl } from 'react-intl';
import { translations } from '../i18n';


const LocalizedVideo= ({ intl: { locale } }) => (
    <iframe
        width="100%"
        height="500"
        title="video"
        src={translations[locale][`home.videoUrl`]}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
  ></iframe>
);

export default injectIntl(LocalizedVideo);