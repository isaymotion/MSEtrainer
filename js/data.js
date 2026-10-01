/* MSE Trainer case and term data.
   To add a case: append an object to V with a unique id, t (correct term key),
   d (three distractor term keys), q (optional question text), x (vignette; lines starting C: / P: / O:), and w (explanation). */
const CH={
  8:`Nonverbal Behavior: The Interview as Mime`,
  9:`Mood Disorders: How to Sensitively Arrive at a Differential Diagnosis`,
  10:`Interviewing Techniques for Understanding the Person Beneath the Mood Disorder`,
  11:`Psychotic Disorders: How to Sensitively Arrive at a Differential Diagnosis`,
  12:`Interviewing Techniques for Understanding the Person Beneath the Psychosis`,
  16:`The Mental Status: How to Perform and Document It Effectively`,
  17:`Exploring Suicidal Ideation: The Delicate Art of Suicide Assessment`,
  18:`Exploring Violent and Homicidal Ideation`,
  19:`Transforming Anger: Confrontation and Other Points of Disengagement`,
  20:`Culturally Adaptive Interviewing: Exploring Culture, Worldview, and Spirituality`,
  21:`Vantage Points: Bridges to Psychotherapy`
};
const DOMAINS=[
  {k:'tp',n:'Thought process',g:'mse'},{k:'tc',n:'Thought content',g:'mse'},{k:'pe',n:'Perception',g:'mse'},
  {k:'af',n:'Mood and affect',g:'mse'},{k:'sp',n:'Speech',g:'mse'},{k:'be',n:'Behavior and motor',g:'mse'},
  {k:'cg',n:'Cognition',g:'mse'},{k:'in',n:'Insight and judgment',g:'mse'},
  {k:'ag',n:'Anger and disengagement',g:'skill',ch:19},{k:'cu',n:'Culture and identity',g:'skill',ch:20},
  {k:'vp',n:'Vantage points',g:'skill',ch:21}
];
const GROUPS=[{g:'mse',n:'Mental status'},{g:'skill',n:'Interviewing skills'}];
const DOM=Object.fromEntries(DOMAINS.map(d=>[d.k,d.n]));
const DOMG=Object.fromEntries(DOMAINS.map(d=>[d.k,d.g]));

const TERMS={};
function T(k,n,dom,ch,def,tell,chart){TERMS[k]={k,n,dom,ch,def,tell,chart};}

/* Thought process */
T('linear','Linear and goal-directed','tp',[16],
 `Ideas follow one another logically and reach the point without unnecessary detours.`,
 `The baseline. Relevant, connected answers are normal even in a sad or anxious patient; don't pathologize ordinary digressions.`,
 `TP: linear and goal-directed.`);
T('circ','Circumstantiality','tp',[16],
 `An indirect, overdetailed route to the answer, full of nonessential detail, that eventually reaches the goal.`,
 `Did they get back to the question? Circumstantial patients do; tangential ones don't.`,
 `TP: circumstantial; overinclusive detail but reached goal without redirection.`);
T('tang','Tangentiality','tp',[16],
 `Replies drift away from the question along related lines and never return to it, though each link between ideas is understandable.`,
 `Goal lost, but every step makes sense. If the steps themselves stop making sense, think loosening of associations.`,
 `TP: tangential; drifted from questions and did not return despite redirection.`);
T('loose','Loosening of associations (derailment)','tp',[16,11],
 `Shifts between ideas that have no understandable connection, usually from one sentence to the next.`,
 `The listener can't find the bridge between ideas. Sentences are intact; breakdown inside the sentence suggests word salad.`,
 `TP: loosening of associations; illogical transitions between unrelated ideas.`);
T('foi','Flight of ideas','tp',[16,9],
 `Rapid, nearly continuous shifts from topic to topic with understandable links (puns, rhymes, distracting stimuli), usually with pressured speech.`,
 `Speed plus followable bridges. Classically manic. Same shifting without followable links is loosening of associations.`,
 `TP: flight of ideas; rapid topic shifts linked by wordplay and distractibility.`);
T('salad','Word salad (incoherence)','tp',[16,11],
 `Words strung together without grammatical or meaningful connection, even within a single sentence.`,
 `Disorganization inside the sentence itself: the severe end of the continuum.`,
 `TP: incoherent (word salad); unable to obtain meaningful history.`);
T('clang','Clang associations','tp',[16,9],
 `Word choice driven by sound, such as rhyme or alliteration, rather than meaning.`,
 `The link is acoustic, not semantic.`,
 `TP: clang associations noted.`);
T('persev','Perseveration','tp',[16],
 `Persistent repetition of the same word, idea, or response after the question or topic has changed.`,
 `Stuck on their own previous response. Echolalia repeats the examiner's words instead.`,
 `TP: perseverative; repeated prior answer across different questions.`);
T('block','Thought blocking','tp',[16,11],
 `An abrupt interruption of a train of thought, often mid-sentence, with inability to recall what was being said.`,
 `The observable stop. If the patient says someone removed the thought, that belief is thought withdrawal.`,
 `TP: frequent thought blocking, stopping mid-sentence.`);
T('neolog','Neologism','tp',[16,11],
 `A newly coined word, or an ordinary word given a private meaning, used as if others understand it.`,
 `Ask what the word means, and quote it in the note.`,
 `TP: neologisms present (quote the word).`);
T('povcontent','Poverty of content of thought','tp',[16,11],
 `Speech adequate in amount that conveys little information because it is vague, empty, or repetitive.`,
 `Lots of words, little said. Poverty of speech is simply too few words.`,
 `TP: poverty of content; speech adequate in amount but vague and uninformative.`);

/* Speech */
T('echolalia','Echolalia','sp',[16,11],
 `Repetition of the examiner's words or phrases.`,
 `Repeats someone else's words; perseveration repeats one's own. Its motor twin is echopraxia.`,
 `Speech: echolalia present.`);
T('pressured','Pressured speech','sp',[16,9],
 `Rapid, increased, hard-to-interrupt speech.`,
 `Pressure is about rate and quantity; flight of ideas is about how topics connect. A patient can have one without the other.`,
 `Speech: rapid, loud, pressured; difficult to interrupt.`);
T('povspeech','Poverty of speech (alogia)','sp',[16,11],
 `Reduced amount of speech, with brief replies and little spontaneous elaboration.`,
 `Too few words. Poverty of content is plenty of words that say little.`,
 `Speech: poverty of speech; brief replies, little spontaneous speech.`);
T('latency','Increased latency of response','sp',[16,9],
 `A long pause before answering, with an otherwise relevant reply.`,
 `The delay comes before the answer starts. Blocking interrupts a thought already underway.`,
 `Speech: increased latency of response (about 10 seconds).`);
T('dysarthria','Dysarthria','sp',[16],
 `Impaired articulation of speech from a motor problem, with language intact.`,
 `Mechanics, not language: word choice, grammar, and comprehension are normal.`,
 `Speech: dysarthric; language intact.`);
T('expaphasia','Expressive (nonfluent) aphasia','sp',[16],
 `Effortful, halting, telegraphic speech with relatively preserved comprehension (Broca's type).`,
 `Knows what they want to say, can't get it out, and usually knows it.`,
 `Speech: nonfluent, effortful, telegraphic; comprehension intact.`);
T('recaphasia','Receptive (fluent) aphasia','sp',[16],
 `Fluent speech with normal rhythm but disordered content, with impaired comprehension (Wernicke's type).`,
 `Can look like word salad. Sudden onset, older age, poor comprehension, and unawareness point to a neurologic cause.`,
 `Speech: fluent but paraphasic, with impaired comprehension.`);
T('mutism','Mutism','sp',[16,11],
 `Absence of speech.`,
 `No words at all. With rigidity or immobility, screen for catatonia.`,
 `Speech: mute throughout interview.`);

/* Perception */
T('ah','Auditory hallucination','pe',[16,11],
 `Hearing sounds or voices with no external source.`,
 `Heard as coming through the ears, while awake, with no stimulus. Note content, number of voices, and signs of internal preoccupation.`,
 `Perception: endorses AH (two male voices, derogatory); appeared internally preoccupied.`);
T('commenting','Commenting voices','pe',[11,16],
 `A voice giving a running commentary on the person's thoughts or actions.`,
 `Heard as a voice describing what they do. Thoughts experienced as placed into the mind are thought insertion instead.`,
 `Perception: AH with running commentary on his actions.`);
T('command','Command hallucination','pe',[11,17],
 `A hallucinated voice instructing the person to do something.`,
 `The voice instructs and the person decides. Always ask what it commands and whether they've acted, then assess risk.`,
 `Perception: command AH to self-harm; partially acted (went to curb). See risk assessment.`);
T('vh','Visual hallucination','pe',[16,11],
 `Seeing something that is not there.`,
 `No stimulus at all. New VH in an older medical patient means delirium until proven otherwise.`,
 `Perception: VH of children; fluctuating arousal, rule out delirium.`);
T('th','Tactile hallucination','pe',[16,11],
 `A false sensation of touch, such as crawling on or under the skin (formication).`,
 `A felt sensation with no stimulus. Think stimulants and alcohol withdrawal. A fixed belief in infestation is a separate somatic delusion.`,
 `Perception: tactile hallucinations (formication); excoriations on forearms.`);
T('oh','Olfactory hallucination','pe',[16],
 `Smelling an odor that isn't present.`,
 `Brief stereotyped episodes, especially with automatisms, raise concern for temporal lobe seizures.`,
 `Perception: episodic olfactory hallucinations (burning rubber).`);
T('gh','Gustatory hallucination','pe',[16],
 `Tasting something with no stimulus.`,
 `Uncommon in primary psychiatric illness; rule out medication, seizure, and other neurologic causes.`,
 `Perception: gustatory hallucinations (taste of blood).`);
T('hypnag','Hypnagogic hallucination','pe',[16],
 `A hallucination occurring while falling asleep.`,
 `At sleep onset. Usually benign; frequent episodes with sleep attacks raise the question of narcolepsy.`,
 `Perception: hypnagogic VH only; denies hallucinations while awake.`);
T('hypnop','Hypnopompic hallucination','pe',[16],
 `A hallucination occurring while waking up.`,
 `On awakening. Usually benign; don't chart it as psychotic hallucination.`,
 `Perception: hypnopompic AH only; denies hallucinations while fully awake.`);
T('illusion','Illusion','pe',[16],
 `A misperception of a real external stimulus.`,
 `Something real was there and was misread. A hallucination needs no stimulus.`,
 `Perception: illusion in low light (coat seen as person); no hallucinations.`);
T('deperson','Depersonalization','pe',[16],
 `A feeling of detachment from one's own self, body, or actions, with reality testing intact.`,
 `About the self ("I feel unreal"). Derealization is about the world ("it looks unreal").`,
 `Perception: episodes of depersonalization; reality testing intact.`);
T('dereal','Derealization','pe',[16],
 `A feeling that the surroundings are unreal, distant, or dreamlike, with reality testing intact.`,
 `About the world, not the self, and they know it's real.`,
 `Perception: derealization; reality testing intact.`);

/* Thought content */
T('persec','Persecutory delusion','tc',[11,12],
 `A fixed, false belief that one is being harmed, followed, cheated, or conspired against.`,
 `Held against evidence and gentle challenge, often driving behavior. Ask about plans to defend or retaliate.`,
 `TC: fixed persecutory delusion regarding coworkers.`);
T('ideasref','Ideas of reference','tc',[11,16],
 `A sense that neutral events refer to oneself, held with some doubt.`,
 `The patient can say "probably not true." Full conviction makes it a delusion of reference.`,
 `TC: ideas of reference, held with doubt; not delusional.`);
T('delref','Delusion of reference','tc',[11,12],
 `A fixed belief that neutral events, objects, or media are directed at or carry messages for oneself.`,
 `Same theme as ideas of reference, but held with certainty.`,
 `TC: delusions of reference (TV, radio).`);
T('grand','Grandiose delusion','tc',[9,11],
 `A fixed belief of exceptional power, identity, mission, wealth, or talent.`,
 `Look for the mood context: with decreased need for sleep, think mania.`,
 `TC: grandiose delusions (chosen to end world hunger).`);
T('eroto','Erotomanic delusion','tc',[11,12],
 `A fixed belief that another person, often of higher status, is secretly in love with the patient.`,
 `Contrary evidence, even a restraining order, is reinterpreted as proof. Assess stalking risk.`,
 `TC: erotomanic delusion regarding manager.`);
T('somatic','Somatic delusion','tc',[11,16],
 `A fixed, false belief about one's body or its functioning.`,
 `Unshaken by repeated normal tests. In illness anxiety or an overvalued idea, the person can entertain being wrong.`,
 `TC: somatic delusion of hepatic parasite despite normal workup.`);
T('nihil','Nihilistic delusion','tc',[9,16],
 `A fixed belief that one's body, self, or the world has ceased to exist (Cotard).`,
 `A mood-congruent sign of severe psychotic depression. With food refusal, treat as urgent.`,
 `TC: nihilistic delusions (believes he is dead, organs rotted).`);
