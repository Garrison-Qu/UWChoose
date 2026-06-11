import type { Degree, Program } from "../types/program";

export const degrees: Degree[] = [
  {
    id: "bmath",
    name: "Bachelor of Mathematics",
    requirementIds: [
      "communication"
    ]
  },
  {
    id: "bcs",
    name: "Bachelor of Computer Science",
    requirementIds: [
      "communication"
    ]
  }
];

export const programs: Program[] = [
  {
    id: "actuarial-science-bachelor-of-mathematics-honours",
    name: "Actuarial Science (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Actuarial Science",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "HkeH1JRCjh",
    sourceId: "68a496870ff040cf3d623492",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/HkeH1JRCjh",
    requirements: [
      {
        id: "actuarial-science-bachelor-of-mathematics-honours-1-complete-all-the-following-actsc231-introductory-financial-mathematics",
        name: "Complete all the following: ACTSC231 - Introductory Financial Mathematics (0.50)ACTSC232 - Life Contingencies 1 (0.50)ACTSC331 - Life Contingencies 2 (0.50)ACTSC363 - Casualty and ",
        category: "program",
        courses: [
          "ACTSC231",
          "ACTSC232",
          "ACTSC331",
          "ACTSC363",
          "ACTSC372",
          "ACTSC431",
          "ACTSC446",
          "AFM101",
          "ECON101",
          "ECON102",
          "ENGL378",
          "MTHEL131",
          "STAT330",
          "STAT331",
          "STAT333",
          "STAT341"
        ],
        type: "allOf"
      },
      {
        id: "actuarial-science-bachelor-of-mathematics-honours-2-complete-1-of-the-following-amath250-introduction-to-differential-equa",
        name: "Complete 1 of the following: AMATH250 - Introduction to Differential Equations (0.50)AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)AMATH350 - Differentia",
        category: "program",
        courses: [
          "AMATH250",
          "AMATH251",
          "AMATH350"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "actuarial-science-bachelor-of-mathematics-honours-3-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "actuarial-science-bachelor-of-mathematics-honours-4-choose-any-of-the-following-afm424-equity-investments-0-50-stat431-gen",
        name: "Choose any of the following: AFM424 - Equity Investments (0.50)STAT431 - Generalized Linear Models and their Applications (0.50)STAT433 - Stochastic Processes 2 (0.50)STAT440 - Com",
        category: "program",
        courses: [
          "AFM424",
          "STAT431",
          "STAT433",
          "STAT440",
          "STAT441",
          "STAT443",
          "STAT444"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "actuarial-science-joint-honours",
    name: "Actuarial Science (Joint Honours)",
    category: "joint",
    code: "JH-Actuarial Science",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "ryHykRAi3",
    sourceId: "69b9a2978e55fc02d40e28c0",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/ryHykRAi3",
    requirements: [
      {
        id: "actuarial-science-joint-honours-1-complete-all-the-following-actsc231-introductory-financial-mathematics",
        name: "Complete all the following: ACTSC231 - Introductory Financial Mathematics (0.50)ACTSC232 - Life Contingencies 1 (0.50)ACTSC331 - Life Contingencies 2 (0.50)ACTSC363 - Casualty and ",
        category: "program",
        courses: [
          "ACTSC231",
          "ACTSC232",
          "ACTSC331",
          "ACTSC363",
          "ACTSC372",
          "ACTSC431",
          "ACTSC446",
          "AFM101",
          "ENGL378",
          "MTHEL131",
          "STAT330",
          "STAT333"
        ],
        type: "allOf"
      },
      {
        id: "actuarial-science-joint-honours-2-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "actuarial-science-minor",
    name: "Actuarial Science Minor",
    category: "minor",
    code: "Actuarial Science Minor",
    credentialType: "Minor",
    faculty: "Faculty of Mathematics",
    sourcePid: "SyxByJ00o3",
    sourceId: "67ca130acbd87c28314db90a",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/SyxByJ00o3",
    requirements: [
      {
        id: "actuarial-science-minor-1-complete-all-the-following-actsc231-introductory-financial-mathematics",
        name: "Complete all the following: ACTSC231 - Introductory Financial Mathematics (0.50)ACTSC232 - Life Contingencies 1 (0.50)AFM101 - Introduction to Financial Accounting (0.50)MTHEL131 -",
        category: "program",
        courses: [
          "ACTSC231",
          "ACTSC232",
          "AFM101",
          "MTHEL131",
          "STAT330",
          "STAT333"
        ],
        type: "allOf"
      },
      {
        id: "actuarial-science-minor-2-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "actuarial-science-minor-3-complete-2-of-the-following-actsc331-life-contingencies-2-0-50-actsc36",
        name: "Complete 2 of the following: ACTSC331 - Life Contingencies 2 (0.50)ACTSC363 - Casualty and Health Insurance Mathematics 1 (0.50)ACTSC372 - Investment Science and Corporate Finance ",
        category: "program",
        courses: [
          "ACTSC331",
          "ACTSC363",
          "ACTSC372"
        ],
        type: "chooseN",
        requiredCount: 2
      }
    ]
  },
  {
    id: "applied-mathematics-bachelor-of-mathematics-honours",
    name: "Applied Mathematics (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Applied Mathematics",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "r1lByy00sh",
    sourceId: "67d1c99fcbd87c2831553c68",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/r1lByy00sh",
    requirements: [
      {
        id: "applied-mathematics-bachelor-of-mathematics-honours-1-complete-all-the-following-amath231-calculus-4-0-50-amath342-computati",
        name: "Complete all the following: AMATH231 - Calculus 4 (0.50)AMATH342 - Computational Methods for Differential Equations (0.50)AMATH353 - Partial Differential Equations 1 (0.50)",
        category: "program",
        courses: [
          "AMATH231",
          "AMATH342",
          "AMATH353"
        ],
        type: "allOf"
      },
      {
        id: "applied-mathematics-bachelor-of-mathematics-honours-2-complete-1-of-the-following-amath242-introduction-to-computational-mat",
        name: "Complete 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50)CS371 - Introduction to Computational Mathematics (0.50)",
        category: "program",
        courses: [
          "AMATH242",
          "CS371"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-bachelor-of-mathematics-honours-3-complete-1-of-the-following-amath250-introduction-to-differential-equa",
        name: "Complete 1 of the following: AMATH250 - Introduction to Differential Equations (0.50)AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "AMATH250",
          "AMATH251"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-bachelor-of-mathematics-honours-4-complete-all-the-following-amath271-introduction-to-theoretical-mechan",
        name: "Complete all the following: AMATH271 - Introduction to Theoretical Mechanics (0.50)",
        category: "program",
        courses: [
          "AMATH271"
        ],
        type: "allOf"
      },
      {
        id: "applied-mathematics-bachelor-of-mathematics-honours-5-complete-1-of-the-following-amath333-calculus-on-manifolds-for-applied",
        name: "Complete 1 of the following: AMATH333 - Calculus on Manifolds for Applied Mathematics and Physics (0.50)AMATH343 - Discrete Models in Applied Mathematics (0.50)AMATH345 - Data-Driv",
        category: "program",
        courses: [
          "AMATH333",
          "AMATH343",
          "AMATH345",
          "AMATH361",
          "AMATH362",
          "AMATH373",
          "AMATH382",
          "AMATH383",
          "AMATH390",
          "AMATH391",
          "PMATH343"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-bachelor-of-mathematics-honours-6-complete-1-of-the-following-amath331-applied-real-analysis-0-50-amath3",
        name: "Complete 1 of the following: AMATH331 - Applied Real Analysis (0.50)AMATH332 - Applied Complex Analysis (0.50)PMATH331 - Applied Real Analysis (0.50)PMATH332 - Applied Complex Anal",
        category: "program",
        courses: [
          "AMATH331",
          "AMATH332",
          "PMATH331",
          "PMATH332",
          "PMATH333",
          "PMATH351",
          "PMATH352"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-bachelor-of-mathematics-honours-7-complete-3-of-the-following-amath442-computational-methods-for-partial",
        name: "Complete 3 of the following: AMATH442 - Computational Methods for Partial Differential Equations (0.50)AMATH445 - Scientific Machine Learning (0.50)AMATH446 - Introduction to Mathe",
        category: "program",
        courses: [
          "AMATH442",
          "AMATH445",
          "AMATH446",
          "AMATH449",
          "AMATH451",
          "AMATH453",
          "AMATH455",
          "AMATH456",
          "AMATH462",
          "AMATH463",
          "AMATH473",
          "AMATH474",
          "AMATH475",
          "AMATH477",
          "AMATH490",
          "AMATH495",
          "AMATH499",
          "CS479"
        ],
        type: "chooseN",
        requiredCount: 3
      },
      {
        id: "applied-mathematics-bachelor-of-mathematics-honours-8-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "applied-mathematics-joint-honours",
    name: "Applied Mathematics (Joint Honours)",
    category: "joint",
    code: "JH-Applied Mathematics",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "SJgSyJC0s2",
    sourceId: "67d1cd68cbd87c2831555aa4",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/SJgSyJC0s2",
    requirements: [
      {
        id: "applied-mathematics-joint-honours-1-complete-all-the-following-amath231-calculus-4-0-50-amath353-partial-d",
        name: "Complete all the following: AMATH231 - Calculus 4 (0.50)AMATH353 - Partial Differential Equations 1 (0.50)",
        category: "program",
        courses: [
          "AMATH231",
          "AMATH353"
        ],
        type: "allOf"
      },
      {
        id: "applied-mathematics-joint-honours-2-complete-1-of-the-following-amath242-introduction-to-computational-mat",
        name: "Complete 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50)CS371 - Introduction to Computational Mathematics (0.50)",
        category: "program",
        courses: [
          "AMATH242",
          "CS371"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-joint-honours-3-complete-1-of-the-following-amath250-introduction-to-differential-equa",
        name: "Complete 1 of the following: AMATH250 - Introduction to Differential Equations (0.50)AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "AMATH250",
          "AMATH251"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-joint-honours-4-complete-all-the-following-amath271-introduction-to-theoretical-mechan",
        name: "Complete all the following: AMATH271 - Introduction to Theoretical Mechanics (0.50)",
        category: "program",
        courses: [
          "AMATH271"
        ],
        type: "allOf"
      },
      {
        id: "applied-mathematics-joint-honours-5-complete-1-of-the-following-amath333-calculus-on-manifolds-for-applied",
        name: "Complete 1 of the following: AMATH333 - Calculus on Manifolds for Applied Mathematics and Physics (0.50)AMATH343 - Discrete Models in Applied Mathematics (0.50)AMATH345 - Data-Driv",
        category: "program",
        courses: [
          "AMATH333",
          "AMATH343",
          "AMATH345",
          "AMATH361",
          "AMATH362",
          "AMATH373",
          "AMATH382",
          "AMATH383",
          "AMATH390",
          "AMATH391",
          "PMATH343"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-joint-honours-6-complete-1-of-the-following-amath331-applied-real-analysis-0-50-amath3",
        name: "Complete 1 of the following: AMATH331 - Applied Real Analysis (0.50)AMATH332 - Applied Complex Analysis (0.50)PMATH331 - Applied Real Analysis (0.50)PMATH332 - Applied Complex Anal",
        category: "program",
        courses: [
          "AMATH331",
          "AMATH332",
          "PMATH331",
          "PMATH332",
          "PMATH333",
          "PMATH351",
          "PMATH352"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-joint-honours-7-complete-3-of-the-following-amath442-computational-methods-for-partial",
        name: "Complete 3 of the following: AMATH442 - Computational Methods for Partial Differential Equations (0.50)AMATH445 - Scientific Machine Learning (0.50)AMATH446 - Introduction to Mathe",
        category: "program",
        courses: [
          "AMATH442",
          "AMATH445",
          "AMATH446",
          "AMATH449",
          "AMATH451",
          "AMATH453",
          "AMATH455",
          "AMATH456",
          "AMATH462",
          "AMATH463",
          "AMATH473",
          "AMATH474",
          "AMATH475",
          "AMATH477",
          "AMATH490",
          "AMATH495",
          "AMATH499",
          "CS479"
        ],
        type: "chooseN",
        requiredCount: 3
      },
      {
        id: "applied-mathematics-joint-honours-8-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "applied-mathematics-minor",
    name: "Applied Mathematics Minor",
    category: "minor",
    code: "Applied Mathematics Minor",
    credentialType: "Minor",
    faculty: "Faculty of Mathematics",
    sourcePid: "rkGHJk0Ci2",
    sourceId: "68eecf2fa1f0cb5b1cdfefe5",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/rkGHJk0Ci2",
    requirements: [
      {
        id: "applied-mathematics-minor-1-complete-1-of-the-following-math103-introductory-algebra-for-arts-and-",
        name: "Complete 1 of the following: MATH103 - Introductory Algebra for Arts and Social Science (0.50)MATH106 - Applied Linear Algebra 1 (0.50)MATH114 - Linear Algebra for Science (0.50)MA",
        category: "program",
        courses: [
          "MATH103",
          "MATH106",
          "MATH114",
          "MATH115",
          "MATH136",
          "MATH146",
          "PHYS249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-minor-2-complete-1-of-the-following-math104-introductory-calculus-for-arts-and",
        name: "Complete 1 of the following: MATH104 - Introductory Calculus for Arts and Social Science (0.50)MATH116 - Calculus 1 for Engineering (0.50)MATH117 - Calculus 1 for Engineering (0.50",
        category: "program",
        courses: [
          "MATH104",
          "MATH116",
          "MATH117",
          "MATH127",
          "MATH137",
          "MATH147"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-minor-3-complete-1-of-the-following-math118-calculus-2-for-engineering-0-50-ma",
        name: "Complete 1 of the following: MATH118 - Calculus 2 for Engineering (0.50)MATH119 - Calculus 2 for Engineering (0.50)MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 ",
        category: "program",
        courses: [
          "MATH118",
          "MATH119",
          "MATH128",
          "MATH138",
          "MATH148"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-minor-4-complete-1-of-the-following-ece206-advanced-calculus-2-for-electrical-",
        name: "Complete 1 of the following: ECE206 - Advanced Calculus 2 for Electrical Engineers (0.50)MATH212 - Advanced Calculus 2 for Electrical Engineers (0.50)MATH217 - Calculus 3 for Chemi",
        category: "program",
        courses: [
          "ECE206",
          "MATH212",
          "MATH217",
          "MATH227",
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-minor-5-complete-1-of-the-following-amath250-introduction-to-differential-equa",
        name: "Complete 1 of the following: AMATH250 - Introduction to Differential Equations (0.50)AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)ECE205 - Advanced Calc",
        category: "program",
        courses: [
          "AMATH250",
          "AMATH251",
          "ECE205",
          "MATH211",
          "MATH213",
          "MATH218",
          "MATH228"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "applied-mathematics-with-scientific-computing-and-scientific-machine-learning-bachelor-of-mathematics-honours",
    name: "Applied Mathematics with Scientific Computing and Scientific Machine Learning (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Applied Mathematics with Scientific Computing & Scientific Machine Learning",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "ByBkJCRs2",
    sourceId: "67d1cd01f6e74fc84900beb7",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/ByBkJCRs2",
    requirements: [
      {
        id: "applied-mathematics-with-scientific-computing-and-scientific-machine-learning-bachelor-of-mathematics-honours-1-complete-all-the-following-amath231-calculus-4-0-50-amath445-scientifi",
        name: "Complete all the following: AMATH231 - Calculus 4 (0.50)AMATH445 - Scientific Machine Learning (0.50)CS234 - Data Types and Structures (0.50)",
        category: "program",
        courses: [
          "AMATH231",
          "AMATH445",
          "CS234"
        ],
        type: "allOf"
      },
      {
        id: "applied-mathematics-with-scientific-computing-and-scientific-machine-learning-bachelor-of-mathematics-honours-2-complete-1-of-the-following-amath242-introduction-to-computational-mat",
        name: "Complete 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50)CS371 - Introduction to Computational Mathematics (0.50)",
        category: "program",
        courses: [
          "AMATH242",
          "CS371"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-with-scientific-computing-and-scientific-machine-learning-bachelor-of-mathematics-honours-3-complete-1-of-the-following-amath250-introduction-to-differential-equa",
        name: "Complete 1 of the following: AMATH250 - Introduction to Differential Equations (0.50)AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "AMATH250",
          "AMATH251"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-with-scientific-computing-and-scientific-machine-learning-bachelor-of-mathematics-honours-4-complete-1-of-the-following-amath342-computational-methods-for-differe",
        name: "Complete 1 of the following: AMATH342 - Computational Methods for Differential Equations (0.50)AMATH345 - Data-Driven Mathematical Models (0.50)AMATH449 - Neural Networks (0.50)CS4",
        category: "program",
        courses: [
          "AMATH342",
          "AMATH345",
          "AMATH449",
          "CS479"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-with-scientific-computing-and-scientific-machine-learning-bachelor-of-mathematics-honours-5-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-with-scientific-computing-and-scientific-machine-learning-bachelor-of-mathematics-honours-6-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "applied-mathematics-with-scientific-computing-and-scientific-machine-learning-bachelor-of-mathematics-honours-7-complete-4-of-the-following-amath342-computational-methods-for-differe",
        name: "Complete 4 of the following: AMATH342 - Computational Methods for Differential Equations (0.50)AMATH345 - Data-Driven Mathematical Models (0.50)AMATH391 - Data Analysis with Fourie",
        category: "program",
        courses: [
          "AMATH342",
          "AMATH345",
          "AMATH391",
          "AMATH442",
          "AMATH446",
          "AMATH449",
          "AMATH477",
          "CO367",
          "CO466",
          "CO481",
          "CS231",
          "CS467",
          "CS475",
          "CS479",
          "PHYS467",
          "PMATH343",
          "STAT331",
          "STAT341",
          "STAT441",
          "STAT444"
        ],
        type: "chooseN",
        requiredCount: 4
      }
    ]
  },
  {
    id: "artificial-intelligence-specialization",
    name: "Artificial Intelligence Specialization",
    category: "specialization",
    code: "CS-Artificial Intelligence Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "H1vJJCCj3",
    sourceId: "67c9ba3a5d31977c88e4730c",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/H1vJJCCj3",
    parentProgramCodes: [
      "H-BBA & BCS Double Degree",
      "H-Computer Science (BCS)",
      "H-Computer Science (BMath)"
    ],
    requirements: [
      {
        id: "artificial-intelligence-specialization-1-complete-all-the-following-cs486-introduction-to-artificial-intelligen",
        name: "Complete all the following: CS486 - Introduction to Artificial Intelligence (0.50)CS492 - The Social Implications of Computing (0.50)",
        category: "program",
        courses: [
          "CS486",
          "CS492"
        ],
        type: "allOf"
      },
      {
        id: "artificial-intelligence-specialization-2-complete-1-of-the-following-cs480-introduction-to-machine-learning-0-5",
        name: "Complete 1 of the following: CS480 - Introduction to Machine Learning (0.50)CS485 - Statistical and Computational Foundations of Machine Learning (0.50)",
        category: "program",
        courses: [
          "CS480",
          "CS485"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "artificial-intelligence-specialization-3-complete-4-of-the-following-amath449-neural-networks-0-50-biol487-comp",
        name: "Complete 4 of the following: AMATH449 - Neural Networks (0.50)BIOL487 - Computational Neuroscience (0.50)CO367 - Nonlinear Optimization (0.50)CO456 - Introduction to Game Theory (0",
        category: "program",
        courses: [
          "AMATH449",
          "BIOL487",
          "CO367",
          "CO456",
          "CO463",
          "CO466",
          "CS452",
          "CS479",
          "CS480",
          "CS484",
          "CS485",
          "ECE380",
          "ECE423",
          "ECE457C",
          "ECE481",
          "ECE486",
          "ECE488",
          "ECE495",
          "MTE544",
          "SE380",
          "STAT341",
          "STAT440",
          "STAT441",
          "STAT444",
          "SYDE552",
          "SYDE556",
          "SYDE572"
        ],
        type: "chooseN",
        requiredCount: 4
      }
    ]
  },
  {
    id: "bachelor-of-computer-science-degree-requirements",
    name: "Bachelor of Computer Science Degree Requirements",
    degreeIds: [
      "bcs"
    ],
    category: "degree-requirement",
    code: "Degree Reqs: BCS",
    credentialType: "Degree Requirements",
    faculty: "Faculty of Mathematics",
    sourcePid: "r1y1WO5ka",
    sourceId: "698b855095bbe0c335e74e4d",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/r1y1WO5ka",
    requirements: []
  },
  {
    id: "bachelor-of-mathematics-degree-requirements",
    name: "Bachelor of Mathematics Degree Requirements",
    degreeIds: [
      "bmath"
    ],
    category: "degree-requirement",
    code: "Degree Reqs: BMath",
    credentialType: "Degree Requirements",
    faculty: "Faculty of Mathematics",
    sourcePid: "rJj6aXDk6",
    sourceId: "67d338a3d8d48c4e8a5a889d",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/rJj6aXDk6",
    requirements: []
  },
  {
    id: "bioinformatics-specialization",
    name: "Bioinformatics Specialization",
    category: "specialization",
    code: "CS-Bioinformatics Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "r17wJ10As2",
    sourceId: "68ac696420d1e60538f3c303",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/r17wJ10As2",
    parentProgramCodes: [
      "H-BBA & BCS Double Degree",
      "H-Computer Science (BCS)",
      "H-Computer Science (BMath)"
    ],
    requirements: [
      {
        id: "bioinformatics-specialization-1-complete-all-the-following-biol130-introductory-cell-biology-0-50-biol",
        name: "Complete all the following: BIOL130 - Introductory Cell Biology (0.50)BIOL130L - Cell Biology Laboratory (0.25)BIOL239 - Genetics (0.50)BIOL240 - Fundamentals of Microbiology (0.50",
        category: "program",
        courses: [
          "BIOL130",
          "BIOL130L",
          "BIOL239",
          "BIOL240",
          "BIOL240L",
          "BIOL308",
          "BIOL365",
          "BIOL465",
          "CHEM120",
          "CHEM120L",
          "CHEM123",
          "CHEM123L",
          "CS482"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "biology-specialization",
    name: "Biology Specialization",
    category: "specialization",
    code: "AMATH-Biology Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "S1eBJkCRo3",
    sourceId: "69b1a17cb6dd38094e8eb761",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/S1eBJkCRo3",
    parentProgramCodes: [
      "H-Applied Mathematics"
    ],
    requirements: [
      {
        id: "biology-specialization-1-choose-any-of-the-following-amath382-computational-modelling-of-cellul",
        name: "Choose any of the following: AMATH382 - Computational Modelling of Cellular Systems (0.50)AMATH383 - Introduction to Mathematical Biology (0.50)BIOL382 - Computational Modelling of",
        category: "program",
        courses: [
          "AMATH382",
          "AMATH383",
          "BIOL382"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "biostatistics-bachelor-of-mathematics-honours",
    name: "Biostatistics (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Biostatistics",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "SkUkJR0oh",
    sourceId: "6786beffc9b6049ee5b8d61f",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/SkUkJR0oh",
    requirements: [
      {
        id: "biostatistics-bachelor-of-mathematics-honours-1-complete-all-the-following-engl378-professional-communications-in-stat",
        name: "Complete all the following: ENGL378 - Professional Communications in Statistics and Actuarial Science (0.50)STAT330 - Mathematical Statistics (0.50)STAT331 - Applied Linear Models ",
        category: "program",
        courses: [
          "ENGL378",
          "STAT330",
          "STAT331",
          "STAT332",
          "STAT333",
          "STAT337",
          "STAT431",
          "STAT437",
          "STAT438"
        ],
        type: "allOf"
      },
      {
        id: "biostatistics-bachelor-of-mathematics-honours-2-complete-1-of-the-following-amath231-calculus-4-0-50-amath242-introduc",
        name: "Complete 1 of the following: AMATH231 - Calculus 4 (0.50)AMATH242 - Introduction to Computational Mathematics (0.50)AMATH250 - Introduction to Differential Equations (0.50)AMATH251",
        category: "program",
        courses: [
          "AMATH231",
          "AMATH242",
          "AMATH250",
          "AMATH251",
          "AMATH350",
          "CS371",
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "biostatistics-bachelor-of-mathematics-honours-3-complete-1-of-the-following-biol239-genetics-0-50-hlth101-introduction",
        name: "Complete 1 of the following: BIOL239 - Genetics (0.50)HLTH101 - Introduction to Health 1 (0.50)",
        category: "program",
        courses: [
          "BIOL239",
          "HLTH101"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "biostatistics-bachelor-of-mathematics-honours-4-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours",
    name: "Business Administration and Computer Science Double Degree (Bachelor of Business Administration and Bachelor of Computer Science - Honours)",
    degreeIds: [
      "bcs"
    ],
    category: "double-degree",
    code: "H-BBA & BCS Double Degree",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "r17w1JR0sh",
    sourceId: "69b9a1ded1671bb2819600cd",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/r17w1JR0sh",
    requirements: [
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-1-complete-all-the-following-cs136l-tools-and-techniques-for-software-de",
        name: "Complete all the following: CS136L - Tools and Techniques for Software Development (0.25)CS341 - Algorithms (0.50)CS350 - Operating Systems (0.50)CS490 - Information Systems Manage",
        category: "program",
        courses: [
          "CS136L",
          "CS341",
          "CS350",
          "CS490",
          "CS492"
        ],
        type: "allOf"
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-2-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-3-complete-1-of-the-following-cs115-introduction-to-computer-science-1-0",
        name: "Complete 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)CS145 - Designing Functional Programs (Advanced Level) (0.",
        category: "program",
        courses: [
          "CS115",
          "CS135",
          "CS145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-4-complete-1-of-the-following-cs136-elementary-algorithm-design-and-data",
        name: "Complete 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CS136",
          "CS146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-5-complete-1-of-the-following-cs240-data-structures-and-data-management-",
        name: "Complete 1 of the following: CS240 - Data Structures and Data Management (0.50)CS240E - Data Structures and Data Management (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS240",
          "CS240E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-6-complete-1-of-the-following-cs241-foundations-of-sequential-programs-0",
        name: "Complete 1 of the following: CS241 - Foundations of Sequential Programs (0.50)CS241E - Foundations of Sequential Programs (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS241",
          "CS241E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-7-complete-1-of-the-following-cs245-logic-and-computation-0-50-cs245e-lo",
        name: "Complete 1 of the following: CS245 - Logic and Computation (0.50)CS245E - Logic and Computation (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS245",
          "CS245E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-8-complete-1-of-the-following-cs246-object-oriented-software-development",
        name: "Complete 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS246",
          "CS246E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-9-complete-1-of-the-following-cs251-computer-organization-and-design-0-5",
        name: "Complete 1 of the following: CS251 - Computer Organization and Design (0.50)CS251E - Computer Organization and Design (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS251",
          "CS251E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-10-complete-1-of-the-following-math127-calculus-1-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH127 - Calculus 1 for the Sciences (0.50)MATH137 - Calculus 1 for Honours Mathematics (0.50)MATH147 - Calculus 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH127",
          "MATH137",
          "MATH147"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-11-complete-1-of-the-following-math128-calculus-2-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH128",
          "MATH138",
          "MATH148"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-12-complete-1-of-the-following-math135-algebra-for-honours-mathematics-0-",
        name: "Complete 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50)MATH145 - Algebra (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH135",
          "MATH145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-13-complete-1-of-the-following-math136-linear-algebra-1-for-honours-mathe",
        name: "Complete 1 of the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50)MATH146 - Linear Algebra 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH136",
          "MATH146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-14-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-15-complete-1-of-the-following-stat230-probability-0-50-stat240-probabili",
        name: "Complete 1 of the following: STAT230 - Probability (0.50)STAT240 - Probability (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT230",
          "STAT240"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-16-complete-1-of-the-following-stat231-statistics-0-50-stat241-statistics",
        name: "Complete 1 of the following: STAT231 - Statistics (0.50)STAT241 - Statistics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT231",
          "STAT241"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-computer-science-double-degree-bachelor-of-business-administration-and-bachelor-of-computer-science-honours-17-complete-all-the-following-bus111w-understanding-the-business-environm",
        name: "Complete all the following: BUS111W - Understanding the Business Environment (WLU) (0.50)BUS121W - Critical Thinking and Communication Skills (WLU) (0.50)BUS127W - Introduction to ",
        category: "program",
        courses: [
          "BUS111W",
          "BUS121W",
          "BUS127W",
          "BUS231W",
          "BUS247W",
          "BUS252W",
          "BUS283W",
          "BUS288W",
          "BUS354W",
          "BUS362W",
          "BUS375W",
          "BUS381W",
          "BUS393W",
          "BUS398W",
          "BUS491W",
          "ECON120W",
          "ECON140W"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "business-administration-and-mathematics-double-degree-bachelor-of-business-administration-and-bachelor-of-mathematics-honours",
    name: "Business Administration and Mathematics Double Degree (Bachelor of Business Administration and Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "double-degree",
    code: "H-BBA & BMath Double Degree",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "HJbRkyC0j3",
    sourceId: "69b9a2401edfae7e257f59d3",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/HJbRkyC0j3",
    requirements: [
      {
        id: "business-administration-and-mathematics-double-degree-bachelor-of-business-administration-and-bachelor-of-mathematics-honours-1-complete-all-the-following-actsc231-introductory-financial-mathematics",
        name: "Complete all the following: ACTSC231 - Introductory Financial Mathematics (0.50)CO370 - Deterministic OR Models (0.50)CS330 - Management Information Systems (0.50)STAT371 - Applied",
        category: "program",
        courses: [
          "ACTSC231",
          "CO370",
          "CS330",
          "STAT371",
          "STAT372"
        ],
        type: "allOf"
      },
      {
        id: "business-administration-and-mathematics-double-degree-bachelor-of-business-administration-and-bachelor-of-mathematics-honours-2-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-administration-and-mathematics-double-degree-bachelor-of-business-administration-and-bachelor-of-mathematics-honours-3-complete-all-the-following-bus111w-understanding-the-business-environm",
        name: "Complete all the following: BUS111W - Understanding the Business Environment (WLU) (0.50)BUS121W - Critical Thinking and Communication Skills (WLU) (0.50)BUS127W - Introduction to ",
        category: "program",
        courses: [
          "BUS111W",
          "BUS121W",
          "BUS127W",
          "BUS231W",
          "BUS247W",
          "BUS252W",
          "BUS283W",
          "BUS288W",
          "BUS354W",
          "BUS362W",
          "BUS375W",
          "BUS381W",
          "BUS393W",
          "BUS398W",
          "BUS491W",
          "ECON120W",
          "ECON140W"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "ms-business-specialization-business-specialization",
    name: "Business Specialization",
    category: "specialization",
    code: "MS-Business Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "rJAkJA0s2",
    sourceId: "67ffece736ebf6dd81fc0703",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/rJAkJA0s2",
    parentProgramCodes: [
      "H-Mathematical Studies"
    ],
    requirements: [
      {
        id: "business-specialization-1-complete-all-the-following-afm101-introduction-to-financial-accounting",
        name: "Complete all the following: AFM101 - Introduction to Financial Accounting (0.50)AFM102 - Introduction to Managerial Accounting (0.50)BUS121W - Critical Thinking and Communication S",
        category: "program",
        courses: [
          "AFM101",
          "AFM102",
          "BUS121W",
          "CS330",
          "ECON101",
          "ECON102"
        ],
        type: "allOf"
      },
      {
        id: "business-specialization-2-complete-1-of-the-following-actsc221-introductory-financial-mathematic",
        name: "Complete 1 of the following: ACTSC221 - Introductory Financial Mathematics (Non-Specialist Level) (0.50)ACTSC231 - Introductory Financial Mathematics (0.50)ACTSC291 - Global Capita",
        category: "program",
        courses: [
          "ACTSC221",
          "ACTSC231",
          "ACTSC291",
          "AFM272"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-specialization-3-complete-1-of-the-following-afm131-introduction-to-business-in-north-a",
        name: "Complete 1 of the following: AFM131 - Introduction to Business in North America (0.50)ARBUS101 - Introduction to Business in North America (0.50)BUS111W - Understanding the Busines",
        category: "program",
        courses: [
          "AFM131",
          "ARBUS101",
          "BUS111W"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-specialization-4-complete-1-of-the-following-arbus302-principles-of-marketing-0-50-bus2",
        name: "Complete 1 of the following: ARBUS302 - Principles of Marketing (0.50)BUS252W - Introduction to Marketing Management (WLU) (0.50)MGMT244 - Principles of Marketing (0.50)",
        category: "program",
        courses: [
          "ARBUS302",
          "BUS252W",
          "MGMT244"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-specialization-5-complete-1-of-the-following-co227-introduction-to-optimization-non-spe",
        name: "Complete 1 of the following: CO227 - Introduction to Optimization (Non-Specialist Level) (0.50)CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Adva",
        category: "program",
        courses: [
          "CO227",
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-specialization-6-complete-1-of-the-following-co327-deterministic-or-models-non-speciali",
        name: "Complete 1 of the following: CO327 - Deterministic OR Models (Non-Specialist Level) (0.50)CO370 - Deterministic OR Models (0.50)",
        category: "program",
        courses: [
          "CO327",
          "CO370"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-specialization-7-complete-2-of-the-following-cs200-concepts-for-advanced-computer-usage",
        name: "Complete 2 of the following: CS200 - Concepts for Advanced Computer Usage (0.50)CS338 - Computer Applications in Business: Databases (0.50)CS430 - Applications Software Engineering",
        category: "program",
        courses: [
          "CS200",
          "CS338",
          "CS430",
          "STAT340"
        ],
        type: "chooseN",
        requiredCount: 2
      },
      {
        id: "business-specialization-8-complete-1-of-the-following-stat321-regression-and-forecasting-non-spe",
        name: "Complete 1 of the following: STAT321 - Regression and Forecasting (Non-Specialist Level) (0.50)STAT322 - Sampling and Experimental Design (Non-Specialist Level) (0.50)STAT331 - App",
        category: "program",
        courses: [
          "STAT321",
          "STAT322",
          "STAT331",
          "STAT332"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "business-specialization-9-complete-no-more-than-1-from-the-following-ls271-conflict-resolution-0",
        name: "Complete no more than 1 from the following: LS271 - Conflict Resolution (0.50)PACS202 - Conflict Resolution (0.50)",
        category: "program",
        courses: [
          "LS271",
          "PACS202"
        ],
        type: "allOf"
      },
      {
        id: "business-specialization-10-complete-no-more-than-1-from-the-following-ls319-negotiation-theories-",
        name: "Complete no more than 1 from the following: LS319 - Negotiation: Theories and Strategies (0.50)PACS323 - Negotiation: Theories and Strategies (0.50)",
        category: "program",
        courses: [
          "LS319",
          "PACS323"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "cs-business-specialization-business-specialization",
    name: "Business Specialization",
    category: "specialization",
    code: "CS-Business Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "S1eD1J0Aj2",
    sourceId: "66e8688ffbd7ee3c7d8e1454",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/S1eD1J0Aj2",
    parentProgramCodes: [
      "H-Computer Science (BCS)",
      "H-Computer Science (BMath)"
    ],
    requirements: [
      {
        id: "business-specialization-1-complete-2-of-the-following-actsc447-numerical-computation-for-financi",
        name: "Complete 2 of the following: ACTSC447 - Numerical Computation for Financial Modelling (0.50)CS348 - Introduction to Database Management (0.50)CS476 - Numerical Computation for Fina",
        category: "program",
        courses: [
          "ACTSC447",
          "CS348",
          "CS476",
          "CS490"
        ],
        type: "chooseN",
        requiredCount: 2
      }
    ]
  },
  {
    id: "climate-and-sustainability-specialization",
    name: "Climate and Sustainability Specialization",
    category: "specialization",
    code: "AMATH-Climate & Sustainability Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "Sy3IKxJuA",
    sourceId: "69b1a1800cdb8bf7a716064e",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/Sy3IKxJuA",
    parentProgramCodes: [
      "H-Applied Mathematics"
    ],
    requirements: [
      {
        id: "climate-and-sustainability-specialization-1-complete-all-the-following-amath361-continuum-mechanics-0-50-amath362-",
        name: "Complete all the following: AMATH361 - Continuum Mechanics (0.50)AMATH362 - Mathematics of Climate Change (0.50)",
        category: "program",
        courses: [
          "AMATH361",
          "AMATH362"
        ],
        type: "allOf"
      },
      {
        id: "climate-and-sustainability-specialization-2-complete-1-of-the-following-amath442-computational-methods-for-partial",
        name: "Complete 1 of the following: AMATH442 - Computational Methods for Partial Differential Equations (0.50)AMATH463 - Fluid Mechanics (0.50)",
        category: "program",
        courses: [
          "AMATH442",
          "AMATH463"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "climate-and-sustainability-specialization-3-complete-3-of-the-following-amath462-introduction-to-mathematics-of-cl",
        name: "Complete 3 of the following: AMATH462 - Introduction to Mathematics of Climate Modelling (0.50)GDS271 - Earth from Space Using Remote Sensing (0.50)GDS281 - Introduction to Geograp",
        category: "program",
        courses: [
          "AMATH462",
          "GDS271",
          "GDS281",
          "GEOG102",
          "GEOG205",
          "GEOG209",
          "GEOG303",
          "GEOG305",
          "GEOG307",
          "GEOG320",
          "GEOG408",
          "PLAN281"
        ],
        type: "chooseN",
        requiredCount: 3
      },
      {
        id: "climate-and-sustainability-specialization-4-complete-1-of-the-following-geog207-climate-change-fundamentals-0-50-s",
        name: "Complete 1 of the following: GEOG207 - Climate Change Fundamentals (0.50)SCI205 - Climate Change Fundamentals (0.50)",
        category: "program",
        courses: [
          "GEOG207",
          "SCI205"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "combinatorics-and-optimization-bachelor-of-mathematics-honours",
    name: "Combinatorics and Optimization (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Combinatorics & Optimization",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "SyeD110Co2",
    sourceId: "66621abf40c8312039a6c435",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/SyeD110Co2",
    requirements: [
      {
        id: "combinatorics-and-optimization-bachelor-of-mathematics-honours-1-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "combinatorics-and-optimization-bachelor-of-mathematics-honours-2-complete-1-of-the-following-co330-combinatorial-enumeration-0-50-co342",
        name: "Complete 1 of the following: CO330 - Combinatorial Enumeration (0.50)CO342 - Introduction to Graph Theory (0.50)",
        category: "program",
        courses: [
          "CO330",
          "CO342"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "combinatorics-and-optimization-bachelor-of-mathematics-honours-3-complete-1-of-the-following-co351-network-flow-theory-0-50-co353-compu",
        name: "Complete 1 of the following: CO351 - Network Flow Theory (0.50)CO353 - Computational Discrete Optimization (0.50)CO367 - Nonlinear Optimization (0.50)",
        category: "program",
        courses: [
          "CO351",
          "CO353",
          "CO367"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "combinatorics-and-optimization-bachelor-of-mathematics-honours-4-complete-1-of-the-following-co450-combinatorial-optimization-0-50-co45",
        name: "Complete 1 of the following: CO450 - Combinatorial Optimization (0.50)CO452 - Integer Programming (0.50)CO454 - Scheduling (0.50)CO456 - Introduction to Game Theory (0.50)CO459 - T",
        category: "program",
        courses: [
          "CO450",
          "CO452",
          "CO454",
          "CO456",
          "CO459",
          "CO463",
          "CO466",
          "CO471"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "combinatorics-and-optimization-bachelor-of-mathematics-honours-5-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "combinatorics-and-optimization-bachelor-of-mathematics-honours-6-complete-1-of-the-following-pmath336-introduction-to-group-theory-with",
        name: "Complete 1 of the following: PMATH336 - Introduction to Group Theory with Applications (0.50)PMATH347 - Groups and Rings (0.50)",
        category: "program",
        courses: [
          "PMATH336",
          "PMATH347"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "combinatorics-and-optimization-bachelor-of-mathematics-honours-7-complete-3-of-the-following-co330-combinatorial-enumeration-0-50-co331",
        name: "Complete 3 of the following: CO330 - Combinatorial Enumeration (0.50)CO331 - Coding Theory (0.50)CO342 - Introduction to Graph Theory (0.50)CO351 - Network Flow Theory (0.50)CO353 ",
        category: "program",
        courses: [
          "CO330",
          "CO331",
          "CO342",
          "CO351",
          "CO353",
          "CO367",
          "CO430",
          "CO431",
          "CO432",
          "CO434",
          "CO439",
          "CO440",
          "CO442",
          "CO444",
          "CO446",
          "CO450",
          "CO452",
          "CO454",
          "CO456",
          "CO459",
          "CO463",
          "CO466",
          "CO471",
          "CO481",
          "CO485",
          "CO486",
          "CO487",
          "CS467",
          "PHYS467"
        ],
        type: "chooseN",
        requiredCount: 3
      },
      {
        id: "combinatorics-and-optimization-bachelor-of-mathematics-honours-8-choose-any-of-the-following-cs462-formal-languages-and-parsing-0-50-cs",
        name: "Choose any of the following: CS462 - Formal Languages and Parsing (0.50)CS466 - Algorithm Design and Analysis (0.50)CS487 - Introduction to Symbolic Computation (0.50)",
        category: "program",
        courses: [
          "CS462",
          "CS466",
          "CS487"
        ],
        type: "allOf"
      },
      {
        id: "combinatorics-and-optimization-bachelor-of-mathematics-honours-9-complete-no-more-than-1-from-the-following-amath331-applied-real-analy",
        name: "Complete no more than 1 from the following: AMATH331 - Applied Real Analysis (0.50)PMATH331 - Applied Real Analysis (0.50)PMATH333 - Introduction to Real Analysis (0.50)PMATH351 - ",
        category: "program",
        courses: [
          "AMATH331",
          "PMATH331",
          "PMATH333",
          "PMATH351"
        ],
        type: "allOf"
      },
      {
        id: "combinatorics-and-optimization-bachelor-of-mathematics-honours-10-complete-no-more-than-1-from-the-following-amath332-applied-complex-an",
        name: "Complete no more than 1 from the following: AMATH332 - Applied Complex Analysis (0.50)PMATH332 - Applied Complex Analysis (0.50)PMATH352 - Complex Analysis (0.50)",
        category: "program",
        courses: [
          "AMATH332",
          "PMATH332",
          "PMATH352"
        ],
        type: "allOf"
      },
      {
        id: "combinatorics-and-optimization-bachelor-of-mathematics-honours-11-complete-no-more-than-1-from-the-following-math237-calculus-3-for-hono",
        name: "Complete no more than 1 from the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "allOf"
      },
      {
        id: "combinatorics-and-optimization-bachelor-of-mathematics-honours-12-complete-no-more-than-1-from-the-following-pmath334-introduction-to-ri",
        name: "Complete no more than 1 from the following: PMATH334 - Introduction to Rings and Fields with Applications (0.50)PMATH348 - Fields and Galois Theory (0.50)",
        category: "program",
        courses: [
          "PMATH334",
          "PMATH348"
        ],
        type: "allOf"
      },
      {
        id: "combinatorics-and-optimization-bachelor-of-mathematics-honours-13-complete-no-more-than-1-from-the-following-pmath340-elementary-number-",
        name: "Complete no more than 1 from the following: PMATH340 - Elementary Number Theory (0.50)PMATH440 - Analytic Number Theory (0.50)PMATH441 - Algebraic Number Theory (0.50)",
        category: "program",
        courses: [
          "PMATH340",
          "PMATH440",
          "PMATH441"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "combinatorics-and-optimization-joint-honours",
    name: "Combinatorics and Optimization (Joint Honours)",
    category: "joint",
    code: "JH-Combinatorics & Optimization",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "HJmwyyA0o2",
    sourceId: "65ef4c565d3bb9c737f89b74",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/HJmwyyA0o2",
    requirements: [
      {
        id: "combinatorics-and-optimization-joint-honours-1-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "combinatorics-and-optimization-joint-honours-2-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "combinatorics-and-optimization-joint-honours-3-complete-1-of-the-following-pmath336-introduction-to-group-theory-with",
        name: "Complete 1 of the following: PMATH336 - Introduction to Group Theory with Applications (0.50)PMATH347 - Groups and Rings (0.50)",
        category: "program",
        courses: [
          "PMATH336",
          "PMATH347"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "combinatorics-and-optimization-joint-honours-4-complete-4-of-the-following-co330-combinatorial-enumeration-0-50-co331",
        name: "Complete 4 of the following: CO330 - Combinatorial Enumeration (0.50)CO331 - Coding Theory (0.50)CO342 - Introduction to Graph Theory (0.50)CO351 - Network Flow Theory (0.50)CO353 ",
        category: "program",
        courses: [
          "CO330",
          "CO331",
          "CO342",
          "CO351",
          "CO353",
          "CO367",
          "CO430",
          "CO431",
          "CO432",
          "CO434",
          "CO439",
          "CO440",
          "CO442",
          "CO444",
          "CO446",
          "CO450",
          "CO452",
          "CO454",
          "CO456",
          "CO459",
          "CO463",
          "CO466",
          "CO471",
          "CO481",
          "CO485",
          "CO486",
          "CO487",
          "CS467",
          "PHYS467"
        ],
        type: "chooseN",
        requiredCount: 4
      },
      {
        id: "combinatorics-and-optimization-joint-honours-5-choose-any-of-the-following-cs341-algorithms-0-50-cs466-algorithm-desi",
        name: "Choose any of the following: CS341 - Algorithms (0.50)CS466 - Algorithm Design and Analysis (0.50)CS487 - Introduction to Symbolic Computation (0.50)",
        category: "program",
        courses: [
          "CS341",
          "CS466",
          "CS487"
        ],
        type: "allOf"
      },
      {
        id: "combinatorics-and-optimization-joint-honours-6-complete-no-more-than-1-from-the-following-amath331-applied-real-analy",
        name: "Complete no more than 1 from the following: AMATH331 - Applied Real Analysis (0.50)PMATH331 - Applied Real Analysis (0.50)PMATH333 - Introduction to Real Analysis (0.50)PMATH351 - ",
        category: "program",
        courses: [
          "AMATH331",
          "PMATH331",
          "PMATH333",
          "PMATH351"
        ],
        type: "allOf"
      },
      {
        id: "combinatorics-and-optimization-joint-honours-7-complete-no-more-than-1-from-the-following-amath332-applied-complex-an",
        name: "Complete no more than 1 from the following: AMATH332 - Applied Complex Analysis (0.50)PMATH332 - Applied Complex Analysis (0.50)PMATH352 - Complex Analysis (0.50)",
        category: "program",
        courses: [
          "AMATH332",
          "PMATH332",
          "PMATH352"
        ],
        type: "allOf"
      },
      {
        id: "combinatorics-and-optimization-joint-honours-8-complete-no-more-than-1-from-the-following-cs360-introduction-to-the-t",
        name: "Complete no more than 1 from the following: CS360 - Introduction to the Theory of Computing (0.50)CS365 - Models of Computation (0.50)",
        category: "program",
        courses: [
          "CS360",
          "CS365"
        ],
        type: "allOf"
      },
      {
        id: "combinatorics-and-optimization-joint-honours-9-complete-no-more-than-1-from-the-following-math237-calculus-3-for-hono",
        name: "Complete no more than 1 from the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "allOf"
      },
      {
        id: "combinatorics-and-optimization-joint-honours-10-complete-no-more-than-1-from-the-following-pmath334-introduction-to-ri",
        name: "Complete no more than 1 from the following: PMATH334 - Introduction to Rings and Fields with Applications (0.50)PMATH348 - Fields and Galois Theory (0.50)",
        category: "program",
        courses: [
          "PMATH334",
          "PMATH348"
        ],
        type: "allOf"
      },
      {
        id: "combinatorics-and-optimization-joint-honours-11-complete-no-more-than-1-from-the-following-pmath340-elementary-number-",
        name: "Complete no more than 1 from the following: PMATH340 - Elementary Number Theory (0.50)PMATH440 - Analytic Number Theory (0.50)PMATH441 - Algebraic Number Theory (0.50)",
        category: "program",
        courses: [
          "PMATH340",
          "PMATH440",
          "PMATH441"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "combinatorics-and-optimization-minor",
    name: "Combinatorics and Optimization Minor",
    category: "minor",
    code: "Combinatorics & Optimization Minor",
    credentialType: "Minor",
    faculty: "Faculty of Mathematics",
    sourcePid: "H1D1JR0s2",
    sourceId: "67129f24485892f8485d9927",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/H1D1JR0s2",
    requirements: [
      {
        id: "combinatorics-and-optimization-minor-1-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "combinatorics-and-optimization-minor-2-complete-3-of-the-following-co330-combinatorial-enumeration-0-50-co331",
        name: "Complete 3 of the following: CO330 - Combinatorial Enumeration (0.50)CO331 - Coding Theory (0.50)CO342 - Introduction to Graph Theory (0.50)CO351 - Network Flow Theory (0.50)CO353 ",
        category: "program",
        courses: [
          "CO330",
          "CO331",
          "CO342",
          "CO351",
          "CO353",
          "CO367",
          "CO370",
          "CO372",
          "CO430",
          "CO431",
          "CO432",
          "CO434",
          "CO439",
          "CO440",
          "CO442",
          "CO444",
          "CO446",
          "CO450",
          "CO452",
          "CO454",
          "CO456",
          "CO459",
          "CO463",
          "CO466",
          "CO471",
          "CO481",
          "CO485",
          "CO486",
          "CO487",
          "CS467",
          "PHYS467"
        ],
        type: "chooseN",
        requiredCount: 3
      },
      {
        id: "combinatorics-and-optimization-minor-3-complete-1-of-the-following-math106-applied-linear-algebra-1-0-50-math",
        name: "Complete 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50)MATH114 - Linear Algebra for Science (0.50)MATH115 - Linear Algebra for Engineering (0.50)MATH136 - Linear Alg",
        category: "program",
        courses: [
          "MATH106",
          "MATH114",
          "MATH115",
          "MATH136",
          "MATH146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "combinatorics-and-optimization-minor-4-complete-1-of-the-following-math104-introductory-calculus-for-arts-and",
        name: "Complete 1 of the following: MATH104 - Introductory Calculus for Arts and Social Science (0.50)MATH116 - Calculus 1 for Engineering (0.50)MATH117 - Calculus 1 for Engineering (0.50",
        category: "program",
        courses: [
          "MATH104",
          "MATH116",
          "MATH117",
          "MATH127",
          "MATH137",
          "MATH147"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "combinatorics-and-optimization-minor-5-complete-1-of-the-following-math135-algebra-for-honours-mathematics-0-",
        name: "Complete 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50)MATH145 - Algebra (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH135",
          "MATH145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "combinatorics-and-optimization-minor-6-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "computational-fine-art-specialization",
    name: "Computational Fine Art Specialization",
    category: "specialization",
    code: "CS-Computational Fine Art Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "SkLD1kC0jh",
    sourceId: "678174c592ec46221922f2ad",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/SkLD1kC0jh",
    parentProgramCodes: [
      "H-BBA & BCS Double Degree",
      "H-Computer Science (BCS)",
      "H-Computer Science (BMath)"
    ],
    requirements: [
      {
        id: "computational-fine-art-specialization-1-complete-all-the-following-cs349-user-interfaces-0-50-cs488-introducti",
        name: "Complete all the following: CS349 - User Interfaces (0.50)CS488 - Introduction to Computer Graphics (0.50)",
        category: "program",
        courses: [
          "CS349",
          "CS488"
        ],
        type: "allOf"
      },
      {
        id: "computational-fine-art-specialization-2-complete-1-of-the-following-cs383-computational-digital-art-studio-0-5",
        name: "Complete 1 of the following: CS383 - Computational Digital Art Studio (0.50)FINE383 - Computational Digital Art Studio (0.50)",
        category: "program",
        courses: [
          "CS383",
          "FINE383"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computational-fine-art-specialization-3-complete-1-of-the-following-fine100-studio-fundamentals-0-50-fine130-i",
        name: "Complete 1 of the following: FINE100 - Studio Fundamentals (0.50)FINE130 - Introduction to Digital Imaging (0.50)",
        category: "program",
        courses: [
          "FINE100",
          "FINE130"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computational-fine-art-specialization-4-complete-1-of-the-following-fine228-design-and-imaging-0-50-fine247-ex",
        name: "Complete 1 of the following: FINE228 - Design and Imaging (0.50)FINE247 - Expanded Media: Interaction (0.50)",
        category: "program",
        courses: [
          "FINE228",
          "FINE247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computational-fine-art-specialization-5-complete-1-of-the-following-vcult200-visual-studies-across-the-discipl",
        name: "Complete 1 of the following: VCULT200 - Visual Studies Across the Discipline (0.50)VCULT257 - Video, New Media and the Digital Turn (0.50)",
        category: "program",
        courses: [
          "VCULT200",
          "VCULT257"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "computational-mathematics-bachelor-of-mathematics-honours",
    name: "Computational Mathematics (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Computational Mathematics",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "rkDkJCAj2",
    sourceId: "67a220f5f21e17709d51a51c",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/rkDkJCAj2",
    requirements: [
      {
        id: "computational-mathematics-bachelor-of-mathematics-honours-1-complete-all-the-following-cs230-introduction-to-computers-and-compute",
        name: "Complete all the following: CS230 - Introduction to Computers and Computer Systems (0.50)CS234 - Data Types and Structures (0.50)",
        category: "program",
        courses: [
          "CS230",
          "CS234"
        ],
        type: "allOf"
      },
      {
        id: "computational-mathematics-bachelor-of-mathematics-honours-2-complete-1-of-the-following-amath242-introduction-to-computational-mat",
        name: "Complete 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50)CS371 - Introduction to Computational Mathematics (0.50)",
        category: "program",
        courses: [
          "AMATH242",
          "CS371"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computational-mathematics-bachelor-of-mathematics-honours-3-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computational-mathematics-bachelor-of-mathematics-honours-4-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computational-mathematics-bachelor-of-mathematics-honours-5-complete-1-of-the-following-amath250-introduction-to-differential-equa",
        name: "Complete 1 of the following: AMATH250 - Introduction to Differential Equations (0.50)AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)AMATH350 - Differentia",
        category: "program",
        courses: [
          "AMATH250",
          "AMATH251",
          "AMATH350"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computational-mathematics-bachelor-of-mathematics-honours-6-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computational-mathematics-bachelor-of-mathematics-honours-7-complete-1-of-the-following-cs245-logic-and-computation-0-50-cs245e-lo",
        name: "Complete 1 of the following: CS245 - Logic and Computation (0.50)CS245E - Logic and Computation (Enriched) (0.50)PMATH330 - Introduction to Mathematical Logic (0.50)PMATH432 - Math",
        category: "program",
        courses: [
          "CS245",
          "CS245E",
          "PMATH330",
          "PMATH432"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computational-mathematics-bachelor-of-mathematics-honours-8-complete-1-of-the-following-cs246-object-oriented-software-development",
        name: "Complete 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS246",
          "CS246E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computational-mathematics-bachelor-of-mathematics-honours-9-choose-any-of-the-following-amath342-computational-methods-for-differe",
        name: "Choose any of the following: AMATH342 - Computational Methods for Differential Equations (0.50)CS475 - Computational Linear Algebra (0.50)PMATH370 - Chaos and Fractals (0.50)",
        category: "program",
        courses: [
          "AMATH342",
          "CS475",
          "PMATH370"
        ],
        type: "allOf"
      },
      {
        id: "computational-mathematics-bachelor-of-mathematics-honours-10-complete-no-more-than-1-from-the-following-co353-computational-discret",
        name: "Complete no more than 1 from the following: CO353 - Computational Discrete Optimization (0.50)CO367 - Nonlinear Optimization (0.50)",
        category: "program",
        courses: [
          "CO353",
          "CO367"
        ],
        type: "allOf"
      },
      {
        id: "computational-mathematics-bachelor-of-mathematics-honours-11-complete-no-more-than-1-from-the-following-stat340-stochastic-simulati",
        name: "Complete no more than 1 from the following: STAT340 - Stochastic Simulation Methods (0.50)STAT341 - Computational Statistics and Data Analysis (0.50)",
        category: "program",
        courses: [
          "STAT340",
          "STAT341"
        ],
        type: "allOf"
      },
      {
        id: "computational-mathematics-bachelor-of-mathematics-honours-12-choose-any-of-the-following-actsc447-numerical-computation-for-financi",
        name: "Choose any of the following: ACTSC447 - Numerical Computation for Financial Modelling (0.50)AMATH343 - Discrete Models in Applied Mathematics (0.50)AMATH382 - Computational Modelli",
        category: "program",
        courses: [
          "ACTSC447",
          "AMATH343",
          "AMATH382",
          "AMATH383",
          "AMATH391",
          "AMATH442",
          "AMATH449",
          "AMATH455",
          "AMATH477",
          "BIOL382",
          "CO351",
          "CO370",
          "CO372",
          "CO450",
          "CO452",
          "CO454",
          "CO456",
          "CO463",
          "CO466",
          "CO471",
          "CO485",
          "CO487",
          "CS341",
          "CS431",
          "CS451",
          "CS466",
          "CS476",
          "CS479",
          "CS480",
          "CS482",
          "CS485",
          "CS487",
          "STAT440",
          "STAT441",
          "STAT442",
          "STAT444"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "computational-mathematics-minor",
    name: "Computational Mathematics Minor",
    category: "minor",
    code: "Computational Mathematics Minor",
    credentialType: "Minor",
    faculty: "Faculty of Mathematics",
    sourcePid: "SkZPkyCAjh",
    sourceId: "67a220fd8f33925a15c7de5c",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/SkZPkyCAjh",
    requirements: [
      {
        id: "computational-mathematics-minor-1-complete-1-of-the-following-amath242-introduction-to-computational-mat",
        name: "Complete 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50)CS370 - Numerical Computation (0.50)CS371 - Introduction to Computational Mathematics (0.50)",
        category: "program",
        courses: [
          "AMATH242",
          "CS370",
          "CS371"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computational-mathematics-minor-2-choose-any-of-the-following-amath342-computational-methods-for-differe",
        name: "Choose any of the following: AMATH342 - Computational Methods for Differential Equations (0.50)CS475 - Computational Linear Algebra (0.50)",
        category: "program",
        courses: [
          "AMATH342",
          "CS475"
        ],
        type: "allOf"
      },
      {
        id: "computational-mathematics-minor-3-complete-no-more-than-1-from-the-following-co250-introduction-to-optim",
        name: "Complete no more than 1 from the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "allOf"
      },
      {
        id: "computational-mathematics-minor-4-complete-no-more-than-1-from-the-following-cs245-logic-and-computation",
        name: "Complete no more than 1 from the following: CS245 - Logic and Computation (0.50)CS245E - Logic and Computation (Enriched) (0.50)PMATH330 - Introduction to Mathematical Logic (0.50)",
        category: "program",
        courses: [
          "CS245",
          "CS245E",
          "PMATH330",
          "PMATH432",
          "SE212"
        ],
        type: "allOf"
      },
      {
        id: "computational-mathematics-minor-5-complete-no-more-than-1-from-the-following-cs246-object-oriented-softw",
        name: "Complete no more than 1 from the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)CS247 - Software Engin",
        category: "program",
        courses: [
          "CS246",
          "CS246E",
          "CS247"
        ],
        type: "allOf"
      },
      {
        id: "computational-mathematics-minor-6-complete-no-more-than-1-from-the-following-stat340-stochastic-simulati",
        name: "Complete no more than 1 from the following: STAT340 - Stochastic Simulation Methods (0.50)STAT341 - Computational Statistics and Data Analysis (0.50)",
        category: "program",
        courses: [
          "STAT340",
          "STAT341"
        ],
        type: "allOf"
      },
      {
        id: "computational-mathematics-minor-7-complete-3-of-the-following-actsc447-numerical-computation-for-financi",
        name: "Complete 3 of the following: ACTSC447 - Numerical Computation for Financial Modelling (0.50)AMATH343 - Discrete Models in Applied Mathematics (0.50)AMATH382 - Computational Modelli",
        category: "program",
        courses: [
          "ACTSC447",
          "AMATH343",
          "AMATH382",
          "AMATH383",
          "AMATH391",
          "AMATH449",
          "AMATH455",
          "AMATH477",
          "BIOL382",
          "CO351",
          "CO353",
          "CO367",
          "CO370",
          "CO372",
          "CO450",
          "CO452",
          "CO454",
          "CO456",
          "CO463",
          "CO466",
          "CO471",
          "CO485",
          "CO487",
          "CS341",
          "CS431",
          "CS451",
          "CS466",
          "CS476",
          "CS479",
          "CS480",
          "CS482",
          "CS485",
          "CS487",
          "PMATH370",
          "STAT440",
          "STAT441",
          "STAT442",
          "STAT444"
        ],
        type: "chooseN",
        requiredCount: 3
      }
    ]
  },
  {
    id: "computer-science-bachelor-of-computer-science-honours",
    name: "Computer Science (Bachelor of Computer Science - Honours)",
    degreeIds: [
      "bcs"
    ],
    category: "major",
    code: "H-Computer Science (BCS)",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "SJPJkCAih",
    sourceId: "67cb0e1ad8d48c4e8a4fdf6c",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/SJPJkCAih",
    requirements: [
      {
        id: "computer-science-bachelor-of-computer-science-honours-1-complete-all-the-following-cs136l-tools-and-techniques-for-software-de",
        name: "Complete all the following: CS136L - Tools and Techniques for Software Development (0.25)CS341 - Algorithms (0.50)CS350 - Operating Systems (0.50)",
        category: "program",
        courses: [
          "CS136L",
          "CS341",
          "CS350"
        ],
        type: "allOf"
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-2-complete-1-of-the-following-cs115-introduction-to-computer-science-1-0",
        name: "Complete 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)CS145 - Designing Functional Programs (Advanced Level) (0.",
        category: "program",
        courses: [
          "CS115",
          "CS135",
          "CS145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-3-complete-1-of-the-following-cs136-elementary-algorithm-design-and-data",
        name: "Complete 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CS136",
          "CS146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-4-complete-1-of-the-following-cs240-data-structures-and-data-management-",
        name: "Complete 1 of the following: CS240 - Data Structures and Data Management (0.50)CS240E - Data Structures and Data Management (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS240",
          "CS240E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-5-complete-1-of-the-following-cs241-foundations-of-sequential-programs-0",
        name: "Complete 1 of the following: CS241 - Foundations of Sequential Programs (0.50)CS241E - Foundations of Sequential Programs (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS241",
          "CS241E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-6-complete-1-of-the-following-cs245-logic-and-computation-0-50-cs245e-lo",
        name: "Complete 1 of the following: CS245 - Logic and Computation (0.50)CS245E - Logic and Computation (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS245",
          "CS245E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-7-complete-1-of-the-following-cs246-object-oriented-software-development",
        name: "Complete 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS246",
          "CS246E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-8-complete-1-of-the-following-cs251-computer-organization-and-design-0-5",
        name: "Complete 1 of the following: CS251 - Computer Organization and Design (0.50)CS251E - Computer Organization and Design (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS251",
          "CS251E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-9-complete-1-of-the-following-math127-calculus-1-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH127 - Calculus 1 for the Sciences (0.50)MATH137 - Calculus 1 for Honours Mathematics (0.50)MATH147 - Calculus 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH127",
          "MATH137",
          "MATH147"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-10-complete-1-of-the-following-math128-calculus-2-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH128",
          "MATH138",
          "MATH148"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-11-complete-1-of-the-following-math135-algebra-for-honours-mathematics-0-",
        name: "Complete 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50)MATH145 - Algebra (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH135",
          "MATH145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-12-complete-1-of-the-following-math136-linear-algebra-1-for-honours-mathe",
        name: "Complete 1 of the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50)MATH146 - Linear Algebra 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH136",
          "MATH146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-13-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-14-complete-1-of-the-following-stat230-probability-0-50-stat240-probabili",
        name: "Complete 1 of the following: STAT230 - Probability (0.50)STAT240 - Probability (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT230",
          "STAT240"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-15-complete-1-of-the-following-stat231-statistics-0-50-stat241-statistics",
        name: "Complete 1 of the following: STAT231 - Statistics (0.50)STAT241 - Statistics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT231",
          "STAT241"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-honours-16-complete-1-of-the-following-co487-applied-cryptography-0-50-cs499t-hon",
        name: "Complete 1 of the following: CO487 - Applied Cryptography (0.50)CS499T - Honours Thesis (0.50)STAT440 - Computational Inference (0.50)",
        category: "program",
        courses: [
          "CO487",
          "CS499T",
          "STAT440"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "computer-science-bachelor-of-computer-science-joint-honours",
    name: "Computer Science (Bachelor of Computer Science - Joint Honours)",
    degreeIds: [
      "bcs"
    ],
    category: "joint",
    code: "JH-Computer Science (BCS)",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "Sk7D1yRAs3",
    sourceId: "67d36391ea8879437ae85cba",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/Sk7D1yRAs3",
    requirements: [
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-1-complete-all-the-following-cs136l-tools-and-techniques-for-software-de",
        name: "Complete all the following: CS136L - Tools and Techniques for Software Development (0.25)CS341 - Algorithms (0.50)CS350 - Operating Systems (0.50)",
        category: "program",
        courses: [
          "CS136L",
          "CS341",
          "CS350"
        ],
        type: "allOf"
      },
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-2-complete-1-of-the-following-cs115-introduction-to-computer-science-1-0",
        name: "Complete 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)CS145 - Designing Functional Programs (Advanced Level) (0.",
        category: "program",
        courses: [
          "CS115",
          "CS135",
          "CS145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-3-complete-1-of-the-following-cs136-elementary-algorithm-design-and-data",
        name: "Complete 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CS136",
          "CS146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-4-complete-1-of-the-following-cs240-data-structures-and-data-management-",
        name: "Complete 1 of the following: CS240 - Data Structures and Data Management (0.50)CS240E - Data Structures and Data Management (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS240",
          "CS240E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-5-complete-1-of-the-following-cs241-foundations-of-sequential-programs-0",
        name: "Complete 1 of the following: CS241 - Foundations of Sequential Programs (0.50)CS241E - Foundations of Sequential Programs (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS241",
          "CS241E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-6-complete-1-of-the-following-cs245-logic-and-computation-0-50-cs245e-lo",
        name: "Complete 1 of the following: CS245 - Logic and Computation (0.50)CS245E - Logic and Computation (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS245",
          "CS245E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-7-complete-1-of-the-following-cs246-object-oriented-software-development",
        name: "Complete 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS246",
          "CS246E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-8-complete-1-of-the-following-cs251-computer-organization-and-design-0-5",
        name: "Complete 1 of the following: CS251 - Computer Organization and Design (0.50)CS251E - Computer Organization and Design (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS251",
          "CS251E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-9-complete-1-of-the-following-math127-calculus-1-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH127 - Calculus 1 for the Sciences (0.50)MATH137 - Calculus 1 for Honours Mathematics (0.50)MATH147 - Calculus 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH127",
          "MATH137",
          "MATH147"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-10-complete-1-of-the-following-math128-calculus-2-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH128",
          "MATH138",
          "MATH148"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-11-complete-1-of-the-following-math135-algebra-for-honours-mathematics-0-",
        name: "Complete 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50)MATH145 - Algebra (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH135",
          "MATH145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-12-complete-1-of-the-following-math136-linear-algebra-1-for-honours-mathe",
        name: "Complete 1 of the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50)MATH146 - Linear Algebra 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH136",
          "MATH146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-13-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-14-complete-1-of-the-following-stat230-probability-0-50-stat240-probabili",
        name: "Complete 1 of the following: STAT230 - Probability (0.50)STAT240 - Probability (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT230",
          "STAT240"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-computer-science-joint-honours-15-complete-1-of-the-following-stat231-statistics-0-50-stat241-statistics",
        name: "Complete 1 of the following: STAT231 - Statistics (0.50)STAT241 - Statistics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT231",
          "STAT241"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "computer-science-bachelor-of-mathematics-honours",
    name: "Computer Science (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Computer Science (BMath)",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "HkxPJk0Cj3",
    sourceId: "67d364442f9e49aba34bca85",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/HkxPJk0Cj3",
    requirements: [
      {
        id: "computer-science-bachelor-of-mathematics-honours-1-complete-all-the-following-cs136l-tools-and-techniques-for-software-de",
        name: "Complete all the following: CS136L - Tools and Techniques for Software Development (0.25)CS341 - Algorithms (0.50)CS350 - Operating Systems (0.50)",
        category: "program",
        courses: [
          "CS136L",
          "CS341",
          "CS350"
        ],
        type: "allOf"
      },
      {
        id: "computer-science-bachelor-of-mathematics-honours-2-complete-1-of-the-following-amath242-introduction-to-computational-mat",
        name: "Complete 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50)CS370 - Numerical Computation (0.50)CS371 - Introduction to Computational Mathematics (0.50)",
        category: "program",
        courses: [
          "AMATH242",
          "CS370",
          "CS371"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-honours-3-complete-1-of-the-following-cs240-data-structures-and-data-management-",
        name: "Complete 1 of the following: CS240 - Data Structures and Data Management (0.50)CS240E - Data Structures and Data Management (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS240",
          "CS240E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-honours-4-complete-1-of-the-following-cs241-foundations-of-sequential-programs-0",
        name: "Complete 1 of the following: CS241 - Foundations of Sequential Programs (0.50)CS241E - Foundations of Sequential Programs (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS241",
          "CS241E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-honours-5-complete-1-of-the-following-cs245-logic-and-computation-0-50-cs245e-lo",
        name: "Complete 1 of the following: CS245 - Logic and Computation (0.50)CS245E - Logic and Computation (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS245",
          "CS245E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-honours-6-complete-1-of-the-following-cs246-object-oriented-software-development",
        name: "Complete 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS246",
          "CS246E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-honours-7-complete-1-of-the-following-cs251-computer-organization-and-design-0-5",
        name: "Complete 1 of the following: CS251 - Computer Organization and Design (0.50)CS251E - Computer Organization and Design (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS251",
          "CS251E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-honours-8-complete-1-of-the-following-cs360-introduction-to-the-theory-of-comput",
        name: "Complete 1 of the following: CS360 - Introduction to the Theory of Computing (0.50)CS365 - Models of Computation (0.50)",
        category: "program",
        courses: [
          "CS360",
          "CS365"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-honours-9-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-honours-10-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-honours-11-the-following-cannot-be-used-towards-this-academic-plan-actsc221-intro",
        name: "The following cannot be used towards this academic plan: ACTSC221 - Introductory Financial Mathematics (Non-Specialist Level) (0.50)CO353 - Computational Discrete Optimization (0.5",
        category: "program",
        courses: [
          "ACTSC221",
          "CO353",
          "CO380",
          "CO480"
        ],
        type: "allOf"
      },
      {
        id: "computer-science-bachelor-of-mathematics-honours-12-choose-any-of-the-following-co487-applied-cryptography-0-50-cs499t-hon",
        name: "Choose any of the following: CO487 - Applied Cryptography (0.50)CS499T - Honours Thesis (0.50)STAT440 - Computational Inference (0.50)",
        category: "program",
        courses: [
          "CO487",
          "CS499T",
          "STAT440"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "computer-science-bachelor-of-mathematics-joint-honours",
    name: "Computer Science (Bachelor of Mathematics - Joint Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "joint",
    code: "JH-Computer Science (BMath)",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "HyZwkJ0Ajh",
    sourceId: "67d36458df1cb0f94b974ecf",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/HyZwkJ0Ajh",
    requirements: [
      {
        id: "computer-science-bachelor-of-mathematics-joint-honours-1-complete-all-the-following-cs136l-tools-and-techniques-for-software-de",
        name: "Complete all the following: CS136L - Tools and Techniques for Software Development (0.25)CS341 - Algorithms (0.50)CS350 - Operating Systems (0.50)",
        category: "program",
        courses: [
          "CS136L",
          "CS341",
          "CS350"
        ],
        type: "allOf"
      },
      {
        id: "computer-science-bachelor-of-mathematics-joint-honours-2-complete-1-of-the-following-cs136-elementary-algorithm-design-and-data",
        name: "Complete 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CS136",
          "CS146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-joint-honours-3-complete-1-of-the-following-cs240-data-structures-and-data-management-",
        name: "Complete 1 of the following: CS240 - Data Structures and Data Management (0.50)CS240E - Data Structures and Data Management (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS240",
          "CS240E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-joint-honours-4-complete-1-of-the-following-cs241-foundations-of-sequential-programs-0",
        name: "Complete 1 of the following: CS241 - Foundations of Sequential Programs (0.50)CS241E - Foundations of Sequential Programs (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS241",
          "CS241E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-joint-honours-5-complete-1-of-the-following-cs245-logic-and-computation-0-50-cs245e-lo",
        name: "Complete 1 of the following: CS245 - Logic and Computation (0.50)CS245E - Logic and Computation (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS245",
          "CS245E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-joint-honours-6-complete-1-of-the-following-cs246-object-oriented-software-development",
        name: "Complete 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS246",
          "CS246E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-joint-honours-7-complete-1-of-the-following-cs251-computer-organization-and-design-0-5",
        name: "Complete 1 of the following: CS251 - Computer Organization and Design (0.50)CS251E - Computer Organization and Design (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS251",
          "CS251E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-bachelor-of-mathematics-joint-honours-8-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "computer-science-minor",
    name: "Computer Science Minor",
    category: "minor",
    code: "Computer Science Minor",
    credentialType: "Minor",
    faculty: "Faculty of Mathematics",
    sourcePid: "SyPykARoh",
    sourceId: "67e5515b8d3ba57d414f9ef9",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/SyPykARoh",
    requirements: [
      {
        id: "computer-science-minor-1-complete-1-of-the-following-cs115-introduction-to-computer-science-1-0",
        name: "Complete 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)CS145 - Designing Functional Programs (Advanced Level) (0.",
        category: "program",
        courses: [
          "CS115",
          "CS135",
          "CS145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computer-science-minor-2-complete-all-the-following-cs136-elementary-algorithm-design-and-data-",
        name: "Complete all the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS136L - Tools and Techniques for Software Development (0.25)",
        category: "program",
        courses: [
          "CS136",
          "CS136L"
        ],
        type: "allOf"
      },
      {
        id: "computer-science-minor-3-complete-all-the-following-cs136l-tools-and-techniques-for-software-de",
        name: "Complete all the following: CS136L - Tools and Techniques for Software Development (0.25)CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CS136L",
          "CS146"
        ],
        type: "allOf"
      },
      {
        id: "computer-science-minor-4-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "computing-minor",
    name: "Computing Minor",
    category: "minor",
    code: "Computing Minor",
    credentialType: "Minor",
    faculty: "Faculty of Mathematics",
    sourcePid: "rkVv1kACjn",
    sourceId: "67e5507b39c79ef695bf66ea",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/rkVv1kACjn",
    requirements: [
      {
        id: "computing-minor-1-complete-1-of-the-following-cs115-introduction-to-computer-science-1-0",
        name: "Complete 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)CS145 - Designing Functional Programs (Advanced Level) (0.",
        category: "program",
        courses: [
          "CS115",
          "CS135",
          "CS145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computing-minor-2-complete-1-of-the-following-cs114-principles-of-computing-for-science-",
        name: "Complete 1 of the following: CS114 - Principles of Computing for Science (0.50)CS116 - Introduction to Computer Science 2 (0.50)",
        category: "program",
        courses: [
          "CS114",
          "CS116"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "computing-minor-3-complete-all-the-following-cs136-elementary-algorithm-design-and-data-",
        name: "Complete all the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS136L - Tools and Techniques for Software Development (0.25)",
        category: "program",
        courses: [
          "CS136",
          "CS136L"
        ],
        type: "allOf"
      },
      {
        id: "computing-minor-4-complete-all-the-following-cs146-elementary-algorithm-design-and-data-",
        name: "Complete all the following: CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)CS136L - Tools and Techniques for Software Development (0.25)",
        category: "program",
        courses: [
          "CS146",
          "CS136L"
        ],
        type: "allOf"
      },
      {
        id: "computing-minor-5-complete-all-the-following-comm432-electronic-business-0-50",
        name: "Complete all the following: COMM432 - Electronic Business (0.50)",
        category: "program",
        courses: [
          "COMM432"
        ],
        type: "allOf"
      },
      {
        id: "computing-minor-6-the-following-cannot-be-used-towards-this-academic-plan-cs399-readings",
        name: "The following cannot be used towards this academic plan: CS399 - Readings in Computer Science (0.50)CS499R - Readings in Computer Science (0.50)CS499T - Honours Thesis (0.50)",
        category: "program",
        courses: [
          "CS399",
          "CS499R",
          "CS499T"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "data-analytics-specialization",
    name: "Data Analytics Specialization",
    category: "specialization",
    code: "CPA-Data Analytics Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "S1-CkkAAih",
    sourceId: "64d14ee5173c99cef4fed4ec",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/S1-CkkAAih",
    parentProgramCodes: [
      "H-Mathematics/Chartered Professional Accountancy"
    ],
    requirements: [
      {
        id: "data-analytics-specialization-1-complete-all-the-following-cs234-data-types-and-structures-0-50-cs338-",
        name: "Complete all the following: CS234 - Data Types and Structures (0.50)CS338 - Computer Applications in Business: Databases (0.50)STAT341 - Computational Statistics and Data Analysis ",
        category: "program",
        courses: [
          "CS234",
          "CS338",
          "STAT341",
          "STAT371"
        ],
        type: "allOf"
      },
      {
        id: "data-analytics-specialization-2-complete-3-of-the-following-stat441-statistical-learning-classificatio",
        name: "Complete 3 of the following: STAT441 - Statistical Learning - Classification (0.50)STAT442 - Data Visualization (0.50)STAT443 - Forecasting (0.50)STAT444 - Statistical Learning - A",
        category: "program",
        courses: [
          "STAT441",
          "STAT442",
          "STAT443",
          "STAT444"
        ],
        type: "chooseN",
        requiredCount: 3
      }
    ]
  },
  {
    id: "data-science-bachelor-of-computer-science-honours",
    name: "Data Science (Bachelor of Computer Science - Honours)",
    degreeIds: [
      "bcs"
    ],
    category: "major",
    code: "H-Data Science (BCS)",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "rkgPyyC0o2",
    sourceId: "67d364652f9e49aba34bcdb9",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/rkgPyyC0o2",
    requirements: [
      {
        id: "data-science-bachelor-of-computer-science-honours-1-complete-all-the-following-cs136l-tools-and-techniques-for-software-de",
        name: "Complete all the following: CS136L - Tools and Techniques for Software Development (0.25)CS341 - Algorithms (0.50)CS348 - Introduction to Database Management (0.50)CS350 - Operatin",
        category: "program",
        courses: [
          "CS136L",
          "CS341",
          "CS348",
          "CS350",
          "CS451",
          "STAT330",
          "STAT331",
          "STAT341"
        ],
        type: "allOf"
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-2-complete-1-of-the-following-cs115-introduction-to-computer-science-1-0",
        name: "Complete 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)CS145 - Designing Functional Programs (Advanced Level) (0.",
        category: "program",
        courses: [
          "CS115",
          "CS135",
          "CS145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-3-complete-1-of-the-following-cs136-elementary-algorithm-design-and-data",
        name: "Complete 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CS136",
          "CS146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-4-complete-1-of-the-following-cs240-data-structures-and-data-management-",
        name: "Complete 1 of the following: CS240 - Data Structures and Data Management (0.50)CS240E - Data Structures and Data Management (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS240",
          "CS240E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-5-complete-1-of-the-following-cs241-foundations-of-sequential-programs-0",
        name: "Complete 1 of the following: CS241 - Foundations of Sequential Programs (0.50)CS241E - Foundations of Sequential Programs (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS241",
          "CS241E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-6-complete-1-of-the-following-cs245-logic-and-computation-0-50-cs245e-lo",
        name: "Complete 1 of the following: CS245 - Logic and Computation (0.50)CS245E - Logic and Computation (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS245",
          "CS245E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-7-complete-1-of-the-following-cs246-object-oriented-software-development",
        name: "Complete 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS246",
          "CS246E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-8-complete-1-of-the-following-cs251-computer-organization-and-design-0-5",
        name: "Complete 1 of the following: CS251 - Computer Organization and Design (0.50)CS251E - Computer Organization and Design (Enriched) (0.50)",
        category: "program",
        courses: [
          "CS251",
          "CS251E"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-9-complete-all-the-following-cs480-introduction-to-machine-learning-0-50",
        name: "Complete all the following: CS480 - Introduction to Machine Learning (0.50)",
        category: "program",
        courses: [
          "CS480"
        ],
        type: "allOf"
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-10-complete-1-of-the-following-cs448-database-systems-implementation-0-50",
        name: "Complete 1 of the following: CS448 - Database Systems Implementation (0.50)CS454 - Distributed Systems (0.50)CS484 - Computational Vision (0.50)CS485 - Statistical and Computationa",
        category: "program",
        courses: [
          "CS448",
          "CS454",
          "CS484",
          "CS485",
          "CS486"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-11-complete-all-the-following-cs485-statistical-and-computational-foundat",
        name: "Complete all the following: CS485 - Statistical and Computational Foundations of Machine Learning (0.50)",
        category: "program",
        courses: [
          "CS485"
        ],
        type: "allOf"
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-12-complete-1-of-the-following-cs448-database-systems-implementation-0-50",
        name: "Complete 1 of the following: CS448 - Database Systems Implementation (0.50)CS454 - Distributed Systems (0.50)CS480 - Introduction to Machine Learning (0.50)CS484 - Computational Vi",
        category: "program",
        courses: [
          "CS448",
          "CS454",
          "CS480",
          "CS484",
          "CS486"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-13-complete-all-the-following-cs486-introduction-to-artificial-intelligen",
        name: "Complete all the following: CS486 - Introduction to Artificial Intelligence (0.50)",
        category: "program",
        courses: [
          "CS486"
        ],
        type: "allOf"
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-14-complete-1-of-the-following-cs448-database-systems-implementation-0-50",
        name: "Complete 1 of the following: CS448 - Database Systems Implementation (0.50)CS454 - Distributed Systems (0.50)CS480 - Introduction to Machine Learning (0.50)CS484 - Computational Vi",
        category: "program",
        courses: [
          "CS448",
          "CS454",
          "CS480",
          "CS484",
          "CS485"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-15-complete-1-of-the-following-math127-calculus-1-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH127 - Calculus 1 for the Sciences (0.50)MATH137 - Calculus 1 for Honours Mathematics (0.50)MATH147 - Calculus 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH127",
          "MATH137",
          "MATH147"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-16-complete-1-of-the-following-math128-calculus-2-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH128",
          "MATH138",
          "MATH148"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-17-complete-1-of-the-following-math135-algebra-for-honours-mathematics-0-",
        name: "Complete 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50)MATH145 - Algebra (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH135",
          "MATH145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-18-complete-1-of-the-following-math136-linear-algebra-1-for-honours-mathe",
        name: "Complete 1 of the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50)MATH146 - Linear Algebra 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH136",
          "MATH146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-19-complete-1-of-the-following-math235-linear-algebra-2-for-honours-mathe",
        name: "Complete 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50)MATH245 - Linear Algebra 2 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH235",
          "MATH245"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-20-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-21-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-22-complete-1-of-the-following-stat230-probability-0-50-stat240-probabili",
        name: "Complete 1 of the following: STAT230 - Probability (0.50)STAT240 - Probability (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT230",
          "STAT240"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-23-complete-1-of-the-following-stat231-statistics-0-50-stat241-statistics",
        name: "Complete 1 of the following: STAT231 - Statistics (0.50)STAT241 - Statistics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT231",
          "STAT241"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-24-complete-2-of-the-following-stat431-generalized-linear-models-and-thei",
        name: "Complete 2 of the following: STAT431 - Generalized Linear Models and their Applications (0.50)STAT440 - Computational Inference (0.50)STAT441 - Statistical Learning - Classificatio",
        category: "program",
        courses: [
          "STAT431",
          "STAT440",
          "STAT441",
          "STAT442",
          "STAT443",
          "STAT444"
        ],
        type: "chooseN",
        requiredCount: 2
      },
      {
        id: "data-science-bachelor-of-computer-science-honours-25-choose-any-of-the-following-co487-applied-cryptography-0-50-cs499t-hon",
        name: "Choose any of the following: CO487 - Applied Cryptography (0.50)CS499T - Honours Thesis (0.50)STAT440 - Computational Inference (0.50)",
        category: "program",
        courses: [
          "CO487",
          "CS499T",
          "STAT440"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "data-science-bachelor-of-mathematics-honours",
    name: "Data Science (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Data Science (BMath)",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "HymD11R0j3",
    sourceId: "68af177ef8a6877efebe591a",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/HymD11R0j3",
    requirements: [
      {
        id: "data-science-bachelor-of-mathematics-honours-1-complete-all-the-following-cs136l-tools-and-techniques-for-software-de",
        name: "Complete all the following: CS136L - Tools and Techniques for Software Development (0.25)CS230 - Introduction to Computers and Computer Systems (0.50)CS231 - Algorithmic Problem So",
        category: "program",
        courses: [
          "CS136L",
          "CS230",
          "CS231",
          "CS234",
          "CS338",
          "CS431",
          "DATSC401",
          "ENGL378",
          "PHIL228",
          "STAT331",
          "STAT341",
          "STAT442"
        ],
        type: "allOf"
      },
      {
        id: "data-science-bachelor-of-mathematics-honours-2-complete-1-of-the-following-amath231-calculus-4-0-50-amath250-introduc",
        name: "Complete 1 of the following: AMATH231 - Calculus 4 (0.50)AMATH250 - Introduction to Differential Equations (0.50)AMATH251 - Introduction to Differential Equations (Advanced Level) ",
        category: "program",
        courses: [
          "AMATH231",
          "AMATH250",
          "AMATH251"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-mathematics-honours-3-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-mathematics-honours-4-complete-1-of-the-following-cs136-elementary-algorithm-design-and-data",
        name: "Complete 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CS136",
          "CS146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-mathematics-honours-5-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-mathematics-honours-6-complete-2-of-the-following-amath345-data-driven-mathematical-models-0",
        name: "Complete 2 of the following: AMATH345 - Data-Driven Mathematical Models (0.50)AMATH391 - Data Analysis with Fourier and Wavelet Methods (0.50)CO353 - Computational Discrete Optimiz",
        category: "program",
        courses: [
          "AMATH345",
          "AMATH391",
          "CO353",
          "CO365",
          "CO367",
          "CO370"
        ],
        type: "chooseN",
        requiredCount: 2
      },
      {
        id: "data-science-bachelor-of-mathematics-honours-7-complete-2-of-the-following-amath445-scientific-machine-learning-0-50-",
        name: "Complete 2 of the following: AMATH445 - Scientific Machine Learning (0.50)STAT441 - Statistical Learning - Classification (0.50)STAT443 - Forecasting (0.50)STAT444 - Statistical Le",
        category: "program",
        courses: [
          "AMATH445",
          "STAT441",
          "STAT443",
          "STAT444"
        ],
        type: "chooseN",
        requiredCount: 2
      },
      {
        id: "data-science-bachelor-of-mathematics-honours-8-complete-1-of-the-following-amath242-introduction-to-computational-mat",
        name: "Complete 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50)CS335 - Computational Methods in Business and Finance (0.50)CS370 - Numerical Computation (0",
        category: "program",
        courses: [
          "AMATH242",
          "CS335",
          "CS370",
          "CS371"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-mathematics-honours-9-complete-1-of-the-following-amath449-neural-networks-0-50-cs479-neural",
        name: "Complete 1 of the following: AMATH449 - Neural Networks (0.50)CS479 - Neural Networks (0.50)",
        category: "program",
        courses: [
          "AMATH449",
          "CS479"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-mathematics-honours-10-complete-all-the-following-stat330-mathematical-statistics-0-50",
        name: "Complete all the following: STAT330 - Mathematical Statistics (0.50)",
        category: "program",
        courses: [
          "STAT330"
        ],
        type: "allOf"
      },
      {
        id: "data-science-bachelor-of-mathematics-honours-11-complete-1-of-the-following-stat431-generalized-linear-models-and-thei",
        name: "Complete 1 of the following: STAT431 - Generalized Linear Models and their Applications (0.50)STAT440 - Computational Inference (0.50)",
        category: "program",
        courses: [
          "STAT431",
          "STAT440"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "data-science-bachelor-of-mathematics-honours-12-complete-all-the-following-stat332-sampling-and-experimental-design-0-",
        name: "Complete all the following: STAT332 - Sampling and Experimental Design (0.50)",
        category: "program",
        courses: [
          "STAT332"
        ],
        type: "allOf"
      },
      {
        id: "data-science-bachelor-of-mathematics-honours-13-complete-1-of-the-following-stat430-experimental-design-0-50-stat454-s",
        name: "Complete 1 of the following: STAT430 - Experimental Design (0.50)STAT454 - Sampling Theory and Practice (0.50)",
        category: "program",
        courses: [
          "STAT430",
          "STAT454"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "digital-hardware-specialization",
    name: "Digital Hardware Specialization",
    category: "specialization",
    code: "CS-Digital Hardware Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "H1Svy1R0jh",
    sourceId: "65f909d630e200406e55d799",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/H1Svy1R0jh",
    parentProgramCodes: [
      "H-BBA & BCS Double Degree",
      "H-Computer Science (BCS)",
      "H-Computer Science (BMath)"
    ],
    requirements: [
      {
        id: "digital-hardware-specialization-1-complete-all-the-following-ece124-digital-circuits-and-systems-0-50-ec",
        name: "Complete all the following: ECE124 - Digital Circuits and Systems (0.50)ECE222 - Digital Computers (0.50)ECE327 - Digital Hardware Systems (0.50)ECE423 - Embedded Computer Systems ",
        category: "program",
        courses: [
          "ECE124",
          "ECE222",
          "ECE327",
          "ECE423"
        ],
        type: "allOf"
      },
      {
        id: "digital-hardware-specialization-2-complete-1-of-the-following-cs450-computer-architecture-0-50-ece320-co",
        name: "Complete 1 of the following: CS450 - Computer Architecture (0.50)ECE320 - Computer Architecture (0.50)",
        category: "program",
        courses: [
          "CS450",
          "ECE320"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "digital-hardware-specialization-3-complete-2-of-the-following-cs452-real-time-programming-0-50-cs454-dis",
        name: "Complete 2 of the following: CS452 - Real-Time Programming (0.50)CS454 - Distributed Systems (0.50)CS456 - Computer Networks (0.50)CS457 - System Performance Evaluation (0.50)",
        category: "program",
        courses: [
          "CS452",
          "CS454",
          "CS456",
          "CS457"
        ],
        type: "chooseN",
        requiredCount: 2
      },
      {
        id: "digital-hardware-specialization-4-complete-1-of-the-following-ece224-embedded-microprocessor-systems-0-5",
        name: "Complete 1 of the following: ECE224 - Embedded Microprocessor Systems (0.50)MTE325 - Microprocessor Systems and Interfacing for Mechatronics Engineering (0.50)",
        category: "program",
        courses: [
          "ECE224",
          "MTE325"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "digital-hardware-specialization-5-complete-1-of-the-following-gene123-electrical-circuits-and-instrument",
        name: "Complete 1 of the following: GENE123 - Electrical Circuits and Instrumentation (0.50)MTE120 - Circuits (0.75)",
        category: "program",
        courses: [
          "GENE123",
          "MTE120"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "economics-specialization",
    name: "Economics Specialization",
    category: "specialization",
    code: "AMATH-Economics Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "ByQH1y0Asn",
    sourceId: "69b1a185306256e3f13d535d",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/ByQH1y0Asn",
    parentProgramCodes: [
      "H-Applied Mathematics"
    ],
    requirements: [
      {
        id: "economics-specialization-1-choose-any-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Choose any of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "engineering-specialization",
    name: "Engineering Specialization",
    category: "specialization",
    code: "AMATH-Engineering Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "HkzBkkCCoh",
    sourceId: "69b1a18a8197cc8370b6a13b",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/HkzBkkCCoh",
    parentProgramCodes: [
      "H-Applied Mathematics"
    ],
    requirements: [
      {
        id: "engineering-specialization-1-complete-all-the-following-amath271-introduction-to-theoretical-mechan",
        name: "Complete all the following: AMATH271 - Introduction to Theoretical Mechanics (0.50)AMATH361 - Continuum Mechanics (0.50)AMATH463 - Fluid Mechanics (0.50)ME219 - Mechanics of Deform",
        category: "program",
        courses: [
          "AMATH271",
          "AMATH361",
          "AMATH463",
          "ME219",
          "ME250",
          "ME353",
          "ME354",
          "ME456"
        ],
        type: "allOf"
      },
      {
        id: "engineering-specialization-2-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)STAT331 - Applied Linear Models (0.50)STAT340 - ",
        category: "program",
        courses: [
          "CO250",
          "CO255",
          "STAT331",
          "STAT340"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "engineering-specialization-3-complete-1-of-the-following-ece140-linear-circuits-0-50-gene123-electr",
        name: "Complete 1 of the following: ECE140 - Linear Circuits (0.50)GENE123 - Electrical Circuits and Instrumentation (0.50)",
        category: "program",
        courses: [
          "ECE140",
          "GENE123"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "engineering-specialization-4-complete-1-of-the-following-me557-combustion-1-0-50-me564-aerodynamics",
        name: "Complete 1 of the following: ME557 - Combustion 1 (0.50)ME564 - Aerodynamics (0.50)ME571 - Clean Air Technologies (0.50)",
        category: "program",
        courses: [
          "ME557",
          "ME564",
          "ME571"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "engineering-specialization-5-complete-all-the-following-amath455-control-theory-0-50-ece207-signals",
        name: "Complete all the following: AMATH455 - Control Theory (0.50)ECE207 - Signals and Systems (0.50)ECE240 - Electronic Circuits 1 (0.50)ECE318 - Communication Systems (0.50)ECE380 - An",
        category: "program",
        courses: [
          "AMATH455",
          "ECE207",
          "ECE240",
          "ECE318",
          "ECE380"
        ],
        type: "allOf"
      },
      {
        id: "engineering-specialization-6-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)CS475 - Computational Linear Algebra (0.50)STAT3",
        category: "program",
        courses: [
          "CO250",
          "CO255",
          "CS475",
          "STAT331",
          "STAT340"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "engineering-specialization-7-complete-1-of-the-following-ece140-linear-circuits-0-50-gene123-electr",
        name: "Complete 1 of the following: ECE140 - Linear Circuits (0.50)GENE123 - Electrical Circuits and Instrumentation (0.50)",
        category: "program",
        courses: [
          "ECE140",
          "GENE123"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "engineering-specialization-8-complete-2-of-the-following-ece313-digital-signal-processing-0-50-ece4",
        name: "Complete 2 of the following: ECE313 - Digital Signal Processing (0.50)ECE484 - Digital Control Applications (0.50)ECE486 - Robot Dynamics and Control (0.50)SYDE544 - Biomedical Mea",
        category: "program",
        courses: [
          "ECE313",
          "ECE484",
          "ECE486",
          "SYDE544",
          "SYDE572"
        ],
        type: "chooseN",
        requiredCount: 2
      },
      {
        id: "engineering-specialization-9-complete-all-the-following-amath361-continuum-mechanics-0-50-amath463-",
        name: "Complete all the following: AMATH361 - Continuum Mechanics (0.50)AMATH463 - Fluid Mechanics (0.50)CHE230 - Physical Chemistry 1 (0.50)CHE231 - Physical Chemistry 2 (0.50)CHE312 - M",
        category: "program",
        courses: [
          "AMATH361",
          "AMATH463",
          "CHE230",
          "CHE231",
          "CHE312",
          "CHE313",
          "CHE330"
        ],
        type: "allOf"
      },
      {
        id: "engineering-specialization-10-complete-2-of-the-following-che314-chemical-reaction-engineering-0-50-",
        name: "Complete 2 of the following: CHE314 - Chemical Reaction Engineering (0.50)CHE331 - Electrochemical Engineering (0.50)CHE341 - Introduction to Process Control (0.50)CHE361 - Bioproc",
        category: "program",
        courses: [
          "CHE314",
          "CHE331",
          "CHE341",
          "CHE361",
          "CHE522"
        ],
        type: "chooseN",
        requiredCount: 2
      }
    ]
  },
  {
    id: "actsc-finance-specialization-finance-specialization",
    name: "Finance Specialization",
    category: "specialization",
    code: "ACTSC-Finance Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "SJSk100i2",
    sourceId: "6a2064b248e654dda75797e6",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/SJSk100i2",
    parentProgramCodes: [
      "H-Actuarial Science"
    ],
    requirements: [
      {
        id: "finance-specialization-1-complete-all-the-following-actsc445-quantitative-enterprise-risk-manag",
        name: "Complete all the following: ACTSC445 - Quantitative Enterprise Risk Management (0.50)STAT340 - Stochastic Simulation Methods (0.50)",
        category: "program",
        courses: [
          "ACTSC445",
          "STAT340"
        ],
        type: "allOf"
      },
      {
        id: "finance-specialization-2-complete-1-of-the-following-actsc423-topics-in-financial-econometrics-",
        name: "Complete 1 of the following: ACTSC423 - Topics in Financial Econometrics (0.50)AFM423 - Topics in Financial Econometrics (0.50)AFM424 - Equity Investments (0.50)",
        category: "program",
        courses: [
          "ACTSC423",
          "AFM423",
          "AFM424"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "finance-specialization-3-complete-1-of-the-following-actsc447-numerical-computation-for-financi",
        name: "Complete 1 of the following: ACTSC447 - Numerical Computation for Financial Modelling (0.50)CS476 - Numerical Computation for Financial Modelling (0.50)",
        category: "program",
        courses: [
          "ACTSC447",
          "CS476"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "finance-specialization-4-complete-1-of-the-following-amath242-introduction-to-computational-mat",
        name: "Complete 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50)CS370 - Numerical Computation (0.50)CS371 - Introduction to Computational Mathematics (0.50)",
        category: "program",
        courses: [
          "AMATH242",
          "CS370",
          "CS371"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "cpa-finance-specialization-finance-specialization",
    name: "Finance Specialization",
    category: "specialization",
    code: "CPA-Finance Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "BkIAkyRRs3",
    sourceId: "64d14ee64fbac12e6f3b3f20",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/BkIAkyRRs3",
    parentProgramCodes: [
      "H-Mathematics/Chartered Professional Accountancy"
    ],
    requirements: [
      {
        id: "finance-specialization-1-complete-all-the-following-actsc231-introductory-financial-mathematics",
        name: "Complete all the following: ACTSC231 - Introductory Financial Mathematics (0.50)",
        category: "program",
        courses: [
          "ACTSC231"
        ],
        type: "allOf"
      },
      {
        id: "finance-specialization-2-complete-3-of-the-following-amath350-differential-equations-for-busine",
        name: "Complete 3 of the following: AMATH350 - Differential Equations for Business and Economics (0.50)CO372 - Portfolio Optimization Models (0.50)CS335 - Computational Methods in Busines",
        category: "program",
        courses: [
          "AMATH350",
          "CO372",
          "CS335",
          "MATBUS470",
          "MATBUS471",
          "MATBUS472",
          "STAT334",
          "STAT341"
        ],
        type: "chooseN",
        requiredCount: 3
      }
    ]
  },
  {
    id: "game-design-specialization",
    name: "Game Design Specialization",
    category: "specialization",
    code: "CS-Game Design Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "HkTtesszA",
    sourceId: "663e208416a004a757b58183",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/HkTtesszA",
    parentProgramCodes: [
      "H-Computer Science (BCS)",
      "H-Computer Science (BMath)",
      "H-BBA & BCS Double Degree"
    ],
    requirements: [
      {
        id: "game-design-specialization-1-complete-all-the-following-dac204-introduction-to-game-design-0-50-dac",
        name: "Complete all the following: DAC204 - Introduction to Game Design (0.50)DAC305 - Designing and Evaluating Digital Games (0.50)",
        category: "program",
        courses: [
          "DAC204",
          "DAC305"
        ],
        type: "allOf"
      },
      {
        id: "game-design-specialization-2-complete-1-of-the-following-commst149-introduction-to-critical-design-",
        name: "Complete 1 of the following: COMMST149 - Introduction to Critical Design Practices (0.50)DAC209 - Introduction to Critical Design Practices (0.50)DAC302 - Digital Storytelling Desi",
        category: "program",
        courses: [
          "COMMST149",
          "DAC209",
          "DAC302",
          "DAC309",
          "ENGL392A",
          "ENGL392B",
          "ENGL408C",
          "FINE247",
          "THPERF149"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "game-design-specialization-3-complete-1-of-the-following-commst210-key-concepts-in-media-and-cultur",
        name: "Complete 1 of the following: COMMST210 - Key Concepts in Media and Culture (0.50)COMMST339 - Media, Images, and Communication (0.50)COMMST430 - Communication and Social Justice (0.",
        category: "program",
        courses: [
          "COMMST210",
          "COMMST339",
          "COMMST430",
          "COMMST435",
          "ENGL293",
          "GSJ205",
          "SOC324"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "game-design-specialization-4-complete-1-of-the-following-commst235-games-and-society-0-50-engl294-i",
        name: "Complete 1 of the following: COMMST235 - Games and Society (0.50)ENGL294 - Introduction to Critical Game Studies (0.50)",
        category: "program",
        courses: [
          "COMMST235",
          "ENGL294"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "game-design-specialization-5-complete-2-of-the-following-cs449-human-computer-interaction-0-50-cs45",
        name: "Complete 2 of the following: CS449 - Human-Computer Interaction (0.50)CS454 - Distributed Systems (0.50)CS488 - Introduction to Computer Graphics (0.50)",
        category: "program",
        courses: [
          "CS449",
          "CS454",
          "CS488"
        ],
        type: "chooseN",
        requiredCount: 2
      }
    ]
  },
  {
    id: "human-computer-interaction-specialization",
    name: "Human-Computer Interaction Specialization",
    category: "specialization",
    code: "CS-Human-Computer Interaction Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "rkP1y00ih",
    sourceId: "678174f412708a3fc23e7771",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/rkP1y00ih",
    parentProgramCodes: [
      "H-BBA & BCS Double Degree",
      "H-Computer Science (BCS)",
      "H-Computer Science (BMath)"
    ],
    requirements: [
      {
        id: "human-computer-interaction-specialization-1-complete-all-the-following-cs349-user-interfaces-0-50-cs449-human-comp",
        name: "Complete all the following: CS349 - User Interfaces (0.50)CS449 - Human-Computer Interaction (0.50)",
        category: "program",
        courses: [
          "CS349",
          "CS449"
        ],
        type: "allOf"
      },
      {
        id: "human-computer-interaction-specialization-2-complete-1-of-the-following-bet360-design-frameworks-for-social-ventur",
        name: "Complete 1 of the following: BET360 - Design Frameworks for Social Ventures (0.50)CS492 - The Social Implications of Computing (0.50)GSJ205 - Technology, Gender, and Social Justice",
        category: "program",
        courses: [
          "BET360",
          "CS492",
          "GSJ205",
          "MSE442",
          "PACS315",
          "SOC232",
          "STV202",
          "STV205",
          "STV208",
          "STV210",
          "STV302",
          "STV304",
          "STV305",
          "STV306"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "human-computer-interaction-specialization-3-complete-2-of-the-following-engl108d-digital-lives-0-50-engl293-introd",
        name: "Complete 2 of the following: ENGL108D - Digital Lives (0.50)ENGL293 - Introduction to Digital Media Studies (0.50)ENGL295 - Social Media (0.50)FINE100 - Studio Fundamentals (0.50)F",
        category: "program",
        courses: [
          "ENGL108D",
          "ENGL293",
          "ENGL295",
          "FINE100",
          "FINE150",
          "INTEG121",
          "INTEG251",
          "KIN320",
          "PSYCH207",
          "PSYCH261",
          "STAT332",
          "STAT430",
          "VCULT257"
        ],
        type: "chooseN",
        requiredCount: 2
      },
      {
        id: "human-computer-interaction-specialization-4-choose-any-of-the-following-cs454-distributed-systems-0-50-cs480-intro",
        name: "Choose any of the following: CS454 - Distributed Systems (0.50)CS480 - Introduction to Machine Learning (0.50)CS484 - Computational Vision (0.50)CS486 - Introduction to Artificial ",
        category: "program",
        courses: [
          "CS454",
          "CS480",
          "CS484",
          "CS486",
          "CS488"
        ],
        type: "allOf"
      },
      {
        id: "human-computer-interaction-specialization-5-complete-no-more-than-1-from-the-following-cs445-software-requirements",
        name: "Complete no more than 1 from the following: CS445 - Software Requirements Specification and Analysis (0.50)ECE451 - Software Requirements Specification and Analysis (0.50)SE463 - S",
        category: "program",
        courses: [
          "CS445",
          "ECE451",
          "SE463"
        ],
        type: "allOf"
      },
      {
        id: "human-computer-interaction-specialization-6-complete-no-more-than-1-from-the-following-cs446-software-design-and-a",
        name: "Complete no more than 1 from the following: CS446 - Software Design and Architectures (0.50)ECE452 - Software Design and Architectures (0.50)SE464 - Software Design and Architectur",
        category: "program",
        courses: [
          "CS446",
          "ECE452",
          "SE464"
        ],
        type: "allOf"
      },
      {
        id: "human-computer-interaction-specialization-7-complete-no-more-than-1-from-the-following-cs447-software-testing-qual",
        name: "Complete no more than 1 from the following: CS447 - Software Testing, Quality Assurance, and Maintenance (0.50)ECE453 - Software Testing, Quality Assurance, and Maintenance (0.50)S",
        category: "program",
        courses: [
          "CS447",
          "ECE453",
          "SE465"
        ],
        type: "allOf"
      },
      {
        id: "human-computer-interaction-specialization-8-complete-no-more-than-1-from-the-following-cs453-software-and-systems-",
        name: "Complete no more than 1 from the following: CS453 - Software and Systems Security (0.50)CS459 - Privacy, Cryptography, Network and Data Security (0.50)",
        category: "program",
        courses: [
          "CS453",
          "CS459"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "information-technology-management-bachelor-of-mathematics-honours",
    name: "Information Technology Management (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Information Technology Management",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "BJx01yRCin",
    sourceId: "671fb531d797c95275bb8444",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/BJx01yRCin",
    requirements: [
      {
        id: "information-technology-management-bachelor-of-mathematics-honours-1-complete-all-the-following-afm101-introduction-to-financial-accounting",
        name: "Complete all the following: AFM101 - Introduction to Financial Accounting (0.50)AFM102 - Introduction to Managerial Accounting (0.50)BUS111W - Understanding the Business Environmen",
        category: "program",
        courses: [
          "AFM101",
          "AFM102",
          "BUS111W",
          "BUS121W",
          "BUS381W",
          "COMM431",
          "COMM432",
          "CS230",
          "CS330",
          "CS338",
          "CS430",
          "CS436",
          "ECON101",
          "ECON102",
          "MSE211",
          "MSE311",
          "STAT371",
          "STAT372",
          "STV202"
        ],
        type: "allOf"
      },
      {
        id: "information-technology-management-bachelor-of-mathematics-honours-2-complete-1-of-the-following-actsc221-introductory-financial-mathematic",
        name: "Complete 1 of the following: ACTSC221 - Introductory Financial Mathematics (Non-Specialist Level) (0.50)ACTSC231 - Introductory Financial Mathematics (0.50)",
        category: "program",
        courses: [
          "ACTSC221",
          "ACTSC231"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "information-technology-management-bachelor-of-mathematics-honours-3-complete-1-of-the-following-afm231-business-law-0-50-ls283-business-la",
        name: "Complete 1 of the following: AFM231 - Business Law (0.50)LS283 - Business Law (0.50)",
        category: "program",
        courses: [
          "AFM231",
          "LS283"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "information-technology-management-bachelor-of-mathematics-honours-4-complete-1-of-the-following-arbus302-principles-of-marketing-0-50-bus2",
        name: "Complete 1 of the following: ARBUS302 - Principles of Marketing (0.50)BUS252W - Introduction to Marketing Management (WLU) (0.50)MGMT244 - Principles of Marketing (0.50)",
        category: "program",
        courses: [
          "ARBUS302",
          "BUS252W",
          "MGMT244"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "information-technology-management-bachelor-of-mathematics-honours-5-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "information-technology-management-bachelor-of-mathematics-honours-6-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "information-technology-management-bachelor-of-mathematics-honours-7-complete-1-of-the-following-stv302-information-technology-and-society-",
        name: "Complete 1 of the following: STV302 - Information Technology and Society (0.50)STV304 - Technology in Canadian Society (0.50)STV305 - Technology, Society and the Modern City (0.50)",
        category: "program",
        courses: [
          "STV302",
          "STV304",
          "STV305",
          "STV306",
          "STV400",
          "STV401"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "mathematical-finance-bachelor-of-mathematics-honours",
    name: "Mathematical Finance (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Mathematical Finance",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "ryAkJARjn",
    sourceId: "66f599a068d5ff03c4edfe8f",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/ryAkJARjn",
    requirements: [
      {
        id: "mathematical-finance-bachelor-of-mathematics-honours-1-complete-all-the-following-actsc231-introductory-financial-mathematics",
        name: "Complete all the following: ACTSC231 - Introductory Financial Mathematics (0.50)ACTSC372 - Investment Science and Corporate Finance (0.50)ACTSC445 - Quantitative Enterprise Risk Ma",
        category: "program",
        courses: [
          "ACTSC231",
          "ACTSC372",
          "ACTSC445",
          "ACTSC446",
          "PMATH351",
          "PMATH450",
          "STAT330",
          "STAT331",
          "STAT333",
          "STAT443"
        ],
        type: "allOf"
      },
      {
        id: "mathematical-finance-bachelor-of-mathematics-honours-2-complete-all-the-following-afm101-introduction-to-financial-accounting",
        name: "Complete all the following: AFM101 - Introduction to Financial Accounting (0.50)",
        category: "program",
        courses: [
          "AFM101"
        ],
        type: "allOf"
      },
      {
        id: "mathematical-finance-bachelor-of-mathematics-honours-3-complete-all-the-following-afm102-introduction-to-managerial-accountin",
        name: "Complete all the following: AFM102 - Introduction to Managerial Accounting (0.50)",
        category: "program",
        courses: [
          "AFM102"
        ],
        type: "allOf"
      },
      {
        id: "mathematical-finance-bachelor-of-mathematics-honours-4-complete-1-of-the-following-afm131-introduction-to-business-in-north-a",
        name: "Complete 1 of the following: AFM131 - Introduction to Business in North America (0.50)ARBUS101 - Introduction to Business in North America (0.50)",
        category: "program",
        courses: [
          "AFM131",
          "ARBUS101"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-finance-bachelor-of-mathematics-honours-5-complete-1-of-the-following-amath242-introduction-to-computational-mat",
        name: "Complete 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50)CS335 - Computational Methods in Business and Finance (0.50)CS371 - Introduction to Computat",
        category: "program",
        courses: [
          "AMATH242",
          "CS335",
          "CS371"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-finance-bachelor-of-mathematics-honours-6-complete-1-of-the-following-amath250-introduction-to-differential-equa",
        name: "Complete 1 of the following: AMATH250 - Introduction to Differential Equations (0.50)AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)AMATH350 - Differentia",
        category: "program",
        courses: [
          "AMATH250",
          "AMATH251",
          "AMATH350"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-finance-bachelor-of-mathematics-honours-7-complete-1-of-the-following-amath351-ordinary-differential-equations-0",
        name: "Complete 1 of the following: AMATH351 - Ordinary Differential Equations (0.50)CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50",
        category: "program",
        courses: [
          "AMATH351",
          "CO250",
          "CO255",
          "PMATH352"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-finance-bachelor-of-mathematics-honours-8-complete-1-of-the-following-actsc447-numerical-computation-for-financi",
        name: "Complete 1 of the following: ACTSC447 - Numerical Computation for Financial Modelling (0.50)AMATH353 - Partial Differential Equations 1 (0.50)CO372 - Portfolio Optimization Models ",
        category: "program",
        courses: [
          "ACTSC447",
          "AMATH353",
          "CO372",
          "CS476",
          "PMATH453"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-finance-bachelor-of-mathematics-honours-9-complete-all-the-following-econ101-introduction-to-microeconomics-0-50",
        name: "Complete all the following: ECON101 - Introduction to Microeconomics (0.50)",
        category: "program",
        courses: [
          "ECON101"
        ],
        type: "allOf"
      },
      {
        id: "mathematical-finance-bachelor-of-mathematics-honours-10-complete-all-the-following-econ102-introduction-to-macroeconomics-0-50",
        name: "Complete all the following: ECON102 - Introduction to Macroeconomics (0.50)",
        category: "program",
        courses: [
          "ECON102"
        ],
        type: "allOf"
      },
      {
        id: "mathematical-finance-bachelor-of-mathematics-honours-11-complete-all-the-following-econ201-microeconomic-theory-for-business-a",
        name: "Complete all the following: ECON201 - Microeconomic Theory for Business and Policy (0.50)",
        category: "program",
        courses: [
          "ECON201"
        ],
        type: "allOf"
      },
      {
        id: "mathematical-finance-bachelor-of-mathematics-honours-12-complete-all-the-following-math247-calculus-3-advanced-level-0-50",
        name: "Complete all the following: MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH247"
        ],
        type: "allOf"
      },
      {
        id: "mathematical-finance-bachelor-of-mathematics-honours-13-complete-all-the-following-math237-calculus-3-for-honours-mathematics-",
        name: "Complete all the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)PMATH333 - Introduction to Real Analysis (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "PMATH333"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "mathematical-optimization-business-specialization-bachelor-of-mathematics-honours",
    name: "Mathematical Optimization - Business Specialization (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Mathematical Optimization - Business Specialization",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "H1gRk1ARih",
    sourceId: "65ea1b83b40640df41de8f27",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/H1gRk1ARih",
    requirements: [
      {
        id: "mathematical-optimization-business-specialization-bachelor-of-mathematics-honours-1-complete-all-the-following-afm101-introduction-to-financial-accounting",
        name: "Complete all the following: AFM101 - Introduction to Financial Accounting (0.50)CO370 - Deterministic OR Models (0.50)ECON101 - Introduction to Microeconomics (0.50)MSE211 - Organi",
        category: "program",
        courses: [
          "AFM101",
          "CO370",
          "ECON101",
          "MSE211",
          "STAT340"
        ],
        type: "allOf"
      },
      {
        id: "mathematical-optimization-business-specialization-bachelor-of-mathematics-honours-2-complete-1-of-the-following-amath242-introduction-to-computational-mat",
        name: "Complete 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50)CS370 - Numerical Computation (0.50)CS371 - Introduction to Computational Mathematics (0.50)",
        category: "program",
        courses: [
          "AMATH242",
          "CS370",
          "CS371"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-optimization-business-specialization-bachelor-of-mathematics-honours-3-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-optimization-business-specialization-bachelor-of-mathematics-honours-4-complete-3-of-the-following-co342-introduction-to-graph-theory-0-50-co",
        name: "Complete 3 of the following: CO342 - Introduction to Graph Theory (0.50)CO351 - Network Flow Theory (0.50)CO353 - Computational Discrete Optimization (0.50)CO367 - Nonlinear Optimi",
        category: "program",
        courses: [
          "CO342",
          "CO351",
          "CO353",
          "CO367",
          "CO372",
          "CO450",
          "CO452",
          "CO454",
          "CO456",
          "CO463",
          "CO466",
          "CO471"
        ],
        type: "chooseN",
        requiredCount: 3
      },
      {
        id: "mathematical-optimization-business-specialization-bachelor-of-mathematics-honours-5-complete-1-of-the-following-cs330-management-information-systems-0-50-",
        name: "Complete 1 of the following: CS330 - Management Information Systems (0.50)CS490 - Information Systems Management (0.50)",
        category: "program",
        courses: [
          "CS330",
          "CS490"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-optimization-business-specialization-bachelor-of-mathematics-honours-6-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-optimization-business-specialization-bachelor-of-mathematics-honours-7-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "mathematical-optimization-operations-research-specialization-bachelor-of-mathematics-honours",
    name: "Mathematical Optimization - Operations Research Specialization (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Mathematical Optimization - Operations Research Specialization",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "Sy0ky0Rsn",
    sourceId: "65ce320e7a5405ff70805711",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/Sy0ky0Rsn",
    requirements: [
      {
        id: "mathematical-optimization-operations-research-specialization-bachelor-of-mathematics-honours-1-complete-all-the-following-afm101-introduction-to-financial-accounting",
        name: "Complete all the following: AFM101 - Introduction to Financial Accounting (0.50)CO370 - Deterministic OR Models (0.50)ECON101 - Introduction to Microeconomics (0.50)MSE211 - Organi",
        category: "program",
        courses: [
          "AFM101",
          "CO370",
          "ECON101",
          "MSE211",
          "STAT340"
        ],
        type: "allOf"
      },
      {
        id: "mathematical-optimization-operations-research-specialization-bachelor-of-mathematics-honours-2-complete-1-of-the-following-amath242-introduction-to-computational-mat",
        name: "Complete 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50)CS370 - Numerical Computation (0.50)CS371 - Introduction to Computational Mathematics (0.50)",
        category: "program",
        courses: [
          "AMATH242",
          "CS370",
          "CS371"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-optimization-operations-research-specialization-bachelor-of-mathematics-honours-3-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-optimization-operations-research-specialization-bachelor-of-mathematics-honours-4-complete-3-of-the-following-co342-introduction-to-graph-theory-0-50-co",
        name: "Complete 3 of the following: CO342 - Introduction to Graph Theory (0.50)CO351 - Network Flow Theory (0.50)CO353 - Computational Discrete Optimization (0.50)CO367 - Nonlinear Optimi",
        category: "program",
        courses: [
          "CO342",
          "CO351",
          "CO353",
          "CO367",
          "CO372",
          "CO450",
          "CO452",
          "CO454",
          "CO456",
          "CO463",
          "CO466",
          "CO471"
        ],
        type: "chooseN",
        requiredCount: 3
      },
      {
        id: "mathematical-optimization-operations-research-specialization-bachelor-of-mathematics-honours-5-complete-1-of-the-following-cs330-management-information-systems-0-50-",
        name: "Complete 1 of the following: CS330 - Management Information Systems (0.50)CS490 - Information Systems Management (0.50)",
        category: "program",
        courses: [
          "CS330",
          "CS490"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-optimization-operations-research-specialization-bachelor-of-mathematics-honours-6-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-optimization-operations-research-specialization-bachelor-of-mathematics-honours-7-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "mathematical-physics-bachelor-of-mathematics-honours",
    name: "Mathematical Physics (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Mathematical Physics (BMath)",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "ByzRyy0Rj2",
    sourceId: "6852263f236dddf2de14fe82",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/ByzRyy0Rj2",
    requirements: [
      {
        id: "mathematical-physics-bachelor-of-mathematics-honours-1-complete-all-the-following-amath231-calculus-4-0-50-amath271-introduct",
        name: "Complete all the following: AMATH231 - Calculus 4 (0.50)AMATH271 - Introduction to Theoretical Mechanics (0.50)AMATH353 - Partial Differential Equations 1 (0.50)AMATH361 - Continuu",
        category: "program",
        courses: [
          "AMATH231",
          "AMATH271",
          "AMATH353",
          "AMATH361",
          "AMATH473",
          "PHYS122",
          "PHYS223",
          "PHYS234",
          "PHYS242"
        ],
        type: "allOf"
      },
      {
        id: "mathematical-physics-bachelor-of-mathematics-honours-2-complete-1-of-the-following-amath242-introduction-to-computational-mat",
        name: "Complete 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50)AMATH345 - Data-Driven Mathematical Models (0.50)AMATH391 - Data Analysis with Fourier and W",
        category: "program",
        courses: [
          "AMATH242",
          "AMATH345",
          "AMATH391",
          "AMATH445",
          "CS371"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-physics-bachelor-of-mathematics-honours-3-complete-1-of-the-following-amath250-introduction-to-differential-equa",
        name: "Complete 1 of the following: AMATH250 - Introduction to Differential Equations (0.50)AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "AMATH250",
          "AMATH251"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-physics-bachelor-of-mathematics-honours-4-complete-1-of-the-following-amath331-applied-real-analysis-0-50-pmath3",
        name: "Complete 1 of the following: AMATH331 - Applied Real Analysis (0.50)PMATH331 - Applied Real Analysis (0.50)PMATH333 - Introduction to Real Analysis (0.50)PMATH351 - Real Analysis (",
        category: "program",
        courses: [
          "AMATH331",
          "PMATH331",
          "PMATH333",
          "PMATH351"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-physics-bachelor-of-mathematics-honours-5-complete-1-of-the-following-amath332-applied-complex-analysis-0-50-pma",
        name: "Complete 1 of the following: AMATH332 - Applied Complex Analysis (0.50)PMATH332 - Applied Complex Analysis (0.50)PMATH352 - Complex Analysis (0.50)",
        category: "program",
        courses: [
          "AMATH332",
          "PMATH332",
          "PMATH352"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-physics-bachelor-of-mathematics-honours-6-complete-4-of-the-following-amath333-calculus-on-manifolds-for-applied",
        name: "Complete 4 of the following: AMATH333 - Calculus on Manifolds for Applied Mathematics and Physics (0.50)AMATH474 - Advanced Quantum Theory: Quantum Information and Foundations (0.5",
        category: "program",
        courses: [
          "AMATH333",
          "AMATH474",
          "PHYS342",
          "PHYS357",
          "PHYS363"
        ],
        type: "chooseN",
        requiredCount: 4
      },
      {
        id: "mathematical-physics-bachelor-of-mathematics-honours-7-complete-1-of-the-following-amath475-introduction-to-general-relativit",
        name: "Complete 1 of the following: AMATH475 - Introduction to General Relativity (0.50)PHYS476 - Introduction to General Relativity (0.50)",
        category: "program",
        courses: [
          "AMATH475",
          "PHYS476"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-physics-bachelor-of-mathematics-honours-8-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "mathematical-studies-bachelor-of-mathematics-honours",
    name: "Mathematical Studies (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Mathematical Studies",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "H1z0kJR0in",
    sourceId: "6824a730739fa55516cf8e9f",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/H1z0kJR0in",
    requirements: [
      {
        id: "mathematical-studies-bachelor-of-mathematics-honours-1-complete-1-of-the-following-cs115-introduction-to-computer-science-1-0",
        name: "Complete 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)CS145 - Designing Functional Programs (Advanced Level) (0.",
        category: "program",
        courses: [
          "CS115",
          "CS135",
          "CS145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-studies-bachelor-of-mathematics-honours-2-complete-1-of-the-following-cs116-introduction-to-computer-science-2-0",
        name: "Complete 1 of the following: CS116 - Introduction to Computer Science 2 (0.50)CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS146 - Elementary Algorithm Design and",
        category: "program",
        courses: [
          "CS116",
          "CS136",
          "CS146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-studies-bachelor-of-mathematics-honours-3-complete-1-of-the-following-math106-applied-linear-algebra-1-0-50-math",
        name: "Complete 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50)MATH136 - Linear Algebra 1 for Honours Mathematics (0.50)MATH146 - Linear Algebra 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH106",
          "MATH136",
          "MATH146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-studies-bachelor-of-mathematics-honours-4-complete-1-of-the-following-math127-calculus-1-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH127 - Calculus 1 for the Sciences (0.50)MATH137 - Calculus 1 for Honours Mathematics (0.50)MATH147 - Calculus 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH127",
          "MATH137",
          "MATH147"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-studies-bachelor-of-mathematics-honours-5-complete-1-of-the-following-math128-calculus-2-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH128",
          "MATH138",
          "MATH148"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-studies-bachelor-of-mathematics-honours-6-complete-1-of-the-following-math135-algebra-for-honours-mathematics-0-",
        name: "Complete 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50)MATH145 - Algebra (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH135",
          "MATH145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-studies-bachelor-of-mathematics-honours-7-complete-1-of-the-following-math207-calculus-3-non-specialist-level-0-",
        name: "Complete 1 of the following: MATH207 - Calculus 3 (Non-Specialist Level) (0.50)MATH229 - Introduction to Combinatorics (Non-Specialist Level) (0.50)MATH237 - Calculus 3 for Honours",
        category: "program",
        courses: [
          "MATH207",
          "MATH229",
          "MATH237",
          "MATH239",
          "MATH247",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-studies-bachelor-of-mathematics-honours-8-complete-1-of-the-following-math225-applied-linear-algebra-2-0-50-math",
        name: "Complete 1 of the following: MATH225 - Applied Linear Algebra 2 (0.50)MATH235 - Linear Algebra 2 for Honours Mathematics (0.50)MATH245 - Linear Algebra 2 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH225",
          "MATH235",
          "MATH245"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-studies-bachelor-of-mathematics-honours-9-complete-1-of-the-following-stat220-probability-non-specialist-level-0",
        name: "Complete 1 of the following: STAT220 - Probability (Non-Specialist Level) (0.50)STAT230 - Probability (0.50)STAT240 - Probability (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT220",
          "STAT230",
          "STAT240"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematical-studies-bachelor-of-mathematics-honours-10-complete-1-of-the-following-stat221-statistics-non-specialist-level-0-",
        name: "Complete 1 of the following: STAT221 - Statistics (Non-Specialist Level) (0.50)STAT231 - Statistics (0.50)STAT241 - Statistics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT221",
          "STAT231",
          "STAT241"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "mathematics-bachelor-of-mathematics-three-year-general",
    name: "Mathematics (Bachelor of Mathematics, Three-Year General)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "3G-Mathematics",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "B17AJkCCi2",
    sourceId: "68d2edf37a6534544e80ad65",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/B17AJkCCi2",
    requirements: [
      {
        id: "mathematics-bachelor-of-mathematics-three-year-general-1-complete-1-of-the-following-cs115-introduction-to-computer-science-1-0",
        name: "Complete 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)CS145 - Designing Functional Programs (Advanced Level) (0.",
        category: "program",
        courses: [
          "CS115",
          "CS135",
          "CS145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-bachelor-of-mathematics-three-year-general-2-complete-1-of-the-following-cs116-introduction-to-computer-science-2-0",
        name: "Complete 1 of the following: CS116 - Introduction to Computer Science 2 (0.50)CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS146 - Elementary Algorithm Design and",
        category: "program",
        courses: [
          "CS116",
          "CS136",
          "CS146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-bachelor-of-mathematics-three-year-general-3-complete-1-of-the-following-math106-applied-linear-algebra-1-0-50-math",
        name: "Complete 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50)MATH136 - Linear Algebra 1 for Honours Mathematics (0.50)MATH146 - Linear Algebra 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH106",
          "MATH136",
          "MATH146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-bachelor-of-mathematics-three-year-general-4-complete-1-of-the-following-math127-calculus-1-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH127 - Calculus 1 for the Sciences (0.50)MATH137 - Calculus 1 for Honours Mathematics (0.50)MATH147 - Calculus 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH127",
          "MATH137",
          "MATH147"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-bachelor-of-mathematics-three-year-general-5-complete-1-of-the-following-math128-calculus-2-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH128",
          "MATH138",
          "MATH148"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-bachelor-of-mathematics-three-year-general-6-complete-1-of-the-following-math135-algebra-for-honours-mathematics-0-",
        name: "Complete 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50)MATH145 - Algebra (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH135",
          "MATH145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-bachelor-of-mathematics-three-year-general-7-complete-1-of-the-following-math207-calculus-3-non-specialist-level-0-",
        name: "Complete 1 of the following: MATH207 - Calculus 3 (Non-Specialist Level) (0.50)MATH229 - Introduction to Combinatorics (Non-Specialist Level) (0.50)MATH237 - Calculus 3 for Honours",
        category: "program",
        courses: [
          "MATH207",
          "MATH229",
          "MATH237",
          "MATH239",
          "MATH247",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-bachelor-of-mathematics-three-year-general-8-complete-1-of-the-following-cs245-logic-and-computation-0-50-cs245e-lo",
        name: "Complete 1 of the following: CS245 - Logic and Computation (0.50)CS245E - Logic and Computation (Enriched) (0.50)MATH225 - Applied Linear Algebra 2 (0.50)MATH235 - Linear Algebra 2",
        category: "program",
        courses: [
          "CS245",
          "CS245E",
          "MATH225",
          "MATH235",
          "MATH245"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-bachelor-of-mathematics-three-year-general-9-complete-1-of-the-following-stat220-probability-non-specialist-level-0",
        name: "Complete 1 of the following: STAT220 - Probability (Non-Specialist Level) (0.50)STAT230 - Probability (0.50)STAT240 - Probability (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT220",
          "STAT230",
          "STAT240"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-bachelor-of-mathematics-three-year-general-10-complete-1-of-the-following-stat221-statistics-non-specialist-level-0-",
        name: "Complete 1 of the following: STAT221 - Statistics (Non-Specialist Level) (0.50)STAT231 - Statistics (0.50)STAT241 - Statistics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT221",
          "STAT231",
          "STAT241"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "mathematics-joint-honours",
    name: "Mathematics (Joint Honours)",
    category: "joint",
    code: "JH-Mathematics",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "HyzRyy0Rih",
    sourceId: "64d14ee5560985ec06dab6d5",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/HyzRyy0Rih",
    requirements: [
      {
        id: "mathematics-joint-honours-1-complete-1-of-the-following-cs115-introduction-to-computer-science-1-0",
        name: "Complete 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)CS145 - Designing Functional Programs (Advanced Level) (0.",
        category: "program",
        courses: [
          "CS115",
          "CS135",
          "CS145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-joint-honours-2-complete-1-of-the-following-cs116-introduction-to-computer-science-2-0",
        name: "Complete 1 of the following: CS116 - Introduction to Computer Science 2 (0.50)CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS146 - Elementary Algorithm Design and",
        category: "program",
        courses: [
          "CS116",
          "CS136",
          "CS146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-joint-honours-3-complete-1-of-the-following-math106-applied-linear-algebra-1-0-50-math",
        name: "Complete 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50)MATH136 - Linear Algebra 1 for Honours Mathematics (0.50)MATH146 - Linear Algebra 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH106",
          "MATH136",
          "MATH146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-joint-honours-4-complete-1-of-the-following-math127-calculus-1-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH127 - Calculus 1 for the Sciences (0.50)MATH137 - Calculus 1 for Honours Mathematics (0.50)MATH147 - Calculus 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH127",
          "MATH137",
          "MATH147"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-joint-honours-5-complete-1-of-the-following-math128-calculus-2-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH128",
          "MATH138",
          "MATH148"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-joint-honours-6-complete-1-of-the-following-math135-algebra-for-honours-mathematics-0-",
        name: "Complete 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50)MATH145 - Algebra (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH135",
          "MATH145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-joint-honours-7-complete-1-of-the-following-math207-calculus-3-non-specialist-level-0-",
        name: "Complete 1 of the following: MATH207 - Calculus 3 (Non-Specialist Level) (0.50)MATH229 - Introduction to Combinatorics (Non-Specialist Level) (0.50)MATH237 - Calculus 3 for Honours",
        category: "program",
        courses: [
          "MATH207",
          "MATH229",
          "MATH237",
          "MATH239",
          "MATH247",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-joint-honours-8-complete-1-of-the-following-math225-applied-linear-algebra-2-0-50-math",
        name: "Complete 1 of the following: MATH225 - Applied Linear Algebra 2 (0.50)MATH235 - Linear Algebra 2 for Honours Mathematics (0.50)MATH245 - Linear Algebra 2 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH225",
          "MATH235",
          "MATH245"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-joint-honours-9-complete-1-of-the-following-stat220-probability-non-specialist-level-0",
        name: "Complete 1 of the following: STAT220 - Probability (Non-Specialist Level) (0.50)STAT230 - Probability (0.50)STAT240 - Probability (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT220",
          "STAT230",
          "STAT240"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-joint-honours-10-complete-1-of-the-following-stat221-statistics-non-specialist-level-0-",
        name: "Complete 1 of the following: STAT221 - Statistics (Non-Specialist Level) (0.50)STAT231 - Statistics (0.50)STAT241 - Statistics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT221",
          "STAT231",
          "STAT241"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "mathematics-minor",
    name: "Mathematics Minor",
    category: "minor",
    code: "Mathematics Minor",
    credentialType: "Minor",
    faculty: "Faculty of Mathematics",
    sourcePid: "rk7AJJ0Ain",
    sourceId: "68af0697045cd93c8e1884ba",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/rk7AJJ0Ain",
    requirements: [
      {
        id: "mathematics-minor-1-complete-1-of-the-following-cs115-introduction-to-computer-science-1-0",
        name: "Complete 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)CS145 - Designing Functional Programs (Advanced Level) (0.",
        category: "program",
        courses: [
          "CS115",
          "CS135",
          "CS145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-minor-2-complete-1-of-the-following-cs114-principles-of-computing-for-science-",
        name: "Complete 1 of the following: CS114 - Principles of Computing for Science (0.50)CS116 - Introduction to Computer Science 2 (0.50)CS136 - Elementary Algorithm Design and Data Abstrac",
        category: "program",
        courses: [
          "CS114",
          "CS116",
          "CS136",
          "CS146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-minor-3-complete-1-of-the-following-math106-applied-linear-algebra-1-0-50-math",
        name: "Complete 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50)MATH114 - Linear Algebra for Science (0.50)MATH115 - Linear Algebra for Engineering (0.50)",
        category: "program",
        courses: [
          "MATH106",
          "MATH114",
          "MATH115"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-minor-4-complete-1-of-the-following-math116-calculus-1-for-engineering-0-50-ma",
        name: "Complete 1 of the following: MATH116 - Calculus 1 for Engineering (0.50)MATH117 - Calculus 1 for Engineering (0.50)MATH127 - Calculus 1 for the Sciences (0.50)",
        category: "program",
        courses: [
          "MATH116",
          "MATH117",
          "MATH127"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-minor-5-complete-1-of-the-following-math118-calculus-2-for-engineering-0-50-ma",
        name: "Complete 1 of the following: MATH118 - Calculus 2 for Engineering (0.50)MATH119 - Calculus 2 for Engineering (0.50)MATH128 - Calculus 2 for the Sciences (0.50)",
        category: "program",
        courses: [
          "MATH118",
          "MATH119",
          "MATH128"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-minor-6-complete-2-of-the-following-stat220-probability-non-specialist-level-0",
        name: "Complete 2 of the following: STAT220 - Probability (Non-Specialist Level) (0.50)STAT221 - Statistics (Non-Specialist Level) (0.50)STAT321 - Regression and Forecasting (Non-Speciali",
        category: "program",
        courses: [
          "STAT220",
          "STAT221",
          "STAT321",
          "STAT322"
        ],
        type: "chooseN",
        requiredCount: 2
      }
    ]
  },
  {
    id: "mathematics-business-administration-bachelor-of-mathematics-honours",
    name: "Mathematics/Business Administration (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Mathematics/Business Administration",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "BJ4CkJ0Cs3",
    sourceId: "65eb1dd91f192744a1750574",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/BJ4CkJ0Cs3",
    requirements: [
      {
        id: "mathematics-business-administration-bachelor-of-mathematics-honours-1-complete-all-the-following-afm101-introduction-to-financial-accounting",
        name: "Complete all the following: AFM101 - Introduction to Financial Accounting (0.50)AFM102 - Introduction to Managerial Accounting (0.50)BUS111W - Understanding the Business Environmen",
        category: "program",
        courses: [
          "AFM101",
          "AFM102",
          "BUS111W",
          "BUS121W",
          "BUS381W",
          "CO370",
          "CS330",
          "CS338",
          "ECON101",
          "ECON102",
          "HRM200",
          "MATBUS371",
          "STAT371",
          "STAT372"
        ],
        type: "allOf"
      },
      {
        id: "mathematics-business-administration-bachelor-of-mathematics-honours-2-complete-1-of-the-following-actsc221-introductory-financial-mathematic",
        name: "Complete 1 of the following: ACTSC221 - Introductory Financial Mathematics (Non-Specialist Level) (0.50)ACTSC231 - Introductory Financial Mathematics (0.50)",
        category: "program",
        courses: [
          "ACTSC221",
          "ACTSC231"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-business-administration-bachelor-of-mathematics-honours-3-complete-1-of-the-following-afm231-business-law-0-50-ls283-business-la",
        name: "Complete 1 of the following: AFM231 - Business Law (0.50)LS283 - Business Law (0.50)",
        category: "program",
        courses: [
          "AFM231",
          "LS283"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-business-administration-bachelor-of-mathematics-honours-4-complete-1-of-the-following-arbus302-principles-of-marketing-0-50-bus2",
        name: "Complete 1 of the following: ARBUS302 - Principles of Marketing (0.50)BUS252W - Introduction to Marketing Management (WLU) (0.50)MGMT244 - Principles of Marketing (0.50)",
        category: "program",
        courses: [
          "ARBUS302",
          "BUS252W",
          "MGMT244"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-business-administration-bachelor-of-mathematics-honours-5-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-business-administration-bachelor-of-mathematics-honours-6-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-business-administration-bachelor-of-mathematics-honours-7-complete-1-of-the-following-mse211-organizational-behaviour-0-50-psych",
        name: "Complete 1 of the following: MSE211 - Organizational Behaviour (0.50)PSYCH238 - Organizational Psychology (0.50)",
        category: "program",
        courses: [
          "MSE211",
          "PSYCH238"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-business-administration-bachelor-of-mathematics-honours-8-complete-1-of-the-following-arbus202-professional-and-business-ethics-",
        name: "Complete 1 of the following: ARBUS202 - Professional and Business Ethics (0.50)COMM400 - Entrepreneurship, Technology and the Emerging Information Economy (0.50)LS271 - Conflict Re",
        category: "program",
        courses: [
          "ARBUS202",
          "COMM400",
          "LS271",
          "LS319",
          "PACS202",
          "PACS323",
          "PHIL215",
          "PSYCH339"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours",
    name: "Mathematics/Chartered Professional Accountancy (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Mathematics/Chartered Professional Accountancy",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "BybCJk0Ri2",
    sourceId: "67b73ed148295d7d2a52d5ef",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/BybCJk0Ri2",
    requirements: [
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-1-complete-all-the-following-afm111-professional-pathways-and-problem-so",
        name: "Complete all the following: AFM111 - Professional Pathways and Problem-Solving (0.50)AFM182 - Introduction to Financial Reporting and Managerial Decision Making 2 (0.50)AFM191 - In",
        category: "program",
        courses: [
          "AFM111",
          "AFM182",
          "AFM191",
          "AFM206",
          "AFM208",
          "AFM274",
          "AFM285",
          "AFM291",
          "AFM311",
          "AFM321",
          "AFM335",
          "AFM341",
          "AFM362",
          "AFM373",
          "AFM382",
          "AFM391",
          "AFM433",
          "AFM451",
          "AFM462",
          "AFM482",
          "AFM491",
          "COMMST111"
        ],
        type: "allOf"
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-2-complete-1-of-the-following-actsc127-introduction-to-global-capital-ma",
        name: "Complete 1 of the following: ACTSC127 - Introduction to Global Capital Markets and Financial Analytics (0.50)AFM127 - Introduction to Global Capital Markets and Financial Analytics",
        category: "program",
        courses: [
          "ACTSC127",
          "AFM127"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-3-complete-1-of-the-following-actsc291-global-capital-markets-and-financ",
        name: "Complete 1 of the following: ACTSC291 - Global Capital Markets and Financial Analytics (0.50)AFM272 - Global Capital Markets and Financial Analytics (0.50)",
        category: "program",
        courses: [
          "ACTSC291",
          "AFM272"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-4-complete-1-of-the-following-actsc423-topics-in-financial-econometrics-",
        name: "Complete 1 of the following: ACTSC423 - Topics in Financial Econometrics (0.50)AFM423 - Topics in Financial Econometrics (0.50)",
        category: "program",
        courses: [
          "ACTSC423",
          "AFM423"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-5-complete-1-of-the-following-afm323-quantitative-foundations-for-financ",
        name: "Complete 1 of the following: AFM323 - Quantitative Foundations for Finance (0.50)STAT371 - Applied Linear Models and Process Improvement for Business (0.50)STAT374 - Quantitative F",
        category: "program",
        courses: [
          "AFM323",
          "STAT371",
          "STAT374"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-6-complete-1-of-the-following-comm103-principles-of-economics-0-50-econ1",
        name: "Complete 1 of the following: COMM103 - Principles of Economics (0.50)ECON100 - Principles of Economics (0.50)",
        category: "program",
        courses: [
          "COMM103",
          "ECON100"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-7-complete-all-the-following-econ101-introduction-to-microeconomics-0-50",
        name: "Complete all the following: ECON101 - Introduction to Microeconomics (0.50)ECON102 - Introduction to Macroeconomics (0.50)",
        category: "program",
        courses: [
          "ECON101",
          "ECON102"
        ],
        type: "allOf"
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-8-complete-1-of-the-following-cs115-introduction-to-computer-science-1-0",
        name: "Complete 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)CS145 - Designing Functional Programs (Advanced Level) (0.",
        category: "program",
        courses: [
          "CS115",
          "CS135",
          "CS145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-9-complete-1-of-the-following-cs116-introduction-to-computer-science-2-0",
        name: "Complete 1 of the following: CS116 - Introduction to Computer Science 2 (0.50)CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS146 - Elementary Algorithm Design and",
        category: "program",
        courses: [
          "CS116",
          "CS136",
          "CS146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-10-complete-1-of-the-following-math127-calculus-1-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH127 - Calculus 1 for the Sciences (0.50)MATH137 - Calculus 1 for Honours Mathematics (0.50)MATH147 - Calculus 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH127",
          "MATH137",
          "MATH147"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-11-complete-1-of-the-following-math128-calculus-2-for-the-sciences-0-50-m",
        name: "Complete 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH128",
          "MATH138",
          "MATH148"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-12-complete-1-of-the-following-math135-algebra-for-honours-mathematics-0-",
        name: "Complete 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50)MATH145 - Algebra (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH135",
          "MATH145"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-13-complete-1-of-the-following-math136-linear-algebra-1-for-honours-mathe",
        name: "Complete 1 of the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50)MATH146 - Linear Algebra 1 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH136",
          "MATH146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-14-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-15-complete-1-of-the-following-stat230-probability-0-50-stat240-probabili",
        name: "Complete 1 of the following: STAT230 - Probability (0.50)STAT240 - Probability (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT230",
          "STAT240"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-chartered-professional-accountancy-bachelor-of-mathematics-honours-16-complete-1-of-the-following-stat231-statistics-0-50-stat241-statistics",
        name: "Complete 1 of the following: STAT231 - Statistics (0.50)STAT241 - Statistics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "STAT231",
          "STAT241"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "mathematics-financial-analysis-and-risk-management-chartered-financial-analyst-specialization-bachelor-of-mathematics-honours",
    name: "Mathematics/Financial Analysis and Risk Management - Chartered Financial Analyst Specialization (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Math/FARM - Chartered Financial Analyst Spec",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "SkgAy1R0jh",
    sourceId: "67d30b92183410d63f704126",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/SkgAy1R0jh",
    requirements: [
      {
        id: "mathematics-financial-analysis-and-risk-management-chartered-financial-analyst-specialization-bachelor-of-mathematics-honours-1-complete-all-the-following-actsc231-introductory-financial-mathematics",
        name: "Complete all the following: ACTSC231 - Introductory Financial Mathematics (0.50)ACTSC372 - Investment Science and Corporate Finance (0.50)AFM101 - Introduction to Financial Account",
        category: "program",
        courses: [
          "ACTSC231",
          "ACTSC372",
          "AFM101",
          "AFM102",
          "AFM131",
          "AMATH350",
          "CO372",
          "COMM101",
          "CS330",
          "ECON101",
          "ECON102",
          "MATBUS471",
          "STAT371"
        ],
        type: "allOf"
      },
      {
        id: "mathematics-financial-analysis-and-risk-management-chartered-financial-analyst-specialization-bachelor-of-mathematics-honours-2-complete-1-of-the-following-actsc446-mathematics-of-financial-markets-",
        name: "Complete 1 of the following: ACTSC446 - Mathematics of Financial Markets (0.50)MATBUS470 - Derivatives (0.50)",
        category: "program",
        courses: [
          "ACTSC446",
          "MATBUS470"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-financial-analysis-and-risk-management-chartered-financial-analyst-specialization-bachelor-of-mathematics-honours-3-complete-1-of-the-following-afm231-business-law-0-50-ls283-business-la",
        name: "Complete 1 of the following: AFM231 - Business Law (0.50)LS283 - Business Law (0.50)",
        category: "program",
        courses: [
          "AFM231",
          "LS283"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-financial-analysis-and-risk-management-chartered-financial-analyst-specialization-bachelor-of-mathematics-honours-4-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-financial-analysis-and-risk-management-chartered-financial-analyst-specialization-bachelor-of-mathematics-honours-5-complete-1-of-the-following-cs335-computational-methods-in-business-an",
        name: "Complete 1 of the following: CS335 - Computational Methods in Business and Finance (0.50)CS476 - Numerical Computation for Financial Modelling (0.50)",
        category: "program",
        courses: [
          "CS335",
          "CS476"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-financial-analysis-and-risk-management-chartered-financial-analyst-specialization-bachelor-of-mathematics-honours-6-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-financial-analysis-and-risk-management-chartered-financial-analyst-specialization-bachelor-of-mathematics-honours-7-complete-all-the-following-stat330-mathematical-statistics-0-50-stat33",
        name: "Complete all the following: STAT330 - Mathematical Statistics (0.50)STAT333 - Stochastic Processes 1 (0.50)",
        category: "program",
        courses: [
          "STAT330",
          "STAT333"
        ],
        type: "allOf"
      },
      {
        id: "mathematics-financial-analysis-and-risk-management-chartered-financial-analyst-specialization-bachelor-of-mathematics-honours-8-complete-all-the-following-stat334-probability-models-for-business-and",
        name: "Complete all the following: STAT334 - Probability Models for Business and Accounting (0.50)",
        category: "program",
        courses: [
          "STAT334"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "mathematics-financial-analysis-and-risk-management-professional-risk-management-specialization-bachelor-of-mathematics-honours",
    name: "Mathematics/Financial Analysis and Risk Management - Professional Risk Management Specialization (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Math/FARM - Professional Risk Management Spec",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "S1QRJ1C0i2",
    sourceId: "681cd09e0496d028f5b13719",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/S1QRJ1C0i2",
    requirements: [
      {
        id: "mathematics-financial-analysis-and-risk-management-professional-risk-management-specialization-bachelor-of-mathematics-honours-1-complete-all-the-following-actsc231-introductory-financial-mathematics",
        name: "Complete all the following: ACTSC231 - Introductory Financial Mathematics (0.50)ACTSC372 - Investment Science and Corporate Finance (0.50)AFM101 - Introduction to Financial Account",
        category: "program",
        courses: [
          "ACTSC231",
          "ACTSC372",
          "AFM101",
          "AFM102",
          "AFM131",
          "AMATH350",
          "CO372",
          "COMM101",
          "CS330",
          "ECON101",
          "ECON102",
          "MATBUS471",
          "STAT371"
        ],
        type: "allOf"
      },
      {
        id: "mathematics-financial-analysis-and-risk-management-professional-risk-management-specialization-bachelor-of-mathematics-honours-2-complete-1-of-the-following-actsc446-mathematics-of-financial-markets-",
        name: "Complete 1 of the following: ACTSC446 - Mathematics of Financial Markets (0.50)MATBUS470 - Derivatives (0.50)",
        category: "program",
        courses: [
          "ACTSC446",
          "MATBUS470"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-financial-analysis-and-risk-management-professional-risk-management-specialization-bachelor-of-mathematics-honours-3-complete-1-of-the-following-afm231-business-law-0-50-ls283-business-la",
        name: "Complete 1 of the following: AFM231 - Business Law (0.50)LS283 - Business Law (0.50)",
        category: "program",
        courses: [
          "AFM231",
          "LS283"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-financial-analysis-and-risk-management-professional-risk-management-specialization-bachelor-of-mathematics-honours-4-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-financial-analysis-and-risk-management-professional-risk-management-specialization-bachelor-of-mathematics-honours-5-complete-1-of-the-following-cs335-computational-methods-in-business-an",
        name: "Complete 1 of the following: CS335 - Computational Methods in Business and Finance (0.50)CS476 - Numerical Computation for Financial Modelling (0.50)",
        category: "program",
        courses: [
          "CS335",
          "CS476"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-financial-analysis-and-risk-management-professional-risk-management-specialization-bachelor-of-mathematics-honours-6-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-financial-analysis-and-risk-management-professional-risk-management-specialization-bachelor-of-mathematics-honours-7-complete-all-the-following-stat330-mathematical-statistics-0-50-stat33",
        name: "Complete all the following: STAT330 - Mathematical Statistics (0.50)STAT333 - Stochastic Processes 1 (0.50)",
        category: "program",
        courses: [
          "STAT330",
          "STAT333"
        ],
        type: "allOf"
      },
      {
        id: "mathematics-financial-analysis-and-risk-management-professional-risk-management-specialization-bachelor-of-mathematics-honours-8-complete-all-the-following-stat334-probability-models-for-business-and",
        name: "Complete all the following: STAT334 - Probability Models for Business and Accounting (0.50)",
        category: "program",
        courses: [
          "STAT334"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "mathematics-teaching-bachelor-of-mathematics-honours",
    name: "Mathematics/Teaching (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Mathematics/Teaching",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "Byl0k1ACin",
    sourceId: "65eb729e8b15d8329f216fce",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/Byl0k1ACin",
    requirements: [
      {
        id: "mathematics-teaching-bachelor-of-mathematics-honours-1-complete-all-the-following-actsc221-introductory-financial-mathematics",
        name: "Complete all the following: ACTSC221 - Introductory Financial Mathematics (Non-Specialist Level) (0.50)CS234 - Data Types and Structures (0.50)MTHEL206 - Introduction to Mathematic",
        category: "program",
        courses: [
          "ACTSC221",
          "CS234",
          "MTHEL206"
        ],
        type: "allOf"
      },
      {
        id: "mathematics-teaching-bachelor-of-mathematics-honours-2-complete-1-of-the-following-amath250-introduction-to-differential-equa",
        name: "Complete 1 of the following: AMATH250 - Introduction to Differential Equations (0.50)AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)AMATH343 - Discrete Mo",
        category: "program",
        courses: [
          "AMATH250",
          "AMATH251",
          "AMATH343"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-teaching-bachelor-of-mathematics-honours-3-complete-1-of-the-following-amath331-applied-real-analysis-0-50-amath3",
        name: "Complete 1 of the following: AMATH331 - Applied Real Analysis (0.50)AMATH332 - Applied Complex Analysis (0.50)PMATH331 - Applied Real Analysis (0.50)PMATH332 - Applied Complex Anal",
        category: "program",
        courses: [
          "AMATH331",
          "AMATH332",
          "PMATH331",
          "PMATH332",
          "PMATH333",
          "PMATH351",
          "PMATH352"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-teaching-bachelor-of-mathematics-honours-4-complete-1-of-the-following-co250-introduction-to-optimization-0-50-co",
        name: "Complete 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "CO250",
          "CO255"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-teaching-bachelor-of-mathematics-honours-5-complete-1-of-the-following-co380-mathematical-discovery-and-invention",
        name: "Complete 1 of the following: CO380 - Mathematical Discovery and Invention (0.50)CO480 - History of Mathematics (0.50)",
        category: "program",
        courses: [
          "CO380",
          "CO480"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-teaching-bachelor-of-mathematics-honours-6-complete-1-of-the-following-cs230-introduction-to-computers-and-comput",
        name: "Complete 1 of the following: CS230 - Introduction to Computers and Computer Systems (0.50)CS330 - Management Information Systems (0.50)CS338 - Computer Applications in Business: Da",
        category: "program",
        courses: [
          "CS230",
          "CS330",
          "CS338",
          "CS370",
          "CS371",
          "CS430",
          "CS436"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-teaching-bachelor-of-mathematics-honours-7-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-teaching-bachelor-of-mathematics-honours-8-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-teaching-bachelor-of-mathematics-honours-9-complete-1-of-the-following-pmath320-euclidean-geometry-0-50-pmath321-",
        name: "Complete 1 of the following: PMATH320 - Euclidean Geometry (0.50)PMATH321 - Non-Euclidean Geometry (0.50)PMATH330 - Introduction to Mathematical Logic (0.50)PMATH340 - Elementary N",
        category: "program",
        courses: [
          "PMATH320",
          "PMATH321",
          "PMATH330",
          "PMATH340",
          "PMATH432",
          "PMATH440"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-teaching-bachelor-of-mathematics-honours-10-complete-1-of-the-following-pmath334-introduction-to-rings-and-fields-",
        name: "Complete 1 of the following: PMATH334 - Introduction to Rings and Fields with Applications (0.50)PMATH336 - Introduction to Group Theory with Applications (0.50)PMATH347 - Groups a",
        category: "program",
        courses: [
          "PMATH334",
          "PMATH336",
          "PMATH347",
          "PMATH348"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-teaching-bachelor-of-mathematics-honours-11-complete-1-of-the-following-psych101-introductory-psychology-0-50-psyc",
        name: "Complete 1 of the following: PSYCH101 - Introductory Psychology (0.50)PSYCH101R - Introductory Psychology (0.50)",
        category: "program",
        courses: [
          "PSYCH101",
          "PSYCH101R"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-teaching-bachelor-of-mathematics-honours-12-complete-1-of-the-following-psych211-developmental-psychology-0-50-psy",
        name: "Complete 1 of the following: PSYCH211 - Developmental Psychology (0.50)PSYCH212 - Educational Psychology (0.50)PSYCH212R - Educational Psychology (0.50)",
        category: "program",
        courses: [
          "PSYCH211",
          "PSYCH212",
          "PSYCH212R"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "mathematics-teaching-bachelor-of-mathematics-honours-13-complete-1-of-the-following-stat331-applied-linear-models-0-50-stat332",
        name: "Complete 1 of the following: STAT331 - Applied Linear Models (0.50)STAT332 - Sampling and Experimental Design (0.50)STAT333 - Stochastic Processes 1 (0.50)",
        category: "program",
        courses: [
          "STAT331",
          "STAT332",
          "STAT333"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "physics-specialization",
    name: "Physics Specialization",
    category: "specialization",
    code: "AMATH-Physics Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "B1SkyR0j3",
    sourceId: "69b1a190306256e3f13d53fd",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/B1SkyR0j3",
    parentProgramCodes: [
      "H-Applied Mathematics"
    ],
    requirements: [
      {
        id: "physics-specialization-1-choose-any-of-the-following-amath271-introduction-to-theoretical-mecha",
        name: "Choose any of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50)AMATH361 - Continuum Mechanics (0.50)AMATH373 - Quantum Theory 1 (0.50)AMATH463 - Fluid Mechanic",
        category: "program",
        courses: [
          "AMATH271",
          "AMATH361",
          "AMATH373",
          "AMATH463",
          "AMATH473",
          "AMATH474",
          "AMATH475",
          "PHYS476"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "predictive-analytics-specialization",
    name: "Predictive Analytics Specialization",
    category: "specialization",
    code: "ACTSC-Predictive Analytics Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "S1WH1yA0i3",
    sourceId: "68a49c2b5e3de158ebb2051d",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/S1WH1yA0i3",
    parentProgramCodes: [
      "H-Actuarial Science"
    ],
    requirements: [
      {
        id: "predictive-analytics-specialization-1-complete-all-the-following-actsc456-statistical-learning-in-actuarial-",
        name: "Complete all the following: ACTSC456 - Statistical Learning in Actuarial Science (0.50)STAT431 - Generalized Linear Models and their Applications (0.50)STAT440 - Computational Infe",
        category: "program",
        courses: [
          "ACTSC456",
          "STAT431",
          "STAT440"
        ],
        type: "allOf"
      },
      {
        id: "predictive-analytics-specialization-2-complete-1-of-the-following-actsc454-longevity-and-mortality-using-pre",
        name: "Complete 1 of the following: ACTSC454 - Longevity and Mortality Using Predictive Analytics (0.50)ACTSC457 - Predictive Modelling in Property and Casualty Insurance (0.50)",
        category: "program",
        courses: [
          "ACTSC454",
          "ACTSC457"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "predictive-analytics-specialization-3-complete-1-of-the-following-stat442-data-visualization-0-50-stat443-fo",
        name: "Complete 1 of the following: STAT442 - Data Visualization (0.50)STAT443 - Forecasting (0.50)STAT444 - Statistical Learning - Advanced Regression (0.50)",
        category: "program",
        courses: [
          "STAT442",
          "STAT443",
          "STAT444"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "pure-mathematics-bachelor-of-mathematics-honours",
    name: "Pure Mathematics (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Pure Mathematics",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "S1eexkCAo2",
    sourceId: "6785437d5a867725196a1833",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/S1eexkCAo2",
    requirements: [
      {
        id: "pure-mathematics-bachelor-of-mathematics-honours-1-complete-all-the-following-pmath347-groups-and-rings-0-50-pmath348-fie",
        name: "Complete all the following: PMATH347 - Groups and Rings (0.50)PMATH348 - Fields and Galois Theory (0.50)PMATH351 - Real Analysis (0.50)PMATH352 - Complex Analysis (0.50)PMATH450 - ",
        category: "program",
        courses: [
          "PMATH347",
          "PMATH348",
          "PMATH351",
          "PMATH352",
          "PMATH450"
        ],
        type: "allOf"
      },
      {
        id: "pure-mathematics-bachelor-of-mathematics-honours-2-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "pure-mathematics-bachelor-of-mathematics-honours-3-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "pure-mathematics-bachelor-of-mathematics-honours-4-complete-1-of-the-following-pmath365-differential-geometry-0-50-pmath3",
        name: "Complete 1 of the following: PMATH365 - Differential Geometry (0.50)PMATH367 - Topology (0.50)",
        category: "program",
        courses: [
          "PMATH365",
          "PMATH367"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "pure-mathematics-joint-honours",
    name: "Pure Mathematics (Joint Honours)",
    category: "joint",
    code: "JH-Pure Mathematics",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "S1fxe1ACi2",
    sourceId: "657b2c0b6de32ba3d0c8e1f7",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/S1fxe1ACi2",
    requirements: [
      {
        id: "pure-mathematics-joint-honours-1-complete-1-of-the-following-amath331-applied-real-analysis-0-50-pmath3",
        name: "Complete 1 of the following: AMATH331 - Applied Real Analysis (0.50)PMATH331 - Applied Real Analysis (0.50)PMATH333 - Introduction to Real Analysis (0.50)PMATH351 - Real Analysis (",
        category: "program",
        courses: [
          "AMATH331",
          "PMATH331",
          "PMATH333",
          "PMATH351"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "pure-mathematics-joint-honours-2-complete-1-of-the-following-amath332-applied-complex-analysis-0-50-pma",
        name: "Complete 1 of the following: AMATH332 - Applied Complex Analysis (0.50)PMATH332 - Applied Complex Analysis (0.50)PMATH352 - Complex Analysis (0.50)",
        category: "program",
        courses: [
          "AMATH332",
          "PMATH332",
          "PMATH352"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "pure-mathematics-joint-honours-3-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "pure-mathematics-joint-honours-4-complete-1-of-the-following-pmath334-introduction-to-rings-and-fields-",
        name: "Complete 1 of the following: PMATH334 - Introduction to Rings and Fields with Applications (0.50)PMATH348 - Fields and Galois Theory (0.50)",
        category: "program",
        courses: [
          "PMATH334",
          "PMATH348"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "pure-mathematics-joint-honours-5-complete-1-of-the-following-pmath336-introduction-to-group-theory-with",
        name: "Complete 1 of the following: PMATH336 - Introduction to Group Theory with Applications (0.50)PMATH347 - Groups and Rings (0.50)",
        category: "program",
        courses: [
          "PMATH336",
          "PMATH347"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "pure-mathematics-joint-honours-6-complete-1-of-the-following-math239-introduction-to-combinatorics-0-50",
        name: "Complete 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "pure-mathematics-minor",
    name: "Pure Mathematics Minor",
    category: "minor",
    code: "Pure Mathematics Minor",
    credentialType: "Minor",
    faculty: "Faculty of Mathematics",
    sourcePid: "SJlxk0Ci2",
    sourceId: "68e7caac6d9b28a20b2eaeeb",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/SJlxk0Ci2",
    requirements: [
      {
        id: "pure-mathematics-minor-1-complete-1-of-the-following-math103-introductory-algebra-for-arts-and-",
        name: "Complete 1 of the following: MATH103 - Introductory Algebra for Arts and Social Science (0.50)MATH106 - Applied Linear Algebra 1 (0.50)MATH114 - Linear Algebra for Science (0.50)MA",
        category: "program",
        courses: [
          "MATH103",
          "MATH106",
          "MATH114",
          "MATH115",
          "MATH136",
          "MATH146"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "pure-mathematics-minor-2-complete-1-of-the-following-math104-introductory-calculus-for-arts-and",
        name: "Complete 1 of the following: MATH104 - Introductory Calculus for Arts and Social Science (0.50)MATH116 - Calculus 1 for Engineering (0.50)MATH117 - Calculus 1 for Engineering (0.50",
        category: "program",
        courses: [
          "MATH104",
          "MATH116",
          "MATH117",
          "MATH127",
          "MATH137",
          "MATH147"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "pure-mathematics-minor-3-complete-1-of-the-following-math118-calculus-2-for-engineering-0-50-ma",
        name: "Complete 1 of the following: MATH118 - Calculus 2 for Engineering (0.50)MATH119 - Calculus 2 for Engineering (0.50)MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 ",
        category: "program",
        courses: [
          "MATH118",
          "MATH119",
          "MATH128",
          "MATH138",
          "MATH148"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "pure-mathematics-minor-4-complete-1-of-the-following-ece206-advanced-calculus-2-for-electrical-",
        name: "Complete 1 of the following: ECE206 - Advanced Calculus 2 for Electrical Engineers (0.50)MATH212 - Advanced Calculus 2 for Electrical Engineers (0.50)MATH217 - Calculus 3 for Chemi",
        category: "program",
        courses: [
          "ECE206",
          "MATH212",
          "MATH217",
          "MATH227",
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "quantum-information-option",
    name: "Quantum Information Option",
    category: "option",
    code: "Quantum Information Option",
    credentialType: "Option",
    faculty: "Faculty of Mathematics",
    sourcePid: "S1q-FG8A6",
    sourceId: "698e2944e6bb8b01a6c78068",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/S1q-FG8A6",
    requirements: [
      {
        id: "quantum-information-option-1-complete-all-the-following-pmath343-introduction-to-the-mathematics-of",
        name: "Complete all the following: PMATH343 - Introduction to the Mathematics of Quantum Information (0.50)",
        category: "program",
        courses: [
          "PMATH343"
        ],
        type: "allOf"
      },
      {
        id: "quantum-information-option-2-complete-1-of-the-following-amath473-quantum-theory-0-50-co432-informa",
        name: "Complete 1 of the following: AMATH473 - Quantum Theory (0.50)CO432 - Information Theory and Applications (0.50)",
        category: "program",
        courses: [
          "AMATH473",
          "CO432"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "quantum-information-option-3-complete-1-of-the-following-co481-introduction-to-quantum-information-",
        name: "Complete 1 of the following: CO481 - Introduction to Quantum Information Processing (0.50)CS467 - Introduction to Quantum Information Processing (0.50)PHYS467 - Introduction to Qua",
        category: "program",
        courses: [
          "CO481",
          "CS467",
          "PHYS467"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "quantum-information-option-4-complete-1-of-the-following-cs231-algorithmic-problem-solving-0-50-cs3",
        name: "Complete 1 of the following: CS231 - Algorithmic Problem Solving (0.50)CS341 - Algorithms (0.50)",
        category: "program",
        courses: [
          "CS231",
          "CS341"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "quantum-information-option-5-choose-any-of-the-following-amath242-introduction-to-computational-mat",
        name: "Choose any of the following: AMATH242 - Introduction to Computational Mathematics (0.50)AMATH474 - Advanced Quantum Theory: Quantum Information and Foundations (0.50)AMATH477 - Sto",
        category: "program",
        courses: [
          "AMATH242",
          "AMATH474",
          "AMATH477",
          "CO331",
          "CO471",
          "CO485",
          "CO486",
          "CO487",
          "CS371",
          "CS466",
          "CS485",
          "PMATH453",
          "STAT330"
        ],
        type: "allOf"
      },
      {
        id: "quantum-information-option-6-complete-no-more-than-1-from-the-following-amath373-quantum-theory-1-0",
        name: "Complete no more than 1 from the following: AMATH373 - Quantum Theory 1 (0.50)PHYS334 - Quantum Physics 2 (0.50)",
        category: "program",
        courses: [
          "AMATH373",
          "PHYS334"
        ],
        type: "allOf"
      },
      {
        id: "quantum-information-option-7-complete-no-more-than-1-from-the-following-chem356-introductory-quantu",
        name: "Complete no more than 1 from the following: CHEM356 - Introductory Quantum Mechanics (0.50)ECE305 - Introduction to Quantum Mechanics (0.50)PHYS233 - Introduction to Quantum Mechan",
        category: "program",
        courses: [
          "CHEM356",
          "ECE305",
          "PHYS233",
          "PHYS234"
        ],
        type: "allOf"
      },
      {
        id: "quantum-information-option-8-complete-no-more-than-1-from-the-following-cs360-introduction-to-the-t",
        name: "Complete no more than 1 from the following: CS360 - Introduction to the Theory of Computing (0.50)CS365 - Models of Computation (0.50)PMATH432 - Mathematical Logic (0.50)",
        category: "program",
        courses: [
          "CS360",
          "CS365",
          "PMATH432"
        ],
        type: "allOf"
      },
      {
        id: "quantum-information-option-9-complete-no-more-than-1-from-the-following-pmath336-introduction-to-gr",
        name: "Complete no more than 1 from the following: PMATH336 - Introduction to Group Theory with Applications (0.50)PMATH347 - Groups and Rings (0.50)",
        category: "program",
        courses: [
          "PMATH336",
          "PMATH347"
        ],
        type: "allOf"
      },
      {
        id: "quantum-information-option-10-complete-no-more-than-1-from-the-following-ece405a-quantum-information",
        name: "Complete no more than 1 from the following: ECE405A - Quantum Information Processing Devices (0.50)PHYS468 - Physics of Quantum Computing (0.50)",
        category: "program",
        courses: [
          "ECE405A",
          "PHYS468"
        ],
        type: "allOf"
      }
    ]
  },
  {
    id: "software-engineering-specialization",
    name: "Software Engineering Specialization",
    category: "specialization",
    code: "CS-Software Engineering Specialization",
    credentialType: "Specialization",
    faculty: "Faculty of Mathematics",
    sourcePid: "S1v11A0sn",
    sourceId: "69973b335e731ab599536efb",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/S1v11A0sn",
    parentProgramCodes: [
      "H-BBA & BCS Double Degree",
      "H-Computer Science (BCS)",
      "H-Computer Science (BMath)"
    ],
    requirements: [
      {
        id: "software-engineering-specialization-1-complete-1-of-the-following-bet360-design-frameworks-for-social-ventur",
        name: "Complete 1 of the following: BET360 - Design Frameworks for Social Ventures (0.50)BET420 - Entrepreneurship for Social Impact (0.50)CS492 - The Social Implications of Computing (0.",
        category: "program",
        courses: [
          "BET360",
          "BET420",
          "CS492",
          "ENVS205",
          "GEOG207",
          "GEOG306",
          "GSJ205",
          "MSE422",
          "MSE442",
          "PACS315",
          "SCI205",
          "SOC232",
          "SOC324",
          "STV202",
          "STV205",
          "STV306"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "software-engineering-specialization-2-complete-2-of-the-following-cs343-concurrent-and-parallel-programming-",
        name: "Complete 2 of the following: CS343 - Concurrent and Parallel Programming (0.50)CS346 - Application Development (0.50)CS348 - Introduction to Database Management (0.50)CS349 - User ",
        category: "program",
        courses: [
          "CS343",
          "CS346",
          "CS348",
          "CS349"
        ],
        type: "chooseN",
        requiredCount: 2
      },
      {
        id: "software-engineering-specialization-3-complete-2-of-the-following-cs442-principles-of-programming-languages-",
        name: "Complete 2 of the following: CS442 - Principles of Programming Languages (0.50)CS444 - Compiler Construction (0.50)CS448 - Database Systems Implementation (0.50)CS449 - Human-Compu",
        category: "program",
        courses: [
          "CS442",
          "CS444",
          "CS448",
          "CS449",
          "CS450",
          "CS451",
          "CS452",
          "CS453",
          "CS454",
          "CS456",
          "CS457",
          "CS459",
          "CS480",
          "CS484",
          "CS486",
          "CS488"
        ],
        type: "chooseN",
        requiredCount: 2
      },
      {
        id: "software-engineering-specialization-4-complete-1-of-the-following-cs445-software-requirements-specification-",
        name: "Complete 1 of the following: CS445 - Software Requirements Specification and Analysis (0.50)ECE451 - Software Requirements Specification and Analysis (0.50)",
        category: "program",
        courses: [
          "CS445",
          "ECE451"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "software-engineering-specialization-5-complete-1-of-the-following-cs446-software-design-and-architectures-0-",
        name: "Complete 1 of the following: CS446 - Software Design and Architectures (0.50)ECE452 - Software Design and Architectures (0.50)",
        category: "program",
        courses: [
          "CS446",
          "ECE452"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "software-engineering-specialization-6-complete-1-of-the-following-cs447-software-testing-quality-assurance-a",
        name: "Complete 1 of the following: CS447 - Software Testing, Quality Assurance, and Maintenance (0.50)ECE453 - Software Testing, Quality Assurance, and Maintenance (0.50)",
        category: "program",
        courses: [
          "CS447",
          "ECE453"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "statistics-bachelor-of-mathematics-honours",
    name: "Statistics (Bachelor of Mathematics - Honours)",
    degreeIds: [
      "bmath"
    ],
    category: "major",
    code: "H-Statistics",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "H1XegyCAin",
    sourceId: "6786c078b83b231314473fad",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/H1XegyCAin",
    requirements: [
      {
        id: "statistics-bachelor-of-mathematics-honours-1-complete-all-the-following-engl378-professional-communications-in-stat",
        name: "Complete all the following: ENGL378 - Professional Communications in Statistics and Actuarial Science (0.50)STAT330 - Mathematical Statistics (0.50)STAT331 - Applied Linear Models ",
        category: "program",
        courses: [
          "ENGL378",
          "STAT330",
          "STAT331",
          "STAT332",
          "STAT333"
        ],
        type: "allOf"
      },
      {
        id: "statistics-bachelor-of-mathematics-honours-2-complete-1-of-the-following-amath231-calculus-4-0-50-amath242-introduc",
        name: "Complete 1 of the following: AMATH231 - Calculus 4 (0.50)AMATH242 - Introduction to Computational Mathematics (0.50)AMATH250 - Introduction to Differential Equations (0.50)AMATH251",
        category: "program",
        courses: [
          "AMATH231",
          "AMATH242",
          "AMATH250",
          "AMATH251",
          "AMATH350",
          "CS371",
          "MATH239",
          "MATH249"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "statistics-bachelor-of-mathematics-honours-3-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "statistics-bachelor-of-mathematics-honours-4-complete-1-of-the-following-cs457-system-performance-evaluation-0-50-c",
        name: "Complete 1 of the following: CS457 - System Performance Evaluation (0.50)CS485 - Statistical and Computational Foundations of Machine Learning (0.50)CS486 - Introduction to Artific",
        category: "program",
        courses: [
          "CS457",
          "CS485",
          "CS486"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "statistics-joint-honours",
    name: "Statistics (Joint Honours)",
    category: "joint",
    code: "JH-Statistics",
    credentialType: "Major",
    faculty: "Faculty of Mathematics",
    sourcePid: "BybggJARoh",
    sourceId: "6786bfa9c9b6049ee5b8dd50",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/BybggJARoh",
    requirements: [
      {
        id: "statistics-joint-honours-1-complete-all-the-following-engl378-professional-communications-in-stat",
        name: "Complete all the following: ENGL378 - Professional Communications in Statistics and Actuarial Science (0.50)STAT330 - Mathematical Statistics (0.50)STAT331 - Applied Linear Models ",
        category: "program",
        courses: [
          "ENGL378",
          "STAT330",
          "STAT331",
          "STAT333"
        ],
        type: "allOf"
      },
      {
        id: "statistics-joint-honours-2-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      }
    ]
  },
  {
    id: "statistics-minor",
    name: "Statistics Minor",
    category: "minor",
    code: "Statistics Minor",
    credentialType: "Minor",
    faculty: "Faculty of Mathematics",
    sourcePid: "rJbgx1RAs3",
    sourceId: "6660d06c314dfa21293ef363",
    sourceUrl: "https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/rJbgx1RAs3",
    requirements: [
      {
        id: "statistics-minor-1-complete-1-of-the-following-math237-calculus-3-for-honours-mathematics",
        name: "Complete 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)",
        category: "program",
        courses: [
          "MATH237",
          "MATH247"
        ],
        type: "chooseN",
        requiredCount: 1
      },
      {
        id: "statistics-minor-2-complete-3-of-the-following-stat330-mathematical-statistics-0-50-stat3",
        name: "Complete 3 of the following: STAT330 - Mathematical Statistics (0.50)STAT331 - Applied Linear Models (0.50)STAT332 - Sampling and Experimental Design (0.50)STAT333 - Stochastic Pro",
        category: "program",
        courses: [
          "STAT330",
          "STAT331",
          "STAT332",
          "STAT333"
        ],
        type: "chooseN",
        requiredCount: 3
      }
    ]
  }
];
