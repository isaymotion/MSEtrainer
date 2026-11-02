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
  21:`Vantage Points: Bridges to Psychotherapy`,
  22:`Motivational Interviewing (MI): A Foundation Stone in Collaborative Interviewing`,
  23:`Medication Interest Model (MIM): Moving From Mere "Adherence" to Genuine Interest and Effective Use`,
  AI:`An Introduction to the Facilic Schematic System: A Shorthand for Supervisors and Supervisees`,
  AIII:`The Written Document/Electronic Health Record (EHR): Effective Strategies`
};
const DOMAINS=[
  {k:'tp',n:'Thought process',g:'mse'},{k:'tc',n:'Thought content',g:'mse'},{k:'pe',n:'Perception',g:'mse'},
  {k:'af',n:'Mood and affect',g:'mse'},{k:'sp',n:'Speech',g:'mse'},{k:'be',n:'Behavior and motor',g:'mse'},
  {k:'cg',n:'Cognition',g:'mse'},{k:'in',n:'Insight and judgment',g:'mse'},
  {k:'aa',n:'Appearance',g:'mse'},{k:'at',n:'Attitude and rapport',g:'mse'},
  {k:'en',n:'Engagement and empathy',g:'p1',ch:1},{k:'sf',n:'Safety and the alliance',g:'p1',ch:2},
  {k:'ds',n:'Interview structure',g:'p1',ch:3},{k:'fa',n:'Facilics',g:'p1',ch:4},
  {k:'va',n:'Validity techniques',g:'p1',ch:5},{k:'pb',n:'The person beneath',g:'p1',ch:6},
  {k:'ap',n:'Assessment and planning',g:'p1',ch:7},{k:'nv',n:'Nonverbal behavior',g:'p1',ch:8},
  {k:'md',n:'Mood disorders',g:'p2',ch:9},{k:'bm',n:'Beneath the mood disorder',g:'p2',ch:10},
  {k:'po',n:'Psychotic disorders',g:'p2',ch:11},{k:'bo',n:'Beneath the psychosis',g:'p2',ch:12},
  {k:'pc',n:'Personality: core concepts',g:'p2',ch:13},{k:'pd',n:'Personality: differential',g:'p2',ch:14},
  {k:'pm',n:'Personality: psychodynamics',g:'p2',ch:15},
  {k:'su',n:'Suicide assessment',g:'p3',ch:17},{k:'vi',n:'Violence assessment',g:'p3',ch:18},
  {k:'ag',n:'Anger and disengagement',g:'skill',ch:19},{k:'cu',n:'Culture and identity',g:'skill',ch:20},
  {k:'vp',n:'Vantage points',g:'skill',ch:21},
  {k:'mi',n:'Motivational interviewing',g:'collab',ch:22},{k:'mm',n:'Medication Interest Model',g:'collab',ch:23},
  {k:'fs',n:'Facilic schematics',g:'appx',ch:'AI'},{k:'wd',n:'The written document',g:'appx',ch:'AIII'}
];
const GROUPS=[{g:'mse',n:'Mental status'},{g:'p1',n:'Clinical interviewing, Part 1'},{g:'p2',n:'Clinical interviewing, Part 2'},{g:'p3',n:'Clinical interviewing, Part 3: suicide and violence'},{g:'skill',n:'Clinical interviewing, Part 4'},{g:'collab',n:'Collaborative interviewing'},{g:'appx',n:'Appendices: schematics and the written document'}];
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
/* ===== Violence assessment (Shea Ch. 18) ===== */
/* Violence assessment — Shea Ch. 18. Drafted 2026-11-02. */
const Q_VI_DOM=`Which of the three domains of violence best fits?`;
const Q_VI_RISK=`Which risk-factor area is this?`;
const Q_VI_TET=`Which element of the tetrad of lethality for violence is this?`;
const Q_VI_PSY=`Which dangerous psychotic process (or framework) should the clinician pursue here?`;
const Q_VI_REG=`Which region of the CADE Approach is the clinician exploring?`;
const Q_VI_TECH=`Which technique or principle is the clinician using?`;
const Q_VI_GEN=`Which concept from Shea's violence assessment is this?`;

T('vi_affective','Affective violence','vi',[18],
 `Meloy's category of violence acted out impulsively out of intense anger and emotion, often in response to interpersonal stress and frequently under the influence of alcohol or drugs. It is the usual arena of intimate partner violence, child and older adult abuse, and violence at work, in schools, or on the streets.`,
 `Hot and unplanned. Predatory violence is thought out beforehand, often pleasurable and remorseless; biologically induced violence comes directly from brain pathophysiology or structural damage.`,
 `If the anger is still simmering during the interview after an affective episode, consider admission for a "cool down."`);
T('vi_predatory','Predatory violence','vi',[18],
 `Meloy's category in which the perpetrator has thought out the violence beforehand, often derives pleasure from the act, and feels little or no remorse. It is the domain of many rapists, sadistic perpetrators against children, and sociopathic (especially psychopathic) personalities.`,
 `Planned and cold, with a calm demeanor that is almost always a mask. Affective violence is impulsive and driven by intense emotion.`,
 `"Look through" the calm affect of a possible predator; never let a composed demeanor lull you into a false sense of safety.`);
T('vi_biological','Biologically induced violence','vi',[18],
 `Shea's third category: violence directly caused by brain pathophysiology (e.g., schizophrenia, mania especially dysphoric mania, acute LSD, PCP or "bath salts") or structural damage (e.g., brain tumor, partial complex seizures, intracranial infection, brain trauma, multiple sclerosis, Alzheimer's disease).`,
 `The driver is the brain disorder itself, not anger at a person or a planned goal. The three categories can also combine.`,
 `In the ED, look for intoxication and organic signs (alcohol on the breath, unsteady gait, nystagmus, pupillary signs, confusion); every violent patient needs a physical exam, vital signs, and labs as indicated.`);
T('vi_structured','Structured (actuarial) risk assessment','vi',[18],
 `Instruments such as the HCR-20, COVR and VRAG that gather static and dynamic statistical risk factors (an "actuarial approach"). They have not been shown to predict immediate (24 to 48 hours) or imminent (up to 2 weeks) violence, but they are of definite value for prediction over several months.`,
 `Suited to ongoing care or forensic questions over months. Shea does not recommend routine use in the initial assessment: they take time, pull your eyes off the patient, and disrupt the natural flow of conversation.`,
 `Learn the HCR-20 and COVR for longer-term questions; for tonight's disposition, rely on the interview, the CADE Approach and corroborative sources.`);
T('vi_pastviol','History of past violence','vi',[18],
 `The single most robust statistical indicator of future violence. Because poor impulse control may be part of the picture, also ask about destruction of property, criminal record, reckless driving, reckless spending, sexual acting out, and suicide attempts.`,
 `A lifetime statistical risk factor. A recent violent episode (the first tetrad element) is the act that brings the patient in now.`,
 `"Apart from fights, have you ever broken things when angry, been arrested, or driven recklessly?"`);
T('vi_demog','Sex, age, and environment','vi',[18],
 `Young men have the highest rate of violent behavior. Growing up in an impoverished area where violence is frequent and peer pressure toward violence is strong, or in a family where one was abused or watched others being abused, also raises risk.`,
 `Demographic and developmental background. The HCR-20 historical items add young age at first violence, relationship instability, employment problems, early maladjustment, and prior supervision failure.`,
 `"Growing up, was there hitting in your home, either to you or to someone you watched?"`);
T('vi_psychdx','Psychiatric disorders as risk factors','vi',[18],
 `Alcohol and street drug use are the most significant diagnoses. Others are antisocial personality disorder (its small psychopathic subset is far more dangerous), borderline personality disorder, disorders due to a general medical condition (including intellectual disability and dementia), and disorders with psychotic or manic process. Most people with psychosis are safe most of the time.`,
 `A diagnosis-level risk. The dangerous psychotic process tetrad element requires specific symptoms active at that time (e.g., paranoid delusions, command hallucinations), not the diagnosis alone.`,
 `Intermittent explosive disorder applies only when no other disorder explains the violence; it is not appropriate in domestic violence if alcohol, drugs, or antisocial personality disorder are present.`);
T('vi_hcrfactors','Other HCR-20 risk factors','vi',[18],
 `The revised HCR-20 groups risk into historical, clinical, and risk management items. Beyond the factors above: young age at first violence, relationship instability, employment problems, early maladjustment, prior supervision failure; lack of insight, negative attitudes; plan lacks feasibility, exposure to destabilizers, lack of interpersonal support, noncompliance with past remediation, and current stress.`,
 `Most of these surface naturally in the social history, the past treatment history, and the history of present stressors, rather than through a separate checklist.`,
 `Social history: relationships, work, supports. Past treatment: probation failures, noncompliance. Present illness: insight, attitudes, current stress.`);
T('vi_tet_recent','Tetrad: recent violent episode','vi',[18],
 `First element of the tetrad of lethality: the patient presents after a recent serious act of violence, often brought in by police. Concern rises with the severity of the act and the persistence of hostility, if the victim has been a target before, and in a "powder keg" environment (the former victim present, others with poor impulse control, alcohol or drug use).`,
 `About the act that brought the patient in and the setting he is returning to. Past violence is the long-term statistical history.`,
 `Hunt for a powder keg: "Who will be at the house when you go back tonight? Will there be drinking?"`);
T('vi_tet_psych','Tetrad: dangerous psychotic process','vi',[18],
 `Second element of the tetrad: the presence of a type of psychotic process that may precipitate violence (command hallucinations, alien control, hyper-religiosity, paranoid process, or marked manic symptoms). A patient with a serious mental illness is usually no more dangerous than others unless such a process is active at that time.`,
 `The issue is the active process now, not the diagnosis. A history of schizophrenia in remission is not this element.`,
 `Once psychosis is spotted, actively pursue the dangerous processes rather than stopping at "psychotic features present."`);
T('vi_tet_intent','Tetrad: interview indication of intent','vi',[18],
 `Third element of the tetrad: the patient's own description, during the interview, of violent ideation, planning, and intent, including reflected intent (feelings, thoughts, planning behaviors and actions that suggest impending violence and may reveal real intent better than stated intent).`,
 `Comes from the patient's own words in the interview. When the patient denies and the warning comes from family, police or records, it is lying with collaborative evidence.`,
 `Weigh what he has done (bought, rehearsed, waited outside her house) more than "I'd never really do it."`);
T('vi_tet_lying','Tetrad: lying with collaborative evidence','vi',[18],
 `Fourth element of the tetrad: the patient is lying, and significant corroborative evidence suggests violence is likely. Do not rely on the patient's report of intent; family, friends, police, therapists, crisis clinicians, medical records (arrests, commitments, restraining orders), court records and social media may hold critical information.`,
 `The danger signal comes from outside sources contradicting a denying patient, not from the patient's own disclosures.`,
 `Record collateral information and call the receiving facility directly; unrecorded information is a major reason involuntary commitments are reversed at the door.`);
T('vi_cmdtriad','Command hallucinations, alien control, hyper-religiosity','vi',[18],
 `The three psychotic processes of concern in both suicide and violence assessment, to be actively pursued whenever psychosis is spotted. With hyper-religiosity, pay particular attention to "missions from God to rid the earth of some evil."`,
 `Danger arises from voices, a sense of outside control, or a religious mission. Paranoid process is the additional, violence-specific risk: a perceived persecutor the patient may act against in "self-defense."`,
 `"Has God given you any ideas of how to get rid of them? Have you thought of anyone in particular?"`);
T('vi_paranoid','Paranoid process','vi',[18],
 `Paranoia (seen in schizophrenia, schizoaffective disorder, bipolar disorder especially dysphoric mania, and psychotic depression) is a violence risk factor of immense importance. It is not enough to find the delusion; the clinician must find out what the patient intends to do about it and whether he has acted on it.`,
 `Fear of persecutors drives violence seen as protective. Acting on the delusion as a real threat (e.g., arming oneself) should strongly suggest hospitalization.`,
 `"What have you thought about doing to protect yourself? Have you armed yourself with anything at home?"`);
T('vi_knollmeloy','Knoll and Meloy progression','vi',[18],
 `A four-step cognitive progression seen in psychotic mass murderers, which Shea also applies to paranoid violence toward individuals and to nonpsychotic grievance: (1) a perceived present danger or wrong, (2) no nonviolent avenue, so violence seems defensive and good, (3) fantasizing the violence, (4) resolve and implementation. Such perpetrators often give warnings, act alone, plan, and are convinced of their beliefs.`,
 `A staged progression from grievance to action; locating the step shows how close the patient is to acting. It is not limited to psychosis.`,
 `Step 2: "Have you tried anything to reason or compromise with these people?" Step 4: "Do you have a plan? Have you picked a date?"`);
T('vi_dvcaveat','Domestic violence caveats','vi',[18],
 `Perpetrators frequently minimize or deny, and victims often give a better history. Because domestic violence is driven by power and control, the assessment itself may raise risk to the victim: consult, do safety planning with the victim before interviewing the perpetrator, never ask the alleged batterer about violence in front of the victim, and do not tell him what the victim said; use police, neighbors, courts, or medical records instead.`,
 `About protecting the victim while gathering information. Snider's victim questions (escalation over 6 months, weapon use or threat, capable of killing you, beaten while pregnant, violent and constant jealousy) belong here.`,
 `See her alone first: "Do you believe he is capable of killing you?"`);
T('vi_cade','CADE Approach','vi',[18],
 `The Chronological Assessment of Dangerous Events: the CASE Approach adapted to violent and homicidal ideation. After setting the stage, the clinician explores presenting, recent, past, and immediate violent events, in that order, to learn whether a concrete plan has been reached, whether action has been taken, and what reflected intent exists.`,
 `An interviewing strategy for the immediate and imminent window, unlike actuarial instruments that gather statistical factors.`,
 `Presenting event, then the past 2 months, then past history, then right now.`);
T('vi_presenting','CADE: presenting event','vi',[18],
 `When the patient comes in after a violent episode, the clinician builds a verbal video with behavioral incidents (rewinding when a part is skipped), clarifies the actual acts, motivation, how pre-planned versus impulsive it was, the patient's feelings about the act and the victim, and what happened afterward.`,
 `Today's act. The recent region covers ideation, planning and action over the past 2 months.`,
 `Replace "Did you hurt her badly?" with "Did she need stitches? Were X-rays taken?"`);
T('vi_recent','CADE: recent violent events','vi',[18],
 `The past 2 months, an extremely important region. The clinician uncovers the extent of planning and action toward the potential victim (method, timing, place, accomplices), then the frequency and intensity of violent thoughts, relying on behavioral incidents, gentle assumption, denial of the specific, the catch-all question and symptom amplification.`,
 `A two-month window focused on planning. The past region reaches further back for the worst act, number of acts, weapons, and arrests.`,
 `"How many times in the past 5 to 8 weeks have you thought about hurting her: daily, a couple of times a day, more often?"`);
T('vi_past','CADE: past violent events','vi',[18],
 `Key elements: the worst act of violence, approximate number of acts, the most recent act, prior violence against anyone now targeted, past weapon use (and whether it is being considered now), and arrests, jail, or restraining orders. This region may give the best evidence of a predator. Do not overdo it in the initial assessment.`,
 `Lifetime history. The immediate region asks about intent right now and after leaving.`,
 `"What's the worst thing you've ever done to someone when you were angry?"`);
T('vi_immediate','CADE: immediate violent ideation','vi',[18],
 `Asked calmly and directly: is the patient planning to hurt the named person now, how in control he feels, whether thoughts will return after leaving, what he will do with them, and whether he intends to seek out the person. Safety contracts add little here and have no deterrent value; with predators, candor about trust works better. The patient may assault you; immediate predictors include irritability, boisterousness, threats, attacks on objects, and confusion.`,
 `Right now and after leaving the interview, unlike the recent and past regions.`,
 `"Right now, are you planning on hurting or killing her? If the thoughts come back after you leave, what will you do?"`);
T('vi_stage','Setting the stage for violence inquiry','vi',[18],
 `Opening the topic of violence through one of many homicidal gates (psychosis, interpersonal conflict, money and practical concerns, revenge, jealousy, political concerns, gangs and organized crime, terroristic violence, violence for pleasure and pathologic sexual desire), and screening routinely even when suspicion is low.`,
 `About entering the topic. Asking about the partner's violence first is a specific stage-setting sequence for suspected IPV.`,
 `A simple bridge works even in a routine intake: "Have you ever lost your temper?"`);
T('vi_otherfirst','Asking about the other person\'s violence first','vi',[18],
 `With a suspected perpetrator of IPV, after he describes his worst argument, the clinician first asks whether the partner ever lost control and hit him, then asks about his own violence. Feeling equally heard makes the patient safer with the clinician and his self-report more valid.`,
 `About the order of questions. Gentle assumption is the phrasing of the follow-up ("how frequently..., if at all?"), and normalization frames the question as something others experience.`,
 `"When you argue like that, has she ever lost control and hit you?" Then: "How about you, during arguments like that?"`);
T('vi_superego','Probing for superego and predation','vi',[18],
 `In exploring past violence, asking about thoughts and feelings before, during, and after violent acts (Meloy), and questions such as "Is there anything you have done that has made you feel guilty?" and "If the price were right, is there anything you would not do?" to see whether guilt and superego constraints exist and whether violent thoughts trouble or arouse the patient.`,
 `Looks for the presence or absence of guilt. Induction to bragging uses the predator's pride to draw out dangerous ideation.`,
 `"How did you feel afterward?" Violent thoughts that arouse rather than trouble the patient are the more disturbing finding.`);

V.push(
{id:'vi01',t:'vi_affective',d:['vi_predatory','vi_biological','vi_psychdx'],q:Q_VI_DOM,x:`Jun, 34, a tricycle driver, had been drinking with friends when his wife confronted him about money. He shoved her into the wall in the middle of the shouting. The next morning he is tearful and says, "I just snapped. I wasn't thinking."`,
 w:`Impulsive violence out of intense anger, in response to interpersonal stress and under alcohol, is affective violence. Predatory violence is thought out beforehand and carries little remorse.`},
{id:'vi02',t:'vi_affective',d:['vi_predatory','vi_biological','vi_tet_lying'],q:Q_VI_DOM,x:`O: A 26-year-old man in the ER punched a coworker who mocked him an hour ago.
O: He is red-faced, fists clenched, voice rising each time the coworker is mentioned.
P: He had it coming. If I see him again I don't know what I'll do.`,
 w:`Emotion-driven, unplanned violence with anger still simmering is affective violence; Shea says this ongoing anger may call for hospitalization to "cool down." Nothing suggests planning or pleasure (predatory) or a brain-based cause (biologically induced).`},
{id:'vi03',t:'vi_predatory',d:['vi_affective','vi_biological','vi_paranoid'],q:Q_VI_DOM,x:`P: I waited three months for the right time to get back at my old business partner. I knew his schedule by heart.
O: He smiles slightly while describing the assault and shows no sign of regret.
P: Honestly, it felt good.`,
 w:`Violence thought out in advance, pleasurable, and without remorse is predatory violence. Affective violence is impulsive; there is no persecutory delusion to suggest paranoid process.`},
{id:'vi04',t:'vi_predatory',d:['vi_affective','vi_biological','vi_tet_lying'],q:Q_VI_DOM,x:`O: Brought in by police a few hours after a planned assault on a neighbor.
O: He is composed, polite, and joking with the nurses.
P: Look, I'm the calmest guy in this whole ER, doc.`,
 w:`A planned act followed by a calm, charming presentation fits predatory violence, and Shea warns that the predator's calm is almost always a mask to "look through." Affective violence shows ongoing anger rather than polished calm.`},
{id:'vi05',t:'vi_biological',d:['vi_affective','vi_predatory','vi_demog'],q:Q_VI_DOM,x:`Lola Nena, 78, with Alzheimer's disease and no lifelong history of violence, has begun scratching and hitting the aides during evening care. She is disoriented and cannot recall the episodes afterward.`,
 w:`Violence directly caused by structural brain disease such as Alzheimer's disease is biologically induced violence. It is not an angry reaction to a specific person (affective) or a planned act (predatory).`},
{id:'vi06',t:'vi_biological',d:['vi_affective','vi_predatory','vi_paranoid'],q:Q_VI_DOM,x:`O: A 22-year-old swallowed a synthetic drug a friend gave him at a party.
O: He is confused, has nystagmus and an unsteady gait, and swings wildly at the guards without any clear target.`,
 w:`Violence from acute drug ingestion (pathophysiology) with confusion and neurological signs is biologically induced violence. There is no persecutory belief guiding it, as in paranoid process, and no planning.`},
{id:'vi07',t:'vi_structured',d:['vi_hcrfactors','vi_cade','vi_tet_lying'],q:Q_VI_GEN,x:`A resident wants to administer a full HCR-20 to decide whether a threatening patient can go home from the ER tonight. The consultant explains that such instruments have not been shown to predict violence within 24 to 48 hours or over the next 2 weeks, though they help with prediction over months.`,
 w:`This is Shea's view of structured (actuarial) risk assessment: valuable for longer timeframes, not proven for immediate or imminent risk. The HCR-20 factors themselves are a separate risk-factor list; the CADE is the interview strategy for tonight's question.`},
{id:'vi08',t:'vi_structured',d:['vi_cade','vi_hcrfactors','vi_pastviol'],q:Q_VI_GEN,x:`A forensic consultant is asked by a court for a relative prediction of violence over the next 6 months. She uses COVR risk software, which has been validated for the 20 weeks after its completion.`,
 w:`Longer-term forensic prediction is where structured, actuarial tools appear valuable, possibly more accurate than many clinicians. The CADE Approach targets immediate and imminent risk through interviewing.`},
{id:'vi09',t:'vi_pastviol',d:['vi_demog','vi_tet_recent','vi_hcrfactors'],q:Q_VI_RISK,x:`A man is seen for depression. His record shows three assaults over ten years, no recent incident, and nothing violent brought him in today. The supervisor says, "If you want to bet, here is where to put your money."`,
 w:`A history of previous violence is the single most robust statistical indicator of future violence. The recent violent episode tetrad element refers to a recent act that brings the patient in, which is absent here.`},
{id:'vi10',t:'vi_pastviol',d:['vi_hcrfactors','vi_psychdx','vi_tet_recent'],q:Q_VI_RISK,x:`C: Apart from fights, have you ever broken things when you were angry?
C: Have you ever been arrested, or driven recklessly, or spent money in a way you regretted?
C: Have you ever tried to hurt yourself?`,
 w:`Following Tardiff, the clinician maps past violence and impulse-control problems (property destruction, criminal record, reckless driving and spending, suicide attempts) as part of the past-violence risk area. These are not the HCR-20 risk-management items.`},
{id:'vi11',t:'vi_demog',d:['vi_pastviol','vi_hcrfactors','vi_psychdx'],q:Q_VI_RISK,x:`A 19-year-old man grew up in a poor neighborhood where gang fights were common and friends pushed each other to fight. As a boy he often watched his father beat his mother. He has never hurt anyone himself.`,
 w:`Young male sex, an impoverished violent environment with peer pressure, and witnessing family abuse are the sex, age, and environment risk factors. He has no past violence of his own.`},
{id:'vi12',t:'vi_demog',d:['vi_hcrfactors','vi_pastviol','vi_psychdx'],q:Q_VI_RISK,x:`C: Tell me about the place where you grew up. Was there a lot of fighting around you?
C: Growing up, was there hitting in your home, either to you or to someone you watched?`,
 w:`Asking about the environment of upbringing and about being abused or witnessing abuse targets the sex, age, and environment risk area. HCR-20 historical items cover different points such as early maladjustment and supervision failure.`},
{id:'vi13',t:'vi_psychdx',d:['vi_demog','vi_tet_psych','vi_hcrfactors'],q:Q_VI_RISK,x:`The resident lists the patient's diagnoses: alcohol use disorder, methamphetamine (shabu) use, and borderline personality disorder. He is not psychotic. The consultant notes that the first two are the most significant diagnoses for violence risk.`,
 w:`Shea names alcoholism and street drug use as the most significant psychiatric correlates of violence, with personality disorders also listed. Dangerous psychotic process needs active psychotic symptoms, which are absent.`},
{id:'vi14',t:'vi_psychdx',d:['vi_affective','vi_hcrfactors','vi_pastviol'],q:Q_VI_RISK,x:`A resident writes "intermittent explosive disorder" for a husband who hits his wife when drunk. The supervisor points out that the diagnosis cannot be used when another disorder, such as alcohol use, could explain the violence.`,
 w:`This correction concerns psychiatric disorders as risk factors: intermittent explosive disorder applies only when nothing else explains the violence, and it is not appropriate in domestic violence with alcohol use. Calling the violence "affective" describes its style, not its diagnosis.`},
{id:'vi15',t:'vi_hcrfactors',d:['vi_structured','vi_demog','vi_pastviol'],q:Q_VI_RISK,x:`Over the interview it emerges that the patient twice violated his probation, has had three short-lived jobs, separated from two partners, dropped out of an anger program, and says, "There's nothing wrong with me."`,
 w:`Prior supervision failure, employment problems, relationship instability, noncompliance with remediation, and lack of insight are additional HCR-20 risk factors. Structured risk assessment refers to the instrument's role, not these individual items.`},
{id:'vi16',t:'vi_hcrfactors',d:['vi_structured','vi_demog','vi_psychdx'],q:Q_VI_GEN,x:`A supervisor tells the resident that lack of interpersonal support, exposure to destabilizers, and current stress need not be asked as a checklist. They will surface naturally in the social history, the past treatment history, and the history of present stressors.`,
 w:`These are the HCR-20 clinical and risk-management factors, which Shea says emerge naturalistically across the interview. The point is about gathering the factors, not about using a structured instrument.`},
{id:'vi17',t:'vi_tet_recent',d:['vi_tet_intent','vi_tet_psych','vi_tet_lying'],q:Q_VI_TET,x:`O: Brought in by barangay officials hours after attacking his brother during a quarrel.
O: He glares at the door and curses his brother's name throughout the interview.
O: No psychotic symptoms are evident.`,
 w:`Presenting after a recent serious act of violence, with persisting hostility, is the first tetrad element, and the ongoing anger heightens concern. He is not psychotic, and no collateral contradicts him.`},
{id:'vi18',t:'vi_tet_recent',d:['vi_tet_intent','vi_tet_psych','vi_tet_lying'],q:Q_VI_TET,x:`A man brought in after beating his wife last night wants to go home tonight. His wife is still there, and his drinking companions, who also fight easily, are staying at the house.`,
 w:`A recent violent episode plus a "powder keg" environment (the former victim present, others with poor impulse control, alcohol) belongs to the first tetrad element. The risk comes from the act and setting, not from interview statements of intent.`},
{id:'vi19',t:'vi_tet_psych',d:['vi_tet_recent','vi_tet_intent','vi_tet_lying'],q:Q_VI_TET,x:`Marites, 29, with bipolar disorder, is in a dysphoric manic episode. She is irritable and convinced that her neighbor is poisoning her water. She has not hurt anyone.`,
 w:`An active paranoid delusion during dysphoric mania is a dangerous psychotic process, the second tetrad element. There is no recent violent act and no stated plan.`},
{id:'vi20',t:'vi_tet_psych',d:['vi_tet_recent','vi_tet_intent','vi_tet_lying'],q:Q_VI_TET,x:`A resident writes, "Has schizophrenia, therefore dangerous." The supervisor disagrees: the diagnosis alone does not make him dangerous. What matters is that this week he hears voices telling him to punish his uncle.`,
 w:`The second tetrad element is a specific psychotic process active at that time (here, command hallucinations), not the diagnosis. Shea stresses that most people with psychosis are safe most of the time.`},
{id:'vi21',t:'vi_tet_intent',d:['vi_tet_recent','vi_tet_psych','vi_tet_lying'],q:Q_VI_TET,x:`P: I think about it every day now.
P: I already know where he parks his jeepney at night.
P: If he comes near my family again, I'll do it.`,
 w:`The patient himself reveals violent ideation, planning, and intent during the interview, the third tetrad element. He is not psychotic and has not yet acted.`},
{id:'vi22',t:'vi_tet_intent',d:['vi_tet_lying','vi_tet_recent','vi_tet_psych'],q:Q_VI_TET,x:`P: I'd never hurt her, doc.
P: I just bought a knife for protection, and I've been waiting outside her boarding house most nights to see who she's with.`,
 w:`His own account of buying a weapon and waiting near her is reflected intent, which may reveal real intent better than his stated denial; it comes from the interview itself. Lying with collaborative evidence would need outside sources contradicting him.`},
{id:'vi23',t:'vi_tet_lying',d:['vi_tet_intent','vi_tet_recent','vi_tet_psych'],q:Q_VI_TET,x:`P: I'm fine. I have no problem with anyone at work.
O: His sister reports that he showed her a gun last week and named his foreman.
O: The record shows a prior restraining order.`,
 w:`The patient denies, but family and records point to violence: the fourth tetrad element. Shea's first rule is not to rely on the patient's own report of intent.`},
{id:'vi24',t:'vi_tet_lying',d:['vi_tet_intent','vi_tet_recent','vi_tet_psych'],q:Q_VI_TET,x:`P: It was just a joke. I'm not going to do anything.
O: The school counselor forwards his recent social media posts threatening classmates by name.`,
 w:`Collateral evidence (school staff, social media) contradicting a denying patient is the fourth tetrad element; Shea notes that potential mass murderers often leave a trail online. The danger signal did not come from his own interview statements.`},
{id:'vi25',t:'vi_cmdtriad',d:['vi_paranoid','vi_knollmeloy','vi_psychdx'],q:Q_VI_PSY,x:`P: God showed me that the drunks in the plaza are filth.
P: He wants this town cleansed, and he chose me to do it.`,
 w:`A "mission from God to rid the earth of some evil" is psychotic hyper-religiosity, one of the three processes shared with suicide assessment; the next step is to ask what God has told him to do and to whom. Paranoid process centers on persecutors threatening the patient.`},
{id:'vi26',t:'vi_cmdtriad',d:['vi_paranoid','vi_knollmeloy','vi_psychdx'],q:Q_VI_PSY,x:`P: The voice tells me to hurt my uncle.
P: Sometimes my arms move by themselves, like someone else is controlling them.`,
 w:`Command hallucinations and alien control belong to the triad of psychotic processes Shea tells clinicians to pursue in both suicide and violence assessment. No persecutory threat is described, as would be the case in paranoid process.`},
{id:'vi27',t:'vi_paranoid',d:['vi_cmdtriad','vi_knollmeloy','vi_tet_recent'],q:Q_VI_PSY,x:`P: My neighbors are sending men to take my children.
C: What have you thought about doing to protect yourself?
P: I sleep with a bolo by the door now.`,
 w:`A persecutory delusion that the patient has begun acting on by arming himself is dangerous paranoid process, and Shea says this should strongly suggest hospitalization. No voices, control, or religious mission are described.`},
{id:'vi28',t:'vi_paranoid',d:['vi_cmdtriad','vi_knollmeloy','vi_psychdx'],q:Q_VI_PSY,x:`A resident documents "paranoid delusions present" and moves on. The supervisor says that finding the delusion is not enough; the clinician must find out what the patient intends to do about it and whether he has armed himself.`,
 w:`Shea's point about paranoid process is to explore intent and action, not just presence. This is not a voice- or mission-driven process.`},
{id:'vi29',t:'vi_knollmeloy',d:['vi_paranoid','vi_cmdtriad','vi_tet_lying'],q:Q_VI_PSY,x:`P: They humiliate me every day and the school does nothing. The police won't help.
P: There's no other way to make them stop.
P: At night I picture making them pay.
O: He is not psychotic.`,
 w:`A grievance, the conclusion that only violence will work, and violent fantasy match steps 1 to 3 of the Knoll and Meloy progression, which Shea adapts to nonpsychotic grievance. Without a delusion, it is not paranoid process.`},
{id:'vi30',t:'vi_knollmeloy',d:['vi_tet_intent','vi_paranoid','vi_structured'],q:Q_VI_PSY,x:`C: Have you tried anything to reason or compromise with these people?
C: How soon do you think you need to act to protect yourself?
C: Have you gotten what you need? Have you picked a date?`,
 w:`These questions follow the Knoll and Meloy steps, from the absence of nonviolent options to resolve and implementation, to locate how close the patient is to acting. The CADE is the broader chronological interview, organized by time regions rather than these cognitive steps.`},
{id:'vi31',t:'vi_dvcaveat',d:['vi_otherfirst','vi_tet_lying','vi_stage'],q:Q_VI_TECH,x:`A husband and wife arrive at the ER together; she has bruises on her arms. The resident plans to ask the husband about hitting her while she sits beside him, and to quote what she said earlier. The supervisor stops him and sees the wife alone first to make a safety plan.`,
 w:`Shea's domestic violence caveats: never ask the alleged batterer about violence in front of the victim, never pass on what the victim said, and do safety planning with the victim first because the assessment itself may raise her risk. Asking about the other's violence first is a perpetrator-interview strategy.`},
{id:'vi32',t:'vi_dvcaveat',d:['vi_recent','vi_otherfirst','vi_stage'],q:Q_VI_TECH,x:`C (to the wife, alone): Has the physical violence increased in frequency or severity over the past 6 months?
C: Has he ever used a weapon or threatened you with one?
C: Do you believe he is capable of killing you?`,
 w:`These are Snider's predictive questions for victims of IPV, part of Shea's caveats on getting a more accurate history from the victim. The recent CADE region is explored with the perpetrator himself.`},
{id:'vi33',t:'vi_cade',d:['vi_structured','vi_knollmeloy','vi_stage'],q:Q_VI_GEN,x:`A resident asks how to organize a violence interview. The consultant answers: set the stage, then explore presenting, recent, past, and immediate violent ideation and behavior in that order, looking for a concrete plan, action taken, and reflected intent.`,
 w:`This is the CADE Approach. Setting the stage is only its opening step; structured instruments gather statistical factors instead.`},
{id:'vi34',t:'vi_cade',d:['vi_structured','vi_stage','vi_hcrfactors'],q:Q_VI_GEN,x:`A clinician who uses the CASE Approach for suicidal ideation adapts the same chronological strategy and validity techniques to uncover a patient's homicidal ideation and intent.`,
 w:`The CASE Approach adapted to violent and homicidal ideation is the Chronological Assessment of Dangerous Events (CADE). It is an interviewing strategy, not an actuarial instrument.`},
{id:'vi35',t:'vi_presenting',d:['vi_recent','vi_past','vi_immediate'],q:Q_VI_REG,x:`C: Go back for a minute, Ramon. After you slapped your son this afternoon, what happened next?
C: Did you use an open hand, your fist, or anything else?`,
 w:`Rewinding the verbal video of today's act and clarifying the actual violence is the presenting event region. The recent region covers the prior 2 months.`},
{id:'vi36',t:'vi_presenting',d:['vi_recent','vi_past','vi_immediate'],q:Q_VI_REG,x:`C: About last night's fight. Did she need to go to the emergency room?
C: Did she get stitches? Were X-rays taken?
C: How do you feel about her now?`,
 w:`Using concrete injury questions to cut through minimization of the act that brought him in, plus his feelings about the victim, belongs to the presenting event region. The past region looks at the worst act over a lifetime.`},
{id:'vi37',t:'vi_recent',d:['vi_presenting','vi_past','vi_immediate'],q:Q_VI_REG,x:`C: Over the past couple of months, have you thought about how you might hurt him?
C: Where would it happen? When?
C: Would anyone else be involved?`,
 w:`Exploring method, timing, place, and accomplices over the past 2 months is the recent violent events region. Immediate questions ask about intent right now and after leaving.`},
{id:'vi38',t:'vi_recent',d:['vi_presenting','vi_past','vi_immediate'],q:Q_VI_REG,x:`C: How many times in the past 5 to 8 weeks have you thought about hurting Lorna: daily, a couple of times a day, more often?
C: How close do you think you've come to actually hitting her?`,
 w:`Gauging frequency and intensity of violent thoughts over the past several weeks (using a variant of symptom amplification) is the recent region. It is not a lifetime review (past) or a question about right now (immediate).`},
{id:'vi39',t:'vi_past',d:['vi_presenting','vi_recent','vi_immediate'],q:Q_VI_REG,x:`C: What's the worst thing you've ever done to someone when you were angry?
C: About how many fights have there been over the years?
C: Have you ever been arrested or had a protection order against you?`,
 w:`Worst act, number of acts, and arrest or restraining-order history are key elements of the past violent events region. The recent region focuses on planning in the last 2 months.`},
{id:'vi40',t:'vi_past',d:['vi_presenting','vi_recent','vi_immediate'],q:Q_VI_REG,x:`C: Over the years, has Joy been hurt by you before, before this recent trouble?
C: Back then, did you ever use a weapon?
C: Is that something you've thought of using again?`,
 w:`Asking whether the current target was harmed in the past and whether a past weapon is being considered now are past-region elements. The immediate region asks directly about intent right now.`},
{id:'vi41',t:'vi_immediate',d:['vi_presenting','vi_recent','vi_past'],q:Q_VI_REG,x:`C: Right now, are you planning on hurting or killing Arnel?
C: How well do you feel in control of your urge to go after him?
C: If the thoughts come back after you leave, what will you do?`,
 w:`Direct, calm questions about intent now and after leaving are the immediate violent ideation region. Nothing here reconstructs a past or recent event.`},
{id:'vi42',t:'vi_immediate',d:['vi_presenting','vi_recent','vi_past'],q:Q_VI_REG,x:`C: Are you planning to see her after you leave here?
P: I gotta at least talk to her tonight. She has to understand. I know she will.`,
 w:`Asking whether the patient intends to seek out the person he is angry with belongs to the immediate region; Shea calls this kind of answer far from reassuring. The other regions look backward in time.`},
{id:'vi43',t:'vi_stage',d:['vi_otherfirst','normalization','catchall'],q:Q_VI_TECH,x:`O: A routine intake for low mood; nothing so far suggests violence.
C: Have you ever lost your temper?`,
 w:`Shea, following Tardiff, advises screening routinely with a simple bridging question to set the stage for exploring violence. It does not frame the question as common to others (normalization) or ask about the partner's violence first.`},
{id:'vi44',t:'vi_stage',d:['vi_otherfirst','vi_presenting','shameatt'],q:Q_VI_TECH,x:`P: That guy from the rival group cut my cousin. Someone has to answer for it.
C: You sound like you've been thinking a lot about getting back at him. Tell me about that.`,
 w:`Revenge and gang membership are among the many homicidal gates; using the patient's own theme to open the inquiry is setting the stage. Shame attenuation would frame a question through his pain or rationalizations rather than open a topic.`},
{id:'vi45',t:'vi_otherfirst',d:['gentleassume','normalization','sympamp'],q:Q_VI_TECH,x:`C: When you and Gina argue like that, has she ever lost control and hit you?
P: Once she threw a plate at me.
C: How about you, during arguments like that?`,
 w:`Asking about the partner's violence first helps the suspected perpetrator feel equally heard and safer, making his self-report more valid. Gentle assumption concerns the wording ("how frequently..., if at all"), not the order of questions.`},
{id:'vi46',t:'vi_otherfirst',d:['gentleassume','normalization','vi_dvcaveat'],q:Q_VI_TECH,x:`A supervisor explains that with a man suspected of hitting his partner, the clinician should first ask whether the partner has ever hit him, because feeling heard makes him more likely to give a valid account of his own violence.`,
 w:`This is the stage-setting strategy of asking about the other person's violence first. The domestic violence caveats concern protecting the victim, such as not interviewing him about violence in her presence.`},
{id:'vi47',t:'vi_superego',d:['bragging','shameatt','behinc'],q:Q_VI_TECH,x:`C: Think back to that fight. What were you thinking before it started?
C: What were you feeling while it was happening?
C: And afterward, how did you feel about what you'd done?`,
 w:`Asking about thoughts and feelings before, during, and after past violence (Meloy) probes superego and whether violence troubles or arouses the patient, a window into predation. A behavioral incident asks about concrete actions rather than inner reactions.`},
{id:'vi48',t:'vi_superego',d:['bragging','catchall','denialspec'],q:Q_VI_TECH,x:`C: Is there anything you have done that has made you feel guilty?
C: If the price were right, is there anything you would not do?`,
 w:`These questions test for guilt and superego constraints; sociopathy and predatory process sometimes emerge with them. Induction to bragging would compliment the patient's skill first to draw out his pride.`}
);

