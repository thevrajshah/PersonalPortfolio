import React, { Component, Fragment } from 'react';
import Projects from '../components/Projects';
import Design from '../components/Design';
import { WhiteSection } from '../components/Containers';
import Head from 'next/head';

export default function Work() {
  return (
    <>
      <Head>
        <title>Work | Vraj Shah</title>
      </Head>
      <div id="Head">
        <section>
          <h1 style={{ color: '#111', fontSize: '4.5rem' }}>work.</h1>
        </section>
      </div>
      <Projects />
      <Design />
      {/* <WhiteSection textAlign="center">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <div id="Ads">
          <ins
            class="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-1805340331841889"
            data-ad-slot="9867912939"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <ins
            class="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-1805340331841889"
            data-ad-slot="9867912939"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <ins
            class="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-1805340331841889"
            data-ad-slot="9867912939"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </WhiteSection> */}
    </>
  );
}
