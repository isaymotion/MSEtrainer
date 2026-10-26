/* Tagalog cases and the "Culture or pathology?" domain (original cases, anchored to Shea Ch. 16 and Ch. 20).
   Loaded after data.js. All patients are fictional.
   Case fields, in addition to those in data.js:
     lang:'tl'   a Tagalog case. In x, C: and P: lines are written "Tagalog || English"; the English stays hidden until the case is answered.
     ask         "Tagalog || English": a question that would elicit the finding, shown as "Ask it in Tagalog".
     dom         optional: puts the case in a domain other than its answer's (used for "Culture or pathology?" cases whose answer is a standard MSE term).
   Audio for Tagalog lines comes from Usap Tayo's recorded pack (isaymotion.github.io/tagalog/audio). When you add or change Tagalog lines,
   regenerate Usap Tayo's tools/extra-texts/msetrainer.txt (see README) so the audio job records them. */
GROUPS.push({g:'tl',n:'Tagalog and Filipino culture'});
DOMAINS.push({k:'fc',n:'Culture or pathology?',g:'tl',ch:20});
DOM.fc='Culture or pathology?'; DOMG.fc='tl';

/* Filipino cultural look-alikes */
T('hiya','Hiya (reticence before authority)','fc',[20,16],
 `Shame-tinged shyness and restraint in front of a doctor or stranger: few words, little expression, soft voice, eyes down. It eases as rapport grows or when family joins.`,
 `Hiya lifts with time, warmth, and familiar people; expression returns when the topic is comfortable. Blunted affect stays low across topics and settings.`,
 `Initially reticent, warmed with rapport; affect full range by the end of the interview (initial reserve consistent with hiya).`);
T('galang','Deferential gaze (paggalang)','fc',[20,8],
 `Lowering the eyes to an elder or a doctor as a sign of respect, while still answering openly and using po and opo.`,
 `Look at the whole picture: respectful gaze comes with open, polite answers. A guarded patient watches you, withholds, and answers in as few words as possible.`,
 `Eye contact limited, consistent with deference to the examiner; cooperative and forthcoming.`);
T('podrop','Dropped po and opo (register shift)','fc',[20,19],
 `A patient who normally speaks respectfully stops using po, opo, and kayo with the examiner, or switches to curt "ikaw" forms.`,
 `Compare with the person's usual register (ask the family) and with the norm for their age and region. A sudden drop with an older stranger often signals irritation or hostility; peers and younger relatives may never use po.`,
 `Irritable; uses informal register (no po/opo) with the examiner, unusual for him per wife.`);
T('shared','Culturally shared belief (kulam, usog, engkanto)','fc',[20,11],
 `An explanation of illness or misfortune that the person's family or community also holds, such as sorcery (kulam), the evil eye (usog), or nature spirits (engkanto).`,
 `Shared, held with some flexibility, and compatible with medical treatment: think cultural belief. Idiosyncratic, fixed, elaborated around the self, and unshaken by evidence: think delusion.`,
 `Attributes symptoms to kulam, a belief shared by her family; open to medical treatment alongside prayer. Not delusional.`);
T('grief','Grief-related sensing of the deceased','fc',[20,16],
 `Briefly seeing, hearing, or feeling the presence of a loved one who has died, usually comforting and tied to the bereavement, with insight kept.`,
 `Transient, about the deceased only, often around the wake, pasiyam, or the 40th day, and recognized as grief. Psychotic hallucinations are persistent, wider in content, and often distressing or commanding.`,
 `Reports seeing late mother briefly at night since the burial; comforting, recognizes it as grief; no other perceptual disturbance.`);
T('samangloob','Sama ng loob','fc',[20,10],
 `A Filipino idiom of distress: hurt and resentment held inside after a perceived wrong by someone close, often unspoken and felt as heaviness in the chest.`,
 `It is about a real relationship and a real grievance. It is not a fixed false belief (persecutory delusion), and not the same as pervasive depressed mood, though it can feed both.`,
 `Reports "sama ng loob" toward her husband (resentment kept inside about his drinking); explore the relationship and mood further.`);
T('nerbiyos','Nerbiyos','fc',[20,9],
 `An everyday idiom for nervous distress: trembling, cold hands, palpitations, and worry, often after a shock or ongoing stress.`,
 `Ask what the person means: nerbiyos may map onto anxiety, panic, or depression. It is not a motor sign like akathisia, which follows a medicine and is felt as an inner urge to move.`,
 `Describes "nerbiyos" (trembling, palpitations, cold hands) since the typhoon; screen for anxiety and trauma-related symptoms.`);
T('lutang','Lutang (feeling spaced out)','fc',[20,16],
 `Slang for feeling floaty, absent-minded, or out of it. It can describe poor concentration, sedation, lack of sleep, or detachment.`,
 `Clarify before you chart a term. Depersonalization means feeling unreal or outside oneself; lutang often just means "I can't focus" or "I'm sleepy from the medicine".`,
 `Describes feeling "lutang" in the mornings, clarified as drowsiness and poor focus after the night dose; no depersonalization.`);