/* ===== Second cases: one more vignette for every interviewing term (v5) ===== */

/* -- en -- */
/* Engagement and empathy (second-case pass) — Shea Ch. 1. Drafted 2026-11-02. */
V.push(
{id:'en201',t:'feedwander',d:['unipolar','naivete','freefac'],q:`Which interactional process is this?`,x:`P: ...and my cousin in Balanga also had a bad time with her pregnancy.
C: Oh, how awful. Was that her first baby?
P: Her second. Her husband works at the port, you know.
C: Mm-hmm, which part of the port?
O: Twenty minutes in, the resident has pages of notes on the cousin's family and nothing about the patient's panic attacks.`,w:`The resident's empathic filler, follow-up questions and note-taking rewarded each tangent, so both of them built the detour. Unlike unipolar blending, the problem lies in the clinician's own behavior keeping the drift going.`},
{id:'en202',t:'unipolar',d:['blend_subj','feedwander','identification'],q:`What is happening to the sense of rapport?`,x:`O: On the ward, a new patient greets the resident like an old friend, praises her "wonderful energy," and fills every pause with jokes. Her answers run on for minutes and she cuts in before the resident finishes a question. The resident leaves the room glowing but can't recall a single symptom she documented.`,w:`One-sided, too-rapid openness that feels like great rapport. The objective signs (long utterances, very short latencies, interruptions) point toward hypomania or histrionic defenses rather than genuine blending.`},
{id:'en203',t:'blend_subj',d:['blend_obj','selfreport','unipolar'],q:Q_BLEND,x:`O: Writing her post-interview note, a resident jots, "When it went well, the room felt quieter and I stopped checking the clock." She uses that feeling to judge whether tomorrow's interview is going the same way.`,w:`She is using her own internal sense of how the interview feels as a thermometer. It is a felt sense, unlike measurable signs or the patient's report, and it can be fooled by unipolar blending.`},
{id:'en204',t:'blend_obj',d:['blend_subj','selfreport','unipolar'],q:Q_BLEND,x:`O: Reviewing a recording of an interview with a guarded man, the resident times his answers. Early on they last a few seconds, with long pauses before each. By the end he speaks for half a minute at a stretch, replies promptly, and has turned his chair toward the resident.`,w:`Lengthening utterances, shortening latencies and open body language are observable signs of engagement. This is the objective measure, not how the interview felt or what the patient said.`},
{id:'en205',t:'selfreport',d:['blend_obj','blend_subj','unipolar'],q:Q_BLEND,x:`C: We're nearly out of time. I'd like to know how this conversation has been for you, and whether I missed anything important.
P: It was okay... I guess I didn't expect to talk about my father.
C: Tell me more about that.`,w:`The resident asks the patient directly near the end, and follows up the hesitant reply as an opening. The patient is the source here, rather than the clinician's feeling or measurable signs.`},
{id:'en206',t:'identification',d:['imagproj','naivete','highattr'],q:`What is happening?`,x:`P: My boss humiliated me in front of everyone, and I could have walked out.
C: (flushing) That is outrageous. People like that make me sick. You should report her.
O: At supervision, the resident admits she has been rehearsing arguments with the patient's boss in the car all week.`,w:`The resident has lost Rogers' "as if": she feels the patient's anger as her own, takes sides, and carries it home. Empathy recognizes the feeling and steps back out; identification stays in it.`},
{id:'en207',t:'ec1',d:['ec2','ec4','ec5'],q:Q_CYC,x:`C: It must have been hard to lose your job after twenty years.
P: Not at all. It was time. I've got plenty of hobbies.
O: His jaw is tight and he keeps turning his wedding ring, but he changes the subject to fishing.`,w:`His defenses keep the true feeling from being expressed, so there is nothing yet to recognize. Pressing empathy toward an unacknowledged feeling would feel intrusive.`},
{id:'en208',t:'ec2',d:['ec1','ec3','ec5'],q:Q_CYC,x:`P: (voice cracking) The funeral was last week. I'm still not sleeping.
C: (rushing, thinking about the clinic running late) Okay, so sleep. How many hours do you get?
O: The resident later realizes the patient had just told him she was grieving.`,w:`The patient clearly expressed a feeling; the clinician, hurried and distracted, missed it. His own state distorted his role as the measuring instrument.`},
{id:'en209',t:'ec3',d:['ec2','ec4','ec1'],q:Q_CYC,x:`P: My family wouldn't care if I vanished.
C: You must feel utterly abandoned, the way you did when your mother left.
P: (stiffly) You don't know anything about my mother. I think we're done here.`,w:`The clinician sensed the right feeling but conveyed it with too much certainty and too much attribution for a guarded patient. The recognition was accurate; the delivery failed.`},
{id:'en210',t:'ec4',d:['ec3','ec5','ec2'],q:Q_CYC,x:`C: (slowly, softly) It sounds like you're terrified right now.
P: (pressured, racing) The satellites, the message, did you get the message? I need a pen!
O: The patient is in a full manic episode and does not seem to register what the clinician said.`,w:`The empathic remark was well made, but mania kept the patient from perceiving it. Keep statements short, simple and concrete while treating the underlying condition.`},
{id:'en211',t:'ec5',d:['ec4','ec1','ec3'],q:Q_CYC,x:`O: A patient with catatonia lies mute and unresponsive while the resident quietly says each day, "This must be a frightening place to be." Weeks later, once recovered, he tells the team, "I heard everything. It helped that someone spoke to me like that."`,w:`He perceived the empathy and took it in, but his illness blocked any visible acknowledgment. Lack of response does not mean the empathy failed, so keep offering it.`},
{id:'en212',t:'highcert',d:['lowcert','highattr','defusing'],q:Q_VAL,x:`P: After the layoff, I just sat in the car outside the house for an hour. I couldn't go in and tell her.
C: You were carrying all that shame by yourself.
P: (nods slowly) Yeah. Yes, I was.`,w:`A declarative statement, phrased as though the clinician knows what the patient feels. It works well with a trusting, engaged patient; a tentative "it sounds like" would be low certainty.`},
{id:'en213',t:'lowcert',d:['highcert','reflecting','highattr'],q:Q_VAL,x:`P: The nurses here don't listen. Nobody tells me anything.
C: I wonder if it's been a bit lonely and frustrating to be left in the dark.
P: (shrugs) Maybe. A little.`,w:`"I wonder if... a bit" is tentative, so the patient can accept or reject it freely. That hedge makes it safe with guarded and trusting patients alike.`},
{id:'en214',t:'highattr',d:['highcert','lowcert','reflecting'],q:Q_VAL,x:`P: My daughter hasn't called in a month. I'm sure she's just busy.
C: Underneath being busy, it sounds like you're afraid she's pulling away, the way your own father did.
P: (stiffens) I never said that.`,w:`The clinician names an unspoken fear and ties it to history the patient never raised, which is high intuited attribution. This signals deep perception if accurate, but a guarded patient may disavow it.`},
{id:'en215',t:'reflecting',d:['lowcert','highattr','sensorypara'],q:Q_VAL,x:`P: The people at the market all know about me. They stare.
C: They all know about you, and they stare.
P: Yes. Finally someone who listens.`,w:`The patient's own words are mirrored back with nothing added, the lowest attributional valence. That makes it safe with a possibly paranoid patient.`},
{id:'en216',t:'paranoidspiral',d:['unipolar','feedwander','greasing'],q:`What process is unfolding?`,x:`P: I don't need your sympathy. I know what you people are doing.
C: I can hear how upsetting this is. Anyone would feel trapped.
P: Stop pretending you care.
C: (leaning in) I really do care, and I understand how alone you must feel.
O: The patient turns his chair away and refuses to answer further questions.`,w:`Each stronger empathic attempt raised the intimacy the patient feared, so he withdrew. At the first disavowal the resident should have switched to reflecting and conversational questions.`},
{id:'en217',t:'defusing',d:['highattr','lowcert','reflecting'],q:Q_TECH,x:`P: You people kept me waiting four hours, and now you want me to fill out another form?
C: No wonder you're furious. Four hours would make anyone angry.
P: (exhales) Well. At least someone admits it.`,w:`A high-certainty statement agreeing that the anger makes sense. Unlike guarded patients, angry ones calm down when the validation is strong.`},
{id:'en218',t:'metaphorpara',d:['sensorypara','reflecting','highattr'],q:Q_TECH,x:`P: I take care of my mother, my kids, my job. Every time I fix one thing, another falls apart. I never get ahead.
C: It's like plugging holes in a leaky boat.
P: Exactly, and the water keeps rising.`,w:`A single image captures the whole message, and the patient extends it. It conveys the gestalt rather than restating her words or her sensory channel.`},
{id:'en219',t:'sensorypara',d:['metaphorpara','reflecting','lowcert'],q:Q_TECH,x:`P: I hear my wife's voice in my head all day, saying I'm useless. It's loud, and I can't shut it out.
C: What I'm hearing is that her voice keeps ringing in your ears. Is that close to what you're saying?`,w:`The clinician matches the patient's auditory language ("hear," "voice," "loud") in the stem and the check-out. It mirrors the sensory channel, not an image of the whole message.`},
{id:'en220',t:'naivete',d:['imagproj','identification','selfreport'],q:`Which frame of mind is the resident using?`,x:`O: A patient tells a long, rambling story about leaving the church he helped build. The resident feels pulled to diagnose and to judge his choices, then deliberately lets that go. For several minutes she only listens, trying to sense what his world is like without sorting it.`,w:`This is disciplined naiveté: receptive listening with classification, cause and effect, and judgment suspended. Imaginative projection is the more active step of moving into the patient's scene.`},
{id:'en221',t:'imagproj',d:['naivete','identification','highattr'],q:`Which frame of mind is the resident using?`,x:`P: I stopped going back to the house after my wife died.
O: The resident pictures the hallway, her slippers by the door, the quiet kitchen with the radio off, and the dread of turning the key. She holds the picture while remaining herself, then says, "It sounds like walking in is almost unbearable."`,w:`She actively and creatively enters the patient's "inscape," like a poet, while keeping her own perspective. That is imaginative projection, not just passive receptive listening.`}
);

/* -- sf -- */
/* Safety and the alliance (second-case pass) — Shea Ch. 2. Drafted 2026-11-02. */
V.push(
{id:'sf201',t:'selfsystem',d:['parade','blandness','nondefensive'],q:`Which concept best explains her early guardedness?`,x:`O: At the start of an OPD visit, a teacher answers every question with "I'm fine, just tired, nothing serious," and sits with her bag clutched in her lap. Forty minutes later, once the resident has been warm and unhurried, she begins to describe the weeks she spent crying in the school stockroom.`,w:`Early minimizing and guardedness are Sullivan's self-system protecting self-esteem in front of a stranger. As the threat lowers, the real story emerges.`},
{id:'sf202',t:'upr',d:['nondefensive','blandness','consistency'],q:`What is the clinician conveying?`,x:`P: I hit my son. Hard. I'm a terrible father.
O: The resident keeps her face and voice steady and leans in slightly.
C: That took courage to tell me. Walk me through what led up to it.`,w:`She cares for the person while suspending moral judgment of what he did, so the disclosure keeps flowing. This is unconditional positive regard, not approval of the act.`},
{id:'sf203',t:'parade',d:['selfsystem','ulterior','blandness'],q:`What has this patient likely met before arriving?`,x:`P: Let me guess. You're going to tell me to just stop. My wife says it, my boss says it, the last doctor said it. Everybody has an opinion about my gambling.`,w:`He describes a parade of frowns: judgmental reactions from family, employer and other clinicians before he even sat down. Make sure the clinician's face is not the next one.`},
{id:'sf204',t:'nondefensive',d:['upr','blandness','ulterior'],q:`What quality is the clinician showing?`,x:`P: Why should I tell you anything? You're not even a psychiatrist yet, and you've probably never been through anything hard.
C: You're right that I'm still training, and I haven't lived your life. I'd like to hear what you'd need from me to feel okay talking.`,w:`The resident meets the challenge with curiosity instead of defending status or credentials. That turns the patient's worry into something to work on together.`},
{id:'sf205',t:'ulterior',d:['upr','blandness','nondefensive'],q:`What is quietly making the relationship unsafe?`,x:`O: A resident keeps mentioning to her patient that she trained at a famous hospital abroad, and lingers on the sessions where he thanks her for being "so smart." When he mentions a second opinion, she feels a flash of irritation.`,w:`The resident's own need to be admired and important is being served in the room. This is an ulterior motive, which makes the relationship unsafe even though nothing overtly harsh is said.`},
{id:'sf206',t:'blandness',d:['nondefensive','upr','ulterior'],q:`What went wrong?`,x:`O: A patient describes the death of her sister. The resident, determined not to react, keeps a still face and says "Mm" in a flat tone. At the next visit the patient says, "I felt like you didn't care."`,w:`The resident confused neutrality about judgment with expressionlessness, and patients tend to read a blank face as dislike. Be neutral about judgments but let the face show warmth.`},
{id:'sf207',t:'consistency',d:['upr','nondefensive','miracle'],q:Q_GEN,x:`P: Whatever kind of day she's having, she greets me the same way and runs the visit the same way. I always know what to expect from her.`,w:`This describes steady, predictable behavior across visits, which is the consistency component of genuineness rather than responsiveness or spontaneity.`},
{id:'sf208',t:'factq',d:['miracle','bgoals','btasks'],q:`What type of question is this?`,x:`P: I haven't been myself. I just feel like everything is too much.
C: Along with that, have you noticed your sleep changing, your appetite dropping, or losing interest in things you used to enjoy?
P: All three. How did you know that?`,w:`A well-timed, concrete question about the usual companions of the symptom conveys expertise and safety. The patient's "How did you know?" is the typical response.`},
{id:'sf209',t:'metacomm',d:['factq','upr','bbond'],q:`What is the name for the implicit message the patient picked up?`,x:`O: A resident asks a frightened man a few specific questions about his intrusive thoughts, including one about hand washing. The man's shoulders drop.
P: So this is something other people have too.`,w:`Beyond their literal content, the questions told him this clinician knows the territory and that he is not alone. That unspoken message is metacommunication.`},
{id:'sf210',t:'miracle',d:['bgoals','btasks','factq'],q:Q_TECH,x:`P: I don't know what I want. Everything is just a mess.
C: Let me ask something a bit unusual. If you went to sleep tonight and a miracle fixed everything while you slept, what would you notice first when you woke up?
P: ...My house would be quiet, and I'd get up and make breakfast for my kids.`,w:`De Shazer's miracle question invites the patient to picture a solved future, and it surfaces a goal. It is different from asking about the consequences of one specific change.`},
{id:'sf211',t:'bgoals',d:['btasks','bbond','miracle'],q:Q_ALLY,x:`C: We've covered a lot. Let me check we agree on what we're aiming for. You want to sleep through the night and be able to go back to work. Is that right, or is there something else?
P: That's it. Mostly I want my life back.`,w:`The two are confirming the destination of treatment, which is the agreement-on-goals pillar of the alliance. Tasks would be about the methods used to get there.`},
{id:'sf212',t:'btasks',d:['bgoals','bbond','factq'],q:Q_ALLY,x:`C: For the next two weeks, would you be willing to keep a short sleep diary, and then we can decide together whether to add a medicine or try the relaxation exercises first?
P: The diary is fine. I'd rather not start a pill yet.`,w:`They are negotiating the methods of treatment and the patient's willingness to try them. That is agreement on tasks, which concerns how they will work, not where they are heading.`},
{id:'sf213',t:'bbond',d:['bgoals','btasks','consistency'],q:Q_ALLY,x:`C: I know you'd rather not try the group. We may see this differently, and I'm still on your side.
P: Okay. I'll think about it. You've never made me feel stupid for saying no.`,w:`The relationship holds even through disagreement about a suggestion. That trust and attachment is the bond, as opposed to goals or tasks.`}
);

/* -- ds -- */
/* Interview structure (second-case pass) — Shea Ch. 3. Drafted 2026-11-02. */
V.push(
{id:'ds201',t:'ph_intro',d:['ph_open','ph_body','ph_term'],q:Q_PHASE,x:`O: In the ER, the resident pulls up a chair and sits at eye level.
C: Good evening, I'm Dr. Santos, a resident on the psychiatry team. How would you like me to address you? I should also tell you this conversation is private, except if I'm worried about your safety or someone else's.`,w:`This covers names, roles, setting and confidentiality, all before the patient's story begins. The opening starts once the clinician asks why the patient came.`},
{id:'ds202',t:'ph_open',d:['ph_intro','ph_body','ph_close'],q:Q_PHASE,x:`C: So tell me, what's been going on?
O: The patient talks for about six minutes about quarrels with her neighbors and sleepless nights. The resident says only "I see" and "go on," while quietly noting her pressured speech and flat mood and deciding which regions to cover next.`,w:`Mostly nondirective listening for about 5 to 7 minutes while taking in the patient's perspective and mental state. Structured questioning belongs to the body.`},
{id:'ds203',t:'ph_body',d:['ph_open','ph_close','ph_term'],q:Q_PHASE,x:`O: Fifteen minutes in, after the patient's account of the past month:
C: Thank you. Now I need to ask about a few specific areas. Have you ever had times when you felt unusually energetic and slept very little? And has anyone in your family been treated for mental illness?`,w:`The clinician is now steering to gather data across key regions, and says so. This is structured, systematic questioning rather than free listening.`},
{id:'ds204',t:'ph_close',d:['ph_body','ph_term','ph_open'],q:Q_PHASE,x:`C: Let me tell you what I think is going on. Your symptoms fit an anxiety disorder, and it's quite treatable. I'd like to hear what you think, and what questions you have, before we agree on a plan.
P: Will I need to stay in the hospital?`,w:`Sharing impressions, answering questions and agreeing on a plan. The data gathering is finished and the clinician is now giving back.`},
{id:'ds205',t:'ph_term',d:['ph_close','ph_intro','ph_body'],q:Q_PHASE,x:`O: The resident walks the patient to the clinic door.
C: Thank you for trusting me today. Your next appointment is Friday morning. If the thoughts get worse before then, come to the ER or call us right away.
P: I will. Salamat, Doc.`,w:`These are the last words and goodbye, leaving hope and securing a return visit. The plan had already been agreed during the closing.`},
{id:'ds206',t:'openq',d:['qualq','swingq','closedq'],q:Q_DOC,x:`C: How have things been at home since you got out of the hospital?`,w:`A true open question (how) that can't be answered in a word or two and doesn't limit the answer. It is not a "How is your...?" question that invites "Fine."`},
{id:'ds207',t:'gentlecmd',d:['openq','swingq','closedstmt'],q:Q_DOC,x:`O: With a patient who has been giving one-word answers:
C: Describe a typical day for me, from the time you wake up.`,w:`An open statement phrased as a request, not a question, so it can't be answered "no." It suits shut-down patients.`},
{id:'ds208',t:'swingq',d:['gentlecmd','openq','closedq'],q:Q_DOC,x:`C: Would you say your drinking has caused problems in your marriage?`,w:`"Would you say...?" asks whether the patient will answer, and is technically answerable "No." It swings open or closed depending on engagement.`},
{id:'ds209',t:'qualq',d:['openq','gentlecmd','closedq'],q:Q_DOC,x:`C: How's your appetite been?
P: Fine.`,w:`A "How is your...?" question is open in form but easily answered "Fine." With a guarded patient, follow it with a gentle command.`},
{id:'ds210',t:'stmtinq',d:['negstmt','closedq','swingq'],q:Q_DOC,x:`C: So your daughter stopped speaking to you after the funeral?
P: Yes.`,w:`A statement said as a question, used here to check a fact. It is inherently leading and usually answered yes or no.`},
{id:'ds211',t:'negstmt',d:['stmtinq','closedq','swingq'],q:Q_DOC,x:`C: You haven't been using any drugs, have you?`,w:`A statement of inquiry phrased in the negative, which tells the patient the answer the clinician expects. It is a reliably invalid habit, especially on sensitive topics.`},
{id:'ds212',t:'facilstmt',d:['gentlecmd','openq','piggyback'],q:Q_DOC,x:`P: After the accident, I couldn't go back to work.
C: (nodding) I see.
P: My hands kept shaking whenever I got near the machines.`,w:`A brief "I see" with a nod that keeps the patient talking without directing the content. It is weak on its own with shut-down patients.`},
{id:'ds213',t:'closedq',d:['qualq','stmtinq','closedstmt'],q:Q_DOC,x:`C: Which hospital were you admitted to last time?
P: Provincial.`,w:`A direct question answered in a word or two. A closed-ended statement would direct without asking anything.`},
{id:'ds214',t:'closedstmt',d:['closedq','gentlecmd','facilstmt'],q:Q_DOC,x:`C: I want to move on now and spend a few minutes on your family history.`,w:`It is not a question at all; it sets direction and gives information. This puts it at the closed end of the continuum.`},
{id:'ds215',t:'piggyback',d:['facilstmt','gentlecmd','highcert'],q:Q_TECH,x:`P: My brother-in-law keeps telling everyone I'm lazy.
C: That must hurt. When did he start saying that?`,w:`An empathic lead-in joined to a question in one breath, so empathy doesn't stall the flow. Here a closed question focuses the account.`},
{id:'ds216',t:'shutdown',d:['wandering_int','rehearsed','loquacious'],q:Q_PAT,x:`C: Have you been sleeping?
P: Some.
C: Eating?
P: (long pause, looking at her lap) Not much.
O: The resident notices her questions are getting shorter and more closed with each reply.`,w:`Short answers, long latencies, poor eye contact and a clinician pulled into closed questions mark a shut-down interview. Use open questions and gentle commands, and defer sensitive topics.`},
{id:'ds217',t:'wandering_int',d:['loquacious','shutdown','rehearsed'],q:Q_PAT,x:`C: What brought you to the clinic?
O: The patient answers at once, for several minutes, about his landlord, then a cousin's wedding, then a dispute at the fish port. When the resident tries to ask about his mood, he is already onto another story.`,w:`Long answers, short latencies and hopping between topics. Unlike the loquacious variant, he does not stay on the topic.`},
{id:'ds218',t:'loquacious',d:['wandering_int','rehearsed','shutdown'],q:Q_PAT,x:`C: How many drinks do you usually have in a day?
P: Well, it depends what's going on, because some days I'm working in the field, and my aunt brings lunch, and the weather's been odd, and the brand changed at the store...
O: Ten minutes later the resident still lacks a number.`,w:`He stays roughly on the topic but buries it in irrelevant detail. That is the loquacious variant of the wandering interview.`},
{id:'ds219',t:'rehearsed',d:['wandering_int','loquacious','shutdown'],q:Q_PAT,x:`O: A man asking for pain medication recites his history in smooth, practiced sentences, naming dates and diagnoses without hesitation. There is no hint of feeling, and when the resident tries to ask something new, he repeats the same lines.`,w:`A pat, well-worn story with little fresh emotion. It can reflect chronicity or an effort to steer the interview, such as drug seeking.`},
{id:'ds220',t:'affinterj',d:['namingemo','piggyback','gentlecmd'],q:Q_TECH,x:`O: A woman has told her story of her mother's illness in the same flat tone she has used in many clinics.
C: Wait, stop there for a second. What was the hardest moment of all that for you?`,w:`The resident breaks the script by steering the rehearsed story toward an emotionally charged moment. This differs from naming possible feelings after a stall.`},
{id:'ds221',t:'namingemo',d:['affinterj','piggyback','facilstmt'],q:Q_TECH,x:`C: Did anything happen with your uncle when you were a teenager?
O: The patient goes silent and studies the floor.
C: People sometimes stop at a point like this because of shame, or because they're scared of how it will sound. Does either of those fit for you?`,w:`After a stall, the clinician names several feelings that often cause it and asks if any fit (Morrison). It offers options rather than commenting on the silence.`}
);

/* -- fa -- */
/* Facilics (second-case pass) — Shea Ch. 4. Drafted 2026-11-02. */
V.push(
{id:'fa201',t:'freefac',d:['scouting','psychodyn','transform'],q:Q_REGION,x:`P: I don't even know where to start. Things at the farm, and then Papa...
O: The resident says only "Mm-hmm" and "Take your time," and lets the patient wander through her worries about money, her father and her sleep for several minutes without steering.`,w:`The clinician deliberately lets the patient choose the direction, using nods and minimal prompts. That is a free facilitation region, not an effort to resolve a roadblock or explore patterns.`},
{id:'fa202',t:'transform',d:['psychodyn','freefac','excursion'],q:Q_REGION,x:`P: I'm only here because my mother made me. This is a waste of time.
C: I'm glad you told me. Help me understand what you were hoping wouldn't happen in here.
O: For the next few minutes they talk about his distrust of doctors before the resident returns to the history.`,w:`The interview pauses data gathering to resolve a communication roadblock, here defensiveness. This is a transformational region, handled with curiosity rather than argument.`},
{id:'fa203',t:'psychodyn',d:['transform','freefac','scouting'],q:Q_REGION,x:`C: You've told me three times that you quit jobs right after a promotion. What do you make of that pattern?
P: I guess I get scared when people expect more from me.
C: Say more about that fear.
O: The conversation stays on his reactions and their meaning for several minutes.`,w:`The topic is how and why the patient responds as he does, a psychodynamic region concerned with insight and reflection, not a roadblock.`},
{id:'fa204',t:'scouting',d:['freefac','psychodyn','transform'],q:Q_REGION,x:`O: In the first seven minutes of a home visit, the resident greets the family, explains confidentiality, asks open questions about the main worry, and notes the patient's speech and mood. She leaves the first period with a short list of regions to cover.`,w:`The introduction and opening together, surveying process and content and ending with a plan for the body. The whole early survey is scouting, not only the free listening within it.`},
{id:'fa205',t:'stilted',d:['blended','excursion','split'],q:Q_EXP,x:`C: Ever hear voices?
P: No.
C: See things?
P: No.
C: Feel people are watching you?
P: Sometimes.
C: Trouble with TV or radio?
P: No.
O: The questions come one after another with no follow-up.`,w:`A rapid-fire checklist of closed questions covering the region on paper but interrogating the patient in the room. A blended expansion would follow up the "sometimes."`},
{id:'fa206',t:'blended',d:['stilted','excursion','split'],q:Q_EXP,x:`C: What has your drinking been like lately?
P: More than I'd like. I started with a beer after work, and now it's most nights.
C: What changed around the time it went up?
P: My mother got sick. I'm there every weekend.
C: That sounds exhausting. How much does it take to get you through an evening now?`,w:`A conversational exploration that uses each answer as the springboard for the next question while still gathering needed data. Unlike a stilted checklist, it tracks the patient.`},
{id:'fa207',t:'excursion',d:['split','gate_spont','pivot'],q:`What is the resident doing?`,x:`O: In a review of the patient's anxiety, she mentions she has not been eating well. The resident asks two quick questions about weight loss, then says, "Back to the worry for a moment: when does it come on?"`,w:`A short step out of the region to pursue something related, followed by an immediate return. A split expansion would revisit the region later.`},
{id:'fa208',t:'split',d:['excursion','unguided','stilted'],q:`What has the resident done with this region?`,x:`O: In a recording, the resident starts the suicide assessment at minute 8, is sidetracked by the patient's custody dispute, and returns to complete the assessment at minute 30.`,w:`One region explored in two separate places in the interview. This is acceptable as long as the region is finished, and differs from a brief excursion followed by an immediate return.`},
{id:'fa209',t:'pivot',d:['gate_spont','excursion','deadzone'],q:`What is this moment called in facilics?`,x:`P: The headaches are mostly in the morning... which is when my husband starts yelling.
O: The resident hesitates: stay with the headaches, or explore the marriage?`,w:`The patient has moved toward a new region and the clinician must choose whether to follow. That decision moment is the pivot point.`},
{id:'fa210',t:'gate_spont',d:['gate_natural','gate_refer','gate_obs'],q:Q_GATE,x:`C: Tell me about your mood this month.
P: Mostly low. But what really worries me is the voices at night.
C: What do the voices say?`,w:`The patient moved into a new region and the clinician followed. The patient opened the gate; the clinician simply walked through it.`},
{id:'fa211',t:'gate_natural',d:['gate_spont','gate_manuf','gate_intro'],q:Q_GATE,x:`P: My mind has been in overdrive. I can't turn it off at night.
C: When your mind is going like that, have you been drinking to help you sleep?`,w:`The patient's last sentence provides the cue, and a transitional question carries the clinician into substance use. This is a natural gate, cued by what was just said.`},
{id:'fa212',t:'gate_manuf',d:['gate_natural','gate_refer','gate_implied'],q:Q_GATE,x:`P: Money's been tight since I lost my job.
C: When money is that tight, how are things between you and your wife?
P: Pretty stormy.
C: When it's stormy, does it ever get physical?`,w:`A series of natural gates, each cued by the last answer, leads step by step to a delicate topic (violence). The linked stepping stones make it a manufactured gate.`},
{id:'fa213',t:'gate_refer',d:['gate_natural','gate_spont','gate_phantom'],q:Q_GATE,x:`C: You said at the start that your father "was never the same after the war." Can you tell me whether he ever received any treatment for his nerves?`,w:`It bridges to a new region using something said much earlier, rather than the patient's last sentence. That marks it as a referred gate.`},
{id:'fa214',t:'gate_implied',d:['gate_natural','gate_phantom','gate_intro'],q:Q_GATE,x:`O: After the resident finishes asking about depressed mood, with no new cue from the patient:
C: Have there been periods when you needed much less sleep and felt unusually full of energy?`,w:`There is no direct cue, but depression and mania are closely related topics, so the move doesn't jar. That is what makes it an implied gate.`},
{id:'fa215',t:'gate_phantom',d:['gate_implied','gate_refer','gate_intro'],q:Q_GATE,x:`P: ...and my daughter just got accepted into nursing school. I'm so proud.
C: How much do you drink in a typical week?`,w:`A jump to an unrelated region with no cue, reference or announcement. It is jarring and unconnected, unlike an implied gate where the topics are related.`},
{id:'fa216',t:'gate_intro',d:['gate_phantom','gate_refer','gate_natural'],q:Q_GATE,x:`C: Before we finish, I want to switch gears for a moment. I need to ask some personal questions about your sexual history, because they matter for your care.`,w:`The change of topic is announced openly rather than hidden, which is useful before a sensitive section. This is an introduced gate.`},
{id:'fa217',t:'gate_obs',d:['gate_natural','gate_spont','gate_implied'],q:Q_GATE,x:`O: While the patient talks about his job, he drops his gaze and his hands begin to tremble.
C: I notice your hands are shaking. What's going on for you right now?`,w:`The cue is something the clinician saw, not something the patient said. That is an observed gate.`},
{id:'fa218',t:'deadzone',d:['unguided','split','excursion'],q:`Which time-management error is this?`,x:`O: The resident begins well, then spends the second quarter of the hour following the patient's long, absorbing stories about his years at sea. With fifteen minutes left, she hurries through mood, substance use, and safety questions.`,w:`The second quarter of the interview was lost to interesting but unhelpful material, forcing a rushed sprint. The error is one of timing, not of how the regions were entered.`},
{id:'fa219',t:'unguided',d:['deadzone','split','gate_phantom'],q:`What problem does the supervisor identify?`,x:`O: On review, the interview touches mood, then work, then medications, then mood again, then family, and no region is finished. The patient, a talkative and cooperative woman, answered everything easily.`,w:`A hodgepodge interview from poor focusing: regions are entered and left unfinished. The patient was not the problem.`}
);

/* -- va -- */
/* Validity techniques (Shea Ch. 5) — second-case series. Drafted 2026-11-02. */
V.push(
{id:'va201',t:'anchor',d:['catchall','soundings','verbalvideo'],q:'Which validity technique is this?',x:`P: I can't remember when the drinking got worse.
C: Was it before or after Typhoon Odette hit your town, when you lost the roof?
P: After. A few weeks after, I think.`,
w:`A memorable landmark event is used to fix the timing of a hazy memory. It differs from tagging, which offers a list of possible answers, and from a verbal video, which strings together behavioral steps.`},
{id:'va202',t:'tagging',d:['denialspec','anchor','gentleassume'],q:'Which validity technique is this?',x:`C: What medicine did your doctor in Balanga give you for your nerves?
P: Hay, I forget the name. It was a small white pill.
C: Was it fluoxetine, sertraline, escitalopram, or something else?
P: Sertraline, yes.`,
w:`The clinician offers a short list so the patient can recognize the forgotten fact. Unlike denial of the specific, the aim is to jog memory, not to get a separate no for each item.`},
{id:'va203',t:'exaggeration',d:['normalization','shameatt','bragging'],q:'Which validity technique is this?',x:`P: Doc, I feel terrible. I took a few pesos from my mother's purse when I was twelve.
C: Twelve years old, a few pesos. So you were basically a master criminal?
P: (smiles) No, I just bought candy.`,
w:`Humorous overstatement of a minor act shrinks shame that is out of proportion to it. Normalization says others have had the same experience, which this reply does not.`},
{id:'va204',t:'defterms',d:['clarnorms','tagging','catchall'],q:'Which validity technique is this?',x:`C: Have you ever had a blackout? I mean waking up unable to remember part of the night, even though people say you were awake and talking.
P: Oh. Then yes, a couple of times. I thought blackout meant passing out.`,
w:`The clinician spelled out what the clinical word means, and the patient's answer changed. Clarifying norms is about what behavior counts in the family or culture, not about vocabulary.`},
{id:'va205',t:'clarnorms',d:['defterms','normalization','shameatt'],q:'Which validity technique is this?',x:`C: When I ask whether anyone in your home was ever rough with you, I include being slapped, pinched, or hit with a hanger, even if everyone called it ordinary discipline.
P: Then yes. My mother did that when I came home late.`,
w:`The clinician states what counts as abuse where the family norm considered it normal. Defining technical terms explains vocabulary; clarifying norms widens what the patient counts as the behavior.`},
{id:'va206',t:'normalization',d:['shameatt','bragging','gentleassume'],q:'Which validity technique is this?',x:`C: A lot of new mothers tell me they have scary thoughts about their baby that they never expected. Has anything like that crossed your mind?
P: (quietly) Yes. I didn't want to tell anyone.`,
w:`Framed as a common experience among others, so the patient is not alone. Shame attenuation would be anchored in her own stress and situation instead.`},
{id:'va207',t:'shameatt',d:['normalization','bragging','gentleassume'],q:'Which validity technique is this?',x:`C: You've been up all night with the baby for weeks, and your husband is working abroad. Considering how worn out you are, has there been a moment when you shook the baby or handled him roughly?
P: Once. I put him down right away and cried.`,
w:`The question is framed through this patient's own exhaustion and circumstances. Normalization instead leans on what other people experience.`},
{id:'va208',t:'bragging',d:['shameatt','exaggeration','gentleassume'],q:'Which validity technique is this?',x:`C: A guy with your reputation on the street probably doesn't back down from anything. How many times have you been in a knife fight?
P: (grinning) Three, maybe four. The last one was a mess.`,
w:`A compliment precedes the question about a negative behavior and invites the patient to show off. Shame attenuation uses the patient's own pain; this uses his pride.`},
{id:'va209',t:'behinc',d:['verbalvideo','defterms','clarnorms'],q:'Which validity technique is this?',x:`P: My husband and I had a terrible fight, and I totally snapped.
C: When you say snapped, what did you actually do?
P: I threw a plate at the wall and then went to my sister's.`,
w:`The clinician asks for what the patient actually did, replacing the label "snapped" with observable facts. A verbal video would chain many such steps together.`},
{id:'va210',t:'verbalvideo',d:['behinc','anchor','tagging'],q:'Which validity technique is this?',x:`C: Start with the moment you woke up that day. What did you do first?
P: I made coffee. Then I checked my phone.
C: And then?
P: I went back to bed. Next thing I know it was dark.
C: What happened between the phone and the dark?`,
w:`Many linked "and then what?" steps rebuild the day, and the clinician notices the gap in the sequence. A single behavioral incident is just one fact.`},
{id:'va211',t:'gentleassume',d:['denialspec','normalization','catchall'],q:'Which validity technique is this?',x:`C: How much alcohol do you usually drink on a night out?
P: Oh, about four or five beers.`,
w:`The question assumes drinking without judgment and asks only how much, so disclosure is easier than with a yes-or-no question. Denial of the specific asks about listed items one at a time.`},
{id:'va212',t:'denialspec',d:['cannon','gentleassume','tagging'],q:'Which validity technique is this?',x:`C: In the last year, have you had trouble sleeping?
P: Sometimes.
C: Have you had racing thoughts?
P: No.
C: Have you been spending money you didn't have?
P: ...Yes, actually.
C: Have you felt unusually energetic?`,
w:`Each symptom is asked about separately so each requires its own answer, and one hidden yes surfaced. A cannon question would bundle them into one.`},
{id:'va213',t:'cannon',d:['denialspec','catchall','tagging'],q:'What validity problem does this question have?',x:`C: Any problems with sleep, appetite, energy, concentration, mood, or thoughts of death?
P: No, I'm okay.`,
w:`Bundling many symptoms into one question invites a single easy "no". Denial of the specific (one item per question) is the remedy.`},
{id:'va214',t:'catchall',d:['gentleassume','soundings','cannon'],q:'Which validity technique is this?',x:`C: We've covered your mood, sleep, and family. Before we stop, is there anything else I haven't asked that you feel is important?
P: Well... there is something about my brother.`,
w:`An open invitation near the end of a section for whatever the clinician did not think to ask. Gentle assumption presumes a specific behavior; this one presumes nothing.`},
{id:'va215',t:'sympamp',d:['exaggeration','gentleassume','soundings'],q:'Which validity technique is this?',x:`C: In a typical week, how many drinks do you have: 20, 30, 40?
P: Oh, no. More like ten or twelve.`,
w:`Starting high makes even a minimized answer reveal a real problem. Exaggeration is humor aimed at shame, not a deliberately high numerical range.`},
{id:'va216',t:'bogus',d:['soundings','sympamp','tagging'],q:'Which technique is the clinician using?',x:`C: Do you ever smell colors, or feel the voices come out of your elbow?
P: Yes, both. All day long.`,
w:`These symptoms do not occur in genuine illness. Endorsing atypical or nonexistent items raises the question of feigning, to be interpreted carefully within the whole picture.`},
{id:'va217',t:'soundings',d:['bogus','sympamp','matrixq'],q:'Which technique is the clinician using?',x:`P: I'm willing to try therapy, I guess.
C: Would you come every week, even if it meant leaving work early?
P: Hmm. Maybe every other week.
C: And if I asked you to keep a daily diary?
P: I don't know about that.`,
w:`Graded probes step by step measure how deep the commitment goes. Symptom amplification sets high numbers on purpose, which this does not.`}
);