T('jealous','Delusional jealousy','tc',[11,18],
 `A fixed belief that one's partner is unfaithful, based on trivial or no evidence.`,
 `Disconfirmation only "proves" it. Carries real risk of partner violence: ask directly.`,
 `TC: delusional jealousy regarding spouse.`);
T('guilt','Delusion of guilt','tc',[9,17],
 `A fixed belief that one has committed a terrible wrong or caused disaster.`,
 `Mood-congruent in psychotic depression. Themes of deserved punishment call for suicide assessment.`,
 `TC: mood-congruent delusion of guilt.`);
T('capgras','Capgras delusion','tc',[11,16],
 `A belief that a familiar person has been replaced by an identical impostor.`,
 `Familiar face, stranger inside. Fregoli is the reverse.`,
 `TC: Capgras delusion (daughter replaced by impostor).`);
T('fregoli','Fregoli delusion','tc',[11,16],
 `A belief that different strangers are one familiar person in disguise.`,
 `Strangers' faces, familiar person inside. Capgras is the reverse.`,
 `TC: Fregoli delusion (persecutor disguised as strangers).`);
T('insertion','Thought insertion','tc',[11,12],
 `A belief that thoughts are being placed into one's mind by an outside agent.`,
 `"Not my thoughts." In OCD, intrusive thoughts are unwanted but recognized as one's own.`,
 `TC: thought insertion.`);
T('withdrawal','Thought withdrawal','tc',[11,12],
 `A belief that thoughts are being taken out of one's mind by an outside agent.`,
 `The explanation, not the pause. The observable interruption itself is thought blocking.`,
 `TC: thought withdrawal.`);
T('broadcast','Thought broadcasting','tc',[11,12],
 `A belief that one's thoughts are transmitted to or heard by others.`,
 `Thoughts going out to others; insertion is thoughts coming in.`,
 `TC: thought broadcasting.`);
T('control','Delusion of control (passivity)','tc',[11,12],
 `A belief that one's actions, feelings, or impulses are made or controlled by an outside force.`,
 `The body is moved without choosing. With command hallucinations, a voice instructs and the person still chooses.`,
 `TC: delusions of control (passivity experiences).`);
T('obsession','Obsession','tc',[16],
 `A recurrent, intrusive, unwanted thought, image, or urge recognized as a product of one's own mind.`,
 `Ego-dystonic and self-generated. Harm obsessions come with horror and avoidance, not intent.`,
 `TC: ego-dystonic intrusive harm images; no intent; avoidance of knives.`);
T('compulsion','Compulsion','tc',[16],
 `A repetitive behavior or mental act performed to reduce anxiety or prevent a feared outcome, often by rigid rules.`,
 `Purposeful in the patient's logic: it neutralizes an obsession. Stereotypies have no such purpose.`,
 `TC: checking compulsions, time-consuming, rule-bound.`);
T('overvalued','Overvalued idea','tc',[16,11],
 `An unreasonable, sustained belief that dominates a person's life but is held with less than delusional conviction.`,
 `They can concede "maybe partly me." A delusion allows no such room.`,
 `TC: overvalued idea regarding rival; not held with delusional conviction.`);

/* Mood and affect */
T('flat','Flat affect','af',[16,8],
 `Virtually no emotional expression: immobile face, monotone voice, no gestures.`,
 `Essentially none. Blunted still shows flickers.`,
 `Affect: flat.`);
T('blunted','Blunted affect','af',[16,11],
 `Severe reduction in the intensity of emotional expression, with some reactivity remaining.`,
 `Between restricted and flat: markedly reduced, but a flicker is still there.`,
 `Affect: blunted; brief reactivity when discussing daughter.`);
T('restricted','Restricted (constricted) affect','af',[16,8],
 `Mildly reduced range and intensity of emotional expression.`,
 `Still reactive, just narrower than expected. The mildest step down from full range.`,
 `Affect: restricted, dysphoric, congruent with stated mood.`);
T('labile','Labile affect','af',[16,8],
 `Rapid, abrupt shifts in emotional expression.`,
 `Speed of change is the finding. After a brain injury, think pseudobulbar affect.`,
 `Affect: labile, abrupt shifts between laughter and tears.`);
T('inapp','Inappropriate affect','af',[16,11],
 `Emotional expression incongruent with the content being discussed.`,
 `Mismatched to the story (laughing at tragedy). La belle indifférence is specifically calm about one's own symptom.`,
 `Affect: inappropriate to content (laughing while describing losses).`);
T('labelle','La belle indifférence','af',[16],
 `A striking lack of concern about one's own serious-seeming symptom.`,
 `Describe it, but don't lean on it diagnostically: it also occurs in neurologic disease.`,
 `Affect: notable lack of concern about deficit.`);
T('anhedonia','Anhedonia','af',[9,10],
 `Loss of interest or pleasure in previously enjoyable activities.`,
 `A problem of enjoying. Avolition is a problem of starting.`,
 `Mood: endorses pervasive anhedonia.`);
T('alexithymia','Alexithymia','af',[16],
 `Difficulty identifying and describing one's own emotions, often with a focus on bodily sensations.`,
 `Can't name feelings, rather than can't enjoy things.`,
 `Difficulty identifying and naming emotions; emphasizes somatic complaints.`);

/* Behavior and motor */
T('pmr','Psychomotor retardation','be',[16,9],
 `Generalized, observable slowing of movement, often with slowed speech and thought.`,
 `The clinician sees the slowing. Avolition is about not initiating activity over days and weeks.`,
 `Behavior: psychomotor retardation.`);
T('pma','Psychomotor agitation','be',[16,9],
 `Excessive, purposeless motor activity driven by inner tension (hand-wringing, pacing).`,
 `Driven by distress. Akathisia is tied to a medication and centers on an urge to move the legs.`,
 `Behavior: psychomotor agitation (hand-wringing, pacing).`);
T('akathisia','Akathisia','be',[16],
 `Subjective inner restlessness with an urge to move, usually from dopamine-blocking medication.`,
 `Check the timing against the medication list. Misread as agitation, it gets a dose increase that makes it worse.`,
 `Behavior: restless, shifting weight; endorses inner restlessness (akathisia).`);
T('td','Tardive dyskinesia','be',[16],
 `Involuntary choreoathetoid movements, typically orofacial, after long-term dopamine blockade.`,
 `Involuntary, often unnoticed by the patient. Document with a structured scale such as the AIMS.`,
 `Behavior: orofacial dyskinesias (lip-smacking, tongue protrusion).`);
T('waxy','Waxy flexibility','be',[16,11],
 `Slight, even resistance to passive movement, with the limb then staying where the examiner placed it.`,
 `The examiner sets the position. In posturing, the patient adopts it on their own.`,
 `Behavior: waxy flexibility.`);
T('posturing','Posturing','be',[16,11],
 `Spontaneously adopting and holding an unusual posture.`,
 `Self-assumed position. Waxy flexibility is holding a position the examiner created.`,
 `Behavior: posturing.`);
T('echopraxia','Echopraxia','be',[16,11],
 `Imitation of the examiner's movements.`,
 `Copies movements; echolalia copies words.`,
 `Behavior: echopraxia.`);
T('negativism','Negativism','be',[16,11],
 `Apparently motiveless opposition to instructions or to attempts to move the patient.`,
 `Resistance without a reason the patient can give. A catatonic sign.`,
 `Behavior: negativism.`);
T('stereotypy','Stereotypy','be',[16],
 `A repetitive, non-goal-directed movement.`,
 `Purposeless. Mannerisms decorate a purposeful act; compulsions neutralize anxiety.`,
 `Behavior: stereotypies (rocking, chest-tapping).`);
T('mannerism','Mannerism','be',[16,8],
 `An odd, stylized embellishment of an ordinary, goal-directed action.`,
 `The action has a purpose (shaking hands, writing); the flourish is the oddity.`,
 `Behavior: mannerisms.`);
T('avolition','Avolition','be',[11,12],
 `Reduced initiation and persistence of goal-directed activity.`,
 `Can't get started, often without feeling sad. Anhedonia is about pleasure, not initiation.`,
 `Behavior: marked avolition; neglects hygiene.`);

/* Cognition */
T('clouding','Fluctuating consciousness (clouding)','cg',[16],
 `A reduced and varying level of alertness and awareness over hours.`,
 `Fluctuation over the day is the hallmark of delirium. Look for the medical cause.`,
 `Sensorium: fluctuating level of consciousness.`);
T('distract','Distractibility','cg',[16],
 `Attention repeatedly drawn to irrelevant stimuli.`,
 `A problem of attention. It can drive flight of ideas, but the finding here is the inattention itself.`,
 `Attention: highly distractible; needed frequent redirection.`);
T('disorient','Disorientation','cg',[16],
 `Impaired awareness of time, place, or person, in an alert patient.`,
 `Alert but wrong about when or where. Record each sphere separately.`,
 `Orientation: oriented to person; disoriented to time and place.`);
T('confab','Confabulation','cg',[16],
 `Unintentional filling of memory gaps with fabricated, often plausible, accounts.`,
 `Not lying: the patient believes it. Classic in Korsakoff syndrome.`,
 `Memory: confabulates when asked about recent events.`);
T('antero','Anterograde amnesia','cg',[16],
 `Inability to form new memories after an injury or onset of illness.`,
 `After the event. Retrograde loses memories from before it.`,
 `Memory: impaired new learning (0/3 recall); remote memory intact.`);
T('retro','Retrograde amnesia','cg',[16],
 `Loss of memories formed before an injury or onset of illness.`,
 `Before the event; new learning may be fine.`,
 `Memory: retrograde amnesia for about 3 months pre-injury.`);
T('concrete','Concrete thinking','cg',[16],
 `Literal interpretation without abstraction.`,
 `Interpret cautiously: proverb familiarity depends on education, culture, and language.`,
 `Abstraction: concrete proverb interpretation.`);
T('dejavu','Déjà vu','cg',[16],
 `A false sense that a new experience has happened before.`,
 `Falsely familiar. Occasional is normal; frequent and stereotyped suggests focal seizures.`,
 `Reports déjà vu episodes.`);
T('jamaisvu','Jamais vu','cg',[16],
 `A sense that a familiar situation is unfamiliar or never experienced.`,
 `Familiar made strange. Derealization is a sense that the world is unreal.`,
 `Reports jamais vu episodes.`);

/* Insight and judgment */
T('anosognosia','Absent insight (anosognosia)','in',[16],
 `No awareness of having an illness.`,
 `In serious mental illness, often a feature of the illness itself rather than simple denial.`,
 `Insight: absent.`);
T('intellinsight','Intellectual insight','in',[16],
 `Acknowledging an illness and its consequences without that knowledge changing behavior.`,
 `Can name it, isn't acting on it.`,
 `Insight: intellectual; acknowledges illness without behavior change.`);
T('trueinsight','True (emotional) insight','in',[16],
 `Understanding of the illness joined with emotional ownership and changed behavior.`,
 `The understanding shows up in what they do.`,
 `Insight: good.`);
T('poorjudg','Impaired judgment','in',[16],
 `Poor decision-making about one's safety or welfare, judged from actual recent behavior.`,
 `Insight can be intact while judgment fails. Chart them separately.`,
 `Judgment: impaired (skipping insulin); insight into risk intact.`);

