const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/:platform/:gamertag', async (req,res) =>{
	try{
		const headers = {
			'TRN-Api-Key': process.env.TRACKER_API_KEY
		}
		const {platform, gamertag} = req.params;

		const response = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`,
			{headers});

		const data = await response.json();

		if(data.errors && data.errors.length >=1){
			return res.status(404).json({
				message: 'not found',
				data: null
			});
		}

		res.status(200).json({
			message: 'success',
			data
		});
	}catch(err){
		console.log(err);
		res.status(500).json({
			message: 'error',
			data: null
		});
	};
});

module.exports = router;