/* -- pb -- */
/* The person beneath (Shea Ch. 6) — second-case series. Drafted 2026-11-02. */
V.push(
{id:'pb201',t:'parataxic',d:['intersubj','kulturbrille','telescoping'],q:'Which concept fits best?',x:`P: I knew it. You're going to side with my boss just like my mother always sided with my brother.
O: The clinician has said nothing about the boss. The patient looks at her with obvious resentment.`,
w:`He perceives the clinician through a template from earlier relationships. Intersubjectivity is about data shaped by both participants, not one person's distorted view.`},
{id:'pb202',t:'intersubj',d:['parataxic','reliablyinvalid','kulturbrille'],q:'Which concept is the resident describing?',x:`C: (to supervisor) With me, he said he never drinks. After you sat in, he mentioned a weekend binge. The history I got seems to depend on who is in the room.`,
w:`The data came out of the particular pairing of interviewer and patient, so they are jointly constructed. Reliably invalid interviewing would be a consistent habit of one interviewer producing wrong data.`},
{id:'pb203',t:'reliablyinvalid',d:['intersubj','parataxic','kulturbrille'],q:'What problem has she found in her interviewing?',x:`O: A resident reviews her notes and sees she always asks, "Nothing like abuse ever happened to you, right?" She has recorded "no history of abuse" for almost every patient.`,
w:`A consistent habit (a negative, leading question) yields consistently wrong data. Intersubjectivity is variation by dyad, not one fixed bad habit.`},
{id:'pb204',t:'interpers',d:['phenom','strengths','presentsol'],q:'What kind of inquiry is this?',x:`C: If I asked your sister to describe the kind of person you are, what would she say?
P: That I'm stubborn and I hold grudges.
C: And what would your teacher have said when you were young?`,
w:`Understanding the person through how they believe others see them. Phenomenological inquiry would ask what the experience feels like to the patient.`},
{id:'pb205',t:'phenom',d:['interpers','presentsol','skills'],q:'What kind of inquiry is this?',x:`C: Take me into a bad evening for you. What do you see around you, what do you hear, and how does your body feel?
P: The house is very quiet. My chest feels heavy, like wet sand.`,
w:`Exploring the lived, sensory experience of being this person. Interpersonal perspective instead asks how others see the patient.`},
{id:'pb206',t:'presentsol',d:['miracle','strengths','interests'],q:'What is the clinician asking about?',x:`C: On the nights the panic comes, is there anything you've done that took the edge off, even slightly?
P: Sitting on the porch with a cold towel on my neck helps a little.`,
w:`What the patient has already tried that has helped. The miracle question would imagine a future where the problem is gone.`},
{id:'pb207',t:'strengths',d:['skills','interests','presentsol'],q:'Which part of the wellness triad does this reveal?',x:`C: What do your neighbors say about you?
P: That I'm kind. I always notice when someone's having a hard time.`,
w:`A character trait (kindness) describes who the person is. A skill would be something they learned to do well.`},
{id:'pb208',t:'skills',d:['strengths','interests','presentsol'],q:'Which part of the wellness triad does this reveal?',x:`P: Before I got sick I ran the books for my family's hardware store. I can balance accounts in my head.`,
w:`A learned, teachable ability. Strengths are character traits; interests are what he enjoys.`},
{id:'pb209',t:'interests',d:['skills','strengths','presentsol'],q:'Which part of the wellness triad does this reveal?',x:`P: I can't sing well at all, but I love karaoke nights with my cousins. It's the best part of my month.`,
w:`A pastime she loves regardless of skill, which is why it is an interest and not a skill.`},
{id:'pb210',t:'kulturbrille',d:['parataxic','intersubj','reliablyinvalid'],q:'Which concept is the resident recognizing?',x:`O: A resident from a small family finds herself labeling a patient's household of three generations sharing one room as "enmeshed." She stops and asks herself whether she is calling it a problem only because it differs from her own upbringing.`,
w:`Her own cultural glasses define what seems normal to her. It is a lens everyone has, not a transference-like distortion of one person.`}
);

/* -- ap -- */
/* Assessment and planning (Shea Ch. 7) — second-case series. Drafted 2026-11-02. */
V.push(
{id:'ap201',t:'primsec',d:['redherring','vcode','matrixq'],q:'Which diagnostic strategy is she using?',x:`C: (to supervisor) Before I think about panic disorder versus PTSD, I want to check whether the main trouble is anxiety, mood, psychosis, or substance use, and I will screen the others too.`,
w:`Broad regions first, then specific diagnoses within them, so whole regions are not missed.`},
{id:'ap202',t:'vcode',d:['primsec','redherring','damagingmatrix'],q:'How would this problem be classified?',x:`O: A man with no mental disorder asks for help after his father's death, with a bitter dispute with his siblings over the family land. The resident records the relational problem as a focus of clinical attention.`,
w:`A real problem worth attention that is not attributed to a mental disorder.`},
{id:'ap203',t:'intrawing',d:['interwing','healingmatrix','redherring'],q:'In matrix treatment planning, what is this?',x:`O: For a patient's irrational, repetitive self-critical thoughts, the clinician teaches him to challenge each thought and write a more balanced one.`,
w:`A psychological problem treated with a psychological intervention: same wing in and out. Inter-wing would use a different wing.`},
{id:'ap204',t:'interwing',d:['intrawing','healingmatrix','redherring'],q:'In matrix treatment planning, what is this?',x:`O: For a patient's severe insomnia, which is damaging his marriage, the clinician gets him into couples sessions where tension at bedtime can be discussed.`,
w:`The problem lives in one wing but the intervention comes from another. Intra-wing would stay in the same wing.`},
{id:'ap205',t:'healingmatrix',d:['damagingmatrix','interwing','intrawing'],q:'In matrix treatment planning, what is this?',x:`O: After a young woman starts attending a weekly supported-employment program, her mood lifts, she sleeps better, and her mother says they argue less.`,
w:`A change in one wing improved others: a positive ripple. The intervention itself would be inter-wing or intra-wing.`},
{id:'ap206',t:'damagingmatrix',d:['healingmatrix','redherring','interwing'],q:'In matrix treatment planning, what is this?',x:`O: A patient's new medication makes him sleepy all day. He loses his job, withdraws from friends, and begins to feel hopeless again.`,
w:`A change in one wing, here the biological, harmed the others: a negative ripple, often an unintended side effect.`},
{id:'ap207',t:'redherring',d:['damagingmatrix','primsec','intrawing'],q:'In matrix treatment planning, what is this?',x:`O: An older man brought to the clinic for apparent depression with poor memory and withdrawal is later found to have a medical illness and a medication side effect behind the symptoms.`,
w:`The problem looked psychological but its source was in another wing, the biological. Think whether you are treating the wrong wing.`},
{id:'ap208',t:'matrixq',d:['miracle','presentsol','bgoals'],q:'Which technique is the clinician using?',x:`C: If you were able to stay off alcohol for six months, what else in your life might change?
P: My wife would trust me again, I'd sleep better, and maybe I could go back to coaching the kids.`,
w:`A question about the ripple effects of one specific change. The miracle question imagines everything solved.`},
{id:'ap209',t:'cp_lonely',d:['cp_reject','cp_worthless','cp_meaning'],q:'Which core pain seems most prominent?',x:`P: Since the children moved abroad, the house is silent. I call the clinic just to hear someone's voice.`,
w:`Isolation and disconnection. Rejection would involve expecting others to turn away.`},
{id:'ap210',t:'cp_worthless',d:['cp_lonely','cp_reject','cp_internal'],q:'Which core pain seems most prominent?',x:`O: Offered a simple scheduling task at the clinic, the patient says, "I'll just mess it up. I always do. I'm no good at anything."`,
w:`The self is seen as inadequate and unable to cope. Rejection is about what others will do.`},
{id:'ap211',t:'cp_reject',d:['cp_lonely','cp_worthless','cp_meaning'],q:'Which core pain seems most prominent?',x:`P: I didn't even come to the reunion because I knew they'd all whisper about me. People always turn on me in the end, so I leave first.`,
w:`She expects others' rejection and acts to pre-empt it. Loneliness is about being alone, not about being turned against.`},
{id:'ap212',t:'cp_internal',d:['cp_worthless','cp_meaning','cp_lonely'],q:'Which core pain seems most prominent?',x:`P: Sometimes my thoughts race so fast I feel I'm losing my mind. I'm afraid of what I might do and I can't stop it.`,
w:`The threat is inside the person: fear of losing control of impulses, emotions, or mind.`},
{id:'ap213',t:'cp_meaning',d:['cp_worthless','cp_lonely','cp_reject'],q:'Which core pain seems most prominent?',x:`P: My family is fine and my job is fine. I just wake up and wonder why I am here at all.`,
w:`Pain about purpose, not about relationships or competence. Worthlessness would be about being inadequate.`}
);

/* -- nv -- */
/* Nonverbal behavior (Shea Ch. 8) — second-case series. Drafted 2026-11-02. */
V.push(
{id:'nv201',t:'emblem',d:['illustrator','adaptor','regulator'],q:'Which type of nonverbal behavior is this?',x:`O: When asked if he is ready to continue, the patient shrugs with palms up, meaning he does not know.`,
w:`A gesture with an agreed cultural meaning that stands in for words. An illustrator would accompany speech.`},
{id:'nv202',t:'illustrator',d:['emblem','regulator','affdisplay'],q:'Which type of nonverbal behavior is this?',x:`P: The man who followed me was this tall.
O: She holds her hand well above her head while speaking.`,
w:`A gesture that clarifies the speech by showing size. An emblem would replace the words.`},
{id:'nv203',t:'regulator',d:['illustrator','adaptor','affdisplay'],q:'Which type of nonverbal behavior is this?',x:`O: While the patient talks, the clinician nods slowly and leans forward, and the patient keeps going. Then the clinician looks at him expectantly and he stops.`,
w:`Movements that manage the flow and turn-taking of the conversation.`},
{id:'nv204',t:'adaptor',d:['cutoff','emblem','regulator'],q:'Which type of nonverbal behavior is this?',x:`O: When the clinician asks about her marriage, the patient begins twisting her ring and touching her hair, apparently without noticing.`,
w:`Self-soothing comfort behaviors, mostly outside awareness, that tend to rise with anxiety. A cut-off specifically blocks out stress.`},
{id:'nv205',t:'affdisplay',d:['adaptor','illustrator','incongruence'],q:'Which type of nonverbal behavior is this?',x:`O: A patient says he is happy to be going home. For a moment his face drops and the corners of his mouth turn down before he smiles.`,
w:`A brief facial expression of emotion, here at odds with his words.`},
{id:'nv206',t:'cutoff',d:['adaptor','affdisplay','regulator'],q:'Which type of nonverbal behavior is this?',x:`O: When the clinician asks about his brother's death, the patient shuts his eyes tightly and holds them closed for several seconds.`,
w:`Closing or averting the eyes blocks out stress input, a cut-off. Adaptors are comfort behaviors like touching the face.`},
{id:'nv207',t:'proxemics',d:['kinesics','paralanguage','respzone'],q:'Which area of nonverbal communication does this involve?',x:`O: The resident notes that the patient chose the chair by the door, pulled it far from the desk, and moved it farther when the clinician stood up.`,
w:`How the patient uses space and distance, not movement or voice.`},
{id:'nv208',t:'kinesics',d:['proxemics','paralanguage','immediacy'],q:'Which area of nonverbal communication does this involve?',x:`O: The resident notes the patient's slumped posture, his lack of gestures, and the fixed gaze on the floor.`,
w:`Body movement: posture, gestures, face, and gaze, rather than distance or voice.`},
{id:'nv209',t:'paralanguage',d:['kinesics','proxemics','immediacy'],q:'Which area of nonverbal communication does this involve?',x:`O: Over the phone, the patient's speech is rapid and loud, with little pause, and his voice cracks at the end of each sentence.`,
w:`How the words are said: rate, loudness, rhythm, and fluency of the voice.`},
{id:'nv210',t:'immediacy',d:['respzone','proxemics','kinrecip'],q:'What has the resident reduced?',x:`O: A resident with an agitated, paranoid patient sits farther back, turns her chair slightly away, and avoids staring. The patient's voice softens.`,
w:`She lowered overall nonverbal closeness and involvement, which fits an escalating or paranoid patient. Raising it is for withdrawn patients.`},
{id:'nv211',t:'respzone',d:['immediacy','proxemics','phantompres'],q:'Which concept is the clinician applying?',x:`O: The clinician tries several seats and finds that at this distance the patient looks at ease and still responds when she leans in or nods.`,
w:`The patient-specific distance where comfort and responsiveness to your movements overlap.`},
{id:'nv212',t:'incongruence',d:['affdisplay','cutoff','adaptor'],q:'What should the clinician notice?',x:`O: A patient says in a flat tone and with a faint smile that he is grieving his wife, and then shakes his head slowly as he says he is ready to move on.`,
w:`The channels (words, tone, face) disagree, often signaling ambivalence worth exploring.`},
{id:'nv213',t:'kinrecip',d:['immediacy','regulator','respzone'],q:'What pattern is the clinician being pulled into?',x:`O: A patient laughs warmly, touches the resident's arm, and compliments her hair. The resident finds herself smiling more, leaning in, and lingering past the end of the session.`,
w:`A courting reciprocal: an escalating shared script that the clinician unconsciously joins. The remedy is to notice and step out of it.`},
{id:'nv214',t:'phantompres',d:['nakedcomm','proxemics','immediacy'],q:'Which effect is he compensating for?',x:`O: During video visits, a psychiatrist knows the patient's eyes appear to look elsewhere and the patient feels less involved. He exaggerates nods and looks at the camera at key moments.`,
w:`A clinician who is only an image on a screen has reduced immediacy. Video still keeps face and voice, unlike text.`},
{id:'nv215',t:'nakedcomm',d:['phantompres','paralanguage','cutoff'],q:'What is the interviewer up against?',x:`O: In a chat-based screening, a patient writes "ok" after a pause and then goes quiet. The interviewer cannot tell whether it means calm, anger, or distress.`,
w:`All nonverbal cues are absent, leaving only the words and timing. Ask more often how the patient feels.`}
);

/* -- md -- */
/* Mood disorders (md) — second-case series, Shea Ch. 9. Drafted 2026-11-02. */
V.push(
{id:'md201',t:'pdd',d:['dmdd','cyclothymia','atypfeat'],q:`Which diagnosis fits best?`,x:`P (mother): Since the start of Grade 10 she has been sad and tired, and she says she hates herself. That's about fourteen months now. The best stretch was maybe three weeks last summer.
O: The 16-year-old girl has no outbursts, no periods of high energy, and no decreased need for sleep.`,w:`Depressed mood most days for at least 1 year in a young person, with other depressive symptoms and never more than 2 symptom-free months, is persistent depressive disorder. Unlike disruptive mood dysregulation disorder, the picture is low mood, not irritable outbursts.`},
{id:'md202',t:'melancholic',d:['atypfeat','agitdep','anxdistress'],q:`Which specifier fits best?`,x:`P: Nothing gives me any pleasure now. When my daughter told us she is expecting, I felt nothing at all. I'm up at four in the morning, I feel worst until about noon, I can't eat, and I keep thinking it's all my fault.
O: A 59-year-old woman, she speaks slowly and has lost weight.`,w:`Loss of pleasure with no reactivity to good news, plus early waking, morning worsening, weight loss, psychomotor change, and excessive guilt: melancholic features. Atypical features would show a mood that still brightens with good events.`},
{id:'md203',t:'anxdistress',d:['agitdep','mixedfeat','melancholic'],q:`Which specifier fits best?`,x:`O: In the ER, a 37-year-old woman who has been low for a month paces the hallway with clenched hands.
C: What is the anxiety like for you?
P: Terrible. I can't sit still, my mind runs through worries, and I feel something awful is about to happen.`,w:`Prominent tension, restlessness, worry, and a sense that something awful will happen during a depressive episode is the anxious distress specifier. Fawcett found intense anxiety in depression raises suicide risk, so severe anxiety calls for a careful suicide assessment.`},
{id:'md204',t:'atypfeat',d:['melancholic','bip2','pdd'],q:`Which specifier fits best?`,x:`O: A 24-year-old man has been depressed for two months. He perked up and joked all afternoon after hearing he got a job interview, but he sleeps about twelve hours, has gained weight, and says his legs feel like lead on the stairs. He has always been crushed by any hint of criticism. An uncle has bipolar disorder.`,w:`Mood reactivity with hypersleeping, weight gain, leaden paralysis, and long-standing rejection sensitivity: atypical features. They are more common in bipolar depression, so with his family history, search carefully for hypomania or mania.`},
{id:'md205',t:'peripartum',d:['melancholic','pdd','atypfeat'],q:`Which specifier applies?`,x:`C: When did the low mood begin in relation to the pregnancy?
P: At about thirty weeks. I stopped enjoying anything, I cry every day, and I can't sleep even though I'm so tired.`,w:`The specifier is defined by timing: onset during pregnancy or within 4 weeks after delivery. The symptoms themselves are those of an ordinary depressive episode, so always place onset against the pregnancy and delivery.`},
{id:'md206',t:'mania',d:['hypomania','mixedfeat','dysmania'],q:`Which mood state does this most suggest?`,x:`O: Police bring in a 34-year-old woman from a roadside, singing loudly and wearing three layers of jewelry.
P: I've slept two hours in five days. The mayor has appointed me to fix the whole province, and I need your phone to call him.
O: When the nurse says she must wait, she screams at her and then laughs.`,w:`Elevated, expansive mood that flips to irritability, grandiose delusion, and marked impairment with police involvement is a manic episode. Hypomania has no psychosis and no marked impairment or hospitalization.`},
{id:'md207',t:'hypomania',d:['mania','cyclothymia','bip2'],q:`Which episode is this?`,x:`C: Have you ever had periods of suddenly feeling unusually happy and super-energized, and you couldn't explain why?
P: Yes, in March. About five days of sleeping four or five hours, redecorating the whole house, and being the life of every party. My husband said I wasn't myself. I still went to work every day and nothing blew up.`,w:`At least 4 consecutive days, an observable change, and no marked impairment, hospitalization, or psychosis: a hypomanic episode. Mania would bring marked impairment or psychosis, and cyclothymia would be low-grade periods that never reach full episodes.`},
{id:'md208',t:'bip1',d:['bip2','pdd','cyclothymia'],q:`Which diagnosis does this history change?`,x:`O: A 23-year-old woman is admitted severely depressed. She denies ever feeling the opposite. Her mother then tells the resident that at nineteen her daughter hardly slept for a week, spent the family's savings, believed she was a messenger from God, and spent ten days in a psychiatric hospital.`,w:`A single past manic episode, shown here by psychosis, marked impairment, and hospitalization, makes it bipolar I even though she is depressed now. Past manias are often sealed over, so get collateral.`},
{id:'md209',t:'bip2',d:['bip1','cyclothymia','substbp'],q:`Which diagnosis fits best?`,x:`C: Before I think about an antidepressant, has there ever been a time, even years ago, when you felt just the opposite?
P: Now that you ask, a few times in my forties I was on fire for four or five days, writing proposals at night. Everyone said it was my best work. Then I'd crash into a depression like this one. I never missed a day of work.
O: He is 56 and has had four depressions.`,w:`Major depressions plus hypomania, with no mania, is bipolar II. Shea believes it is frequently missed, so screen for hypomania before starting an antidepressant.`},
{id:'md210',t:'mixedfeat',d:['agitdep','dysmania','rapidcyc'],q:`Which specifier applies?`,x:`O: A 33-year-old man has met criteria for a hypomanic episode for the past week, with decreased need for sleep, pressured talk, and a busy stream of ideas. On most days he has also felt hopeless, cried, and been consumed by guilt.`,w:`A manic or hypomanic episode with three or more depressive symptoms is a mixed features specifier: both poles in one episode. Missed mixed states may lead to antidepressants without a mood stabilizer.`},
{id:'md211',t:'dysmania',d:['agitdep','mixedfeat','cyclothymia'],q:`Which presentation does this suggest?`,x:`C: Do you feel driven to do something about it, and do it now, even if you don't think it's smart?
P: Yes! I'm so angry at everyone, and the whole world is a mess. I can't sit. I want to act, and I don't care what happens.
O: A 20-year-old woman, a chart label reads "borderline." Her sleep and appetite are only mildly off, and she has no grandiosity.`,w:`Angst out of proportion to mild neurovegetative symptoms, broad anger at the world, and a drive to act now suggest dysphoric mania, which is often missed in young adults and mislabeled as borderline. Agitated depression is helpless and befuddled, not driven.`},
{id:'md212',t:'agitdep',d:['dysmania','melancholic','anxdistress'],q:`Which presentation does this suggest?`,x:`O: A 62-year-old man on the ward wrings his hands and cannot sit still. He says the bills, his health, and his daughter are all too much.
C: Do you have any ideas of how to solve your problems?
P: No. I wish someone would just tell me what to do.`,w:`High anxiety and restlessness with feeling overwhelmed, helpless, and without plans: agitated depression. In dysphoric mania the patient is driven to act and angry at the world.`},
{id:'md213',t:'substbp',d:['bip2','mania','hypomania'],q:`Which diagnosis fits best?`,x:`O: A 45-year-old woman with a low mood starts St. John's wort from a friend. Within a week she is sleeping three hours, talking rapidly, and spending impulsively. Her husband says she's "not herself." Two weeks after she stops the herb, she is back to normal and has no earlier history of highs.`,w:`Hypomanic symptoms that emerge in response to a treatment and resolve after it stops are a substance/medication-induced bipolar disorder. Had full symptoms persisted well beyond the agent's effect, the diagnosis would become bipolar I or II.`},
{id:'md214',t:'cyclothymia',d:['bip2','pdd','dmdd'],q:`Which diagnosis fits best?`,x:`P (sister): For about three years she goes through stretches where she's flat and tired, then stretches where she's chatty and doesn't sleep much and starts projects. People call her "moody." Neither lasts long enough to be a real depression or a real high, and she's never been steady for more than a couple of months.
O: The patient is a 35-year-old woman.`,w:`Frequent low-grade depressive and hypomanic periods over at least 2 years that never meet full episode criteria: cyclothymic disorder. Bipolar II requires at least one major depressive episode and one full hypomanic episode.`},
{id:'md215',t:'rapidcyc',d:['cyclothymia','mixedfeat','bip2'],q:`Which specifier applies?`,x:`C: Let's draw your last year on this timeline.
P: Manic in February, hospitalized. Depressed from April to June. Manic again in August. Then depressed since October.
O: A 41-year-old man with bipolar I has had four distinct mood episodes in 12 months, separated by a switch in polarity.`,w:`Four or more mood episodes in 12 months, separated by remission or a polarity switch, define rapid cycling. It counts episodes in a year, not how fast moods swing within a day, and a mood chart makes it clear.`},
{id:'md216',t:'dmdd',d:['bip1','cyclothymia','pdd'],q:`Which diagnosis fits best?`,x:`P (mother): Since she was ten, Camille is angry nearly every day. She screams and throws things two or three times a week over little things, like a changed channel. Between outbursts she's cranky and short with everyone. She has never had days of being giddy or sleepless.
O: The girl is now 12.`,w:`Chronic irritability between frequent severe outbursts in a young person, without distinct episodes of elevated mood: disruptive mood dysregulation disorder. Bipolar disorder is reserved for episodic presentations.`},
{id:'md217',t:'pseudodementia',d:['melancholic','clouding','antero'],q:`What should the clinician consider?`,x:`P (wife): He says he can't remember anything or concentrate, and he's given up on his crosswords. It began after he retired, along with poor sleep and no appetite.
O: A 70-year-old man is alert and oriented. On a bedside memory test he says "I can't" early, but with encouragement he recalls more than he expected.`,w:`Depression masquerading as dementia: he gives up easily but does better with encouragement, and the symptoms began with mood changes. A bedside cognitive exam helps sort it out, remembering that dementia can also masquerade as depression.`},
{id:'md218',t:'nervios',d:['heartidiom','somaticidiom','deperson'],q:`Which cultural idiom of distress is the patient using?`,x:`O: At her cousin's funeral, a 33-year-old Dominican woman suddenly begins screaming and trembling, then cries uncontrollably and says she feels unreal and outside herself.
P: It was an ataque de nervios. It happens to us when the pain is too much.`,w:`Ataque de nervios, an idiom of distress in Puerto Rican and Dominican communities, includes trembling, crying or screaming, and depersonalization. Ask about it with the patient's own words, then explore depression and anxiety.`},
{id:'md219',t:'heartidiom',d:['nervios','somaticidiom','melancholic'],q:`Which cultural idiom of distress is the patient using?`,x:`O: Through an interpreter, a 52-year-old woman from a Middle Eastern community presses her hand to her chest.
P: My heart is troubled. It has been heavy since the war took my brother. The cardiologist said my heart is healthy.
C: When you say your heart is troubled, what do you mean?`,w:`Distress located in the heart, a recognized idiom in many Middle Eastern contexts, not necessarily a cardiac complaint. Explore what the patient means, then ask about mood, sleep, and appetite.`},
{id:'md220',t:'somaticidiom',d:['nervios','heartidiom','pseudodementia'],q:`Which cultural idiom of distress is the patient using?`,x:`P (son, translating): My mother has headaches, her whole body aches, and she's tired. The doctors say nothing is wrong.
C: Those sound uncomfortable. And how have your energy, sleep, and interest in things been?
P (son, translating): She says she doesn't sleep and has no wish to see her friends.`,w:`Distress carried through bodily complaints, common in many Chinese and other Asian contexts. Take the physical symptoms seriously, then ask about energy, sleep, and enjoyment to uncover depression.`}
);

/* -- bm -- */
/* Beneath the mood disorder (bm) — second-case series, Shea Ch. 10. Drafted 2026-11-02. */
V.push(
{id:'bm201',t:'blockfuture',d:['hopeless','windowshade','caging'],q:`Which depressive experience is this?`,x:`P: It's Tuesday again. It was Tuesday yesterday. The days don't go anywhere. I can't feel tomorrow coming, so why would I plan anything?`,w:`Minkowski's blocking of the future: time itself feels stuck, every day a replica of the last, and motivation evaporates. Hopelessness is the stated belief that things won't improve; here the sense of change itself has vanished.`},
{id:'bm202',t:'shrinkworld',d:['blockfuture','rejcycle','caging'],q:`Which depressive experience is this?`,x:`P (daughter): Papa used to greet every neighbor and check his rice fields. Now he only notices the chair and the TV. He doesn't see the visitors, doesn't notice the harvest, and won't leave the house.
O: The 66-year-old man answers each question slowly and briefly.`,w:`The part of the world he still engages has contracted, like a cataract of the mind. Unlike a rejection cycle, nobody is pulling away; his own circle of attention and action has shrunk.`},
{id:'bm203',t:'windowshade',d:['shrinkworld','caging','avolition'],q:`Which phenomenon is this?`,x:`O: On the ward, a 40-year-old man stands in the corridor with his eyes tightly shut.
P: I'm not sleepy. It's like I can't take the world in, and I have this pull to shut it all out. Even at the market I have to close my eyes.`,w:`Shea's window shade response: an oddly strong urge to close the eyes and shut out the world, not sleepiness. It is a reliable marker of moderate to severe depression and not typical of pure anxiety disorders.`},
{id:'bm204',t:'caging',d:['persev','overgeneral','shrinkworld'],q:`Which phenomenon is this?`,x:`P (wife): Today he asked me four times if his pension will be cut. I explained, I showed him the letter, and he asked again in different words.
O: The 70-year-old man, in the interview, answers a question about appetite with, "But what if they cut the pension?"`,w:`His thinking is trapped in a small network of ruminative themes and keeps returning to one worry despite reassurance. Perseveration repeats the same answer to different questions; here he returns to the same concern.`},
{id:'bm205',t:'cogtriad',d:['overgeneral','hopeless','selfblame'],q:`Which pattern is this?`,x:`P: People are selfish and out for themselves. I'm a failure at everything I try. And next year will just be this year again, only worse.`,w:`Beck's cognitive triad: negative views of the world, the self, and the future at once. It is a pattern of thinking, not one distortion.`},
{id:'bm206',t:'immunelogic',d:['ignorepos','overgeneral','caging'],q:`Which phenomenon is this?`,x:`C: Your last three exam results were in the top ten percent.
P: The teachers are just being kind.
O: At the next visit, she shows him the transcript again, and she says again, with the same certainty, that she is failing.`,w:`Minkowski's immunity to logic: the conclusion survives every piece of evidence, however often presented. In ignoring the positive, the patient may still be open to the facts.`},
{id:'bm207',t:'burden',d:['hopeless','selfblame','famstab'],q:`Which warning sign is this?`,x:`P: My wife does everything for me now. If I weren't around, she could finally rest. Even with the whole family here for Sunday lunch, I feel like I'm completely alone.`,w:`Joiner's perceived burdensomeness, with intense aloneness among caring people, is one of the most reliable interpersonal harbingers of a suicide attempt. Ask directly about suicidal thoughts, plans, and intent.`},
{id:'bm208',t:'learnedhelp',d:['hopeless','selfblame','rejcycle'],q:`Which process is this?`,x:`O: A 19-year-old student studied through the night for three exams and failed each one. Now he doesn't study, doesn't ask the teachers for help, and says, "Nothing I do makes a difference."`,w:`Seligman's learned helplessness: after inescapable adversity, exploration stops, and so do new learning and reward. He stops trying because past efforts didn't work.`},
{id:'bm209',t:'hopeless',d:['burden','blockfuture','depanger'],q:`Which warning sign is most important here?`,x:`O: A 45-year-old woman, brought to the ER, says her mood is "fine, a little tired."
C: When you picture the future, what help do you see?
O: She is silent for a long time, then says, "None."`,w:`Beck found hopelessness more specific and sensitive for suicide potential than depressed mood itself. A blank answer to "what help do you see?" is an alarm; ask directly about suicide.`},
{id:'bm210',t:'depanger',d:['projdep','irritloop','learnedhelp'],q:`What might the sudden flash of anger suggest?`,x:`O: A 38-year-old woman describes her husband's affair in a flat, tired voice. Then she says through clenched teeth, "I hope he rots," and returns to flatness.
C: You sound furious at him. Tell me more.`,w:`Anger can pierce apparent apathy in depression, consistent with the view of depression as anger turned inward. A flash in a flat patient is a clue; explore it gently.`},
{id:'bm211',t:'projdep',d:['depanger','delusional_d','pseudohypo'],q:`What underlying process should the clinician consider?`,x:`C: Have you been feeling depressed?
P: No. The neighbors laugh at me and say I deserve it. They're enjoying watching me suffer.
O: A 48-year-old woman, tearful for a moment, then guarded. She sleeps poorly and has lost weight, and she denies thoughts of suicide.`,w:`Self-hatred too painful to own, experienced as others' hatred: projection in depression. The persecutors are punishing someone who deserves it, so consider underlying depression and suicide risk even when ideation is denied.`},
{id:'bm212',t:'pseudohypo',d:['hypomania','reactivity','mania'],q:`What is the likeliest explanation for his presentation?`,x:`O: A 52-year-old farmer jokes loudly with the nurses and talks quickly. He lists that his wife left, the bank took his land, and his brother died this year. His voice cracks on "my brother," and he laughs it off.`,w:`A cheerful, talkative front concealing depression: he is too happy for the many stressors he describes, and the cracked voice gives it away. Hypomania would not be accompanied by that grief breaking through.`},
{id:'bm213',t:'reactivity',d:['pseudohypo','atypfeat','hypomania'],q:`What should the resident recognize?`,x:`O: A 29-year-old man laughs and chats with the warm, extroverted attending, who writes "euthymic." Afterward the nurse finds him slumped in the hallway. He tells her he has been low "since I was a teenager" and was putting on a show.`,w:`Interviewer-induced brightening in a patient with long-standing depression, as can occur in dysthymia or atypical depression. The warmth and setting caused the brightening, so weigh the history, not just the affect in the room.`},
{id:'bm214',t:'rejcycle',d:['irritloop','famstab','shrinkworld'],q:`Which cycle is this?`,x:`C: How do people seem to be treating you?
P: Since I've been down, I stopped calling anyone. Now no one calls me. See, they just wanted a fun person. So why would I call?`,w:`Withdrawal brings fewer smiles and less contact, others pull back, and that confirms the patient's view and prompts more withdrawal. Naming the loop opens a therapeutic target.`},
{id:'bm215',t:'irritloop',d:['rejcycle','depanger','selfblame'],q:`Which cycle is this?`,x:`O: A mother of two snaps at her son about homework, then spends the evening ashamed that she is a terrible mother. She wakes up lower the next morning, and the next small thing sets her off again.`,w:`Irritability toward a loved one leads to guilt, deeper depression, and more irritability, all within the patient. Naming the loop can relieve guilt and point to targets for treatment.`},
{id:'bm216',t:'cutcry',d:['sidetrack','shutdown','namingemo'],q:`What did the resident do?`,x:`P: I lost the baby at twenty weeks, and since then...
O: The patient's voice breaks and she begins to weep.
C: Oh, please don't cry. Let's talk about something happier, like your job.`,w:`He ended the crying early, probably because her pain is disturbing to him. Sidetracking defuses anger; here the move shuts off tears that could lower defenses and reveal core pain.`},
{id:'bm217',t:'famstab',d:['burden','kinrecip','famblame'],q:`Which family dynamic is this?`,x:`P (husband): I'm the only one who can calm her down. The kids can't do it. That's why I don't think the day program is a good idea.
O: He sighs heavily as he says he is exhausted, and his wife looks down. Her sister later says he seems almost relieved that she "needs" him.`,w:`The depression has become a stabilizing part of the family system: he gains worth and control from being the only helper, and may unconsciously not want change. This coexists with real exhaustion and love.`},
{id:'bm218',t:'overgeneral',d:['catastroph','ignorepos','cogtriad'],q:`Which distortion is this?`,x:`P: I flunked this one exam. Everything I touch falls apart. I'm always the one who ruins things.`,w:`One experience turned into a rule with words like everything and always. Catastrophizing jumps to a feared future disaster; overgeneralization draws a universal rule from one event.`},
{id:'bm219',t:'catastroph',d:['overgeneral','selfblame','hopeless'],q:`Which distortion is this?`,x:`P: The doctor ordered a blood test. It must be something terrible. I'll be dead in months and my kids will be alone.`,w:`A small event is blown up into disaster, a leap to the worst outcome from thin evidence. Overgeneralization would draw a rule from the past rather than predict calamity.`},
{id:'bm220',t:'ignorepos',d:['immunelogic','overgeneral','selfblame'],q:`Which distortion is this?`,x:`P: My teaching evaluations are all excellent, but one student wrote that I was boring. I keep rereading it.
C: You mentioned the excellent evaluations. How did those count?
P: Hm. I guess they did count. I just didn't let them.`,w:`The positive evidence is screened out and only the failure counts. Because he can take in the facts when pointed out, this is a filter, unlike immunity to logic, where facts never move the conclusion.`},
{id:'bm221',t:'selfblame',d:['overgeneral','ignorepos','burden'],q:`Which distortion is this?`,x:`P: My brother crashed his car on the wet road. If I hadn't asked him to pick me up, it wouldn't have happened. I'm a terrible sister.
C: Do you feel you're a good person, or do you have doubts?
P: I have doubts. I guess I do.`,w:`Responsibility assigned to oneself for something one did not control, with a sense of being flawed. Because she can admit doubt, it is not yet a fixed delusional guilt.`}
);