/* Cases: t = correct term, d = three distractors, w = explanation */
const V=[
{id:'tp01',t:'circ',d:['tang','foi','linear'],x:`C: What brought you to the hospital today?
P: Well, it started Tuesday. No, Monday, because Monday is when my sister calls. She runs a bakery, the one with the blue awning. So she called and said I sounded tired, and I told her about not sleeping, which started when the neighbors put in their new gate. Very loud gate. After two weeks of no sleep, my daughter drove me here. So: the not sleeping. That's why I came.`,
 w:`The route is packed with nonessential detail, but he arrives back at the answer: insomnia. Returning to the goal is what separates circumstantiality from tangentiality.`},
{id:'tp02',t:'circ',d:['tang','povcontent','linear'],x:`C: Are you taking your medication?
P: So the pharmacy on Fifth, not the one by the bank, the other one, changed its hours in the spring. The pharmacist, nice man, has twins, said the pills would look different because of a new manufacturer, white instead of yellow. I asked him twice because I'm careful. So yes, every morning, the white ones.`,
 w:`A yes-or-no question gets a long detour, but the answer arrives. Circumstantial speech is inefficient, not illogical.`},
{id:'tp03',t:'tang',d:['circ','loose','foi'],x:`C: How has your sleep been this week?
P: Sleep is funny. My grandmother always said sleep was for the lazy. She worked in a textile mill her whole life. Those mills were loud. You'd think they'd have had ear protection back then. Labor laws were a joke. Have you read about the strikes in the thirties?`,
 w:`Each step is understandable (sleep, grandmother, mill, labor history), yet the answer about her sleep never comes. Followable links with the goal lost point to tangentiality.`},
{id:'tp04',t:'tang',d:['circ','clang','foi'],x:`C: What medication are you taking?
P: Medication. That comes from the Latin for healing, you know. Latin was the language of the church, and churches have beautiful windows. My cousin makes stained glass in her garage. She sells it at craft fairs; the October one is the biggest.`,
 w:`Each link holds, but he drifts further from the question and never returns. The pace is normal, which argues against flight of ideas.`},
{id:'tp05',t:'loose',d:['tang','foi','salad'],x:`C: How did you get here today?
P: I came on the bus because the stars keep a different accounting. My brother's shoes are in the refrigerator for the elections. You can't trust dentists when the river is blue.`,
 w:`Each sentence is grammatical, but the jumps between ideas have no understandable connection. Word salad breaks down inside the sentence; flight of ideas keeps followable links.`},
{id:'tp06',t:'foi',d:['loose','clang','tang'],x:`C: Tell me about your week.
O: (Speaking rapidly, hard to interrupt.)
P: Busy, busy bees, buzzing. I bought a hive online, online is where the money is, I'm investing in money, which is paper, paper cuts, I cut my hair, do you like it? Your tie is blue, blue like the ocean, I'm going to learn to sail next week —`,
 w:`Topics change every few words, but you can trace each bridge (buzzing, online, paper, cuts, blue). Rapid shifts with understandable links and pressured delivery define flight of ideas.`},
{id:'tp07',t:'salad',d:['loose','neolog','clang'],x:`C: Can you tell me your name?
P: Window purple the eats forgetting under mother radio it and the.`,
 w:`The breakdown is inside the sentence: no grammar or meaning joins the words. This is the severe end of the disorganization continuum.`},
{id:'tp08',t:'clang',d:['foi','echolalia','persev'],x:`C: How are you feeling today?
P: I'm sane, not in vain, take the train, feel the rain, it's plain, Jane.`,
 w:`Words are chosen for rhyme rather than meaning. Clanging often appears within flight of ideas in mania, but it can be charted on its own.`},
{id:'tp09',t:'persev',d:['echolalia','block','salad'],x:`O: A 78-year-old man is being examined on a medical ward.
C: What's your name?
P: Robert.
C: What year is it?
P: Robert.
C: What is this called? (holds up a pen)
P: Robert. Robert.`,
 w:`He keeps giving his first answer to new questions. Perseveration repeats one's own prior response; echolalia repeats the examiner's. Common in neurocognitive disorders and frontal lesions.`},
{id:'tp10',t:'block',d:['latency','withdrawal','persev'],x:`P: And then my mother said that the —
O: (She stops mid-sentence and stares for several seconds.)
C: Your mother said...?
P: I don't know. It's gone. It just went.`,
 w:`An abrupt stop with no memory of where the thought was going. If she explained the gap as someone removing the thought, that belief would be thought withdrawal.`},
{id:'tp11',t:'neolog',d:['salad','clang','echolalia'],x:`P: I have to keep my glorfinate down, or the police can smell it on my hands.
C: What does glorfinate mean?
P: It's the glorfinate. Everyone has it.`,
 w:`A made-up word used as if it has shared meaning. Asking the patient to define it is the right move, and quoting it in the note helps the next clinician.`},
{id:'tp12',t:'echolalia',d:['persev','echopraxia','clang'],x:`C: How are you feeling today?
P: Feeling today. Feeling today.
C: Did you sleep last night?
P: Did you sleep last night?`,
 w:`She repeats the examiner's words. Echolalia and echopraxia are catatonic signs, also seen in neurodevelopmental and neurocognitive disorders.`},
{id:'tp13',t:'povcontent',d:['povspeech','circ','tang'],x:`C: What do you think is causing the problems at home?
P: Well, it's the thing with the whole situation, the way things are, you know, with life and everything, how it goes. It's the stuff that happens and the way it is. That's basically it.`,
 w:`Plenty of words, almost no information. Poverty of speech would be too few words; circumstantiality would be too much detail, not too little.`},
{id:'tp14',t:'linear',d:['circ','tang','povcontent'],x:`C: What brought you in today?
P: I've been feeling down for about two months, since I lost my job. I'm not sleeping well, and I've stopped seeing friends. My wife was worried, so she made the appointment.`,
 w:`A direct, relevant, connected answer. Recognizing a normal thought process is part of the skill.`},

{id:'pe01',t:'ah',d:['vh','illusion','hypnag'],x:`O: A 24-year-old man pauses often during the interview and glances toward the corner of the room.
P: Sorry, they're talking again. Two men, arguing about whether I'm a traitor. You really can't hear them?`,
 w:`He hears voices with no external source while fully awake. Pausing to listen and glancing toward the voices are signs of internal preoccupation worth documenting.`},
{id:'pe02',t:'commenting',d:['command','insertion','broadcast'],x:`P: There's a voice that narrates everything I do. Right now it's saying, "He's scratching his arm. Now he's lying to the doctor." It never stops.`,
 w:`A voice giving a running commentary on his actions, one of Schneider's first-rank symptoms. It's heard as a voice, not experienced as a thought placed in his mind.`},
{id:'pe03',t:'command',d:['commenting','insertion','control'],x:`P: The voice tells me to walk into traffic. Mostly I can ignore it, but last night it was louder, and I went out as far as the curb before I stopped.`,
 w:`A voice instructing an action. Ask what the commands say, how often she obeys, and whether she has acted on them, then move into a full suicide assessment. In delusions of control, by contrast, the body is moved without choosing.`},
{id:'pe04',t:'vh',d:['illusion','hypnag','th'],x:`O: Two days after hip surgery, an 80-year-old woman points at the wall.
P: Who let the children in? They're climbing the curtains.
O: She knows her name but not where she is, and dozes off mid-sentence.`,
 w:`She sees figures that aren't there. New visual hallucinations in an older medical patient with fluctuating alertness should prompt a delirium workup before anything else.`},
{id:'pe05',t:'th',d:['vh','illusion','deperson'],x:`O: A 38-year-old man with heavy methamphetamine use has open sores on both forearms.
P: Bugs are crawling under my skin. I can feel them moving. I've been digging them out.`,
 w:`The core experience is a false touch sensation (formication). Stimulants and alcohol withdrawal are common causes. If he also holds a fixed belief of infestation, chart that somatic delusion too.`},
{id:'pe06',t:'oh',d:['gh','illusion','dejavu'],x:`O: A 45-year-old woman describes brief episodes in which she smells burning rubber that no one else notices, followed by a minute of staring and lip-smacking she doesn't remember afterward.`,
 w:`A smell with no source. Brief, stereotyped episodes with automatisms and amnesia point toward temporal lobe seizures and need a neurologic workup.`},
{id:'pe07',t:'gh',d:['oh','somatic','illusion'],x:`P: I keep tasting blood in my mouth, all day, even when I haven't eaten anything. My dentist says there's nothing there.`,
 w:`A taste with no stimulus. Gustatory hallucinations are uncommon in primary psychiatric illness; rule out medication effects, seizures, and other neurologic causes.`},
{id:'pe08',t:'hypnag',d:['hypnop','vh','illusion'],x:`O: A 22-year-old student, otherwise well, describes seeing a shadowy figure at the foot of her bed just as she is drifting off to sleep, a few times a month. It disappears when she turns on the light. She has no other symptoms.`,
 w:`It happens at sleep onset. Often nonpathological, though frequent episodes with sleep attacks or cataplexy raise the question of narcolepsy.`},
{id:'pe09',t:'hypnop',d:['hypnag','ah','dejavu'],x:`O: A 35-year-old man reports that some mornings, in the first few seconds after waking, he hears his name called clearly. He never hears it during the day.`,
 w:`It happens on awakening. Like hypnagogic experiences, these are usually benign and shouldn't be charted as psychotic hallucinations.`},
{id:'pe10',t:'illusion',d:['vh','hypnag','dereal'],x:`O: In a dim hospital room at night, a patient says the coat hanging on the door looked like a man standing there, until the nurse turned on the light and she saw it was a coat.`,
 w:`A real stimulus (the coat) was misperceived. A hallucination needs no stimulus at all.`},
{id:'pe11',t:'deperson',d:['dereal','control','nihil'],x:`P: It's like I'm watching myself from behind, like I'm a character in a movie. My hands don't feel like my hands. I know it's me, though. It's just a strange feeling.`,
 w:`Detachment from one's own self and body, with reality testing intact ("I know it's me"). Derealization is about the outside world feeling unreal.`},
{id:'pe12',t:'dereal',d:['deperson','illusion','nihil'],x:`P: Everything around me looks flat, like a stage set. The street, my apartment. It's like there's a pane of glass between me and the world. I know it's real, but it doesn't feel real.`,
 w:`The surroundings feel unreal, with reality testing intact. Depersonalization concerns one's own self.`},

{id:'tc01',t:'persec',d:['ideasref','overvalued','jealous'],x:`P: My coworkers are putting something in the office coffee to get me fired. I've seen them whispering. I bring my own thermos now, and I've started recording them.
C: Could there be any other explanation?
P: No. I know what I know.`,
 w:`A fixed, false belief of being harmed, held against gentle challenge and driving behavior (the thermos, the recordings). Ask about plans to confront or retaliate.`},
{id:'tc02',t:'ideasref',d:['delref','persec','obsession'],x:`P: Sometimes when people laugh on the bus, I get the feeling they might be laughing at me. I know that probably isn't true. It's just a feeling I can't shake.`,
 w:`Self-referential interpretation held with doubt. Once the belief becomes unshakable, it's a delusion of reference.`},
{id:'tc03',t:'delref',d:['ideasref','persec','grand'],x:`P: The news anchor wore a red tie tonight. That was a signal to me that I'm next. And the song on the radio was chosen so I'd know they're watching.`,
 w:`Full conviction that neutral events carry messages meant for him. The certainty separates this from ideas of reference.`},
{id:'tc04',t:'grand',d:['eroto','overvalued','persec'],x:`O: A 31-year-old woman who has been sleeping two hours a night explains that she has been chosen to end world hunger and that the President will call her this week to discuss her plan. She has emptied her savings to rent a conference hall.`,
 w:`A fixed belief of exceptional identity and mission. Paired with reduced need for sleep, it suggests a mood-congruent grandiose delusion in mania.`},
{id:'tc05',t:'eroto',d:['grand','jealous','persec'],x:`P: My manager is in love with me. He hasn't said it, obviously, since he's married, but I know he's waiting for me. I've sent him forty letters. The restraining order is just him protecting his reputation.`,
 w:`The fixed belief that another person is secretly in love with her, with contrary evidence reinterpreted. Stalking behavior makes a violence assessment relevant.`},
{id:'tc06',t:'somatic',d:['overvalued','persec','nihil'],x:`P: I have a parasite in my liver. I've seen six doctors and done every test. All normal, but that's because it's too small to show up. There's no other possibility.`,
 w:`A fixed false belief about the body, unshaken by repeated normal evidence. With an overvalued idea or illness anxiety, the person can at least entertain being wrong.`},
{id:'tc07',t:'nihil',d:['somatic','guilt','deperson'],x:`O: A 72-year-old man with severe depression has stopped eating.
P: There's no point feeding me. My insides have rotted away. I don't have blood anymore. I'm already dead.`,
 w:`Nihilistic (Cotard) delusions: the belief that one's body or self no longer exists. A mood-congruent psychotic feature of severe depression, and with food refusal, a medical emergency.`},
{id:'tc08',t:'jealous',d:['persec','overvalued','obsession'],x:`P: My wife is cheating. I know because the car seat was moved two inches and there was a new brand of toothpaste. I check her phone every night. Nothing, but that just means she deletes the texts.`,
 w:`Trivial "evidence" is decisive, and disconfirmation only confirms it. Delusional jealousy carries real risk of partner violence, so ask directly.`},
{id:'tc09',t:'guilt',d:['grand','nihil','delref'],x:`O: A 58-year-old woman with severe depression speaks quietly.
P: The floods last month happened because of my sins. I caused them. I deserve to be punished.`,
 w:`A mood-congruent delusion of guilt. The theme of deserved punishment should lead straight into a suicide assessment.`},
{id:'tc10',t:'capgras',d:['fregoli','persec','dereal'],x:`P: That woman who visits says she's my daughter, and she looks exactly like her, but she's an impostor. My real daughter has been replaced.`,
 w:`A familiar person is believed to be replaced by an identical double. Fregoli is the reverse: strangers are a familiar person in disguise.`},
{id:'tc11',t:'fregoli',d:['capgras','persec','delref'],x:`P: The man who's been following me keeps changing his face. Today he was the nurse; yesterday he was the cashier at the store. Different faces, but it's the same man.`,
 w:`Different strangers are believed to be one familiar, here persecuting, person in disguise.`},
{id:'tc12',t:'insertion',d:['obsession','withdrawal','commenting'],x:`P: Some of the thoughts in my head aren't mine. They're put there, cruel thoughts about my mother, by a transmitter at the church.`,
 w:`Thoughts experienced as placed in the mind by an outside agent. In OCD, unwanted thoughts are distressing but recognized as one's own.`},
{id:'tc13',t:'withdrawal',d:['block','insertion','broadcast'],x:`P: I was about to answer, and then they took it. The people upstairs pull thoughts out through the ceiling vents. That's why I stop talking sometimes.`,
 w:`The delusional belief that thoughts are being removed. Thought blocking is the observable interruption; withdrawal is the patient's explanation for it.`},
{id:'tc14',t:'broadcast',d:['insertion','withdrawal','ideasref'],x:`P: Everyone on the train knows what I'm thinking. My thoughts leak out into other people's heads, so I try to think about nothing when I'm outside.`,
 w:`The belief that one's thoughts are transmitted to others.`},
{id:'tc15',t:'control',d:['command','deperson','insertion'],x:`P: My arm moved the cup, but it wasn't me. Something outside moves my body like a puppet. I just watch it happen.`,
 w:`A passivity experience: actions are made by an outside force. With command hallucinations a voice instructs and the patient decides; in depersonalization things feel unreal but no outside control is believed.`},
{id:'tc16',t:'obsession',d:['insertion','command','overvalued'],x:`O: Six weeks after delivery, a 29-year-old mother is tearful.
P: I keep getting this picture in my head of hurting my baby with a knife. I would never do it. I love her. It horrifies me. I've hidden all the knives.`,
 w:`Intrusive, unwanted images she recognizes as coming from her own mind, with horror and avoidance. Harm obsessions differ from intent, but ask carefully and document your assessment.`},
{id:'tc17',t:'compulsion',d:['obsession','stereotypy','mannerism'],x:`P: I have to check the stove 24 times before I leave the house. If I lose count, I start over. I know it's off, but if I don't finish, I feel like something terrible will happen.`,
 w:`A repetitive act to neutralize anxiety, following a rigid rule. Stereotypies are purposeless movements without that anxiety-driven logic.`},
{id:'tc18',t:'overvalued',d:['persec','somatic','obsession'],x:`P: My career fell apart because a rival from graduate school ruined my reputation years ago. I've organized a lot of my life around proving it.
C: Is there any chance other things played a part?
P: I suppose it could be partly me. But mostly it's her.`,
 w:`An unreasonable, sustained belief that dominates her life but is held with less than delusional conviction ("could be partly me").`},

{id:'af01',t:'flat',d:['blunted','restricted','pmr'],x:`O: Throughout a 40-minute interview, a 27-year-old man's face barely moves. His voice is monotone and he makes no gestures, even when describing his father's recent death.`,
 w:`Virtually no emotional expression across topics. Blunted affect is a severe reduction with some expression still present.`},
{id:'af02',t:'blunted',d:['flat','restricted','inapp'],x:`O: A 35-year-old woman shows a brief, small smile when her daughter is mentioned. Otherwise her expression is markedly diminished, with little change in tone or gesture across topics.`,
 w:`Severely reduced intensity with a flicker of reactivity (the smile). Flat would be essentially none; restricted is milder.`},
{id:'af03',t:'restricted',d:['flat','blunted','labile'],x:`O: A 42-year-old man is appropriately serious and occasionally tearful discussing his divorce, but shows little lightness when talking about his hobbies or his kids. His expression stays mostly in a subdued register.`,
 w:`Mildly reduced range, still reactive. Restricted sits between full range and blunted.`},
{id:'af04',t:'labile',d:['inapp','restricted','blunted'],x:`O: A 70-year-old woman who had a stroke is laughing at a TV show, suddenly bursts into tears within seconds, then is laughing again.
P: I don't even feel that sad. It just comes out.`,
 w:`Rapid, abrupt shifts in expression. Expression out of proportion to felt mood after a brain injury suggests pseudobulbar affect.`},
{id:'af05',t:'inapp',d:['labile','labelle','blunted'],x:`O: A 30-year-old man giggles while describing how his house burned down and his dog died in the fire.`,
 w:`Affect incongruent with the content. La belle indifférence is specifically a calm lack of concern about one's own symptom.`},
{id:'af06',t:'labelle',d:['inapp','anosognosia','blunted'],x:`O: A 26-year-old woman who suddenly lost the ability to move her legs after an argument, with a normal neurologic workup, smiles calmly.
P: It's fine, really. I'm not worried at all.`,
 w:`A striking lack of concern about a serious-seeming deficit. Describe it, but don't lean on it for diagnosis: it also occurs in neurologic disease.`},
{id:'af07',t:'anhedonia',d:['alexithymia','avolition','blunted'],x:`P: I used to love playing guitar and going to my son's games. Now I go and feel nothing. It's not that I'm sad exactly. Nothing is enjoyable anymore.`,
 w:`Loss of pleasure in previously enjoyed activities, a core symptom of major depression and a negative symptom in schizophrenia.`},
{id:'af08',t:'alexithymia',d:['anhedonia','flat','labelle'],x:`P: My therapist keeps asking how I feel about my father's death. I don't know how to answer. My stomach hurts a lot, and I've had headaches. Feelings... I don't really know what that means for me.`,
 w:`Difficulty identifying and describing emotions, with a focus on bodily sensations. A trait-like difficulty naming feelings, not a loss of pleasure.`},

{id:'sp01',t:'pressured',d:['foi','circ','clang'],x:`O: A 28-year-old man speaks rapidly and loudly about the business he's starting. The interviewer can't get a question in, and when she tries, he talks over her. He stays on the topic of his business throughout.`,
 w:`Pressure is about rate and quantity. Flight of ideas is about shifting topics. He stays on topic, so this is pressured speech without flight of ideas.`},
{id:'sp02',t:'povspeech',d:['povcontent','latency','mutism'],x:`C: Tell me about your family.
P: Mom.
C: What about your mom?
P: She's okay.
C: Anything else about your family?
O: (Shrugs.)
P: No.`,
 w:`Too few words and little spontaneous speech (alogia). Poverty of content is adequate speech that says little.`},
{id:'sp03',t:'latency',d:['block','povspeech','mutism'],x:`O: A 64-year-old woman with severe depression waits about ten seconds before answering each question. Her answers are relevant and complete once they come.`,
 w:`A long delay before responding, common with psychomotor slowing. Blocking interrupts a thought already underway.`},
{id:'sp04',t:'dysarthria',d:['expaphasia','recaphasia','latency'],x:`O: A 50-year-old man on lithium has slurred, poorly articulated speech and a coarse tremor. His word choice, grammar, and comprehension are normal.`,
 w:`A problem with the mechanics of speech; language is intact. In this context, check a lithium level urgently.`},
{id:'sp05',t:'expaphasia',d:['recaphasia','dysarthria','povspeech'],x:`O: After a stroke, a 67-year-old man understands questions and follows commands but struggles to produce words, visibly frustrated.
P: Wife... hospital... Tuesday... walk no.`,
 w:`Nonfluent, effortful, telegraphic output with preserved comprehension and awareness of the deficit.`},
{id:'sp06',t:'recaphasia',d:['salad','expaphasia','loose'],x:`O: A 71-year-old woman with sudden onset of confusion speaks fluently with normal rhythm.
P: The fork went to the talking hospital with the clocks, and I told her the window.
O: She cannot follow a simple command and seems unaware anything is wrong.`,
 w:`Fluent aphasia can mimic word salad. Sudden onset, older age, impaired comprehension, and unawareness point to a neurologic cause.`},
{id:'sp07',t:'mutism',d:['povspeech','latency','negativism'],x:`O: A 20-year-old man sits rigidly and makes no verbal response to any question over 30 minutes, although his eyes follow the interviewer around the room.`,
 w:`Absence of speech. With rigidity and immobility, screen for catatonia, for example with the Bush-Francis scale.`},

{id:'be01',t:'pmr',d:['flat','avolition','akathisia'],x:`O: A 55-year-old man walks slowly into the office, sits heavily, and barely moves during the interview. His gestures are sparse and each movement seems to take effort.`,
 w:`Generalized, observable slowing of movement. A key sign of melancholic depression.`},
{id:'be02',t:'pma',d:['akathisia','stereotypy','compulsion'],x:`O: A 47-year-old woman with severe depression can't stay seated: she wrings her hands, picks at her sleeves, gets up and paces, then sits again.
P: I can't stand this feeling. I'm so worried.`,
 w:`Excessive, purposeless motor activity driven by inner tension. Akathisia is linked to medication, with an urge to move centered in the legs.`},
{id:'be03',t:'akathisia',d:['pma','td','stereotypy'],x:`O: Two weeks after starting haloperidol, a 33-year-old man shifts his weight from foot to foot and crosses and uncrosses his legs.
P: I have to keep moving. It's like my legs are full of electricity.`,
 w:`Inner restlessness with an urge to move, timed to an antipsychotic. Mistaking it for agitation or worsening psychosis can lead to a dose increase that makes it worse.`},
{id:'be04',t:'td',d:['akathisia','stereotypy','mannerism'],x:`O: A 62-year-old woman who has taken antipsychotics for 20 years makes repetitive lip-smacking, chewing, and tongue-protruding movements that she doesn't seem to notice.`,
 w:`Involuntary orofacial movements after long-term dopamine blockade. Track them with a structured scale such as the AIMS.`},
{id:'be05',t:'waxy',d:['posturing','negativism','echopraxia'],x:`O: During the exam, the psychiatrist gently raises the patient's arm overhead. It moves with slight, even resistance, like bending soft wax, and the patient leaves it there for several minutes.`,
 w:`The patient holds a position the examiner created. Posturing is a position the patient adopts on their own.`},
{id:'be06',t:'posturing',d:['waxy','stereotypy','mannerism'],x:`O: A 19-year-old woman stands in the corner of the ward for hours with one arm raised and her head tilted, holding the position on her own.`,
 w:`Spontaneously adopting and holding an unusual posture, a catatonic sign.`},
{id:'be07',t:'echopraxia',d:['echolalia','negativism','mannerism'],x:`O: When the interviewer scratches her nose, the patient scratches his nose. When she crosses her legs, he crosses his.`,
 w:`Imitation of the examiner's movements. Its verbal counterpart is echolalia.`},
{id:'be08',t:'negativism',d:['waxy','posturing','echopraxia'],x:`O: When asked to sit, the patient stands; when asked to stand, he sits. He turns away when spoken to and resists every attempt to examine him, with no apparent reason.`,
 w:`Apparently motiveless opposition to instructions or movement, a catatonic sign.`},
{id:'be09',t:'stereotypy',d:['mannerism','compulsion','td'],x:`O: A patient rocks back and forth and taps his chest three times, in the same pattern, for hours. The movement serves no apparent purpose, and he describes no urge or worry behind it.`,
 w:`Repetitive, non-goal-directed movement. Mannerisms decorate a purposeful action; compulsions relieve anxiety.`},
{id:'be10',t:'mannerism',d:['stereotypy','compulsion','td'],x:`O: Every time he shakes hands, a 40-year-old man first makes an elaborate twirl of his wrist and a small bow. Before writing, he circles the pen in the air three times.`,
 w:`An odd, stylized flourish on an ordinary, goal-directed action.`},
{id:'be11',t:'avolition',d:['anhedonia','pmr','flat'],x:`O: A 23-year-old man stopped attending classes a year ago. He spends days in bed, doesn't shower unless prompted, and has no plans.
P: I'm not sad. I just don't get around to things.`,
 w:`Reduced initiation of goal-directed activity, a negative symptom. The problem is starting things, not enjoying them.`},

{id:'cg01',t:'clouding',d:['distract','disorient','confab'],x:`O: A 76-year-old man on a medical ward is alert and conversational at 10 a.m., but by 3 p.m. he is drowsy, loses track of the conversation, and drifts off between questions. Nurses say it has varied like this since admission two days ago.`,
 w:`A fluctuating level of consciousness over hours is the hallmark of delirium. Find the medical cause.`},
{id:'cg02',t:'distract',d:['clouding','block','foi'],x:`O: A patient stops mid-answer again and again to comment on the ticking clock, voices in the hallway, and the interviewer's pen. The interviewer has to repeat each question several times.`,
 w:`Attention is pulled by irrelevant stimuli. Distractibility can drive flight of ideas, but the finding here is impaired attention itself.`},
{id:'cg03',t:'disorient',d:['confab','clouding','retro'],x:`O: A 68-year-old woman, fully alert, says the year is 1998 and that she is at her old office. She correctly names her daughter at the bedside.`,
 w:`Disoriented to time and place, oriented to person. Alertness is normal, so consciousness itself isn't clouded.`},
{id:'cg04',t:'confab',d:['antero','grand','disorient'],x:`O: A 55-year-old man with long-standing heavy alcohol use has been in the hospital for two weeks.
C: What did you do yesterday?
P: Went to the racetrack with my buddy Frank. Won a little, lost a little.`,
 w:`He fills a memory gap with a confident, fabricated account and no intent to deceive, as in Korsakoff syndrome. Anterograde amnesia underlies it, but the answer itself is confabulation.`},
{id:'cg05',t:'antero',d:['retro','confab','distract'],x:`O: After a cardiac arrest, a 52-year-old man clearly remembers his childhood, career, and wedding, but can't recall the neurologist he met ten minutes ago or any of the three words he was asked to remember.`,
 w:`Inability to form new memories since the injury, with remote memory spared.`},
{id:'cg06',t:'retro',d:['antero','confab','dejavu'],x:`O: After a motorcycle crash with a head injury, a 30-year-old woman learns and retains new information normally in the hospital, but cannot remember anything from the three months before the accident.`,
 w:`Loss of memories from before the injury, with new learning intact.`},
{id:'cg07',t:'concrete',d:['povcontent','persev','circ'],x:`C: What does "Don't cry over spilled milk" mean?
P: If milk spills, you wipe it up. Crying doesn't clean it.`,
 w:`A literal reading with no abstraction. Proverb familiarity depends on education, culture, and language, so a similarities task may be fairer.`},
{id:'cg08',t:'dejavu',d:['jamaisvu','dereal','illusion'],x:`P: Walking into this office, I had the strongest feeling I'd been here before, having this exact conversation. But I've never been here.`,
 w:`A false sense of familiarity. Occasional episodes are common; frequent, stereotyped ones can be focal seizures.`},
{id:'cg09',t:'jamaisvu',d:['dejavu','dereal','disorient'],x:`P: I was standing in my own kitchen and it suddenly felt completely unfamiliar, like I'd never seen it before. I've lived there ten years.`,
 w:`A familiar setting feels unfamiliar. She knows where she is (not disoriented), and the world doesn't feel unreal (not derealization).`},

{id:'in01',t:'anosognosia',d:['intellinsight','grand','poorjudg'],x:`O: A 40-year-old man is hospitalized for his third manic episode in two years.
P: There's nothing wrong with me. I don't have bipolar anything. I don't need to be here.`,
 w:`No awareness of illness. In serious mental illness, this is often a feature of the illness itself rather than simple denial.`},
{id:'in02',t:'intellinsight',d:['trueinsight','anosognosia','poorjudg'],x:`P: Yes, I have an alcohol problem. It's damaging my liver and my marriage. I'll probably stop at some point.
O: He has made no change in his drinking and has no plan to.`,
 w:`He can name the problem and its consequences, but the knowledge isn't driving change.`},
{id:'in03',t:'trueinsight',d:['intellinsight','anosognosia','poorjudg'],x:`P: I see now that when I stop my lithium because I feel good, that's the start of the next episode. So I've asked my wife to tell me if I'm sleeping less, and I keep my appointments even when I feel great.`,
 w:`Understanding joined with ownership and changed behavior.`},
{id:'in04',t:'poorjudg',d:['anosognosia','confab','grand'],x:`O: A man with type 1 diabetes, admitted to the ICU with ketoacidosis, says he'll keep skipping insulin on weekends because it ruins his plans. He correctly explains that skipping insulin could put him back in the ICU.`,
 w:`He understands the risk, so insight is intact, but he still chooses badly. Charting insight and judgment separately captures that difference.`}
];

