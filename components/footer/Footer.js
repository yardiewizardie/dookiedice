import React from 'react';
import './footer.scss';
import Link from 'next/link';

export default () => (
	<footer className="footer">
		<ul className="nav">
			<li className="nav__item">
				<Link href="/chat" className="nav__link">
					Find your dream dice!
				</Link>
			</li>
			<li className="nav__item">
				<Link href="/chat" className="nav__link">
					Dookie's Starter dice.
				</Link>
			</li>
			<li className="nav__item">
				<Link href="/chat" className="nav__link">
					Contact US!
				</Link>
			</li>
			<li className="nav__item">
				<Link href="/chat" className="nav__link">
					Chat
				</Link>
			</li>
		</ul>
	</footer>
);
