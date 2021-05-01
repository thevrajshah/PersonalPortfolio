import Head from 'next/head';

import Hero from '../components/Hero';
import { WhiteSection, GreySection, Card } from '../components/Containers';
import { devSkills, designSkills } from '../data/data.json';
import Gallery from '../components/Gallery';

export default function home() {
	return (
		<>
			<Head>
				<meta property="og:locale" content="en-US" />
				<meta property="og:site_name" content="Vraj Shah" />
				<meta property="og:title" content="Vraj Shah - Developer" />
				<meta property="og:url" content="https://thevrajshah.me/" />
				<meta
					property="og:description"
					content="Hey! I'm Vraj, a developer based in Gujarat, India. I design & create quality software with the help of constant learning & improvisation"
				/>
				<meta
					name="keywords"
					content="vraj, shah, vraj shah, thevrajshah, developer, web developer, fullstack developer, vadodara, gujarat, code, coding, st kabir school, svit, sardar vallabhbhai patel institute of technology, react, webpack, wordpress"
				/>

				<meta name="color-scheme" content="dark light" />
				<meta name="MobileOptimized" content="320" />
				<meta name="HandheldFriendly" content="True" />
				<title>Vraj Shah | Developer, Designer & Student</title>
			</Head>
			<Hero />
			<WhiteSection>
				<h1 style={{ fontSize: '4rem' }}>about me</h1>
				<h2>I design & create stuff on the Web.</h2>
				<p>
					I'm a Rookie Developer based in Gujarat, India. Through constant
					learning and creation, I try to produce aesthetic software at my best.
					I often contribute to the open-source community. Other than that I
					enjoy exploring general trivia via podcasts and youtube videos. Also,
					I love movies especially the horror and thriller ones. <br /> Have fun
					exploring the site.
				</p>
				<a
					href="https://twitter.com/thevrajshah?ref_src=twsrc%5Etfw"
					className="twitter-follow-button"
					data-show-count="false"
				>
					Follow @thevrajshah
				</a>
			</WhiteSection>
			<GreySection textAlign="center" paddingLR="0 2rem">
				<h1>Skills</h1>
				<div id="tech">
					<img src="/nextjs.svg" alt="" />
					<img src="/react.svg" alt="" />
					<img src="/javascript.svg" alt="" />
					<img src="/nodejs.svg" alt="" />
					<img src="/mongo.svg" alt="" />
					<img src="/dart.svg" alt="" />
					<img src="/flutter.svg" alt="" />
					<img src="/c++.svg" alt="" />
					<img src="/python.svg" alt="" />
					<img src="/html5.svg" alt="" />
					<img src="/css3.svg" alt="" />
				</div>
				<div id="Skills">
					<Card align="left">
						<h5 style={{ color: 'var(--accent)' }}>Development</h5>
						<div id="skill-container">
							{devSkills.map((data, key) => {
								return (
									<span key={key} id="skill">
										{data}
									</span>
								);
							})}
						</div>
					</Card>
					<Card align="left">
						<h5 style={{ color: 'var(--accent)' }}>Design</h5>
						<div id="skill-container">
							{designSkills.map((data, key) => {
								return (
									<span key={key} id="skill">
										{data}
									</span>
								);
							})}
						</div>
					</Card>
				</div>
			</GreySection>
			<WhiteSection textAlign="center">
				<h1>Random Shots</h1>
				<h2>Art means everything to me.</h2>
			</WhiteSection>
			<Gallery />
			<WhiteSection>
				<h1 style={{ fontSize: '3.5rem' }}>about the website</h1>
				<h2> Looks like you stumbled into my Website.</h2>
				<p>
					I'm sure you're liking it here! Well, this website is designed &
					developed by me with <b>ReactJS</b>, basic
					<b> HTML/CSS</b> and other related tools (No templates/frameworks
					used).
				</p>
				<p>
					The initial purpose of building this site was just to learn React
					while implementing it; but later on it started growing and now it
					serves as my identity, portfolio, blog whatever you like to call it.{' '}
					<strong>Thank You 😊</strong>
				</p>
			</WhiteSection>
			{/* <GreySection textAlign="center">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <div id="Ads">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-1805340331841889"
            data-ad-slot="9867912939"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-1805340331841889"
            data-ad-slot="9867912939"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-1805340331841889"
            data-ad-slot="9867912939"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </GreySection> */}
		</>
	);
}