/* ===================== Interviewing skills: Shea Ch. 19–21 ===================== */

/* Ch. 19: Anger and disengagement */
T('mad_confront','Confrontational disagreement','ag',[19],
 `A MAD (moment of angry disengagement) in which spontaneous anger is joined to an effort to change the clinician's view.`,
 `A real difference in beliefs, flaring in the moment. A collaborative disagreement has no anger; oppositional behavior is intentional and needn't involve a real disagreement.`,
 `Move as little toward disagreement as you can, and look for the core pain underneath.`);
T('collab','Collaborative disagreement','ag',[19],
 `A friendly, belief-based difference of opinion, without anger.`,
 `Disagreement alone isn't a MAD. Anger is what turns it into a confrontational disagreement.`,
 `Explore it openly. A disagreement that gets resolved can deepen the alliance.`);
T('mad_opp','Oppositional behavior','ag',[19],
 `A MAD of intentional antagonism toward the clinician, which may have nothing to do with a real disagreement.`,
 `Deliberate rather than a spontaneous flare over a belief. Your face can respond before your words do.`,
 `Stay non-defensive and reach for a process response: "Help me understand what's happening between us right now."`);
T('mad_pa','Passive-aggressive attitude','ag',[19],
 `An enduring, often unconscious antagonistic attitude whose hallmark is the endless "but."`,
 `A pattern across the interview rather than one flare-up, and the patient may believe they're being helpful. Least responsive to these techniques.`,
 `Aim to get past today's impasse; don't expect to resolve the pattern in a first interview.`);
