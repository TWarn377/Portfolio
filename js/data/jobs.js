const jobs = [
{
  jobId: 4,
  company: 'RoviSys',
  companyLogo: './img/jobs/rovisys/rovisys-logo.png',
  companyWebsite: 'https://www.rovisys.com/',
  title: 'Software Developer',
  tools: [
      { name: 'Angular 18', url: 'https://angular.io/', icon: './img/tools/icons8-angularjs-48.png'},
      { name: 'Entity Framework', url: 'https://learn.microsoft.com/en-us/ef/', icon: './img/tools/entity-framework.png' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/', icon: './img/tools/icons8-typescript-48.png'},
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: './img/tools/icons8-javascript-48.png' },
      { name: 'MS SQL', url: 'https://www.oracle.com/database/', icon: './img/tools/icons8-oracle-logo-48.png'},
      { name: 'Git/GitHub', url: 'https://git-scm.com/', icon: './img/tools/icons8-git-48.png'},
      { name: 'Azure DevOps', url: 'https://azure.microsoft.com/en-us/products/devops', icon:'./img/tools/Azure Devops.png'},
      { name: 'RabbitMQ', url: 'https://www.rabbitmq.com/', icon:'./img/tools/rabbitmq-logo.svg'},
  ],
  responsibilities: [
      'Led business logic development for a 7-month semiconductor MES project, guiding a team of 6 with support from IoT Lead and software architects.',
      'One of two hand-picked developers selected to foster a client relationship for the company\'s first fully independent Critical Manufacturing project.',
      'Integrated employee skillset and project staffing systems via RabbitMQ.',
      'Built and managed Rockwell SCADA infrastructure, deploying eight VM types and documenting repeatable system builds.'
  ],
  image: '',
  startDate: new Date('5/17/2021'),
  endDate: new Date(),
},
{
  jobId: 3,
  company: 'Ohio University',
  companyLogo: './img/jobs/ohio-university/ohio-university-logo.png',
  companyWebsite: 'https://www.ohio.edu/',
  title: 'Student Software Engineer (2020)',
  tools: [
      { name: 'Angular 8', url: 'https://angular.io/', icon: './img/tools/icons8-angularjs-48.png'},
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/', icon: './img/tools/icons8-typescript-48.png'},
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: './img/tools/icons8-javascript-48.png' },
      { name: 'Oracle DBMS', url: 'https://www.oracle.com/database/', icon: './img/tools/icons8-oracle-logo-48.png'},
      { name: 'Git/GitHub', url: 'https://git-scm.com/', icon: './img/tools/icons8-git-48.png'},
      { name: 'Jira', url: 'https://www.atlassian.com/software/jira', icon:'./img/tools/icons8-jira-48.png'},
  ],
  responsibilities: [
      'Collabrated within a cohort of 4 students guided by multiple mentors.',
      'Developed and reviewed features, improvements, and bugs for new web apps in development.',
      'Worked on 3 apps with cohort, one of which available to the public: <a class="basic-link" title="Ohio University Course Offerings" href="https://webapps.ohio.edu/classes/" target="_blank">Course Offerings</a> &lt;- Check me out in the  &lt;HEAD&gt;!'
  ],
  image: './img/jobs/ohio-university/Course-Offerings.png',
  startDate: new Date('8/24/2020'),
  endDate: new Date('5/02/2021'),
},
{
  jobId: 2,
  company: 'InnoSource (Nationwide Mutual Insurance)',
  companyLogo: './img/jobs/nationwide/nationwide-logo.png',
  companyWebsite: 'https://www.nationwide.com/',
  title: 'Technology Engineer Intern (2020)',
  tools: [
      { name: 'Bash', url: 'https://www.gnu.org/software/bash/', icon: './img/tools/bash-logo-48.png' },
      { name: 'Rocket.Chat', url: 'https://rocket.chat/' , icon: './img/tools/Rocket-chat.png'},
      { name: 'Docker', url: 'https://www.docker.com/', icon: './img/tools/icons8-docker-48.png'},
      { name: 'Concourse CI', url: 'https://concourse-ci.org/', icon: './img/tools/concourse-black.png'},
      { name: 'Jenkins', url: 'https://www.jenkins.io/', icon: './img/tools/icons8-jenkins-48.png'},
  ],
  responsibilities: [
      'Worked within Test Environment Management team to learn specifics on continuous integration.',
      'Created a chatbot to communicate the statuses of environments.',
      'Developed a configurable Bash script to clean an on-prem Linux environment and report storage information.',
      'Containerized a HTML application & built a continuous development pipeline from git to docker enterprise repository.'
  ],
  image: '',
  startDate: new Date('8/07/2020'),
  endDate: new Date('6/01/2020'),
}, 
{
  jobId: 1,
  company: 'Ohio University',
  companyLogo: './img/jobs/ohio-university/ohio-university-logo.png',
  companyWebsite: 'https://www.ohio.edu/',
  title: 'Student Web Developer (2019 - 2020)',
  tools: [
      { name: 'Drupal', url: 'https://www.drupal.org/', icon: './img/tools/Logo_drupal.png'},
      { name: 'CommonSpot', url: 'https://www.paperthin.com/products/commonspot-cloud.cfm', icon: './img/tools/Ubp_8NY__400x400.jpg' },
      { name: 'Microsoft Office', url: 'https://www.microsoft.com/en-us/microsoft-365/microsoft-office?rtc=1', icon: './img/tools/icons8-microsoft-office-2019-48.png'},
      { name: 'Jira', url: 'https://www.atlassian.com/software/jira?&aceid=&adposition=&adgroup=56999361780&campaign=1439934479&creative=542638230149&device=c&keyword=jira&matchtype=e&network=g&placement=&ds_kids=p34164036185&ds_e=GOOGLE&ds_eid=700000001558501&ds_e1=GOOGLE&gclid=CjwKCAjwt7SWBhAnEiwAx8ZLaoikL4R872wYvWKpa3O58BkulAmgOSq6860nNBIJ5u0YwANYKbiWWBoCwhoQAvD_BwE&gclsrc=aw.ds', icon: './img/tools/icons8-jira-48.png'},
  ],
  responsibilities: [
      "Worked simutaniously with 4 other students to inspect and fix webpages in the University's new webCMS (Drupal).",
      'Lead the structural formation of one of the universites subsites the Campus Involvement Center.',
  ],
  image: '',
  startDate: new Date('10/14/2019'),
  endDate: new Date('05/04/2020')
}, 
{
  jobId: 0,
  company: 'Maxion Wheels USA LLC.',
  companyLogo: './img/jobs/maxion-wheels/maxion-logo.png',
  companyWebsite: 'https://www.maxionwheels.com/',
  title: 'IT Intern (2018- 2019)',
  tools: [
      { name: 'WinForms', url: 'https://docs.microsoft.com/en-us/dotnet/desktop/winforms/?view=netdesktop-6.0', icon: './img/tools/entity-framework.png' },
      { name: 'Microsoft Access', url: 'https://www.microsoft.com/en-us/microsoft-365/access', icon: './img/tools/icons8-microsoft-access-2019-48.png'},
      { name: 'Microsoft Excel', url: 'https://www.microsoft.com/en-us/microsoft-365/excel', icon: './img/tools/icons8-microsoft-excel-2019-48.png'},
      { name: 'Microsoft SQL Server', url: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019', icon: './img/tools/icons8-microsoft-sql-server-48.png'},
  ],
  responsibilities: [
      'Single handedly built a windows application to house and display facility performance metrics.',
      'Grasped an understanding of the facilty\'s workflow by conducting meetings with co-workers.',
      'Met with co-workers to gain insight on application design and required metrics.',
  ],
  image: '',
  startDate: new Date('05/04/2018'),
  endDate: new Date('7/28/2019'),
}];

const firstJobStartDate = new Date(Math.min.apply(null, (jobs.map(job => job.startDate))));
const lastJobEndDate = new Date(Math.min.apply(null, (jobs.map(job => job.startDate))));

const GetJobsForYear = (year) => jobs.filter(job => job.startDate.getFullYear() <= year && job.endDate.getFullYear() >= year)
  .sort((job1, job2) => job1.startDate > job2.startDate ? 1 : -1);