/* -- po -- */
/* Psychotic disorders (po) — second-case series, Shea Ch. 11. Drafted 2026-11-02. */
V.push(
{id:'po201',t:'hardsigns',d:['softsigns','delusmood','deficit'],q:`What kind of finding is this?`,x:`P (sister): She tells everyone there's a camera in the lamp, and she covers it with a towel.
O: A 31-year-old woman answers questions about her job by jumping from topic to topic without connection, and says the camera records her thoughts.`,w:`A fixed delusion and disorganized speech are hard signs of psychosis. Soft signs are subtle clues like vagueness or odd affect.`},
{id:'po202',t:'softsigns',d:['hardsigns','deficit','cultexp'],q:`What kind of finding is this?`,x:`O: A 19-year-old university student gives vague answers, waits a long time before replying, and avoids eye contact. He smiles while describing a death in the family and says his thoughts are "going sideways." He denies voices and special beliefs, and he is guarded about what he does at night.`,w:`Vagueness, latency, inappropriate affect, an odd phrase, and guardedness are soft signs of a smoldering process, not proof. Ask what the odd phrase means and gather collateral.`},
{id:'po203',t:'delusmood',d:['delusperc','delusidea','softsigns'],q:`Which phase of an emerging delusion is this?`,x:`P: Since the typhoon, the whole town feels staged, like everyone knows something I don't. The colors are too bright. I can't tell you what it is. I just have a dread that something is about to happen.`,w:`Something feels strange and ominous, perceptions are intensified, and no belief has formed yet: delusional mood. A delusional perception would involve a specific perception given a special personal meaning.`},
{id:'po204',t:'delusperc',d:['delusmood','delusidea','delref'],q:`Which phase of an emerging delusion is this?`,x:`P: The traffic light turned red just as I arrived at the corner. Right then I knew the president had chosen me for a mission.`,w:`A normal perception, a red light, suddenly takes on a special, personal meaning: delusional perception, a first-rank symptom. A fixed delusion of reference is the later, settled belief that events carry messages.`},
{id:'po205',t:'delusidea',d:['delusmood','delusperc','persec'],q:`Which phase of an emerging delusion is this?`,x:`C: How do you know it's the company?
P: The three black cars, the clicks on the phone, the letters. Nothing else explains it. They want my land, and I'm sure of it.`,w:`The suspicions have crystallized into a concrete, fixed, explained belief: the patient now knows what is happening and why. Delusional mood would still be a vague sense that something is off.`},
{id:'po206',t:'brief_psy',d:['micropsy','schizoform','psychmood'],q:`Which diagnosis fits best?`,x:`O: A 40-year-old man with no psychiatric history loses his job, then over two days becomes disorganized, hears voices, and believes he is being watched. After nine days he is back to normal, and he returns to work.`,w:`Psychotic symptoms from 1 day to under 1 month, with full return to baseline: brief psychotic disorder. A micropsychotic episode lasts hours to days in a person with a personality disorder.`},
{id:'po207',t:'schizoform',d:['brief_psy','schizo','psychmood'],q:`Which diagnosis fits best?`,x:`O: A 17-year-old girl has heard voices commenting on her and believed the teachers were plotting against her for four months. She is still attending school and has no mood episodes.`,w:`Schizophrenia's core symptoms lasting 1 to under 6 months, with no decline in functioning required: schizophreniform disorder. It is the same illness picture as schizophrenia but shorter than 6 months.`},
{id:'po208',t:'schizo',d:['schizoform','schizoaff','delusional_d'],q:`Which diagnosis fits best?`,x:`P (sister): He has heard voices for two years, and they narrate what he does. He believes the neighbors are controlling his mind. He lost his job and stopped seeing friends.
O: The 44-year-old man has never had a distinct depressed or manic period, and there is no mood disorder in the family.`,w:`Core symptoms for at least 6 months, with more than delusions alone and no major mood episodes, is schizophrenia. Mood episodes and family mood disorders must be searched for first.`},
{id:'po209',t:'delusional_d',d:['schizo','psychmood','paraphrenia'],q:`Which diagnosis fits best?`,x:`O: A 44-year-old accountant is polite, well-dressed, and effective at work. She says a senior physician is secretly in love with her and sends her signals, which has gone on for 14 months. She has no hallucinations or disorganization.`,w:`An organized delusion lasting over a month, with schizophrenia's criteria never met and otherwise normal functioning: delusional disorder, erotomanic type. The patient seems strikingly normal until the delusion comes up.`},
{id:'po210',t:'schizoaff',d:['psychmood','schizo','schizoform'],q:`Which diagnosis fits best?`,x:`O: A 29-year-old man has a manic episode with persistent voices and paranoid beliefs. His mood becomes normal after three weeks, but the voices and paranoia continue for five more weeks.`,w:`An uninterrupted illness in which psychosis lasts at least 2 weeks beyond the mood episode: schizoaffective disorder. In a psychotic mood disorder, psychosis resolves with the mood.`},
{id:'po211',t:'psychmood',d:['schizoaff','schizo','delusional_d'],q:`Which diagnosis fits best?`,x:`P (husband): She was low for weeks, wouldn't eat, said she was a bad person. Only then did she start hearing voices saying she was rotting.
O: As her depression lifts on treatment, the voices fade.`,w:`Mood symptoms came first, with psychosis emerging at the peak and resolving with the mood: a psychotic mood disorder. In schizophrenia, psychosis typically precedes significant mood symptoms.`},
{id:'po212',t:'dts',d:['stimpsy','anticholdel','delirium_hidden'],q:`What is the most likely cause?`,x:`O: On hospital day three after a hip fracture, a 47-year-old woman is tremulous, drenched in sweat, with a pulse of 118. She picks at the air, saying small insects are crawling on the sheets. A seizure occurred on day two. Her family later admits she drank wine every day.`,w:`Delirium tremens after stopping heavy, prolonged drinking: tremor, sweating, tachycardia, fluctuating confusion, and hallucinations of small animals or insects, after an earlier withdrawal seizure. It needs immediate medical evaluation.`},
{id:'po213',t:'delirium_hidden',d:['schizoaff','schizo','brief_psy'],q:`What should the clinician suspect?`,x:`P (nurse): It's just her usual schizoaffective, she's confused again.
O: A 45-year-old woman with known schizoaffective disorder is drowsy, thinks it is the wrong day, and cannot repeat more than three digits. Her usual relapses are slow, with suspicion and no sleepiness.`,w:`This differs from her usual pattern, and impaired attention points to delirium hidden behind a known psychosis. Test attention and treat it as an urgent medical evaluation.`},
{id:'po214',t:'stimpsy',d:['micropsy','brief_psy','anticholdel'],q:`What is the most likely cause?`,x:`O: A 19-year-old woman with no psychiatric history is brought in from a music festival. She is paranoid, hearing voices, pacing, with a rapid pulse and dilated pupils. A friend says she took a "party pill" six hours ago.`,w:`A full-blown psychosis emerging within hours in a previously normal person strongly suggests a drug cause, here a stimulant. Ask about more than one substance and about medications.`},
{id:'po215',t:'anticholdel',d:['dts','stimpsy','paraphrenia'],q:`What is the most likely cause?`,x:`O: A 69-year-old man starts a cold medicine and an antihistamine for itching, on top of an older antidepressant. He becomes confused and agitated, sees things that aren't there, with flushed dry skin and difficulty passing urine.`,w:`Several agents with anticholinergic effects, in an older adult, cause anticholinergic delirium. Review all prescription, over-the-counter, and borrowed medicines.`},
{id:'po216',t:'paraphrenia',d:['charlesbonnet','delusional_d','anticholdel'],q:`Which diagnosis fits best?`,x:`P (daughter): Since about age 75, Papa says someone comes into his house while he's out and moves things, and at night he hears them whispering. He keeps his hearing aids in a drawer.
O: The 76-year-old widower is neat, polite, and otherwise himself. He talks calmly about the intruders.`,w:`Late-onset, organized, mundane persecutory delusions with auditory hallucinations and relatively preserved personality: paraphrenia. Check hearing, vision, and cognition, and rule out a medical cause.`},
{id:'po217',t:'partition',d:['paraphrenia','somatic','delref'],q:`Which specific delusion is this?`,x:`P: Radiation comes in through the windows from the tower across the street. I lined the glass with foil, and I sleep in the bathroom where the walls are thick.`,w:`The belief that something, here radiation, passes through walls or windows into one's home is a partition delusion. It is common in late-life psychosis such as paraphrenia, but the content is the clue, not a specific disorder.`},
{id:'po218',t:'micropsy',d:['brief_psy','delusmood','schizoform'],q:`What is the best description of this episode?`,x:`O: A 24-year-old man with a lifelong unstable sense of self and stormy relationships is humiliated by his supervisor. For about 36 hours he believes coworkers are plotting against him, and he hears them laughing. The next day he is back to baseline and embarrassed.`,w:`Abrupt, stress-triggered psychosis lasting hours to days with a prompt return to baseline, in a person with a personality disorder. Brief psychotic disorder is defined by its 1-day-to-1-month duration.`},
{id:'po219',t:'interictal',d:['psychmood','micropsy','stimpsy'],q:`Which pattern of change is this?`,x:`P (husband): Her seizures were always short, with staring and lip smacking. But now she has become very religious, fills notebook after notebook, and she can't end a conversation. She has no interest in intimacy.
O: The 45-year-old woman has known temporal lobe epilepsy.`,w:`Religiosity, hypergraphia, viscosity, and low libido between seizures are interictal phenomena. The seizures are brief; these personality changes persist in between.`},
{id:'po220',t:'charlesbonnet',d:['anticholdel','dts','hardsigns'],q:`Which diagnosis fits best?`,x:`O: A 77-year-old woman with macular degeneration sees small children dancing in her kitchen each afternoon. She waves at them, laughs, and says, "I know they aren't real." She has no other psychiatric symptoms, takes no new medicines, and her thinking is clear.`,w:`Visual hallucinations in an older adult with visual impairment, with insight preserved: Charles Bonnet syndrome. Address the vision problem and avoid needless antipsychotics.`},
{id:'po221',t:'cultexp',d:['hardsigns','softsigns','delusidea'],q:`Which explanation fits best?`,x:`O: A 50-year-old woman in a rural town says that the spirit of her late husband stood at the foot of the bed twice and called her name. Her sisters and neighbors say this is common after a death. She sleeps and eats normally, works as usual, and the experiences stop after a few weeks.`,w:`A belief or experience shared and sanctioned in her culture, isolated, with no prodrome and a prompt return to baseline. Ask the family whether this is common in the community, to avoid mislabeling it as psychosis.`},
{id:'po222',t:'deficit',d:['softsigns','psychmood','catatonia'],q:`Which concept is this chart describing?`,x:`O: A 29-year-old woman, six months after her first admission, no longer hears voices. She sits all day, gives short answers, has little facial expression, and no longer starts any activity.
P (husband): She doesn't care about me anymore.
C: Her illness can take away drive and expression, even after the voices fade.`,w:`Diminished expression, avolition, alogia, and asociality that linger after voices and delusions fade are deficit (negative) symptoms. Families may read them as laziness or lack of love; naming them as symptoms relieves conflict and guilt.`},
{id:'po223',t:'openmind',d:['movewith','sidetrack','distanceq'],q:`Which technique is the clinician using?`,x:`P: Do you believe the government put a chip in my arm?
C: It's an unusual story, and I want to hear more before I decide. When did you first notice it?`,w:`Neither agreeing nor arguing keeps rapport and information flowing. Endorse a delusion only if safety demands it.`},
{id:'po224',t:'extentlogic',d:['distanceq','actionsq','openmind'],q:`Which technique is the clinician using?`,x:`P: They've been following me for a year.
C: How far does it go? Who all is involved, and why would they want to do this to you?`,w:`Questions that reveal how far the delusion extends and its internal logic. Questions about how certain the patient is would be distance, and questions about behavior would be actions.`},
{id:'po225',t:'distanceq',d:['extentlogic','scenarioq','openmind'],q:`Which technique is the clinician using?`,x:`P: My boss is poisoning my lunch.
C: How do you know it's him? And how do you account for no one else getting sick?`,w:`Testing conviction: how the patient knows, and how they explain contrary evidence, to distinguish a delusion from an overvalued idea. Ask without challenge and note whether another explanation can be entertained.`},
{id:'po226',t:'actionsq',d:['extentlogic','resistq','scenarioq'],q:`Which technique is the clinician using?`,x:`P: The neighbors are putting something in my food.
C: That sounds frightening. What have you done to protect yourself?
P: I've stopped eating anything cooked at home. I've lost about twelve pounds, and I sleep in my truck.`,w:`Asking about actions revealed behavior caused by the delusion, with self-neglect. This asks what the patient has done, not about belief or imagined scenarios.`},
{id:'po227',t:'scenarioq',d:['actionsq','resistq','distanceq'],q:`Which technique is the clinician using?`,x:`C: If you saw him walking toward you on the street, what would you do?
P: Nothing. They're too powerful. I'd just run.`,w:`A concrete scenario with the feared person gauges intent. Answers range from nothing to pre-emptive attack; this one shows flight rather than aggression, but still ask about weapons and prior actions.`}
);

/* -- bo -- */
/* Beneath the psychosis (bo) — second-case series, Shea Ch. 12. Drafted 2026-11-02. */
V.push(
{id:'bo201',t:'porousego',d:['dereal','broadcast','withdrawal'],q:`Which experience is this?`,x:`C: It sounds like the walls between you and the world feel thin.
P: Yes. When people talk, it feels like their words go straight through me. And my own mind seems to spill out into the room.`,w:`The world seems to invade the self and the self to leak out: a porous ego, the blurred boundary beneath Schneider's made experiences. Derealization alone is a sense that the world is unreal.`},
{id:'bo202',t:'somaticpass',d:['th','madeimpulse','control'],q:`Which first-rank symptom is this?`,x:`P: The signal from the tower sends heat into my legs. It's not my sensation, they do it to me. I can feel exactly when they switch it on.`,w:`A bodily sensation imposed from outside the patient's control: somatic passivity. A tactile hallucination has no outside agent making it happen.`},
{id:'bo203',t:'madefeel',d:['somaticpass','madeimpulse','labile'],q:`Which first-rank symptom is this?`,x:`P: At the wake they switched on laughter in me, though I was grieving. The sadness I feel most days isn't mine either. It's sent.`,w:`Emotions experienced as imposed by an outside force, not the patient's own: made feelings. Made impulses are urges, and labile affect is mood that shifts without such an agent.`},
{id:'bo204',t:'madeimpulse',d:['madefeel','command','control'],q:`Which first-rank symptom is this?`,x:`C: Does something seem to give you urges you'd never normally have?
P: Yes. At the market I suddenly wanted to shove a man in front of a jeepney. It wasn't my wish. Someone put that urge in me, and I stayed away from the road.`,w:`An urge experienced as imposed by an outside force, not an emotion and not a voice commanding him. Ask about what he has done and his ability to resist.`},
{id:'bo205',t:'audthoughts',d:['broadcast','commenting','argvoices'],q:`Which first-rank symptom is this?`,x:`C: Do you ever hear your thoughts spoken out loud, as though a voice were saying them?
P: Yes. I think, "I'm hungry," and a second later I hear it outside my head in a voice, word for word.`,w:`Thoughts heard aloud as a voice or echo: audible thoughts. Thought broadcasting is the feeling that others can hear them, and a commenting voice narrates the patient's actions.`},
{id:'bo206',t:'argvoices',d:['commenting','command','audthoughts'],q:`Which first-rank symptom is this?`,x:`P: Two women talk about me in the walls. One says, "She's lazy." The other says, "She won't last." They never speak to me, only about me.`,w:`Two or more voices discussing the patient in the third person: arguing or discussing voices. A command voice speaks to the patient and tells her what to do.`},
{id:'bo207',t:'funchallu',d:['illusion','ah','argvoices'],q:`Which kind of hallucination is this?`,x:`P: When the bus engine idles outside, a voice is inside the noise saying my name. When the engine stops, the voice stops too. I can hear both the engine and the voice at the same time.`,w:`A real sound triggers a concurrent hallucination, and both are heard at once: a functional hallucination. An illusion would misinterpret the sound itself.`},
{id:'bo208',t:'ambitendency',d:['negativism','echopraxia','stereotypy'],q:`Which catatonic sign is this?`,x:`O: On the ward, a man reaches for the cup the nurse offers, stops, pulls back, reaches again, and pulls back again. At the doorway he steps forward, then back, several times.`,w:`Repeated starting and abandoning of an action: ambitendency. Negativism is opposition to being moved or asked, and echopraxia is imitating the examiner.`},
{id:'bo209',t:'catatonia',d:['mutism','stereotypy','pma'],q:`Which syndrome is this?`,x:`O: A 19-year-old woman, after a few days of fever and headache, has become mute and motionless, with open eyes. She holds a raised arm in the air for minutes when it is placed there, and she resists being turned in bed. Her family says she was normal last week.`,w:`Mutism, immobility, posturing, and negativism together form catatonia, a cluster of motor signs and not a diagnosis. It can occur in schizophrenia, mood disorders, and medical illness such as autoimmune encephalitis; assume she can hear everything.`},
{id:'bo210',t:'tapoddlang',d:['greasing','defusing','namingemo'],q:`Which technique is the clinician using?`,x:`P: The radio has been stealing my breath.
C: When you say the radio is stealing your breath, what do you mean?
P: It talks to me in code, and every time it finishes I feel something leave my chest.`,w:`Asking what an odd or idiosyncratic phrase means opened up psychotic material. It is curiosity about the patient's own words, not a question about a symptom.`},
{id:'bo211',t:'resistq',d:['actionsq','scenarioq','extentlogic'],q:`Which technique is the clinician using?`,x:`P: The voice says I must hurt my brother to save the family.
C: How much do you think you can stop yourself from doing what it wants?
P: In the ward I can fight it. At home, I don't know.`,w:`Asking how much the patient believes they can resist a command voice reveals their own sense of control. A command with a delusional greater good and doubtful resistance raises danger; consider immediate safety measures.`},
{id:'bo212',t:'paleologic',d:['loose','tang','circ'],q:`Which thinking pattern is this?`,x:`P: Soldiers wear green. The grass is green. So the grass is the army, and it is watching me.`,w:`Rosenbaum's paleologic thinking: things are identified because they share an attribute. In loosening of associations there is no connecting logic at all.`},
{id:'bo213',t:'incorporated',d:['paranoidspiral','delref','parataxic'],q:`What is happening?`,x:`O: In the ER, a patient who believes a gang is after him calmly accepts a blanket. Then he stares at the resident, who patiently explains that no one is following him. The patient steps closer, fists clenched, and says, "You're working with them."`,w:`The resident has been drawn into the delusion as a persecutor. Reasonable statements raise agitation, so stop reasoning, stay calm, give space, and step back.`},
{id:'bo214',t:'koro',d:['somatic','nihil','deperson'],q:`Which phenomenon is this?`,x:`P (uncle): In our town we know this. He believes his penis is shrinking into his body and that if it vanishes he will die. He held on to it all night.
O: The 29-year-old man is terrified, but speaks coherently and has no other psychotic symptoms.`,w:`Koro: the culture-specific fear that the genitals are retracting into the body, with the dread of death. It is a recognized idiom in some communities and may not be delusional; ask how others in the community understand it.`},
{id:'bo215',t:'expressedemo',d:['famstab','famblame','famdismiss'],q:`Which family factor is this?`,x:`O: At a home visit, a 31-year-old woman with schizophrenia sits silently. Her stepfather says sarcastically that she is "just playing sick," and her mother hovers and speaks for her. Since discharge she has relapsed twice.`,w:`A critical, hostile, and over-involved family climate (expressed emotion) is linked to relapse in schizophrenia. Meet the family early and offer ways to lower the tension.`},
{id:'bo216',t:'famblame',d:['famdismiss','fammeds','expressedemo'],q:`Which unspoken family fear is the clinician answering?`,x:`P (mother): Everyone at church asks what we did wrong. I wonder if you think the same.
C: I don't. Schizophrenia is a brain disease, and loving parents don't cause it.`,w:`The relative's fear is of being blamed for the illness. It is answered by naming schizophrenia as a brain disease.`},
{id:'bo217',t:'famdismiss',d:['fammeds','famblame','expressedemo'],q:`Which unspoken family fear is the clinician answering?`,x:`P (wife): I've called the clinic three times about his sleep, and nobody asked what I've seen.
C: You live with this every day. We depend on your input, and I want to hear what you've noticed.`,w:`The relative's fear is that their knowledge of the patient will be dismissed. It is answered by affirming their expertise.`},
{id:'bo218',t:'fammeds',d:['famdismiss','famblame','expressedemo'],q:`Which unspoken family fear is the clinician answering?`,x:`P (sister): Last year they switched his medicine. For a month he stopped talking, and he was far worse.
C: Thank you for telling me. I won't change anything before hearing what has worked for him.`,w:`The relative's fear is that a new clinician will change treatment without hearing what has worked, based on a past change that went wrong.`}
);

/* -- pc -- */
/* Personality: core concepts (pc) — Shea Ch. 13. Second-case pass. */
V.push(
{id:'pc201',t:'persdis',d:['statedep','egosyn','labeltheory'],q:'Which concept fits best?',x:`P: My mother says I've been this way since I was a teenager. I get close to people, then I blow up and cut them off. I did it at school, at three jobs, and now with my partner.
O: There is no history of mood episodes, psychosis, or substance use that accounts for the pattern.`,w:`A pervasive, inflexible pattern across settings since adolescence, not explained by a mood or substance state, is a personality disorder. A state diagnosis would fluctuate and have a clear onset.`},
{id:'pc202',t:'defstruct',d:['persartifact','temperament','egodys'],q:'Which concept is this?',x:`C: How do you handle it when someone criticizes you?
P: I go quiet and I leave. Same at home, same at the office, same with my friends. I don't know what else I'd do.`,w:`Few, rigid coping mechanisms used in every situation make up the defensive structure. Artifacts are the consequences of that structure, not the coping itself.`},
{id:'pc203',t:'histdx',d:['persdis','labeltheory','egosyn'],q:'Which principle is this?',x:`C: Before I write anything down, tell me about a time at work or school when this happened, and what you did. Then another time, back when you were in your teens.`,w:`Personality diagnosis rests on the life history, gathered through specific behavioral incidents and persistence since adolescence. The interview behavior alone only guides what to explore.`},
{id:'pc204',t:'egosyn',d:['egodys','persdis','temperament'],q:'Which concept is this?',x:`O: At a family interview, a wife says her husband has driven off two employees and their children's friends with his temper. He shrugs: "I'm fine. They just can't take a straight talker. I only came because she asked."`,w:`The patient is untroubled while others suffer, and the push to come is external. Ego-dystonic patients are the ones who feel the pattern as their own problem.`},
{id:'pc205',t:'egodys',d:['egosyn','defstruct','histdx'],q:'Which concept is this?',x:`O: A 29-year-old woman requests an appointment herself. "I keep ruining relationships by testing people until they leave. I hate that I do it, and I can't stop."`,w:`She is pained by her own pattern and wants help: ego-dystonic. In ego-syntonic behavior the patient sees no problem and is usually sent by others.`},
{id:'pc206',t:'labeltheory',d:['histdx','persartifact','defstruct'],q:'Which concept is this?',x:`O: A resident reads in the chart that a patient was labeled with a personality disorder ten years ago by another service. The patient is now 45 and stable. The attending says, "Don't carry that forward unless you see the criteria met yourself."`,w:`Labels can stick long after a person has outgrown a disorder and can bias staff. Reassess an inherited diagnosis yourself rather than adopting it.`},
{id:'pc207',t:'temperament',d:['defstruct','persartifact','egosyn'],q:'Which concept is this?',x:`C: What were you like as a baby, according to your parents?
P: They say I was colicky and cried a lot, and always shy with strangers. My brothers were easy.`,w:`This asks about inborn behavioral tendencies seen in infancy, which can persist into adulthood. Defensive structure refers to learned coping, not the baby's inborn style.`},
{id:'pc208',t:'persartifact',d:['defstruct','histdx','egodys'],q:'What do these findings reflect?',x:`O: While taking the social history, the resident notes that the patient's friendships each ended in a dispute, two employers fired him, his wife left after he refused to compromise, and his sister no longer speaks to him.`,w:`They are the tracks of rigid defenses crisscrossing the social history. The coping style itself is the defensive structure; the lost relationships and jobs are its artifacts.`}
);

/* -- pd -- */
/* Personality: differential (pd) — Shea Ch. 14. Second-case pass. */
V.push(
{id:'pd201',t:'anxprone',d:['psychprone','poorempathic','bpd'],q:'Which Shea grouping does this suggest?',x:`C: Tell me about your week.
P: I rewrite every report three times, I let my sister pick everything for me, and I skip parties because I'm sure people will judge me. I'm tense all day, but I know how much it upsets my family to see me like this.`,w:`Perfectionism, leaning on others, and fear of rejection are the obsessive-compulsive, dependent, and avoidant disorders: a tense, anxious life with intact empathy. The poorly empathic group leaves a trail of people who felt used or ignored.`},
{id:'pd202',t:'poorempathic',d:['anxprone','psychprone','ocpd'],q:'Which Shea grouping does this suggest?',x:`O: At the family interview, the mother says her son lost three friends and a girlfriend, each saying they felt used. A coworker says he talks over everyone and never notices. The son says, "People just get dramatic."`,w:`A trail of people who felt used, ignored, or manipulated points to the schizoid, antisocial, histrionic, and narcissistic group, which has reduced empathy. The anxiety-prone group, by contrast, can feel for others.`},
{id:'pd203',t:'psychprone',d:['poorempathic','anxprone','szd'],q:'Which Shea grouping does this suggest?',x:`P: When my boyfriend left, for about a day I was sure the neighbors were plotting against me and the TV was talking about me. Then it just went away. I do sometimes believe my thoughts can make things happen.`,w:`Brief stress-triggered paranoid episodes plus magical thinking mark the borderline, schizotypal, and paranoid group, with child-like, regressed defenses. Anxiety-prone patients do not have micropsychotic episodes.`},
{id:'pd204',t:'ocpd',d:['npd','ppd','dpd'],q:'Which disorder does this suggest?',x:`C: Do you drive yourself hard, always feeling you should do a little more?
P: All the time. Even on vacation I make lists. If it's not perfect, I redo it, and I still feel I haven't done enough.`,w:`The never-enough, driven perfectionism is the signal symptom of obsessive-compulsive personality disorder. Narcissistic patients feel superior rather than driven.`},
{id:'pd205',t:'dpd',d:['ocpd','bpd','szd'],q:'Which disorder does this suggest?',x:`O: A 52-year-old man arrives with his daughter, who answers most questions. When asked a decision question, he looks at her first. "I'd rather she decide. I wouldn't know what to do on my own."`,w:`He relies on others to make important decisions, with child-like helplessness. Avoidant patients withdraw from fear of rejection instead of handing decisions to others.`},
{id:'pd206',t:'avpd',d:['szd','dpd','ppd'],q:'Which disorder does this suggest?',x:`C: Most of your life, have you worried people won't like you?
P: Yes. I stay home even though I'm lonely. If a club would let me join, I'd figure it can't be much good.
O: His eyes drop whenever the interviewer smiles.`,w:`He wants closeness but self-esteem is too low to risk it; the club credo is Shea's marker. A schizoid patient would not feel lonely or want acceptance.`},
{id:'pd207',t:'szd',d:['avpd','stpd','ppd'],q:'Which disorder does this suggest?',x:`C: Do you enjoy being around people, or do you much prefer being alone?
P: Alone. My brother brought me because I lost another job, but it doesn't bother me. Nothing much does.
O: Flat, bland, and unhurried throughout.`,w:`Shell-like isolation, blandness, and no wish for acceptance indicate schizoid disorder. No fear of rejection and no psychotic-like experiences separate it from avoidant and schizotypal.`},
{id:'pd208',t:'aspd',d:['hpd','npd','ppd'],q:'Which disorder does this suggest?',x:`C: If a situation warranted it, would you find it pretty easy to lie?
P: Sure. Landlords, bosses, doesn't matter. I know what each person wants to hear. Two jobs ago I had the whole office believing I had a degree.
O: He is calm and charming, then becomes belligerent when asked about his arrest record.`,w:`Easy lying, a chameleon style, job hopping, and legal trouble point to antisocial disorder, in which others' needs are recognized and used. A narcissistic patient is more oblivious than manipulative.`},
{id:'pd209',t:'hpd',d:['npd','aspd','bpd'],q:'Which disorder does this suggest?',x:`P: I'm the life of every party, and I can't stand it when no one's looking at me. One day I'm on top of the world, the next I'm miserable. People tell me I'm "too much," but I don't see what they mean.
O: She describes her ex only as "amazing" and "awful," with no details.`,w:`Center-stage need, impressionistic speech, and rapid mood swings fit histrionic disorder. Borderline patients add emptiness and self-harm, and narcissistic patients feel superior rather than fragile.`},
{id:'pd210',t:'npd',d:['aspd','hpd','bpd'],q:'Which disorder does this suggest?',x:`C: When you get down to it, are most people not quite up to your standards?
P: Frankly, yes. My staff are mediocre. I don't understand why my wife keeps saying she feels invisible.`,w:`Feeling superior and being oblivious to a spouse's needs is narcissistic. An antisocial patient understands others' needs and manipulates them.`},
{id:'pd211',t:'bpd',d:['npd','dpd','hpd'],q:'Which disorder does this suggest?',x:`C: If someone hurts you, do you sometimes feel like hurting yourself, like cutting?
P: Yes. When my friend didn't text back, I was sure she hated me. I loved her, then I wanted to destroy her. Cutting is the only thing that calms me.
O: Fresh and old scars on her forearms.`,w:`Intense dependency, rapid rage, black-and-white views, and self-harm to relieve emotion mark borderline disorder. A dependent patient would not turn hostile or self-mutilate.`},
{id:'pd212',t:'stpd',d:['ppd','szd','avpd'],q:'Which disorder does this suggest?',x:`C: Have you ever felt you had special powers, like ESP?
P: I can tell when something bad will happen to my family. My late grandmother's presence stays with me in the house. I'm not crazy; people just don't understand me.
O: His speech is vague and metaphorical and he is awkward in eye contact.`,w:`Magical thinking and vague, odd speech without frank psychosis fit schizotypal disorder. Paranoid disorder centers on suspicion and distrust rather than special powers.`},
{id:'pd213',t:'ppd',d:['stpd','npd','szd'],q:'Which disorder does this suggest?',x:`C: Do people often tend to be disloyal or dishonest?
P: Constantly. My coworkers whisper, so I record meetings. I have never been wrong in an argument at work, and I won't admit otherwise.`,w:`Scanning for deception and being unable to admit error are paranoid disorder. Schizotypal patients have odd beliefs and speech; paranoid patients guard a sense of inferiority.`},
{id:'pd214',t:'papd',d:['ocpd','ppd','aspd'],q:'Which pattern does this suggest?',x:`O: A nurse says her colleague agrees to every ward directive, then gets to it hours late, "forgets" the forms, and smiles politely. When confronted, he insists he never disobeyed.`,w:`Resisting authority quietly through slowness and indirection is passive-aggressive. Open defiance or lying for gain would suggest antisocial traits instead.`},
{id:'pd215',t:'labelslap',d:['signalsign','histanchor','statedep'],q:'What did the resident do wrong?',x:`O: After one tearful, angry emergency visit, a resident writes "borderline personality disorder" on the chart because the patient "gave him a bad feeling." No history of adolescent patterns was taken.`,w:`He made a personality diagnosis from interview behavior and intuition. Those only guide exploration; the diagnosis requires a history of persistence from adolescence.`},
{id:'pd216',t:'signalsign',d:['signalsx','labelslap','probeq'],q:'What kind of clue is this?',x:`O: Within the first five minutes, the patient makes caustic remarks about the intake nurse, then speaks in a childlike voice and asks the resident to pick her medicine.`,w:`These are behaviors seen in the room, in the first minutes, that suggest regions to explore. A signal symptom is something the patient reports.`},
{id:'pd217',t:'signalsx',d:['signalsign','probeq','epiphen'],q:'What kind of clue is this?',x:`P: I've been in trouble with the law a few times, and I've lost count of the jobs I've quit.`,w:`Run-ins with the law and job hopping are reported history items pointing toward antisocial disorder. A signal sign would be observed during the interview.`},
{id:'pd218',t:'probeq',d:['epiphen','histanchor','signalsx'],q:'What kind of question is this?',x:`C: Most of your life, have you worried people won't like you?`,w:`It is a brief test question for one region; one or two suggestive answers warrant fuller exploration. It does not ask about consequences or time anchoring.`},
{id:'pd219',t:'statedep',d:['histanchor','epiphen','labelslap'],q:'What problem does this history show?',x:`C: When you're feeling your normal self, how often do you spend recklessly and fight with people?
P: Never. That only happens when I've been using meth for a few days, and it stops when I get clean.`,w:`The apparent traits appear only during a drug state and vanish when well, so they are state dependent. Ask about the person when well, over the years.`},
{id:'pd220',t:'epiphen',d:['histanchor','probeq','statedep'],q:'Which technique is the clinician using?',x:`P: I don't trust anyone with my money.
C: What has happened because of that? Has it caused trouble with family or at your job?
P: My brother cut me off, and I got fired for accusing my supervisor.`,w:`Asking what happened as a result confirms a trait is pathologically severe. Historical anchoring would ask whether it was true in adolescence.`},
{id:'pd221',t:'histanchor',d:['epiphen','probeq','statedep'],q:'Which technique is the clinician using?',x:`P: I get very shy around people.
C: Was that typical of you back in junior high and high school?
P: Yes, from about age twelve.`,w:`Tying the trait to adolescence confirms persistence over time. Tapping for epiphenomena would instead ask about its consequences.`}
);

/* -- pm -- */
/* Personality: psychodynamics (pm) — Shea Ch. 15. Second-case pass. */
V.push(
{id:'pm201',t:'partself',d:['merger','splitting','stablesel'],q:'Which developmental stage does this suggest?',x:`O: A 60-year-old man with advancing dementia keeps losing track of where he ends and the room begins, mistakes his reflection for a stranger, and is suspicious of the interviewer for a moment before drifting off again. He misses the nurse's smile.`,w:`Blurred boundaries between self and world, with low-grade paranoia and missed nonverbal cues, mark the part self/part object stage, which adults can regress to in dementia. Merger concerns a need for a specific person, not blurred boundaries.`},
{id:'pm202',t:'merger',d:['transitional','selfobject','holdenv'],q:'Which concept is this?',x:`C: What happens when your mother goes away on a trip?
P: I can't sleep, I feel like I'll fall apart. I call her fifteen times a day. When she doesn't pick up, I scream at her when she's back.
O: At the end of the visit she asks if she can sit in the waiting room "so I'm still near you."`,w:`She needs a specific person near to feel whole and safe, with panic when alone and fury when the person is unavailable; even the clinician or office can become one. A selfobject sustains a fragile self through the other's reflection, not through physical nearness.`},
{id:'pm203',t:'transitional',d:['merger','holdenv','selfobject'],q:'What is the scarf?',x:`C: Tell me about the scarf.
P: My ex gave it to me. When I wear it, I feel like he's still with me. If I lose it I fall apart.`,w:`A concrete thing standing in for an absent person and carrying the comfort of a merger object, like Linus's blanket. The holding environment is the early caregiving relationship, not an item.`},
{id:'pm204',t:'holdenv',d:['transitional','merger','stablesel'],q:'Which concept is this?',x:`O: A trainee reflects that his patient's steady, calm presence in the room helped her feel safe enough to talk. His attending says, "That is some of what Winnicott meant: the safe early setting in which holding makes an infant feel whole."`,w:`It is the caregiving relationship itself, offering holding that lets a self develop. A transitional object is an item that substitutes for the person.`},
{id:'pm205',t:'splitting',d:['grandpole','idealpole','mentaliz'],q:'Which process is this?',x:`P: My mother was perfect, an angel, until last week. Now she's evil, she's never loved me, always against me. And my nurse is the only decent person here, but the doctor is useless, the worst.`,w:`Polarized all-good and all-bad views of others that flip quickly are splitting. Idealizing pole speaks in superlatives about one hero, without the rapid reversals across people.`},
{id:'pm206',t:'selfobject',d:['merger','grandpole','transitional'],q:'What do the sunny days and the class serve as?',x:`P: I only feel solid after I've given a talk and the audience claps. Even a bright sunny morning makes me feel whole and steady. On gray days I feel like nothing.`,w:`Experiences with others, or even a place or a sunny day, that make the self feel whole, consistent, and safe are selfobjects. Merger objects are specific people one must be near.`},
{id:'pm207',t:'grandpole',d:['idealpole','splitting','stablesel'],q:'Which route to safety is this?',x:`O: A surgeon, referred after a complaint, says to the resident, "Let me put this in terms you can follow, young man." When the resident asks a probing question, his face hardens and he says he is leaving.`,w:`Putting you in your place signals safety through one's own greatness, and a challenge threatens collapse. The idealizing pole instead praises an admired figure.`},
{id:'pm208',t:'idealpole',d:['grandpole','splitting','merger'],q:'Which route to safety is this?',x:`P: My pastor is the wisest and most perfect man I've ever met. Everything I am I owe to him. If anyone said a word against him, I would never speak to them again.`,w:`Superlatives about an admired figure, with turning against anyone who is flawed or critical, show the idealizing pole. A grandiose-pole patient boasts about himself.`},
{id:'pm209',t:'stablesel',d:['grandpole','splitting','partself'],q:'Which structure does this suggest?',x:`C: It sounds like you're angry at your father, yet you also said you miss him.
P: Both are true. He was harsh, but he worked hard for us. I can see his side now, even though I still resent him.`,w:`Realistic views of others, empathy, and tolerance of a gentle confrontation suggest a stable self. Splitting would force him to see the father as all good or all bad.`},
{id:'pm210',t:'compshift',d:['genuinecompl','askhelp','framedep'],q:'What is the resident doing?',x:`O: A proud professor is brought in by his dean and bristles at being "evaluated by a trainee." The resident says, "You'll know this field far better than I do. Where would you like to start?" and lets him choose the seat.`,w:`A genuine response or gesture that puts the patient one-up and maintains the mirror transference is a complementary shift. A genuine compliment and asking for help are specific forms of it.`},
{id:'pm211',t:'genuinecompl',d:['askhelp','compshift','framedep'],q:'Which specific technique is the clinician using?',x:`P: I built that firm from nothing.
C: That is a real achievement. Most people couldn't have kept a company going through those years.`,w:`It is a compliment the clinician truly feels, offered to a patient relying on the grandiose pole. Asking for help would invite the patient to explain; a false compliment would break trust.`},
{id:'pm212',t:'askhelp',d:['genuinecompl','compshift','nvleak'],q:'Which specific technique is the clinician using?',x:`O: A defensive 15-year-old says, "My parents lie about everything."
C: I only have their side. I'd really like your help understanding what is going on from where you sit.`,w:`Inviting the patient to help you understand puts him in the expert role, which is person-centered. A compliment praises; asking for help seeks his knowledge.`},
{id:'pm213',t:'nvleak',d:['compshift','framedep','mentaliz'],q:'What did the patient detect?',x:`O: The resident feels irritated by a long monologue and says nothing. His arms cross and his gaze dips. The patient stops mid-sentence: "I've lost you, haven't I?"`,w:`The resident's unintended signals of irritation escaped through his face and posture, and the patient read them instantly. It is not a message sent on purpose.`},
{id:'pm214',t:'mentaliz',d:['stablesel','selfobject','merger'],q:'Which capacity appears to be limited?',x:`C: How do you think your wife felt when you didn't come home that night?
P: She didn't say anything, she just made dinner. I'm not sure what you mean.
O: He can list what each person did but not what any of them thought or needed.`,w:`He cannot imagine others' thoughts and needs, the basis of empathy, and in narcissistic structure others exist to serve the self. Describing what people did is not the same as mentalizing.`},
{id:'pm215',t:'framedep',d:['compshift','genuinecompl','askhelp'],q:'Which technique is the clinician using?',x:`C: You've told me I'm the only one who understands you. I'd like us to plan how often we meet and how you can reach me, and to check how we'll know if you start relying on me too much.`,w:`The clinician raises the dependency early and sets the frame deliberately instead of waiting for a crisis. The complimentary techniques address grandiose-pole patients.`}
);

