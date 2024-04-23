import React from 'react';
import CallToAction from './CallToAction';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';

export default function Footer() {
  return (
    <footer className="bg-slate-100">
      <CallToAction />
      <FooterTop />
      <FooterBottom />
    </footer>
  );
}
