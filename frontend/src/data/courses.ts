import type { Course } from "../types/course";

export const courses: Course[] = [
  {
    code: "ACTSC127",
    name: "Introduction to Global Capital Markets and Financial Analytics",
    subject: "ACTSC",
    level: 100,
    description: "This course introduces financial markets and institutions, examining the role of finance in the global economy while introducing foundational principles of financial decision making. The course utilizes analytic and computational approaches to the topics, enabling students to develop data management and analysis competencies.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "ACTSC221",
    name: "Introductory Financial Mathematics (Non-Specialist Level)",
    subject: "ACTSC",
    level: 200,
    description: "The theory of rates of interest and discount; annuities and sinking funds with practical applications to mortgage and bond questions. Yield rates.",
    prerequisiteRawText: "Students must be in level 2A or higher"
  },
  {
    code: "ACTSC231",
    name: "Introductory Financial Mathematics",
    subject: "ACTSC",
    level: 200,
    description: "The theory of rates of interest and discount including the theoretical continuous case of forces of interest and discount. Annuities and sinking funds, including the continuous case. Practical and theoretical applications primarily to mortgages and bonds. Yield rates.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH137 - Calculus 1 for Honours Mathematics (0.50) MATH147 - Calculus 1 (Advanced Level) (0.50) Complete 1 of the following Earned a minimum grade of 70% in each of the following: STAT220 - Probability (Non-Specialist Level) (0.50) Corequisite (see below) Students must be in level 2A or higher"
  },
  {
    code: "ACTSC232",
    name: "Life Contingencies 1",
    subject: "ACTSC",
    level: 200,
    description: "The future lifetime random variable: probability and survival functions; force of mortality; complete and curtate expectation of life; Makeham and Gompertz mortality laws. Life tables: characteristics of population and insurance life tables; selection; fractional age assumptions. Life insurance payments and annuity payments: present value random variables; expected present values; higher moments; actuarial notation. Annual, 1/mthly, and continuous cases. Relationships between insurance and annuity functions. Premiums: expense loadings. Present value of future loss random variables and distribution, net and gross cases. Equivalence principle. Portfolio percentile principle. Extra risks.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: ACTSC231 - Introductory Financial Mathematics (0.50)"
  },
  {
    code: "ACTSC291",
    name: "Global Capital Markets and Financial Analytics",
    subject: "ACTSC",
    level: 200,
    description: "This course offers an overview of global capital markets and asset valuation. Topics may include an overview of financial markets and instruments, time value of money, valuation of financial assets, and financial risk and portfolio management. The course utilizes an analytic and computational approach to the topics, enabling students to develop data management and analysis competencies.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: ACTSC127 - Introduction to Global Capital Markets and Financial Analytics (0.50) AFM127 - Introduction to Global Capital Markets and Financial Analytics (0.50) CFM101 - Introduction to Financial Markets and Data Analytics (0.50) Complete 1 of the following Enrolled in H-Accounting & Financial Management , H-Computing & Financial Management , H-Mathematics/Chartered Professional Accountancy , H-Science & Financial Management , or H-Sustainability & Financial Management Enrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "ACTSC331",
    name: "Life Contingencies 2",
    subject: "ACTSC",
    level: 300,
    description: "Policy Values: Annual, 1/mthly, and continuous cases. Thiele's equation. Modified premium policy values. Multiple state models: applications in life contingencies; assumptions; Kolmogorov equations; premiums, policy values, multiple decrement models. Joint life models: valuation of insurance benefits on joint lives, dependent and independent cases.",
    prerequisiteRawText: "Complete all of the following Earned a minimum grade of 60% in each of the following: ACTSC232 - Life Contingencies 1 (0.50) Enrolled in H-Actuarial Science , JH-Actuarial Science , or Actuarial Science Minor"
  },
  {
    code: "ACTSC363",
    name: "Casualty and Health Insurance Mathematics 1",
    subject: "ACTSC",
    level: 300,
    description: "Introduction to the collective risk model; models for loss frequency: (a, b, 0) and (a, b, 1) classes of distributions, compound distributions and mixtures; models for loss severity: exponential, gamma, lognormal, Pareto, Weibull, and mixtures; measures of distribution tails; impact of policy adjustments on loss frequency and severity; estimation of frequency and severity models.",
    prerequisiteRawText: "Enrolled in H-Actuarial Science , JH-Actuarial Science , Actuarial Science Minor , or H-Mathematical Finance"
  },
  {
    code: "ACTSC372",
    name: "Investment Science and Corporate Finance",
    subject: "ACTSC",
    level: 300,
    description: "Introduction to financial markets. Different return and risk measures. Investment rules and capital budgeting. Rigorous derivations of Markowitz portfolio optimization and its application in investment decisions. Capital Asset Pricing Model (CAPM) and Arbitrage Pricing Theory (APT). Weighted average cost of capital (WACC) and efficient market hypothesis (EMH). Long-term financing, capital structure (MM propositions), and dividend policies. Introduction to options, forwards, and swaps.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: ACTSC231 - Introductory Financial Mathematics (0.50) Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)"
  },
  {
    code: "ACTSC423",
    name: "Topics in Financial Econometrics",
    subject: "ACTSC",
    level: 400,
    description: "This course introduces the use of advanced econometric/statistical methods in studying financial market data, and in quantitatively assessing risks associated with financial investments. The methods presented in this course are tailored to address specific issues of interest in finance, such as the quantification of the risk-return tradeoff, the modelling of time-varying stock/bond market volatility and, possibly, also the statistical analysis of financial derivatives such as options.",
    prerequisiteRawText: "Must have completed at least 1 of the following: AFM323 - Quantitative Foundations for Finance (0.50)STAT331 - Applied Linear Models (0.50)STAT371 - Applied Linear Models and Process Improvement for Business (0.50)STAT373 - Regression and Forecasting Methods in Finance (0.50)STAT374 - Quantitative Foundations for Finance (0.50)"
  },
  {
    code: "ACTSC431",
    name: "Casualty and Health Insurance Mathematics 2",
    subject: "ACTSC",
    level: 400,
    description: "Aggregate loss and payment models: properties, analytic results, convolution-type methods, recursive methods, inversion-type methods, and simulation; advanced aggregate claims models; reinsurance; applications to insurance pricing; insurance pricing using generalized linear models.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: STAT330 - Mathematical Statistics (0.50) Must have completed at least 1 of the following: STAT331 - Applied Linear Models (0.50) STAT371 - Applied Linear Models and Process Improvement for Business (0.50) STAT373 - Regression and Forecasting Methods in Finance (0.50) Earned a minimum grade of 60% in each of the following: ACTSC363 - Casualty and Health Insurance Mathematics 1 (0.50) Enrolled in H-Actuarial Science , JH-Actuarial Science , or H-Mathematical Finance"
  },
  {
    code: "ACTSC432",
    name: "Credibility and Risk Theory",
    subject: "ACTSC",
    level: 400,
    description: "Credibility theory: American credibility, Bayesian, Bühlmann, Bühlmann-Straub, and empirical Bayes parameter estimation. Risk theory: claim arrival dynamics, surplus models, first-passage times, applications to solvency, and their analytical and numerical analyses.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: ACTSC363 - Casualty and Health Insurance Mathematics 1 (0.50) STAT330 - Mathematical Statistics (0.50) STAT333 - Stochastic Processes 1 (0.50) Enrolled in H-Actuarial Science , JH-Actuarial Science , or H-Mathematical Finance"
  },
  {
    code: "ACTSC445",
    name: "Quantitative Enterprise Risk Management",
    subject: "ACTSC",
    level: 400,
    description: "This course introduces enterprise risk management, with a focus on quantitative analysis and economic capital. Risk classification is first discussed with an emphasis on the types of risk most suited to quantitative methods. Risk measures, such as Value-at-Risk (VaR) and Conditional Tail Expectation (CTE or TVaR), are then introduced and their use by firms and regulators to determine risk capital requirements is further highlighted. Different approaches are considered for developing loss distributions, including frequency/severity analysis and extreme value theory. Copulas and economic scenario generators are used to aggregate dependent risks. Different strategies for mitigating or transferring risk are reviewed. Additional topics that may be covered include credit risk, capital allocation, and regulation of financial institutions.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed the following: ACTSC372 - Investment Science and Corporate Finance (0.50) Must have completed the following: BUS393W Complete 1 of the following Must have completed the following: STAT330 - Mathematical Statistics (0.50) STAT333 - Stochastic Processes 1 (0.50) Must have completed the following: STAT334 - Probability Models for Business and Accounting (0.50) Enrolled in H-Actuarial Science , JH-Actuarial Science , H-Mathematical Finance , H-Math/FARM - Chartered Financial Analyst Spec , or H-Math/FARM - Professional Risk Management Spec"
  },
  {
    code: "ACTSC446",
    name: "Mathematics of Financial Markets",
    subject: "ACTSC",
    level: 400,
    description: "This course covers mathematical techniques for no-arbitrage pricing and hedging financial derivatives. Topics to be covered can be classified into three broad areas: derivatives markets (options; forwards and futures; other derivatives; put-call parity), discrete-time financial models (binomial models; general multi-period models; Fundamental Theorems of Asset Pricing; risk-neutral probability), and continuous-time financial models (basic stochastic calculus and Itô's lemma; Black-Scholes model; interest rate models and bond pricing).",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed the following: ACTSC372 - Investment Science and Corporate Finance (0.50) Must have completed the following: BUS393W Must have completed at least 1 of the following: STAT333 - Stochastic Processes 1 (0.50) STAT334 - Probability Models for Business and Accounting (0.50) Enrolled in H-Actuarial Science , JH-Actuarial Science , H-Biostatistics , H-Math/FARM - Chartered Financial Analyst Spec , H-Math/FARM - Professional Risk Management Spec , H-Mathematical Finance , H-Statistics , JH-Statistics , or Statistics Minor"
  },
  {
    code: "ACTSC447",
    name: "Numerical Computation for Financial Modelling",
    subject: "ACTSC",
    level: 400,
    description: "The interaction of financial models, numerical methods, and computing environments. Basic computational aspects of option pricing and hedging. Numerical methods for stochastic differential equations, strong and weak convergence. Generating correlated random numbers. Time-stepping methods. Finite difference methods for the Black-Scholes equation. Discretization, stability, convergence. Methods for portfolio optimization, effect of data errors on portfolio weights.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50) CS370 - Numerical Computation (0.50) CS371 - Introduction to Computational Mathematics (0.50) Complete 1 of the following Must have completed at least 1 of the following: STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT206 - Statistics for Software Engineering (0.50)"
  },
  {
    code: "ACTSC454",
    name: "Longevity and Mortality Using Predictive Analytics",
    subject: "ACTSC",
    level: 400,
    description: "Kaplan-Meier and Nelson-Aalen estimators for survival functions. Kernel density models. Validation of mortality tables. Estimators for Markov multiple state transition intensities. Longevity models, including deterministic and stochastic models such as Lee-Carter and Cairns-Blake-Dowd.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: ACTSC331 - Life Contingencies 2 (0.50) STAT330 - Mathematical Statistics (0.50) Enrolled in H-Actuarial Science , JH-Actuarial Science , or H-Mathematical Finance"
  },
  {
    code: "ACTSC455",
    name: "Life Contingencies 3",
    subject: "ACTSC",
    level: 400,
    description: "Profit testing for traditional and non-traditional life insurance. Pricing and valuation of embedded options in life insurance products. Defined benefit and defined contribution pension plan design. Theory and practice of unit credit methods for pension plan funding and valuation for final average salary, career average earnings, and career average revalued earnings pension plans; post-retirement health benefits.",
    prerequisiteRawText: "Complete all of the following Earned a minimum grade of 60% in each of the following: ACTSC331 - Life Contingencies 2 (0.50) Enrolled in H-Actuarial Science , JH-Actuarial Science , or H-Mathematical Finance"
  },
  {
    code: "ACTSC456",
    name: "Statistical Learning in Actuarial Science",
    subject: "ACTSC",
    level: 400,
    description: "This course explores a broad range of statistical learning models used to analyze data in actuarial and financial contexts. It covers techniques from both supervised and unsupervised learning, with a focus on practical applications. Specific topics covered include modelling principles and practice, advanced and regularized regression models, cross-validation, traditional classification models (logistic regression, LDA, QDA, KNN), decision trees (bagging, boosting, random forests), dimensionality reduction (PCA), hierarchical and K-means clustering, and an introduction to neural networks with applications to supervised and unsupervised learning problems. Some extensions to the above models may also be considered.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: STAT331 - Applied Linear Models (0.50)STAT371 - Applied Linear Models and Process Improvement for Business (0.50)STAT373 - Regression and Forecasting Methods in Finance (0.50)Enrolled in H-Actuarial Science, JH-Actuarial Science, or H-Mathematical Finance"
  },
  {
    code: "ACTSC457",
    name: "Predictive Modelling in Property and Casualty Insurance",
    subject: "ACTSC",
    level: 400,
    description: "This course introduces the fundamentals of predictive modelling with a focus on applications in loss modelling and pricing in the property and casualty insurance industry. The course centres on a case study approach to develop comprehensive pricing models using realistic, large-scale insurance data. The course also emphasizes practical skills in data cleansing, exploratory analysis, model development and validation.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: ACTSC363 - Casualty and Health Insurance Mathematics 1 (0.50)STAT331 - Applied Linear Models (0.50)Enrolled in H-Actuarial Science, JH-Actuarial Science, or H-Mathematical Finance"
  },
  {
    code: "AFM101",
    name: "Introduction to Financial Accounting",
    subject: "AFM",
    level: 100,
    description: "This course is an introduction to financial accounting. The preparation and use of financial statements is examined. The accounting cycle and assets and liabilities reporting, is discussed."
  },
  {
    code: "AFM102",
    name: "Introduction to Managerial Accounting",
    subject: "AFM",
    level: 100,
    description: "This course is an introduction to the preparation and use of accounting information for management decision-making and reporting. Cost behaviour, cost accumulation systems, and short- and long-term decision models are discussed.",
    prerequisiteRawText: "Complete 1 of the following Must have completed at least 1 of the following: AFM101 - Introduction to Financial Accounting (0.50) AFM191 - Introduction to Financial Reporting and Managerial Decision Making 1 (0.50) Must have completed at least 1 of the following: BUS127W, BUS227W"
  },
  {
    code: "AFM111",
    name: "Professional Pathways and Problem-Solving",
    subject: "AFM",
    level: 100,
    description: "This course assists students in developing the knowledge, skills, and values needed to manage their learning, ethical behaviour, and career path as a professional with a responsibility to society. The course also provides an opportunity to develop problem-solving, information literacy, and communication skills.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 1AEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, or H-Sustainability & Financial Management"
  },
  {
    code: "AFM127",
    name: "Introduction to Global Capital Markets and Financial Analytics",
    subject: "AFM",
    level: 100,
    description: "This course introduces financial markets and institutions, examining the role of finance in the global economy while introducing foundational principles of financial decision making. The course utilizes analytic and computational approaches to the topics, enabling students to develop data management and analysis competencies.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM131",
    name: "Introduction to Business in North America",
    subject: "AFM",
    level: 100,
    description: "The functional areas of business: finance, personnel administration, production, marketing, and accounting are examined within differing organizational structures. Coverage also includes study of the principles of effective management and the financial system as a source of corporate capital."
  },
  {
    code: "AFM182",
    name: "Introduction to Financial Reporting and Managerial Decision Making 2",
    subject: "AFM",
    level: 100,
    description: "This course continues the development of skills introduced in the foundational financial reporting course, with a greater focus on foundational analysis and forecasting, and expands the stakeholder context to public company stakeholders. The course enhances problem-solving skills through a problem-based learning delivery model.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: AFM191 - Introduction to Financial Reporting and Managerial Decision Making 1 (0.50)Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM191",
    name: "Introduction to Financial Reporting and Managerial Decision Making 1",
    subject: "AFM",
    level: 100,
    description: "This course is a foundation for the practice of financial reporting and managerial decision making.  The course develops an understanding of the importance of a conceptual framework of accounting and generally accepted accounting principles that provide relevant information to meet stakeholder needs with a focus on private company stakeholders. Students prepare financial reports and financial statements, at an introductory level, that are designed to meet the needs of internal and external stakeholders of private companies. Students perform introductory financial analysis to inform business decisions and solve business problems considering the appropriate business context.  The course develops problem-solving skills through a problem-based learning delivery model.",
    prerequisiteRawText: "Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM206",
    name: "Introduction to Tax",
    subject: "AFM",
    level: 200,
    description: "This course is the first of a sequence of courses in which students will learn to apply Canadian tax principles to taxpayer situations. In this course, students will be equipped to apply basic tax rules to individual circumstances and work with software to prepare personal tax returns. The course focuses on being able to understand and apply income tax to detailed scenarios involving individual employment income as well as personal income tax deductions and credits.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: AFM191 - Introduction to Financial Reporting and Managerial Decision Making 1 (0.50)Students must be in level 2A or higherComplete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Mathematics/Chartered Professional Accountancy, or H-Science & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM208",
    name: "Introduction to Assurance",
    subject: "AFM",
    level: 200,
    description: "This course is one of a set of courses that focuses on the knowledge and skills that enhance experiential learning during a first co-op term. Students will gain an understanding of the concept of assurance, the demand for and supply of assurance services, the responsibilities of the assurance practitioner, and the work involved in conducting an audit of financial statements. They will also be equipped to perform a selection of audit tasks that would be assigned to a novice auditor.   ",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: AFM191 - Introduction to Financial Reporting and Managerial Decision Making 1 (0.50)Students must be in level 2A or higherComplete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM231",
    name: "Business Law",
    subject: "AFM",
    level: 200,
    description: "Particular attention is given to the law relating to contracts and business organizations. Other areas of study include sources of law, the judicial process, real and personal property, torts, agency, credit, and negotiable instruments."
  },
  {
    code: "AFM272",
    name: "Global Capital Markets and Financial Analytics",
    subject: "AFM",
    level: 200,
    description: "This course offers an overview of global capital markets and asset valuation. Topics may include an overview of financial markets and instruments, time value of money, valuation of financial assets, and financial risk and portfolio management. The course utilizes an analytic and computational approach to the topics, enabling students to develop data management and analysis competencies.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: ACTSC127 - Introduction to Global Capital Markets and Financial Analytics (0.50) AFM127 - Introduction to Global Capital Markets and Financial Analytics (0.50) CFM101 - Introduction to Financial Markets and Data Analytics (0.50) Complete 1 of the following Enrolled in H-Accounting & Financial Management , H-Computing & Financial Management , H-Mathematics/Chartered Professional Accountancy , H-Science & Financial Management , or H-Sustainability & Financial Management Enrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM274",
    name: "Introduction to Corporate Finance",
    subject: "AFM",
    level: 200,
    description: "This course is the first in a two-course sequence that deals with corporate financial decision-making. Topics may include capital budgeting, cost of capital, security issuance, capital structure, payout policy and dividends, and short-term finance.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: AFM272 - Global Capital Markets and Financial Analytics (0.50)AFM273 - Financial Instruments and Capital Markets (0.50)Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM285",
    name: "Introduction to Sustainability and Sustainable Business",
    subject: "AFM",
    level: 200,
    description: "This course introduces the foundational concepts of sustainability and sustainable business decision-making. Students will explore the interaction between business, society, and the natural environment. Students will gain an awareness of the different sustainability reporting standards and frameworks. This course enables students to identify and integrate sustainability-related risks and opportunities in business decision-making.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 2A or higherComplete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, or H-Science & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM291",
    name: "Intermediate Financial Accounting 1",
    subject: "AFM",
    level: 200,
    description: "A first course in intermediate accounting dealing with the theory and practice of financial statement preparation and reporting. The emphasis will be on asset valuation and the related impact on income measurement.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: AFM101 - Introduction to Financial Accounting (0.50)AFM191 - Introduction to Financial Reporting and Managerial Decision Making 1 (0.50)Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM311",
    name: "Connections to Ethical Context",
    subject: "AFM",
    level: 300,
    description: "This course focuses on developing the qualities and transferable skills necessary for integration, continuous learning, and professional development. The course is oriented around the ethical and moral issues faced by accounting and finance professionals.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: AFM182 - Introduction to Financial Reporting and Managerial Decision Making 2 (0.50)Students must be in level 3B or higher"
  },
  {
    code: "AFM321",
    name: "Personal Financial Planning and Taxation",
    subject: "AFM",
    level: 300,
    description: "This course helps students develop a do-it-yourself (DIY) individual financial planning and tax mindset. Students will learn how to create and assess a basic financial plan for themselves, centered around the budget, across various life stages. Within each area of planning, saving, spending, and reporting, students will develop appreciation of important financial and tax considerations that will set them up for financial success.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 3A or higherComplete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM323",
    name: "Quantitative Foundations for Finance",
    subject: "AFM",
    level: 300,
    description: "This course introduces analytical and statistical methods commonly used in finance, with applications to investment management and corporate finance.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: ACTSC291 - Global Capital Markets and Financial Analytics (0.50)AFM272 - Global Capital Markets and Financial Analytics (0.50)AFM273 - Financial Instruments and Capital Markets (0.50)Enrolled in H-Accounting & Financial Management, H-Mathematics/Chartered Professional Accountancy, or H-Sustainability & Financial Management"
  },
  {
    code: "AFM335",
    name: "Business Law for Financial Managers",
    subject: "AFM",
    level: 300,
    description: "This course helps accounting and finance professionals become effective managers and better informed users of legal services. It contributes to developing a solid understanding of the legal and ethical environment in which businesses operate, expands on the legal concepts of business organization and contracts, introduces property and torts law, and integrates legal concepts through the preparation of a legal risk plan.",
    prerequisiteRawText: "Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM341",
    name: "Accounting Information Systems",
    subject: "AFM",
    level: 300,
    description: "Examines the planning, requirements analysis, acquisition, and evaluation of information systems, with an emphasis on accounting information systems. Introduces information systems assurance concepts, and considers the role of information technology in the improvement of business performance.",
    prerequisiteRawText: "Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM362",
    name: "Corporate Taxation",
    subject: "AFM",
    level: 300,
    description: "This course examines the foundational concepts in the calculation of different sources of income and their taxation in Canadian corporations.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: AFM321 - Personal Financial Planning and Taxation (0.50)Students must be in level 3A or higherComplete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM373",
    name: "Cases and Applications in Corporate Finance",
    subject: "AFM",
    level: 300,
    description: "This course builds on the theory of financial management using cases to illustrate a variety of corporate financial decisions.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingMust have completed at least 1 of the following: ACTSC391 - Corporate Finance (0.50)AFM274 - Introduction to Corporate Finance (0.50)AFM275 - Corporate Finance (0.50)Must have completed the following: AFM372Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM382",
    name: "Cost Management Systems",
    subject: "AFM",
    level: 300,
    description: "Consideration of more complex topics in management planning and control. Emphasis is on traditional and contemporary cost accumulation systems and their application in modern day organizations. Cases, simulations, projects, and presentations are the key instructional methods used to understand and integrate the course material. At the end of the course, students will have a solid understanding of how the correct choice of a costing model adds value to the organization.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: AFM102 - Introduction to Managerial Accounting (0.50)AFM191 - Introduction to Financial Reporting and Managerial Decision Making 1 (0.50)Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM391",
    name: "Intermediate Financial Accounting 2",
    subject: "AFM",
    level: 300,
    description: "This is an intermediate financial accounting course that deals with problems related to the measurement of liabilities, measurement of income, and the reporting and measuring of corporate equities.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: AFM291 - Intermediate Financial Accounting 1 (0.50)Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM423",
    name: "Topics in Financial Econometrics",
    subject: "AFM",
    level: 400,
    description: "This course introduces the use of advanced econometric/statistical methods in studying financial market data, and in quantitatively assessing risks associated with financial investments. The methods presented in this course are tailored to address specific issues of interest in finance, such as the quantification of the risk-return tradeoff, the modelling of time-varying stock/bond market volatility and, possibly, also the statistical analysis of financial derivatives such as options.",
    prerequisiteRawText: "Must have completed at least 1 of the following: AFM323 - Quantitative Foundations for Finance (0.50)STAT331 - Applied Linear Models (0.50)STAT371 - Applied Linear Models and Process Improvement for Business (0.50)STAT373 - Regression and Forecasting Methods in Finance (0.50)STAT374 - Quantitative Foundations for Finance (0.50)"
  },
  {
    code: "AFM424",
    name: "Equity Investments",
    subject: "AFM",
    level: 400,
    description: "This course addresses principles of equity investments, including risk and return relationships, fundamental analysis of equities based on macroeconomic, industry and company-specific factors, financial statement analysis, and technical analysis. Portfolio allocation, performance measurement, and ethical and professional standards in the investment profession are also covered.",
    prerequisiteRawText: "Must have completed at least 1 of the following: ACTSC291 - Global Capital Markets and Financial Analytics (0.50) ACTSC372 - Investment Science and Corporate Finance (0.50) AFM272 - Global Capital Markets and Financial Analytics (0.50) AFM273 - Financial Instruments and Capital Markets (0.50) ECON371 - Business Finance 1 (0.50)"
  },
  {
    code: "AFM433",
    name: "Business Strategy",
    subject: "AFM",
    level: 400,
    description: "This course focuses on strategic management of the total enterprise. Managers contribute to the organization through their analytical and leadership capabilities as well as their technical expertise. The course provides a framework for developing and implementing strategy that fits the firm's environment, managerial values, and organization.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: AFM291 - Intermediate Financial Accounting 1 (0.50)Must have completed at least 1 of the following: ACTSC291 - Global Capital Markets and Financial Analytics (0.50)AFM272 - Global Capital Markets and Financial Analytics (0.50)AFM274 - Introduction to Corporate Finance (0.50)Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM451",
    name: "Audit Strategy",
    subject: "AFM",
    level: 400,
    description: "An examination of elements of audit strategy and their interrelationships, including financial assertions, types and sources of audit assurance, and evidence-gathering procedures within a framework of professional judgment.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: AFM291 - Intermediate Financial Accounting 1 (0.50)AFM341 - Accounting Information Systems (0.50)Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM462",
    name: "Specialized Topics in Taxation",
    subject: "AFM",
    level: 400,
    description: "This course introduces specialized topics in taxation with emphasis on basic planning for private companies.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: AFM362 - Corporate Taxation (0.50)Students must be in level 4B or higherComplete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM482",
    name: "Performance Measurement and Organization Control",
    subject: "AFM",
    level: 400,
    description: "This course will trace the evolution of the role of performance measurement systems in supporting areas of organization control. Topics will include the role of both financial and non-financial performance measures in: the DuPont method of control, the Harvard model of control, internal control, contemporary approaches to governance, and strategic management systems. After completing this course students will be able to evaluate the nature and suitability of a proposed performance measurement system given its design and purpose.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: AFM433 - Business Strategy (0.50)Complete 1 of the followingMust have completed the following: AFM382 - Cost Management Systems (0.50)Must have completed the following: AFM481Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AFM491",
    name: "Advanced Financial Accounting",
    subject: "AFM",
    level: 400,
    description: "An advanced accounting course considering specific problems of accounting for the corporate entity, such as business combinations, intercorporate investments, consolidated financial statements, accounting for foreign operations and foreign currency transactions, and segment reporting.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: AFM391 - Intermediate Financial Accounting 2 (0.50)Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Computing & Financial Management, H-Mathematics/Chartered Professional Accountancy, H-Science & Financial Management, or H-Sustainability & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "AMATH231",
    name: "Calculus 4",
    subject: "AMATH",
    level: 200,
    description: "Vector integral calculus-line integrals, surface integrals and vector fields, Green's theorem, the Divergence theorem, and Stokes' theorem. Applications include conservation laws, fluid flow and electromagnetic fields. An introduction to Fourier analysis. Fourier series and the Fourier transform. Parseval's formula. Frequency analysis of signals. Discrete and continuous spectra.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)"
  },
  {
    code: "AMATH242",
    name: "Introduction to Computational Mathematics",
    subject: "AMATH",
    level: 200,
    description: "A rigorous introduction to the field of computational mathematics. The focus is on the interplay between continuous models and their solution via discrete processes. Topics include pitfalls in computation, solution of linear systems, interpolation, discrete Fourier transforms, and numerical integration. Applications are used as motivation.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete all of the following Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: CS114 - Principles of Computing for Science (0.50) Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)"
  },
  {
    code: "AMATH250",
    name: "Introduction to Differential Equations",
    subject: "AMATH",
    level: 200,
    description: "Physical systems which lead to differential equations (examples include mechanical vibrations, population dynamics, and mixing processes). Dimensional analysis and dimensionless variables. Solving linear differential equations: first- and second-order scalar equations and first-order vector equations. Laplace transform methods of solving differential equations. Introduction to series solutions and special functions.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) NE112 - Linear Algebra for Nanotechnology Engineers (0.50) Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50)"
  },
  {
    code: "AMATH251",
    name: "Introduction to Differential Equations (Advanced Level)",
    subject: "AMATH",
    level: 200,
    description: "AMATH251 is an advanced-level version of AMATH250. Basic techniques for ODEs: integrating factors, undetermined coefficients and variation of parameters. Introduction to existence and uniqueness theorems. Systems of n-dimensional coupled ODEs and high order ODEs. Matrix Exponential. Laplace Transform. Stability and nonlinear ODEs. Phase space analysis and chaos. Introduction to numerical methods. Series solutions and special functions.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) NE112 - Linear Algebra for Nanotechnology Engineers (0.50) Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50)"
  },
  {
    code: "AMATH271",
    name: "Introduction to Theoretical Mechanics",
    subject: "AMATH",
    level: 200,
    description: "Newtonian dynamics, gravity and the two-body problem, introduction to Lagrangian mechanics, introduction to Hamiltonian mechanics, non-conservative forces, oscillations, introduction to special relativity.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50)"
  },
  {
    code: "AMATH331",
    name: "Applied Real Analysis",
    subject: "AMATH",
    level: 300,
    description: "Topology of Euclidean spaces, continuity, norms, completeness. Contraction mapping principle. Fourier series. Various applications, for example, to ordinary differential equations, optimization and numerical approximation.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)"
  },
  {
    code: "AMATH332",
    name: "Applied Complex Analysis",
    subject: "AMATH",
    level: 300,
    description: "Complex numbers, Cauchy-Riemann equations, analytic functions, conformal maps and applications to the solution of Laplace's equation, contour integrals, Cauchy integral formula, Taylor and Laurent expansions, residue calculus and applications.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)"
  },
  {
    code: "AMATH333",
    name: "Calculus on Manifolds for Applied Mathematics and Physics",
    subject: "AMATH",
    level: 300,
    description: "Manifolds and tensors, Lie derivatives and Lie groups, differential forms and applications to physics. This course covers the basic concepts of differential geometry from the perspective of its applications to physics. The course focuses on the concepts and the techniques that allow us to formulate physical problems in the powerful language of differential geometry including thermodynamics, classical mechanics, fluid dynamics, and relativity.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH231 - Calculus 4 (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) PMATH365 - Differential Geometry (0.50) Must have completed at least 1 of the following: MATH114 - Linear Algebra for Science (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50)"
  },
  {
    code: "AMATH342",
    name: "Computational Methods for Differential Equations",
    subject: "AMATH",
    level: 300,
    description: "An introduction to numerical methods for ordinary and partial differential equations. Ordinary differential equations: multistep and Runge-Kutta methods; stability and convergence; systems and stiffness; boundary value problems. Partial differential equations: finite difference methods for elliptic, hyperbolic and parabolic equations; stability and convergence. The course focuses on introducing widely used methods and highlights applications in the natural sciences, the health sciences, engineering, and finance.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50) CS370 - Numerical Computation (0.50) CS371 - Introduction to Computational Mathematics (0.50) Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) AMATH350 - Differential Equations for Business and Economics (0.50) MATH218 - Differential Equations for Engineers (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50)"
  },
  {
    code: "AMATH343",
    name: "Discrete Models in Applied Mathematics",
    subject: "AMATH",
    level: 300,
    description: "Difference equations and discrete dynamical systems. Mathematical models are taken from ecology, biology, economics, and other fields.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50)"
  },
  {
    code: "AMATH345",
    name: "Data-Driven Mathematical Models",
    subject: "AMATH",
    level: 300,
    description: "An introduction to data-driven mathematical methods for modelling and prediction of complex systems in science, medicine, and technology. Topics include singular value decomposition, sparsity and compressed sensing, calibration and parameter inference for differential equation models, as well as neural networks and data-driven methods for dynamical systems. Throughout the course, students will learn to use modern data science methods and apply recent advances in data-driven methods to a wide range of applications.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50) Must have completed at least 1 of the following: CS114 - Principles of Computing for Science (0.50) CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Must have completed at least 1 of the following: PHYS267 - Probability, Statistics, and Data Analysis for Physics and Astronomy (0.50) STAT202 - Introductory Statistics for Scientists (0.50) STAT206 - Statistics for Software Engineering (0.50) STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)"
  },
  {
    code: "AMATH350",
    name: "Differential Equations for Business and Economics",
    subject: "AMATH",
    level: 300,
    description: "First order ordinary differential equations. Applications to continuous compounding and the dynamics of supply and demand. Higher order linear ordinary differential equations. Systems of linear ordinary differential equations. Introduction to linear partial differential equations. The Fourier Transform and the diffusion equation. Discussion of the Black-Scholes partial differential equations, and solutions thereof.",
    prerequisiteRawText: "Complete all of the following Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Complete 1 of the following Must have completed at least 1 of the following: ACTSC291 - Global Capital Markets and Financial Analytics (0.50) ACTSC372 - Investment Science and Corporate Finance (0.50) AFM272 - Global Capital Markets and Financial Analytics (0.50) ECON371 - Business Finance 1 (0.50) Completed or concurrently enrolled in: ACTSC371, BUS393W Students must be in level 3A or higher"
  },
  {
    code: "AMATH351",
    name: "Ordinary Differential Equations",
    subject: "AMATH",
    level: 300,
    description: "Linear differential equations with non-constant coefficients, Sturm comparison, oscillation and separation theorems, series solutions and special functions. Boundary value problems. Linear systems in Rn, an introduction to dynamical systems. Laplace transforms applied to linear systems, transfer functions, the convolution theorem. An introduction to dynamical systems and stability. Perturbation methods for differential equations. Applications are discussed throughout.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) AMATH350 - Differential Equations for Business and Economics (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) Students must be in level 3A or higher"
  },
  {
    code: "AMATH353",
    name: "Partial Differential Equations 1",
    subject: "AMATH",
    level: 300,
    description: "Second order linear partial differential equations - the diffusion equation, wave equation, and Laplace's equation. Methods of solution - separation of variables and eigenfunction expansions, the Fourier transform. Physical interpretation of solutions in terms of diffusion, waves, and steady states. First order non-linear partial differential equations and the method of characteristics. Applications are emphasized throughout.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: AMATH231 - Calculus 4 (0.50) Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) ECE205 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH211 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH218 - Differential Equations for Engineers (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50)"
  },
  {
    code: "AMATH361",
    name: "Continuum Mechanics",
    subject: "AMATH",
    level: 300,
    description: "This course presents the derivation of the equations that govern the macroscopic description of solids, liquids, and gases. The necessary mathematical tools for the description are also introduced. Topics in this course include the continuum hypothesis, forces unique to a continuum and their mathematical description, solid materials versus flowing continua, the Lagrangian and Eulerian descriptions of flow, the Reynolds transport theorem and its use in deriving conservation laws, the Euler and Navier-Stokes Equations, and various applications.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH231 - Calculus 4 (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS263 - Classical Mechanics and Special Relativity (0.50)"
  },
  {
    code: "AMATH362",
    name: "Mathematics of Climate Change",
    subject: "AMATH",
    level: 300,
    description: "An introduction to the mathematical description of the climate. Topics covered include solar radiation and how the Earth is heated, climate feedbacks, the role of the oceans and the Earth's rotation, climate data and climate variability, and simple models of human-climate interactions. Calculus and computation will be used throughout the course.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) AMATH350 - Differential Equations for Business and Economics (0.50) MATH211 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH213 - Signals, Systems, and Differential Equations (0.50) MATH218 - Differential Equations for Engineers (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50) Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT202 - Introductory Statistics for Scientists (0.50) STAT206 - Statistics for Software Engineering (0.50) STAT220 - Probability (Non-Specialist Level) (0.50) STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50)"
  },
  {
    code: "AMATH373",
    name: "Quantum Theory 1",
    subject: "AMATH",
    level: 300,
    description: "Critical experiments and old quantum theory. Basic concepts of quantum mechanics: observables, wavefunctions, Hamiltonians, and the Schroedinger equation. Uncertainty, correspondence, and superposition principles. Simple applications to finite and extended one-dimensional systems, harmonic oscillator, rigid rotor, and hydrogen atom.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: AMATH231 - Calculus 4 (0.50) Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS263 - Classical Mechanics and Special Relativity (0.50)"
  },
  {
    code: "AMATH382",
    name: "Computational Modelling of Cellular Systems",
    subject: "AMATH",
    level: 300,
    description: "An introduction to dynamic mathematical modelling of cellular processes. The emphasis is on using computational tools to investigate differential equation-based models. A variety of cellular phenomena are discussed, including ion pumps, membrane potentials, intercellular communication, genetic networks, regulation of metabolic pathways, and signal transduction.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Must have completed: SYDE112 Students must be in level 3A or higher Enrolled in an Honours program"
  },
  {
    code: "AMATH383",
    name: "Introduction to Mathematical Biology",
    subject: "AMATH",
    level: 300,
    description: "An introduction to the mathematical modelling of biological processes, with emphasis on population biology. Topics include ecology, epidemiology, microbiology, and physiology. Techniques include difference equations, ordinary differential equations, partial differential equations, stability analysis, phase plane analysis, travelling wave solutions, mathematical software. Includes collaborative projects and computer labs.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) AMATH350 - Differential Equations for Business and Economics (0.50) MATH218 - Differential Equations for Engineers (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50) Must have completed at least 1 of the following: STAT202 - Introductory Statistics for Scientists (0.50) STAT206 - Statistics for Software Engineering (0.50) STAT211 - Introductory Statistics and Sampling for Accounting (0.50) STAT220 - Probability (Non-Specialist Level) (0.50) STAT230 - Probability (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)"
  },
  {
    code: "AMATH390",
    name: "Mathematics and Music",
    subject: "AMATH",
    level: 300,
    description: "An introduction to some of the deep connections between mathematics and music. Topics covered include acoustics, including pitch and harmonics, basic Fourier analysis, the mathematics behind the differing pitch and timbre of string, wind and percussion instruments, scales and temperaments, digital music, musical synthesis.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Students must be in level 3A"
  },
  {
    code: "AMATH391",
    name: "Data Analysis with Fourier and Wavelet Methods",
    subject: "AMATH",
    level: 300,
    description: "Fourier and wavelet methods are fundamental tools in data analysis ranging from time-series data to image and audio compression. These methods are increasingly finding application in areas such as machine learning and quantum computing alongside traditional application areas such as signal processing for images and audio. This course covers the mathematical development of Fourier and wavelet analysis, with an emphasis on both theory and practical application. Students will learn the necessary theory to apply Fourier and wavelet methods to the analysis of a variety of practical problems with hands on coding experience through a number of assignments.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH231 - Calculus 4 (0.50) ECE207 - Signals and Systems (0.50) PHYS364 - Mathematical Physics 1 (0.50) SYDE252 - Linear Systems and Signals (0.50) Complete 1 of the following Must have completed at least 1 of the following: MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Must have completed: SYDE114"
  },
  {
    code: "AMATH442",
    name: "Computational Methods for Partial Differential Equations",
    subject: "AMATH",
    level: 400,
    description: "This course studies several classes of methods for the numerical solution of partial differential equations in multiple dimensions on structured and unstructured grids. Finite volume methods for hyperbolic conservation laws: linear and nonlinear hyperbolic systems; stability; numerical conservation. Finite element methods for elliptic and parabolic equations: weak forms; existence of solutions; optimal convergence; higher-order methods. Examples from fluid and solid mechanics. Additional topics as time permits.",
    prerequisiteRawText: "Must have completed the following: AMATH342 - Computational Methods for Differential Equations (0.50)"
  },
  {
    code: "AMATH445",
    name: "Scientific Machine Learning",
    subject: "AMATH",
    level: 400,
    description: "The course provides an in-depth exploration of how deep learning techniques are applied in various scientific and medical domains. The course introduces basic concepts of deep learning, explores different deep learning architectures and algorithms, and focuses on their applications in scientific and biomedical research. The integration of scientific knowledge with machine learning techniques is emphasized throughout the course. Students will gain hands-on experience by executing the acquired concepts using Python.",
    prerequisiteRawText: "Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) AMATH350 - Differential Equations for Business and Economics (0.50) ECE205 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH211 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH218 - Differential Equations for Engineers (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50)"
  },
  {
    code: "AMATH446",
    name: "Introduction to Mathematics of Deep Learning",
    subject: "AMATH",
    level: 400,
    description: "This course introduces the basic concepts of deep learning in a mathematically rigorous fashion. Topics include mathematical definitions of deep neural networks, approximation theory, gradient-based optimization, and generalization analysis.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: ECE203 - Probability Theory and Statistics 1 (0.50) PHYS267 - Probability, Statistics, and Data Analysis for Physics and Astronomy (0.50) STAT206 - Statistics for Software Engineering (0.50) STAT220 - Probability (Non-Specialist Level) (0.50) STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) SYDE212 - Probability, Statistics, and Data Science (0.50) Must have completed at least 1 of the following: ECE206 - Advanced Calculus 2 for Electrical Engineers (0.50) MATH207 - Calculus 3 (Non-Specialist Level) (0.50) MATH212 - Advanced Calculus 2 for Electrical Engineers (0.50) MATH217 - Calculus 3 for Chemical Engineering (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) SYDE211 - Calculus 3 (0.50) Must have completed at least 1 of the following: MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) MATH225 - Applied Linear Algebra 2 (0.50)"
  },
  {
    code: "AMATH449",
    name: "Neural Networks",
    subject: "AMATH",
    level: 400,
    description: "An introduction to neural network methods, with some discussion of their relation to neuroscience. Simple neuron models and networks of neurons. Training feedforward networks. Backpropagation of errors and stochastic gradient descent. Unsupervised learning methods. Recurrent neural networks. Convolutional neural networks. Continuous time models. Adversarial attacks. Advanced topics may include neural engineering, biologically plausible learning methods.",
    prerequisiteRawText: "Complete 1 of the following Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT206 - Statistics for Software Engineering (0.50)"
  },
  {
    code: "AMATH451",
    name: "Introduction to Dynamical Systems",
    subject: "AMATH",
    level: 400,
    description: "A unified view of linear and nonlinear systems of ordinary differential equations in Rn. Flow operators and their classification: contractions, expansions, hyperbolic flows. Stable and unstable manifolds. Phase-space analysis. Nonlinear systems, stability of equilibria, and Lyapunov functions. The special case of flows in the plane, Poincare-Bendixson theorem, and limit cycles. Applications to physical problems will be a motivating influence.",
    prerequisiteRawText: "Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)"
  },
  {
    code: "AMATH453",
    name: "Partial Differential Equations 2",
    subject: "AMATH",
    level: 400,
    description: "A thorough discussion of the class of second order linear partial differential equations with constant coefficients, in two independent variables. Laplace's equation, the wave equation and the heat equation in higher dimensions. Theoretical/qualitative aspects: well-posed problems, maximum principles for elliptic and parabolic equations, continuous dependence results, uniqueness results (including consideration of unbounded domains), domain of dependence for hyperbolic equations. Solution procedures: elliptic equations -- Green functions, conformal mapping; hyperbolic equations -- generalized d'Alembert solution, spherical means, method of descent; transform methods -- Fourier, multiple Fourier, Laplace, Hankel (for all three types of partial differential equations); Duhamel's method for inhomogeneous hyperbolic and parabolic equations.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: AMATH353 - Partial Differential Equations 1 (0.50) Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)"
  },
  {
    code: "AMATH455",
    name: "Control Theory",
    subject: "AMATH",
    level: 400,
    description: "Feedback control with applications. System theory in both time and frequency domain, state-space computations, stability, system uncertainty, loopshaping, linear quadratic regulators, and estimation.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) Must have completed at least 1 of the following: AMATH332 - Applied Complex Analysis (0.50) PMATH332 - Applied Complex Analysis (0.50) PMATH352 - Complex Analysis (0.50)"
  },
  {
    code: "AMATH456",
    name: "Calculus of Variations",
    subject: "AMATH",
    level: 400,
    description: "Concept of functional and its variations. The solution of problems using variational methods - the Euler-Lagrange equations. Applications include an introduction to Hamilton's principle and optimal control.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) ECE205 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH211 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH218 - Differential Equations for Engineers (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50) Students must be in level 3B or higher"
  },
  {
    code: "AMATH462",
    name: "Introduction to Mathematics of Climate Modelling",
    subject: "AMATH",
    level: 400,
    description: "This course will introduce mathematical techniques, including analytical, computational, and machine learning methods, used to study climate change. Course material will examine both historical evidence of climate change and future predictions related to climatological and societal impacts based on current climate models. The course will have a strong computational component to study the governing geophysical fluid dynamics equations in climate models and their properties. The course will also examine the application of learned principles to climate modelling through in-depth discussions of journal readings.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50)"
  },
  {
    code: "AMATH463",
    name: "Fluid Mechanics",
    subject: "AMATH",
    level: 400,
    description: "This course provides a broad mathematical introduction to fluid mechanics and provides a foundation for applications such as weather and climate, oceanography, aeronautics, and astrophysics. Topics in this course include the Euler and Navier-Stokes Equations; the dynamics of vorticity; the effects of viscosity, including near solid boundaries; wave motion and dispersive waves; the effects of the Earth's rotation on flow; and an introduction to turbulence.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH231 - Calculus 4 (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS263 - Classical Mechanics and Special Relativity (0.50) Must have completed at least 1 of the following: AMATH353 - Partial Differential Equations 1 (0.50) PHYS364 - Mathematical Physics 1 (0.50)"
  },
  {
    code: "AMATH473",
    name: "Quantum Theory",
    subject: "AMATH",
    level: 400,
    description: "The Hilbert space of states, observables, and time evolution. Feynman path integral and Greens functions. Approximation methods. Co-ordinate transformations, angular momentum, and spin. The relation between symmetries and conservation laws. Density matrix, Ehrenfest theorem, and decoherence. Multiparticle quantum mechanics. Bell inequality and basics of quantum computing.",
    prerequisiteRawText: "Complete 1 of the following Must have completed the following: AMATH231 - Calculus 4 (0.50) PMATH343 - Introduction to the Mathematics of Quantum Information (0.50) Must have completed the following: CHEM356 - Introductory Quantum Mechanics (0.50) MATH217 - Calculus 3 for Chemical Engineering (0.50) Must have completed the following: ECE206 - Advanced Calculus 2 for Electrical Engineers (0.50) ECE305 - Introduction to Quantum Mechanics (0.50) Complete all of the following Must have completed at least 1 of the following: AMATH231 - Calculus 4 (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) Must have completed at least 1 of the following: AMATH373 - Quantum Theory 1 (0.50) PHYS234 - Quantum Physics 1 (0.50)"
  },
  {
    code: "AMATH474",
    name: "Advanced Quantum Theory: Quantum Information and Foundations",
    subject: "AMATH",
    level: 400,
    description: "Phase space symplectic formulation of quantum mechanics. From classical theory to quantum theory: the quantization map and its issues. The Wigner function. Gaussian quantum mechanics. Notions of quantum information in infinite dimensional quantum systems. Theory of correlations and entanglement. Entanglement measures. Exploration of current research directions in quantum information.",
    prerequisiteRawText: "Complete 1 of the following Must have completed the following: AMATH473 - Quantum Theory (0.50) Must have completed the following: PHYS454"
  },
  {
    code: "AMATH475",
    name: "Introduction to General Relativity",
    subject: "AMATH",
    level: 400,
    description: "Tensor analysis. Curved space-time and the Einstein field equations. The Schwarzschild solution and applications. The Friedmann-Robertson-Walker cosmological models.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH231 - Calculus 4 (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS263 - Classical Mechanics and Special Relativity (0.50) Students must be in level 4A or higher Enrolled in an Honours Faculty of Mathematics or a Faculty of Science program"
  },
  {
    code: "AMATH477",
    name: "Stochastic Processes for Applied Mathematics",
    subject: "AMATH",
    level: 400,
    description: "Random variables, expectations, conditional probabilities, conditional expectations, convergence of a sequence of random variables, limit theorems, minimum mean square error estimation, the orthogonality principle, random process, discrete-time and continuous-time Markov chains and applications, forward and backward equation, invariant distribution, Gaussian process and Brownian motion, expectation maximization algorithm, linear discrete stochastic equations, linear innovation sequences, Kalman filter, various applications.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) AMATH350 - Differential Equations for Business and Economics (0.50) ECE205 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH211 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH218 - Differential Equations for Engineers (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50) Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50)"
  },
  {
    code: "AMATH490",
    name: "Topics in Applied Mathematics",
    subject: "AMATH",
    level: 400,
    description: "Topics course in an emerging or specialized area of applied mathematics. Consult Quest class search for specific topics being offered.",
    prerequisiteRawText: "Students must be in level 3A"
  },
  {
    code: "AMATH495",
    name: "Reading Course",
    subject: "AMATH",
    level: 400,
    description: "Reading course as announced by the department."
  },
  {
    code: "AMATH499",
    name: "Research Project",
    subject: "AMATH",
    level: 400,
    description: "A research-based course that allows students with an interest in applied mathematics or mathematical physics to participate in a research project with a faculty member. The student is required to approach a faculty member of the Department of Applied Mathematics for supervision. The enrolled student is expected to hand in a written report of their research to the supervisor and present a summary of the project orally in front of a subset of the applied mathematics undergraduate committee as a final assessment.",
    prerequisiteRawText: "Complete all of the following Students must be in level 4A or higher Complete 1 of the following Enrolled in H-Applied Mathematics , JH-Applied Mathematics , H-Applied Mathematics with Scientific Computing & Scientific Machine Learning , or H-Mathematical Physics (BMath) Enrolled in H-Applied Mathematics with Scientific Computing"
  },
  {
    code: "ARBUS101",
    name: "Introduction to Business in North America",
    subject: "ARBUS",
    level: 100,
    description: "The functional areas of business: finance, personnel administration, production, marketing, and accounting are examined within differing organizational structures. Coverage also includes study of the principles of effective management and the financial system as a source of corporate capital.",
    prerequisiteRawText: "Enrolled in Arts & Business"
  },
  {
    code: "ARBUS202",
    name: "Professional and Business Ethics",
    subject: "ARBUS",
    level: 200,
    description: "This course is an introduction to professional and business ethics. Ethics, broadly speaking, is the branch of philosophy that seeks to analyze principles of conduct that govern human activity. We are (in part) economic agents who trade with each other in the hopes of making ourselves better off, and insofar as our actions affect the well-being of others, what we do falls under the purview of ethics. Students will explore ethical issues and principles of conduct that are relevant to professionals and business people. Students will learn about professional responsibility, and will develop skills in ethical decision-making by applying ethical theories, concepts, and arguments to business contexts.",
    prerequisiteRawText: "Enrolled in Arts & Business"
  },
  {
    code: "ARBUS302",
    name: "Principles of Marketing",
    subject: "ARBUS",
    level: 300,
    description: "This course is designed to provide a broad understanding of the field of marketing, including consumer behaviour, segmentation, targeting, positioning, branding, and the marketing mix. Students will gain an understanding of how organizations identify the needs of potential consumers and create and deliver value to these consumers through the marketing process.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: ECON101 - Introduction to Microeconomics (0.50) Students must be in level 2B or higher Enrolled in Arts & Business"
  },
  {
    code: "BET360",
    name: "Design Frameworks for Social Ventures",
    subject: "BET",
    level: 300,
    description: "In this course, students will explore several design frameworks as they relate to complex problems; assess the impacts of these frameworks in recent entrepreneurial applications; and determine how to apply these concepts in the design of the social impact aspects of ventures and cross-industry collaborations. In parallel, students will be encouraged to develop skills, reflect on their own mindsets, and further their learning through workshops and studio sessions. Several frameworks will be explored, including human-centred design, life-centred design, equity-centred design, and inclusive design.",
    prerequisiteRawText: "Students must be in level 2A or higher"
  },
  {
    code: "BET420",
    name: "Entrepreneurship for Social Impact",
    subject: "BET",
    level: 400,
    description: "This course explores how innovative approaches can address social problems, create organizations that make positive change, have significant social impact, and be sustainable and economically viable. Topics include the principles of social entrepreneurship, design thinking applied to identifying significant problems, innovative solutions for social impact, and identifying opportunities for social change. Students develop skills and tools for refining and implementing their ideas as well as measuring the success and value of mission-driven organizations. Through case studies, lectures, and workshops, students also develop skills in strategic thinking with a socially conscious business mindset to create high-impact ventures."
  },
  {
    code: "BIOL130",
    name: "Introductory Cell Biology",
    subject: "BIOL",
    level: 100,
    description: "An introduction to the concepts of cell biology with emphasis on (1) the structural organization of the cell and (2) the function of critical molecular processes that are characteristic of living organisms."
  },
  {
    code: "BIOL130L",
    name: "Cell Biology Laboratory",
    subject: "BIOL",
    level: 100,
    description: "Experiments to study the principles of cell biology that are elaborated in BIOL130."
  },
  {
    code: "BIOL239",
    name: "Genetics",
    subject: "BIOL",
    level: 200,
    description: "Introduces major concepts in genetics, from DNA to its effects at the cellular, organismal, and population levels, and uses in biotechnology. Topics include Mendelian inheritance patterns, chromosomal mechanisms in mitosis and meiosis, mechanisms and effects of mutations, gene expression, natural selection, and methods of analysis. Students will learn the basics of using genetics data such as family trees, results of breeding experiments with model organisms, and DNA sequences. Tutorials cover some lecture content in more detail and provide additional opportunities to apply knowledge."
  },
  {
    code: "BIOL240",
    name: "Fundamentals of Microbiology",
    subject: "BIOL",
    level: 200,
    description: "Introduction to the biology of bacterial and archaeal organisms. Topics include cell structure and function, methods of cultivation, genetics, phylogeny and taxonomy, and metabolic and genetic diversity."
  },
  {
    code: "BIOL240L",
    name: "Microbiology Laboratory",
    subject: "BIOL",
    level: 200,
    description: "Experiments to study the principles of microbiology that are elaborated in BIOL240."
  },
  {
    code: "BIOL308",
    name: "Principles of Molecular Biology",
    subject: "BIOL",
    level: 300,
    description: "Prokaryote and eukaryote genome structure and replication; mechanisms of gene expression and regulation.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: BIOL130 - Introductory Cell Biology (0.50)Complete 1 of the followingMust have completed the following: BIOL239 - Genetics (0.50)Must have completed the following: BIOL139"
  },
  {
    code: "BIOL365",
    name: "Methods in Bioinformatics",
    subject: "BIOL",
    level: 300,
    description: "This course covers bioinformatics methods with an emphasis on analysis of high-throughput \"-omics\" data. Topics include analysis of genome-scale gene and protein expression, construction of species and gene trees from molecular sequence data, and analysis of biological systems using bioinformatics tools. Practical experience with bioinformatics tools and datasets will be provided through computational laboratory exercises.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: BIOL239 - Genetics (0.50)Must have completed at least 1 of the following: BIOL266 - Introduction to Computational Biology (0.50)CHEM140 - Introduction to Scientific Calculations (0.50)CS116 - Introduction to Computer Science 2 (0.50)CS136 - Elementary Algorithm Design and Data Abstraction (0.50)"
  },
  {
    code: "BIOL382",
    name: "Computational Modelling of Cellular Systems",
    subject: "BIOL",
    level: 300,
    description: "An introduction to dynamic mathematical modelling of cellular processes. The emphasis is on using computational tools to investigate differential equation-based models. A variety of cellular phenomena are discussed, including ion pumps, membrane potentials, intercellular communication, genetic networks, regulation of metabolic pathways, and signal transduction.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Must have completed: SYDE112 Students must be in level 3A or higher Enrolled in an Honours program"
  },
  {
    code: "BIOL465",
    name: "Structural Bioinformatics",
    subject: "BIOL",
    level: 400,
    description: "Analysis of proteins using structural and bioinformatics approaches. Topics explored in lectures and labs include methods of protein structure determination and visualization, structure comparison and prediction, prediction of protein function and interactions, molecular dynamics, and protein design.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: BIOL266 - Introduction to Computational Biology (0.50)BIOL365 - Methods in Bioinformatics (0.50)Complete 1 of the followingMust have completed at least 1 of the following: CHEM233 - Fundamentals of Biochemistry (0.50)CHEM237 - Introductory Biochemistry (0.50)Enrolled in CS-Bioinformatics Specialization"
  },
  {
    code: "BIOL487",
    name: "Computational Neuroscience",
    subject: "BIOL",
    level: 400,
    description: "Introduction to modelling and analysis of neurophysiological systems. Models of synaptic plasticity and learning, with focus on the similarities and differences between neuroscience and deep learning.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)CS200 - Concepts for Advanced Computer Usage (0.50)Earned at least 1 units from STAT 200 - 299Students must be in level 3B or higherEnrolled in a program offered by Faculty of Science"
  },
  {
    code: "BUS111W",
    name: "Understanding the Business Environment (WLU)",
    subject: "BUS",
    level: 100,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText: "Enrolled in an undergraduate degree program or MATH/ELAS"
  },
  {
    code: "BUS121W",
    name: "Critical Thinking and Communication Skills (WLU)",
    subject: "BUS",
    level: 100,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText: "Enrolled in an undergraduate degree program or MATH/ELAS"
  },
  {
    code: "BUS127W",
    name: "Introduction to Financial Accounting (WLU)",
    subject: "BUS",
    level: 100,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description."
  },
  {
    code: "BUS231W",
    name: "Business Law (WLU)",
    subject: "BUS",
    level: 200,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.\n"
  },
  {
    code: "BUS247W",
    name: "Managerial Accounting (WLU)",
    subject: "BUS",
    level: 200,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText: "Complete 1 of the followingMust have completed the following: AFM101 - Introduction to Financial Accounting (0.50)Must have completed the following: BUS127W"
  },
  {
    code: "BUS252W",
    name: "Introduction to Marketing Management (WLU)",
    subject: "BUS",
    level: 300,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText: "Complete 1 of the following Must have completed at least 1 of the following: AFM131 - Introduction to Business in North America (0.50) ARBUS101 - Introduction to Business in North America (0.50) Must have completed the following: BUS111W"
  },
  {
    code: "BUS283W",
    name: "Financial Management 1 (WLU)",
    subject: "BUS",
    level: 200,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingEnrolled in H-BBA & BCS Double Degree, or H-BBA & BMath Double DegreeMust have completed any UW introductory statistics courseComplete 1 of the followingMust have completed the following: AFM101 - Introduction to Financial Accounting (0.50)Must have completed at least 1 of the following: BUS127W, BUS227W"
  },
  {
    code: "BUS288W",
    name: "Organizational Behaviour 1 (WLU)",
    subject: "BUS",
    level: 200,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: BUS121WComplete 1 of the followingMust have completed at least 1 of the following: AFM131 - Introduction to Business in North America (0.50)ARBUS101 - Introduction to Business in North America (0.50)Must have completed the following: BUS111W"
  },
  {
    code: "BUS354W",
    name: "Human Resources Management (WLU)",
    subject: "BUS",
    level: 300,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: BUS121WComplete 1 of the followingMust have completed at least 1 of the following: AFM131 - Introduction to Business in North America (0.50)ARBUS101 - Introduction to Business in North America (0.50)Must have completed the following: BUS111WComplete 1 of the followingMust have completed at least 1 of the following: MSE211 - Organizational Behaviour (0.50)PSYCH238 - Organizational Psychology (0.50)Must have completed at least 1 of the following: BUS288W, MSCI211"
  },
  {
    code: "BUS362W",
    name: "Applied Marketing (WLU)",
    subject: "BUS",
    level: 300,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: BUS121WComplete 1 of the followingMust have completed at least 1 of the following: AFM131 - Introduction to Business in North America (0.50)ARBUS101 - Introduction to Business in North America (0.50)Must have completed the following: BUS111WComplete 1 of the followingMust have completed the following: ARBUS302 - Principles of Marketing (0.50)Must have completed at least 1 of the following: BUS352W, ECON344, MGMT344"
  },
  {
    code: "BUS375W",
    name: "Operations Management (WLU)",
    subject: "BUS",
    level: 300,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText: "Must have completed any Waterloo introductory statistics course"
  },
  {
    code: "BUS381W",
    name: "Strategic Management I (WLU)",
    subject: "BUS",
    level: 300,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: BUS121W Complete 1 of the following Must have completed the following: AFM131 - Introduction to Business in North America (0.50) Must have completed the following: BUS111W Complete 1 of the following Must have completed at least 1 of the following: ACTSC291 - Global Capital Markets and Financial Analytics (0.50) AFM272 - Global Capital Markets and Financial Analytics (0.50) ECON371 - Business Finance 1 (0.50) MATBUS371 - Introduction to Corporate Finance (0.50) Must have completed at least 1 of the following: ACTSC371, BUS383W"
  },
  {
    code: "BUS393W",
    name: "Financial Management 2 (WLU)",
    subject: "BUS",
    level: 300,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText: "Complete all of the followingMust have completed any Waterloo introductory statistics courseComplete 1 of the followingMust have completed the following: AFM101 - Introduction to Financial Accounting (0.50)Must have completed at least 1 of the following: BUS127W, BUS227WComplete 1 of the followingMust have completed the following: ECON371 - Business Finance 1 (0.50)Must have completed at least 1 of the following: BUS283W, BUS383W"
  },
  {
    code: "BUS398W",
    name: "Organizational Behaviour 2 (WLU)",
    subject: "BUS",
    level: 300,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText: "Must have completed the following: BUS288W"
  },
  {
    code: "BUS491W",
    name: "Strategic Management II (WLU)",
    subject: "BUS",
    level: 400,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText: "Must have completed the following: BUS481W"
  },
  {
    code: "CHE230",
    name: "Physical Chemistry 1",
    subject: "CHE",
    level: 200,
    description: "Thermodynamics: work and heat as forms of energy. First law, internal energy and enthalpy. Heats of chemical and physical changes. Cycles and the second law, entropy. Spontaneity and equilibrium, free energies. Systems of variable composition, chemical equilibrium. Phase equilibrium and the phase rule. Ideal solutions, colligative properties.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 2AEnrolled in H-Chemical Engineering"
  },
  {
    code: "CHE231",
    name: "Physical Chemistry 2",
    subject: "CHE",
    level: 200,
    description: "Thermodynamics: ideal solutions; non-ideal solutions, non-electrolytic and electrolytic solutions, phase equilibrium and phase diagrams, reaction equilibrium. Surface phenomena: surface tension, capillarity, properties of small particles, adsorption. Chemical kinetics: rate laws, reaction rates, mechanisms, catalysis, heterogeneous reactions.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 2B or higherEnrolled in H-Chemical Engineering"
  },
  {
    code: "CHE312",
    name: "Mathematics of Heat and Mass Transfer",
    subject: "CHE",
    level: 300,
    description: "Fundamentals of mass transfer: species and mixture velocities, diffusive and convective fluxes, Fick's law and the diffusion coefficient. Vector form of the microscopic (differential) mass balance. Fundamentals of heat transfer: conduction, convection and radiation, Fourier's law and thermal conductivity. Vector form of the microscopic thermal energy balance for solids and incompressible fluids. Mass and heat transfer models leading to ordinary differential equation problems in Cartesian, cylindrical and spherical geometries; types of boundary conditions. Bessel functions. Analytical solution of linear partial differential equations: combination of variables, separation of variables and Sturm-Liouville theory, Laplace transform. Mass and heat transfer models leading to linear partial differential equations: 1D transient diffusion and conduction in Cartesian, cylindrical and spherical geometries; steady-state 2D conduction and diffusion. Heat-mass transfer analogies and dimensionless numbers.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 3AEnrolled in H-Chemical Engineering"
  },
  {
    code: "CHE313",
    name: "Applications of Heat and Mass Transfer",
    subject: "CHE",
    level: 300,
    description: "Convective heat transfer. Analysis of convective heat transfer in external flows using the boundary layer approach. Analysis of convective heat transfer in internal flows. Empirical correlations for convective heat transfer. Heat transfer with phase change: condensation and boiling. Heat exchanger design. Convective mass transfer. Empirical correlations for convective mass transfer. Mass transfer at fluid-fluid interfaces. Design of continuous differential contactors for absorption/stripping, distillation and liquid-liquid extraction. Analogy between heat, mass and momentum transfer. Dimensional analysis. Simultaneous heat and mass transfer operations.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 3B or higherEnrolled in H-Chemical Engineering"
  },
  {
    code: "CHE314",
    name: "Chemical Reaction Engineering",
    subject: "CHE",
    level: 300,
    description: "Review of stoichiometry and chemical kinetics. Homogeneous reactors: isothermal operation; batch; semi-batch; continuous tank; plug flow reactor design. Continuous stirred-tank reactors (CSTRs) in series; plug flow reactor with recycle. Multiple reactions in reactor networks. Temperature effects in adiabatic and non-isothermal reactors. Yield, selectivity and optimal operation of reactors. Heterogeneous catalysis and effectiveness factors in two-phase reactors.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 3AEnrolled in H-Chemical Engineering"
  },
  {
    code: "CHE330",
    name: "Chemical Engineering Thermodynamics",
    subject: "CHE",
    level: 300,
    description: "Review of fundamentals, including 2nd law and concepts of equilibrium, phase and reaction equilibria, fugacity, exergy. Thermodynamics applied to practical situations. Examples chosen from: fluid flow; power generation; refrigeration; air conditioning and water cooling; liquefaction of gases; equilibria in complex chemical reactions and separation processes; surface phenomena; electrochemical reactions; biological processes. ",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 3AEnrolled in H-Chemical Engineering"
  },
  {
    code: "CHE331",
    name: "Electrochemical Engineering",
    subject: "CHE",
    level: 300,
    description: "Topics and applications of electrochemistry and electrochemical engineering. Industrial process examples. Environmental aspects. Ionic equilibria. Laws of electrolysis. Theory of electrolytes. Transport properties of electrolytes. Reversible cell potentials. Irreversible electrode processes. Thermodynamic and kinetic aspects of corrosion. Common examples of corrosion. Electrochemical energy conversion and storage.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 3B or higherEnrolled in H-Chemical Engineering"
  },
  {
    code: "CHE341",
    name: "Introduction to Process Control",
    subject: "CHE",
    level: 300,
    description: "Laplace transform techniques. Proportional-integral-derivative control. Frequency response methods. Stability analysis. Controller tuning. Process control simulation and computer control systems. Process identification.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 3B or higherEnrolled in H-Chemical Engineering, or H-Environmental Engineering"
  },
  {
    code: "CHE361",
    name: "Bioprocess Engineering",
    subject: "CHE",
    level: 300,
    description: "Review of elementary aspects of microbiology, biochemistry, molecular biology, and genetic engineering. Introduction of biological systems for the production of commercial goods and services, e.g., foods, pharmaceuticals, chemicals, fuels, diagnostics, waste treatment, and biomaterials. Introduction to design of bioprocess systems, including biosafety and sustainability. Development of reaction kinetics associated with biological systems. Quantification of metabolism. Development of material balances for key constituents in bioreactors operated in different modes, e.g., batch, fed-batch, continuous stirred-tank reactor (CSTR), perfusion, recycle. Introduction to mass and heat transfer considerations for bioreactors. Dynamic simulation of cultures defined by ordinary differential equations. Introduction of downstream processes associated with biological systems and recovery of biological products.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 3B or higherEnrolled in H-Chemical Engineering, or H-Environmental Engineering"
  },
  {
    code: "CHE522",
    name: "Advanced Process Dynamics and Control",
    subject: "CHE",
    level: 500,
    description: "State space methods. Sampled-data systems. Discrete systems. Transform methods. Multivariable control. Computer control. Closed-loop analysis. Design of controllers. Control of complex chemical systems.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 4BEnrolled in H-Chemical Engineering"
  },
  {
    code: "CHEM120",
    name: "General Chemistry 1",
    subject: "CHEM",
    level: 100,
    description: "The stoichiometry of compounds and chemical reactions. Properties of gases. Periodicity and chemical bonding. Energy changes in chemical systems. Electronic structure of atoms and molecules; correlation with the chemical reactivity of common elements, inorganic and organic compounds."
  },
  {
    code: "CHEM120L",
    name: "General Chemistry Laboratory 1",
    subject: "CHEM",
    level: 100,
    description: "Selected experiments based on introductory-level chemistry topics. This course is an introduction to the chemistry laboratory environment and focuses on the development of basic lab skills."
  },
  {
    code: "CHEM123",
    name: "General Chemistry 2",
    subject: "CHEM",
    level: 100,
    description: "Properties of liquids and solutions. Introduction to chemical equilibria. Principles of acid-base equilibria, solubility and electrochemical processes. Chemical kinetics.",
    prerequisiteRawText: "Must have completed at least 1 of the following: CHE102 - Chemistry for Engineers (0.50) CHEM120 - General Chemistry 1 (0.50)"
  },
  {
    code: "CHEM123L",
    name: "General Chemistry Laboratory 2",
    subject: "CHEM",
    level: 100,
    description: "Selected experiments based on introductory-level chemistry topics. This course is a continuation of CHEM120L, with increased emphasis on assessment of experimental design.",
    prerequisiteRawText: "Must have completed the following: CHEM120L - General Chemistry Laboratory 1 (0.25)"
  },
  {
    code: "CHEM356",
    name: "Introductory Quantum Mechanics",
    subject: "CHEM",
    level: 300,
    description: "Historical background; the differential equation approach to quantum mechanics; treatments of solvable problems such as the particle-in-a-box, harmonic oscillator, rigid rotator and the hydrogen atom; introduction to approximation methods for more complicated systems.",
    prerequisiteRawText: "Complete 1 of the followingMust have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50)AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)CHEM240 - Mathematical Methods for Chemistry (0.50)MATH228 - Differential Equations for Physics and Chemistry (0.50)Complete all of the followingStudents must be in at least level 2AEnrolled in H-Materials & Nanosciences"
  },
  {
    code: "CO227",
    name: "Introduction to Optimization (Non-Specialist Level)",
    subject: "CO",
    level: 200,
    description: "A broad introduction to the field of optimization, discussing applications, and solution techniques. Mathematical models for real life applications; algorithms: simplex, cutting plane, and branch & bound; linear programming duality.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50)"
  },
  {
    code: "CO250",
    name: "Introduction to Optimization",
    subject: "CO",
    level: 200,
    description: "A broad introduction to the field of optimization, discussing applications, and solution techniques. Mathematical models for real life applications; algorithms; aspects of computational complexity; geometry; linear programming duality, focusing on the development of algorithms.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Earned a minimum grade of 70% in at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) Earned a minimum cumulative average of 60"
  },
  {
    code: "CO255",
    name: "Introduction to Optimization (Advanced Level)",
    subject: "CO",
    level: 200,
    description: "Linear optimization: feasibility theorems, duality, the simplex algorithm. Discrete optimization: integer linear programming, cutting planes, network flows. Continuous optimization: local and global optima, feasible directions, convexity, necessary optimality conditions.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)"
  },
  {
    code: "CO327",
    name: "Deterministic OR Models (Non-Specialist Level)",
    subject: "CO",
    level: 300,
    description: "An applications-oriented course that illustrates how various mathematical models and methods of optimization can be used to solve problems arising in business, industry, and science.",
    prerequisiteRawText: "Must have completed at least 1 of the following: CO227 - Introduction to Optimization (Non-Specialist Level) (0.50) CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50)"
  },
  {
    code: "CO330",
    name: "Combinatorial Enumeration",
    subject: "CO",
    level: 300,
    description: "The algebra of formal power series. The combinatorics of the ordinary and exponential generating series. Lagrange's implicit function theorem, applications to the enumeration of permutations, functions, trees and graphs. Integer partitions, geometric methods, enumerating linear transformations. Introduction to the pattern algebra, applications to the enumeration of strings. Lattice paths, Wiener-Hopf factorization. Enumeration under symmetries.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)"
  },
  {
    code: "CO331",
    name: "Coding Theory",
    subject: "CO",
    level: 300,
    description: "A first course in error-correcting codes. Linear block codes, Hamming-Golay codes, and multiple error-correcting BCH codes are studied. Various encoding and decoding schemes are considered.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH225 - Applied Linear Algebra 2 (0.50) MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50)"
  },
  {
    code: "CO342",
    name: "Introduction to Graph Theory",
    subject: "CO",
    level: 300,
    description: "An introduction to some of the key topics in graph theory: connectivity, planarity, and matchings. Connectivity: Menger's theorem, 3-connected graphs. Planarity: Kuratowski's theorem, uniqueness of planar embeddings. Matchings: Review of Konig's theorem, Tutte's theorem.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)"
  },
  {
    code: "CO351",
    name: "Network Flow Theory",
    subject: "CO",
    level: 300,
    description: "Review of linear programming. Shortest path problems. The max-flow min-cut theorem and applications. Minimum cost flow problems. Network simplex and primal-dual algorithms. Applications to problems of transportation, distribution, job assignments, and critical-path planning.",
    prerequisiteRawText: "Must have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50)"
  },
  {
    code: "CO353",
    name: "Computational Discrete Optimization",
    subject: "CO",
    level: 300,
    description: "Formulations of combinatorial optimization problems, greedy algorithms, dynamic programming, branch-and-bound, cutting plane algorithms, decomposition techniques in integer programming, approximation algorithms.",
    prerequisiteRawText: "Must have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50)"
  },
  {
    code: "CO365",
    name: "Optimization Models and Algorithms for Data Science",
    subject: "CO",
    level: 300,
    description: "Modelling problems in data science and machine learning as optimization problems, and their analysis. Solution methods, including gradient descent and its extensions, and their consequences in modelling decisions. Convexity and Lagrangian duality. Applications to clustering and classification problems. Analysis and implementation of computational methods.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50) Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete 1 of the following Must have completed at least 1 of the following: MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: MATH128 - Calculus 2 for the Sciences (0.50) Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50)"
  },
  {
    code: "CO367",
    name: "Nonlinear Optimization",
    subject: "CO",
    level: 300,
    description: "A course on the fundamentals of nonlinear optimization, including both the mathematical and the computational aspects. Necessary and sufficient optimality conditions for unconstrained and constrained problems. Convexity and its applications. Computational techniques and their analysis.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50) Complete 1 of the following Must have completed at least 1 of the following: MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: MATH128 - Calculus 2 for the Sciences (0.50)",
    prerequisite: {
      type: "allOf",
      requirements: [
        {
          type: "anyOf",
          requirements: [
            {
              type: "course",
              courseCode: "CO250"
            },
            {
              type: "course",
              courseCode: "CO255"
            }
          ]
        },
        {
          type: "anyOf",
          requirements: [
            {
              type: "course",
              courseCode: "MATH128",
              minGrade: 70
            },
            {
              type: "course",
              courseCode: "MATH138"
            },
            {
              type: "course",
              courseCode: "MATH148"
            }
          ]
        }
      ]
    }
  },
  {
    code: "CO370",
    name: "Deterministic OR Models",
    subject: "CO",
    level: 300,
    description: "An applications-oriented course that illustrates how various mathematical models and methods of optimization can be used to solve problems arising in business, industry, and science.",
    prerequisiteRawText: "Must have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50)"
  },
  {
    code: "CO372",
    name: "Portfolio Optimization Models",
    subject: "CO",
    level: 300,
    description: "Computational optimization methodologies underlying portfolio problems in finance. Computational linear algebra, determining derivatives, quadratic, and nonlinear optimization. The efficient frontier problem. Applications of optimization in finance such as volatility surface determination and global minimization for value-at-risk.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Complete 1 of the following Must have completed at least 1 of the following: ACTSC291 - Global Capital Markets and Financial Analytics (0.50) ACTSC372 - Investment Science and Corporate Finance (0.50) AFM272 - Global Capital Markets and Financial Analytics (0.50) ECON371 - Business Finance 1 (0.50) Must have completed at least 1 of the following: ACTSC371, BUS393W Complete 1 of the following Earned a minimum grade of 70% in each of the following: CO227 - Introduction to Optimization (Non-Specialist Level) (0.50) Must have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50)"
  },
  {
    code: "CO380",
    name: "Mathematical Discovery and Invention",
    subject: "CO",
    level: 300,
    description: "A course in problem solving. 100 problems are studied. Problems are taken mainly from the elementary parts of algebra, geometry, number theory, combinatorics, and probability.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50) MATH145 - Algebra (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Students must be in level 3A or higher"
  },
  {
    code: "CO430",
    name: "Algebraic Enumeration",
    subject: "CO",
    level: 400,
    description: "The Lagrange Implicit Function Theorem, the MacMahon Master Theorem. Enumeration of planar triangulations. The transfer matrix method. Sieve methods, inclusion/exclusion, Mobius inversion. Polya enumeration, Enumeration of trees. Basic hypergeometric series, q-analogues, Rogers-Ramanujan identities. Asymptotic methods.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: CO330 - Combinatorial Enumeration (0.50) Earned a minimum cumulative average of 80"
  },
  {
    code: "CO431",
    name: "Symmetric Functions",
    subject: "CO",
    level: 400,
    description: "The ring of symmetric functions, standard bases, the Hall inner product. Young tableaux. The Robinson-Schensted-Knuth correspondence, the hook-length formula, the Jacobi-Trudi formula, the Pieri rule, the Littlewood-Richardson rule. Representation theory of the symmetric groups. Enumeration of plane partitions. Enumeration of maps on surfaces. Other topics.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: PMATH336 - Introduction to Group Theory with Applications (0.50) PMATH347 - Groups and Rings (0.50) Earned a minimum cumulative average of 80"
  },
  {
    code: "CO432",
    name: "Information Theory and Applications",
    subject: "CO",
    level: 400,
    description: "Basics of information theory; Shannon entropy, KL divergence, and mutual information; basic properties of entropic quantities; chain rule, Pinsker's Inequality, Data Processing Inequality; compression; Channel Coding Theorem; error-correction; applications to combinatorics, optimization, cryptography, and computer science.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50) CS231 - Algorithmic Problem Solving (0.50) CS341 - Algorithms (0.50) Must have completed at least 1 of the following: MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Students must be in level 3A or higher"
  },
  {
    code: "CO434",
    name: "Combinatorial Designs",
    subject: "CO",
    level: 400,
    description: "Pairwise orthogonal latin squares. Transversal designs and finite planes. Balanced incomplete block designs, group divisible designs, and pairwise balanced designs. Symmetric designs and Hadamard matrices. Recursive constructions. Wilson's fundamental construction.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: PMATH336 - Introduction to Group Theory with Applications (0.50) PMATH347 - Groups and Rings (0.50) Must have completed the following: PMATH346 Earned a minimum cumulative average of 80"
  },
  {
    code: "CO439",
    name: "Topics in Combinatorics",
    subject: "CO",
    level: 400,
    description: "An undergraduate seminar in combinatorics. The primary objective is to study current work in specific areas of combinatorics. Course content may vary from term to term."
  },
  {
    code: "CO440",
    name: "Topics in Graph Theory",
    subject: "CO",
    level: 400,
    description: "An in-depth study of one or two topics in graph theory. Course content may vary from term to term. Topics may include planar graphs, extremal graph theory, directed graphs, enumeration, algebraic graph theory, probabilistic graph theory, connectivity, graph embedding, colouring problems.",
    prerequisiteRawText: "Must have completed the following: CO342 - Introduction to Graph Theory (0.50)"
  },
  {
    code: "CO442",
    name: "Graph Theory",
    subject: "CO",
    level: 400,
    description: "Colouring: Brooks' Theorem and Vizing's Theorem. Flows: integer and group-valued flows, the flow polynomial, the 6-flow theorem. Extremal graph theory; Ramsey's theorem, Turan's theorem, Mader's theorem on graphs with no n-clique-minor. Probabilistic methods: Lower bounds for Ramsey numbers, graphs with large girth and chromatic number.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: CO342 - Introduction to Graph Theory (0.50) Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Earned a minimum cumulative average of 80"
  },
  {
    code: "CO444",
    name: "Algebraic Graph Theory",
    subject: "CO",
    level: 400,
    description: "An introduction to the methods of and some interesting current topics in algebraic graph theory. Topics covered will include vertex-transitive graphs, eigenvalue methods, strongly regular graphs and may include graph homomorphisms, Laplacians or knot and link invariants.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50) Complete 1 of the following Must have completed at least 1 of the following: PMATH336 - Introduction to Group Theory with Applications (0.50) PMATH347 - Groups and Rings (0.50) Must have completed the following: PMATH346 Earned a minimum cumulative average of 80"
  },
  {
    code: "CO446",
    name: "Matroid Theory",
    subject: "CO",
    level: 400,
    description: "This is an introductory course on matroid theory, with particular emphasis on graphic matroids and on topics that are applicable to graph theory. The topics include matroid intersection and partition, graphic matroids, matroid connectivity, regular matroids, and representable matroids. Applications include matching, disjoint paths, disjoint spanning trees, the 8-flow theorem for graphs, planarity testing, and recognizing totally unimodular matrices.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: CO342 - Introduction to Graph Theory (0.50) Earned a minimum cumulative average of 80"
  },
  {
    code: "CO450",
    name: "Combinatorial Optimization",
    subject: "CO",
    level: 400,
    description: "Characterizations of optimal solutions and efficient algorithms for optimization problems over discrete structures. Topics include network flows, optimal matchings, T-joins and postman tours, matroid optimization.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CO255 - Introduction to Optimization (Advanced Level) (0.50) CO351 - Network Flow Theory (0.50) Earned a minimum cumulative average of 80"
  },
  {
    code: "CO452",
    name: "Integer Programming",
    subject: "CO",
    level: 400,
    description: "Formulation of problems as integer linear programs. Solution by branch-and-bound and cutting plane algorithms. Introduction to the theory of valid inequalities and polyhedral combinatorics.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CO255 - Introduction to Optimization (Advanced Level) (0.50) CO351 - Network Flow Theory (0.50) Earned a minimum cumulative average of 80"
  },
  {
    code: "CO454",
    name: "Scheduling",
    subject: "CO",
    level: 400,
    description: "An overview of practical optimization problems that can be posed as scheduling problems. Characterizations of optimal schedules. Simple and efficient combinatorial algorithms for easy problems. A brief overview of computational complexity, definition of P, NP, NP-complete and NP-hard. Integer programming formulations, the travelling salesman problem, heuristics, dynamic programming, and branch-and-bound approaches. Polynomial-time approximation algorithms.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CO227 - Introduction to Optimization (Non-Specialist Level) (0.50) CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH229 - Introduction to Combinatorics (Non-Specialist Level) (0.50) MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)"
  },
  {
    code: "CO456",
    name: "Introduction to Game Theory",
    subject: "CO",
    level: 400,
    description: "A broad introduction to game theory and its applications to the modelling of competition and co-operation in business, economics, and society. Two-person games in strategic form and Nash equilibria. Extensive form games, including multi-stage games. Coalition games and the core. Bayesian games, mechanism design, and auctions.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CO227 - Introduction to Optimization (Non-Specialist Level) (0.50) CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH229 - Introduction to Combinatorics (Non-Specialist Level) (0.50) MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)"
  },
  {
    code: "CO459",
    name: "Topics in Optimization",
    subject: "CO",
    level: 400,
    description: "An undergraduate seminar in optimization. The primary objective is to study recent work in specific areas of optimization. Course content may vary from term to term."
  },
  {
    code: "CO463",
    name: "Convex Optimization and Analysis",
    subject: "CO",
    level: 400,
    description: "An introduction to the modern theory of convex programming, its extensions and applications. Structure of convex sets, separation and support, subgradient calculus for convex functions, Fenchel conjugacy and duality, Lagrange multipliers. Ellipsoid method for convex optimization.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH331 - Applied Real Analysis (0.50) PMATH331 - Applied Real Analysis (0.50) PMATH333 - Introduction to Real Analysis (0.50) PMATH351 - Real Analysis (0.50) Must have completed at least 1 of the following: CO255 - Introduction to Optimization (Advanced Level) (0.50) CO365 - Optimization Models and Algorithms for Data Science (0.50) CO367 - Nonlinear Optimization (0.50) Earned a minimum cumulative average of 80"
  },
  {
    code: "CO466",
    name: "Continuous Optimization",
    subject: "CO",
    level: 400,
    description: "Numerical algorithms for nonlinear optimization. Newton, variable-metric, quasi-Newton and conjugate gradient methods. Obtaining derivatives. Convexity. Trust region methods. Constrained optimization including optimality conditions, sequential quadratic programming, interior point, and active set strategies.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CO255 - Introduction to Optimization (Advanced Level) (0.50) CO365 - Optimization Models and Algorithms for Data Science (0.50) CO367 - Nonlinear Optimization (0.50) Earned a minimum cumulative average of 80"
  },
  {
    code: "CO471",
    name: "Semidefinite Optimization",
    subject: "CO",
    level: 400,
    description: "Optimization over convex sets described as the intersection of the set of symmetric, positive semidefinite matrices with affine spaces. Formulations of problems from combinatorial optimization, graph theory, number theory, probability and statistics, engineering design, and control theory. Theoretical and practical consequences of these formulations. Duality theory and algorithms.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH331 - Applied Real Analysis (0.50) PMATH331 - Applied Real Analysis (0.50) PMATH333 - Introduction to Real Analysis (0.50) PMATH351 - Real Analysis (0.50) Must have completed at least 1 of the following: CO255 - Introduction to Optimization (Advanced Level) (0.50) CO365 - Optimization Models and Algorithms for Data Science (0.50) CO367 - Nonlinear Optimization (0.50) Must have completed at least 1 of the following: MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50) Earned a minimum cumulative average of 80.0"
  },
  {
    code: "CO480",
    name: "History of Mathematics",
    subject: "CO",
    level: 400,
    description: "An in-depth examination of the origins of mathematics, beginning with examples of Babylonian mathematics. Topics may include Pythagorean triples, solution of equations, estimation of pi, duplication of the cube, trisection of an angle, the Fibonacci sequence, the origins of calculus.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: ECE108 - Discrete Mathematics and Logic 1 (0.50) MATH135 - Algebra for Honours Mathematics (0.50) MATH145 - Algebra (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Students must be in level 3A or higher"
  },
  {
    code: "CO481",
    name: "Introduction to Quantum Information Processing",
    subject: "CO",
    level: 400,
    description: "Basics of computational complexity; basics of quantum information; quantum phenomena; quantum circuits and universality; relationship between quantum and classical complexity classes; simple quantum algorithms; quantum Fourier transform; Shor factoring algorithm; Grover search algorithm; physical realization of quantum computation; error-correction and fault-tolerance; quantum key distribution.",
    prerequisiteRawText: "Complete all of the following Earned a minimum grade of 80% in at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Students must be in level 3A or higher"
  },
  {
    code: "CO485",
    name: "The Mathematics of Public-Key Cryptography",
    subject: "CO",
    level: 400,
    description: "An in-depth study of public-key cryptography. Number-theoretic problems: prime generation, integer factorization, discrete logarithms. Public-key encryption, digital signatures, key establishment, elliptic curve cryptography, post-quantum cryptography. Proofs of security.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: PMATH334 - Introduction to Rings and Fields with Applications (0.50) PMATH336 - Introduction to Group Theory with Applications (0.50) PMATH347 - Groups and Rings (0.50) PMATH348 - Fields and Galois Theory (0.50) Must have completed at least 1 of the following: PMATH345, PMATH346 Earned a minimum cumulative average of 80"
  },
  {
    code: "CO486",
    name: "Topics in Quantum Information",
    subject: "CO",
    level: 400,
    description: "The primary objective is to study current work in specific areas of quantum information. Course content may vary from term to term."
  },
  {
    code: "CO487",
    name: "Applied Cryptography",
    subject: "CO",
    level: 400,
    description: "A broad introduction to modern cryptography, highlighting the tools and techniques used to secure internet and messaging applications. Symmetric-key encryption, hash functions, message authentication, authenticated encryption, public-key encryption and digital signatures, key establishment, key management.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50) MATH145 - Algebra (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT206 - Statistics for Software Engineering (0.50) STAT220 - Probability (Non-Specialist Level) (0.50) STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Students must be in level 3A or higher"
  },
  {
    code: "COMM101",
    name: "Introduction to Financial Markets",
    subject: "COMM",
    level: 100,
    description: "The course introduces students to the role of finance in the global economy and aims to develop students' understanding of the basic principles of financial decision-making."
  },
  {
    code: "COMM103",
    name: "Principles of Economics",
    subject: "COMM",
    level: 100,
    description: "This course provides an introduction to the basic concepts and tools of micro and macro economic analysis of individuals, businesses, and government in the global world. Topics may include consumers, producers, market structures, national income accounting, unemployment, and inflation.",
    prerequisiteRawText: "Enrolled in H-Mathematics/Chartered Professional Accountancy"
  },
  {
    code: "COMM400",
    name: "Entrepreneurship, Technology and the Emerging Information Economy",
    subject: "COMM",
    level: 400,
    description: "A study of the spirit of entrepreneurship in the technology industry, opportunities emerging in the new information economy, and the implementation issues associated with starting an entrepreneurial venture in today's rapidly changing environment. Many of the concepts covered will also be applicable to careers in the technology industry or in information-based companies, where \"intrapreneurship\" is an emerging theme. Approximately one-half of the class time will involve guest lectures by entrepreneurs actively involved in the business community.",
    prerequisiteRawText: "Students must be in level 3A or higher"
  },
  {
    code: "COMM431",
    name: "Project Management",
    subject: "COMM",
    level: 400,
    description: "This course will introduce students to approaches, techniques, and terminology used in project management. In particular, students will learn project planning principles, product and process metrics, people and organizational issues, task allocation and scheduling, monitoring and control, change management, and methods for cost estimation and risk assessment. Students will also be introduced to current project management tools, and will manage their own term project.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: AFM102 - Introduction to Managerial Accounting (0.50) Complete 1 of the following Must have completed at least 1 of the following: MSE211 - Organizational Behaviour (0.50) PSYCH238 - Organizational Psychology (0.50) Must have completed the following: MSCI211 Students must be in level 3A or higher"
  },
  {
    code: "COMM432",
    name: "Electronic Business",
    subject: "COMM",
    level: 400,
    description: "This course will introduce students to approaches, techniques, and terminology used in electronic business. Students will also study issues in disciplines related to electronic business. They will review a number of sites and identify efficient e-commerce analysis, design and development techniques. Students will be introduced to current electronic business tools and standards, and will construct their own simple electronic business site.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: ARBUS302 - Principles of Marketing (0.50) MGMT244 - Principles of Marketing (0.50) Must have completed the following: BUS352W Must have completed at least 1 of the following: CS330 - Management Information Systems (0.50) CS490 - Information Systems Management (0.50) Students must be in level 3A or higher"
  },
  {
    code: "COMMST111",
    name: "Leadership, Communication, and Collaboration",
    subject: "COMMST",
    level: 100,
    description: "This course focuses on developing the qualities and transferable skills necessary for integration, continuous learning, and professional development. This course establishes a common baseline of leadership, communication, and collaboration capabilities for Accounting and Financial Management majors. Focus will be on the design and delivery of various types of communication and the development of basic teamwork skills.",
    prerequisiteRawText: "Complete 1 of the followingEnrolled in H-Accounting & Financial Management, H-Mathematics/Chartered Professional Accountancy, or H-Science & Financial ManagementEnrolled in H-Biotechnology/Chartered Professional Accountancy"
  },
  {
    code: "COMMST149",
    name: "Introduction to Critical Design Practices",
    subject: "COMMST",
    level: 100,
    description: "How does design help us think? This studio course introduces students to practice-based methods for generating knowledge. Topics may include prototyping, performance as research, material thinking, multi-modal representation, and experience design. Students will test and explore how we learn differently through creative practices."
  },
  {
    code: "COMMST193",
    name: "Communication in the Sciences",
    subject: "COMMST",
    level: 100,
    description: "In this course students will enhance oral and written communication competencies in contexts relevant to the life sciences and physical sciences.",
    prerequisiteRawText: "Complete 1 of the following Enrolled in H-Science & Financial Management Enrolled in a Bachelor of Science program in the Faculty of Science"
  },
  {
    code: "COMMST210",
    name: "Key Concepts in Media and Culture",
    subject: "COMMST",
    level: 200,
    description: "This course introduces foundational theories and lines of inquiry in contemporary media and cultural studies. Students apply media and cultural studies theories and methods through case studies of cultural artifacts ranging from wartime propaganda to memes and viral videos."
  },
  {
    code: "COMMST235",
    name: "Games and Society",
    subject: "COMMST",
    level: 200,
    description: "This course introduces key social issues in and around games, including traditional games, sports, and digital games. Through lectures, readings, and gameplay students will be introduced to the anatomy of games, the history of games and digital games, the game industry, and explore current issues of games in scholarship."
  },
  {
    code: "COMMST339",
    name: "Media, Images, and Communication",
    subject: "COMMST",
    level: 300,
    description: "This course investigates how distinct modes of communication impact the creation of messages, dissemination or knowledge, and reception of meaning. Students will examine aural, textual, and visual communication in the context of print, electronic, and digital media.",
    prerequisiteRawText: "Students must be in level 3A or higher"
  },
  {
    code: "COMMST430",
    name: "Communication and Social Justice",
    subject: "COMMST",
    level: 400,
    description: "An examination of how communication on the part of individuals, groups, and institutions implicates social justice. Students examine the relationship between communication and justice to understand how the representation and performance of gender, race, ethnicity, and other cultural constructs contribute to social and political conditions.",
    prerequisiteRawText: "Students must be in level 3A or higher"
  },
  {
    code: "COMMST435",
    name: "Games and Culture",
    subject: "COMMST",
    level: 400,
    description: "This course examines the relationships between games and culture. By playing, analyzing, and making games, students will consider the social, political, and economic dimensions of games and acquire ways of thinking about how games communicate by transmitting, contextualizing, and contesting culturally situated meanings.",
    prerequisiteRawText: "Students must be in level 3A or higher"
  },
  {
    code: "CS114",
    name: "Principles of Computing for Science",
    subject: "CS",
    level: 100,
    description: "Introduction to basic imperative programming principles; programming concepts including functions, flow control, lists, arrays; numerical accuracy and efficiency; data analysis and general-purpose algorithms. Introduction to object-oriented programming concepts."
  },
  {
    code: "CS115",
    name: "Introduction to Computer Science 1",
    subject: "CS",
    level: 100,
    description: "An introduction to the fundamentals of computer science through the application of elementary programming patterns in the functional style of programming. Function definition and application. Tracing via substitution. Design, testing, and documentation. Recursive data definitions. Lists and trees. Functional and data abstraction."
  },
  {
    code: "CS116",
    name: "Introduction to Computer Science 2",
    subject: "CS",
    level: 100,
    description: "This course builds on the techniques and patterns learned in CS115 while making the transition to use of an imperative language. Generative and structural recursion. Mutation (assignment) and its role in an imperative language. Primitive types and basic I/O. Sequencing, selection, looping. Function definition and use. File and console I/O. Issues in computer science.",
    prerequisiteRawText: "Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50)"
  },
  {
    code: "CS135",
    name: "Designing Functional Programs",
    subject: "CS",
    level: 100,
    description: "An introduction to the fundamentals of computer science through the application of elementary programming patterns in the functional style of programming. Syntax and semantics of a functional programming language. Tracing via substitution. Design, testing, and documentation. Linear and nonlinear data structures. Recursive data definitions. Abstraction and encapsulation. Generative and structural recursion. Historical context."
  },
  {
    code: "CS136",
    name: "Elementary Algorithm Design and Data Abstraction",
    subject: "CS",
    level: 100,
    description: "This course builds on the techniques and patterns learned in CS135 while making the transition to use an imperative language. It introduces the design and analysis of algorithms, the management of information, and the programming mechanisms and methodologies required in implementations. Topics discussed include iterative and recursive sorting algorithms; lists, stacks, queues, trees, and their application; abstract data types and their implementations.",
    prerequisiteRawText: "Complete 1 of the following Must have completed the following: CS145 - Designing Functional Programs (Advanced Level) (0.50) Earned a minimum grade of 90% in each of the following: CS115 - Introduction to Computer Science 1 (0.50) Earned a minimum grade of 70% in each of the following: CS116 - Introduction to Computer Science 2 (0.50) Earned a minimum grade of 60% in each of the following: CS135 - Designing Functional Programs (0.50)"
  },
  {
    code: "CS136L",
    name: "Tools and Techniques for Software Development",
    subject: "CS",
    level: 100,
    description: "This course introduces students to tools and techniques useful in the software development lifecycle. Students learn to navigate and leverage commands and utilities in the Linux Command Line Shell. Students gain experience in version control software, writing scripts to automate tasks, and creating effective test cases to identify bugs. Tracing and debugging strategies are discussed. Students also gain experience in using built-in support for version control, testing, debugging, build automation, etc. in integrated development environments (IDEs).",
    prerequisiteRawText: "Complete 1 of the following Must have completed the following: CS145 - Designing Functional Programs (Advanced Level) (0.50) Earned a minimum grade of 90% in each of the following: CS115 - Introduction to Computer Science 1 (0.50) Earned a minimum grade of 70% in each of the following: CS116 - Introduction to Computer Science 2 (0.50) Earned a minimum grade of 60% in at least 1 of the following: CS135 - Designing Functional Programs (0.50)"
  },
  {
    code: "CS145",
    name: "Designing Functional Programs (Advanced Level)",
    subject: "CS",
    level: 100,
    description: "CS145 is an advanced-level version of CS135."
  },
  {
    code: "CS146",
    name: "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
    subject: "CS",
    level: 100,
    description: "CS146 is an advanced-level version of CS136.",
    prerequisiteRawText: "Earned a minimum grade of 75% in each of the following: CS145 - Designing Functional Programs (Advanced Level) (0.50)"
  },
  {
    code: "CS200",
    name: "Concepts for Advanced Computer Usage",
    subject: "CS",
    level: 200,
    description: "Important concepts underlying major personal computer application categories; methodologies for learning and evaluating software; operating system and hardware design from the user's point of view, with implications for maintaining a personal computer. Students are encouraged to use their own personal computer for assignments. Social media and the effect of technology on society are explored throughout the course."
  },
  {
    code: "CS230",
    name: "Introduction to Computers and Computer Systems",
    subject: "CS",
    level: 200,
    description: "Basic computer architecture, organization, system services, and software. Typology of processors, memory, I/O devices, and their performance.",
    prerequisiteRawText: "Complete 1 of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete all of the following Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: CS114 - Principles of Computing for Science (0.50)"
  },
  {
    code: "CS231",
    name: "Algorithmic Problem Solving",
    subject: "CS",
    level: 200,
    description: "The study of the steps required to solve real-world problems on a computer, including problem specification, choice of algorithmic paradigm, analysis, and implementation. Topics include exhaustive search, divide and conquer, greedy, and dynamic programming approaches.",
    prerequisiteRawText: "Complete 1 of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete all of the following Earned a minimum grade of 60% in each of the following: CS114 - Principles of Computing for Science (0.50) Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50)"
  },
  {
    code: "CS234",
    name: "Data Types and Structures",
    subject: "CS",
    level: 200,
    description: "Top-down design of data structures. Using representation-independent data types. Introduction to commonly used data types, including lists, sets, mappings, and trees. Selection of data representation.",
    prerequisiteRawText: "Complete 1 of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete all of the following Earned a minimum grade of 60% in each of the following: CS114 - Principles of Computing for Science (0.50) Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50)"
  },
  {
    code: "CS240",
    name: "Data Structures and Data Management",
    subject: "CS",
    level: 200,
    description: "Introduction to widely used and effective methods of data organization, focusing on data structures, their algorithms, and the performance of these algorithms. Specific topics include priority queues, sorting, dictionaries, data structures for text processing.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS245 - Logic and Computation (0.50)CS245E - Logic and Computation (Enriched) (0.50)SE212 - Logic and Computation (0.50)Must have completed at least 1 of the following: CS241 - Foundations of Sequential Programs (0.50)CS241E - Foundations of Sequential Programs (Enriched) (0.50)CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)CS247 - Software Engineering Principles (0.50)Must have completed at least 1 of the following: STAT206 - Statistics for Software Engineering (0.50)STAT230 - Probability (0.50)STAT240 - Probability (Advanced Level) (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), H-Data Science (BMath), or H-Software Engineering"
  },
  {
    code: "CS240E",
    name: "Data Structures and Data Management (Enriched)",
    subject: "CS",
    level: 200,
    description: "Enriched version of CS240.",
    prerequisiteRawText: "Complete all of the followingEarned a minimum grade of 85% in at least 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS138 - Introduction to Data Abstraction and Implementation (0.50)CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), H-Data Science (BMath), or H-Software Engineering"
  },
  {
    code: "CS241",
    name: "Foundations of Sequential Programs",
    subject: "CS",
    level: 200,
    description: "The relationship between high-level languages and the computer architecture that underlies their implementation, including basic machine architecture, assemblers, specification and translation of programming languages, linkers and loaders, block-structured languages, parameter passing mechanisms, and comparison of programming languages.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingMust have completed the following: CS138 - Introduction to Data Abstraction and Implementation (0.50)Complete all of the followingMust have completed the following: CS136L - Tools and Techniques for Software Development (0.25)Earned a minimum grade of 85% in at least 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)Complete all of the followingMust have completed the following: CS136L - Tools and Techniques for Software Development (0.25)Must have completed at least 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), H-Data Science (BMath), or H-Software Engineering"
  },
  {
    code: "CS241E",
    name: "Foundations of Sequential Programs (Enriched)",
    subject: "CS",
    level: 200,
    description: "Enriched version of CS241.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingComplete all of the followingMust have completed the following: CS136L - Tools and Techniques for Software Development (0.25)Earned a minimum grade of 85% in at least 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)Earned a minimum grade of 85% in each of the following: CS138 - Introduction to Data Abstraction and Implementation (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), H-Data Science (BMath), or H-Software Engineering"
  },
  {
    code: "CS245",
    name: "Logic and Computation",
    subject: "CS",
    level: 200,
    description: "Logic as a tool for representation, reasoning, and computation. Propositional and predicate logic. Formalizing the notions of correct and incorrect reasoning, defining what is computable, and exploring the limits of computation. Godel's Incompleteness Theorem. Applications of logic to computer science.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50) MATH145 - Algebra (Advanced Level) (0.50) Enrolled in an Honours Mathematics program"
  },
  {
    code: "CS245E",
    name: "Logic and Computation (Enriched)",
    subject: "CS",
    level: 200,
    description: "Enriched version of CS245.",
    prerequisiteRawText: "Complete all of the following Earned a minimum grade of 85% in at least 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Enrolled in an Honours Mathematics program"
  },
  {
    code: "CS246",
    name: "Object-Oriented Software Development",
    subject: "CS",
    level: 200,
    description: "Introduction to object-oriented programming and to tools and techniques for software development. Designing, coding, debugging, testing, and documenting medium-sized programs: reading specifications and designing software to implement them; selecting appropriate data structures and control structures; writing reusable code; reusing existing code; basic performance issues; debuggers; test suites.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed the following: CS136L - Tools and Techniques for Software Development (0.25) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: CS138 - Introduction to Data Abstraction and Implementation (0.50) Complete all of the following Must have completed the following: CS136L - Tools and Techniques for Software Development (0.25) Earned a minimum grade of 60% in each of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50) Enrolled in an Honours Mathematics program"
  },
  {
    code: "CS246E",
    name: "Object-Oriented Software Development (Enriched)",
    subject: "CS",
    level: 200,
    description: "Enriched version of CS246.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: CS136L - Tools and Techniques for Software Development (0.25) Earned a minimum grade of 85% in at least 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Enrolled in an Honours Mathematics program"
  },
  {
    code: "CS247",
    name: "Software Engineering Principles",
    subject: "CS",
    level: 200,
    description: "Systematic methods for designing, coding, testing, and documenting medium-sized programs. Major topics include abstraction, modularity, software modelling, object-oriented programming and design, generic programming, testing and debugging.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS241 - Foundations of Sequential Programs (0.50)CS241E - Foundations of Sequential Programs (Enriched) (0.50)Enrolled in H-Software Engineering"
  },
  {
    code: "CS251",
    name: "Computer Organization and Design",
    subject: "CS",
    level: 200,
    description: "Overview of computer organization and performance. Basics of digital logic design. Combinational and sequential elements. Data representation and manipulation. Basics of processor design. Pipelining. Memory hierarchies. Multiprocessors.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS138 - Introduction to Data Abstraction and Implementation (0.50)CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), H-Data Science (BMath), or H-Software Engineering"
  },
  {
    code: "CS251E",
    name: "Computer Organization and Design (Enriched)",
    subject: "CS",
    level: 200,
    description: "Enriched version of CS251.",
    prerequisiteRawText: "Complete all of the followingEarned a minimum grade of 85% in at least 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), H-Data Science (BMath), or H-Software Engineering"
  },
  {
    code: "CS330",
    name: "Management Information Systems",
    subject: "CS",
    level: 300,
    description: "An introduction to information systems and their strategic role in business. Topics include types of information systems, organizational requirements, systems development strategies, decision support systems, data and information management, and information systems management, control, and implementation.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: CS106 - Introduction to Computer Programming 2 (0.50) CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete all of the following Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: CS114 - Principles of Computing for Science (0.50) Students must be in level 2B or higher"
  },
  {
    code: "CS335",
    name: "Computational Methods in Business and Finance",
    subject: "CS",
    level: 300,
    description: "An introduction to numerical methods for business and finance. Floating-point arithmetic, interpolation. Methods for portfolio optimization and contingent-claims valuation. Solution of nonlinear equations. Monte Carlo methods, lattice methods, simulation of hedging strategies.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete all of the following Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) Earned a minimum grade of 60% in each of the following: CS114 - Principles of Computing for Science (0.50) Complete 1 of the following Must have completed at least 1 of the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: MATH106 - Applied Linear Algebra 1 (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT206 - Statistics for Software Engineering (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)"
  },
  {
    code: "CS338",
    name: "Computer Applications in Business: Databases",
    subject: "CS",
    level: 300,
    description: "A user-oriented approach to the management of large collections of data. Methods used for the storage, selection, and presentation of data. Common database management systems.",
    prerequisiteRawText: "Complete 1 of the following Must have completed at least 1 of the following: CS230 - Introduction to Computers and Computer Systems (0.50) CS231 - Algorithmic Problem Solving (0.50) CS234 - Data Types and Structures (0.50) CS246 - Object-Oriented Software Development (0.50) CS246E - Object-Oriented Software Development (Enriched) (0.50) CS330 - Management Information Systems (0.50) Complete all of the following Must have completed the following: AFM341 - Accounting Information Systems (0.50) Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)"
  },
  {
    code: "CS341",
    name: "Algorithms",
    subject: "CS",
    level: 300,
    description: "The study of efficient algorithms and effective algorithm design techniques. Program design with emphasis on pragmatic and mathematical aspects of program efficiency. Topics include divide and conquer algorithms, recurrences, greedy algorithms, dynamic programming, graph search and backtrack, problems without algorithms, NP-completeness and its implications.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CS240 - Data Structures and Data Management (0.50) CS240E - Data Structures and Data Management (Enriched) (0.50) Must have completed at least 1 of the following: CS245 - Logic and Computation (0.50) CS245E - Logic and Computation (Enriched) (0.50) SE212 - Logic and Computation (0.50) Must have completed at least 1 of the following: MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT206 - Statistics for Software Engineering (0.50) STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , H-Data Science (BMath) , or H-Software Engineering"
  },
  {
    code: "CS343",
    name: "Concurrent and Parallel Programming",
    subject: "CS",
    level: 300,
    description: "An introduction to concurrent and parallel programming, with an emphasis on language constructs. Major topics include exceptions, coroutines, atomic operations, critical sections, mutual exclusion, semaphores, high-level concurrency, deadlock, interprocess communication, process structuring, shared memory, and distributed architectures. Students will learn how to structure, implement, and debug concurrent programs.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS350 - Operating Systems (0.50)SE350 - Operating Systems (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS346",
    name: "Application Development",
    subject: "CS",
    level: 300,
    description: "Introduction to full-stack application design and development. Students will work in project teams to design and build complete, working applications and services using standard tools. Topics include best-practices in design, development, testing, and deployment.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)CS247 - Software Engineering Principles (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS348",
    name: "Introduction to Database Management",
    subject: "CS",
    level: 300,
    description: "The main objective of this course is to introduce students to fundamentals of database technology by studying databases from three viewpoints: those of the database user, the database designer, and the database administrator. It teaches the use of a database management system (DBMS) by treating it as a black box, focusing only on its functionality and its interfaces. Topics include introduction to database systems, relational database systems, database design methodology, SQL and interfaces, database application development, concept of transactions, ODBC, JDBC, database tuning, database administration, and current topics (distributed databases, data warehouses, data mining).",
    prerequisiteRawText: "Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), H-Data Science (BMath), or H-Software Engineering"
  },
  {
    code: "CS349",
    name: "User Interfaces",
    subject: "CS",
    level: 300,
    description: "An introduction to contemporary user interface implementation concepts, including event abstraction, graphical components, layout, feedback, testing, accessibility, and architectures to develop user interfaces. One or more types of interface toolkit paradigms are considered.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS241 - Foundations of Sequential Programs (0.50)CS241E - Foundations of Sequential Programs (Enriched) (0.50)Must have completed at least 1 of the following: MATH115 - Linear Algebra for Engineering (0.50)MATH136 - Linear Algebra 1 for Honours Mathematics (0.50)MATH146 - Linear Algebra 1 (Advanced Level) (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS350",
    name: "Operating Systems",
    subject: "CS",
    level: 300,
    description: "An introduction to the fundamentals of operating system function, design, and implementation. Topics include concurrency, synchronization, processes, threads, scheduling, memory management, file systems, device management, and security.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS240 - Data Structures and Data Management (0.50)CS240E - Data Structures and Data Management (Enriched) (0.50)Must have completed at least 1 of the following: CS241 - Foundations of Sequential Programs (0.50)CS241E - Foundations of Sequential Programs (Enriched) (0.50)Must have completed at least 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)Must have completed at least 1 of the following: CS251 - Computer Organization and Design (0.50)CS251E - Computer Organization and Design (Enriched) (0.50)ECE222 - Digital Computers (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS360",
    name: "Introduction to the Theory of Computing",
    subject: "CS",
    level: 300,
    description: "Models of computers including finite automata and Turing machines. Basics of formal languages with applications to the syntax of programming languages. Alternate characterizations of language classes. Proving unrecognizability. Unsolvable problems and their relevance to the semantics of programming.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS240 - Data Structures and Data Management (0.50)CS240E - Data Structures and Data Management (Enriched) (0.50)Must have completed at least 1 of the following: CS241 - Foundations of Sequential Programs (0.50)CS241E - Foundations of Sequential Programs (Enriched) (0.50)Must have completed at least 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS365",
    name: "Models of Computation",
    subject: "CS",
    level: 300,
    description: "Finite automata and regular expressions. Pushdown automata and context-free grammars. Turing machines and undecidability. Time and space complexity. Diagonalization and hierarchies. CS365 covers the material in CS360 at an accelerated pace plus additional topics in computational complexity.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS240 - Data Structures and Data Management (0.50)CS240E - Data Structures and Data Management (Enriched) (0.50)Must have completed at least 1 of the following: CS241 - Foundations of Sequential Programs (0.50)CS241E - Foundations of Sequential Programs (Enriched) (0.50)Must have completed at least 1 of the following: MATH239 - Introduction to Combinatorics (0.50)MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS370",
    name: "Numerical Computation",
    subject: "CS",
    level: 300,
    description: "Principles and practices of basic numerical computation as a key aspect of scientific computation. Visualization of results. Approximation by splines, fast Fourier transforms, solution of linear and nonlinear equations, differential equations, floating point number systems, error, stability. Presented in the context of specific applications to image processing, analysis of data, scientific modelling.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: CS231 - Algorithmic Problem Solving (0.50) CS234 - Data Types and Structures (0.50) CS241 - Foundations of Sequential Programs (0.50) CS241E - Foundations of Sequential Programs (Enriched) (0.50) CS246 - Object-Oriented Software Development (0.50) CS246E - Object-Oriented Software Development (Enriched) (0.50)"
  },
  {
    code: "CS371",
    name: "Introduction to Computational Mathematics",
    subject: "CS",
    level: 300,
    description: "A rigorous introduction to the field of computational mathematics. The focus is on the interplay between continuous models and their solution via discrete processes. Topics include pitfalls in computation, solution of linear systems, interpolation, discrete Fourier transforms, and numerical integration. Applications are used as motivation.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete all of the following Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: CS114 - Principles of Computing for Science (0.50) Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)"
  },
  {
    code: "CS383",
    name: "Computational Digital Art Studio",
    subject: "CS",
    level: 300,
    description: "An upper-level studio course to create computational projects that function as art works and aesthetic experiences. Students will work in an interdisciplinary environment to combine computer science principles with fine art technical and conceptual skills.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: CS240 - Data Structures and Data Management (0.50)CS240E - Data Structures and Data Management (Enriched) (0.50)Must have completed at least 1 of the following: FINE228 - Design and Imaging (0.50)FINE247 - Expanded Media: Interaction (0.50)"
  },
  {
    code: "CS399",
    name: "Readings in Computer Science",
    subject: "CS",
    level: 300,
    description: "Reading course as announced by the School.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS240 - Data Structures and Data Management (0.50)CS240E - Data Structures and Data Management (Enriched) (0.50)Must have completed at least 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)CS247 - Software Engineering Principles (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS430",
    name: "Applications Software Engineering",
    subject: "CS",
    level: 400,
    description: "An investigation into the role and function of software engineering practice in the construction of computer based systems. Topics include: requirements and specification; documentation techniques; analysis and design; implementation; testing and maintenance; management issues.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: CS330 - Management Information Systems (0.50) Students must be in level 3A or higher"
  },
  {
    code: "CS431",
    name: "Data-Intensive Distributed Analytics",
    subject: "CS",
    level: 400,
    description: "Introduces non-CS major students to infrastructure for data-intensive analytics, with a focus on abstractions, frameworks, and algorithms that allow developers to distribute computation across many machines. Topics include core concepts (partitioning, replication, locality, consistency), computational models (MapReduce, dataflows, stream processing, bulk-synchronous parallel), and applications.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CS230 - Introduction to Computers and Computer Systems (0.50) CS251 - Computer Organization and Design (0.50) CS251E - Computer Organization and Design (Enriched) (0.50) Must have completed at least 1 of the following: CS231 - Algorithmic Problem Solving (0.50) CS234 - Data Types and Structures (0.50) CS341 - Algorithms (0.50)"
  },
  {
    code: "CS436",
    name: "Networks and Distributed Computer Systems",
    subject: "CS",
    level: 400,
    description: "An introduction to networks, protocols, and distributed systems. Layered models, resource management, naming, addressing and routing, reliable communication, security, and higher-level services.",
    prerequisiteRawText: "Must have completed at least 1 of the following: CS230 - Introduction to Computers and Computer Systems (0.50) CS241 - Foundations of Sequential Programs (0.50) CS241E - Foundations of Sequential Programs (Enriched) (0.50) CS246 - Object-Oriented Software Development (0.50) CS246E - Object-Oriented Software Development (Enriched) (0.50) CS251 - Computer Organization and Design (0.50) CS251E - Computer Organization and Design (Enriched) (0.50)"
  },
  {
    code: "CS442",
    name: "Principles of Programming Languages",
    subject: "CS",
    level: 400,
    description: "An exposure to important concepts and issues in contemporary programming languages. Data types, abstraction, and polymorphism. Program structure. Lambda calculus and functional programming, logic programming, object-oriented programming. Semantics of programming languages. Critical comparison of language features and programming methodologies using examples drawn from a variety of programming languages including Lisp, Prolog, ML, Ada, Smalltalk, Icon, APL, and Lucid. Programming assignments involve the use of some of these languages.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS241 - Foundations of Sequential Programs (0.50)CS241E - Foundations of Sequential Programs (Enriched) (0.50)Must have completed at least 1 of the following: CS245 - Logic and Computation (0.50)CS245E - Logic and Computation (Enriched) (0.50)SE212 - Logic and Computation (0.50)Must have completed at least 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)CS247 - Software Engineering Principles (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS444",
    name: "Compiler Construction",
    subject: "CS",
    level: 400,
    description: "Phases of compilation. Lexical analysis and a review of parsing. Compiler-compilers and translator writing systems. LEX and YACC. Scope rules, block structure, and symbol tables. Runtime stack management. Parameter passage mechanisms. Stack storage organization and templates. Heap storage management. Intermediate code. Code generation. Macros.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS350 - Operating Systems (0.50)SE350 - Operating Systems (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS445",
    name: "Software Requirements Specification and Analysis",
    subject: "CS",
    level: 400,
    description: "Introduces students to the requirements definition phase of software development. Models, notations, and processes for software requirements identification, representation, analysis, and validation. Cost estimation from early documents and specifications.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS341 - Algorithms (0.50)CS350 - Operating Systems (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS446",
    name: "Software Design and Architectures",
    subject: "CS",
    level: 400,
    description: "Introduces students to the design, implementation, and evolution phases of software development. Software design processes, methods, and notation. Implementation of designs. Evolution of designs and implementations. Management of design activities.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: CS350 - Operating Systems (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS447",
    name: "Software Testing, Quality Assurance, and Maintenance",
    subject: "CS",
    level: 400,
    description: "Introduces students to systematic testing of software systems. Software verification, reviews, metrics, quality assurance, and prediction of software reliability and availability. Related management issues.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: CS350 - Operating Systems (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS448",
    name: "Database Systems Implementation",
    subject: "CS",
    level: 400,
    description: "The objective of this course is to introduce students to fundamentals of building a relational database management system. The course focuses on the database engine core technology by studying topics such as storage management (data layout, disk-based data structures), indexing, query processing algorithms, query optimization, transactional concurrency control, logging and recovery.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: Must have completed at least 1 of the following: CS350 - Operating Systems (0.50)SE350 - Operating Systems (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS449",
    name: "Human-Computer Interaction",
    subject: "CS",
    level: 400,
    description: "An introduction to the fundamental theories, methods, and research in the design and evaluation of novel computational artifacts designed to meet real-world human needs.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS240 - Data Structures and Data Management (0.50)CS240E - Data Structures and Data Management (Enriched) (0.50)Must have completed at least 1 of the following: CS241 - Foundations of Sequential Programs (0.50)CS241E - Foundations of Sequential Programs (Enriched) (0.50)Students must be in level 3B or higherEnrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS450",
    name: "Computer Architecture",
    subject: "CS",
    level: 400,
    description: "The course is intended to provide the student with an appreciation of modern computer design and its relation to system architecture, compiler technology, and operating system functionality. The course places an emphasis on design based on the measurement of performance and its dependency on parallelism, efficiency, latency, and resource utilization.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS245 - Logic and Computation (0.50)CS245E - Logic and Computation (Enriched) (0.50)SE212 - Logic and Computation (0.50)Must have completed at least 1 of the following: CS350 - Operating Systems (0.50)SE350 - Operating Systems (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), H-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS451",
    name: "Data-Intensive Distributed Computing",
    subject: "CS",
    level: 400,
    description: "Introduces students to infrastructure for data-intensive computing, with a focus on abstractions, frameworks, and algorithms that allow developers to distribute computations across many machines. Topics include core concepts (partitioning, replication, locality, consistency), computational models (MapReduce, dataflows, stream processing, bulk-synchronous parallel), and applications.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: CS341 - Algorithms (0.50) CS348 - Introduction to Database Management (0.50) Must have completed at least 1 of the following: CS350 - Operating Systems (0.50) SE350 - Operating Systems (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , H-Data Science (BMath) , or H-Software Engineering"
  },
  {
    code: "CS452",
    name: "Real-Time Programming",
    subject: "CS",
    level: 400,
    description: "Intended to give students experience with tools and techniques of real-time programming, this course includes not only issues of microcomputer architecture and a real-time programming language and operating system, but also hands-on experience programming a microcomputer for applications such as process control, data acquisition and communication.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS350 - Operating Systems (0.50)SE350 - Operating Systems (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS453",
    name: "Software and Systems Security",
    subject: "CS",
    level: 400,
    description: "Introduction to security issues in modern software, operating systems, and other computing platforms (e.g., mobile and cloud environments). Causes of security breaches and methods to help detect, isolate, and prevent them. Specific topics include comparing security and privacy, program security, operating system security, mobile security, hardware security, administrating security, and legal and ethical issues.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS350 - Operating Systems (0.50)SE350 - Operating Systems (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS454",
    name: "Distributed Systems",
    subject: "CS",
    level: 400,
    description: "An introduction to distributed systems, emphasizing the multiple levels of software in such systems. Specific topics include fundamentals of data communications, network architecture and protocols, local-area networks, concurrency control in distributed systems, recovery in distributed systems, and clock synchronization.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS350 - Operating Systems (0.50)SE350 - Operating Systems (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS456",
    name: "Computer Networks",
    subject: "CS",
    level: 400,
    description: "An introduction to network architectures and protocols, placing emphasis on protocols used in the Internet. Specific topics include application layer protocols, network programming, transport protocols, routing, multicast, data link layer issues, multimedia networking, network security, and network management.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS350 - Operating Systems (0.50)SE350 - Operating Systems (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS457",
    name: "System Performance Evaluation",
    subject: "CS",
    level: 400,
    description: "Basic techniques of system performance evaluation. Specific topics include performance modelling, discrete event simulation, verification and validation of simulation models, analysis of simulation output, analysis of single server queue and queueing networks, modelling of computer systems, networks, and other queueing or non-queueing systems.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CS246 - Object-Oriented Software Development (0.50) CS246E - Object-Oriented Software Development (Enriched) (0.50) CS247 - Software Engineering Principles (0.50) Must have completed at least 1 of the following: STAT206 - Statistics for Software Engineering (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , or H-Software Engineering"
  },
  {
    code: "CS459",
    name: "Privacy, Cryptography, Network and Data Security",
    subject: "CS",
    level: 400,
    description: "Introduction to privacy and security using cryptography and related techniques in networks, distributed systems, and data science. The course examines how data and metadata can be protected at rest, in transit, and during computation. For at-rest protection, specific topics include the basics of cryptography and relevant ethics/policy concepts. For in-transit protection, specific topics include network defenses, authentication, and secure and anonymous communication protocols. For during-computation protection, specific topics include data inference, differential privacy, homomorphic encryption, multi-party computations, and related protocols.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS350 - Operating Systems (0.50)SE350 - Operating Systems (0.50)Must have completed at least 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50)MATH145 - Algebra (Advanced Level) (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS462",
    name: "Formal Languages and Parsing",
    subject: "CS",
    level: 400,
    description: "Languages and their representations. Grammars --Chomsky hierarchy. Regular sets and sequential machines. Context-free grammars -- normal forms, basic properties. Pushdown automata and transducers. Operations on languages. Undecidable problems in language theory. Applications to the design of programming languages and compiler construction.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CS360 - Introduction to the Theory of Computing (0.50) CS365 - Models of Computation (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , or H-Software Engineering"
  },
  {
    code: "CS466",
    name: "Algorithm Design and Analysis",
    subject: "CS",
    level: 400,
    description: "Algorithmic approaches and methods of assessment that reflect a broad spectrum of criteria, including randomized algorithms, amortized analysis, lower bounds, approximation algorithms, and on-line algorithms. Particular examples will be chosen from different areas of active research and application.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: CS341 - Algorithms (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , or H-Software Engineering"
  },
  {
    code: "CS467",
    name: "Introduction to Quantum Information Processing",
    subject: "CS",
    level: 400,
    description: "Basics of computational complexity; basics of quantum information; quantum phenomena; quantum circuits and universality; relationship between quantum and classical complexity classes; simple quantum algorithms; quantum Fourier transform; Shor factoring algorithm; Grover search algorithm; physical realization of quantum computation; error-correction and fault-tolerance; quantum key distribution.",
    prerequisiteRawText: "Complete all of the following Earned a minimum grade of 80% in at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Students must be in level 3A or higher"
  },
  {
    code: "CS475",
    name: "Computational Linear Algebra",
    subject: "CS",
    level: 400,
    description: "Basic concepts and implementation of numerical linear algebra techniques and their use in solving application problems. Special methods for solving linear systems having special features. Direct methods: symmetric, positive definite, band, general sparse structures, ordering methods. Iterative methods: Jacobi, Gauss-Seidel, SOR, conjugate gradient. Computing and using orthogonal factorizations of matrices. QR and SVD methods for solving least squares problems. Eigenvalue and singular value decompositions. Computation and uses of these decompositions in practice.",
    prerequisiteRawText: "Must have completed at least 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50) CS370 - Numerical Computation (0.50) CS371 - Introduction to Computational Mathematics (0.50)"
  },
  {
    code: "CS476",
    name: "Numerical Computation for Financial Modelling",
    subject: "CS",
    level: 400,
    description: "The interaction of financial models, numerical methods, and computing environments. Basic computational aspects of option pricing and hedging. Numerical methods for stochastic differential equations, strong and weak convergence. Generating correlated random numbers. Time-stepping methods. Finite difference methods for the Black-Scholes equation. Discretization, stability, convergence. Methods for portfolio optimization, effect of data errors on portfolio weights.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50) CS370 - Numerical Computation (0.50) CS371 - Introduction to Computational Mathematics (0.50) Complete 1 of the following Must have completed at least 1 of the following: STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT206 - Statistics for Software Engineering (0.50)"
  },
  {
    code: "CS479",
    name: "Neural Networks",
    subject: "CS",
    level: 400,
    description: "An introduction to neural network methods, with some discussion of their relation to neuroscience. Simple neuron models and networks of neurons. Training feedforward networks. Backpropagation of errors and stochastic gradient descent. Unsupervised learning methods. Recurrent neural networks. Convolutional neural networks. Continuous time models. Adversarial attacks. Advanced topics may include neural engineering, biologically plausible learning methods.",
    prerequisiteRawText: "Complete 1 of the following Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT206 - Statistics for Software Engineering (0.50)"
  },
  {
    code: "CS480",
    name: "Introduction to Machine Learning",
    subject: "CS",
    level: 400,
    description: "Introduction to modelling and algorithmic techniques for machines to learn concepts from data. Generalization: underfitting, overfitting, cross-validation. Tasks: classification, regression, clustering. Optimization-based learning: loss minimization. regularization. Statistical learning: maximum likelihood, Bayesian learning. Algorithms: nearest neighbour, (generalized) linear regression, mixtures of Gaussians, Gaussian processes, kernel methods, support vector machines, deep learning, sequence learning, ensemble techniques. Large scale learning: distributed learning and stream learning. Applications: Natural language processing, computer vision, data mining, human computer interaction, information retrieval.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: CS341 - Algorithms (0.50) Must have completed at least 1 of the following: STAT206 - Statistics for Software Engineering (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , H-Data Science (BMath) , or H-Software Engineering"
  },
  {
    code: "CS482",
    name: "Computational Techniques in Biological Sequence Analysis",
    subject: "CS",
    level: 400,
    description: "Computer science principles and algorithms in biological sequence analysis. Topics include algorithms for sequence comparison, for large-scale database search in biological databases, for sequence assembly, for evolutionary tree reconstruction, for identifying important features in DNA and RNA sequences, and underlying computational techniques for understanding strings and trees and for making probabilistic inferences.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: CS341 - Algorithms (0.50) Complete 1 of the following Must have completed the following: STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: STAT206 - Statistics for Software Engineering (0.50) Earned a minimum grade of 60% in each of the following: STAT231 - Statistics (0.50)"
  },
  {
    code: "CS484",
    name: "Computational Vision",
    subject: "CS",
    level: 400,
    description: "Introduction to image and vision understanding by computer. Camera-system geometry, image formation and lighting, and image acquisition. Basic visual processes for recognition of edges, regions, lines, and surfaces. Processing of stereo images, and motion in image sequences. Object recognition. Applications of computer-vision systems.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50)CS370 - Numerical Computation (0.50)CS371 - Introduction to Computational Mathematics (0.50)MATH235 - Linear Algebra 2 for Honours Mathematics (0.50)MATH245 - Linear Algebra 2 (Advanced Level) (0.50)Must have completed at least 1 of the following: STAT206 - Statistics for Software Engineering (0.50)STAT230 - Probability (0.50)STAT240 - Probability (Advanced Level) (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), H-Data Science (BMath), or H-Software Engineering"
  },
  {
    code: "CS485",
    name: "Statistical and Computational Foundations of Machine Learning",
    subject: "CS",
    level: 400,
    description: "Extracting meaningful patterns from random samples of large data sets. Statistical analysis of the resulting problems. Common algorithmic paradigms for such tasks. Central concepts: VC-dimension, margins of a classifier, sparsity and description length, other types of regularization. Performance guarantees: generalization bounds, data dependent error bounds, and computational complexity of learning algorithms. Common paradigms: neural networks, kernel methods and support-vector machines, boosting, nearest neighbor classifiers. Applications to data mining.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: CS341 - Algorithms (0.50) Must have completed at least 1 of the following: STAT206 - Statistics for Software Engineering (0.50) STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , H-Data Science (BMath) , or H-Software Engineering"
  },
  {
    code: "CS486",
    name: "Introduction to Artificial Intelligence",
    subject: "CS",
    level: 400,
    description: "Goals and methods of artificial intelligence. Methods of general problem solving. Knowledge representation and reasoning. Planning. Reasoning about uncertainty. Machine learning. Multi-agent systems. Natural language processing.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: CS341 - Algorithms (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , H-Data Science (BMath) , or H-Software Engineering"
  },
  {
    code: "CS487",
    name: "Introduction to Symbolic Computation",
    subject: "CS",
    level: 400,
    description: "An introduction to the use of computers for symbolic mathematical computation, involving traditional mathematical computations such as solving linear equations (exactly), analytic differentiation and integration of functions, and analytic solution of differential equations.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CS231 - Algorithmic Problem Solving (0.50) CS234 - Data Types and Structures (0.50) CS240 - Data Structures and Data Management (0.50) CS240E - Data Structures and Data Management (Enriched) (0.50) Enrolled in an Honours Mathematics program"
  },
  {
    code: "CS488",
    name: "Introduction to Computer Graphics",
    subject: "CS",
    level: 400,
    description: "Software and hardware for interactive computer graphics. Implementation of device drivers, 3-D transformations, clipping, perspective, and input routines. Data structures, hidden surface removal, colour shading techniques, and some additional topics will be covered.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: CS341 - Algorithms (0.50)Must have completed at least 1 of the following: CS350 - Operating Systems (0.50)SE350 - Operating Systems (0.50)Must have completed at least 1 of the following: CS370 - Numerical Computation (0.50)CS371 - Introduction to Computational Mathematics (0.50)Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS490",
    name: "Information Systems Management",
    subject: "CS",
    level: 400,
    description: "The integration of business and technical considerations in the design, implementation and management of information systems. Topics include: IS planning and development; business, management, executive, and strategic information systems, including case studies of selected large- scale systems; decision support systems; end-user training and development; systems security, disaster planning and recovery. Practical examples of information systems in industry.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CS350 - Operating Systems (0.50) SE350 - Operating Systems (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , or H-Software Engineering"
  },
  {
    code: "CS492",
    name: "The Social Implications of Computing",
    subject: "CS",
    level: 400,
    description: "This course is designed to consider the problems encountered by individuals, organizations and society as computer technology is adopted, with a view towards assessing possible courses of action.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CS240 - Data Structures and Data Management (0.50) CS240E - Data Structures and Data Management (Enriched) (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , or H-Software Engineering"
  },
  {
    code: "CS499R",
    name: "Readings in Computer Science",
    subject: "CS",
    level: 400,
    description: "Reading course as announced by the department.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 3B or higherEnrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "CS499T",
    name: "Honours Thesis",
    subject: "CS",
    level: 400,
    description: "The student will undertake new analysis, synthesis, measurement, or experimentation to produce a document that demonstrates a depth of understanding of a topic that goes beyond what is obtained in a standard undergraduate education.",
    prerequisiteRawText: "Enrolled in H-BBA & BCS Double Degree, H-Computer Science (BCS), H-Computer Science (BMath), JH-Computer Science (BCS), JH-Computer Science (BMath), H-Computing & Financial Management, H-Data Science (BCS), or H-Software Engineering"
  },
  {
    code: "DAC204",
    name: "Introduction to Game Design",
    subject: "DAC",
    level: 200,
    description: "This course explores the fundamentals of game design. It focuses on the essentials shared by all games that are fundamental for a game designer working in any medium, from sports to board games to computer and video games. Although the focus of the course is on designing, prototyping, and testing non-digital games, digital games will be discussed in class to provide students with a broad theoretical and conceptual understanding of the field of game design and development along with practical exercises to train for creating a game.",
    prerequisiteRawText: "Students must be in level 2A or higher"
  },
  {
    code: "DAC209",
    name: "Introduction to Critical Design Practices",
    subject: "DAC",
    level: 200,
    description: "How does design help us think? This studio course introduces students to practice-based methods for generating knowledge. Topics may include prototyping, performance as research, material thinking, multi-modal representation, and experience design. Students will test and explore how we learn differently through creative practices."
  },
  {
    code: "DAC302",
    name: "Digital Storytelling Design",
    subject: "DAC",
    level: 300,
    description: "This course teaches students the principles and practices of telling stories using digital technologies to produce short narratives in audio and/or visual formats. Students will learn to develop and present story ideas, create storyboards, write short scripts, and then render their narratives using a variety of digital techniques and tools.",
    prerequisiteRawText: "Earned at least 0.50 units from DAC"
  },
  {
    code: "DAC305",
    name: "Designing and Evaluating Digital Games",
    subject: "DAC",
    level: 300,
    description: "This course introduces fundamental design skills for two-dimensional interactive video games and provides the theoretical knowledge of the emotional and cognitive effects of video game play. Students will understand the importance of user experience assessment for video games as part of iterative design and development. Students will learn to theorize, design, prototype, and test digital games with a special focus on exploring the impact that video games have on human experience.",
    prerequisiteRawText: "Earned at least 0.50 units from DAC"
  },
  {
    code: "DAC309",
    name: "User Experience Design",
    subject: "DAC",
    level: 300,
    description: "This course introduces students to the theory and practice of user experience design as it applies to the design of interactive digital media. Topics will include user-centred design, personas, iterative testing, prototyping, information gathering interviews, and contextual inquiry.",
    prerequisiteRawText: "Earned at least 0.50 units from DAC"
  },
  {
    code: "DATSC401",
    name: "Capstone in Data Science",
    subject: "DATSC",
    level: 400,
    description: "This course is the culminating experience of the data science major, designed to integrate and apply the knowledge, skills, and tools students have developed throughout their coursework. Students will address a complex, real-world data science problem from start to finish, defining a research question or business challenge, acquiring and cleaning data, applying appropriate statistical and computational methods, developing models or analytical pipelines, and effectively communicating findings to both technical and non-technical audiences. Emphasis is placed on project management, ethical considerations, reproducibility, and professional presentation. The capstone provides students with an opportunity to demonstrate mastery of the data science process and to produce a portfolio-ready project that showcases their ability to generate actionable insights from data.",
    prerequisiteRawText: "Complete all of the following Students must be in level 4A or higher Enrolled in H-Data Science (BMath)"
  },
  {
    code: "EARTH122",
    name: "Introductory Environmental Sciences",
    subject: "EARTH",
    level: 100,
    description: "This course presents a broad overview of earth system processes and their influence on humans. Course emphasis is placed on anthropogenic impacts on natural systems, the impacts of geologic, biologic, and atmospheric processes on humans, and the effects of human activities on the environment. Course topics include sustainable development and the availability and use of natural resources, principles of ecology and environmental science, biogeochemical cycles, climate and climate change, soils and food supply, energy systems, surface water and groundwater, waste generation and management, pollution, and catastrophic natural processes."
  },
  {
    code: "ECE124",
    name: "Digital Circuits and Systems",
    subject: "ECE",
    level: 100,
    description: "Number systems and Boolean arithmetic. Boolean algebra and simplification of Boolean functions. Combinational circuits. Sequential circuits; design and implementation. Hardware description languages. Timing analysis. Implementation technologies.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 1B or higherEnrolled in H-Computer Engineering, CS-Digital Hardware Specialization, H-Electrical Engineering, or H-Software Engineering"
  },
  {
    code: "ECE140",
    name: "Linear Circuits",
    subject: "ECE",
    level: 100,
    description: "Analysis of linear circuits. Voltage, current, resistance, capacitance, inductance, voltage source, current source, dependent sources, Ohm's Law, Kirchhoff's Laws, nodal analysis, mesh analysis, circuit transformations, operational amplifier circuits, time response, sinusoidal steady-state response. Preparing for, conducting, and reporting of laboratory experiments.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 1B or higherEnrolled in H-Computer Engineering, H-Electrical Engineering, or H-Software Engineering"
  },
  {
    code: "ECE205",
    name: "Advanced Calculus 1 for Electrical and Computer Engineers",
    subject: "ECE",
    level: 200,
    description: "Fourier series. Ordinary differential equations. Laplace transform. Applications to linear electrical systems.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 2AEnrolled in H-Computer Engineering, or H-Electrical Engineering"
  },
  {
    code: "ECE206",
    name: "Advanced Calculus 2 for Electrical Engineers",
    subject: "ECE",
    level: 200,
    description: "Triple integrals, cylindrical and spherical polar coordinates. Divergence and curl, applications. Surface integrals, Green's, Gauss' and Stokes' theorems, applications. Complex functions, analytic functions, contour integrals, Cauchy's integral formula, Laurent series, residues.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 2BEnrolled in H-Computer Engineering, or H-Electrical Engineering"
  },
  {
    code: "ECE207",
    name: "Signals and Systems",
    subject: "ECE",
    level: 200,
    description: "Discrete, continuous and periodic signals, time- and frequency-domain analysis of continuous- and discrete-time linear systems, periodic signals and Fourier series, non-periodic signals, and Fourier transforms.",
    prerequisiteRawText: "Complete 1 of the followingComplete all of the followingMust have completed the following: ECE140 - Linear Circuits (0.50)ECE240 - Electronic Circuits 1 (0.50)Students must be in level 2B or higherEnrolled in H-Computer Engineering, or H-Electrical EngineeringComplete all of the followingMust have completed the following: ECE140 - Linear Circuits (0.50)MATH213 - Signals, Systems, and Differential Equations (0.50)Complete all of the followingStudents must be in level 3A or higherEnrolled in H-Software Engineering"
  },
  {
    code: "ECE222",
    name: "Digital Computers",
    subject: "ECE",
    level: 200,
    description: "Computer organization. Memory units, control units, I/O operations. Assembly language programming, translation and loading. Arithmetic logic units. Computer case studies.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: BME121 - Digital Computation (0.50)CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)CS137 - Programming Principles (0.50)CS145 - Designing Functional Programs (Advanced Level) (0.50)ECE150 - Fundamentals of Programming (0.50)MSE121 - Introduction to Computer Programming (0.50)MTE121 - Digital Computation (0.50)SYDE121 - Digital Computation (0.50)Complete 1 of the followingMust have completed at least 1 of the following: BME393 - Digital Systems (0.50)ECE124 - Digital Circuits and Systems (0.50)MTE262 - Introduction to Digital Logic (0.50)Must have completed the following: SYDE192Students must be in level 2A or higherComplete 1 of the followingEnrolled in CS-Digital Hardware Specialization, or H-Software EngineeringEnrolled in a BASc program"
  },
  {
    code: "ECE224",
    name: "Embedded Microprocessor Systems",
    subject: "ECE",
    level: 200,
    description: "Microprocessor system architecture, bus systems, memory systems, peripherals, parallel interfaces, serial interfaces, analog interfaces, data transfer, synchronization, error detection/correction, testing and debugging.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: ECE222 - Digital Computers (0.50)Complete 1 of the followingMust have completed at least 1 of the following: BME393 - Digital Systems (0.50)ECE124 - Digital Circuits and Systems (0.50)MTE262 - Introduction to Digital Logic (0.50)Must have completed the following: SYDE192Students must be in level 2B or higherComplete 1 of the followingEnrolled in CS-Digital Hardware Specialization, or H-Software EngineeringEnrolled in a BASc program"
  },
  {
    code: "ECE240",
    name: "Electronic Circuits 1",
    subject: "ECE",
    level: 200,
    description: "Introduction to electronic signal processing; second-order circuits; operational amplifier circuits; diode device and circuits; metal-oxide-semiconductor (MOS) biasing networks; load-line analysis; diode and MOS small-signal equivalent circuits; single-stage small-signal MOS amplifiers; complementary metal-oxide-semiconductor (CMOS) logic circuits.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: ECE106 - Electricity and Magnetism (0.50)ECE140 - Linear Circuits (0.50)MATH119 - Calculus 2 for Engineering (0.50)Students must be in level 2A or higherEnrolled in H-Computer Engineering, H-Electrical Engineering, or H-Software Engineering"
  },
  {
    code: "ECE305",
    name: "Introduction to Quantum Mechanics",
    subject: "ECE",
    level: 300,
    description: "Introduction to quantization, wave-particle duality, and the uncertainty principle. The Schroedinger equation and solvable examples. Topics include stationary states of particle- in-a-box, harmonic oscillator, and the hydrogen atom. Quantization of angular momentum and spin. Introduction to approximation methods including time-independent perturbation theory. Modern applications of quantum mechanics.",
    prerequisiteRawText: "Complete 1 of the followingComplete all of the followingMust have completed the following: ECE105 - Classical Mechanics (0.50)ECE106 - Electricity and Magnetism (0.50)Must have completed at least 1 of the following: ECE205 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50)MATH211 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50)MATH213 - Signals, Systems, and Differential Equations (0.50)Enrolled in CE-Quantum Engineering Specialization, EE-Quantum Engineering Specialization, or Quantum Engineering Option"
  },
  {
    code: "ECE313",
    name: "Digital Signal Processing",
    subject: "ECE",
    level: 300,
    description: "Fourier representations in discrete and continuous time. Discrete Fourier transform and fast Fourier transform algorithms. Sampling theory. Sampling and quantization errors. Transform analysis of linear time-invariant systems. Filter design. Discrete Hilbert transform. Introduction to filter banks and discrete wavelet transform.",
    prerequisiteRawText: "Complete 1 of the followingComplete all of the followingStudents must be in level 3B or higherEnrolled in H-Computer Engineering, or H-Electrical EngineeringComplete all of the followingMust have completed the following: MATH213 - Signals, Systems, and Differential Equations (0.50)STAT206 - Statistics for Software Engineering (0.50)Students must be in level 3B or higherEnrolled in H-Software Engineering"
  },
  {
    code: "ECE318",
    name: "Communication Systems",
    subject: "ECE",
    level: 300,
    description: "Introduction to random processes, power spectral density. Thermal noise and the white noise model. Amplitude and angle modulation, generation and detection schemes. Sampling and reconstruction, quantization. Digital baseband transmission. Overview of digital passband communications.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: ECE203 - Probability Theory and Statistics 1 (0.50)ECE207 - Signals and Systems (0.50)Must have completed at least 1 of the following: ECE205 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50)MATH211 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50)Students must be in level 3A or higherEnrolled in H-Computer Engineering, or H-Electrical Engineering"
  },
  {
    code: "ECE320",
    name: "Computer Architecture",
    subject: "ECE",
    level: 300,
    description: "Organization and performance of uniprocessors, pipelined processors, dynamically scheduled processors, parallel processors and multiprocessors; memory and cache structures; multiprocessor algorithms and synchronization techniques; special-purpose architectures.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: ECE222 - Digital Computers (0.50)ECE327 - Digital Hardware Systems (0.50)Students must be in level 3B or higherComplete 1 of the followingEnrolled in CS-Digital Hardware Specialization, or H-Software EngineeringEnrolled in a BASc program"
  },
  {
    code: "ECE327",
    name: "Digital Hardware Systems",
    subject: "ECE",
    level: 300,
    description: "Design and modelling of digital hardware systems using a hardware description language. Development process. Impact of implementation technologies. Performance analysis and optimization. Functional verification. Timing analysis. Power analysis and optimization. Faults and testability. Reliability and fault tolerance.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: ECE222 - Digital Computers (0.50)MTE241 - Introduction to Computer Structures and Real-Time Systems (0.50)Complete 1 of the followingMust have completed at least 1 of the following: ECE124 - Digital Circuits and Systems (0.50)MTE262 - Introduction to Digital Logic (0.50)Complete all of the followingMust have completed the following: SYDE192L - Digital Systems Laboratory (0.25)Must have completed the following: SYDE192Students must be in level 3A or higherComplete 1 of the followingEnrolled in CS-Digital Hardware Specialization, or H-Software EngineeringEnrolled in a BASc program"
  },
  {
    code: "ECE380",
    name: "Analog Control Systems",
    subject: "ECE",
    level: 300,
    description: "Introduction to control systems. Advantages of closed-loop feedback systems. The role of the system mathematical model. Block diagrams and signal flow graphs. The basic control system design problem, stability in control systems. Frequency response analysis techniques. Root-locus analysis. Elementary lead-lag compensation.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 3A or higherComplete 1 of the followingComplete all of the followingMust have completed the following: ECE207 - Signals and Systems (0.50)Enrolled in H-Computer Engineering, or H-Electrical EngineeringComplete all of the followingMust have completed the following: MATH213 - Signals, Systems, and Differential Equations (0.50)Enrolled in H-Software Engineering"
  },
  {
    code: "ECE405A",
    name: "Quantum Information Processing Devices",
    subject: "ECE",
    level: 400,
    description: "This course introduces physical implementations of quantum computers with an emphasis on common and connecting themes. The course topics include the review of quantum mechanics, criteria to build quantum computers, quantum circuit models, and four quantum hardware platforms (nuclear magnetic resonance, optical photons, trapped ions, and superconducting systems) in terms of qubit definition, universal gate sets, initialization, measurement strategies, and decoherence processes.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: AMATH373 - Quantum Theory 1 (0.50)CHEM356 - Introductory Quantum Mechanics (0.50)ECE305 - Introduction to Quantum Mechanics (0.50)NE332 - Quantum Mechanics (0.50)PHYS233 - Introduction to Quantum Mechanics (0.50)PHYS234 - Quantum Physics 1 (0.50)Enrolled in Quantum Engineering Option, CE-Quantum Engineering Specialization, or EE-Quantum Engineering Specialization"
  },
  {
    code: "ECE423",
    name: "Embedded Computer Systems",
    subject: "ECE",
    level: 400,
    description: "Specification and design of embedded systems, specification languages, hardware/software co-design, performance estimation, co-simulation, verification, validation, embedded architectures, processor architectures and software synthesis, system-on-a-chip paradigm, retargetable code generation and optimization, verification and validation, environmental issues and considerations.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS350 - Operating Systems (0.50)ECE252 - Systems Programming and Concurrency (0.50)MTE241 - Introduction to Computer Structures and Real-Time Systems (0.50)SE350 - Operating Systems (0.50)Must have completed at least 1 of the following: ECE224 - Embedded Microprocessor Systems (0.50)MTE325 - Microprocessor Systems and Interfacing for Mechatronics Engineering (0.50)Students must be in level 4A or higherComplete 1 of the followingEnrolled in H-Software EngineeringEnrolled in a BASc program"
  },
  {
    code: "ECE451",
    name: "Software Requirements Specification and Analysis",
    subject: "ECE",
    level: 400,
    description: "Introduces students to the requirements definition phase of software development. Models, notations, and processes for software requirements identification, representation, analysis, and validation. Cost estimation from early documents and specifications.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingMust have completed at least 1 of the following: BME122 - Data Structures and Algorithms (0.50)ECE250 - Algorithms and Data Structures (0.50)MSE240 - Algorithms and Data Structures (0.50)MTE140 - Algorithms and Data Structures (0.50)SYDE223 - Data Structures and Algorithms (0.50)Must have completed the following: MSCi240Students must be in level 3A or higherComplete 1 of the followingEnrolled in H-Electrical EngineeringEnrolled in a BASc program"
  },
  {
    code: "ECE452",
    name: "Software Design and Architectures",
    subject: "ECE",
    level: 400,
    description: "Introduces students to the design, implementation, and evolution phases of software development. Software design processes, methods, and notation. Implementation of designs. Evolution of designs and implementations. Management of design activities.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingMust have completed at least 1 of the following: BME122 - Data Structures and Algorithms (0.50)ECE250 - Algorithms and Data Structures (0.50)MSE240 - Algorithms and Data Structures (0.50)MTE140 - Algorithms and Data Structures (0.50)SYDE223 - Data Structures and Algorithms (0.50)Must have completed the following: MSCI240Students must be in level 3A or higherComplete 1 of the followingEnrolled in H-Software EngineeringEnrolled in a BASc program"
  },
  {
    code: "ECE453",
    name: "Software Testing, Quality Assurance, and Maintenance",
    subject: "ECE",
    level: 400,
    description: "Introduces students to systematic testing of software systems. Software verification, reviews, metrics, quality assurance, and prediction of software reliability and availability. Related management issues.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingMust have completed at least 1 of the following: BME122 - Data Structures and Algorithms (0.50)ECE250 - Algorithms and Data Structures (0.50)MSE240 - Algorithms and Data Structures (0.50)MTE140 - Algorithms and Data Structures (0.50)SYDE223 - Data Structures and Algorithms (0.50)Must have completed the following: MSCI240Students must be in level 3A or higherComplete 1 of the followingEnrolled in H-Software EngineeringEnrolled in a BASc program"
  },
  {
    code: "ECE457C",
    name: "Reinforcement Learning",
    subject: "ECE",
    level: 400,
    description: "Introduction to reinforcement learning (RL) theory and algorithms for learning decision-making policies in situations with uncertainty and limited information. Topics include Markov decision processes, classic exact/approximate RL algorithms such as value/policy iteration, Q-learning, State-action-reward-state-action (SARSA), Temporal Difference (TD) methods, policy gradients, actor-critic, and Deep RL such as Deep Q-Learning (DQN), Asynchronous Advantage Actor Critic (A3C), and Deep Deterministic Policy Gradient (DDPG).",
    prerequisiteRawText: "Must have completed at least 1 of the following: BME213 - Statistics and Experimental Design (0.50)ECE203 - Probability Theory and Statistics 1 (0.50)MSE253 - Probability and Statistics 2 (0.50)MTE201 - Experimental Measurement and Statistical Analysis (0.50)STAT206 - Statistics for Software Engineering (0.50)STAT230 - Probability (0.50)STAT240 - Probability (Advanced Level) (0.50)SYDE212 - Probability, Statistics, and Data Science (0.50)"
  },
  {
    code: "ECE481",
    name: "Digital Control Systems",
    subject: "ECE",
    level: 400,
    description: "Performance specifications for design. Dynamic system modelling and basic system identification. Dealing with basic nonlinear effects. Sampled data systems. Discrete-time system stability and dynamic performance. Digital control system design: emulation methods, z-domain, frequency domain, pole placement. Implementation of digital controllers.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 4A or higherComplete 1 of the followingComplete all of the followingMust have completed at least 1 of the following: ECE380 - Analog Control Systems (0.50)MTE360 - Automatic Control Systems (0.50)SYDE352 - Introduction to Control Systems (0.50)Enrolled in H-Computer Engineering, H-Electrical Engineering, or H-Systems Design EngineeringComplete all of the followingMust have completed the following: ECE207 - Signals and Systems (0.50)SE380 - Introduction to Feedback Control (0.50)Enrolled in H-Software Engineering"
  },
  {
    code: "ECE484",
    name: "Digital Control Applications",
    subject: "ECE",
    level: 400,
    description: "Dynamic system modelling: linear, nonlinear, state-space, sample data systems, computer simulation, system identification. Discrete system stability and dynamic performance. Nonlinear system analysis, limit cycles. Digital control system design: emulation methods, z-domain, frequency domain, pole placement. Implementation of digital controllers. Laboratory projects in computer control of mechatronic and other systems.",
    prerequisiteRawText: "Complete 1 of the followingComplete all of the followingMust have completed the following: ME360 - Introduction to Control Systems (0.50)Enrolled in H-Mechanical Engineering, or Mechatronics OptionComplete all of the followingMust have completed the following: SYDE352 - Introduction to Control Systems (0.50)Enrolled in Mechatronics Option, or H-Systems Design Engineering"
  },
  {
    code: "ECE486",
    name: "Robot Dynamics and Control",
    subject: "ECE",
    level: 400,
    description: "Introduction to the study of robotics focusing on the mechanics and control of serial manipulators. Topics include rigid body motion, forward and inverse kinematics, differential kinematics, forward and inverse dynamics, trajectory generation, motion planning, and feedback control.",
    prerequisiteRawText: "Complete 1 of the followingComplete all of the followingMust have completed the following: ECE380 - Analog Control Systems (0.50)Students must be in level 4A or higherEnrolled in H-Computer Engineering, or H-Electrical EngineeringComplete all of the followingMust have completed the following: ME360 - Introduction to Control Systems (0.50)Students must be in level 4A or higherEnrolled in H-Mechanical Engineering, or Mechatronics OptionComplete all of the followingMust have completed the following: MTE360 - Automatic Control Systems (0.50)Students must be in level 4A or higherEnrolled in H-Mechatronics EngineeringComplete all of the followingMust have completed the following: SE380 - Introduction to Feedback Control (0.50)Students must be in level 4A or higherEnrolled in H-Software EngineeringComplete all of the followingMust have completed the following: SYDE352 - Introduction to Control Systems (0.50)Students must be in level 4A or higherEnrolled in H-Systems Design Engineering"
  },
  {
    code: "ECE488",
    name: "Multivariable Control Systems",
    subject: "ECE",
    level: 400,
    description: "Review of feedback control design fundamentals; SISO controller parameterizations; the fundamental effect of MIMO interaction; introduction to state-space models in continuous and discrete time; SISO techniques for MIMO design; optimal control; model-predictive control design; state estimation; decoupling, MIMO PID control design; applications in areas such as aerospace systems.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 4A or higherComplete 1 of the followingComplete all of the followingMust have completed the following: ECE380 - Analog Control Systems (0.50)Enrolled in H-Computer Engineering, or H-Electrical EngineeringComplete all of the followingMust have completed the following: ME360 - Introduction to Control Systems (0.50)Enrolled in H-Mechanical Engineering, or Mechatronics OptionComplete all of the followingMust have completed the following: MTE360 - Automatic Control Systems (0.50)Enrolled in H-Mechatronics EngineeringComplete all of the followingMust have completed the following: SE380 - Introduction to Feedback Control (0.50)Enrolled in H-Software EngineeringComplete all of the followingMust have completed the following: SYDE352 - Introduction to Control Systems (0.50)Enrolled in H-Systems Design Engineering"
  },
  {
    code: "ECE495",
    name: "Autonomous Vehicles",
    subject: "ECE",
    level: 400,
    description: "Autonomous driving system overview; computer vision basics, deep learning for perception, motion modelling and state estimation, localization and mapping, object tracking, behavioral planning and reinforcement learning, path planning and vehicle control, safety and verification and validation, adoption and impact.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 3B or higherEnrolled in H-Computer Engineering, H-Electrical Engineering, H-Mechanical Engineering, H-Mechatronics Engineering, or H-Software Engineering"
  },
  {
    code: "ECON100",
    name: "Principles of Economics",
    subject: "ECON",
    level: 100,
    description: "This course provides an introduction to the basic concepts and tools of micro and macro economic analysis of individuals, businesses, and government in the global world. Topics may include consumers, producers, market structures, national income accounting, unemployment, and inflation.",
    prerequisiteRawText: "Enrolled in H-Mathematics/Chartered Professional Accountancy"
  },
  {
    code: "ECON101",
    name: "Introduction to Microeconomics",
    subject: "ECON",
    level: 100,
    description: "This course provides an introduction to microeconomic analysis relevant for understanding the Canadian economy. The behaviour of individual consumers and producers, the determination of market prices for commodities and resources, and the role of government policy in the functioning of the market system are the main topics covered."
  },
  {
    code: "ECON102",
    name: "Introduction to Macroeconomics",
    subject: "ECON",
    level: 100,
    description: "This course introduces students to the measurement and behaviour of key macroeconomic variables both in Canada and around the world. Topics include national accounts, inflation, interest rates, wages, international balance of payments, business cycles, growth, employment, unemployment, poverty, and inequality."
  },
  {
    code: "ECON120W",
    name: "Introduction to Microeconomics (WLU)",
    subject: "ECON",
    level: 100,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description."
  },
  {
    code: "ECON140W",
    name: "Introduction to Macroeconomics (WLU)",
    subject: "ECON",
    level: 100,
    description: "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description."
  },
  {
    code: "ECON201",
    name: "Microeconomic Theory for Business and Policy",
    subject: "ECON",
    level: 200,
    description: "This course offers an introduction to the theory of market based economies. Topics include consumer choice, production, price and output under perfect and imperfect competition, price discrimination and two part pricing, vertical and horizontal firm boundaries and integration, and market structure.",
    prerequisiteRawText: "Complete 1 of the following Must have completed at least 1 of the following: COMM103 - Principles of Economics (0.50) ECON100 - Principles of Economics (0.50) ECON101 - Introduction to Microeconomics (0.50) MSE263 - Managerial Economics (0.50) Must have completed the following: ECON120W"
  },
  {
    code: "ECON290",
    name: "Models of Choice in Competitive Markets",
    subject: "ECON",
    level: 200,
    description: "Choice lies at the heart of all economic models. This course focuses on choice by consumers and firms. It explains the notion and use of utility functions and budgets, and shows how their interaction allows economists to make predictions about behaviour. The constrained maximization techniques from ECON 211 are used extensively, and extended to situations covering uncertainty (risk) and time. Profit maximization by firms is explored.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: AE221 - Advanced Calculus (0.50) CIVE221 - Advanced Calculus (0.50) ECE206 - Advanced Calculus 2 for Electrical Engineers (0.50) ECON211 - Introduction to Mathematical Economics (0.50) GEOE221 - Advanced Calculus (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Must have completed the following: SYDE112 Complete 1 of the following Must have completed at least 1 of the following: COMM103 - Principles of Economics (0.50) ECON100 - Principles of Economics (0.50) ECON101 - Introduction to Microeconomics (0.50) MSE263 - Managerial Economics (0.50) Must have completed the following: ECON120W Complete 1 of the following Must have completed at least 1 of the following: AE224 - Probability and Statistics (0.50) AFM113 - Analytic Methods for Business 2 (0.50) ARTS280 - Statistics for Arts Students (0.50) BME213 - Statistics and Experimental Design (0.50) CHE220 - Probability and Statistics (0.50) CIVE224 - Probability and Statistics (0.50) ECE203 - Probability Theory and Statistics 1 (0.50) ECON221 - Statistics for Economists (0.50) ENVE224 - Probability and Statistics (0.50) ENVS278 - Applied Statistics for Environmental Research (0.50) GEOE224 - Probability and Statistics (0.50) KIN232 - Research Design and Statistics (0.50) LS280 - Social Statistics (0.50) ME202 - Statistics for Engineers (0.50) MSE251 - Probability and Statistics 1 (0.50) NE215 - Probability and Statistics (0.50) PSCI314 - Quantitative Analysis (0.50) PSYCH292 - Basic Data Analysis (0.50) REC371 - Quantitative Data Analysis and Mobilization (0.50) SDS250R - Social Statistics (0.50) SOC280 - Social Statistics (0.50) SRF230 - Introduction to Statistics (0.50) STAT202 - Introductory Statistics for Scientists (0.50) STAT206 - Statistics for Software Engineering (0.50) STAT211 - Introductory Statistics and Sampling for Accounting (0.50) STAT220 - Probability (Non-Specialist Level) (0.50) STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) SYDE212 - Probability, Statistics, and Data Science (0.50) Must have completed the following: SWREN250R"
  },
  {
    code: "ECON306",
    name: "Macroeconomics",
    subject: "ECON",
    level: 300,
    description: "This course introduces students to the analysis of inter-temporal trade-offs in macroeconomics and macroeconomic policy. Its main objective is to show how economists use economic theory to analyze the role of incentives and general equilibrium considerations in the macro-economy. Applications include national savings and investment, business cycles, and monetary and fiscal policy.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: ECON391 - Equilibrium in Market Economies (0.50) Complete 1 of the following Must have completed at least 1 of the following: COMM103 - Principles of Economics (0.50) ECON100 - Principles of Economics (0.50) ECON102 - Introduction to Macroeconomics (0.50) Must have completed the following: ECON140W"
  },
  {
    code: "ECON391",
    name: "Equilibrium in Market Economies",
    subject: "ECON",
    level: 300,
    description: "Central to the study of economics is the concept of an equilibrium in which the actions of individuals are not only individually optimal, but are also consistent with each other; such as when the total amount of a good that individuals wish to purchase equals the total amount available. This course introduces students to the notion of equilibrium for a market and market economy. The properties of such equilibria are explored, both in terms of model logic (existence, uniqueness) as well as in terms of the desirability of the equilibrium outcomes (efficiency, welfare). Partial equilibrium (in a single market) as well as general equilibrium (in all markets at once) are covered for models with endowments, production, uncertainty, and time.",
    prerequisiteRawText: "Must have completed the following: ECON290 - Models of Choice in Competitive Markets (0.50)"
  },
  {
    code: "ECON393",
    name: "Market Failures",
    subject: "ECON",
    level: 300,
    description: "This course explores the many ways in which the assumptions of the perfectly competitive model are violated in the real world, and the consequences of these market failures for consumers and firms. The course examines potential government intervention to \"fix\" the failures as well as the limits of government intervention. Topics include monopoly/monopsony, externalities, the tragedy of the commons, public goods, asymmetric information, and incomplete information.",
    prerequisiteRawText: "Must have completed the following: ECON391 - Equilibrium in Market Economies (0.50)"
  },
  {
    code: "ECON406",
    name: "Money and Banking 2",
    subject: "ECON",
    level: 400,
    description: "This course examines the monetary and financial aspects of the macro-economy. It prepares students to conduct analyses of problems and policies in monetary economics. Topics may include analyses of the banking system, financial crises, and monetary policy.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: ECON306 - Macroeconomics (0.50) ECON393 - Market Failures (0.50) Complete 1 of the following Must have completed the following: ECON323 - Econometric Analysis 2 (0.50) Must have completed at least 1 of the following: STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)"
  },
  {
    code: "ECON407",
    name: "Economic Growth and Development 2",
    subject: "ECON",
    level: 400,
    description: "The goal of this course is to understand the enormous differences in living standards across countries and over time. It uses economic analysis to understand the sources of investment and innovation, and the role of economic, social, and political institutions in economic growth and development.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: ECON306 - Macroeconomics (0.50) ECON393 - Market Failures (0.50) Must have completed at least 1 of the following: ECON323 - Econometric Analysis 2 (0.50) STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)"
  },
  {
    code: "ECON408",
    name: "Business Cycles",
    subject: "ECON",
    level: 400,
    description: "This course prepares students to conduct analyses of problems and policies associated with macroeconomic fluctuations. It examines the empirical features of business cycles, and discusses how macroeconomic models help to understand business cycles and to assess the consequences of alternative macroeconomic policies.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: ECON306 - Macroeconomics (0.50) ECON393 - Market Failures (0.50) Must have completed at least 1 of the following: ECON323 - Econometric Analysis 2 (0.50) STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)"
  },
  {
    code: "ECON409",
    name: "Workers, Jobs, and Wages",
    subject: "ECON",
    level: 400,
    description: "This course examines the role of labour markets in the macro-economy. It focuses on the analysis of aggregate employment, unemployment, labour force participation, and earnings inequality. The main goal of the course is to understand current labour-market outcomes both in Canada and around the world.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: ECON306 - Macroeconomics (0.50) ECON393 - Market Failures (0.50) Must have completed at least 1 of the following: ECON323 - Econometric Analysis 2 (0.50) STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)"
  },
  {
    code: "ECON472",
    name: "Senior Honours Essay",
    subject: "ECON",
    level: 400,
    description: "Students are required to identify a research topic, conduct research independently, write a research paper, and attend class meetings. Each student is supervised by a member of the Economics faculty. Class meetings cover topics such as a general overview of research methods in economics, research ethics, finding reference material, citing practices, and effective writing and presentation.",
    prerequisiteRawText: "Complete all of the following Students must be in level 4A or higher Enrolled in H-Economics , H-Mathematical Economics (BA) , or H-Mathematical Economics (BMath)"
  },
  {
    code: "ECON491",
    name: "Advanced Microeconomics",
    subject: "ECON",
    level: 400,
    description: "This course prepares students for graduate-level theory courses. Students will be exposed to a selection of topics treated with the mathematical rigour required for graduate work.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: ECON393 - Market Failures (0.50) Enrolled in an Honours program"
  },
  {
    code: "ECON496",
    name: "Advanced Macroeconomics",
    subject: "ECON",
    level: 400,
    description: "This course provides students with the methodological principles that underlie modern analyses of the macro-economy, and to prepare students for graduate-level macroeconomic theory courses.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: ECON306 - Macroeconomics (0.50) ECON393 - Market Failures (0.50) Must have completed at least 1 of the following: ECON323 - Econometric Analysis 2 (0.50) STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Enrolled in an Honours program"
  },
  {
    code: "ENGL108D",
    name: "Digital Lives",
    subject: "ENGL",
    level: 100,
    description: "An examination of how digital communication technologies create and promote online identities and social spaces, as well as interpersonal and communal interactions."
  },
  {
    code: "ENGL109",
    name: "Calculus 2 for the Sciences",
    subject: "ENGL",
    level: 100
  },
  {
    code: "ENGL119",
    name: "Calculus 2 for the Sciences",
    subject: "ENGL",
    level: 100
  },
  {
    code: "ENGL193",
    name: "Communication in the Sciences",
    subject: "ENGL",
    level: 100,
    description: "In this course students will enhance oral and written communication competencies in contexts relevant to the life sciences and physical sciences.",
    prerequisiteRawText: "Complete 1 of the following Enrolled in H-Science & Financial Management Enrolled in a Bachelor of Science program in the Faculty of Science"
  },
  {
    code: "ENGL293",
    name: "Introduction to Digital Media Studies",
    subject: "ENGL",
    level: 200,
    description: "A study of theories of digital media, including critical, rhetorical, and semiotic approaches, and of the interpretation and creation of digital media artifacts."
  },
  {
    code: "ENGL294",
    name: "Introduction to Critical Game Studies",
    subject: "ENGL",
    level: 200,
    description: "This course introduces students to the field of humanities-based game studies. Topics may include the debate between ludological (rules-based) and narratological (story-based) approaches, procedural studies, platform and software studies, gamification, games and adaptation studies, and games as rhetorical objects."
  },
  {
    code: "ENGL295",
    name: "Social Media",
    subject: "ENGL",
    level: 200,
    description: "This course surveys the popular social media landscape and charts scholarly approaches, both methodological and theoretical, to understanding and analyzing social media texts. Topics to be addressed may include memes, social networks, fan communities and texts, digital identity, and other emergent social media forms."
  },
  {
    code: "ENGL378",
    name: "Professional Communications in Statistics and Actuarial Science",
    subject: "ENGL",
    level: 300,
    description: "This course introduces students to oral and written communication in the fields of statistics and actuarial science. With emphasis on the public presentation of technical knowledge, the ability to give and receive constructive feedback, and communication in a collaborative environment, this course helps students develop proficiencies in critical workplace skills. This course is writing intensive and includes extensive collaborative assignments.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: ACTSC331 - Life Contingencies 2 (0.50) STAT331 - Applied Linear Models (0.50) STAT371 - Applied Linear Models and Process Improvement for Business (0.50) Complete 1 of the following Earned a minimum grade of 70% in at least 1 of the following: COMMST100 - Interpersonal Communication (0.50) COMMST223 - Public Speaking (0.50) EMLS101 - Oral Communications for Academic Purposes (0.50) EMLS102 - Clear Communication in English Writing (0.50) EMLS129 - Written Academic English (0.50) ENGL109 - Introduction to Academic Writing (0.50) ENGL129 - Written Academic English (0.50) Earned a minimum grade of 70% in at least 1 of the following: EMLS101R, EMLS102R, EMLS129R Enrolled in H-Actuarial Science , JH-Actuarial Science , H-Biostatistics , H-Data Science (BMath) , H-Data Science (BCS) , H-Statistics , or JH-Statistics"
  },
  {
    code: "ENGL392A",
    name: "Information Design",
    subject: "ENGL",
    level: 300,
    description: "The theory and practice of design for print and digital media, including the study of design concepts such as space, colour, typography, interactivity, immersion, motion, and presence. Students produce designs using professional software tools.",
    prerequisiteRawText: "Students must be in level 2B or higher"
  },
  {
    code: "ENGL392B",
    name: "Visual Rhetoric",
    subject: "ENGL",
    level: 300,
    description: "This course introduces students to the study of images from a rhetorical perspective, including the interaction of texts and images in such professional writing fields as advertising, book illustration, technical documentation, journalism, and public relations. Issues may include visual and textual literacy, the semiotics and rhetoric of design, and the ideological basis of social communication.",
    prerequisiteRawText: "Students must be in level 2B or higher"
  },
  {
    code: "ENGL408C",
    name: "The Rhetoric of Digital Design: Theory and Practice",
    subject: "ENGL",
    level: 400,
    description: "Students apply a variety of analytic perspectives - design discourse, multimodal discourse, rhetorical theory, social semiotics - to the design and production of a major digital project (or compilation of projects) using professional software and hardware tools.",
    prerequisiteRawText: "Students must be in level 3A or higher"
  },
  {
    code: "ENVS205",
    name: "Sustainability: The Future We Want",
    subject: "ENVS",
    level: 200,
    description: "This course introduces students to the goals, principles, and practices of sustainability. Sustainability thinking, policies, and programs aim to increase and maintain human well-being by integrating or reconciling current social and economic goals (e.g., economic growth; poverty alleviation; gender inequality) with long-term environmental objectives (e.g., improved environmental quality; climate stability; biodiversity conservation; and managing resources to ensure future access). Case studies are used to illustrate solutions for realizing sustainability, emphasizing efforts underway for reaching the United Nations Sustainable Development Goals (SDGs). The course assesses four intersecting and sometimes competing approaches for realizing sustainability: technological innovation; market-based approaches; state regulation and investment; and individual and collective (\"grassroots\") action. Key values underlying sustainability are explored, including notions of the \"good life\", democracy, social justice, and efficiency.",
    prerequisiteRawText: "Students must be in level 2A or higher"
  },
  {
    code: "FINE100",
    name: "Studio Fundamentals",
    subject: "FINE",
    level: 100,
    description: "This course introduces the basic principles of drawing as it relates to concepts of 2D, 3D, and time-based media, through a series of drawing exercises and projects."
  },
  {
    code: "FINE130",
    name: "Introduction to Digital Imaging",
    subject: "FINE",
    level: 100,
    description: "This online course is an introduction to current imaging software that students use to explore contemporary topics through digital imaging. This course is taught from a fine arts perspective."
  },
  {
    code: "FINE150",
    name: "Appreciation and Expression",
    subject: "FINE",
    level: 100,
    description: "The course delivers an introduction to a variety of basic techniques and concepts relevant to contemporary 2D, 3D, and digital art practices, through a series of structured studio exercises and assignments."
  },
  {
    code: "FINE228",
    name: "Design and Imaging",
    subject: "FINE",
    level: 200,
    description: "In this course students will explore the fundamentals of design through a series of exercises and assignments that cultivate artistic expression and technical skill. Through an exploration of both analogue and digital processes, students will learn to apply the principles of aesthetic design to a variety of contexts, including two-dimensional space, three-dimensional form, and digital frameworks.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: FINE100 - Studio Fundamentals (0.50)FINE130 - Introduction to Digital Imaging (0.50)Obtained all of the following milestones: Fine Arts Health and Safety Milestone and Fine Arts Woodshop Workshop Milestone"
  },
  {
    code: "FINE247",
    name: "Expanded Media: Interaction",
    subject: "FINE",
    level: 200,
    description: "In this course students will learn to create interactive artworks using a variety of hardware and software. Following an interdisciplinary approach, students will explore topics such as kinetic sculpture, wearable technologies, and responsive environments.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: FINE100 - Studio Fundamentals (0.50)Obtained all of the following milestones: Fine Arts Health and Safety Milestone and Fine Arts Woodshop Workshop Milestone"
  },
  {
    code: "FINE383",
    name: "Computational Digital Art Studio",
    subject: "FINE",
    level: 300,
    description: "An upper-level studio course to create computational projects that function as art works and aesthetic experiences. Students will work in an interdisciplinary environment to combine computer science principles with fine art technical and conceptual skills.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: CS105 - Introduction to Computer Programming 1 (0.50)CS106 - Introduction to Computer Programming 2 (0.50)Must have completed at least 1 of the following: CS100 - Introduction to Computing Through Applications (0.50)CS200 - Concepts for Advanced Computer Usage (0.50)CS230 - Introduction to Computers and Computer Systems (0.50)Must have completed at least 1 of the following: FINE228 - Design and Imaging (0.50)FINE247 - Expanded Media: Interaction (0.50)"
  },
  {
    code: "GDS271",
    name: "Earth from Space Using Remote Sensing",
    subject: "GDS",
    level: 200,
    description: "Remote sensing of the Earth's systems (atmosphere, land, and oceans) is introduced. The course covers the principles, physics, sensor technology, processing, and applications of remote sensing in the electromagnetic spectrum.",
    prerequisiteRawText: "Complete 1 of the followingMust have completed at least 1 of the following: GDS181 - Designing Effective Maps (0.50)GDS187 - Geospatial Data Science (0.50)Must have completed at least 1 of the following: GEOG181, GEOG187"
  },
  {
    code: "GDS281",
    name: "Introduction to Geographic Information Systems (GIS)",
    subject: "GDS",
    level: 200,
    description: "Introduction to the fundamental concepts and use of Geographic Information Systems (GIS). Students learn about the nature of geographic information and how to store, manipulate and analyze spatial data in a range of application areas. Students will learn underlying theory in lectures and gain a working knowledge of GIS software in lab sessions.",
    prerequisiteRawText: "Complete 1 of the followingMust have completed at least 1 of the following: GDS181 - Designing Effective Maps (0.50)GDS187 - Geospatial Data Science (0.50)Must have completed at least 1 of the following: GEOG181, GEOG187Enrolled in H-Planning"
  },
  {
    code: "GENE123",
    name: "Electrical Circuits and Instrumentation",
    subject: "GENE",
    level: 100,
    description: "Charge, current, and voltage. Voltage and current sources, resistors, capacitors, and inductors. Ohm's Law, Kirchhoff's Laws, nodal analysis, Thevenin and Norton models, instrumentation amplifier circuits, time response, impedance. Function and characteristics of basic electrical transducers. Resolution, precision, and accuracy. Basics of data acquisition.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 1B or higherEnrolled in H-Management Engineering"
  },
  {
    code: "GEOG102",
    name: "Changing Physical Environments",
    subject: "GEOG",
    level: 100,
    description: "An introductory course examining the forces that drive and change Earth’s climate and its impacts on the physical environments of the planet. These factors are explored for systems including the atmosphere, biosphere, hydrosphere, and cryosphere, and the interconnections between them."
  },
  {
    code: "GEOG205",
    name: "Landscape Dynamics",
    subject: "GEOG",
    level: 200,
    description: "This course provides an understanding of the foundational principles of geomorphology, and how climatological, hydrological, and ecological processes shape landscape evolution. The role of these processes in shaping the landscape and the influence of land use change will be explored.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: EARTH121 - Introductory Earth Sciences (0.50)EARTH123 - Introductory Hydrology (0.50)GEOG102 - Changing Physical Environments (0.50)Obtained all of the following milestones: Workplace Hazardous Materials Information System Milestone"
  },
  {
    code: "GEOG207",
    name: "Climate Change Fundamentals",
    subject: "GEOG",
    level: 200,
    description: "Climate change is one of the most profound environmental and social issues affecting communities, nations and individuals. This course is an introduction to this global challenge, including its scientific underpinnings, history, potential impacts on natural systems and human societies around the world, and two societal responses: adaptation and greenhouse gas mitigation. Opportunities to develop sustainable resilient communities, as well as Canadian climate change policy responses, will be highlighted."
  },
  {
    code: "GEOG209",
    name: "Hydroclimatology",
    subject: "GEOG",
    level: 200,
    description: "An introduction to the fundamental processes governing climate and hydrological systems and the links between them. It starts with a discussion of basic atmospheric and hydrological processes and traces the flow of energy and water between the earth's surface and the atmosphere. The water cycle is examined including evapotranspiration, precipitation, runoff and water storage in the natural reservoirs (including soil and groundwater, lakes and wetlands).",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: EARTH121 - Introductory Earth Sciences (0.50)GEOG102 - Changing Physical Environments (0.50)Obtained all of the following milestones: Workplace Hazardous Materials Information System Milestone"
  },
  {
    code: "GEOG303",
    name: "Physical Hydrology",
    subject: "GEOG",
    level: 300,
    description: "Fundamental processes in physical hydrology are addressed. Components of the water balance are examined to determine the nature of their variation in time and space. Precipitation, interception, infiltration, groundwater and soil water processes, evapotranspiration, runoff, and storage will be examined from a theoretical and practical viewpoint, and their linkages demonstrated by lab and fieldwork.",
    prerequisiteRawText: "Must have completed the following: GEOG209 - Hydroclimatology (0.50)"
  },
  {
    code: "GEOG305",
    name: "Fluvial Geomorphology",
    subject: "GEOG",
    level: 300,
    description: "Emphasis on concepts related to fluvial processes, river mechanics, the relationship between environmental change and river regime. Selected topics include fluvial processes and landscape formation, flow and sediment regimes, channel processes, form and behaviour, river response to natural and anthropogenic change, and river management.",
    prerequisiteRawText: "Complete 1 of the followingMust have completed the following: GEOG205 - Landscape Dynamics (0.50)Complete all of the followingStudents must be in level 2A or higherEnrolled in H-Environmental Sciences - Water Science Specialization"
  },
  {
    code: "GEOG306",
    name: "Human Dimensions of Natural Hazards",
    subject: "GEOG",
    level: 300,
    description: "This course will investigate the human dimensions of the global experience with natural hazards and associated disasters. The physical nature of a wide range of geophysical and biophysical hazards will be explored, paying particular attention to the ways in which hazards become dangerous to humans, and the pathways by which humans can either increase or decrease their vulnerability in the face of natural hazards.",
    prerequisiteRawText: "Students must be in level 2A or higher"
  },
  {
    code: "GEOG307",
    name: "Societal Adaptation to Climate Change",
    subject: "GEOG",
    level: 300,
    description: "Climate change is a pervasive factor affecting the future of society. Recognizing that dangerous climate change cannot be avoided through greenhouse gas emissions reductions alone, adaptation to climate change has emerged as a central component of global climate policy. An in depth understanding of the diverse impacts of climate change on communities, economic sectors and society will provide a foundation for examining adaptation strategies to build resilience to accelerated climate change. Examples will draw from multiple sectors in both developed and developing world contexts, with an emphasis on solutions and the limits to adaptation.",
    prerequisiteRawText: "Must have completed at least 1 of the following: GEOG207 - Climate Change Fundamentals (0.50)SCI205 - Climate Change Fundamentals (0.50)"
  },
  {
    code: "GEOG320",
    name: "The Cryosphere",
    subject: "GEOG",
    level: 300,
    description: "This course provides a comprehensive overview of the cryosphere and cryosphere-atmosphere interactions. Topics covered include the material and thermodynamic properties of snow and ice, the role of the cryosphere in weather and climate, and the response of the cryosphere to climate change (past, present, and future). Students will be introduced to, and experiment with, snow and ice process models.",
    prerequisiteRawText: "Must have completed the following: GEOG209 - Hydroclimatology (0.50)"
  },
  {
    code: "GEOG408",
    name: "Earth's Future Climates",
    subject: "GEOG",
    level: 400,
    description: "This course provides students with experience using numerical models to understand changes in Earth's climate. Building on their knowledge of the fundamental physical processes governing the climate system, students will construct, apply and evaluate a hierarchy of climate models (from simple energy balance models to full ocean-atmosphere General Circulation Models). The predictive ability of climate models, and their validation, will be considered. The different types of uncertainty inherent in climate projections will be explained and the implications assessed.",
    prerequisiteRawText: "Must have completed at least 1 of the following: GEOG207 - Climate Change Fundamentals (0.50)SCI205 - Climate Change Fundamentals (0.50)"
  },
  {
    code: "GSJ205",
    name: "Technology, Gender, and Social Justice",
    subject: "GSJ",
    level: 200,
    description: "This course explores the interaction of gender and other axes of oppression with technology. From condoms to the internet, from vacuum cleaners to space shuttles, we will examine the ways in which the design, engineering, production, and consumption of various technologies differentially affect people based on their demographic features. We will survey feminist and other technology scholars to consider the ways in which technology can both oppress and liberate."
  },
  {
    code: "HLTH101",
    name: "Introduction to Health 1",
    subject: "HLTH",
    level: 100,
    description: "This course will be of interest to students pursuing careers in health and those with a general interest in health and health care. Various perspectives of the concepts of health and illness will be introduced. Emphasis is on understanding the origins, factors and conditions that determine health throughout the lifespan, how these factors influence one another and the role/impact of health care. Additional topics include how health is measured, the leading causes of death, illness and disability, as well as how health status has changed throughout history. Students will also learn how to research and critically analyze the health literature and discuss important health issues with their peers."
  },
  {
    code: "HRM200",
    name: "Basic Human Resources Management",
    subject: "HRM",
    level: 200,
    description: "Examines the major areas of human resources administration including recruiting, salary administration, labour relations, benefits administration, employee relations, labour law, and organizational behaviour. Reviews the role of human resources administration in organizations and the manner in which human resources executives contribute to the well-being of a total enterprise.",
    prerequisiteRawText: "Students must be in level 2A or higher"
  },
  {
    code: "INTEG121",
    name: "Collaboration, Design Thinking, and Problem Solving",
    subject: "INTEG",
    level: 100,
    description: "A project course in design and problem-solving across various disciplines. Topics include problem-solving methods and issues in design, including ethics, sustainability, and communication in small groups. Applied design projects require group work and draw on the skills of creative and critical thinking."
  },
  {
    code: "INTEG251",
    name: "Creativity and Innovation",
    subject: "INTEG",
    level: 200,
    description: "An introductory, integrative course in the history, psychology, value and practice of creativity across a variety of domains, from scientific research to the fine and performing arts. Students will learn to identify and explain key ideas and historical figures in the study and practice of creative thinking. They'll also learn to reliably generate novel ideas of value, both solo and collaboratively."
  },
  {
    code: "KIN320",
    name: "Task Analysis",
    subject: "KIN",
    level: 300,
    description: "Task analysis describes methodologies that can be applied to identify, describe, and analyze how people interact with their environment and with each other. Task analysis includes a broad range of descriptive and analytic techniques from which the practitioner must select the most appropriate one for their purposes and setting. This skills-based course will guide students in learning task analysis methodologies and associated techniques using a combination of didactic, case-study, and experiential learning-based teaching methods. The application of task analysis from the perspective of a Human Factors & Ergonomics (HFE) specialist will be emphasized.",
    prerequisiteRawText: "Must have completed the following: KIN221 - Advanced Biomechanics of Human Movement (0.50)KIN221L - Advanced Biomechanics of Human Movement Laboratory (0.25)"
  },
  {
    code: "LS271",
    name: "Conflict Resolution",
    subject: "LS",
    level: 200,
    description: "An examination of the resolution of conflicts, ranging from interpersonal to broader social and international conflicts. Students are introduced to negotiation, mediation, and nonviolent resistance, and are encouraged to develop their own theoretical understandings that aid in addressing conflict."
  },
  {
    code: "LS283",
    name: "Business Law",
    subject: "LS",
    level: 200,
    description: "Particular attention is given to the law relating to contracts and business organizations. Other areas of study include sources of law, the judicial process, real and personal property, torts, agency, credit, and negotiable instruments."
  },
  {
    code: "LS319",
    name: "Negotiation: Theories and Strategies",
    subject: "LS",
    level: 300,
    description: "This course explores different ways of negotiating between people and groups with conflicting interests. Students will learn the theory behind the strategies and develop practical negotiation skills you can put to use in your daily life at home, at work, and in the community."
  },
  {
    code: "MATBUS371",
    name: "Introduction to Corporate Finance",
    subject: "MATBUS",
    level: 300,
    description: "Cash flow analysis. Cost of capital, investment decision rules, capital budgeting, depreciation. CAPM. Description and valuation of financial instruments including stocks, swaps, options, and bonds.",
    prerequisiteRawText: "Must have completed at least 1 of the following: ACTSC221 - Introductory Financial Mathematics (Non-Specialist Level) (0.50)ACTSC231 - Introductory Financial Mathematics (0.50)"
  },
  {
    code: "MATBUS470",
    name: "Derivatives",
    subject: "MATBUS",
    level: 400,
    description: "Overview of the derivatives markets. Pricing of derivatives, including futures, forwards, swaps, and options. Hedging vs. speculating. Option Greeks. Trading strategies. Case studies.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingMust have completed at least 1 of the following: ACTSC372 - Investment Science and Corporate Finance (0.50)ACTSC391 - Corporate Finance (0.50)AFM275 - Corporate Finance (0.50)Must have completed at least 1 of the following: ACTSC371, AFM372, BUS393WMust have completed at least 1 of the following: STAT333 - Stochastic Processes 1 (0.50)STAT334 - Probability Models for Business and Accounting (0.50)"
  },
  {
    code: "MATBUS471",
    name: "Fixed Income Securities",
    subject: "MATBUS",
    level: 400,
    description: "Analysis of fixed income securities. Duration, convexity. Structured products. Market characteristics. Valuation of bonds with embedded options. Accounting and taxation issues.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: ACTSC231 - Introductory Financial Mathematics (0.50)Complete 1 of the followingMust have completed at least 1 of the following: ACTSC372 - Investment Science and Corporate Finance (0.50)ACTSC391 - Corporate Finance (0.50)AFM275 - Corporate Finance (0.50)Must have completed at least 1 of the following: AFM372, BUS393WEnrolled in H-BBA & BMath Double Degree, H-Mathematics/Chartered Professional Accountancy, H-Math/FARM - Chartered Financial Analyst Spec, or H-Math/FARM - Professional Risk Management Spec"
  },
  {
    code: "MATBUS472",
    name: "Risk Management",
    subject: "MATBUS",
    level: 400,
    description: "Principles of Risk Management. Market, credit, and operational risk management. Risk measures. Hedging strategies and risks in hedging. Credit migration. Global financial market regulation. Case studies.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingMust have completed at least 1 of the following: ACTSC372 - Investment Science and Corporate Finance (0.50)ACTSC391 - Corporate Finance (0.50)AFM275 - Corporate Finance (0.50)Must have completed at least 1 of the following: AFM372, BUS393WEnrolled in H-BBA & BMath Double Degree, H-Mathematics/Chartered Professional Accountancy, H-Math/FARM - Chartered Financial Analyst Spec, or H-Math/FARM - Professional Risk Management Spec"
  },
  {
    code: "MATH103",
    name: "Introductory Algebra for Arts and Social Science",
    subject: "MATH",
    level: 100,
    description: "An introduction to applications of algebra to business, the behavioural sciences, and the social sciences. Topics will be chosen from linear equations, systems of linear equations, linear inequalities, functions, set theory, permutations and combinations, binomial theorem, probability theory.",
    prerequisiteRawText: "Enrolled in a program offered by the Faculties of Arts, Environment, or Health"
  },
  {
    code: "MATH104",
    name: "Introductory Calculus for Arts and Social Science",
    subject: "MATH",
    level: 100,
    description: "An introduction to applications of calculus in business, the behavioural sciences, and the social sciences. The models studied will involve polynomial, rational, exponential, and logarithmic functions. The major concepts introduced to solve problems are rate of change, optimization, growth and decay, and integration.",
    prerequisiteRawText: "Enrolled in a program offered by the Faculties of Arts, Environment, Health, or Science"
  },
  {
    code: "MATH106",
    name: "Applied Linear Algebra 1",
    subject: "MATH",
    level: 100,
    description: "Systems of linear equations. Matrix algebra. Determinants. Introduction to vector spaces. Applications.",
    prerequisiteRawText: "Complete 1 of the followingMust have completed the following: MATH103 - Introductory Algebra for Arts and Social Science (0.50)Must have completed the following: 4U Calculus and Vectors"
  },
  {
    code: "MATH114",
    name: "Linear Algebra for Science",
    subject: "MATH",
    level: 100,
    description: "Vectors in 2- and 3-space and their geometry. Linear equations, matrices, and determinants. Introduction to vector spaces. Eigenvalues and diagonalization. Applications. Complex numbers.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: 4U Calculus and VectorsComplete 1 of the followingEnrolled in H-Geospatial Data Science, or JH-Geospatial Data ScienceEnrolled in H-Geomatics, or JH-GeomaticsEnrolled in a program offered by Faculty of Science"
  },
  {
    code: "MATH115",
    name: "Linear Algebra for Engineering",
    subject: "MATH",
    level: 100,
    description: "Linear equations, matrices, and determinants. Introduction to vector spaces. Eigenvalues and diagonalization. Applications. Complex numbers.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: 4U Calculus and Vectors or 4U Mathematics of Data ManagementComplete 1 of the followingEnrolled in H-Software EngineeringEnrolled in a program offered by Faculty of Engineering"
  },
  {
    code: "MATH116",
    name: "Calculus 1 for Engineering",
    subject: "MATH",
    level: 100,
    description: "Functions: review of polynomials, exponential, logarithmic, trigonometric. Operations on functions, curve sketching. Trigonometric identities, inverse functions. Derivatives, rules of differentiation. Mean Value Theorem, Newton's Method. Indeterminate forms and L'Hopital's rule, applications. Integrals, approximations, Riemann definite integral, Fundamental Theorems. Applications of the integral.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: 4U Calculus and VectorsEnrolled in H-Architectural Engineering, H-Biomedical Engineering, H-Chemical Engineering, H-Civil Engineering, H-Environmental Engineering, H-Geological Engineering, H-Management Engineering, H-Mechanical Engineering, or H-Mechatronics Engineering"
  },
  {
    code: "MATH117",
    name: "Calculus 1 for Engineering",
    subject: "MATH",
    level: 100,
    description: "Functions of engineering importance; review of polynomial, exponential, and logarithmic functions; trigonometric functions and identities. Inverse functions (logarithmic and trigonometric). Limits and continuity. Derivatives, rules of differentiation; derivatives of elementary functions. Applications of the derivative, max-min problems, Mean Value Theorem. Antiderivatives, the Riemann definite integral, Fundamental Theorems. Methods of integration, approximation, applications, improper integrals.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: 4U Calculus and VectorsEnrolled in H-Computer Engineering, H-Electrical Engineering, H-Nanotechnology Engineering, or H-Software Engineering"
  },
  {
    code: "MATH118",
    name: "Calculus 2 for Engineering",
    subject: "MATH",
    level: 100,
    description: "Methods of integration: by parts, trigonometric substitutions, partial fractions; engineering applications, approximation of integrals, improper integrals. Linear and separable first order differential equations, applications. Parametric curves and polar coordinates, arc length and area. Infinite sequences and series, convergence tests, power series and applications. Taylor polynomials and series, Taylor's Remainder Theorem, applications.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: MATH116 - Calculus 1 for Engineering (0.50)MATH117 - Calculus 1 for Engineering (0.50)MATH127 - Calculus 1 for the Sciences (0.50)MATH137 - Calculus 1 for Honours Mathematics (0.50)MATH147 - Calculus 1 (Advanced Level) (0.50)Enrolled in H-Architectural Engineering, H-Biomedical Engineering, H-Chemical Engineering, H-Civil Engineering, H-Environmental Engineering, H-Geological Engineering, H-Management Engineering, H-Mechanical Engineering, or H-Mechatronics Engineering"
  },
  {
    code: "MATH119",
    name: "Calculus 2 for Engineering",
    subject: "MATH",
    level: 100,
    description: "Elementary approximation methods: interpolation; Taylor polynomials and remainder; Newton's method, Landau order symbol, applications. Infinite series: Taylor series and Taylor's Remainder Theorem, geometric series, convergence test, power series, applications. Functions of several variables: partial derivatives, linear approximation and differential, gradient and directional derivative, optimization and Lagrange multipliers. Vector-valued functions: parametric representation of curves, tangent and normal vectors, line integrals and applications.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: MATH116 - Calculus 1 for Engineering (0.50)MATH117 - Calculus 1 for Engineering (0.50)MATH127 - Calculus 1 for the Sciences (0.50)MATH137 - Calculus 1 for Honours Mathematics (0.50)MATH147 - Calculus 1 (Advanced Level) (0.50)Enrolled in H-Computer Engineering, H-Electrical Engineering, H-Nanotechnology Engineering, or H-Software Engineering"
  },
  {
    code: "MATH127",
    name: "Calculus 1 for the Sciences",
    subject: "MATH",
    level: 100,
    description: "Functions of a real variable: powers, rational functions, trigonometric, exponential and logarithmic functions, their properties and inverses. Intuitive discussion of limits and continuity. Definition and interpretation of the derivative, derivatives of elementary functions, derivative rules and applications. Riemann sums and other approximations to the definite integral. Fundamental theorems and antiderivatives; change of variable. Applications to area, rates, average value.",
    prerequisiteRawText: "Complete 1 of the followingMust have completed the following: MATH104 - Introductory Calculus for Arts and Social Science (0.50)Must have completed the following: 4U Calculus and Vectors"
  },
  {
    code: "MATH128",
    name: "Calculus 2 for the Sciences",
    subject: "MATH",
    level: 100,
    description: "A second calculus course for science students that appears in some Mathematics prerequisites.",
    antirequisites: [
      "MATH138",
      "MATH148"
    ]
  },
  {
    code: "MATH135",
    name: "Algebra for Honours Mathematics",
    subject: "MATH",
    level: 100,
    description: "An introduction to the language of mathematics and proof techniques through a study of the basic algebraic systems of mathematics: the integers, the integers modulo n, the rational numbers, the real numbers, the complex numbers and polynomials.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: 4U Calculus and Vectors, 4U Mathematics of Data Management Complete 1 of the following Enrolled in H-Mathematical Physics (BSc) , or H-Software Engineering Enrolled in an Honours Mathematics program or Mathematics/BASE"
  },
  {
    code: "MATH136",
    name: "Linear Algebra 1 for Honours Mathematics",
    subject: "MATH",
    level: 100,
    description: "Systems of linear equations, matrix algebra, elementary matrices, computational issues. Real n-space, vector spaces and subspaces, basis and dimension, rank of a matrix, linear transformations, and matrix representations. Determinants, eigenvalues and diagonalization, applications.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed the following: MATH145 - Algebra (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: MATH135 - Algebra for Honours Mathematics (0.50) Complete 1 of the following Enrolled in H-Mathematical Physics (BSc) Enrolled in an Honours Mathematics program or Mathematics/BASE"
  },
  {
    code: "MATH137",
    name: "Calculus 1 for Honours Mathematics",
    subject: "MATH",
    level: 100,
    description: "Absolute values and inequalities. Sequences and their limits. Limits of functions and continuity. The Intermediate Value theorem and approximate solutions to equations. Derivatives, linear approximation, and Newton's method. Applications of derivatives. The Mean Value theorem and error bounds. Applications of the Mean Value theorem. Suitable topics are illustrated using computer software.",
    prerequisiteRawText: "Must have completed the following: 4U Calculus and Vectors",
    antirequisites: [
      "MATH147"
    ]
  },
  {
    code: "MATH138",
    name: "Calculus 2 for Honours Mathematics",
    subject: "MATH",
    level: 100,
    description: "Introduction to the Riemann integral and approximations. Antiderivatives and the fundamental theorem of calculus. Change of variables, methods of integration. Applications of the integral. Improper integrals. Linear and separable differential equations and applications. Tests for convergence for series. Taylor polynomials and Taylor's Theorem, Big-O notation. Binomial series, functions defined as power series and Taylor series. Suitable topics are illustrated using computer software.",
    prerequisiteRawText: "Complete 1 of the following Must have completed the following: MATH147 - Calculus 1 (Advanced Level) (0.50) Earned a minimum grade of 70% in at least 1 of the following: MATH116 - Calculus 1 for Engineering (0.50) MATH117 - Calculus 1 for Engineering (0.50) MATH127 - Calculus 1 for the Sciences (0.50) Earned a minimum grade of 60% in each of the following: MATH137 - Calculus 1 for Honours Mathematics (0.50)",
    prerequisite: {
      type: "anyOf",
      requirements: [
        {
          type: "course",
          courseCode: "MATH137",
          minGrade: 60
        },
        {
          type: "course",
          courseCode: "MATH147"
        }
      ]
    }
  },
  {
    code: "MATH145",
    name: "Algebra (Advanced Level)",
    subject: "MATH",
    level: 100,
    description: "Advanced algebra for first-year honours mathematics students.",
    antirequisites: [
      "MATH135"
    ]
  },
  {
    code: "MATH146",
    name: "Linear Algebra 1 (Advanced Level)",
    subject: "MATH",
    level: 100,
    description: "Advanced linear algebra for honours mathematics students.",
    prerequisiteRawText: "MATH145.",
    prerequisite: {
      type: "course",
      courseCode: "MATH145"
    },
    antirequisites: [
      "MATH136"
    ]
  },
  {
    code: "MATH147",
    name: "Calculus 1 (Advanced Level)",
    subject: "MATH",
    level: 100,
    description: "Advanced calculus for first-year honours mathematics students.",
    antirequisites: [
      "MATH137"
    ]
  },
  {
    code: "MATH148",
    name: "Calculus 2 (Advanced Level)",
    subject: "MATH",
    level: 100,
    description: "Advanced integral calculus and series.",
    prerequisiteRawText: "MATH147.",
    prerequisite: {
      type: "course",
      courseCode: "MATH147"
    },
    antirequisites: [
      "MATH128",
      "MATH138"
    ]
  },
  {
    code: "MATH207",
    name: "Calculus 3 (Non-Specialist Level)",
    subject: "MATH",
    level: 200,
    description: "Multivariable functions and partial derivatives. Gradients. Optimization including Lagrange multipliers. Polar coordinates. Multiple integrals. Surface integrals on spheres and cylinders. Introduction to Fourier Series.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)"
  },
  {
    code: "MATH211",
    name: "Advanced Calculus 1 for Electrical and Computer Engineers",
    subject: "MATH",
    level: 200,
    description: "Fourier series. Ordinary differential equations. Laplace transform. Applications to linear electrical systems.",
    prerequisiteRawText: "Must have completed the following: MATH119 - Calculus 2 for Engineering (0.50)"
  },
  {
    code: "MATH212",
    name: "Advanced Calculus 2 for Electrical Engineers",
    subject: "MATH",
    level: 200,
    description: "Triple integrals, cylindrical and spherical polar coordinates. Divergence and curl, applications. Surface integrals, Green's, Gauss' and Stokes' theorems, applications. Complex functions, analytic functions, contour integrals, Cauchy's integral formula, Laurent series, residues.",
    prerequisiteRawText: "Must have completed at least 1 of the following: ECE205 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50)MATH211 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50)"
  },
  {
    code: "MATH213",
    name: "Signals, Systems, and Differential Equations",
    subject: "MATH",
    level: 200,
    description: "Laplace transform methods for: solving linear ordinary differential equations, classical signals, and systems. Transfer functions, poles, and zeros; system stability. Frequency response of linear systems and its log-scale representation (Bode plot). Fourier series. Applications in areas of interest for software engineers and computer scientists. Brief introduction to Fourier transforms in the context of signals and systems.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50)MATH119 - Calculus 2 for Engineering (0.50)MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)"
  },
  {
    code: "MATH217",
    name: "Calculus 3 for Chemical Engineering",
    subject: "MATH",
    level: 200,
    description: "Curves and surfaces in R3. Multivariable functions, partial derivatives, the chain rule, gradients. Optimization, Lagrange Multipliers. Double and triple integrals, change of variable. Vector fields, divergence and curl. Vector integral calculus: Green's theorem, the Divergence theorem and Stokes' theorem. Applications in engineering are emphasized.",
    prerequisiteRawText: "Must have completed the following: MATH118 - Calculus 2 for Engineering (0.50)"
  },
  {
    code: "MATH218",
    name: "Differential Equations for Engineers",
    subject: "MATH",
    level: 200,
    description: "First order equations, second order linear equations with constant coefficients, series solutions, the Laplace transform method, systems of linear differential equations. Applications in engineering are emphasized.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingMust have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50)MATH119 - Calculus 2 for Engineering (0.50)MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)Must have completed: SYDE112Complete 1 of the followingEnrolled in H-Earth Sciences - Geology Specialization, H-Earth Sciences - Geophysics Specialization, H-Earth Sciences - Hydrogeology, or Earth Sciences MinorEnrolled in Bachelor of Applied Science or Bachelor of Software Engineering"
  },
  {
    code: "MATH225",
    name: "Applied Linear Algebra 2",
    subject: "MATH",
    level: 200,
    description: "Vector spaces. Linear transformations and matrices. Inner products. Eigenvalues and eigenvectors. Diagonalization. Applications.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50)MATH136 - Linear Algebra 1 for Honours Mathematics (0.50)MATH146 - Linear Algebra 1 (Advanced Level) (0.50)"
  },
  {
    code: "MATH227",
    name: "Calculus 3 for Honours Physics",
    subject: "MATH",
    level: 200,
    description: "Directional derivative and the chain rule for multivariable functions. Optimization, Lagrange multipliers. Double and triple integrals on simple domains; transformations and Jacobians; change of variable in multiple integrals. Vector fields, divergence and curl. Vector integral calculus: Line and surface integrals, Green's Theorem, Stokes' Theorem, Gauss' Theorem, conservative vector fields.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)Enrolled in an Honours Science program"
  },
  {
    code: "MATH228",
    name: "Differential Equations for Physics and Chemistry",
    subject: "MATH",
    level: 200,
    description: "First-order equations, second-order linear equations with constant coefficients, series solutions and special functions, the Laplace transform method. Applications in physics and chemistry are emphasized.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)"
  },
  {
    code: "MATH229",
    name: "Introduction to Combinatorics (Non-Specialist Level)",
    subject: "MATH",
    level: 200,
    description: "Introduction to graph theory: colourings, connectivity, Eulerian tours, planarity. Introduction to combinatorial analysis: elementary counting, generating series, binary strings.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50)MATH114 - Linear Algebra for Science (0.50)MATH115 - Linear Algebra for Engineering (0.50)MATH136 - Linear Algebra 1 for Honours Mathematics (0.50)MATH146 - Linear Algebra 1 (Advanced Level) (0.50)"
  },
  {
    code: "MATH235",
    name: "Linear Algebra 2 for Honours Mathematics",
    subject: "MATH",
    level: 200,
    description: "Orthogonal and unitary matrices and transformations. Orthogonal projections, Gram-Schmidt procedure, best approximations, least-squares. Inner products, angles and orthogonality, orthogonal diagonalization, singular value decomposition, applications.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingMust have completed the following: MATH146 - Linear Algebra 1 (Advanced Level) (0.50)Earned a minimum grade of 60% in each of the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50)Earned a minimum grade of 70% in at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50)MATH114 - Linear Algebra for Science (0.50)MATH115 - Linear Algebra for Engineering (0.50)Complete 1 of the followingEnrolled in H-Mathematical Physics (BSc)Enrolled in an Honours Mathematics program"
  },
  {
    code: "MATH237",
    name: "Calculus 3 for Honours Mathematics",
    subject: "MATH",
    level: 200,
    description: "Calculus of functions of several variables. Limits, continuity, differentiability, the chain rule. The gradient vector and the directional derivative. Taylor's formula. Optimization problems. Mappings and the Jacobian. Multiple integrals in various co-ordinate systems.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: MATH148 - Calculus 2 (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: MATH128 - Calculus 2 for the Sciences (0.50) Earned a minimum grade of 60% in each of the following: MATH138 - Calculus 2 for Honours Mathematics (0.50) Complete 1 of the following Enrolled in H-Mathematical Physics (BSc) Enrolled in an Honours Mathematics program",
    prerequisite: {
      type: "allOf",
      requirements: [
        {
          type: "anyOf",
          requirements: [
            {
              type: "course",
              courseCode: "MATH136"
            },
            {
              type: "course",
              courseCode: "MATH146"
            }
          ]
        },
        {
          type: "anyOf",
          requirements: [
            {
              type: "course",
              courseCode: "MATH128",
              minGrade: 70
            },
            {
              type: "course",
              courseCode: "MATH138",
              minGrade: 60
            },
            {
              type: "course",
              courseCode: "MATH148"
            }
          ]
        }
      ]
    }
  },
  {
    code: "MATH239",
    name: "Introduction to Combinatorics",
    subject: "MATH",
    level: 200,
    description: "Introduction to graph theory: colourings, matchings, connectivity, planarity. Introduction to combinatorial analysis: generating series, recurrence relations, binary strings, plane trees.",
    prerequisiteRawText: "Complete 1 of the following Complete all of the following Complete 1 of the following Must have completed the following: MATH145 - Algebra (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: MATH135 - Algebra for Honours Mathematics (0.50) Complete 1 of the following Must have completed at least 1 of the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: MATH106 - Applied Linear Algebra 1 (0.50) Complete 1 of the following Enrolled in H-Computing & Financial Management Enrolled in an Honours Mathematics program Complete all of the following Students must be in level 2A or higher Enrolled in H-Software Engineering"
  },
  {
    code: "MATH245",
    name: "Linear Algebra 2 (Advanced Level)",
    subject: "MATH",
    level: 200,
    description: "MATH245 is an advanced-level version of MATH235.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: MATH146 - Linear Algebra 1 (Advanced Level) (0.50)Enrolled in an Honours Mathematics program"
  },
  {
    code: "MATH247",
    name: "Calculus 3 (Advanced Level)",
    subject: "MATH",
    level: 200,
    description: "Topology of real n-dimensional space: completeness, closed and open sets, connectivity, compact sets, continuity, uniform continuity. Differential calculus on multivariable functions: partial differentiability, differentiability, chain rule, Taylor polynomials, extreme value problems. Riemann integration: Jordan content, integrability criteria, Fubini's theorem, change of variables. Local properties of continuously differentiable functions: open mapping theorem, inverse function theorem, implicit function theorem.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: MATH146 - Linear Algebra 1 (Advanced Level) (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Enrolled in Honours Mathematics"
  },
  {
    code: "MATH249",
    name: "Introduction to Combinatorics (Advanced Level)",
    subject: "MATH",
    level: 200,
    description: "MATH249 is an advanced-level version of MATH239.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed the following: MATH145 - Algebra (Advanced Level) (0.50) Earned a minimum grade of 80% in each of the following: MATH135 - Algebra for Honours Mathematics (0.50) Must have completed at least 1 of the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Enrolled in an Honours Mathematics program"
  },
  {
    code: "ME219",
    name: "Mechanics of Deformable Solids 1",
    subject: "ME",
    level: 200,
    description: "Concept of equilibrium, force analysis of structures and structural components, equilibrium of deformable bodies, stress and strain concepts, stress-strain relationships, stress analysis of prismatic members in axial, shearing, torsional and flexural deformations, shear force and bending moment diagrams.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: PHYS115 - Mechanics (0.50)Complete 1 of the followingComplete all of the followingStudents must be in level 2A or higherEnrolled in H-Mechanical EngineeringComplete all of the followingStudents must be in level 2B or higherEnrolled in H-Management Engineering"
  },
  {
    code: "ME250",
    name: "Thermodynamics 1",
    subject: "ME",
    level: 200,
    description: "The engineering science of energy. The scope and limitations of thermodynamics. Macroscopic approach to heat, work, energy and the First Law. Properties and state of simple substances. Control-mass and control-volume energy analysis. The Second Law of Thermodynamics, principle of increase of entropy, limiting cycle efficiencies, criteria for equilibrium.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: MATH118 - Calculus 2 for Engineering (0.50)Complete 1 of the followingComplete all of the followingStudents must be in level 2A or higherEnrolled in H-Management EngineeringComplete all of the followingStudents must be in level 2B or higherEnrolled in H-Mechanical Engineering"
  },
  {
    code: "ME353",
    name: "Heat Transfer 1",
    subject: "ME",
    level: 300,
    description: "Introduction to heat transfer mechanisms. The formulation and solution of steady and transient heat conduction. Radiant heat transfer including exchange laws and view factors. Introductory convective heat transfer.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: ME250 - Thermodynamics 1 (0.50)ME351 - Fluid Mechanics 1 (0.50)Students must be in level 3B or higherEnrolled in H-Mechanical Engineering"
  },
  {
    code: "ME354",
    name: "Thermodynamics 2",
    subject: "ME",
    level: 300,
    description: "Emphasis on applications of thermodynamics to flow processes. Real fluids, evaluation of state functions of real fluids. Non-reacting mixtures, reacting mixtures, equilibrium considerations.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: ME250 - Thermodynamics 1 (0.50)Students must be in level 3A or higherEnrolled in H-Mechanical Engineering"
  },
  {
    code: "ME456",
    name: "Heat Transfer 2",
    subject: "ME",
    level: 400,
    description: "Selected topics in heat transfer fundamentals and applications. Topics to be covered include the fundamentals of convection with analytical solutions to simple laminar flow problems and approximate solutions to turbulent flow problems based on analogies between momentum and heat transfer. Also covered is radiant exchange in grey enclosures and in black enclosures containing emitting-absorbing gases. The remaining topics will be chosen from design of heat exchangers; condensation heat transfer; boiling heat transfer; and the treatment of problems in heat conduction.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: ME353 - Heat Transfer 1 (0.50)ME362 - Fluid Mechanics 2 (0.50)Students must be in level 4A or higherEnrolled in H-Mechanical Engineering"
  },
  {
    code: "ME557",
    name: "Combustion 1",
    subject: "ME",
    level: 500,
    description: "Combustion thermodynamics, introduction to chemical kinetics of combustion, combustion properties of fuels, flammability of combustible mixtures. Flame propagation mechanisms, pre-mixed and diffusional; stability of flames; introduction to combustion aerodynamics, jet flames; atomization; droplet and spray combustion. Elementary ignition concepts and theory. Basic detonation theory.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: ME353 - Heat Transfer 1 (0.50)ME362 - Fluid Mechanics 2 (0.50)Students must be in level 4A or higherEnrolled in H-Mechanical Engineering"
  },
  {
    code: "ME564",
    name: "Aerodynamics",
    subject: "ME",
    level: 500,
    description: "An introductory course in aerodynamics for engineers. Kinematics and dynamics of inviscid flow; airfoil dynamics including thin airfoil theory, finite wings, panel methods and airfoil parameters. Boundary layer theory and boundary layer control as applied in aerodynamics. Introduction to high speed aerodynamics. Introduction to dynamics of flight including stability and control.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: ME362 - Fluid Mechanics 2 (0.50)Complete 1 of the followingComplete all of the followingStudents must be in level 4A or higherEnrolled in H-Mechanical EngineeringComplete all of the followingStudents must be in level 4B or higherEnrolled in H-Mechatronics Engineering"
  },
  {
    code: "ME571",
    name: "Clean Air Technologies",
    subject: "ME",
    level: 500,
    description: "Sources of air pollution and greenhouse gases, chemical and biological aspects, effects on health and environment. Thermodynamics and air emissions, air pollution control techniques and equipment monitoring instrumentation, carbon capture, utilization and storage, low-carbon technologies.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: AE280 - Fluid Mechanics and Thermal Sciences (0.50)BME384 - Biomedical Transport: Biofluids and Mass Transfer (0.50)CHE211 - Fluid Mechanics (0.50)CIVE280 - Fluid Mechanics (0.50)ENVE280 - Fluid Mechanics (0.50)GEOE280 - Fluid Mechanics (0.50)ME351 - Fluid Mechanics 1 (0.50)MTE352 - Fluid Mechanics 1 (0.50)SYDE383 - Fluid Mechanics (0.50)Students must be in level 3B or higherComplete 1 of the followingEnrolled in H-Software EngineeringEnrolled in a BASc program"
  },
  {
    code: "MGMT244",
    name: "Principles of Marketing",
    subject: "MGMT",
    level: 200,
    description: "This course is designed to provide a broad understanding of the field of marketing, including consumer behaviour, segmentation, targeting, positioning, branding, and the marketing mix. Students will gain an understanding of how organizations identify the needs of potential consumers and create and deliver value to these consumers through the marketing process.",
    prerequisiteRawText: "Students must be in level 2B or higher"
  },
  {
    code: "MSE211",
    name: "Organizational Behaviour",
    subject: "MSE",
    level: 200,
    description: "Introduction to the concepts of learning, person perception, attitudes, and motivation in an organization. Consideration of communication, roles, norms, and decision making within a group. Discussion of power, control, leadership, and management in light of the above concepts."
  },
  {
    code: "MSE311",
    name: "Organizational Design and Technology",
    subject: "MSE",
    level: 300,
    description: "The focus of this course is on the procedures and variables involved in the design and redesign of organizations. Issues such as departmentation, differentiation, integration, internal politics, innovation, authority, and control are discussed in the context of the underlying technology of the organization. Emphasis will be placed on how one designs both the technical and the organizational systems to ensure their compatibility, noting the effects that one has on the other."
  },
  {
    code: "MSE422",
    name: "Economic Impact of Technological Change and Entrepreneurship",
    subject: "MSE",
    level: 400,
    description: "This course is designed to analyze the impact of technological change and entrepreneurship at a firm and societal level, primarily in terms of the economic antecedents and consequences of new technology. The scope of the course ranges from the study of the determination of productivity and its effect on economic growth to the determination of innovative activity and performance.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingMust have completed at least 1 of the following: AE392 - Economics and Life Cycle Cost Analysis (0.50)BME364 - Engineering Biomedical Economics (0.50)CIVE392 - Economics and Life Cycle Cost Analysis (0.50)ECON101 - Introduction to Microeconomics (0.50)ENVE392 - Economics and Life Cycle Cost Analysis (0.50)GEOE392 - Economics and Life Cycle Cost Analysis (0.50)MSE261 - Engineering Economics: Financial Management for Engineers (0.50)SYDE262 - Engineering Economics and Sustainability (0.50)Must have completed the following: MSCI261Complete 1 of the followingMust have completed at least 1 of the following: AE224 - Probability and Statistics (0.50)BME213 - Statistics and Experimental Design (0.50)CHE220 - Probability and Statistics (0.50)CIVE224 - Probability and Statistics (0.50)ECE203 - Probability Theory and Statistics 1 (0.50)ECON221 - Statistics for Economists (0.50)ENVE224 - Probability and Statistics (0.50)ENVS278 - Applied Statistics for Environmental Research (0.50)ME202 - Statistics for Engineers (0.50)MSE251 - Probability and Statistics 1 (0.50)MTE201 - Experimental Measurement and Statistical Analysis (0.50)NE215 - Probability and Statistics (0.50)PSCI314 - Quantitative Analysis (0.50)PSYCH292 - Basic Data Analysis (0.50)REC371 - Quantitative Data Analysis and Mobilization (0.50)SDS250R - Social Statistics (0.50)SOC280 - Social Statistics (0.50)STAT202 - Introductory Statistics for Scientists (0.50)STAT206 - Statistics for Software Engineering (0.50)STAT211 - Introductory Statistics and Sampling for Accounting (0.50)STAT221 - Statistics (Non-Specialist Level) (0.50)STAT231 - Statistics (0.50)STAT241 - Statistics (Advanced Level) (0.50)SYDE212 - Probability, Statistics, and Data Science (0.50)Must have completed at least 1 of the following: ECE306, MSCI251"
  },
  {
    code: "MSE442",
    name: "Impact of Information Systems on Organizations and Society",
    subject: "MSE",
    level: 400,
    description: "This course is designed to familiarize the student with issues related to the impact of computer-based technologies on individual jobs, organizations, and broader societal level. Particular emphasis will be placed on critical examination of various issues including privacy, security, ethical concern, and professional responsibilities."
  },
  {
    code: "MTE120",
    name: "Circuits",
    subject: "MTE",
    level: 100,
    description: "Basic electromagnetic theory; magnetic circuits; electric circuit elements; DC circuit analysis; first-order transient response; AC circuit analysis.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 1B or higherEnrolled in H-Mechatronics Engineering"
  },
  {
    code: "MTE325",
    name: "Microprocessor Systems and Interfacing for Mechatronics Engineering",
    subject: "MTE",
    level: 300,
    description: "Synchronization and data flow; interfacing to sensors and actuators; parallel, serial, and analog interfacing; buses; direct memory access (DMA); interfacing considerations; privacy and security considerations.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: ME262 - Digital Logic, Microcontrollers, and Programmable Logic Controllers (0.50)MTE262 - Introduction to Digital Logic (0.50)Students must be in level 3A or higherEnrolled in H-Mechatronics Engineering"
  },
  {
    code: "MTE544",
    name: "Autonomous Mobile Robots",
    subject: "MTE",
    level: 500,
    description: "Fundamentals of autonomous mobile robotics, including both perception and planning for autonomous operation, sensor modelling, vehicle state estimation using Bayes Filters, Kalman Filters, and Particle Filters as well as onboard localization and mapping. Topics in planning include vehicle motion modelling and control, as well as graph based and probabilistic motion planning of (Micro Electro Mechanical Systems) MEMS devices.",
    prerequisiteRawText: "Complete all of the followingStudents must be in level 3B or higherEnrolled in H-Biomedical Engineering, H-Computer Engineering, H-Electrical Engineering, H-Mechanical Engineering, H-Mechatronics Engineering, or H-Systems Design Engineering"
  },
  {
    code: "MTHEL131",
    name: "Introduction to Actuarial Practice",
    subject: "MTHEL",
    level: 100,
    description: "Individual life insurance products. Introduction to property and casualty insurance. Introductory risk management, insurance pricing and valuation. Pension plan design.",
    prerequisiteRawText: "Must have completed the following: 4U Calculus and Vectors"
  },
  {
    code: "MTHEL206",
    name: "Introduction to Mathematics Education",
    subject: "MTHEL",
    level: 200,
    description: "Current trends in education, professional practices and administration, the role of the department head, lesson planning, techniques of teaching, evaluation of students, special students, extracurricular activities, the relationship between elementary and secondary school mathematics, audio-visual materials.",
    prerequisiteRawText: "Enrolled in H-Mathematics/Teaching"
  },
  {
    code: "PACS202",
    name: "Conflict Resolution",
    subject: "PACS",
    level: 200,
    description: "An examination of the resolution of conflicts, ranging from interpersonal to broader social and international conflicts. Students are introduced to negotiation, mediation, and nonviolent resistance, and are encouraged to develop their own theoretical understandings that aid in addressing conflict."
  },
  {
    code: "PACS315",
    name: "Engineering and Peace",
    subject: "PACS",
    level: 300,
    description: "This course is built on the conviction that the kinds of problems engineers seek to address, and the ways they seek to address them, should matter for anyone interested in advancing peace in the world. Topics include historical connections between the discipline of engineering and warfare, understanding the engineering method and mindset, and technological frontiers for peacebuilding.",
    prerequisiteRawText: "Complete 1 of the followingStudents must be in level 2A or higherEnrolled in Peace & Conflict Studies Diploma"
  },
  {
    code: "PACS323",
    name: "Negotiation: Theories and Strategies",
    subject: "PACS",
    level: 300,
    description: "This course explores different ways of negotiating between people and groups with conflicting interests. Students will learn the theory behind the strategies and develop practical negotiation skills you can put to use in your daily life at home, at work, and in the community.",
    prerequisiteRawText: "Complete 1 of the following Students must be in level 2A or higher Enrolled in Peace & Conflict Studies Diploma"
  },
  {
    code: "PHIL215",
    name: "Professional and Business Ethics",
    subject: "PHIL",
    level: 200,
    description: "This course is an introduction to professional and business ethics. Ethics, broadly speaking, is the branch of philosophy that seeks to analyze principles of conduct that govern human activity. We are (in part) economic agents who trade with each other in the hopes of making ourselves better off, and insofar as our actions affect the well-being of others, what we do falls under the purview of ethics. Students will explore ethical issues and principles of conduct that are relevant to professionals and business people. Students will learn about professional responsibility, and will develop skills in ethical decision-making by applying ethical theories, concepts, and arguments to business contexts."
  },
  {
    code: "PHIL228",
    name: "Ethics and Artificial Intelligence",
    subject: "PHIL",
    level: 200,
    description: "Students will explore ethical issues related to recent developments in artificial intelligence (AI) and machine learning, as increasingly sophisticated computer programs have come to replace human beings in some socially important roles. Students will critically examine and actively debate issues regarding AI, including whether artificial systems can engage in moral reasoning and whether they might be considered persons. We will also explore more limited technologies that already exist, and are in use in domains such as finance, marketing, and surveillance. No previous technical knowledge is required; students will develop a basic knowledge of how AI works so that we can critically explore issues at the intersection of ethics, justice, and emerging technologies, especially as these technologies reinforce or challenge our conceptions of race, gender, class, and ability. Students can expect to develop critical reading, argumentation, writing, and communication skills as they grapple with these topics."
  },
  {
    code: "PHYS121",
    name: "Mechanics",
    subject: "PHYS",
    level: 100,
    description: "An introductory calculus-based course in physics for students intending to concentrate their future studies in the physical sciences or mathematics; includes vectors (dot and cross products), particle kinematics and dynamics, forces in nature, work and energy, conservation of energy and linear momentum, rotational kinematics and dynamics, and conservation of angular momentum.",
    prerequisiteRawText: "Must have completed the following: 4U Calculus and Vectors, 4U Advanced Functions, and 4U Physics"
  },
  {
    code: "PHYS122",
    name: "Electricity and Magnetism",
    subject: "PHYS",
    level: 100,
    description: "An introductory course in electricity and magnetism for students intending to concentrate their future studies in the physical sciences or mathematics. Concepts include electrostatic force and potential, electric current and power, capacitors, DC circuits, magnetic force and fields, and Faraday’s Law.",
    prerequisiteRawText: "Complete 1 of the following Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) ECE105 - Classical Mechanics (0.50) PHYS115 - Mechanics (0.50) PHYS121 - Mechanics (0.50) Earned a minimum grade of 80% in each of the following: PHYS111 - Physics 1 (0.50)"
  },
  {
    code: "PHYS223",
    name: "Waves",
    subject: "PHYS",
    level: 200,
    description: "An introductory course in oscillations and waves and their importance to a wide variety of modern physics topics. Concepts include simple harmonic motion, resonance, damped harmonic motion, wave motion and interference, wave optics and diffraction, quantum mechanics.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) ECE105 - Classical Mechanics (0.50) PHYS115 - Mechanics (0.50) PHYS121 - Mechanics (0.50) Earned a minimum grade of 80% in each of the following: PHYS111 - Physics 1 (0.50) Must have completed at least 1 of the following: ECE205 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH116 - Calculus 1 for Engineering (0.50) MATH117 - Calculus 1 for Engineering (0.50) MATH127 - Calculus 1 for the Sciences (0.50) MATH137 - Calculus 1 for Honours Mathematics (0.50) MATH147 - Calculus 1 (Advanced Level) (0.50)"
  },
  {
    code: "PHYS233",
    name: "Introduction to Quantum Mechanics",
    subject: "PHYS",
    level: 200,
    description: "Introduction to quantization, wave-particle duality and the uncertainty principle The Schroedinger equation and solvable examples. Topics will include stationary states of particle-in-a-box, harmonic oscillator, and the hydrogen atom. Quantization of angular momentum and spin. Introduction to approximation methods including time-independent perturbation theory. Modern applications of quantum mechanics.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingMust have completed at least 1 of the following: ECE106 - Electricity and Magnetism (0.50)PHYS112 - Physics 2 (0.50)PHYS122 - Electricity and Magnetism (0.50)Must have completed the following: PHYS125Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50)MATH119 - Calculus 2 for Engineering (0.50)MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)"
  },
  {
    code: "PHYS234",
    name: "Quantum Physics 1",
    subject: "PHYS",
    level: 200,
    description: "Background of quantum physics. Introduction to formalism of quantum physics. Introduction to operators. Quantization, waves, and particles. Spins and Dirac notation. The uncertainty principle. The Schroedinger equation for one-dimensional problems: bound states in square wells, harmonic oscillator, transmission through barriers.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed the following: PHYS223 - Waves (0.50) Must have completed the following: PHYS122 (taken prior to fall 2026) Must have completed at least 1 of the following: MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) PHYS249 - Linear Algebra for Physics and Astronomy (0.50) Must have completed at least 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50)"
  },
  {
    code: "PHYS242",
    name: "Electricity and Magnetism 1",
    subject: "PHYS",
    level: 200,
    description: "Review of vector calculus. Electrostatic field in vacuum, Coulomb's law and the superposition principle, Maxwell's equations for the electrostatic field, electrostatic potential, magnetostatic field in vacuum, Maxwell's equations for the magnetostatic field, Biot-Savart law, vector potential, inductance.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: PHYS122 - Electricity and Magnetism (0.50) Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: ECE206 - Advanced Calculus 2 for Electrical Engineers (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) Complete all of the following Must have completed the following: AMATH231 - Calculus 4 (0.50) AMATH231 can be taken concurrently"
  },
  {
    code: "PHYS249",
    name: "Linear Algebra for Physics and Astronomy",
    subject: "PHYS",
    level: 200,
    description: "Vectors in 2- and 3-space and their geometry. Linear equations, matrices, and determinants. Introduction to vector spaces. Eigenvalues and diagonalization. Complex numbers.\nApplications to physics and astronomy, including use of Python libraries and implementation.\n",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS114 - Principles of Computing for Science (0.50)CS116 - Introduction to Computer Science 2 (0.50)CS136 - Elementary Algorithm Design and Data Abstraction (0.50)CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)Must have completed at least 1 of the following: PHYS112 - Physics 2 (0.50)PHYS122 - Electricity and Magnetism (0.50)"
  },
  {
    code: "PHYS334",
    name: "Quantum Physics 2",
    subject: "PHYS",
    level: 300,
    description: "Formalism of quantum mechanics. Operator approach to the harmonic oscillator. Quantum mechanics in three dimensions: Hydrogen atom, angular momentum and spin. Time-independent perturbation theory. Fine structure of hydrogen. Zeeman effect. Identical particles. The variational principle. Ground state of the helium atom. Applications in atomic and molecular physics.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50)AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)MATH228 - Differential Equations for Physics and Chemistry (0.50)Must have completed at least 1 of the following: MATH227 - Calculus 3 for Honours Physics (0.50)MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)Complete 1 of the followingMust have completed the following: PHYS234 - Quantum Physics 1 (0.50)Complete all of the followingMust have completed the following: CHEM356 - Introductory Quantum Mechanics (0.50)Must have completed at least 1 of the following: MATH114 - Linear Algebra for Science (0.50)MATH115 - Linear Algebra for Engineering (0.50)MATH136 - Linear Algebra 1 for Honours Mathematics (0.50)MATH146 - Linear Algebra 1 (Advanced Level) (0.50)PHYS249 - Linear Algebra for Physics and Astronomy (0.50)"
  },
  {
    code: "PHYS342",
    name: "Electricity and Magnetism 2",
    subject: "PHYS",
    level: 300,
    description: "Electric and magnetic fields in media, auxiliary fields, Maxwell's equations, electromagnetic waves, electric and magnetic properties of matter.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: PHYS242 - Electricity and Magnetism 1 (0.50) Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50)"
  },
  {
    code: "PHYS357",
    name: "Statistical Mechanics and Thermodynamics",
    subject: "PHYS",
    level: 300,
    description: "Temperature and thermodynamic equilibrium. Work, internal energy, heat. First law. Kinetic theory of gases and the Maxwell-Boltzmann distribution. Absolute temperature, reversibility, entropy and the second law. Thermodynamic potentials and Maxwell's relations. Phase transitions. Third Law. Fundamental principles of statistical mechanics including the microcanonical and canonical ensembles.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50) Must have completed at least 1 of the following: ECE206 - Advanced Calculus 2 for Electrical Engineers (0.50) MATH212 - Advanced Calculus 2 for Electrical Engineers (0.50) MATH217 - Calculus 3 for Chemical Engineering (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) NE217 - Advanced Calculus and Numerical Methods 2 (0.50) Must have completed at least 1 of the following: PHYS267 - Probability, Statistics, and Data Analysis for Physics and Astronomy (0.50) STAT220 - Probability (Non-Specialist Level) (0.50) STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Complete 1 of the following Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS121 - Mechanics (0.50) Earned a minimum grade of 80% in each of the following: PHYS111 - Physics 1 (0.50)"
  },
  {
    code: "PHYS359",
    name: "Statistical Mechanics",
    subject: "PHYS",
    level: 300,
    description: "Fundamental postulate of statistical thermodynamics. Entropy. Microcanonical, canonical, and grand canonical ensembles. Fermi-Dirac, Bose-Einstein, and Boltzmann Statistics. Maxwell-Boltzmann velocity distribution. Applications to specific heat of solids, classical and quantum gases, electrons in metals, Planck's law of radiation, and Bose-Einstein condensation.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CHEM254 - Introductory Chemical Thermodynamics (0.50) ECE403 - Thermal Physics (0.50) ME250 - Thermodynamics 1 (0.50) PHYS358 - Thermal Physics (0.50) Complete 1 of the following Must have completed at least 1 of the following: CHEM356 - Introductory Quantum Mechanics (0.50) PHYS233 - Introduction to Quantum Mechanics (0.50) PHYS234 - Quantum Physics 1 (0.50) See corequisite Complete 1 of the following Must have completed at least 1 of the following: CS114 - Principles of Computing for Science (0.50) CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Must have completed the following: PHYS236"
  },
  {
    code: "PHYS363",
    name: "Intermediate Classical Mechanics",
    subject: "PHYS",
    level: 300,
    description: "Non-inertial frames of reference. Calculus of variations. Lagrangian mechanics. Coupled oscillations and normal modes. Hamiltonian dynamics.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50) Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS263 - Classical Mechanics and Special Relativity (0.50) Complete 1 of the following Must have completed at least 1 of the following: CS114 - Principles of Computing for Science (0.50) CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Must have completed the following: PHYS236 Must have completed at least 1 of the following: MATH227 - Calculus 3 for Honours Physics (0.50) MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)"
  },
  {
    code: "PHYS380",
    name: "Molecular and Cellular Biophysics",
    subject: "PHYS",
    level: 300,
    description: "Cell structure and molecular composition; intermolecular interactions and hydration; protein structure and function; cytoskeletal filaments; DNA structure, packing and chromosomes; rate equations and biological dynamics (e.g., cytoskeletal polymerization); self-assembly; cell membranes; action potentials and biological electricity; molecular motors; cell motility.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: PHYS112 - Physics 2 (0.50) PHYS122 - Electricity and Magnetism (0.50) Must have completed at least 1 of the following: CHEM123 - General Chemistry 2 (0.50) CHEM125 - Chemical Reactions, Equilibria and Kinetics (0.50)"
  },
  {
    code: "PHYS444",
    name: "Subatomic Physics",
    subject: "PHYS",
    level: 400,
    description: "An introduction to modern particle and nuclear physics. Topics covered include symmetries, particle classification, experimental methods and tools, scattering, fundamental forces, and interactions. Other topics may include structure of the nucleus, structure of nucleons, proton decay, the Standard Model, and the Higgs mechanism.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: PHYS363 - Intermediate Classical Mechanics (0.50) Must have completed at least 1 of the following: AMATH373 - Quantum Theory 1 (0.50) PHYS334 - Quantum Physics 2 (0.50) Complete 1 of the following Complete all of the following Must have completed the following: AMATH351 - Ordinary Differential Equations (0.50) AMATH353 - Partial Differential Equations 1 (0.50) Must have completed at least 1 of the following: AMATH332 - Applied Complex Analysis (0.50) PMATH332 - Applied Complex Analysis (0.50) Must have completed the following: PHYS364 - Mathematical Physics 1 (0.50) PHYS365 - Mathematical Physics 2 (0.50)"
  },
  {
    code: "PHYS467",
    name: "Introduction to Quantum Information Processing",
    subject: "PHYS",
    level: 400,
    description: "Basics of computational complexity; basics of quantum information; quantum phenomena; quantum circuits and universality; relationship between quantum and classical complexity classes; simple quantum algorithms; quantum Fourier transform; Shor factoring algorithm; Grover search algorithm; physical realization of quantum computation; error-correction and fault-tolerance; quantum key distribution.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) PHYS334 - Quantum Physics 2 (0.50) Students must be in level 3A or higher"
  },
  {
    code: "PHYS468",
    name: "Physics of Quantum Computing",
    subject: "PHYS",
    level: 400,
    description: "Qubit operations (DiVincenzo criteria), hardware principles, and qubit diagnostic techniques. Survey of quantum hardware implementations such as photonic quantum computing, superconducting qubits, NMR, ion trap quantum computing, atomic quantum computing.",
    prerequisiteRawText: "Must have completed the following: PHYS334 - Quantum Physics 2 (0.50)"
  },
  {
    code: "PHYS474",
    name: "Galaxies",
    subject: "PHYS",
    level: 400,
    description: "Galaxy structure, formation and evolution. Dynamics and stellar populations; gas and dust; supermassive black holes; large-scale structure.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: PHYS375 - Stars (0.50) Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS263 - Classical Mechanics and Special Relativity (0.50) Students must be in level 4A or higher Enrolled in a program in Faculties of Mathematics or Science"
  },
  {
    code: "PHYS476",
    name: "Introduction to General Relativity",
    subject: "PHYS",
    level: 400,
    description: "Tensor analysis. Curved space-time and the Einstein field equations. The Schwarzschild solution and applications. The Friedmann-Robertson-Walker cosmological models.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: AMATH231 - Calculus 4 (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS263 - Classical Mechanics and Special Relativity (0.50) Students must be in level 4A or higher Enrolled in a program offered by the Faculties of Mathematics or Science"
  },
  {
    code: "PLAN281",
    name: "Introduction to Geographic Information Systems (GIS)",
    subject: "PLAN",
    level: 200,
    description: "Introduction to the fundamental concepts and use of Geographic Information Systems (GIS). Students learn about the nature of geographic information and how to store, manipulate and analyze spatial data in a range of application areas. Students will learn underlying theory in lectures and gain a working knowledge of GIS software in lab sessions.",
    prerequisiteRawText: "Complete 1 of the followingMust have completed at least 1 of the following: GDS181 - Designing Effective Maps (0.50)GDS187 - Geospatial Data Science (0.50)Must have completed at least 1 of the following: GEOG181, GEOG187Enrolled in H-Planning"
  },
  {
    code: "PMATH320",
    name: "Euclidean Geometry",
    subject: "PMATH",
    level: 300,
    description: "Euclid's axioms, triangle centres, conic sections, compass-and-straightedge constructions, isometries of the Euclidean plane and of Euclidean space, regular and star-shaped polygons, tessellations of the Euclidean plane, regular and quasi-regular polyhedra, symmetries of polygons and polyhedra, four-dimensional polytopes, sphere packings, and the kissing problem. Applications.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) MATH215 - Linear Algebra for Engineering (0.50) NE112 - Linear Algebra for Nanotechnology Engineers (0.50) Complete 1 of the following Must have completed at least 1 of the following: MATH104 - Introductory Calculus for Arts and Social Science (0.50) MATH116 - Calculus 1 for Engineering (0.50) MATH117 - Calculus 1 for Engineering (0.50) MATH124 - Calculus and Vector Algebra for Kinesiology (0.50) MATH127 - Calculus 1 for the Sciences (0.50) MATH137 - Calculus 1 for Honours Mathematics (0.50) MATH147 - Calculus 1 (Advanced Level) (0.50) Must have completed the following: MATH109"
  },
  {
    code: "PMATH321",
    name: "Non-Euclidean Geometry",
    subject: "PMATH",
    level: 300,
    description: "An introduction to three types of non-Euclidean geometry: spherical, projective, and hyperbolic geometry. Lines, distances, circles, triangles, and areas in these non-Euclidean spaces. Conic sections in the projective plane. Inversions and orthogonal circles. Models of the hyperbolic plane (such as the Poincaré disc model or the upper-half plane model). Tilings of the hyperbolic plane.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) MATH215 - Linear Algebra for Engineering (0.50) NE112 - Linear Algebra for Nanotechnology Engineers (0.50) Complete 1 of the following Must have completed at least 1 of the following: MATH104 - Introductory Calculus for Arts and Social Science (0.50) MATH116 - Calculus 1 for Engineering (0.50) MATH117 - Calculus 1 for Engineering (0.50) MATH124 - Calculus and Vector Algebra for Kinesiology (0.50) MATH127 - Calculus 1 for the Sciences (0.50) MATH137 - Calculus 1 for Honours Mathematics (0.50) MATH147 - Calculus 1 (Advanced Level) (0.50) Must have completed the following: MATH109"
  },
  {
    code: "PMATH330",
    name: "Introduction to Mathematical Logic",
    subject: "PMATH",
    level: 300,
    description: "A broad introduction to mathematical logic. The notions of logical consequence and derivation are introduced in the settings of propositional and first order logic, with discussions of the completeness theorem and satisfiability",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50) MATH145 - Algebra (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH225 - Applied Linear Algebra 2 (0.50) MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50)"
  },
  {
    code: "PMATH331",
    name: "Applied Real Analysis",
    subject: "PMATH",
    level: 300,
    description: "Topology of Euclidean spaces, continuity, norms, completeness. Contraction mapping principle. Fourier series. Various applications, for example, to ordinary differential equations, optimization and numerical approximation.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)"
  },
  {
    code: "PMATH332",
    name: "Applied Complex Analysis",
    subject: "PMATH",
    level: 300,
    description: "Complex numbers, Cauchy-Riemann equations, analytic functions, conformal maps and applications to the solution of Laplace's equation, contour integrals, Cauchy integral formula, Taylor and Laurent expansions, residue calculus and applications.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)"
  },
  {
    code: "PMATH333",
    name: "Introduction to Real Analysis",
    subject: "PMATH",
    level: 300,
    description: "This course is designed to enable students who did not take the MATH147/MATH148/MATH247 sequence of advanced calculus courses to fill in the missing gaps from analysis needed to prepare them for studying further topics in analysis in PMATH351/PMATH352. Topics discussed include: completeness of the real numbers, supremum and infimum, sequences and the Bolzano-Weierstrass theorem; the topology of Euclidean space: open, closed, connected, and compact sets, the intermediate value theorem, the Heine-Borel theorem, and the extreme value theorem; continuity and uniform continuity, sequences of functions and uniform convergence; the Riemann integral over rectangles and the integrability of continuous functions.",
    prerequisiteRawText: "Complete 1 of the following Must have completed the following: MATH148 - Calculus 2 (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: MATH128 - Calculus 2 for the Sciences (0.50) Earned a minimum grade of 60% in each of the following: MATH138 - Calculus 2 for Honours Mathematics (0.50)"
  },
  {
    code: "PMATH334",
    name: "Introduction to Rings and Fields with Applications",
    subject: "PMATH",
    level: 300,
    description: "Rings, ideals, factor rings, homomorphisms, finite and infinite fields, polynomials and roots, field extensions, algebraic numbers, and applications, for example, to Latin squares, finite geometries, geometrical constructions, error-correcting codes.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50)"
  },
  {
    code: "PMATH336",
    name: "Introduction to Group Theory with Applications",
    subject: "PMATH",
    level: 300,
    description: "Groups, permutation groups, subgroups, homomorphisms, symmetry groups in two and three dimensions, direct products, Polya-Burnside enumeration.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50)"
  },
  {
    code: "PMATH340",
    name: "Elementary Number Theory",
    subject: "PMATH",
    level: 300,
    description: "An elementary approach to the theory of numbers; the Euclidean algorithm, congruence equations, multiplicative functions, solutions to Diophantine equations, continued fractions, and rational approximations to real numbers.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50) MATH145 - Algebra (Advanced Level) (0.50) MATH225 - Applied Linear Algebra 2 (0.50)"
  },
  {
    code: "PMATH343",
    name: "Introduction to the Mathematics of Quantum Information",
    subject: "PMATH",
    level: 300,
    description: "Finite dimensional Hilbert spaces. Unitary operators and evolution of closed systems. Hermitian and positive operators, observables, measurements, and the uncertainty principle. Tensor products, entanglement, and Bell inequalities. Superdense coding, teleportation, and the no-cloning theorem. Ensembles of states, density matrices, and the partial trace. Quantum channels, the Choi-Jamiolkowski isomorphism, and the Choi-Krauss representation. Purification and distance between states.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50)"
  },
  {
    code: "PMATH347",
    name: "Groups and Rings",
    subject: "PMATH",
    level: 300,
    description: "Groups, subgroups, homomorphisms and quotient groups, isomorphism theorems, group actions, Cayley and Lagrange theorems, permutation groups, Sylow theorems, and the fundamental theorem of finite abelian groups. Elementary properties of rings, subrings, ideals, homomorphisms and quotients, isomorphism theorems, and polynomial rings.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50)"
  },
  {
    code: "PMATH348",
    name: "Fields and Galois Theory",
    subject: "PMATH",
    level: 300,
    description: "Unique factorization domains, Gauss's lemma, and Eisenstein's criterion. Fields, algebraic and transcendental extensions, minimal polynomials, splitting fields, and the structure of finite fields. Galois theory. Solvable groups and the insolvability of the quintic.",
    prerequisiteRawText: "Must have completed the following: PMATH347 - Groups and Rings (0.50)"
  },
  {
    code: "PMATH351",
    name: "Real Analysis",
    subject: "PMATH",
    level: 300,
    description: "Cardinality, countable and uncountable sets, normed spaces and metric spaces, open sets, continuous mappings, finite-dimensional normed spaces, sequence and function spaces, completeness, contraction mappings and the Banach fixed-point theorem, the Baire category theorem, compactness of metric spaces, the Arzela-Ascoli theorem, and the Stone-Weierstrass theorem.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH247 - Calculus 3 (Advanced Level) (0.50) PMATH333 - Introduction to Real Analysis (0.50)",
    prerequisite: {
      type: "anyOf",
      requirements: [
        {
          type: "course",
          courseCode: "MATH247"
        },
        {
          type: "course",
          courseCode: "PMATH333"
        }
      ]
    }
  },
  {
    code: "PMATH352",
    name: "Complex Analysis",
    subject: "PMATH",
    level: 300,
    description: "Analytic functions, Cauchy-Riemann equations, Goursat's theorem, Cauchy's theorems, Morera's theorem, Liouville's theorem, maximum modulus principle, harmonic functions, Schwarz's lemma, isolated singularities, Laurent series, residue theorem.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH247 - Calculus 3 (Advanced Level) (0.50) PMATH333 - Introduction to Real Analysis (0.50)"
  },
  {
    code: "PMATH365",
    name: "Differential Geometry",
    subject: "PMATH",
    level: 300,
    description: "Curves and hypersurfaces in Euclidean space; integration and Stokes' Theorem; Gaussian and mean curvatures; Frenet-Serret frames and geodesics; Gauss-Bonnet Theorem.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)"
  },
  {
    code: "PMATH367",
    name: "Topology",
    subject: "PMATH",
    level: 300,
    description: "Topological spaces, bases, and Hausdorff spaces. Subspace, product, and quotient topologies. Continuous maps, compactness, connectedness, and path-connectedness. Topological manifolds. The fundamental group, the Seifert-Van Kampen Theorem, and covering spaces.",
    prerequisiteRawText: "Must have completed at least 1 of the following: PMATH336 - Introduction to Group Theory with Applications (0.50) PMATH347 - Groups and Rings (0.50)"
  },
  {
    code: "PMATH370",
    name: "Chaos and Fractals",
    subject: "PMATH",
    level: 300,
    description: "The mathematics of iterated functions, properties of discrete dynamical systems, Mandelbrot and Julia sets.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) MATH225 - Applied Linear Algebra 2 (0.50) Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50)"
  },
  {
    code: "PMATH432",
    name: "Mathematical Logic",
    subject: "PMATH",
    level: 400,
    description: "First-order languages and structures, syntactic provability and semantic truth, the soundness and completeness theorems, compactness and its consequences, elementary equivalence, the ZFC axioms of set theory, ordinals, cardinals, computability, and Gödel's incompleteness theorem.",
    prerequisiteRawText: "Must have completed the following: PMATH347 - Groups and Rings (0.50)"
  },
  {
    code: "PMATH440",
    name: "Analytic Number Theory",
    subject: "PMATH",
    level: 400,
    description: "Summation methods, analytic theory of the Riemann zeta function, Prime Number Theorem, primitive roots. Dirichlet characters and infinitude of primes in arithmetic progressions, and assorted topics.",
    prerequisiteRawText: "Must have completed the following: PMATH352 - Complex Analysis (0.50)"
  },
  {
    code: "PMATH441",
    name: "Algebraic Number Theory",
    subject: "PMATH",
    level: 400,
    description: "An introduction to algebraic number theory; unique factorization, Dedekind domains, class numbers, Dirichlet's unit theorem, solutions of Diophantine equations.",
    prerequisiteRawText: "Must have completed the following: PMATH348 - Fields and Galois Theory (0.50)"
  },
  {
    code: "PMATH450",
    name: "Measure Theory",
    subject: "PMATH",
    level: 400,
    description: "Review of Riemann integration. Measure spaces: sigma-algebras, Borel sets, outer measure, Caratheodory condition, Lebesgue-Steiltjes measures, translation invariance and regularity of Lebesgue measure. Measurable functions: simple approximation, Egorov's and Lusin's theorems. Integration: monotone convergence theorem, Fatou's lemma, Lebesgue dominated convergence theorem. Signed measures: Hahn and Jordan decompositions, absolute continuity of measures, Radon-Nikodym theorem. Lp spaces: completeness, separability, Riesz representation theorem.",
    prerequisiteRawText: "Must have completed the following: PMATH351 - Real Analysis (0.50)",
    prerequisite: {
      type: "course",
      courseCode: "PMATH351"
    }
  },
  {
    code: "PMATH453",
    name: "Functional Analysis",
    subject: "PMATH",
    level: 400,
    description: "Banach and Hilbert spaces, bounded linear maps, Hahn-Banach theorem, open mapping theorem, closed graph theorem, topologies, nets, Hausdorff spaces, dual spaces, weak topologies, Tychonoff's theorem, Banach-Alaoglu theorem, reflexive spaces.",
    prerequisiteRawText: "Must have completed the following: PMATH450 - Measure Theory (0.50)"
  },
  {
    code: "PSYCH101",
    name: "Introductory Psychology",
    subject: "PSYCH",
    level: 100,
    description: "A general survey course designed to provide the student with an understanding of the basic concepts and techniques of modern psychology as a behavioural science."
  },
  {
    code: "PSYCH101R",
    name: "Introductory Psychology",
    subject: "PSYCH",
    level: 100,
    description: "A general survey course designed to provide the student with an understanding of the basic concepts and techniques of modern psychology as a behavioural science."
  },
  {
    code: "PSYCH207",
    name: "Cognitive Processes",
    subject: "PSYCH",
    level: 200,
    description: "An examination and evaluation of selected topics dealing with human information processing such as attention, memory, pattern recognition, consciousness, language, dyslexia, decision making, and problem solving.",
    prerequisiteRawText: "Students must be in level 1B or higher"
  },
  {
    code: "PSYCH211",
    name: "Developmental Psychology",
    subject: "PSYCH",
    level: 200,
    description: "A course designed to introduce the student to current research and theory concerning children's social, cognitive, and physical development from infancy through childhood to early adolescence.",
    prerequisiteRawText: "Must have completed at least 1 of the following: PSYCH101 - Introductory Psychology (0.50) PSYCH101R - Introductory Psychology (0.50)"
  },
  {
    code: "PSYCH212",
    name: "Educational Psychology",
    subject: "PSYCH",
    level: 200,
    description: "A consideration of the main variables affecting learning in the classroom with special focus upon the conditions essential to efficient learning.",
    prerequisiteRawText: "Must have completed at least 1 of the following: PSYCH101 - Introductory Psychology (0.50) PSYCH101R - Introductory Psychology (0.50)"
  },
  {
    code: "PSYCH212R",
    name: "Educational Psychology",
    subject: "PSYCH",
    level: 200,
    description: "A consideration of the main variables affecting learning in the classroom with special focus upon the conditions essential to efficient learning.",
    prerequisiteRawText: "Must have completed at least 1 of the following: PSYCH101 - Introductory Psychology (0.50) PSYCH101R - Introductory Psychology (0.50)"
  },
  {
    code: "PSYCH238",
    name: "Organizational Psychology",
    subject: "PSYCH",
    level: 200,
    description: "Survey of organizational, group, and individual processes involved in work motivation, group dynamics, leadership, organizational climate, and organizational culture.",
    prerequisiteRawText: "Students must be in level 1B or higher"
  },
  {
    code: "PSYCH261",
    name: "Physiological Psychology",
    subject: "PSYCH",
    level: 200,
    description: "Introduction to brain, basic physiological processes, and their roles in behaviour. Topics may include sensing and perceiving, neural bases of action, motivation, learning and memory, and consciousness. Both experimental and clinical data are considered.",
    prerequisiteRawText: "Students must be in level 1B or higher"
  },
  {
    code: "PSYCH339",
    name: "Personnel Psychology",
    subject: "PSYCH",
    level: 300,
    description: "The application of psychology to human resource issues in Canadian organizations. Topics will include defining and measuring job performance, job analysis, performance appraisal, recruitment, personnel selection, and training. Procedures which meet technical, professional, and legal standards will be examined.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: PSYCH101 - Introductory Psychology (0.50)PSYCH101R - Introductory Psychology (0.50)PSYCH238 - Organizational Psychology (0.50)Complete 1 of the followingMust have completed the following: PSYCH291 - Basic Research Methods (0.50)Students must be in level 3A or higher"
  },
  {
    code: "SCI205",
    name: "Climate Change Fundamentals",
    subject: "SCI",
    level: 200,
    description: "Climate change is one of the most profound environmental and social issues affecting communities, nations and individuals. This course is an introduction to this global challenge, including its scientific underpinnings, history, potential impacts on natural systems and human societies around the world, and two societal responses: adaptation and greenhouse gas mitigation. Opportunities to develop sustainable resilient communities, as well as Canadian climate change policy responses, will be highlighted."
  },
  {
    code: "SE212",
    name: "Logic and Computation",
    subject: "SE",
    level: 200,
    description: "Formal logic. Proof systems and styles. Rudimentary model theory. Formal models of computation. Logic-based specification. Correctness proofs. Applications in software engineering.",
    prerequisiteRawText: "Must have completed the following: CS138 - Introduction to Data Abstraction and Implementation (0.50)MATH135 - Algebra for Honours Mathematics (0.50)"
  },
  {
    code: "SE380",
    name: "Introduction to Feedback Control",
    subject: "SE",
    level: 300,
    description: "Introduction to control systems. Advantages of closed-loop feedback systems. The role of the system mathematical model. Block diagrams and signal flow graphs. The basic control system design problem, stability in control systems. Frequency response analysis techniques. Root-locus analysis. Elementary lead-lag compensation.",
    prerequisiteRawText: "Must have completed the following: MATH213 - Signals, Systems, and Differential Equations (0.50)"
  },
  {
    code: "SE463",
    name: "Software Project Management, Requirements, and Analysis",
    subject: "SE",
    level: 400,
    description: "Introduces students to the requirements definition phase of software development; models, notations, and processes for software requirements, identification, representation, analysis, and validation. Cost estimation from early documents and specifications. Students undertake a substantial customer-driven group project as part of SE490/SE491 design-project sequence covering all major phases of the software engineering life cycle; they decide on a project concept, complete a project-approval process, and develop high-level requirements for the project using all the tools covered in the course. Social, legal, and economic factors are considered.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingMust have completed at least 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)CS247 - Software Engineering Principles (0.50)ECE250 - Algorithms and Data Structures (0.50)MSE342 - Principles of Software Engineering (0.50)SYDE322 - Software Design (0.50)Must have completed the following: MSCI342Enrolled in Computer Engineering Option, Computing Option, H-Software Engineering, or Software Engineering Option"
  },
  {
    code: "SE464",
    name: "Software Design and Architectures",
    subject: "SE",
    level: 400,
    description: "Introduces students to the design, implementation, and evolution phases of software development. Software design processes, methods, and notation. Implementation of designs. Evolution of designs and implementations. Management of design activities.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)CS247 - Software Engineering Principles (0.50)Enrolled in H-Software Engineering"
  },
  {
    code: "SE465",
    name: "Software Testing and Quality Assurance",
    subject: "SE",
    level: 400,
    description: "Introduces students to systematic testing of software systems. Software verification, reviews, metrics, quality assurance, and prediction of software reliability and availability. Related management issues.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: CS246 - Object-Oriented Software Development (0.50)CS246E - Object-Oriented Software Development (Enriched) (0.50)CS247 - Software Engineering Principles (0.50)Enrolled in H-Software Engineering"
  },
  {
    code: "SOC232",
    name: "Technology and Social Change",
    subject: "SOC",
    level: 200,
    description: "This course examines how forms of society influence technological developments and, reciprocally, how society is influenced by technology. It covers such topics as the de-skilling of work, technocracy, communications technology, and cyberspace, from an historical perspective, looking for the unifying features of technologies ranging from Stone Age tools to the microprocessor.",
    prerequisiteRawText: "Must have completed at least 1 of the following: SOC101 - Introduction to Sociology (0.50)SOC101R - Introduction to Sociology (0.50)"
  },
  {
    code: "SOC324",
    name: "Digital Cultures",
    subject: "SOC",
    level: 300,
    description: "In this course students will develop a sociological lens to examine the intersection of technology and digital cultures. Students will unpack and problematize key terms, ideas, and discourse associated with digital cultures. Learning outcomes include examining how popular technology discourse both structures social action and obscures underlying relations of power and inequality. Sample topics students will work on include critical investigations of \"smart\" technologies and cities, online communities, maker cultures, sharing and platform societies, as well as automation and gig work.",
    prerequisiteRawText: "Must have completed at least 1 of the following: SOC101 - Introduction to Sociology (0.50)SOC101R - Introduction to Sociology (0.50)"
  },
  {
    code: "SPCOM223",
    name: "Calculus 2 for the Sciences",
    subject: "SPCOM",
    level: 200
  },
  {
    code: "STAT220",
    name: "Probability (Non-Specialist Level)",
    subject: "STAT",
    level: 200,
    description: "The laws of probability, discrete and continuous random variables, expectation, central limit theorem.",
    prerequisiteRawText: "Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50)MATH119 - Calculus 2 for Engineering (0.50)MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)"
  },
  {
    code: "STAT221",
    name: "Statistics (Non-Specialist Level)",
    subject: "STAT",
    level: 200,
    description: "Empirical problem solving, measurement systems, causal relationships, statistical models, estimation, confidence intervals, tests of significance.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50)MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)Must have completed at least 1 of the following: STAT220 - Probability (Non-Specialist Level) (0.50)STAT230 - Probability (0.50)STAT240 - Probability (Advanced Level) (0.50)"
  },
  {
    code: "STAT230",
    name: "Probability",
    subject: "STAT",
    level: 200,
    description: "This course provides an introduction to probability models including sample spaces, mutually exclusive and independent events, conditional probability and Bayes' Theorem. The named distributions (Discrete Uniform, Hypergeometric, Binomial, Negative Binomial, Geometric, Poisson, Continuous Uniform, Exponential, Normal (Gaussian), and Multinomial) are used to model real phenomena. Discrete and continuous univariate random variables and their distributions are discussed. Joint probability functions, marginal probability functions, and conditional probability functions of two or more discrete random variables and functions of random variables are also discussed. Students learn how to calculate and interpret means, variances and covariances particularly for the named distributions. The Central Limit Theorem is used to approximate probabilities.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: MATH128 - Calculus 2 for the Sciences (0.50) Earned a minimum grade of 80% in at least 1 of the following: MATH116 - Calculus 1 for Engineering (0.50) MATH117 - Calculus 1 for Engineering (0.50) MATH137 - Calculus 1 for Honours Mathematics (0.50) MATH147 - Calculus 1 (Advanced Level) (0.50) Complete 1 of the following Enrolled in H-Mathematical Physics (BMath) , or H-Mathematical Physics (BSc) Enrolled in an Honours Mathematics program",
    prerequisite: {
      type: "anyOf",
      requirements: [
        {
          type: "course",
          courseCode: "MATH128",
          minGrade: 60
        },
        {
          type: "course",
          courseCode: "MATH138"
        },
        {
          type: "course",
          courseCode: "MATH148"
        }
      ]
    }
  },
  {
    code: "STAT231",
    name: "Statistics",
    subject: "STAT",
    level: 200,
    description: "This course provides a systematic approach to empirical problem solving which will enable students to critically assess the sampling protocol and conclusions of an empirical study including the possible sources of error in the study and whether evidence of a causal relationship can be reasonably concluded.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Complete 1 of the following Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: STAT220 - Probability (Non-Specialist Level) (0.50)",
    prerequisite: {
      type: "allOf",
      requirements: [
        {
          type: "anyOf",
          requirements: [
            {
              type: "course",
              courseCode: "MATH128"
            },
            {
              type: "course",
              courseCode: "MATH138"
            },
            {
              type: "course",
              courseCode: "MATH148"
            }
          ]
        },
        {
          type: "course",
          courseCode: "STAT230"
        }
      ]
    }
  },
  {
    code: "STAT240",
    name: "Probability (Advanced Level)",
    subject: "STAT",
    level: 200,
    description: "STAT240 is an advanced-level enriched version of STAT230.",
    prerequisiteRawText: "Complete all of the followingComplete 1 of the followingMust have completed at least 1 of the following: MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)Earned a minimum grade of 80% in at least 1 of the following: MATH137 - Calculus 1 for Honours Mathematics (0.50)MATH147 - Calculus 1 (Advanced Level) (0.50)Enrolled in an Honours Mathematics program"
  },
  {
    code: "STAT241",
    name: "Statistics (Advanced Level)",
    subject: "STAT",
    level: 200,
    description: "STAT241 is an advanced-level enriched version of STAT231.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)Must have completed at least 1 of the following: STAT230 - Probability (0.50)STAT240 - Probability (Advanced Level) (0.50)Enrolled in an Honours Mathematics program"
  },
  {
    code: "STAT321",
    name: "Regression and Forecasting (Non-Specialist Level)",
    subject: "STAT",
    level: 300,
    description: "Modelling the relationship between a response variable and several explanatory variables via regression models. Model diagnostics and improvement. Using regression models for forecasting, Exponential smoothing. Simple time series modelling.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH225 - Applied Linear Algebra 2 (0.50) MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)"
  },
  {
    code: "STAT322",
    name: "Sampling and Experimental Design (Non-Specialist Level)",
    subject: "STAT",
    level: 300,
    description: "Planning sample surveys; simple random sampling; stratified sampling. Observational and experimental studies. Blocking, randomization, factorial designs. Analysis of variance. Applications of design principles.",
    prerequisiteRawText: "Must have completed at least 1 of the following: STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)"
  },
  {
    code: "STAT330",
    name: "Mathematical Statistics",
    subject: "STAT",
    level: 300,
    description: "This course provides a mathematically rigorous treatment for topics covered in STAT230 and 231, and to make essential extensions to the multivariate case. Maximum likelihood estimation. Random variables and distribution theory. Generating functions. Functions of random variables. Limiting distributions. Large sample theory of likelihood methods. Likelihood ratio tests. Joint probability (density) functions, marginal probability (density) functions, and conditional probability (density) functions of two or more random variables are discussed. Topics covered include independence of random variables, conditional expectation and the determination of the distribution of functions of random variables using the cumulative distribution method, change of variable and moment generating functions. Properties of the Multinomial and Bivariate Normal distributions are proved. Limiting distributions, including convergence in probability and convergence in distribution, are discussed. Important results, including the Weak Law of Large Numbers, Central Limit Theorem, Slutsky's theorem, and the Delta Method, are introduced with applications. The maximum likelihood method is discussed for the multi-parameter case. Asymptotic properties of the maximum likelihood estimator are examined and used to construct confidence intervals or regions. Tests for simple and composite hypotheses are constructed using the Likelihood Ratio Test.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT230 - Probability (0.50)"
  },
  {
    code: "STAT331",
    name: "Applied Linear Models",
    subject: "STAT",
    level: 300,
    description: "Modelling the relationship between a response variable and several explanatory variables (an output-input system) via regression models. Least squares algorithm for estimation of parameters. Hypothesis testing and prediction. Model diagnostics and improvement. Algorithms for variable selection. Nonlinear regression and other methods.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: SYDE212 - Probability, Statistics, and Data Science (0.50) Earned a minimum grade of 60% in each of the following: STAT231 - Statistics (0.50)",
    prerequisite: {
      type: "course",
      courseCode: "STAT231",
      minGrade: 60
    }
  },
  {
    code: "STAT332",
    name: "Sampling and Experimental Design",
    subject: "STAT",
    level: 300,
    description: "Designing sample surveys. Probability sampling designs. Estimation with elementary designs. Observational and experimental studies. Blocking, randomization, factorial designs. Analysis of variance. Designing for comparison of groups.",
    prerequisiteRawText: "Complete 1 of the following Must have completed the following: STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: SYDE212 - Probability, Statistics, and Data Science (0.50) Earned a minimum grade of 60% in each of the following: STAT231 - Statistics (0.50)"
  },
  {
    code: "STAT333",
    name: "Stochastic Processes 1",
    subject: "STAT",
    level: 300,
    description: "This course provides an introduction to stochastic processes, with an emphasis on regenerative phenomena. Topics cover generating functions, conditional probability distributions and conditional expectation, discrete-time Markov chains with a countable state space, limit distributions for ergodic and absorbing chains, applications including the random walk, the gambler's ruin problem, and the Galton-Watson branching process, an introduction to counting processes, connections between the exponential distribution and Poisson process, and non-homogeneous and compound Poisson processes.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT230 - Probability (0.50)"
  },
  {
    code: "STAT334",
    name: "Probability Models for Business and Accounting",
    subject: "STAT",
    level: 300,
    description: "Random variables and distribution theory, conditional expectations, moment and probability generating functions, change of variables, random walks, Markov chains, Markov processes.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50)MATH247 - Calculus 3 (Advanced Level) (0.50)Must have completed at least 1 of the following: STAT231 - Statistics (0.50)STAT241 - Statistics (Advanced Level) (0.50)Complete 1 of the followingMust have completed the following: STAT240 - Probability (Advanced Level) (0.50)Earned a minimum grade of 60% in each of the following: STAT230 - Probability (0.50)Enrolled in H-BBA & BMath Double Degree, H-Mathematics/Business Administration, or H-Mathematics/Chartered Professional Accountancy"
  },
  {
    code: "STAT337",
    name: "Introduction to Biostatistics",
    subject: "STAT",
    level: 300,
    description: "This course will provide an introduction to statistical methods in health research. Topics to be covered include types of medical data, measures of disease prevalence and incidence, age and sex adjustment of disease rates, sensitivity and specificity of diagnostic tests, ROC curves, measures of association between risk factors and disease, major sources of medical data in the Canadian context including surveys, registries, and clinical studies such as cohort studies, clinical trials and case-control studies. Papers from the medical literature will be used throughout to illustrate the concepts. Introduction to SAS for data analysis and an introduction to database management tools.",
    prerequisiteRawText: "Complete 1 of the following Must have completed at least 1 of the following: STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT221 - Statistics (Non-Specialist Level) (0.50)"
  },
  {
    code: "STAT340",
    name: "Stochastic Simulation Methods",
    subject: "STAT",
    level: 300,
    description: "Random variate generation in the univariate and multivariate case, Monte Carlo integration, advanced computer implementation, variance reduction, statistical analysis of simulated data, extensions to challenging simulation problems. Mathematical treatment of the underlying stochastic concepts and proofs.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50) SYDE322 - Software Design (0.50) Must have completed at least 1 of the following: STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT230 - Probability (0.50)"
  },
  {
    code: "STAT341",
    name: "Computational Statistics and Data Analysis",
    subject: "STAT",
    level: 300,
    description: "A computationally focused approach to statistical reasoning in the context of real data. Functional programming in R and algorithms will be used to define interesting attributes of finite populations and their sampling characteristics. Computational approaches to inductive inference and the assessment of predictive accuracy.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT230 - Probability (0.50)"
  },
  {
    code: "STAT371",
    name: "Applied Linear Models and Process Improvement for Business",
    subject: "STAT",
    level: 300,
    description: "Practical and theoretical aspects of simple and multiple linear regression models. Model building, fitting, and assessment. Process thinking and improvement. Strategies for variation reduction such as control charting. Process monitoring, control, and adjustment. Applications to problems in business.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT231 - Statistics (0.50) Enrolled in H-BBA & BMath Double Degree , H-Information Technology Management , H-Mathematical Optimization - Business Specialization , H-Mathematics/Business Administration , H-Math/FARM - Chartered Financial Analyst Spec , or H-Math/FARM - Professional Risk Management Spec"
  },
  {
    code: "STAT372",
    name: "Survey Sampling and Experimental Design Techniques for Business",
    subject: "STAT",
    level: 300,
    description: "Design and analysis of surveys. Management of sample and non-sample error. Simple random sampling and stratified random sampling. Additional topics in survey sampling. Observational and experimental studies. Principles for the design of experiments. Analysis of variance, factorial experiments, and interaction. Application to problems in business.",
    prerequisiteRawText: "Complete all of the following Complete 1 of the following Must have completed the following: STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT231 - Statistics (0.50) Enrolled in H-BBA & BMath Double Degree , H-Information Technology Management , H-Mathematical Optimization - Business Specialization , H-Mathematics/Business Administration , H-Math/FARM - Chartered Financial Analyst Spec , or H-Math/FARM - Professional Risk Management Spec"
  },
  {
    code: "STAT374",
    name: "Quantitative Foundations for Finance",
    subject: "STAT",
    level: 300,
    description: "This course introduces analytical and statistical methods commonly used in finance, with applications to investment management and corporate finance.",
    prerequisiteRawText: "Complete all of the followingMust have completed the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50)Complete 1 of the followingMust have completed the following: STAT241 - Statistics (Advanced Level) (0.50)Earned a minimum grade of 60% in each of the following: STAT231 - Statistics (0.50)Enrolled in H-Computing & Financial Management, or H-Mathematics/Chartered Professional Accountancy"
  },
  {
    code: "STAT430",
    name: "Experimental Design",
    subject: "STAT",
    level: 400,
    description: "Review of experimental designs in a regression setting; analysis of variance; replication, balance, blocking, randomization, and interaction; one-way layout, two-way layout, and Latin square as special cases; factorial structure of treatments; covariates; treatment contrasts; two-level fractional factorial designs; fixed versus random effects; split-plot and repeated-measures designs; other topics.",
    prerequisiteRawText: "Complete all of the following Must have completed at least 1 of the following: STAT331 - Applied Linear Models (0.50) STAT371 - Applied Linear Models and Process Improvement for Business (0.50) Must have completed at least 1 of the following: STAT332 - Sampling and Experimental Design (0.50) STAT372 - Survey Sampling and Experimental Design Techniques for Business (0.50)"
  },
  {
    code: "STAT431",
    name: "Generalized Linear Models and their Applications",
    subject: "STAT",
    level: 400,
    description: "Review of the normal linear model and maximum likelihood estimation; regression models for binomial, Poisson and multinomial data; generalized linear models; and other topics in regression modelling.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: STAT330 - Mathematical Statistics (0.50) Must have completed at least 1 of the following: STAT331 - Applied Linear Models (0.50) STAT371 - Applied Linear Models and Process Improvement for Business (0.50)"
  },
  {
    code: "STAT433",
    name: "Stochastic Processes 2",
    subject: "STAT",
    level: 400,
    description: "This course provides further ideas and methods in stochastic modelling, with an emphasis on continuous-time stochastic processes. Topics cover time to absorption based quantities and discrete phase-type distributions of discrete-time Markov chains, continuous-time Markov chains with a countable state space, limit distributions for ergodic and absorbing chains, and applications including birth and death processes and queueing models of practical interest. Other topics may include continuous phase-type distributions, renewal theory and limit theorems for regenerative processes, and phase-type renewal processes.",
    prerequisiteRawText: "Must have completed the following: STAT333 - Stochastic Processes 1 (0.50)"
  },
  {
    code: "STAT436",
    name: "Introduction to the Analysis of Spatial Data in Health Research",
    subject: "STAT",
    level: 400,
    description: "The objective of this course is to develop understanding and working knowledge of spatial models and analysis of spatial data. The course provides an introduction to the rudiments of statistical inference based on spatially correlated data. Methods of estimation and testing will be developed for geostatistical models based on variograms and spatial autogressive models. Concepts and application of methods will be emphasized through case studies and projects with health applications.",
    prerequisiteRawText: "Must have completed the following: STAT431 - Generalized Linear Models and their Applications (0.50)"
  },
  {
    code: "STAT437",
    name: "Statistical Methods for Life History Analysis",
    subject: "STAT",
    level: 400,
    description: "Statistical methods for the analysis of longitudinal data; hierarchical models, marginal models, and transitional models. Parametric and semiparametric methods for the analysis of survival data under censoring and truncation.",
    prerequisiteRawText: "Must have completed the following: STAT431 - Generalized Linear Models and their Applications (0.50)"
  },
  {
    code: "STAT438",
    name: "Advanced Methods in Biostatistics",
    subject: "STAT",
    level: 400,
    description: "Causal inference methodologies including propensity score matching and inverse probability weighting. Methods for handling incomplete data and covariate measurement error; likelihood based on joint models, estimating functions.",
    prerequisiteRawText: "Must have completed the following: STAT431 - Generalized Linear Models and their Applications (0.50)"
  },
  {
    code: "STAT440",
    name: "Computational Inference",
    subject: "STAT",
    level: 400,
    description: "Introduction to and application of computational methods in statistical inference. Monte Carlo evaluation of statistical procedures, exploration of the likelihood function through graphical and optimization techniques. Topics include expectation-maximization, Bootstrapping, Markov Chain Monte Carlo, and other computationally intensive methods.",
    prerequisiteRawText: "Must have completed the following: STAT330 - Mathematical Statistics (0.50) STAT341 - Computational Statistics and Data Analysis (0.50)"
  },
  {
    code: "STAT441",
    name: "Statistical Learning - Classification",
    subject: "STAT",
    level: 400,
    description: "Classification is the problem of predicting a discrete outcome from a set of explanatory variables. Main topics include logistic regression, neural networks, tree-based methods, support vector machines, and nearest neighbour methods. Other topics include model assessment, training, and tuning.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: STAT341 - Computational Statistics and Data Analysis (0.50) Must have completed at least 1 of the following: STAT331 - Applied Linear Models (0.50) STAT371 - Applied Linear Models and Process Improvement for Business (0.50)"
  },
  {
    code: "STAT442",
    name: "Data Visualization",
    subject: "STAT",
    level: 400,
    description: "Visualization methods applied to data. Both human perception and statistical properties inform the methods used to display and visually explore categorical, continuous, time-ordered, map, and high dimensional data. Order and layout effects on tables and graphics. Statistical concepts visually presented include variability, densities, quantiles, conditioning, and hypothesis testing. Interactive graphics include linking, brushing, motion, and the navigation of high dimensional spaces guided via projection indices. Glyphs (e.g., cartoon, statistical, or heatmap) and radial and parallel coordinates.",
    prerequisiteRawText: "Must have completed the following: STAT341 - Computational Statistics and Data Analysis (0.50)"
  },
  {
    code: "STAT443",
    name: "Forecasting",
    subject: "STAT",
    level: 400,
    description: "Modelling techniques for forecasting time series data: smoothing methods, regression including penalty/regularization methods, the Box-Jenkins framework, stationary and non-stationary processes, both with and without seasonal effects. Other topics may include: ARCH/GARCH models, Bayesian methods, dynamic linear models, Markov Chain Monte Carlo simulation, spectral density analysis, and periodograms.",
    prerequisiteRawText: "Must have completed at least 1 of the following: STAT331 - Applied Linear Models (0.50) STAT371 - Applied Linear Models and Process Improvement for Business (0.50) SYDE334 - Applied Statistics (0.50)"
  },
  {
    code: "STAT444",
    name: "Statistical Learning - Advanced Regression",
    subject: "STAT",
    level: 400,
    description: "This course introduces modern applied regression methods for continuous response modelling, emphasizing both explainability and predictive power. Topics cover a wide selection of advanced methods useful to address the challenges arising from real-world and high-dimensional data; methods include robust regression, nonparametric regression such as smoothing splines, kernels, additive models, tree-based methods, boosting and bagging, and penalized linear regression methods such as the ridge regression, lasso, and their variants. Students will gain an appreciation of the mathematical and statistical concepts underlying the methods and also computational experience in applying the methods to real data.",
    prerequisiteRawText: "Complete all of the following Must have completed the following: STAT341 - Computational Statistics and Data Analysis (0.50) Must have completed at least 1 of the following: STAT331 - Applied Linear Models (0.50) STAT371 - Applied Linear Models and Process Improvement for Business (0.50)"
  },
  {
    code: "STAT454",
    name: "Sampling Theory and Practice",
    subject: "STAT",
    level: 400,
    description: "Sources of survey error. Probability sampling designs, estimation, and efficiency comparisons. Distribution theory and confidence intervals. Generalized regression estimation. Software for survey analysis.",
    prerequisiteRawText: "Must have completed at least 1 of the following: STAT332 - Sampling and Experimental Design (0.50) STAT372 - Survey Sampling and Experimental Design Techniques for Business (0.50)"
  },
  {
    code: "STV202",
    name: "Design and Society",
    subject: "STV",
    level: 200,
    description: "The course uses design as a vehicle for examining technology and society interaction, particularly how we design, create, and choose technology. This course has been created to introduce students to various methods to help them view design and technology from a technology-society perspective. The overriding aims of the course are to (a) develop an ability to see through the eyes of others and promote thinking about technology in terms of users as well as producers or creators, (b) develop critical thinking skills, and (c) present design and the choice of technology as an activity involving societal and individual concerns rather than as a purely technical matter. The course does not require advanced technical knowledge and is open to students of all faculties."
  },
  {
    code: "STV205",
    name: "Cybernetics and Society",
    subject: "STV",
    level: 200,
    description: "Cybernetics is the study of the interfaces between humans and machines. This course will present an overview of cybernetics from automation and robotics to prosthetics and wearable computing. The roles of men and women in a post-human era will be discussed along with related themes dealing with gender, cyberspace, politics, and popular culture."
  },
  {
    code: "STV208",
    name: "Artificial Intelligence and Society: Impact, Ethics, and Equity",
    subject: "STV",
    level: 200,
    description: "The objective of this course is to introduce students to ethical and social concerns relating to Artificial Intelligence (AI). These concerns include historical determinism, governance, utopianism, biopower, human rights, robo-ethics, justice, accountability, and fairness. An overview will be provided on these issues as they arise in areas like art, commerce, education, finance, journalism, law, health care, transportation, warfare, and work."
  },
  {
    code: "STV210",
    name: "The Computing Society",
    subject: "STV",
    level: 200,
    description: "This course examines the historical and current relationships between computer technology and society. It explores the impact and consequences of computing from a societal perspective, but also considers various nontechnical factors and values that have shaped computing technology and practice. The scope of the course will range from early mechanical aids, through the mid 20th century invention of electronic digital computers, to the networks and mobile applications of the 21st century. Technological studies relating to gender, education, employment, and war will be used as focal points. Material artifacts will form a core element of the course."
  },
  {
    code: "STV302",
    name: "Information Technology and Society",
    subject: "STV",
    level: 300,
    description: "The course has been designed to provide a framework or set of intellectual tools to help students understand and evaluate technological change. These tools will be applied to the development of information technology, its interaction with society, and possible future scenarios. Selected topics include understanding digitization as culture, visions of the future and the perils of prediction, as well as issues related to application areas such as the home, manufacturing, office work, design and services, education, and law. The course will also consider some of the privacy and personal dignity issues associated with information technology.",
    prerequisiteRawText: "Students must be in level 2A or higher"
  },
  {
    code: "STV304",
    name: "Technology in Canadian Society",
    subject: "STV",
    level: 300,
    description: "The course begins by questioning whether or not there is anything distinctive about Canadian design and its context. Through the use of historical and contemporary cases, this course examines factors influencing design and technology choice in Canada and their outcomes. The future of design is also considered in terms of current trends, issues, challenges and opportunities.",
    prerequisiteRawText: "Students must be in level 2A or higher"
  },
  {
    code: "STV305",
    name: "Technology, Society and the Modern City",
    subject: "STV",
    level: 300,
    description: "Cities may be humanity's most significant invention, where we shape our vision of the civilized life. At the same time, the demands of cities shape our lives in fundamental ways. As most of humanity now lives in cities, the technology of city living increasingly becomes the technology of human life itself. The purpose of this course is to examine the technology of civilized life, with the city itself as both a technological system and a scene of technological living. Topics explored include food, transport, cars, architecture, urban planning, public spaces, sanitation and health, civics and governance, sustainability, and information and communications technology. The Canadian city receives some emphasis.",
    prerequisiteRawText: "Students must be in level 2A or higher"
  },
  {
    code: "STV306",
    name: "Biotechnology and Society",
    subject: "STV",
    level: 300,
    description: "Biotechnologies are currently migrating from the laboratory to a wide range of consumer products. In everything from foods to pharmaceuticals, genetic engineering is entering daily life. The biotechnology revolution will likely have as much of an impact on our lives as the information technology revolution. However, there is a wide and potentially dangerous gap between research and development on the one hand and societal awareness of its impact on the other. This course is intended to help students gain a deeper appreciation for the issues, including ethics, surrounding biotechnology and society. It will do this through an investigation of such interactions between biotechnologies and society as genetics and the law, foods and the media, and soil remediation and the environment. Consideration will also be given to the role of computing in biotech research and in the human genome project.",
    prerequisiteRawText: "Students must be in level 2A or higher"
  },
  {
    code: "STV400",
    name: "Society, Technology and Values: Senior Project",
    subject: "STV",
    level: 400,
    description: "An independent, supervised research project related to the interaction of society, technology and values. Projects may take any format that demonstrates scholarly merit. Formats may include essays, impact studies, designs, computer software, or other media. Students are responsible for proposing suitable projects and are encouraged to seek faculty advice on plausible topics.",
    prerequisiteRawText: "Complete all of the following Students must be in level 4A or higher Enrolled in Society, Technology & Values Option"
  },
  {
    code: "STV401",
    name: "Society, Technology and Values: Advanced Topics",
    subject: "STV",
    level: 400,
    description: "Advanced study of the interaction of society, technology and values in a particular topic area under tutorial guidance by visiting or adjunct faculty.",
    prerequisiteRawText: "Earned at least 0.5 units from STV 100 - 399"
  },
  {
    code: "SYDE544",
    name: "Biomedical Measurement and Signal Processing",
    subject: "SYDE",
    level: 500,
    description: "This course develops an understanding of biomedical measurements through the examination of electromyographic (EMG), electroencephalographic (EEG), and electrocardiographic (ECG) signals. Measurement of human-body position, force, and pressure, and related instrumentation will also be presented. Signal processing techniques will be discussed in the context of extraction and application of useful biomedical signals.",
    prerequisiteRawText: "Complete all of the followingMust have completed at least 1 of the following: BIOL273 - Principles of Human Physiology 1 (0.50)BME284 - Physiological and Biological Systems (0.50)SYDE584 - Physiological Systems and Biomedical Design (0.50)Complete 1 of the followingComplete all of the followingStudents must be in level 3A or higherEnrolled in H-Biomedical EngineeringComplete all of the followingStudents must be in level 3B or higherComplete 1 of the followingEnrolled in H-Systems Design EngineeringEnrolled in Life Physics - Biophysics Specialization"
  },
  {
    code: "SYDE552",
    name: "Computational Neuroscience",
    subject: "SYDE",
    level: 500,
    description: "Introduction to modelling and analysis of neurophysiological systems. Models of synaptic plasticity and learning, with focus on the similarities and differences between neuroscience and deep learning.",
    prerequisiteRawText: "Complete 1 of the followingComplete all of the followingStudents must be in level 3A or higherEnrolled in H-Biomedical EngineeringComplete all of the followingStudents must be in level 3B or higherEnrolled in H-Systems Design Engineering"
  },
  {
    code: "SYDE556",
    name: "Simulating Neurobiological Systems",
    subject: "SYDE",
    level: 500,
    description: "This course develops and applies a general framework for understanding neural computation in the context of recent advances in theoretical and experimental neuroscience. Particular emphasis is placed on understanding representation, nonlinear computation, and dynamics in real neurobiological systems. Students will apply signal processing, control theory, linear algebra, probability theory, and similar quantitative tools for the purpose of modelling sensory, motor, and cognitive systems. Topics covered include single neuron function, neural coding, neural dynamics, attractor networks, learning, statistical inference, locomotion, working memory, etc. Familiarity with neural systems is helpful but not essential.",
    prerequisiteRawText: "Must have completed at least 1 of the following: BME252 - Linear Systems and Signals (0.50)SYDE252 - Linear Systems and Signals (0.50)"
  },
  {
    code: "SYDE572",
    name: "Introduction to Pattern Recognition",
    subject: "SYDE",
    level: 500,
    description: "Pattern recognition as a process of data analysis. Pattern features as components in a random vector representation. Classification techniques; distance measures in feature space, probabilistic (Bayesian) decision theory, linear discriminants. Clustering and feature extraction. Applications; optical character recognition, speech recognition, industrial robot vision, medical diagnosis, remote sensing and satellite image analysis, fault detection and diagnosis in complex systems such as nuclear reactors.",
    prerequisiteRawText: "Complete 1 of the followingComplete all of the followingStudents must be in level 3A or higherEnrolled in H-Biomedical EngineeringComplete all of the followingStudents must be in level 3B or higherEnrolled in H-Systems Design EngineeringComplete all of the followingStudents must be in level 4A or higherEnrolled in H-Mechatronics EngineeringEnrolled in Biomechanics Option, or Mechatronics Option"
  },
  {
    code: "THPERF149",
    name: "Introduction to Critical Design Practices",
    subject: "THPERF",
    level: 100,
    description: "How does design help us think? This studio course introduces students to practice-based methods for generating knowledge. Topics may include prototyping, performance as research, material thinking, multi-modal representation, and experience design. Students will test and explore how we learn differently through creative practices."
  },
  {
    code: "VCULT200",
    name: "Visual Studies Across the Discipline",
    subject: "VCULT",
    level: 200,
    description: "Weekly lectures by visiting faculty introduce students to how visual studies are conducted across and between the disciplines. Recognizing the vastness of the global study of visual culture, this course reinforces how, despite the diversity of media analyzed, various disciplines share related approaches and theories.",
    prerequisiteRawText: "Students must be in level 2A or higher"
  },
  {
    code: "VCULT257",
    name: "Video, New Media and the Digital Turn",
    subject: "VCULT",
    level: 200,
    description: "This course analyzes the shift in visual practices of the 20th century transformed by the arrival of various digital technologies. An emphasis is placed on the increasing interdisciplinarity of new media, as well as their multi-sensory nature."
  }
];