/* -- ag -- */
/* Anger and disengagement (ag) — Shea Ch. 19. Second-case pass. proc2 skipped (already has 2 cases). */
V.push(
{id:'ag201',t:'mad_confront',d:['collab','mad_opp','mad_pa'],q:'What kind of disengagement point is this?',x:`C: I think the voices may be part of an illness, and a medication could help.
P: (sharply) That's wrong! They're real, and my grandmother is warning me. You have to see that. Why can't you just admit it?`,w:`Spontaneous anger around a real difference in belief, joined to a push to change the clinician's view. Calmly offered, the same difference would be collaborative; oppositional behavior needs no real disagreement.`},
{id:'ag202',t:'collab',d:['mad_confront','mad_pa','content'],q:'What kind of disagreement is this?',x:`O: Smiling, a patient leans forward during the plan discussion.
P: I see it differently, doctor. I'd like to try exercise before pills. Can we revisit it in a month if it's not working?`,w:`A friendly, belief-based difference without anger. Disagreement alone does not make a MAD; anger does.`},
{id:'ag203',t:'mad_opp',d:['mad_pa','mad_confront','pdq'],q:'What kind of disengagement point is this?',x:`O: A teenager brought by his aunt slouches and answers every question with "whatever." Asked about school, he says: "I'm only here to waste your time. Go ahead, write that down."`,w:`Intentional antagonism toward the clinician, not a spontaneous flare over a belief about care. Stay non-defensive and reach for a process response.`},
{id:'ag204',t:'mad_pa',d:['mad_opp','mad_confront','collab'],q:'What kind of disengagement point is this?',x:`C: Would a regular bedtime help?
P: Yes, I'd do that, but the neighbors are loud.
C: Maybe earplugs?
P: Good idea, but they hurt my ears.
C: Could you cut caffeine after noon?
P: I should, but coffee is the only thing that helps me through work. You're being so helpful, really.`,w:`The endless "but" across the whole exchange is an enduring pattern, not a single flare-up. The patient may think they are being cooperative; aim for today's impasse.`},
{id:'ag205',t:'pdq',d:['mad_confront','mad_opp','moveagainst'],q:'What kind of disengagement point is this?',x:`O: A quiet woman in her sixties looks directly at the resident near the end of the first visit.
P: Are you married? Do you have children of your own?`,w:`A question that catches the clinician off guard and may be benign or legitimate; it is defined by its potential to disengage, not by anger. Answer non-defensively and explore the concern behind it.`},
{id:'ag206',t:'moveagainst',d:['gentlelimit','movewith','sidetrack'],q:'Where does this response fall on the Agreement Continuum?',x:`P: I want my medication now, not in an hour.
C: (arms folded, firm voice) Absolutely not. Orders are orders, and I'm not discussing it anymore.`,w:`The limit may be fine, but the posture, tone, and wording strongly oppose the patient and invite a fight. A gentle limit holds the same position while moving toward the patient.`},
{id:'ag207',t:'gentlelimit',d:['moveagainst','movewith','content'],q:'Where does this response fall on the Agreement Continuum?',x:`P: I want my medication now, not in an hour.
C: (softly, seated beside him) I know waiting is hard when you feel awful. The order says the next dose is at four, so I can't give it earlier, but I can bring you water and check in on you at half past three.`,w:`The limit doesn't move, but distance, tone, and empathy all move toward the patient. Moving with would involve no limit at all.`},
{id:'ag208',t:'movewith',d:['gentlelimit','moveagainst','content'],q:'Where does this response fall on the Agreement Continuum?',x:`P: My mother says I'm sick, but I'm fine. I only came to get her off my back.
C: That makes sense. It's frustrating to have someone insist there's something wrong when you don't feel it.`,w:`The clinician joins the reasonable part of the patient's perspective, with no limit being set. That makes it moving with.`},
{id:'ag209',t:'content',d:['proc1','sidetrack','movewith'],q:'Which technique is the clinician using?',x:`P: How long will this interview take?
C: About forty-five minutes, and then I'll go over the plan with you.`,w:`A direct answer to the question on its face. It is natural and sometimes right, but it skips exploring why the patient asked.`},
{id:'ag210',t:'proc1',d:['proc2','proc3','sidetrack'],q:'Which technique is the clinician using?',x:`O: The patient's arms fold and her answers shorten as the interviewer begins asking about her husband.
C: We seemed to be moving along well, and I notice you've gotten much quieter since I asked about your husband.`,w:`It comments on an observable shift in the interview itself. Process 2 would ask about feelings, and process 3 would disclose the clinician's own.`},
{id:'ag211',t:'proc3',d:['proc1','proc2','sidetrack'],q:'Which technique is the clinician using?',x:`P: (raising his voice) You people never listen!
C: I want to be honest. When you shout like that, I feel a little tense, and I want to understand what you need me to hear.`,w:`The clinician names his or her own feeling in the moment, a judicious self-disclosure. Use it sparingly and on purpose; ask about the patient's feelings for process 2.`},
{id:'ag212',t:'sidetrack',d:['content','proc2','movewith'],q:'Which technique is the clinician using?',x:`O: An elated, agitated patient with mania snaps that the questions are "ridiculous" and starts to stand.
C: Earlier you told me about your plan to start a business. Tell me about the first thing you'd do.
P: (sitting, grinning) Well, first I'd get the investors...`,w:`The clinician shifts attention to an emotionally important topic instead of arguing or exploring the challenge. It is especially useful in mania.`},
{id:'ag213',t:'seed_unknown',d:['seed_control','seed_betrayed','seed_failure'],q:'Which core pain (seed) most likely lies beneath the anger?',x:`O: A man brought by his family to the ER yells at the registrar.
P: Where are they taking my brother? Will he be admitted? For how long? Why won't anyone tell me what's going on?`,w:`The questions are all about what is happening and what will happen next, which is fear of the unknown. Information addresses this seed; choices address loss of control.`},
{id:'ag214',t:'seed_control',d:['seed_unknown','seed_betrayed','seed_failure'],q:'Which core pain (seed) most likely lies beneath the anger?',x:`O: A woman refuses to put on the hospital gown.
P: My clothes, my phone, even when I can shower, it's all decided for me. I'm an adult. Who gave you the right?`,w:`The complaints circle around who decides, pointing to loss of external control. Offering real choices addresses it.`},
{id:'ag215',t:'seed_betrayed',d:['seed_failure','seed_unknown','seed_control'],q:'Which core pain (seed) most likely lies beneath the anger?',x:`P: A nurse on my last admission laughed when I told her about my abuse, and my doctor never believed me. Now you want me to open up again? Why would I?`,w:`A specific injury by earlier helpers, with the new clinician standing in for them: feeling wronged or betrayed. Acknowledge the injury without defending the system.`},
{id:'ag216',t:'seed_failure',d:['seed_betrayed','seed_unknown','seed_control'],q:'Which core pain (seed) most likely lies beneath the anger?',x:`O: A daughter snaps at the resident after her mother's overdose.
P: You think I don't know I should have seen it? I stayed up with her every night for a year, and I still missed it. Don't lecture me.`,w:`Beneath the blame lies self-blame: she did everything and feels it wasn't enough. Name the effort and the pain before discussing the plan.`}
);

/* -- cu -- */
/* Culture and identity (cu) — Shea Ch. 20. Second-case pass. prioritize and dynsizing skipped (already 2 cases). */
V.push(
{id:'cu201',t:'intersect',d:['telescoping','prioritize','colorconscious'],q:'Which concept is the attending applying?',x:`O: An older, poor, immigrant woman with a disability tells the resident she waited years before seeing anyone. The attending notes that no single identity explains the delay: being a woman, an immigrant, poor, and disabled each compounded the others in how clinics treated her.`,w:`Overlapping identities and forms of discrimination compound one another, shaping help-seeking. Telescoping prejudice looks at how the net effect shifts with the setting.`},
{id:'cu202',t:'acquired',d:['discovered','dynsizing','cfi'],q:'What is the resident building?',x:`O: Before her first week at a rural clinic serving an indigenous community, a resident reads local histories and asks nurses how elders prefer to be addressed and how families talk about illness.`,w:`Cultural knowledge learned before or outside the interview, from reading, colleagues, and community members. Discovered literacy comes from the patient during the interview.`},
{id:'cu203',t:'discovered',d:['acquired','dynsizing','cfi'],q:'What is the clinician building?',x:`P: In our church we say it's a "heavy spirit," not depression.
C: I haven't heard that phrase. Could you tell me more about what it means for you?`,w:`The patient is the source, in the moment, through respectful curiosity. Acquired literacy is learned outside the interview.`},
{id:'cu204',t:'dissonant',d:['intersect','telescoping','incorpprej'],q:'Which concept best describes this family stress?',x:`P: My daughter speaks English at school and answers us in English at home. We don't understand her friends, and she is embarrassed when we speak our language in front of them. She translates at the doctor's for me now.`,w:`Family members acculturating at different rates, with children translating for parents. The gap lies inside the family, not between family and clinician.`},
{id:'cu205',t:'microagg',d:['cultransf','tradprej','colorblind'],q:'What just happened?',x:`O: The patient, a wheelchair user, mentions her promotion.
C: Wow, that's amazing, you're so inspiring!
O: She stiffens and says, "I just do my job."`,w:`A brief, well-meant, probably unintended slight conveying surprise at her competence, which is still disengaging. It begins on the clinician's side; apologize and repair without defensiveness.`},
{id:'cu206',t:'cultransf',d:['culcounter','microagg','inducedprej'],q:'What is happening in this disconnect?',x:`P: You're a man in a suit with a degree. Men like you in this town never believed my mother when she went to them. I don't see why I should tell you anything.`,w:`The disconnect starts from the patient's side: attitudes about the clinician's group are projected onto him. Cultural countertransference starts from the clinician's side.`},
{id:'cu207',t:'culcounter',d:['cultransf','overident','tradprej'],q:'What is the clinician discovering about himself?',x:`O: After a case review, a psychiatrist realizes he has been more likely to label patients from one religious group as "noncompliant" and to triage them to a lower level of care, without having noticed it before.`,w:`Attitudes about the patient's group projected onto the patient, often invisibly to the clinician, quietly changing diagnosis and triage. Bring it to supervision.`},
{id:'cu208',t:'colorblind',d:['colorconscious','overident','culambiv'],q:'Which cross-cultural pitfall is this?',x:`P: People at work keep asking me to speak for all Asians.
C: I think we are all just people, and I treat everyone the same, so let's not make race a thing here.`,w:`Believing culture is irrelevant erases a real experience, however well-meant. Color consciousness is the opposite error.`},
{id:'cu209',t:'colorconscious',d:['colorblind','overident','tradprej'],q:'Which cross-cultural pitfall is this?',x:`O: A young Black man seeks help for insomnia after his father's death. The clinician keeps returning to racism and police encounters, and the patient says, "That's not why I'm here. I can't sleep since my dad died."`,w:`Assuming all of a minority patient's problems stem from minority status, ignoring his own framing. Color blindness is the reverse error.`},
{id:'cu210',t:'overident',d:['colorconscious','culcounter','colorblind'],q:'Which cross-cultural pitfall is this?',x:`O: A lesbian therapist, who was shunned by her family, treats a young lesbian woman who says her main stress is debt and a bad roommate. The therapist keeps asking about family rejection and "what it's like to hide."`,w:`A clinician who shares a marginalized identity narrows the patient's problems to that identity, driven by her own experience. Check the formulation against what the patient says.`},
{id:'cu211',t:'culambiv',d:['overident','colorblind','tradprej'],q:'Which cross-cultural pitfall is this?',x:`O: A resident tells his supervisor, "I want to help this migrant family. But when they ask to talk it over with their elders before agreeing to the plan, I get annoyed. I know what's best, and they're wasting time."`,w:`A real wish to help, along with a need to control or feel superior; irritation when advice is questioned is the clue. Share decisions explicitly.`},
{id:'cu212',t:'tradprej',d:['inducedprej','incorpprej','culcounter'],q:'Which form of prejudice is this?',x:`O: A nurse admits she assumes that patients who are homeless are lying about their symptoms and spends less time with them, though no homeless person has ever harmed her.`,w:`Stereotypical dislike of a group that is not rooted in having been discriminated against by it. Self-audit how you triage and spend time.`},
{id:'cu213',t:'inducedprej',d:['tradprej','incorpprej','cultransf'],q:'Which form of prejudice is this?',x:`P: After being mocked and passed over for years by the majority group at my old job, I honestly assume every one of them is out to get me, even the kind ones.`,w:`A stereotyped view of a dominant group that grew from real injury, and it is still a stereotype when applied to an individual. Traditional prejudice has no such root.`},
{id:'cu214',t:'incorpprej',d:['inducedprej','tradprej','colorconscious'],q:'Which form of prejudice is this?',x:`P: My whole life I heard that people from our village are dirty and lazy. I've started to believe it about myself. I feel like I don't deserve a good job.`,w:`Long-standing discrimination internalized as negative views of one's own group and self; aimed inward and feeding shame and hopelessness. Induced prejudice points outward at the dominant group.`},
{id:'cu215',t:'telescoping',d:['intersect','incorpprej','dissonant'],q:'Which concept best describes his experience?',x:`P: At the hospital, I'm the senior physician and nobody questions me. When I go to my in-laws' small town as a Muslim man with a beard, I'm watched in every shop. Same me, different place.`,w:`The net discrimination depends on the combination of identities and the setting, dominant in one domain and marginalized in another. Intersectionality is the compounding of identities.`},
{id:'cu216',t:'cfi',d:['existential','fica','discovered'],q:'Which technique is the clinician using?',x:`C: Sometimes people have different ways of understanding their problems. How would you describe yours to a family member?`,w:`A generic, culturally open question from the DSM-5 CFI that needs no prior knowledge of the patient's culture. Discovered literacy is the knowledge that results.`},
{id:'cu217',t:'cueoff',d:['tick','fica','existential'],q:'Which technique is the clinician using?',x:`P: I just prayed my way through that week.
O: Ten minutes later, on another topic:
C: You mentioned praying earlier. Is that something that's been important to you?`,w:`The patient opened the door with her own religious word, and the clinician walks back through it. FICA is a structured sequence from the start.`},
{id:'cu218',t:'existential',d:['cueoff','tick','continuum_sp'],q:'Which technique is the clinician using?',x:`C: After everything you've lost, what has sustained you?`,w:`An indirect question about meaning that does not name religion and welcomes any worldview. It names no religious word the patient used, so it is not cueing off.`},
{id:'cu219',t:'fica',d:['tick','cueoff','continuum_sp'],q:'Which technique is the clinician using?',x:`C: Do you have a faith or spiritual belief that helps you?
P: Yes, I'm a Muslim.
C: How important is that to you in this illness?
P: Very. I pray five times a day.
C: Do you have a community, like a mosque, you're part of?
P: Yes.
C: Is there anything about your faith you'd like us to keep in mind in your care?`,w:`A structured direct history covering Faith, Importance, Community, and Address in care. The tick and continuum questions are single questions.`},
{id:'cu220',t:'tick',d:['continuum_sp','fica','existential'],q:'Which technique is the clinician using?',x:`C: Some people find what drives them in their faith, others in their family, work, or friends. What makes you tick?`,w:`Shea's direct question that normalizes religious and secular sources of meaning before asking. The continuum question instead lays out belief to non-belief.`},
{id:'cu221',t:'continuum_sp',d:['tick','existential','cueoff'],q:'Which technique is the clinician using?',x:`C: Some people believe in a god, some aren't sure, and some don't believe at all. Where do you see yourself on that?`,w:`Laying out the whole range from belief to atheism first makes any answer feel acceptable. The tick question names sources of meaning rather than a range of belief.`}
);

/* -- vp -- */
/* Vantage points (vp) — Shea Ch. 21. Second-case pass. counterproj and responsiveness skipped (already 2 cases). */
V.push(
{id:'vp201',t:'lookat',d:['lookwith','lookself','lookwithin'],q:'Which attentional vantage point is the resident using?',x:`O: While the patient talks about his job, the resident notes that his shirt is buttoned wrong, he has not shaved, he avoids eye contact, and his foot taps faster when his brother is mentioned.`,w:`The patient as objective data, the mental status lens. Looking with would mean imagining the experience from inside his world.`},
{id:'vp202',t:'lookwith',d:['lookat','somatic_emp','lookwithin'],q:'Which attentional vantage point is the resident using?',x:`P: The night my son didn't come home, I sat by the window until the sun came up.
O: The resident pictures the dark street and the phone that never rang.
C: Those hours must have felt endless.`,w:`Empathic listening from inside the patient's world, imagining the experience from her side. Looking at would instead observe her as data.`},
{id:'vp203',t:'lookself',d:['lookwithin','lookat','lookwith'],q:'Which attentional vantage point is the resident using?',x:`O: While interviewing an anxious young woman, the resident realizes he is speaking quickly with a stern face and that he is sitting behind a stack of charts. He lowers his pace, moves the charts, and softens his expression.`,w:`Monitoring how he appears from the patient's chair, then adjusting. Looking within is about his inner feelings, not outward appearance.`},
{id:'vp204',t:'lookwithin',d:['lookself','lookwith','lookat'],q:'Which attentional vantage point is the resident using?',x:`O: Halfway through the interview the resident notices a rising irritation and a wish to end the session, although the patient has been polite. She asks herself what that feeling might say about this patient.`,w:`Her own feeling and fantasy are treated as data about the patient. Looking at oneself is about outward appearance rather than inner experience.`},
{id:'vp205',t:'selfremember',d:['lookself','lookwithin','lookwith'],q:'What is this moment of awareness called?',x:`O: During a long monologue, the resident suddenly thinks, "What am I doing right now, and why? I've been nodding for fifteen minutes without hearing a word." He sits up and chooses to refocus on what the patient is feeling.`,w:`A brief jump in awareness of what you are doing and why, which lets you choose a vantage point on purpose. It is the doorway between vantage points, not one of them.`},
{id:'vp206',t:'somatic_emp',d:['lookwith','lookself','lookat'],q:'Which technique is the clinician using?',x:`O: Back in his office, a resident recalls the patient's rigid upright posture, clenched fists, and set jaw. He sits that way for a minute and feels a surge of tightness and wariness.`,w:`Adopting the patient's posture or mannerisms, usually between sessions, to understand through the body. Looking with relies on imagining through words.`},
{id:'vp207',t:'deletion',d:['generaliz','gentleconf','interpq'],q:'Which technique is the clinician using?',x:`P: People at work just don't respect me.
C: Which people, specifically? And what do they do that feels disrespectful?`,w:`It asks for the specifics the patient's shorthand left out (who "people" are, what "disrespect" is). Testing a generalization targets absolutes like always and never.`},
{id:'vp208',t:'generaliz',d:['deletion','gentleconf','interpq'],q:'Which technique is the clinician using?',x:`P: Nobody ever calls me. I'm always alone.
C: Nobody ever? In the last month, was there anyone who called, even once?
P: Well... my cousin, once, and my aunt.`,w:`It gently questions the absolute words (nobody, ever, always). Recovering a deletion asks who or what was left out.`},
{id:'vp209',t:'intuitive_react',d:['associational','transferential','pilkonis'],q:'What kind of clinician response is this?',x:`O: A new patient sits silently, staring at the resident's hands. Without being able to say why, the resident feels uneasy and tense and wants to keep the door in view. A nurse later says she had the same feeling with him.`,w:`A feeling most clinicians would have in this chair, so it carries information about the patient. Take intuitive fear seriously: it may signal violence or emerging psychosis. Check safety first.`},
{id:'vp210',t:'associational',d:['intuitive_react','transferential','pilkonis'],q:'What kind of clinician response is this?',x:`O: A resident feels a sudden pang of sadness when a patient describes her mother's illness, then recalls that her own mother died last year. She names the link to herself and returns to the patient.`,w:`A feeling tied to the clinician's own history that she recognizes, so she can set it aside. A transferential response is unrecognized.`},
{id:'vp211',t:'transferential',d:['associational','intuitive_react','culcounter'],q:'What kind of clinician response is this?',x:`O: A resident repeatedly runs late for one patient and forgets the patient's follow-up plan. Supervision shows the patient resembles an older sibling who humiliated him, a link he had never noticed.`,w:`An unconscious reaction from the clinician's past, unrecognized until supervision. Reserve countertransference for these; an associational response is recognized.`},
{id:'vp212',t:'pilkonis',d:['associational','intuitive_react','lookwithin'],q:'What is the supervisor pointing out?',x:`O: A resident writes in his notes, "I feel that the patient is being dramatic and wants attention." The supervisor says, "Replace 'feel' with 'think.' Does it still work?"`,w:`If "think" fits, it is a judgment, not a feeling. A true feeling is an emotion word like annoyed, bored, or uneasy.`},
{id:'vp213',t:'motivation',d:['psychmind','cogability','interpq'],q:'Which therapy-facilitative characteristic is this question probing?',x:`C: What made you decide to come in now, rather than a few months ago?
P: The panic attacks started at work last month, and I'm scared I'll lose my job. I want to find out what's behind them.`,w:`"Why now?" probes the pain and urgency, and here the pain is seen as his own. Psychological mindedness would be shown by spontaneously linking feelings to history.`},
{id:'vp214',t:'psychmind',d:['motivation','cogability','neurotic'],q:'Which therapy-facilitative characteristic does this show?',x:`P: I noticed I get irritable every spring, near the anniversary of my brother's death. I never connected it before, but I think my mood and my history are linked. I want to figure it out.`,w:`She links feelings, history, and behavior on her own and wants to understand them. Motivation concerns pain and urgency instead.`},
{id:'vp215',t:'cogability',d:['psychmind','motivation','lookat'],q:'Which therapy-facilitative characteristic is the resident assessing?',x:`O: A resident gives a patient a three-item homework plan and asks him to repeat it back. She also asks what he would do if the plan did not work, checking his memory, concentration, and abstraction.`,w:`It is the capacity to use the therapy, such as concentration, memory, and abstraction. It says nothing about wanting or believing in therapy.`},
{id:'vp216',t:'egostab',d:['egonurt','egochal','interpq'],q:'Which category of therapy is being offered?',x:`O: A woman in acute crisis with an acute psychosis meets weekly with a clinician who helps with housing, sleep, medication education, and a simple daily routine, without exploring her past.`,w:`Calm support, practical help, and education to restore integration, suited to psychosis or crisis. Nurturing and challenging therapies push toward understanding.`},
{id:'vp217',t:'egonurt',d:['egostab','egochal','gentleconf'],q:'Which category of therapy is being offered?',x:`O: A man with an unstable sense of self and a history of abrupt endings gets sessions at the same time each week, clear rules about contact, and a therapist who repeatedly and gently invites him to reflect on what happens when he feels abandoned.`,w:`A firm, consistent frame plus gentle, persistent invitation to understand. Ego-stabilizing therapy focuses on support alone, and ego-challenging therapy confronts.`},
{id:'vp218',t:'egochal',d:['egostab','egonurt','interpq'],q:'Which category of therapy is being offered?',x:`O: A stable, insightful teacher with good therapy-facilitative characteristics begins psychodynamic therapy in which her therapist regularly points out contradictions and asks her to explore patterns across her relationships.`,w:`Confrontation and reflection, suited to a neurotic-level structure with good therapy-facilitative characteristics.`},
{id:'vp219',t:'interpq',d:['gentleconf','deletion','generaliz'],q:'Which technique is the clinician using?',x:`P: I always stay late at work and never complain.
C: I'm wondering if it's hard for you to say no, and the resentment builds up afterward.
P: (pause) Hmm... that might be true. I do get angry on the drive home.`,w:`A gentle link between a feeling and a behavior, offered to test readiness for insight-oriented therapy. Gentle confrontation points out an inconsistency rather than offering a link.`},
{id:'vp220',t:'gentleconf',d:['interpq','deletion','generaliz'],q:'Which technique is the clinician using?',x:`C: I'm a little confused. You told me you never drink, but you also said you went to the bar after work three nights this week. Can you help me understand?`,w:`It tactfully presents a contradiction in what the patient said, to see which defenses emerge. An interpretive question links feelings and behaviors.`},
{id:'vp221',t:'neurotic',d:['borderline_org','psychotic_org','egochal'],q:'Which level of personality organization does this response suggest?',x:`C: You said you're close to your sister, but you haven't spoken in two years. Help me understand that.
P: (sighs) You're right, that doesn't fit. I guess I miss her but I'm too proud to call. I should fix that.`,w:`Uneasy, admits the contradiction, and settles with insight. Borderline patients attack or project, and psychotic organization yields disorganized talk.`},
{id:'vp222',t:'borderline_org',d:['neurotic','psychotic_org','egonurt'],q:'Which level of personality organization does this response suggest?',x:`C: You said you're close to your sister, but you haven't spoken in two years. Help me understand that.
P: (angrily) So now you're against me too? I thought you were different. She's evil, and you're just like everyone else.`,w:`Attack, devaluation, and projection under a mild confrontation, with reality testing intact. A neurotic patient would admit the contradiction.`},
{id:'vp223',t:'psychotic_org',d:['neurotic','borderline_org','egostab'],q:'Which level of personality organization does this response suggest?',x:`C: You said you're close to your sister, but you haven't spoken in two years. Help me understand that.
P: Sister is a station, and years are trains. You have to line up the numbers and the signals, and everyone knows what the signal is for.`,w:`Many words with little meaning, disorganized and tangential under mild confrontation. Stop confronting, support, and look for harder signs of psychosis.`},
{id:'vp224',t:'spontaneity',d:['transparency','animation','lookself'],q:'Which axis of interviewing style is this feedback about?',x:`O: During a session with a suspicious patient, the resident laughs out loud at the patient's story and says, "Wow, that's crazy!" with no planning. The patient goes quiet.`,w:`Unplanned, in-the-moment humor and opinion. Transparency is deliberate disclosure.`},
{id:'vp225',t:'animation',d:['responsiveness','spontaneity','transparency'],q:'Which axis of interviewing style is this feedback about?',x:`O: A supervisor reviewing the video notes that the resident sits nearly motionless throughout, with a flat face and no gestures, even when the patient is animated and tearful.`,w:`This is overall liveliness (here, very low), whether or not it is a reaction to the patient. Responsiveness is specifically reacting to what the patient does.`},
{id:'vp226',t:'transparency',d:['spontaneity','animation','responsiveness'],q:'Which axis of interviewing style is this feedback about?',x:`O: The resident decides ahead of time to tell patients when he is touched or worried: "It makes me sad hearing that." A supervisor says this is a conscious choice about how much of his inner life to reveal.`,w:`Deliberate disclosure of one's own emotions or thoughts. Spontaneity is the unplanned expression of affect and opinion.`}
);

/* ===== Appearance, Attitude and rapport; deeper Insight, Affect, Speech (Shea Ch. 16, v5) ===== */
/* Appearance; Attitude and rapport; new terms for Insight and judgment, Mood and affect, Speech — Shea Ch. 16 (with Appendix III's sample mental status and Ch. 11 on distance from a delusion). Drafted 2026-11-02. */
/* NOTE for integration: the domains 'aa' (Appearance) and 'at' (Attitude and rapport) must be added to DOMAINS in data.js (g:'mse') before this file loads. */

const Q_AA=`Which appearance finding is this?`;
const Q_AA_DOC=`What do the last two sentences of this chart line document?`;
const Q_AT=`Which attitude toward the interviewer is this?`;
const Q_AT_IMP=`Which way of observing the patient is the resident using?`;
const Q_IN=`Which insight or judgment finding is this?`;
const Q_AF=`Which mood or affect finding is this?`;
const Q_AF_CHART=`How should mood be charted here?`;
const Q_SP=`Which speech finding is this?`;

/* ---------- Appearance ---------- */
T('aa_hygiene','Poor hygiene and self-care','aa',[16],
 `Visible neglect of self-care: soiled or tattered clothes, dirt under the nails, unwashed hair, body odor. Shea suggests opening the appearance section with clothes and self-care.`,
 `Write the evidence (dirt-laden nails, strong odor), not just a label like "disheveled." Avolition is a history of not starting tasks; poor hygiene is what you see in the room today.`,
 `Appearance: shirt and trousers visibly soiled; dirt under fingernails; strong body odor, no odor of alcohol.`);
T('aa_attire','Odd or bizarre attire and adornment','aa',[16],
 `Clothing or accessories worn in a strikingly unusual way, such as a wig on backwards or several watches on one wrist.`,
 `Describe exactly what is worn and how; "odd" or "inappropriate" alone gives the reader nothing to picture. If the adornment serves a belief, record the belief under thought content.`,
 `Appearance: wearing a bath towel tied as a cape, two neckties over a housedress, and one rubber slipper; clothes clean.`);
T('aa_decor','Decorative striking feature','aa',[16],
 `A chosen, striking feature of appearance, such as a tattoo, noted in the mental status.`,
 `Chosen by the patient, unlike scars and deformities. Describe it neutrally (where it is, what it shows) without judging it.`,
 `Appearance: tattoo of a tiger on the back of the right hand and a name on the left forearm; neatly dressed.`);
T('aa_scars','Scars and deformities','aa',[16],
 `Unwanted striking features, such as scars, burns, or deformities, noted in the appearance section.`,
 `Not chosen, unlike tattoos. Record location and pattern; scars that look self-inflicted call for questions about self-harm, recorded under thought content.`,
 `Appearance: multiple thin, parallel, healed linear scars on the inner left forearm; one recent scab.`);
T('aa_older','Looks older than stated age','aa',[16],
 `The patient appears noticeably older than his or her chronological age.`,
 `Say what makes the patient look older (gray hair, missing teeth, deep lines, stooped posture). Looking younger is the opposite finding.`,
 `Appearance: 41-year-old man who looks older than his stated age; gaunt, mostly gray, several missing front teeth.`);
T('aa_younger','Looks younger than stated age','aa',[16],
 `The patient appears noticeably younger than his or her chronological age.`,
 `Judge it from appearance (face, build), not from behavior. A child-like, subservient stance toward the interviewer is an attitude, charted separately.`,
 `Appearance: 32-year-old man who looks younger than his stated age; slight build, smooth-faced.`);
T('aa_eye','Limited eye contact','aa',[16,8],
 `Reduced or avoided gaze toward the interviewer. Shea notes that eye contact is usually mentioned in the appearance section.`,
 `Describe it and when it changes (looks away only while describing the assault). In a Filipino patient, a lowered gaze with open answers and po/opo may be respect (paggalang), not avoidance.`,
 `Appearance: eye contact limited; looked at her hands while discussing her son's death, otherwise met the interviewer's gaze.`);
T('aa_rti','Apparent response to hallucinations','aa',[16],
 `Observed behavior suggesting the patient is reacting to something unseen or unheard, such as eyes tracking across empty space or shaking the head as if shutting out an unwanted voice.`,
 `It is a sign you see, charted under appearance and behavior even if the patient denies voices. What the patient reports goes under perception. Hyper-alert patients react to real sounds and movements.`,
 `Behavior: intermittently turned toward an empty corner and shook her head as if shutting out a voice; denied hallucinations when asked.`);
T('aa_displace','Displacement activity','aa',[16],
 `Small repeated actions that discharge tension, such as picking at a cup or chain smoking.`,
 `Tied to tension, so it often rises with stressful topics. A mannerism is a stylized flourish on a purposeful act; a stereotypy repeats the same purposeless pattern whatever the topic.`,
 `Behavior: tore a paper cup into strips while discussing her husband; hands still when the topic changed.`);
T('aa_tremulous','Tremulous','aa',[16],
 `Visible shaking, such as trembling hands or a quivering voice, one of the motor descriptors Shea lists.`,
 `Shaking of a body part, not whole-body restlessness: restless or agitated patients move about, while tremulous ones may sit still and shake.`,
 `Behavior: hands visibly tremulous when holding a cup; otherwise sat still; no odor of alcohol.`);
T('aa_pertneg','Pertinent negative','aa',[16],
 `A documented absence of a sign the reader would expect you to check, such as "did not smell of alcohol" or "no evidence of active response to hallucinations."`,
 `It shows what you looked for and makes some diagnoses (intoxication, delirium) less likely. A global phrase like "within normal limits" doesn't show that anything specific was checked.`,
 `Appearance: soiled clothing, matted hair. No odor of alcohol. No evidence of active response to hallucinations.`);
T('aa_hyperalert','Hyper-alert (overly aware of surroundings)','aa',[16],
 `A heightened alertness in which the patient is overly aware of and reactive to the environment.`,
 `Shea charts it with level of consciousness. The level is stable but excessive, unlike fluctuating consciousness; with intact orientation and attention it points away from delirium and toward mania, psychosis, drugs, or situational stress.`,
 `Sensorium: alert, at times hyper-alert, glancing at the door at every sound; oriented x3; six digits forward.`);

/* ---------- Attitude and rapport ---------- */
T('at_coop','Cooperative','at',[16],
 `Willing participation: answers questions, accepts the interviewer's requests, and engages with the process.`,
 `Willingness, not just politeness. A patient who says "opo" to everything but reveals nothing may be showing pakikisama or guardedness rather than real engagement.`,
 `Attitude: cooperative and engaged; answered all questions fully and completed cognitive testing.`);
T('at_uncoop','Uncooperative','at',[16],
 `Declining the interviewer's requests or parts of the interview, such as refusing to sit, answer certain questions, or do testing.`,
 `An understandable refusal or stance. Catatonic negativism is apparently motiveless opposition to every instruction; a guarded patient still takes part but reveals little.`,
 `Attitude: mildly uncooperative; refused to sit and declined cognitive testing.`);
T('at_guarded','Guarded','at',[16],
 `Taking part while revealing as little as possible: terse, clipped answers and deflected personal questions.`,
 `Guarded patients answer but say little, often only on certain topics. Suspicious patients go further and question your motives; poverty of speech is too few words on every topic without the sense of withholding.`,
 `Attitude: guarded; clipped one-word answers about home and family, more open about work.`);
T('at_suspicious','Suspicious','at',[16],
 `Mistrust of the interviewer's motives: watching closely, asking why questions are asked or what is being written.`,
 `The finding is the mistrust shown toward you. A fixed false belief that others are persecuting the patient is charted under thought content.`,
 `Attitude: suspicious; repeatedly asked what was being written and who would read it.`);
T('at_hostile','Hostile','at',[16],
 `An antagonistic, angry stance toward the interviewer: sarcasm, curt retorts, contempt.`,
 `Antagonism without a threat of harm. Threatening adds a stated or implied intent to harm, which shifts your priority to safety.`,
 `Attitude: mildly hostile; sarcastic and curt, answered "Why do you care?" to several questions; no threats.`);
T('at_threat','Threatening','at',[16],
 `A stated or implied intent to harm the interviewer or others, in words or posture.`,
 `More than anger: there is a threat. Record the exact words and act on safety first. Hostility alone carries no threat.`,
 `Attitude: threatening; stood between interviewer and door and said, "Sign those papers and you won't get home tonight."`);
T('at_flirt','Flirtatious (seductive)','at',[16],
 `Romantic or sexualized behavior toward the interviewer: comments on looks, personal questions, suggestive remarks, touching.`,
 `Directed at the interviewer, so it is an attitude rather than a mood. Describe the behavior specifically and keep boundaries clear; ordinary friendliness is warm without the romantic turn.`,
 `Attitude: flirtatious; commented repeatedly on interviewer's looks and asked whether she was single.`);
T('at_cool','Cool and disinterested','at',[16],
 `A detached, uninvested stance toward the interview, which may thaw as engagement grows (as in Shea's sample record).`,
 `Distance, not antagonism (hostile) and not withholding (guarded). Chart the course over the interview so the next clinician knows how engagement went.`,
 `Attitude: cool and somewhat disinterested at first; engaged and cooperative by the close of the interview.`);
T('at_childlike','Child-like subservience','at',[16],
 `A momentary helpless, child-like stance toward an authority figure, shown by a child-like grin and helpless tone (Shea's impact status example).`,
 `About the stance toward authority, not how old the patient looks. Noticed in the moment, it can be explored with the patient, as Shea did.`,
 `Attitude: adult and engaged, but shifted to a child-like grin and helpless tone when discussing her supervisor.`);