T('pakikisama','Agreeable opo (pakikisama)','fc',[20,5],
 `Saying yes to a person in authority to keep the interaction smooth, even when it isn't true or isn't understood.`,
 `"Opo" to every question, including contradictory ones, signals politeness rather than real agreement. Check with open questions and teach-back before charting insight or adherence.`,
 `Answers "opo" to all closed questions, including contradictory ones; teach-back incorrect. Agreement likely reflects politeness; insight not yet established.`);
T('sanib','Culturally framed possession (sanib)','fc',[20,11],
 `An experience described as being entered or possessed by a spirit (sinapian), often in a religious or healing setting, sometimes shared by a community.`,
 `Ask about context, control, and course: time-limited, in a ritual or group setting, and accepted by the community points to a cultural experience. Persistent, distressing, unwanted control in daily life points to a passivity delusion or another disorder.`,
 `Describes being "sinapian" during a healing service; time-limited, culturally sanctioned in her community, no distress or impairment since. No passivity phenomena.`);

/* Tagalog MSE cases (answers are existing MSE terms) */
V.push(
{id:'tl-tp01',lang:'tl',t:'circ',d:['tang','foi','linear'],x:`C: Ano po ang nagdala sa inyo dito ngayon? || What brings you here today?
P: Ay, Dok, nagsimula po noong Martes. Hindi, Lunes pala, kasi Lunes po namamalengke si Inday, yung pamangkin ko na nagtitinda ng isda sa may kanto. Siya po ang nakapansin na hindi na ako kumakain. Tapos po, dahil hindi ako makakain, hindi na rin ako makatulog. Kaya po, yun, Dok: hindi po ako makatulog. || Oh, Doc, it started on Tuesday. No, Monday actually, because Monday is when Inday goes to market, my niece who sells fish at the corner. She noticed I wasn't eating anymore. Then, because I couldn't eat, I couldn't sleep either. So that's it, Doc: I can't sleep.`,
 w:`Full of detail, but she comes back to the point herself ("Kaya po, yun, Dok"). Phrases like "kaya po" or "yun nga po" often mark the return to the goal in Tagalog storytelling.`,
 ask:`Puwede po ba ninyong sabihin nang maikli ang pangunahing problema? || Could you tell me the main problem briefly?`},
{id:'tl-tp02',lang:'tl',t:'tang',d:['circ','loose','foi'],x:`C: Kumusta po ang tulog ninyo? || How is your sleep?
P: Ang tulog... alam n'yo, Dok, ang kutson namin galing pa sa Divisoria. Mura doon, pero kailangan mong tumawad. Marunong tumawad ang nanay ko, taga-Batangas kasi siya. Ang galing ng mga taga-Batangas sa negosyo, yung kapeng barako nila. || Sleep... you know, Doc, our mattress is from Divisoria. It's cheap there, but you have to haggle. My mother knows how to haggle, because she's from Batangas. People from Batangas are great at business, their barako coffee.`,
 w:`Each step makes sense (mattress, haggling, mother, Batangas, coffee), but he never comes back to sleep. Understandable links with the goal lost is tangentiality.`,
 ask:`Balikan po natin ang tulog ninyo. Ilang oras po kayo natutulog? || Let's go back to your sleep. How many hours do you sleep?`},
{id:'tl-tp03',lang:'tl',t:'foi',d:['tang','loose','pressured'],x:`O: A 26-year-old man, talking fast, can barely be interrupted.
P: Dok, ang ganda ng araw! Araw, sun, Sunday, simba tayo! Ang simbahan sa Quiapo, ang daming tao, tao, ang daming boto, eleksiyon na, tatakbo ako, mananalo ako! || Doc, what a beautiful day! Day, sun, Sunday, let's go to church! The church in Quiapo, so many people, people, so many votes, it's election time, I'll run, I'll win!`,
 w:`Rapid jumps between ideas linked by word play and quick associations (araw, sun, Sunday, simba), with racing speed. That is flight of ideas. Each jump is traceable, unlike loosening of associations.`,
 ask:`Parang nag-uunahan po ba ang mga iniisip ninyo? || Do your thoughts feel like they're racing?`},
{id:'tl-tp04',lang:'tl',t:'clang',d:['foi','neolog','persev'],x:`C: Kumusta po kayo sa bahay? || How are things at home?
P: Bahay, buhay, kulay, patay. Patay ang ilaw, ilaw ng buhay. Bahay-bahayan, buhay-buhayan. || House, life, color, dead. The light is dead, the light of life. Playing house, playing life.`,
 w:`Words are chosen for their sound (bahay, buhay, kulay, patay) rather than their meaning. Rhyme driving the speech is clang association, common in mania.`,
 ask:`Puwede po ba ninyong ikuwento kung sino ang kasama ninyo sa bahay? || Can you tell me who lives with you at home?`},
{id:'tl-tp05',lang:'tl',t:'neolog',d:['clang','salad','concrete'],x:`C: Ano po ang nararamdaman ninyo sa katawan ninyo? || What do you feel in your body?
P: May "kuryentulog" po sa ulo ko gabi-gabi. Pinapadala nila ang kuryentulog para hindi ako makapag-isip. || There's "kuryentulog" in my head every night. They send the kuryentulog so I can't think.
C: Ano po ang ibig ninyong sabihin sa kuryentulog? || What do you mean by kuryentulog?
P: Kuryentulog. Yun na po iyon. Alam n'yo na iyon. || Kuryentulog. That's what it is. You know what it is.`,
 w:`"Kuryentulog" (from kuryente, electricity, and tulog, sleep) is a new word with a private meaning that he can't or won't explain. A self-made word used as if everyone knew it is a neologism.`,
 ask:`Ano po ang ibig ninyong sabihin doon? || What do you mean by that?`},
{id:'tl-tp06',lang:'tl',t:'block',d:['povspeech','latency','distract'],x:`C: Ano po ang nangyari bago kayo dinala dito? || What happened before you were brought here?
P: Nasa school po ako, tapos yung mga kaklase ko po ay... || I was at school, then my classmates were...
O: She stops mid-sentence and stares at the corner for several seconds.
P: ...Ano po ulit ang tanong, Dok? || ...What was the question again, Doc?`,
 w:`A sudden stop in the middle of a thought, followed by loss of what she was saying. That is thought blocking. Ask whether something interrupted her thoughts, such as voices.`,
 ask:`Ano po ang nangyari kanina nang huminto kayo? May narinig po ba kayo? || What happened just now when you stopped? Did you hear something?`},
{id:'tl-tp07',lang:'tl',t:'loose',d:['tang','foi','salad'],x:`C: Bakit po kayo dinala ng kapatid ninyo dito? || Why did your brother bring you here?
P: Kasi po ang bigas ay galing sa Diyos. Ang kapatid ko po ay kotse na walang gulong. Kaya kailangan ng ospital ang telebisyon. || Because rice comes from God. My brother is a car without wheels. So the hospital needs the television.`,
 w:`Each sentence is grammatical, but the connections between them can't be followed (rice, God, a brother who is a car, the hospital's television). Ideas shifting without understandable links is loosening of associations; word salad would break down within sentences too.`,
 ask:`Puwede po ba ninyong ipaliwanag pa iyan? || Can you explain that more?`}
);
V.push(
{id:'tl-sp01',lang:'tl',t:'pressured',d:['foi','tang','clang'],x:`O: A 30-year-old woman starts talking before you finish the greeting and keeps going over your attempts to interrupt.
C: Ma'am, sandali lang po, puwede po ba akong magtanong... || Ma'am, just a moment, may I ask...
P: Oo, oo, Dok, pero pakinggan mo muna ako, kasi importante ito, kailangan kong sabihin lahat, lahat-lahat, ngayon din, bago ko makalimutan! || Yes, yes, Doc, but listen to me first, because this is important, I need to say everything, absolutely everything, right now, before I forget!`,
 w:`The main finding is the speech itself: fast, loud, hard to interrupt, with a felt urgency to keep talking. That is pressured speech. Flight of ideas is about jumps between ideas, which aren't shown here.`,
 ask:`Napapansin po ba ng iba na mabilis kayong magsalita? || Do others notice that you talk fast?`},
{id:'tl-sp02',lang:'tl',t:'povspeech',d:['block','latency','mutism'],x:`C: Ikuwento po ninyo ang isang araw ninyo sa bahay. || Tell me about a day at home.
P: Wala po. || Nothing.
C: Ano po ang ginagawa ninyo sa umaga? || What do you do in the morning?
P: Higa. || Lie down.
C: Tapos po? || And then?
P: Wala. || Nothing.
O: Her family says she has spoken this way for months, at home and with friends.`,
 w:`Very few words even with open prompts, in every setting, for months. That is poverty of speech (alogia). Hiya with a stranger would ease with rapport and with family, which isn't the case here.`,
 ask:`Ano pa po ang ginawa ninyo kahapon, mula paggising hanggang pagtulog? || What else did you do yesterday, from waking up to going to sleep?`},
{id:'tl-sp03',lang:'tl',t:'latency',d:['block','povspeech','pmr'],x:`C: Ilang taon na po kayo? || How old are you?
O: About eight seconds pass. She looks down.
P: ...Apatnapu po. || ...Forty.
C: Ilan po ang anak ninyo? || How many children do you have?
O: Another long pause.
P: ...Tatlo po. || ...Three.`,
 w:`Each answer is correct and complete but comes after a long pause, question after question. That is increased latency of response, often seen in depression. Blocking is a sudden stop mid-thought.`,
 ask:`Mabagal po ba kayong mag-isip nitong mga nakaraang linggo? || Has your thinking been slow these past weeks?`}
);
V.push(
{id:'tl-tc01',lang:'tl',t:'persec',d:['shared','ideasref','overvalued'],x:`C: Sa tingin po ba ninyo ay may gustong manakit sa inyo? || Do you feel someone wants to harm you?
P: Oo, si Mang Ben, kapitbahay namin. Nilalagyan niya ng lason ang tubig namin para makuha ang lupa namin. || Yes, Mang Ben, our neighbor. He puts poison in our water to get our land.
C: Gaano po kayo kasigurado? || How sure are you?
P: Sigurado ako. Kahit sabihin pa ng lahat na hindi, alam ko ang totoo. || I'm sure. Even if everyone says no, I know the truth.
O: His wife says no one else believes this.`,
 w:`A fixed, false belief that someone means to harm him, held against everyone else's view and not shared by his family. That is a persecutory delusion.`,
 ask:`Puwede po bang may iba pang paliwanag? || Could there be another explanation?`},
{id:'tl-tc02',lang:'tl',t:'guilt',d:['nihil','samangloob','obsession'],x:`O: A 68-year-old widow with severe depression.
P: Kasalanan ko po ang bagyo, Dok. Pinarusahan ng Diyos ang buong bayan dahil sa mga kasalanan ko. Ako po ang dahilan kung bakit namatay ang mga tao. || The typhoon is my fault, Doc. God punished the whole town because of my sins. I'm the reason people died.`,
 w:`She holds herself responsible for a disaster she could not have caused, with full conviction. That is a delusion of guilt, typical of psychotic depression. It is not sama ng loob, which is hurt toward someone else.`,
 ask:`Pakiramdam po ba ninyo ay may nagawa kayong napakasama at dapat kayong parusahan? || Do you feel you have done something terrible and deserve punishment?`},
{id:'tl-tc03',lang:'tl',t:'nihil',d:['somatic','guilt','deperson'],x:`P: Wala na po akong bituka, Dok. Bulok na po ang loob ko. Hindi na kailangang kumain kasi patay na naman ako. || I don't have intestines anymore, Doc. My insides are rotten. There's no need to eat because I'm already dead anyway.`,
 w:`The belief that organs are gone, the body is rotting, or one is already dead is a nihilistic delusion (Cotard). A somatic delusion is about a specific bodily disease or defect without the theme of nonexistence.`,
 ask:`Pakiramdam po ba ninyo ay nabubulok ang katawan ninyo o nawawala ang mga lamang-loob ninyo? || Do you feel your body is rotting or your organs are missing?`},
{id:'tl-tc04',lang:'tl',t:'insertion',d:['broadcast','control','obsession'],x:`C: May naglalagay po ba ng mga isipin sa utak ninyo na hindi sa inyo galing? || Does someone put thoughts in your head that aren't yours?
P: Oo po. Yung mga isip na hindi akin, pinapasok po ng radyo sa ulo ko. Hindi po akin ang mga iyon, Dok. || Yes. The thoughts that aren't mine, the radio puts them into my head. They're not mine, Doc.`,
 w:`Thoughts experienced as placed in his mind by an outside source and not his own: thought insertion. An obsession is recognized as one's own thought, however unwanted.`,
 ask:`Naririnig po ba ng ibang tao ang mga iniisip ninyo? || Can other people hear your thoughts?`}
);
V.push(
{id:'tl-pe01',lang:'tl',t:'command',d:['ah','commenting','grief'],x:`C: Ano po ang sinasabi ng boses? || What does the voice say?
P: "Tumalon ka na. Mas mabuti kung wala ka na." Paulit-ulit po, lalo na sa gabi. || "Just jump. It's better if you're gone." Over and over, especially at night.
C: Sinusunod po ba ninyo? || Do you follow it?
P: Hindi pa po. Pero minsan, gusto ko na lang sundin para tumahimik na sila. || Not yet. But sometimes I just want to obey so they'll be quiet.`,
 w:`The voices tell her to do something, here to jump. Command hallucinations carry direct risk: ask whether she can resist, and assess suicide risk right away.`,
 ask:`Inuutusan po ba kayo ng boses na saktan ang sarili ninyo o ang ibang tao? || Do the voices tell you to hurt yourself or others?`},
{id:'tl-pe02',lang:'tl',t:'commenting',d:['command','ah','ideasref'],x:`P: Kapag naglalaba po ako, may nagsasabi: "Ayan, naglalaba na siya. Ngayon, binabanlawan na niya." Kapag kumakain: "Kumakain na naman siya." Dalawang lalaki po, nag-uusap tungkol sa akin. || When I do laundry, someone says: "There, she's doing laundry. Now she's rinsing." When I eat: "She's eating again." Two men, talking about me.`,
 w:`Voices giving a running commentary on what she is doing, talking about her in the third person. That is commenting voices, a classic first-rank symptom.`,
 ask:`Pinupuna po ba nila o kinokomentuhan ang ginagawa ninyo? || Do they comment on what you are doing?`},
{id:'tl-pe03',lang:'tl',t:'th',d:['somatic','vh','nerbiyos'],x:`O: A 31-year-old man, using shabu daily for months, keeps scratching his forearms, which show excoriations.
P: May mga kulisap po sa ilalim ng balat ko, Dok. Ramdam ko po silang gumagapang. Kinakamot ko po para lumabas. || There are bugs under my skin, Doc. I can feel them crawling. I scratch to get them out.`,
 w:`The felt sensation of insects crawling under the skin is a tactile hallucination (formication), common with stimulants such as methamphetamine. The belief that he is infested may also become a somatic delusion.`,
 ask:`May nararamdaman po ba kayong gumagapang sa balat ninyo o humahawak sa inyo? || Do you feel something crawling on your skin or touching you?`},
{id:'tl-pe04',lang:'tl',t:'hypnag',d:['ah','grief','vh'],x:`P: Kapag patulog na po ako, parang may tumatawag sa pangalan ko. Isang beses lang, tapos wala na. Sa araw po, wala naman. || When I'm falling asleep, it's like someone calls my name. Just once, then nothing. During the day, nothing.`,
 w:`A brief perception occurring only while falling asleep is a hypnagogic hallucination, common in healthy people. On waking it would be hypnopompic.`,
 ask:`Kailan po ninyo ito naririnig? Kapag patulog o pagising lang po ba? || When do you hear it? Only when falling asleep or waking up?`}
);
V.push(
{id:'tl-af01',lang:'tl',t:'blunted',d:['hiya','flat','restricted'],x:`O: A 24-year-old man, three years after a first psychotic episode, speaks with almost no change of expression, whether talking about his mother's death, his favorite basketball team, or a joke. His sister, sitting with him, says he has been like this at home for a long time.
P: Okay lang po. Wala po. || It's okay. Nothing.`,
 w:`Strongly reduced expression that stays low across topics and with family present, for a long time. That is blunted affect. Hiya would lift with family and comfortable topics.`,
 ask:`Ano po ang nararamdaman ninyo kapag naaalala ninyo ang nanay ninyo? || What do you feel when you remember your mother?`},
{id:'tl-af02',lang:'tl',t:'labile',d:['inapp','restricted','pressured'],x:`O: A 29-year-old woman laughs loudly about her trip to the market, then within seconds sobs about her cat, then laughs again when the nurse walks in.
P: Hahaha! Ang saya, Dok! ...(umiiyak) Pero si Muning, nawala... (tumatawa ulit) Ay, ang nurse! || Hahaha! So fun, Doc! ...(crying) But Muning, she's lost... (laughing again) Oh, the nurse!`,
 w:`Rapid, large swings between laughing and crying within moments: labile affect. Inappropriate affect is about a mismatch with content (laughing at sad news) rather than rapid shifts.`,
 ask:`Mabilis po bang nagbabago ang pakiramdam ninyo, mula masaya hanggang malungkot? || Does your mood change quickly, from happy to sad?`},
{id:'tl-af03',lang:'tl',t:'inapp',d:['labile','labelle','blunted'],x:`C: Nakakalungkot po ang nangyari sa tatay ninyo. || What happened to your father is very sad.
P: (tumatawa nang malakas) Oo po, patay na siya. Nasagasaan po ng trak. (tawa pa rin) || (laughing loudly) Yes, he's dead. A truck ran him over. (still laughing)
O: He gives no reason for the laughter and seems unaware of it.`,
 w:`Laughing while describing his father's violent death, without explanation: affect that doesn't fit the content is inappropriate affect. Nervous laughter can happen in grief too, so ask what he feels.`,
 ask:`Ano po ang nararamdaman ninyo habang ikinukuwento ninyo iyan? || What do you feel as you tell me that?`}
);
V.push(
{id:'tl-be01',lang:'tl',t:'akathisia',d:['pma','nerbiyos','td'],x:`O: Four days after starting haloperidol, a 23-year-old woman shifts her weight from foot to foot and can't stay seated.
P: Hindi po mapakali ang mga binti ko, Dok. Hindi po ako kinakabahan, pero gusto ko lang maglakad nang maglakad. || My legs can't keep still, Doc. I'm not nervous, but I just want to keep walking.`,
 w:`An inner urge to move, felt mainly in the legs, soon after starting an antipsychotic: akathisia. She separates it from worry herself ("hindi po ako kinakabahan"), which helps tell it from nerbiyos or anxiety.`,
 ask:`Hindi po ba mapakali ang mga binti ninyo, na parang gusto ninyong maglakad palagi? || Do your legs feel restless, as if you always want to walk?`},
{id:'tl-be02',lang:'tl',t:'pmr',d:['latency','akathisia','avolition'],x:`O: A 45-year-old man walks into the room very slowly and lowers himself into the chair. His movements are sparse; he barely gestures.
P: Pasensya na po, Dok. Ang bigat po ng katawan ko. Parang ang hirap gumalaw. || Sorry, Doc. My body feels so heavy. It's like it's hard to move.`,
 w:`Visibly slowed body movements, with the felt heaviness ("ang bigat ng katawan"), are psychomotor retardation. Increased latency is about delayed answers, a speech finding.`,
 ask:`May nakapansin po ba na bumagal kayo kumilos o magsalita? || Has anyone noticed you moving or speaking more slowly?`}
);
V.push(
{id:'tl-cg01',lang:'tl',t:'clouding',d:['disorient','distract','confab'],x:`O: A 72-year-old man, two days after surgery, was calm and oriented this morning. Tonight he pulls at his IV line and calls the nurse by his late wife's name, then dozes off mid-sentence.
P: Linda... nasaan na ang... (nakatulog) ...anong oras na? || Linda... where's the... (dozes) ...what time is it?`,
 w:`Level of alertness changing over hours, worse at night, with drowsiness mid-sentence: fluctuating consciousness, the core of delirium. Disorientation is present too, but the fluctuation is the key finding.`,
 ask:`Umaga, hapon, o gabi na po ba ngayon? || Is it morning, afternoon, or evening?`},
{id:'tl-cg02',lang:'tl',t:'concrete',d:['neolog','loose','povcontent'],x:`C: Ano po ang ibig sabihin ng "Kapag may tiyaga, may nilaga"? || What does "Where there is perseverance, there is stew" mean?
P: Kapag po matiyaga kang magluto, may nilagang baka ka. || If you're patient in cooking, you'll have beef stew.
O: He finished high school. Similar answers to two other proverbs.`,
 w:`Taking the proverb literally (cooking stew) instead of its meaning (effort brings reward) is concrete thinking. Account for schooling and familiarity with the proverb before charting it.`,
 ask:`Ano po ang ibig sabihin ng "Kapag may tiyaga, may nilaga"? || What does "Where there is perseverance, there is stew" mean?`}
);
V.push(
{id:'tl-in01',lang:'tl',t:'anosognosia',d:['pakikisama','intellinsight','poorjudg'],x:`C: Sa tingin po ba ninyo ay may sakit kayo? || Do you think you are sick?
P: Wala po akong sakit. Sila ang may problema. Dinala lang ako dito kasi akala nila baliw ako. || I'm not sick. They're the ones with the problem. I was just brought here because they think I'm crazy.`,
 w:`He denies having any illness at all. That is absent insight. Note the stigma in "baliw": it's worth responding to, not repeating.`,
 ask:`Bakit po sa tingin ninyo kayo dinala dito ng pamilya ninyo? || Why do you think your family brought you here?`},
{id:'tl-in02',lang:'tl',t:'intellinsight',d:['trueinsight','anosognosia','pakikisama'],x:`P: Alam ko po, Dok, schizophrenia ang sakit ko at kailangan ko ng gamot habambuhay. Naiintindihan ko po iyon. || I know, Doc, my illness is schizophrenia and I need medicine for life. I understand that.
O: The chart shows he stopped his medicine three times in the past two years, each time within a month of discharge, saying he felt fine.`,
 w:`He can explain his illness and treatment, but his behavior hasn't changed. Knowing without acting on it is intellectual insight; true (emotional) insight leads to changed behavior.`,
 ask:`Ano po ang gagawin ninyo kapag maayos na ang pakiramdam ninyo pero may gamot pa kayo? || What will you do when you feel well but still have medicine left?`}
);