T('pdq','Potentially disengaging question (PDQ)','ag',[19],
 `A question that catches the clinician off guard and can disengage; it may be benign, legitimate, or hostile.`,
 `Defined by its potential to disengage, not by anger. Part of the discomfort may lie in the clinician's own sensitivities.`,
 `Answer honestly and non-defensively, and explore the concern behind the question.`);
T('moveagainst','Moving against','ag',[19],
 `A response the patient perceives as strongly opposing them, through words, tone, or posture.`,
 `The opposition is needless: often the same limit could be held much more gently. It invites a fight.`,
 `Ask yourself: could I hold this same position while moving closer to the patient?`);
T('gentlelimit','Gentle limit','ag',[19],
 `Holding a necessary limit while moving as little toward disagreement as possible.`,
 `The limit doesn't move; distance, tone, pace, and empathy all move toward the patient.`,
 `"I can see how badly you want to leave. I can't open the door tonight, but I can sit with you and explain what happens next."`);
T('movewith','Moving with','ag',[19],
 `Adopting the patient's viewpoint where you legitimately can, so they perceive you as on their side.`,
 `No limit is being set. The clinician simply joins the reasonable part of the patient's perspective.`,
 `"Being pressured to talk about your personal business with a stranger isn't much fun."`);
T('content','Content response','ag',[19],
 `Directly answering the question or addressing the comment itself.`,
 `Natural and sometimes exactly right, but it can pull you into endless debate and skips learning why the patient asked.`,
 `Fine for legitimate questions. With a suspicious or paranoid challenge, lead with a process response instead.`);
T('proc1','Process response: the interview itself','ag',[19],
 `A process response that comments on what is happening in the interview or on the patient's behavior in it.`,
 `Points to an observable shift in the interaction, rather than asking about feelings or disclosing your own.`,
 `"I notice things got a lot quieter once we started talking about work."`);
T('proc2','Process response: the patient\u2019s feelings','ag',[19,20],
 `A process response that invites the patient's feelings, thoughts, or concerns about what just happened.`,
 `Aims at what the patient is feeling or worried about, not at the interview's surface or the clinician's own reaction.`,
 `"You seem upset by that. Help me understand what concerned you."`);
T('proc3','Process response: the clinician\u2019s feelings','ag',[19],
 `A process response using judicious self-disclosure of the clinician's own reaction in the moment.`,
 `The clinician names their own feeling. Powerful but riskier; use it sparingly and on purpose.`,
 `"Your anger is getting intense, and I'm feeling a little uneasy. Are you trying to tell me something?"`);
T('sidetrack','Sidetracking','ag',[19],
 `Shifting the patient's attention to a different, usually emotionally important, topic instead of meeting the challenge head-on.`,
 `It neither answers nor explores the challenge; it changes the channel. Especially useful with mania.`,
 `If the concern resurfaces later, address it more directly.`);
T('seed_unknown','Core pain: fear of the unknown','ag',[19],
 `Anger rooted in not knowing what is happening or what will happen next.`,
 `The questions give it away: what happens, how long, what will they do to me. Information addresses this seed.`,
 `Explain what happens next, step by step, in plain language.`);
T('seed_control','Core pain: loss of control','ag',[19],
 `Anger rooted in having choices, freedom, or control taken away.`,
 `The complaints circle around who decides. Offering real choices addresses this seed.`,
 `Offer choices: talk now or later, where to sit, whom to call, what to eat.`);
T('seed_betrayed','Core pain: feeling wronged or betrayed','ag',[19],
 `Anger rooted in having been let down, mistreated, or betrayed, often by previous helpers.`,
 `Look for a specific past injury that you now stand in for.`,
 `Acknowledge the injury without defending the system: "That sounds like it did real damage. I'd like to do this differently."`);
T('seed_failure','Core pain: sense of failure','ag',[19],
 `Anger rooted in feeling one has failed, often turned outward at helpers.`,
 `Beneath the blame is self-blame: "I did everything, and it wasn't enough."`,
 `Name the effort and the pain behind it before discussing the plan.`);

/* Ch. 20: Culture and identity */
T('intersect','Intersectionality','cu',[20],
 `Overlapping identities and forms of discrimination, such as race and sex, that compound one another (Crenshaw).`,
 `The combined effect is more than either identity alone, and it shapes help-seeking and how the patient sees you.`,
 `Ask yourself which overlapping identities shape this patient's stress, help-seeking, and view of you.`);
T('prioritize','Prioritizing cultural identities','cu',[20],
 `Which of a person's many cultural identities is foremost at a given moment; it can shift between or within sessions.`,
 `Consider it whenever engagement suddenly changes. The foremost identity decides who feels safe.`,
 `"You seem more distant than last week. Did something happen since we last met?"`);
T('dynsizing','Dynamic sizing','cu',[20],
 `Knowing a culture's generalities while checking whether they fit this particular person (Sue).`,
 `Cultural literacy held as a hypothesis, not a conclusion. Applied as a conclusion, it becomes stereotyping.`,
 `"In many families I've worked with... I don't want to assume, though. How is it in yours?"`);
T('acquired','Acquired cultural literacy','cu',[20],
 `Cultural knowledge learned before or between interviews, from reading, colleagues, and community members.`,
 `Learned outside the interview. Discovered literacy comes from the patient during it.`,
 `Ask colleagues: How do people here like to be greeted? What's considered rude? How is mental illness viewed?`);
T('discovered','Discovered cultural literacy','cu',[20],
 `Cultural knowledge learned from the patient during the interview, through genuine, respectful curiosity.`,
 `The patient is the source, in the moment. Admitting you don't know is fine, as long as the patient isn't made your teacher for the whole hour.`,
 `"I'm not familiar with that. Could you tell me a little about it?"`);
T('dissonant','Dissonant acculturation','cu',[20],
 `Family members acculturating at different rates, sometimes reversing roles as children translate language and culture for parents.`,
 `The gap is inside the family, not between the family and the clinician.`,
 `Normalize: "Some students tell me their parents are having a harder time adjusting than they are. Has that been true for you?"`);
T('microagg','Microaggression','cu',[20],
 `A brief, often unintended slight that communicates bias toward a marginalized group (Sue).`,
 `Small, often well-meant, and still disengaging. It starts from the clinician's side.`,
 `Own it without defensiveness: "I'm sorry, that came out wrong. Thank you for telling me."`);
T('cultransf','Cultural transference','cu',[20],
 `The patient projecting attitudes about the clinician's cultural group onto the clinician.`,
 `The disconnect starts from the patient's side. The tools are the same: empathy, openness, non-defensiveness.`,
 `Name it gently: "I'm wondering if it's hard to talk about this with someone from my background."`);
T('culcounter','Cultural countertransference','cu',[20],
 `The clinician projecting attitudes about the patient's cultural group onto the patient.`,
 `Starts from the clinician's side and is often invisible to them. It can quietly change diagnosis and triage.`,
 `Ask: Why am I reacting this way? What cultural differences are at play? Bring it to supervision.`);
T('colorblind','Color blindness','cu',[20],
 `Believing a minority client is no different from anyone else, so culture is irrelevant.`,
 `Well-meant, but it erases real experience. Color consciousness is the opposite error.`,
 `Make room for the patient's experience: "What has that been like for you?"`);
T('colorconscious','Color consciousness','cu',[20],
 `Assuming all of a minority client's problems stem from minority status.`,
 `Overweights culture where color blindness underweights it. Let the patient tell you what matters.`,
 `Follow the patient's framing of the problem before introducing your own.`);
T('overident','Over-identification','cu',[20],
 `A clinician who shares a patient's marginalized identity narrowly defining the patient's problems as based on that identity.`,
 `Like color consciousness, but driven by the clinician's own shared experience.`,
 `Notice when your own history is steering the formulation, and check it against what the patient says.`);
T('culambiv','Cultural ambivalence','cu',[20],
 `Wanting to help a client while also needing to control them or feel superior.`,
 `The helping impulse is real, and so is the need to be in charge. Watch for irritation when your advice is questioned.`,
 `Share decisions explicitly: "Here are the options as I see them. What fits your family?"`);
T('tradprej','Traditional prejudice','cu',[20],
 `Stereotypical dislike of a group based on race, religion, orientation, class, politics, disability, or other domains.`,
 `Directed at others, and not rooted in having been discriminated against by them.`,
 `Self-audit: Do I diagnose, triage, or spend time with families differently for this group?`);
T('inducedprej','Induced prejudice','cu',[20],
 `A stereotyped view of a dominant group that develops in someone who has experienced discrimination from it.`,
 `Grows out of real injury, and is still a stereotype when applied to an individual.`,
 `Notice it without guilt, and check it against the actual person in front of you.`);
