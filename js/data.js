var dataset = [
	[
		{
			"id":"scenario-0",
			"text":"<p>You’re a retired satay seller in your 70s. You live alone with your wife. Business has been bad since you’ve been forced to stay at home during the MCO.</p>",
			"img":"img/story-0/1.png",
			"optNum":0,
			"optImg":0,
			"opt0":"Next",
			"target0":"scenario-0_1",
		},
		{
			"id":"scenario-0_1",
			"text":"<p>Your wife develops a runny nose and her body aches. You’re afraid it’s Covid-19 but her symptoms seem mild enough. Plus, you don’t trust doctors and so are reluctant to seek medical advice.</p>",
			"img":"img/story-0/1.png",
			"optNum":0,
			"optImg":0,
			"opt0":"What do you do?",
			"target0":"scenario-0_2",
		},
		{
			"id":"scenario-0_2",
			"text":"",
			"img":"img/story-0/1.png",
			"optNum":1,
			"optImg":0,
			"opt0":"Look up symptoms of Covid -19 first, just in case!",
			"target0":"scenario-A",
			"opt1":"Nothing. Aiyah, we old people have body aches all the time. Nothing some ubat Cap Ibu dan Anak can’t fix.",
			"target1":"scenario-B",
		},
		{
			"id":"scenario-A",
			"text":"<p>But where to find the info?</p>",
			"img":"img/story-0/A.png",
			"optNum":1,
			"optImg":1,
			"opt0":"Where else, ask the neighbour la! ",
			"target0":"scenario-A1",
			"opt1":"Call the National Security Council (NSC) hotline. Kan they always send you those SMSes on Covid!",
			"target1":"scenario-A2",
		},
		{
			"id":"scenario-B",
			"text":"<p>For the first time, ubat Cap Ibu dan Anak fails you. Your wife’s condition worsens. She’s develops a fever.</p>",
			"img":"img/story-0/B.png",
			"optNum":0,
			"optImg":1,
			"opt0":"You remember something...",
			"target0":"scenario-B_1",
		},
		{
			"id":"scenario-B_1",
			"text":"<p>You remember a Whatsapp message your brother shared, that drinking lots of warm water can kill any virus and ikan singgang can treat Covid.</p>",
			"img":"img/story-0/B.png",
			"optNum":0,
			"optImg":0,
			"opt0":"How now?",
			"target0":"scenario-B-b",
		},
		{
			"id":"scenario-B-b",
			"text":"",
			"img":"img/story-0/B-b.png",
			"optNum":1,
			"optImg":1,
			"opt0":"Keep at it with home remedies. Your brother sent it to you so it must be right.",
			"target0":"scenario-B1",
			"opt1":"Can it be that simple? Maybe check this information out first?",
			"target1":"scenario-B2",
		},
		{
			"id":"scenario-A1",
			"text":"<p>Which neighbour do you talk to?</p>",
			"img":"img/story-0/A1.png",
			"optNum":1,
			"optImg":1,
			"opt0":"Auntie Maggie. She always seems to know everything.",
			"target0":"scenario-A1-1",
			"opt1":"En Syed. He’s a nurse so he may be able to advise better.",
			"target1":"scenario-A1-2",
		},
		{
			"id":"scenario-A1-2",
			"text":"<p>He recoils in horror and takes several big steps away from you. He says: “Cannot take these things for granted Pak Din! You better call MOH hotline! Don’t go doctor first ya, call first!”</p>",
			"img":"img/story-0/A1-2.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Do you listen to him?",
			"target0":"scenario-A1-2_1",
		},
		{
			"id":"scenario-A1-2_1",
			"text":"",
			"img":"img/story-0/A1-2.png",
			"optNum":1,
			"optImg":0,
			"opt0":"Yes. En Syed seems so wise and kind. You call MOH.",
			"target0":"scenario-A1-2-1",
			"opt1":"No. You decide you must act quickly and take your wife to the nearest clinic.",
			"target1":"scenario-A1-2-2",
		},
		{
			"id":"scenario-A2",
			"text":"<p>The operator gives the number for the nearest government health facility. Your wife is tested. She’s Covid-19 positive.</p>",
			"img":"img/story-0/A2.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-A2_1",
		},
		{
			"id":"scenario-A2_1",
			"text":"<p>You, too, are tested and found to be infected as well. Both of you are taken to hospital for treatment.</p>",
			"img":"img/story-0/A2.png",
			"optNum":0,
			"optImg":0,
			"opt0":"The end",
			"target0":"scenario-end",
		},
		{
			"id":"scenario-B1",
			"text":"<p>Your wife’s condition doesn’t improve. You’re now very concerned. Worse, you’re also falling ill.</p>",
			"img":"img/story-0/B1.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-B1_1",
		},
		{
			"id":"scenario-B1_1",
			"text":"<p>You remember seeing an ad for an essential oil, guaranteed against virus attacks. The ad looks professional and there’s even a stamp that says it’s been certified by the Ministry of Health.</p>",
			"img":"img/story-0/B1.png",
			"optNum":0,
			"optImg":0,
			"opt0":"Next",
			"target0":"scenario-B1_2",
		},
		{
			"id":"scenario-B1_2",
			"text":"<p>Try the essential oil?</p>",
			"img":"img/story-0/B1.png",
			"optNum":1,
			"optImg":0,
			"opt0":"You immediately order a bottle through Whatsapp.",
			"target0":"scenario-B1-1",
			"opt1":"No, better be safe. You call 999.",
			"target1":"scenario-B1-2",
		},
		{
			"id":"scenario-B1-2",
			"text":"<p>The operator gives the number for the nearest govt health facility. Your wife is tested. She’s Covid-19 positive.</p>",
			"img":"img/story-0/A2.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-B1-2_1",
		},
		{
			"id":"scenario-B1-2_1",
			"text":"<p>You, too, are tested and found to be infected as well. Both of you are taken to hospital for treatment.</p>",
			"img":"img/story-0/A2.png",
			"optNum":0,
			"optImg":0,
			"opt0":"The end",
			"target0":"scenario-end",
		},
		{
			"id":"scenario-B2",
			"text":"<p>You realise the information of supposed Covid-19 cures are mostly superstition, pseudoscience which have either been debunked or not backed by medical evidence.</p>",
			"img":"img/story-0/B-b.png",
			"optNum":0,
			"optImg":0,
			"opt0":"Next",
			"target0":"scenario-B2_1",
		},
		{
			"id":"scenario-B2_1",
			"text":"<p>You decide it's best to get professional advice and contact the National Security Council (NSC) hotline. Kan they always send you those SMSes on Covid!</p>",
			"img":"img/story-0/B-b.png",
			"optNum":0,
			"optImg":0,
			"opt0":"Call the hotline",
			"target0":"scenario-A1-2-1",
		},
		{
			"id":"scenario-A1-1",
			"text":"<p>She says: “Aiyah Pak Cik Din. Don’t worrylah. It’s just a cold. My son also had the same. The bug must be going around. You cannot trust doctors, they just want to charge you.” </p>",
			"img":"img/story-0/",
			"optNum":0,
			"optImg":1,
			"opt0":"Do you listen to her?",
			"target0":"scenario-A1-1_1",
		},
		{
			"id":"scenario-A1-1_1",
			"text":"",
			"img":"img/story-0/",
			"optNum":1,
			"optImg":0,
			"opt0":"No. You decide to check with your other neighbour, En Syed.",
			"target0":"scenario-A1-2",
			"opt1":"Yes. Auntie Maggie seems so wise and kind.",
			"target1":"scenario-B1",
		},
		{
			"id":"scenario-A1-2-1",
			"text":"<p>The operator gives the number for the nearest govt health facility. Your wife is tested. She’s Covid-19 positive.</p>",
			"img":"img/story-0/B2.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-A1-2-1_1",
		},
		{
			"id":"scenario-A1-2-1_1",
			"text":"<p>You, too, are tested and found to be infected as well. Both of you are taken to hospital for treatment.</p>",
			"img":"img/story-0/B2.png",
			"optNum":0,
			"optImg":0,
			"opt0":"The end",
			"target0":"scenario-end",
		},
		{
			"id":"scenario-A1-2-2",
			"text":"<p>A day later, you get the test results, she is positive for Covid. Now you must get tested too.</p>",
			"img":"img/story-0/A1-2-2.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-A1-2-2_1",
		},
		{
			"id":"scenario-A1-2-2_1",
			"text":"<p>Worse, the whole clinic must be shut for sanitation and authorities are rushing to trace all the staff and patients who were there that day so they can get tested too.</p>",
			"img":"img/story-0/A1-2-2.png",
			"optNum":0,
			"optImg":0,
			"opt0":"Next",
			"target0":"scenario-A1-2-2_2",
		},
		{
			"id":"scenario-A1-2-2_2",
			"text":"<p>Your hasty decision potentially exposed others to Covid.</p>",
			"img":"img/story-0/A1-2-2.png",
			"optNum":0,
			"optImg":0,
			"opt0":"The end",
			"target0":"scenario-end",
		},
		{
			"id":"scenario-B1-1",
			"text":"<p>Service is quick and efficient and your bottle arrives at your doorstep the very next day. You and your wife take a dose of the ‘medicine’.</p>",
			"img":"img/story-0/B1.png",
			"optNum":0,
			"optImg":0,
			"opt0":"Next",
			"target0":"scenario-B1-1_1",
		},
		{
			"id":"scenario-B1-1_1",
			"text":"<p>Something is very, very wrong. Your stomachs start to ache and you both start throwing up. You call 999 and collapse, the last sound you hear if that of your wife’s screams of agony.</p>",
			"img":"img/story-0/B1-1.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-B1-1-1",
		},
		{
			"id":"scenario-B1-1-1",
			"text":"<p>When you awaken, you are in the hospital. You have been found to be positive for Covid and is in the ICU. The so-called medicine you took was poison.</p>",
			"img":"img/story-0/B1-2.png",
			"optNum":0,
			"optImg":1,
			"opt0":"What about my wife?",
			"target0":"scenario-B1-1-1_1",
		},
		{
			"id":"scenario-B1-1-1_1",
			"text":"<p>Your wife, they tell you sadly, died due to the poisoning. The claims made in the advert were all false.</p>",
			"img":"img/story-0/B1-2.png",
			"optNum":0,
			"optImg":0,
			"opt0":"The end",
			"target0":"scenario-end",
		},
	],
	[
		{
			"id":"scenario-start",
			"text":"Make your way through the complex maze of seeking asylum in the US",
			"intro":"<p>Can you navigate the US immigration system? This interactive allows you to make the choices many immigrants encounter as they try to move to the US.</p>",
			"img":"img/story-1/mugshot.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Start",
			"target0":"scenario-0",
		},
		{
			"id":"scenario-0",
			"text":"<p>Cristina is 19 years old. She’s been with her husband, Francisco, since she was 16. They have a 2-year-old daughter named Sofia.</p>",
			"img":"img/story-1/sc00.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-1",
		},
		{
			"id":"scenario-1",
			"text":"<p>Francisco sometimes is angry and violent and Cristina worries about the safety of her daughter. She has left her home in Chinandega before and stayed with her sister in Managua, but he’s always come after her and convinced her to move back home.</p>",
			"img":"img/story-1/sc01.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-2",
		},
		{
			"id":"scenario-2",
			"text":"<p>She has decided to leave Nicaragua and stay with an aunt who lives in New York so she can be far away from Francisco.</p>",
			"img":"img/story-1/sc02.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-3",
		},
		{
			"id":"scenario-3",
			"text":"<p>She has been saving money from selling sliced fruit at the local market for the past two years. One day, when Francisco is at work, she packs a single bag for herself and Sofia and begins her journey north.</p>",
			"img":"img/story-1/sc03.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Travel to Mexico",
			"target0":"scenario-4",
		},
		{
			"id":"scenario-4",
			"text":"<p>It takes Cristina and Sofia about six days on several different buses to get to Reynosa, in Mexico, across the border from Texas.</p>",
			"img":"img/story-1/sc04.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-5",
		},
		{
			"id":"scenario-5",
			"text":"<p>There, she contacts her aunt, who sends her enough money to pay a coyote, a human smuggler.</p>",
			"img":"img/story-1/sc05.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-6",
		},
		{
			"id":"scenario-6",
			"text":"<p>Smugglers are expensive and charge Central Americans more than migrants from Mexico. Cristina chooses to travel over land, through the desert on foot, to save money. They spend a night at a migrant shelter, where another woman tells her that because she is fleeing an abusive relationship, she can ask for asylum in the US.</p>",
			"img":"img/story-1/sc06.png",
			"optNum":1,
			"optImg":1,
			"opt0":"Pay to be guided to border",
			"target0":"scenario-7a",
			"opt1":"Pay to get to New York",
			"target1":"scenario-7b",
		},
		{
			"id":"scenario-7a",
			"text":"<p>Cristina and Sofia follow their coyote out of Reynosa along the Rio Grande.</p>",
			"img":"img/story-1/sc7a.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-8",
		},
		{
			"id":"scenario-7b",
			"text":"<p>Cristina and her group start the next leg of their journey.</p>",
			"img":"img/story-1/sc7b.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-9",
		},
		{
			"id":"scenario-8",
			"text":"",
			"img":"img/story-1/sc08.png",
			"optNum":1,
			"optImg":1,
			"opt0":"Ask for asylum",
			"target0":"scenario-10c",
			"opt1":"Cross into Texas",
			"target1":"scenario-7b",
		},
		{
			"id":"scenario-9",
			"text":"<p>Cristina gets as far as a Border Patrol checkpoint on Highway 90 on the way to San Antonio, Texas, where she gets caught with 10 other people in the back of a van. She is taken to an immigration detention facility.</p>",
			"img":"img/story-1/sc09.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Request asylum during arrest",
			"target0":"scenario-11c",
		},
		{
			"id":"scenario-10c",
			"text":"<p>The smuggler gets Cristina close to the border. She can see the crossing, and the officers patrolling it. She grabs Sofia’s hand and gets in a line of others who came on foot. The night before, she talked to the smuggler about exactly what she had to say: “I need asylum. My husband is dangerous.” She is taken into custody and waits to be interviewed.</p>",
			"img":"img/story-1/sc10c.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Wait",
			"target0":"scenario-11c",
		},
		{
			"id":"scenario-11c",
			"text":"<p>Detention center, somewhere in Texas.</p>",
			"img":"img/story-1/sc11c.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Wait",
			"target0":"scenario-12c",
		},
		{
			"id":"scenario-12c",
			"text":"<p>After almost two days, a government agent does what he calls a “credible fear interview.” Cristina tells her story as best she can, but it's out of her hands now. They tell her the government will hear her case in time, but that she will need to raise bail in order to be released.</p>",
			"img":"img/story-1/sc12c.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Raise bail",
			"target0":"scenario-13b",
			//"opt1":"Held in detention center",
			//"target1":"scenario-13c",
		},
		{
			"id":"scenario-13c",
			"text":"<p>Cristina passes her credible fear interview but she's not released on bail.</p>",
			"img":"img/story-1/sc13c.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-14c",
		},
		{
			"id":"scenario-14c",
			"text":"<p>She waits in the detention center, but is unable to contact or pay a lawyer. Unlike the criminal justice system, people in immigration hearings aren’t guaranteed lawyers.</p>",
			"img":"img/story-1/sc11c.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-15c",
		},
		{
			"id":"scenario-15c",
			"text":"<p>When her trial comes up, her interpreter doesn’t do a good job of conveying her experience to the judge. He misses some of her slang.</p>",
			"img":"img/story-1/sc15c.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-16c",
		},
		{
			"id":"scenario-16c",
			"text":"<p>She is denied asylum and deported to Nicaragua.</p>",
			"img":"img/story-1/sc16c.png",
			"optNum":0,
			"optImg":1,
			"opt0":"The end",
			"target0":"scenario-end",
		},
		{
			"id":"scenario-13b",
			"text":"<p>For her release, Cristina's aunt had to post a $25,000 bond. It will be almost two years before her case will be heard before a judge.</p>",
			"img":"img/story-1/sc13b.png",
			"optNum":1,
			"optImg":1,
			"opt0":"Stay in Texas",
			"target0":"scenario-14a",
			"opt1":"Follow her aunt to New York",
			"target1":"scenario-14b",
		},
		{
			"id":"scenario-14b",
			"text":"<p>In New York, Cristina waits for her trial. Her aunt has loaned her some money and she has connected with an immigrant advocacy group that has put her in touch with a lawyer who will take up her case for a small fee. She is living in a room she rents from her aunt’s friend, a neighbor who watches several children during the day at home to make a living.</p>",
			"img":"img/story-1/sc15a.png",
			"optNum":0,
			"optImg":1,
			"opt0":"File paperwork",
			"target0":"scenario-15b",
		},
		{
			"id":"scenario-15b",
			"text":"<p>After 150 days, she files paperwork for a work permit and is granted one. She gets a job as a maid in a big hotel.</p>",
			"img":"img/story-1/sc15b.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Go to court",
			"target0":"scenario-16b",
		},
		{
			"id":"scenario-16b",
			"text":"<p>Cristina finally gets her hearing, almost two years after she arrived in the US. She now has a job and has strengthened her English skills. In New York, many asylum seekers have lawyers and some judges grant asylum in more than 90 percent of cases.</p>",
			"img":"img/story-1/sc15c.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-17b",
		},
		{
			"id":"scenario-17b",
			"text":"<p>With the help of a lawyer she was able to hire, Cristina wins asylum and is allowed to stay in the United States legally.</p>",
			"img":"img/story-1/sc17b.png",
			"optNum":0,
			"optImg":1,
			"opt0":"The end",
			"target0":"scenario-end",
		},
		{
			"id":"scenario-14a",
			"text":"<p>Cristina finally gets her hearing, almost two years after she arrived in the US. She now has a job and has strengthened her English skills. In Dallas, Texas, however, some judges only grant 17 percent of asylum requests. Almost 80 percent of asylum cases from Nicaraguans in the last five years have been denied.</p>",
			"img":"img/story-1/sc15c.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Go to court",
			"target0":"scenario-15a",
		},
		{
			"id":"scenario-15a",
			"text":"<p>Despite hiring a the lawyer, Cristina loses her case and must make arrangements to return to Nicaragua or face deportation.</p>",
			"img":"img/story-1/sc16c.png",
			"optNum":0,
			"optImg":1,
			"opt0":"The end",
			"target0":"scenario-end",
		},
		{
			"id":"scenario-end",
			"optNum":1,
			"optImg":1,
			"opt0":"Sometimes, people are granted asylum.",
			"target0":"https://www.pri.org/stories/2016-11-22/migrant-el-salvador-gets-her-chance-immigration-court",
			"opt1":"Meet Yocelyn, an asylum seeker in California. Her hearing is in April.",
			"target1":"https://www.pri.org/stories/2018-02-20/she-escaped-violence-and-seeking-asylum-her-mental-health-and-legal-case-take",
		},
	],
	[
		{
			"id":"scenario-start",
			"text":"Follow along: Forms, fees and an interview for a US Diversity Lottery Program 'winner'",
			"intro":"<p>Can you navigate the US immigration system? This interactive allows you to make the choices many immigrants encounter as they try to move to the US.</p>",
			"img":"img/story-2/mugshot.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Start",
			"target0":"scenario-0",
		},
		{
			"id":"scenario-0",
			"text":"<p>In 2012, Kylie is 33 years old and wants to move to the US. To apply, she fills out an online form for the Diversity Immigrant Visa Program. It’s a lottery open for one month every year that gives people from countries with low US immigration numbers a chance to apply for 50,000 green cards. Kylie submits her name, date of birth, nationality, level of education and a photo — and waits. Kylie works as a project manager at a website firm in Sydney, Australia but was born in New Zealand, which helps her chances.</p>",
			"img":"img/story-2/sc00.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Apply",
			"target0":"scenario-1",
		},
		{
			"id":"scenario-1",
			"text":"<p>Six months later, Kylie wakes up at 2 a.m. to check the results. She “won” the lottery! Out of 9.3 million applicants, she is one of about 125,500 people selected to proceed. This means she’ll go through further processing to see if she’s a good candidate. She fills out forms to continue her application.</p>",
			"img":"img/story-2/sc01.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Apply",
			"target0":"scenario-2",
		},
		{
			"id":"scenario-2",
			"text":"<p>In February 2015, she finds out she will be interviewed in April. She has to get a medical checkup and pay about US $1,200. She also has to prove she has US $14,000 in her bank account — so she borrows money from her boyfriend, Bruce. Any mistake in the paperwork will cause her application to be denied.</p>",
			"img":"img/story-2/sc02.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-3",
		},
		{
			"id":"scenario-3",
			"text":"<p>On interview day, Kylie goes to the 51st floor of an office building in Sydney overlooking the water to the US embassy.</p>",
			"img":"img/story-2/sc03.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-4",
		},
		{
			"id":"scenario-4",
			"text":"<p>When she goes in to meet with a consular office, she is asked one question: “Why do you want to move to America?” Kylie barely remembers her answer, “Something about jobs and opportunities.” He stamps a paper and says, “Welcome to the United States.”</p>",
			"img":"img/story-2/sc04.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-5",
		},
		{
			"id":"scenario-5",
			"text":"<p>She walks out, dazed. A little while later, she recognizes the woman who was next to her in line while walking down the street. “Did you get it?” Kylie asks. They go celebrate their green cards with beers at a nearby pub.</p>",
			"img":"img/story-2/sc05.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Move to US",
			"target0":"scenario-6",
		},
		{
			"id":"scenario-6",
			"text":"<p>Kylie moves to New York City in 2015. She hunts for a job for several months while exploring the city. Her boyfriend of 10 years, Bruce, comes with her. Bruce has dual citizenship in Australia and Canada. He has a harder time getting a visa, but finally gets a TN visa, a NAFTA visa for citizens of Canada and Mexico who are skilled professionals.</p>",
			"img":"img/story-2/sc06.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Live in NYC",
			"target0":"scenario-7",
		},
		{
			"id":"scenario-7",
			"text":"<p>Kylie plans to stay in the US. If she leaves the country for more than a year, she will forfeit her green card. She visits Australia about once a year and keeps up with family via Whatsapp.</p>",
			"img":"img/story-2/sc07.png",
			"optNum":0,
			"optImg":1,
			"opt0":"The end",
			"target0":"scenario-end",
		},
		{
			"id":"scenario-end",
			"optNum":1,
			"optImg":1,
			"opt0":"The surprising history of the green card lottery",
			"target0":"https://www.pri.org/stories/2017-11-02/surprising-history-green-card-lottery",
			"opt1":"'Winning' the green card lottery is only the start of a harrowing journey",
			"target1":"https://www.pri.org/stories/2014-12-29/winning-green-card-lottery-only-start-harrowing-journey",
		},
	]	
];