/* Culture or pathology? (Filipino look-alikes). dom:'fc' keeps cases whose answer is a standard MSE term in this domain. */
V.push(
{id:'fc01',lang:'tl',t:'hiya',d:['blunted','povspeech','galang'],x:`O: A 19-year-old woman from a fishing village gives one-word answers, looks at the floor, and barely changes expression for the first ten minutes. When the doctor asks about her younger siblings, she smiles, and when her aunt joins she starts telling stories and laughing.
C: Ilan po ang kapatid ninyo? || How many siblings do you have?
P: Lima po. (ngumiti) Ako po ang panganay, kaya ako ang nag-aalaga sa kanila. || Five. (smiles) I'm the eldest, so I take care of them.`,
 w:`Reserve that lifts with a comfortable topic and a familiar person is hiya, not blunted affect. Chart her expression from the whole interview, not the first minutes.`,
 ask:`Ikuwento po ninyo ang mga kapatid ninyo. || Tell me about your siblings.`},
{id:'fc02',lang:'tl',t:'galang',d:['hiya','podrop','persec'],x:`O: A 70-year-old man keeps his eyes lowered while the young doctor speaks, glancing up briefly when he answers. He answers every question fully.
P: Opo, Dok. Iniinom ko po ang gamot tuwing umaga. Minsan lang po nakakalimutan kapag maaga akong pumunta sa bukid. || Yes, Doc. I take the medicine every morning. Only sometimes I forget when I go to the farm early.`,
 w:`Lowered eyes with open, polite, detailed answers is respect toward a doctor, not guardedness. Chart eye contact with its context.`,
 ask:`Ano pa po ang gusto ninyong itanong sa akin? || What else would you like to ask me?`},
{id:'fc03',lang:'tl',t:'podrop',d:['galang','hiya','pressured'],x:`O: A 42-year-old man brought in by his wife. She whispers that he is usually very polite to older people.
C: Mang Ramon, ano po ang gusto ninyong itawag ko sa inyo? || Mang Ramon, what would you like me to call you?
P: Bakit mo tinatanong? Ramon na lang. Bilisan mo, ha. || Why are you asking? Just Ramon. Hurry up, okay?`,
 w:`From a man who normally uses po with older people, the switch to curt "mo" and no po with a doctor is a register shift that signals irritation. Pair it with mood and attitude findings.`,
 ask:`Mukhang naiinis po kayo. Ano po ang nakakainis sa inyo ngayon? || You seem annoyed. What's bothering you right now?`},
{id:'fc04',lang:'tl',t:'shared',d:['persec','overvalued','somatic'],x:`O: A 35-year-old woman with headaches and poor sleep after a quarrel with a neighbor.
P: Sabi po ng nanay ko at ng tiyahin ko, baka kinulam ako ng kapitbahay. Ewan ko po, Dok. Kaya nga po pumunta rin ako dito, baka may gamot. Puwede naman pong sabay ang dasal at gamot, di ba? || My mother and my aunt say maybe the neighbor put a curse on me. I don't know, Doc. That's why I came here too, in case there's medicine. Prayer and medicine can go together, right?`,
 w:`The kulam explanation is shared by her family, she holds it loosely ("ewan ko po"), and she welcomes treatment. That is a culturally shared belief, not a delusion.`,
 ask:`Ano po sa tingin ninyo ang sanhi nito? || What do you think is causing this?`},
{id:'fc05',lang:'tl',dom:'fc',t:'persec',d:['shared','overvalued','ideasref'],x:`O: A 50-year-old man. His family also believes in kulam, but they say his ideas are "iba na" (different now).
P: Hindi lang kulam, Dok. Ang buong barangay, pati ang pari at ang mga pulis, nagkasundo para patayin ako. May chip sila sa kanin ko. Ako lang ang target nila, ako lang ang nakakaalam. || It's not just kulam, Doc. The whole barangay, even the priest and the police, agreed to kill me. They put a chip in my rice. I'm their only target, only I know.`,
 w:`It starts from a shared idiom (kulam) but goes far beyond it: a fixed, idiosyncratic plot centered on himself, rejected by his own family. That is a persecutory delusion. The family's "iba na" is a useful cultural yardstick.`,
 ask:`Naniniwala rin po ba ang pamilya ninyo dito? || Does your family believe this too?`},
{id:'fc06',lang:'tl',t:'grief',d:['vh','hypnag','shared'],x:`O: A 58-year-old widow, three weeks after her husband's burial.
P: Minsan po, sa gabi, nakikita ko si Ernesto sa may pintuan, nakangiti. Sandali lang po, tapos wala na. Hindi naman po ako natatakot. Alam ko pong dahil miss na miss ko siya. || Sometimes at night I see Ernesto by the door, smiling. Just for a moment, then he's gone. I'm not scared. I know it's because I miss him so much.`,
 w:`Brief, comforting, about the deceased only, and understood as grief: grief-related sensing of the deceased. It is common around the wake and the 40 days. Psychotic hallucinations would be persistent, wider in content, and usually distressing.`,
 ask:`May iba pa po ba kayong nakikita o naririnig, bukod kay Ernesto? || Do you see or hear anything else, apart from Ernesto?`},
{id:'fc07',lang:'tl',dom:'fc',t:'vh',d:['grief','illusion','hypnag'],x:`O: A 61-year-old man, two months after his wife's death, has stopped eating and sleeping.
P: Gabi-gabi po, nakikita ko si Rosa at mga taong walang mukha sa kuwarto. Sinasabi nila na sumama na raw ako sa kanila. Takot na takot po ako, kaya hindi na ako natutulog. || Every night I see Rosa and faceless people in the room. They say I should come with them. I'm terrified, so I don't sleep anymore.`,
 w:`Persistent, frightening, involving strangers as well as his wife, with a message to "come with them": these are visual hallucinations, not ordinary grief. Assess for psychotic depression and suicide risk right away.`,
 ask:`Ano po ang sinasabi nila sa inyo? Naisip na po ba ninyong sumama sa kanila? || What do they tell you? Have you thought of going with them?`},
{id:'fc08',lang:'tl',t:'samangloob',d:['persec','guilt','anhedonia'],x:`O: A 44-year-old woman brought by her daughter for chest heaviness with normal cardiac tests.
P: May sama po ako ng loob sa asawa ko, Dok. Ilang taon na po siyang umiinom at hindi ko po masabi sa kanya. Dito po, sa dibdib ko, parang may nakadagan. || I have sama ng loob toward my husband, Doc. He's been drinking for years and I can't tell him. Here, in my chest, it's like something heavy is pressing.`,
 w:`Hurt and resentment toward a specific person over a real grievance, kept inside and felt in the body: sama ng loob, an idiom of distress. It is a doorway to explore mood, the marriage, and safety at home, not a delusion.`,
 ask:`Kanino po kayo may sama ng loob, at bakit po? || Who do you have sama ng loob toward, and why?`},
{id:'fc09',lang:'tl',t:'nerbiyos',d:['akathisia','pma','deperson'],x:`O: A 39-year-old fisherman, two months after a typhoon destroyed his house. He takes no medicine.
P: Nerbiyos po, Dok. Kapag umuulan, nanginginig ang kamay ko, malamig, at ang bilis ng tibok ng puso ko. Hindi po ako mapakali hanggang tumigil ang ulan. || Nerbiyos, Doc. When it rains, my hands shake, they go cold, and my heart beats fast. I can't settle until the rain stops.`,
 w:`An everyday idiom for nervous distress after a shock, here tied to rain after a typhoon. Nerbiyos is his word; your next step is to screen for anxiety and trauma-related symptoms. With no medicine, akathisia is unlikely.`,
 ask:`Ano po ang ibig ninyong sabihin sa nerbiyos? Kailan po ito nangyayari? || What do you mean by nerbiyos? When does it happen?`},
{id:'fc10',lang:'tl',t:'lutang',d:['deperson','dereal','distract'],x:`O: A 27-year-old call center agent, one week after starting quetiapine at night.
P: Lutang po ako sa umaga, Dok. || I'm lutang in the mornings, Doc.
C: Ano po ang ibig ninyong sabihin sa lutang? || What do you mean by lutang?
P: Antok na antok po ako at hindi makapag-focus sa trabaho hanggang tanghali. Pero pakiramdam ko naman po, ako pa rin ako. || I'm very sleepy and can't focus at work until noon. But I still feel like myself.`,
 w:`Once clarified, "lutang" means morning drowsiness and poor focus after a night dose, and she still feels like herself. Chart that, not depersonalization. Always ask what a slang word means before translating it into a term.`,
 ask:`Ano po ang ibig ninyong sabihin sa lutang? || What do you mean by lutang?`},
{id:'fc11',lang:'tl',dom:'fc',t:'deperson',d:['lutang','dereal','sanib'],x:`O: A 22-year-old nursing student with panic attacks.
P: Minsan po, lutang na lutang ako. Parang nanonood lang ako sa sarili ko mula sa labas, parang hindi akin ang mga kamay ko. Alam ko pong ako iyon, pero parang hindi totoo. || Sometimes I'm really lutang. It's like I'm just watching myself from outside, as if my hands aren't mine. I know it's me, but it feels unreal.`,
 w:`She uses "lutang", but the description is watching herself from outside with hands that feel not her own, with reality testing kept. That is depersonalization. Same word as the last case, different finding: the clarification decides.`,
 ask:`Pakiramdam po ba ninyo ay hindi totoo ang sarili ninyo o ang paligid ninyo? || Do you feel that you or your surroundings are not real?`},
{id:'fc12',lang:'tl',t:'pakikisama',d:['intellinsight','anosognosia','trueinsight'],x:`C: Naiintindihan po ba ninyo ang sakit ninyo? || Do you understand your illness?
P: Opo. || Yes.
C: Iinumin po ba ninyo ang gamot araw-araw? || Will you take the medicine every day?
P: Opo. || Yes.
C: Hindi na po ba ninyo kailangang inumin ito? || So you don't need to take it anymore?
P: Opo. || Yes.
C: Puwede po ba ninyong sabihin kung paano ninyo ito iinumin? || Can you tell me how you'll take it?
P: ...Ewan ko po. Kung ano po ang sabihin ninyo, Dok. || ...I don't know. Whatever you say, Doc.`,
 w:`"Opo" to contradictory questions, then no answer to an open one. That is polite agreement (pakikisama), not insight or a plan. Use open questions and teach-back before charting insight.`,
 ask:`Puwede po ba ninyong sabihin sa sarili ninyong salita kung paano ninyo iinumin ang gamot? || Can you tell me in your own words how you'll take the medicine?`},
{id:'fc13',lang:'tl',t:'sanib',d:['control','deperson','shared'],x:`O: A 33-year-old woman mentions this during an interview for insomnia after her mother's death.
P: Noong nakaraang Biyernes, sa healing service sa kapilya namin, sinapian po ako ng espiritu. Nagsalita daw po ako ng ibang wika, tapos nawala rin. Normal lang po iyon sa amin. Wala na pong nangyari mula noon. || Last Friday, at the healing service in our chapel, a spirit possessed me. They said I spoke another language, then it passed. That's normal for us. Nothing has happened since.`,
 w:`Time-limited, in a religious group setting that accepts it, with no distress or recurrence: a culturally framed possession experience. Note it, and keep your focus on the grief and insomnia she came for.`,
 ask:`Nangyayari po ba ito sa labas ng healing service, sa araw-araw ninyo? || Does this happen outside the healing service, in your daily life?`},
{id:'fc14',lang:'tl',dom:'fc',t:'control',d:['sanib','insertion','shared'],x:`O: A 28-year-old man. His family's church also speaks of spirits, but they brought him because "hindi na ito katulad ng sa simbahan" (this is not like at church anymore).
P: Araw-araw po, may espiritu na kumokontrol sa katawan ko. Siya po ang nagpapagalaw sa kamay ko, siya ang nagsasalita gamit ang bibig ko. Ayaw ko po, pero hindi ko siya mapigilan. || Every day, a spirit controls my body. It moves my hands, it speaks using my mouth. I don't want it, but I can't stop it.`,
 w:`Daily, unwanted, distressing control of his body and speech by an outside force, outside any ritual and rejected by his own religious community. That is a delusion of control (passivity), not culturally framed possession.`,
 ask:`May kumokontrol po ba sa katawan o sa mga kilos ninyo? || Is something controlling your body or actions?`},
{id:'fc15',lang:'tl',dom:'fc',t:'blunted',d:['hiya','galang','flat'],x:`O: A 20-year-old man was described by the admitting nurse as "nahihiya lang" (just shy). Over a 40-minute interview, including time with his mother and talk about his favorite sport, his face hardly changes. His mother says he used to be "masayahin" (cheerful) until a year ago.
P: Ewan ko po. Okay lang. || I don't know. It's okay.`,
 w:`Low expression that does not lift with time, family, or a favorite topic, and is a change from his usual self: blunted affect. Hiya is real, but calling every quiet patient "nahihiya lang" can hide negative symptoms.`,
 ask:`Ano po ang mga bagay na nagpapasaya sa inyo dati? Ngayon po? || What used to make you happy? And now?`}
);