T('incorpprej','Incorporated prejudice','cu',[20],
 `Long-standing discrimination internalized as negative views of one's own group or oneself.`,
 `Aimed inward. It can feed depression, shame, and hopelessness.`,
 `Explore gently where the belief came from and how it affects mood and self-worth.`);
T('telescoping','Telescoping prejudice','cu',[20],
 `The net discrimination a person experiences depends on the combination of their identities and the setting, not on one domain alone.`,
 `People are dominant in some domains and marginalized in others, and the balance shifts with context.`,
 `Ask yourself: In this dyad, where do I hold power, and where does the patient?`);
T('cfi','Cultural Formulation Interview question','cu',[20],
 `A generic, culturally open question from the DSM-5 CFI that needs no prior knowledge of the patient's culture.`,
 `Works for anyone: it asks how the patient and their community understand the problem and what help they've sought.`,
 `"People often understand their problems in their own way. How would you describe yours?"`);
T('cueoff','Cueing off religious language','cu',[20],
 `An indirect way to raise spirituality by returning to a religious word or image the patient used (Griffith and Griffith).`,
 `The patient opened the door first; you just walk back through it.`,
 `"You mentioned God earlier. Is faith important to you?"`);
T('existential','Existential question','cu',[20],
 `An indirect question about meaning and sustenance that doesn't name religion.`,
 `Invites any worldview, religious or secular. Especially good for reflective patients.`,
 `"What has sustained you through all this?"`);
T('fica','FICA','cu',[20],
 `A structured, direct spiritual history covering Faith, Importance, Community, and what to Address in care (Koenig and Pritchett).`,
 `Direct and step-by-step, ending with how beliefs should shape treatment.`,
 `End with the A: "Is there anything about your faith you'd like us to keep in mind in your care?"`);
T('tick','\u201cWhat makes you tick?\u201d question','cu',[20],
 `Shea's direct question that normalizes many sources of meaning: religion, family, community, or a mix.`,
 `Normalizes secular and religious answers alike before asking.`,
 `"People vary in what makes them tick: religion, family, community, or a mix. What makes you tick?"`);
T('continuum_sp','Spiritual continuum question','cu',[20],
 `Shea's direct question asking where the patient places themselves from belief in a god, to agnosticism, to atheism.`,
 `Lays out the whole range first, so any answer feels acceptable.`,
 `"People range from believing in a god, to not being sure, to not believing. Where would you place yourself?"`);

/* Ch. 21: Vantage points */
T('lookat','Looking at the patient','vp',[21],
 `Observing the patient as objectively as possible, as in the mental status and impact status.`,
 `The patient as data. Looking with means entering the patient's world instead.`,
 `Notice the signs the patient may not: tremor, dress, what speeds up their speech.`);
T('lookwith','Looking with the patient','vp',[21],
 `Empathic listening from inside the patient's world.`,
 `Imagining the experience from their side, rather than observing it from yours.`,
 `"It sounds like you were carrying all of it alone."`);
T('lookself','Looking at oneself','vp',[21],
 `Monitoring how you appear to the patient right now.`,
 `Your own behavior as the patient sees it. Looking within is about your feelings.`,
 `Ask: How do I look from their chair right now? Then adjust pace, posture, or animation.`);
T('lookwithin','Looking within oneself','vp',[21],
 `Attending to your own feelings and fantasies during the interview and asking what they mean.`,
 `Your inner experience as data. Looking at oneself is about outward appearance.`,
 `"What am I feeling right now, and what might it tell me about this patient?"`);
T('selfremember','Self-remembering','vp',[21],
 `Brief moments of heightened awareness of what you are doing and why (Gurdjieff), which let you choose a vantage point on purpose.`,
 `The doorway between vantage points rather than a vantage point itself. Early in training it has to be inserted deliberately.`,
 `Build in a habit: "What am I doing, and how do I look right now?"`);
T('somatic_emp','Somatic empathy','vp',[21],
 `Understanding a patient by adopting their posture or mannerisms, usually between sessions.`,
 `Empathy through the body rather than through words.`,
 `After a puzzling session, sit as your patient sat for a minute and notice what you feel.`);
T('deletion','Recovering a deletion','vp',[21],
 `Asking for what the patient's shorthand left out, such as who "they" or "people" are (Grinder and Bandler).`,
 `Targets missing specifics. Testing a generalization targets words like always, never, everyone.`,
 `"Who, specifically?" "Hurt you how?"`);
T('generaliz','Testing a generalization','vp',[21],
 `Gently questioning an overgeneralization ("always," "never," "everyone") to recover a less distorted picture.`,
 `Targets the absolute word. It resembles cognitive therapy's challenge to overgeneralization.`,
 `"Every time?" "Is that always true, or mostly?"`);
T('counterproj','Counterprojective statement','vp',[21],
 `Redirecting a guarded patient's emerging projection toward a shared external focus, often voicing a similar feeling toward it (Havens).`,
 `Three elements: something out there, a shared feeling about it, and both of you looking at it together. Usually phrased in the third person.`,
 `"Having people pry into your business is irritating. Sounds like your coworkers never let up."`);
T('intuitive_react','Intuitive reactive response','vp',[21],
 `A readily accessible feeling that most clinicians would have with this patient.`,
 `Anyone in your chair would feel it. Take intuitive fear seriously: it may signal violence risk or emerging psychosis.`,
 `If it's fear, act on safety first, then consult and explore.`);
T('associational','Associational response','vp',[21],
 `A feeling linked to the clinician's own history that the clinician recognizes.`,
 `Tied to your past, but you can see the link.`,
 `Name the link to yourself, set the feeling aside, and refocus on the patient.`);
T('transferential','Transferential response (countertransference)','vp',[21],
 `An unconscious reaction transferred from the clinician's past, often unrecognized, that can distort care.`,
 `Unlike an associational response, you don't see the link. Reserve "countertransference" for these.`,
 `Blind spots show up in patterns; supervision and personal therapy are how they surface.`);
T('pilkonis','A thought labeled as a feeling','vp',[21],
 `A judgment phrased as "I feel that...," which fails Pilkonis's test: if "think" can replace "feel," it isn't a feeling.`,
 `"I feel that she's manipulative" is a thought. "I feel angry" is a feeling.`,
 `Rephrase until only an emotion word remains: sad, angry, afraid, bored, uneasy.`);
T('motivation','Motivation','vp',[21],
 `A therapy-facilitative characteristic: degree of pain, and seeing that pain as related to oneself.`,
 `Look for a personal reason and a sense of urgency, not "my wife wants me here."`,
 `"What made you decide to come in now, rather than a few months ago?"`);
T('psychmind','Psychological mindedness','vp',[21],
 `A therapy-facilitative characteristic: belief that psychological processes affect life, and willingness to look inward.`,
 `The patient spontaneously links feelings, history, and behavior, and wants to understand them.`,
 `Offer one gentle interpretive question and see what they do with it.`);
T('cogability','Cognitive abilities','vp',[21],
 `A therapy-facilitative characteristic: concentration, memory, abstraction, intelligence, and creativity.`,
 `About capacity to use therapy, not about wanting it or believing in it.`,
 `Consider whether the patient can follow and remember a multi-step plan.`);
T('egostab','Ego-stabilizing therapy','vp',[21],
 `Interventions that restore self-integration through calm support, practical help, and education.`,
 `Suited to acute psychosis, crisis, or limited cognition or resources.`,
 `Keep it brief, calm, concrete, and consistent.`);
T('egonurt','Ego-nurturing therapy','vp',[21],
 `Interventions that gently but persistently push toward understanding within a firm, consistent frame.`,
 `Suited to borderline or other fragile structures: support plus steady structure.`,
 `Hold the frame (time, limits) reliably while inviting reflection.`);
T('egochal','Ego-challenging therapy','vp',[21],
 `Interventions that confront and invite reflection on thoughts and behaviors.`,
 `Suited to neurotic-level structure with good therapy-facilitative characteristics.`,
 `Consider psychodynamic or cognitive therapies when interpretive questions land well.`);
T('interpq','Interpretive question','vp',[21],
 `A gentle question linking the patient's feelings and behaviors, used partly to test readiness for insight-oriented therapy.`,
 `Offers a possible link to consider. Initial balking followed by genuine reflection is a promising sign.`,
 `"I'm wondering whether it's hard for you to say what you want, and then you feel resentful."`);
T('gentleconf','Gentle confrontation','vp',[21],
 `Tactfully presenting a contradiction in what the patient has said, as in Kernberg's structural interviewing, to see which defenses emerge.`,
 `Points out an inconsistency rather than offering a link between feelings and behavior.`,
 `"I'm a little confused. Earlier you said X, but also Y. Help me understand that."`);
T('neurotic','Neurotic organization','vp',[21],
 `Kernberg's level with an integrated identity, higher-level defenses, and intact reality testing.`,
 `Under gentle confrontation: uneasy, admits the contradiction, rationalizes, and settles.`,
 `Often a good fit for ego-challenging therapy.`);
T('borderline_org','Borderline organization','vp',[21],
 `Kernberg's level with diffuse identity, primitive defenses (splitting, projection, devaluation), and largely intact reality testing.`,
 `Under gentle confrontation: attacks with entitlement and projection, crumbles, or sees no contradiction at all.`,
 `Often a better fit for ego-nurturing therapy with a firm frame.`);
T('psychotic_org','Psychotic organization','vp',[21],
 `Kernberg's level with diffuse identity, primitive defenses, and impaired reality testing.`,
 `Under gentle confrontation: many words, little meaning, subtly disorganized or tangential.`,
 `Stop confronting, support, and look for harder signs of psychosis.`);
T('responsiveness','Style: responsiveness','vp',[21],
 `How visibly your affect responds to the patient, from smiling at a joke to no change at all.`,
 `About reacting to the patient, rather than your general level of gesture and liveliness.`,
 `More responsiveness helps shut-down patients engage.`);
T('spontaneity','Style: spontaneity','vp',[21],
 `How freely you convey spontaneous affect and opinion, such as humor.`,
 `In-the-moment and unplanned, unlike transparency, which is deliberate disclosure.`,
 `Tone it down with guarded or paranoid patients.`);
T('animation','Style: animation','vp',[21],
 `How much you gesture and show lively affect, from very animated to immobile.`,
 `Your overall liveliness, whether or not it's a reaction to something the patient said.`,
 `Lower animation for guarded or paranoid patients.`);
T('transparency','Style: transparency','vp',[21],
 `How much you consciously reveal your own emotions or thoughts.`,
 `Deliberate disclosure, not spontaneous humor or opinion.`,
 `Know your default so you can choose when to use it.`);

const Q_CONT=`Where does this response fall on the Agreement Continuum?`;
const Q_SEED=`Which core pain (seed) most likely lies beneath the anger?`;
const Q_VP=`Which attentional vantage point is the resident using?`;
const Q_TF=`Which therapy-facilitative characteristic does this show?`;
const Q_EGO=`Which category of therapy is being offered?`;
const Q_ORG=`Which level of personality organization does this response suggest?`;
const Q_STYLE=`Which axis of interviewing style is this feedback about?`;
const Q_RESP=`What kind of clinician response is this?`;
const Q_TECH=`Which technique is the clinician using?`;

