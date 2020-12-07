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
			"text":"<p>The operator gives the number for the nearest government health facility. Your wife is tested. She’s Covid-19 positive.</p>",
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
			"text":"<p>You realise the information on supposed Covid-19 cures are mostly superstition, pseudoscience which have either been debunked or not backed by medical evidence.</p>",
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
			"text":"<p>The operator gives the number for the nearest government health facility. Your wife is tested. She’s Covid-19 positive.</p>",
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
			"id":"scenario-0",
			"text":"<p>Your favourite hawker stall is just around the corner from home. The auntie’s noodles are famous and you usually have to go early, before the queue gets too long.</p>",
			"img":"img/story-1/1.png",
			"optNum":0,
			"optImg":0,
			"opt0":"Next",
			"target0":"scenario-0_1",
		},
		{
			"id":"scenario-0_1",
			"text":"<p>Yet for the past week, the stall has been closed and the auntie not seen for days. You overhear some of the other hawkers say the auntie was infected with Covid-19.</p>",
			"img":"img/story-1/1.png",
			"optNum":0,
			"optImg":0,
			"opt0":"Next",
			"target0":"scenario-0_2",
		},
		{
			"id":"scenario-0_2",
			"text":"<p>You become worried. Your family frequents that food court, especially that stall. You want to keep them safe, especially as the number of Covid cases in your area is on the rise.</p>",
			"img":"img/story-1/1.png",
			"optNum":0,
			"optImg":0,
			"opt0":"What do you do?",
			"target0":"scenario-0_3",
		},
		{
			"id":"scenario-0_3",
			"text":"",
			"img":"img/story-1/1.png",
			"optNum":1,
			"optImg":0,
			"opt0":"Better send out a warning to family members and friends. Better safe than sorry! After all, if it’s not true, then not true la.",
			"target0":"scenario-A",
			"opt1":"Better verify if the claim is true. No cause to create unnecessary panic.",
			"target1":"scenario-B",
		},
		{
			"id":"scenario-A",
			"text":"<p>You start craft a warn post on your social media platforms to send out. Eg Tweet: “Gais, better b careful k, heard prawn noodle auntie has Covid! So close to home! #stayhome #covid19 #staysafe”.</p>",
			"img":"img/story-1/A.png",
			"optNum":0,
			"optImg":1,
			"opt0":"What do you do next?",
			"target0":"scenario-A_1",
		},
		{
			"id":"scenario-A_1",
			"text":"",
			"img":"img/story-1/A.png",
			"optNum":1,
			"optImg":0,
			"opt0":"Press send. The faster the better. You feel good about doing your bit to save society.",
			"target0":"scenario-A1",
			"opt1":"You hesitate. What if auntie did not have Covid? Kesian only.",
			"target1":"scenario-A2",
		},
		{
			"id":"scenario-B",
			"text":"But how to check?",
			"img":"img/story-1/A.png",
			"optNum":1,
			"optImg":1,
			"opt0":"Ask the traders who made the claim. Where did they hear it from?",
			"target0":"scenario-B1",
			"opt1":"Look for reports in the press. Someone should be keeping track of all affected locations even if MOH does not share it.",
			"target1":"scenario-B2",
		},
		{
			"id":"scenario-A1",
			"text":"<p>Some friends and netizens start asking you for a picture of the auntie and of her stall. Do you send them the picture?</p>",
			"img":"img/story-1/A1.png",
			"optNum":1,
			"optImg":1,
			"opt0":"Givela! Again, anything to help people keep safe. Google pin location pun boleh.",
			"target0":"scenario-A1-1",
			"opt1":"Nola! That’s a bit too personal. The photo could be used for anything in the wrong hands.",
			"target1":"scenario-A1-2",
		},
		{
			"id":"scenario-A2",
			"text":"",
			"img":"img/story-1/B.png",
			"optNum":1,
			"optImg":1,
			"opt0":"You decide not to send the message. Instead, you will just wait and see if auntie comes back or if health officers arrive to sanitise the area.",
			"target0":"scenario-B2-1",
			"opt1":"You decide to send the message but remove auntie’s name and the name of her stall. ",
			"target1":"scenario-A2-2",
		},
		{
			"id":"scenario-A2-2",
			"text":"<p>The next day, the message you sent out has gone viral. You’re happy. You have kept people safe and informed. But wait, you see the auntie back at her stall.</p>",
			"img":"img/story-1/A1-1.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Talk to her",
			"target0":"scenario-A2-2_1",
		},
		{
			"id":"scenario-A2-2_1",
			"text":"<p>Turns out, she was never sick but had just gone to visit her daughter. She tells you her business as well as other hawker stalls in the same area are badly affected due to some rumours that some hawkers there had Covid-19.</p>",
			"img":"img/story-1/A1-1.png",
			"optNum":0,
			"optImg":0,
			"opt0":"Oh no!",
			"target0":"scenario-A2-2_2",
		},
		{
			"id":"scenario-A2-2_2",
			"text":"<p>Do you admit to auntie what you’ve done and try to do damage control?</p>",
			"img":"img/story-1/A1-1.png",
			"optNum":1,
			"optImg":0,
			"opt0":"Yes! She deserves to know the truth.",
			"target0":"scenario-A1-2-1-1",
			"opt1":"You feel bad but you are too ashamed to tell her you’re also spreading the rumour.",
			"target1":"scenario-A1-1-1-1_1",
		},
		{
			"id":"scenario-B1",
			"text":"<p>You cannot trace anyone who actually had first hand knowledge to confirm the rumour. All the while the news is reporting that the virus is spreading, with new cases being discovered each day, close to your home or college.</p>",
			"img":"img/story-1/B1.png",
			"optNum":0,
			"optImg":1,
			"opt0":"What do you do next?",
			"target0":"scenario-B1_1",
		},
		{
			"id":"scenario-B1_1",
			"text":"",
			"img":"img/story-1/B1.png",
			"optNum":1,
			"optImg":0,
			"opt0":"You decide to send out the warning on social media and messaging apps anyway.",
			"target0":"scenario-A",
			"opt1":"Look for reports in the press. Someone should be keeping track of all affected locations even if MOH do not share it.",
			"target1":"scenario-B2",
		},
		{
			"id":"scenario-B2",
			"text":"<p>You don’t see the stall mentioned in any media reports or list.</p>",
			"img":"img/story-1/B2.png",
			"optNum":1,
			"optImg":1,
			"opt0":"You decide it isn’t safe to share the information which may not be true.",
			"target0":"scenario-B2-1",
			"opt1":"To be on the safe side, you decide to send the message but the name of her stall.",
			"target1":"scenario-A2-2",
		},
		{
			"id":"scenario-B2-1",
			"text":"<p>The next day, you see the auntie back at her stall. Turns out, auntie was never sick but had just gone to visit her daughter. You’re glad that you didn’t spread unverified rumour.</p>",
			"img":"img/story-1/B2-1.png",
			"optNum":0,
			"optImg":1,
			"opt0":"The end",
			"target0":"scenario-end",
		},
		{
			"id":"scenario-A1-1",
			"text":"<p>The message you sent out has gone viral. You’re happy. You have kept people safe and infomed. A few days later, you see the auntie! She looks upset and is packing up her things.</p>",
			"img":"img/story-1/A1-1.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Talk to her",
			"target0":"scenario-A1-1_1",
		},
		{
			"id":"scenario-A1-1_1",
			"text":"<p>Turns out, auntie was never sick but had just gone to visit her daughter. She tells you how someone started an evil rumour that she had Covid, even sharing her photo.</p>",
			"img":"img/story-1/A1-1.png",
			"optNum":0,
			"optImg":0,
			"opt0":"Oh no!",
			"target0":"scenario-A1-1_2",
		},
		{
			"id":"scenario-A1-1_2",
			"text":"<p>Worse, she’s also being harassed by people sending her abusive messages and sharing her photo, thinking she’s spreading Covid. She said her daughter convinced her to lodge a police report.</p>",
			"img":"img/story-1/A1-1b.png",
			"optNum":0,
			"optImg":1,
			"opt0":"How now?",
			"target0":"scenario-A1-1_3",
		},
		{
			"id":"scenario-A1-1_3",
			"text":"<p>Do you admit to auntie what you’ve done and try to do damage control?</p>",
			"img":"img/story-1/A1-1b.png",
			"optNum":1,
			"optImg":0,
			"opt0":"Yes! She deserves to know the truth and you don’t want police to come after you.",
			"target0":"scenario-A1-1-1",
			"opt1":"Hell no! Malu la, you told everyone she was Covid-19 positive.",
			"target1":"scenario-A1-1-2",
		},
		{
			"id":"scenario-A1-2",
			"text":"<p>The message you sent out has gone viral. You’re happy. You have kept people safe and infomed. A few days later, you see the auntie! She looks upset and is packing up her things.</p>",
			"img":"img/story-1/A1-1.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Talk to her",
			"target0":"scenario-A1-2_1",
		},
		{
			"id":"scenario-A1-2_1",
			"text":"<p>Turns out, auntie was never sick but had just gone to visit her daughter. She tells you how someone started an evil rumour that some hawkers there had Covid-19.</p>",
			"img":"img/story-1/A1-1.png",
			"optNum":0,
			"optImg":0,
			"opt0":"Oh no!",
			"target0":"scenario-A1-2_2",
		},
		{
			"id":"scenario-A1-2_2",
			"text":"<p>Now, she’s lost 90% of her business and most close her business that she’s run for over 40 years.</p>",
			"img":"img/story-1/A1-1.png",
			"optNum":0,
			"optImg":0,
			"opt0":"How now?",
			"target0":"scenario-A1-2_3",
		},
		{
			"id":"scenario-A1-2_3",
			"text":"<p>Do you admit to auntie what you’ve done and try to do damage control?</p>",
			"img":"img/story-1/A1-1.png",
			"optNum":1,
			"optImg":0,
			"opt0":"Yes! She deserves to know the truth.",
			"target0":"scenario-A1-2-1-1",
			"opt1":"Hell no! Malu la, you told everyone she was Covid-19 positive.",
			"target1":"scenario-A1-1-1-1_1",
		},
		{
			"id":"scenario-A1-1-2",
			"text":"<p>A few days later, the police come knocking. Police have traced the fake news back to you.</p>",
			"img":"img/story-1/A1-1-2.png",
			"optNum":0,
			"optImg":1,
			"opt0":"This is not good",
			"target0":"scenario-A1-1-2_1",
		},
		{
			"id":"scenario-A1-1-2_1",
			"text":"<p>You’re being arrested, investigated under Section 233 of the Communications and Multimedia Act (CMA) 1998 and the Section 505(b) of the Penal Code. You did not realise that even sharing disinformation, could get you prosecuted.</p>",
			"img":"img/story-1/A1-1-2.png",
			"optNum":0,
			"optImg":0,
			"opt0":"The end",
			"target0":"scenario-end",
		},
		{
			"id":"scenario-A1-1-1",
			"text":"<p>You apologise to her and delete your original social media posting. She accepts your apology and decides not to go to the police. You also send out a new message to clarify and apologise for spreading false information.</p>",
			"img":"img/story-1/A1-1-1.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-A1-1-1_1",
		},
		{
			"id":"scenario-A1-2-1-1",
			"text":"<p>You apologise to her and delete your original social media posting. She accepts your apology. You also send out a new message to clarify and apologise for spreading false information.</p>",
			"img":"img/story-1/A1-1-1.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Next",
			"target0":"scenario-A1-1-1_1",
		},
		{
			"id":"scenario-A1-1-1_1",
			"text":"<p>Phew! You are glad you’ve fixed your unintentional mistake. Auntie also says she will try to continue her business the next day.</p>",
			"img":"img/story-1/A1-1-1.png",
			"optNum":0,
			"optImg":0,
			"opt0":"Crisis solved!",
			"target0":"scenario-A1-1-1-1",
		},
		{
			"id":"scenario-A1-1-1-1",
			"text":"<p>However, it doesn’t seem to work. The wrong message continues to spread but the clarification doesn’t get much attention on social media.</p>",
			"img":"img/story-1/A1-2.png",
			"optNum":0,
			"optImg":1,
			"opt0":"Now you regret but there's nothing much you can do.",
			"target0":"scenario-A1-1-1-1_1",
		},
		{
			"id":"scenario-A1-1-1-1_1",
			"text":"<p>A few days later police come knocking. One of the hawkers in the same area whose business has been affected has lodged a police report.</p>",
			"img":"img/story-1/A1-1-2.png",
			"optNum":0,
			"optImg":1,
			"opt0":"This is not good",
			"target0":"scenario-A1-1-1-1_2",
		},
		{
			"id":"scenario-A1-1-1-1_2",
			"text":"<p>You’re being arrested, investigated under Section 233 of the Communications and Multimedia Act (CMA) 1998 and the Section 505(b) of the Penal Code. You did not realise that even sharing disinformation, could get you prosecuted.</p>",
			"img":"img/story-1/A1-1-2.png",
			"optNum":0,
			"optImg":0,
			"opt0":"The end",
			"target0":"scenario-end",
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