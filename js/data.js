/* MSE Trainer case and term data.
   To add a case: append an object to V with a unique id, t (correct term key),
   d (three distractor term keys), q (optional question text), x (vignette; lines starting C: / P: / O:), and w (explanation). */
const CH={
  1:`The Delicate Dance: Engagement and Empathy`,
  2:`Beyond Empathy: Cornerstone Concepts and Techniques for Enhancing Engagement`,
  3:`The Dynamic Structure: Core Tasks, Strategies, and the Continuum of Open-Endedness`,
  4:`Facilics: The Art of Transforming Interviews into Conversations`,
  5:`Validity Techniques: Exploring Sensitive Material and Uncovering the Truth`,
  6:`The Person Beneath the Diagnosis: Uniqueness, Wellness, and Cultural Context`,
  7:`Assessment Perspectives: The Human Matrix and Bridges to Treatment Planning`,
  8:`Nonverbal Behavior: The Interview as Mime`,
  9:`Mood Disorders: How to Sensitively Arrive at a Differential Diagnosis`,
  10:`Interviewing Techniques for Understanding the Person Beneath the Mood Disorder`,
  11:`Psychotic Disorders: How to Sensitively Arrive at a Differential Diagnosis`,
  12:`Interviewing Techniques for Understanding the Person Beneath the Psychosis`,
  13:`Personality Disorders: Core Concepts Before the Interview Begins`,
  14:`Personality Disorders: How to Sensitively Arrive at a Differential Diagnosis`,
  15:`Engaging Difficult Personality Disorders Through the Psychodynamic Lens`,
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
  {k:'en',n:'Engagement and empathy',g:'p1',ch:1},{k:'sf',n:'Safety and the alliance',g:'p1',ch:2},
  {k:'ds',n:'Interview structure',g:'p1',ch:3},{k:'fa',n:'Facilics',g:'p1',ch:4},
  {k:'va',n:'Validity techniques',g:'p1',ch:5},{k:'pb',n:'The person beneath',g:'p1',ch:6},
  {k:'ap',n:'Assessment and planning',g:'p1',ch:7},{k:'nv',n:'Nonverbal behavior',g:'p1',ch:8},
  {k:'md',n:'Mood disorders',g:'p2',ch:9},{k:'bm',n:'Beneath the mood disorder',g:'p2',ch:10},
  {k:'po',n:'Psychotic disorders',g:'p2',ch:11},{k:'bo',n:'Beneath the psychosis',g:'p2',ch:12},
  {k:'pc',n:'Personality: core concepts',g:'p2',ch:13},{k:'pd',n:'Personality: differential',g:'p2',ch:14},
  {k:'pm',n:'Personality: psychodynamics',g:'p2',ch:15},
  {k:'ag',n:'Anger and disengagement',g:'skill',ch:19},{k:'cu',n:'Culture and identity',g:'skill',ch:20},
  {k:'vp',n:'Vantage points',g:'skill',ch:21}
];
const GROUPS=[{g:'mse',n:'Mental status'},{g:'p1',n:'Clinical interviewing, Part 1'},{g:'p2',n:'Clinical interviewing, Part 2'},{g:'skill',n:'Clinical interviewing, Ch. 19–21'}];
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
T('seed_unknown','Core pain: fear of the unknown','ag',[19,7],
 `Anger rooted in not knowing what is happening or what will happen next.`,
 `The questions give it away: what happens, how long, what will they do to me. Information addresses this seed.`,
 `Explain what happens next, step by step, in plain language.`);
T('seed_control','Core pain: loss of external control','ag',[19,7],
 `Anger rooted in having choices, freedom, or control taken away.`,
 `The complaints circle around who decides. Offering real choices addresses this seed.`,
 `Offer choices: talk now or later, where to sit, whom to call, what to eat.`);
T('seed_betrayed','Core pain: feeling wronged or betrayed','ag',[19],
 `Anger rooted in having been let down, mistreated, or betrayed, often by previous helpers.`,
 `Look for a specific past injury that you now stand in for.`,
 `Acknowledge the injury without defending the system: "That sounds like it did real damage. I'd like to do this differently."`);
