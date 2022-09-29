let news = [
	{
		id: 1,
		img: "https://images-cricketcom.imgix.net/liveblog_featured-1658288386597?auto=compress&dpr=2&w=1&h=200",
		heading: "Pakistan close in on win as Jayasuriya dismisses Agha",
		description: "Live Blog: Sri Lanka vs Pakistan, 1st Test, Day 5",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "Latest",
	},
	{
		id: 2,
		img: "https://images-cricketcom.imgix.net/news-1658285237015?auto=compress&dpr=2&w=1&h=200",
		heading:
			"We're probably moving through a bit of a transition phase: Buttler",
		description:
			"England lost the T20I and ODI series against India and were now outplayed by the Proteas on Tuesday",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "News",
	},
	{
		id: 3,
		img: "https://images-cricketcom.imgix.net/news-1658283271912?auto=compress&dpr=2&w=1&h=200",
		heading:
			"Van der Dussen stars as South Africa deny Stokes a farewell ODI win",
		description:
			"The right-hander smashed a stunning century to help Proteas win the first ODI by 62 runs",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "OnThisDay",
	},
	{
		id: 4,
		img: "https://images-cricketcom.imgix.net/news-1658239504200?auto=compress&dpr=2&w=1&h=200",
		heading: "I want to play 140, 150 Tests for England: Stokes",
		description:
			"The all rounder also returned the compliment to Kohli, saying he has always admired the energy and commitment he brings to the field",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "Match",
	},
	{
		id: 5,
		img: "https://images-cricketcom.imgix.net/news-1658233092454?auto=compress&dpr=2&w=1&h=200",
		heading: "Ton-up Shafique drives Pakistan's record chase at Galle",
		description:
			"Pakistan ended day 4 on 222/3, still needing 120 runs to take the lead in the two match series",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "Features",
	},
	{
		id: 6,
		img: "https://images-cricketcom.imgix.net/news-1658496062601?auto=compress&dpr=2&fit=clip&w=976&h=400",
		heading: "Ravindra Jadeja ruled out of first two ODIs against Windies",
		description:
			"Jadeja played in the ODI series against England but sustained an injury during the series",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "Latest",
	},
	{
		id: 7,
		img: "https://images-cricketcom.imgix.net/liveblog_featured-1658510690881?auto=compress&dpr=1&fit=clip&w=800&h=480",
		heading: "India end on 308 after sparkling start",
		description: "India end on 308 after sparkling start",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "News",
	},
	{
		id: 8,
		img: "https://images-cricketcom.imgix.net/news-1658489602125?auto=compress&dpr=2&fit=clip&w=976&h=400",
		heading: "ODI cricket is dying a slow death: Khawaja",
		description:
			"Khawaja argued that 50-over format has lost its relevance, of late, as the T20 World Cup in knocking on the doors",
		website: "cricket.com staff",
		date: "21 Jul 2022",
		type: "OnThisDay",
	},
	{
		id: 9,
		img: "https://images-cricketcom.imgix.net/news-1658468918798?auto=compress&dpr=2&fit=clip&w=976&h=400",
		heading:
			"Sakariya, Mukesh Choudhary to feature in Queensland's new KFC T20 Max series",
		description:
			"As part of an exchange with the MRF Pace Foundation, the duo will also train at the National Cricket Centre while joining in with the Queensland Bulls' pre-season preparations",
		website: "cricket.com staff",
		date: "19 Jul 2022",
		type: "Match",
	},
	{
		id: 10,
		img: "https://images-cricketcom.imgix.net/news-1658462306363?auto=compress&dpr=2&fit=clip&w=976&h=400",
		heading:
			"Wouldn't have reached here if I cared what critics are saying: Dhawan",
		description:
			"The opener could only manage 41 runs in the three-match ODI series in England and looked slightly out of touch",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "Features",
	},
	{
		id: 11,
		img: "https://images-cricketcom.imgix.net/news-1658426832785?auto=compress&dpr=2&fit=clip&w=976&h=400",
		heading:
			"Dhawan's opening partner, the pace attack: big questions ahead of first ODI",
		description:
			"The star players are on rest has opened up a few spots in the XI and there are multiple candidates",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "News",
	},
	{
		id: 12,
		img: "https://images-cricketcom.imgix.net/news-1658420638704?auto=compress&dpr=2&fit=clip&w=976&h=400",
		heading: "Asia Cup will be held in UAE: Ganguly",
		description:
			"Asia Cup is slated to be held from August 27 to September 11 and will be played in the T20 format",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "OnThisDay",
	},
	{
		id: 13,
		img: "https://images-cricketcom.imgix.net/news-1658406107477?auto=compress&dpr=2&fit=clip&w=976&h=400",
		heading:
			"IPL’s expansion into South African market further indication of how far it's come",
		description:
			"After dipping their feet in the Caribbean, USA and UAE, IPL franchises have swept all six teams in South Africa's newest T20 league",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "Match",
	},
	{
		id: 14,
		img: "https://images.cricket.com/articles/1595518175574_big_safari.jpg?auto=compress&dpr=2&fit=clip&w=976&h=400",
		heading: "A Brief History of DRS",
		description:
			"From a faulty system to a necessity in modern-cricket, we look back at DRS' journey on the day it made its international debut",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "Latest",
	},
	{
		id: 15,
		img: "https://images.cricket.com/articles/1593934079610_big_safari.jpg?auto=compress&dpr=2&fit=clip&w=976&h=400",
		heading: "Onwards and upwards: Kumar Sangakkara's cricketing journey",
		description:
			"On this day in 2000, the world was introduced to Kumar Sangakkara on his international debut",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "Features",
	},
	{
		id: 16,
		img: "https://images.cricket.com/articles/1593067975827_big_safari.jpg?auto=compress&dpr=2&fit=clip&w=976&h=400",
		heading: "Kapil’s Devils - the greatest underdog story",
		description:
			"On this day in 1983, India won the World Cup for the first time and, here, we look back at how the biggest fairytale in Indian cricket came about",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "Latest",
	},
	{
		id: 17,
		img: "https://s3.ap-south-1.amazonaws.com/image.cricket.com/temp%2F93a2a8cea3c771250f8ebc84c0da3a721c8ab6cf.png?auto=compress&dpr=2&fit=clip&w=976&h=400",
		heading: "When a dominant India won the World Championship of Cricket",
		description:
			"On this day (March 10) in 1985, India defeated Pakistan by eight wickets to win the final of an event that had all the top teams in the world taking part",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "News",
	},
	{
		id: 18,
		img: "https://images-cricketcom.imgix.net/news-1658390300710?auto=compress&dpr=2&fit=clip&w=976&h=400",
		heading:
			"Exclusive : Indian domestic season to kick start in September with SMAT",
		description:
			"In 2020, when the pandemic struck, BCCI had to cancel the Ranji Trophy but organized a smaller version of the tournament in the following season",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "OnThisDay",
	},
	{
		id: 19,
		img: "https://images-cricketcom.imgix.net/news-1658328626660?auto=compress&dpr=2&fit=clip&w=976&h=400",
		heading: "Only matter of time before Kohli rebounds and responds: Ponting",
		description:
			"Ricky Ponting was quick to back out-of-form Kohli to come out of his slump",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "Match",
	},
	{
		id: 20,
		img: "https://images-cricketcom.imgix.net/news-1658306056813?auto=compress&dpr=2&fit=clip&w=976&h=400",
		heading: "Boult replaces Bumrah as top-ranked ODI bowler",
		description:
			"The Indian seamer missed the third and final ODI against England due to a back spasm",
		website: "cricket.com staff",
		date: "20 Jul 2022",
		type: "Features",
	},
];
 
export default news;