import React, { useState, useEffect } from 'react';

const Home = () => {
	const [gifUrl, setGifUrl] = useState(null);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const preloadedGif = new Image();
		preloadedGif.src = '/frameFirstx.jpg';
		preloadedGif.onload = () => {
			setGifUrl('/frameFirstx.jpg');
		};
	}, []);

	const playGif = () => {
		const audio = new Audio('/slap.mp3'); // Ses dosyasının yolunu belirtin
		audio.play(); // Ses dosyasını çal
		setGifUrl(`/ektokat.gif?${Math.random()}`);
		setCounter(counter + 1);
	};

	const redirectToTwitter = () => {
		window.location.href = 'https://twitter.com/__khang';
	};

	return (
		<div className='flex flex-col items-center justify-center w-screen gap-10 mt-5'>
			<div className=''>
				{gifUrl && <img src={gifUrl} alt='GIF' className='gif' />}
			</div>

			<button className=' ' onClick={playGif}>
				<img
					clas
					src='/slap.jpg'
					alt='Slap'
					className='rounded-full w-40 h-40 bg-gray-800 shadow-2xl'
				/>
			</button>
			<p>EK'ye atılan tokat sayısı: {counter}</p>
			<div className='flex flex-row gap-4'>
				<p>Görüş ve öneriler için: </p>
				<button className='redirectButton' onClick={redirectToTwitter}>
					<img src='60580.png' className='w-7 h-7'></img>
				</button>
			</div>
		</div>
	);
};

export default Home;