T('at_impact','Impact status','at',[16,8],
 `Shea's quick, subjective take on the patient's immediate behavior and affect at a single moment, including the effect of the clinician's own behavior on the patient.`,
 `Moment to moment, and it includes you. The mental status is the composite snapshot of the whole interview; looking with the patient is empathic, not observational.`,
 `In the moment: answers shortened and jaw tightened right after I asked about his wife; ease back and check in.`);

/* ---------- Insight and judgment (new terms) ---------- */
T('in_partial','Partial insight','in',[16],
 `Some recognition that something is wrong and some acceptance of help, without understanding the illness as a whole (Shea's sample record: "demonstrated some insight").`,
 `Accepts part of the picture (stress, poor sleep) while explaining the rest by outside causes. Absent insight denies any problem; intellectual insight names the whole illness but doesn't act on it.`,
 `Insight: partial; accepts help for sleep, attributes the voices to the neighbors.`);
T('in_motivated','Motivated for care','in',[16],
 `An expressed and shown wish for help: asks about treatment, agrees to follow-up, joins in planning. Shea lists motivation alongside insight in this section.`,
 `Motivation is what the patient wants; insight is what the patient understands. Chart both, since a patient can be motivated with only partial insight. True insight needs changed behavior over time.`,
 `Insight: some; motivated for care, asked about therapy and agreed to return in one week.`);
T('in_refuses','Refuses help and treatment','in',[16],
 `A stated unwillingness to accept help at this time, such as flatly refusing any medication.`,
 `Record the refusal, in the patient's words, alongside insight. A patient may know she has been ill and still refuse; absent insight is not recognizing illness at all.`,
 `Insight: very poor, as is judgment; does not want help at this time and flatly refuses any medication.`);
T('in_nodist','No distance from a delusion','in',[16,11],
 `Complete conviction in a delusional belief, with no room to consider another explanation (Shea's "distance," or insight, from a delusion).`,
 `Record the patient's exact words ("I know for a fact..."); an appraisal like "very delusional" belongs in the formulation. Some distance means the patient can at least wonder.`,
 `TC: asked whether his mind might be playing tricks, said, "No. I know for a fact they put a chip in my tooth."`);
T('in_somedist','Some distance from a delusion','in',[16,11],
 `Partial doubt about a delusional belief: the patient can consider that it might not be true.`,
 `The belief is still present but held less tightly, and distance often grows as the psychosis improves. No distance leaves no room for doubt at all.`,
 `TC: still thinks the neighbors are watching; said, "Maybe my mind is playing tricks. I'm not sure anymore."`);
T('in_halluins','Insight into hallucinations','in',[16],
 `Hearing voices (or other hallucinations) while recognizing that no real entity is producing them: hearing voices but not delusional.`,
 `If the patient comes to believe a real being is speaking, and for instance planning her death, a delusion has developed as well as the hallucination.`,
 `Perception: hears a male voice calling her worthless; recognizes it as "my illness talking," not a real person.`);

/* ---------- Mood and affect (new terms) ---------- */
T('af_broad','Broad (full-range) affect','af',[16],
 `Normal affect: a full range of facial and vocal expression that shifts in step with the topic.`,
 `The baseline. Restricted affect shows some decrease in facial animation; labile affect shifts abruptly and out of step with the conversation.`,
 `Affect: broad, full range; tearful about his boat, laughed warmly about his grandson.`);
T('af_buoyant','Buoyant affect','af',[16],
 `An upbeat, lively, lifted expression that stays bright across topics.`,
 `Elevated but still connected to the conversation. Silly affect is giggly and childish; inappropriate affect clashes with specific content (laughing at a tragedy).`,
 `Affect: buoyant; animated, smiling broadly across most topics.`);
T('af_angry','Angry affect','af',[16],
 `Visible anger in face and voice: tight jaw, glare, sharp or rising tone.`,
 `Affect is the feeling you see. Hostility is the stance taken toward you: a patient can show angry affect about a landlord while staying cooperative with you.`,
 `Affect: angry when discussing landlord (jaw clenched, voice rising); cooperative with interviewer.`);
T('af_fright','Frightened affect','af',[16],
 `Visible fear: wide eyes, tense posture, shaky voice, glancing toward a perceived danger.`,
 `Fear on the face. Suspiciousness is mistrust; the two often occur together, as with Shea's patient who was suspicious and genuinely frightened when talking about a nurse.`,
 `Affect: frightened when discussing the men she believes are outside; eyes wide, voice shaky.`);
T('af_silly','Silly affect','af',[16],
 `A giggly, childish, playful expression out of keeping with the seriousness of the setting.`,
 `A childish quality across the interview. Inappropriate affect is defined by a clash with particular content; buoyant affect is elevated but not childish.`,
 `Affect: silly; giggled, made faces, and called interviewer by nicknames throughout.`);
T('af_discord','Reported mood at odds with observed affect','af',[16],
 `The mood the patient reports differs from the affect the clinician sees, such as saying "I'm fine" while crying.`,
 `Chart both as found: quote the mood, describe the affect. Don't overwrite the stated mood with your impression; possible denial is discussed in the formulation.`,
 `Mood: "Okay lang, Doc." Affect: sad and tearful through most of the interview.`);
T('af_moodref','Mood not reported (patient declined)','af',[16],
 `When a patient will not describe his or her mood, the mental status can only say that the patient declined; affect can always be described.`,
 `Mood is a self-reported symptom; affect is an observed sign. Never fill in mood from your impression in the mental status. Alexithymia is being unable to name feelings, not unwilling.`,
 `Mood: declined to describe. Affect: tense and guarded.`);

/* ---------- Speech (new terms) ---------- */
T('sp_slow','Slowed rate of speech','sp',[16],
 `Speech slower than normal throughout. Shea notes it in depressed states and in somnolent deliria.`,
 `The words themselves come slowly. Increased latency is a long pause before an answer that then comes at a normal pace; poverty of speech is too few words.`,
 `Speech: slowed rate, normal volume; coherent.`);
T('sp_rapid','Rapid rate of speech','sp',[16],
 `Faster than normal speech, seen in manic states, agitated psychoses, and drug-related euphorias.`,
 `Shea separates rate from pressure: rapid speech keeps its normal pauses and can be interrupted. Pressured speech loses the pauses ("speech sans punctuation"), even at a normal rate.`,
 `Speech: rapid rate, normal volume, not pressured; easily interrupted.`);
T('sp_loud','Increased volume','sp',[16],
 `Speech louder than normal, at baseline or in loud outbursts.`,
 `Volume is how loud; pressure is the loss of pauses. Chart both the baseline and any outbursts, as in Shea's example.`,
 `Speech: baseline volume slightly loud, with occasional loud outbursts; normal rate.`);
T('sp_soft','Decreased volume','sp',[16],
 `Speech quieter than normal, at times barely audible.`,
 `Volume, not amount: a soft-spoken patient may still say plenty. Poverty of speech is too few words; the soft voice of hiya lifts as rapport grows.`,
 `Speech: soft, at times barely audible; normal rate; spontaneous and relevant.`);
T('sp_wnl','Rate and volume within normal limits','sp',[16],
 `Speech of ordinary speed and loudness, stated explicitly in the mental status.`,
 `Write it out so the reader knows rate and volume were checked; leaving speech unmentioned tells the reader nothing.`,
 `Speech: rate and volume within normal limits; not pressured.`);

V.push(
/* Appearance */
{id:'aa01',t:'aa_hygiene',d:['avolition','aa_attire','aa_older'],q:Q_AA,x:`O: Mang Ruben, 58, is brought in by the barangay health worker. His shirt is stiff with dirt, his fingernails are black underneath, and there is a strong body odor. He does not smell of alcohol.`,
 w:`Visible neglect of self-care, charted with specifics (nails, odor) and a pertinent negative. Avolition is the history of not starting tasks; this is the evidence in the room.`},
{id:'aa02',t:'aa_hygiene',d:['aa_attire','aa_younger','pmr'],q:Q_AA,x:`O: A 24-year-old college student has worn the same gray sweatshirt to her last three visits. It is stained and smells, and her hair is matted. The outfit itself is ordinary.`,
 w:`The clothes are ordinary in kind but neglected in care. Odd attire is about what is worn and how; poor hygiene is about how clean the clothes and the patient are.`},
{id:'aa03',t:'aa_attire',d:['aa_hygiene','aa_decor','mannerism'],q:Q_AA,x:`O: A 35-year-old man arrives in a long-sleeved polo buttoned to the neck, two neckties, swimming goggles pushed up on his forehead, and a bath towel tied around his shoulders like a cape. Everything he wears is clean.`,
 w:`A strikingly unusual combination of clothing and accessories, charted item by item rather than as "inappropriate." The clothes are clean, so this isn't a hygiene finding.`},
{id:'aa04',t:'aa_attire',d:['aa_decor','aa_rti','aa_hygiene'],q:Q_AA,x:`O: A 47-year-old woman wears a plastic basin upside down on her head, padded with folded newspaper, over neatly combed hair.
C: Can you tell me about the basin?
P: So they can't read what I'm thinking.`,
 w:`In appearance, chart exactly what she wears. The belief behind it ("so they can't read what I'm thinking") goes under thought content, not appearance.`},
{id:'aa05',t:'aa_decor',d:['aa_scars','aa_attire','aa_hygiene'],q:Q_AA,x:`O: A 30-year-old jeepney driver has a large tattoo of a tiger on the back of his right hand and his daughter's name in script on his left forearm. He is neatly dressed.`,
 w:`A chosen, decorative striking feature, noted neutrally. Scars and deformities are unwanted features.`},
{id:'aa06',t:'aa_decor',d:['aa_attire','aa_scars','aa_younger'],q:Q_AA,x:`O: A 19-year-old woman has bright blue dyed hair and a small star tattooed below her left ear. She is clean and dressed in jeans and a T-shirt.`,
 w:`Chosen striking features are noted plainly, without judgment. In a clean, conventionally dressed patient, a fashion choice isn't bizarre attire.`},
{id:'aa07',t:'aa_scars',d:['aa_decor','aa_displace','aa_tremulous'],q:Q_AA,x:`O: As she pushes up her sleeves, the interviewer sees rows of thin, parallel, healed scars on the inside of her left forearm and one recent scab.`,
 w:`An unwanted striking feature, recorded by location and pattern. Scars that look self-inflicted lead to questions about self-harm, recorded under thought content.`},
{id:'aa08',t:'aa_scars',d:['aa_decor','aa_older','aa_tremulous'],q:Q_AA,x:`O: A 50-year-old man has an old burn scar over the left side of his neck and a stiff, shortened left hand from a work accident at the shipyard.`,
 w:`Scars and deformities are recorded in appearance without interpretation. They are unchosen, unlike tattoos.`},
{id:'aa09',t:'aa_older',d:['aa_younger','aa_hygiene','pmr'],q:Q_AA,x:`O: The chart says 41 years old. The patient is gaunt, with deep facial lines, mostly gray hair, and several missing front teeth. Strangers in the waiting area call him "Lolo."`,
 w:`He looks well beyond 41. Chart what makes him look older, so the next clinician can picture him.`},
{id:'aa10',t:'aa_older',d:['aa_younger','aa_scars','aa_hygiene'],q:Q_AA,x:`O: A 33-year-old woman with years of methamphetamine use looks closer to fifty: thin, sunken cheeks, dry, lined skin, and several missing teeth. Her clothes are clean.`,
 w:`Appearing noticeably older than stated age. Her clothes are clean, so the striking finding is apparent age rather than self-care.`},
{id:'aa11',t:'aa_younger',d:['aa_older','at_childlike','aa_attire'],q:Q_AA,x:`O: A 32-year-old man has a slight build, a smooth, boyish face, and a school backpack. The guard at the gate asked whether he needed a parent with him. He talks with the resident as an adult.`,
 w:`He looks younger than his stated age. Child-like subservience is an attitude toward the interviewer; he relates as an adult, so only his appearance is young.`},
{id:'aa12',t:'aa_younger',d:['aa_older','aa_decor','aa_attire'],q:Q_AA,x:`O: A 45-year-old teacher looks to be in her late twenties: small, smooth-skinned, with no gray hair. She is plainly dressed and well groomed.`,
 w:`Apparent age well below chronological age. Note it either way; a mismatch in either direction is part of a vivid appearance section.`},
{id:'aa13',t:'aa_eye',d:['aa_rti','aa_hyperalert','blunted'],q:Q_AA,x:`O: A 27-year-old call center agent answers fully, but looks at the floor or out the window for most of the interview, especially while describing being fired. His face is expressive.`,
 w:`Reduced gaze toward the interviewer, worth charting with when it worsens. His face is expressive, so this isn't blunted affect, and he isn't tracking anything unseen.`},
{id:'aa14',t:'aa_eye',d:['aa_rti','flat','pmr'],q:Q_AA,x:`O: A 60-year-old woman meets the interviewer's eyes at greeting. While describing her son's death she looks down at her hands and does not look up again for ten minutes. Her face shows grief throughout.`,
 w:`Eye contact limited, and limited around a specific topic. Charting when it changed is more useful than "poor eye contact."`},
{id:'aa15',t:'aa_rti',d:['aa_hyperalert','block','mannerism'],q:Q_AA,x:`O: Mid-answer, a 22-year-old man turns his eyes toward the empty corner, mutters "Not now," then returns to the conversation.
C: Who were you talking to just now?
P: No one.`,
 w:`Behavior that looks like a response to an unseen voice. Chart what you saw even when he denies voices; thought blocking is a stop mid-sentence without the turning and muttering.`},
{id:'aa16',t:'aa_rti',d:['aa_eye','stereotypy','aa_hyperalert'],q:Q_AA,x:`O: A 40-year-old woman's eyes repeatedly follow something across the empty ceiling. Twice she shakes her head sharply and covers one ear.`,
 w:`Tracking eye movements and head-shaking as if shutting out a voice are the signs Shea names. A hyper-alert patient scans and reacts to real things in the room.`},
{id:'aa17',t:'aa_displace',d:['stereotypy','mannerism','pma'],q:Q_AA,x:`O: While talking about her separation, Grace tears a paper cup into strips and rolls each strip into a tiny ball. When the topic turns to her work, her hands go still.`,
 w:`Small, tension-linked actions that rise with a stressful topic. A stereotypy repeats regardless of topic; psychomotor agitation is whole-body restlessness.`},
{id:'aa18',t:'aa_displace',d:['pma','compulsion','stereotypy'],q:Q_AA,x:`O: At the outdoor smoking area beside the OPD, a 50-year-old man lights one cigarette from the end of another while discussing his debts, clicking his lighter between puffs.`,
 w:`Chain smoking and fiddling are the displacement activities Shea suggests charting. A compulsion is done to relieve an obsession, with a sense of being driven to it.`},
{id:'aa19',t:'aa_tremulous',d:['pma','akathisia','aa_displace'],q:Q_AA,x:`O: A 52-year-old woman sits very still, but her hands tremble visibly when she lifts a cup of water, and her voice quivers. She doesn't pace, fidget, or shift her legs.`,
 w:`Visible shaking in an otherwise still body. Agitation and akathisia are about restless movement.`},
{id:'aa20',t:'aa_tremulous',d:['pma','td','aa_displace'],q:Q_AA,x:`O: At his first OPD visit, a 20-year-old student's hands shake as he signs the consent form, and his knees tremble under the table.
P: Sorry, Doc. I'm just really nervous.`,
 w:`Visible trembling, charted as a motor descriptor. He isn't moving about (agitation) or fiddling with an object (displacement).`},
{id:'aa21',t:'aa_pertneg',d:['aa_hygiene','aa_rti','aa_hyperalert'],q:Q_AA_DOC,x:`O: A resident charts: "Appearance: clothes soiled, hair matted. No odor of alcohol. No evidence of active response to hallucinations."`,
 w:`Signs that were looked for and found absent. Recording them shows the search and makes intoxication and a hallucinating delirium less likely.`},
{id:'aa22',t:'aa_pertneg',d:['aa_tremulous','aa_hygiene','aa_rti'],q:Q_AA_DOC,x:`O: For a man brought in after a week of heavy drinking, the resident writes: "Appearance: casually dressed, good hygiene. Hands steady, without tremor. No odor of alcohol on interview."`,
 w:`The last two sentences report the absence of signs a reader would expect her to check in this man. Pertinent negatives show what was ruled out, which "within normal limits" does not.`},
{id:'aa23',t:'aa_hyperalert',d:['clouding','distract','aa_rti'],q:Q_AA,x:`O: A 26-year-old woman glances at the door at every footstep and startles when a cart rolls by. She stays alert the whole hour, is fully oriented, repeats six digits forward, and completes each task.`,
 w:`Alertness is stable but excessive, aimed at real events. Clouding is a reduced or fluctuating level; distractibility would derail her tasks, which she completes.`},
{id:'aa24',t:'aa_hyperalert',d:['aa_rti','clouding','at_suspicious'],q:Q_AA,x:`O: Two days after a robbery at his sari-sari store, a 38-year-old man sits facing the door, eyes moving to every sound in the hallway. He is fully oriented and follows the interview well, and he is open and friendly with the resident.`,
 w:`Heightened awareness of the real environment. He is open with the resident, so this isn't suspiciousness, and he isn't tracking things that aren't there.`},

/* Attitude and rapport */
{id:'at01',t:'at_coop',d:['pakikisama','at_cool','at_flirt'],q:Q_AT,x:`C: I'd like to ask about your drinking too, if that's okay.
P: Sure, Doc. I'll be honest, it's gotten worse since I lost the job. Ask me anything.
O: He answers each question fully and agrees to the memory testing.`,
 w:`Willing, forthcoming participation. Pakikisama-style agreement says yes but reveals little; he volunteers details.`},
{id:'at02',t:'at_coop',d:['at_childlike','at_guarded','at_uncoop'],q:Q_AT,x:`O: A 70-year-old woman with poor hearing leans in, asks for questions to be repeated, and works carefully through the clock drawing.
P: Let me try again, Doc. I want to get it right.`,
 w:`Engaged and willing despite a hurdle. Child-like subservience is a helpless stance, not careful effort.`},
{id:'at03',t:'at_uncoop',d:['negativism','at_hostile','at_guarded'],q:Q_AT,x:`O: A 34-year-old man brought by the police gives his name and address but refuses to sit.
P: I'm not doing your tests. I'm only here because they made me come.`,
 w:`He declines parts of the interview, and gives a reason. Catatonic negativism is apparently motiveless opposition to every instruction, including attempts to move the patient.`},
{id:'at04',t:'at_uncoop',d:['at_guarded','at_suspicious','at_hostile'],q:Q_AT,x:`P: I'll talk about my sleep, but I'm not answering anything about my family. And I'm not signing anything.
O: She keeps her arms crossed and declines a blood pressure check. Her tone is flat, not angry.`,
 w:`An open refusal of parts of the interview. A guarded patient answers but says little; she simply declines.`},
{id:'at05',t:'at_guarded',d:['povspeech','at_suspicious','galang'],q:Q_AT,x:`C: Who's at home with you?
P: Family.
C: Tell me about them.
P: They're fine.
O: He watches the interviewer steadily and gives the same short answers on every personal topic, but talks easily about basketball.`,
 w:`Withholding on personal topics while talking freely elsewhere. Poverty of speech is sparse on every topic; he doesn't question your motives, which would be suspicious.`},
{id:'at06',t:'at_guarded',d:['at_uncoop','at_suspicious','hiya'],q:Q_AT,x:`O: An hour into the interview, a 26-year-old woman still gives clipped, careful answers. Asked about the voices her mother reported, she says, "I'd rather not say," and changes the subject. She watches the interviewer closely but doesn't ask why the questions are being asked.`,
 w:`She takes part but reveals as little as possible. Hiya eases with time and warmth; she is still withholding an hour in, and she isn't questioning motives (suspicious).`},
{id:'at07',t:'at_suspicious',d:['at_guarded','persec','at_hostile'],q:Q_AT,x:`O: The resident writes a note.
P: What are you writing? Who's going to read that? Are you recording this?
O: He keeps his eyes on the pen and asks twice why she needs his address.`,
 w:`Mistrust of the interviewer's motives. If he held a fixed belief that the hospital was plotting against him, that would be a persecutory delusion under thought content.`},
{id:'at08',t:'at_suspicious',d:['at_hostile','at_uncoop','persec'],q:Q_AT,x:`O: Lola Nena, 74, stops mid-answer when asked about her pension.
P: Why do you want to know about my money? Did my son send you?
O: She continues only after the resident explains who will see the chart.`,
 w:`Wary questioning of the interviewer's motives, which settles with explanation. She isn't antagonistic (hostile), and she keeps taking part.`},
{id:'at09',t:'at_hostile',d:['at_threat','at_uncoop','at_suspicious'],q:Q_AT,x:`P: Oh great, another doctor who's going to ask me how I feel. What do you think, genius?
O: He rolls his eyes and answers curtly, but stays seated and makes no threats.`,
 w:`Sarcasm and contempt toward the interviewer, without threat. Threatening adds a stated or implied intent to harm.`},
{id:'at10',t:'at_hostile',d:['at_guarded','at_threat','at_cool'],q:Q_AT,x:`C: How have you been sleeping?
P: Like you care. You people just want to fill out forms.
O: She answers the rest in short, sharp bursts and glares, but doesn't raise her voice or threaten.`,
 w:`Open antagonism toward the interviewer. Coolness is detached, not combative, and guardedness withholds rather than attacks.`},
{id:'at11',t:'at_threat',d:['at_hostile','at_suspicious','pma'],q:Q_AT,x:`O: A 29-year-old man stands, steps between the resident and the door, and says quietly, "If you sign those papers, you won't get home tonight."`,
 w:`A stated threat of harm, with a blocking posture. Record his exact words and put safety first; hostility alone carries no threat.`},
{id:'at12',t:'at_threat',d:['at_hostile','at_suspicious','at_cool'],q:Q_AT,x:`P: I know where you park, Doc. Think about that before you write anything.
O: He says it calmly, holding the resident's gaze.`,
 w:`An implied threat, delivered calmly. Calm delivery doesn't make it mere hostility; chart the words and act on safety.`},
{id:'at13',t:'at_flirt',d:['at_coop','af_buoyant','at_childlike'],q:Q_AT,x:`P: You're too pretty to be a doctor here. Are you married? Maybe we can talk after your shift.
O: He leans close and reaches to touch the resident's arm.`,
 w:`Romantic, boundary-crossing behavior toward the interviewer. Describe it specifically and set limits; buoyant affect is a lifted mood display, not a stance toward you.`},
{id:'at14',t:'at_flirt',d:['af_silly','af_buoyant','at_coop'],q:Q_AT,x:`O: A 38-year-old woman compliments the male resident's arms, asks for his number, and winks when he asks about her sleep.`,
 w:`Seductive behavior aimed at the interviewer. Silly and buoyant are affect descriptors; the question here is her attitude toward him.`},
{id:'at15',t:'at_cool',d:['at_guarded','at_hostile','blunted'],q:Q_AT,x:`O: For the first twenty minutes a 45-year-old man answers with a flat "Okay" and keeps glancing at his phone. By the end he has put the phone away, talks about his son, and asks about follow-up.`,
 w:`Detached distance that thawed. Charting the course ("cool at first, engaged by the end") tells the next clinician how engagement went.`},
{id:'at16',t:'at_cool',d:['at_hostile','at_uncoop','at_guarded'],q:Q_AT,x:`P: Whatever. Do your interview. I've done this a hundred times.
O: He sits back and answers every question accurately and completely, but shows no interest. There is no sarcasm or anger.`,
 w:`Detached, not antagonistic (hostile), not refusing (uncooperative), and not withholding (guarded), since his answers are complete.`},
{id:'at17',t:'at_childlike',d:['aa_younger','at_coop','af_silly'],q:Q_AT,x:`O: A 30-year-old staff nurse speaks in a confident, adult voice until she mentions her head nurse.
P: I guess I'll just wait for Ma'am to decide what I'm allowed to do.
O: As she says it, she gives a small child-like grin and her voice turns small and helpless.`,
 w:`A momentary helpless, child-like stance toward authority, just as in Shea's impact status example. It is an attitude, not her apparent age.`},
{id:'at18',t:'at_childlike',d:['aa_younger','af_silly','at_flirt'],q:Q_AT,x:`O: A 40-year-old engineer, describing having to face his father about money, shrinks into the chair, grins sheepishly, and speaks in a high, pleading voice.
P: Maybe I'll just say sorry, and he'll decide.`,
 w:`A shift into helpless subservience when an authority figure comes up. Silly affect is giggly playfulness across the interview, not a sudden shrinking before authority.`},
{id:'at19',t:'at_impact',d:['lookwith','parataxic','lookself'],q:Q_AT_IMP,x:`O: Midway through, the resident notices that the patient's answers have shortened and his jaw has tightened since she asked why his wife didn't come. She asks herself whether her own question pushed too hard, and decides to ease back.`,
 w:`A quick read of his immediate affect, including her own effect on him: Shea's impact status. Looking with the patient would mean imagining his experience from inside.`},
{id:'at20',t:'at_impact',d:['lookwith','lookself','identification'],q:Q_AT_IMP,x:`O: In supervision, a resident says: "Every few minutes I take a quick read of his face and posture right then, and how what I just said landed, instead of waiting to sum it up at the end."`,
 w:`Moment-to-moment observation of the patient's immediate behavior and affect is the impact status. The mental status is the composite written up at the end; blending is the clinician's felt sense of the interview's flow.`},

/* Insight and judgment */
{id:'in20',t:'in_partial',d:['anosognosia','intellinsight','in_somedist'],q:Q_IN,x:`P: I know my nerves are bad, Doc, and I'll take the sleeping pills. But the reason is my officemates. They're sabotaging me. Fix them and I'm fine.`,
 w:`She accepts part of the picture (nerves, sleep) but explains the rest by an outside cause. She shows no doubt about her officemates, so this isn't distance from a delusion, and she doesn't deny all problems (absent insight).`},
{id:'in21',t:'in_partial',d:['intellinsight','anosognosia','in_motivated'],q:Q_IN,x:`P: I know I'm stressed, and maybe that's why I can't eat or sleep. But it's because of my husband's family. It isn't an illness.
O: She has lost weight and has stopped going to work.`,
 w:`Some recognition that something is wrong, without seeing it as an illness. Intellectual insight names the illness and its consequences; she doesn't.`},
{id:'in22',t:'in_motivated',d:['trueinsight','pakikisama','intellinsight'],q:Q_IN,x:`P: I want to get better, Doc. What do I need to do? Can my wife come to the next visit?
O: At his first visit, he writes down the follow-up date and the clinic number.`,
 w:`A clearly expressed and shown wish for help. True insight is understanding joined with changed behavior over time, which can't be judged at a first visit.`},
{id:'in23',t:'in_motivated',d:['trueinsight','in_refuses','pakikisama'],q:Q_IN,x:`O: A 19-year-old student, brought by her mother after a night of heavy drinking, says she's not sure it's a "problem," but asks for a referral to the school counselor and agrees to weekly visits.`,
 w:`Motivated for care even with incomplete insight. Shea lists motivation alongside insight because the two can differ.`},
{id:'in24',t:'in_refuses',d:['anosognosia','poorjudg','in_nodist'],q:Q_IN,x:`P: I know I've been in the hospital for this before. I don't care. I'm not taking any medicine and I don't want your help. Just let me go home.`,
 w:`She acknowledges past illness, so this isn't absent insight; she flatly refuses help. Chart the refusal in her words alongside insight.`},
{id:'in25',t:'in_refuses',d:['pakikisama','in_motivated','at_hostile'],q:Q_IN,x:`O: After hearing the treatment plan, a 60-year-old man listens, nods politely, and says calmly:
P: Thank you, Doc, but no. No medicines and no follow-up. I'll handle this myself.`,
 w:`A clear, calm refusal of treatment. Pakikisama would be agreeing politely while not meaning it; he states his refusal plainly, and without hostility.`},
{id:'in26',t:'in_nodist',d:['in_somedist','in_halluins','overvalued'],q:Q_IN,x:`C: Is it possible your mind could be playing tricks on you?
P: No. I'm not crazy. I've seen the camera in the light bulb with my own eyes. It's a fact.`,
 w:`No room for any other explanation. Record his exact words; the appraisal "fixed delusion" goes in the formulation.`},
{id:'in27',t:'in_nodist',d:['in_somedist','in_partial','overvalued'],q:Q_IN,x:`O: Three weeks into treatment, Jun still believes his food is being poisoned.
C: What do you make of it now that your blood tests came back normal?
P: The tests are part of it. Of course they'd say normal.`,
 w:`New evidence is absorbed into the belief, with no doubt at all. Some distance would show as wondering whether it might not be true.`},
{id:'in28',t:'in_somedist',d:['in_nodist','overvalued','obsession'],q:Q_IN,x:`P: Some days I'm sure my coworkers are poisoning my coffee. Other days I think maybe I'm just tired and imagining it. I don't know anymore.`,
 w:`The belief is present but held with doubt. No distance leaves no room for doubt; an obsession is experienced as intrusive and unwanted rather than believed.`},
{id:'in29',t:'in_somedist',d:['in_nodist','in_partial','compulsion'],q:Q_IN,x:`C: Do you still think the military has hacked your phone?
P: Maybe it's just a glitch. Some days I'm sure, some days I'm not. I still keep it switched off, though, just in case.`,
 w:`He can wonder whether the belief is true, while still partly acting on it. Distance is about how firmly the belief is held.`},
{id:'in30',t:'in_halluins',d:['in_somedist','charlesbonnet','anosognosia'],q:Q_IN,x:`P: I hear a man's voice telling me I'm useless. I know it's not real, Doc. There's no one there. It's my illness acting up when I don't sleep.`,
 w:`Hearing voices but not delusional: she knows no real entity is speaking. If she came to believe a real being was talking, a delusion would have developed too.`},
{id:'in31',t:'in_halluins',d:['in_nodist','in_partial','obsession'],q:Q_IN,x:`O: A 35-year-old man hears whispering when the ward is quiet.
P: The first time, I checked the hallway. No one. Now I know my brain makes them. I just tell the nurse.`,
 w:`He experiences the voices but recognizes them as products of his illness. An obsession is an intrusive thought, not a perception.`},
{id:'in32',t:'anosognosia',d:['in_refuses','in_partial','intellinsight'],q:Q_IN,x:`C: Why do you think your family brought you here?
P: Because they're jealous. I'm perfectly fine. I don't sleep because I don't need to. I have too much to do.`,
 w:`No awareness of illness at all. Refusing treatment is a choice that can coexist with insight; here there is no recognition of a problem to accept or refuse.`},
{id:'in33',t:'intellinsight',d:['trueinsight','in_partial','in_motivated'],q:Q_IN,x:`P: I know, Doc, the drinking is bad for my liver and my sugar. The nurse explained it well. Maybe next year I'll stop.
O: He still drinks every day and has no plan to cut down.`,
 w:`He can name the illness and its consequences, but the knowledge isn't changing what he does. Partial insight would accept only part of the problem.`},
{id:'in34',t:'trueinsight',d:['intellinsight','in_motivated','in_partial'],q:Q_IN,x:`P: I used to think it was my heart. Now I know these are panic attacks, so when one starts I do the breathing and stay put instead of rushing to the ER.
O: She hasn't gone to the ER in two months.`,
 w:`Understanding joined with changed behavior. Intellectual insight would understand without changing anything.`},
{id:'in35',t:'poorjudg',d:['anosognosia','in_refuses','grand'],q:Q_IN,x:`O: During a manic episode, Ramon lent his family's rice money to men he had just met at a basketball game and invited them to stay in his house.
P: It's fine. They'll pay me back.`,
 w:`Decisions that harm his welfare, judged from what he actually did. Chart judgment separately from insight, since the two can differ.`},

/* Mood and affect */
{id:'af20',t:'af_broad',d:['labile','restricted','inapp'],q:Q_AF,x:`O: A 45-year-old fisherman tears up describing the boat he lost in the typhoon, laughs warmly about his grandson, and frowns at the cost of his medicines. Each expression fits the topic and changes gradually.`,
 w:`A full range of expression in step with the content: normal, broad affect. Labile affect shifts abruptly and out of step with the conversation.`},
{id:'af21',t:'af_broad',d:['labile','af_buoyant','restricted'],q:Q_AF,x:`O: A 22-year-old student looks worried discussing exams, smiles with relief about a passed quiz, and is plainly annoyed about her roommate. Her expressions shift smoothly with each topic.`,
 w:`Full-range, reactive affect. Restricted affect would show less facial animation; buoyant affect stays bright across topics.`},
{id:'af22',t:'af_buoyant',d:['af_silly','labile','af_broad'],q:Q_AF,x:`O: A 33-year-old man's face is bright and lively from start to finish. He smiles broadly and gestures expansively whether he is describing breakfast or his work plans, and he answers sensibly.`,
 w:`An upbeat, lifted expression that stays bright across topics. Silly affect is childish and giggly; a broad affect would shift more with the topics.`},
{id:'af23',t:'af_buoyant',d:['af_silly','inapp','labile'],q:Q_AF,x:`P: Doc! Good morning! Wonderful day, isn't it? I feel great, really great.
O: She smiles broadly, gestures a lot, and speaks in a lively voice. She isn't giggling or clowning, and her answers make sense.`,
 w:`Lively, elevated expression without childishness. Inappropriate affect clashes with specific content, such as laughing at a loss.`},
{id:'af24',t:'af_angry',d:['at_hostile','labile','at_threat'],q:Q_AF,x:`O: Asked about his landlord, a 50-year-old man's jaw tightens, he slaps the armrest, and his voice rises. With the resident, he stays polite and answers everything.`,
 w:`Visible anger: an affect. Hostility would be the stance he takes toward the resident, and he stays cooperative with her.`},
{id:'af25',t:'af_angry',d:['af_fright','at_hostile','labile'],q:Q_AF,x:`P: My brother sold Papa's land without telling any of us.
O: Her face reddens, she glares at the floor, and her voice turns clipped and hard. She is courteous to the resident throughout.`,
 w:`Anger shown in face and voice about the topic. She is courteous to the resident, so hostility isn't the finding.`},
{id:'af26',t:'af_fright',d:['af_angry','at_suspicious','aa_tremulous'],q:Q_AF,x:`O: The morning after an earthquake, a 26-year-old woman sits with wide eyes, gripping her chair. Her voice catches as she describes it, and she glances up at the ceiling at every creak.`,
 w:`Visible fear. She isn't mistrustful of anyone (suspicious), and the finding is the fear on her face, not shaking alone.`},
{id:'af27',t:'af_fright',d:['af_angry','at_suspicious','labile'],q:Q_AF,x:`O: A 30-year-old man pulls his chair back to the wall. His eyes are wide and his voice is shaky as he says the men who threatened him over a debt may be waiting outside.`,
 w:`Fear shown in face, posture, and voice. Suspiciousness would be mistrust directed at the resident.`},
{id:'af28',t:'af_silly',d:['af_buoyant','inapp','labile'],q:Q_AF,x:`O: A 20-year-old man giggles through the interview, makes faces, calls the resident funny nicknames, and pretends to snore when asked about school.`,
 w:`Childish, giggly playfulness out of keeping with the setting. Buoyant affect is lifted but not childish.`},
{id:'af29',t:'af_silly',d:['af_buoyant','labile','inapp'],q:Q_AF,x:`O: During routine questions about her age and address, a 25-year-old woman sticks out her tongue, giggles, covers her face, peeks out, and giggles again. She acts the same way on every topic.`,
 w:`A childish quality across the whole interview. Inappropriate affect is defined by clashing with particular content (laughing at a death); here the content is routine.`},
{id:'af30',t:'af_discord',d:['inapp','labelle','labile'],q:Q_AF,x:`C: How has your mood been these past few weeks?
P: Fine, Doc. Really, I'm fine.
O: Tears run down her cheeks as she says it, and she keeps wiping her eyes through the interview.`,
 w:`Stated mood and observed affect disagree. Chart both as found ("Mood: 'fine.' Affect: tearful"); don't chart her mood as depressed. Possible denial goes in the formulation.`},
{id:'af31',t:'af_discord',d:['inapp','restricted','labelle'],q:Q_AF,x:`P: My mood? Happy. Very happy.
O: A 60-year-old widower says this with a downcast face and a soft voice, sighing repeatedly through the interview.`,
 w:`Self-reported mood doesn't match the affect seen. Quote the mood and describe the affect; the discrepancy is discussed in the formulation.`},
{id:'af32',t:'af_moodref',d:['af_discord','flat','alexithymia'],q:Q_AF_CHART,x:`C: How would you describe your mood these days?
P: That's none of your business.
O: He declines again when asked differently. His face is tense and his jaw is set.`,
 w:`He wouldn't report his mood, so the mental status can only say he declined. Affect can still be described (tense). Alexithymia is being unable to name feelings, not refusing to.`},
{id:'af33',t:'af_moodref',d:['af_discord','restricted','alexithymia'],q:Q_AF_CHART,x:`O: A 40-year-old man answers every other question but shrugs at the mood question: "Skip that one." The resident drafts "Mood: depressed" based on the history from his wife.`,
 w:`Mood is self-reported, so the chart should say he declined to describe it. The resident's impression belongs in the formulation, and the history from his wife in the HPI.`},

/* Speech */
{id:'sp20',t:'sp_slow',d:['latency','povspeech','sp_soft'],q:Q_SP,x:`O: A 58-year-old woman with depression begins each answer promptly, but every word comes slowly, with long gaps between words within a sentence. Her answers are complete.`,
 w:`The speech itself is slow. Increased latency is a delay before the answer begins; poverty of speech is too few words.`},
{id:'sp21',t:'sp_slow',d:['latency','block','dysarthria'],q:Q_SP,x:`O: On a medical ward, a drowsy 80-year-old man speaks slowly but clearly articulates each word. He drifts between sentences, and nurses say he is drowsier each afternoon.`,
 w:`Slowed rate, as Shea notes in somnolent deliria. Articulation is clear, so this isn't dysarthria; the fluctuating drowsiness also calls for a delirium workup.`},
{id:'sp22',t:'sp_rapid',d:['pressured','foi','sp_loud'],q:Q_SP,x:`O: A 27-year-old woman who used shabu last night talks fast, the words tumbling out, but she pauses between sentences and stops as soon as the resident raises a hand to ask something.`,
 w:`Increased rate with normal pauses, easily interrupted. Pressured speech loses its pauses and is hard to interrupt.`},
{id:'sp23',t:'sp_rapid',d:['pressured','foi','circ'],q:Q_SP,x:`O: A 35-year-old man talks quickly about his new business. He finishes his sentences, waits for questions, and stops when interrupted. He stays on topic.`,
 w:`Rapid but not pressured. Shea stresses that rate and pressure are different findings, and a patient can have one without the other.`},
{id:'sp24',t:'sp_loud',d:['pressured','sp_rapid','at_hostile'],q:Q_SP,x:`O: A 40-year-old woman speaks loudly enough that people in the hallway turn to look. Twice she shouts a sentence, then returns to being merely loud. Her pace is normal and she pauses for questions.`,
 w:`Increased volume with outbursts; rate and pauses are normal, so it isn't pressure or rapid speech. Chart the baseline and the outbursts.`},
{id:'sp25',t:'sp_loud',d:['pressured','at_hostile','sp_rapid'],q:Q_SP,x:`O: A 72-year-old man who is hard of hearing speaks loudly throughout, at a normal pace, smiling and friendly.`,
 w:`Increased volume, with a likely explanation worth noting. He is friendly, so this isn't hostility, and his pace and pauses are normal.`},
{id:'sp26',t:'sp_soft',d:['povspeech','hiya','latency'],q:Q_SP,x:`O: A 23-year-old man answers fully and at length, but so quietly that the resident must lean in and ask him to repeat. He stays just as soft late in the interview, while relaxed and laughing about his band.`,
 w:`Low volume with a normal amount of speech. Hiya's soft voice lifts as rapport grows; his doesn't, even when he is clearly at ease.`},
{id:'sp27',t:'sp_soft',d:['povspeech','sp_slow','mutism'],q:Q_SP,x:`O: A 50-year-old woman with depression speaks barely above a whisper. Her pace is normal and her answers are relevant and complete.`,
 w:`Decreased volume alone. Poverty of speech would mean too few words, and her rate is normal.`},
{id:'sp28',t:'sp_wnl',d:['pressured','latency','sp_soft'],q:Q_SP,x:`O: A 30-year-old man with insomnia answers promptly, at an ordinary pace and conversational loudness, with natural pauses that let the resident ask questions.`,
 w:`Normal rate and volume, which should be written out ("rate and volume within normal limits") so the reader knows they were checked.`},
{id:'sp29',t:'sp_wnl',d:['pressured','sp_rapid','sp_loud'],q:Q_SP,x:`O: A 45-year-old woman, anxious about her biopsy, talks at a normal pace and conversational volume. She pauses naturally and lets the resident interrupt.`,
 w:`Anxious content, but rate, volume, and pauses are normal. Chart it explicitly rather than leaving speech unmentioned.`}
);


