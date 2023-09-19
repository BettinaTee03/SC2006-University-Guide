import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

function Autosearch(){
	return(
		<Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
			mt: 10
    }}
  >
    <Autocomplete
      id="auto-highlight"
      autoHighlight
      options={unidata}
      getOptionLabel={(option) => option.course_name}
      sx={{ width: 600 }}
      renderInput={(params) => (
        <TextField {...params} label="Courses" variant="standard" />
      )}
    />
  </Box>
	);
}

const unidata=[
  {
      "course_name": "Bachelor in Humanities and Sciences",
      "description": "Students will be taught writing, critical thinking, numeracy and inter-disciplinary skills to synthesize and integrate knowledge across disciplines. The programme covers essential concepts and research techniques critical to the spectrum of disciplines within and beyond biological and biomedical fields.  The programme covers fundamental mathematical concepts as well as mathematical methods and problem-solving techniques applied in science and engineering.  The programme prepares students for careers as qualified chemists by covering major chemistry fields in analytical, inorganic, organic and physical chemistry.  The multidisciplinary programme combines mathematics, finance and computing for students who wish to become professionals in the finance industry. The programme provides a solid foundation covering core topics such as atomic and nuclear physics, nanophysics, quantum mechanics and thermodynamics.  The programme prepares students for the data science sector with skills to solve complex data-related problems using novel analytical tools and methods like AI.  Students will learn how to apply mathematical principles to data collection, analysis and presentation to gain insights crucial for data-driven decision-making. Diploma holders are eligible for up to 20MCs of module exemptions. A-Level or Diploma holders may take placement tests for MA2001 and MA2002.",
      "school_name": "National University of Singapore",
      "college_name": "College of Humanities and Sciences",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Accountancy",
      "description": "We have the most established and well-regarded accountancy programmes in Singapore and the region, with a long tradition of training professional accountants for leadership roles as in accounting firms, public and private companies.",
      "school_name": "Nanyang Technological University",
      "college_name": "Nanyang Business School",
      "course_type": "Full-time",
      "course_duration": "3 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Accountancy",
      "description": "This programme trains students to be qualified accountants. The areas of study include accounting, assurance and attestation, law, taxation and IT. It is recognised by the ACRA, and accredited by The Singapore Accountancy Commission for direct entry to the Singapore Qualification Programme.",
      "school_name": "Singapore University of Social Sciences",
      "college_name": "School of Business",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Accountancy",
      "description": "The programme provides a holistic education that is broad-based with a strong accounting core, covering business, technology, entrepreneurship, leadership skills, communications and social responsibility. All students are guaranteed a Second Major, which they can choose from any School across SMU.  Exemptions are also possible and can be calculated using the SMU Exemptions Calculator.",
      "school_name": "Singapore Management University",
      "college_name": "School of Accountancy",
      "course_type": "Full-time",
      "course_duration": "3 - 4 years (Direct Meritorious Honours)"
  },
  {
      "course_name": "Bachelor of Accountancy with Honours",
      "description": "The Bachelor of Accountancy with Honours is a three-year, direct honours degree programme designed through a series of consultations with various industry heads, accreditation bodies, and external faculty consultants. This degree programme will hone students\u2019 critical and analytical skills in addition to the requisite knowledge needed for a professional accounting career in commerce, industry, government or public practice. Graduates will be specialists with deep skill-sets ready for the accounting sector.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Arts (Double Major/Education)",
      "description": "The Double Major programmes are positioned to integrate the best of an academic degree with a good foundation in the field of education to produce graduates with the knowledge and skills to excel in careers both in education and education-related fields and beyond.",
      "school_name": "Nanyang Technological University",
      "college_name": "National Institute of Education",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Arts in Architecture",
      "description": "The programme is a preeminent four-year Honours degree programme that serves as the core foundation for concurrent Master programmes offered by NUS Architecture.  The B.A. (Arch) champions design excellence through studio research, exploration, and making. The fundamental skills of drawing, model-making and representation are complemented by an inspiring and liberal arts-based curriculum comprising architectural history, theory, tectonics as well as systems and technologies, in the first three years of study. An extensive range of issues drive studio research topics, promoting a development of skills necessary for students to take on complex issues of the built environment. Our students are enmeshed directly in the opportunities, complexities and challenges of architecture while benefiting from the research and learning environments of a liebrals arts education at this top research university in Asia. Holders of Polytechnic Diplomas may be granted APCs up to a maximum of 40 MCs.",
      "school_name": "National University of Singapore",
      "college_name": "School of Design and Environment",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Arts in Chinese",
      "description": "Chinese is a four-year direct honours programme which provides a concrete foundation in both classical and modern Chinese literature, a deeper understanding of Chinese language, and a broader perspective on Modern China and the Chinese Diaspora in Southeast Asia. The programme aims to equip students with multidisciplinary research skills and bilingual capabilities. We have strong and active interests in Modern Chinese Literature, Chinese Language, and especially the Chinese Diaspora in Southeast Asia. The Minor in Translation is another unique programme open to all NTU students who are interested in receiving practical and professional trainings in translation between Chinese and English. We also partnered the National Arts Council to run a Chinese creative writing residencies programme. Critically acclaimed writers, both local and international, will work on a literary project of their own and teach creative writing courses in NTU. Eminent writers who have been in residence include Yeng Pway-Ngon (Singapore) and Su Wei-Chen (Taiwan).",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in Chinese and English",
      "description": "During this four-year degree programme, undergraduates will read both English (ELH) and Chinese (CHIN), benefiting from the expertise and resources of the two disciplines from the School of Humanities (SoH). For English, students will focus both on traditional historical periods and on contemporary innovative approaches to the subject. Specialisations offered include all the major literary periods, Singaporean and Asian literatures, critical and literary theory, cultural studies, film studies, drama, postmodernism, and gender studies. Combined with the Chinese component of the programme, students will study both classical and modern Chinese literature, to develop a deeper understanding of Chinese language, and a broader perspective on Chinese history and thought, modern China and the Chinese diaspora in Southeast Asia. The programme aims to equip students with multidisciplinary research skills and bilingual capabilities.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in Chinese and Linguistics and Multilingual Studies",
      "description": "During this four-year degree programme, undergraduates will read both Linguistics and Multilingual Studies (LMS) and Chinese (CHN), benefiting from the expertise and resources of both Programmes within the School of Humanities (SoH). For Chinese, students will study both classical and modern Chinese literature, a deeper understanding of Chinese language, and a broader perspective on Modern China and the Chinese diaspora in Southeast Asia. The programme aims to equip students with multidisciplinary research skills and bilingual capabilities. The Linguistics and Multilingual Studies curriculum allows students to explore the many interesting facets of language and communication, from the properties of speech sounds to grammatical and discourse structure, from children\u2019s language development to communication in bilingual and multilingual societies.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in English",
      "description": "The BA (Hons) in English combines the traditional core elements of the British literary canon with comprehensive offerings of Asian literature and culture, new literatures in English and film and theatre studies, as well as incorporating contemporary literary and cultural studies. While the degree retains canonical core elements, particularly in the Period Studies category, it also reflects a breadth of interests that is relevant both regionally and globally, and embraces many of the key areas that comprise contemporary literary studies. In addition, the degree is structured to allow the possibility of a range of specialisations within the degree itself. As such, once a student fulfils the basic requirements of the degree, they are then entitled to specialise exclusively, if they wish, in any of the specific categories.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in English Literature and Art History",
      "description": "During this four-year degree programme, undergraduates will read both English Literature (ELH) and Art History (AH). For English Literature, students focus both on traditional historical periods and on contemporary innovative approaches to the subject. The Art History curriculum aims to equip students with a thorough knowledge and critical awareness of the global histories of art, culture and heritage.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in English and History",
      "description": "During this four-year degree programme, undergraduates will read both English Literature (ELH) and History (HIST), benefiting from the expertise and resources of the two disciplines from the School of Humanities (SoH). For English Literature, students will focus both on traditional historical periods and on contemporary innovative approaches to the subject. Specialisations offered include all the major literary periods, Singaporean and Asian literatures, critical and literary theory, cultural studies, film studies, drama, postmodernism, and gender studies. The History component of the program seeks to train students to not only think critically but also to apply interdisciplinary methods to identify and address contemporary problems from historical perspectives. History graduates will master the secondary literature in their chosen areas of study, engage in independent research, exercise critical judgment about the texts that they encounter, and communicate their findings in a well-reasoned and scholarly manner.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in English and Philosophy",
      "description": "During this four-year degree programme, undergraduates will read both English Literature (ELH) and Philosophy (PHIL), benefiting from the expertise and resources of the two disciplines from the School of Humanities (SoH). For English Literature, students will focus both on traditional historical periods and on contemporary innovative approaches to the subject. Specialisations offered include all the major literary periods, Singaporean and Asian literatures, critical and literary theory, cultural studies, film studies, drama, postmodernism, and gender studies. The Philosophy curriculum allows students to explore, in a rigorous, systematic, and critical manner, fundamental problems about the nature of knowledge, reality, existence, mind, language, science, and morality, the curriculum includes a solid foundation in both eastern and western traditions of philosophy, and prepares students for the application of philosophy to the challenges of modern society.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in History",
      "description": "The History Programme aims to be one of the leading centres of historical scholarship on modern and contemporary Asia. It is a unique institution that seeks to train students to not only think critically but also to apply interdisciplinary methods to identify and address contemporary problems from historical perspectives. The BA (Honours) programme was structured to equip students with the breadth of knowledge about major historical subjects. It further enables students to concentrate their studies on what most appeals to them as they advance in their coursework. In addition, the undergraduate programme cultivates interdisciplinarity. All of the training will culminate in the final year research project, where students showcase their capacities to conduct independent research and advance an argument persuasively.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in History and Chinese",
      "description": "During this four-year degree programme, undergraduates will read both Chinese Studies and history, benefiting from the expertise and resources of both programmes. The History Programme seeks to train students to not only think critically but also to apply interdisciplinary methods to identify and address contemporary problems from historical perspectives. History graduates will master the secondary literature in their chosen areas of study, engage in independent research, exercise critical judgment about the texts that they encounter, and communicate their findings in a well-reasoned and scholarly manner. For Chinese, students will study both classical and modern Chinese literature, a deeper understanding of Chinese language, and a broader perspective on Chinese history and thought, modern China and the Chinese diaspora in Southeast Asia. The programme aims to equip students with multidisciplinary research skills and bilingual capabilities.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in History and Linguistics and Multilingual Studies",
      "description": "During this four-year degree programme, undergraduates will read both LMS and history, benefiting from the expertise and resources of both programmes. The History Programme seeks to train students to not only think critically but also to apply interdisciplinary methods to identify and address contemporary problems from historical perspectives. History graduates will master the secondary literature in their chosen areas of study, engage in independent research, exercise critical judgment about the texts that they encounter, and communicate their findings in a well-reasoned and scholarly manner. The Linguistics and Multilingual Studies curriculum allows students to explore the many interesting facets of language and communication, from the properties of speech sounds to grammatical and discourse structure, from children\u2019s language development to communication in bilingual and multilingual societies.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in Industrial Design",
      "description": "The programme is a four-year full-time undergraduate honours programme by coursework.It exposes students to projects with industry collaborators, and offers students projects which are multidisciplinary and self-driven in nature, where they can explore the potential of design across different fields. Students learn fundamental design knowledge, skills and capabilities in the first 3 semesters (Design Fundamentals), put these into practice in the next 4 semesters through a series of conceptual and industry projects (Design Platforms), and finally demonstrate their proficiency with a thesis project in the final year (Final Year Thesis). Polytechnic applicants from Cohort AY2021/2022 onwards will have to start from Year 1 of the BA (Industrial Design) (Hons) programme, even for applicants that have graduated from a design program. While students will continue to be awarded 20 MCs of elective space APCs, the additional 20 of APC from core modules required for direct entry to the 2nd year will only be exceptionally granted on a case by case basis, based on the placement test.",
      "school_name": "National University of Singapore",
      "college_name": "School of Design and Environment",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Arts in Linguistics and Multilingual Studies",
      "description": "As one of the best-known examples of a modern, vibrant and successful multilingual society, Singapore is uniquely positioned to promote academic studies of language and multilingualism. As no other tertiary institution in Singapore offers such an undergraduate programme, the Linguistics and Multilingual Studies (LMS) Programme at NTU is well placed to take on this challenge.The LMS curriculum allows students to explore the many interesting facets of language and communication, from the properties of speech sounds to grammatical and discourse structure, from children's language development to communication in bilingual and multilingual societies. It encompasses a very wide range of topics: how a finite inventory of basic linguistic units is deployed to express an infinite variety of meanings, how we create meaning in interaction with others, how the bilingual and multilingual mind is structured, and how technology impacts upon people's everyday use of language, to mention just a few.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in Linguistics and Multilingual Studies and English",
      "description": "During this four-year degree programme, undergraduates will read both English Literature (ELH) and Linguistics and Multilingual Studies (LMS), benefiting from the expertise and resources of the two disciplines from the School of Humanities (SoH). The Linguistics and Multilingual Studies component of the curriculum allows students to explore the many interesting facets of language and communication, from the properties of speech sounds to grammatical and discourse structure, from children\u2019s language development to communication in bilingual and multilingual societies. For English Literature, students will focus both on traditional historical periods and on contemporary innovative approaches to the subject. Specialisations offered include all the major literary periods, Singaporean and Asian literatures, critical and literary theory, cultural studies, film studies, drama, postmodernism, and gender studies.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in Linguistics and Multilingual Studies and Philosophy",
      "description": "During this four-year degree programme, undergraduates will read both Linguistics and Multilingual Studies (LMS) and Philosophy (PHIL), benefiting from the expertise and resources of both Programmes within the School of Humanities(SoH). The Linguistics and Multilingual Studies curriculum allows students to explore the many interesting facets of language and communication, from the properties of speech sounds to grammatical and discourse structure, from children\u2019s language development to communication in bilingual and multilingual societies. The Philosophy curriculum allows students to explore, in a rigorous, systematic, and critical manner, fundamental problems about the nature of knowledge, reality, existence, mind, language, science, and morality, the curriculum includes a solid foundation in both eastern and western traditions of philosophy, and prepares students for the application of philosophy to the challenges of modern society.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in Philosophy",
      "description": "As an academic discipline, philosophy is concerned with the study of fundamental problems, such as those about the nature of knowledge, reality, existence, mind, language, science, and morality. It involves the broad and systematic critical questioning of the foundations underlying other disciplines.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in Philosophy and Chinese",
      "description": "During this four-year degree programme, undergraduates will read both Chinese (CHN) and Philosophy (PHIL), benefiting from the expertise and resources of the two disciplines from the School of Humanities (SoH). The Philosophy curriculum allows students to explore, in a rigorous, systematic, and critical manner, fundamental problems about the nature of knowledge, reality, existence, mind, language, science, and morality, the curriculum includes a solid foundation in both eastern and western traditions of philosophy, and prepares students for the application of philosophy to the challenges of modern society. For Chinese, students will study both classical and modern Chinese literature, a deeper understanding of Chinese language, and a broader perspective on Chinese history and thought, modern China and the Chinese diaspora in Southeast Asia. The programme aims to equip students with multidisciplinary research skills and bilingual capabilities.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in Philosophy and History",
      "description": "During this four-year degree programme, undergraduates will read both philosophy and history, benefiting from the expertise and resources of both programmes. The Philosophy curriculum allows students to explore, in a rigorous, systematic, and critical manner, fundamental problems about the nature of knowledge, reality, existence, mind, language, science, and morality. The curriculum includes a solid foundation in both eastern and western traditions of philosophy, and prepares students for the application of philosophy to the challenges of modern society. The History Programme seeks to train students to not only think critically but also to apply interdisciplinary methods to identify and address contemporary problems from historical perspectives. History graduates will master the secondary literature in their chosen areas of study, engage in independent research, exercise critical judgment about the texts that they encounter, and communicate their findings in a well-reasoned and scholarly manner.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in Philosophy, Politics, and Economics",
      "description": "This course aims to develop students\u2019 critical, applied and strategic thinking skills to analyse situations from multiple perspectives and to develop solutions. Diploma holders may be eligible for up to 20MCs of module exemptions.",
      "school_name": "National University of Singapore",
      "college_name": "Faculty of Arts and Social Sciences",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Arts in Psychology and Linguistics and Multilingual Studies",
      "description": "During this four-year degree programme, undergraduates will read both their majors in both Linguistics and Multilingual Studies and Psychology, benefiting from the expertise and resources of both the School of Humanities(SoH) and the School of Social Sciences(SSS). The Psychology curriculum offers rigorous training to students in understanding human emotion, cognition and behaviours using scientific methods. The goals of our program focus on fostering critical thinking, methodological and quantitative reasoning skills. Students will complete a wide range of courses including but not limited to abnormal psychology, biopsychology, clinical psychology, cognitive neuroscience, developmental psychology, personality and social psychology. The Linguistics and Multilingual Studies curriculum allows students to explore the many interesting facets of language and communication, from the properties of speech sounds to grammatical and discourse structure, from children's language development to communication in bilingual and multilingual societies.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Humanities",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Arts in User Experience and Game Design",
      "description": "The Bachelor of Arts in User Experience and Game Design is a multidisciplinary degree that combines coursework in user experience design theory, the humanities, and social sciences to equip you with the skills to create meaningful and engaging interactive experiences.  Students learn about the artistic and narrative principles that make interactive experiences both intuitive and compelling, as well as the tools and processes that professional designers use to implement, test and refine their ideas in a real-world production environment. The result is a skilled designer who has a deeper knowledge of how writing, art, and the social sciences all come into play when creating games, interfaces, and other interactive experiences.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "DigiPen Institute of Technology Singapore",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Business",
      "description": "Our business degree programme is widely known for its professional orientation and innovative curriculum. Guided by a pragmatic, real-world focus, the programme offers seven specialisations that are continuously updated through interactions with employers and statutory boards.",
      "school_name": "Nanyang Technological University",
      "college_name": "Nanyang Business School",
      "course_type": "Full-time",
      "course_duration": "3 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Business Administration",
      "description": "A broad-based, in-depth business management degree where students acquire career-readiness skills to become actualised business leaders thriving in the marketplace. Diploma holders may be eligible for up to 20 MCs of exemption that would count towards the Unrestricted Electives. More information can be found here.",
      "school_name": "National University of Singapore",
      "college_name": "Business School",
      "course_type": "Full-time",
      "course_duration": "3 Years (Bachelor) 4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Business Administration (Accountancy)",
      "description": "A full-fledged rigorous and versatile accountancy programme, complemented with a strong business management foundation that grooms students for the profession. Diploma holders may be eligible for up to 20 MCs of exemption that would count towards the Unrestricted Electives. More information can be found here.",
      "school_name": "National University of Singapore",
      "college_name": "Business School",
      "course_type": "Full-time",
      "course_duration": "3 Years (Bachelor) 4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Business Administration in Food Business Management, Baking and Pastry Arts",
      "description": "Presented by the world leader in culinary education, the BBA Food Business Management (Baking and Pastry Arts) programme will provide students with an in-depth understanding of the baking and pastry world and valuable hands-on bakeshop experience.  Expert pastry chefs and instructors will help undergraduates learn baking and cooking methods, gain leadership skills and acquire valuable knowledge about the business that is relevant to a wide variety of food careers. Offering the same proven curriculum the college delivers at its United States campuses, the programme builds students\u2019 understanding and command of bread, cake, and pastry production; business skills; and the catering industry. Covering advanced areas such as revenue management and marketing for catering and hospitality businesses, students will be well-prepared to become valued, forward-thinking professionals wherever they go in the food world.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "The Culinary Institute of America",
      "course_type": "Full-time",
      "course_duration": "2 years"
  },
  {
      "course_name": "Bachelor of Business Administration in Food Business Management, Culinary Arts",
      "description": "Offering the proven curriculum the CIA delivers at its United States campuses, The Culinary Institute of America's Bachelor of Business Administration (BBA) in Food Business Management will build students' command of global product knowledge, business skills, and in-depth understanding of the culinary and catering industries. The programme will also cover more advanced areas of study such as revenue management and marketing for the food service and hospitality industries. Throughout the programme, theoretical components of the programme such as business theory and language lessons will be balanced with the honing of culinary and service skills through hands-on learning and projects in the state-of-the-art kitchens and public restaurants at the CIA's Singapore campus.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "The Culinary Institute of America",
      "course_type": "Full-time",
      "course_duration": "2 years"
  },
  {
      "course_name": "Bachelor of Business Management",
      "description": "The programme trains students to become confident business leaders who can positively impact their workplace and society. Students are prepared for these roles with a broad-based curriculum and an interactive pedagogy through small class sizes. Students will experience a transformative and innovative learning environment. All students are guaranteed a Second Major, which they can choose from any School across SMU.  Exemptions are also possible and can be calculated using the SMU Exemptions Calculator.",
      "school_name": "Singapore Management University",
      "college_name": "Lee Kong Chian School of Business",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Communciation Studies with a Second Major in Governance and International Relations",
      "description": "WKWSCI students have the flexibility to specialise in different tracks or develop as broad-based communication graduates. Available during admission, students can opt to study both Communication and Governance and International Relations, and graduate with a balance of practical and conceptual skills.",
      "school_name": "Nanyang Technological University",
      "college_name": "Wee Kim Wee School of Communication and Information",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Communication Studies",
      "description": "WKWSCI students choose to major in Strategic Communication, Broadcast Media & Cinema Studies, Data Science and Media Studies and/or in Journalism and Media Policies. Students have the flexibility to specialise in different tracks or develop as broad-based communication graduates.",
      "school_name": "Nanyang Technological University",
      "college_name": "Wee Kim Wee School of Communication and Information",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Communication Studies with a Second Major in Business",
      "description": "WKWSCI students have the flexibility to specialise in different tracks or develop as broad-based communication graduates. Available during admission, students can opt to study both Communication and Business, and graduate with a balance of practical and conceptual skills.",
      "school_name": "Nanyang Technological University",
      "college_name": "Wee Kim Wee School of Communication and Information",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Computing in Computer Science",
      "description": "The Bachelor of Computing (Honours) in Computer Science or BComp (CS) programme aims to nurture students for a rewarding computing career in various industry sectors. Suitable for those who love hands-on work and keen to apply computing technologies to solve real-world problems, the programme will equip students with the critical knowledge and capacity to take on the world with confidence.  At the time of graduation, students are expected to demonstrate:  Strong knowledge of computer science foundations and fundamentals, including (a) familiarity with common computer science themes and principles, (b) high-level understanding of systems as a whole, (c) understanding of the theoretical underpinnings of computer science and their influences in practice. In-depth knowledge in one or more computer science specialisations.  Individual competence in applying sound principles and rigorous thinking to (a) analyse an application problem, (b) understand user\u2019s requirement, (c) formulate the problem in terms of computation requirements, (d) conceive novel solution ideas, (e) design appropriate solutions that meet the requirements, (f) implement the solution, (g) evaluate the effectiveness of the solution.  Strong communication skills and ability to work with, and contribute to, a team to bring a range of technologies together to develop computer systems and solutions.  Ability to engage in continuous professional development.  Understanding of the responsibilities of an IT professional and the ethical, social, and legal issues related to computing. Diploma holders may refer to module exemption policy here.",
      "school_name": "National University of Singapore",
      "college_name": "School of Computing",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Computing in Information Security",
      "description": "The Bachelor of Computing in Information Security aims to:  To provide a broad-based, inter-disciplinary information security undergraduate programme within NUS. To contribute to the national focus on growing the pool of cyber security professionals in Singapore. To produce graduates who are able to understand information security issues and practices from both technical and organisational points of view.  Graduates of this programme are expected to have possible career choices as software engineers, systems administrators, malware researchers, security analyst, cybersecurity incident responder, and security consultant. They are expected to find employment in industries that deal with sensitive information (e.g., banks, insurance, defence), government organisations, and firms that provide security consultation/systems/services.  This programme enables students to attain, by the time of graduation:  Strong knowledge of computer science foundations and fundamentals, including (a) familiarity with common computer science themes and principles, (b) high-level understanding of systems as a whole, (c) understanding of the theoretical underpinnings of computer science and their influences in practice. An ability to design, implement, and evaluate a computer-based system, process, components, or program to meet the security needs.  An understanding of the processes and challenges that support the delivery and management of information security in an organisation.  An ability to function effectively in teams to accomplish a common goal.  An understanding of professional, ethical, legal, security, and social issues and responsibilities. An ability to communicate effectively with a range of audiences.  An ability to analyze the local and global impact of computing on individuals, organisations, and society. Recognition of the need for and an ability to engage in continuing professional development.  An ability to use the current techniques, skills, and tools necessary for information security practice. Diploma holders may refer to module exemption policy here.",
      "school_name": "National University of Singapore",
      "college_name": "School of Computing",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Computing in Information Systems",
      "description": "The four-year Bachelor of Computing (Information Systems) programme provides a stimulating education that equips students with the ability to integrate infocomm technology fundamentals with domain expertise to develop innovative solutions and implement digital tramsformation initiatives for organisations. Learning through projects and case studies that are aligned with industry best practices, students will develop an in-depth understanding of the strategic exploitation of infocomm technology in emerging organisational forms. Students become proficient in the design and development of infocomm solutions and the management of infocomm projects. Diploma holders may refer to module exemption policy here.",
      "school_name": "National University of Singapore",
      "college_name": "School of Computing",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Dental Surgery",
      "description": "The Faculty of Dentistry offers a four-year full-time undergraduate course leading to the Bachelor of Dental Surgery (BDS) degree. Students who consistently perform well in their professional examinations across the four years may be eligible for the BDS (Honours) degree.",
      "school_name": "National University of Singapore",
      "college_name": "Faculty of Dentistry",
      "course_type": "Full-time",
      "course_duration": "4 Years"
  },
  {
      "course_name": "Bachelor of Early Childhood Education with Minor",
      "description": "This programme is Singapore\u2019s only full-time degree in ECE, and prepares students for entry into the early childhood education profession as certified teachers for kindergartens and child care centres. It is open to all applicants regardless of whether they have prior early childhood qualification. Applicants with a prior 3-year full-time polytechnic early childhood diploma qualification with CGPA 3.5 and above could qualify for a 3-year track. Applicants who are offered a place in SUSS's full-time Bachelor of Early Childhood Education with Minor programme would need to be certified medically fit for study and to work with children by a certified medical doctor according to ECDA's medical requirements for pre-school teachers.",
      "school_name": "Singapore University of Social Sciences",
      "college_name": "S R Nathan School of Human Development",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineer (Aerospace Engineering)",
      "description": "This programme is the first full-fledged aerospace engineering degree programme in Singapore. Through this programme, you will develop knowledge in engineering disciplines such as aerodynamics, propulsion, flight dynamics, aircraft structures, autonomous systems, and manufacturing.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Mechanical and Aerospace Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Aerospace Engineering) with a Second Major in Entrepreneurship",
      "description": "On top of their engineering major, students will acquire broadened understanding of enterprise and innovation, and hands-on experience in technopreneurship through experiential learning and a 20-week local/overseas internship with startups, venture capital firms, or other entrepreneurship-related organisations.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Mechanical and Aerospace Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Bioengineering) with a Second Major in Data Analytics",
      "description": "Students can take advantage of their technical knowledge and training in their engineering major to integrate applications in data analytics. This expands their career options after graduation and ramp up their employability.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Bioengineering) with a Second Major in Entrepreneurship",
      "description": "On top of their engineering major, students will acquire broadened understanding of enterprise and innovation, and hands-on experience in technopreneurship through experiential learning and a 20-week internship with startups, venture capital firms, or other entrepreneurship-related organisations.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Bioengineering) with a Second Major in Food Science and Technology",
      "description": "Students will be selected to join the FST from the 2nd year of their BEng/BSc programmes. 5 core courses of this: Food Chemistry, Food Microbiology, Food Process Engineering and Quality System Operations will be taught by the faculties from Wageningen University with coordinators at NTU.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Bioengineering) with a Second Major in Pharmaceutical Engineering",
      "description": "Bioengineering focuses on integral aspects of biomolecular and pharmaceutical engineering processes. Integrated with this second major, students will receive in-depth training in the development and manufacturing of pharmaceutical drugs to produce high-value biological-based therapeutics.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Chemical and Biomolecular Engineering) with a Second Major in Entrepreneurship",
      "description": "On top of their engineering major, students will acquire broadened understanding of enterprise and innovation, and hands-on experience in technopreneurship through experiential learning and a 20-week internship with startups, venture capital firms, or other entrepreneurship-related organisations.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Computer Engineering) with Second Major in Data Analytics",
      "description": "Students can take advantage of their technical knowledge and training in their engineering majors to integrate applications in data analytics. This will expand their career options after graduation and ramp up their employability.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Computer Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Computer Engineering) with Second Major in Entrepreneurship",
      "description": "Students will acquire broadened understanding of enterprise and innovation, and hands-on experience in technopreneurship through experiential learning and a 20-week local/overseas internship with startups, venture capital firms, or other entrepreneurship-related organisations.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Computer Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Computer Science) with Second Major in Business",
      "description": "This programme is designed for candidates who enjoy a challenging academic programme that combines the technical, hard skills of Engineering with the soft skills of management and leadership inherent in Business studies.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Computer Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Aerospace Engineering) with a Second Major in Data Analytics",
      "description": "Students can take advantage of their technical knowledge and training in their engineering major to integrate applications in data analytics. This expands their career options after graduation and ramp up their employability.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Mechanical and Aerospace Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Aerospace Engineering)with a Second Major in Business",
      "description": "Be equipped with both engineering and business knowledge, as well as competencies relevant for the global marketplace. Acquire a distinct competitive advantage over your peersa and enjoy better market value, career options, opportunities and mobility across the full breadth of the job market.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Mechanical and Aerospace Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Bioengineering)",
      "description": "The BIE curriculum blends modern biological principles with advanced engineering methods in electronics, materials, mechanics, biocomputing and informatics to train high standard engineers for biomedical and biotechnology industries as well as healthcare and clinical services.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Bioengineering) with a Second Major in Business",
      "description": "Be equipped with both engineering and business knowledge, as well as competencies relevant for the global marketplace. Acquire a distinct competitive advantage over your peersa and enjoy better market value, career options, opportunities and mobility across the full breadth of the job market.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Chemical and Biomolecular Engineering)",
      "description": "Chemical and Biomolecular Engineering is a discipline to apply principles of chemistry, physics, mathematics and biology to make valuable products in an economic and safe manner. Chemical engineers are involved in the manufacturing of chemicals, food, pharmaceuticals, and many other products.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Chemical and Biomolecular Engineering) with a Second Major in Food Science and Technology",
      "description": "Students will be selected to join the FST from the 2nd year of their BEng/BSc programmes. 5 core courses of this: Food Chemistry, Food Microbiology, Food Process Engineering and Quality System Operations will be taught by the faculties from Wageningen University with coordinators at NTU.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Chemical and Biomolecular Engineering)with a Second Major in Data Analytics",
      "description": "Students can take advantage of their technical knowledge and training in their engineering major to integrate applications in data analytics. This expands their career options after graduation and ramp up their employability.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Civil)",
      "description": "A full-fledged civil engineering (Hons) degree programme, which is designed to prepare graduates for career opportunities in the built environment sector. A well-rounded curriculum embedded with extensive internship and hands-on opportunities equip graduates with future-ready skills. Poly students with relevant diploma are eligible to admit directly to Year 2 for this 4 years direct honours programme.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Civil) with a Second Major in Business",
      "description": "Be equipped with both engineering and business knowledge, as well as competencies relevant for the global marketplace. Acquire a distinct competitive advantage over your peersa and enjoy better market value, career options, opportunities and mobility across the full breadth of the job market.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Civil) with a Second Major in Data Analytics",
      "description": "Students can take advantage of their technical knowledge and training in their engineering major to integrate applications in data analytics. This expands their career options after graduation and ramp up their employability.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Civil) with a Second Major in Entrepreneurship",
      "description": "On top of their engineering major, students will acquire broadened understanding of enterprise and innovation, and hands-on experience in technopreneurship through experiential learning and a 20-week local/overseas internship with startups, venture capital firms, or other entrepreneurship-related organisations.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Civil) with a Second Major in Society and Urban Systems",
      "description": "The curriculum encompasses the social science aspects of urban planning and policy-making while preserving the strong civil engineering foundation. Graduates will possess enhanced competitive advantage, especially in terms of career opportunities in Sustainable Urban Systems.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Computer Engineering)",
      "description": "Combining a distinctive fusion of computer engineering and electronics engineering, this programme trains engineers with a range of expertise that makes use of new technologies in the design of computer systems and their real-time applications in industry and commerce.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Computer Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Computer Engineering) with Second Major in Business",
      "description": "This programme is designed for candidates who enjoy a challenging academic programme that combines the technical, hard skills of Engineering with the soft skills of management and leadership inherent in Business studies.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Computer Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Computer Science and Design)",
      "description": "You will be the drivers of the future\u2019s digital development in both software and hardware, with a strong focus on computing, systems and augmented intelligence. The first three terms at SUTD are common, after which students select their preferred major out of five majors. One of which is Computer Science and Design.",
      "school_name": "Singapore University of Technology and Design",
      "college_name": "Information Systems Technology and Design",
      "course_type": "Full-time",
      "course_duration": "8 terms (4 years)"
  },
  {
      "course_name": "Bachelor of Engineering (Computer Science)",
      "description": "The focus of this Computer Science programme is on practice-oriented application of computer science foundations. This is evident in the mandatory industrial attachment, group innovation and design projects, capstone projects in the final year and several other mini-projects throughout the programme.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Computer Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Computer Science) with Second Major in Entrepreneurship",
      "description": "Students will acquire broadened understanding of enterprise and innovation, and hands-on experience in technopreneurship through experiential learning and a 20-week local/overseas internship with startups, venture capital firms, or other entrepreneurship-related organisations.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Computer Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Electrical and Electronic Engineering)",
      "description": "The Bachelor of Engineering (EEE) programme is a professional degree programme with a broad-based and flexible curriculum that integrates theory with industrial practice.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Electrical and Electronic Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Electrical and Electronic Engineering) with a Second Major in Business",
      "description": "Be equipped with both engineering and business knowledge, as well as competencies relevant for the global marketplace. Acquire a distinct competitive advantage over your peers and enjoy better market value, career options, opportunities and mobility across the full breadth of the job market.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Electrical and Electronic Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Electrical and Electronic Engineering) with a Second Major in Data Analytics",
      "description": "Students can take advantage of their technical knowledge and training in their engineering major to integrate applications in data analytics. This expands their career options after graduation and ramps up their employability.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Electrical and Electronic Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Electrical and Electronic Engineering) with a Second Major in Entreprenuership",
      "description": "On top of their engineering major, students will acquire broadened understanding of enterprise and innovation, and hands-on experience in technopreneurship through experiential learning and a 20-week local/overseas internship with startups, venture capital firms, or other entrepreneurship-related organisations.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Electrical and Electronic Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Electrical and Electronic Engineering) with a Second Major in Society and Urban Systems",
      "description": "You will acquire understanding of the rationale and processes behind the emergence, growth and evolution of the urban built environment from its natural environment. You will also engage with the social, political, economic and cultural considerations of urban systems planning and policy-making.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Electrical and Electronic Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Engineering Product Development)",
      "description": "You will be design engineers who conceptualise, design, implement and operate products, services and systems to overcome any challenge. The first three terms at SUTD are common, after which students select their preferred major out of five majors. One of which is Engineering Product Development.",
      "school_name": "Singapore University of Technology and Design",
      "college_name": "Engineering Product Development",
      "course_type": "Full-time",
      "course_duration": "8 terms (4 years)"
  },
  {
      "course_name": "Bachelor of Engineering (Engineering Systems and Design)",
      "description": "You will be business analysts and system engineers who tackle open-ended challenges for organisations with a focus on design, analysis and optimisation. The first three terms at SUTD are common, after which students select their preferred major out of five majors. One of which is Engineering Systems and Design.",
      "school_name": "Singapore University of Technology and Design",
      "college_name": "Engineering Systems and Design",
      "course_type": "Full-time",
      "course_duration": "8 terms (4 years)"
  },
  {
      "course_name": "Bachelor of Engineering (Environmental Engineering)",
      "description": "The programme nurtures students for careers in environmental sustainability. The curriculum encompasses foundation engineering courses in mathematics and science, followed by a balanced mix of core courses in the environmental engineering discipline (such as environmental microbiology, water supply engineering, wastewater engineering). Poly students with relevant diploma are eligible to admit directly to Year 2 for this 4 years direct honours programme.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Environmental Engineering) with a Second Major in Business",
      "description": "Be equipped with both engineering and business knowledge, as well as competencies relevant for the global marketplace. Acquire a distinct competitive advantage over your peersa and enjoy better market value, career options, opportunities and mobility across the full breadth of the job market.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Environmental Engineering) with a Second Major in Data Analytics",
      "description": "Students can take advantage of their technical knowledge and training in their engineering major to integrate applications in data analytics. This expands their career options after graduation and ramp up their employability.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Environmental Engineering) with a Second Major in Entrepreneurship",
      "description": "The programme is jointly offered by the School of Civil and Environmental Engineering and the Nanyang Technopreneurship Center. Besides environmental engineering, it equips students with the fundamental entrepreneurship competency and broaden their exposure to enterprise and innovation. Students are required to participate in the Experiential Programme and a 20-week Overseas Entrepreneurship Programme (OEP) or a 20-week local Professional Internship with start-ups or venture capital firms.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Environmental Engineering) with a Second Major in Society and Urban Systems",
      "description": "The programme is jointly offered by the School of Civil and Environmental Engineering and the College of Humanities, Arts, and Social Sciences. the curriculum encompasses the social science aspects of urban planning and policy-making, while preserving the strong environmental engineering foundation over the usual programme duration (i.e. 4 years). Graduates will possess enhanced competitive advantage, especially in terms of career opportunities in Sustainable Urban Systems.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Hons) (Materials Engineering)",
      "description": "NTU's Materials Science Subject consistently ranks in the top of QS World University Rankings and US News Global Universities Rankings. A degree in Materials Engineering will provide relevant knowledge, technical and soft skills to prepare graduates for diverse roles in various industry sectors. Students are automatically enrolled for the Second Major in Education upon admission.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Materials Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Hons) (Materials Engineering) and Bachelor of Social Science (Hons) (Economics)",
      "description": "NTU MSE with School of Social Sciences offers a unique degree programme to provide advanced understanding of the integrative relationship between engineering and economics. Students with outstanding results may be eligible for exemptions of up to 3 selected first year courses. Course exemption for top local polytechnic students are on a case-by-case basis.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Materials Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "5 years"
  },
  {
      "course_name": "Bachelor of Engineering (Hons) (Materials Engineering) with a Second Major in Business",
      "description": "MSE with Nanyang Business School offers a unique degree programme that will equip students with both engineering and business knowledge, as well as competencies relevant for the global marketplace.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Materials Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Hons) (Materials Engineering) with a Second Major in Data Analytics",
      "description": "Students can take advantage of their technical knowledge and training in their engineering major to integrate applications in data analytics. This expands their career options after graduation and ramp up their employability.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Materials Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Hons) (Materials Engineering) with a Second Major in Entrepreneurship",
      "description": "This programme will prepare graduates to impact the world and its grand challenges in this new digital age. Students will be inspired to be venturesome and more resilient in this ever-changing world.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Materials Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Hons) (Materials Engineering) with a Second Major in Medical Biology",
      "description": "Designed for students with special interest in biomaterials and biomedical devices, you will learn the fundamentals of medical biology, with special emphasis on the principles of biological science. Graduates can also look forward to R&D work in this dynamic and rapidly-evolving field.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Materials Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Hons) (Materials Engineering) with a Second Major in Pharmaceutical Engineering",
      "description": "The programme prepares students for exciting and impactful careers in the vital pharmaceutical industries spanning key sectors such as pharmaceutical and biotechnology, biomedical and clinical sciences, healthcare and research and development.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Materials Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Information Engineering and Media)",
      "description": "This is a four-year direct-honours programme hosted by the School of Electrical and Electronic Engineering, and jointly offered with the School of Art, Design and Media, School of Computer Science and Engineering, and Wee Kim Wee School of Communication and Information.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Electrical and Electronic Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Information Engineering and Media) with a Second Major in Business",
      "description": "Be equipped with both engineering and business knowledge, as well as competencies relevant for the global marketplace. Acquire a distinct competitive advantage over your peersa and enjoy better market value, career options, opportunities and mobility across the full breadth of the job market.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Electrical and Electronic Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Information Engineering and Media) with a Second Major in Data Analytics",
      "description": "Students can take advantage of their technical knowledge and training in their engineering major to integrate applications in data analytics. This expands their career options after graduation and ramp up their employability.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Electrical and Electronic Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Information Engineering and Media) with a Second Major in Entrepreneurship",
      "description": "On top of their engineering major, students will acquire broadened understanding of enterprise and innovation, and hands-on experience in technopreneurship through experiential learning and a 20-week local/overseas internship with startups, venture capital firms, or other entrepreneurship-related organisations.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Electrical and Electronic Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering (Mechanical Engineering)",
      "description": "The specialisations within MAE reflect the diverse nature of the discipline. Additionally, the curriculum is constantly updated to match various industries\u2019 evolving trends, so graduates will acquire the most modern and relevant knowledge at their fingertips.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Mechanical and Aerospace Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Mechanical Engineering) with a Second Major in Data Analytics",
      "description": "Students can take advantage of their technical knowledge and training in their engineering major to integrate applications in data analytics. This expands their career options after graduation and ramps up their employability.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Mechanical and Aerospace Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Mechanical Engineering) with a Second Major in Entrepreneurship",
      "description": "On top of their engineering major, students will acquire broadened understanding of enterprise and innovation, and hands-on experience in technopreneurship through experiential learning and a 20-week internship with startups, venture capital firms, or other entrepreneurship-related organisations.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Mechanical and Aerospace Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Mechanical Engineering) with a Second Major in Sustainability",
      "description": "In addition to engineering principles, this second major incorporates relevant courses across various disciplines to provide students with the foundation and practical tools for understanding the concepts of sustainability and applying them to real world scenarios.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Mechanical and Aerospace Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Mechanical Engineering) with a Second Major in Sustainability",
      "description": "In addition to engineering principles, this second major incorporates relevant courses across various disciplines to provide students with the foundation and practical tools for understanding the concepts of sustainability and applying them to real world scenarios.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Mechanical and Aerospace Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Mechanical Engineering)with a Second Major in Business",
      "description": "Be equipped with both engineering and business knowledge, as well as competencies relevant for the global marketplace. Acquire a distinct competitive advantage over your peers and enjoy better market value, career options, opportunities and mobility across the full breadth of the job market.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Mechanical and Aerospace Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering (Mechanical Engineering)with a Second Major in Society and Urban System",
      "description": "You will develop understanding of the rationale and processes behind the emergence, growth and evolution of the urban built environment from its natural environment. You will also engage with the social, political, economic and cultural considerations of urban systems planning and policy-making.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Mechanical and Aerospace Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering in (Chemical and Biomolecular Engineering) with a Second Major in Business",
      "description": "Be equipped with both engineering and business knowledge, as well as competencies relevant for the global marketplace. Acquire a distinct competitive advantage over your peersa and enjoy better market value, career options, opportunities and mobility across the full breadth of the job market.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Aerospace Engineering",
      "description": "The Bachelor of Engineering with Honours in Aerospace Engineering is a three-year direct honours programme jointly offered by SIT and the University of Glasgow. This programme will equip students with the specific skill set necessary to meet the growing manpower demands in the local and global aerospace industry with a specific emphasis on autonomous aerial vehicles. Students will be equipped with sound foundations in engineering through appropriate mathematics and physics courses, upon which specific unmanned aerial systems knowledge will be built.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "SIT & University of Glasgow",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Aircraft Systems Engineering",
      "description": "The Bachelor of Engineering with Honours in Aircraft Systems Engineering is a three-year direct honours programme, developed in collaboration with SIA Engineering Company (SIAEC), which provides extensive Maintenance, Repair and Overhaul (MRO) services to more than 80 international airlines and aerospace equipment manufacturers worldwide. Built on an interdisciplinary curriculum that intersects engineering and science, the programme adopts a practical hands-on approach to produce theoretically-grounded and practice-oriented graduates for the aerospace and MRO industries.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Chemical Engineering",
      "description": "The Bachelor of Engineering with Honours in Chemical Engineering is a four-year direct honours degree programme jointly offered by SIT and Technical University of Munich. First in Singapore imbued with topics relevant to the current and future needs of the Chemical Industry, the programme aims to address the growing manpower demands of the local and global chemical industry by training students with deep skills in data engineering and additive manufacturing through intensive laboratory experiments and analysis.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "SIT & Technical University of Munich",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Civil Engineering",
      "description": "The Bachelor of Engineering with Honours in Civil Engineering is a three-year direct honours degree programme jointly offered by SIT and the University of Glasgow. This programme will play an important role in addressing the lack of local graduate manpower with the necessary civil engineering professional qualifications for the building and construction industry in the face of sustained building and infrastructure development. With a strong emphasis on project-based learning and industrial immersion, this programme aims to produce industry-ready graduates who are equipped with a high level of technical expertise to address multidisciplinary challenges, provide technically sound, economically feasible and sustainable solutions for complex problems.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "SIT & University of Glasgow",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Computer Engineering",
      "description": "The Bachelor of Engineering with Honours in Computer Engineering with a specialisation in intelligent transportation is a three-year direct honours degree programme. This programme is the first-of-its-kind that offers interdisciplinary training in computer science and engineering with a special focus on application in the rapidly evolving field of Intelligent Transportation Systems.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Electrical Power Engineering",
      "description": "The Bachelor of Engineering with Honours in Electrical Power Engineering (EPE) is a three-year direct honours degree programme jointly offered by SIT and Newcastle University (NU). As the first locally-offered, dedicated electrical power engineering undergraduate programme, the curriculum is specially customised to meet industry demand in Singapore. It will play an important role in increasing the number of graduates to address the workforce demand in the power sector whilst fulfilling the country\u2019s vision of becoming a Smart Nation. As a joint programme, it will leverage the expertise and resources of both SIT and NU.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "SIT & Newcastle University",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Electronics and Data Engineering",
      "description": "The Bachelor of Engineering with Honours in Electronics and Data Engineering is a four-year direct honours degree programme jointly offered by SIT and Technical University of Munich (TUM). Combining electronics and data engineering, this unique programme aims to equip students with the necessary skills and competencies for the emerging digital workforce. This programme encompasses a broad-based curriculum which focusses on essential knowledge in semiconductor technology, sensors and related electronics as well as practical applications of data science including aspects of data collection and analytics. Students will learn the fundamental principles necessary for the electronics industry as well as the foundations of data engineering \u2014 both built over a structured and rigorous curriculum that includes mathematics, physics, electronics, circuits, programming, databases and algorithms, Internet of Things (IoT), big data theory and practice, machine learning, data mining, and more.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "SIT & Technical University of Munich",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Information and Communications Technology majoring in Information Security",
      "description": "The Bachelor of Engineering with Honours in Information and Communications Technology majoring in Information Security is a four-year direct honours degree programme; the first undergraduate degree programme offered by a local autonomous university that majors in information security. The programme is designed to provide students with the necessary industry-relevant knowledge and practical technical skills to become specialised professionals in the field of information security that will be in demand by the industry.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Information and Communications Technology majoring in Software Engineering",
      "description": "The Bachelor of Engineering with Honours in Information and Communications Technology majoring in Software Engineering is a four-year direct honours degree programme. With the prevalence of Infocomm Technologies (ICT) across all industry sectors including finance, hospitality, manufacturing and healthcare, proper software engineering is critical to support the daily operations of many organisations. Software engineering covers the design, development, operation, analysis, maintenance and management of software in a holistic and systematic manner.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Mechanical Design and Manufacturing Engineering",
      "description": "The Bachelor of Engineering with Honours in Mechanical Design and Manufacturing Engineering (MDME) is a three-year direct honours degree programme jointly offered by SIT and Newcastle University. Through a unique, interdisciplinary curriculum that combines essential knowledge from mechanical design, mechatronics and manufacturing, the programme is designed to meet the manpower needs of local engineering and manufacturing industries. Students will learn fundamental principles in mechanical engineering including statics, dynamics, materials, solid and fluid mechanics, control, thermodynamics, and heat transfer. Following these fundamentals, they will then be exposed to a curriculum that promotes process improvement and innovation which include topics on manufacturing technology, industrial automation, lean manufacturing, statistical process control, and smart production management. Students will learn to work independently, as well as in groups to collaboratively meet and exceed engineering project objectives.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "SIT & Newcastle University",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Mechanical Engineering",
      "description": "The Bachelor of Engineering with Honours in Mechanical Engineering is a three-year direct honours degree programme jointly offered by SIT and the University of Glasgow. The programme is designed to meet the growing manpower demands in many disruptive digital technologies for key industry sectors in Singapore, including industrial automation/robotics, smart manufacturing, maritime and healthcare assistive technology.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "SIT & University of Glasgow",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Mechatronics Systems",
      "description": "The Bachelor of Engineering with Honours in Mechatronics Systems is a four-year direct honours degree programme jointly offered by SIT and DigiPen Institute of Technology Singapore. The programme encompasses two complementary fields of study, i.e. Mechatronics and Systems Engineering. Mechatronics is a multidisciplinary branch of engineering that focuses on mechanical engineering, electronics, control and automation, and software technology, in order to design, develop, put into operation and optimise systems. Systems engineering is an interdisciplinary field of engineering and engineering management that focuses on how to design, integrate, and manage complex systems over their life cycles.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "SIT & DigiPen Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Naval Architecture and Marine Engineering",
      "description": "The Bachelor of Engineering with Honours in Naval Architecture and Marine Engineering is a three-year direct honours degree programme jointly offered by SIT and Newcastle University that will equip you with the expertise and skills necessary for the highly competitive global maritime industry. Engineers and naval architects in the marine and offshore industry need the right set of skills to perform effectively in a fast-changing environment. The ability to address development proactively and a comprehensive knowledge of the industry is needed to retain a competitive edge.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "SIT & Newcastle University",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Pharmaceutical Engineering",
      "description": "The Bachelor of Engineering with Honours in Pharmaceutical Engineering is a four-year direct honours degree programme. The first of its kind in Singapore, the programme is built on an interdisciplinary curriculum that intersects engineering and science, with an aim to deliver a rigorous education with a strong industry focus. The goal of this programme is to produce graduates who are both theoretically grounded and practice-oriented for the knowledge-intensive pharmaceutical industry and related sectors. This programme focusses on the development and manufacture of the two largest classes of pharmaceutical drugs, i.e. (i) biologics and (ii) small molecule drugs.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Robotics Systems",
      "description": "The Bachelor of Engineering with Honours in Robotics Systems is a four-year, direct honours degree programme that focuses on the design and development of service/field robotic systems. The programme aims to fulfil the anticipated demand for robotics engineers, as automation moves out from the factory shop floor to service their human counterparts in various field applications. The integration of multiple engineering disciplines, via systems engineering through its project-based pedagogy, is a unique feature of the programme. Software and Artificial Intelligence (AI) are used as integrative elements that connect multiple mechatronics elements together to form a complete robotic system.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Sustainable Infrastructure Engineering (Building Services)",
      "description": "The Bachelor of Engineering with Honours in Sustainable Infrastructure Engineering (Building Services) is a three-year direct honours degree programme developed in consultation with the Building and Construction Authority, Singapore. The programme provides mechanical engineering training with a focus on the delivery of sustainable buildings to prepare students to become building mechanical engineers. It also develops students\u2019 lifelong skills to ensure they stay relevant in the building services engineering industry in Singapore and beyond. Students will go through rigorous academic training conducted by highly qualified professors and professional officers, as well as a eight-month Integrated Work Study Programme in the industry. SIE (Building Services) students are being trained to be eligible for Professional Engineering (Mechanical) qualification.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Engineering with Honours in Sustainable Infrastructure Engineering (Land)",
      "description": "The Bachelor of Engineering with Honours in Sustainable Infrastructure Engineering (Land) is a three-year direct honours degree programme, comprising various fundamental engineering disciplines, such as railway, mechanical, electrical, and electronic engineering. This programme nurtures individuals to achieve excellence in the ever-changing world of the land transport industry. Students will undergo rigorous academic training provided by highly qualified professors while immersing themselves in the land transport industry through work-study stints with established organisations such as LTA, SMRT, SBS Transit, Singapore Technologies, railway original equipment manufacturers and suppliers.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Environmental Studies",
      "description": "The interdisciplinary programme combines science disciplines from a diverse range of areas whilst helping to nurture students\u2019 passion for the environment. Diploma holders are eligible up to 20 academic units of module exemptions (Unrestricted Electives). More information can be found here.",
      "school_name": "National University of Singapore",
      "college_name": "Faculty of Science",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Fine Arts in Design Art",
      "description": "Design guides us through our lives, informs us and challenges our perceptions of the world. It is an interdisciplinary set of fields encompassing a wide variety of approaches to visual materials and culture. At a fundamental level, it is about form and composition, which are then applied to communication, problem-solving and creating compelling products and experiences for viewers and users.  In Design Art, students are taught to be critical, creative and skilled designers and artists, developing innovative and exciting new visions across fields and disciplines. Diploma holders may be eligible for up to 12 AUs of advanced placement credits but will still complete the Bachelor's degree in four years.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Art, Design and Media",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Fine Arts in Digital Art and Animation",
      "description": "The Bachelor of Fine Arts in Digital Art and Animation programme offers comprehensive education in the technique, processes, and tools that professional artists use to create art assets for games, animated films, and other digital media.  Rather than simply teaching students how to use current software, this programme focuses on developing foundational skills that remain valuable and useful regardless of the technology or medium. Graduates of this programme have the ability to produce powerful affecting imagery in a professional studio environment.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "DigiPen Institute of Technology Singapore",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Fine Arts in Media Art",
      "description": "Media Art is about telling stories using time and space, sound and images. The art of using media to create is fundatmentally important to us as individuals, communities and cultures. It is how we communicate experience, remember the past, document the present and imagine the future.  In Media Art, students are taught to be critical, creative and skilled content creators, developing innovative and exciting new visions within and across media. Diploma holders may be eligible for up to 12 AUs of advanced placement credits but will still complete the Bachelor's degree in four years.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Art, Design and Media",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Food Technology with Honours",
      "description": "The Bachelor of Food Technology with Honours is a four-year direct honours programme jointly offered by SIT and Massey University. The programme offers a curriculum focused on Food Product Technology, combining food science, food engineering and food business, and equips students with the fundamentals of food science and applied food technology skills required for a career in the food industry. Students will learn not only in the classroom but through practical laboratory and workshop sessions that focus on industry problems and solutions. Students will obtain hands-on experience in industrial-standard food processing plants. The lecturers are highly experienced researchers with valuable work experience in international food industries.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "SIT & Massey University",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Hospitality Business with Honours",
      "description": "The Bachelor of Hospitality Business with Honours is a three-year, direct honours degree programme; the first and only hospitality programme offered by an autonomous university in Singapore. The programme aims to nurture hospitality professionals who are passionate about making positive and tangible contributions to the industry. In fulfilling industry needs, they will, at the same time, be competitive and forward-looking. Graduates of Hospitality Business can, therefore, expect to develop strong operational skills (know-how) anchored in solid theoretical knowledge (know-why). They will also acquire strong cultural sensitivity and critical thinking skills in line with the international nature of Singapore\u2019s hospitality scene.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Human Resource Management with Minor",
      "description": "This programme is Singapore's first and only full-time bachelor degree in HRM. It prepares students for enriching careers as human resource professionals, in personnel and recruitment, training, development, compensation, employee relations, labour relations, and organisational development.",
      "school_name": "Singapore University of Social Sciences",
      "college_name": "S R Nathan School of Human Development",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Landscape Architecture",
      "description": "The four-year Honours degree programme, marking an exciting milestone for tertiary-level landscape architecture education in Singapore that qualify graduates for accreditation as a practicing landscape architect in Singapore through the Landscape Architects Accreditation Programme of the Singapore Institute of Landscape Architects.  The programme prepares students to respond to multifaceted socio-ecological issues in Asia through critical thinking, analytical inquiry, and creative expression. BLA provides core foundation training in skills and knowledge that equips our graduates for professional practice or entry into advanced Master degree programmes. Relevant topics, including tropicality, site specificity, boundaries and scales, densification, multifunctionality, and placemaking are played out in the programme through integrated learning platforms in design studios and lectures. It concurrently promotes speculation in design and at the same time being produces grounded and action-oriented design outcomes relevant to real life issues. Holders of Polytechnic Diplomas may be granted APCs up to a maximum of 40 MCs.",
      "school_name": "National University of Singapore",
      "college_name": "School of Design and Environment",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Laws",
      "description": "The Bachelor of Laws (Honours) (LLB) undergraduate degree is a professional degree recognised for admission to practise in Singapore.",
      "school_name": "National University of Singapore",
      "college_name": "Faculty of Law",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Laws",
      "description": "Given the rapidly changing world, the new problems that legal professionals encounter are likely to be more complex and cut across multiple disciplines. Therefore, it is no longer sufficient for legal professionals to be well-versed only in the law. The realities of legal practice now require every competent lawyer to have a keen awareness of the impact of globalisation, commercialisation, and technological disruption. These powerful forces will change the face of the legal industry.  At the SMU Yong Pung How School of Law, we equip our students with the knowledge, skills, and values that will prepare them for the future of legal practice. Our goal is to nurture tomorrow\u2019s lawyers who are intellectually agile, capable of responding to situations we have never seen before. With effect from 2023, LLB graduates who attain a grade point average of at least 3.00, take the Preparatory Course leading to Part B of the Singapore Bar Examinations and pass those examinations, and meet various other requirements will be eligible to be called to the Singapore Bar. Those called to the Bar who complete a 12-month period of practice training will be qualified to practise law. Since the inception of SMU, in service of humanity, SMU has required all students to perform community service as a graduating requirement. Students enrolled in the LLB program have to serve this 80 hours by:  doing 80 hours of SILE approved pro bono work; or doing the mandatory minimum of 20 hours of SILE approved pro bono work and the remaining hours in community service work offered by Centre for Social Responsibility (C4SR).",
      "school_name": "Singapore Management University",
      "college_name": "Yong Pung How School of Law",
      "course_type": "Full-time",
      "course_duration": "4 years with direct Honours"
  },
  {
      "course_name": "Bachelor of Medicine and Bachelor of Surgery",
      "description": "The programme is a 5 year curriculum that is future-oriented, inter-disciplinary and inter-professional in nature. We provide a holistic learning experience that expose our students to multiple facets of healthcare and prepares them to become visionary leaders and compassionate doctors of tomorrow.",
      "school_name": "National University of Singapore",
      "college_name": "Yong Loo Lin School of Medicine",
      "course_type": "Full-time",
      "course_duration": "5 Years (Bachelor)"
  },
  {
      "course_name": "Bachelor of Medicine and Bachelor of Surgery",
      "description": "A five-year undergraduate programme leading to a Bachelor of Medicine and Bachelor of Surgery degree (MBBS) awarded jointly by Imperial College London (Imperial) and Nanyang Technological University, Singapore (NTU Singapore). LKCMedicine bespoke curriculum draws extensively from the world-renowned medical curriculum of Imperial, and leverages the strengths of NTU in biomedical sciences, engineering, and humanities. Our School emphasises the clinical relevance of the basic sciences and early patient interaction from the very beginning of the course, training you to put a patient\u2019s individual needs at the centre of all care. The School\u2019s primary clinical partner is the National Healthcare Group, a leader in public healthcare recognised for the quality of its medical expertise, facilities and teaching. Graduates of the five-year undergraduate medical degree programme will have a strong understanding of the scientific basis of medicine, with an emphasis on technology, data science and the humanities. Before applying to LKCMedicine, interested applicants will have to register for the BioMedical Admissions Test (BMAT) and take the BMAT as part of the criteria for entry to the LKCMedicine MBBS programme. Before applying to LKCMedicine, interested applicants will have to register for the BioMedical Admissions Test (BMAT) and take the BMAT as part of the criteria for entry to the LKCMedicine MBBS programme.",
      "school_name": "Nanyang Technological University",
      "college_name": "Lee Kong Chian School of Medicine (LKCMedicine)",
      "course_type": "Full-time",
      "course_duration": "5 years"
  },
  {
      "course_name": "Bachelor of Pharmacy",
      "description": "The programme provides a strong foundation in pharmaceutical and clinical sciences, preparing students with knowledge and skills for the pharmacy profession. Diploma holders are eligible up to 20 academic units of module exemptions (Unrestricted Electives). More information can be found here.",
      "school_name": "National University of Singapore",
      "college_name": "Faculty of Science",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Public Safety and Security with Minor",
      "description": "This programme is designed with a balance of theory and practice, with training in intervention strategies in areas of policing, emergency management, investigation, rehabilitation, crime reduction and terrorism. The Public Safety and Security with Minor programme is open to Singaporeans and Permanent Residents only. This programme is unable to enrol international students.",
      "school_name": "Singapore University of Social Sciences",
      "college_name": "School of Humanities and Behavioural Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science (Architecture and Sustainable Design)",
      "description": "You will be architects and urban designers of the future. Not just structures, you will build better communities through the power of design and technology. The first three terms at SUTD are common, after which students select their preferred major out of five majors. One of which is Architecture and Sustainable Design.",
      "school_name": "Singapore University of Technology and Design",
      "college_name": "Architecture and Sustainable Design",
      "course_type": "Full-time",
      "course_duration": "4 years. 5 years for Master of Architecture."
  },
  {
      "course_name": "Bachelor of Science (Computer Science)",
      "description": "The programme equips students with technical skills to build computing products and solutions to thrive in the marketplaces and society. This requires an understanding of the interplay between computing theory and practice and the essential links between them, as well as fundamental business innovation and IT solution development and management skills. All students are guaranteed a Second Major, which they can choose from any School across SMU.  Exemptions are also possible and can be calculated using the SMU Exemptions Calculator.",
      "school_name": "Singapore Management University",
      "college_name": "School of Computing and Information Systems",
      "course_type": "Full-time",
      "course_duration": "4 years with direct Honours"
  },
  {
      "course_name": "Bachelor of Science (Computing and Law)",
      "description": "The programme equips students with skillsets in IT and business innovation, operating IT and business innovations within a legal framework, and employing IT in legal practice. Beyond a solid foundation in computing and law, you will specialise in advanced technology tracks to become future-ready for business and public sectors, consulting and finance sectors, as well as the legal sector. All students are guaranteed a Second Major, which they can choose from any School across SMU.  Exemptions are also possible and can be calculated using the SMU Exemptions Calculator.",
      "school_name": "Singapore Management University",
      "college_name": "School of Computing and Information Systems",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science (Design and Artificial Intelligence)",
      "description": "You will be designers and innovators who use AI to tackle challenges, improving design across products, systems, services and the built environment. The first three terms at SUTD are common, after which students select their preferred major out of five majors. One of which is Design and Artificial Intelligence.",
      "school_name": "Singapore University of Technology and Design",
      "college_name": "Design and Artificial Intelligence",
      "course_type": "Full-time",
      "course_duration": "8 terms (4 years)"
  },
  {
      "course_name": "Bachelor of Science (Double Major/Education)",
      "description": "The Double Major programmes are positioned to integrate the best of an academic degree with a good foundation in the field of education to produce graduates with the knowledge and skills to excel in careers both in education and education-related fields and beyond.",
      "school_name": "Nanyang Technological University",
      "college_name": "National Institute of Education",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science (Economics)",
      "description": "The programme provides deep understanding of modern economic theory, and inculcates independent thought about economic problems and policies. Students will be trained to think about real-world issues and equipped with skills to solve them. Students will also have the opportunity to embark on quantitative research that is also applicable beyond academia. All students are guaranteed a Second Major, which they can choose from any School across SMU.  Exemptions are also possible and can be calculated using the SMU Exemptions Calculator.",
      "school_name": "Singapore Management University",
      "college_name": "School of Economics",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science (Information Systems)",
      "description": "All students taking the degree in BSc (IS) Information Systems major will pursue at least one track specialisation, which will enable the acquisition of specialised skills in technology with the option to either focus on deepening technical or technology management skills. All students are guaranteed a Second Major, which they can choose from any School across SMU.  Exemptions are also possible and can be calculated using the SMU Exemptions Calculator.",
      "school_name": "Singapore Management University",
      "college_name": "School of Computing and Information Systems",
      "course_type": "Full-time",
      "course_duration": "4 years with direct Honours"
  },
  {
      "course_name": "Bachelor of Science (Maritime Studies)",
      "description": "The Maritime Studies programme focuses on the management of the shipping business, as well as maritime science and technology. The programme structure is designed to equip our graduates to excel as professionals in shipping and maritime related sectors. Students will undergo overseas exchange as part of the curriculum requirement.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science (Maritime Studies) with a Second Major in Business",
      "description": "Besides skills and knowledge to prepare students for a career in the maritime industry, graduates will be equipped with more extensive and in-depth business skills and knowledge. Students will undergo overseas exchange as part of the curriculum requirement.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science (Maritime Studies) with a Second Major in Data Analytics",
      "description": "Students can take advantage of their technical knowledge and training in their major to integrate applications in data analytics. This expands their career options after graduation and ramp up their employability.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science (Software Engineering) SkillsFuture Work-Study Degree",
      "description": "The Bachelor of Science (Software Engineering) SkillsFuture Work-Study degree combines classroom-learning with structured on-the-job training for our students. It features a rigorous 52-week apprenticeship where you get to work in development teams under the mentorship of professional software engineers. Students with no computing background are welcome to apply as the programme will cover computing foundations (in programming, data management, cybersecurity, networking and operating systems) before moving to more advanced topics in software development and solutions management. SMU collaborates closely with our industry partners to equip students with technical, teamwork and communication skills to take on the software engineering role. We aim to train students to manage a software\u202fsolution\u202fat all stages\u202fof its lifecycle which includes\u202fconceptualization, architecting,\u202fplanning, forecasting and development. Besides mentorship, career talks and guest lectures, our anchor partners will also co-develop and co-teach the curriculum to ensure that students are familiar with current trends and best practices in software engineering. All students are guaranteed a Second Major, which they can choose from any School across SMU. Exemptions are also possible and can be calculated using the SMU Exemptions Calculator.",
      "school_name": "Singapore Management University",
      "college_name": "School of Computing and Information Systems",
      "course_type": "Full-time",
      "course_duration": "4 years with direct Honours"
  },
  {
      "course_name": "Bachelor of Science in Applied Physics",
      "description": "A Second Major programme combining a physics education with in-depth training in the design and implementation of microelectronic devices.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Physical and Mathematical Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Biological Sciences",
      "description": "This 4-year degree offers broad-based training in biological sciences and prepares graduates for challenging careers in Life Sciences research and industry. It provides a strong foundation in biological sciences that can include technology and business elements.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Biological Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Biological Sciences with Second Major in Biomedical Structural Biology",
      "description": "Structural biology has gained importance in the biomedical field, with an increasing impact on healthcare and medicine. Areas of study include structure-based discovery, structure-based vaccine design, structure-based design and biomedics, structure-based design of novel biomaterials and structure-based design of protein engineering. This is a programme combining the Biological Sciences (Honours) with Biomedical Structural Biology as a Second\u202fMajor in partnership with Lee Kong Chian School of Medicine (LKC-MED) and the Division of Chemistry and Biological Chemistry (CBC), School of Physical and Mathematical Sciences (SPMS).",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Biological Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Biological Sciences with Second Major in Data Analytics",
      "description": "The Biological Sciences degree focuses on studying bio-systems of living organisms, e.g. human, animals bacteria, viruses and plants and more, while the second major in Data Analytics focuses on analysing data to gain actionable insights that complements the research aspect of the BS degree.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Biological Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Biological Sciences with Second Major in Food Science and Technology",
      "description": "<p>This is a prestigious new programme combining the Biological Sciences (Honours) programme with the highly popular Food Sciences and Technology as a 2nd Major, in partnership with the University of Wageningen and School of Chemical and Biomolecular Engineering and School of Physical & Mathematical Sciences in NTU.</p>",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Biological Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Biological Sciences with Second Major in Medicinal Chemistry and Pharmacology",
      "description": "The programme aims to provide a unique opportunity for students to be cross-trained in chemistry and biology with an emphasis on mechanism and synthesis.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Biological Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Business Analytics",
      "description": "The Bachelor of Science (Business Analytics) degree programme is an inter-disciplinary four-year undergraduate degree programme which offers students with a strong foundation in Data Analytics, Mathematics, Statistics, Economics, Computer Science and Information Systems. Students in their third and fourth years of study may choose elective modules from modules spanning business functions and sectors in finance, marketing, compliance, etc. They can also choose methodological elective modules related to big data techniques, statistics, data mining, social network analysis, econometrics, etc. These elective modules span the most exciting and challenging areas of business analytics practice in the industry today. Diploma holders may refer to module exemption policy here.",
      "school_name": "National University of Singapore",
      "college_name": "School of Computing",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Science in Business Analytics with Minor",
      "description": "This programme trains students in the application of a broad array of analytics techniques such as visualisation, data mining, text mining, statistics, forecasting and optimization using analytics software.",
      "school_name": "Singapore University of Social Sciences",
      "college_name": "School of Business",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science in Chemistry and Biological Chemistry",
      "description": "This Second Major programme equips chemistry majors with training in data analytics, a discipline that is increasingly pervasive in science, technology, and business.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Chemistry and Biological Chemistry",
      "description": "A rigorous undergraduate programme providing broad exposure to multiple chemistry disiplines and training in modern laboratory techniques.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Chemistry and Biological Chemistry",
      "description": "An interdisciplinary programme combining an education in general Chemistry with its special applications to the Earth Sciences and Environmental Management.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Chemistry and Biological Chemistry",
      "description": "A selective interdisciplinary Second Major programme with perspectives from chemistry, physics, biology, engineering, and industry.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Chemistry and Biological Chemistry",
      "description": "An interdisciplinary programme combining chemistry knowledge with the skills needed for management, business, and international trading.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Data Science and Artificial Intelligence",
      "description": "Students are trained to find innovative solutions to society's pressing challenges using data science and AI. The curriculum provides students with opportunities to solve real-life problems in different domains, from science and technology, business and finance to environmental sustainability etc.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Computer Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science in Data Science and Economics",
      "description": "The programme equips students with knowledge in data science and economics, as well as the fundamentals of theoretical and empirical economic analysis. Diploma holders are eligible up to 20 academic units of module exemptions (Unrestricted Electives). A-Level or Diploma holders may take placement tests for MA2001 and MA2002. More information can be found here.",
      "school_name": "National University of Singapore",
      "college_name": "Faculty of Science",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Science in Economics and Data Science",
      "description": "The programme provides students with a strong foundation in Economics and subsequently prepares them not only to handle and deal with big data through Data Science but also develops their ability to make economic sense from their applications in modern large-scale data analysis.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Computer Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science in Environmental Earth Systems Science",
      "description": "Applicants who are selected will be interviewed.",
      "school_name": "Nanyang Technological University",
      "college_name": "Asian School of the Environment",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science in Environmental Earth Systems Science and Public Policy and Global Affairs",
      "description": "Applicants who are selected will be interviewed.",
      "school_name": "Nanyang Technological University",
      "college_name": "Asian School of the Environment",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science in Environmental Earth Systems Science with Second Major in Data Analytics",
      "description": "Students admitted into this course will build a strong background in quantitative environmental earth systems science (EESS) and statistics, algorithms, and data analytics. This course allows students to gain actionable insights that complement the research aspect of EESS. Additionally, this ensures that our students stay competitive, with the ability to tackle real-world problems and challenges with innovative techniques in multidisciplinary settings.",
      "school_name": "Nanyang Technological University",
      "college_name": "Asian School of the Environment",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science in Finance with Minor",
      "description": "This programme provides knowledge and skills required of a qualified finance professional. Upon completion, graduates may be exempted from one or more component examinations of the Chartered FinTech Professional qualification.",
      "school_name": "Singapore University of Social Sciences",
      "college_name": "School of Business",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science in Food Science and Technology",
      "description": "The programme focuses on four themes of the science and technology of foods: food quality and safety, food product innovation, food processing and nutrition. Diploma holders are eligible up to 20 academic units of module exemptions (Unrestricted Electives). More information can be found here.",
      "school_name": "National University of Singapore",
      "college_name": "Faculty of Science",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Science in Information and Communication Technology with Minor",
      "description": "This programme provides comprehensive coverage of ICT knowledge areas in computer science foundations, software and application development, computer system and networking, cloud computing and big data, cybersecurity, database management, and information system and business process.",
      "school_name": "Singapore University of Social Sciences",
      "college_name": "School of Science and Technology",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science in Marketing with Minor",
      "description": "In this programme, students learn to conceptualise and position products in the market, appreciate how pricing policies and promotional strategies impact product success, and distribute and place ideas, goods and services to best satisfy consumers and fulfil organisational objectives.",
      "school_name": "Singapore University of Social Sciences",
      "college_name": "School of Business",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science in Mathematical Sciences",
      "description": "A highly flexible undergraduate programme covering fundamental, applied, computational, and industrial aspects of mathematics and statistics, focussing on the use of mathematical tools and methods to solve real-world problems.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Physical and Mathematical Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Mathematical Sciences and Economics",
      "description": "This highly interdisciplinary Double Major programme focusses on the use of mathematical tools and modelling to make economic decisions and financial market analysis. Students are equipped with the analytical and computing skills to understand market behaviour and drive economic policies.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Physical and Mathematical Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Mathematical and Computer Sciences",
      "description": "Combining a strong mathematical foundation with in-depth knowledge of computer science. Students are provided with strong foundations in Mathematical Sciences and Computer Science, coupled with specialised training in one of four areas: Theoretical Computer Science, Cryptography and Cybersecurity, Financial Modelling, and Data Science.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Physical and Mathematical Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Mathematical and Computer Sciences",
      "description": "Students are provided with strong foundations in the two majors, coupled with specialised training in one of four areas at the interface of Mathematical Sciences and Computer Science: Theoretical Computer Science, Cryptography and Cybersecurity, Financial Modelling, and Data Science.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Computer Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science in Nursing",
      "description": "The programme trained students to become general nursing practioners Nursing Diploma holders from Nanyang & Ngee Ann Poly may be eligible for up to 50 academic units of module exemptions. More details can be found at https://medicine.nus.edu.sg/nursing/education-2/undergraduate/bachelor-of-science-nursing-bachelor-of-science-nursing-hons-new/",
      "school_name": "National University of Singapore",
      "college_name": "Yong Loo Lin School of Medicine",
      "course_type": "Full-time",
      "course_duration": "3 Years (Bachelor) 4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Science in Pharmaceutical Science",
      "description": "Students will gain an understanding of drug discovery and development, and appreciate the regulatory and commercial environment in the pharmaceutical industry. Diploma holders are eligible up to 20 academic units of module exemptions (Unrestricted Electives). More information can be found here.",
      "school_name": "National University of Singapore",
      "college_name": "Faculty of Science",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Science in Physics and Applied Physics",
      "description": "Physics: covers topics spanning from electromagnetism to quantum mechanics (Coursework: theoretical, experimental, and computational components). Applied Physics: builds up a solid foundation in physics, followed by advanced topics like spintronics, nanotechnology, laser physics, and advanced materials).",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Physical and Mathematical Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Physics and Mathematical Sciences",
      "description": "A Double Major programme providing a rigorous education in the allied fields of physics and mathematics.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Physical and Mathematical Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Project and Facilities Management",
      "description": "The four-year direct honours B.Sc. (Project & Facilities Management) programme combines management and technologically oriented subjects in a holistic and integrated manner. It is designed to develop leaders for the built environment sector. Project Management and Facilities Management will continue to gain in importance as activities in all sectors of the economy become more complex. Organizations worldwide require efficient facilities and infrastructure to enhance productivity. The demand for building and infrastructure development in Singapore will continue to increase. Holders of Polytechnic Diplomas may be granted APCs up to a maximum of 40 MCs.",
      "school_name": "National University of Singapore",
      "college_name": "School of Design and Environment",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Science in Real Estate",
      "description": "The programme trains to create and manage wealth in the context of the built environment. It provides an explicit link and interface between the spatial features of Real Estate and its financial attributes. Diploma holders may be eligible for up to 20 MCs of exemption that would count towards the Unrestricted Electives and up to 20 MCs exemption for programme requirements.",
      "school_name": "National University of Singapore",
      "college_name": "Business School",
      "course_type": "Full-time",
      "course_duration": "4 Years (Honours)"
  },
  {
      "course_name": "Bachelor of Science in Sport Science and Management",
      "description": "Bachelor of Science (Honours) in Sport Science & Management offers relevant knowledge in sport science and sport management. The programme provides students with courses in areas such as exercise physiology, sport biomechanics, skill acquisition, sport psychology, sport management and coaching.",
      "school_name": "Nanyang Technological University",
      "college_name": "National Institute of Education",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science in Supply Chain Management with Minor",
      "description": "This programme provides business knowledge and specialised skills in logistics and supply chain management. Partnering with SLA, the curriculum is aligned with the Skills Framework for Logistics to equip students with skills to manage the flow of goods and services through the supply chain.",
      "school_name": "Singapore University of Social Sciences",
      "college_name": "School of Business",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Science with Double Major (Biological Sciences and Psychology)",
      "description": "In collaboration with the School of Humanities and Social Sciences, this highly inter-disciplinary degree offers students the opportunity to specialize in two major academic disciplines from the two Schools.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Biological Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science with Double Major (Biomedical Sciences and BioBusiness)",
      "description": "In collaboration with the Copenhagen Business School (CBS) and Nanyang Business School, students will be provided a unique opportunity to be cross-trained in biomedical sciences/biotechnology and business management with relevance to the biomedical and healthcare sector in Singapore and Southeast Asia.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Biological Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science with Honours in Air Transport Management",
      "description": "The Bachelor of Science with Honours in Air Transport Management is a three-year, direct honours degree programme and is the first and only Air Transport Management degree programme offered by an autonomous university in Singapore. The curriculum is developed in close partnership with the Civil Aviation Authority of Singapore (CAAS) and other key members of the aviation industry. With the development of Changi Airport Terminals 4 and 5, the aviation sector is expected to grow significantly. Manpower needs are projected to increase until 2035. Students will be trained to become skilled aviation professionals of airports, airlines, ground handling agencies as well as aviation consultancy firms.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Science with Honours in Applied Artificial Intelligence",
      "description": "The Bachelor of Science with Honours in Applied Artificial Intelligence is a three-year direct honours programme designed to nurture ICT professionals who are competent in developing, applying, and deploying AI solutions. Artificial intelligence has been identified as a key component in Singapore\u2019s Smart Nation Journey to transform the economy. In tandem with Singapore's plans to be a global leader in advancing AI solutions by 2030, the demand for machine learning engineers is expected to surge.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Science with Honours in Applied Computing",
      "description": "The Bachelor of Science with Honours in Applied Computing with a specialisation in Fintech is a three-year direct honours programme offered by SIT in partnership with Infocomm Media Development Authority (IMDA) and Monetary Authority of Singapore (MAS). It aims to grow Infocomm Technology (ICT) talents adept in financial technology (fintech) for the finance sector. This programme will equip our students with essential computing and finance knowledge, and enable them to develop practical skill sets required by the fintech sector. Students will also receive training in software engineering, applied computing, and machine learning with domain knowledge for the financial sector, such as banking compliance, financial products, and investment management.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Science with Honours in Computer Science in Interactive Media and Game Development",
      "description": "The Bachelor of Science with Honours in Computer Science in Interactive Media and Game Development is a four-year direct honours degree programme jointly offered by SIT and DigiPen Institute of Technology.  The programme arms students with a strong foundation in mathematics, programming and design theory. Building off this strong foundation, they will be well-versed in programming game logic, interaction design, artificial intelligence, databases, design tools and game design theory for digital and non-digital games, level design, system design, and UI/UX design. This programme will address the growing need of the local industry for software engineers that have deep design skills and understanding of user experience in the current digital age.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "SIT & DigiPen Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science with Honours in Computer Science in Real-Time Interactive Simulation",
      "description": "The Bachelor of Science with Honours in Computer Science in Real-Time Interactive Simulation is a four-year direct honours joint-degree programme offered by SIT and DigiPen Institute of Technology. The programme provides rigorous training in foundational STEM modules that underpin computer science and simulations, and also focusses on deep programming skills that include high-level programming, low-level programming, advanced C/C++, data structures, algorithms analysis and three progressive modules in computer graphics.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "SIT & DigiPen Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science with Honours in Computing Science",
      "description": "The Bachelor of Science with Honours in Computing Science degree is a three-year direct honours degree programme jointly offered by SIT and the University of Glasgow. Designed to support the government\u2019s initiative to transform Singapore into a Smart Nation, this programme is the first computing science programme offered by an autonomous university in Singapore that specialises in Internet of Things (IoT). The programme encompasses a broad-based computer science curriculum which combines essential knowledge from IoT, software engineering, data analytics, cybersecurity and machine learning.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "SIT & University of Glasgow",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Science with Honours in Diagnostic Radiography",
      "description": "The Bachelor of Science with Honours in Diagnostic Radiography is a four-year, direct honours programme that prepares graduates for the role of a professional radiographer. It is the only diagnostic radiography programme among autonomous universities in Singapore. The curriculum is developed in close consultation with the radiography industry to ensure relevance and graduates\u2019 employability. The programme will be seeking accreditation by the Allied Health Professions Council, thus enabling graduates to practise as professional radiographers in Singapore.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science with Honours in Dietetics and Nutrition",
      "description": "The Bachelor of Science with Honours in Dietetics and Nutrition is a four-year direct honours programme that aims to address the growing demand for dietetics manpower in hospitals and Intermediate and Long-Term Care settings in Singapore. As the first dietetics degree programme to be offered by an autonomous university in Singapore, this programme aims to provide students with evidence-based theoretical knowledge, research skills, and practical experience across all domains of dietetic practice (individual clinical case management, community and public health nutrition, and food service management). The programme has been designed to meet the academic requirements and clinical competencies for entry-level professional dietitians based on international educational standards for professional dietetic practice. The curriculum has been developed in close consultation with chief dietitians from the major healthcare clusters in Singapore in order to provide students with up-to-date and relevant knowledge, as well as specialised skills in all domains of dietetic practice.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science with Honours in Digital Communications and Integrated Media",
      "description": "The Bachelor of Science with Honours in Digital Communications and Integrated Media is a three-year direct honours degree programme that prepares students for a career in Communications and Media sectors. Graduates will be able to work in a wide variety of fields, leveraging on skills gained in three core areas \u2014 Digital Web Analytics, Integrated Media Management and Digital Media Production.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Science with Honours in Digital Supply Chain",
      "description": "The Bachelor of Science with Honours in Digital Supply Chain is a three-year direct honours, interdisciplinary supply chain degree programme with the across domains of ICT, Engineering, and Supply Chain Management. Digital transformation driven by Industry 4.0 and national digitalisation initiatives, has given rise to demand for DSC graduates. E-commerce and COVID-19 have disrupted traditional supply chains, accentuating the need for digital transformation.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "3 years"
  },
  {
      "course_name": "Bachelor of Science with Honours in Nursing",
      "description": "The Bachelor of Science with Honours in Nursing is a two-year post-registration degree programme jointly offered by SIT and the University of Glasgow. The nursing programme has been co-created and designed with inputs from practice partners and the Ministry of Health, and is accreditated by the Singapore Nursing Board (SNB) from May 2016 to May 2025. This degree programme builds on the foundation that students have established during their nursing diploma studies. The aim of the programme is to develop critical, analytical and innovation skills, as well as leadership, research, teaching, and clinical competencies. Through the programme's applied learning approach, graduates will be able to translate new nursing knowledge into practice.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "SIT & University of Glasgow",
      "course_type": "Full-time",
      "course_duration": "1 year, 8 months"
  },
  {
      "course_name": "Bachelor of Science with Honours in Occupational Therapy",
      "description": "The Bachelor of Science with Honours in Occupational Therapy is a four-year, direct honours programme designed to provide an excellent educational experience in the theory and practice of occupational therapy. Occupational therapy involves assessments and interventions to work or school, self-care, leisure or play, physical environments as well as cognitive, mental and physical components of function to enable individuals affected by physical injury or illness, developmental or learning disabilities, psychosocial dysfunctions or the ageing process, to engage in everyday life occupations in order to maximise the independent performance of life roles, prevent disability and maintain health.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science with Honours in Physiotherapy",
      "description": "The Bachelor of Science with Honours in Physiotherapy programme is a four-year, direct honours degree programme. The programme aims to produce professional physiotherapists who are theoretically-grounded and clinically-oriented to practise autonomously in different specialities of physiotherapy. Students in the programme will have opportunities to gain clinical experience while working in various major hospitals and healthcare facilities in Singapore.  The four-year degree programme is developed with consultation from clinical partners to ensure the relevancy of the skill sets and employability of the students upon graduation.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science with Honours in Radiation Therapy",
      "description": "The Bachelor of Science with Honours in Radiation Therapy degree is a four-year direct honours degree programme that prepares graduates for the role of a professional radiation therapist. It is the only radiation therapy programme offered by an autonomous university in Singapore. Radiation therapy is a valued profession in many countries, including Singapore. It involves the use of sophisticated equipment and techniques to deliver radiation precisely and accurately to patients, mainly for the treatment of cancer. Radiation therapists are important members of radiation oncology teams. They apply their professional education to deliver a sensitive and patient-centred service.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Science with Honours in Speech and Language Therapy",
      "description": "The Bachelor of Science with Honours in Speech and Language Therapy is a four-year, direct honours degree programme, developed with speech and language therapy practitioners from the public healthcare, community care, social services and private sectors. The first Speech and Language Therapy undergraduate degree programme in Singapore has been carefully developed with senior speech and language therapy practitioners from the local public healthcare, community care, social services, and private sectors.",
      "school_name": "Singapore Institute of Technology",
      "college_name": "Singapore Institute of Technology",
      "course_type": "Full-time",
      "course_duration": "4 years"
  },
  {
      "course_name": "Bachelor of Social Science",
      "description": "A rigorous multidisciplinary programme that empowers you with unparalleled personal growth and professional versatility. Students can choose to major in Psychology, Political Science or Sociology; or in Politics, Law and Economics. All students are guaranteed a Second Major, which they can choose from any School across SMU.  Exemptions are also possible and can be calculated using the SMU Exemptions Calculator.",
      "school_name": "Singapore Management University",
      "college_name": "School of Social Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Social Sciences (Honours) in Public Policy and Global Affairs with a Second Major in Media and Journalism Studies",
      "description": "The Bachelor of Social Sciences (Honours) in Public Policy and Global Affairs (PPGA) with a Second Major in Media and Journalism Studies is a four-year programme that prepare graduates for the fast-changing employment landscape in Singapore. PPGA with Second Major in Media and Journalism Studies will provide an additional and alternative competitive programme option for students who are interested in public administration and international relations and at the same time equipped with the media and journalism skillsets. Graduates of these programmes will be at a competitive advantage in the twenty-first century marketplace as they are able to present a more holistic view with deeper understanding on the synergy between Public Policy and Global Affairs and communication studies.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Social Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Social Sciences in Economics",
      "description": "Bachelor of Social Sciences (Honours) in Economics offers robust training in economic theory and statistical methods and offers a wide choice of Economics courses to suit students' interests and mathematical aptitude. Economics electives cover all the significant fields of economic knowledge as well as recent developments in areas such as Internet Economics and Behavioural Economics.  It is a powerful discipline that cuts across interdisciplinary landscapes of business, health, human behaviour, technology, and society. The curriculum emphasises a solid and rigorous foundation in microeconomics, macroeconomics, and econometrics in theory and with applications to policy and practice.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Social Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Social Sciences in Economics and Data Science",
      "description": "Bachelor of Science (Honours) in Economics and Data Science programme combines expertise from 3 schools: School of Social Sciences (SSS), School of Computer Science and Engineering (SCSE), and School of Physical and Mathematical Sciences (SPMS). This is a four-year degree programme in which undergraduate students will read 3 subject areas in Economics, Mathematics and Data Science. The programme provides its students with a strong foundation in Economics and subsequently prepares them not only to handle and deal with big data through Data Science but also develops their ability to make economic sense from their applications in modern large-scale data analysis.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Social Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Social Sciences in Economics and Media Analytics",
      "description": "Economics and Media Analytics curriculum combines the principles of economics and research methods for analysing media audiences and impact. By honing their expertise in both areas, students prepare for public and private sector careers in which they set the future direction for new media.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Social Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Social Sciences in Economics and Psychology",
      "description": "A four-year direct honours degree programme. Economics curriculum offers robust training in economic theory and statistical methods. Psychology curriculum offers rigorous training to students in understanding human emotion, cognition and behaviours using scientific methods.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Social Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Social Sciences in Economics and Public Policy and Global Affairs",
      "description": "A four-year direct honours degree programme. Economics curriculum offers robust training in economic theory and statistical methods. Public Policy and Global Affairs curriculum equips graduates with multi-dimensional knowledge such as policy analysis, programme evaluation, public financial, human resource and non-profit management.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Social Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Social Sciences in Economics with a second major in Business",
      "description": "Business is an area that is seeing increasing interest and demand in the fast-changing employment landscape in Singapore.  With the addition of a Business major to the well-established Bachelor of Social Science (Economics) programme, the graduates from this programme will be able to enjoy the best of both worlds in acquiring both technical Economics knowledge as well as business know-how.  BSocSci (Hons) in Economics with 2nd Major in Business is an integrated 4-year programme between the School of Social Sciences and Nanyang Business School that incorporates existing Economics courses and Business courses. Students will read courses from both schools.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Social Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Social Sciences in Psychology",
      "description": "Bachelor of Social Sciences (Honours) in Psychology provides students with comprehensive education in psychology. Striking a balance between breadth and depth, our core courses provide students with basic knowledge of the main fields of psychology, while our elective courses provide students with opportunities for focused study in more specialised areas, particularly in areas of current psychological research.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Social Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Social Sciences in Psychology and Media Analytics",
      "description": "Psychology and Media Analytics curriculum is for students who strive to understand how our minds process media messages. Students develop expertise in the research methods that organisations use to track the effectiveness of messages delivered through social and traditional media.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Social Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Social Sciences in Psychology with a second major in Biological Sciences",
      "description": "With a rising emphasis in Singapore on the awareness of mental health, there is increasing demand for professionals with interdisciplinary background in biological sciences and psychology. Graduates from this programme can explore further education leading to careers in professions such as counselling psychologist, occupational psychologist, clinical psychologist, educational psychologist and neuropsychologist. This is an interdisciplinary programme between the School of Social Sciences and School of Biological Sciences that incorporates existing Psychology courses and Biological Sciences courses.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Social Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Social Sciences in Public Policy and Global Affairs",
      "description": "Bachelor of Social Sciences (Honours) in Public Policy and Global Affairs is a four-year programme to prepare students for a career and leadership role in both public and private sectors in Singapore as well as in the Asian region.  With an interdisciplinary orientation and a focus on Singaporean society, the direct honours degree programme offers courses that equip its graduates with multi-dimensional practical knowledge in areas such as policy analysis, programme evaluation, public financial management, human resource management, and non-profit management that enables them to contribute to the public, non-profit, or business sectors in Singapore. The professional training in political dynamics, international politics, comparative public administration, and global affairs also lays a solid foundation for graduates for a possible career in regional and international governmental organisations as well as regional and international non-governmental organisations.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Social Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Social Sciences in Sociology",
      "description": "Bachelor of Social Sciences (Honours) in Sociology provides an intellectually stimulating and rigorous experience for students. The academic foundation consists of three core areas: Economy, Technology and Society; Culture, Self and Identity; and Organisations and Organisational Change. It provides both breadth of exposure and depth of engagement that emphasizes both theoretical reasoning and empirical analysis. Students should graduate with not just a body of knowledge and skills but also a 'sociological imagination' that will enable them to make the critical and creative difference in the workplace and in society.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Social Sciences",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Bachelor of Social Work with Minor",
      "description": "This programme equips students for entry into the social work profession and indirect social work in the areas of social policy, planning and evaluation. Upon completion, graduates qualify, and may apply for accreditation as a Registered Social Worker-Provisional.",
      "school_name": "Singapore University of Social Sciences",
      "college_name": "S R Nathan School of Human Development",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Double Degree in Accountancy and Business",
      "description": "The synergy between accountancy and business is widely valued in an increasingly complex business environment. The Double Degree in Accountancy and Business programme is designed to leverage on this synergy and provide you with a balanced combination of business management and accounting know-how.",
      "school_name": "Nanyang Technological University",
      "college_name": "Nanyang Business School",
      "course_type": "Full-time",
      "course_duration": "3.5 to 4 years (Direct honours)"
  },
  {
      "course_name": "Double Degree in Accountancy and Data Science and Artificial Intelligence",
      "description": "NTU\u2019s Bachelor of Science in Data Science and Artificial Intelligence is ranked top three globally while the Bachelor of Accountancy programme is the most reputable accounting programme in Singapore.",
      "school_name": "Nanyang Technological University",
      "college_name": "Nanyang Business School",
      "course_type": "Full-time",
      "course_duration": "4.5 years (Direct honours)"
  },
  {
      "course_name": "Double Degree in Aerospace Engineering and Economics",
      "description": "By having an advanced understanding of the integrative relationship between engineering and economics, graduates of this programme can better contribute to the nation's wealth and economy through the diverse career potentials in the public and private sectors.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Mechanical and Aerospace Engineering",
      "course_type": "Full-time",
      "course_duration": "5 years"
  },
  {
      "course_name": "Double Degree in Bachelor of (Engineering) in Chemical and Biomolecular Engineering and Bachelor of Social Sciences in Economics",
      "description": "The curriculum provides in-depth knowledge and competencies in both Engineering and Economics over a 5-year programme duration. Graduates will be equipped with civil engineering know-how with an added capability in economic analysis. A wide array of careers in various sectors awaits.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Double Degree in Bachelor of Engineering (Bioengineering) and Bachelor of Social Sciences in Economics",
      "description": "The curriculum provides in-depth knowledge and competencies in both Engineering and Economics over a 5-year programme duration. Graduates will be equipped with civil engineering know-how with an added capability in economic analysis. A wide array of careers in various sectors awaits.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Chemistry, Chemical Engineering and Biotechnology",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Double Degree in Bachelor of Engineering (Civil) and Bachelor of Social Sciences in Economics",
      "description": "The curriculum provides in-depth knowledge and competencies in both Engineering and Economics over a 5-year programme duration. Graduates will be equipped with civil engineering know-how with an added capability in economic analysis. A wide array of careers in various sectors awaits.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "5 years (Direct Honours)"
  },
  {
      "course_name": "Double Degree in Bachelor of Engineering (Computer Engineering) and Bachelor of Business (with specialisation in Business Analytics)",
      "description": "The programme allows you to hone your business management skills and excel at software application or computer engineering and development. Business analytics trains students to monitor target markets and analyse information to improve business strategies, operations and decisions.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Computer Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Double Degree in Bachelor of Engineering (Computer Engineering) and Bachelor of Social Sciences (Economics)",
      "description": "Master 2 disciplines - Computer Engineering and Economics - in this double degree programme. Jointly offered by NTU's School of Computer Science and Engineering (SCSE) and School of Social Sciences (SSS), the BEng (CS) and BSocSci (Econs) is a 5-year double degree programme.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Computer Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "5 years (Direct Honours)"
  },
  {
      "course_name": "Double Degree in Bachelor of Engineering (Computer Science) and Bachelor of Business (with specialisation in Business Analytics)",
      "description": "The programme allows you to hone your business management skills and excel at software application or computer engineering and development. Business analytics trains students to monitor target markets and analyse information to improve business strategies, operations and decisions.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Computer Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "4 years (Direct Honours)"
  },
  {
      "course_name": "Double Degree in Bachelor of Engineering (Computer Science) and Bachelor of Social Sciences (Economics)",
      "description": "Master 2 disciplines - Computer Science and Economics - in this double degree programme jointly offered by NTU's School of Computer Science and Engineering (SCSE) and School of Social Sciences (SSS). The BEng (CS) and BSocSci (Econs) is a 5-year double degree programme.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Computer Science and Engineering",
      "course_type": "Full-time",
      "course_duration": "5 years (Direct Honours)"
  },
  {
      "course_name": "Double Degree in Bachelor of Engineering (EEE) and Bachelor of Social Science (Economics)",
      "description": "By having an advanced understanding of the integrative relationship between engineering and economics, graduates of this programme can better contribute to the nation's wealth and economy through the diverse career potentials in the public and private sectors.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Electrical and Electronic Engineering",
      "course_type": "Full-time",
      "course_duration": "5 years"
  },
  {
      "course_name": "Double Degree in Bachelor of Engineering (Environmental Engineering) and Bachelor of Social Sciences in Economics",
      "description": "The curriculum provides in-depth knowledge and competencies in both Engineering and Economics over a 5-year programme duration. Graduates will be equipped with civil engineering know-how with an added capability in economic analysis. A wide array of careers in various sectors awaits.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Civil and Environmental Engineering",
      "course_type": "Full-time",
      "course_duration": "5 years (Direct Honours)"
  },
  {
      "course_name": "Double Degree in Bachelor of Engineering (IEM) and Bachelor of Social Science (Economics)",
      "description": "By having an advanced understanding of the integrative relationship between engineering and economics, graduates of this programme can better contribute to the nation's wealth and economy through the diverse career potentials in the public and private sectors.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Electrical and Electronic Engineering",
      "course_type": "Full-time",
      "course_duration": "5 years"
  },
  {
      "course_name": "Double Degree in Bachelor of Sciences in Biomedical Sciences and Bachelor of Chinese Medicine",
      "description": "This innovative \u201cEast Meets West\u201d bilingual programme trains students in biomedical sciences research and the principles and practice of Chinese Medicine. This unique five-year double degree programme is an amalgamation of the western approach to Biomedical Sciences with Traditional Chinese Medicine (TCM). The Bachelor of Science (Honours) in Biomedical Sciences is conferred by Nanyang Technological University, and the Bachelor of Medicine (Chinese Medicine) is conferrred by the Beijing University of Chinese Medicine.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Biological Sciences",
      "course_type": "Full-time",
      "course_duration": "5 years"
  },
  {
      "course_name": "Double Degree in Mechanical Engineering and Economics",
      "description": "By having an advanced understanding of the integrative relationship between engineering and economics, graduates of this programme can better contribute to the nation's wealth and economy through the diverse career potentials in the public and private sectors.",
      "school_name": "Nanyang Technological University",
      "college_name": "School of Mechanical and Aerospace Engineering",
      "course_type": "Full-time",
      "course_duration": "5 years"
  },
  {
      "course_name": "Renaissance Engineering Programme",
      "description": "Students can do a 1-year overseas exchange at a partner university",
      "school_name": "Nanyang Technological University",
      "college_name": "Renaissance Engineering Programme / College of Engineering",
      "course_type": "Full-time",
      "course_duration": "4.5 years (Dual Degree)"
  }
]

export default Autosearch;