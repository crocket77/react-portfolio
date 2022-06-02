
# Ethan Pfeiffer's Portfolio

## Description
My portfolio built with react.js where you can read a little about me and download my resume.
deployed on Github and Heroku:
https://crocket77.github.io/react-portfolio/
https://ethanpfeiffer.herokuapp.com/

[My Email for further question!](ethanpfeiff@gmail.com)


For deploying REACT to github
At the command-line prompt, navigate to the project's root directory and install gh-pages as a devDependency, using the following command:
npm install -D gh-pages

Next, modify the package.json file to include the homepage property at the top. This is where the website will be deployed. Use your GitHub username in place of the <username> placeholder, and repository in place of <repository>:
"homepage": "http://<username>.github.io/<repostiory>",

Now add the following code to the scripts property:
"predeploy": "npm run build",
"deploy": "gh-pages -d build

save, add, commit, and push your work to GitHub
Then at the command-line prompt, type the following command to deploy the site:
npm run deploy