T('seed_failure','Core pain: sense of failure','ag',[19,7],
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
T('responsiveness','Style: responsiveness','vp',[21,2],
 `How visibly your affect responds to the patient, from smiling at a joke to no change at all.`,
 `About reacting to the patient, rather than your general level of gesture and liveliness.`,
 `More responsiveness helps shut-down patients engage.`);
T('spontaneity','Style: spontaneity','vp',[21,2],
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

/* ===================== Clinical interviewing, Part 1: Shea Ch. 1–8 ===================== */

/* Ch. 1: Engagement and empathy */
T('feedwander','Feeding the wanderer','en',[1,3],
 `Unintentionally rewarding a patient's tangents (writing as they veer off, empathic filler, follow-up questions on the new topic), so both drift together.`,
 `The clinician's own behavior keeps the detour going. Helpful when you want free association; harmful when you need specific data.`,
 `When a patient drifts, audit yourself first: are your notes, nods, and questions rewarding the drift?`);
T('unipolar','Unipolar blending','en',[1],
 `One-sided, superficial, too-rapid openness, often in hypomanic or histrionic patients, that feels like great rapport.`,
 `It feels unusually good, unusually fast. The objective signs (long utterances, very short latencies, frequent interruptions) tell a different story.`,
 `If you feel charmed early, check the objective signs before trusting the feeling, and consider hypomania or histrionic defenses.`);
T('blend_subj','Blending: subjective sense','en',[1],
 `Using your own internal sense of how the interview feels as a thermometer for engagement.`,
 `Your felt sense. Useful, but it can be fooled by unipolar blending and can lag behind real change.`,
 `After each interview, jot one line: "When it went well, I noticed..." to calibrate your thermometer.`);
T('blend_obj','Blending: objective signs','en',[1],
 `Gauging engagement from observable features: duration of utterance, reaction time latency, interruptions (Wiens), and body language.`,
 `Measurable signs, such as lengthening answers, rather than how it feels.`,
 `With a reticent patient, a lengthening answer is one of the earliest signs your technique is working.`);
T('selfreport','Blending: patient self-report','en',[1],
 `Asking the patient, usually near the end, how the conversation has felt.`,
 `The patient is the source. A hesitant "fine" is an opening to explore, not an answer.`,
 `"Before we stop, I'm curious how this was for you today. Was there anything that felt uncomfortable or that I missed?"`);
T('identification','Identification','en',[1],
 `Continuing to feel and endorse the patient's feelings as one's own, losing Rogers' "as if."`,
 `Empathy recognizes the feeling and steps back out; identification stays in it and takes sides.`,
 `Warning signs: replaying a patient's anger at home, taking sides, feeling you are the patient. Bring it to supervision.`);
T('ec1','Empathy cycle: phase 1 (patient expresses)','en',[1],
 `Breakdown at the first phase: conscious or unconscious defenses keep the patient from expressing the true feeling.`,
 `The feeling never reaches the surface. Empathy aimed at an unvoiced feeling may feel intrusive.`,
 `Respect the defense early; don't push empathy toward a feeling the patient hasn't acknowledged.`);
T('ec2','Empathy cycle: phase 2 (clinician recognizes)','en',[1],
 `Breakdown at the second phase: the clinician's own state, defenses, or projection distort perception of the patient's feeling.`,
 `The patient expressed it; the clinician, as the measuring instrument, missed or distorted it.`,
 `Before each interview, take ten seconds to name your own state: rushed, angry, sad, tired?`);
T('ec3','Empathy cycle: phase 3 (clinician conveys)','en',[1],
 `Breakdown at the third phase: the clinician recognizes the feeling but conveys it with the wrong valence, timing, or length.`,
 `The clinician understood correctly but said it in a way this patient couldn't accept.`,
 `Match valence to stance: lower certainty and attribution with guarded patients.`);
T('ec4','Empathy cycle: phase 4 (patient perceives)','en',[1],
 `Breakdown at the fourth phase: psychopathology keeps the patient from perceiving the clinician's empathy.`,
 `The empathy was well conveyed; the patient, because of delirium, severe psychosis, or mania, can't take it in.`,
 `Keep statements short, simple, and concrete; address the underlying condition.`);
T('ec5','Empathy cycle: phase 5 (patient accepts)','en',[1],
 `Breakdown at the fifth phase: the patient perceives the empathy, but psychopathology blocks any visible acknowledgment.`,
 `It may have landed even though you see no sign of it, as in severe depression or catatonia.`,
 `Don't conclude empathy failed just because there's no visible response; keep offering it.`);
T('highcert','High implied certainty','en',[1],
 `An empathic statement phrased declaratively, as though the clinician knows what the patient feels.`,
 `Sounds sure ("Everything gave way at once"). Powerful with trusting patients; often backfires with guarded ones.`,
 `Save declarative empathy for patients who are clearly trusting and engaged.`);
T('lowcert','Low implied certainty','en',[1],
 `An empathic statement phrased tentatively ("It sounds like...", "I wonder if...").`,
 `The hedge lowers the risk. Works with trusting and guarded patients alike.`,
 `Default to "It sounds like..." until you know where the patient sits on the trusting-to-guarded spectrum.`);
T('highattr','High intuited attribution','en',[1],
 `An empathic statement that names an unspoken feeling or links to history the patient hasn't voiced.`,
 `Reads in beyond what was said. Accurate, it signals deep perception; with a guarded patient, it can feel like an insult.`,
 `If the patient disavows it ("No, that's not right"), lower the valence or stop.`);
T('reflecting','Reflecting statement','en',[1],
 `Mirroring back essentially the patient's exact words; the lowest attributional valence.`,
 `Adds nothing the patient didn't say. Safe with paranoid patients, but overuse sounds parrot-like.`,
 `Use the patient's own key words, said in a caring tone.`);
T('paranoidspiral','Paranoid spiral','en',[1],
 `Escalating disengagement when a clinician pushes more, and stronger, empathy on a paranoid patient.`,
 `Each new attempt at empathy raises the intimacy the patient fears, so they retreat or attack.`,
 `At the first disavowal, stop empathizing; switch to reflecting statements and interested, conversational questions.`);
T('greasing','Greasing the wheels','en',[1],
 `An interested, non-empathic, conversational manner that invites a patient to elaborate a delusion (Robinson), paired with pure reflecting.`,
 `Curious, not empathic: the goal is to let delusional material (and any danger in it) emerge.`,
 `"What have you noticed?" "How do you make sense of it?" "What do you think needs to happen?"`);
T('defusing','Defusing statement','en',[1],
 `A high-certainty statement agreeing that a patient's anger makes sense.`,
 `The exception to the guarded rule: angry patients respond to strong agreement. The angrier the patient, the higher the valence.`,
 `Mild: "It makes sense you'd be upset." Moderate: "No wonder you're upset." Strong: "Who wouldn't be upset!"`);
T('metaphorpara','Metaphorical paraphrase','en',[1],
 `Capturing the central message of what the patient is saying in a single image.`,
 `An image of the whole gestalt, not a restatement of the words. Done well, the patient may extend it.`,
 `"Like running on a treadmill." "Like pushing a boulder uphill."`);
T('sensorypara','Sensory-based paraphrase','en',[1],
 `A paraphrase that matches the patient's preferred sensory language: visual, auditory, or kinesthetic.`,
 `Mirrors the sensory channel ("see," "hear," "feel"), not the whole message as an image.`,
 `Visual: "So the way you see it..." Auditory: "What I'm hearing is..." Kinesthetic: "It feels like..."`);
T('naivete','Disciplined naivet\u00e9','en',[1],
 `Listening receptively, trying to feel the patient's world without seeking cause and effect, classification, or moral judgment (Margulies and Havens).`,
 `Receptive: you suspend analysis. Imaginative projection is active: you move into the patient's world.`,
 `When analyzing would harm engagement, set the diagnostic checklist aside for a few minutes and just listen.`);
T('imagproj','Imaginative projection','en',[1],
 `Actively and creatively projecting yourself into the patient's inner experience, or "inscape" (Margulies and Havens).`,
 `Active and imaginative, like a poet entering a scene, while keeping your own perspective.`,
 `Picture the scene from inside: the sights, sounds, and feelings of the patient's moment.`);

/* Ch. 2: Safety and the alliance */
T('selfsystem','Self-system','sf',[2],
 `Sullivan's term for the conscious and unconscious processes that protect self-esteem when meeting someone new.`,
 `Explains early minimizing and guardedness: the patient is protecting self-esteem, not being difficult.`,
 `Lower the threat early with regard, warmth, and quiet expertise, so the self-system can relax.`);
T('upr','Unconditional positive regard','sf',[2],
 `Rogers: genuine caring for the person, free of evaluation; in assessment, suspending moral judgment of what the patient has done.`,
 `Caring for the person while setting aside judgment of the behavior.`,
 `Keep your tone and face steady when a patient discloses something shameful: "Thank you for telling me."`);
T('parade','Parade of frowns','sf',[2],
 `The sequence of judgmental reactions many patients have met from family, employers, and other clinicians before seeing us.`,
 `Explains why a patient braces for judgment before you've said anything.`,
 `Make sure your face is not the next frown in the parade.`);
T('nondefensive','Non-defensiveness','sf',[2],
 `Meeting challenges with curiosity rather than self-protective posturing or lecturing.`,
 `The clinician stays curious and open about the challenge instead of defending status or credentials.`,
 `"That's a fair question. What would help you feel comfortable working with me?"`);
T('ulterior','Ulterior motives','sf',[2],
 `Clinician needs, such as to be liked, admired, or important, that quietly make the relationship unsafe.`,
 `About the clinician's own needs being served in the room. Sullivan: don't traffic in ordinary interpersonal satisfactions.`,
 `Ask yourself whose needs this line of conversation is meeting.`);
T('blandness','Professional blandness','sf',[2],
 `Misreading neutrality as expressionlessness; patients tend to read a blank face as dislike (Ryle).`,
 `An attempt at neutrality that comes across as coldness.`,
 `Neutral about judgments, not about warmth: let your face respond.`);
T('consistency','Genuineness: consistency','sf',[2],
 `A component of genuineness: steady, predictable behavior across the interview and across visits.`,
 `Being the same person each time. Responsiveness and spontaneity are the other two components.`,
 `Keep your warmth and style stable from visit to visit, even on hard days.`);
T('factq','Fact-oriented question','sf',[2],
 `A usually closed question about concrete symptoms or situations; well timed, it conveys expertise.`,
 `A precise question that shows you know the territory, often prompting "How did you know?"`,
 `After the patient describes a symptom, ask about its typical companions.`);
T('metacomm','Metacommunication','sf',[2],
 `The implicit message a question or statement sends beyond its literal content.`,
 `Not what you asked, but what asking it told the patient, such as "this clinician has seen this before."`,
 `Ask yourself what each question implies about you and about the patient.`);
T('miracle','Miracle question','sf',[2],
 `De Shazer's solution-focused question inviting the patient to picture life after an overnight miracle, to surface goals.`,
 `Imagines a solved future, rather than asking about consequences of one specific change.`,
 `"If a miracle happened tonight and the problem were solved, what's the first thing you'd notice tomorrow?"`);
T('bgoals','Alliance: agreement on goals','sf',[2],
 `One of Borden's three pillars of the alliance: shared agreement on what treatment is for.`,
 `About the destination. Tasks are about how to get there; the bond is the relationship itself.`,
 `"What would you most like to be different a few months from now?"`);
T('btasks','Alliance: agreement on tasks','sf',[2],
 `One of Borden's three pillars: shared agreement on the methods of treatment.`,
 `About how you'll work together, not where you're going.`,
 `Offer options and ask which the patient is willing to try.`);
T('bbond','Alliance: the bond','sf',[2],
 `One of Borden's three pillars: the trust and attachment between patient and clinician.`,
 `The relationship itself, which can hold even when the patient disagrees with a suggestion.`,
 `Protect the bond during disagreements: "We may see this differently, and I'm still on your side."`);

/* Ch. 3: Interview structure */
T('ph_intro','Phase 1: introduction','ds',[3],
 `From first contact to the first inquiry about why the patient came: names, roles, confidentiality, setting the stage.`,
 `Before the story starts. The opening begins once you ask why they've come.`,
 `Ask how the patient would like to be addressed, and explain confidentiality and its limits.`);
T('ph_open','Phase 2: opening','ds',[3],
 `About 5 to 7 minutes of mostly nondirective listening, while you take in the patient's perspective and mental state (PACE).`,
 `Mostly open questions and listening. Structured questioning comes in the body.`,
 `Let the patient lead, and use the time to plan which regions you'll need in the body.`);
T('ph_body','Phase 3: body','ds',[3],
 `Structured data gathering across the key regions.`,
 `You're now steering, systematically, toward the database you need.`,
 `Announce the shift when it helps: "Now I'd like to ask some more specific questions."`);
T('ph_close','Phase 4: closing','ds',[3],
 `Sharing impressions, answering questions, and agreeing on a plan.`,
 `Data gathering is done; you're giving back and planning together.`,
 `Leave real time for this phase; it's where hope and adherence are built.`);
T('ph_term','Phase 5: termination','ds',[3],
 `The final words and goodbye, which should leave hope and secure a return visit.`,
 `The last moments at the door. The plan has already been agreed in the closing.`,
 `End with something concrete and warm: the next appointment and what to do if things worsen.`);
T('openq','Open-ended question','ds',[3],
 `A question that can't easily be answered in a word or two and invites the patient to elaborate.`,
 `A true question (what, how) with no limit on the answer. A gentle command does the same as a statement.`,
 `"What has your first year of college been like?"`);
T('gentlecmd','Gentle command','ds',[3],
 `An open statement such as "Tell me about..." or "Describe..." that invites speech without limiting the answer.`,
 `Phrased as a request, not a question, so it can't be answered "no." Ideal for shut-down patients.`,
 `"Tell me about your relationship with your sister."`);
T('swingq','Swing question','ds',[3],
 `A question that asks whether the patient will answer ("Can you tell me...?", "Would you say...?"); open or closed depending on engagement.`,
 `Technically answerable "No." Swap it for a gentle command when engagement is low.`,
 `Turn "Can you describe the panic?" into "Describe the panic for me."`);
T('qualq','Qualitative question','ds',[3],
 `A "How is your...?" question that could be answered "Fine."`,
 `Open in form but easily closed in practice.`,
 `With guarded patients, follow it with a gentle command if you get "Fine."`);
T('stmtinq','Statement of inquiry','ds',[3],
 `A statement said as a question ("You moved back home last spring?"); used to clarify, summarize, confront, or interpret.`,
 `Inherently leading and usually answered yes or no.`,
 `Use it to check facts, not to open a topic.`);
T('negstmt','Negative statement of inquiry','ds',[3],
 `A statement of inquiry phrased in the negative ("So you're not...?"), which leads toward "no."`,
 `Tells the patient the answer you expect. A reliably invalid habit, especially for sensitive topics.`,
 `Ask neutrally instead: "Have you had thoughts of killing yourself?"`);
T('facilstmt','Facilitating statement','ds',[3],
 `A brief prompt such as "Mm-hmm," "Go on," or "I see" that encourages the patient to continue.`,
 `Keeps the patient talking without directing content. Weak on its own with shut-down patients.`,
 `Pair it with nods and attentive silence during the opening.`);
T('closedq','Closed-ended question','ds',[3],
 `A question that can be answered in a word or two ("Did you drink last night?", "Which hospital was that?").`,
 `A direct question with a short answer. A closed-ended statement directs without asking.`,
 `Essential in the body; overused early, it shuts patients down.`);
T('closedstmt','Closed-ended statement','ds',[3],
 `A statement that directs or informs without inviting elaboration ("Let's start with your mood.").`,
 `Not a question at all; it sets direction or gives information.`,
 `Use it to focus a wandering interview or to structure the body.`);
T('piggyback','Piggy-back empathic statement','ds',[3],
 `An empathic lead-in joined to a question, so empathy doesn't stall the flow.`,
 `Empathy plus a question in one breath: attach an open question for shut-down patients, a closed one to focus wanderers.`,
 `"That sounds humiliating. Tell me more about what she's been doing."`);
T('shutdown','Shut-down interview','ds',[3],
 `A problem pattern with short answers, long latencies, and decreased eye contact, often pulling the clinician into more closed questions.`,
 `Too little speech. String together open questions and gentle commands, and defer sensitive topics.`,
 `Six or seven open questions in a row may be needed; one closed question can undo the gain.`);
T('wandering_int','Wandering interview','ds',[3],
 `A problem pattern with long answers, short latencies, and topic hopping, often fed by the clinician's nods and open questions.`,
 `Too much speech that won't stay on topic. The loquacious variant stays on topic but buries it in detail.`,
 `Focus in steps: piggy-back empathy with a closed question, then gentle redirection ("Before we get to that...").`);
T('loquacious','Loquacious interview','ds',[3],
 `A variant of the wandering interview: the patient stays on topic but drowns it in irrelevant detail.`,
 `On topic, unlike the classic wandering interview; the problem is the detail, not the direction.`,
 `Ask for the specific number or fact you need, kindly and early.`);
T('rehearsed','Rehearsed interview','ds',[3],
 `A pat, well-worn story, often from a patient who has told it many times or wants to steer the interview.`,
 `Smooth and practiced, with little fresh emotion. Can reflect chronicity or control (malingering, drug seeking, avoiding a topic).`,
 `Break the script with an affective interjection or questions the patient hasn't been asked before.`);
T('affinterj','Affective interjection','ds',[3],
 `Steering a rehearsed story toward an emotionally charged moment to break the script.`,
 `Interrupts the rote narrative with feeling, rather than changing the subject.`,
 `"Hold on a second. What was the worst moment of that for you?"`);
T('namingemo','Naming emotions','ds',[3],
 `When a patient stalls, naming a few emotions that often cause it (shame, worry, fear) and asking if any fit (Morrison).`,
 `Offers several possible feelings behind the stall, rather than commenting on the interaction or framing the question.`,
 `"Sometimes people stop there because they feel embarrassed or worried what I'll think. Does either fit?"`);

/* Ch. 4: Facilics */
T('freefac','Free facilitation region','fa',[4],
 `A nondirective stretch where the clinician consciously lets the patient choose the direction.`,
 `You let the patient lead on purpose. The opening phase is largely this.`,
 `Use nods, "uh-huh," and open prompts; resist steering.`);
T('transform','Transformational region','fa',[4],
 `A stretch spent resolving a communication roadblock, such as defensiveness or anger (formerly "resistance region").`,
 `The interview pauses its data gathering to work on the relationship itself.`,
 `Treat the roadblock as collaborative discovery; it often reveals what makes the patient tick.`);
T('psychodyn','Psychodynamic region','fa',[4],
 `A stretch focused on how and why the patient responds as they do: insight and reflection.`,
 `The topic is the patient's own patterns and their meaning.`,
 `Explore briefly in an intake; it also tests readiness for insight-oriented therapy.`);
T('scouting','Scouting region','fa',[4],
 `The introduction plus opening (about the first 7 minutes), mixing process and content as you survey concerns and mental state.`,
 `The whole early survey, not just the free listening within it.`,
 `Finish scouting by about 7 minutes, with a plan for the body.`);
T('stilted','Stilted expansion','fa',[4],
 `Exploring a region like a checklist, with rapid-fire closed questions.`,
 `Efficient on paper, interrogating in the room.`,
 `Soften it: open the region with a gentle command, then follow the patient's answers.`);
T('blended','Blended expansion','fa',[4],
 `Exploring a region conversationally, mixing open questions with follow-ups that track the patient.`,
 `Feels like a conversation while still covering the needed data.`,
 `Use the patient's last answer as the springboard for your next question.`);
T('excursion','Excursion','fa',[4],
 `A brief step out of a region to pursue something related, followed by a return.`,
 `Short and immediately followed by a return, unlike a split expansion.`,
 `Signal the return: "Let's come back to your sleep for a moment."`);
T('split','Split expansion','fa',[4],
 `One region explored in two or more separate places in the interview.`,
 `The region is revisited later, not just stepped out of briefly.`,
 `Fine when needed; make sure the region gets finished.`);
T('pivot','Pivot point','fa',[4],
 `A moment when the patient moves into a new region, and you choose whether to follow.`,
 `The decision moment itself. Following it creates a spontaneous gate.`,
 `Ask: Is this region more important right now than the one I'm in?`);
T('gate_spont','Spontaneous gate','fa',[4],
 `The patient moves into a new region and the clinician follows.`,
 `The patient opened the gate; you just walked through it.`,
 `"How do you mean?"`);
T('gate_natural','Natural gate','fa',[4],
 `A cue statement from the patient's last sentence or two, plus a transitional question.`,
 `Grows directly out of what the patient just said.`,
 `Pick up the patient's last phrase and turn it toward the region you need.`);
T('gate_manuf','Manufactured gate','fa',[4],
 `A series of natural gates used to reach a delicate topic smoothly.`,
 `Several linked steps, each cued by the patient's last answer, ending at the sensitive topic.`,
 `Plan the stepping stones toward violence, incest, or substance use.`);
T('gate_refer','Referred gate','fa',[4],
 `A transition that refers back to something the patient said earlier.`,
 `"Earlier you mentioned..." bridges to a region using an older cue.`,
 `Keep a mental list of earlier mentions to use as later gates.`);
T('gate_implied','Implied gate','fa',[4],
 `A move to a topically similar region without a direct cue.`,
 `No cue, but the topics are clearly related, so it doesn't jar.`,
 `Anxiety to OCD, depression to mania: related regions connect smoothly.`);
T('gate_phantom','Phantom gate','fa',[4],
 `A jump to an unrelated region with no cue, reference, or announcement.`,
 `Jarring and unconnected. Avoid it.`,
 `If you must jump, announce it with an introduced gate.`);
T('gate_intro','Introduced gate','fa',[4],
 `Explicitly announcing a transition, useful before the closing or a sensitive section.`,
 `Announces the change openly rather than hiding the seam.`,
 `"Now I'd like to switch gears and ask about your medical history."`);
T('gate_obs','Observed gate','fa',[4],
 `A transition cued off the patient's nonverbal behavior.`,
 `The cue is something you saw, not something the patient said.`,
 `"You look like you're welling up. What's coming up for you?"`);
T('deadzone','Dead zone','fa',[4],
 `The second quarter of the interview lost to interesting but unhelpful material, usually followed by a rushed sprint.`,
 `A timing error: the trouble is when, not just how, the time was spent.`,
 `Aim to finish scouting by 7 minutes and cover two or three key regions by 15.`);
T('unguided','Unguided interview','fa',[4],
 `A hodgepodge interview from poor focusing, even with a normally verbal patient.`,
 `Regions are entered and left without finishing any; the patient isn't the problem.`,
 `Finish a region before leaving it, and use gates deliberately.`);

/* Ch. 5: Validity techniques */
T('anchor','Anchor question','va',[5],
 `Tying recall to a memorable time or place to sharpen memory.`,
 `Uses a landmark event or setting to improve recall.`,
 `"Think back to your daughter's birthday in June. How was your mood around then?"`);
T('tagging','Tagging question','va',[5],
 `Offering a list so the patient can identify a forgotten fact.`,
 `Helps memory by offering options. Denial of the specific asks about items one at a time to reduce denial.`,
 `"Was it Prozac, Zoloft, Paxil, or something else?"`);
T('exaggeration','Exaggeration','va',[5],
 `Humorous overstatement that shrinks a patient's disproportionate shame.`,
 `Light humor about a minor act. Symptom amplification uses high numbers to counter minimizing.`,
 `Use only when the shame is clearly out of proportion and the alliance is good.`);
T('defterms','Defining technical terms','va',[5],
 `The clinician explains exactly what a clinical term means before asking about it.`,
 `About vocabulary. Clarifying norms is about what counts in the patient's family or culture.`,
 `"By panic attack I mean a sudden wave of intense fear that peaks within minutes."`);
T('clarnorms','Clarifying norms','va',[5],
 `Spelling out what counts (for example, as abuse or hitting) when the patient's norms may hide it.`,
 `About what behavior the question includes, especially where it was considered normal.`,
 `"By hit, I mean slaps, pushes, or a belt, even if back then it was just called discipline."`);
T('normalization','Normalization','va',[5],
 `Framing a question to show that others have had the same experience.`,
 `"Some people who... find that..." The patient isn't alone. Shame attenuation frames through the patient's own pain.`,
 `"Sometimes when people are as depressed as you've been, they think about suicide. Have you?"`);
T('shameatt','Shame attenuation','va',[5],
 `Framing a question through the patient's own pain, stress, or rationalizations.`,
 `Anchored in this patient's situation ("With all the stress you're under..."), not in what others experience.`,
 `"With all the pressure at work, has it ever gotten to the point where you hit someone?"`);
T('bragging','Induction to bragging','va',[5],
 `A compliment that precedes a question about a negative behavior.`,
 `The compliment invites the patient to show off, which can loosen disclosure of antisocial acts.`,
 `"You clearly know how to handle yourself. How many fights have you been in?"`);
T('behinc','Behavioral incident','va',[5],
 `Asking for concrete facts or sequence rather than opinions.`,
 `"What did you actually do?" replaces the patient's label with observable facts.`,
 `When a patient says "I lost it," ask exactly what happened.`);
T('verbalvideo','Verbal video','va',[5],
 `A series of behavioral incidents reconstructing an event moment by moment.`,
 `Many linked "and then what?" steps, not just one fact. Watch for gaps (the "Nixon gap").`,
 `"Walk me through it from the moment you got home."`);
T('gentleassume','Gentle assumption','va',[5],
 `Presuming a behavior non-judgmentally: "What other...?"`,
 `Assumes the behavior happened, making "yes" easier than in a yes-or-no question.`,
 `"What other drugs have you tried besides marijuana?"`);
T('denialspec','Denial of the specific','va',[5],
 `Asking about items on a list one at a time.`,
 `Each item gets its own question, so each needs its own "no."`,
 `"Have you used cocaine?... What about pain pills?... Meth?"`);
T('cannon','Cannon question','va',[5],
 `Lumping many items into one question, which invites a single "no." Avoid.`,
 `The opposite of denial of the specific; a reliably invalid habit.`,
 `Break it apart: one substance or symptom per question.`);
T('catchall','Catch-all question','va',[5],
 `"Is there anything we haven't discussed that you think is important?"`,
 `Opens a door for whatever you didn't think to ask (Davila).`,
 `Ask it near the end of each major section and before closing.`);
T('sympamp','Symptom amplification','va',[5],
 `Offering high numbers so that a minimized answer still reveals the problem.`,
 `The upper bound is set high on purpose. Exaggeration is humor aimed at shame.`,
 `"How many hours a day do you spend thinking about suicide on your worst days: 8, 12, 15?"`);
T('bogus','Bogus symptoms','va',[5],
 `Asking about atypical or nonexistent symptoms to detect feigning (Resnick).`,
 `Endorsing a symptom that doesn't really occur suggests malingering, not confusion about memory.`,
 `Embed one or two atypical items among genuine ones, and interpret with care.`);
T('soundings','Soundings','va',[5],
 `Graded probes that gauge a patient's motivation or conviction, like a sailor measuring water depth (Havens).`,
 `Tests how deep a commitment or belief goes, step by step.`,
 `Move from mild to stronger probes: "And if... would that change things?"`);

/* Ch. 6: The person beneath the diagnosis */
T('parataxic','Parataxic distortion','pb',[6],
 `Sullivan: perceiving another person through unconscious templates from earlier relationships, rather than as they are.`,
 `The patient sees someone from their past in you. It is Sullivan's interpersonal term for transference-like distortions.`,
 `Notice when the patient's reactions fit someone else better than they fit you.`);
T('intersubj','Intersubjectivity','pb',[6],
 `Clinical data are jointly constructed by both participants' subjectivities (Ogden).`,
 `The data depend on the dyad, not just the patient.`,
 `Ask: What might this patient tell a different interviewer, and why?`);
T('reliablyinvalid','Reliably invalid interviewing','pb',[6],
 `Consistent interviewing habits that produce wrong data, such as negative questions, cannon questions, or too few behavioral incidents.`,
 `The "instrument" is consistent, but consistently wrong.`,
 `Audit your own phrasing for leading and lumped questions.`);
T('interpers','Interpersonal perspective','pb',[6],
 `Understanding a person through how they believe others see them (Whitehorn, Sullivan).`,
 `Asks how others see the patient, rather than what their experience feels like.`,
 `"How would your best friend describe you?"`);
T('phenom','Phenomenological inquiry','pb',[6],
 `Exploring what it is like to be this person, often through the senses.`,
 `Aims at lived, sensory experience rather than symptoms or others' views.`,
 `"When it's at its worst, what does a morning look and feel like?"`);
T('presentsol','Presenting solutions','pb',[6],
 `What the patient has already tried that has helped.`,
 `Focused on the patient's own existing solutions, not an imagined future.`,
 `"What have you already tried that made things even a little better?"`);
T('strengths','Wellness triad: strengths','pb',[6],
 `Character traits, such as kindness, persistence, humor, or hope (VIA strengths).`,
 `Who the person is. Skills are what they can do; interests are what they enjoy.`,
 `"What would your friends say is your best quality?"`);
T('skills','Wellness triad: skills','pb',[6],
 `Teachable abilities, such as carpentry, listening, or organizing.`,
 `Something learned and done well, not a character trait.`,
 `"What are you good at?"`);
T('interests','Wellness triad: interests','pb',[6],
 `Pastimes and passions the person enjoys.`,
 `What they love doing, regardless of skill.`,
 `"What do you do for fun, or what used to bring you joy?"`);
T('kulturbrille','Kulturbrille','pb',[6],
 `Boas: the "cultural glasses" through which everyone, including the clinician, sees the world.`,
 `Your own cultural lens shaping what seems normal, rather than a prejudice about a specific group.`,
 `Ask: Is this a problem, or just different from how I was raised?`);

/* Ch. 7: Assessment and planning */
T('primsec','Primary and secondary delineation','ap',[7],
 `First identifying broad diagnostic regions, such as mood or psychosis, then specific diagnoses within them.`,
 `Broad region first, then specifics, so whole regions don't get missed.`,
 `Screen every major diagnostic region before settling on a single diagnosis.`);
T('vcode','V-codes (other conditions)','ap',[7],
 `Conditions not attributable to a mental disorder that may still be a focus of clinical attention.`,
 `A real problem worth treating, without a psychiatric diagnosis.`,
 `Document relational, occupational, and other stressors even when no disorder is present.`);
T('intrawing','Intra-wing intervention','ap',[7],
 `In matrix treatment planning, treating a wing's problem from within that same wing.`,
 `Same wing in and out, such as medication for a biological depression.`,
 `List intra-wing options for each problem, then look for inter-wing ones.`);
T('interwing','Inter-wing intervention','ap',[7],
 `Treating a wing's problem from a different wing.`,
 `The intervention lives in one wing; the target problem lives in another.`,
 `For each problem, ask which other wings could help.`);
T('healingmatrix','Healing matrix effect','ap',[7],
 `A change in one wing that improves another wing.`,
 `A positive ripple, not the intervention itself.`,
 `Expect and point out healing ripples; they build hope.`);
T('damagingmatrix','Damaging matrix effect','ap',[7],
 `A change in one wing that harms another wing.`,
 `A negative ripple, often an unintended side effect.`,
 `Before each intervention, ask what it could disturb in other wings.`);
T('redherring','Red herring effect','ap',[7],
 `A problem in one wing that appears to originate in another.`,
 `The source is in a different wing than it seems, such as medical illness presenting as depression.`,
 `When treatment isn't working, ask whether you're treating the wrong wing.`);
T('matrixq','Matrix question','ap',[7],
 `"How do you think your life might change if...?", inviting the patient to imagine ripple effects across wings.`,
 `Asks about the consequences of one specific change. The miracle question imagines everything solved.`,
 `"How might your life change if the panic attacks stopped?"`);
T('cp_lonely','Core pain: loneliness','ap',[7],
 `The pain of isolation and disconnection.`,
 `Centered on being alone or left, rather than on being judged or unworthy.`,
 `Watch for dependence on the clinician, and build other connections.`);
T('cp_worthless','Core pain: worthlessness','ap',[7],
 `The belief that one has no value or can't cope.`,
 `About the self being inadequate, rather than about others rejecting or leaving.`,
 `Small, achievable tasks and cognitive work can chip away at it.`);
T('cp_reject','Core pain: rejection','ap',[7],
 `The pain of being, or expecting to be, rejected by others.`,
 `Expects others' rejection; often shows up as preemptive defensiveness.`,
 `Explicitly reassure: "You're helping me understand you better."`);
T('cp_internal','Core pain: loss of internal control','ap',[7],
 `The fear of losing control of one's own impulses, emotions, or mind.`,
 `The threat is inside the person. Loss of external control is about others controlling them.`,
 `Check in about control directly when the patient feels unstable.`);
T('cp_meaning','Core pain: loss of meaning','ap',[7],
 `The pain of feeling life lacks purpose or significance.`,
 `About purpose, not about relationships or competence.`,
 `Explore and nurture sources of meaning as a treatment resource.`);

/* Ch. 8: Nonverbal behavior */
T('emblem','Emblem','nv',[8],
 `A nonverbal signal with a culturally agreed meaning, such as a thumbs-up or a shrug.`,
 `Stands in for words and means the same thing to anyone in the culture.`,
 `Remember that emblems vary across cultures.`);
T('illustrator','Illustrator','nv',[8],
 `A gesture that clarifies speech, by pointing or by outlining a shape or size.`,
 `Accompanies words to show what they mean.`,
 `Notice when illustrators disappear, as can happen in depression.`);
T('regulator','Regulator','nv',[8],
 `A movement that manages turn-taking and conversational flow, such as eye contact at the end of a statement or a head nod.`,
 `Manages whose turn it is to talk.`,
 `Use nods to invite more; use eye contact and pauses to signal your turn.`);
T('adaptor','Adaptor','nv',[8],
 `A mostly unconscious comfort behavior, such as touching the face, picking nails, or rolling a pen.`,
 `Self-soothing, usually outside awareness. A cut-off specifically blocks out stress.`,
 `A rise in adaptors can signal rising anxiety around a topic.`);
T('affdisplay','Affective display','nv',[8],
 `A facial movement expressing emotion, sometimes as a fleeting micro-expression.`,
 `The face showing a feeling, whether or not words admit it.`,
 `Watch for brief expressions that contradict the words.`);
T('cutoff','Cut-off','nv',[8],
 `A nonverbal adaptor that shuts out environmental stress, such as averting or closing the eyes (evasive, shifty, stuttering, or stammering eye).`,
 `Blocks out input. Exaggerated or odd cut-offs may suggest psychosis.`,
 `Note which topics trigger cut-offs; they map the patient's stress points.`);
T('proxemics','Proxemics','nv',[8],
 `The study of how people use space and distance (Hall).`,
 `About distance and space, not movement or voice.`,
 `Sit about 4 to 6 feet away, slightly angled, without a desk between you.`);
T('kinesics','Kinesics','nv',[8],
 `The study of body movement: posture, gestures, facial expression, and gaze.`,
 `About how the body moves, not how far apart people are or how words sound.`,
 `Review your own posture and gestures on video.`);
T('paralanguage','Paralanguage','nv',[8],
 `How words are said: tone, pitch, loudness, rate, rhythm, and fluency.`,
 `The voice beyond the words.`,
 `Listen for how "I'm fine" is said, not just that it was said.`);
T('immediacy','Immediacy','nv',[8],
 `The felt warmth, closeness, and involvement created by nonverbal behavior.`,
 `The overall effect of distance, lean, gaze, nods, and voice combined.`,
 `Raise it for withdrawn patients; lower it for paranoid or escalating ones.`);
T('respzone','Responsive zone','nv',[8],
 `The distance at which the patient is comfortable and your movements, like a gentle forward lean, still register.`,
 `Specific to each patient: larger for paranoid patients, closer for withdrawn or hard-of-hearing ones.`,
 `Adjust your seat until the patient seems at ease but still responds to your nods and lean.`);
T('incongruence','Incongruent paramessages','nv',[8],
 `Conflict among the channels of a message (words, tone, posture, face), often signaling ambivalence (Grinder and Bandler).`,
 `The channels disagree with each other, rather than one single display.`,
 `Treat incongruence as a road sign to explore, now or later.`);
T('kinrecip','Kinesic reciprocal','nv',[8],
 `An escalating shared behavior pattern, such as courting, parenting, or dominance, that the clinician may unconsciously continue (Scheflen).`,
 `A social script both people fall into, not a single gesture.`,
 `Ask: Am I being pulled into a role (rescuer, parent, suitor, rival)? Then step out of it.`);
T('phantompres','Phantom presence effect','nv',[8],
 `The reduced immediacy of a clinician who is only an image on a screen.`,
 `Video keeps face and voice but loses real presence, space, and true eye contact.`,
 `On video, slightly exaggerate nods and warmth, and look at the camera when it matters.`);
T('nakedcomm','Naked communication','nv',[8],
 `The unsettling absence of all nonverbal cues in text or chat interviewing.`,
 `Only words and response timing remain; even the voice is gone.`,
 `Ask more often how the patient is feeling, and confirm your reading of short replies.`);

const Q_CYC=`Where in the empathy cycle did empathy break down?`;
const Q_VAL=`How would you classify this empathic statement?`;
const Q_BLEND=`Which method of gauging blending is this?`;
const Q_ALLY=`Which element of Borden's alliance is being built?`;
const Q_GEN=`Which component of genuineness is the patient describing?`;
const Q_PHASE=`Which phase of the interview is this?`;
const Q_DOC=`What type of verbalization is this, on the Degree of Openness Continuum?`;
const Q_PAT=`Which problem interview pattern is this?`;
const Q_REGION=`What kind of region is this stretch of the interview?`;
const Q_EXP=`How is this region being explored?`;
const Q_GATE=`What kind of gate is this?`;
const Q_VT=`Which validity technique is this?`;
const Q_TRIAD=`Which part of the wellness triad does this reveal?`;
const Q_PAIN=`Which core pain seems most prominent?`;
const Q_MTX=`In matrix treatment planning, what is this?`;
const Q_NVT=`Which type of nonverbal behavior is this?`;
const Q_NVA=`Which area of nonverbal communication does this involve?`;

V.push(
/* Ch. 1 */
{id:'en01',t:'feedwander',d:['unipolar','freefac','naivete'],q:`Which interactional process is this?`,x:`O: A resident asks a patient about her mood. She shifts to her son's doctors; he starts writing quickly and says, "I'm sure." She moves on to her husband, and he asks, "What does your husband do for work?" Ten minutes later he still has no data on her depression.`,
 w:`Writing as she veered, empathic filler, and a question about the new topic all rewarded the drift. Both participants built the tangential interview together.`},
{id:'en02',t:'unipolar',d:['feedwander','identification','imagproj'],q:`What is happening to the sense of rapport?`,x:`O: Five minutes into an intake, a resident feels she has never connected with anyone so quickly. The patient tells vivid, funny stories, answers before questions are finished, and talks for minutes at a time. The resident realizes she hasn't learned anything about his sleep or mood.`,
 w:`Rapid, one-sided openness that feels wonderful. The objective signs (long utterances, very short latency, interruptions) point toward hypomania or histrionic defenses.`},
{id:'en03',t:'selfreport',d:['blend_subj','blend_obj','unipolar'],q:Q_BLEND,x:`C: Before we stop, how has it been talking with me today?
P: (pause) Fine, I guess.
C: I noticed a little hesitation. Was there anything I said that didn't sit right?`,
 w:`Asking the patient directly, and treating a hesitant "fine" as an opening rather than an answer.`},
{id:'en04',t:'blend_obj',d:['blend_subj','selfreport','unipolar'],q:Q_BLEND,x:`O: With a quiet patient, the resident notices that her answers have grown from a few words to several sentences since he switched to gentle commands, and she now begins answering more quickly.`,
 w:`Rising duration of utterance and falling latency are measurable signs that engagement is improving.`},
{id:'en05',t:'blend_subj',d:['blend_obj','selfreport','unipolar'],q:Q_BLEND,x:`O: Midway through the interview, a resident realizes it has started to feel like a conversation rather than an interrogation, and she notices her own shoulders have relaxed.`,
 w:`Her own felt sense of the interview, used as a thermometer.`},
{id:'en06',t:'identification',d:['imagproj','highcert','associational'],q:`What is happening?`,x:`O: A resident going through her own divorce stays furious at her patient's husband for days after the session. In the next visit she tells the patient, "I know exactly how you feel. He had no right."`,
 w:`She has lost the "as if": she feels and endorses the patient's anger as her own and takes sides. Bring it to supervision.`},
{id:'en07',t:'ec1',d:['ec2','ec3','ec5'],q:Q_CYC,x:`O: Asked about her 7-year-old son, who has marked, permanent developmental problems, a mother insists he's "just independent-minded, like other kids," and explains his obvious speech difficulty as something boys outgrow.`,
 w:`Denial and rationalization keep the core pain from being expressed. Empathy aimed at the unspoken grief would likely feel intrusive right now.`},
{id:'en08',t:'ec2',d:['ec1','ec3','ec4'],q:Q_CYC,x:`O: Still rattled from a tense supervision meeting, a resident completely misses his patient's quiet mention that today is the anniversary of her brother's death.`,
 w:`The patient expressed it; the clinician's own state kept him from recognizing it.`},
{id:'en09',t:'ec3',d:['ec4','ec1','ec2'],q:Q_CYC,x:`P: I've got a hundred problems and no one to help.
C: It must be devastating to be so alone.
P: (glares) Maybe for some people.`,
 w:`The clinician recognized the feeling but conveyed it with too much certainty for a guarded patient.`},
{id:'en10',t:'ec4',d:['ec5','ec3','ec2'],q:Q_CYC,x:`O: A clinician offers a warm, accurate comment about how frightening the hospital must feel, but the patient, acutely delirious, can't follow what she said and asks again where he is.`,
 w:`The empathy was well conveyed; delirium kept the patient from perceiving it.`},
{id:'en11',t:'ec5',d:['ec4','ec1','ec3'],q:Q_CYC,x:`O: A patient with severe, regressive depression shows no visible reaction to the clinician's empathic remarks. At discharge she says, "You were the only one who seemed to understand."`,
 w:`She perceived the empathy, but the depression blocked any visible acknowledgment at the time.`},
{id:'en12',t:'highcert',d:['lowcert','highattr','reflecting'],q:Q_VAL,x:`P: When my partner left without warning, it was like the floor gave way.
C: (gently) Everything you counted on gave way at once.
P: (begins to cry) Yes. That's exactly it.`,
 w:`Declarative, as if the clinician knows; powerfully engaging with this trusting patient.`},
{id:'en13',t:'lowcert',d:['highcert','highattr','defusing'],q:Q_VAL,x:`P: My landlord won't call me back. People are cruel.
C: It sounds like it could feel pretty overwhelming.`,
 w:`"It sounds like... could" keeps certainty low, which is safer with a guarded patient.`},
{id:'en14',t:'highattr',d:['highcert','reflecting','metaphorpara'],q:Q_VAL,x:`P: After she left so suddenly, my whole life started to fall apart.
C: It sounds frightening to lose her so suddenly, a bit like losing your dad when you were young.`,
 w:`It names an unspoken feeling (fear) and links to history the patient didn't raise. Accurate, it signals deep perception; with a guarded patient, it can backfire.`},
{id:'en15',t:'reflecting',d:['highattr','metaphorpara','sensorypara'],q:Q_VAL,x:`P: I just feel like I'm being watched at work.
C: You feel like you're being watched.`,
 w:`The patient's own words, mirrored back. Very low attribution, which suits a possibly paranoid patient.`},
{id:'en16',t:'paranoidspiral',d:['feedwander','unipolar','ec4'],q:`What process is unfolding?`,x:`O: A suspicious patient corrects the resident's empathic remark. The resident tries again, more warmly and with more certainty. The patient grows curt, then hostile, then stands up to leave.`,
 w:`Each stronger empathic statement increases the intimacy he fears. The first disavowal was the cue to stop and switch to reflecting.`},
{id:'en17',t:'greasing',d:['highattr','naivete','defusing'],q:Q_TECH,x:`P: They've been putting devices in my walls.
C: What have you noticed?
P: Clicks at night. My mail's been opened.
C: Clicks at night. How do you make sense of it?`,
 w:`Interested, conversational, and non-empathic, with pure reflecting. It lets the delusion, and any danger in it, come out.`},
{id:'en18',t:'defusing',d:['highcert','reflecting','proc3'],q:Q_TECH,x:`P: You're 25 minutes late! What is going on here?
C: Who wouldn't be upset! I'm very late, and I truly apologize.`,
 w:`Strong agreement that the anger makes sense. Angry patients respond to high certainty, the reverse of guarded ones.`},
{id:'en19',t:'metaphorpara',d:['sensorypara','reflecting','highattr'],q:Q_TECH,x:`P: Every day I get up, go to work, come home, and nothing changes. I keep trying and getting nowhere.
C: Like running on a treadmill.
P: Yes, and I'm getting so tired of running.`,
 w:`One image captures the whole message, and the patient extends it, which gives the clinician something to build on.`},
{id:'en20',t:'sensorypara',d:['metaphorpara','reflecting','highcert'],q:Q_TECH,x:`P: I just can't see a way out. Everything looks bleak.
C: So the way you see it, there's no path forward right now. Does that look right to you?`,
 w:`Matches the patient's visual language in both the stem and the check-out.`},
{id:'en21',t:'naivete',d:['imagproj','identification','lookat'],q:`Which frame of mind is the resident using?`,x:`O: As a patient describes leaving his family to live in his van, the resident consciously sets aside her urge to classify or judge, and simply listens, trying to feel what his world is like.`,
 w:`Receptive listening with analysis and judgment suspended. Imaginative projection would be actively moving into his inner scene.`},
{id:'en22',t:'imagproj',d:['naivete','identification','somatic_emp'],q:`Which frame of mind is the resident using?`,x:`O: As a fisherman describes losing his boat, the resident actively imagines herself on the dock at dawn: the empty mooring, the smell of diesel, the silence. She keeps her own perspective while she does it.`,
 w:`Actively entering the patient's "inscape," like a poet, without losing the "as if."`},

/* Ch. 2 */
{id:'sf01',t:'selfsystem',d:['parade','ulterior','rehearsed'],q:`Which concept best explains her early minimizing?`,x:`P: I'm not really sure why I'm here. It's not a big deal. Everyone gets a little down.
O: Later in the interview she describes three months of barely leaving her bed.`,
 w:`Early on, the self-system protects her self-esteem from a stranger's judgment. As safety grows, the real story emerges.`},
{id:'sf02',t:'upr',d:['nondefensive','identification','gentleassume'],q:`What is the clinician conveying?`,x:`P: I've been taking money from my mother's purse to buy pills.
C: (steady, interested tone) Thank you for telling me that. Help me understand how it started.`,
 w:`Caring for the person while suspending moral judgment of the behavior, which keeps disclosure flowing.`},
{id:'sf03',t:'parade',d:['selfsystem','cultransf','mad_opp'],q:`What has this patient likely met before arriving?`,x:`P: Go ahead, give me the look. Every doctor does when I tell them how much I drink.`,
 w:`A history of judgmental reactions from others. Make sure your face isn't the next frown in the parade.`},
{id:'sf04',t:'nondefensive',d:['ulterior','blandness','upr'],q:`What quality is the clinician showing?`,x:`P: You look about twelve. Are you even a real doctor?
C: Fair question. I'm a psychiatry resident, and I work closely with an attending. What would help you feel comfortable working with me?`,
 w:`Curiosity instead of self-protection: no lecture, no wounded tone, and a turn toward the patient's concern.`},
{id:'sf05',t:'ulterior',d:['identification','transferential','blandness'],q:`What is quietly making the relationship unsafe?`,x:`O: A resident notices she keeps steering sessions toward topics where the patient compliments her insight, and she feels hurt when he cancels.`,
 w:`Her own need to be admired is shaping the conversation.`},
{id:'sf06',t:'blandness',d:['ulterior','responsiveness','parade'],q:`What went wrong?`,x:`O: Trying hard to stay neutral, a resident keeps a fixed, blank face and a monotone voice. After the session, the patient tells the front desk, "That doctor didn't like me."`,
 w:`Neutrality about judgment was mistaken for expressionlessness, which patients tend to read as dislike.`},
{id:'sf07',t:'consistency',d:['responsiveness','spontaneity','upr'],q:Q_GEN,x:`P: I trust you because you're the same every time. My last doctor was warm one week and cold the next.`,
 w:`Steady, predictable behavior across visits.`},
{id:'sf08',t:'responsiveness',d:['consistency','spontaneity','animation'],q:Q_GEN,x:`O: When a patient describes his daughter's graduation, the resident's face brightens; when he mentions his new diagnosis, her expression turns serious.`,
 w:`Her affect visibly responds to what the patient shares.`},
{id:'sf09',t:'factq',d:['gentleassume','sympamp','swingq'],q:`What type of question is this?`,x:`P: The panic just comes out of nowhere.
C: When it hits, do you notice your heart pounding, tingling in your fingers, or a fear that you might die?
P: Yes! All of that. How did you know?`,
 w:`A well-timed, concrete question that conveys expertise, and with it, safety.`},
{id:'sf10',t:'metacomm',d:['upr','immediacy','blend_obj'],q:`What is the name for the implicit message the patient picked up?`,x:`O: After the resident asks a few precise questions about her panic symptoms, the patient relaxes visibly.
P: You've seen this before, haven't you.`,
 w:`Beyond their literal content, the questions told her "this clinician knows this territory."`},
{id:'sf11',t:'miracle',d:['matrixq','existential','tick'],q:Q_TECH,x:`C: Suppose that tonight, while you're asleep, a miracle happens and the problems that brought you here are solved. When you wake up tomorrow, what's the first thing you'd notice?`,
 w:`De Shazer's solution-focused question: picturing the solved future surfaces goals.`},
{id:'sf12',t:'bgoals',d:['btasks','bbond','miracle'],q:Q_ALLY,x:`C: Before I suggest anything, what would you most like to be different a few months from now?
P: I want to be able to drive my kids to school again.`,
 w:`Agreeing on the destination.`},
{id:'sf13',t:'btasks',d:['bgoals','bbond','factq'],q:Q_ALLY,x:`C: There are a few ways we could work on the panic: a medication, a kind of therapy that practices facing the fear step by step, or both. Which of those feels like something you'd be willing to try?`,
 w:`Agreeing on the methods of treatment.`},
{id:'sf14',t:'bbond',d:['bgoals','btasks','consistency'],q:Q_ALLY,x:`P: I don't always like what you suggest, but I trust that you're on my side.`,
 w:`The relationship itself, strong enough to hold through disagreement.`},

/* Ch. 3 */
{id:'ds01',t:'ph_intro',d:['ph_open','ph_term','ph_close'],q:Q_PHASE,x:`C: Hi, I'm Dr. Reyes, one of the psychiatry residents. Would you prefer I call you Mr. Alvarez or Daniel?
P: Daniel's fine.
C: Before we start, I want you to know that what you share stays confidential, with a few safety exceptions I'll explain.`,
 w:`First contact through setting the stage: names, roles, confidentiality.`},
{id:'ds02',t:'ph_open',d:['ph_intro','ph_body','ph_close'],q:Q_PHASE,x:`C: What's been happening that brought you in?
O: For the next several minutes, the resident mostly listens, nodding and offering gentle prompts, while the patient describes the past few months.`,
 w:`Mostly nondirective listening while taking in the patient's perspective and mental state.`},
{id:'ds03',t:'ph_body',d:['ph_open','ph_close','ph_intro'],q:Q_PHASE,x:`C: Now I'd like to ask some more specific questions about your sleep, appetite, and energy, and then about alcohol and drug use.`,
 w:`The shift into structured data gathering across regions.`},
{id:'ds04',t:'ph_close',d:['ph_body','ph_term','ph_open'],q:Q_PHASE,x:`C: From what you've told me, this sounds like a depression. I'd like to go over some treatment options and hear what you think. What questions do you have for me?`,
 w:`Sharing impressions, answering questions, and planning together.`},
{id:'ds05',t:'ph_term',d:['ph_close','ph_intro','ph_body'],q:Q_PHASE,x:`O: Standing at the door:
C: I'm glad you came in today. I'll see you Tuesday at 3. If anything gets worse before then, call the clinic.`,
 w:`Final words that leave hope and secure the return visit.`},
{id:'ds06',t:'openq',d:['gentlecmd','qualq','swingq'],q:Q_DOC,x:`C: What has your first year of college been like?`,
 w:`A true open-ended question that can't be answered in a word.`},
{id:'ds07',t:'gentlecmd',d:['openq','swingq','facilstmt'],q:Q_DOC,x:`C: Tell me about your relationship with your sister.`,
 w:`An open statement, not a question, so it can't be answered "no."`},
{id:'ds08',t:'swingq',d:['gentlecmd','qualq','closedq'],q:Q_DOC,x:`C: Can you describe what the panic feels like?`,
 w:`"Can you...?" is technically answerable "No." It swings open only if engagement is good.`},
{id:'ds09',t:'qualq',d:['openq','swingq','closedq'],q:Q_DOC,x:`C: How's your sleep?`,
 w:`Open in form, but easily answered "Fine."`},
{id:'ds10',t:'stmtinq',d:['closedq','negstmt','swingq'],q:Q_DOC,x:`C: You moved back home last spring?`,
 w:`A statement said as a question: leading, and usually answered yes or no.`},
{id:'ds11',t:'negstmt',d:['stmtinq','closedq','cannon'],q:Q_DOC,x:`C: So you're not having any thoughts of hurting yourself?`,
 w:`Phrased to expect "no." Especially risky for lethality questions; ask neutrally instead.`},
{id:'ds12',t:'facilstmt',d:['gentlecmd','reflecting','openq'],q:Q_DOC,x:`P: ...and then my boss called me into her office.
C: Mm-hmm. Go on.`,
 w:`A brief prompt that keeps the patient going without directing content.`},
{id:'ds13',t:'closedq',d:['stmtinq','qualq','closedstmt'],q:Q_DOC,x:`C: Did you drink anything last night?`,
 w:`A direct question with a one-word answer.`},
{id:'ds14',t:'closedstmt',d:['gentlecmd','closedq','gate_intro'],q:Q_DOC,x:`C: Let's start with your mood.`,
 w:`It directs without asking anything, so it sits at the closed end of the continuum.`},
{id:'ds15',t:'piggyback',d:['highcert','gentlecmd','facilstmt'],q:Q_TECH,x:`P: My supervisor yells at me in front of everyone.
C: That sounds humiliating. Tell me more about what she's been doing.`,
 w:`Empathy leads and an open request carries the momentum, so empathy doesn't stall a quiet patient.`},
{id:'ds16',t:'shutdown',d:['wandering_int','rehearsed','loquacious'],q:Q_PAT,x:`O: A patient answers every question in two or three words, after long pauses, looking at the floor. The resident notices she's asking more and more closed questions.`,
 w:`Short answers, long latencies, little eye contact, and a clinician being pulled toward closed questions.`},
{id:'ds17',t:'wandering_int',d:['shutdown','rehearsed','loquacious'],q:Q_PAT,x:`O: A patient talks at length with good eye contact, starts answering before questions are finished, and hops from his job to his ex to a trip he took last year. The resident is nodding, saying "go on," and writing furiously.`,
 w:`Long answers, short latencies, and topic hopping, fed by the clinician's facilitation.`},
{id:'ds18',t:'loquacious',d:['wandering_int','rehearsed','shutdown'],q:Q_PAT,x:`C: How long does it take you to fall asleep?
O: The patient talks about sleep for six minutes: his mattress, the street noise, his college finals, his roommate's snoring. He never gives a number.`,
 w:`He stays on the topic, but buries it in irrelevant detail: the loquacious variant of the wandering interview.`},
{id:'ds19',t:'rehearsed',d:['wandering_int','loquacious','shutdown'],q:Q_PAT,x:`O: A patient with many prior admissions tells her story smoothly, using clinical terms and showing little emotion, almost word for word as it appears in her old chart.`,
 w:`A pat, well-worn narrative. Clinician and patient can drift into accepting half-truths together.`},
{id:'ds20',t:'affinterj',d:['sidetrack','piggyback','proc1'],q:Q_TECH,x:`O: Midway through a smooth, practiced account of his past hospitalizations:
C: Hold on a second. What was the worst moment of that last hospitalization for you?`,
 w:`Steering the rehearsed story toward an emotionally charged moment breaks the script.`},
{id:'ds21',t:'namingemo',d:['proc1','normalization','shameatt'],q:Q_TECH,x:`O: Asked about her marriage, a patient stops and looks away.
C: Sometimes when people stop there, it's because they feel embarrassed, or worried what I'll think, or a little afraid. Do any of those fit?`,
 w:`Naming a few possible emotions behind the stall and asking which fits (Morrison).`},

/* Ch. 4 */
{id:'fa01',t:'freefac',d:['transform','psychodyn','scouting'],q:Q_REGION,x:`P: My partner and I are on different planets lately.
O: For several minutes, the resident offers only nods, "uh-huh," and an occasional open prompt, deliberately letting the patient take the conversation wherever she wants.`,
 w:`A consciously nondirective stretch in which the patient chooses the direction.`},
{id:'fa02',t:'transform',d:['freefac','psychodyn','excursion'],q:Q_REGION,x:`P: Is there someone older I could see?
C: That's a reasonable question. Tell me what concerns you about seeing a resident.
O: They spend several minutes on her worries before returning to her history.`,
 w:`Time spent resolving a roadblock, approached with curiosity rather than defensiveness.`},
{id:'fa03',t:'psychodyn',d:['freefac','transform','scouting'],q:Q_REGION,x:`C: I notice you brought up your mother each time we talked about your boss. What do you make of that?
P: Huh. They both make me feel like I'm never good enough.
O: They spend the next few minutes on that pattern.`,
 w:`A stretch on how and why she responds as she does.`},
{id:'fa04',t:'scouting',d:['freefac','psychodyn','transform'],q:Q_REGION,x:`O: In the first seven minutes, the resident introduces herself, lets the patient describe his concerns freely, notes his mental state, and starts deciding which regions to cover next.`,
 w:`The introduction and opening together: surveying process and content to plan the body.`},
{id:'fa05',t:'stilted',d:['blended','excursion','split'],q:Q_EXP,x:`C: Sleep okay?
P: No.
C: Appetite?
P: Down.
C: Energy?
P: Low.
C: Concentration?
P: Bad.`,
 w:`Checklist-style questioning: efficient on paper, interrogating in the room.`},
{id:'fa06',t:'blended',d:['stilted','excursion','split'],q:Q_EXP,x:`C: Tell me what your nights have been like.
P: I fall asleep fine, then I'm up at 3.
C: What goes through your mind at 3?
P: Work, mostly. Whether I'll lose my job.
C: How has that worry affected your appetite and energy during the day?`,
 w:`Conversational, tracking the patient's answers while still covering the symptoms needed.`},
{id:'fa07',t:'excursion',d:['split','gate_spont','deadzone'],q:`What is the resident doing?`,x:`O: While exploring depressive symptoms, the patient mentions drinking to fall asleep. The resident asks two quick questions about how much and how often, then says, "Let's come back to your sleep for a moment."`,
 w:`A brief step out of the region, followed by an immediate return.`},
{id:'fa08',t:'split',d:['excursion','stilted','unguided'],q:`What has the resident done with this region?`,x:`O: Reviewing her transcript, a resident sees she asked about substance use early on, left it, and returned to finish it 25 minutes later.`,
 w:`One region explored in two separate places. That's fine, as long as it gets finished.`},
{id:'fa09',t:'pivot',d:['gate_spont','excursion','deadzone'],q:`What is this moment called in facilics?`,x:`P: My sleep's been bad... ever since my brother started using again, actually.
O: The resident pauses: follow the brother, or stay with sleep?`,
 w:`The patient has moved toward a new region, and the clinician must decide whether to follow.`},
{id:'fa10',t:'gate_spont',d:['gate_natural','gate_implied','gate_refer'],q:Q_GATE,x:`P: ...and honestly, the bigger problem is my drinking.
C: How do you mean?`,
 w:`The patient moved into the new region, and the clinician followed.`},
{id:'fa11',t:'gate_natural',d:['gate_implied','gate_spont','gate_phantom'],q:Q_GATE,x:`P: I've been so wound up I can barely sit still at night.
C: When you feel that wound up, do your thoughts ever race so fast you can't keep up with them?`,
 w:`The patient's last sentence (the cue) plus a transitional question into screening for mania.`},
{id:'fa12',t:'gate_manuf',d:['gate_natural','gate_implied','gate_intro'],q:Q_GATE,x:`P: Work's been awful.
C: When work is that stressful, how do things go at home?
P: Tense. We fight a lot.
C: When the fights get really heated, has anyone ever pushed or hit anyone?`,
 w:`A series of natural gates, each built on the last answer, leading smoothly to a delicate topic.`},
{id:'fa13',t:'gate_refer',d:['gate_natural','gate_implied','gate_spont'],q:Q_GATE,x:`C: Earlier you mentioned your uncle had "nerve problems." Tell me more about emotional problems in your family.`,
 w:`It refers back to something said earlier rather than the last sentence.`},
{id:'fa14',t:'gate_implied',d:['gate_phantom','gate_natural','gate_intro'],q:Q_GATE,x:`O: After finishing questions about the patient's anxiety, with no new cue from her:
C: Have you ever had times when you had to check things over and over, like the locks or the stove?`,
 w:`No direct cue, but anxiety and OCD are topically close, so the move doesn't jar.`},
{id:'fa15',t:'gate_phantom',d:['gate_implied','gate_intro','gate_refer'],q:Q_GATE,x:`P: ...so my sister and I finally talked it out, and it felt really good.
C: Have you ever been arrested?`,
 w:`An unconnected jump with no cue, reference, or announcement. Jarring and likely to disengage.`},
{id:'fa16',t:'gate_intro',d:['gate_phantom','gate_implied','gate_refer'],q:Q_GATE,x:`C: We've talked a lot about how you've been feeling. Now I'd like to switch gears and ask some questions about your medical history.`,
 w:`The transition is announced openly.`},
{id:'fa17',t:'gate_obs',d:['gate_spont','gate_natural','proc1'],q:Q_GATE,x:`O: While describing her father's illness, the patient's eyes fill with tears.
C: You look like you're welling up. What's coming up for you?`,
 w:`Cued by nonverbal behavior rather than by words.`},
{id:'fa18',t:'deadzone',d:['unguided','split','wandering_int'],q:`Which time-management error is this?`,x:`O: After a good start, a resident spends minutes 10 through 25 on a fascinating story about the patient's travels abroad, then races through suicide assessment, substance use, and family history in the last ten minutes.`,
 w:`The second quarter was lost to interesting but unhelpful material, forcing a sprint at the end.`},
{id:'fa19',t:'unguided',d:['deadzone','split','gate_phantom'],q:`What problem does the supervisor identify?`,x:`O: Reviewing a tape, a supervisor notes the interview jumps from sleep to family to work to sleep to medical history to work again, with no region finished, although the patient was easy to talk with.`,
 w:`A hodgepodge from poor focusing; the patient wasn't the problem.`},

/* Ch. 5 */
{id:'va01',t:'anchor',d:['tagging','behinc','verbalvideo'],q:Q_VT,x:`C: Think back to your daughter's birthday party in June. How was your mood around then?`,
 w:`A memorable event anchors recall.`},
{id:'va02',t:'tagging',d:['anchor','denialspec','sympamp'],q:Q_VT,x:`P: I tried some antidepressant a few years ago, I can't remember which.
C: Was it Prozac, Zoloft, Paxil, or something else?`,
 w:`A list helps the patient recognize a forgotten fact.`},
{id:'va03',t:'exaggeration',d:['sympamp','shameatt','normalization'],q:Q_VT,x:`P: I'm so ashamed. I yelled at my sister last week.
C: (lightly) So you didn't burn her house down or anything?
P: (laughs) No, nothing like that. I just raised my voice.`,
 w:`Humorous overstatement shrinks disproportionate shame. Use it only when the shame clearly outweighs the act.`},
{id:'va04',t:'defterms',d:['clarnorms','factq','tagging'],q:Q_VT,x:`C: Have you ever had a panic attack? By that I mean a sudden wave of intense fear, with your heart racing, that peaks within a few minutes.`,
 w:`The clinician defines the clinical term so the answer means the same thing to both of them.`},
{id:'va05',t:'clarnorms',d:['defterms','gentleassume','normalization'],q:Q_VT,x:`C: When I ask whether your father hit you, I mean slaps, pushes, or being hit with a belt, even if back then it was just considered discipline.`,
 w:`Spells out what counts, because family norms may have treated it as normal.`},
{id:'va06',t:'normalization',d:['shameatt','gentleassume','sympamp'],q:Q_VT,x:`C: Sometimes when people are as depressed as you've been, they have thoughts of killing themselves. Have you had thoughts like that?`,
 w:`Others have had the same experience, so the patient isn't alone in it.`},
{id:'va07',t:'shameatt',d:['normalization','gentleassume','bragging'],q:Q_VT,x:`C: With all the pressure you've been under at work, has it ever gotten to the point where you lost your temper and hit someone?`,
 w:`Framed through this patient's own stress, which softens the shame of answering yes.`},
{id:'va08',t:'bragging',d:['shameatt','sympamp','exaggeration'],q:Q_VT,x:`C: You obviously know how to handle yourself; you've worked security for years. How many fights have you been in?`,
 w:`A compliment invites the patient to show off, loosening disclosure of a negative behavior.`},
{id:'va09',t:'behinc',d:['gentleassume','defterms','verbalvideo'],q:Q_VT,x:`P: I lost it on her.
C: What exactly did you do?
P: I grabbed my keys and left for two days.`,
 w:`Asking for concrete facts replaced a vague label, and overturned the assumption of violence.`},
{id:'va10',t:'verbalvideo',d:['behinc','anchor','gate_manuf'],q:Q_VT,x:`C: Walk me through it. What happened right after you got home?
P: I went to the kitchen.
C: And then?
P: I poured a drink.
C: What did you do with the bottle after that?`,
 w:`Serial behavioral incidents reconstruct the event step by step. Watch for gaps where time goes missing.`},
{id:'va11',t:'gentleassume',d:['denialspec','catchall','normalization'],q:Q_VT,x:`C: What other drugs have you tried besides marijuana?`,
 w:`It presumes there are others, non-judgmentally, making disclosure easier than a yes-or-no question.`},
{id:'va12',t:'denialspec',d:['cannon','tagging','gentleassume'],q:Q_VT,x:`C: Have you ever used cocaine?
P: No.
C: What about pain pills you weren't prescribed?
P: ...A few times.
C: Methamphetamine?`,
 w:`Each item gets its own question, so each needs its own "no."`},
{id:'va13',t:'cannon',d:['denialspec','tagging','closedq'],q:`What validity problem does this question have?`,x:`C: Have you ever used cocaine, heroin, pills, meth, or acid?
P: No.`,
 w:`Lumping everything together invites one easy "no." Ask about each item separately.`},
{id:'va14',t:'catchall',d:['gentleassume','gate_intro','ph_term'],q:Q_VT,x:`C: Is there anything we haven't talked about that you think is important for me to know?`,
 w:`A safety net for whatever you didn't think to ask.`},
{id:'va15',t:'sympamp',d:['exaggeration','tagging','gentleassume'],q:Q_VT,x:`C: On your worst days, how many hours do you spend thinking about suicide: 8 hours, 12, 15?`,
 w:`Setting the range high means even a minimized answer ("maybe 4") reveals a serious problem.`},
{id:'va16',t:'bogus',d:['tagging','gentleassume','soundings'],q:Q_TECH,x:`C: When people talk to you, do you see their words spelled out in the air?
P: Yes, all the time.`,
 w:`An atypical symptom; endorsing it raises the question of feigning. Interpret alongside the whole picture.`},
{id:'va17',t:'soundings',d:['bogus','tagging','miracle'],q:Q_TECH,x:`C: Some people want to stop drinking completely; others just want to cut back. Where are you?
P: Cut back, I guess.
C: And if your wife told you she'd leave over it, would that change things?`,
 w:`Graded probes that measure how deep his motivation goes.`},

/* Ch. 6 */
{id:'pb01',t:'parataxic',d:['cultransf','intersubj','incorpprej'],q:`Which concept fits best?`,x:`O: A patient raised by a harsh, critical father keeps hearing her calm, gentle clinician's neutral questions as accusations.
P: You think I'm lazy, don't you?`,
 w:`She perceives the clinician through an earlier template rather than as he actually is.`},
{id:'pb02',t:'intersubj',d:['parataxic','reliablyinvalid','telescoping'],q:`Which concept is the supervisor describing?`,x:`O: Two residents interview the same patient on the same day. With the warm, unhurried one, she discloses past trauma; with the rushed, brisk one, she denies it. The supervisor notes the "data" were shaped by each dyad.`,
 w:`Clinical data are jointly constructed by both participants.`},
{id:'pb03',t:'reliablyinvalid',d:['intersubj','unguided','parataxic'],q:`What problem has she found in her interviewing?`,x:`O: Auditing her intakes, a resident realizes she asks every patient, "You're not suicidal, are you?" and has documented "denies SI" in all 40 charts.`,
 w:`A consistent habit producing consistently wrong data. Ask neutrally instead.`},
{id:'pb04',t:'interpers',d:['phenom','strengths','matrixq'],q:`What kind of inquiry is this?`,x:`C: How would your best friend describe you?
P: Loyal. Maybe too loyal.
C: And how do you think your coworkers see you?`,
 w:`Understanding the person through how they believe others see them.`},
{id:'pb05',t:'phenom',d:['interpers','imagproj','presentsol'],q:`What kind of inquiry is this?`,x:`C: When the depression is at its worst, what does your apartment look like? What does a morning feel like?`,
 w:`Exploring lived, sensory experience: what it's like to be this person.`},
{id:'pb06',t:'presentsol',d:['miracle','strengths','bgoals'],q:`What is the clinician asking about?`,x:`C: What have you already tried that has made things even a little better?
P: Walking the dog late at night helps me sleep.`,
 w:`The patient's own existing solutions, a strengths-based starting point for planning.`},
{id:'pb07',t:'strengths',d:['skills','interests','presentsol'],q:Q_TRIAD,x:`P: My friends say I'm the one who never gives up, even when things look hopeless.`,
 w:`A character trait (persistence).`},
{id:'pb08',t:'skills',d:['strengths','interests','cogability'],q:Q_TRIAD,x:`P: I'm good with engines. Give me any car and I'll get it running.`,
 w:`A teachable ability.`},
{id:'pb09',t:'interests',d:['strengths','skills','presentsol'],q:Q_TRIAD,x:`P: On weekends I mostly go birdwatching. I've kept a list since I was ten.`,
 w:`A pastime he loves.`},
{id:'pb10',t:'kulturbrille',d:['colorblind','tradprej','parataxic'],q:`Which concept is the resident recognizing?`,x:`O: A resident realizes her assumption that a 30-year-old man living with his parents must be "failing to launch" comes from her own upbringing, not from his family's norms.`,
 w:`Her own cultural glasses were defining what's normal.`},

/* Ch. 7 */
{id:'ap01',t:'primsec',d:['matrixq','redherring','intrawing'],q:`Which diagnostic strategy is she using?`,x:`O: Before deciding between major depression, persistent depressive disorder, and bipolar II, a resident first establishes that the patient's problems sit mainly in the mood disorders region, with possible anxiety, and screens the other major regions.`,
 w:`Broad regions first, then specific diagnoses within them.`},
{id:'ap02',t:'vcode',d:['primsec','redherring','damagingmatrix'],q:`How would these problems be classified?`,x:`O: A woman with no psychiatric disorder seeks help for constant conflict with her teenage son and a recent job loss. The resident documents these as the focus of clinical attention.`,
 w:`Real problems worth attention, without a mental disorder.`},
{id:'ap03',t:'intrawing',d:['interwing','healingmatrix','redherring'],q:Q_MTX,x:`O: A patient's severe biological depression is treated with an antidepressant.`,
 w:`Biological problem, biological intervention: same wing.`},
{id:'ap04',t:'interwing',d:['intrawing','healingmatrix','redherring'],q:Q_MTX,x:`O: To help a patient's chronic self-loathing, the clinician encourages her to return to her church choir, where she says she feels valued.`,
 w:`A psychological problem treated from the worldview wing.`},
{id:'ap05',t:'healingmatrix',d:['damagingmatrix','interwing','redherring'],q:Q_MTX,x:`O: After his depression responds to medication, a father starts going to his son's games again, and his marriage noticeably improves.`,
 w:`A change in one wing helped others: a positive ripple.`},
{id:'ap06',t:'damagingmatrix',d:['healingmatrix','redherring','intrawing'],q:Q_MTX,x:`O: A patient's new antipsychotic causes major weight gain. She feels ashamed, stops going to her support group, and her relationship with her partner deteriorates.`,
 w:`A change in the biological wing harmed the psychological and dyadic wings.`},
{id:'ap07',t:'redherring',d:['damagingmatrix','primsec','interwing'],q:Q_MTX,x:`O: A patient's "treatment-resistant depression" turns out to be caused by untreated hypothyroidism.`,
 w:`The problem appeared psychological but originated in the biological wing.`},
{id:'ap08',t:'matrixq',d:['miracle','bgoals','presentsol'],q:Q_TECH,x:`C: How do you think your life might change if the panic attacks stopped?
P: I'd start driving again, and I'd probably see my friends more.`,
 w:`Invites the patient to imagine ripple effects of one specific change.`},
{id:'ap09',t:'cp_lonely',d:['cp_reject','cp_worthless','cp_meaning'],q:Q_PAIN,x:`P: When my partner falls asleep before me, I feel completely abandoned. I hate being the only one awake in the house.`,
 w:`Centered on being alone and left.`},
{id:'ap10',t:'cp_worthless',d:['cp_lonely','cp_reject','cp_meaning'],q:Q_PAIN,x:`P: I can't cope with anything. Other people manage jobs and kids. I can't even manage the laundry. I'm useless.`,
 w:`The self as inadequate. Small, achievable tasks can begin to counter it.`},
{id:'ap11',t:'cp_reject',d:['cp_lonely','cp_worthless','seed_betrayed'],q:Q_PAIN,x:`O: The patient avoids eye contact, and when the clinician asks a question, she snaps, "That's a stupid thing to ask. You think I'm stupid?" Later she says everyone eventually gets sick of her.`,
 w:`She expects rejection and defends against it in advance.`},
{id:'ap12',t:'cp_internal',d:['seed_control','cp_meaning','seed_unknown'],q:Q_PAIN,x:`P: Sometimes I just explode. I've punched a wall and thrown a chair, and afterward I don't know where it came from. That scares me more than anything.`,
 w:`Fear of losing control of his own impulses. Loss of external control is about others controlling him.`},
{id:'ap13',t:'cp_meaning',d:['cp_lonely','cp_worthless','seed_failure'],q:Q_PAIN,x:`P: I get up, I go to work, I come home. I keep asking myself what any of it is for.`,
 w:`About purpose, not relationships or competence.`},

/* Ch. 8 */
{id:'nv01',t:'emblem',d:['illustrator','regulator','adaptor'],q:Q_NVT,x:`O: Asked how her week went, a patient says nothing and gives a thumbs-down.`,
 w:`A gesture with a culturally agreed meaning that replaces words.`},
{id:'nv02',t:'illustrator',d:['emblem','regulator','affdisplay'],q:Q_NVT,x:`O: Describing the lump he found, a patient holds his thumb and forefinger about an inch apart.`,
 w:`A gesture that clarifies what he's saying.`},
{id:'nv03',t:'regulator',d:['illustrator','emblem','adaptor'],q:Q_NVT,x:`O: As she finishes each point, the patient looks up and pauses, signaling the clinician's turn. The clinician nods, and she continues.`,
 w:`Movements that manage turn-taking.`},
{id:'nv04',t:'adaptor',d:['emblem','illustrator','cutoff'],q:Q_NVT,x:`O: While discussing his finances, a patient keeps picking at his nails and rolling a pen between his fingers, apparently unaware of it.`,
 w:`Unconscious comfort behaviors, often rising with anxiety.`},
{id:'nv05',t:'affdisplay',d:['adaptor','emblem','illustrator'],q:Q_NVT,x:`O: When her ex-husband is mentioned, a fleeting look of disgust crosses the patient's face just before she says she "has no feelings about him at all."`,
 w:`A brief facial expression of emotion, here contradicting her words.`},
{id:'nv06',t:'cutoff',d:['adaptor','regulator','affdisplay'],q:Q_NVT,x:`O: Asked about the night of the accident, the patient glances away and back again and again, then stares at the floor as if studying something invisible.`,
 w:`Eye cut-offs (shifty, then evasive eye) block out stress. Exaggerated cut-offs can suggest psychosis.`},
{id:'nv07',t:'proxemics',d:['kinesics','paralanguage','immediacy'],q:Q_NVA,x:`O: A suspicious patient slides his chair back each time the resident leans forward, until there's about eight feet between them.`,
 w:`Use of space and distance.`},
{id:'nv08',t:'kinesics',d:['proxemics','paralanguage','immediacy'],q:Q_NVA,x:`O: Reviewing a session video, a supervisor focuses on the resident's posture, gestures, and facial expressions, and on how the patient's posture began to mirror hers.`,
 w:`Body movement: posture, gesture, face.`},
{id:'nv09',t:'paralanguage',d:['kinesics','proxemics','emblem'],q:Q_NVA,x:`O: The patient says "I'm fine" in a flat, quiet, slow voice that trails off at the end.`,
 w:`How the words were said, beyond the words themselves.`},
{id:'nv10',t:'immediacy',d:['proxemics','respzone','regulator'],q:`What has the resident increased?`,x:`O: Moving out from behind her desk, sitting at an angle about five feet away, and leaning slightly forward with relaxed nods, a resident notices her withdrawn patient start to talk more.`,
 w:`The combined warmth and involvement conveyed nonverbally.`},
{id:'nv11',t:'respzone',d:['immediacy','proxemics','kinrecip'],q:`Which concept is she applying?`,x:`O: A resident learns that a paranoid patient is comfortable only when she sits farther away than usual, while an elderly, withdrawn patient doing a cognitive exam needs her closer and speaking louder.`,
 w:`The patient-specific distance where comfort and responsiveness overlap.`},
{id:'nv12',t:'incongruence',d:['affdisplay','cutoff','paralanguage'],q:`What should the clinician notice?`,x:`O: A patient says she hates her boyfriend and will never go back, but in a resigned, pouting tone, palms up in her lap, with no sign of anger.`,
 w:`Words and nonverbal channels disagree, an early clue to ambivalence worth exploring.`},
{id:'nv13',t:'kinrecip',d:['immediacy','regulator','transferential'],q:`What pattern is the clinician being pulled into?`,x:`O: A young patient fumbles helplessly with her microphone and glances up. The clinician immediately leans over and fixes it for her. Later, strong dependent traits emerge.`,
 w:`A parenting reciprocal: the patient began the script, and the clinician unconsciously continued it.`},
{id:'nv14',t:'phantompres',d:['nakedcomm','respzone','proxemics'],q:`Which effect is she compensating for?`,x:`O: On video visits, a resident notices patients seem less engaged than in person, though her words are the same. She starts slightly exaggerating her nods and warmth.`,
 w:`Being only an image on a screen reduces felt presence and immediacy.`},
{id:'nv15',t:'nakedcomm',d:['phantompres','paralanguage','cutoff'],q:`What is the counselor up against?`,x:`O: On a crisis text line, a counselor can't tell whether a teenager's one-word replies mean anger, sarcasm, or despair. There is no face or voice to read, only words and how long each reply takes.`,
 w:`All nonverbal cues are gone. Check your reading more often.`}
);

/* ===================== Clinical interviewing, Part 2: Shea Ch. 9–15 ===================== */

/* Ch. 9: Mood disorders */
T('pdd','Persistent depressive disorder','md',[9],
 `Depressed mood most of the day, more days than not, for at least 2 years (1 year in youth), with a few other depressive symptoms and never more than 2 symptom-free months.`,
 `Duration and low intensity set it apart: a chronic, grinding course rather than a discrete episode. DSM-5 merged chronic major depression and dysthymia into it.`,
 `"When was the last time you felt like your normal self for more than a couple of months?"`);
T('melancholic','Melancholic features','md',[9],
 `A severe depressive specifier: near-total loss of pleasure or lack of reactivity, plus features such as worse mornings, waking 2 or more hours early, marked psychomotor change, weight loss, and excessive guilt.`,
 `The mood doesn't lift for good news, unlike atypical features, and mornings are the worst. More common in older adults.`,
 `Ask about early waking: "Do you wake before dawn, jolted out of sleep by worries, dreading the day?"`);
T('anxdistress','Anxious distress specifier','md',[9],
 `Prominent tension, restlessness, worry, or fear that something awful will happen during a depressive episode.`,
 `Anxiety riding on top of depression. Fawcett found that intense anxiety in depression raises suicide risk, so rating it is a safety question, not a courtesy.`,
 `Rate the anxiety from mild to severe, and follow severe anxiety with a careful suicide assessment.`);
T('atypfeat','Atypical features','md',[9],
 `A depressive specifier that requires mood reactivity, plus two of: weight gain or increased appetite, hypersomnia, leaden paralysis, and long-standing rejection sensitivity.`,
 `The mood still brightens with good events, unlike melancholia. More common in bipolar depression, so finding it should prompt a careful search for bipolar process.`,
 `"Does your mood lift when something good happens? Do your arms or legs ever feel heavy as lead?"`);
T('peripartum','Peripartum onset','md',[9],
 `A specifier for a mood episode that begins during pregnancy or within 4 weeks after delivery.`,
 `Defined by timing, not by the symptoms themselves.`,
 `Always place symptom onset against the pregnancy and delivery: "When did this start in relation to the birth?"`);
T('mania','Manic episode','md',[9],
 `A distinct period of abnormally elevated, expansive, or irritable mood with increased energy, lasting at least a week (or any length if hospitalized), with three or more accompanying symptoms and marked impairment, hospitalization, or psychosis.`,
 `Severity separates it from hypomania: marked impairment, hospitalization, or psychosis. Euphoria can flip to irritability or violence within seconds.`,
 `Look for early cues: invading personal space, false familiarity with strangers, showing off feats, grandiose delusions.`);
T('hypomania','Hypomanic episode','md',[9],
 `The same symptoms as mania lasting at least 4 consecutive days, with an observable change in functioning but no marked impairment, no hospitalization, and no psychosis.`,
 `It differs from mania in severity and duration, not in kinds of symptoms. Patients often feel productive, yet "not myself."`,
 `"Have you had periods of suddenly feeling unusually happy and super-energized, and you couldn't explain why?" The "odd" phrasing reduces false positives.`);
T('bip1','Bipolar I disorder','md',[9],
 `A disorder requiring at least one manic episode; depressive and hypomanic episodes are common but not required.`,
 `A single past manic episode changes the diagnosis, even in a patient who is only depressed now. Past manias are often "sealed over," so ask and get collateral.`,
 `With every depressed patient: "Has there ever been a time, even years ago, when you felt just the opposite?"`);
T('bip2','Bipolar II disorder','md',[9],
 `At least one major depressive episode and at least one hypomanic episode, but never a full manic episode.`,
 `Hypomania only, never mania. Shea believes it is frequently missed, yet it can be uncovered in a first interview.`,
 `Screen for hypomania before any antidepressant; a mood stabilizer may transform a life.`);
T('mixedfeat','Mixed features specifier','md',[9],
 `A depressive episode with three or more manic or hypomanic symptoms most days, or a manic or hypomanic episode with three or more depressive symptoms.`,
 `Both poles in one episode. Partial mixed states are common; the old requirement of full mania plus full depression for a week described a rare presentation.`,
 `Missed mixed states can lead to antidepressants without a mood stabilizer, sometimes making things worse.`);
T('dysmania','Dysphoric mania','md',[9],
 `Shea's proposed mixed subtype dominated by intense angst, anger, inner drivenness, and unpleasant racing thoughts, often with little classic euphoria.`,
 `Angst out of proportion to mild neurovegetative symptoms, broad anger at the world, and a drive to act now. Often missed in late adolescents and young adults, and sometimes mislabeled as borderline personality.`,
 `"Do you feel driven to do something about it, and do it now, even if you don't think it's smart?"`);
T('agitdep','Agitated depression','md',[9],
 `Depression with high anxiety and restlessness in which the patient feels overwhelmed and helpless rather than driven.`,
 `The patient is befuddled when asked for solutions. In dysphoric mania the patient is driven to act and angry at the world.`,
 `"Do you have any ideas of how to solve your problems?" Befuddlement suggests agitated depression; specific plans suggest dysphoric mania.`);
T('substbp','Substance/medication-induced bipolar disorder','md',[9],
 `Hypomanic or manic symptoms that emerge only in response to a drug or treatment, such as an antidepressant, St. John's wort, light therapy, or ECT.`,
 `Usually resolves after the agent stops; if full symptoms persist beyond its effect (roughly a month), the diagnosis becomes bipolar I or II. Treatment-induced suicidal urges often feel foreign.`,
 `Before any antidepressant, look for current hypomanic signs, past hypomania or mania, and family bipolar history.`);
T('cyclothymia','Cyclothymic disorder','md',[9],
 `Over at least 2 years (1 in youth), frequent low-grade depressive and hypomanic periods that never meet full episode criteria.`,
 `Chronic, low-grade ups and downs without a full episode of either kind. Can resemble personality instability.`,
 `Build a mood-chart timeline with the patient and family.`);
T('rapidcyc','Rapid cycling specifier','md',[9],
 `A specifier for bipolar I or II with four or more mood episodes in 12 months, separated by remission or a switch in polarity.`,
 `It counts episodes within a year, not how fast moods change within a day.`,
 `A mood-chart timeline often clarifies the pattern faster than cross-sectional questions.`);
T('dmdd','Disruptive mood dysregulation disorder','md',[9],
 `Chronic irritability with frequent severe outbursts in children and adolescents.`,
 `Persistent irritability between outbursts in a young person, not discrete episodes. Bipolar disorder is reserved for episodic presentations.`,
 `Don't label ADHD, oppositional, or conduct problems as bipolar disorder.`);
T('pseudodementia','Pseudodementia','md',[9],
 `Depression that masquerades as dementia, with concentration and memory complaints that improve as the depression lifts.`,
 `The reverse trap, dementia masquerading as depression, also exists. A bedside cognitive exam helps sort them out.`,
 `Test attention and memory in every older patient with mood and concentration complaints.`);
T('nervios','Nervios and ataque de nervios','md',[9],
 `Cultural idioms of distress in many Latino/a communities; ataque de nervios (Puerto Rican, Dominican) involves trembling, crying or screaming, aggression or suicidal acts, and depersonalization.`,
 `A community's own wording for distress that may carry depression or anxiety.`,
 `"Some people describe this as nervios. Does that fit for you?"`);
T('heartidiom','Heart-based idioms of distress','md',[9],
 `Distress expressed as "problems of the heart" (many Middle Eastern contexts) or as being heartbroken (Hopi).`,
 `The heart is the seat of the feeling, not necessarily a cardiac complaint.`,
 `"When you say your heart is troubled, what do you mean?"`);
T('somaticidiom','Somatic idioms of distress','md',[9],
 `Distress described through bodily complaints such as fatigue, headaches, or general discomfort, common in many Chinese and other Asian contexts.`,
 `The body carries the message. Take the physical complaints seriously, then ask about mood, sleep, and enjoyment.`,
 `Explore the physical symptoms with interest, then ask: "How has your energy, sleep, and interest in things been?"`);

/* Ch. 10: The person beneath the mood disorder */
T('blockfuture','Blocking of the future','bm',[10],
 `Minkowski: the sense that change is possible disappears, so the future is emptied of meaning and motivation evaporates.`,
 `Time itself feels stuck, with every day a replica of the last. Hopelessness is the stated belief that things won't improve.`,
 `Ask what the patient sees ahead: "When you picture next month, what do you see?"`);
T('shrinkworld','Shrinking active world','bm',[10],
 `The part of the environment the person still engages contracts, like a "cataract of the mind," and reward and reinforcement are short-circuited.`,
 `The circle of things the person still notices and does gets smaller. You may not be inside it, so be more active and patient with slow responses.`,
 `"What have you stopped noticing or doing lately that you used to love?"`);
T('windowshade','Window shade response','bm',[10],
 `Shea's term for a compelling urge to close the eyes to shut out the world, even while standing or walking.`,
 `Not sleepiness: an oddly strong wish to shut out the world. Shea finds it a reliable marker of moderate to severe depression, and not typical of pure anxiety disorders such as GAD or OCD.`,
 `"When you're really depressed, do you have an intense urge to just shut your eyes, almost oddly strong, to shut the world out?"`);
T('caging','Ideational caging','bm',[10],
 `Thinking trapped in a small network of ruminative themes about the past, present, or future.`,
 `In the interview, the patient keeps returning to one topic or repeating the same question despite reassurance. Perseveration repeats an answer to different questions.`,
 `Acknowledge the concern, explain why you need other information, promise to return, and gently refocus.`);
T('cogtriad','Cognitive triad','bm',[10],
 `Beck: negative views of the world, the self, and the future.`,
 `Three targets at once: it's a pattern of thinking, not one distortion.`,
 `Listen for all three: "The world is rotten. I'm worthless. It will never improve."`);
T('immunelogic','Immunity to logic','bm',[10],
 `Minkowski: facts fail to change the depressed person's conclusions, however often they are presented.`,
 `The conclusion survives every piece of evidence. A single distortion, such as ignoring the positive, would still leave room for persuasion.`,
 `Don't argue with facts; empathize, and recognize that logic alone won't move the conclusion.`);
T('burden','Perceived burdensomeness','bm',[10],
 `Joiner: the belief "I am a burden to those I love," one of the most reliable interpersonal harbingers of a suicide attempt.`,
 `About being a weight on others, often alongside feeling intensely alone even when surrounded by caring people.`,
 `When it appears, ask directly about suicidal thoughts, plans, and intent.`);
T('learnedhelp','Learned helplessness','bm',[10],
 `Seligman: after inescapable adversity, exploration stops, and so does new learning and reward.`,
 `The person stops trying because past efforts didn't work. It is a process that keeps depression going.`,
 `Break the cycle with small, achievable steps and by adjusting your own pace and expectations.`);
T('hopeless','Hopelessness','bm',[10],
 `Beck: the conviction that nothing will improve and no help is available, more specific and sensitive for suicide potential than depressed mood itself.`,
 `A prediction of the future, not just a low mood. A blank answer to "what help do you see?" is an alarm.`,
 `"What do you see for yourself in the future? Are you feeling hopeless?" Then ask directly about suicide.`);
T('depanger','Anger in depression','bm',[10],
 `Depression seen as anger turned inward (Abraham and Freud); anger can also pierce apparent apathy and may show up as an attack on the interviewer.`,
 `A sudden flash of anger in a flat patient is a clue, not a distraction. A patient who quickly attacks you may be betraying depression.`,
 `Explore it gently: "You sound furious at him. Tell me more."`);
T('projdep','Projection in depression','bm',[10],
 `Self-hatred that becomes too painful and is experienced as others' hatred; paranoid ideas that mask a depression.`,
 `The persecutors are punishing someone who deserves it, and the patient may deny feeling depressed or suicidal. Depression and paranoia may alternate.`,
 `In a paranoid patient, consider underlying depression and suicide risk even when ideation is denied.`);
T('pseudohypo','Pseudo-hypomanic defense','bm',[10],
 `A cheerful, talkative front that conceals a depression.`,
 `Beware someone "too happy" while describing many stressors. A quivering chin or hesitant voice may give it away.`,
 `A quiet "As you talk, you seem sort of sad to me" can open a floodgate of tears.`);
T('reactivity','Mood reactivity in the interview','bm',[10],
 `Patients with atypical depression, dysthymia, or personality disorders can brighten temporarily when the interviewer is warm and extroverted, masking the depression.`,
 `The brightening is caused by you and by the setting, and it won't last. Weigh the history, not just the affect in the room.`,
 `Aim for a calming middle ground: gentle warmth and interested listening.`);
T('rejcycle','Withdrawal and rejection cycle','bm',[10],
 `A depressed person withdraws, which brings fewer smiles and less spontaneity; others read this as coldness and pull away, confirming the patient's view.`,
 `A loop between the patient and the people around them: withdrawal breeds rejection, and rejection breeds withdrawal.`,
 `"How do people seem to be treating you?" Naming the loop can open a therapeutic target.`);
T('irritloop','Irritability and guilt loop','bm',[10],
 `The patient snaps at a close friend or family member, feels guilty over the anger, becomes more depressed, and is more irritable still.`,
 `The cycle runs from anger to guilt to deeper depression and back to anger, all within the patient.`,
 `Naming the loop can relieve guilt and point to targets for treatment.`);
T('cutcry','Shutting down tears too soon','bm',[10],
 `Ending a patient's crying early, usually because another's pain is disturbing and we feel awkwardly helpless.`,
 `A clinician's discomfort, not the patient's need, ends the crying. Tears often lower defenses and bring out core pains and startling information.`,
 `Offer a tissue, wait, and say: "This would upset anyone. Take a moment; it's important we keep talking."`);
T('famstab','Depression as a stabilizing force in the family','bm',[10],
 `A depression that has become a stabilizing part of the family system, so that some relatives gain worth or power from the patient's illness and may unconsciously not want improvement.`,
 `The dynamics are usually unconscious and coexist with real love and exhaustion. They may surface spontaneously or need careful questioning.`,
 `Ask indirect questions, such as "Who in your family understands your depression, and who doesn't?"`);
T('overgeneral','Overgeneralization','bm',[10],
 `A distortion that turns one event into a rule: "Everything has fallen apart." "No one cares about me."`,
 `Words like everything, no one, and never. Testing a generalization is the interviewing skill for it.`,
 `Listen for it: distortions can reveal depression in somatic or atypical presentations.`);
T('catastroph','Catastrophizing','bm',[10],
 `A distortion in which a small event is blown up into disaster, such as a boss's frown meaning "I'll be fired soon."`,
 `A leap to the worst outcome from thin evidence, rather than a rule drawn from the past.`,
 `Ask: "What did you see that made you think that, and what else could it mean?"`);
T('ignorepos','Ignoring the positive','bm',[10],
 `A distortion that discounts successes and focuses only on failure, such as seeing a record sales season as meaningless because of one lost client.`,
 `The evidence is there and is screened out. The patient may still be open to facts, unlike in immunity to logic.`,
 `Gently point out the filter: "You mentioned the record quarter. How did that count?"`);
T('selfblame','Self-blame','bm',[10],
 `A distortion that assigns oneself responsibility for events one didn't control, with a sense of being fundamentally flawed.`,
 `Fault is placed on the self. In extreme forms it shades toward delusional guilt, which is fixed and held without doubt.`,
 `Ask: "Do you feel you're a good person, or do you have doubts?" (Carlat)`);

/* Ch. 11: Psychotic disorders */
T('hardsigns','Hard signs of psychosis','po',[11],
 `Delusions, hallucinations, and disorganized speech or behavior, the signs required for a DSM diagnosis of psychosis.`,
 `Unmistakable psychotic phenomena. Soft signs are subtle clues, and a person can be psychotic in a clinical sense before hard signs appear.`,
 `Denial of hard signs doesn't end the inquiry; look for soft signs and ask family.`);
T('softsigns','Soft signs of psychosis','po',[11],
 `Subtle clues, such as vagueness, odd or inappropriate affect, long latency, idiosyncratic or mildly illogical speech, and guardedness, that suggest a smoldering or emerging psychosis.`,
 `Several together suggest a smoldering process, but they usually don't prove psychosis and can reflect personality, such as schizotypal. Know cultural norms for eye contact first.`,
 `Ask about odd phrases: "When you say that, what do you mean?"`);
T('delusmood','Delusional mood','po',[11],
 `An early phase of an emerging delusion in which something feels wrong or strange, perceptions intensify, and the person feels vague unease or dread.`,
 `No belief has formed yet: just an unnerving sense that something is off or about to happen.`,
 `"Have things seemed strange or different lately, as if something is going on?"`);
T('delusperc','Delusional perception','po',[11,12],
 `A phase in which a normal perception suddenly acquires a special, personal significance, such as a stranger's gait being a "sign."`,
 `Schneider's first-rank symptom: a real perception given a private meaning. A fixed delusion of reference is the later, settled belief that events carry messages for oneself.`,
 `Ask what a perception meant: "What did it mean to you when he did that?"`);
T('delusidea','Delusional idea','po',[11],
 `The phase in which suspicions crystallize into a concrete belief: the patient now "knows" what is happening and why.`,
 `The belief is fixed and explained. Patients move in and out of the phases.`,
 `Ask how they know and how they account for what has happened.`);
T('brief_psy','Brief psychotic disorder','po',[11],
 `Psychotic symptoms lasting from 1 day to less than 1 month, with full return to prior functioning.`,
 `Duration is the key: it ends in under a month, and the person returns to baseline.`,
 `Follow the patient over time; the diagnosis may change if symptoms persist.`);
T('schizoform','Schizophreniform disorder','po',[11],
 `Schizophrenia's core symptoms lasting from 1 to less than 6 months; decline in functioning is not required.`,
 `Same symptoms as schizophrenia, but shorter than 6 months.`,
 `Document the exact duration of active symptoms.`);
T('schizo','Schizophrenia','po',[11],
 `Schizophrenia's core symptoms for at least 6 months, including at least 1 month of active symptoms.`,
 `Six months or more. Delusions alone don't make schizophrenia; another core symptom is needed. Search for mood episodes and family mood disorders first.`,
 `Ask about mood before the voices began: "How was your mood, sleep, and energy before you started hearing voices?"`);
T('delusional_d','Delusional disorder','po',[11],
 `One or more delusions lasting at least 1 month without schizophrenia's core criteria ever being met; behavior and functioning are otherwise fairly normal.`,
 `The patient seems strikingly normal until the delusion comes up. Subtypes are persecutory, jealous, erotomanic, somatic, grandiose, mixed, and unspecified.`,
 `Always assess intent to harm the supposed persecutor, and rule out medical causes.`);
T('schizoaff','Schizoaffective disorder','po',[11],
 `An uninterrupted illness with a major mood episode concurrent with schizophrenia's core symptoms, plus at least 2 weeks of delusions or hallucinations without a major mood episode.`,
 `Psychosis outlasts the mood episode. Shea notes the criteria are vague, and schizophrenia and psychotic bipolar disorder may lie on a continuum.`,
 `Treat the mood component too.`);
T('psychmood','Psychotic mood disorder','po',[11],
 `A mood disorder with psychosis, in which mood symptoms usually appear first and psychosis emerges later, at the peak.`,
 `The sequence is the clue: in schizophrenia, psychotic symptoms typically precede significant mood symptoms. Agitated psychotic mania can look exactly like acute schizophrenia.`,
 `Establish the sequence with family and prior records.`);
T('dts','Alcohol withdrawal delirium (DTs)','po',[11],
 `Delirium after stopping heavy, prolonged drinking, with tremor, sweating, rapid pulse, fluctuating confusion, and hallucinations of small animals, insects, or wires.`,
 `Rarely occurs under age 30. Withdrawal seizures in the first 2 days progress to DTs in over one in three. It can be fatal without prompt treatment.`,
 `Cut the interview short and get immediate medical evaluation.`);
T('delirium_hidden','Delirium hidden in a known psychosis','po',[11],
 `A delirium that is missed because the patient has a known psychotic illness, so confusion is blamed on the usual diagnosis.`,
 `Psychoses from a single cause look similar from episode to episode. If this one looks different from the usual pattern, suspect a new cause.`,
 `Test attention at the bedside (digit span), and treat any delirium as an urgent medical evaluation.`);
T('stimpsy','Stimulant or PCP psychosis','po',[11],
 `Paranoia, hallucinations, and bizarre behavior from drugs such as methamphetamine, cocaine, hallucinogens, PCP, or synthetic cathinones.`,
 `A full-blown psychosis emerging within hours in a previously normal person strongly suggests a drug cause. PCP: nystagmus, hypertension, and violence.`,
 `Ask about more than one substance, and whether a medication rather than a street drug might be responsible.`);
T('anticholdel','Anticholinergic delirium','po',[11],
 `Delirium caused by anticholinergic agents, especially in older adults: some sleep aids, cold medicines, antihistamines, antidepressants, antipsychotics, and antiparkinsonian drugs.`,
 `Look for the medication list, not just street drugs, and for overuse or a recent change.`,
 `Ask about prescription, over-the-counter, herbal, and borrowed medications, including doses and recent changes.`);
T('paraphrenia','Paraphrenia','po',[11],
 `Late-onset, organized, often mundane persecutory delusions with auditory hallucinations and relatively preserved personality.`,
 `New delusions after age 40 need a medical search. About 15 to 40% have hearing loss, and partition delusions are common.`,
 `Check hearing, vision, and cognition, and rule out a medical cause.`);
T('partition','Partition delusion','po',[11],
 `The belief that gas, poison, or radiation passes through walls or windows into one's home (Castle).`,
 `Over half of patients with paraphrenia report it. The content is the clue, not a specific disorder.`,
 `"Some people worry that something is being pushed into their homes through the walls, like gas or radiation. Any worries like that?"`);
T('micropsy','Micropsychotic episode','po',[11],
 `Brief, stress- or drug-triggered psychosis with abrupt onset and prompt return to baseline, seen in some personality disorders.`,
 `Hours to days, tied to stress, in a person with a personality disorder. Brief psychotic disorder is defined by its 1-day-to-1-month duration.`,
 `Look for the trigger, and consider borderline, schizotypal, histrionic, or unstable narcissistic structure.`);
T('interictal','Interictal phenomena','po',[11],
 `Changes between seizures in temporal lobe epilepsy, such as religiosity, hypergraphia, viscosity, and low libido.`,
 `The seizures are brief and stereotyped; the personality changes persist in between. Consider it with rapid-onset psychoses.`,
 `Ask about staring spells, lip smacking, and automatisms, and refer for a neurologic workup.`);
T('charlesbonnet','Charles Bonnet syndrome','po',[11],
 `Visual hallucinations in older adults with visual impairment, such as cataracts, with insight preserved.`,
 `The patient knows the figures aren't real, and has no other psychiatric symptoms.`,
 `Avoid needless antipsychotics; address the vision problem.`);
T('cultexp','Culturally sanctioned experience','po',[11],
 `A belief or experience, such as spirits, witchcraft, or ESP, that is shared and sanctioned in the patient's culture and is not by itself psychotic.`,
 `Isolated, with no prodrome and a prompt return to baseline. Members of the culture see psychotic versions as unusual, especially a belief twisted into something vicious.`,
 `Ask the family: "Is this common in your community, or would people find it unusual?"`);
T('deficit','Deficit (negative) symptoms','po',[11],
 `Lost functions in psychosis: diminished emotional expression, avolition, alogia, anhedonia, and asociality.`,
 `Often linger after voices and delusions fade. Families read them as laziness or defiance, and naming them as symptoms can relieve conflict and guilt.`,
 `"These may be symptoms of the illness itself, not a lack of effort."`);
T('openmind','Keeping an open mind','po',[11],
 `Answering "Do you believe me?" without agreeing or arguing: "It's an unusual story, so I want to hear more before deciding."`,
 `Neither endorses nor challenges the delusion. Endorse a delusion only if safety demands it, such as imminent violence toward you.`,
 `"My job is to understand your view. Tell me more about..." then return to an emotionally charged detail.`);
T('extentlogic','Uncovering extent and logic','po',[11],
 `Questions that reveal how far a delusion extends and its internal logic: "What has happened so far?" "Why would someone want to do this to you?"`,
 `Asks about the story and its reasoning, not about conviction or actions.`,
 `Ask with curiosity, not challenge.`);
T('distanceq','Determining distance (conviction)','po',[11],
 `Questions that test how firmly a belief is held: "How do you know this is the situation?" "How do you account for what has happened?"`,
 `Asks about how certain the patient is and how they explain things, to tell a delusion from an overvalued idea.`,
 `Ask without challenge, and note whether the patient can entertain another explanation.`);
T('actionsq','Finding actions taken','po',[11],
 `Asking what the patient has done in response to the delusion: "What have you done to protect or help yourself?"`,
 `Reveals danger: self-harming "treatments" or planned attacks. Asks about behavior, not belief.`,
 `Ask after empathizing: "That sounds very disturbing. What have you been doing to try to help yourself?"`);
T('scenarioq','Concrete scenario with the persecutor','po',[11],
 `Posing a specific scenario involving the feared person to gauge intent, such as "If he walked up and reached into a bag, what would you do?" (Resnick)`,
 `Tests what the patient would actually do. Answers range from "nothing, they're too powerful" to a pre-emptive "self-defense" attack.`,
 `Also ask about weapons, prior actions taken, and any steps already taken against the "persecutor."`);

/* Ch. 12: The person beneath the psychosis */
T('porousego','Porous ego','bo',[12],
 `Shea: the world seems to invade the self, and the self seems to leak out into the world.`,
 `Blurred boundaries between self and world, the underlying experience beneath Schneider's "made" experiences.`,
 `Imagine the experience: "It sounds like the walls between you and the world feel thin."`);
T('somaticpass','Somatic passivity','bo',[12],
 `Bodily sensations imposed from outside the patient's control.`,
 `The patient feels the sensation but believes someone else is making it happen. A tactile hallucination has no such outside agent.`,
 `"Do you ever feel something moving or squirming inside your body that someone is causing?"`);
T('madefeel','Made feelings','bo',[12],
 `Emotions experienced as imposed by an outside force: the feeling isn't the patient's own.`,
 `An emotion that belongs to someone else. Made impulses are urges, and made acts are actions.`,
 `"Have you felt something or someone was making you feel an emotion, like anger or sadness?"`);
T('madeimpulse','Made impulses','bo',[12],
 `Urges experienced as imposed by an outside force, such as an urge to yell at a stranger or hurt someone.`,
 `An urge, not an emotion or an act, and the patient doesn't feel it as their own.`,
 `"Does something seem to give you urges you'd never normally have?"`);
T('audthoughts','Audible thoughts','bo',[12],
 `Hearing one's own thoughts spoken aloud, as a voice or an echo (thought echo).`,
 `The thoughts themselves become voices. Thought broadcasting is the feeling that others can hear them.`,
 `"Do you ever hear your thoughts spoken out loud, as though a voice were saying them?"`);
T('argvoices','Voices arguing or discussing the patient','bo',[12],
 `Two or more voices debating or talking about the patient in the third person.`,
 `The voices talk to each other about the patient, not to the patient. A commenting voice narrates the patient's actions.`,
 `Ask whether the voices talk to the patient or among themselves.`);
T('funchallu','Functional hallucination','bo',[12],
 `A real sound that triggers a concurrent hallucination; both the trigger and the voice are heard at once.`,
 `The voice appears only while the real sound is present, such as running water. An illusion misreads the sound itself.`,
 `Ask what triggers the voices: "Is there any sound that makes them start?"`);
T('ambitendency','Ambitendency','bo',[12],
 `Starting and then abandoning an action, such as an extended handshake, a catatonic sign.`,
 `Repeated starts and withdrawals, not refusal. Negativism is opposition to being moved or asked.`,
 `Keep a gentle tone and calm pace; don't get louder when there's no response.`);
T('catatonia','Catatonia','bo',[12],
 `A syndrome of mutism, immobility, negativism, ambitendency, posturing, and waxy flexibility, in schizophrenia, mood disorders, dissociation, and medical illness such as autoimmune encephalitis.`,
 `A cluster of motor signs rather than one sign, and not a diagnosis by itself.`,
 `Assume the patient may be processing everything you say; explain what is happening, and don't touch in an initial interview.`);
T('tapoddlang','Tapping odd language','bo',[12],
 `Asking the patient what an odd or idiosyncratic phrase means, which can open psychotic material.`,
 `Curiosity about the patient's own words, not a question about a symptom. It worked when a student described a demon "invading" him.`,
 `"When you say that, what do you mean?" then "How does that tie in?"`);
T('resistq','Asking about ability to resist','bo',[12],
 `Asking how much the patient believes they can stop themselves from doing what the voice wants.`,
 `About the patient's own sense of control over commands. Patients often have real insight into their risk.`,
 `Also ask: "What have you done so far to keep yourself safe?"`);
T('paleologic','Paleologic thinking','bo',[12],
 `Rosenbaum: faulty logic that equates things because they share an attribute: "Jesus was persecuted; I am persecuted; therefore I am Jesus."`,
 `The logic breaks in degrees, not all at once. It identifies things by shared predicates, unlike loosening, which has no connecting logic.`,
 `Ask how the patient got from one idea to the next, and don't argue.`);
T('incorporated','Being incorporated into the delusion','bo',[12],
 `The clinician is drawn into the patient's delusional system as one of the persecutors.`,
 `Reasonable statements raise agitation because the patient isn't hearing them normally. Further talk may push toward violence.`,
 `Stop trying to reason, stay calm, give space, and step back when needed.`);
T('koro','Koro (culture-bound syndrome)','bo',[12],
 `A culture-specific fear that the genitals are retracting into the body, with the dread of death.`,
 `A recognized idiom in some communities, so it may not be delusional. Shea cites language, culture-specific syndromes, and cultural views of reality.`,
 `Ask whether others in the community know of it, and how they explain it.`);
T('expressedemo','Expressed emotion','bo',[12],
 `A critical, hostile, or over-involved family climate linked to relapse in schizophrenia.`,
 `About the family's emotional tone: criticism, hostility, or smothering care.`,
 `Meet the family early, learn what they've been through, and offer ways to lower the tension.`);
T('famblame','Family fear: "You think we caused this"','bo',[12],
 `A family's unspoken fear of being blamed for the patient's illness.`,
 `The relative's fear is of being blamed, not of being ignored or of medication changes.`,
 `"Schizophrenia is a brain disease; loving parents don't cause it."`);
T('famdismiss','Family fear: "You don\u2019t care what I have to say"','bo',[12],
 `A family's unspoken fear that their knowledge of the patient will be dismissed.`,
 `The relative feels unheard though they live with the symptoms daily.`,
 `"No one knows him better than you do. We depend on your input."`);
T('fammeds','Family fear: "You\u2019ll change his meds carelessly"','bo',[12],
 `A family's unspoken fear that a new clinician will change treatment without hearing what has worked.`,
 `The relative remembers a past change that went wrong.`,
 `"I won't change anything before hearing what has worked."`);

/* Ch. 13: Personality disorders, core concepts */
T('persdis','Personality disorder','pc',[13],
 `An enduring, inflexible, pervasive pattern of inner experience and behavior that deviates markedly from cultural expectations, with onset by adolescence or early adulthood and clinically significant distress or impairment.`,
 `A lifelong pattern across many situations. A single stressful interview, or a state caused by mood, drugs, or illness, doesn't make one.`,
 `Ask about school, work, relationships, friendships, conflict, and family across the years.`);
T('defstruct','Defensive structure','pc',[13],
 `The set of coping mechanisms a person relies on; in personality disorders it is few in number, rigid, and used across all situations.`,
 `Explains the pattern as protection from pain, not a choice. Seeing it that way reduces angry countertransference.`,
 `Remind yourself: no one chooses a personality disorder. It blooms from pain, environment, and limitation.`);
T('histdx','Historical diagnosis','pc',[13],
 `A diagnosis made from the life history rather than from behavior in the interview.`,
 `Persistence from adolescence is the critical criterion. Interview behavior only guides what to explore.`,
 `Take the social history carefully and specifically, using behavioral incidents.`);
T('egosyn','Ego-syntonic behavior','pc',[13],
 `Behavior that doesn't disturb the patient, though it may harm others.`,
 `The patient sees no problem; others suffer. Often sent by family, lawyers, or employers, and harder to engage.`,
 `Predominantly ego-syntonic presentations may warrant an experienced therapist rather than a trainee.`);
T('egodys','Ego-dystonic behavior','pc',[13],
 `Behavior the patient experiences as painful and problematic.`,
 `The patient suffers and sees the pattern as a problem, as with an avoidant person in self-imposed exile. Syntonic behaviors can become dystonic as consequences mount.`,
 `Use the patient's own distress as the starting point for engagement.`);
T('labeltheory','Label theory','pc',[13],
 `The ways diagnostic labels can stereotype, stigmatize, oversimplify, and stick.`,
 `A risk of the label itself: clinics decline "borderlines," staff react to a diagnosis in the chart, and people can outgrow a disorder while the label persists.`,
 `Reassess an inherited personality diagnosis yourself, and don't apply one unless criteria are clearly met.`);
T('temperament','Temperament','pc',[13],
 `Inborn behavioral tendencies (Thomas and Chess) that can persist into adulthood.`,
 `Biology that precedes experience and shapes personality along with trauma and environment.`,
 `Ask about early childhood: "What were you like as a baby, according to your parents?"`);
T('persartifact','Artifacts of rigid defenses','pc',[13],
 `Behaviors or consequences of rigid defenses that disturb others, the patient, or both, visible in relationships with parents, siblings, dates, spouses, employers, and friends.`,
 `The tracks in the social history: lost friends, broken marriages, blown jobs.`,
 `Read the social history like a snowfield, looking for the tracks of personality dysfunction crisscrossing it.`);

/* Ch. 14: Personality disorders, differential */
T('anxprone','Anxiety-prone group','pd',[14],
 `Shea's grouping of obsessive-compulsive, dependent, and avoidant personality disorders: lives riddled with tension and anxiety, managed in different ways.`,
 `Anxiety is the common thread, and they usually can empathize with others.`,
 `Probe for tension and worry: perfectionism, wanting others to decide, fear of rejection.`);
T('poorempathic','Poorly empathic group','pd',[14],
 `Shea's grouping of schizoid, antisocial, histrionic, and narcissistic personality disorders: reduced ability to empathize, with a trail of people who felt used or ignored.`,
 `The history is full of people who felt betrayed, manipulated, or ignored. The ways differ: oblivious (narcissistic), manipulative (antisocial), swept up in drama (histrionic).`,
 `Ask about how past relationships ended and what others have said.`);
T('psychprone','Psychotic-prone group','pd',[14],
 `Shea's grouping of borderline, schizotypal, and paranoid personality disorders: developmentally immature defenses and micropsychotic episodes under stress.`,
 `The defenses resemble a child's: magical thinking, preoccupation with fantasy, and splitting. Shea also calls them the "regressed" personality disorders.`,
 `Ask about brief, stress-triggered paranoid or unreal experiences.`);
T('ocpd','Obsessive-compulsive personality disorder','pd',[14],
 `Extreme perfectionism and driven-ness: always feeling one should do a little more, with tension managed through control.`,
 `The sense of never having done enough is the signal symptom.`,
 `"Do you drive yourself hard, always feeling you should do a little more?"`);
T('dpd','Dependent personality disorder','pd',[14],
 `A strong preference for others to make most important decisions, with child-like helplessness and low self-esteem.`,
 `Looks to others to decide, as opposed to avoiding people out of fear.`,
 `"Would you rather others make most of the important decisions at home?"`);
T('avpd','Avoidant personality disorder','pd',[14],
 `Desperate hope for affection and love, but self-esteem too low to risk trying; the credo is that any club that would accept me, I wouldn't want to belong to.`,
 `Wants relationships but fears rejection. Schizoid people don't seek relationships at all.`,
 `"Most of your life, have you worried people won't like you?"`);
T('szd','Schizoid personality disorder','pd',[14],
 `A quiet loner content with an isolated, shell-like life; blandness inside and out, with no fear of rejection because no desire for acceptance.`,
 `Doesn't want relationships, unlike avoidant. Not especially linked to schizophrenia or micropsychotic episodes, unlike schizotypal.`,
 `"Do you enjoy being around people, or do you much prefer being alone?"`);
T('aspd','Antisocial personality disorder','pd',[14],
 `A chameleon, charming or belligerent as needed, with lying, cheating, legal troubles, job hopping, and cruelty.`,
 `Recognizes others' needs but uses them to manipulate. Vaillant: callousness may be a defense against pain once felt.`,
 `"If a situation warranted it, would you find it pretty easy to lie?"`);
T('hpd','Histrionic personality disorder','pd',[14],
 `An impressionistic view of the world, a demand for center stage, fragile self-esteem beneath the drama, and rapid mood shifts.`,
 `Misses others' needs, swept up in their own drama. Exhilarating on a good day, miserable on a bad one.`,
 `"Do you often find yourself the center of attention, even when you don't mean to be?"`);
T('npd','Narcissistic personality disorder','pd',[14],
 `A stable form that truly feels superior and idealizes then denigrates, or an unstable form in which grandiosity masks a fragile ego and worthlessness.`,
 `Often oblivious to others' needs. The unstable variant is often sad, angry, raging, and prone to severe depressions.`,
 `"When you get down to it, are most people not quite up to your standards?"`);
T('bpd','Borderline personality disorder','pd',[14],
 `A life without an inner self: intense dependency that turns hostile when others leave, emptiness, black-and-white thinking, and self-harm to relieve intense emotion.`,
 `The "glass people," delicate and dangerous when shattered. Dependency plus rapid rage plus self-harm.`,
 `"If someone hurts you, do you sometimes feel like hurting yourself, like cutting?"`);
T('stpd','Schizotypal personality disorder','pd',[14],
 `Magical thinking and psychotic-like process: clairvoyant messages, ghost-like presences, vague metaphoric speech, and social awkwardness.`,
 `Related to schizophrenia, and micropsychotic episodes are possible.`,
 `"Have you ever felt you had special powers, like ESP?"`);
T('ppd','Paranoid personality disorder','pd',[14],
 `A world of restless worry and no trust: scours interactions for deception, is haughty, and can't admit mistakes.`,
 `Guardedness protects a deep sense of inferiority. Isolation can let delusions erupt.`,
 `"Do people often tend to be disloyal or dishonest?"`);
T('papd','Passive-aggressive personality traits','pd',[14],
 `A pattern of quietly resisting authority, such as doing something foolish slowly to make a point.`,
 `Resistance through slowness and indirection rather than open defiance. Described in the DSM-IV-TR appendix.`,
 `"If your boss asks you to do something foolish, do you sometimes do it slowly to make a point?"`);
T('labelslap','Label slapping','pd',[14],
 `Premature personality diagnosis based on interview behavior or intuition rather than confirmed history.`,
 `Interview behavior and intuition are tools for guiding exploration, not evidence of a historical diagnosis.`,
 `Ask whether the behavior has been present since adolescence before diagnosing.`);
T('signalsign','Signal sign','pd',[14],
 `An observed behavior in the interview, often in the first 5 to 8 minutes, that suggests regions to explore, such as caustic comments or child-like helplessness.`,
 `Seen in the room. Not a diagnosis but a map of regions to explore.`,
 `Notice and note; then confirm with history.`);
T('signalsx','Signal symptom','pd',[14],
 `A reported symptom or history item, such as self-mutilation, extreme perfectionism, or run-ins with the law, that points toward certain disorders.`,
 `Reported by the patient, not observed in the room.`,
 `Follow it with probe questions about the suggested regions.`);
T('probeq','Probe question','pd',[14],
 `A brief question, many from Jeremy Roberts, used to test whether a diagnostic region deserves expansion.`,
 `A short test question, not the full exploration of a disorder. One or two suggestive answers warrant going further.`,
 `Weave probes in through natural or referred gates, never as a checklist.`);
T('statedep','State dependency','pd',[14],
 `An apparent trait that is actually caused by another disorder, such as mania, depression, or drug use.`,
 `A state can mimic a trait (mania looks histrionic) or hide one. Ask about the person when well, over the years.`,
 `"When you're feeling your normal self, how often do you...?"`);
T('epiphen','Tapping for epiphenomena','pd',[14],
 `Generic and specific follow-up questions that confirm a trait is pathologically severe by asking about the consequences it produces.`,
 `Asks about what happened as a result, such as evictions and broken relationships.`,
 `"What has happened because of that? Has it caused trouble with landlords or relationships?"`);
T('histanchor','Historical anchoring','pd',[14],
 `Tying a trait to adolescence to confirm it has been persistent: "Has that been typical of you, say back in junior high and high school?"`,
 `Anchors the trait in time to show persistence from adolescence.`,
 `Use it after a patient describes a behavior that might be a trait.`);

/* Ch. 15: Psychodynamics of difficult personality disorders */
T('partself','Part self / part object','pm',[15],
 `The earliest developmental stage, in which boundaries between self and world are still being explored; adults can regress to it in delirium, dementia, schizophrenia, or psychotic bipolar disorder.`,
 `Blurred boundaries. Signal signs include intermittent preoccupation, missed nonverbal cues, fleeting magical thinking, and low-grade paranoia.`,
 `Go slowly and keep immediacy low; these patients may be exquisitely prone to paranoia toward the interviewer.`);
T('merger','Merger object','pm',[15],
 `A person (or internal image) one must be close to in order to feel whole and safe.`,
 `Panic or emptiness when alone, fast dependency, and relationships that swing from dependence to fury. The clinician, or even the office, can become one.`,
 `Discuss dependency openly and plan the frame deliberately.`);
T('transitional','Transitional object','pm',[15],
 `Winnicott: an item that carries the comfort of a merger object when the person is absent, like Linus's blanket.`,
 `A concrete thing (a wristband, jewelry, clothing) standing in for a person. A signal sign to explore borderline process, and also narcissistic, histrionic, or schizotypal.`,
 `Ask about it with respect: "Tell me about the wristband."`);
T('holdenv','Holding environment','pm',[15],
 `Winnicott: the safe early setting in which a caregiver's holding makes the infant feel whole, an essential way-station in developing a self.`,
 `The caregiving relationship itself, not an item that substitutes for it.`,
 `Consider how your own steady presence offers some of it.`);
T('splitting','Splitting','pm',[15],
 `Klein, Kernberg: experiencing others, and oneself, as all good or all bad depending on the moment ("black-and-white thinking").`,
 `Polarized language (extremely, best, worst, always, never), idealizing then devaluing, and opinions of you that flip within minutes. Suggests borderline process; also seen in narcissistic and histrionic process.`,
 `Choose words carefully, skip interpretations early, and set goals and plan treatment together.`);
T('selfobject','Selfobject','pm',[15],
 `Kohut: an experience with another person (or even a place or a sunny day) that makes the self feel whole, consistent, and safe.`,
 `The other is used as part of the self. Healthy people need occasional doses; people with narcissistic structure depend on constant ones.`,
 `Notice what the patient needs from you to feel steady.`);
T('grandpole','Grandiose pole','pm',[15],
 `One route in Kohut's bipolar self: safety through a sense of one's own greatness, requiring others to reflect it back.`,
 `Boasting, "my friend," putting you in your place. A challenge or being put one-down threatens collapse.`,
 `Avoid putting the patient one-down; use complementary shifts.`);
T('idealpole','Idealizing pole','pm',[15],
 `The other route in Kohut's bipolar self: safety by identifying with an idealized figure.`,
 `Superlatives about important people. If the hero turns out to be flawed, the patient may turn on them.`,
 `Accept the idealization for now.`);
T('stablesel','Stable self','pm',[15],
 `A self capable of empathy with realistic views of others, in which interpretations and gentle challenges are safer.`,
 `Realistic about others and open to gentle challenge, without collapsing.`,
 `Interpretive questions and gentle confrontation are safer here than with fragile structures.`);
T('compshift','Complementary shift','pm',[15],
 `Shea: a genuine verbal response or gesture that puts the patient one-up, maintaining a mirror transference.`,
 `Used with grandiose-pole patients who fear being one-down. Verbal compliments and asking for help are two ways to do it.`,
 `Let the patient lead where it's safe: choice of seat, order of topics.`);
T('genuinecompl','Genuine compliment','pm',[15],
 `A compliment the clinician truly feels, offered to a patient who relies on the grandiose pole.`,
 `Must be real; a false compliment violates trust.`,
 `"You clearly know your field. I'd never have understood that from the chart."`);
T('askhelp','Asking for the patient\u2019s help','pm',[15],
 `Inviting a patient who relies on the grandiose pole to help you understand, because their knowledge or perspective may truly be superior.`,
 `Puts the patient in the expert role, and is person-centered.`,
 `With an adolescent: "Your parents told me their side; I'd really like your help understanding what's actually going on."`);
T('nvleak','Nonverbal leakage','pm',[15],
 `Unintended nonverbal signals of the clinician's own feelings, such as boredom or irritation, that the patient may read instantly.`,
 `The clinician's feelings escaping through the face, eyes, or posture, not a message sent on purpose.`,
 `Check in with your own state, and notice what your face is doing.`);
T('mentaliz','Mentalization','pm',[15],
 `The capacity to imagine others' thoughts and needs, a foundation of empathy.`,
 `Can describe what others did, but not what they thought or needed. In narcissistic structure, others exist to serve the self.`,
 `Notice whether the patient can describe others' perspectives, even briefly.`);
T('framedep','Planning the frame for dependency','pm',[15],
 `Openly discussing a patient's rapid dependency needs and deliberately setting frequency and contact.`,
 `Raising the dependency yourself, early, instead of waiting for it to become a crisis.`,
 `"How will we know if you're becoming too dependent on me?"`);

/* Existing terms now also taught in Part 2 */
TERMS.akathisia.ch=[16,12];
TERMS.command.ch=[11,17,12];
TERMS.greasing.ch=[1,11];

V.push(
/* Ch. 9 cases */
{id:'md01',t:'pdd',d:['cyclothymia','bip2','melancholic'],q:`Which diagnosis fits best?`,x:`O: A 44-year-old woman says she can't remember when she last felt well. For about six years she has been low on most days, with little energy and confidence, trouble making decisions, and a sense that nothing will improve. Her longest good stretch was "maybe a few weeks." She has never had a manic or hypomanic period.`,
 w:`Depressed mood most days for at least 2 years, with a few other symptoms and never more than 2 symptom-free months, is persistent depressive disorder.`},
{id:'md02',t:'melancholic',d:['atypfeat','pdd','anxdistress'],q:`Which specifier fits best?`,x:`O: A 68-year-old man has felt nothing pleasurable for six weeks. He wakes at 3 a.m. with dread, feels worst in the morning, has lost 15 pounds, moves and speaks slowly, and feels he has "ruined the family." His mood doesn't lift even when his grandchildren visit.`,
 w:`Near-total loss of pleasure and lack of reactivity, plus morning worsening, early waking, weight loss, psychomotor change, and guilt, define melancholic features.`},
{id:'md03',t:'anxdistress',d:['melancholic','atypfeat','mixedfeat'],q:`Which specifier fits best?`,x:`P: I'm depressed, but what scares me more is the constant dread. I'm keyed up and tense all day, and I keep expecting something awful to happen.
O: The clinician rates the anxiety as severe.`,
 w:`Prominent tension and fear of something awful during a depressive episode. Fawcett found intense anxiety in depression raises suicide risk, so a severe rating calls for a careful suicide assessment.`},
{id:'md04',t:'atypfeat',d:['melancholic','pdd','hypomania'],q:`Which specifier fits best?`,x:`P: When my sister called with good news, I felt great the whole evening. But most days I sleep eleven hours, I eat more than I used to, and my arms and legs feel like lead. If I think someone is annoyed with me, I fall apart.`,
 w:`Mood reactivity, plus hypersomnia, increased appetite, leaden paralysis, and rejection sensitivity. Finding it should prompt a careful search for bipolar process.`},
{id:'md05',t:'peripartum',d:['atypfeat','melancholic','anxdistress'],q:`Which specifier applies?`,x:`O: A 31-year-old woman, three weeks after delivering her first child, has had two weeks of low mood, loss of interest, and insomnia even when the baby sleeps.`,
 w:`It's defined by timing: the episode began within 4 weeks after delivery. No other specifier features are described.`},
{id:'md06',t:'mania',d:['hypomania','dysmania','agitdep'],q:`Which mood state does this behavior most suggest?`,x:`O: A man in his late 50s, poorly dressed for winter, approaches a stranger in a library, stands uncomfortably close, and holds intense eye contact. He says rapidly that he hasn't slept in four days and that a records committee is waiting to crown him, drops to do push-ups, and greets a passing student as an old friend. He grows angry when staff try to guide him out.`,
 w:`Heightened immediacy, false familiarity, a demonstration propensity, likely grandiose delusion, and irritability when limits are set all point to a manic episode. Hypomania would be milder, with no psychosis or marked impairment.`},
{id:'md07',t:'hypomania',d:['mania','mixedfeat','cyclothymia'],q:`Which episode is this?`,x:`P: For about five days last month I needed four hours of sleep, felt wonderful, finished three projects, and talked nonstop. People noticed, but I kept working and nothing went wrong. Afterward I crashed.`,
 w:`At least 4 consecutive days, an observable change, and no marked impairment, hospitalization, or psychosis: hypomania.`},
{id:'md08',t:'bip1',d:['bip2','pdd','substbp'],q:`Which diagnosis does this history change?`,x:`O: A 61-year-old man comes in severely depressed. Asked about the opposite, he says that thirty years ago he barely slept for days, talked nonstop, and tried to release prisoners from the jail where he worked, and he was hospitalized.`,
 w:`A single past manic episode makes it bipolar I, even though he is depressed now. Past manias are often sealed over, so ask directly.`},
{id:'md09',t:'bip2',d:['bip1','cyclothymia','pdd'],q:`Which diagnosis fits best?`,x:`P: I've had three bad depressions. And a couple of times a year I get these four- or five-day stretches where I'm full of ideas, sleep little, and spend too much. I've never been hospitalized or had to stop working.`,
 w:`Major depressions plus hypomania without a full manic episode: bipolar II.`},
{id:'md10',t:'mixedfeat',d:['agitdep','rapidcyc','atypfeat'],q:`Which specifier applies?`,x:`O: A 40-year-old woman meets full criteria for a major depressive episode. On most days for two weeks she has also had racing thoughts, pressured speech, little need for sleep, and impulsive spending.`,
 w:`Full depressive criteria plus three or more manic symptoms most days: a depressive episode with mixed features.`},
{id:'md11',t:'dysmania',d:['agitdep','melancholic','cyclothymia'],q:`Which presentation does this suggest?`,x:`O: An 18-year-old, previously a top student, describes tormenting angst, anger at "everyone and the world," and a feeling that he must do something right now, even something he knows isn't smart. He has little pressured speech and no grandiosity. His sleep and appetite are only mildly disturbed, but he has begun doing pull-ups on a tree limb at midnight.`,
 w:`Angst out of proportion to mild neurovegetative symptoms, broad anger, and a drive to act now suggest Shea's dysphoric mania. Classic euphoric signs may be absent.`},
{id:'md12',t:'agitdep',d:['dysmania','mixedfeat','melancholic'],q:`Which presentation does this suggest?`,x:`O: A 50-year-old woman is very anxious and fretful. Asked "Do you have any ideas of how to solve your problems?" she looks befuddled.
P: I don't know. I can't think what to do. It's all too much.
O: She expresses no anger at others.`,
 w:`Overwhelmed and helpless, with no plans: agitated depression. In dysphoric mania the patient is driven to act and angry at the world.`},
{id:'md13',t:'substbp',d:['bip2','cyclothymia','dysmania'],q:`Which diagnosis fits best?`,x:`O: A 19-year-old with OCD becomes agitated, sleepless, and irritable, with "an attitude," within two weeks of each antidepressant he has tried. His parents recognize it immediately, and the symptoms fade after each drug is stopped.`,
 w:`Hypomanic symptoms emerging only in response to treatment. If full symptoms persisted well beyond the drug's effect, the diagnosis would become bipolar I or II.`},
{id:'md14',t:'cyclothymia',d:['bip2','pdd','rapidcyc'],q:`Which diagnosis fits best?`,x:`O: For three years, a 27-year-old has had many short stretches of low mood and energy alternating with stretches of unusually high energy and little sleep. None meets full criteria for a depressive or hypomanic episode, and he has never been symptom-free for more than a month or two.`,
 w:`Frequent low-grade depressive and hypomanic periods that never reach full episode criteria, for over 2 years.`},
{id:'md15',t:'rapidcyc',d:['cyclothymia','bip1','mixedfeat'],q:`Which specifier applies?`,x:`O: A woman with bipolar II has had five distinct mood episodes (three depressions and two hypomanias) over the past 12 months, with brief remissions between them.`,
 w:`Four or more episodes in 12 months, separated by remission or a switch in polarity.`},
{id:'md16',t:'dmdd',d:['bip2','cyclothymia','dysmania'],q:`Which diagnosis fits best?`,x:`O: A 9-year-old boy has had severe temper outbursts several times a week for over a year, often over small frustrations, and is irritable and angry most of the day in between. He has had no distinct periods of elevated mood, decreased need for sleep, or grandiosity.`,
 w:`Chronic irritability with frequent outbursts in a child, not episodes: disruptive mood dysregulation disorder.`},
{id:'md17',t:'pseudodementia',d:['melancholic','pdd','clouding'],q:`What should the clinician consider?`,x:`O: A 74-year-old woman is brought in for "memory loss." She answers "I don't know" quickly and gives up easily on tests, but does better with encouragement, and she is alert and oriented. Her family says her appetite, sleep, and interest collapsed after her husband died.`,
 w:`Depression masquerading as dementia. A bedside cognitive exam helps sort out which is which.`},
{id:'md18',t:'nervios',d:['heartidiom','somaticidiom','melancholic'],q:`Which cultural idiom of distress is the patient using?`,x:`P: I've had nervios since my brother died. I can't sleep, I tremble, I cry for no reason, and I have no energy.`,
 w:`Nervios is a common idiom of distress in many Latino/a communities; ask about it as you would about depression or anxiety.`},
{id:'md19',t:'heartidiom',d:['nervios','somaticidiom','melancholic'],q:`Which cultural idiom of distress is the patient using?`,x:`P: I have a problem of the heart since my son left the country. Doctors found nothing wrong with my heart. I can't eat, and I cry in the evenings.`,
 w:`Distress located in the heart, a recognized idiom in many Middle Eastern contexts. Explore what the patient means by it.`},
{id:'md20',t:'somaticidiom',d:['nervios','heartidiom','anxdistress'],q:`Which cultural idiom of distress is the patient using?`,x:`P: Mostly I'm tired all the time, my head hurts every day, and my body just feels uncomfortable.
O: Later, asked about interest and sleep, he admits he has lost interest in things and sleeps poorly.`,
 w:`Distress carried through bodily complaints, common in many Asian contexts. Take them seriously, and then ask about mood.`},

/* Ch. 10 cases */
{id:'bm01',t:'blockfuture',d:['shrinkworld','caging','learnedhelp'],q:`Which depressive experience is this?`,x:`P: Every day is the same as the one before. It's like time has stopped. I can't picture next month being any different, so I can't see the point of trying anything.`,
 w:`Minkowski's blocking of the future: change seems impossible, time stalls, and motivation evaporates.`},
{id:'bm02',t:'shrinkworld',d:['blockfuture','windowshade','learnedhelp'],q:`Which depressive experience is this?`,x:`O: A woman who loved her rose garden says she no longer notices the roses blooming on her street. She has stopped going to church, the market, and her sister's house, and now mostly stays in her bedroom.`,
 w:`The part of the world she still engages has contracted, like a cataract of the mind.`},
{id:'bm03',t:'windowshade',d:['shrinkworld','caging','blockfuture'],q:`Which phenomenon is this?`,x:`C: When you're really low, do you ever feel an oddly strong urge to close your eyes, not because you're sleepy, but to shut everything out?
P: Yes. I even do it on the walk to work.`,
 w:`Shea's window shade response, a reliable marker of moderate to severe depression and not typical of pure anxiety disorders.`},
{id:'bm04',t:'caging',d:['persev','shrinkworld','immunelogic'],q:`Which phenomenon is this?`,x:`P: The bills. We're going to lose the house.
C: That's a real problem. Let me ask about your sleep, and we'll come back to it.
P: I just keep thinking about the bills. How will we pay them?
O: Each time, he returns to the same worry.`,
 w:`The mind is trapped in a small circle of themes. Acknowledge, explain, promise to return, and gently refocus.`},
{id:'bm05',t:'cogtriad',d:['overgeneral','immunelogic','selfblame'],q:`Which pattern is this?`,x:`P: The world is a rotten place. I'm worthless. And it's never going to get better.`,
 w:`Beck's cognitive triad: negative views of the world, the self, and the future.`},
{id:'bm06',t:'immunelogic',d:['overgeneral','catastroph','caging'],q:`Which phenomenon is this?`,x:`O: A woman is sure she will die penniless. Her accountant shows her statements with ample savings, and she says he must be mistaken. The next day she is just as certain, and the day after.`,
 w:`Minkowski's immunity to logic: evidence fails to move the conclusion, however often it is presented.`},
{id:'bm07',t:'burden',d:['hopeless','learnedhelp','selfblame'],q:`Which warning sign is this?`,x:`P: My family would be better off without me. I'm a burden to everyone. They have to take care of me, and I can't give anything back.`,
 w:`Joiner's perceived burdensomeness, one of the most reliable interpersonal harbingers of a suicide attempt. Ask directly about suicidal thoughts, plans, and intent.`},
{id:'bm08',t:'learnedhelp',d:['blockfuture','hopeless','shrinkworld'],q:`Which process is this?`,x:`O: After months of failed job applications and no replies from agencies, a man stops applying, stops exploring options, and says he has "tried everything."`,
 w:`Seligman's learned helplessness: after inescapable adversity, exploration stops, and so do new learning and reward.`},
{id:'bm09',t:'hopeless',d:['learnedhelp','blockfuture','burden'],q:`Which warning sign is most important here?`,x:`C: What do you see for yourself in the future?
P: Nothing. Nothing will change, and nobody can help.
C: How's your mood?
P: Honestly, not that bad. I'm just done.`,
 w:`Beck found hopelessness more specific and sensitive for suicide potential than depressed mood itself. Ask directly about suicidal thoughts.`},
{id:'bm10',t:'depanger',d:['irritloop','pseudohypo','projdep'],q:`What might the sudden flash of anger suggest?`,x:`O: A man who seems flat and apathetic suddenly erupts into a bitter diatribe against his former psychiatrist and his brother.`,
 w:`Anger can pierce apparent apathy in depression, as in the classic view of depression as anger turned inward. Explore it gently.`},
{id:'bm11',t:'projdep',d:['pseudohypo','depanger','guilt'],q:`What underlying process should the clinician consider?`,x:`P: Everyone at work hates me. They want to see me punished, and they're enjoying it.
O: He denies feeling depressed or suicidal, but he sleeps three hours a night and has lost weight.`,
 w:`Self-hatred experienced as others' hatred. Consider underlying depression and suicide risk even when ideation is denied.`},
{id:'bm12',t:'pseudohypo',d:['hypomania','reactivity','unipolar'],q:`What is the likeliest explanation for her presentation?`,x:`O: A woman laughs and chatters brightly while listing a divorce, a lost job, and her mother's death. Her chin quivers briefly. She says she isn't down at all.`,
 w:`A cheerful front concealing depression. A quiet "As you talk, you seem sort of sad to me" may open the floodgates.`},
{id:'bm13',t:'reactivity',d:['pseudohypo','unipolar','blend_subj'],q:`What should the resident recognize?`,x:`O: A resident is very warm and extroverted. Within minutes the patient is smiling and joking and says she is "fine," and the resident writes "mild depression." The family later says she has barely left her bed for months.`,
 w:`The interviewer's warmth temporarily brightened a depressed patient. Weigh the history, not just the affect in the room.`},
{id:'bm14',t:'rejcycle',d:['irritloop','learnedhelp','shrinkworld'],q:`Which cycle is this?`,x:`P: I smile less, I keep my answers short, and my friends call less. Which proves they never liked me.`,
 w:`Withdrawal brings coolness from others, and that confirms the patient's view and prompts more withdrawal.`},
{id:'bm15',t:'irritloop',d:['rejcycle','depanger','projdep'],q:`Which cycle is this?`,x:`P: I snapped at my best friend again about nothing, and afterward I felt like the worst person alive. Then I'm even lower, and I snap even more.`,
 w:`Irritability leads to guilt, then deeper depression and more irritability. Naming the loop can relieve guilt.`},
{id:'bm16',t:'cutcry',d:['sidetrack','blandness','feedwander'],q:`What did the resident do?`,x:`O: A patient begins to cry while describing her son's death. The resident quickly hands her a tissue and says, "Let's move on to your sleep."`,
 w:`He ended the crying early, likely because another's pain is disturbing. Unlike sidetracking, which defuses anger, here the move shuts off a chance to learn core pain.`},
{id:'bm17',t:'famstab',d:['kinrecip','expressedemo','rejcycle'],q:`Which family dynamic is this?`,x:`O: A depressed mother's adult daughter, long put down by her mother, has become the only one who "really helps." She quietly bristles when the clinician suggests a home aide and involving other relatives.`,
 w:`The depression has become a stabilizing force: the daughter gains worth and control from being the helper, and may unconsciously not want change.`},
{id:'bm18',t:'overgeneral',d:['catastroph','ignorepos','selfblame'],q:`Which distortion is this?`,x:`P: Nothing ever goes right for me. No one ever cares.`,
 w:`One experience turned into a universal rule, with words like nothing, ever, and no one.`},
{id:'bm19',t:'catastroph',d:['overgeneral','ignorepos','selfblame'],q:`Which distortion is this?`,x:`P: My boss frowned at me in the hall. I'm going to be fired, we'll lose the house, and my kids will end up on the street.`,
 w:`A small event leaps to disaster.`},
{id:'bm20',t:'ignorepos',d:['overgeneral','catastroph','selfblame'],q:`Which distortion is this?`,x:`P: Everyone congratulated me on the record quarter, but all I can think about is the one client I lost.`,
 w:`The success is screened out and only the failure counts.`},
{id:'bm21',t:'selfblame',d:['overgeneral','catastroph','ignorepos'],q:`Which distortion is this?`,x:`P: The storm knocked out power for the whole street. I should have seen it coming. This is my fault.`,
 w:`Responsibility assigned to oneself for events one couldn't control. If it were fixed and held without doubt, it would shade toward delusional guilt.`},

/* Ch. 11 cases */
{id:'po01',t:'hardsigns',d:['softsigns','delusmood','micropsy'],q:`What kind of finding is this?`,x:`O: A 22-year-old tells the interviewer that two men in the walls discuss his thoughts and that news anchors send him coded warnings.`,
 w:`Hallucinations and delusions are hard signs of psychosis.`},
{id:'po02',t:'softsigns',d:['hardsigns','micropsy','psychmood'],q:`What kind of finding is this?`,x:`O: A 23-year-old woman says she is "a nervous wreck." She giggles at odd moments, avoids eye contact, speaks vaguely, and takes a long time to answer. She says she is "too anxious to be a woman," and denies hallucinations and delusions.`,
 w:`Vagueness, inappropriate affect, latency, and illogical speech: soft signs of a smoldering process. Several weeks later she was hospitalized with frank paranoid delusions.`},
{id:'po03',t:'delusmood',d:['delusperc','delusidea','ideasref'],q:`Which phase of an emerging delusion is this?`,x:`P: For weeks I've had this feeling that something's wrong, like something is about to happen. Everything feels charged. I can't say what it is.`,
 w:`Something feels strange and ominous, but no belief has formed.`},
{id:'po04',t:'delusperc',d:['delusmood','delusidea','illusion'],q:`Which phase of an emerging delusion is this?`,x:`P: The man crossing the street swung his left arm as he passed. That was a signal meant for me. I knew right then that it was starting.`,
 w:`A normal perception suddenly takes on a special, personal meaning.`},
{id:'po05',t:'delusidea',d:['delusmood','delusperc','overvalued'],q:`Which phase of an emerging delusion is this?`,x:`P: Now I understand everything. My neighbors have been working with the company for years to drive me out. That's why the light flickered, and why the stranger waved. I know why it's happening.`,
 w:`The suspicions have crystallized into a fixed, explained belief.`},
{id:'po06',t:'brief_psy',d:['schizoform','schizo','schizoaff'],q:`Which diagnosis fits best?`,x:`O: A 29-year-old woman with no psychiatric history develops hallucinations and disorganized speech after her father's death. They last three weeks, then resolve completely, and she returns to her previous functioning.`,
 w:`Psychotic symptoms for between 1 day and 1 month, with full return to baseline: brief psychotic disorder.`},
{id:'po07',t:'schizoform',d:['brief_psy','schizo','delusional_d'],q:`Which diagnosis fits best?`,x:`O: A 20-year-old has had delusions, hallucinations, and disorganized speech for three months. Before that he was functioning well.`,
 w:`Schizophrenia's core symptoms for 1 to under 6 months: schizophreniform disorder.`},
{id:'po08',t:'schizo',d:['schizoform','brief_psy','schizoaff'],q:`Which diagnosis fits best?`,x:`O: A 26-year-old has had hallucinations, delusions, and social withdrawal with declining functioning for nine months. There have been no major mood episodes.`,
 w:`Core symptoms for at least 6 months, including at least 1 month of active symptoms.`},
{id:'po09',t:'delusional_d',d:['schizo','psychmood','brief_psy'],q:`Which diagnosis fits best?`,x:`O: A 57-year-old woman, eloquent and well-groomed, believes her unfaithful husband has hired men with spy tools to harass her into insanity so he can divorce her. She has kept logs of license plates. The belief has lasted 18 months. She has no hallucinations or disorganization and otherwise functions well.`,
 w:`An organized delusion for over a month with schizophrenia's criteria never met, and otherwise normal functioning. This is a mixed jealous and persecutory subtype.`},
{id:'po10',t:'schizoaff',d:['schizo','psychmood','delusional_d'],q:`Which diagnosis fits best?`,x:`O: A 34-year-old had a major depressive episode alongside hallucinations and delusions. After the mood lifted, she had two more months of voices and paranoid beliefs without a mood episode.`,
 w:`Psychosis outlasting the mood episode by at least 2 weeks, in an uninterrupted illness: schizoaffective disorder.`},
{id:'po11',t:'psychmood',d:['schizo','schizoform','schizoaff'],q:`Which diagnosis fits best?`,x:`P (mother): He barely slept for a week and was full of grand plans. Only after that did he start hearing voices that told him he was chosen. Before the voices, his mood was sky-high.
O: His symptoms resolve as his mood settles.`,
 w:`Mood symptoms first, with psychosis emerging at the peak and resolving with the mood: a psychotic mood disorder, not schizophrenia.`},
{id:'po12',t:'dts',d:['stimpsy','delirium_hidden','anticholdel'],q:`What is the most likely cause?`,x:`O: A 52-year-old man was brought in two days ago after a fall. He now has tremor, sweating, a pulse of 120, and disorientation, and he sees insects crawling on the walls and wires on the floor. Police say he has drunk heavily for years, and he hasn't had a drink since arriving.`,
 w:`Delirium tremens after stopping heavy drinking. It can be fatal; cut the interview short and get immediate medical evaluation.`},
{id:'po13',t:'delirium_hidden',d:['schizo','psychmood','stimpsy'],q:`What should the clinician suspect?`,x:`O: A 30-year-old man with paranoid schizophrenia is found smashing furniture. He seems calm after sedation and denies psychotic symptoms, then staggers to the bathroom, asks where he is, drifts off, and can repeat only three digits. His usual relapses are gradual, with paranoia, not sudden rage and confusion.`,
 w:`This episode differs from his usual pattern, and fluctuating attention points to delirium. His known diagnosis nearly hid a life-threatening cause.`},
{id:'po14',t:'stimpsy',d:['dts','schizoform','brief_psy'],q:`What is the most likely cause?`,x:`O: A previously healthy 25-year-old is brought in at night after running naked in the street. He is paranoid, disoriented, and violent, with elevated pulse and blood pressure and nystagmus. Friends say he took "something" at a party hours ago.`,
 w:`Psychosis erupting within hours in a previously normal person strongly suggests a drug cause. Nystagmus, hypertension, and violence fit PCP.`},
{id:'po15',t:'anticholdel',d:['dts','charlesbonnet','paraphrenia'],q:`What is the most likely cause?`,x:`O: A 78-year-old woman, after starting an over-the-counter sleep aid and a bladder medication, becomes confused and sees people who aren't there. She has a dry mouth and dilated pupils.`,
 w:`Both drugs can be anticholinergic. Older adults are especially vulnerable to anticholinergic delirium.`},
{id:'po16',t:'paraphrenia',d:['schizo','delusional_d','anticholdel'],q:`Which diagnosis fits best?`,x:`O: A 72-year-old woman living alone says her neighbors pump poison gas through the walls, and that she hears them through the wall at night, talking about her. She is well-groomed, her personality is intact, and she has mild hearing loss. It began about two years ago, and her cognitive testing is normal.`,
 w:`Late-onset, organized, mundane persecutory delusions with auditory hallucinations and preserved personality. Rule out a medical cause.`},
{id:'po17',t:'partition',d:['somatic','jealous','delusperc'],q:`Which specific delusion is this?`,x:`P: Gas is coming through the walls and floor into my apartment from the neighbors' unit. I taped over all the vents.`,
 w:`The belief that something passes through walls into the home. It is common in late-life psychosis such as paraphrenia.`},
{id:'po18',t:'micropsy',d:['brief_psy','schizoform','softsigns'],q:`What is the best description of this episode?`,x:`O: Under the stress of her partner's absence, a 28-year-old woman with intense emotions and unstable relationships briefly hears his voice scolding her and believes strangers are plotting against her. Within hours of his return, it is gone.`,
 w:`Abrupt, stress-triggered psychosis with a prompt return to baseline, in a person with a personality disorder.`},
{id:'po19',t:'interictal',d:['micropsy','psychmood','schizoaff'],q:`Which pattern of change is this?`,x:`O: A 38-year-old man has brief, stereotyped episodes of fear, lip smacking, and staring, followed by confusion. Between episodes he has become intensely religious, writes pages every night, talks on and on, and has lost interest in sex.`,
 w:`Religiosity, hypergraphia, viscosity, and low libido between seizures are interictal phenomena of temporal lobe epilepsy.`},
{id:'po20',t:'charlesbonnet',d:['dts','anticholdel','paraphrenia'],q:`Which diagnosis fits best?`,x:`O: An 81-year-old man with severe cataracts sees vivid, silent figures in his living room each evening. He knows they aren't real, has no other psychiatric symptoms, and his cognition is intact.`,
 w:`Visual hallucinations in an older adult with visual impairment, with insight preserved. Avoid needless antipsychotics.`},
{id:'po21',t:'cultexp',d:['hardsigns','micropsy','psychmood'],q:`Which explanation fits best?`,x:`O: A Mexican American woman, nine days after her grandmother's death, feels her presence and sometimes hears her voice. Her family regards these as normal visits from the deceased. She functions well, has no other symptoms, and the experiences fade within weeks.`,
 w:`A culturally sanctioned experience, isolated, with no prodrome and a prompt return to baseline. Calling it psychosis risks needless antipsychotics and stigma.`},
{id:'po22',t:'deficit',d:['softsigns','hardsigns','psychmood'],q:`Which concept is the clinician explaining?`,x:`C: What does your son do in his room during the day?
P (mother): Nothing. He won't shower or do anything. I think he's just lazy and defiant.
C: He's still recovering from his illness. Low drive and little interest may be symptoms of it, not a lack of effort.`,
 w:`Deficit (negative) symptoms often linger after voices and delusions fade, and families read them as laziness.`},
{id:'po23',t:'openmind',d:['content','sidetrack','movewith'],q:`Which technique is the clinician using?`,x:`P: I got parasites through a cut on my foot, and they've spread everywhere. Do you believe me?
C: It's an unusual story, so I want to understand it better before deciding. What problems are the parasites causing now?`,
 w:`Neither agreeing nor arguing: rapport and information keep flowing.`},
{id:'po24',t:'extentlogic',d:['distanceq','actionsq','scenarioq'],q:`Which technique is the clinician using?`,x:`C: What has happened so far? And why would someone want to do this to you?`,
 w:`Questions that reveal how far the delusion extends and the reasoning behind it.`},
{id:'po25',t:'distanceq',d:['extentlogic','actionsq','openmind'],q:`Which technique is the clinician using?`,x:`C: How do you know this is what's happening? How do you account for the clicking sounds?`,
 w:`Testing conviction: how certain the patient is, and how they explain the evidence.`},
{id:'po26',t:'actionsq',d:['extentlogic','distanceq','scenarioq'],q:`Which technique is the clinician using?`,x:`P: They're in my brain. I can't think straight.
C: That sounds very disturbing. What have you been doing to try to help yourself?
P: Bleach soaks. And I bought medicine meant for livestock online.`,
 w:`Asking about actions revealed dangerous self-treatment.`},
{id:'po27',t:'scenarioq',d:['actionsq','distanceq','extentlogic'],q:`Which technique is the clinician using?`,x:`C: If your neighbor walked up your driveway and reached into his jacket pocket, what would you do?
P: I'd get to my gun before he got to me.`,
 w:`A concrete scenario reveals intent to act. Weapon access plus perceived threat means high risk: immediate safety measures and consultation.`},
{id:'po28',t:'greasing',d:['openmind','extentlogic','actionsq'],q:`Which technique is the clinician using?`,x:`P: My neighbor has been tampering with my mail for months.
C: I'm interested in what you just said. Tell me more. How did this all start?`,
 w:`An interested, conversational, non-empathic manner invites the delusion to emerge, and any danger in it.`},

/* Ch. 12 cases */
{id:'bo01',t:'porousego',d:['deperson','broadcast','insertion'],q:`Which experience is this?`,x:`P: It's like my skin isn't there. Whatever's outside comes right into my head, and my thoughts leak out into the room.`,
 w:`The world seems to invade the self and the self to leak out: a porous ego.`},
{id:'bo02',t:'somaticpass',d:['th','somatic','madefeel'],q:`Which first-rank symptom is this?`,x:`P: Someone aims a machine at my belly, and it makes something squirm and twist inside me. I'm not doing it. They're making my body feel it.`,
 w:`A bodily sensation imposed from outside. A tactile hallucination has no such outside agent.`},
{id:'bo03',t:'madefeel',d:['madeimpulse','somaticpass','insertion'],q:`Which first-rank symptom is this?`,x:`P: Sometimes I'm suddenly furious, but it isn't my anger. They put it into me, like switching on a light.`,
 w:`An emotion experienced as imposed from outside: a made feeling.`},
{id:'bo04',t:'madeimpulse',d:['madefeel','somaticpass','command'],q:`Which first-rank symptom is this?`,x:`P: Out of nowhere I get urges, like yelling at a stranger on the bus or hurting someone, that I'd never have. They put the urge in me.`,
 w:`An urge experienced as imposed from outside. A command hallucination is a voice telling the patient what to do.`},
{id:'bo05',t:'control',d:['madefeel','madeimpulse','somaticpass'],q:`Which first-rank symptom is this?`,x:`C: Right before you struck your boss, what were you feeling?
P: Nothing, really. My arm just went up. It wasn't me. Something was moving it.`,
 w:`An action experienced as made by an outside force: a made volitional act. An indirect question about feelings revealed it.`},
{id:'bo06',t:'audthoughts',d:['broadcast','commenting','insertion'],q:`Which first-rank symptom is this?`,x:`P: I think something, and a moment later I hear it spoken out loud, like an echo of my own thoughts.`,
 w:`Audible thoughts: thoughts heard as a voice. Thought broadcasting is the belief that others can hear them.`},
{id:'bo07',t:'argvoices',d:['commenting','audthoughts','funchallu'],q:`Which first-rank symptom is this?`,x:`P: There are two voices. One says I'm a good person, and the other says I should be punished. They argue about me as if I'm not in the room.`,
 w:`Voices discussing the patient in the third person. A commenting voice narrates what the patient is doing.`},
{id:'bo08',t:'funchallu',d:['ah','illusion','audthoughts'],q:`Which kind of hallucination is this?`,x:`P: It only happens when the water is running. Every time the tap goes on, there's a voice inside the sound telling me things. When it's off, nothing.`,
 w:`A real sound triggers a concurrent hallucination, and both are heard at once: a functional hallucination.`},
{id:'bo09',t:'ambitendency',d:['negativism','echopraxia','posturing'],q:`Which catatonic sign is this?`,x:`O: When the examiner extends a hand, the patient reaches out, stops, withdraws, reaches again, and withdraws again, never completing the handshake.`,
 w:`Starting and abandoning an action: ambitendency.`},
{id:'bo10',t:'catatonia',d:['mutism','avolition','pmr'],q:`Which syndrome is this?`,x:`O: A 24-year-old woman lies rigidly with her eyes open, doesn't speak, holds odd postures for long periods, resists attempts to move her, and her limbs stay where they are placed.`,
 w:`Mutism, immobility, negativism, posturing, and waxy flexibility together form catatonia. Keep a calm tone; assume she may understand everything.`},
{id:'bo11',t:'tapoddlang',d:['greasing','namingemo','openmind'],q:`Which technique is the clinician using?`,x:`P: A demon came into me last week.
C: When you say a demon came into you, what do you mean?
P: He's inside, but I don't hear him in my ears. It's like my thoughts but different.`,
 w:`Asking what an odd phrase means opened up the psychotic material.`},
{id:'bo12',t:'resistq',d:['actionsq','scenarioq','distanceq'],q:`Which technique is the clinician using?`,x:`P: The voice says I'm chosen, and I have to prove it by cutting off my hand.
C: How much do you think you can stop yourself from doing what the voice wants?
P: I've been fighting it. It's getting harder.`,
 w:`A command tied to a delusion of a greater good raises danger. This patient needs immediate safety measures.`},
{id:'bo13',t:'paleologic',d:['loose','overvalued','persec'],q:`Which thinking pattern is this?`,x:`P: Jesus was persecuted. I'm being persecuted. So I'm Jesus.`,
 w:`Identity inferred from a shared attribute (Rosenbaum's paleologic).`},
{id:'bo14',t:'incorporated',d:['paranoidspiral','cultransf','parataxic'],q:`What is happening?`,x:`O: A man raging that he is part of a plot suddenly stares at the interviewer and says, "You're one of them." Every reasonable statement the interviewer offers makes him more agitated.`,
 w:`He has incorporated the interviewer into the delusion. Stop reasoning, stay calm, and give space.`},
{id:'bo15',t:'koro',d:['somatic','deperson','porousego'],q:`Which phenomenon is this?`,x:`P: I have a terrible fear that my penis is shrinking and being pulled into my body. If it vanishes, I'll die.
O: He is from a community where this fear is widely known, and he is terrified but able to talk about it.`,
 w:`Koro, a culture-bound syndrome, a recognized idiom in some communities. Ask how others in the community explain it.`},
{id:'bo16',t:'expressedemo',d:['famstab','famblame','rejcycle'],q:`Which family factor is this?`,x:`O: A 22-year-old with schizophrenia has relapsed repeatedly. At the family meeting, his mother criticizes his every habit, his father is openly hostile, and an older sister hovers and does everything for him.`,
 w:`A critical, hostile, and over-involved climate is linked to relapse.`},
{id:'bo17',t:'famblame',d:['famdismiss','fammeds','expressedemo'],q:`Which unspoken family fear is the clinician answering?`,x:`P (father): I know you probably think we caused this.
C: No. Schizophrenia is a brain disease, and loving parents don't cause it.`,
 w:`The relative's fear is being blamed for the illness.`},
{id:'bo18',t:'famdismiss',d:['famblame','fammeds','expressedemo'],q:`Which unspoken family fear is the clinician answering?`,x:`P (mother): Nobody listens to us. We see him every day.
C: No one knows him better than you do. We depend on what you can tell us.`,
 w:`The relative's fear is that their knowledge will be dismissed.`},
{id:'bo19',t:'fammeds',d:['famblame','famdismiss','expressedemo'],q:`Which unspoken family fear is the clinician answering?`,x:`P (mother): The last time a doctor changed his medicines, he got worse.
C: I won't change anything before hearing what has worked for him.`,
 w:`The relative's fear is that treatment will be changed without hearing what has worked.`},
{id:'bo20',t:'akathisia',d:['pma','td','mannerism'],q:`Which condition is the likeliest explanation?`,x:`O: A patient with schizophrenia says he can't sit still since his antipsychotic was raised: "It's like my legs are full of electricity. I feel like I'll break out of my skin." The team plans to raise the dose again for "agitation."`,
 w:`Akathisia, a subjective, medication-induced restlessness easily mistaken for psychotic agitation, can be made worse by a higher dose. Ask about suicidal thoughts.`},
{id:'bo21',t:'command',d:['commenting','argvoices','audthoughts'],q:`Which kind of hallucination is this?`,x:`P: The voice says I should fail my exams. And if I fail, it says I should hurt myself.
O: This began as an indirect instruction before turning into a direct one.`,
 w:`Command hallucinations can begin indirectly. Always follow up on commands, and any self-harm command calls for a full safety assessment.`},

/* Ch. 13 cases */
{id:'pc01',t:'persdis',d:['pdd','cyclothymia','statedep'],q:`Which concept fits best?`,x:`O: A 41-year-old man describes fights with teachers by age 14, firings from six jobs, and three ended marriages, all with the same pattern of suspicion and rage. He has never had a mood episode and doesn't use substances.`,
 w:`An enduring, inflexible pattern across situations since adolescence, with consequences in many areas: a personality disorder.`},
{id:'pc02',t:'defstruct',d:['egosyn','temperament','persartifact'],q:`Which concept is this?`,x:`O: Faced with any threat of rejection, a patient responds with coolness, entitlement, and put-downs, whether with his boss, his wife, or his therapist. He has no other way of responding.`,
 w:`A small, rigid set of coping mechanisms used in every situation.`},
{id:'pc03',t:'histdx',d:['labeltheory','temperament','defstruct'],q:`Which principle is the attending applying?`,x:`O: A resident writes "histrionic personality disorder" after meeting a colorful, entertaining patient. The attending asks, "What in her life history shows this since adolescence?"`,
 w:`Personality diagnoses are historical. Interview behavior only guides what to explore.`},
{id:'pc04',t:'egosyn',d:['egodys','defstruct','persartifact'],q:`Which concept is this?`,x:`O: A man referred by his lawyer after threatening a coworker says he has no problem and that "everyone else is oversensitive." His boss and wife describe years of intimidation.`,
 w:`The patient sees no problem; others suffer, and the pressure comes from outside.`},
{id:'pc05',t:'egodys',d:['egosyn','labeltheory','temperament'],q:`Which concept is this?`,x:`P: I hate being alone, but I can't make myself go to anything. I've spent most of my life avoiding people. It's miserable.`,
 w:`The patient is distressed by the pattern and sees it as a problem.`},
{id:'pc06',t:'labeltheory',d:['histdx','labelslap','tradprej'],q:`Which concept is this?`,x:`O: A clinic coordinator says, "Another borderline? We're full." A staff member refuses to see a patient mainly because of the diagnosis in the chart, though the patient hasn't been interviewed.`,
 w:`The label itself stereotypes and stigmatizes, and affects care before the person is known.`},
{id:'pc07',t:'temperament',d:['defstruct','persartifact','histdx'],q:`Which concept is this?`,x:`P (mother): He was an intense, hard-to-soothe baby from day one, and he's always been slow to warm up to anyone. We never did anything differently with his sister.`,
 w:`Inborn behavioral tendencies that can persist into adulthood.`},
{id:'pc08',t:'persartifact',d:['temperament','egodys','labeltheory'],q:`What do these patterns reflect?`,x:`O: A 36-year-old's social history lists six jobs lost within a year each, two broken engagements, no friends from before age 25, and a long string of arguments with neighbors.`,
 w:`The tracks left by rigid defenses, visible in the social history.`},

/* Ch. 14 cases */
{id:'pd01',t:'anxprone',d:['poorempathic','psychprone','ocpd'],q:`Which Shea grouping does this suggest?`,x:`O: A patient's life is riddled with tension. He fears criticism, avoids new people, needs others to decide things, and is acutely aware of how others feel.`,
 w:`Obsessive-compulsive, dependent, and avoidant disorders share a life of tension and anxiety managed in different ways, and these patients can usually empathize.`},
{id:'pd02',t:'poorempathic',d:['anxprone','psychprone','aspd'],q:`Which Shea grouping does this suggest?`,x:`O: A patient's history shows a trail of people who felt used, ignored, or deceived: ex-partners, former coworkers, and two former therapists. He doesn't understand why they're upset.`,
 w:`Schizoid, antisocial, histrionic, and narcissistic disorders share reduced empathy and a trail of people who felt used.`},
{id:'pd03',t:'psychprone',d:['anxprone','poorempathic','hpd'],q:`Which Shea grouping does this suggest?`,x:`O: Under severe stress, a patient with magical thinking and unstable relationships briefly develops paranoid delusions that clear within hours. Her defenses resemble a child's.`,
 w:`Borderline, schizotypal, and paranoid disorders share immature defenses and micropsychotic episodes under stress.`},
{id:'pd04',t:'ocpd',d:['avpd','dpd','npd'],q:`Which disorder does this suggest?`,x:`P: I drive myself hard. I always feel I should do a little more. Nothing I do is ever enough, and I can't relax until it's perfect.`,
 w:`Extreme perfectionism and the sense of never having done enough.`},
{id:'pd05',t:'dpd',d:['avpd','hpd','bpd'],q:`Which disorder does this suggest?`,x:`C: Would you rather others make most of the important decisions at home?
P: Yes, definitely. My husband handles everything.
O: Later she asks softly, "Is this what you wanted to hear?"`,
 w:`Preference for others to decide, plus child-like helplessness.`},
{id:'pd06',t:'avpd',d:['szd','dpd','stpd'],q:`Which disorder does this suggest?`,x:`P: I'd love to have close friends, but I'm sure people won't like me. I haven't spoken to my neighbors in years. If someone did seem to like me, I'd assume they were just being polite.`,
 w:`Wants affection but fears rejection. Schizoid people don't seek relationships at all.`},
{id:'pd07',t:'szd',d:['avpd','stpd','ppd'],q:`Which disorder does this suggest?`,x:`P: I like being alone. I've never wanted friends, and I don't care what people think of me. I'm content.
O: His affect is bland and unchanging.`,
 w:`No desire for acceptance, and so no fear of rejection.`},
{id:'pd08',t:'aspd',d:['npd','hpd','bpd'],q:`Which disorder does this suggest?`,x:`O: A charming 30-year-old flatters the resident, then admits to lying to get jobs, fencing stolen goods, a DUI, and fights.
P: I see what people need. That's how you get what you want from them.`,
 w:`Recognizes others' needs but uses them to manipulate.`},
{id:'pd09',t:'hpd',d:['bpd','npd','hypomania'],q:`Which disorder does this suggest?`,x:`O: A 34-year-old woman in a flamboyant outfit tells her story in dramatic generalities with few details, bursts into tears and then laughs, and says she feels lost if she isn't the center of attention. Her history shows this since her teens.`,
 w:`Impressionistic style, a need for center stage, and rapid mood shifts. Because it has been present since adolescence, mania is less likely.`},
{id:'pd10',t:'npd',d:['hpd','aspd','ppd'],q:`Which disorder does this suggest?`,x:`O: A 45-year-old executive says most people aren't up to his standards. He boasts about his accomplishments and calls the resident "my friend." He is unmoved when describing a coworker's firing.`,
 w:`Feeling superior, boasting, and putting others down, with little empathy.`},
{id:'pd11',t:'bpd',d:['hpd','dpd','npd'],q:`Which disorder does this suggest?`,x:`P: When she leaves, I feel like I don't exist. I'd do anything to keep her there, and then I get so furious I can't stop. I cut myself to make the feeling go away. Without someone, I'm just empty.`,
 w:`Dependency that turns to rage, emptiness, and self-harm to relieve intense emotion.`},
{id:'pd12',t:'stpd',d:['szd','ppd','avpd'],q:`Which disorder does this suggest?`,x:`O: A 25-year-old describes getting clairvoyant messages and sensing a ghost-like presence at night. He speaks in vague, metaphorical phrases and is socially awkward, with no frank delusions or hallucinations.`,
 w:`Magical thinking and psychotic-like process without frank psychosis.`},
{id:'pd13',t:'ppd',d:['npd','stpd','szd'],q:`Which disorder does this suggest?`,x:`P: People are disloyal and dishonest. I watch for the tell. And I can't let anyone know I made a mistake.
O: He is haughty and guarded throughout.`,
 w:`Scouring for deception, haughty, unable to admit mistakes. The guardedness protects a deep sense of inferiority.`},
{id:'pd14',t:'papd',d:['ppd','ocpd','dpd'],q:`Which pattern does this suggest?`,x:`P: When my boss tells me to do something foolish, I do it, but I do it slowly to make a point. They never realize I'm doing it on purpose.`,
 w:`Quiet resistance to authority through slowness.`},
{id:'pd15',t:'labelslap',d:['signalsign','probeq','epiphen'],q:`What did the resident do wrong?`,x:`O: After ten minutes with a dramatic, colorfully dressed patient with mildly pressured, entertaining speech, a resident writes "histrionic personality disorder." Later history shows this is a change for her, with past depressions and a family history of bipolar disorder.`,
 w:`He made a premature personality diagnosis from interview behavior. The picture may be early hypomania.`},
{id:'pd16',t:'signalsign',d:['signalsx','probeq','histanchor'],q:`What kind of clue is this?`,x:`O: In the first minutes, a patient says in a small voice, "Is this what you wanted to hear?" He asks the resident to condemn his last doctor and fumbles with the microphone.`,
 w:`Observed behaviors in the first minutes. They point toward regions to explore, not toward a diagnosis.`},
{id:'pd17',t:'signalsx',d:['signalsign','probeq','epiphen'],q:`What kind of clue is this?`,x:`P: I cut myself a lot. And I've been in the ER for overdoses three times.`,
 w:`Reported self-mutilation and suicidal behavior point toward borderline personality disorder and call for safety assessment.`},
{id:'pd18',t:'probeq',d:['signalsign','signalsx','epiphen'],q:`What kind of question is this?`,x:`C: Do you often find yourself the center of attention, even when you don't mean to be?`,
 w:`A brief test question: one suggestive answer would warrant going further.`},
{id:'pd19',t:'statedep',d:['histdx','epiphen','persartifact'],q:`What problem does this history show?`,x:`O: A man says he has always been irritable. On careful history, the irritability, risky spending, and "grandiose ideas" appear only during weeks of reduced sleep and high energy, and are absent when he is well.`,
 w:`An apparent trait that is actually produced by a mood state.`},
{id:'pd20',t:'epiphen',d:['statedep','histanchor','behinc'],q:`Which technique is the clinician using?`,x:`P: I punch walls when I'm angry.
C: What's happened because of that? Has it caused trouble with landlords or relationships?
P: Evicted twice, and my wife left.`,
 w:`Asking about the consequences confirms that the trait is pathologically severe.`},
{id:'pd21',t:'histanchor',d:['epiphen','statedep','behinc'],q:`Which technique is the clinician using?`,x:`C: You said you've always had a short fuse. Has that been typical of you, back in junior high and high school?
P: Yes. I was suspended twice for fighting.`,
 w:`Anchoring the trait in adolescence to confirm persistence.`},

/* Ch. 15 cases */
{id:'pm01',t:'partself',d:['merger','splitting','selfobject'],q:`Which developmental stage does this suggest?`,x:`O: A 28-year-old with long-standing odd beliefs intermittently stares off during the interview and misses the clinician's nods and smiles. He says he can sometimes influence people's thoughts from across a room, and is briefly suspicious of the interviewer.`,
 w:`Blurred boundaries between self and world: intermittent preoccupation, missed nonverbal cues, magical thinking, and flickers of paranoia. Go slowly, with low immediacy.`},
{id:'pm02',t:'merger',d:['transitional','holdenv','selfobject'],q:`Which concept is this?`,x:`P: When my girlfriend falls asleep before me, I feel panicky, like a lost child in a department store. Then I get furious at her. I can't be alone.`,
 w:`She needs someone near to feel whole and safe, and fury follows when the person is unavailable.`},
{id:'pm03',t:'transitional',d:['merger','selfobject','holdenv'],q:`What is the wristband?`,x:`O: A patient never takes off a leather wristband her partner gave her, touches it when anxious, and becomes distressed when asked to remove it for an exam.`,
 w:`An item carrying the comfort of a merger object. It's a signal sign to explore borderline process.`},
{id:'pm04',t:'holdenv',d:['merger','transitional','selfobject'],q:`What did Winnicott call this?`,x:`O: A supervisor explains that an infant held by a caregiver feels whole and safe, and that this early setting is an essential way-station in developing a self.`,
 w:`The holding environment.`},
{id:'pm05',t:'splitting',d:['grandpole','idealpole','merger'],q:`Which process is this?`,x:`P: The last clinician was awful. Cold, the worst I've ever had. But you seem wonderful, the best.
O: Ten minutes later, after being told the unit she wants isn't appropriate:
P: You're just like all the rest.`,
 w:`Polarized language and a quick flip from all good to all bad. Choose words carefully, and set goals together.`},
{id:'pm06',t:'selfobject',d:['merger','transitional','compshift'],q:`What does the mentor serve as?`,x:`O: A man with a fragile sense of self feels steady only when his mentor praises him, and flat when no one is around.`,
 w:`An experience with another person that makes his self feel whole, consistent, and safe: a selfobject.`},
{id:'pm07',t:'grandpole',d:['idealpole','splitting','merger'],q:`Which route to safety is this?`,x:`P: Listen, my friend, here's what's going on. I'm the best attorney in the state.
O: He dismisses a colleague's illness with a shrug.`,
 w:`Boasting, "my friend," and little empathy: safety through one's own greatness.`},
{id:'pm08',t:'idealpole',d:['grandpole','splitting','mentaliz'],q:`Which route to safety is this?`,x:`P: You are the most brilliant doctor in the hospital. The other residents don't compare. I knew from the first minute that you were exceptional.`,
 w:`Superlatives about an important person: safety through an idealized figure. Accept it for now, though it can reverse if the hero is found flawed.`},
{id:'pm09',t:'stablesel',d:['splitting','grandpole','merger'],q:`Which structure does this suggest?`,x:`O: A patient describes a friend's illness with obvious empathy and sees her boss as demanding but fair. When the resident gently points out a contradiction, she thinks it over and says, "I hadn't looked at it that way."`,
 w:`Realistic views, empathy, and openness to gentle challenge suggest a stable self, for whom interpretations are safer.`},
{id:'pm10',t:'compshift',d:['movewith','gentlelimit','defusing'],q:`What is the resident doing?`,x:`O: A reluctant executive, sent by his wife, asks whether the resident is "up to this." The resident lets him choose where to sit and which topic to start with, and doesn't correct him, so he doesn't feel one-down.`,
 w:`A response that puts the patient one-up, maintaining his mirror transference and sense of safety.`},
{id:'pm11',t:'genuinecompl',d:['defusing','bragging','upr'],q:`Which specific technique is the clinician using?`,x:`P: I've run three companies. Honestly, I doubt you could follow how a deal like this works.
C: You clearly know your field inside and out. I'd never have understood that from the chart.`,
 w:`A sincere compliment. A false one would violate trust.`},
{id:'pm12',t:'askhelp',d:['bgoals','miracle','bragging'],q:`Which specific technique is the clinician using?`,x:`O: A 16-year-old with a grandiose, one-up style says he doesn't need to be here.
C: Your parents told me their side. I'd really like your help understanding what's actually going on.`,
 w:`Asking for help puts him in the expert role, with a person-centered rationale.`},
{id:'pm13',t:'nvleak',d:['blandness','incongruence','kinrecip'],q:`What did the patient detect?`,x:`O: The resident believes his face is neutral, but he is bored: his eyes drift to the clock and his jaw tightens. The patient, who idealized him ten minutes earlier, says abruptly, "You think I'm boring, don't you?"`,
 w:`Unintended signals of the clinician's own feelings. Patients who rely on splitting may read them instantly.`},
{id:'pm14',t:'mentaliz',d:['identification','imagproj','naivete'],q:`Which capacity appears to be limited?`,x:`O: A man with narcissistic structure can't imagine why his employees are upset about missed paychecks: "What's the problem?" He can describe what they did, but not what they thought or needed.`,
 w:`He can't imagine others' thoughts and needs, a foundation of empathy.`},
{id:'pm15',t:'framedep',d:['btasks','miracle','matrixq'],q:`Which technique is the clinician using?`,x:`O: In the closing of a first interview with a patient who has become rapidly attached:
C: I'd like us to talk about frequency and contact. How will we know if you're becoming too dependent on me?`,
 w:`Raising the dependency early, openly, and planning the frame, rather than waiting for a crisis.`}
);