/* -- second cases tp -- */
/* Thought process (second-case pass) — Shea Ch. 16. Drafted 2026-11-02. */
V.push(
{id:'tp201',t:'salad',d:['loose','neolog','block'],x:`O: In the ER, a 34-year-old woman is brought in by her sister. She speaks continuously and without hesitation.
P: Tomorrow the cabinet of the sleeping is a very so when carrying lamps, because the nurse have yellow underneath.
C: Can you tell me what happened today?
P: Happened the rice of mother never because it is pointing.`,w:`Even within each sentence there is no grammatical or meaningful connection, so the interview yields nothing usable. In loosening of associations the sentences are intact and the break comes between ideas.`},
{id:'tp202',t:'persev',d:['echolalia','circ','povcontent'],x:`O: A home visit to a 72-year-old retired teacher whose family reports a decline over the past year.
C: Lola, how many children do you have?
P: Four. Two boys and two girls.
C: And what did you have for breakfast?
P: Two boys and two girls.
C: Where is the kitchen in this house?
P: Two boys and two girls, yes.`,w:`She keeps returning to her own earlier answer after the questions have changed. In echolalia the patient repeats the examiner's words instead, and she is also not circumstantial, because she adds no detail and is not trying to reach the question.`},
{id:'tp203',t:'povcontent',d:['povspeech','circ','tang'],x:`C: Can you describe what the voices say to you?
P: Oh, they say things, you know, things about stuff. It's a kind of a thing that goes on, in a way, regarding the matter, and then there's more of it, like I said.
C: Can you give me an example of one thing they said?
P: Well, just things. The usual things about everything.`,w:`His speech is adequate in amount but conveys almost no information, even after the examiner asks for a concrete example. Poverty of speech would be too few words, and circumstantiality would be too much detail.`}
);

/* -- second cases sp -- */
/* Speech (second-case pass) — Shea Ch. 16. Drafted 2026-11-02. */
V.push(
{id:'sp201',t:'echolalia',d:['persev','echopraxia','povspeech'],x:`O: A 22-year-old man on the ward is lying stiffly in bed. The nurse asks him a question.
C: Do you want your lunch tray now?
P: Your lunch tray now.
C: Are you in any pain?
P: In any pain.
O: He offers no words of his own during the whole round.`,w:`He repeats the examiner's words. Perseveration repeats the patient's own earlier answer, and the motor counterpart of this finding is echopraxia, the same catatonic cluster.`},
{id:'sp202',t:'dysarthria',d:['expaphasia','recaphasia','mutism'],x:`O: In the OPD, a 58-year-old man with Parkinson's disease on long-term treatment speaks in a soft, slurred voice, and the words run together.
P: I wanna tell you about my... sleep. It's... gonna be fine, I understood your questions.
O: Written answers on a notepad are complete, correctly spelled and grammatical, and he follows every instruction.`,w:`The problem is the motor production of speech, and language is intact (writing is normal, comprehension is normal). In expressive aphasia, written output is also disturbed.`},
{id:'sp203',t:'expaphasia',d:['dysarthria','recaphasia','povspeech'],x:`O: A 60-year-old woman was admitted a day ago after a sudden left hemisphere stroke. Her daughter asks her to point to the window, and she does.
P: Water... no. Glass... want... water.
O: She grimaces, shakes her head, and starts again, clearly aware that the words are not coming out right.`,w:`Effortful, halting, telegraphic speech with preserved comprehension and awareness of the deficit. Receptive aphasia is fluent with poor comprehension, and poverty of speech has no such struggle.`},
{id:'sp204',t:'recaphasia',d:['salad','expaphasia','dysarthria'],x:`C: Can you tell me where you are right now?
P: Oh yes, the plate was going to the other one before they put the tomorrow into it, and so we put the car in the ground, you see.
O: The words flow easily and in a normal rhythm. When asked to touch her nose, she smiles and waves at the nurse instead, apparently unaware that anything is wrong. Her family says the problem began this morning.`,w:`Fluent speech with normal rhythm but disordered content, impaired comprehension, unawareness and abrupt onset in an older patient suggest a neurologic cause. This can look like word salad from schizophrenia, so check onset and comprehension before assuming psychosis.`},
{id:'sp205',t:'mutism',d:['povspeech','latency','negativism'],x:`O: On the second day of her admission, a 29-year-old woman does not utter a single word to the nurses, the doctors, or her husband. She does not even produce sounds. She will accept a glass of water, but only watches with her eyes as people move about the room.
O: A written note from the family says she was talkative until last week.`,w:`There are no words at all, rather than too few (poverty of speech) or a delay before answering (latency). When mutism comes with rigidity or immobility, screen for catatonia.`}
);

/* -- second cases pe -- */
/* Perception (second-case pass) — Shea Ch. 16. Drafted 2026-11-02. */
V.push(
{id:'pe201',t:'ah',d:['commenting','hypnop','illusion'],x:`P: I was in the kitchen yesterday afternoon, wide awake, and a woman's voice said very clearly, "He's ruined." There was nobody else in the house. It came from the hallway, and I checked. It happens most days now.`,w:`She hears a voice with no external source while fully awake. A hypnopompic voice occurs only on waking, and an illusion would need a real sound that was misheard.`},
{id:'pe202',t:'oh',d:['gh','hypnag','illusion'],x:`P: Sometimes before the headache comes, I smell something like burnt hair, but nobody in the house smells it. It lasts about a minute and it's always the same smell. My wife says I look "blank" for a bit.
O: A 28-year-old man describes this to the resident in the OPD.`,w:`A smell with no source, in brief stereotyped episodes with a blank spell, which raises concern for temporal lobe seizures. A neurologic workup is needed, and gustatory hallucination concerns taste instead.`},
{id:'pe203',t:'gh',d:['oh','th','illusion'],x:`P: There's a metallic taste in my mouth every afternoon, like I'm sucking on a coin. It's there even when I haven't eaten.
C: Are you taking any new medicines?
P: Only the new tablet from my doctor, started three weeks ago.
O: A 54-year-old woman tells the resident, who notes that the dentist and her ENT have found nothing.`,w:`A taste with no stimulus. Because gustatory hallucinations are uncommon in primary psychiatric illness, review medications and screen for seizure or other neurologic causes before assuming a psychotic disorder.`},
{id:'pe204',t:'hypnop',d:['hypnag','ah','vh'],x:`P: When the alarm goes off and I'm just waking up, sometimes I see a small dog sitting at the end of the bed for a few seconds. Then it's gone as I sit up. It never happens later in the day, and I have no other problems.
O: A 19-year-old college student mentions it casually during a routine visit.`,w:`It occurs only on waking, which makes it hypnopompic. Hypnagogic hallucinations occur at sleep onset, and this should not be charted as a psychotic hallucination.`},
{id:'pe205',t:'illusion',d:['vh','hypnag','th'],x:`O: A 66-year-old man on the ward, in the evening with the lights half off, is frightened by a figure at the foot of the bed.
P: There's a man standing there!
O: The nurse points out the IV pole with his bathrobe draped over it. When the lights come on, he says, "Oh, it's just the robe."`,w:`A real stimulus (the robe on the pole) was misperceived, and the error corrected under better lighting. Hallucinations have no external stimulus at all.`},
{id:'pe206',t:'dereal',d:['deperson','illusion','dejavu'],x:`P: When I walk into the mall these days, the whole place looks like a painting, kind of far away and dreamy, and the people look like cardboard. I know they are real. I'm fine, I'm just not feeling like the place is real.
O: A 24-year-old graduate student describes this to the resident in a clinic after a week of panic attacks.`,w:`The surroundings feel unreal, with reality testing intact ("I know they are real"). In depersonalization the feeling of unreality is about one's own self or body.`}
);

/* -- second cases tc -- */
/* Thought content (second-case pass) — Shea Ch. 11, 12, 16. Drafted 2026-11-02. */
V.push(
{id:'tc201',t:'ideasref',d:['delref','persec','overvalued'],x:`P: When I walk past the nurses' station, it feels like they go quiet because of me, like the conversation is about me. But I know they're probably just busy. It's more a feeling than anything.
O: A 26-year-old man tells the resident this on the ward, and he laughs at himself a little.`,w:`A neutral event feels self-referential, but he can say it is probably not true. Full conviction would make it a delusion of reference.`},
{id:'tc202',t:'delref',d:['ideasref','persec','grand'],x:`O: A 33-year-old woman at a home visit, with the TV on mute.
P: The anchor tapped his pen three times on purpose. That is a code for me to leave the barangay. Every show sends me a message, and you can't tell me otherwise.
C: Could he just have been tapping his pen?
P: No. It was meant for me.`,w:`She is fully convinced that neutral media events carry messages for her, and the challenge does not move her. Ideas of reference are held with doubt.`},
{id:'tc203',t:'grand',d:['eroto','overvalued','persec'],x:`O: A 40-year-old man is brought to the ER by his brother and speaks loudly and fast.
P: I am the only one who can read the code of the universe, and the world government has been waiting for my results. I've written a hundred pages in four days.
O: His brother says he has barely slept in a week.`,w:`A fixed belief of exceptional identity and mission, in the setting of very little sleep, points to mania. Check the mood context before choosing between grandiose and persecutory themes.`},
{id:'tc204',t:'eroto',d:['grand','jealous','delref'],x:`O: A 36-year-old teacher sits with her husband at the OPD.
P: Our parish priest speaks to me through his sermons. He is in love with me, and he cannot say it. He changes his hymns to show it.
C: He has asked the parish office to stop your visits.
P: That is the church telling him to hide it. It proves how much he loves me.`,w:`She holds a fixed belief that another person is secretly in love with her, and contrary evidence is reinterpreted as proof. Check for stalking behavior and risk, unlike delusion of reference, which is about messages in events.`},
{id:'tc205',t:'somatic',d:['overvalued','nihil','persec'],x:`P: My bowels have been blocked for months. They have turned to stone. The scan says normal, the surgeon says normal, but they can't see it. I know what's inside me.
O: A 61-year-old man who has had three normal workups tells the resident this, and he rejects any suggestion that he might be wrong.`,w:`A fixed false belief about the body, unshaken by repeated normal evidence. In illness anxiety or an overvalued idea, the person can entertain the possibility of being wrong.`},
{id:'tc206',t:'jealous',d:['persec','overvalued','eroto'],x:`O: A 49-year-old woman, whose husband sits outside, is interviewed alone.
P: He gets home late and always smells a bit different. I've started following his tricycle route. He denies it, but he has to, doesn't he? I've sewn tiny marks on his shirts to catch him.
C: Have you ever thought of hurting him?`,w:`Trivial signs are treated as proof of infidelity, and his denial only confirms it for her. Delusional jealousy carries a real risk of violence toward the partner, so ask directly.`},
{id:'tc207',t:'capgras',d:['fregoli','persec','delref'],x:`O: An 80-year-old man with Alzheimer's disease greets his wife at the clinic.
P: This is not Rosa. She looks like her and talks like her, but my real wife is somewhere else. Somebody sent this woman to take her place.
O: His wife is tearful.`,w:`A familiar person is believed to be replaced by an identical impostor. In Fregoli, different strangers are believed to be one familiar person in disguise.`},
{id:'tc208',t:'fregoli',d:['capgras','persec','ideasref'],x:`P: The doctor, the guard, and the lady at the cashier are all my ex-husband. He changes his hair and his glasses, but I know it's him every time. He's been in the hospital with me for days.
O: A 37-year-old woman tells the team this on the ward.`,w:`Different strangers are believed to be one familiar, persecuting person in disguise. Capgras is the reverse: a familiar face with a stranger inside.`},
{id:'tc209',t:'withdrawal',d:['block','insertion','broadcast'],x:`C: Why did you stop talking in the middle of the sentence just now?
P: They took the thought out. A machine in the hospital ceiling sucks my ideas out of my head, one by one. Then my head is empty and I can't finish.`,w:`The patient's explanation is that an outside agent removed his thought, which is withdrawal. Thought blocking is the observable stop itself, and insertion would be thoughts put in.`},
{id:'tc210',t:'broadcast',d:['insertion','withdrawal','delref'],x:`O: On the ward, a 28-year-old man wears earphones and keeps his head covered with a towel.
P: Once I think something, everyone nearby hears it, like my head is a radio station. The nurses laugh because they heard my private thoughts about them. That's why I cover my head.`,w:`His thoughts are believed to be transmitted to others. In thought insertion, thoughts come in from outside, and in thought withdrawal they are taken out.`},
{id:'tc211',t:'obsession',d:['insertion','overvalued','compulsion'],x:`P: When I see people on the jeepney with a cough, the thought "I'll give my family a deadly disease" comes over and over. I don't want it. It's my own mind, and it's silly, but I can't stop it, and it makes me feel sick.
O: A 31-year-old nurse tells this to her psychiatrist.`,w:`A recurrent, unwanted thought she recognizes as coming from her own mind (ego-dystonic). In thought insertion, the thoughts are believed to come from outside, and compulsion would be the behavior that follows.`},
{id:'tc212',t:'compulsion',d:['obsession','stereotypy','mannerism'],x:`O: A 24-year-old man comes to OPD late again.
P: I wash my hands in sets of seven, and if I lose count I have to start over from zero. Otherwise I think my mother will get sick. It takes me over two hours in the morning. I know it makes no sense.`,w:`A repetitive act, performed by rule, to prevent a feared outcome and reduce anxiety. Stereotypy lacks this purpose, and obsession is the thought rather than the act.`},
{id:'tc213',t:'overvalued',d:['persec','somatic','jealous'],x:`C: You said the new neighbor is behind the damage to your fence?
P: Yes, I've gone to the barangay four times about it and I've kept a notebook of every noise since last year. I think of nothing else.
C: Could there be another explanation?
P: Maybe the typhoon did part of it. But I still think it's mostly him.
O: A 57-year-old man, in the OPD, has few other interests.`,w:`A sustained belief that dominates his life but is held with less than delusional conviction, as he concedes the typhoon may have played a part. A delusion allows no such room.`}
);

/* -- second cases af -- */
/* Mood and affect (second-case pass) — Shea Ch. 8, 16. Drafted 2026-11-02. */
V.push(
{id:'af201',t:'flat',d:['blunted','restricted','inapp'],x:`O: In a family interview, a 31-year-old woman sits with her face immobile and her voice monotone. She does not gesture. When her mother tearfully tells of her recent fall, and when the brother jokes about their childhood, her expression remains exactly the same.`,w:`Essentially no emotional expression across emotional topics. Blunted affect would still show a flicker of reactivity, and inappropriate affect would be mismatched, rather than absent.`},
{id:'af202',t:'restricted',d:['blunted','flat','labile'],x:`O: A 50-year-old woman is mildly depressed after losing her mother. She smiles faintly when her grandchildren are mentioned and her eyes fill when she speaks of the funeral, but her expression ranges only a short way in either direction. Her voice is quiet throughout.`,w:`Mildly reduced range and intensity, but still reactive and congruent with mood. Blunted is a severe reduction, and flat is essentially none.`},
{id:'af203',t:'labelle',d:['inapp','alexithymia','flat'],x:`C: The doctors say you can't see out of your right eye, and the eye tests were normal. How are you taking it?
P: (smiling pleasantly) Oh, it's all right. It happened the night after my husband and I argued. I'm not worried about it.
O: A 33-year-old woman sits calmly beside her bed, in contrast to her worried family.`,w:`A striking lack of concern about her own serious-seeming deficit. Inappropriate affect is mismatched to any content, and this finding should be described rather than used diagnostically, since it also occurs in neurologic disease.`},
{id:'af204',t:'anhedonia',d:['avolition','alexithymia','blunted'],x:`C: What do you do when you have a free Sunday?
P: I used to go to the beach with my kids and cook for everyone. I still go. But the food tastes like nothing, and the kids laughing doesn't make me happy like it did. Nothing gives me pleasure.
O: A 45-year-old man describes the past two months.`,w:`Loss of pleasure in activities he previously enjoyed, even though he still does them. In avolition the problem is starting activities, not enjoying them.`},
{id:'af205',t:'alexithymia',d:['anhedonia','flat','labelle'],x:`C: When your boyfriend left, what was that like for you?
P: I don't know. My chest is tight and I get stomach cramps. The doctor said it's nothing. I can't say what I feel; I never know what to call it.
O: A 27-year-old woman has had multiple visits for physical complaints.`,w:`She cannot identify or describe her emotions and speaks in bodily terms instead. Anhedonia is a loss of enjoyment, not a difficulty naming feelings.`}
);

/* -- second cases be -- */
/* Behavior and motor (second-case pass) — Shea Ch. 16. Drafted 2026-11-02. */
V.push(
{id:'be201',t:'pma',d:['akathisia','stereotypy','mannerism'],x:`O: A 52-year-old man in the ER, on no medication, has just been told his business is bankrupt. He paces the corridor, wrings his hands, tears a tissue to pieces, and asks again and again, "What am I going to do?"
P: I can't sit, I'm so wound up inside.`,w:`Excessive, purposeless activity driven by psychic tension and distress. Akathisia is a medication-linked restlessness, with the urge centered in the legs.`},
{id:'be202',t:'td',d:['akathisia','stereotypy','mannerism'],x:`O: A 57-year-old man who has taken an antipsychotic for 15 years sits in the OPD with his tongue slowly rolling inside his cheek and his lips pursing. His hands twist slightly in his lap.
C: Do you notice those movements?
P: What movements?`,w:`Involuntary orofacial and limb movements after long-term dopamine blockade, which the patient does not notice. Document with a scale such as the AIMS; stereotypies are repetitive but fixed and often goal-less rituals.`},
{id:'be203',t:'waxy',d:['posturing','negativism','echopraxia'],x:`O: A nurse lifts a 24-year-old man's leg off the bed to wash him. The leg meets slight, uniform resistance, then stays in the raised position until she puts it down again. He lies motionless the rest of the time.`,w:`The limb holds the position the examiner placed it in, with slight even resistance. In posturing, the patient assumes the position on his own.`},
{id:'be204',t:'posturing',d:['waxy','mannerism','stereotypy'],x:`O: The ward staff find a 27-year-old woman standing in the dayroom on one leg with her hands clasped above her head. She has been like this for much of the morning. No one placed her in that position.`,w:`She spontaneously adopts and holds an unusual posture, a catatonic sign. In waxy flexibility, the examiner sets the position.`},
{id:'be205',t:'echopraxia',d:['echolalia','waxy','negativism'],x:`O: At the nurses' station, when the nurse touches her hair, the patient touches her hair. When the nurse waves, he waves. When she stands and stretches, he follows. He says nothing and shows no amusement.`,w:`He imitates the examiner's movements without being asked to. Echolalia is the imitation of words rather than movements.`},
{id:'be206',t:'negativism',d:['waxy','echopraxia','posturing'],x:`O: A 30-year-old man is asked to open his mouth for the dental exam and clamps it shut. When the nurse pulls his arm gently, he pulls the other way with equal strength. He gives no reason for any of it.`,w:`He shows motiveless resistance to instructions and to being moved, a catatonic sign. Waxy flexibility is slight even resistance followed by holding the position.`},
{id:'be207',t:'stereotypy',d:['mannerism','compulsion','td'],x:`O: In the dayroom, a 35-year-old man flaps his hands at eye level and turns in a small circle, over and over for an hour. It has no apparent goal, and he voices no fear or urge.`,w:`A repetitive, non-goal-directed movement. A compulsion reduces anxiety and a mannerism embellishes a purposeful act.`},
{id:'be208',t:'mannerism',d:['stereotypy','compulsion','td'],x:`O: Whenever a 38-year-old woman lifts a spoon to eat, she first points her little finger high and sweeps the spoon through a looping arc before it reaches her mouth. She then eats normally.`,w:`An odd stylized embellishment of an otherwise goal-directed action (eating). Stereotypy has no purposeful action underneath it.`},
{id:'be209',t:'avolition',d:['anhedonia','pmr','flat'],x:`C: How have you spent your days since leaving school?
P: I stay in the room. My mother says to bathe, and I mean to, and then it's evening. I don't feel sad. I don't plan anything. I also don't feel slowed down, it's just that I don't start things.
O: A 25-year-old man sits in his mother's house, and the family says he has not looked for work in a year.`,w:`Reduced initiation of goal-directed activity, without sadness or observable slowing. Psychomotor retardation is slowed movement the clinician sees, and anhedonia is loss of enjoyment.`}
);

/* -- second cases cg -- */
/* Cognition (second-case pass) — Shea Ch. 16. Drafted 2026-11-02. */
V.push(
{id:'cg201',t:'distract',d:['clouding','block','pressured'],x:`C: Please spell WORLD backwards.
P: D... oh, is that a helicopter? D, L... your badge is shiny, is that new? Sorry, where was I?
O: A 26-year-old man, alert and fully awake, looks toward every sound in the corridor and needs each instruction repeated.`,w:`His attention is repeatedly pulled to irrelevant stimuli while his alertness is intact. The finding here is the inattention itself, not clouded consciousness.`},
{id:'cg202',t:'disorient',d:['clouding','confab','retro'],x:`C: Where are we right now, Lolo?
P: At the market in Mariveles. I'm waiting for the jeep.
C: What month is it?
P: March, I think. Is it March?
O: A 79-year-old man is alert and attentive, and he correctly says his own name and recognizes his son. It is a hospital room in October.`,w:`He is alert but wrong about place and time, and right about person, which should be charted separately. Consciousness is not clouded, so it does not fluctuate.`},
{id:'cg203',t:'confab',d:['antero','disorient','dejavu'],x:`C: Did you have visitors this morning?
P: Yes, my son from Subic came with oranges and we talked about the boat.
O: A 58-year-old man with long-standing heavy alcohol use has not had visitors; the nurse confirms none came. He is not trying to deceive anyone and seems certain.`,w:`He fills a memory gap with an unintended, plausible account that he believes, as in Korsakoff syndrome. It is not lying, and the finding is the fabricated account, not only the amnesia.`},
{id:'cg204',t:'antero',d:['retro','confab','distract'],x:`C: I'll ask you again in five minutes to remember: apple, table, coin.
O: Five minutes later, a 63-year-old man after herpes encephalitis recalls none of the three words and does not recall being asked. He tells vivid stories about his wedding and his old job.`,w:`He cannot form new memories after the illness, while old memory is preserved. Retrograde amnesia loses memories from before the illness.`},
{id:'cg205',t:'retro',d:['antero','confab','jamaisvu'],x:`O: After a fall down the stairs, a 45-year-old man with a concussion learns the names of his nurses and remembers yesterday's conversation. He cannot recall the weekend before the fall, or anything from the preceding two weeks.`,w:`He has lost memories formed before the injury, while new learning is intact. In anterograde amnesia, the new memories fail to form.`},
{id:'cg206',t:'dejavu',d:['jamaisvu','dereal','illusion'],x:`O: A 22-year-old man says that several times a week, always lasting seconds, he feels sure that what is happening has happened before, down to the words. Then he feels a rising sensation in his stomach and a metallic taste, and sometimes loses a few seconds.`,w:`A false sense that a new experience is familiar. Occasional episodes are normal, but frequent stereotyped ones with other aura features suggest focal seizures and need a neurologic workup.`},
{id:'cg207',t:'jamaisvu',d:['dejavu','dereal','disorient'],x:`P: I went to my mother's house last Sunday, where I grew up. In the doorway, for a moment, the living room felt completely strange, like I'd never seen it. I knew whose house it was, and I knew the room was real. It passed in a minute.
O: A 41-year-old woman describes it to the resident.`,w:`A familiar situation feels unfamiliar, yet she knows where she is (not disorientation) and the world doesn't seem unreal (not derealization). Déjà vu is the reverse: a new situation feels familiar.`}
);

/* ===== Appendix I: Facilic schematics; Appendix III: The written document (v5) ===== */
/* Facilic schematics (Shea Appendix I, linked to Ch. 4) and Written document (Shea Appendix III, filed under Ch. 16). Drafted 2026-11-02. */
/* Text rendering of Shea's schematic symbols used in the fs cases:
   [ Maj. Dep. ]   = rectangle (content region), abbreviation inside
   ( Dynam. )      = circle (process region)
   ([ Scout. ])    = rectangle with a half circle on each end (scouting phase)
   ──natural──>    = a gate between two regions, named in words (Shea's gate glyphs are in Figure AI.1, an image not reproduced here)
   corner slashes  = written out in words, e.g. "(2 corners slashed)"
   Ⓐ Ⓑ Ⓒ          = circled-letter annotation keyed to notes below the map */
const Q_FSG=`Which gate does this symbol on the map show?`;
const Q_FS=`Which facilic schematic element or pattern is this?`;
const Q_FS2=`Which notation would the supervisor write here?`;
const Q_FS3=`Which schematic convention or principle explains this?`;
const Q_WD=`Which documentation principle does this chart excerpt follow or violate?`;
const Q_WD2=`Which Appendix III documentation principle applies here?`;

/* ===== Facilic schematics (fs) ===== */
T('fs_longmap','Longitudinal facilic map','fs',[4],
 `The backbone of the facilic schematic system (Appendix I): a chronological, start-to-finish record of the interview, drawn as a chain of region figures linked by gate symbols, showing the trainee's expansions, gates, and flow.`,
 `It follows structure and transitions in sequence. A cross-sectional map shows only how time was divided across four quarters, not the gates.`,
 `Draw it as you watch, placing a gate between each pair of successive regions so the map stays one continuous chain.`);
T('fs_crossmap','Cross-sectional map','fs',[4],
 `A simple pie diagram that divides the interview into four quarters of time and shows what each quarter was spent on (Appendix I).`,
 `It shows time management, not specific structuring techniques. It complements the longitudinal map rather than replacing it.`,
 `Use it when pacing is the problem, so the trainee can see at a glance where the minutes went.`);
T('fs_rect','Rectangle (content region symbol)','fs',[4],
 `A content region is drawn as a rectangle with the region's abbreviated name inside, such as "Maj. Dep.," "OCD," or "Soc. Hx."`,
 `Rectangle = content (a diagnostic or history area). Circle = process (psychodynamic or transformational). Scouting gets its own combined shape.`,
 `Always abbreviate the topic inside the figure. An unlabeled box tells the trainee nothing in supervision.`);
T('fs_circle','Circle (process region symbol)','fs',[4],
 `A process region, such as a psychodynamic region ("Dynam.") or a transformational region where a roadblock like anger is worked through ("Transform."), is drawn as a circle with its abbreviation inside.`,
 `Ask what the stretch is about: gathering a topic's data (rectangle) or how the patient responds and relates (circle).`,
 `When the trainee shifts into interpretive questions, or into working through anger, close the rectangle and switch to a circle.`);
T('fs_scoutsym','Scouting symbol (rectangle with rounded ends)','fs',[4],
 `The scouting phase is drawn as a combination of rectangle and circle: a rectangle with a half circle on each end.`,
 `It is the only combined shape and marks the opening survey, which mixes content and process (Ch. 4). A plain circle marks a later process region.`,
 `Most longitudinal maps begin with this shape. Note how long it ran, since a scouting phase that runs too long is a common teaching point.`);
T('fs_slash','Corner slash (25% per corner)','fs',[4],
 `Completeness of a content region's expansion is shown by slash marks at the rectangle's corners. Each slashed corner equals about 25% of the needed information, marked as the dyad leaves the region.`,
 `Fewer than four slashes means an unfinished expansion that needs a return visit. Four means complete. More than four means too much for the task.`,
 `Slash the corners the moment the dyad leaves the region, while your sense of what was covered is fresh.`);
T('fs_fullexp','Four-slash rectangle (complete expansion)','fs',[4],
 `A rectangle with all four corners slashed, showing the region was completely expanded for the task at hand.`,
 `Four slashes means "complete for this setting," not "every possible question asked." A fifth slash would mean over-gathering.`,
 `Point out the four-slash regions in supervision too. Trainees need to see what thorough looks like.`);
T('fs_overexp','Fifth or sixth slash (over-expansion)','fs',[4],
 `A fifth, and possibly sixth, slash on a rectangle, showing that more information was gathered than the task at hand required.`,
 `The region is complete, but the extra data cost time needed elsewhere. Four slashes is the target, not the minimum.`,
 `Classic in a busy ER: full criteria coverage when severity and suicide data were what the triage needed. Teach flexibility in data-gathering decisions.`);
T('fs_taskhand','Task-at-hand standard','fs',[4],
 `Slashes are judged against the database that should be covered for the specific task and setting. The same content region may need different data in a 50-minute intake than in a 20-minute emergency assessment.`,
 `This is the standard behind the slashes, not a symbol. The same coverage can earn two slashes in one setting and four in another.`,
 `Before watching, decide what "complete" means for this setting, then slash against that.`);
T('fs_reentry','Re-entry rectangle (resumed split expansion)','fs',[4],
 `When the dyad returns to an incompletely expanded region, the supervisor draws a new rectangle with the same label, immediately marks the slashes it already had, and adds slashes for new data on leaving.`,
 `The pre-marked slashes carry over earlier coverage. A fresh, unslashed rectangle would wrongly suggest a new region or lost data.`,
 `Copy the old slash count first, then update on exit, so the trainee sees the region finally reach four.`);
T('fs_omitpattern','Bevy of incomplete expansions','fs',[4],
 `A map pattern in which many rectangles are left with fewer than four slashes. It displays a trainee's tendency to leave regions prematurely, resulting in errors of omission.`,
 `It is a pattern across the map (or several maps), not one split expansion that later gets finished.`,
 `Lay the maps side by side. Seeing the pile of half-slashed boxes motivates change more than a verbal comment does.`);
T('fs_phantomstring','String of phantom gates','fs',[4],
 `A map pattern of regions linked by repeated phantom gates: the trainee jumps from region to region with no cue, which can create a "Meet the Press" style interview.`,
 `One phantom gate is a single transition. The pattern is a run of them, showing an overused habit of abrupt transitions.`,
 `Ask the trainee what he was feeling at each jump, then rewrite one gate together as a natural or referred gate.`);
T('fs_circletter','Circled-letter annotation','fs',[4],
 `A circled letter of the alphabet placed on the map marks a point the supervisor will comment on later, or the exact wording of a gate. The matching note is listed below the map.`,
 `The letter keys a note below the map. A counter setting records when something happened. They are often used together.`,
 `Below the map: "Ⓑ 'Earlier you mentioned your uncle...': nice referred gate."`);
T('fs_counter','Counter setting / minute mark','fs',[4],
 `The supervisor periodically notes elapsed minutes and the video counter number on the map, so important teaching moments can be found quickly during supervision.`,
 `It records where in time something happened. A circled letter records what to discuss.`,
 `Write the time beside the figure, e.g., "13:40 good empathy," then cue the recording there during supervision.`);
T('fs_supershort','Supervisor-drawn shorthand','fs',[4],
 `Facilic symbols are drawn by a supervisor watching the interview and shared with the trainee in supervision, preferably right after the interview. The interviewer is not meant to draw them during the interview.`,
 `If the interviewer is drawing boxes, the system has been misunderstood. The map is a supervision record, not a data-gathering aid.`,
 `Tell trainees: "Your job is the patient. Mine is the map."`);
T('fs_videosup','Video facilic supervision','fs',[4],
 `The supervisor first watches the recording alone, mapping the flow with facilic schematics, adding comments on other skills (engagement, validity, psychodynamics), and noting minutes or counter numbers. Selected segments are then reviewed with the trainee.`,
 `It is a supervision format that uses the map. Longitudinal and cross-sectional maps are the tools used within it.`,
 `Number the teaching points worth viewing together, and let the trainee request segments you did not highlight.`);

/* ===== Written document (wd) ===== */
T('wd_selfreview','Writing it for yourself','wd',[16],
 `In Appendix III, Shea calls the clinician the most important reader. Writing forces a review of the data, which can reveal forgotten questions, recurring training "blind spots," and the need to rethink diagnoses or the plan.`,
 `The point is the write-up as a clinical tool for the writer, not as a defense against outside readers. Compare the no-surprises test, which a reviewer applies.`,
 `"Addendum: on write-up, I found no history of manic symptoms was obtained. Will ask at follow-up and call his sister."`);
T('wd_prompt','Documenting promptly','wd',[16],
 `Write the assessment as close to the interview as possible (Appendix III). Done immediately, it can take half the time it takes days later, and it avoids a burnout-inducing pile of late paperwork. Shea urges at least 30 minutes after a 60-minute interview.`,
 `This is about timing after the interview, not about typing during it.`,
 `Intake 9:00-10:00, documentation 10:00-10:30 blocked on the schedule.`);
T('wd_notyping','No final notes typed during the interview','wd',[16],
 `Final EHR notes should not be typed during the interview. Typing disrupts flow and engagement and makes it easy to miss subtle nonverbal clues of hesitancy or deceit. Rough notes should be limited to memory aids (Appendix III).`,
 `"Surgeons do not dictate while they cut." The concern is attention during the interview, not when the note is finished.`,
 `During the interview, jot only memory cues, e.g., "pills? sister's house; job loss June." Build the note right after.`);
T('wd_rawdata','Raw behavioral data, not labels (HPI)','wd',[16],
 `The HPI is part of the objective database. It should record the behavioral symptoms themselves and leave out clinical judgments such as "appeared manic." The label belongs later, in the Narrative Summary and Formulation (Appendix III).`,
 `Without the raw data, no reader can tell whether the label fits, and a lawyer can argue diagnosis slapping. Explaining a diagnosis is the formulation's job.`,
 `"For 3 weeks she has slept about 2 hours a night, talked loudly and rapidly, and spent her savings on raffle tickets."`);
T('wd_ccquote','Chief complaint as a direct quote','wd',[16],
 `The Appendix IIIB quality-assurance guideline for the ID section lists age, sex, marital status, referring clinician, reason for referral, and the chief complaint as a direct quotation from the patient.`,
 `Use the patient's own words, not the clinician's paraphrase or diagnosis.`,
 `"Chief complaint: 'I can't sleep anymore, and nothing feels worth doing.'"`);
T('wd_hpistress','Opening stressor paragraph','wd',[16],
 `The HPI opens with one short paragraph on the patient's current stressors and how the patient sees the problems, giving context for the symptoms that follow. Details are left for later therapists, except when stressors are the main issue (Appendix III).`,
 `Keep it brief and about context. The symptom picture belongs in the next, chronological paragraph.`,
 `"Mrs. Dizon, a market vendor, links her distress to her husband's job loss in June and growing debts. She sees the problem as 'just stress.'"`);
T('wd_onepara','One paragraph per diagnosis','wd',[16],
 `After the primary-diagnosis paragraph (chronological symptoms and treatment), each additional diagnosis or rule-out gets its own HPI paragraph of supporting DSM-5 symptoms. Every diagnosis in the differential should have its raw data in the HPI (Appendix III).`,
 `This is the writing rule. The no-surprises test is how a reader checks that it was followed.`,
 `"Regarding alcohol use: since March he drinks most nights, has missed work twice after drinking..." (supports the rule-out of alcohol use disorder).`);
T('wd_pertneg','Pertinent negatives','wd',[16],
 `Pertinent negatives are symptoms the patient was asked about and clearly denied. They are listed in the HPI, or partly in the mental status, especially for diagnoses the presenting picture raises, such as mania in a depressed patient (Appendix III).`,
 `They document what was asked and ruled out, defending against a claim that a diagnosis was missed. Positives support the diagnosis given.`,
 `"She denies racing thoughts, decreased need for sleep, reckless spending, or other manic symptoms."`);