V.push(
{id:'ag01',t:'mad_confront',d:['mad_opp','mad_pa','collab'],q:`What kind of disengagement point is this?`,x:`C: I'd recommend we start with an antidepressant.
P: (voice rising) No. You're not listening. I'm not depressed, I'm exhausted because of my job, and pills won't fix my boss. Why won't anyone hear that?`,
 w:`Anger flares spontaneously around a genuine difference in beliefs, with a push to change your view. The same difference offered calmly would be a collaborative disagreement.`},
{id:'ag02',t:'collab',d:['mad_confront','mad_pa','pdq'],q:`What kind of disagreement is this?`,x:`C: I'd suggest weekly sessions to start.
P: Hmm. Honestly, I'd rather try every other week. Money's tight, and I think I can do homework in between. Would that work?`,
 w:`A real difference, offered calmly and open to your view. No anger, so no MAD.`},
{id:'ag03',t:'mad_opp',d:['mad_confront','mad_pa','pdq'],q:`What kind of disengagement point is this?`,x:`O: Twenty minutes into a pleasant intake, the patient smiles slightly and leans back.
P: Can I say something? You're honestly the most useless doctor I've ever met. I've been timing how long you can go without saying anything helpful.`,
 w:`Intentional antagonism that seems to come from nowhere, with no underlying disagreement about care. Watch your own face: a stung expression can end the relationship before you say a word.`},
{id:'ag04',t:'mad_pa',d:['mad_confront','mad_opp','collab'],q:`What kind of disengagement point is this?`,x:`C: Some people find a short walk helps on bad days.
P: I would, but my knees.
C: What about calling your sister?
P: Sure, but she's always busy.
C: There's a support group near you on Thursdays.
P: That'd be nice, but I'm not a group person. I know you're trying.`,
 w:`The endless "but," across the whole exchange rather than one flare-up. The patient may genuinely feel cooperative. Aim for today's impasse, not the pattern.`},
{id:'ag05',t:'pdq',d:['mad_opp','mad_confront','mad_pa'],q:`What kind of disengagement point is this?`,x:`O: A calm, courteous father whose son was just diagnosed with schizophrenia turns to the first-year resident.
P: How much experience do you have treating young men with schizophrenia?`,
 w:`No anger, and it may be a wise question. It's still a PDQ because it can knock an unprepared clinician off balance. Answer honestly, mention supervision, and explore the worry behind it.`},
{id:'ag06',t:'moveagainst',d:['gentlelimit','movewith','content'],q:Q_CONT,x:`O: A man on an involuntary hold walks toward the unit door. A staff member steps into his path, hands on hips, and says loudly: "You're on a hold, buddy. You're not going anywhere."`,
 w:`The limit is legitimate, but the stance, volume, and wording push far toward disagreement. It invites a fight.`},
{id:'ag07',t:'gentlelimit',d:['moveagainst','movewith','sidetrack'],q:Q_CONT,x:`O: The same man heads for the door. The nurse approaches slowly, stops well back, and speaks softly.
C: I can see how much you want out of here. I'd feel the same way. The hold means I can't open that door tonight, but I can get you something to eat and walk you through what happens next.`,
 w:`The limit is identical to a confrontational version, but he perceives someone close to his side. Offering food and information also addresses his core pains.`},
{id:'ag08',t:'movewith',d:['gentlelimit','moveagainst','proc2'],q:Q_CONT,x:`P: My boyfriend basically dragged me here. I don't see why I should tell a stranger my business.
C: That makes sense. Being pushed into talking about personal things with someone you just met isn't much fun.`,
 w:`The clinician joins the reasonable part of her view. No limit is needed, so this is simply moving with.`},
{id:'ag09',t:'content',d:['proc2','sidetrack','movewith'],q:Q_TECH,x:`P: You can't help me. You've never heard voices.
C: I've finished medical school, I'm in psychiatry training, and I treat people who hear voices every week, so I'm qualified to help you.`,
 w:`He answers the challenge on its merits. With a suspicious patient, each credential tends to invite another rebuttal, and the chance to learn why she asked is lost.`},
{id:'ag10',t:'proc1',d:['proc2','proc3','content'],q:Q_TECH,x:`O: The patient has answered in single words since the topic of drinking came up.
C: I notice things got a lot quieter once we started talking about alcohol.`,
 w:`A comment on what's happening in the interview itself, spotted early while the tension is still small.`},
{id:'ag11',t:'proc2',d:['proc1','proc3','content'],q:Q_TECH,x:`P: Why would you even ask me that?
C: You seem pretty upset by that question. Help me understand what worried you about it.`,
 w:`It invites the patient's feelings and concerns, which often surfaces the core pain driving the reaction.`},
{id:'ag12',t:'proc3',d:['proc1','proc2','gentlelimit'],q:Q_TECH,x:`O: The patient is leaning forward, voice rising, jabbing a finger.
C: Your voice is getting pretty loud, and I'll be honest, I'm feeling a bit uneasy. Is there something you're trying to tell me that I'm missing?`,
 w:`The clinician discloses their own reaction. Use this sparingly, and if the unease is about safety, take safety steps first.`},
{id:'ag13',t:'sidetrack',d:['content','proc2','movewith'],q:Q_TECH,x:`O: A patient with mania shouts that the staff are idiots and that he won't answer any more stupid questions.
C: You mentioned earlier you're building an app. What does it do?
P: Oh, it's going to change everything. I've been coding all night, every night.`,
 w:`No argument about the "stupid questions." An emotionally important topic defuses the anger, and data gathering (here, about sleep) resumes naturally.`},
{id:'ag14',t:'seed_unknown',d:['seed_control','seed_betrayed','seed_failure'],q:Q_SEED,x:`O: A woman waiting for her first-ever psychiatric evaluation snaps at the triage nurse.
P: Nobody's told me anything! Are you going to lock me up? Do they do shock treatments here? What happens after I talk to the doctor?`,
 w:`Every question is about what will happen. Explaining the process step by step addresses the seed.`},
{id:'ag15',t:'seed_control',d:['seed_unknown','seed_betrayed','seed_failure'],q:Q_SEED,x:`O: A man admitted involuntarily paces and shouts.
P: I didn't choose any of this. I can't make a phone call when I want, I can't go outside, I can't even pick what I eat. You people decide everything.`,
 w:`The complaints all circle around who decides. Offering real choices, however small, addresses the seed.`},
{id:'ag16',t:'seed_betrayed',d:['seed_unknown','seed_control','seed_failure'],q:Q_SEED,x:`P: I trusted my last psychiatrist with everything, and he wrote in my chart that I was "drug-seeking." Now every ER treats me like an addict. So forgive me if I don't want to tell you anything.`,
 w:`A specific past injury by a helper, which you now stand in for. Acknowledge it without defending the system.`},
{id:'ag17',t:'seed_failure',d:['seed_betrayed','seed_unknown','seed_control'],q:Q_SEED,x:`O: A father whose son was readmitted after a relapse raises his voice at the resident.
P: I drove him to every appointment. I counted his pills. I did everything right, and he's back here anyway. So what kind of father does that make me?`,
 w:`Beneath the anger is self-blame: he has done everything and still feels he failed. Name the effort and the pain before discussing the plan.`},

{id:'cu01',t:'intersect',d:['prioritize','dynsizing','colorconscious'],q:`Which concept is the attending applying?`,x:`O: A Black woman describes repeated partner violence but has never called the police. A trainee wonders aloud whether she is "just passive." The attending suggests her reluctance may reflect realistic fears, shaped by both her race and her gender, about how police and courts would treat her.`,
 w:`Overlapping identities compound each other and shape help-seeking. Missing this risks misreading justified fear as passivity.`},
{id:'cu02',t:'prioritize',d:['intersect','discovered','cultransf'],q:`Which concept best explains the change in engagement?`,x:`O: A Latino firefighter is guarded with his therapist until he notices a fire department challenge coin on her shelf.
P: You have family in the service?
O: When she says her brother is a firefighter, he visibly relaxes and begins talking freely.`,
 w:`In that moment, his identity as a firefighter, not his ethnicity, was foremost, and it decided who felt safe.`},
{id:'cu03',t:'prioritize',d:['microagg','intersect','colorblind'],q:`Which concept best explains the sudden change in engagement?`,x:`O: A Muslim graduate student has been open and warm with her therapist for three sessions. After a hate crime against a local mosque over the weekend, she arrives guarded and answers in single words.`,
 w:`Her foremost identity has shifted. The next step is to name the change gently and non-defensively, and explore what happened.`},
{id:'cu04',t:'dynsizing',d:['acquired','discovered','colorconscious'],q:`Which principle is the clinician demonstrating?`,x:`C: In many Korean families I've worked with, parents expect adult children to live at home until they marry. I don't want to assume, though. How does that work in your family?`,
 w:`The generality comes from acquired literacy, but checking whether it fits this person is dynamic sizing.`},
{id:'cu05',t:'dynsizing',d:['acquired','intersect','telescoping'],q:`Which principle did the interviewer neglect?`,x:`O: A student from Brazil mentions she loves to dance. The interviewer, who has read a lot about Brazilian culture, asks enthusiastically about samba and Carnival. Her answers get shorter. Later it emerges she does competitive ballet and has been avoiding Brazilian student groups since arriving.`,
 w:`Cultural literacy applied as a conclusion rather than a hypothesis became a stereotype, and she withdrew. Starting from the person would have surfaced her acculturation stress.`},
{id:'cu06',t:'acquired',d:['discovered','dynsizing','intersect'],q:`What is the resident building?`,x:`O: Starting at a clinic serving a large Somali community, a new resident asks a Somali community health worker how patients usually like to be greeted, what eye contact is considered polite, and how people in the community tend to think about mental illness.`,
 w:`Knowledge gathered outside the interview, from colleagues and community members.`},
{id:'cu07',t:'discovered',d:['acquired','dynsizing','cueoff'],q:`What is the clinician building?`,x:`P: My grandmother says I've had susto since the car accident.
C: I'm not familiar with susto. Could you tell me what it means in your family, and what she thinks would help?`,
 w:`Learning from the patient in the moment, with open curiosity. Admitting you don't know is fine.`},
{id:'cu08',t:'dissonant',d:['intersect','prioritize','incorpprej'],q:`Which concept best describes this family stress?`,x:`P: My parents don't speak much English, so I handle everything: the bank, the landlord, my dad's doctor visits. Sometimes I feel like I'm the parent. And then they get upset that I act "too American."`,
 w:`Family members acculturating at different rates, with roles reversed. The gap is inside the family.`},
{id:'cu09',t:'microagg',d:['cultransf','colorconscious','inducedprej'],q:`What just happened?`,x:`O: A patient born and raised in Ohio, whose parents emigrated from Vietnam, mentions her hometown.
C: No, I mean, where are you really from?
O: She pauses, and her answers grow brief.`,
 w:`A brief, probably unintended slight suggesting she isn't fully American. Own it without defensiveness and repair.`},
{id:'cu10',t:'cultransf',d:['culcounter','microagg','colorconscious'],q:`What is happening in this disconnect?`,x:`P: No offense, but you're a rich doctor who went to private schools. People like you have never cared what happens in my neighborhood. Why would you be any different?`,
 w:`The patient projects attitudes about the clinician's group onto the clinician. The tools are the same as for any disconnect: empathy, openness, non-defensiveness.`},
{id:'cu11',t:'culcounter',d:['cultransf','colorblind','overident'],q:`What is the resident discovering about herself?`,x:`O: In supervision, a resident realizes she has been quicker to assume that patients from one ethnic community are exaggerating their pain, and slower to order workups for them, echoing things she heard growing up.`,
 w:`The clinician projects attitudes about the patient's group onto the patient, quietly changing care. Supervision is where it surfaces.`},
{id:'cu12',t:'colorblind',d:['colorconscious','overident','culambiv'],q:`Which cross-cultural pitfall is this?`,x:`O: A Black patient describes being followed by store security again. The therapist responds: "I really don't see color. To me you're just a person like anyone else, so let's focus on your coping skills."`,
 w:`Well-meant, but it dismisses a real and recurring experience.`},
{id:'cu13',t:'colorconscious',d:['colorblind','overident','dynsizing'],q:`Which cross-cultural pitfall is this?`,x:`O: A Latina engineer seeks help for panic attacks that began after a car accident. Her therapist spends most of the session on discrimination at work and her ethnic identity, which she says haven't been issues for her.`,
 w:`Assuming her problems must stem from minority status, when she has told you they don't.`},
{id:'cu14',t:'overident',d:['colorconscious','culcounter','colorblind'],q:`Which cross-cultural pitfall is this?`,x:`O: A Korean-American psychiatrist who faced a lot of racism in training is treating a Korean-American nurse for burnout. He keeps steering toward racism at her hospital, though she says the problem is 16-hour shifts and a new baby.`,
 w:`Like color consciousness, but driven by the clinician's own shared experience of marginalization.`},
{id:'cu15',t:'culambiv',d:['culcounter','colorconscious','overident'],q:`Which cross-cultural pitfall is this?`,x:`O: A resident is devoted to helping a recently arrived immigrant family, but admits in supervision that he keeps making decisions without asking them and gets irritated when they question his advice: "I know what's best here. They don't understand how things work."`,
 w:`A genuine wish to help, mixed with a need to control or feel superior.`},
{id:'cu16',t:'tradprej',d:['inducedprej','incorpprej','cultransf'],q:`Which form of prejudice is this?`,x:`O: A clinician notices himself privately rolling his eyes whenever a patient mentions a rural fundamentalist church, and assuming such patients "won't be psychologically minded."`,
 w:`A stereotyped dislike of a group, not rooted in having been harmed by them.`},
{id:'cu17',t:'inducedprej',d:['tradprej','incorpprej','cultransf'],q:`Which form of prejudice is this?`,x:`O: In a reflective seminar, a resident shares that after years of being stopped and searched by police as a teenager, he catches himself assuming that police officers he treats are hostile toward him before they've said a word.`,
 w:`A stereotyped view of a group that grew out of real discrimination by members of that group.`},
{id:'cu18',t:'incorpprej',d:['tradprej','inducedprej','colorconscious'],q:`Which form of prejudice is this?`,x:`P: I'm gay, but honestly I think people like me are kind of broken. Maybe that's why I'm depressed. I'd be better off straight.`,
 w:`Long-standing stigma internalized as a negative view of one's own group and self. Explore it gently; it may be feeding the depression.`},
{id:'cu19',t:'telescoping',d:['incorpprej','prioritize','dissonant'],q:`Which concept best describes his experience?`,x:`O: A wealthy, White, gay attorney explains that at his firm, his money and race give him standing, but when he visits his small hometown with his husband he feels exposed and unwelcome.
P: Same me. Different math.`,
 w:`The net discrimination he faces depends on the combination of identities and the setting. He is dominant in some domains and marginalized in others.`},
{id:'cu20',t:'cfi',d:['fica','existential','discovered'],q:Q_TECH,x:`C: People often understand their problems in their own way. What do your family and friends think is causing this?`,
 w:`A generic CFI question: it needs no knowledge of the patient's culture and often surfaces beliefs, family concerns, and barriers to care.`},
{id:'cu21',t:'cueoff',d:['fica','tick','existential'],q:Q_TECH,x:`O: Early in the interview, the patient said, "Thank God that surgery is over." Twenty minutes later:
C: You mentioned God earlier. Is faith something that's important to you?`,
 w:`An indirect method: the patient opened the door with her own words.`},
{id:'cu22',t:'existential',d:['fica','cueoff','continuum_sp'],q:Q_TECH,x:`C: You've been through so much this year. What has kept you going? Where do you find peace?`,
 w:`An indirect question about meaning that welcomes religious and secular answers alike.`},
{id:'cu23',t:'fica',d:['tick','continuum_sp','cfi'],q:Q_TECH,x:`C: Do you consider yourself spiritual or religious?
P: Catholic, yes.
C: How important is that in your life right now?
P: Very. It's what's getting me through.
C: Are you part of a parish or faith community?
P: I sing in the choir.
C: Is there anything about your faith you'd like us to keep in mind in your care?`,
 w:`Faith, Importance, Community, and Address in care, asked directly and in sequence.`},
{id:'cu24',t:'tick',d:['continuum_sp','existential','fica'],q:Q_TECH,x:`C: People vary in what makes them tick. For some it's religion, for others it's family or their community, or a mix. What makes you tick?`,
 w:`Shea's direct question, normalizing secular and religious sources of meaning before asking.`},
{id:'cu25',t:'continuum_sp',d:['tick','fica','cueoff'],q:Q_TECH,x:`C: People range from believing strongly in a god, to not being sure, to not believing at all. Where would you place yourself?`,
 w:`Laying out the whole range first makes any answer, including a secular one, feel acceptable.`},
{id:'cu26',t:'proc2',d:['content','sidetrack','proc1'],q:Q_TECH,x:`P: Before we go on, do you believe in God?
C: That's a really good question. What would it mean to you if I did, or if I didn't?`,
 w:`Rather than disclosing, the clinician explores the concern behind the question, which here turns out to be a past therapist who dismissed her faith. Shea generally advises against sharing your own religious affiliation in an initial interview.`},

{id:'vp01',t:'lookat',d:['lookwith','lookself','lookwithin'],q:Q_VP,x:`O: As the patient describes her week, the resident silently notes a fine tremor, bitten nails, a heavy sweater in a warm room, and that her speech speeds up whenever her husband comes up.`,
 w:`The patient as objective data, the lens of the mental status examination.`},
{id:'vp02',t:'lookwith',d:['lookat','lookwithin','somatic_emp'],q:Q_VP,x:`O: As the patient describes caring for her dying mother, the resident sets aside her checklist and tries to picture the house, the night shifts, the silence afterward.
C: It sounds like you were carrying all of it alone.`,
 w:`Empathic listening from inside the patient's world.`},
{id:'vp03',t:'lookself',d:['lookwithin','lookat','lookwith'],q:Q_VP,x:`O: Mid-interview with a guarded man, the resident catches herself leaning forward with rapid nods and wonders how that looks from his chair. She slows down and eases back.`,
 w:`Monitoring how she appears to the patient, then adjusting. Lower animation often suits guarded patients.`},
{id:'vp04',t:'lookwithin',d:['lookself','lookat','lookwith'],q:Q_VP,x:`O: Twenty minutes in, the resident notices she feels unusually sad and heavy, though the patient is describing his week in a cheerful voice. She makes a mental note to explore whether he's masking grief.`,
 w:`Her own feeling becomes a clue to test, not a conclusion.`},
{id:'vp05',t:'selfremember',d:['lookwithin','lookself','somatic_emp'],q:`What is this sudden moment of awareness called?`,x:`O: Deep in the history of present illness, a resident suddenly thinks: "Wait, what am I doing? I've been firing questions for ten minutes and I've lost track of how she's feeling." She pauses and changes her approach.`,
 w:`A brief waking up from habit, the doorway that lets her choose a different vantage point on purpose.`},
{id:'vp06',t:'somatic_emp',d:['lookat','lookself','counterproj'],q:Q_TECH,x:`O: After a puzzling session, a resident sits for a minute the way her patient sat: shoulders caved in, arms hanging loosely over the chair. She is struck by a sense of helplessness she hadn't picked up during the interview.`,
 w:`Adopting the patient's posture to understand their experience through the body.`},
{id:'vp07',t:'deletion',d:['generaliz','counterproj','proc2'],q:Q_TECH,x:`P: They always make me feel stupid.
C: Who, specifically?`,
 w:`Recovering what the shorthand left out. "Always" could be tested next.`},
{id:'vp08',t:'generaliz',d:['deletion','gentleconf','counterproj'],q:Q_TECH,x:`P: My sister criticizes my parenting every single time I see her.
C: Every single time?
P: (pause) Well, mostly at holidays. The rest of the time we're okay.`,
 w:`Gently testing the absolute word reveals a less hostile reality.`},
{id:'vp09',t:'counterproj',d:['proc2','sidetrack','deletion'],q:Q_TECH,x:`P: My coworkers are always in my business.
O: (He narrows his eyes.)
P: You ask a lot of questions too.
C: Having people pry into your business is irritating. Sounds like your coworkers never let up.
P: Exactly!`,
 w:`The projection is redirected to something out there, with a shared feeling, so clinician and patient look at it side by side.`},
{id:'vp10',t:'counterproj',d:['sidetrack','content','proc1'],q:Q_TECH,x:`O: A suspicious patient bristles when handed yet another intake form.
C: These forms are ridiculous. Nobody likes the endless paperwork.`,
 w:`A generic counterprojective statement: the target is a widely frustrating situation, useful early when you suspect paranoia.`},
{id:'vp11',t:'intuitive_react',d:['associational','transferential','pilkonis'],q:Q_RESP,x:`O: Halfway through a calm intake, the resident notices a growing sense of dread as the patient smiles and, in a flat voice, talks about his neighbor "finally getting what's coming to him."`,
 w:`A feeling most clinicians would have here. Take intuitive fear seriously: check violence risk and subtle psychotic signs, ensure safety, and consult.`},
{id:'vp12',t:'associational',d:['intuitive_react','transferential','pilkonis'],q:Q_RESP,x:`O: A resident raised by a very controlling father notices herself bristling as a patient dictates exactly how the session should go. She recognizes the link to her father and sets the feeling aside.`,
 w:`Tied to her history, but recognized, so she can work with it.`},
{id:'vp13',t:'transferential',d:['associational','intuitive_react','culcounter'],q:Q_RESP,x:`O: Only after months of supervision does a resident realize he has been cutting short his sessions with older men who, without his noticing, remind him of his harshly critical grandfather.`,
 w:`Unconscious and unrecognized until a pattern surfaced in supervision: true countertransference.`},
{id:'vp14',t:'pilkonis',d:['intuitive_react','associational','lookwithin'],q:`What is the supervisor pointing out?`,x:`O: In supervision, a resident says, "I feel that she's manipulating the team." Her supervisor asks her to try saying what she actually feels.`,
 w:`"Think" can replace "feel" in that sentence, so it's a judgment, not a feeling. The actual feeling might be anger or unease.`},
{id:'vp15',t:'motivation',d:['psychmind','cogability','interpq'],q:`Which therapy-facilitative characteristic is this question probing?`,x:`C: What made you decide to come in now, rather than a few months ago?
P: My wife said she'd leave if I didn't. Honestly, I think she's overreacting.`,
 w:`"Why now?" probes motivation. His answer suggests the pain isn't yet seen as his own.`},
{id:'vp16',t:'psychmind',d:['motivation','cogability','neurotic'],q:Q_TF,x:`P: I've started to wonder if the way I shut down at work is the same thing I did as a kid when my parents fought. I'd really like to understand that.`,
 w:`He believes psychological processes shape his life and wants to look inward.`},
{id:'vp17',t:'cogability',d:['psychmind','motivation','lookat'],q:`Which therapy-facilitative characteristic is the resident assessing?`,x:`O: Before recommending cognitive therapy, a resident checks the patient's concentration, memory, and abstraction, and whether he can follow and remember a multi-step homework plan.`,
 w:`Capacity to use the therapy, separate from wanting it or believing in it.`},
{id:'vp18',t:'egostab',d:['egonurt','egochal','gentleconf'],q:Q_EGO,x:`O: A man in acute crisis after a first psychotic break, now living in a shelter, gets brief, calm, frequent visits focused on sleep, safety, practical problems, and simple education about his illness.`,
 w:`Restoring integration through support and structure, not insight.`},
{id:'vp19',t:'egonurt',d:['egostab','egochal','interpq'],q:Q_EGO,x:`O: A woman with a fragile sense of self starts weekly therapy with a firm, consistent frame (same time, clear limits), in which her therapist gently but persistently helps her understand the links between her feelings and actions.`,
 w:`A steady frame plus a persistent, gentle push toward understanding.`},
{id:'vp20',t:'egochal',d:['egostab','egonurt','gentleconf'],q:Q_EGO,x:`O: A reflective, well-functioning architect with a stable sense of self begins therapy in which his therapist regularly confronts his contradictions and invites him to examine patterns in his relationships.`,
 w:`Confrontation and reflection, suited to neurotic-level structure and good therapy-facilitative traits.`},
{id:'vp21',t:'interpq',d:['gentleconf','proc2','deletion'],q:Q_TECH,x:`P: He always picks the restaurant. Always.
C: I'm wondering if it's hard for you to say what you want, and then you end up resentful when he decides.
P: No, I just... (pause) Well. I guess I never actually say it.`,
 w:`A gentle link between feelings and behavior. Initial balking followed by real reflection is a promising sign for insight-oriented therapy.`},
{id:'vp22',t:'gentleconf',d:['interpq','content','generaliz'],q:Q_TECH,x:`C: I'm a little confused. You said your brother is your best friend, but you mentioned you haven't returned his calls in a year. Can you help me understand that?`,
 w:`Tactfully presenting a contradiction. How the patient handles it hints at the level of organization.`},
{id:'vp23',t:'neurotic',d:['borderline_org','psychotic_org','egochal'],q:Q_ORG,x:`C: You've said you and your wife are complete equals, but you've called her "the little woman" a few times. Help me understand that.
P: (uncomfortable laugh) Huh. I guess I do. It's just a pet name, honestly. She calls me "big guy."`,
 w:`Uneasy, admits the contradiction, rationalizes, and settles.`},
{id:'vp24',t:'borderline_org',d:['neurotic','psychotic_org','egonurt'],q:Q_ORG,x:`C: You've said you and your wife are complete equals, but you've called her "the little woman" a few times. Help me understand that.
P: (face reddening) Who are you to judge how I talk about my own wife? You're just like her mother, always looking for something to criticize. I'll call her whatever I want.`,
 w:`Attack, entitlement, and projection under mild stress. Reality testing is still intact.`},
{id:'vp25',t:'psychotic_org',d:['neurotic','borderline_org','egostab'],q:Q_ORG,x:`C: You've said you and your wife are complete equals, but you've called her "the little woman" a few times. Help me understand that.
P: Little, big, it's all sizes, isn't it. Equal is a word with letters, and letters change. The woman, the little, well, measurements are complicated these days.`,
 w:`Many words, little meaning, subtle disorganization. Stop confronting, and look for harder signs of psychosis.`},
{id:'vp26',t:'responsiveness',d:['animation','spontaneity','transparency'],q:Q_STYLE,x:`O: Reviewing her session video, a resident sees that when her patient made a wry joke, her face didn't change at all, and the patient's smile faded.`,
 w:`About how visibly she reacts to what the patient does, not her general liveliness.`},
{id:'vp27',t:'animation',d:['responsiveness','spontaneity','transparency'],q:Q_STYLE,x:`O: A peer observer notes that the resident gestures constantly with both hands, leans in and out, and changes expression often, even while the patient sits quietly and guardedly.`,
 w:`Overall liveliness, independent of what the patient is doing. Toning it down can help guarded patients.`},
{id:'vp28',t:'transparency',d:['spontaneity','responsiveness','animation'],q:Q_STYLE,x:`O: A supervisor points out that the resident deliberately tells patients what he's thinking and feeling during the session: "I'll be honest, that worries me," or "I'm feeling hopeful hearing that."`,
 w:`Conscious, deliberate disclosure of his inner experience.`},
{id:'vp29',t:'spontaneity',d:['transparency','animation','responsiveness'],q:Q_STYLE,x:`O: A supervisor notes that the resident often cracks quick jokes and blurts out off-the-cuff opinions during intakes: "That landlord sounds like a nightmare!"`,
 w:`Unplanned, in-the-moment humor and opinion. Worth reining in with guarded or paranoid patients.`}
);