T('wd_nosurprise','No-surprises test','wd',[16],
 `A well-written HPI leaves no surprises at the DSM-5 listing. A supervisor can write in the margin which diagnosis each paragraph supports. A diagnosis with no supporting paragraph signals a problem in documentation or formulation (Appendix III).`,
 `This is a quality-assurance check made by the reader. One paragraph per diagnosis is the writing rule that passes it.`,
 `Margin note: "Para 2: MDD. Para 3: r/o GAD. PTSD listed, but where is the supporting paragraph?"`);
T('wd_sihpi','Suicidal ideation in the HPI, without opinion','wd',[16],
 `Recent suicidal ideation, planning, and behavior from the current episode are described factually in the HPI (in a separate paragraph if significant). No opinion about risk is given there. The risk judgment comes later, in the formulation or risk field (Appendix III).`,
 `HPI = what happened. Formulation = what the clinician concludes about risk and why. Ideation during the interview itself goes in the mental status.`,
 `"Two weeks ago, after an argument with her partner, she thought of overdosing and set aside some of her mother's pills. She gave them to her sister the next morning."`);
T('wd_riskreason','Reasoning behind the safety decision','wd',[16],
 `In the Narrative Summary and Formulation (or a risk field), the clinician states the decision about immediate safety and explains why. "Not suicidal at present" alone is not enough, because it is the soundness of the reasoning that protects in court (Appendix III).`,
 `The error is stating a conclusion without its evidence. The evidence cited comes from the database sections.`,
 `"Not acutely suicidal at present, as evidenced by denial of current ideation, no past attempts, no current drinking, and active interest in follow-up care."`);
T('wd_protquote','Quoting the patient on deterrents','wd',[16],
 `Direct quotes from the patient suggesting that suicide or violence risk is minimal are recorded in the HPI or mental status and referred back to in the formulation. They also show future clinicians which deterrents to recheck (Appendix III).`,
 `The quote is raw data in the patient's words. The formulation then cites it as part of the reasoning.`,
 `MSE: "Denies current suicidal ideation, stating, 'I could never do that to my grandchildren.'"`);
T('wd_contract','Documenting safety contracting as an assessment tool','wd',[16],
 `If safety contracting is used as an assessment tool, document the behavioral clues of sincerity (eye contact, handshake, genuine affect, interest in the safety plan, no nonverbal evidence of ambivalence or deceit), not merely that a contract was made. Safety planning should also be documented (Appendix III).`,
 `"Made a safety contract" alone is the error. The observations are what make it meaningful.`,
 `"Using safety contracting as an assessment tool: steady eye contact, firm handshake, genuine affect. He saved the crisis line number in his phone. No nonverbal evidence of ambivalence or deceit."`);
T('wd_corrob','Documenting corroborative contacts','wd',[16],
 `Record any contacts with corroborative sources and what they said that supports the patient's safety and truthfulness, including their agreement with the safety plan (Appendix III).`,
 `This covers informants who supply or confirm history. Consultation covers colleagues who review your decision.`,
 `"Spoke with his wife, who confirmed he has not talked about suicide and has no past attempts. She agrees with the safety plan and will check on him tonight."`);
T('wd_consult','Documenting consultation','wd',[16],
 `List everyone you discussed the case with and their agreement with the decision. Shea calls consultation probably the single best defense against a charge of negligence, but it weakens markedly if it is not recorded (Appendix III).`,
 `This covers colleagues reviewing your judgment, not family members or informants supplying history.`,
 `"Discussed with Dr. Santos (on-call consultant) and with her outpatient therapist. Both agree with discharge home and follow-up in 3 days."`);
T('wd_norepeat','Formulation explains, not repeats','wd',[16],
 `The Narrative Summary and Formulation opens with brief identification and one or two sentences on what brought the patient in, then explains why each diagnosis was given. It refers back to the HPI instead of re-listing symptoms (Appendix III).`,
 `Repeating symptoms wastes time. The formulation's job is reasoning. Compare the raw-data rule, which keeps labels out of the HPI.`,
 `"Her symptoms (see HPI) began within weeks of the typhoon damage to her home. I favor an adjustment disorder because they fall short of a major depressive episode and ease on days she is with family."`);
T('wd_stigmadx','Explaining stigmatizing diagnoses','wd',[16],
 `Take the time to explain why a diagnosis that carries stigma or legal or benefits implications was made, such as borderline or antisocial personality disorder. This protects against later charges of "label slapping" (Appendix III).`,
 `Every diagnosis needs reasoning, but labels with stigma or consequences need it spelled out explicitly.`,
 `"Borderline personality disorder is listed because of the long-standing pattern described in the Social History: repeated intense, unstable relationships since adolescence, chronic emptiness, and recurrent self-cutting when feeling abandoned."`);
T('wd_medconsent','Documenting the medication discussion','wd',[16],
 `When prescribing for the first time, document that side effects and benefits were discussed and that the patient understood and was interested in starting, ideally in the patient's own words (Appendix IIIB treatment-plan guideline).`,
 `This documents informed agreement to a treatment. Quoting deterrents documents safety reasoning.`,
 `"Side effects, risks, and benefits of sertraline were discussed. She understood and wished to start, saying, 'Sige, Doc, let's try it.'"`);

V.push(
/* ---- fs cases ---- */
{id:'fs01',t:'fs_longmap',d:['fs_crossmap','fs_videosup','fs_counter'],q:Q_FS,x:`O: Behind the one-way mirror, Dr. Reyes draws as the intake unfolds, from greeting to closing.
S: {Scout.} -nat-> [Maj._Dep./4] -spont-> [Med._Hx./3] -ref-> [Fam._Hx./2]`,
 w:`A chronological chain of region figures linked by gates, from start to finish, is a longitudinal map. A cross-sectional map would be a pie of four time quarters with no gates.`},
{id:'fs02',t:'fs_longmap',d:['fs_crossmap','fs_circletter','fs_supershort'],q:Q_FS3,x:`A supervisor listens in on a resident's crisis hotline call and wants a record of every topic the resident explored, in order, and how each transition was made.`,
 w:`Following regions and gates in sequence calls for a longitudinal map, which Shea also recommends for supervising telephone crisis work. A cross-sectional map would show only time use.`},
{id:'fs03',t:'fs_crossmap',d:['fs_longmap','fs_counter','fs_omitpattern'],q:Q_FS,x:`O: The supervisor's drawing is a circle divided into four quarter slices, labeled "Q1: scouting, chief complaint," "Q2: story of his OFW years abroad," "Q3: Maj. Dep.," and "Q4: SI, substance use, Fam. Hx., closing."`,
 w:`A pie of four time quarters is a cross-sectional map. It shows how time was spent (here a lost second quarter) but not the gates or expansions a longitudinal map records.`},
{id:'fs04',t:'fs_crossmap',d:['fs_longmap','fs_videosup','fs_counter'],q:Q_FS2,x:`A supervisor's longitudinal map already shows good gates. What she now wants to show the resident is that half the interview went to the referral story and the risk assessment was squeezed into the last few minutes.`,
 w:`To show how time was divided, the complementary tool is the cross-sectional (pie) map. The longitudinal map tracks structure, not the proportions of time.`},
{id:'fs05',t:'fs_rect',d:['fs_circle','fs_scoutsym','fs_circletter'],q:Q_FS2,x:`P: If I touch a doorknob I have to wash, sometimes twenty times.
C: How long does that take you each day?
P: Hours. And I check the stove before I can leave the house.
C: What other things do you find you have to do over and over?`,
 w:`This is data gathering on a diagnostic topic, so it is a content region: a rectangle labeled "OCD." A circle would mean a process region, such as psychodynamic exploration.`},
{id:'fs06',t:'fs_rect',d:['fs_circle','fs_scoutsym','fs_longmap'],q:Q_FS,x:`S: [Soc._Hx./4] -ref-> [Med._Hx./3]
O: The resident asks what the two box shapes stand for.`,
 w:`Each rectangle, with its abbreviation inside, is a content region symbol. Process regions would be circles, and scouting would have rounded ends.`},
{id:'fs07',t:'fs_circle',d:['fs_rect','fs_scoutsym','fs_circletter'],q:Q_FS2,x:`P: My kuya asks me for money every month, and I always say yes.
C: What do you think makes it so hard to say no to him?
P: I guess... if I say no, I'm not a good sister. That's how Nanay raised us.
C: How does that idea show up with other people in your life?`,
 w:`The resident has moved into interpretive questions about why the patient responds as she does, a psychodynamic process region, drawn as a circle labeled "Dynam." A rectangle would mean content data gathering.`},
{id:'fs08',t:'fs_circle',d:['fs_rect','fs_reentry','fs_circletter'],q:Q_FS,x:`O: The patient grew angry when asked about his drinking. The resident spent several minutes acknowledging his frustration before continuing.
S: [Sub./2] -obs-> (Transform.) -ref-> [Sub./4]`,
 w:`The middle figure is a circle: a process region, here a transformational one where a roadblock was worked through. The rectangles on either side are content regions.`},
{id:'fs09',t:'fs_scoutsym',d:['fs_rect','fs_circle','fs_crossmap'],q:Q_FS,x:`O: The first figure on a supervisor's map:
S: {Scout.} -nat->@9:00 [Maj._Dep.]`,
 w:`The combined rectangle-and-circle shape is reserved for the scouting phase, which mixes content and process. A plain circle would be a later process region.`},
{id:'fs10',t:'fs_scoutsym',d:['fs_circle','fs_rect','fs_longmap'],q:Q_FS2,x:`C: Good morning, I'm Dr. Cruz, one of the residents. What brings you in today?
P: My daughter brought me. I just haven't been myself.
C: Tell me more about that.
O: Over the first few minutes she lets him talk, notes his mental state, and decides which areas to explore next.`,
 w:`The opening survey is drawn with the scouting symbol, a rectangle with rounded ends. It is neither a pure content rectangle nor a pure process circle.`},
{id:'fs11',t:'fs_slash',d:['fs_fullexp','fs_reentry','fs_overexp'],q:Q_FS,x:`O: As the resident leaves the depression region for family history, the supervisor marks the rectangle like this:
S: [Maj._Dep./2] -nat-> [Fam._Hx.]`,
 w:`Each slashed corner is about 25% of the needed data, so two slashes means half the region is unexplored and the trainee should return to it. Four would mean complete.`},
{id:'fs12',t:'fs_slash',d:['fs_fullexp','fs_reentry','fs_taskhand'],q:Q_FS2,x:`In a full 50-minute intake, a resident asks only how much the patient drinks and then moves to work history. She does not return to the topic. The supervisor judges that about a quarter of the needed substance data was covered.`,
 w:`The rectangle "Sub." gets one slashed corner, about 25% complete. Re-entry notation applies only if the dyad later returns to the region.`},
{id:'fs13',t:'fs_fullexp',d:['fs_slash','fs_overexp','fs_reentry'],q:Q_FS2,x:`In a 50-minute initial intake, a resident covers nearly all the criteria for a major depressive episode in a blended, conversational way before moving on.`,
 w:`Most criteria are expected in a classic intake, so the rectangle "Maj. Dep." gets all four corners slashed. A fifth slash would mean more than the task required.`},
{id:'fs14',t:'fs_fullexp',d:['fs_overexp','fs_slash','fs_taskhand'],q:Q_FS,x:`S: [GAD/4] -imp-> [Panic/1]`,
 w:`Four slashed corners means the region was completely expanded for the task at hand. Over-expansion would show a fifth or sixth slash.`},
{id:'fs15',t:'fs_overexp',d:['fs_fullexp','fs_taskhand','fs_slash'],q:Q_FS2,x:`In a 20-minute ER assessment, the resident works through every criterion for major depression one by one. There is little time left to explore the patient's suicidal ideation before the triage decision.`,
 w:`Gathering more than the ER task needed earns a fifth (possibly sixth) slash, marking over-expansion. Four slashes would mean the right amount for the task.`},
{id:'fs16',t:'fs_overexp',d:['fs_fullexp','fs_reentry','fs_slash'],q:Q_FS,x:`S: [Maj._Dep./6] -intro-> [SI/1]
O: The setting is a busy emergency room.`,
 w:`More than four slashes means more data was gathered than the task at hand required. Four would mean exactly complete.`},
{id:'fs17',t:'fs_taskhand',d:['fs_fullexp','fs_overexp','fs_slash'],q:Q_FS3,x:`Two residents cover the same handful of depressive symptoms, plus a careful look at severity and suicidal ideation. The supervisor gives the ER resident's rectangle four slashes and the clinic intake resident's only two.`,
 w:`Slashes are judged against the database needed for the specific task and setting, so identical coverage can be complete in the ER but half-done in a full intake.`},
{id:'fs18',t:'fs_taskhand',d:['fs_fullexp','fs_slash','fs_overexp'],q:Q_FS3,x:`P: Why did I get four slashes for depression? I skipped appetite and concentration.
O: The supervisor explains that in a 20-minute ER triage, severity and suicidal ideation were what mattered, and the resident covered those well.`,
 w:`Completeness depends on the task at hand. A four-slash rectangle is the result, but the principle behind it is the setting-specific standard.`},
{id:'fs19',t:'fs_reentry',d:['fs_slash','fs_overexp','fs_taskhand'],q:Q_FS3,x:`S: [Sub./1] -phan-> [Fam._Hx./3] -ref-> [Sub./4]
O: The resident asks why the second "Sub." box already had a slash when it was drawn.`,
 w:`When an incomplete region is re-entered, it is redrawn with its earlier slashes pre-marked, and slashes are added on exit. This is the notation for finishing a split expansion.`},
{id:'fs20',t:'fs_reentry',d:['fs_slash','fs_fullexp','fs_omitpattern'],q:Q_FS2,x:`Twenty minutes after leaving depression half-explored, the resident says, "Earlier you mentioned trouble sleeping. Let's come back to that." The supervisor reaches for her pen.`,
 w:`She draws a new "Maj. Dep." rectangle, immediately marks the two slashes it already had, and adds more on exit. Starting with no slashes would erase the earlier coverage.`},
{id:'fs21',t:'fs_omitpattern',d:['fs_phantomstring','deadzone','fs_overexp'],q:Q_FS,x:`O: A resident's maps from three intakes are laid side by side. Nearly every rectangle ends with only one or two corners slashed, and few are ever re-entered. Her write-ups are missing family and substance histories.`,
 w:`Many under-slashed rectangles make up the "bevy of incomplete expansions" pattern behind errors of omission. A dead zone is a time-allocation problem, best seen on a cross-sectional map.`},
{id:'fs22',t:'fs_omitpattern',d:['fs_phantomstring','fs_taskhand','split'],q:Q_FS,x:`O: Supervisor, pointing at the map: "Look how many boxes have only one or two corners slashed, and you never came back to any of them."`,
 w:`A whole map of unfinished, never-revisited regions is the incomplete-expansion pattern. A single split expansion is one region resumed later, which is acceptable once it gets finished.`},
{id:'fs23',t:'fs_phantomstring',d:['fs_omitpattern','gate_phantom','unguided'],q:Q_FS,x:`S: [OCD/2] -phan-> [SI/1] -phan-> [Fam._Hx./1] -phan-> [Legal_Hx./1]`,
 w:`A run of phantom gates is the pattern of overused abrupt transitions (a "Meet the Press" feel). A single phantom gate is one transition, not the habit shown across the map.`},
{id:'fs24',t:'fs_phantomstring',d:['gate_phantom','gate_implied','fs_omitpattern'],q:Q_FS2,x:`P: ...and my lola raised me after my parents left for work abroad.
C: Do you hear voices?
P: No.
C: Have you ever been arrested?`,
 w:`Two jumps in a row, with no cue, reference, or announcement, would appear on the map as a string of phantom gates. One phantom gate names a single transition. Implied gates link topically close regions.`},
{id:'fs25',t:'fs_circletter',d:['fs_counter','fs_longmap','fs_reentry'],q:Q_FS,x:`S: [Maj._Dep./4] -nat->@c [Sub./3]
O: Below the map: "Ⓒ 'When you can't sleep, do you ever use a drink to help?' Smooth natural gate into a sensitive topic."`,
 w:`A circled letter on the map keys a note below it, here recording the gate's exact wording. A counter setting would record when it happened.`},
{id:'fs26',t:'fs_circletter',d:['fs_counter','fs_crossmap','fs_videosup'],q:Q_FS2,x:`While mapping live, a supervisor wants to capture a resident's exact empathic statement and a moment of possible patient deceit to discuss afterward, without writing sentences across the map.`,
 w:`She places circled letters on the map and lists the matching notes below it. Minute marks show timing but don't capture what to discuss.`},
{id:'fs27',t:'fs_counter',d:['fs_circletter','fs_crossmap','fs_videosup'],q:Q_FS,x:`S: [Maj._Dep./4] -ref->@10:00 (Dynam.)
O: Teaching point below: "At 10:00, note good psychodynamic questioning."`,
 w:`The time noted beside the figure is a counter setting, used to jump to that segment in supervision. A circled letter would key a note rather than a time.`},
{id:'fs28',t:'fs_counter',d:['fs_circletter','fs_longmap','fs_crossmap'],q:Q_FS2,x:`P: Where exactly did I ask those negative questions about her drinking?
O: The supervisor wants the video segment to be easy to find during the supervision hour.`,
 w:`Noting the elapsed minutes or counter number (e.g., "15:10") on the map lets her cue the recording right there. A circled letter marks what to discuss, not where it is on the tape.`},
{id:'fs29',t:'fs_supershort',d:['fs_longmap','fs_videosup','fs_circletter'],q:Q_FS3,x:`During her own intake, a new resident keeps glancing down to draw rectangles, slashes, and arrows on her clipboard to track the topics she has covered. Her supervisor stops her afterward.`,
 w:`Facilic symbols are a supervisor's shorthand drawn while watching, then shared in supervision. They are not meant to be drawn by the interviewer during the interview.`},
{id:'fs30',t:'fs_supershort',d:['fs_longmap','fs_slash','fs_taskhand'],q:Q_FS3,x:`P: Should I mark the corner slashes myself as I interview, so you can see my coverage?
O: The supervisor says no. She will draw the map from behind the mirror and go over it with him right after the session.`,
 w:`The map is drawn by the supervisor and shared with the trainee, preferably immediately after the interview. It is not something the interviewer keeps during the interview.`},
{id:'fs31',t:'fs_videosup',d:['fs_longmap','fs_crossmap','fs_counter'],q:Q_FS3,x:`A supervisor watches a resident's recorded intake alone. She maps the flow, adds comments on engagement and validity techniques, and logs counter numbers. The next day she plays the numbered segments with the resident.`,
 w:`This is the video facilic supervision format: map alone first, then review selected segments together. The longitudinal map is one tool used within it.`},
{id:'fs32',t:'fs_videosup',d:['fs_supershort','fs_crossmap','fs_circletter'],q:Q_FS3,x:`P: You didn't flag minute 22, but I wasn't sure how I handled her tears there. Can we watch it?
O: During the recording review, the supervisor rewinds to that point.`,
 w:`In video facilic supervision the trainee may also ask to view segments the supervisor did not highlight. The map is the framework, not a limit on what gets discussed.`},

/* ---- wd cases ---- */
{id:'wd01',t:'wd_rawdata',d:['wd_norepeat','wd_stigmadx','wd_pertneg'],q:Q_WD,x:`O: HPI reads: "For the past month Mr. Bautista has been clearly manic and paranoid."`,
 w:`It violates the raw-data rule. The HPI is objective, so it should list the behaviors and leave labels such as "manic" for the formulation. Otherwise no reader can judge the label, and it invites a charge of diagnosis slapping.`},
{id:'wd02',t:'wd_rawdata',d:['wd_onepara','wd_norepeat','wd_hpistress'],q:Q_WD,x:`O: HPI reads: "Since late August, Jun has slept about 2 hours a night, talked rapidly and loudly, started three businesses in one week, and spent the family's savings on a motorcycle." The words "manic episode" first appear in the Narrative Summary.`,
 w:`It follows the raw-data rule: behavioral facts in the HPI, the clinical judgment in the formulation. The one-paragraph rule is about giving each diagnosis its own paragraph.`},
{id:'wd03',t:'wd_pertneg',d:['wd_rawdata','wd_nosurprise','wd_onepara'],q:Q_WD2,x:`A depressed patient's HPI documents her sleep, appetite, and anhedonia in detail. Nothing records whether she was asked about past manic symptoms. A year later, after a manic switch, a reviewer cannot tell whether bipolar disorder was ever considered.`,
 w:`Pertinent negatives (e.g., "denied racing thoughts, decreased need for sleep...") document that a diagnosis was looked for and ruled out. Without them, the chart cannot defend against a claim that it was missed.`},
{id:'wd04',t:'wd_pertneg',d:['wd_onepara','wd_nosurprise','wd_rawdata'],q:Q_WD,x:`O: The final HPI paragraph reads: "She denies panic attacks, obsessions, compulsions, binge eating or purging, hallucinations, and current alcohol or drug use."`,
 w:`It follows the guideline: a closing paragraph of miscellaneous pertinent negatives, meaning symptoms asked about and denied. The one-paragraph rule covers positive support for each diagnosis.`},
{id:'wd05',t:'wd_nosurprise',d:['wd_onepara','wd_pertneg','wd_selfreview'],q:Q_WD2,x:`A consultant reviewing a resident's note writes in the margin beside each HPI paragraph the diagnosis it supports: "MDD," "r/o GAD." At the DSM-5 list she finds "PTSD," with no paragraph supporting it, and flags it.`,
 w:`This is the no-surprises test, a quality-assurance check by the reader. A surprise diagnosis means a problem in documentation or formulation. One paragraph per diagnosis is the writing rule it checks.`},
{id:'wd06',t:'wd_nosurprise',d:['wd_onepara','wd_hpistress','wd_norepeat'],q:Q_WD2,x:`After reading only the HPI, a senior resident correctly predicts both diagnoses and the single rule-out that appear on the DSM-5 list at the end of the note.`,
 w:`Shea's easy test of a well-written HPI: an experienced reader finds no surprises at the DSM-5 listing.`},
{id:'wd07',t:'wd_onepara',d:['wd_nosurprise','wd_pertneg','wd_hpistress'],q:Q_WD,x:`O: HPI structure: paragraph 1, stressors. Paragraph 2, chronological depressive symptoms and past treatment. Paragraph 3, worry and tension symptoms (supports rule-out GAD). Paragraph 4, drinking pattern (supports rule-out alcohol use disorder). The DSM-5 list shows exactly those three.`,
 w:`It follows the writing rule: each diagnosis or rule-out gets its own paragraph of supporting symptoms. That is why such a note passes the no-surprises test.`},
{id:'wd08',t:'wd_onepara',d:['wd_pertneg','wd_hpistress','wd_rawdata'],q:Q_WD,x:`O: The differential lists major depressive disorder, rule-out social anxiety disorder, and rule-out cannabis use disorder. The HPI is a single long paragraph about depressive symptoms only.`,
 w:`It violates the rule that every diagnosis and rule-out has its own HPI paragraph of supporting data. The raw data for the two rule-outs is nowhere in the database.`},
{id:'wd09',t:'wd_hpistress',d:['wd_onepara','wd_ccquote','wd_rawdata'],q:Q_WD,x:`O: HPI opens: "Mrs. Garcia, a teacher, links her distress to her mother's stroke in May and caring for her at night. She sees herself as 'failing everyone.'" The next paragraph begins the chronology of her symptoms.`,
 w:`A brief opening paragraph on stressors and the patient's view of the problem gives the context for the symptoms that follow. Diagnosis-specific symptoms come after it.`},
{id:'wd10',t:'wd_hpistress',d:['wd_norepeat','wd_onepara','wd_selfreview'],q:Q_WD,x:`O: The HPI's first section runs a page and a half, recounting every argument with the in-laws over three years before any symptom is mentioned. The patient has a clear major depressive episode.`,
 w:`It violates the guideline to keep the stressor paragraph short, which Shea names as a spot where clinicians waste time. It should be expanded only when stressors, not a major disorder, are the main issue.`},
{id:'wd11',t:'wd_sihpi',d:['wd_riskreason','wd_protquote','wd_contract'],q:Q_WD,x:`O: HPI paragraph: "Two weeks ago, after losing his job, he thought of hanging himself and looked for a rope in the shed but stopped when his son came home. He reports no further planning since."`,
 w:`It follows the rule: recent ideation, planning, and behavior are described factually in the HPI, with no opinion about risk. The risk judgment and its reasoning belong in the formulation.`},
{id:'wd12',t:'wd_sihpi',d:['wd_riskreason','wd_rawdata','wd_protquote'],q:Q_WD,x:`O: HPI reads: "Patient had passing thoughts of death last week. Low risk, not a danger to self."`,
 w:`It violates the rule by putting a risk opinion in the objective HPI, and by giving no reasoning. The HPI describes what happened. The formulation or risk field states the judgment and explains it.`},
{id:'wd13',t:'wd_riskreason',d:['wd_sihpi','wd_contract','wd_consult'],q:Q_WD,x:`O: Narrative Summary reads: "Patient is not suicidal at present. For discharge home."`,
 w:`It violates the principle that a safety decision must carry its reasoning. Shea says stating the decision is not enough, because the soundness of the reasoning is what protects in court.`},
{id:'wd14',t:'wd_riskreason',d:['wd_protquote','wd_corrob','wd_sihpi'],q:Q_WD,x:`O: Formulation reads: "Despite moderate depression, Ms. Lim does not appear acutely suicidal, as evidenced by no past attempts, denial of current ideation, no substance use, her stated reasons for living (see MSE), and her eagerness to start therapy."`,
 w:`It follows the principle: the decision plus the evidence behind it. It refers back to the quoted deterrents in the MSE rather than being the quote itself.`},
{id:'wd15',t:'wd_protquote',d:['wd_riskreason','wd_contract','wd_ccquote'],q:Q_WD,x:`O: MSE reads: "Denies current suicidal ideation, stating, 'I want to see my daughter finish nursing school. I'm not going anywhere.'"`,
 w:`It records, in the patient's own words, a deterrent suggesting low risk, which the formulation can later cite. The reasoning itself belongs in the formulation.`},
{id:'wd16',t:'wd_protquote',d:['wd_corrob','wd_consult','wd_selfreview'],q:Q_WD2,x:`Months later, a covering resident reads in the intake: "'I could never do that to my two boys.'" She asks the patient whether his sons still feel like a reason to keep going. He says they no longer visit.`,
 w:`Quoting the patient's deterrents shows future clinicians what to recheck, and here it uncovered that a protective factor had weakened.`},
{id:'wd17',t:'wd_contract',d:['wd_riskreason','wd_protquote','wd_corrob'],q:Q_WD,x:`O: The entire safety section reads: "Patient made a safety contract with me."`,
 w:`It violates the guideline. If contracting is used as an assessment tool, the note must describe the behavioral signs of sincerity (eye contact, affect, interest in the plan, absence of nonverbal ambivalence), not just that a contract was made.`},
{id:'wd18',t:'wd_contract',d:['wd_corrob','wd_protquote','wd_consult'],q:Q_WD,x:`O: Note reads: "Safety contracting used as an assessment tool. Steady eye contact, firm handshake, genuine affect. He asked for the crisis line number and wrote it down. No nonverbal evidence of ambivalence or deceit."`,
 w:`It follows the guideline: it states the purpose and records the behavioral clues of sincerity. Corroborative contacts would record what outside informants said.`},
{id:'wd19',t:'wd_corrob',d:['wd_consult','wd_protquote','wd_contract'],q:Q_WD,x:`O: Note reads: "Called his mother, Aling Linda, who confirmed he has never attempted suicide and has not spoken of it. She agrees with the safety plan and will stay with him this week."`,
 w:`It documents a corroborative source: what she said supporting safety and truthfulness, and her agreement with the plan. Consultation would record a colleague reviewing the decision.`},
{id:'wd20',t:'wd_corrob',d:['wd_consult','wd_selfreview','wd_riskreason'],q:Q_WD2,x:`A resident phoned the patient's brother, who confirmed there were no past attempts and agreed the patient was safe at home. None of this appears in the note. When the chart is reviewed after an adverse event, the call cannot be shown to have happened.`,
 w:`Contacts with corroborative sources, and what they said in support of safety, should be documented. Consultation refers to colleagues, not family informants.`},
{id:'wd21',t:'wd_consult',d:['wd_corrob','wd_riskreason','wd_medconsent'],q:Q_WD,x:`O: Note reads: "Case discussed with Dr. Santos, on-call consultant, and with the patient's outpatient psychologist. Both agree with discharge home and clinic follow-up in 3 days."`,
 w:`It documents consultation: who was consulted and their agreement. Shea calls this probably the best defense against negligence. Corroborative contacts are informants such as family.`},
{id:'wd22',t:'wd_consult',d:['wd_corrob','wd_riskreason','wd_prompt'],q:Q_WD2,x:`At 2 a.m. a resident phones the consultant, who agrees with sending the patient home with family. The resident's note gives the decision and its reasoning, but not the call.`,
 w:`Consultation weakens markedly as a defense if it is not recorded. List everyone consulted and their agreement. The reasoning alone is not the same as documented consultation.`},
{id:'wd23',t:'wd_norepeat',d:['wd_rawdata','wd_onepara','wd_stigmadx'],q:Q_WD,x:`O: The Narrative Summary repeats, word for word, all the depressive symptoms from the HPI, then ends: "Impression: MDD."`,
 w:`It violates the guideline. The formulation should refer back to the HPI, not repeat it, and should explain why the diagnosis was given. Here the reasoning is missing and the symptoms are duplicated.`},
{id:'wd24',t:'wd_norepeat',d:['wd_hpistress','wd_stigmadx','wd_rawdata'],q:Q_WD,x:`O: Formulation opens: "Ms. Ramos is a 29-year-old single teacher referred by her school nurse. Her symptoms (see HPI) began weeks after typhoon damage to her home. I favor an adjustment disorder over a major depressive episode because her symptoms fall short in number and ease on days she is with family."`,
 w:`It follows the guideline: brief identification, the reason she came, and the reasoning for the diagnosis, with the symptoms referenced rather than repeated.`},
{id:'wd25',t:'wd_stigmadx',d:['wd_pertneg','wd_rawdata','wd_onepara'],q:Q_WD,x:`O: The DSM-5 list includes "Antisocial personality disorder." Neither the formulation nor any other section explains how it was arrived at. The patient's later disability claim is denied, citing the diagnosis.`,
 w:`It violates the guideline to explain diagnoses that carry stigma or legal or benefits implications, which leaves the clinician open to a charge of label slapping.`},
{id:'wd26',t:'wd_stigmadx',d:['wd_norepeat','wd_onepara','wd_riskreason'],q:Q_WD,x:`O: Formulation reads: "Borderline personality disorder is listed because of the long-standing pattern in the Social History: unstable, intense relationships since adolescence, chronic emptiness, and repeated self-cutting when she feels abandoned. These are present outside mood episodes."`,
 w:`It follows the guideline to explain carefully why a stigmatizing diagnosis was made. The general rule to explain rather than repeat applies to all diagnoses, but stigmatizing ones need this explicit justification.`},
{id:'wd27',t:'wd_medconsent',d:['wd_contract','wd_protquote','wd_consult'],q:Q_WD,x:`O: Plan reads: "Starting sertraline. Side effects, risks, and benefits discussed in detail. She understood and was interested in starting, saying, 'Sige, Doc, let's try it.'"`,
 w:`It follows the treatment-plan guideline for first-time prescribing: the discussion is documented, along with the patient's understanding and interest in her own words. The deterrent quote serves safety reasoning, not consent.`},
{id:'wd28',t:'wd_medconsent',d:['wd_consult','wd_riskreason','wd_norepeat'],q:Q_WD,x:`O: First prescription. The plan reads only: "Start fluoxetine daily. RTC 2 weeks." Weeks later the patient complains that no one told her about side effects.`,
 w:`It violates the guideline. When prescribing for the first time, document that side effects and benefits were discussed and that the patient understood and was willing to start.`},
{id:'wd29',t:'wd_ccquote',d:['wd_hpistress','wd_rawdata','wd_protquote'],q:Q_WD,x:`O: ID section reads: "Ramon Villanueva, 52, married, referred by Dr. Ocampo (RHU) for evaluation of sleep problems and low mood. Chief complaint: 'Doc, I lie awake every night thinking I failed my family.'"`,
 w:`It follows the ID-section guideline: demographics, referral source, reason for referral, and the chief complaint as a direct quote. The stressor paragraph opens the HPI, not the ID section.`},
{id:'wd30',t:'wd_ccquote',d:['wd_rawdata','wd_hpistress','wd_stigmadx'],q:Q_WD,x:`O: ID section reads: "Chief complaint: Psychosis, noncompliant with meds."`,
 w:`It violates the guideline that the chief complaint is a direct quotation from the patient. A clinical label here is not the patient's complaint, and it does not belong in the database.`},
{id:'wd31',t:'wd_prompt',d:['wd_notyping','wd_selfreview','wd_consult'],q:Q_WD2,x:`A resident saves six intakes to write up on Friday afternoon. Each one takes twice as long as expected, and she can't recall which patient described the voices.`,
 w:`Writing immediately after the interview can take half the time and keeps details fresh. A growing pile of late paperwork also feeds burnout.`},
{id:'wd32',t:'wd_prompt',d:['wd_notyping','wd_selfreview','wd_nosurprise'],q:Q_WD2,x:`The outpatient chief redesigns the resident schedule so that every 60-minute intake is followed by a protected 30-minute block for documentation.`,
 w:`This puts Shea's advice into practice: at least 30 minutes, right after the interview, to document while it is fresh. The no-typing rule concerns what happens during the interview itself.`},
{id:'wd33',t:'wd_notyping',d:['wd_prompt','wd_selfreview','wd_ccquote'],q:Q_WD2,x:`O: The resident types the full EHR note while the patient talks, eyes on the screen. Later, the supervisor watching the recording points out a long hesitation and averted gaze when the patient denied drinking, which the resident never saw.`,
 w:`Final notes shouldn't be typed during the interview. It disrupts engagement and makes nonverbal clues of hesitancy or deceit easy to miss. Prompt documentation means writing right after, not during.`},
{id:'wd34',t:'wd_notyping',d:['wd_prompt','wd_selfreview','wd_rawdata'],q:Q_WD2,x:`C: Write only what you need to jog your memory. A word or two, like "pills, sister's house." Keep your eyes on her, and build the note when she leaves.`,
 w:`The supervisor is teaching that rough notes should be minimal memory aids, with the final note written after the interview, not typed during it.`},
{id:'wd35',t:'wd_selfreview',d:['wd_nosurprise','wd_onepara','wd_prompt'],q:Q_WD2,x:`While dictating her HPI, a resident realizes she has almost nothing supporting the bipolar diagnosis she had assumed. She calls the patient's husband, learns the "highs" were brief reactions to good news, and revises her plan.`,
 w:`Writing for yourself turns the write-up into a review that can catch a diagnosis jumped to too early. The no-surprises test is the same check made by a later reader.`},
{id:'wd36',t:'wd_selfreview',d:['wd_pertneg','wd_nosurprise','wd_prompt'],q:Q_WD2,x:`Looking back over a month of her own write-ups, a resident notices that she never once recorded whether a blood relative had died by suicide. She adds it to her interview routine.`,
 w:`Reviewing your own documentation can reveal a training "blind spot" that recurs from patient to patient, one of the reasons Shea says the assessment is written for the clinician too.`}
);

/* Gate glyph recognition (Fig. AI.1): answers are the existing Ch. 4 gate terms, shown in the Facilic schematics domain. */
V.push(
{id:'fs33',t:'gate_spont',d:['gate_natural','gate_refer','gate_implied'],dom:'fs',q:Q_FSG,x:`S: [Maj._Dep./4] -spont-> [Sub./2]`,
 w:`The coiled line is Shea's symbol for a spontaneous gate: the patient brought up the new topic on their own. A natural gate is a plain double line.`},
{id:'fs34',t:'gate_natural',d:['gate_spont','gate_refer','gate_intro'],dom:'fs',q:Q_FSG,x:`S: [Fam._Hx./3] -nat-> [Soc._Hx./2]`,
 w:`Two parallel solid lines mark a natural gate: the clinician cued off the patient's last statement. A referred gate has a dashed upper line.`},
{id:'fs35',t:'gate_refer',d:['gate_natural','gate_implied','gate_phantom'],dom:'fs',q:Q_FSG,x:`S: [Med._Hx./4] -ref-> [Maj._Dep./1]`,
 w:`The dashed upper line is the referred gate: the clinician refers back to something the patient said earlier, not the last statement. A natural gate is drawn with two solid lines.`},
{id:'fs36',t:'gate_implied',d:['gate_refer','gate_obs','gate_natural'],dom:'fs',q:Q_FSG,x:`S: [GAD/4] -imp-> [Panic/2]`,
 w:`The bent, broken line is the implied gate: the new region was implied by the content, so the clinician moves there without a stated bridge. Referred and natural gates are drawn as paired lines.`},
{id:'fs37',t:'gate_phantom',d:['gate_intro','gate_obs','gate_implied'],dom:'fs',q:Q_FSG,x:`S: [Soc._Hx./2] -phan-> [SI/1]`,
 w:`A box with an X is the phantom gate: an abrupt jump with no cue, reference, or announcement. The introduced gate is the same box without the X.`},
{id:'fs38',t:'gate_intro',d:['gate_phantom','gate_obs','gate_spont'],dom:'fs',q:Q_FSG,x:`S: [Sub./4] -intro-> [Fam._Hx./1]`,
 w:`An empty box on the arrow is the introduced gate: the clinician announces the new topic ("I'd like to ask about your family now"). With an X it would be a phantom gate.`},
{id:'fs39',t:'gate_obs',d:['gate_spont','gate_intro','gate_natural'],dom:'fs',q:Q_FSG,x:`S: [Maj._Dep./3] -obs-> (Transform.)`,
 w:`The oval with a dot, an eye, is the observed gate: the clinician moves because of something observed, such as tears or a clenched jaw. The coil would mean the patient raised the topic.`}
);
